import type { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: null,
    period: '/mo',
    features: [
      'Champion select advice',
      'Game start strategy',
      'Real-time item advisor',
    ],
    cta: 'Continue for Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '€7.99',
    period: '/mo',
    features: [
      'Champion select advice',
      'Game start strategy',
      'Real-time item advisor',
      'Priority server access',
    ],
    cta: 'Unlock Pro Mastery',
    highlighted: true,
  },
];

export interface PerformanceFeature {
  icon: string;
  title: string;
  description: string;
  proExclusive?: boolean;
}

export const PERFORMANCE_FEATURES: PerformanceFeature[] = [
  {
    icon: 'groups',
    title: 'Champion Select',
    description:
      'Adaptive drafting advice that reads your pool, the enemy comp, and meta shifts in real-time.',
  },
  {
    icon: 'rocket_launch',
    title: 'Early Game Plan',
    description:
      'Lane strategy and matchup insights so you know your win conditions before minions spawn.',
  },
  {
    icon: 'shopping_cart',
    title: 'Item Evolution',
    description:
      'Dynamic item builds that react to gold diff, enemy purchases, and game state as it unfolds.',
    proExclusive: true,
  },
];
