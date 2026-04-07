export function enforceAICap(
  tier: string,
  usage: number,
  tokens: number
) {
  const limits = {
    free: 10_000,
    creator: 100_000,
    pro: 1_000_000,
  };

  const limit =
    limits[tier as keyof typeof limits] ?? limits.free;

  const remaining = limit - usage;

  if (remaining <= 0) {
    return {
      allowed: false,
      remaining: 0,
      reason: "Daily limit reached",
    };
  }

  return {
    allowed: true,
    remaining: remaining - tokens,
  };
}
