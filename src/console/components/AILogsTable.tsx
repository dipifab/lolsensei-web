// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-006
// Tabella principale group list. Renderizza thead + AILogsRow per ogni
// group. La paginazione "Load more" e' gestita dal padre.

import { For } from 'solid-js';
import { useI18n } from '../../i18n';
import type { AILogsCall, AILogsGroup } from '../api/aiLogs';
import AILogsRow from './AILogsRow';

interface AILogsTableProps {
  groups: AILogsGroup[];
  startDate?: string;
  endDate?: string;
  onViewPrompt: (call: AILogsCall) => void;
}

export default function AILogsTable(props: AILogsTableProps) {
  const { t } = useI18n();
  return (
    <div class="overflow-x-auto rounded-xl border border-outline-variant/10 bg-surface-container">
      <table class="w-full text-sm">
        <caption class="sr-only">{t('console.ai-logs.title')}</caption>
        <thead>
          <tr class="bg-surface-container-low">
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.match')}
            </th>
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.user')}
            </th>
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.riot_id')}
            </th>
            <th scope="col" class="px-3 py-3 text-right text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.calls')}
            </th>
            <th scope="col" class="px-3 py-3 text-right text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.cost')}
            </th>
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.first')}
            </th>
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.last')}
            </th>
            <th scope="col" class="px-3 py-3 text-left text-xs uppercase tracking-wider font-medium text-on-surface-variant">
              {t('console.ai-logs.column.types')}
            </th>
          </tr>
        </thead>
        <tbody>
          <For each={props.groups}>
            {(group) => (
              <AILogsRow
                group={group}
                startDate={props.startDate}
                endDate={props.endDate}
                onViewPrompt={props.onViewPrompt}
              />
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}
