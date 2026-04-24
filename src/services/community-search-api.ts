// src/services/community-search-api.ts
//
// Typed client for community public search endpoint.
// No auth, no CSRF. The FE is expected to debounce (500ms) and cancel
// in-flight requests via AbortController to respect the 30 req/min IP
// rate limit enforced by the backend.

const API_BASE = import.meta.env.VITE_COMMUNITY_API_BASE as string;

// ---------- types (mirror search-response.schema.json) ----------

export type SearchSort =
  | "relevance"
  | "latest"
  | "popular"
  | "unanswered"
  | "trending";

export type MatchedIn = "title" | "body" | "post";

export interface SearchAuthor {
  nickname: string | null;
  has_premium_badge: boolean;
  deleted: boolean;
}

export interface SearchHit {
  thread_id: string;
  thread_slug: string;
  title: string;
  snippet: string | null;       // plain-text with <<hl>>...<</hl>> sentinels
  matched_in: MatchedIn;
  author: SearchAuthor | null;
  category_slug: string;
  tag_slugs: string[];
  reply_count: number;
  reaction_count: number;
  language: string;
  rank_score: number;
  created_at: string;           // ISO8601
}

export interface SearchQueryEcho {
  q: string | null;
  sort: SearchSort;
  language: string | null;
  category: string | null;
  tag: string | null;
  author_nickname: string | null;
  date_from: string | null;
  date_to: string | null;
  dictionary_used: "simple";
}

export interface SearchResponse {
  items: SearchHit[];
  next_cursor: string | null;
  total_approx: number;
  has_more: boolean;
  took_ms: number;
  query_echo: SearchQueryEcho;
}

// ---------- request shape ----------

export interface SearchParams {
  q?: string | null;
  category?: string | null;
  tag?: string | null;
  author_nickname?: string | null;
  date_from?: string | null;
  date_to?: string | null;
  sort?: SearchSort;
  lang?: string | null;
  cursor?: string | null;
  limit?: number;                // default 20, max 50
}

// ---------- error ----------

export class SearchApiError extends Error {
  constructor(
    public status: number,
    public errorCode: string,
    message: string,
    public retryAfterSec: number | null,
    public traceId: string | null,
  ) {
    super(message);
    this.name = "SearchApiError";
  }
}

// ---------- fetcher ----------

/**
 * Low-level search fetcher. Throws SearchApiError on non-2xx.
 * Pass `signal` from an AbortController so that callers can cancel
 * in-flight requests when the query changes.
 */
export async function fetchSearch(
  params: SearchParams,
  signal?: AbortSignal,
): Promise<SearchResponse> {
  const url = new URL(`${API_BASE}/api/v1/public/community/search`);

  const push = (k: string, v: string | number | null | undefined) => {
    if (v == null) return;
    const s = typeof v === "number" ? String(v) : v;
    if (s.length === 0) return;
    url.searchParams.set(k, s);
  };

  push("q", params.q);
  push("category", params.category);
  push("tag", params.tag);
  push("author_nickname", params.author_nickname);
  push("date_from", params.date_from);
  push("date_to", params.date_to);
  push("sort", params.sort);
  push("lang", params.lang);
  push("cursor", params.cursor);
  push("limit", params.limit);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "omit",      // public endpoint
    signal,
  });

  const traceId = res.headers.get("x-trace-id");

  if (!res.ok) {
    let code = "generic";
    let detail = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      code = body.error_code ?? code;
      detail = body.detail ?? detail;
    } catch {
      // non-JSON error body; keep defaults
    }
    const retryAfter =
      res.status === 429
        ? Number.parseInt(res.headers.get("retry-after") ?? "", 10) || null
        : null;
    throw new SearchApiError(res.status, code, detail, retryAfter, traceId);
  }

  return (await res.json()) as SearchResponse;
}
