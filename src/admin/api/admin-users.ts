import { adminFetch } from './client';
import type { AdminUserResponse } from '../types';

export function fetchAdminUsers(): Promise<AdminUserResponse[]> {
  return adminFetch<AdminUserResponse[]>('/api/admin/admins');
}
