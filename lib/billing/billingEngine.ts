export type Tier = "free" | "creator" | "pro";

const limits: Record<Tier, number> = {
  free: 10_000,
  creator: 100_000,
  pro: 1_000_000,
};

export function checkBilling({
  tier,
  used,
  cost,
}: {
  tier: Tier;
  used: number;
  cost: number;
}) {
  const limit = limits[tier];

  const remaining = limit - used;

  if (remaining - cost <= 0) {
    return {
      allowed: false,
      remaining: 0,
      limit,
    };
  }

  return {
    allowed: true,
    remaining: remaining - cost,
    limit,
  };
}
