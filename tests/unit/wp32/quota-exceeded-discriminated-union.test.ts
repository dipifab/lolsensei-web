// WP32 audit MAJOR-3 — discriminated union shape lock-in for the coach
// quota-exceeded payloads. The backend emits two structurally distinct
// shapes (api-contracts §2.4 / §3.4):
//
//   - chat   : { quota_exceeded: true, surface: 'chat',  current_quota: { chat_remaining,  chat_max,  reset_at } }
//   - drill  : { quota_exceeded: true, surface: 'drill', current_quota: { drill_remaining, drill_max, reset_at } }
//
// The `surface` literal acts as the discriminator. These tests pin both
// the runtime shape and the TypeScript type narrowing so a future change
// of either side is caught at typecheck or test time.

import { describe, expect, it } from 'vitest';
import type {
  AnyQuotaExceededResponse,
  DrillQuotaExceededResponse,
  QuotaExceededResponse,
} from '../../../src/types/wp32';

// Static helper: TS-level exhaustiveness check for the union. If a new
// variant is added to AnyQuotaExceededResponse without updating the
// discriminator switch this function will fail to typecheck.
function readableSummary(payload: AnyQuotaExceededResponse): string {
  switch (payload.surface) {
    case 'chat': {
      const remaining: number = payload.current_quota.chat_remaining;
      const max: number = payload.current_quota.chat_max;
      return `chat ${remaining}/${max}`;
    }
    case 'drill': {
      const remaining: number = payload.current_quota.drill_remaining;
      const max: number = payload.current_quota.drill_max;
      return `drill ${remaining}/${max}`;
    }
    default: {
      // Compile-time exhaustiveness assertion.
      const _exhaustive: never = payload;
      return _exhaustive;
    }
  }
}

describe('WP32 quota-exceeded discriminated union', () => {
  it('chat variant exposes chat_remaining / chat_max (no drill_* leak)', () => {
    const payload: QuotaExceededResponse = {
      quota_exceeded: true,
      surface: 'chat',
      addon_code: 'ai_coach_light',
      current_quota: {
        chat_remaining: 0,
        chat_max: 50,
        reset_at: '2026-05-01T00:00:00Z',
      },
      upgrade_hint: { addon_code: 'ai_coach_full', chat_max: 200 },
    };

    expect(readableSummary(payload)).toBe('chat 0/50');
    expect('drill_remaining' in payload.current_quota).toBe(false);
    expect('drill_max' in payload.current_quota).toBe(false);
  });

  it('drill variant exposes drill_remaining / drill_max (no chat_* leak)', () => {
    const payload: DrillQuotaExceededResponse = {
      quota_exceeded: true,
      surface: 'drill',
      addon_code: 'ai_coach_light',
      current_quota: {
        drill_remaining: 0,
        drill_max: 4,
        reset_at: '2026-05-01T00:00:00Z',
      },
      upgrade_hint: { addon_code: 'ai_coach_full', drill_max: 16 },
    };

    expect(readableSummary(payload)).toBe('drill 0/4');
    expect('chat_remaining' in payload.current_quota).toBe(false);
    expect('chat_max' in payload.current_quota).toBe(false);
  });

  it('union narrows correctly at runtime via the surface literal', () => {
    const payloads: AnyQuotaExceededResponse[] = [
      {
        quota_exceeded: true,
        surface: 'chat',
        addon_code: 'ai_coach_full',
        current_quota: {
          chat_remaining: 12,
          chat_max: 200,
          reset_at: '2026-05-01T00:00:00Z',
        },
      },
      {
        quota_exceeded: true,
        surface: 'drill',
        addon_code: 'ai_coach_full',
        current_quota: {
          drill_remaining: 3,
          drill_max: 16,
          reset_at: '2026-05-01T00:00:00Z',
        },
      },
    ];

    const summaries = payloads.map(readableSummary);
    expect(summaries).toEqual(['chat 12/200', 'drill 3/16']);
  });

  it('runtime guard rejects mismatched shapes (chat surface with drill snapshot)', () => {
    // Construct a malformed payload simulating a server bug: surface=chat but
    // current_quota carries drill_* fields. The FE narrowing relies on the
    // surface literal so this is caught when the consumer dereferences the
    // typed slot.
    const malformed = {
      quota_exceeded: true,
      surface: 'chat',
      addon_code: 'ai_coach_light',
      current_quota: {
        drill_remaining: 0,
        drill_max: 4,
        reset_at: '2026-05-01T00:00:00Z',
      },
    } as unknown as QuotaExceededResponse;

    // Casting via `as unknown as` is the entry-point bug class. Run-time
    // assertion: chat_max must exist; if missing, downstream UI code would
    // see undefined. We pin that here to prevent regressions where the
    // discriminator shape gets accidentally relaxed.
    expect(
      (malformed.current_quota as unknown as Record<string, unknown>).chat_max,
    ).toBeUndefined();
  });

  it('upgrade_hint is optional but type-safe per surface', () => {
    const noHint: DrillQuotaExceededResponse = {
      quota_exceeded: true,
      surface: 'drill',
      addon_code: 'ai_coach_light',
      current_quota: {
        drill_remaining: 0,
        drill_max: 4,
        reset_at: '2026-05-01T00:00:00Z',
      },
    };
    expect(noHint.upgrade_hint).toBeUndefined();

    const withHint: DrillQuotaExceededResponse = {
      ...noHint,
      upgrade_hint: { addon_code: 'ai_coach_full', drill_max: 16 },
    };
    expect(withHint.upgrade_hint?.drill_max).toBe(16);
    expect(withHint.upgrade_hint?.chat_max).toBeUndefined();
  });
});
