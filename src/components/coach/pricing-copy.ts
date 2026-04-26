// WP32 F5 — Pure helper for PricingCard CTA copy resolution.
//
// Extracted so unit tests can exercise the copy logic without pulling in the
// SolidJS render runtime.

import type { AddonCode } from '../../types/wp32';

export type PricingTier = 'light' | 'full';

export interface CardCopy {
  ctaKey: string;
  ctaTestId: string;
  /** True when the CTA should be disabled because this is the active tier. */
  isCurrent: boolean;
}

export function resolveCardCopy(
  tier: PricingTier,
  currentAddonCode: AddonCode | null,
): CardCopy {
  const cardCode: AddonCode = tier === 'light' ? 'ai_coach_light' : 'ai_coach_full';
  if (currentAddonCode === cardCode) {
    return {
      ctaKey: 'coach.addons.cta.manage',
      ctaTestId: 'coach-pricing-cta-manage',
      isCurrent: true,
    };
  }
  if (currentAddonCode && currentAddonCode !== cardCode) {
    return {
      ctaKey:
        tier === 'full'
          ? 'coach.addons.cta.switch_to_full'
          : 'coach.addons.cta.switch_to_light',
      ctaTestId: 'coach-pricing-cta-switch',
      isCurrent: false,
    };
  }
  return {
    ctaKey: tier === 'full' ? 'coach.addons.cta.buy_full' : 'coach.addons.cta.buy_light',
    ctaTestId: 'coach-pricing-cta-buy',
    isCurrent: false,
  };
}
