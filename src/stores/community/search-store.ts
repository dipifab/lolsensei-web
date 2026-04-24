// src/stores/community/search-store.ts
//
// Search store: holds filters + cursor + accumulated results (append on
// load-more, replace on new search). Syncs URL via a consumer-provided
// callback so deep-linking works without polluting history.
//
// Usage:
//   const store = createSearchStore({ onUrlSync, initial });
//   store.updateQuery("riot"); store.search();
//   <For each={store.state.results}>{(r) => <Card {...r} />}</For>

import { createStore, produce } from "solid-js/store";
import { batch } from "solid-js";
import {
  fetchSearch,
  SearchApiError,
  type SearchHit,
  type SearchParams,
  type SearchResponse,
  type SearchSort,
} from "../../services/community-search-api";

export interface SearchFilters {
  category: string | null;
  tag: string | null;
  author_nickname: string | null;
  date_from: string | null;   // YYYY-MM-DD
  date_to: string | null;
  lang: string | null;
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  sort: SearchSort;
  cursor: string | null;
  results: SearchHit[];
  total_approx: number;
  has_more: boolean;
  took_ms: number;
  loading: boolean;
  error: {
    code: string;
    message: string;
    retryAfterSec: number | null;
  } | null;
}

export const EMPTY_FILTERS: SearchFilters = {
  category: null,
  tag: null,
  author_nickname: null,
  date_from: null,
  date_to: null,
  lang: null,
};

export const INITIAL_STATE: SearchState = {
  query: "",
  filters: { ...EMPTY_FILTERS },
  sort: "relevance",
  cursor: null,
  results: [],
  total_approx: 0,
  has_more: false,
  took_ms: 0,
  loading: false,
  error: null,
};

export interface CreateStoreOpts {
  /** Called after every successful state mutation that changes URL. */
  onUrlSync: (params: URLSearchParams) => void;
  initial?: Partial<SearchState>;
}

export function createSearchStore(opts: CreateStoreOpts) {
  const [state, setState] = createStore<SearchState>({
    ...INITIAL_STATE,
    ...(opts.initial ?? {}),
    filters: { ...EMPTY_FILTERS, ...(opts.initial?.filters ?? {}) },
  });

  let abort: AbortController | null = null;

  const toUrlParams = (): URLSearchParams => {
    const p = new URLSearchParams();
    if (state.query) p.set("q", state.query);
    if (state.sort !== "relevance") p.set("sort", state.sort);
    const f = state.filters;
    if (f.category) p.set("category", f.category);
    if (f.tag) p.set("tag", f.tag);
    if (f.author_nickname) p.set("author_nickname", f.author_nickname);
    if (f.date_from) p.set("date_from", f.date_from);
    if (f.date_to) p.set("date_to", f.date_to);
    if (f.lang) p.set("lang", f.lang);
    return p;
  };

  const syncUrl = () => opts.onUrlSync(toUrlParams());

  const buildParams = (cursor: string | null): SearchParams => ({
    q: state.query || null,
    category: state.filters.category,
    tag: state.filters.tag,
    author_nickname: state.filters.author_nickname,
    date_from: state.filters.date_from
      ? `${state.filters.date_from}T00:00:00Z`
      : null,
    date_to: state.filters.date_to
      ? `${state.filters.date_to}T23:59:59Z`
      : null,
    sort: state.sort,
    lang: state.filters.lang,
    cursor,
    limit: 20,
  });

  const applyResponse = (res: SearchResponse, append: boolean) => {
    setState(
      produce((s) => {
        s.results = append ? [...s.results, ...res.items] : res.items;
        s.cursor = res.next_cursor;
        s.total_approx = res.total_approx;
        s.has_more = res.has_more;
        s.took_ms = res.took_ms;
        s.loading = false;
        s.error = null;
      }),
    );
  };

  const applyError = (err: unknown) => {
    if ((err as Error)?.name === "AbortError") {
      // silent: superseded by a newer request
      return;
    }
    const e =
      err instanceof SearchApiError
        ? { code: err.errorCode, message: err.message, retryAfterSec: err.retryAfterSec }
        : { code: "generic", message: (err as Error).message ?? "unknown", retryAfterSec: null };
    setState(
      produce((s) => {
        s.loading = false;
        s.error = e;
      }),
    );
  };

  const runSearch = async (append: boolean) => {
    // validation: min 2 chars unless filters drive the query
    const trimmed = state.query.trim();
    const hasFilter =
      !!(state.filters.category ??
        state.filters.tag ??
        state.filters.author_nickname ??
        state.filters.date_from ??
        state.filters.date_to);
    if (!append && trimmed.length < 2 && !hasFilter) {
      setState("error", {
        code: "empty_query",
        message: "Provide at least 2 characters or a filter.",
        retryAfterSec: null,
      });
      return;
    }

    if (abort) abort.abort();
    abort = new AbortController();

    setState("loading", true);
    setState("error", null);
    if (!append) syncUrl();

    try {
      const res = await fetchSearch(
        buildParams(append ? state.cursor : null),
        abort.signal,
      );
      applyResponse(res, append);
    } catch (err) {
      applyError(err);
    }
  };

  return {
    state,
    updateQuery(q: string) {
      setState("query", q);
    },
    updateFilter<K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) {
      setState("filters", key, value);
    },
    updateSort(s: SearchSort) {
      batch(() => {
        setState("sort", s);
        setState("cursor", null);
        setState("results", []);
      });
    },
    search() {
      batch(() => {
        setState("cursor", null);
        setState("results", []);
      });
      return runSearch(false);
    },
    loadMore() {
      if (!state.has_more || !state.cursor || state.loading) return;
      return runSearch(true);
    },
    resetFilters() {
      setState("filters", { ...EMPTY_FILTERS });
    },
    clear() {
      if (abort) abort.abort();
      setState({ ...INITIAL_STATE });
      syncUrl();
    },
  };
}

export type SearchStore = ReturnType<typeof createSearchStore>;
