import type { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '€0',
    ctaText: 'Start Learning Free',
    features: [
      { text: 'Champion select coaching', included: true },
      { text: 'Game start strategy guide', included: true },
      { text: 'Real-time build advisor', included: true },
    ],
  },
  {
    name: 'Pro',
    price: '€7.99',
    period: '/mo',
    ctaText: 'Upgrade Your Learning',
    features: [
      { text: 'Champion select coaching', included: true },
      { text: 'Game start strategy guide', included: true },
      { text: 'Real-time build advisor', included: true },
      { text: 'Priority server access', included: true, proBadge: true },
    ],
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
      'Understand your draft with AI coaching that reads your pool, the enemy comp, and current meta.',
  },
  {
    icon: 'rocket_launch',
    title: 'Early Game Guide',
    description:
      'Learn your lane matchup and win conditions so you start every game with a clear plan.',
  },
  {
    icon: 'shopping_cart',
    title: 'Build Advisor',
    description:
      'Understand why items change based on gold difference, enemy purchases, and evolving game state.',
    proExclusive: true,
  },
];
