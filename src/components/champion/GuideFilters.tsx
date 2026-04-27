// Stitch: 724478731955543608/3bbfeaeb40c14443874a50395baca934
// CR-054 (WP35.2) — Guide hub filter chip groups.
//
// Four independent multi-select groups: Role | Class | Difficulty | Damage.
// Within a group, selected values combine via OR. Between groups, AND.
// Pre-CR-053 guides without quick_learn fields are NOT excluded — they
// match the "unknown" bucket if no class/difficulty/damage filter is active,
// preserving zero-false-negative behavior during WP35.1 rollout.
//
// Controlled component: parent owns the state and URL query sync (?role=mid&class=mage&...).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

export type FilterRole = 'top' | 'jungle' | 'mid' | 'bot' | 'support';
export type FilterClass =
  | 'mage'
  | 'tank'
  | 'fighter'
  | 'marksman'
  | 'support'
  | 'assassin';
export type FilterDifficulty = 1 | 2 | 3 | 4 | 5;
export type FilterDamage = 'magic' | 'physical' | 'mixed' | 'true';

export interface FilterState {
  roles: FilterRole[];
  classes: FilterClass[];
  difficulties: FilterDifficulty[];
  damages: FilterDamage[];
}

interface GuideFiltersProps {
  state: FilterState;
  onToggle: (group: keyof FilterState, value: string | number) => void;
  onClearAll: () => void;
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
const DIFFICULTIES: FilterDifficulty[] = [1, 2, 3, 4, 5];
const DAMAGES: FilterDamage[] = ['magic', 'physical', 'mixed', 'true'];

function chipClass(active: boolean): string {
  const base =
    'inline-flex items-center justify-center h-7 px-3 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-colors cursor-pointer select-none';
  return active
    ? `${base} bg-primary-container/15 text-primary-container border-primary-container/50 hover:bg-primary-container/25`
    : `${base} bg-transparent text-on-surface-variant/80 border-outline/40 hover:border-on-surface-variant/60 hover:text-on-surface`;
}

export function hasAnyFilter(s: FilterState): boolean {
  return (
    s.roles.length > 0 ||
    s.classes.length > 0 ||
    s.difficulties.length > 0 ||
    s.damages.length > 0
  );
}

export function GuideFilters(props: GuideFiltersProps): JSX.Element {
  const { t } = useI18n();

  return (
    <div
      class="flex flex-wrap items-center gap-x-6 gap-y-3 py-3"
      data-testid="guide-filters"
      role="group"
      aria-label={t('wp35.hub.filters.aria_label')}
    >
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60 shrink-0 mr-1">
          {t('wp35.hub.filters.role_label')}
        </span>
        <For each={ROLES}>
          {(r) => (
            <button
              type="button"
              class={chipClass(props.state.roles.includes(r))}
              onClick={() => props.onToggle('roles', r)}
              data-testid={`filter-chip-role-${r}`}
              aria-pressed={props.state.roles.includes(r)}
            >
              {t(`wp35.hub.filters.role.${r}`)}
            </button>
          )}
        </For>
      </div>

      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60 shrink-0 mr-1">
          {t('wp35.hub.filters.class_label')}
        </span>
        <For each={CLASSES}>
          {(c) => (
            <button
              type="button"
              class={chipClass(props.state.classes.includes(c))}
              onClick={() => props.onToggle('classes', c)}
              data-testid={`filter-chip-class-${c}`}
              aria-pressed={props.state.classes.includes(c)}
            >
              {t(`wp35.hub.filters.class.${c}`)}
            </button>
          )}
        </For>
      </div>

      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60 shrink-0 mr-1">
          {t('wp35.hub.filters.difficulty_label')}
        </span>
        <For each={DIFFICULTIES}>
          {(d) => (
            <button
              type="button"
              class={chipClass(props.state.difficulties.includes(d))}
              onClick={() => props.onToggle('difficulties', d)}
              data-testid={`filter-chip-difficulty-${d}`}
              aria-pressed={props.state.difficulties.includes(d)}
            >
              {d}
            </button>
          )}
        </For>
      </div>

      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60 shrink-0 mr-1">
          {t('wp35.hub.filters.damage_label')}
        </span>
        <For each={DAMAGES}>
          {(d) => (
            <button
              type="button"
              class={chipClass(props.state.damages.includes(d))}
              onClick={() => props.onToggle('damages', d)}
              data-testid={`filter-chip-damage-${d}`}
              aria-pressed={props.state.damages.includes(d)}
            >
              {t(`wp35.hub.filters.damage.${d}`)}
            </button>
          )}
        </For>
      </div>

      <Show when={hasAnyFilter(props.state)}>
        <button
          type="button"
          onClick={() => props.onClearAll()}
          class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant hover:text-primary-container underline underline-offset-2 ml-auto"
          data-testid="filters-clear-all"
        >
          {t('wp35.hub.filters.clear_all')}
        </button>
      </Show>
    </div>
  );
}

export default GuideFilters;
