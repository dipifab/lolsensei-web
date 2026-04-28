// CR-057 — Matchup Draft block per WP35.x.
//
// Rendering della sezione "Pick into / Counterpicks" tra Recommended Build
// e Key matchups (livello draft, non gameplay in lane). Derivata dal campo
// `matchup_draft` del frontmatter — niente prosa duplicata nel body.
//
// Posizione DOM: il body markdown viene splittato a build-time dal compile
// script su `## Key matchups` (EN) / `## Matchup chiave` (IT); questo
// componente sta tra le due metà (`content_html_pre` / `content_html_post`).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import type { MatchupDraft } from '../../lib/content/champion-schema';
import { useI18n } from '../../i18n';

interface MatchupDraftProps {
  data: MatchupDraft;
  lang: 'en' | 'it';
}

function capitalize(slug: string): string {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

function ChampionChip(props: { slug: string }): JSX.Element {
  return (
    <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container-high/60 border border-outline/20 text-on-surface-variant">
      {capitalize(props.slug)}
    </span>
  );
}

function MatchupColumn(props: {
  title: string;
  entries: MatchupDraft['pick_into'];
  variant: 'pick_into' | 'counterpicks';
}): JSX.Element {
  const accent =
    props.variant === 'pick_into'
      ? 'border-l-[#49e082]/60'
      : 'border-l-[#ffb4ab]/60';
  const titleColor =
    props.variant === 'pick_into' ? 'text-[#49e082]' : 'text-[#ffb4ab]';
  return (
    <section class="flex flex-col gap-3">
      <h3
        class={`font-headline font-extrabold text-base uppercase tracking-wider ${titleColor}`}
      >
        {props.title}
      </h3>
      <ul class="flex flex-col gap-3">
        <For each={props.entries}>
          {(entry) => (
            <li
              class={`pl-4 border-l-2 ${accent} flex flex-col gap-1.5`}
              data-testid={`matchup-draft-${props.variant}-entry`}
            >
              <p class="font-bold text-on-surface text-sm leading-snug">
                {entry.archetype}
              </p>
              <p class="text-sm text-on-surface-variant/85 leading-relaxed">
                {entry.reason}
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <For each={entry.examples}>
                  {(slug) => <ChampionChip slug={slug} />}
                </For>
              </div>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

export function MatchupDraftBlock(props: MatchupDraftProps): JSX.Element {
  const { t } = useI18n();
  return (
    <section
      class="my-12 rounded-xl border border-outline/20 bg-surface-container/40 p-6 md:p-8"
      data-testid="matchup-draft-block"
      aria-labelledby="matchup-draft-heading"
    >
      <h2
        id="matchup-draft-heading"
        class="font-headline font-extrabold text-2xl md:text-3xl tracking-tight mb-2 text-on-surface"
      >
        {t('wp35.matchup_draft.heading')}
      </h2>
      <p class="text-sm text-on-surface-variant/70 mb-6 leading-relaxed">
        {t('wp35.matchup_draft.subtitle')}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Show when={props.data.pick_into.length}>
          <MatchupColumn
            title={t('wp35.matchup_draft.pick_into_title')}
            entries={props.data.pick_into}
            variant="pick_into"
          />
        </Show>
        <Show when={props.data.counterpicks.length}>
          <MatchupColumn
            title={t('wp35.matchup_draft.counterpicks_title')}
            entries={props.data.counterpicks}
            variant="counterpicks"
          />
        </Show>
      </div>
    </section>
  );
}

export default MatchupDraftBlock;
