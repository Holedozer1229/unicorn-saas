import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { generateRevenueInsight } from "@/lib/revenue/engine"

export async function GET() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const insight = await generateRevenueInsight(user.id)

  return NextResponse.json(insight)
}
