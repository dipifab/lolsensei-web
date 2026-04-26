// ConsoleConfigPage — S1 (ux-flows §3.1) lista raggruppata + filtri/search.
//
// REQ-F-CONFIG-002 AC.1/2/3/4/13: 5 categorie collapsed default, counter chiavi
// per categoria, search ILIKE su key+description, filtri requires_restart e
// env_override_active. Search debounced 300ms, sync URL params.
//
// Pattern (allineato a UsersListPage / AllowlistPage):
// - useSearchParams per sync filtri ↔ URL.
// - createResource keyed sui filtri (refetch automatico al cambio).
// - localStorage expand/collapse via expanded-categories-store.
// - Auto-expand su search match (UX hint, ux-flows §3.1).
import {
  Show,
  For,
  createSignal,
  createMemo,
  createResource,
  createEffect,
  onCleanup,
} from 'solid-js';
import { useSearchParams, useNavigate } from '@solidjs/router';
import PageHeader from '../../components/PageHeader';
import ConsoleSkeleton from '../../components/ConsoleSkeleton';
import ConsoleEmptyState from '../../components/ConsoleEmptyState';
import { useToast } from '../../contexts/toast-context';
import { ConsoleApiError } from '../../api/client';
import { listConfig } from '../lib/admin-config-api';
import type {
  AppConfigItem,
  AppConfigListResponse,
  ConfigCategory,
  ListConfigFilters,
} from '../lib/types';
import ConfigCategoryGroup from '../components/ConfigCategoryGroup';
import ConfigEnvOverrideBadge from '../components/ConfigEnvOverrideBadge';
import ConfigRequiresRestartBadge from '../components/ConfigRequiresRestartBadge';
import {
  readExpandedCategories,
  toggleCategory,
  writeExpandedCategories,
} from '../components/expanded-categories-store';
import { formatRelativeTime } from '../lib/format-relative-time';

const CATEGORY_ORDER: readonly ConfigCategory[] = [
  'tunable',
  'flag',
  'url',
  'public_id',
  'tuning',
];

const SEARCH_DEBOUNCE_MS = 300;

interface PageFilters {
  category: ConfigCategory | undefined;
  q: string;
  requiresRestart: boolean;
  envOverrideActive: boolean;
}

function parseCategoryParam(v: string | undefined): ConfigCategory | undefined {
  if (!v) return undefined;
  return (CATEGORY_ORDER as readonly string[]).includes(v)
    ? (v as ConfigCategory)
    : undefined;
}

function parseBoolParam(v: string | undefined): boolean {
  return v === 'true' || v === '1';
}

function previewValue(value: AppConfigItem['value']): string {
  if (value === null || value === undefined) return '∅';
  if (typeof value === 'string') return value.length > 60 ? value.slice(0, 60) + '…' : value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  try {
    const json = JSON.stringify(value);
    return json.length > 60 ? json.slice(0, 60) + '…' : json;
  } catch {
    return '[object]';
  }
}

export default function ConsoleConfigPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // --- Filters state synced to URL ---
  const filters = createMemo<PageFilters>(() => ({
    category: parseCategoryParam(searchParams.category as string | undefined),
    q: (searchParams.q as string | undefined) ?? '',
    requiresRestart: parseBoolParam(searchParams.requires_restart as string | undefined),
    envOverrideActive: parseBoolParam(searchParams.env_override as string | undefined),
  }));

  // --- Search input local state (debounced sync to URL) ---
  const [searchInput, setSearchInput] = createSignal(filters().q);

  // Quando l'URL cambia (es. back-button), riallinea l'input.
  createEffect(() => {
    setSearchInput(filters().q);
  });

  let searchTimer: ReturnType<typeof setTimeout> | undefined;
  function handleSearchChange(raw: string): void {
    setSearchInput(raw);
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setSearchParams({ q: raw === '' ? null : raw }, { replace: true });
    }, SEARCH_DEBOUNCE_MS);
  }
  onCleanup(() => {
    if (searchTimer) clearTimeout(searchTimer);
  });

  // --- Resource: lista config con refetch su filter change ---
  const apiFilters = createMemo<ListConfigFilters>(() => {
    const f = filters();
    const out: ListConfigFilters = {};
    if (f.category) out.category = f.category;
    if (f.q) out.q = f.q;
    if (f.requiresRestart) out.requires_restart = true;
    if (f.envOverrideActive) out.env_override_active = true;
    return out;
  });

  const [data, { refetch }] = createResource<AppConfigListResponse, ListConfigFilters>(
    apiFilters,
    async (f) => {
      try {
        return await listConfig(f);
      } catch (err) {
        if (err instanceof ConsoleApiError) {
          if (err.status !== 401) toast.showToast(err.message, 'error');
        } else {
          toast.showToast('Unexpected error while loading config.', 'error');
        }
        throw err;
      }
    },
  );

  // --- Expanded categories: localStorage + auto-expand on search match ---
  const [expanded, setExpanded] = createSignal<ConfigCategory[]>(readExpandedCategories());

  function toggleExpanded(category: ConfigCategory): void {
    const next = toggleCategory(expanded(), category);
    setExpanded(next);
    writeExpandedCategories(next);
  }

  // Auto-expand su search match: se c'e una query attiva con risultati,
  // espandi tutte le categorie che hanno almeno una match — l'utente trova
  // senza dover cliccare sulle intestazioni (ux-flows §3.1).
  createEffect(() => {
    if (!filters().q) return;
    const items = data()?.items ?? [];
    if (items.length === 0) return;
    const seen = new Set<ConfigCategory>();
    for (const it of items) seen.add(it.category);
    const merged = expanded().slice();
    let changed = false;
    for (const c of seen) {
      if (!merged.includes(c)) {
        merged.push(c);
        changed = true;
      }
    }
    if (changed) {
      setExpanded(merged);
      writeExpandedCategories(merged);
    }
  });

  // --- Grouping: bucket items by category, preserve CATEGORY_ORDER ---
  const grouped = createMemo<Record<ConfigCategory, AppConfigItem[]>>(() => {
    const initial: Record<ConfigCategory, AppConfigItem[]> = {
      tunable: [],
      flag: [],
      url: [],
      public_id: [],
      tuning: [],
    };
    const items = data()?.items ?? [];
    for (const it of items) {
      const bucket = initial[it.category];
      if (bucket) bucket.push(it);
    }
    return initial;
  });

  const totalItems = () => data()?.total ?? 0;
  const byCategory = () => data()?.by_category ?? {};

  function clearFilters(): void {
    setSearchParams(
      { q: null, category: null, requires_restart: null, env_override: null },
      { replace: true },
    );
  }

  function setRequiresRestart(checked: boolean): void {
    setSearchParams(
      { requires_restart: checked ? 'true' : null },
      { replace: true },
    );
  }

  function setEnvOverrideActive(checked: boolean): void {
    setSearchParams(
      { env_override: checked ? 'true' : null },
      { replace: true },
    );
  }

  function goToEdit(key: string): void {
    navigate(`/console/config/${encodeURIComponent(key)}`);
  }

  function goToAudit(): void {
    navigate('/console/config/audit');
  }

  const errorMessage = (): string | null => {
    const err = data.error;
    if (!err) return null;
    if (err instanceof ConsoleApiError) return err.detail || `HTTP ${err.status}`;
    return 'Could not load config.';
  };

  return (
    <div class="space-y-6">
      <PageHeader
        title="Runtime Config"
        subtitle="DB-backed runtime configuration. Edits propagate within ~2s via LISTEN/NOTIFY."
        actions={
          <button
            type="button"
            onClick={goToAudit}
            class="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            Audit Log
          </button>
        }
      />

      {/* Filter bar */}
      <div class="space-y-3 rounded-xl border border-outline-variant/40 bg-surface-container-low p-4">
        <div class="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={searchInput()}
            onInput={(e) => handleSearchChange(e.currentTarget.value)}
            placeholder="Search keys + descriptions..."
            aria-label="Search config keys"
            class="flex-1 min-w-[14rem] rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          />
          <select
            value={filters().category ?? ''}
            onChange={(e) =>
              setSearchParams(
                { category: e.currentTarget.value || null },
                { replace: true },
              )
            }
            aria-label="Filter by category"
            class="rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:border-primary-container focus:outline-none"
          >
            <option value="">All categories</option>
            <For each={CATEGORY_ORDER}>
              {(c) => <option value={c}>{c}</option>}
            </For>
          </select>
        </div>

        <div class="flex flex-wrap items-center gap-4 text-sm text-on-surface">
          <label class="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters().requiresRestart}
              onChange={(e) => setRequiresRestart(e.currentTarget.checked)}
              class="rounded border-outline-variant"
            />
            requires_restart only
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters().envOverrideActive}
              onChange={(e) => setEnvOverrideActive(e.currentTarget.checked)}
              class="rounded border-outline-variant"
            />
            env-override active only
          </label>
          <Show
            when={
              filters().q
              || filters().category
              || filters().requiresRestart
              || filters().envOverrideActive
            }
          >
            <button
              type="button"
              onClick={clearFilters}
              class="ml-auto text-xs text-on-surface-variant hover:text-on-surface underline"
            >
              Clear filters
            </button>
          </Show>
        </div>
      </div>

      {/* Body */}
      <Show
        when={!data.loading || data()}
        fallback={<ConsoleSkeleton variant="card" count={5} height="4rem" />}
      >
        <Show
          when={!errorMessage()}
          fallback={
            <div
              role="alert"
              class="flex items-center justify-between gap-3 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
            >
              <span>{errorMessage()}</span>
              <button
                type="button"
                onClick={() => refetch()}
                class="rounded-lg border border-error/40 px-3 py-1 text-xs font-semibold hover:bg-error/15"
              >
                Reload
              </button>
            </div>
          }
        >
          <Show
            when={totalItems() > 0}
            fallback={
              <ConsoleEmptyState
                icon="search_off"
                title={
                  filters().q
                    ? `No keys match "${filters().q}"`
                    : 'No config keys found'
                }
                subtitle={
                  filters().q
                    ? 'Try a different search term or clear filters.'
                    : 'Run migration 055 to seed the config keys.'
                }
                action={
                  filters().q
                    ? { label: 'Clear filters', onClick: clearFilters }
                    : undefined
                }
              />
            }
          >
            <div class="space-y-3">
              <For each={CATEGORY_ORDER}>
                {(category) => {
                  const items = () => grouped()[category];
                  const count = () => byCategory()[category] ?? items().length;
                  const isExpanded = () => expanded().includes(category);

                  // Nasconde la sezione se non ci sono item dopo i filtri
                  // (es. filtro category=tunable nasconde le altre 4).
                  return (
                    <Show when={items().length > 0 || count() > 0}>
                      <ConfigCategoryGroup
                        category={category}
                        count={count()}
                        expanded={isExpanded()}
                        onToggle={() => toggleExpanded(category)}
                      >
                        <Show
                          when={items().length > 0}
                          fallback={
                            <p class="px-4 py-3 text-sm text-on-surface-variant">
                              No items in this category match the current filters.
                            </p>
                          }
                        >
                          <For each={items()}>
                            {(item) => (
                              <button
                                type="button"
                                onClick={() => goToEdit(item.key)}
                                class="block w-full text-left px-4 py-3 hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                              >
                                <div class="flex flex-wrap items-center gap-2">
                                  <span class="font-mono text-sm font-semibold text-on-surface">
                                    {item.key}
                                  </span>
                                  <span class="text-xs text-on-surface-variant">
                                    [v{item.version}]
                                  </span>
                                  <Show when={item.env_override_active}>
                                    <ConfigEnvOverrideBadge
                                      envVarName={item.env_var_name}
                                    />
                                  </Show>
                                  <Show when={item.requires_restart}>
                                    <ConfigRequiresRestartBadge />
                                  </Show>
                                </div>
                                <Show when={item.description}>
                                  <p class="mt-1 text-xs text-on-surface-variant">
                                    {item.description}
                                  </p>
                                </Show>
                                <p class="mt-1 text-xs text-outline font-mono">
                                  Value: <span class="text-on-surface">{previewValue(item.value)}</span>
                                  {' '} · Type: {item.value_type}
                                  {' '} · Updated: <span title={item.last_updated}>{formatRelativeTime(item.last_updated)}</span>
                                </p>
                              </button>
                            )}
                          </For>
                        </Show>
                      </ConfigCategoryGroup>
                    </Show>
                  );
                }}
              </For>
            </div>

            <p class="text-xs text-outline">
              Total: {totalItems()} config keys
              <Show when={filters().q || filters().category || filters().requiresRestart || filters().envOverrideActive}>
                {' '}(after filters)
              </Show>
            </p>
          </Show>
        </Show>
      </Show>
    </div>
  );
}
