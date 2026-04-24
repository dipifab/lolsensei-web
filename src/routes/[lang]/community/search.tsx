// src/routes/[lang]/community/search.tsx
//
// Public community search. SSR renders the shell (SEO-friendly: title,
// meta description, robots=index,follow) and hydrates the results on
// the client. Query params from the URL bootstrap the store state.

import {
  createMemo,
  createSignal,
  createEffect,
  onCleanup,
  Show,
  For,
  Suspense,
  ErrorBoundary,
} from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { useSearchParams, useNavigate, useParams } from "@solidjs/router";
import { useI18n } from "../../../i18n";
import { formatTemplate } from "../../../lib/datetime";
import SearchBar from "../../../components/community/SearchBar";
import SortControls from "../../../components/community/SortControls";
import FiltersSidebar from "../../../components/community/FiltersSidebar";
import SearchResultCard from "../../../components/community/SearchResultCard";
import SearchSkeleton from "../../../components/community/SearchSkeleton";
import SearchEmptyState from "../../../components/community/SearchEmptyState";
import {
  createSearchStore,
  EMPTY_FILTERS,
  type SearchFilters,
} from "../../../stores/community/search-store";
import type { SearchSort } from "../../../services/community-search-api";

const SUPPORTED_LANGS = [
  "en", "it", "de", "es", "fr", "pt-br", "ko", "zh-Hans",
] as const;

const SORT_VALUES: readonly SearchSort[] = [
  "relevance",
  "latest",
  "popular",
  "unanswered",
  "trending",
];

function bootstrapFromUrl(params: Record<string, string | string[] | undefined>) {
  const first = (k: string): string | null => {
    const v = params[k];
    if (v == null) return null;
    return Array.isArray(v) ? v[0] ?? null : v;
  };
  const sortRaw = (first("sort") ?? "relevance") as SearchSort;
  const filters: SearchFilters = {
    category: first("category"),
    tag: first("tag"),
    author_nickname: first("author_nickname"),
    date_from: first("date_from"),
    date_to: first("date_to"),
    lang: first("lang"),
  };
  return {
    query: first("q") ?? "",
    sort: SORT_VALUES.includes(sortRaw) ? sortRaw : ("relevance" as SearchSort),
    filters: { ...EMPTY_FILTERS, ...filters },
  };
}

export default function CommunitySearchRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initial = bootstrapFromUrl(searchParams);

  const store = createSearchStore({
    initial,
    onUrlSync: (p) => {
      const qs = p.toString();
      const target = `/${params.lang}/community/search${qs ? `?${qs}` : ""}`;
      navigate(target, { replace: true, scroll: false });
    },
  });

  // initial fetch on mount when URL had query or filters
  if (initial.query.trim().length >= 2 || Object.values(initial.filters).some(Boolean)) {
    // fire-and-forget; resource lifecycle handled inside store
    void store.search();
  }

  // 429 retry-after countdown
  const [countdown, setCountdown] = createSignal<number | null>(null);
  createEffect(() => {
    const err = store.state.error;
    if (err?.code === "rate_limited" && err.retryAfterSec) {
      setCountdown(err.retryAfterSec);
    } else if (!err) {
      setCountdown(null);
    }
  });
  let tick: ReturnType<typeof setInterval> | null = null;
  createEffect(() => {
    if (countdown() == null) {
      if (tick) clearInterval(tick);
      tick = null;
      return;
    }
    if (!tick) {
      tick = setInterval(() => {
        const c = countdown();
        if (c == null) return;
        if (c <= 1) setCountdown(null);
        else setCountdown(c - 1);
      }, 1000);
    }
  });
  onCleanup(() => {
    if (tick) clearInterval(tick);
  });

  const [filtersOpen, setFiltersOpen] = createSignal(false);

  const hasResults = () => store.state.results.length > 0;
  const isInitial = () =>
    !store.state.loading &&
    !store.state.error &&
    !hasResults() &&
    store.state.query === "";
  const relevanceDisabled = () => store.state.query.trim().length < 2;

  const totalDisplay = createMemo(() => {
    const s = store.state;
    if (!s.results.length) return null;
    const prefix = s.has_more
      ? formatTemplate(t("community.search.total_approx"), { n: s.total_approx })
      : formatTemplate(t("community.search.results_count"), { n: s.results.length });
    return formatTemplate(t("community.search.results_took_ms"), {
      label: prefix,
      ms: s.took_ms,
    });
  });

  const errorLabel = () => {
    const err = store.state.error;
    if (!err) return "";
    const key = `community.search.error.${err.code}`;
    const translated = t(key);
    // `t()` returns the key itself when missing: fall back to a generic copy.
    if (translated === key) return t("community.search.error.generic");
    return translated;
  };

  return (
    <>
      <Title>{t("community.search.page_title")}</Title>
      <Meta name="description" content={t("community.search.meta_description")} />
      <Meta name="robots" content="index, follow" />

      <a
        href="#results"
        class="sr-only focus:not-sr-only focus:block focus:p-2 focus:bg-primary focus:text-on-primary"
      >
        {t("community.search.skip_to_results")}
      </a>

      <main class="max-w-6xl mx-auto p-4 md:p-6">
        <header class="mb-4">
          <h1 class="text-2xl font-semibold text-on-surface mb-3">
            {t("community.search.h1")}
          </h1>
          <SearchBar
            value={store.state.query}
            onChange={(v) => store.updateQuery(v)}
            onSubmit={() => store.search()}
            onClear={() => store.clear()}
          />
        </header>

        <div class="flex items-center justify-between mb-3 gap-2">
          <SortControls
            value={store.state.sort}
            onChange={(s) => {
              store.updateSort(s);
              if (
                store.state.query.trim().length >= 2 ||
                Object.values(store.state.filters).some(Boolean)
              ) {
                void store.search();
              }
            }}
            relevanceDisabled={relevanceDisabled()}
          />
          <button
            type="button"
            class="md:hidden min-h-[44px] px-3 rounded border border-outline-variant/50 text-on-surface"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen()}
            aria-controls="community-search-filters"
          >
            {t("community.search.filters.toggle")}
          </button>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div id="community-search-filters">
            <FiltersSidebar
              filters={store.state.filters}
              onChange={(k, v) => store.updateFilter(k, v)}
              onApply={() => {
                setFiltersOpen(false);
                void store.search();
              }}
              onReset={() => {
                store.resetFilters();
                void store.search();
              }}
              uiLocale={params.lang}
              supportedLanguages={SUPPORTED_LANGS}
              open={filtersOpen()}
              onToggle={() => setFiltersOpen((o) => !o)}
            />
          </div>

          <section id="results" class="flex-1 min-w-0" aria-live="polite">
            {/* Rate-limit banner (countdown) */}
            <Show when={store.state.error?.code === "rate_limited"}>
              <div
                role="alert"
                class="mb-3 border border-error rounded p-3 bg-error/10 text-sm text-on-surface"
              >
                <p class="font-medium text-error">
                  {t("community.search.error.rate_limited")}
                </p>
                <Show when={countdown() != null}>
                  <p class="text-on-surface-variant">
                    {formatTemplate(t("community.search.rate_limit_retry"), {
                      sec: countdown() ?? 0,
                    })}
                  </p>
                </Show>
              </div>
            </Show>

            {/* Other errors */}
            <Show when={store.state.error && store.state.error.code !== "rate_limited"}>
              <div
                role="alert"
                class="mb-3 border border-error rounded p-3 bg-error/10 text-sm text-error"
              >
                {errorLabel()}
              </div>
            </Show>

            {/* Took_ms + count line */}
            <Show when={totalDisplay()}>
              <p class="text-xs text-on-surface-variant mb-2" aria-live="polite">
                {totalDisplay()}
              </p>
            </Show>

            <ErrorBoundary
              fallback={(_err, reset) => (
                <div
                  role="alert"
                  class="p-4 border border-error rounded text-on-surface"
                >
                  <p>{t("community.search.error.boundary")}</p>
                  <button
                    type="button"
                    onClick={reset}
                    class="mt-2 underline text-primary"
                  >
                    {t("community.search.retry")}
                  </button>
                </div>
              )}
            >
              <Suspense fallback={<SearchSkeleton rows={6} />}>
                <Show
                  when={!store.state.loading || hasResults()}
                  fallback={<SearchSkeleton rows={6} />}
                >
                  <Show
                    when={hasResults()}
                    fallback={
                      <Show
                        when={!isInitial()}
                        fallback={
                          <p class="text-sm text-on-surface-variant">
                            {t("community.search.hint_start_typing")}
                          </p>
                        }
                      >
                        <SearchEmptyState query={store.state.query} lang={params.lang} />
                      </Show>
                    }
                  >
                    <ul role="list" class="flex flex-col gap-3">
                      <For each={store.state.results}>
                        {(hit) => <SearchResultCard hit={hit} lang={params.lang} />}
                      </For>
                    </ul>

                    <Show when={store.state.has_more && store.state.cursor}>
                      <div class="flex justify-center mt-4">
                        <button
                          type="button"
                          class="min-h-[44px] px-4 rounded border border-outline-variant/50 text-on-surface hover:bg-surface-container-highest disabled:opacity-50"
                          disabled={store.state.loading}
                          onClick={() => {
                            // focus management: after append, move focus
                            // to the first newly-appended item.
                            const prevLen = store.state.results.length;
                            const promise = store.loadMore();
                            if (promise) {
                              void promise.then(() => {
                                queueMicrotask(() => {
                                  const items = document.querySelectorAll<HTMLElement>(
                                    '#results ul[role="list"] > li',
                                  );
                                  items[prevLen]?.querySelector<HTMLElement>("a")?.focus();
                                });
                              });
                            }
                          }}
                        >
                          {store.state.loading
                            ? t("community.search.searching")
                            : t("community.search.load_more")}
                        </button>
                      </div>
                    </Show>
                  </Show>
                </Show>
              </Suspense>
            </ErrorBoundary>
          </section>
        </div>
      </main>
    </>
  );
}
