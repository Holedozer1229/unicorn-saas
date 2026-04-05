import { createClient } from "@/lib/supabase/server"

export async function syncUserTier(userId: string, subscription: any) {
  const supabase = await createClient()

  const priceId = subscription?.items?.data?.[0]?.price?.id
  const status = subscription?.status

  let tier: "free" | "creator" | "pro" = "free"

  if (status === "active" || status === "trialing") {
    if (priceId === process.env.STRIPE_PRICE_CREATOR) tier = "creator"
    if (priceId === process.env.STRIPE_PRICE_PRO) tier = "pro"
  }

  await supabase
    .from("subscriptions")
    .upsert({
      user_id: userId,
      stripe_price_id: priceId,
      status,
      tier,
      updated_at: new Date().toISOString(),
    })
}
