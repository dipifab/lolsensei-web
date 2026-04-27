// CR-053 — Quick Learn visual block per WP35.1.
//
// Renderizza una "tactical dashboard" compatta sopra alla prosa:
// stats (difficulty / damage / class), abilities, skill order grid,
// combo primario, core items, win condition, weakness.
//
// Design source: Stitch project "LoL Sensei Website Design" (v2 — Extended
// Tactical Dashboard). Tutti i sotto-blocchi sono renderizzati solo se i
// campi schema sono valorizzati (lo schema garantisce coerenza degli array).
//
// Icone Data Dragon: per ora disabilitate (letter chip-only, parita' Stitch).
// L'integrazione icone arriva in una iterazione successiva — vedi DEBT
// ledger entry "DEBT-WP35-stitch-refactor".

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import type {
  AbilityKey,
  QuickLearn,
} from '../../lib/content/champion-schema';
import { useI18n } from '../../i18n';

interface ChampionQuickLearnProps {
  data: QuickLearn;
  /** `major.minor` (es. `14.10`) — usato per il badge "Patch" nelle stats. */
  patch: string;
  /** Ruolo del champion (uppercase per la pill). */
  role: string;
}

const ABILITY_COLOR: Record<AbilityKey, string> = {
  P: 'text-primary-container',
  Q: 'text-[#94cdf7]',
  W: 'text-[#49e082]',
  E: 'text-[#f0bf5c]',
  R: 'text-[#ffb4ab]',
};

const SKILL_COLOR: Record<'Q' | 'W' | 'E' | 'R', string> = {
  Q: 'text-[#94cdf7]',
  W: 'text-[#49e082]',
  E: 'text-[#f0bf5c]',
  R: 'text-[#ffb4ab]',
};

function difficultyPips(value: number): JSX.Element {
  return (
    <div class="flex gap-1" aria-label={`Difficulty ${value} of 5`}>
      <For each={[1, 2, 3, 4, 5]}>
        {(i) => (
          <div
            class={`w-3 h-3 rounded-[2px] ${
              i <= value ? 'bg-primary-container' : 'bg-surface-bright'
            }`}
          />
        )}
      </For>
    </div>
  );
}

function damageLabel(damage: QuickLearn['damage_type']): string {
  return damage.toUpperCase();
}

export function ChampionQuickLearn(
  props: ChampionQuickLearnProps,
): JSX.Element {
  const { t } = useI18n();
  const labels = {
    section: t('wp35.champion_guide.quick_learn.title'),
    difficulty: t('wp35.champion_guide.quick_learn.difficulty'),
    damage: t('wp35.champion_guide.quick_learn.damage'),
    klass: t('wp35.champion_guide.quick_learn.class'),
    patch: t('wp35.champion_guide.quick_learn.patch'),
    abilities: t('wp35.champion_guide.quick_learn.abilities'),
    skill_order: t('wp35.champion_guide.quick_learn.skill_order'),
    combo: t('wp35.champion_guide.quick_learn.combo'),
    core_items: t('wp35.champion_guide.quick_learn.core_items'),
    win_condition: t('wp35.champion_guide.quick_learn.win_condition'),
    weakness: t('wp35.champion_guide.quick_learn.weakness'),
  };

  return (
    <section
      class="mb-12 rounded-xl border border-outline-variant/20 bg-surface-container-highest p-6 md:p-8 shadow-[0_0_40px_rgba(240,191,92,0.06)]"
      aria-label={labels.section}
      data-testid="champion-quick-learn"
    >
      <h2 class="font-headline text-primary-container text-base md:text-lg font-bold uppercase tracking-widest mb-6">
        {labels.section}
      </h2>

      {/* Stats row */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-lg p-3">
          <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
            {labels.difficulty}
          </div>
          {difficultyPips(props.data.difficulty)}
        </div>
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-lg p-3">
          <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
            {labels.damage}
          </div>
          <div class="text-secondary font-bold text-sm">
            {damageLabel(props.data.damage_type)}
          </div>
        </div>
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-lg p-3">
          <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
            {labels.klass}
          </div>
          <div class="text-on-surface font-bold text-sm uppercase">
            {props.data.champion_class}
          </div>
        </div>
        <div class="bg-surface-container-low border border-outline-variant/30 rounded-lg p-3">
          <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
            {labels.patch}
          </div>
          <div class="text-on-surface font-bold text-sm">{props.patch}</div>
        </div>
      </div>

      {/* Abilities row */}
      <div class="mb-8">
        <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
          {labels.abilities}
        </h3>
        <div class="flex flex-wrap gap-3">
          <For each={props.data.abilities}>
            {(ability) => (
              <div class="flex items-center gap-3 bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 flex-1 min-w-[150px]">
                <div
                  class={`w-10 h-10 rounded border border-primary-container/50 bg-surface-bright flex items-center justify-center font-bold ${
                    ABILITY_COLOR[ability.key]
                  } ${
                    ability.key === 'R'
                      ? 'shadow-[0_0_10px_rgba(240,191,92,0.3)]'
                      : ''
                  }`}
                  aria-hidden="true"
                >
                  {ability.key}
                </div>
                <div class="min-w-0">
                  <div
                    class={`text-sm font-bold truncate ${ABILITY_COLOR[ability.key]}`}
                  >
                    {ability.name}
                  </div>
                  <div class="text-xs text-on-surface-variant/80 truncate">
                    {ability.description}
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Skill order */}
      <div class="mb-8 overflow-x-auto">
        <h3 class="text-[10px] text-primary-container font-bold tracking-widest uppercase mb-3">
          {labels.skill_order}
        </h3>
        <div class="flex gap-2 min-w-max pb-2 items-end">
          <For each={props.data.skill_order}>
            {(entry) => (
              <div class="flex flex-col items-center gap-1 justify-end h-[44px]">
                <span class="text-[10px] text-on-surface-variant/60">
                  {entry.level}
                </span>
                <div
                  class={`flex items-center justify-center bg-surface-container-low rounded font-bold ${
                    entry.key === 'R'
                      ? 'w-[32px] h-[32px] text-[15px] border border-error/50 shadow-[0_0_10px_rgba(255,180,171,0.4)]'
                      : 'w-[28px] h-[28px] text-sm border border-outline-variant/30'
                  } ${SKILL_COLOR[entry.key]}`}
                >
                  {entry.key}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Combo + Core items */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
            {labels.combo}
          </h3>
          <div class="flex flex-wrap items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
            <For each={props.data.base_combo}>
              {(token, idx) => (
                <>
                  <Show when={idx() > 0}>
                    <span
                      class="text-primary-container text-sm"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </Show>
                  <span
                    class={`px-3 py-1 rounded font-bold border text-sm ${
                      idx() === props.data.base_combo.length - 1
                        ? 'bg-primary-container text-on-primary-fixed border-primary-container shadow-[0_0_10px_rgba(240,191,92,0.3)]'
                        : 'bg-surface-bright text-on-surface border-outline-variant/30'
                    }`}
                  >
                    {token}
                  </span>
                </>
              )}
            </For>
          </div>
        </div>

        <div>
          <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
            {labels.core_items}
          </h3>
          <div class="flex flex-wrap items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
            <For each={props.data.core_items}>
              {(item, idx) => (
                <>
                  <Show when={idx() > 0}>
                    <span
                      class="text-primary-container/50 text-sm"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </Show>
                  <div
                    class="w-10 h-10 bg-surface-bright rounded border border-outline-variant/50 flex items-center justify-center text-[10px] text-on-surface-variant/60 font-bold"
                    title={item.name}
                    aria-label={item.name}
                  >
                    {item.name.slice(0, 3).toUpperCase()}
                  </div>
                </>
              )}
            </For>
          </div>
        </div>
      </div>

      {/* Win condition + Weakness */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface-container-low border border-outline-variant/20 rounded-lg p-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-tertiary-container" aria-hidden="true">
              ▲
            </span>
            <h3 class="text-[10px] text-primary-container font-bold tracking-widest uppercase">
              {labels.win_condition}
            </h3>
          </div>
          <p class="text-sm text-on-surface/80 leading-relaxed">
            {props.data.win_condition}
          </p>
        </div>
        <div class="bg-surface-container-low border border-outline-variant/20 rounded-lg p-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-error" aria-hidden="true">
              ▼
            </span>
            <h3 class="text-[10px] text-primary-container font-bold tracking-widest uppercase">
              {labels.weakness}
            </h3>
          </div>
          <p class="text-sm text-on-surface/80 leading-relaxed">
            {props.data.weakness}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChampionQuickLearn;
