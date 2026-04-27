// WP35 — ChampionGuide container component (DEC-OP-011 carve-out text-first).
//
// Render text-only della guida. Riusa design tokens "Tactical Precision"
// (Stitch frame mancante, vedi DEC-OP-011 + handoff WP37). Pattern allineato
// a `src/routes/[lang]/blog/[slug].tsx`.
//
// Sicurezza: `content_html` e' gia' sanitizzato build-time (rehype-sanitize
// in scripts/compile-content.mjs). NIENTE DOMPurify runtime: la sanitization
// e' build-time per evitare overhead client.

import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import type { ChampionGuide } from '../../data/champions/types';
import { useI18n } from '../../i18n';
import ChampionQuickLearn from './ChampionQuickLearn';
import PatchHistory from './PatchHistory';
import RelatedGuides from './RelatedGuides';

interface ChampionGuideProps {
  guide: ChampionGuide;
  lang: 'en' | 'it';
  /** Se true, mostra banner che invita a leggere `/guide` (latest). */
  outdated?: boolean;
}

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
};

function formatDate(iso: string, lang: 'en' | 'it'): string {
  // last_updated e' YYYY-MM-DD: parsiamo come UTC midnight per evitare drift
  // timezone in SSR.
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString(LOCALE_MAP[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function ChampionGuide(props: ChampionGuideProps): JSX.Element {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };

  return (
    <article class="max-w-4xl mx-auto px-8 pb-24">
      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span
            class="text-[10px] font-bold tracking-widest uppercase text-primary-container bg-primary-container/10 px-2 py-0.5 rounded"
            data-testid="champion-guide-patch-badge"
          >
            {tpl('wp35.champion_guide.patch_badge.label', {
              patch: props.guide.patch,
            })}
          </span>
          <span class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/70">
            {props.guide.role}
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-6">
          {props.guide.title}
        </h1>

        <div class="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant/70">
          <time
            datetime={props.guide.last_updated}
            class="flex items-center gap-2"
          >
            {tpl('wp35.champion_guide.last_updated.label', {
              date: formatDate(props.guide.last_updated, props.lang),
            })}
          </time>
        </div>

        <Show when={props.outdated}>
          <div
            role="status"
            class="mt-6 rounded-lg border border-error/30 bg-error/5 p-4 text-sm text-error"
            data-testid="champion-guide-outdated-banner"
          >
            <p class="mb-2">
              {t('wp35.champion_guide.patch_badge.outdated_warning')}
            </p>
            <a
              href={`/${props.lang}/champion/${props.guide.champion}/guide`}
              class="font-bold underline hover:text-error/80"
            >
              {t('wp35.champion_guide.patch_badge.outdated_link')}
            </a>
          </div>
        </Show>
      </header>

      <Show when={props.guide.quick_learn}>
        {(data) => (
          <ChampionQuickLearn
            data={data()}
            patch={props.guide.patch}
            role={props.guide.role}
          />
        )}
      </Show>

      <div
        class="prose prose-invert max-w-none
          prose-headings:font-headline prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-on-surface
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-p:text-on-surface-variant/90 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-6
          prose-strong:text-primary-container prose-strong:font-bold
          prose-a:text-primary prose-a:underline prose-a:hover:text-primary-container
          prose-ul:text-on-surface-variant/90 prose-li:mb-2"
        innerHTML={props.guide.content_html}
        data-testid="champion-guide-body"
      />

      <PatchHistory
        patches={props.guide.available_patches}
        currentPatch={props.guide.patch}
        lang={props.lang}
        champion={props.guide.champion}
      />

      <RelatedGuides
        related={props.guide.related_champions}
        lang={props.lang}
        role={props.guide.role}
      />
    </article>
  );
}

export default ChampionGuide;
