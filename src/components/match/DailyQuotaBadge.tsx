// WP31 F4-05 — Daily review quota badge (OP-033).
//
// Renders the rolling 24h post-game-review counter (`used / limit`) and the
// reset timestamp returned by `GET /api/v1/premium/quota/post-game-review`.
// The component is purposely state-light: it expects a quota accessor from
// the parent (typically a `createAsync` result) so the route handler owns
// the fetch lifecycle and can pass the same accessor to the
// `<GenerateReviewCTA>` for tooltip wiring.
//
// Naming: the file exports both `DailyQuotaBadge` (design name) and
// `QuotaBadge` (alias requested in the F4 task brief) — same component,
// kept under one definition to avoid drift.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type { QuotaResponse } from '../../types/wp31';
import { formatResetTime } from './format';

export { formatResetTime };

export interface DailyQuotaBadgeProps {
  /** Current quota snapshot, or `null`/`undefined` while loading. */
  quota: QuotaResponse | null | undefined | (() => QuotaResponse | null | undefined);
}

function readQuota(
  q: DailyQuotaBadgeProps['quota'],
): QuotaResponse | null | undefined {
  return typeof q === 'function' ? q() : q;
}


export function DailyQuotaBadge(props: DailyQuotaBadgeProps): JSX.Element {
  const { t } = useI18n();
  const quota = () => readQuota(props.quota);

  const remaining = (): number => {
    const q = quota();
    if (!q) return 0;
    return Math.max(0, q.limit - q.used);
  };

  const exhausted = (): boolean => {
    const q = quota();
    if (!q) return false;
    return q.used >= q.limit;
  };

  return (
    <Show when={quota() != null} fallback={
      <span
        class="inline-flex items-center px-3 py-1 rounded-full bg-surface-variant/10 text-sm text-on-surface-variant"
        data-testid="quota-badge-loading"
        aria-hidden="true"
      >
        ...
      </span>
    }>
      {(() => {
        const q = quota()!;
        const ariaLabel = t('match.quota.badge.aria')
          .replace('{used}', String(q.used))
          .replace('{limit}', String(q.limit));
        return (
          <span
            class={
              exhausted()
                ? 'inline-flex items-center px-3 py-1 rounded-full bg-error/10 text-error text-sm font-medium'
                : 'inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'
            }
            data-testid="quota-badge"
            data-state={exhausted() ? 'exhausted' : 'active'}
            aria-label={ariaLabel}
            title={t('match.quota.badge.reset_at').replace('{time}', formatResetTime(q.reset_at))}
          >
            <Show
              when={!exhausted()}
              fallback={t('match.quota.badge.full')}
            >
              {t('match.quota.badge.label')
                .replace('{used}', String(remaining()))
                .replace('{limit}', String(q.limit))}
            </Show>
          </span>
        );
      })()}
    </Show>
  );
}

/** Alias requested by the F4 brief — same component as `DailyQuotaBadge`. */
export const QuotaBadge = DailyQuotaBadge;

export default DailyQuotaBadge;
