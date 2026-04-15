import type { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    nameKey: 'pricing.free.name',
    price: '€0',
    ctaKey: 'pricing.free.cta',
    features: [
      { textKey: 'pricing.free.feature1', included: true },
      { textKey: 'pricing.free.feature2', included: true },
      { textKey: 'pricing.free.feature3', included: true },
    ],
  },
  {
    nameKey: 'pricing.pro.name',
    price: '€7.99',
    period: '/mo',
    ctaKey: 'pricing.pro.cta',
    features: [
      { textKey: 'pricing.pro.feature1', included: true },
      { textKey: 'pricing.pro.feature2', included: true },
      { textKey: 'pricing.pro.feature3', included: true },
      { textKey: 'pricing.pro.feature4', included: true, proBadge: true },
    ],
    highlighted: true,
  },
];

export interface PerformanceFeature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  proExclusive?: boolean;
}

export const PERFORMANCE_FEATURES: PerformanceFeature[] = [
  {
    icon: 'groups',
    titleKey: 'pricing.performance.champSelect.title',
    descriptionKey: 'pricing.performance.champSelect.description',
  },
  {
    icon: 'rocket_launch',
    titleKey: 'pricing.performance.earlyGame.title',
    descriptionKey: 'pricing.performance.earlyGame.description',
  },
  {
    icon: 'shopping_cart',
    titleKey: 'pricing.performance.itemEvolution.title',
    descriptionKey: 'pricing.performance.itemEvolution.description',
    proExclusive: true,
  },
];
