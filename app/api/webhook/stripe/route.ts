import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getUserTier } from "@/lib/billing/getUserTier"
import { enforceAICap } from "@/lib/billing/enforceLimit"

export async function POST(req: Request) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single()

  const tier = getUserTier(subscription)

  const limitCheck = await enforceAICap(user.id, tier)

  if (!limitCheck.allowed) {
    return NextResponse.json(
      {
        error: "Monthly limit reached",
        usage: limitCheck.usage,
        limit: limitCheck.limit,
      },
      { status: 429 }
    )
  }

  // 🔥 YOUR AI LOGIC HERE
  const result = {
    message: "AI response generated successfully 🦄",
  }

  return NextResponse.json(result)
}
