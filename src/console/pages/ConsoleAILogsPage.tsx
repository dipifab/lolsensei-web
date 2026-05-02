// WP-AI-LOGS-VIEWER (CR-061) — TASK-6-006
// Page principale `/console/ai-logs`.
//
// Orchestrazione:
// 1. Filtri (AILogsFilters) -> trattenuti localmente, applicati su click "Apply"
// 2. Resource fetch (useAILogsByMatch) con auto-default last 7d quando
//    startDate/endDate vuoti
// 3. Range >30d -> RangeWarningModal -> retry con allow_long_range=true
// 4. Tabella + Load more (server-side pagination, 50/page)
// 5. Banner 503 audit_unavailable + countdown 30s su 429
// 6. Modal "View prompt" condivisa per tutte le row

import {
  Show,
  createMemo,
  createSignal,
  createEffect,
} from 'solid-js';
import PageHeader from '../components/PageHeader';
import ConsoleSkeleton from '../components/ConsoleSkeleton';
import ConsoleEmptyState from '../components/ConsoleEmptyState';
import AuditUnavailableBanner from '../components/AuditUnavailableBanner';
import RangeWarningModal from '../components/RangeWarningModal';
import AILogsFilters, {
  type AILogsFiltersValue,
} from '../components/AILogsFilters';
import AILogsTable from '../components/AILogsTable';
import AILogsModalPrompt from '../components/AILogsModalPrompt';
import { useToast } from '../contexts/toast-context';
import { useI18n } from '../../i18n';
import {
  fetchAILogsByMatch,
  RateLimitError,
  AuditUnavailableError,
  RangeTooLongError,
  type AILogsCall,
  type AILogsGroup,
  type AILogsListFilters,
} from '../api/aiLogs';

const PAGE_SIZE = 50;
const RATE_LIMIT_COUNTDOWN_S = 30;
const MAX_RANGE_DAYS = 30;
const DEFAULT_RANGE_DAYS = 7;

function formatIsoDate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function defaultStart(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - DEFAULT_RANGE_DAYS);
  return formatIsoDate(d);
}

function defaultEnd(): string {
  return formatIsoDate(new Date());
}

function rangeDaysExceedsCap(start: string, end: string): boolean {
  if (!start || !end) return false;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (!Number.isFinite(s) || !Number.isFinite(e)) return false;
  return (e - s) / (1000 * 60 * 60 * 24) > MAX_RANGE_DAYS;
}

function centsToUsdString(cents: number): string {
  return (cents / 100).toFixed(2);
}

const INITIAL_FILTERS: AILogsFiltersValue = {
  startDate: defaultStart(),
  endDate: defaultEnd(),
  email: '',
  minCostCents: 0,
  includeDeleted: false,
};

export default function ConsoleAILogsPage() {
  const { t } = useI18n();
  const toast = useToast();

  // Draft = stato dei filtri come digitato dall'admin (non triggera fetch).
  // Applied = stato che produce la query corrente.
  const [draft, setDraft] = createSignal<AILogsFiltersValue>({ ...INITIAL_FILTERS });
  const [applied, setApplied] = createSignal<AILogsFiltersValue>({ ...INITIAL_FILTERS });
  const [allowLongRange, setAllowLongRange] = createSignal(false);
  const [rangeWarningOpen, setRangeWarningOpen] = createSignal(false);

  const [groups, setGroups] = createSignal<AILogsGroup[]>([]);
  const [total, setTotal] = createSignal(0);
  const [offset, setOffset] = createSignal(0);
  const [loading, setLoading] = createSignal(false);
  const [errorKind, setErrorKind] = createSignal<
    'audit_unavailable' | 'rate_limit' | 'generic' | null
  >(null);
  const [disabledFor, setDisabledFor] = createSignal(0);
  let countdownHandle: ReturnType<typeof setInterval> | null = null;

  // Modal state
  const [modalOpen, setModalOpen] = createSignal(false);
  const [modalCall, setModalCall] = createSignal<AILogsCall | null>(null);

  function startCountdown() {
    setDisabledFor(RATE_LIMIT_COUNTDOWN_S);
    if (countdownHandle) clearInterval(countdownHandle);
    countdownHandle = setInterval(() => {
      setDisabledFor((s) => {
        if (s <= 1) {
          if (countdownHandle) {
            clearInterval(countdownHandle);
            countdownHandle = null;
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  function buildQueryFilters(
    state: AILogsFiltersValue,
    explicitOffset: number,
  ): AILogsListFilters {
    const q: AILogsListFilters = {
      limit: PAGE_SIZE,
      offset: explicitOffset,
      sort_by: 'last_call_at',
    };
    if (state.startDate) q.start_date = `${state.startDate}T00:00:00Z`;
    if (state.endDate) q.end_date = `${state.endDate}T23:59:59Z`;
    if (state.email) {
      // L'endpoint backend accetta `user_id` (UUID), non email. Per il
      // momento il filtro email e' solo client-side: viene applicato sul
      // result-set come filtro best-effort. Una proper email autocomplete
      // (admin -> user_id resolution) e' un follow-up separato.
      // Documentato nel journal F6.
    }
    if (state.minCostCents > 0) {
      q.min_cost_usd = centsToUsdString(state.minCostCents);
    }
    if (state.includeDeleted) q.include_deleted = true;
    if (allowLongRange()) q.allow_long_range = true;
    return q;
  }

  async function load(reset: boolean) {
    const state = applied();
    const nextOffset = reset ? 0 : offset();
    setLoading(true);
    if (reset) {
      setErrorKind(null);
    }
    try {
      const resp = await fetchAILogsByMatch(buildQueryFilters(state, nextOffset));
      setGroups((prev) => (reset ? resp.groups : [...prev, ...resp.groups]));
      setTotal(resp.pagination.total);
      setOffset(nextOffset + resp.groups.length);
      setErrorKind(null);
    } catch (err) {
      if (err instanceof RateLimitError) {
        setErrorKind('rate_limit');
        startCountdown();
        toast.showToast(t('console.ai-logs.error.rate_limit'), 'error');
      } else if (err instanceof AuditUnavailableError) {
        setErrorKind('audit_unavailable');
      } else if (err instanceof RangeTooLongError) {
        // Caso: l'admin ha gia' confermato (allowLongRange=true) ma BE
        // continua a rifiutare. Mostriamo errore generico.
        setErrorKind('generic');
        toast.showToast(t('console.ai-logs.error.generic'), 'error');
      } else {
        setErrorKind('generic');
        const msg = err instanceof Error ? err.message : t('console.ai-logs.error.generic');
        toast.showToast(msg, 'error');
      }
    } finally {
      setLoading(false);
    }
  }

  function applyFilters() {
    if (disabledFor() > 0) return;
    const d = draft();
    if (rangeDaysExceedsCap(d.startDate, d.endDate) && !allowLongRange()) {
      setRangeWarningOpen(true);
      return;
    }
    setApplied({ ...d });
    setOffset(0);
  }

  function resetFilters() {
    if (disabledFor() > 0) return;
    setAllowLongRange(false);
    setRangeWarningOpen(false);
    setDraft({ ...INITIAL_FILTERS });
    setApplied({ ...INITIAL_FILTERS });
    setOffset(0);
  }

  function loadMore() {
    if (disabledFor() > 0 || loading()) return;
    void load(false);
  }

  function retryAuditUnavailable() {
    setErrorKind(null);
    void load(true);
  }

  function confirmLongRange() {
    setAllowLongRange(true);
    setRangeWarningOpen(false);
    setApplied({ ...draft() });
    setOffset(0);
  }

  function cancelLongRange() {
    setRangeWarningOpen(false);
  }

  function openPromptModal(call: AILogsCall) {
    setModalCall(call);
    setModalOpen(true);
  }

  function closePromptModal() {
    setModalOpen(false);
    setModalCall(null);
  }

  // Re-fetch quando `applied` cambia (anche su mount via initial state).
  // Usiamo createEffect per leggere lo stato corrente; reset=true perche'
  // ogni cambio di applied azzera offset.
  // Filtro extra client-side per email (best-effort, vedi nota in
  // buildQueryFilters).
  createEffect(() => {
    applied();
    void load(true);
  });

  const filteredGroups = createMemo(() => {
    const e = applied().email.trim().toLowerCase();
    if (!e) return groups();
    return groups().filter((g) => g.user_email.toLowerCase().includes(e));
  });

  const hasMore = () => groups().length < total();

  return (
    <div class="space-y-5">
      <PageHeader
        title={t('console.ai-logs.title')}
        subtitle={t('console.ai-logs.subtitle')}
      />

      <Show when={errorKind() === 'audit_unavailable'}>
        <AuditUnavailableBanner onRetry={retryAuditUnavailable} />
      </Show>

      <AILogsFilters
        values={draft()}
        onChange={setDraft}
        onApply={applyFilters}
        onReset={resetFilters}
        disabledFor={disabledFor()}
      />

      <Show when={loading() && groups().length === 0}>
        <ConsoleSkeleton variant="row" count={5} />
      </Show>

      <Show when={!loading() && groups().length === 0 && errorKind() !== 'audit_unavailable'}>
        <ConsoleEmptyState
          icon="search_off"
          title={t('console.ai-logs.empty.no_calls')}
          subtitle={t('console.ai-logs.empty.no_calls_subtitle')}
        />
      </Show>

      <Show when={groups().length > 0}>
        <AILogsTable
          groups={filteredGroups()}
          startDate={applied().startDate ? `${applied().startDate}T00:00:00Z` : undefined}
          endDate={applied().endDate ? `${applied().endDate}T23:59:59Z` : undefined}
          onViewPrompt={openPromptModal}
        />

        <div class="flex items-center justify-between text-xs text-on-surface-variant">
          <span>
            {t('console.ai-logs.pagination.showing')
              .replace('{{from}}', '1')
              .replace('{{to}}', String(filteredGroups().length))
              .replace('{{total}}', String(total()))}
          </span>
          <Show when={hasMore()}>
            <button
              type="button"
              onClick={loadMore}
              disabled={disabledFor() > 0 || loading()}
              class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              <Show
                when={disabledFor() === 0}
                fallback={t('console.ai-logs.error.rate_limit_countdown').replace(
                  '{{seconds}}',
                  String(disabledFor()),
                )}
              >
                {t('console.ai-logs.pagination.load_more')}
              </Show>
            </button>
          </Show>
        </div>
      </Show>

      <RangeWarningModal
        open={rangeWarningOpen()}
        onConfirm={confirmLongRange}
        onCancel={cancelLongRange}
      />

      <AILogsModalPrompt
        open={modalOpen()}
        call={modalCall()}
        onClose={closePromptModal}
      />
    </div>
  );
}
