// WP35 — Esports degraded mode banner (DEC-OP-028, REQ-F-035-020).

import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

interface EsportsUnavailableBannerProps {
  /** Quando true mostra "stale_warning" (cached data); false -> "unavailable". */
  stale?: boolean;
}

export function EsportsUnavailableBanner(
  props: EsportsUnavailableBannerProps,
): JSX.Element {
  const { t } = useI18n();
  const messageKey = () =>
    props.stale
      ? 'wp35.esports.degraded.stale_warning'
      : 'wp35.esports.unavailable.banner';

  return (
    <div
      role="status"
      class="mb-8 rounded-lg border border-warning/30 bg-warning/5 p-4 text-sm text-warning"
      data-testid="esports-unavailable-banner"
    >
      {t(messageKey())}
    </div>
  );
}

export default EsportsUnavailableBanner;
