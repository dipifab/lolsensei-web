// WP32 F5 — QuotaIndicator (CapBanner per F5-08 design §6.5).
//
// Renders the remaining quota for one of the four coach surfaces:
// chat, drill, recap, consolidation. Color scale (per design):
//   - green: > 50% remaining
//   - yellow: 20% .. 50%
//   - red: < 20%
//
// Pure presentational: parent passes a snapshot accessor; this component does
// not fetch on its own. The dashboard refreshes the snapshot after every
// successful API call.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type { RemainingQuota } from '../../types/wp32';
import {
  quotaColorClass,
  readQuotaParts,
  type QuotaSurface,
} from './quota-utils';

export type { QuotaSurface };
export { quotaColorClass, readQuotaParts };

export interface QuotaIndicatorProps {
  /** Snapshot from `GET /api/v1/coach/quota`. `null` while loading. */
  quota: () => RemainingQuota | null;
  /** Which surface to display. Defaults to `chat`. */
  surface?: QuotaSurface;
  /**
   * Reset timestamp ISO 8601. Optional — omitted from the footer when absent.
   */
  resetAt?: () => string | null;
}

export function QuotaIndicator(props: QuotaIndicatorProps): JSX.Element {
  const { t } = useI18n();
  const surface = (): QuotaSurface => props.surface ?? 'chat';

  return (
    <Show
      when={props.quota()}
      keyed
      fallback={
        <p class="text-sm text-on-surface-variant" aria-busy="true">
          {t('coach.chat.loading')}
        </p>
      }
    >
      {(snapshot) => {
        const parts = readQuotaParts(snapshot, surface());
        const colorClass = quotaColorClass(parts.remaining, parts.max);
        const label = t(parts.labelKey)
          .replace('{remaining}', String(parts.remaining ?? 0))
          .replace('{total}', String(parts.max));
        return (
          <div
            class="flex flex-col gap-1"
            role="status"
            data-testid="coach-quota-indicator"
            data-surface={surface()}
          >
            <p class={`font-medium ${colorClass}`}>{label}</p>
            <p class="text-xs text-on-surface-variant">{t('coach.addons.reset_banner')}</p>
          </div>
        );
      }}
    </Show>
  );
}

export default QuotaIndicator;
