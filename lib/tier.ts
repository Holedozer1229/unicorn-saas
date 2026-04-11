export const TIERS = {
  free: {
    name: 'Free',
    limit: 5,
    price: 0,
  },
  creator: {
    name: 'Creator',
    limit: 50,
    price: 9,
  },
  pro: {
    name: 'Pro',
    limit: 500,
    price: 29,
  },
} as const;

export type TierKey = keyof typeof TIERS;
