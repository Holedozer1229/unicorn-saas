import { checkBilling } from "@/lib/billing/billingEngine";

export function billingGuard(user: any, cost: number) {
  return checkBilling({
    tier: user.tier,
    used: user.usage ?? 0,
    cost,
  });
}
