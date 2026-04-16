import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import AdminSkeleton from './AdminSkeleton';
import AdminEmptyState from './AdminEmptyState';

export interface ColumnDef<T> {
  key: string;
  header: string;
  render: (row: T) => JSX.Element | string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface AdminTableProps<T> {
  columns: ColumnDef<T>[];
  rows: T[];
  loading?: boolean;
  skeletonRows?: number;
  onRowClick?: (row: T) => void;
  emptyIcon?: string;
  emptyTitle?: string;
  caption?: string;
}

const alignClass = (align?: 'left' | 'center' | 'right') => {
  if (align === 'center') return 'text-center';
  if (align === 'right') return 'text-right';
  return 'text-left';
};

export default function AdminTable<T>(props: AdminTableProps<T>) {
  return (
    <div class="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
      <Show
        when={!props.loading && props.rows.length === 0}
        fallback={
          <table class="w-full text-sm" aria-busy={props.loading ?? false}>
            <Show when={props.caption}>
              <caption class="sr-only">{props.caption}</caption>
            </Show>
            <thead>
              <tr>
                <For each={props.columns}>
                  {(col) => (
                    <th
                      scope="col"
                      class={`px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant ${alignClass(col.align)} ${col.width ?? ''}`}
                    >
                      {col.header}
                    </th>
                  )}
                </For>
              </tr>
            </thead>
            <tbody>
              <Show when={props.loading}>
                <For each={Array.from({ length: props.skeletonRows ?? 5 })}>
                  {() => (
                    <tr class="border-t border-outline-variant/10">
                      <For each={props.columns}>
                        {(col) => (
                          <td class={`px-5 py-3 ${col.width ?? ''}`}>
                            <AdminSkeleton variant="text" />
                          </td>
                        )}
                      </For>
                    </tr>
                  )}
                </For>
              </Show>
              <Show when={!props.loading}>
                <For each={props.rows}>
                  {(row) => (
                    <tr
                      class="border-t border-outline-variant/10"
                      classList={{
                        'hover:bg-surface-container-high cursor-pointer transition-colors': !!props.onRowClick,
                      }}
                      tabIndex={props.onRowClick ? 0 : undefined}
                      onClick={() => props.onRowClick?.(row)}
                      onKeyDown={(e: KeyboardEvent) => {
                        if ((e.key === 'Enter' || e.key === ' ') && props.onRowClick) {
                          e.preventDefault();
                          props.onRowClick(row);
                        }
                      }}
                    >
                      <For each={props.columns}>
                        {(col) => (
                          <td class={`px-5 py-3 text-sm text-on-surface ${alignClass(col.align)} ${col.width ?? ''}`}>
                            {col.render(row)}
                          </td>
                        )}
                      </For>
                    </tr>
                  )}
                </For>
              </Show>
            </tbody>
          </table>
        }
      >
        <AdminEmptyState
          icon={props.emptyIcon ?? 'inventory_2'}
          title={props.emptyTitle ?? 'Nessun dato disponibile'}
        />
      </Show>
    </div>
  );
}
