// src/components/community/FiltersSidebar.tsx
//
// Complementary aside with search filters. Collapsible under 768px
// (the consumer controls open/closed state via `open`/`onToggle`).
//
// Contract: filter mutations go to `onChange`; the sidebar does NOT
// trigger the search itself. The parent calls `store.search()` on
// "Apply" (or auto, per UX choice).

import {
  createResource,
  createSignal,
  For,
  Show,
  onCleanup,
  type JSX,
} from "solid-js";
import { useI18n } from "../../i18n";
import {
  fetchCategories,
  fetchTagSuggestions,
  type CategorySummary,
  type TagItem,
} from "../../services/community-taxonomy-api";
import type { SearchFilters } from "../../stores/community/search-store";
import { debounce } from "../../utils/debounce";

export interface FiltersSidebarProps {
  filters: SearchFilters;
  onChange: <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => void;
  onApply: () => void;
  onReset: () => void;
  /** Current UI locale for category name_i18n fallback. */
  uiLocale: string;
  supportedLanguages: readonly string[];
  open: boolean;
  onToggle: () => void;
}

export default function FiltersSidebar(props: FiltersSidebarProps): JSX.Element {
  const { t } = useI18n();

  const [categories] = createResource<CategorySummary[]>(() =>
    fetchCategories().catch(() => []),
  );

  // tag autocomplete
  const [tagInput, setTagInput] = createSignal(props.filters.tag ?? "");
  const [tagSuggestions, setTagSuggestions] = createSignal<TagItem[]>([]);
  let tagAbort: AbortController | null = null;

  const debouncedTagLookup = debounce(async (prefix: string) => {
    if (tagAbort) tagAbort.abort();
    tagAbort = new AbortController();
    if (prefix.trim().length < 2) {
      setTagSuggestions([]);
      return;
    }
    try {
      const items = await fetchTagSuggestions(prefix, tagAbort.signal);
      setTagSuggestions(items);
    } catch {
      setTagSuggestions([]);
    }
  }, 300);

  onCleanup(() => {
    debouncedTagLookup.cancel();
    if (tagAbort) tagAbort.abort();
  });

  // date-range validation (client-side hint; backend re-checks 422)
  const dateInvalid = () => {
    const a = props.filters.date_from;
    const b = props.filters.date_to;
    return !!(a && b && a > b);
  };

  const catName = (c: CategorySummary) =>
    c.name_i18n[props.uiLocale] ?? c.name_i18n["en"] ?? c.slug;

  return (
    <aside
      role="complementary"
      aria-label={t("community.search.filters.aria_label")}
      class={
        "w-full md:w-72 shrink-0 border border-outline-variant/30 rounded bg-surface-container p-4 " +
        (props.open ? "block" : "hidden md:block")
      }
    >
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-sm font-semibold text-on-surface">
          {t("community.search.filters.title")}
        </h2>
        <button
          type="button"
          class="md:hidden text-sm text-on-surface-variant"
          onClick={props.onToggle}
          aria-expanded={props.open}
        >
          {t("community.search.filters.close")}
        </button>
      </div>

      {/* Category */}
      <div class="mb-3">
        <label for="filter-category" class="block text-sm mb-1 text-on-surface">
          {t("community.search.filters.category")}
        </label>
        <select
          id="filter-category"
          class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
          value={props.filters.category ?? ""}
          onChange={(e) =>
            props.onChange("category", e.currentTarget.value || null)
          }
        >
          <option value="">{t("community.search.filters.category_any")}</option>
          <Show when={categories.loading}>
            <option disabled>{t("community.search.filters.loading")}</option>
          </Show>
          <For each={categories() ?? []}>
            {(c) => <option value={c.slug}>{catName(c)}</option>}
          </For>
        </select>
      </div>

      {/* Tag autocomplete */}
      <div class="mb-3">
        <label for="filter-tag" class="block text-sm mb-1 text-on-surface">
          {t("community.search.filters.tag")}
        </label>
        <input
          id="filter-tag"
          type="text"
          autocomplete="off"
          class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
          value={tagInput()}
          list="tag-suggestions"
          onInput={(e) => {
            const v = e.currentTarget.value;
            setTagInput(v);
            debouncedTagLookup(v);
            props.onChange("tag", v || null);
          }}
          placeholder={t("community.search.filters.tag_placeholder")}
        />
        <datalist id="tag-suggestions">
          <For each={tagSuggestions()}>
            {(ti) => <option value={ti.slug} label={`${ti.slug} (${ti.usage_count})`} />}
          </For>
        </datalist>
      </div>

      {/* Author nickname */}
      <div class="mb-3">
        <label for="filter-author" class="block text-sm mb-1 text-on-surface">
          {t("community.search.filters.author")}
        </label>
        <input
          id="filter-author"
          type="text"
          autocomplete="off"
          maxlength={30}
          class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
          value={props.filters.author_nickname ?? ""}
          onInput={(e) =>
            props.onChange(
              "author_nickname",
              e.currentTarget.value.trim() || null,
            )
          }
        />
      </div>

      {/* Date range */}
      <div class="mb-3 grid grid-cols-2 gap-2">
        <div>
          <label for="filter-date-from" class="block text-sm mb-1 text-on-surface">
            {t("community.search.filters.date_from")}
          </label>
          <input
            id="filter-date-from"
            type="date"
            class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
            value={props.filters.date_from ?? ""}
            onInput={(e) =>
              props.onChange("date_from", e.currentTarget.value || null)
            }
          />
        </div>
        <div>
          <label for="filter-date-to" class="block text-sm mb-1 text-on-surface">
            {t("community.search.filters.date_to")}
          </label>
          <input
            id="filter-date-to"
            type="date"
            class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
            value={props.filters.date_to ?? ""}
            onInput={(e) =>
              props.onChange("date_to", e.currentTarget.value || null)
            }
          />
        </div>
        <Show when={dateInvalid()}>
          <p class="col-span-2 text-xs text-error" role="alert">
            {t("community.search.error.invalid_date_range")}
          </p>
        </Show>
      </div>

      {/* Language */}
      <div class="mb-3">
        <label for="filter-lang" class="block text-sm mb-1 text-on-surface">
          {t("community.search.filters.language")}
        </label>
        <select
          id="filter-lang"
          class="w-full min-h-[44px] border border-outline-variant/50 rounded bg-surface-container text-on-surface px-2"
          value={props.filters.lang ?? ""}
          onChange={(e) => props.onChange("lang", e.currentTarget.value || null)}
        >
          <option value="">{t("community.search.filters.language_any")}</option>
          <For each={props.supportedLanguages}>
            {(l) => <option value={l}>{l.toUpperCase()}</option>}
          </For>
        </select>
      </div>

      <div class="flex gap-2 mt-4">
        <button
          type="button"
          class="flex-1 min-h-[44px] rounded bg-primary text-on-primary hover:opacity-90 disabled:opacity-50"
          disabled={dateInvalid()}
          onClick={props.onApply}
        >
          {t("community.search.filters.apply")}
        </button>
        <button
          type="button"
          class="min-h-[44px] px-3 rounded border border-outline-variant/50 text-on-surface hover:bg-surface-container-highest"
          onClick={props.onReset}
        >
          {t("community.search.filters.reset")}
        </button>
      </div>
    </aside>
  );
}
