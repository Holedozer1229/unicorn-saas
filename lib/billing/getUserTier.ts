import { TIER_LIMITS } from "./tiers"

export function getUserTier(subscription: any) {
  const tier = subscription?.tier

  if (tier && tier in TIER_LIMITS) {
    return tier as keyof typeof TIER_LIMITS
  }

  return "free"
}
