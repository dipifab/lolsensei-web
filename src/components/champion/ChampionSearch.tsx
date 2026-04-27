// Stitch: 724478731955543608/b47c593f8d494b0aaab53c74abef41d1
// CR-054 (WP35.2) — Search input + suggestions dropdown for the hub.
//
// Behavior:
// - Input with magnifier icon, debounced query (150ms).
// - Cmd+K / Ctrl+K shortcut focuses the input from anywhere on the page.
// - Suggestions: prefix-first match on champion name (case + accent insensitive)
//   tie-broken by substring match, max 6.
// - Enter applies the query as a hub filter (parent owns state via onQueryChange).
// - Click on a suggestion navigates straight to the guide page.
// - Escape closes the dropdown.
// - Footer hint: "↑↓ to navigate · ↵ to open guide · Esc to close".
//
// Controlled component: parent owns `query` and `onQueryChange` for URL sync.

import { createSignal, onMount, onCleanup, For, Show, createMemo } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

export interface SearchSuggestion {
  /** Champion slug kebab-case. */
  champion: string;
  /** Localized display name. */
  name: string;
  /** Role primary (lowercase). */
  role: string;
  /** Data Dragon ID (PascalCase). */
  dd_id: string;
  /** Patch for portrait URL composition. */
  patch: string;
}

interface ChampionSearchProps {
  /** All searchable entries. The component sorts/scores in-memo. */
  source: SearchSuggestion[];
  /** Current query (controlled). Empty string when idle. */
  query: string;
  /** Fired on debounced input change (URL sync, filter apply). */
  onQueryChange: (q: string) => void;
  /** Page language for guide href. */
  lang: 'en' | 'it';
}

const DD_BASE = 'https://ddragon.leagueoflegends.com/cdn';

function ddVersion(patch: string): string {
  return `${patch}.1`;
}

function portraitUrl(ddId: string, patch: string): string {
  return `${DD_BASE}/${ddVersion(patch)}/img/champion/${ddId}.png`;
}

/**
 * Folds diacritics to ASCII so "kha'zix" matches "khazix" and "lê" matches "le".
 * Uses NFD decomposition + combining mark stripping; safe for SSR (no DOM).
 */
function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

/**
 * Score: 3 = prefix match, 2 = word-boundary match, 1 = substring match.
 * Stable secondary sort by name asc.
 */
function score(query: string, name: string): number {
  if (!query) return 0;
  const nq = normalize(query);
  const nn = normalize(name);
  if (nn.startsWith(nq)) return 3;
  if (new RegExp(`\\b${nq.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(nn))
    return 2;
  if (nn.includes(nq)) return 1;
  return 0;
}

const MAX_SUGGESTIONS = 6;

export function ChampionSearch(props: ChampionSearchProps): JSX.Element {
  const { t } = useI18n();
  const [draft, setDraft] = createSignal(props.query);
  const [open, setOpen] = createSignal(false);
  const [activeIdx, setActiveIdx] = createSignal(-1);
  let inputRef: HTMLInputElement | undefined;
  let containerRef: HTMLDivElement | undefined;
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;

  const suggestions = createMemo(() => {
    const q = draft().trim();
    if (!q) return [] as SearchSuggestion[];
    return props.source
      .map((s) => ({ entry: s, sc: score(q, s.name) }))
      .filter((x) => x.sc > 0)
      .sort((a, b) => {
        if (a.sc !== b.sc) return b.sc - a.sc;
        return a.entry.name.localeCompare(b.entry.name);
      })
      .slice(0, MAX_SUGGESTIONS)
      .map((x) => x.entry);
  });

  function commitDebounced(value: string) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      props.onQueryChange(value);
    }, 150);
  }

  function handleInput(e: Event & { currentTarget: HTMLInputElement }) {
    const v = e.currentTarget.value;
    setDraft(v);
    setOpen(v.trim().length > 0);
    setActiveIdx(-1);
    commitDebounced(v);
  }

  function handleKeyDown(e: KeyboardEvent) {
    const list = suggestions();
    if (e.key === 'ArrowDown' && list.length > 0) {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % list.length);
      setOpen(true);
      return;
    }
    if (e.key === 'ArrowUp' && list.length > 0) {
      e.preventDefault();
      setActiveIdx((i) => (i <= 0 ? list.length - 1 : i - 1));
      setOpen(true);
      return;
    }
    if (e.key === 'Enter') {
      const idx = activeIdx();
      if (idx >= 0 && idx < list.length) {
        e.preventDefault();
        const s = list[idx];
        window.location.href = `/${props.lang}/champion/${s.champion}/guide`;
        return;
      }
      // No active selection → apply as filter immediately (skip debounce).
      if (debounceTimer) clearTimeout(debounceTimer);
      props.onQueryChange(draft());
      setOpen(false);
      return;
    }
    if (e.key === 'Escape') {
      setOpen(false);
      setActiveIdx(-1);
      inputRef?.blur();
    }
  }

  function handleDocumentKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      inputRef?.focus();
      inputRef?.select();
    }
  }

  function handleDocumentClick(e: MouseEvent) {
    if (!containerRef) return;
    if (!containerRef.contains(e.target as Node)) {
      setOpen(false);
    }
  }

  onMount(() => {
    document.addEventListener('keydown', handleDocumentKey);
    document.addEventListener('click', handleDocumentClick);
    onCleanup(() => {
      document.removeEventListener('keydown', handleDocumentKey);
      document.removeEventListener('click', handleDocumentClick);
      if (debounceTimer) clearTimeout(debounceTimer);
    });
  });

  return (
    <div
      ref={containerRef}
      class="relative w-full max-w-lg"
      data-testid="champion-search"
    >
      <div class="relative">
        <span
          aria-hidden="true"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          inputmode="search"
          autocomplete="off"
          spellcheck={false}
          value={draft()}
          onInput={handleInput}
          onFocus={() => {
            if (draft().trim().length > 0) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t('wp35.hub.search.placeholder')}
          aria-label={t('wp35.hub.search.aria_label')}
          aria-expanded={open()}
          aria-controls="champion-search-suggestions"
          class="w-full h-10 pl-9 pr-12 rounded-lg bg-surface-container-low border border-outline/40 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container/60 focus:ring-1 focus:ring-primary-container/40"
          data-testid="champion-search-input"
        />
        <kbd
          aria-hidden="true"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider text-on-surface-variant/60 bg-surface-container border border-outline/40"
        >
          ⌘K
        </kbd>
      </div>

      <Show when={open() && suggestions().length > 0}>
        <div
          id="champion-search-suggestions"
          role="listbox"
          class="absolute top-full left-0 right-0 mt-1 z-30 rounded-lg bg-surface-container-highest border border-outline/40 shadow-xl shadow-surface/40 overflow-hidden"
          data-testid="champion-search-suggestions"
        >
          <div class="py-1.5 px-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60 border-b border-outline/20">
            {t('wp35.hub.search.section_label')}
          </div>
          <ul class="max-h-80 overflow-y-auto">
            <For each={suggestions()}>
              {(s, i) => (
                <li>
                  <a
                    role="option"
                    href={`/${props.lang}/champion/${s.champion}/guide`}
                    class={`flex items-center gap-3 px-3 py-2 transition-colors ${
                      activeIdx() === i()
                        ? 'bg-surface-container'
                        : 'hover:bg-surface-container/60'
                    }`}
                    onMouseEnter={() => setActiveIdx(i())}
                    aria-selected={activeIdx() === i()}
                  >
                    <img
                      src={portraitUrl(s.dd_id, s.patch)}
                      alt=""
                      loading="lazy"
                      class="w-8 h-8 rounded object-cover object-top shrink-0"
                      onError={(e) => e.currentTarget.remove()}
                    />
                    <span class="flex-1 text-sm text-on-surface">{s.name}</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant/60 font-bold">
                      {s.role}
                    </span>
                    <Show when={activeIdx() === i()}>
                      <span
                        aria-hidden="true"
                        class="text-on-surface-variant/60 text-xs"
                      >
                        ↵
                      </span>
                    </Show>
                  </a>
                </li>
              )}
            </For>
          </ul>
          <div class="py-1.5 px-3 text-[10px] text-on-surface-variant/50 border-t border-outline/20 text-center">
            {t('wp35.hub.search.hint_navigate')} ·{' '}
            {t('wp35.hub.search.hint_open')} ·{' '}
            {t('wp35.hub.search.hint_close')}
          </div>
        </div>
      </Show>
    </div>
  );
}

export default ChampionSearch;
