// Stitch: 724478731955543608/721fa2021a384f4193c981c87bcdee0b
// CR-054 (WP35.2) — Champion Guides Hub composition.
//
// Owns the search query + filter state and synchronizes both with the URL
// (?q=&role=mid,top&class=mage&difficulty=2,3&damage=magic). State is kept
// minimal: filtering and search apply both via simple AND (search restricts
// the displayed cards just like a filter).
//
// Source data: `getHubIndex()` from `src/lib/champion/discovery.ts`. The hub
// works even before `src/data/champions/index.json` is regenerated, because
// the discovery layer is a TS function over the per-language datasets.
//
// Filter semantics: AND between groups, OR within a group. Cards without
// a Quick Learn block (pre-CR-053) match every filter group as long as the
// group is empty — they fall into the "unknown" bucket and are still
// surfaced as long as the user hasn't activated that group's filters.

import {
  createMemo,
  createSignal,
  For,
  Show,
} from 'solid-js';
import type { JSX } from 'solid-js';
import { useSearchParams } from '@solidjs/router';
import { useI18n } from '../../i18n';
import {
  getHubIndex,
  pickLocale,
  type HubIndexEntry,
} from '../../lib/champion/discovery';
import GuideCard from './GuideCard';
import ChampionSearch, {
  type SearchSuggestion,
} from './ChampionSearch';
import GuideFilters, {
  type FilterState,
  type FilterRole,
  type FilterClass,
  type FilterDifficulty,
  type FilterDamage,
  hasAnyFilter,
} from './GuideFilters';
import { HubCounterCTA } from '../counter/HubCounterCTA';

interface ChampionGuidesHubProps {
  lang: 'en' | 'it';
  /** Total top-50 target so the counter reads "Showing N of M guides". */
  topTargetCount?: number;
}

const ROLES: FilterRole[] = ['top', 'jungle', 'mid', 'bot', 'support'];
const CLASSES: FilterClass[] = [
  'mage',
  'tank',
  'fighter',
  'marksman',
  'support',
  'assassin',
];
const DIFFS: FilterDifficulty[] = [1, 2, 3, 4, 5];
const DAMAGES: FilterDamage[] = ['magic', 'physical', 'mixed', 'true'];

function parseList<T extends string>(
  raw: string | string[] | undefined,
  allowed: readonly T[],
): T[] {
  if (!raw) return [];
  const v = Array.isArray(raw) ? raw[0] : raw;
  return v
    .split(',')
    .map((p) => p.trim().toLowerCase())
    .filter((p): p is T => (allowed as readonly string[]).includes(p));
}

function parseDiffList(raw: string | string[] | undefined): FilterDifficulty[] {
  if (!raw) return [];
  const v = Array.isArray(raw) ? raw[0] : raw;
  return v
    .split(',')
    .map((p) => Number(p.trim()))
    .filter((n): n is FilterDifficulty =>
      (DIFFS as readonly number[]).includes(n),
    );
}

function classifyForFilter(value: string | null): string {
  // Quick Learn `champion_class` is free-form (e.g. "Juggernaut / Bruiser").
  // Map it to one of our 6 buckets via substring match. Default: empty
  // (means: no class info → never matches an active class filter, but
  // matches when no class filter is active).
  if (!value) return '';
  const v = value.toLowerCase();
  if (v.includes('mage')) return 'mage';
  if (v.includes('tank')) return 'tank';
  if (v.includes('marksman') || v.includes('adc')) return 'marksman';
  if (v.includes('assassin')) return 'assassin';
  if (v.includes('support') || v.includes('enchanter')) return 'support';
  if (
    v.includes('fighter') ||
    v.includes('bruiser') ||
    v.includes('juggernaut') ||
    v.includes('skirmisher') ||
    v.includes('diver')
  )
    return 'fighter';
  return '';
}

function entryMatchesFilters(
  entry: HubIndexEntry,
  data: ReturnType<typeof pickLocale>,
  state: FilterState,
  query: string,
): boolean {
  if (state.roles.length > 0 && !state.roles.includes(entry.role as FilterRole)) {
    return false;
  }
  if (state.classes.length > 0) {
    const bucket = classifyForFilter(data?.champion_class ?? null);
    if (!bucket || !state.classes.includes(bucket as FilterClass)) return false;
  }
  if (state.difficulties.length > 0) {
    const d = data?.difficulty ?? null;
    if (d === null || !state.difficulties.includes(d as FilterDifficulty))
      return false;
  }
  if (state.damages.length > 0) {
    const dt = data?.damage_type ?? null;
    if (!dt || !state.damages.includes(dt as FilterDamage)) return false;
  }
  if (query.trim().length > 0) {
    const q = query.trim().toLowerCase();
    const haystack = `${entry.champion} ${data?.title ?? ''}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  return true;
}

function fallbackDdIdFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

export function ChampionGuidesHub(
  props: ChampionGuidesHubProps,
): JSX.Element {
  const { t } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const [hydrated, setHydrated] = createSignal(false);

  const filterState = createMemo<FilterState>(() => ({
    roles: parseList(searchParams.role, ROLES),
    classes: parseList(searchParams.class, CLASSES),
    difficulties: parseDiffList(searchParams.difficulty),
    damages: parseList(searchParams.damage, DAMAGES),
  }));

  const query = createMemo<string>(() => {
    const raw = searchParams.q;
    const v = Array.isArray(raw) ? raw[0] : raw;
    return typeof v === 'string' ? v : '';
  });

  // After hydration, mark so we can render JS-only enhancements (e.g. live
  // filtering reaction). For SSR the first paint already reflects the URL
  // params via createMemo above.
  if (typeof window !== 'undefined') {
    queueMicrotask(() => setHydrated(true));
  }

  function toggleFilter(group: keyof FilterState, value: string | number) {
    const cur = filterState();
    const list = cur[group] as Array<string | number>;
    const next = list.includes(value)
      ? list.filter((x) => x !== value)
      : [...list, value];
    const paramKey: Record<keyof FilterState, string> = {
      roles: 'role',
      classes: 'class',
      difficulties: 'difficulty',
      damages: 'damage',
    };
    setSearchParams(
      { [paramKey[group]]: next.length === 0 ? undefined : next.join(',') },
      { replace: false, scroll: false },
    );
  }

  function clearAllFilters() {
    setSearchParams(
      {
        role: undefined,
        class: undefined,
        difficulty: undefined,
        damage: undefined,
      },
      { replace: false, scroll: false },
    );
  }

  function setQuery(q: string) {
    setSearchParams(
      { q: q.trim().length === 0 ? undefined : q },
      { replace: false, scroll: false },
    );
  }

  const allEntries = getHubIndex();

  const filtered = createMemo(() =>
    allEntries.filter((e) => {
      const data = pickLocale(e, props.lang);
      if (!data) return false;
      return entryMatchesFilters(e, data, filterState(), query());
    }),
  );

  const searchSource = createMemo<SearchSuggestion[]>(() =>
    allEntries.flatMap((e) => {
      const data = pickLocale(e, props.lang);
      if (!data) return [];
      const ddId = data.champion_dd_id ?? fallbackDdIdFromSlug(e.champion);
      return [
        {
          champion: e.champion,
          name: data.title.split('—')[0].split('-')[0].trim() || e.champion,
          role: e.role,
          dd_id: ddId,
          patch: data.patch,
        },
      ];
    }),
  );

  const totalShown = () => filtered().length;
  const totalAvailable = () =>
    allEntries.filter((e) => pickLocale(e, props.lang) !== null).length;

  return (
    <div class="max-w-7xl mx-auto px-6 md:px-8 pb-24 pt-8" data-testid="hub-root">
      <header class="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-3">
            {t('wp35.hub.heading')}
          </h1>
          <p class="text-base text-on-surface-variant/85 leading-relaxed">
            {t('wp35.hub.subtitle')}
          </p>
          {/* WP-COUNTER-PICKER (CR-063 / WPCP-042): cross-link sopra-the-fold
              verso la counter-pick search. EN+IT only (lang prop e' gia
              ristretto a HubLang). */}
          <div class="mt-4">
            <HubCounterCTA lang={props.lang} />
          </div>
        </div>
        <div
          class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 px-3 py-2 rounded-md border border-outline/40 bg-surface-container/40 self-start md:self-end shrink-0"
          data-testid="hub-counter"
        >
          {t('wp35.hub.counter')
            .replace('{shown}', String(totalShown()))
            .replace(
              '{total}',
              String(props.topTargetCount ?? totalAvailable()),
            )}
        </div>
      </header>

      <div class="sticky top-0 z-20 -mx-6 md:-mx-8 px-6 md:px-8 py-4 mb-6 bg-surface/90 backdrop-blur-sm border-b border-outline/20">
        <div class="flex flex-col gap-3">
          <ChampionSearch
            source={searchSource()}
            query={query()}
            onQueryChange={setQuery}
            lang={props.lang}
          />
          <GuideFilters
            state={filterState()}
            onToggle={toggleFilter}
            onClearAll={clearAllFilters}
          />
        </div>
      </div>

      <Show
        when={filtered().length > 0}
        fallback={
          <div
            class="rounded-xl border border-dashed border-outline/40 bg-surface-container/30 px-8 py-16 text-center"
            data-testid="hub-empty"
          >
            <p class="text-lg font-headline font-bold text-on-surface mb-2">
              {t('wp35.hub.empty.title')}
            </p>
            <p class="text-sm text-on-surface-variant/80 mb-4">
              {t('wp35.hub.empty.body')}
            </p>
            <Show when={hasAnyFilter(filterState()) || query().length > 0}>
              <button
                type="button"
                onClick={() => {
                  clearAllFilters();
                  setQuery('');
                }}
                class="inline-flex items-center px-4 py-2 rounded-md bg-primary-container/15 hover:bg-primary-container/25 text-primary-container text-sm font-bold uppercase tracking-wider"
                data-testid="hub-empty-clear"
              >
                {t('wp35.hub.empty.cta_clear')}
              </button>
            </Show>
          </div>
        }
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-testid="hub-grid"
        >
          <For each={filtered()}>
            {(entry) => {
              const data = pickLocale(entry, props.lang)!;
              return (
                <GuideCard
                  champion={entry.champion}
                  role={entry.role}
                  locale={data}
                  lang={props.lang}
                />
              );
            }}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default ChampionGuidesHub;
