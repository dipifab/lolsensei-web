// WP31 F4-06 — HighlightSection format helper unit tests.

import { describe, expect, it } from 'vitest';
import { formatGameTime } from '../../../../src/components/match/format';

describe('formatGameTime', () => {
  it('formats milliseconds as M:SS', () => {
    expect(formatGameTime(425000)).toBe('7:05');
    expect(formatGameTime(540000)).toBe('9:00');
  });

  it('pads seconds to two digits', () => {
    expect(formatGameTime(63000)).toBe('1:03');
    expect(formatGameTime(60000)).toBe('1:00');
  });

  it('clamps negative values to 0:00', () => {
    expect(formatGameTime(-100)).toBe('0:00');
  });

  it('handles long matches without collapsing minutes', () => {
    // 65 minutes -> "65:00" (no hour rollover, intentional for at-a-glance UX).
    expect(formatGameTime(65 * 60_000)).toBe('65:00');
  });
});
