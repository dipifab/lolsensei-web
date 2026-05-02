// WP-AI-LOGS-VIEWER (CR-061) — typed REST client for /api/admin/ai-logs/*
// + /api/admin/users/{id}/refresh-riot-id (TASK-6-001).
//
// Refs:
// - dev-repository/wp-ai-logs-viewer/design/api-contract.md §2, §3, §4
// - dev-repository/wp-ai-logs-viewer/design/ui-design.md §1.1
//
// Decimal e' mappato a `string` (no float lossy): il backend produce
// Decimal Pydantic via str() = JSON string nel response. Tutte le date
// sono ISO-8601 UTC string.
//
// Errori specifici sono modellati come classi dedicate (RateLimitError,
// AuditUnavailableError) cosi' la pagina puo discriminare con instanceof
// senza ispezionare ConsoleApiError.code/status. Tutti estendono
// ConsoleApiError per backward-compat con i consumer esistenti che fanno
// `if (err instanceof ConsoleApiError)`.

import { consoleFetch, ConsoleApiError } from './client';

// ---------------------------------------------------------------------------
// Types — mirror Pydantic schemas in
// backend/app/schemas/admin_ai_logs.py + refresh_riot_id.py
// ---------------------------------------------------------------------------

export interface AILogsGroup {
  riot_match_id: string; // can be literal "(unlinked)"
  user_id: string;
  user_email: string;
  user_email_hashed: boolean;
  user_riot_id: string | null;
  total_cost_usd: string; // Decimal as string
  total_calls: number;
  total_input_tokens: number;
  total_output_tokens: number;
  first_call_at: string; // ISO-8601 UTC
  last_call_at: string;
  request_types: string[];
}

export interface AILogsPagination {
  limit: number;
  offset: number;
  total: number;
}

export interface AILogsListResponse {
  groups: AILogsGroup[];
  pagination: AILogsPagination;
}

export interface AILogsCall {
  ai_usage_log_id: string;
  user_id: string | null;
  request_type: string;
  model_used: string;
  cost_usd: string | null;
  latency_ms: number;
  input_tokens: number;
  output_tokens: number;
  status: string;
  aborted: boolean;
  created_at: string;
  prompt_system: string | null;
  prompt_user: string | null;
  response_raw: string | null;
  has_prompt_log: boolean;
}

export interface AILogsMatchDetailMatch {
  riot_match_id: string;
  user_id: string | null;
  user_email: string;
  user_email_hashed: boolean;
  user_riot_id: string | null;
  total_cost_usd: string;
  total_calls: number;
  total_input_tokens: number;
  total_output_tokens: number;
  first_call_at: string;
  last_call_at: string;
  request_types: string[];
}

export interface AILogsCallPagination {
  offset: number;
  limit: number;
  total: number;
}

export interface AILogsDetailResponse {
  match: AILogsMatchDetailMatch;
  calls: AILogsCall[];
  is_synthetic_unlinked: boolean;
  call_pagination: AILogsCallPagination;
}

export type AILogsSortBy = 'last_call_at' | 'total_cost_usd';

export interface AILogsListFilters {
  start_date?: string; // ISO-8601 UTC; if omitted backend default last 7d
  end_date?: string;
  user_id?: string;
  min_cost_usd?: string;
  limit?: number;
  offset?: number;
  sort_by?: AILogsSortBy;
  include_deleted?: boolean;
  allow_long_range?: boolean;
}

export interface AILogsDetailQuery {
  user_id?: string;
  start_date?: string;
  end_date?: string;
  call_offset?: number;
  call_limit?: number;
}

export interface RefreshRiotIdResolved {
  user_id: string;
  riot_game_name: string;
  riot_tag_line: string;
  refreshed_at: string;
}

export interface RefreshRiotIdSkipped {
  user_id: string;
  skipped: 'no_puuid';
}

export type RefreshRiotIdResponse =
  | RefreshRiotIdResolved
  | RefreshRiotIdSkipped;

// Type guard utili a discriminare i due payload 200.
export function isRefreshRiotIdResolved(
  v: RefreshRiotIdResponse,
): v is RefreshRiotIdResolved {
  return (v as RefreshRiotIdResolved).riot_game_name !== undefined;
}

// ---------------------------------------------------------------------------
// Custom errors
// ---------------------------------------------------------------------------

export class RateLimitError extends ConsoleApiError {
  readonly retryAfterSeconds: number;
  constructor(detail: string, retryAfterSeconds: number) {
    super(429, detail || 'Rate limit', 'RATE_LIMIT');
    this.name = 'RateLimitError';
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class AuditUnavailableError extends ConsoleApiError {
  constructor(detail: string) {
    super(503, detail || 'Audit service unavailable', 'AUDIT_UNAVAILABLE');
    this.name = 'AuditUnavailableError';
  }
}

export class RangeTooLongError extends ConsoleApiError {
  constructor(detail: string) {
    super(422, detail || 'Date range too long', 'RANGE_TOO_LONG');
    this.name = 'RangeTooLongError';
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildQueryString(params: Record<string, unknown>): string {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === '') continue;
    if (typeof v === 'boolean') {
      // Pass booleans only when true: backend default is false on
      // `include_deleted` / `allow_long_range`, so omitting them is the
      // canonical "off" state.
      if (v) u.set(k, 'true');
      continue;
    }
    u.set(k, String(v));
  }
  const s = u.toString();
  return s ? `?${s}` : '';
}

/**
 * Map ConsoleApiError onto the dedicated error class derived from the body
 * shape. The backend returns:
 *   - 429: { error: "rate_limit", retry_after?: number }
 *   - 503: { error: "audit_unavailable" }
 *   - 503: { error: "riot_unavailable" }   (for refresh-riot-id)
 *   - 422: { error: "range_too_long" }
 * ConsoleApiError already parses `detail`/`code`; we re-throw the domain
 * error for the 3 cases that the page should react to specifically.
 */
function mapDomainError(err: unknown): never {
  if (!(err instanceof ConsoleApiError)) throw err;
  const detailText = (err.detail ?? '').toString();

  if (err.status === 429) {
    let retryAfter = 60;
    // The 429 detail body comes from FastAPI's slowapi handler which writes
    // "Rate limit exceeded: ..." OR our custom HTTPException with
    // {"error":"rate_limit","retry_after":N}. Try to parse JSON-shaped detail
    // first; otherwise fall back to default 60s.
    try {
      const parsed = JSON.parse(detailText);
      if (parsed && typeof parsed.retry_after === 'number') {
        retryAfter = parsed.retry_after;
      }
    } catch {
      // detail not JSON; keep default
    }
    throw new RateLimitError(detailText, retryAfter);
  }

  if (err.status === 503 && /audit_unavailable/i.test(detailText)) {
    throw new AuditUnavailableError(detailText);
  }

  if (err.status === 422 && /range_too_long/i.test(detailText)) {
    throw new RangeTooLongError(detailText);
  }

  throw err;
}

// ---------------------------------------------------------------------------
// API methods
// ---------------------------------------------------------------------------

export async function fetchAILogsByMatch(
  filters: AILogsListFilters,
): Promise<AILogsListResponse> {
  try {
    return await consoleFetch<AILogsListResponse>(
      `/api/admin/ai-logs/by-match${buildQueryString(
        filters as Record<string, unknown>,
      )}`,
    );
  } catch (err) {
    mapDomainError(err);
  }
}

export async function fetchAILogsMatchDetail(
  riotMatchId: string,
  query: AILogsDetailQuery = {},
): Promise<AILogsDetailResponse> {
  try {
    return await consoleFetch<AILogsDetailResponse>(
      `/api/admin/ai-logs/by-match/${encodeURIComponent(riotMatchId)}${buildQueryString(
        query as Record<string, unknown>,
      )}`,
    );
  } catch (err) {
    mapDomainError(err);
  }
}

export async function refreshRiotId(
  userId: string,
): Promise<RefreshRiotIdResponse> {
  try {
    return await consoleFetch<RefreshRiotIdResponse>(
      `/api/admin/users/${encodeURIComponent(userId)}/refresh-riot-id`,
      { method: 'POST', body: JSON.stringify({}) },
    );
  } catch (err) {
    mapDomainError(err);
  }
}

export const ConsoleAILogsApi = {
  list: fetchAILogsByMatch,
  detail: fetchAILogsMatchDetail,
  refreshRiotId,
} as const;

export type ConsoleAILogsApiType = typeof ConsoleAILogsApi;
