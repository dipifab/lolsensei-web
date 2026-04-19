import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { A } from '@solidjs/router';
import type { UserListItem, UserSortField } from '../../types';
import ConsoleBadge from '../ConsoleBadge';
import ConsoleSkeleton from '../ConsoleSkeleton';
import ConsoleEmptyState from '../ConsoleEmptyState';
import Icon from '../../../components/Icon';
import { formatEur, formatDate, formatDateTime, formatUsd4 } from '../../utils/format';
import { statusToVariant } from '../../utils/status';

type SortBase = 'created_at' | 'email' | 'revenue';

interface UserTableProps {
  rows: UserListItem[];
  loading?: boolean;
  skeletonRows?: number;
  sort: UserSortField;
  onSort: (sort: UserSortField) => void;
  emptyTitle?: string;
  emptySubtitle?: string;
}

function parseSort(sort: UserSortField): { base: SortBase; dir: 'asc' | 'desc' } {
  const dir: 'asc' | 'desc' = sort.startsWith('-') ? 'desc' : 'asc';
  const base = (sort.startsWith('-') ? sort.slice(1) : sort) as SortBase;
  return { base, dir };
}

export default function UserTable(props: UserTableProps) {
  const current = () => parseSort(props.sort);

  const onHeaderClick = (base: SortBase) => {
    const { base: curBase, dir } = current();
    if (curBase !== base) {
      props.onSort((base === 'created_at' ? `-${base}` : base) as UserSortField);
      return;
    }
    const next: UserSortField = (dir === 'asc' ? `-${base}` : base) as UserSortField;
    props.onSort(next);
  };

  const ariaSort = (base: SortBase): 'ascending' | 'descending' | 'none' => {
    const c = current();
    if (c.base !== base) return 'none';
    return c.dir === 'asc' ? 'ascending' : 'descending';
  };

  const sortIcon = (base: SortBase) => {
    const c = current();
    if (c.base !== base) return <span aria-hidden="true" class="opacity-30">&#9662;</span>;
    return (
      <span aria-hidden="true" class="text-primary">
        {c.dir === 'asc' ? '\u25B4' : '\u25BE'}
      </span>
    );
  };

  const isEmpty = () => !props.loading && props.rows.length === 0;

  return (
    <div class="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
      <Show
        when={!isEmpty()}
        fallback={
          <ConsoleEmptyState
            icon="group"
            title={props.emptyTitle ?? 'No users found'}
            subtitle={props.emptySubtitle}
          />
        }
      >
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm"
            aria-busy={props.loading ?? false}
          >
            <caption class="sr-only">Users list</caption>
            <thead>
              <tr class="bg-surface-container-low">
                <SortableHeader
                  label="Email"
                  ariaSort={ariaSort('email')}
                  onClick={() => onHeaderClick('email')}
                  icon={sortIcon('email')}
                />
                <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Name</th>
                <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Plan</th>
                <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Status</th>
                <SortableHeader
                  label="Registered"
                  ariaSort={ariaSort('created_at')}
                  onClick={() => onHeaderClick('created_at')}
                  icon={sortIcon('created_at')}
                />
                <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-left">Last seen</th>
                <SortableHeader
                  label="Revenue"
                  align="right"
                  ariaSort={ariaSort('revenue')}
                  onClick={() => onHeaderClick('revenue')}
                  icon={sortIcon('revenue')}
                />
                <th scope="col" class="px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant text-right">AI cost 30d</th>
              </tr>
            </thead>
            <tbody>
              <Show when={props.loading}>
                <For each={Array.from({ length: props.skeletonRows ?? 10 })}>
                  {() => (
                    <tr class="border-t border-outline-variant/10">
                      <For each={Array.from({ length: 8 })}>
                        {() => (
                          <td class="px-5 py-3">
                            <ConsoleSkeleton variant="text" />
                          </td>
                        )}
                      </For>
                    </tr>
                  )}
                </For>
              </Show>
              <Show when={!props.loading}>
                <For each={props.rows}>
                  {(u) => (
                    <tr class="border-t border-outline-variant/10 hover:bg-surface-container-high transition-colors focus-within:bg-surface-container-high">
                      <td class="px-5 py-3 text-on-surface">
                        <div class="flex items-center gap-2">
                          {/*
                            Use a router link as the primary affordance so the
                            row is accessible via keyboard and properly
                            announced by screen readers (previously the entire
                            <tr> carried role="button", which is ignored by
                            most AT in table mode).
                          */}
                          <A
                            href={`/console/users/${u.id}`}
                            class="font-medium text-on-surface hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 rounded"
                            aria-label={`Open user ${u.email}`}
                          >
                            {u.email}
                          </A>
                          <Show when={u.is_suspended}>
                            <Icon name="block" class="w-3.5 h-3.5 text-error" />
                          </Show>
                        </div>
                      </td>
                      <td class="px-5 py-3 text-on-surface-variant">
                        {u.display_name ?? '--'}
                      </td>
                      <td class="px-5 py-3 text-on-surface">
                        <div class="flex items-center gap-2">
                          {u.plan_name ?? <span class="text-on-surface-variant">--</span>}
                          <Show when={u.credit_override}>
                            {(co) => (
                            <span
                              title={
                                `Override custom limits: `
                                + `daily=${co().daily ?? 'plan'} · `
                                + `weekly=${co().weekly ?? 'plan'} · `
                                + `monthly=${co().monthly ?? 'plan'}`
                              }
                              class="inline-flex items-center rounded-full border border-primary-container/40 bg-primary-container/10 px-2 py-0.5 text-[10px] font-headline font-extrabold uppercase tracking-widest text-primary-container"
                            >
                              Override
                            </span>
                            )}
                          </Show>
                        </div>
                      </td>
                      <td class="px-5 py-3">
                        <ConsoleBadge
                          variant={statusToVariant(u.subscription_status, u.is_suspended)}
                          dot
                          pulse={u.subscription_status === 'active' && !u.is_suspended}
                        />
                      </td>
                      <td class="px-5 py-3 text-on-surface-variant">
                        {formatDate(u.created_at)}
                      </td>
                      <td class="px-5 py-3 text-on-surface-variant">
                        {formatDateTime(u.last_active_at)}
                      </td>
                      <td class="px-5 py-3 text-on-surface text-right font-medium">
                        {formatEur(u.revenue_lifetime_cents)}
                      </td>
                      <td class="px-5 py-3 text-on-surface text-right font-medium">
                        {formatUsd4(u.ai_cost_30d_usd)}
                      </td>
                    </tr>
                  )}
                </For>
              </Show>
            </tbody>
          </table>
        </div>
      </Show>
    </div>
  );
}

function SortableHeader(props: {
  label: string;
  ariaSort: 'ascending' | 'descending' | 'none';
  onClick: () => void;
  icon: JSX.Element;
  align?: 'left' | 'right';
}) {
  return (
    <th
      scope="col"
      aria-sort={props.ariaSort}
      class={`px-5 py-3 text-xs uppercase tracking-wider font-medium text-on-surface-variant ${
        props.align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <button
        type="button"
        onClick={props.onClick}
        class="inline-flex items-center gap-1 hover:text-on-surface focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 rounded"
      >
        <span>{props.label}</span>
        {props.icon}
      </button>
    </th>
  );
}
