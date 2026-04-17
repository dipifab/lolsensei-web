import { createMemo, createResource, Show } from 'solid-js';
import { useSearchParams } from '@solidjs/router';
import PageHeader from '../components/PageHeader';
import KPICard from '../components/shared/KPICard';
import Pagination from '../components/shared/Pagination';
import FilterBar, { type FilterValues } from '../components/users/FilterBar';
import UserTable from '../components/users/UserTable';
import { AdminUsersApi, type UserListParams } from '../api/users';
import { fetchPlans } from '../api/plans';
import { AdminApiError } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatEur, formatInteger, formatUsd4 } from '../utils/format';
import { hasActiveFilters } from '../utils/filters';
import type { SubscriptionStatusFilter, UserListResponse, UserSortField } from '../types';

const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_SORT: UserSortField = '-created_at';

const SORT_VALUES: UserSortField[] = [
  'created_at',
  '-created_at',
  'email',
  '-email',
  'revenue',
  '-revenue',
];

const STATUS_VALUES: SubscriptionStatusFilter[] = [
  'active',
  'trialing',
  'past_due',
  'cancelled',
  'suspended',
  'free',
];

function parseIntSafe(v: string | undefined, fallback: number): number {
  const n = v ? parseInt(v, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function parseStatus(v: string | undefined): SubscriptionStatusFilter | undefined {
  if (!v) return undefined;
  return (STATUS_VALUES as string[]).includes(v)
    ? (v as SubscriptionStatusFilter)
    : undefined;
}

function parseSort(v: string | undefined): UserSortField {
  if (v && (SORT_VALUES as string[]).includes(v)) return v as UserSortField;
  return DEFAULT_SORT;
}

export default function UsersListPage() {
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = createMemo<FilterValues>(() => ({
    status: parseStatus(searchParams.status as string | undefined),
    plan_id: (searchParams.plan as string | undefined) || undefined,
    registered_from: (searchParams.from as string | undefined) || undefined,
    registered_to: (searchParams.to as string | undefined) || undefined,
    search: (searchParams.search as string | undefined) || undefined,
  }));

  const page = createMemo(() =>
    parseIntSafe(searchParams.page as string | undefined, 1),
  );
  const pageSize = createMemo(() =>
    Math.min(
      100,
      parseIntSafe(searchParams.page_size as string | undefined, DEFAULT_PAGE_SIZE),
    ),
  );
  const sort = createMemo(() => parseSort(searchParams.sort as string | undefined));

  const queryKey = createMemo(() => ({
    ...filters(),
    page: page(),
    page_size: pageSize(),
    sort: sort(),
  }));

  const [data, { refetch }] = createResource<UserListResponse, UserListParams>(
    queryKey,
    async (params) => {
      try {
        return await AdminUsersApi.list(params);
      } catch (err) {
        if (err instanceof AdminApiError) {
          if (err.status !== 401) toast.showToast(err.message, 'error');
        } else {
          toast.showToast('Unexpected error while loading users', 'error');
        }
        throw err;
      }
    },
  );

  const [plans] = createResource(async () => {
    try {
      return await fetchPlans();
    } catch {
      return [];
    }
  });

  const setFilters = (next: FilterValues) => {
    setSearchParams(
      {
        status: next.status ?? null,
        plan: next.plan_id ?? null,
        from: next.registered_from ?? null,
        to: next.registered_to ?? null,
        search: next.search ?? null,
        page: null,
      },
      { replace: true },
    );
  };

  const setPage = (p: number) => {
    setSearchParams({ page: p === 1 ? null : String(p) }, { replace: true });
  };

  const setSort = (s: UserSortField) => {
    setSearchParams({ sort: s === DEFAULT_SORT ? null : s, page: null }, { replace: true });
  };

  const kpi = () => data()?.kpi_summary;

  return (
    <div class="space-y-6">
      <PageHeader
        title="Users"
        subtitle="Manage application users: suspensions, credit limits, billing history and AI costs."
      />

      <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <KPICard
          icon="group"
          label="Total users"
          value={formatInteger(kpi()?.total_users ?? 0)}
        />
        <KPICard
          icon="check_circle"
          label="Active"
          value={formatInteger(kpi()?.active_users ?? 0)}
          iconBgClass="bg-success/10"
          iconColorClass="text-success"
        />
        <KPICard
          icon="account_balance_wallet"
          label="Avg revenue / user"
          value={formatEur(kpi()?.avg_revenue_per_user_cents ?? 0)}
        />
        <KPICard
          icon="psychology"
          label="Avg AI cost 30d / user"
          value={formatUsd4(kpi()?.avg_ai_cost_per_user_30d_usd ?? '0')}
          iconBgClass="bg-warning/10"
          iconColorClass="text-warning"
        />
      </section>

      <FilterBar
        values={filters()}
        plans={(plans() ?? []).map((p) => ({ id: p.id, name: p.name }))}
        onChange={setFilters}
      />

      <Show when={data.error}>
        <div class="flex items-center justify-between gap-3 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
          <span>Failed to load the users list.</span>
          <button
            type="button"
            onClick={() => refetch()}
            class="rounded-lg border border-error/40 px-3 py-1 text-xs font-semibold hover:bg-error/15"
          >
            Retry
          </button>
        </div>
      </Show>

      <UserTable
        rows={data()?.items ?? []}
        loading={data.loading}
        sort={sort()}
        onSort={setSort}
        emptyTitle={
          hasActiveFilters(filters())
            ? 'No users match filters'
            : 'No users registered'
        }
        emptySubtitle={
          hasActiveFilters(filters())
            ? 'Adjust or clear the filters to see other results.'
            : undefined
        }
      />

      <Pagination
        page={page()}
        pageSize={pageSize()}
        total={data()?.total ?? 0}
        onPageChange={setPage}
      />
    </div>
  );
}
