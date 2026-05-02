// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-003
// Banner full-width red su 503 audit_unavailable (AC-005.13).
//
// Reso sopra la tabella; la tabella resta visibile ma non interagibile
// (lato page: `aria-disabled` su filtri/Load more). Banner non blocca
// navigation: l'admin puo' lasciare la pagina.

import { useI18n } from '../../i18n';

interface AuditUnavailableBannerProps {
  onRetry: () => void;
}

export default function AuditUnavailableBanner(props: AuditUnavailableBannerProps) {
  const { t } = useI18n();
  return (
    <div
      role="alert"
      class="flex flex-col items-start gap-3 rounded-xl border border-error/40 bg-error/10 px-4 py-3 text-sm text-error md:flex-row md:items-center md:justify-between"
    >
      <div class="flex items-start gap-2">
        <span aria-hidden="true" class="text-base leading-5">&#9888;</span>
        <span>{t('console.ai-logs.error.audit_unavailable')}</span>
      </div>
      <button
        type="button"
        onClick={() => props.onRetry()}
        class="shrink-0 rounded-lg border border-error/40 px-3 py-1 text-xs font-semibold hover:bg-error/15 focus-visible:outline-2 focus-visible:outline-error focus-visible:outline-offset-2"
      >
        {t('console.ai-logs.error.audit_unavailable_retry')}
      </button>
    </div>
  );
}
