// Pricing tiers are now fetched at runtime via `services/pricing-api.ts`
// (contract: dev-repository/design/api-contracts-wp10.md §1.1).
// The previously hardcoded `PRICING_PLANS` array has been removed — WP10 M-2.

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
