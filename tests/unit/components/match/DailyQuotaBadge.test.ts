// WP31 F4-05 — DailyQuotaBadge format helper unit tests.
//
// Imports from `./format` (pure module, no Solid runtime) so the test file
// stays free of `@solidjs/router` / `useI18n` side effects. The full
// component is exercised by Playwright E2E.

import { describe, expect, it } from 'vitest';
import { formatResetTime } from '../../../../src/components/match/format';

describe('formatResetTime', () => {
  it('formats a UTC ISO timestamp as HH:MM', () => {
    expect(formatResetTime('2026-04-27T08:30:00Z')).toBe('08:30');
  });

  it('pads single-digit hours and minutes', () => {
    expect(formatResetTime('2026-04-27T03:05:00Z')).toBe('03:05');
  });

  it('reads the UTC fields irrespective of host timezone offset embedded in ISO', () => {
    // 12:00 in UTC+2 = 10:00 UTC.
    expect(formatResetTime('2026-04-27T12:00:00+02:00')).toBe('10:00');
  });

  it('returns the input unchanged when the date cannot be parsed', () => {
    expect(formatResetTime('not-a-date')).toBe('not-a-date');
  });
});
