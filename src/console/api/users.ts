import { consoleFetch } from './client';
import type {
  AIUsageResponse,
  BillingResponse,
  LimitResponse,
  SubscriptionStatusFilter,
  SuspendResponse,
  TimelineResponse,
  UserDetailResponse,
  UserListResponse,
  UserSortField,
} from '../types';

export interface UserListParams {
  status?: SubscriptionStatusFilter;
  plan_id?: string;
  registered_from?: string;
  registered_to?: string;
  search?: string;
  page?: number;
  page_size?: number;
  sort?: UserSortField;
}

export interface SetLimitBody {
  credits_daily?: number | null;
  credits_weekly?: number | null;
  credits_monthly?: number | null;
  reason: string;
}

export interface DateRangeParams {
  from?: string;
  to?: string;
}

export interface BillingParams extends DateRangeParams {
  page?: number;
  page_size?: number;
}

export interface TimelineParams extends DateRangeParams {
  event_types?: string;
  page?: number;
  page_size?: number;
}

function qs(params: Record<string, unknown>): string {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === '') continue;
    u.set(k, String(v));
  }
  const s = u.toString();
  return s ? `?${s}` : '';
}

export const ConsoleUsersApi = {
  list: (p: UserListParams = {}) =>
    consoleFetch<UserListResponse>(`/api/admin/users${qs(p as Record<string, unknown>)}`),

  detail: (id: string) =>
    consoleFetch<UserDetailResponse>(`/api/admin/users/${id}`),

  suspend: (id: string, reason: string) =>
    consoleFetch<SuspendResponse>(`/api/admin/users/${id}/suspend`, {
      method: 'PUT',
      body: JSON.stringify({ reason }),
    }),

  unsuspend: (id: string, reason: string) =>
    consoleFetch<SuspendResponse>(`/api/admin/users/${id}/unsuspend`, {
      method: 'PUT',
      body: JSON.stringify({ reason }),
    }),

  setLimit: (id: string, body: SetLimitBody) =>
    consoleFetch<LimitResponse>(`/api/admin/users/${id}/limit`, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),

  // TODO(ADR): sending a request body with DELETE is technically allowed
  // (RFC 9110) but is inconsistently handled by intermediaries/CDNs. Once the
  // backend allows a dedicated `POST /limit/remove` (or similar) endpoint, we
  // should switch this call over. Keep the signature aligned with the BE
  // contract as-is for WP15 — do not silently change the verb here.
  removeLimit: (id: string, reason: string) =>
    consoleFetch<LimitResponse>(`/api/admin/users/${id}/limit`, {
      method: 'DELETE',
      body: JSON.stringify({ reason }),
    }),

  billing: (id: string, p: BillingParams = {}) =>
    consoleFetch<BillingResponse>(
      `/api/admin/users/${id}/billing${qs(p as Record<string, unknown>)}`,
    ),

  aiUsage: (id: string, p: DateRangeParams = {}) =>
    consoleFetch<AIUsageResponse>(
      `/api/admin/users/${id}/ai-usage${qs(p as Record<string, unknown>)}`,
    ),

  timeline: (id: string, p: TimelineParams = {}) =>
    consoleFetch<TimelineResponse>(
      `/api/admin/users/${id}/timeline${qs(p as Record<string, unknown>)}`,
    ),
} as const;

export type ConsoleUsersApiType = typeof ConsoleUsersApi;
