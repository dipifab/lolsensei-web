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

// Runes icons: Riot serves them from the un-versioned root CDN (D-5).
// Pattern differs from item/spell/champion which use `cdn/<patch>/img/...`.
function runeIconUrl(iconPath: string): string {
  return `${DD_BASE}/img/${iconPath}`;
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
    situational_items: t('wp35.champion_guide.quick_learn.situational_items'),
    win_condition: t('wp35.champion_guide.quick_learn.win_condition'),
    weakness: t('wp35.champion_guide.quick_learn.weakness'),
    runes_title: t('wp35.champion_guide.quick_learn.runes.title'),
    runes_primary: t('wp35.champion_guide.quick_learn.runes.primary'),
    runes_secondary: t('wp35.champion_guide.quick_learn.runes.secondary'),
    runes_keystone: t('wp35.champion_guide.quick_learn.runes.keystone'),
    runes_shards: t('wp35.champion_guide.quick_learn.runes.shards'),
    runes_shards_legend: t('wp35.champion_guide.quick_learn.runes.shards_legend'),
    // CR-058 amendment v2 — rationale contestuale rune (rendering condizionale)
    runes_why_these_runes: t('wp35.champion_guide.quick_learn.runes.rationale.why_these_runes'),
    runes_why_secondary: t('wp35.champion_guide.quick_learn.runes.rationale.why_secondary'),
    runes_when_to_switch: t('wp35.champion_guide.quick_learn.runes.rationale.when_to_switch'),
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

      {/* Situational items (opzionale) */}
      <Show when={props.data.situational_items}>
        {(items) => (
          <div class="mb-8">
            <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
              {labels.situational_items}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <For each={items()}>
                {(item) => (
                  <div class="flex items-start gap-3 bg-surface-container-low border border-outline-variant/20 rounded-lg p-3">
                    <div
                      class="relative w-10 h-10 shrink-0 bg-surface-bright rounded border border-outline-variant/50 overflow-hidden"
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
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-bold text-on-surface leading-snug">
                        {item.name}
                      </div>
                      <div class="text-xs text-on-surface-variant/85 mt-1 leading-snug">
                        {item.against}
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}
      </Show>

      {/* Runes block (CR-058 / WP35.6) — render condizionale: 1 keystone +
          3 primary slots + 2 secondary slots + 3 stat shards. URL icone su
          root CDN non versionato (D-5). I nomi runa restano EN per
          CONTENT-RULES §2; le label di sezione sono i18n. */}
      <Show when={props.data.runes}>
        {(runes) => (
          <div class="mb-8">
            <h3 class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-3">
              {labels.runes_title}
            </h3>
            <div class="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 space-y-4">
              {/* Primary tree: keystone + 3 slots */}
              <div>
                <div class="text-[10px] text-primary-container/80 font-bold tracking-widest uppercase mb-2">
                  {labels.runes_primary} · {runes().primary_tree}
                </div>
                <div class="flex flex-wrap items-start gap-3">
                  {/* Keystone — riquadro grande evidenziato */}
                  <div class="flex flex-col items-center gap-1 w-20">
                    <div
                      class="relative w-14 h-14 shrink-0 rounded-full border-2 border-primary-container/70 bg-surface-bright overflow-hidden shadow-[0_0_10px_rgba(240,191,92,0.25)]"
                      title={runes().keystone.name}
                      aria-label={runes().keystone.name}
                    >
                      <span
                        class="absolute inset-0 flex items-center justify-center text-[10px] text-primary-container/70 font-bold"
                        aria-hidden="true"
                      >
                        {runes().keystone.name.slice(0, 3).toUpperCase()}
                      </span>
                      {imgWithFallback({
                        src: runeIconUrl(runes().keystone.icon_path),
                        alt: runes().keystone.name,
                        classes: '',
                      })}
                    </div>
                    <div class="text-[10px] text-on-surface-variant/80 text-center leading-tight">
                      <span class="block uppercase tracking-wider text-primary-container/60 text-[9px] font-bold">
                        {labels.runes_keystone}
                      </span>
                      {runes().keystone.name}
                    </div>
                  </div>
                  {/* Primary slots — 3 perks */}
                  <For each={runes().primary_slots}>
                    {(slot) => (
                      <div class="flex flex-col items-center gap-1 w-20">
                        <div
                          class="relative w-10 h-10 shrink-0 rounded-full border border-outline-variant/50 bg-surface-bright overflow-hidden"
                          title={slot.name}
                          aria-label={slot.name}
                        >
                          <span
                            class="absolute inset-0 flex items-center justify-center text-[10px] text-on-surface-variant/60 font-bold"
                            aria-hidden="true"
                          >
                            {slot.name.slice(0, 3).toUpperCase()}
                          </span>
                          {imgWithFallback({
                            src: runeIconUrl(slot.icon_path),
                            alt: slot.name,
                            classes: '',
                          })}
                        </div>
                        <div class="text-[10px] text-on-surface-variant/80 text-center leading-tight">
                          {slot.name}
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>

              {/* Secondary tree: 2 slots */}
              <div>
                <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
                  {labels.runes_secondary} · {runes().secondary_tree}
                </div>
                <div class="flex flex-wrap items-start gap-3">
                  <For each={runes().secondary_slots}>
                    {(slot) => (
                      <div class="flex flex-col items-center gap-1 w-20">
                        <div
                          class="relative w-10 h-10 shrink-0 rounded-full border border-outline-variant/50 bg-surface-bright overflow-hidden"
                          title={slot.name}
                          aria-label={slot.name}
                        >
                          <span
                            class="absolute inset-0 flex items-center justify-center text-[10px] text-on-surface-variant/60 font-bold"
                            aria-hidden="true"
                          >
                            {slot.name.slice(0, 3).toUpperCase()}
                          </span>
                          {imgWithFallback({
                            src: runeIconUrl(slot.icon_path),
                            alt: slot.name,
                            classes: '',
                          })}
                        </div>
                        <div class="text-[10px] text-on-surface-variant/80 text-center leading-tight">
                          {slot.name}
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>

              {/* Stat shards: 3 badge testuali + legenda */}
              <div>
                <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-2">
                  {labels.runes_shards}
                </div>
                <div class="flex flex-wrap gap-2 mb-1">
                  <For each={runes().stat_shards}>
                    {(shard) => (
                      <span class="px-3 py-1 rounded font-bold border text-xs bg-surface-bright text-on-surface border-outline-variant/30">
                        {shard}
                      </span>
                    )}
                  </For>
                </div>
                <div class="text-[10px] text-on-surface-variant/60 italic">
                  {labels.runes_shards_legend}
                </div>
              </div>

              {/* CR-058 amendment v2 — rationale contestuale (3 sezioni opzionali).
                  Sezioni dirette (no accordion) per leggibilita' al primo colpo
                  d'occhio del novizio: una riga eyebrow (label i18n) + paragrafo
                  testuale. Ogni rationale e' trattato come testo puro: nessun
                  parsing markdown (niente `**bold**`); item/ability names restano
                  come scritti dall'autore. Il `keystone.rationale` non viene
                  renderizzato qui — incorporato in `primary_rationale`. */}
              <Show
                when={
                  runes().primary_rationale ||
                  runes().secondary_rationale ||
                  runes().secondary_alternative
                }
              >
                <div class="border-t border-outline-variant/20 pt-4 space-y-3">
                  <Show when={runes().primary_rationale}>
                    {(text) => (
                      <div>
                        <div class="text-[10px] text-primary-container/80 font-bold tracking-widest uppercase mb-1">
                          {labels.runes_why_these_runes}
                        </div>
                        <p class="text-xs md:text-sm text-on-surface-variant/85 leading-relaxed">
                          {text()}
                        </p>
                      </div>
                    )}
                  </Show>
                  <Show when={runes().secondary_rationale}>
                    {(text) => (
                      <div>
                        <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-1">
                          {labels.runes_why_secondary}
                        </div>
                        <p class="text-xs md:text-sm text-on-surface-variant/85 leading-relaxed">
                          {text()}
                        </p>
                      </div>
                    )}
                  </Show>
                  <Show when={runes().secondary_alternative}>
                    {(text) => (
                      <div>
                        <div class="text-[10px] text-on-surface-variant/70 font-bold tracking-widest uppercase mb-1">
                          {labels.runes_when_to_switch}
                        </div>
                        <p class="text-xs md:text-sm text-on-surface-variant/85 leading-relaxed">
                          {text()}
                        </p>
                      </div>
                    )}
                  </Show>
                </div>
              </Show>
            </div>
          </div>
        )}
      </Show>

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
