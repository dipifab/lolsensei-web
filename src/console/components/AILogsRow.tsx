// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-006
// Singola row group + expand inline (AC-005.3).
//
// Click su row toggles expand state locale; al primo expand fetch async via
// `fetchAILogsMatchDetail`. La nested calls table riceve calls + flag
// loading/error.
//
// AC-005.10: rendering soft-deleted user con DeletedUserBadge.
// AC-001.6 / OP-024: tooltip su `first_call_at` se window > 5min — segnala
// che il group include champ-select calls (durata tipica 25-35 min).

import { For, Show, createSignal } from 'solid-js';
import { useI18n } from '../../i18n';
import {
  fetchAILogsMatchDetail,
  type AILogsCall,
  type AILogsGroup,
} from '../api/aiLogs';
import { formatDateTime, formatUsd4, formatInteger } from '../utils/format';
import UnlinkedBadge from './UnlinkedBadge';
import DeletedUserBadge from './DeletedUserBadge';
import AILogsCalls from './AILogsCalls';

const UNLINKED = '(unlinked)';
const FIVE_MIN_MS = 5 * 60 * 1000;

interface AILogsRowProps {
  group: AILogsGroup;
  startDate?: string;
  endDate?: string;
  onViewPrompt: (call: AILogsCall) => void;
}

export default function AILogsRow(props: AILogsRowProps) {
  const { t } = useI18n();
  const [expanded, setExpanded] = createSignal(false);
  const [calls, setCalls] = createSignal<AILogsCall[]>([]);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [fetched, setFetched] = createSignal(false);

  const isUnlinked = () => props.group.riot_match_id === UNLINKED;

  const isWindowWide = () => {
    const first = new Date(props.group.first_call_at).getTime();
    const last = new Date(props.group.last_call_at).getTime();
    return Number.isFinite(first) && Number.isFinite(last)
      && last - first > FIVE_MIN_MS;
  };

  async function loadCalls() {
    if (fetched() || loading()) return;
    setLoading(true);
    setError(null);
    try {
      const detail = await fetchAILogsMatchDetail(props.group.riot_match_id, {
        user_id: isUnlinked() ? undefined : props.group.user_id,
        start_date: isUnlinked() ? props.startDate : undefined,
        end_date: isUnlinked() ? props.endDate : undefined,
        call_offset: 0,
        call_limit: 200,
      });
      setCalls(detail.calls);
      setFetched(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('console.ai-logs.error.generic'));
    } finally {
      setLoading(false);
    }
  }

  const toggle = () => {
    const next = !expanded();
    setExpanded(next);
    if (next) {
      void loadCalls();
    }
  };

  return (
    <>
      <tr class="border-t border-outline-variant/10 hover:bg-surface-container-high/40">
        <td class="px-3 py-2">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded()}
            aria-label={
              expanded()
                ? t('console.ai-logs.row.collapse')
                : t('console.ai-logs.row.expand')
            }
            class="flex w-full items-center gap-2 text-left text-sm text-on-surface focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            <span aria-hidden="true">{expanded() ? '▼' : '▶'}</span>
            <Show
              when={!isUnlinked()}
              fallback={<UnlinkedBadge />}
            >
              <span class="font-mono text-xs">{props.group.riot_match_id}</span>
            </Show>
          </button>
        </td>
        <td class="px-3 py-2 text-sm">
          <Show
            when={props.group.user_email_hashed}
            fallback={<span class="text-on-surface">{props.group.user_email}</span>}
          >
            <DeletedUserBadge userEmail={props.group.user_email} />
          </Show>
        </td>
        <td class="px-3 py-2 text-sm">
          <Show
            when={props.group.user_riot_id}
            fallback={<span class="text-on-surface-variant">&#8212;</span>}
          >
            <span class="font-mono text-xs text-on-surface">{props.group.user_riot_id}</span>
          </Show>
        </td>
        <td class="px-3 py-2 text-right text-sm font-medium text-on-surface">
          {formatInteger(props.group.total_calls)}
        </td>
        <td class="px-3 py-2 text-right text-sm font-mono text-on-surface">
          {formatUsd4(props.group.total_cost_usd)}
        </td>
        <td class="px-3 py-2 text-sm text-on-surface-variant whitespace-nowrap">
          <span
            title={
              isWindowWide()
                ? t('console.ai-logs.tooltip.first_call_includes_champ_select')
                : undefined
            }
            classList={{ 'underline decoration-dotted decoration-outline': isWindowWide() }}
          >
            {formatDateTime(props.group.first_call_at)}
          </span>
        </td>
        <td class="px-3 py-2 text-sm text-on-surface-variant whitespace-nowrap">
          {formatDateTime(props.group.last_call_at)}
        </td>
        <td class="px-3 py-2 text-sm text-on-surface-variant">
          <div class="flex flex-wrap gap-1">
            <For each={props.group.request_types}>
              {(rt) => (
                <span class="rounded-full bg-surface-container-highest px-2 py-0.5 text-xs">
                  {rt}
                </span>
              )}
            </For>
          </div>
        </td>
      </tr>
      <Show when={expanded()}>
        <tr>
          <td colSpan={8} class="bg-surface-container/40 px-3 py-3">
            <AILogsCalls
              calls={calls()}
              loading={loading()}
              error={error()}
              onViewPrompt={props.onViewPrompt}
            />
          </td>
        </tr>
      </Show>
    </>
  );
}
