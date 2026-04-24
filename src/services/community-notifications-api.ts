// src/services/community-notifications-api.ts
//
// Typed client for community notification + preferences + unsubscribe endpoints.
// Schemas are 1:1 with dev-repository/tests/contracts/community/notifications-*.schema.json.
// CSRF double-submit on mutating requests via cookie "community_csrf" mirrored
// to header "x-community-csrf".

const API_BASE = import.meta.env.VITE_COMMUNITY_API_BASE as string;

// ---------- shared types ----------

export type UUID = string;

export type NotificationKind =
  | "reply"
  | "mention"
  | "reaction"
  | "ban"
  | "warn"
  | "pending_result_approved"
  | "pending_result_rejected";

export type TargetType = "thread" | "post" | "user";

export interface AuthorSummary {
  id: UUID;
  nickname: string | null;
  avatar_url: string | null;
  role: "user" | "moderator" | "admin";
  has_premium_badge: boolean;
  deleted: boolean;
}

export interface NotificationItem {
  id: UUID;
  kind: NotificationKind;
  target_type: TargetType | null;
  target_id: UUID | null;
  actor: AuthorSummary | null;
  payload: Record<string, unknown>;     // shape varies per kind
  read_at: string | null;               // ISO8601
  created_at: string;                   // ISO8601
}

export interface NotificationListResponse {
  items: NotificationItem[];
  next_cursor: string | null;
  unread_count: number;
}

export interface NotificationReadRequest {
  ids: UUID[] | null;                   // null => mark-all
}

export interface NotificationReadResponse {
  updated_count: number;
}

export interface NotificationPreferencesUpdate {
  digest_optin: boolean;
  email_reply_optout: boolean;
  bell_enabled?: boolean;               // default true
}

export interface NotificationPreferencesResponse {
  digest_optin: boolean;
  email_reply_optout: boolean;
  bell_enabled: boolean;
}

export interface UnsubscribeResponse {
  status: "ok";
  kind: "all" | "digest" | "reply" | "mention" | "warn" | "ban" | "pending";
  applied_at: string;
}

export interface PreferencesLinkResponse {
  unsubscribe_url: string;
  preferences_url: string;
  kind: string;
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
  opts: { withAuth?: boolean } = { withAuth: true },
): Promise<T> {
  const method = (init.method ?? "GET").toUpperCase();
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (method !== "GET" && method !== "HEAD") {
    const csrf = readCookie("community_csrf");
    if (csrf) headers.set("x-community-csrf", csrf);
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    method,
    headers,
    credentials: opts.withAuth === false ? "omit" : "include",
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

// ---------- notifications list (§5.1) ----------

export interface NotificationsListQuery {
  only_unread?: boolean;
  cursor?: string;
  limit?: number;                       // default 10, max 50
}

export function fetchNotifications(
  q: NotificationsListQuery = {},
): Promise<NotificationListResponse> {
  const params = new URLSearchParams();
  if (q.only_unread) params.set("only_unread", "true");
  if (q.cursor) params.set("cursor", q.cursor);
  if (q.limit != null) params.set("limit", String(q.limit));
  const qs = params.toString();
  return communityFetch<NotificationListResponse>(
    `/notifications${qs ? `?${qs}` : ""}`,
  );
}

// ---------- mark read (§5.2) ----------

export function postNotificationsRead(
  ids: UUID[] | null,
): Promise<NotificationReadResponse> {
  return communityFetch<NotificationReadResponse>("/notifications/read", {
    method: "POST",
    body: JSON.stringify({ ids }),
  });
}

// ---------- preferences (§5.3) ----------

export function putNotificationPreferences(
  body: NotificationPreferencesUpdate,
): Promise<NotificationPreferencesResponse> {
  return communityFetch<NotificationPreferencesResponse>(
    "/me/preferences/notifications",
    { method: "PUT", body: JSON.stringify(body) },
  );
}

// ---------- unsubscribe (public, no auth) ----------

export interface UnsubscribeQuery {
  token: string;
  kind: "all" | "digest" | "reply" | "mention" | "warn" | "ban" | "pending";
  lang?: string;
}

export function fetchUnsubscribe(
  q: UnsubscribeQuery,
): Promise<UnsubscribeResponse> {
  const params = new URLSearchParams({ token: q.token, kind: q.kind });
  if (q.lang) params.set("lang", q.lang);
  return communityFetch<UnsubscribeResponse>(
    `/unsubscribe?${params.toString()}`,
    { method: "GET" },
    { withAuth: false },
  );
}

// ---------- preferences-link (auth, per email footer generator) ----------

export function postPreferencesLink(
  kind: "all" | "digest" | "reply",
): Promise<PreferencesLinkResponse> {
  return communityFetch<PreferencesLinkResponse>(
    "/unsubscribe/preferences-link",
    { method: "POST", body: JSON.stringify({ kind }) },
  );
}

// ---------- notification routing helper ----------

/**
 * Build the in-app URL to navigate when user clicks a notification item.
 * Returns null if the notification has no meaningful target (e.g. user-level ban).
 */
export function buildNotificationTargetUrl(
  lang: string,
  notif: NotificationItem,
): string | null {
  const p = notif.payload ?? {};
  const threadSlug = typeof p.thread_slug === "string" ? p.thread_slug : null;
  const postId = typeof p.post_id === "string" ? p.post_id : null;
  switch (notif.kind) {
    case "reply":
    case "mention":
      if (threadSlug) {
        return postId
          ? `/${lang}/community/t/${threadSlug}#post-${postId}`
          : `/${lang}/community/t/${threadSlug}`;
      }
      return null;
    case "reaction":
      return threadSlug ? `/${lang}/community/t/${threadSlug}` : null;
    case "pending_result_approved":
    case "pending_result_rejected":
      return threadSlug
        ? `/${lang}/community/t/${threadSlug}`
        : `/${lang}/community/me`;
    case "warn":
    case "ban":
      return `/${lang}/community/me`;
    default:
      return null;
  }
}
