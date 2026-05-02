// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-003
// Badge per group sintetico "(unlinked)" (AC-003.5 + AC-005.7).
//
// Renderizza testo i18n `console.ai-logs.group.unlinked.label` con tooltip
// (`title` HTML) i18n `console.ai-logs.group.unlinked.tooltip`. Il valore
// literal `(unlinked)` (con parentesi, ASCII) e' parte del data contract
// stabile lato BE — qui sostituiamo con il label tradotto solo per la UI.

import { useI18n } from '../../i18n';

export default function UnlinkedBadge() {
  const { t } = useI18n();
  return (
    <span
      class="inline-flex items-center gap-1 rounded-full bg-surface-container-highest px-2 py-0.5 text-xs font-medium text-on-surface-variant"
      title={t('console.ai-logs.group.unlinked.tooltip')}
    >
      <span aria-hidden="true">&#9432;</span>
      {t('console.ai-logs.group.unlinked.label')}
    </span>
  );
}
