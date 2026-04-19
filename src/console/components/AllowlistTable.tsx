// AllowlistTable — tabella entries con guard self-remove (CLR-115)
// REQ-F-021-003
import { For, Show } from 'solid-js';
import type { AllowlistEntry } from '../api/allowlist';

export interface AllowlistTableProps {
  entries: AllowlistEntry[];
  currentAdminGoogleId: string;
  onRevoke: (entry: AllowlistEntry) => void;
}

function formatDate(iso: string | null): string {
  if (!iso) return '-';
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function truncate(value: string | null, max = 16): string {
  if (!value) return '-';
  return value.length > max ? value.slice(0, max) + '...' : value;
}

export default function AllowlistTable(props: AllowlistTableProps) {
  return (
    <div class="overflow-x-auto rounded-xl border border-outline-variant/40 bg-surface-container">
      <table class="min-w-full text-sm">
        <caption class="sr-only">Lista admin allowlist</caption>
        <thead class="bg-surface-container-high text-xs uppercase tracking-wide text-on-surface-variant">
          <tr>
            <th scope="col" class="px-4 py-3 text-left font-semibold">Email</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold">google_id</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold">Stato</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold">Aggiunto il</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold">Aggiunto da</th>
            <th scope="col" class="px-4 py-3 text-left font-semibold">Note</th>
            <th scope="col" class="px-4 py-3 text-right font-semibold">Azioni</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.entries}>
            {(entry) => {
              const isSelf = () =>
                entry.google_id !== null && entry.google_id === props.currentAdminGoogleId;
              const isPending = () => entry.google_id === null;
              const disabledReason = () => {
                if (isSelf()) return 'Non puoi revocare te stesso';
                if (isPending()) return 'Entry in attesa del primo login';
                if (!entry.is_active) return 'Entry gia revocata';
                return '';
              };
              const actionDisabled = () =>
                isSelf() || isPending() || !entry.is_active;

              return (
                <tr class="border-t border-outline-variant/30 text-on-surface">
                  <td class="px-4 py-3 font-medium">{entry.email}</td>
                  <td class="px-4 py-3 font-mono text-xs text-on-surface-variant">
                    {truncate(entry.google_id)}
                  </td>
                  <td class="px-4 py-3">
                    <Show
                      when={entry.is_active}
                      fallback={
                        <span class="inline-flex rounded-full bg-error/15 px-2 py-0.5 text-xs font-medium text-error">
                          Revocato
                        </span>
                      }
                    >
                      <Show
                        when={!isPending()}
                        fallback={
                          <span class="inline-flex rounded-full bg-warning/15 px-2 py-0.5 text-xs font-medium text-warning">
                            Pending first login
                          </span>
                        }
                      >
                        <span class="inline-flex rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
                          Attivo
                        </span>
                      </Show>
                    </Show>
                  </td>
                  <td class="px-4 py-3 text-on-surface-variant">
                    {formatDate(entry.added_at)}
                  </td>
                  <td class="px-4 py-3 text-on-surface-variant">
                    {entry.added_by_email ?? '-'}
                  </td>
                  <td class="px-4 py-3 text-on-surface-variant">
                    {entry.notes ?? '-'}
                  </td>
                  <td class="px-4 py-3 text-right">
                    <button
                      type="button"
                      disabled={actionDisabled()}
                      aria-disabled={actionDisabled()}
                      title={disabledReason() || 'Revoca accesso'}
                      onClick={() => props.onRevoke(entry)}
                      class="rounded-lg border border-error/60 px-3 py-1.5 text-xs font-semibold text-error hover:bg-error/10 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                    >
                      Revoca
                    </button>
                  </td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </div>
  );
}
