import { createResource, createMemo } from 'solid-js';
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

  return (
    <div class="space-y-6">
      <PageHeader title="Admin Users" />
      <AdminInfoBanner
        variant="info"
        message="La gestione degli utenti admin avviene esclusivamente via CLI"
      />
      <AdminTable
        columns={columns}
        rows={sortedUsers()}
        loading={users.loading}
        emptyIcon="person"
        emptyTitle="Nessun utente admin"
        caption="Lista utenti admin"
      />
    </div>
  );
}
