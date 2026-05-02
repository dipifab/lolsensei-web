// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-006
// Tabella nested calls renderizzata quando una row del group e' espansa.
// Calls sono lazy-fetched dal padre (AILogsRow) via fetchAILogsMatchDetail.
//
// AC-005.5: bottone "View prompt" per ogni call. Disabled se
// `has_prompt_log=false`, tooltip i18n `console.ai-logs.modal.prompt_expired`.

import { For, Show } from 'solid-js';
import { useI18n } from '../../i18n';
import type { AILogsCall } from '../api/aiLogs';
import { formatDateTime, formatUsd4, formatInteger } from '../utils/format';

interface AILogsCallsProps {
  calls: AILogsCall[];
  loading: boolean;
  error: string | null;
  onViewPrompt: (call: AILogsCall) => void;
}

export default function AILogsCalls(props: AILogsCallsProps) {
  const { t } = useI18n();
  return (
    <div class="overflow-x-auto rounded-lg border border-outline-variant/10 bg-surface-container-lowest">
      <Show when={props.loading}>
        <div class="px-4 py-3 text-xs text-on-surface-variant" role="status">
          ...
        </div>
      </Show>
      <Show when={props.error}>
        <div class="px-4 py-3 text-xs text-error" role="alert">
          {props.error}
        </div>
      </Show>
      <Show when={!props.loading && !props.error}>
        <table class="w-full text-xs">
          <thead>
            <tr class="bg-surface-container">
              <th scope="col" class="px-3 py-2 text-left font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.timestamp')}
              </th>
              <th scope="col" class="px-3 py-2 text-left font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.type')}
              </th>
              <th scope="col" class="px-3 py-2 text-left font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.model')}
              </th>
              <th scope="col" class="px-3 py-2 text-right font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.cost')}
              </th>
              <th scope="col" class="px-3 py-2 text-right font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.latency')}
              </th>
              <th scope="col" class="px-3 py-2 text-left font-medium text-on-surface-variant">
                {t('console.ai-logs.calls.status')}
              </th>
              <th scope="col" class="px-3 py-2 text-right font-medium text-on-surface-variant">
                <span class="sr-only">{t('console.ai-logs.modal.view_prompt')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={props.calls}>
              {(call) => (
                <tr class="border-t border-outline-variant/10">
                  <td class="px-3 py-2 text-on-surface-variant whitespace-nowrap">
                    {formatDateTime(call.created_at)}
                  </td>
                  <td class="px-3 py-2 text-on-surface">{call.request_type}</td>
                  <td class="px-3 py-2 font-mono text-on-surface-variant">
                    {call.model_used}
                  </td>
                  <td class="px-3 py-2 text-right font-mono text-on-surface">
                    {call.cost_usd === null ? '-' : formatUsd4(call.cost_usd)}
                  </td>
                  <td class="px-3 py-2 text-right text-on-surface-variant">
                    {formatInteger(call.latency_ms)} ms
                  </td>
                  <td class="px-3 py-2">
                    <Show
                      when={call.aborted}
                      fallback={
                        <span class="text-on-surface-variant">{call.status}</span>
                      }
                    >
                      <span class="text-warning">
                        {t('console.ai-logs.calls.aborted_yes')}
                      </span>
                    </Show>
                  </td>
                  <td class="px-3 py-2 text-right">
                    <button
                      type="button"
                      disabled={!call.has_prompt_log}
                      title={
                        call.has_prompt_log
                          ? undefined
                          : t('console.ai-logs.modal.prompt_expired')
                      }
                      onClick={() => props.onViewPrompt(call)}
                      class="rounded-md border border-outline-variant px-2 py-1 text-xs font-semibold text-on-surface hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                    >
                      {t('console.ai-logs.modal.view_prompt')}
                    </button>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </Show>
    </div>
  );
}
