import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { MonetizationClient } from "./monetization-client"
import { TIER_LIMITS } from "@/lib/types"
import { getAIGenerationCount } from "@/lib/redis"

export default async function MonetizationPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const [{ data: profile }, { data: subscription }, { data: suggestions }] =
    await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single(),
      supabase.from("subscriptions").select("*").eq("user_id", user.id).single(),
      supabase
        .from("monetization_suggestions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
    ])

  /**
   * ✅ FIX: Strictly type-safe tier resolution
   */
  const fallbackTier = "free"

  const tierRaw = subscription?.tier ?? fallbackTier

  const tier: keyof typeof TIER_LIMITS =
    tierRaw in TIER_LIMITS
      ? (tierRaw as keyof typeof TIER_LIMITS)
      : fallbackTier

  const limits = TIER_LIMITS[tier]

  const aiGenerations = await getAIGenerationCount(user.id)

  const remainingGenerations =
    limits.aiGenerationsPerMonth === -1
      ? -1
      : Math.max(limits.aiGenerationsPerMonth - aiGenerations, 0)

  return (
    <MonetizationClient
      profile={profile}
      suggestions={suggestions || []}
      tier={tier}
      remainingGenerations={remainingGenerations}
    />
  )
}
