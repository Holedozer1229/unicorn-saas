import { SubscriptionTier } from "@/lib/types"

export function resolveTier(raw: any): SubscriptionTier {
  if (raw === "free" || raw === "creator" || raw === "pro") {
    return raw
  }
  return "free"
}
