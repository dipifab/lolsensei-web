// src/services/community-taxonomy-api.ts
//
// Public taxonomy endpoints consumed by FiltersSidebar:
//  - GET /api/v1/public/community/categories    (cache 5 min edge)
//  - GET /api/community/tags?q=...              (prefix autocomplete)

const API_BASE = import.meta.env.VITE_COMMUNITY_API_BASE as string;

export interface CategorySummary {
  id: string;
  slug: string;
  name_i18n: Record<string, string>;
  is_admin_only: boolean;
  is_premium_only: boolean;
  thread_count: number;
}

export interface TagItem {
  id: string;
  slug: string;
  usage_count: number;
}

export async function fetchCategories(
  signal?: AbortSignal,
): Promise<CategorySummary[]> {
  const r = await fetch(
    `${API_BASE}/api/v1/public/community/categories`,
    { method: "GET", credentials: "omit", signal },
  );
  if (!r.ok) throw new Error(`categories HTTP ${r.status}`);
  const body = (await r.json()) as { items: CategorySummary[] };
  return body.items ?? [];
}

export async function fetchTagSuggestions(
  prefix: string,
  signal?: AbortSignal,
  limit = 10,
): Promise<TagItem[]> {
  const url = new URL(`${API_BASE}/api/community/tags`);
  url.searchParams.set("q", prefix);
  url.searchParams.set("limit", String(limit));
  const r = await fetch(url.toString(), {
    method: "GET",
    credentials: "omit",
    signal,
  });
  if (!r.ok) throw new Error(`tags HTTP ${r.status}`);
  const body = (await r.json()) as { items: TagItem[] };
  return body.items ?? [];
}
