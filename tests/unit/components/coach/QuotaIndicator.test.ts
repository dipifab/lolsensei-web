// WP32 F5 — QuotaIndicator pure helper unit tests.
//
// Imports from `./quota-utils` (pure module, no Solid runtime) so the test
// file stays free of `@solidjs/router` / `useI18n` side effects. The full
// component is exercised by Playwright E2E.

import { describe, expect, it } from 'vitest';
import {
  quotaColorClass,
  readQuotaParts,
} from '../../../../src/components/coach/quota-utils';
import type { RemainingQuota } from '../../../../src/types/wp32';

const FULL_QUOTA: RemainingQuota = {
  chat_remaining: 200,
  chat_max: 200,
  drill_remaining: 16,
  drill_max: 16,
  recap_remaining: 4,
  recap_max: 4,
  consolidation_remaining: 4,
  consolidation_max: 4,
};

const LIGHT_QUOTA: RemainingQuota = {
  chat_remaining: 5,
  chat_max: 50,
  drill_remaining: 1,
  drill_max: 4,
  recap_remaining: 4,
  recap_max: 4,
  consolidation_remaining: null,
  consolidation_max: 0,
};

describe('quotaColorClass', () => {
  it('returns green when more than 50% remains', () => {
    expect(quotaColorClass(40, 50)).toBe('text-green-600');
  });

  it('returns yellow on the 20%-50% band', () => {
    expect(quotaColorClass(15, 50)).toBe('text-yellow-600');
    expect(quotaColorClass(10, 50)).toBe('text-yellow-600');
  });

  it('returns red below 20%', () => {
    expect(quotaColorClass(5, 50)).toBe('text-red-600');
    expect(quotaColorClass(0, 50)).toBe('text-red-600');
  });

  it('returns neutral when remaining is null (light tier consolidation)', () => {
    expect(quotaColorClass(null, 0)).toBe('text-on-surface-variant');
  });

  it('returns neutral when max is zero', () => {
    expect(quotaColorClass(0, 0)).toBe('text-on-surface-variant');
  });
});

describe('readQuotaParts', () => {
  it('extracts chat surface counters', () => {
    const parts = readQuotaParts(LIGHT_QUOTA, 'chat');
    expect(parts.remaining).toBe(5);
    expect(parts.max).toBe(50);
    expect(parts.labelKey).toBe('coach.addons.cap.chat');
  });

  it('extracts drill surface counters', () => {
    const parts = readQuotaParts(LIGHT_QUOTA, 'drill');
    expect(parts.remaining).toBe(1);
    expect(parts.max).toBe(4);
    expect(parts.labelKey).toBe('coach.addons.cap.drill');
  });

  it('extracts recap surface counters', () => {
    const parts = readQuotaParts(LIGHT_QUOTA, 'recap');
    expect(parts.remaining).toBe(4);
    expect(parts.max).toBe(4);
    expect(parts.labelKey).toBe('coach.addons.cap.recap');
  });

  it('extracts consolidation surface counters (full tier)', () => {
    const parts = readQuotaParts(FULL_QUOTA, 'consolidation');
    expect(parts.remaining).toBe(4);
    expect(parts.max).toBe(4);
  });

  it('keeps consolidation_remaining=null on light tier', () => {
    const parts = readQuotaParts(LIGHT_QUOTA, 'consolidation');
    expect(parts.remaining).toBeNull();
    expect(parts.max).toBe(0);
  });
});
