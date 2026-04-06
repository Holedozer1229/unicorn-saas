import { redis } from "@/lib/redis"

export type RevenueEvent =
  | "ai_used"
  | "login"
  | "upgrade_view"
  | "checkout_started"
  | "checkout_completed"
  | "limit_reached"

export async function trackEvent(userId: string, event: RevenueEvent, meta?: any) {
  await redis.lpush(
    "revenue:events",
    JSON.stringify({
      userId,
      event,
      meta,
      ts: Date.now(),
    })
  )
}
