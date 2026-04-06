export const TIERS = {
  free: {
    name: 'Free',
    limit: 5,           // Daily/monthly idea scores
    price: 0,
  },
  creator: {
    name: 'Creator',
    limit: 50,
    price: 9,           // Example monthly price in USD
  },
  pro: {
    name: 'Pro',
    limit: 500,
    price: 29,
  },
} as const;

export type TierKey = keyof typeof TIERS;
