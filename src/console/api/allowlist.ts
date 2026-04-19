// Allowlist API client WP21 — CRUD su /api/admin/allowlist + /api/admin/me
// REQ-F-021-003
import { consoleFetch } from './client';

export interface AdminMe {
  google_id: string;
  email: string;
}

export interface AllowlistEntry {
  id: string;
  google_id: string | null;
  email: string;
  is_active: boolean;
  added_at: string;
  added_by_email: string | null;
  notes: string | null;
  revoked_at: string | null;
  revoked_by_email: string | null;
}

export interface AllowlistCreate {
  email: string;
  notes?: string;
}

export interface AllowlistListResponse {
  items: AllowlistEntry[];
  total: number;
  limit: number;
  offset: number;
}

export interface ListAllowlistParams {
  limit?: number;
  offset?: number;
  include_revoked?: boolean;
}

function buildQuery(params: ListAllowlistParams): string {
  const search = new URLSearchParams();
  if (params.limit !== undefined) search.set('limit', String(params.limit));
  if (params.offset !== undefined) search.set('offset', String(params.offset));
  if (params.include_revoked !== undefined) {
    search.set('include_revoked', params.include_revoked ? 'true' : 'false');
  }
  const qs = search.toString();
  return qs ? '?' + qs : '';
}

export function listAllowlist(
  params: ListAllowlistParams = {},
): Promise<AllowlistListResponse> {
  return consoleFetch<AllowlistListResponse>(
    '/api/admin/allowlist' + buildQuery(params),
  );
}

export function createAllowlistEntry(body: AllowlistCreate): Promise<AllowlistEntry> {
  return consoleFetch<AllowlistEntry>('/api/admin/allowlist', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export function revokeAllowlistEntry(googleId: string): Promise<void> {
  return consoleFetch<void>(
    '/api/admin/allowlist/' + encodeURIComponent(googleId),
    { method: 'DELETE' },
  );
}

export function getAdminMe(): Promise<AdminMe> {
  return consoleFetch<AdminMe>('/api/admin/me');
}
