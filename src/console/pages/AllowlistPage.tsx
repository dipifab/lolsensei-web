// AllowlistPage — CRUD completa allowlist admin
// REQ-F-021-003, CLR-102, CLR-115
import { Show, createResource, createSignal, createMemo } from 'solid-js';
import AllowlistTable from '../components/AllowlistTable';
import AllowlistAddDialog from '../components/AllowlistAddDialog';
import RevokeConfirmDialog from '../components/RevokeConfirmDialog';
import ConsoleSkeleton from '../components/ConsoleSkeleton';
import { useToast } from '../contexts/toast-context';
import {
  getAdminMe,
  listAllowlist,
  type AdminMe,
  type AllowlistEntry,
  type AllowlistListResponse,
  type ListAllowlistParams,
} from '../api/allowlist';
import { ConsoleApiError } from '../api/client';

const PAGE_LIMIT = 50;

interface QueryState {
  offset: number;
  includeRevoked: boolean;
}

async function fetchAllowlist(params: ListAllowlistParams): Promise<AllowlistListResponse> {
  return listAllowlist(params);
}

async function fetchMe(): Promise<AdminMe> {
  return getAdminMe();
}

export default function AllowlistPage() {
  const toast = useToast();
  const [query, setQuery] = createSignal<QueryState>({ offset: 0, includeRevoked: false });
  const [addOpen, setAddOpen] = createSignal(false);
  const [revokeTarget, setRevokeTarget] = createSignal<AllowlistEntry | null>(null);

  const [meResource] = createResource<AdminMe>(fetchMe);
  const [listResource, { refetch: refetchList }] = createResource<
    AllowlistListResponse,
    QueryState
  >(
    query,
    (q) =>
      fetchAllowlist({
        limit: PAGE_LIMIT,
        offset: q.offset,
        include_revoked: q.includeRevoked,
      }),
  );

  const total = createMemo(() => listResource()?.total ?? 0);
  const items = createMemo(() => listResource()?.items ?? []);
  const currentOffset = () => query().offset;
  const hasPrev = () => currentOffset() > 0;
  const hasNext = () => currentOffset() + PAGE_LIMIT < total();

  const handleAddSuccess = (entry: AllowlistEntry) => {
    toast.showToast(`${entry.email} aggiunto.`, 'success');
    setAddOpen(false);
    refetchList();
  };

  const handleRevokeConfirmed = () => {
    toast.showToast('Accesso revocato.', 'success');
    setRevokeTarget(null);
    refetchList();
  };

  const handleRevokeError = (message: string) => {
    toast.showToast(message, 'error');
    setRevokeTarget(null);
  };

  const listError = () => {
    const err = listResource.error;
    if (!err) return null;
    if (err instanceof ConsoleApiError) return err.detail || `HTTP ${err.status}`;
    return 'Errore durante il caricamento.';
  };

  return (
    <div class="space-y-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h1 class="font-headline text-2xl font-bold text-on-surface">
            Allowlist Admin
          </h1>
          <p class="mt-1 text-sm text-on-surface-variant">
            Gestione degli account amministrativi abilitati alla Console.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        >
          + Aggiungi admin
        </button>
      </div>

      <label class="inline-flex items-center gap-2 text-sm text-on-surface">
        <input
          type="checkbox"
          checked={query().includeRevoked}
          onChange={(e) =>
            setQuery({ offset: 0, includeRevoked: e.currentTarget.checked })
          }
          class="rounded border-outline-variant"
        />
        Includi revocati
      </label>

      <Show
        when={!listResource.loading}
        fallback={<ConsoleSkeleton variant="row" count={5} />}
      >
        <Show
          when={!listError()}
          fallback={
            <div role="alert" class="rounded-xl border border-error/40 bg-error/5 p-4 text-sm text-error">
              <p class="mb-3">{listError()}</p>
              <button
                type="button"
                onClick={() => refetchList()}
                class="rounded-lg border border-error/60 px-3 py-1.5 text-xs font-semibold text-error hover:bg-error/10"
              >
                Riprova
              </button>
            </div>
          }
        >
          <Show
            when={items().length > 0}
            fallback={
              <div class="rounded-xl border border-outline-variant/40 bg-surface-container p-8 text-center text-sm text-on-surface-variant">
                Nessun admin in allowlist.
              </div>
            }
          >
            <AllowlistTable
              entries={items()}
              currentAdminGoogleId={meResource()?.google_id ?? ''}
              onRevoke={(entry) => setRevokeTarget(entry)}
            />

            <div class="flex items-center justify-between text-sm text-on-surface-variant">
              <span>
                {currentOffset() + 1}–{Math.min(currentOffset() + items().length, total())}{' '}
                di {total()}
              </span>
              <div class="flex gap-2">
                <button
                  type="button"
                  disabled={!hasPrev()}
                  onClick={() =>
                    setQuery((q) => ({
                      ...q,
                      offset: Math.max(0, q.offset - PAGE_LIMIT),
                    }))
                  }
                  class="rounded-lg border border-outline-variant px-3 py-1.5 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                >
                  Precedente
                </button>
                <button
                  type="button"
                  disabled={!hasNext()}
                  onClick={() =>
                    setQuery((q) => ({ ...q, offset: q.offset + PAGE_LIMIT }))
                  }
                  class="rounded-lg border border-outline-variant px-3 py-1.5 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                >
                  Successivo
                </button>
              </div>
            </div>
          </Show>
        </Show>
      </Show>

      <AllowlistAddDialog
        open={addOpen()}
        onClose={() => setAddOpen(false)}
        onSuccess={handleAddSuccess}
      />

      <RevokeConfirmDialog
        open={revokeTarget() !== null}
        entry={revokeTarget()}
        onCancel={() => setRevokeTarget(null)}
        onRevoked={handleRevokeConfirmed}
        onError={handleRevokeError}
      />
    </div>
  );
}
