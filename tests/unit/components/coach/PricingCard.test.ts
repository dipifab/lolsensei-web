// WP32 F5 — resolveCardCopy pure helper unit tests.
//
// Imports from `./pricing-copy` (pure module, no Solid runtime) so the test
// file stays free of the router/i18n side effects.

import { describe, expect, it } from 'vitest';
import { resolveCardCopy } from '../../../../src/components/coach/pricing-copy';

describe('resolveCardCopy', () => {
  it('shows "Buy Light" for free user looking at light card', () => {
    const copy = resolveCardCopy('light', null);
    expect(copy.ctaKey).toBe('coach.addons.cta.buy_light');
    expect(copy.isCurrent).toBe(false);
  });

  it('shows "Buy Full" for free user looking at full card', () => {
    const copy = resolveCardCopy('full', null);
    expect(copy.ctaKey).toBe('coach.addons.cta.buy_full');
    expect(copy.isCurrent).toBe(false);
  });

  it('marks the active card with manage CTA + isCurrent flag', () => {
    const copy = resolveCardCopy('light', 'ai_coach_light');
    expect(copy.ctaKey).toBe('coach.addons.cta.manage');
    expect(copy.isCurrent).toBe(true);
  });

  it('shows "Switch to Full" when light user looks at full card', () => {
    const copy = resolveCardCopy('full', 'ai_coach_light');
    expect(copy.ctaKey).toBe('coach.addons.cta.switch_to_full');
    expect(copy.isCurrent).toBe(false);
  });

  it('shows "Switch to Light" when full user looks at light card', () => {
    const copy = resolveCardCopy('light', 'ai_coach_full');
    expect(copy.ctaKey).toBe('coach.addons.cta.switch_to_light');
    expect(copy.isCurrent).toBe(false);
  });

  it('marks Full active card as isCurrent', () => {
    const copy = resolveCardCopy('full', 'ai_coach_full');
    expect(copy.ctaKey).toBe('coach.addons.cta.manage');
    expect(copy.isCurrent).toBe(true);
  });
});
