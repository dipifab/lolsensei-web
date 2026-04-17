import { createResource, createMemo, Show } from 'solid-js';
import type { AdminUserResponse } from '../types';
import { fetchAdminUsers } from '../api/admin-users';
import { AdminApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import { formatDate } from '../utils/format';
import PageHeader from '../components/PageHeader';
import AdminTable from '../components/AdminTable';
import type { ColumnDef } from '../components/AdminTable';
import AdminBadge from '../components/AdminBadge';
import AdminInfoBanner from '../components/AdminInfoBanner';
import AdminSkeleton from '../components/AdminSkeleton';

export default function AdminUsersPage() {
  const toast = useToast();

  const [users] = createResource(
    () => true,
    async () => {
      try {
        return await fetchAdminUsers();
      } catch (err) {
        if (err instanceof AdminApiError) {
          if (err.status === 401) { clearAdminKey(); return; }
          toast.showToast(err.message, 'error');
        }
        throw err;
      }
    },
  );

  const sortedUsers = createMemo(() => {
    const data = users() ?? [];
    return [...data].sort((a, b) => {
      if (a.is_active !== b.is_active) return a.is_active ? -1 : 1;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  });

  const columns: ColumnDef<AdminUserResponse>[] = [
    {
      key: 'name',
      header: 'Nome',
      render: (row) => (
        <span classList={{ 'opacity-70': !row.is_active }} class="font-medium text-on-surface">
          {row.name}
        </span>
      ),
    },
    {
      key: 'is_active',
      header: 'Stato',
      render: (row) => (
        <span classList={{ 'opacity-70': !row.is_active }}>
          <AdminBadge variant={row.is_active ? 'active' : 'revoked'} dot />
        </span>
      ),
    },
    {
      key: 'created_at',
      header: 'Creato il',
      render: (row) => (
        <span classList={{ 'opacity-70': !row.is_active }}>
          {formatDate(row.created_at)}
        </span>
      ),
    },
    {
      key: 'revoked_at',
      header: 'Revocato il',
      render: (row) => (
        <span classList={{ 'opacity-70': !row.is_active }}>
          {row.revoked_at ? formatDate(row.revoked_at) : '--'}
        </span>
      ),
    },
  ];

  const totalCount = createMemo(() => sortedUsers().length);

  return (
    <div class="space-y-6">
      <PageHeader title="Admin Users" />
      <AdminInfoBanner
        variant="info"
        message="La gestione degli utenti admin avviene esclusivamente via CLI"
      />
      <div class="rounded-xl border border-outline-variant/10 bg-surface-container overflow-hidden shadow-sm shadow-primary/5">
        <div class="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          {/* Left: counter panel */}
          <div class="flex flex-col items-center justify-center p-6 lg:border-r border-outline-variant/10">
            <p class="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Admin Accounts</p>
            <Show when={!users.loading} fallback={<AdminSkeleton variant="text" />}>
              <span class="text-5xl font-bold text-gold">{totalCount()}</span>
              <span class="text-xs text-on-surface-variant mt-1">total</span>
            </Show>
          </div>
          {/* Right: table */}
          <div class="min-w-0">
            <AdminTable
              columns={columns}
              rows={sortedUsers()}
              loading={users.loading}
              emptyIcon="person"
              emptyTitle="Nessun utente admin"
              caption="Lista utenti admin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
