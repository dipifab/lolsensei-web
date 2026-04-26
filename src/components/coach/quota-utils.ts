// WP32 F5 — Pure helpers for QuotaIndicator.
//
// Extracted into a dedicated module so unit tests can import them without
// pulling in the SolidJS render runtime (and transitively `@solidjs/router`,
// which crashes when imported outside a render context). Mirror the WP31
// `match/format.ts` pattern.

import type { RemainingQuota } from '../../types/wp32';

export type QuotaSurface = 'chat' | 'drill' | 'recap' | 'consolidation';

export interface QuotaParts {
  remaining: number | null;
  max: number;
  labelKey: string;
}

export function readQuotaParts(snapshot: RemainingQuota, surface: QuotaSurface): QuotaParts {
  switch (surface) {
    case 'chat':
      return {
        remaining: snapshot.chat_remaining,
        max: snapshot.chat_max,
        labelKey: 'coach.addons.cap.chat',
      };
    case 'drill':
      return {
        remaining: snapshot.drill_remaining,
        max: snapshot.drill_max,
        labelKey: 'coach.addons.cap.drill',
      };
    case 'recap':
      return {
        remaining: snapshot.recap_remaining,
        max: snapshot.recap_max,
        labelKey: 'coach.addons.cap.recap',
      };
    case 'consolidation':
      return {
        remaining: snapshot.consolidation_remaining,
        max: snapshot.consolidation_max,
        labelKey: 'coach.addons.cap.recap',
      };
  }
}

/**
 * Maps `(remaining, max)` to the design's color scale:
 *   - >50%: green
 *   - 20%..50%: yellow
 *   - <20%: red
 *   - null / max=0: neutral (light tier consolidation surface)
 */
export function quotaColorClass(remaining: number | null, max: number): string {
  if (remaining === null || max <= 0) return 'text-on-surface-variant';
  const ratio = remaining / max;
  if (ratio > 0.5) return 'text-green-600';
  if (ratio >= 0.2) return 'text-yellow-600';
  return 'text-red-600';
}
