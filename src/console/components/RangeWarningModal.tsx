// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-004
// Modal di conferma su date range > 30 giorni (AC-005.9).
//
// Il backend rifiuta range >30d con 422 `range_too_long` se la query non
// ha `?allow_long_range=true`. Quando l'utente seleziona un range piu'
// largo, il padre intercetta la submit e apre questo modal: su confirm
// viene rifatta la fetch con `allowLongRange=true`; su cancel non si
// emette nessuna richiesta.
//
// Riusa `ConsoleDialog` (a11y: focus trap + ESC + role=dialog gia'
// presenti nel componente baseline).

import ConsoleDialog from './ConsoleDialog';
import { useI18n } from '../../i18n';

interface RangeWarningModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function RangeWarningModal(props: RangeWarningModalProps) {
  const { t } = useI18n();
  return (
    <ConsoleDialog
      open={props.open}
      onClose={() => props.onCancel()}
      title={t('console.ai-logs.range_warning.title')}
      width="md"
      footer={
        <>
          <button
            type="button"
            onClick={() => props.onCancel()}
            class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            {t('console.ai-logs.range_warning.cancel')}
          </button>
          <button
            type="button"
            onClick={() => props.onConfirm()}
            class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            {t('console.ai-logs.range_warning.continue')}
          </button>
        </>
      }
    >
      <p class="text-sm text-on-surface-variant">
        {t('console.ai-logs.range_warning.body')}
      </p>
    </ConsoleDialog>
  );
}
