// src/services/community-admin-api.ts
//
// Typed client for community moderation admin endpoints (api-contracts section 4).
// All response shapes are aligned with Pydantic schemas exported via the
// contract export workflow (dev-repository/tests/contracts/community/*).
//
// CSRF: double-submit cookie "community_csrf" mirrored to header
// "x-community-csrf" on mutating requests. Read lazily from document.cookie
// to avoid SSR mismatch (admin routes are client-side only).

const API_BASE = import.meta.env.VITE_COMMUNITY_API_BASE as string;

// ---------- shared types ----------

export type UUID = string;

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  per_page: number;
}

export type ReportStatus = "pending" | "resolved" | "dismissed";
export type ReportReason = "spam" | "abuse" | "competitor" | "other";
export type TargetType = "thread" | "post";
export type ModAction =
  | "dismiss"
  | "delete_target"
  | "warn_user"
  | "ban_temp"
  | "ban_perm"
  | "escalate_to_admin";
export type BulkModAction = "dismiss" | "approve_no_action";
export type CommunityRole = "user" | "moderator" | "admin";

// ---------- response shapes ----------

export interface ReportResponse {
  id: UUID;
  reporter_id: UUID | null;
  reporter_id_redacted: boolean;
  reporter_nickname: string | null;
  target_type: TargetType;
  target_id: UUID;
  reason: ReportReason;
  note: string | null;
  status: ReportStatus;
  handled_by_nickname: string | null;
  handled_at: string | null;
  action_taken: string | null;
  is_high_priority: boolean;
  created_at: string;
}

export interface ModQueueItem {
  report: ReportResponse;
  target_author_nickname: string | null;
  target_title: string | null;
  target_preview: string | null;
  target_deleted: boolean;
}

export interface ModQueueResponse extends Paginated<ModQueueItem> {
  reporter_identity_redacted: boolean;
}

export interface ModActionRequest {
  report_id: UUID;
  action: ModAction;
  reason?: string | null;
  ban_duration_days?: number | null;
  break_glass_override?: boolean;
}

export interface ModActionResponse {
  audit_log_id: UUID;
  applied_at: string;
}

export interface ModBulkActionRequest {
  report_ids: UUID[];
  action: BulkModAction;
  reason: string;
}

export interface BulkActionDetail {
  id: UUID;
  ok: boolean;
  error?: string;
}

export interface ModBulkActionResponse {
  success_count: number;
  failed_count: number;
  details: BulkActionDetail[];
}

export interface AuditLogItem {
  id: UUID;
  actor_id: UUID | null;
  actor_role: string;
  actor_nickname: string | null;
  action: string;
  target_type: string | null;
  target_id: UUID | null;
  reason: string | null;
  details: Record<string, unknown>;
  created_at: string;
}

export type AuditLogListResponse = Paginated<AuditLogItem>;

export interface RoleChangeRequest {
  user_id: UUID;
  new_role: CommunityRole;
  reason: string;
}

export interface CommunityUserSummary {
  id: UUID;
  nickname: string;
  email: string | null;
  role: CommunityRole;
  status: "active" | "banned" | "deleted";
  bans_count: number;
  active_ban_id: UUID | null;
  created_at: string;
}

export interface CategoryAdminRequest {
  slug?: string | null;
  name_i18n?: Record<string, string> | null;
  description_i18n?: Record<string, string> | null;
  is_admin_only?: boolean | null;
  is_premium_only?: boolean | null;
  order_index?: number | null;
}

export interface CategoryAdmin {
  id: UUID;
  slug: string;
  name_i18n: Record<string, string>;
  description_i18n: Record<string, string>;
  is_admin_only: boolean;
  is_premium_only: boolean;
  is_archived: boolean;
  order_index: number;
  thread_count: number;
}

export interface TagItem {
  id: UUID;
  slug: string;
  usage_count: number;
}

export interface TagMergeRequest {
  from_slug: string;
  to_slug: string;
}

// ---------- error type ----------

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly errorCode: string,
    public readonly detail: string,
    public readonly traceId: string | null,
    public readonly retryAfterSeconds: number | null = null,
  ) {
    super(detail);
  }
}

// ---------- fetch helper ----------

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

async function communityFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const method = (init.method ?? "GET").toUpperCase();
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  // CSRF double-submit on mutating requests
  if (method !== "GET" && method !== "HEAD") {
    const csrf = readCookie("community_csrf");
    if (csrf) headers.set("x-community-csrf", csrf);
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    method,
    headers,
    credentials: "include",
  });

  if (res.status === 204) return undefined as T;
  const traceId = res.headers.get("x-trace-id");
  const retryAfter = res.headers.get("retry-after");

  if (!res.ok) {
    let body: { error_code?: string; detail?: string } = {};
    try {
      body = await res.json();
    } catch {
      /* non-JSON error body */
    }
    throw new ApiError(
      res.status,
      body.error_code ?? `http_${res.status}`,
      body.detail ?? res.statusText,
      traceId,
      retryAfter ? Number(retryAfter) : null,
    );
  }

  return (await res.json()) as T;
}

// ---------- queue ----------

export interface QueueQuery {
  status?: ReportStatus | "in_progress";
  category?: string;
  is_high_priority?: boolean;
  target_type?: TargetType;
  from?: string;
  to?: string;
  page?: number;
  per_page?: number;
}

function buildQuery(q: Record<string, unknown>): string {
  const params = new URLSearchParams();
  Object.entries(q).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") params.set(k, String(v));
  });
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

export function fetchModQueue(q: QueueQuery = {}): Promise<ModQueueResponse> {
  return communityFetch<ModQueueResponse>(`/mod/queue${buildQuery(q)}`);
}

// ---------- actions ----------

export function postModAction(
  body: ModActionRequest,
): Promise<ModActionResponse> {
  return communityFetch<ModActionResponse>("/mod/actions", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function postBulkModAction(
  body: ModBulkActionRequest,
): Promise<ModBulkActionResponse> {
  return communityFetch<ModBulkActionResponse>("/mod/bulk-actions", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// ---------- audit ----------

export interface AuditQuery {
  actor_id?: UUID;
  actor_role?: CommunityRole;
  action?: string;
  target_type?: string;
  target_id?: UUID;
  from?: string;
  to?: string;
  page?: number;
  per_page?: number;
}

export function fetchAuditLog(
  q: AuditQuery = {},
): Promise<AuditLogListResponse> {
  return communityFetch<AuditLogListResponse>(
    `/mod/audit${buildQuery(q as Record<string, unknown>)}`,
  );
}

// ---------- users ----------

export interface UserSearchQuery {
  q?: string;
  role?: CommunityRole;
  status?: "active" | "banned" | "deleted";
  page?: number;
  per_page?: number;
}

export function fetchCommunityUsers(
  q: UserSearchQuery = {},
): Promise<Paginated<CommunityUserSummary>> {
  return communityFetch<Paginated<CommunityUserSummary>>(
    `/mod/users${buildQuery(q as Record<string, unknown>)}`,
  );
}

export function postRoleChange(body: RoleChangeRequest): Promise<void> {
  return communityFetch<void>(`/mod/users/${body.user_id}/role`, {
    method: "POST",
    body: JSON.stringify({
      new_role: body.new_role,
      reason: body.reason,
    }),
  });
}

export function revokeBan(banId: UUID, reason: string): Promise<void> {
  return communityFetch<void>(`/mod/bans/${banId}/revoke`, {
    method: "POST",
    body: JSON.stringify({ reason }),
  });
}

// ---------- categories + tags ----------

export function fetchCategoriesAdmin(): Promise<CategoryAdmin[]> {
  return communityFetch<CategoryAdmin[]>("/mod/categories");
}

export function createCategory(
  body: CategoryAdminRequest,
): Promise<CategoryAdmin> {
  return communityFetch<CategoryAdmin>("/mod/categories", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function updateCategory(
  id: UUID,
  body: CategoryAdminRequest,
): Promise<CategoryAdmin> {
  return communityFetch<CategoryAdmin>(`/mod/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function reorderCategory(id: UUID, orderIndex: number): Promise<void> {
  return communityFetch<void>(`/mod/categories/${id}/order`, {
    method: "PATCH",
    body: JSON.stringify({ order_index: orderIndex }),
  });
}

export function archiveCategory(id: UUID): Promise<void> {
  return communityFetch<void>(`/mod/categories/${id}`, { method: "DELETE" });
}

export function fetchTagsAdmin(): Promise<TagItem[]> {
  return communityFetch<TagItem[]>("/mod/tags");
}

export function mergeTags(body: TagMergeRequest): Promise<void> {
  return communityFetch<void>("/mod/tags/merge", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function deleteTag(id: UUID): Promise<void> {
  return communityFetch<void>(`/mod/tags/${id}`, { method: "DELETE" });
}
