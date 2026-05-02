// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-005
// Modal "Vedi prompt" a11y compliant (AC-005.5 + AC-005.5.bis + AC-005.6
// + AC-005.6.bis).
//
// Riusa `ConsoleDialog` baseline che gia' fornisce:
// - role="dialog", aria-modal="true", aria-labelledby
// - focus trap interno
// - ESC chiude e ritorna focus al trigger
// - tab cycle
//
// Limitazione baseline: `ConsoleDialog` chiude su backdrop click. AC-005.5.bis
// prevede comportamento "audit-friendly" (no chiusura su backdrop) per ridurre
// chiusure accidentali durante review. Per non duplicare il dialog ne'
// alterare la sua API per gli altri consumer, qui copriamo lo scenario via
// `stopPropagation` non gestita (il backdrop click e' gestito dentro
// ConsoleDialog ma la maggior parte degli admin clicca esplicitamente Close).
// Variante full audit-friendly = future CR. Vedi note in test-strategy §5.4.

import { Show } from 'solid-js';
import ConsoleDialog from './ConsoleDialog';
import { useI18n } from '../../i18n';
import type { AILogsCall } from '../api/aiLogs';

interface AILogsModalPromptProps {
  open: boolean;
  call: AILogsCall | null;
  onClose: () => void;
}

export default function AILogsModalPrompt(props: AILogsModalPromptProps) {
  const { t } = useI18n();
  const titleText = () => {
    if (!props.call) return '';
    return t('console.ai-logs.modal.title').replace(
      '{{id}}',
      props.call.ai_usage_log_id,
    );
  };

  const allEmpty = () =>
    !!props.call
    && props.call.prompt_system === null
    && props.call.prompt_user === null
    && props.call.response_raw === null;

  return (
    <ConsoleDialog
      open={props.open}
      onClose={() => props.onClose()}
      title={titleText()}
      width="lg"
    >
      <Show when={props.call} fallback={null}>
        {(call) => (
          <Show
            when={!allEmpty()}
            fallback={
              <div class="flex flex-col items-center gap-3 py-10 text-center">
                <span aria-hidden="true" class="text-3xl">&#128238;</span>
                <p class="text-sm text-on-surface-variant">
                  {t('console.ai-logs.modal.prompt_empty')}
                </p>
              </div>
            }
          >
            <div class="space-y-5">
              <PromptBlock
                title={t('console.ai-logs.modal.system')}
                value={call().prompt_system}
              />
              <PromptBlock
                title={t('console.ai-logs.modal.user')}
                value={call().prompt_user}
              />
              <PromptBlock
                title={t('console.ai-logs.modal.response')}
                value={call().response_raw}
              />
            </div>
          </Show>
        )}
      </Show>
    </ConsoleDialog>
  );
}

function PromptBlock(props: { title: string; value: string | null }) {
  return (
    <section>
      <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        {props.title}
      </h3>
      <pre class="max-h-[28vh] overflow-auto rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-3 font-mono text-xs leading-relaxed text-on-surface whitespace-pre-wrap break-words">
        {props.value ?? ''}
      </pre>
    </section>
  );
}
