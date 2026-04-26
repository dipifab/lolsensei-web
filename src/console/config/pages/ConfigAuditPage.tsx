// ConfigAuditPage — S3 (ux-flows §3.3) audit log paginato + filtri.
//
// REQ-F-CONFIG-002 AC.8/9. Filtri: key (exact), user_email (ILIKE substring,
// OP-023), date_from/date_to, source enum, page/per_page. Tutti sync URL.
//
// Rollback flow (S4, ux-flows §3.4): click "Rollback to vN" → ConfirmDialog
// con reason auto-generated editabile. Submit → PATCH idempotent verso
// `/api/admin/config/{key}` con value_json = entry.old_value. Server-side
// trigger skip audit/notify se no-op (REQ-F-CONFIG-002 AC.9).
import {
  Show,
  For,
  createSignal,
  createMemo,
  createResource,
} from 'solid-js';
import { useSearchParams, A } from '@solidjs/router';
import PageHeader from '../../components/PageHeader';
import ConsoleSkeleton from '../../components/ConsoleSkeleton';
import ConsoleEmptyState from '../../components/ConsoleEmptyState';
import ConsoleDialog from '../../components/ConsoleDialog';
import ConsoleButton from '../../components/ConsoleButton';
import { useToast } from '../../contexts/toast-context';
import { ConsoleApiError } from '../../api/client';
import {
  listAudit,
  getConfig,
  patchConfig,
  VersionMismatchError,
} from '../lib/admin-config-api';
import type {
  AppConfigAuditEntry,
  AppConfigAuditListResponse,
  ConfigSource,
  ListAuditFilters,
} from '../lib/types';
import ConfigAuditEntry from '../components/ConfigAuditEntry';

const SOURCE_VALUES: readonly ConfigSource[] = [
  'admin_ui',
  'cli',
  'migration',
  'seed',
  'api',
];

const DEFAULT_PER_PAGE = 50;
const MIN_PER_PAGE = 1;
const MAX_PER_PAGE = 200;

interface AuditPageFilters {
  key: string;
  user_email: string;
  date_from: string;
  date_to: string;
  source: ConfigSource | undefined;
  page: number;
  per_page: number;
}

function parseSourceParam(v: string | undefined): ConfigSource | undefined {
  if (!v) return undefined;
  return (SOURCE_VALUES as readonly string[]).includes(v)
    ? (v as ConfigSource)
    : undefined;
}

function parseIntInRange(
  v: string | undefined,
  fallback: number,
  min: number,
  max: number,
): number {
  const n = v ? parseInt(v, 10) : NaN;
  if (!Number.isFinite(n) || n < min || n > max) return fallback;
  return n;
}

function buildRollbackReason(entry: AppConfigAuditEntry): string {
  // OP-007: chain depth handling. Se l'entry target ha gia una reason
  // "rollback to ...", troncare per evitare "rollback to rollback to ...".
  const prevReason = entry.change_reason ?? '';
  const isPrevRollback = prevReason.toLowerCase().startsWith('rollback to');
  if (isPrevRollback) {
    return `rollback to entry #${entry.id} (originally ${prevReason.replace(/^rollback to[^:]*:?\s*/i, '').trim() || 'unspecified'})`;
  }
  if (prevReason.length === 0) {
    return `rollback to entry #${entry.id}`;
  }
  return `rollback to entry #${entry.id}: ${prevReason}`;
}

interface RollbackState {
  entry: AppConfigAuditEntry;
  reason: string;
  submitting: boolean;
  serverError: string | null;
  /** Versione corrente (re-fetch al moment dell'apertura). null se in load. */
  currentVersion: number | null;
  /** True se il valore corrente coincide gia con `entry.old_value` (no-op). */
  isNoOp: boolean;
}

export default function ConfigAuditPage() {
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = createMemo<AuditPageFilters>(() => ({
    key: (searchParams.key as string | undefined) ?? '',
    user_email: (searchParams.user_email as string | undefined) ?? '',
    date_from: (searchParams.date_from as string | undefined) ?? '',
    date_to: (searchParams.date_to as string | undefined) ?? '',
    source: parseSourceParam(searchParams.source as string | undefined),
    page: parseIntInRange(searchParams.page as string | undefined, 1, 1, 10_000),
    per_page: parseIntInRange(
      searchParams.per_page as string | undefined,
      DEFAULT_PER_PAGE,
      MIN_PER_PAGE,
      MAX_PER_PAGE,
    ),
  }));

  // --- Local input state (apply on click "Apply") ---
  const [keyInput, setKeyInput] = createSignal(filters().key);
  const [emailInput, setEmailInput] = createSignal(filters().user_email);
  const [dateFromInput, setDateFromInput] = createSignal(filters().date_from);
  const [dateToInput, setDateToInput] = createSignal(filters().date_to);
  const [sourceInput, setSourceInput] = createSignal<ConfigSource | ''>(
    filters().source ?? '',
  );

  function applyFilters(): void {
    setSearchParams(
      {
        key: keyInput() || null,
        user_email: emailInput() || null,
        date_from: dateFromInput() || null,
        date_to: dateToInput() || null,
        source: sourceInput() || null,
        page: null,
      },
      { replace: true },
    );
  }

  function clearFilters(): void {
    setKeyInput('');
    setEmailInput('');
    setDateFromInput('');
    setDateToInput('');
    setSourceInput('');
    setSearchParams(
      {
        key: null,
        user_email: null,
        date_from: null,
        date_to: null,
        source: null,
        page: null,
        per_page: null,
      },
      { replace: true },
    );
  }

  function setPage(p: number): void {
    setSearchParams({ page: p === 1 ? null : String(p) }, { replace: true });
  }

  // --- Resource: lista audit ---
  const apiFilters = createMemo<ListAuditFilters>(() => {
    const f = filters();
    const out: ListAuditFilters = {};
    if (f.key) out.key = f.key;
    if (f.user_email) out.user_email = f.user_email;
    if (f.date_from) out.date_from = f.date_from;
    if (f.date_to) out.date_to = f.date_to;
    if (f.source) out.source = f.source;
    out.page = f.page;
    out.per_page = f.per_page;
    return out;
  });

  const [data, { refetch }] = createResource<AppConfigAuditListResponse, ListAuditFilters>(
    apiFilters,
    async (f) => {
      try {
        return await listAudit(f);
      } catch (err) {
        if (err instanceof ConsoleApiError) {
          if (err.status !== 401) toast.showToast(err.message, 'error');
        } else {
          toast.showToast('Unexpected error while loading audit log.', 'error');
        }
        throw err;
      }
    },
  );

  const entries = () => data()?.entries ?? [];
  const total = () => data()?.total ?? 0;
  const totalPages = () => Math.max(1, Math.ceil(total() / filters().per_page));
  const hasPrev = () => filters().page > 1;
  const hasNext = () => filters().page < totalPages();

  const errorMessage = (): string | null => {
    const err = data.error;
    if (!err) return null;
    if (err instanceof ConsoleApiError) return err.detail || `HTTP ${err.status}`;
    return 'Could not load audit log.';
  };

  // --- Rollback dialog state ---
  const [rollback, setRollback] = createSignal<RollbackState | null>(null);

  async function openRollback(entry: AppConfigAuditEntry): Promise<void> {
    // Pre-load currentVersion + isNoOp via getConfig.
    setRollback({
      entry,
      reason: buildRollbackReason(entry),
      submitting: false,
      serverError: null,
      currentVersion: null,
      isNoOp: false,
    });
    try {
      const current = await getConfig(entry.key);
      const isNoOp =
        JSON.stringify(current.value) === JSON.stringify(entry.old_value);
      setRollback((prev) =>
        prev && prev.entry.id === entry.id
          ? { ...prev, currentVersion: current.version, isNoOp }
          : prev,
      );
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 404) {
          setRollback((prev) =>
            prev && prev.entry.id === entry.id
              ? { ...prev, serverError: 'Config key no longer exists.' }
              : prev,
          );
        } else if (err.status !== 401) {
          toast.showToast(err.message, 'error');
        }
      } else {
        toast.showToast('Could not load current value.', 'error');
      }
    }
  }

  function closeRollback(): void {
    setRollback(null);
  }

  function setRollbackReason(reason: string): void {
    setRollback((prev) => (prev ? { ...prev, reason } : prev));
  }

  async function submitRollback(): Promise<void> {
    const r = rollback();
    if (!r) return;
    if (r.currentVersion === null) return;
    if (r.reason.trim().length < 10) {
      setRollback((prev) =>
        prev ? { ...prev, serverError: 'Reason must be at least 10 characters.' } : prev,
      );
      return;
    }

    setRollback((prev) => (prev ? { ...prev, submitting: true, serverError: null } : prev));
    try {
      await patchConfig(r.entry.key, {
        value_json: r.entry.old_value as never,
        change_reason: r.reason,
        version: r.currentVersion,
      });
      toast.showToast(
        r.isNoOp ? 'No-op rollback (value unchanged).' : 'Rollback applied.',
        'success',
      );
      setRollback(null);
      await refetch();
    } catch (err) {
      if (err instanceof VersionMismatchError) {
        setRollback((prev) =>
          prev
            ? {
                ...prev,
                submitting: false,
                serverError: `Configuration was updated elsewhere. Current version is ${err.currentVersion}. Close this dialog and try again.`,
                currentVersion: err.currentVersion,
              }
            : prev,
        );
      } else if (err instanceof ConsoleApiError) {
        if (err.status === 400) {
          setRollback((prev) =>
            prev
              ? { ...prev, submitting: false, serverError: err.detail || 'Validation error.' }
              : prev,
          );
        } else if (err.status === 404) {
          setRollback((prev) =>
            prev
              ? { ...prev, submitting: false, serverError: 'Config key not found.' }
              : prev,
          );
        } else if (err.status !== 401) {
          toast.showToast(err.message, 'error');
          setRollback((prev) => (prev ? { ...prev, submitting: false } : prev));
        }
      } else {
        toast.showToast('Unexpected error. Retry.', 'error');
        setRollback((prev) => (prev ? { ...prev, submitting: false } : prev));
      }
    }
  }

  return (
    <div class="space-y-6">
      <div class="text-sm text-on-surface-variant">
        <A href="/console/config" class="hover:underline">
          ← Back to Runtime Config
        </A>
      </div>

      <PageHeader
        title="Audit Log"
        subtitle="Append-only log of every runtime configuration change."
      />

      {/* Filter bar */}
      <div class="space-y-3 rounded-xl border border-outline-variant/40 bg-surface-container-low p-4">
        <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
          <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
            Key (exact)
            <input
              type="text"
              value={keyInput()}
              onInput={(e) => setKeyInput(e.currentTarget.value)}
              placeholder="e.g. coach.light.chat_cap_monthly"
              class="mt-1 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-normal normal-case tracking-normal text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
            />
          </label>
          <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
            User email (substring)
            <input
              type="text"
              value={emailInput()}
              onInput={(e) => setEmailInput(e.currentTarget.value)}
              placeholder="filter by email substring"
              class="mt-1 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-normal normal-case tracking-normal text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
            />
          </label>
          <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
            Source
            <select
              value={sourceInput()}
              onChange={(e) => setSourceInput(e.currentTarget.value as ConfigSource | '')}
              class="mt-1 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-normal normal-case tracking-normal text-on-surface focus:border-primary-container focus:outline-none"
            >
              <option value="">All sources</option>
              <For each={SOURCE_VALUES}>
                {(s) => <option value={s}>{s}</option>}
              </For>
            </select>
          </label>
          <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
            From
            <input
              type="date"
              value={dateFromInput()}
              onInput={(e) => setDateFromInput(e.currentTarget.value)}
              class="mt-1 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-normal normal-case tracking-normal text-on-surface focus:border-primary-container focus:outline-none"
            />
          </label>
          <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
            To
            <input
              type="date"
              value={dateToInput()}
              onInput={(e) => setDateToInput(e.currentTarget.value)}
              class="mt-1 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm font-normal normal-case tracking-normal text-on-surface focus:border-primary-container focus:outline-none"
            />
          </label>
          <div class="flex items-end gap-2">
            <button
              type="button"
              onClick={applyFilters}
              class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={clearFilters}
              class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <Show
        when={!data.loading || data()}
        fallback={<ConsoleSkeleton variant="card" count={5} height="6rem" />}
      >
        <Show
          when={!errorMessage()}
          fallback={
            <div
              role="alert"
              class="flex items-center justify-between gap-3 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
            >
              <span>{errorMessage()}</span>
              <button
                type="button"
                onClick={() => refetch()}
                class="rounded-lg border border-error/40 px-3 py-1 text-xs font-semibold hover:bg-error/15"
              >
                Reload
              </button>
            </div>
          }
        >
          <Show
            when={entries().length > 0}
            fallback={
              <ConsoleEmptyState
                icon="history"
                title="No audit entries match the current filters"
                subtitle="Adjust filters or clear them to see other results."
                action={{ label: 'Clear filters', onClick: clearFilters }}
              />
            }
          >
            <p class="text-xs text-outline">
              Total: {total()} entries (showing page {filters().page} / {totalPages()})
            </p>

            <div class="space-y-3">
              <For each={entries()}>
                {(entry) => (
                  <ConfigAuditEntry
                    entry={entry}
                    onRollback={(e) => void openRollback(e)}
                  />
                )}
              </For>
            </div>

            <div class="flex items-center justify-between text-sm text-on-surface-variant">
              <span>
                Page {filters().page} of {totalPages()} ({total()} entries total)
              </span>
              <div class="flex gap-2">
                <button
                  type="button"
                  disabled={!hasPrev()}
                  onClick={() => setPage(filters().page - 1)}
                  class="rounded-lg border border-outline-variant px-3 py-1.5 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={!hasNext()}
                  onClick={() => setPage(filters().page + 1)}
                  class="rounded-lg border border-outline-variant px-3 py-1.5 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          </Show>
        </Show>
      </Show>

      {/* Rollback dialog */}
      <ConsoleDialog
        open={rollback() !== null}
        onClose={closeRollback}
        title={rollback() ? `Rollback config: ${rollback()!.entry.key}` : 'Rollback'}
        width="lg"
        footer={
          <>
            <ConsoleButton
              variant="secondary"
              onClick={closeRollback}
              disabled={rollback()?.submitting}
            >
              Cancel
            </ConsoleButton>
            <ConsoleButton
              variant="primary"
              onClick={() => void submitRollback()}
              loading={rollback()?.submitting}
              disabled={
                rollback()?.submitting
                || rollback()?.currentVersion === null
                || (rollback()?.reason ?? '').trim().length < 10
              }
            >
              Rollback Now
            </ConsoleButton>
          </>
        }
      >
        <Show when={rollback()}>
          {(r) => (
            <div class="space-y-3 text-sm">
              <p class="text-on-surface">
                You are about to rollback{' '}
                <code class="font-mono">{r().entry.key}</code> to the value at
                audit entry #{r().entry.id}.
              </p>

              <Show when={r().currentVersion !== null}>
                <div class="rounded-lg bg-surface-container-low p-3 font-mono text-xs">
                  <p>
                    Current version: v{r().currentVersion}
                  </p>
                  <p>
                    Rollback to version: v{r().entry.version_before ?? '?'}
                  </p>
                </div>
              </Show>

              <Show when={r().isNoOp}>
                <div class="rounded-lg border border-secondary/30 bg-secondary/5 p-3 text-on-surface">
                  ℹ The current value already matches the rollback target.
                  Submitting will be a no-op (no audit entry created).
                </div>
              </Show>

              <label class="block">
                <span class="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Reason (auto-generated, editable)
                </span>
                <textarea
                  value={r().reason}
                  onInput={(e) => setRollbackReason(e.currentTarget.value)}
                  rows={3}
                  disabled={r().submitting}
                  class="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:border-primary-container focus:outline-none disabled:opacity-50"
                />
                <span class="block mt-1 text-xs text-outline text-right">
                  {r().reason.length}/500
                </span>
              </label>

              <Show when={r().serverError}>
                <div
                  role="alert"
                  class="rounded-lg border border-error/30 bg-error/10 px-3 py-2 text-error"
                >
                  {r().serverError}
                </div>
              </Show>

              <p class="text-xs text-outline">
                This rollback creates a new audit entry with source admin_ui.
                Original entries remain in the append-only log.
              </p>
            </div>
          )}
        </Show>
      </ConsoleDialog>
    </div>
  );
}
