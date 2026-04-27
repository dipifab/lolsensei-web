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

// Data Dragon CDN URL builders. Il frontmatter ha `patch` major.minor (es.
// "14.10"); DD richiede la full version (es. "14.10.1"). La `.1` e' la prima
// release pubblica di ogni patch e copre il 99% dei casi. Iterazione futura:
// fetch versions.json al build per resolver dinamico.
const DD_BASE = 'https://ddragon.leagueoflegends.com/cdn';

function ddVersion(patch: string): string {
  return `${patch}.1`;
}

function championIconUrl(championDdId: string, patch: string): string {
  return `${DD_BASE}/${ddVersion(patch)}/img/champion/${championDdId}.png`;
}

function spellIconUrl(ddSpellId: string, patch: string): string {
  return `${DD_BASE}/${ddVersion(patch)}/img/spell/${ddSpellId}.png`;
}

function itemIconUrl(ddItemId: string, patch: string): string {
  return `${DD_BASE}/${ddVersion(patch)}/img/item/${ddItemId}.png`;
}

/** Fallback pattern: l'<img> assoluta copre la lettera/placeholder se carica;
 *  in 404 si auto-rimuove e il fallback resta visibile. */
function imgWithFallback(props: {
  src: string;
  alt: string;
  classes: string;
}): JSX.Element {
  return (
    <img
      src={props.src}
      alt={props.alt}
      loading="lazy"
      class={`absolute inset-0 w-full h-full object-cover ${props.classes}`}
      onError={(e) => e.currentTarget.remove()}
    />
  );
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
      {/* Header con portrait DD + label sezione */}
      <div class="flex items-center gap-4 mb-6">
        <div class="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg border-2 border-primary-container/60 bg-surface-bright overflow-hidden shadow-[0_0_15px_rgba(240,191,92,0.15)]">
          <span
            class="absolute inset-0 flex items-center justify-center text-primary-container font-headline font-bold text-xl md:text-2xl"
            aria-hidden="true"
          >
            {props.data.champion_dd_id.slice(0, 2).toUpperCase()}
          </span>
          {imgWithFallback({
            src: championIconUrl(props.data.champion_dd_id, props.patch),
            alt: props.data.champion_dd_id,
            classes: '',
          })}
        </div>
        <h2 class="font-headline text-primary-container text-base md:text-lg font-bold uppercase tracking-widest">
          {labels.section}
        </h2>
      </div>

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

      {/* Abilities — stacked full-width per leggibilita' descrizioni */}
      <div class="mb-8">
        <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
          {labels.abilities}
        </h3>
        <div class="flex flex-col gap-2">
          <For each={props.data.abilities}>
            {(ability) => (
              <div class="flex items-start gap-4 bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 md:p-4">
                <div
                  class={`relative w-12 h-12 shrink-0 rounded border border-primary-container/50 bg-surface-bright overflow-hidden ${
                    ability.key === 'R'
                      ? 'shadow-[0_0_10px_rgba(240,191,92,0.3)]'
                      : ''
                  }`}
                >
                  <span
                    class={`absolute inset-0 flex items-center justify-center text-lg font-bold ${ABILITY_COLOR[ability.key]}`}
                    aria-hidden="true"
                  >
                    {ability.key}
                  </span>
                  <Show when={ability.key !== 'P' && ability.dd_spell_id}>
                    {(spellId) =>
                      imgWithFallback({
                        src: spellIconUrl(spellId(), props.patch),
                        alt: ability.name,
                        classes: '',
                      })
                    }
                  </Show>
                </div>
                <div class="min-w-0 flex-1">
                  <div
                    class={`text-sm md:text-base font-bold leading-snug ${ABILITY_COLOR[ability.key]}`}
                  >
                    {ability.name}
                  </div>
                  <div class="text-xs md:text-sm text-on-surface-variant/85 mt-1 leading-relaxed">
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
                    class="relative w-10 h-10 bg-surface-bright rounded border border-outline-variant/50 overflow-hidden"
                    title={item.name}
                    aria-label={item.name}
                  >
                    <span
                      class="absolute inset-0 flex items-center justify-center text-[10px] text-on-surface-variant/60 font-bold"
                      aria-hidden="true"
                    >
                      {item.name.slice(0, 3).toUpperCase()}
                    </span>
                    {imgWithFallback({
                      src: itemIconUrl(item.dd_id, props.patch),
                      alt: item.name,
                      classes: '',
                    })}
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
