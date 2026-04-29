// Stitch: 724478731955543608/e915c1a6dfd8460b90229705e836f306
// CR-054 (WP35.2) — Single guide card for the Champion Guides Hub.
//
// Minimal variant per scope decision B1: shows portrait + role pill +
// difficulty pips + name + class/damage + tagline + patch + last_updated
// + CTA "Read guide". NO win rate / tier / matches metrics — those are
// demanded to CR-055 (WP35.3 Champion Stats Aggregator pipeline) and will
// be slotted in later as additive without touching this component's API.
//
// States: idle (default) | coming-soon (no portrait, lock icon, desaturated).
// The hover state is CSS-only (group-hover:* utilities) — no JS state.

import { Show, For } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

export type GuideCardLocaleData = {
  title: string;
  description: string;
  patch: string;
  last_updated: string;
  champion_class: string | null;
  difficulty: number | null;
  damage_type: string | null;
  champion_dd_id: string | null;
  /** Riot numeric champion key (e.g. "166" for Akshan). When present, used
   *  to address CDragon by stable path; null for guides predating the sync. */
  champion_key: string | null;
};

interface GuideCardProps {
  /** Champion slug kebab-case, e.g. "lee-sin". */
  champion: string;
  /** Role lowercase. */
  role: 'top' | 'jungle' | 'mid' | 'bot' | 'support';
  /** Localized payload from the hub index. */
  locale: GuideCardLocaleData;
  /** Page language; controls href and date formatting. */
  lang: 'en' | 'it';
  /** When true, renders the placeholder variant (no portrait, lock icon). */
  comingSoon?: boolean;
}

const ROLE_COLOR: Record<GuideCardProps['role'], string> = {
  top: 'bg-[#94cdf7]/15 text-[#94cdf7] border-[#94cdf7]/30',
  jungle: 'bg-[#49e082]/15 text-[#49e082] border-[#49e082]/30',
  mid: 'bg-[#f0bf5c]/15 text-[#f0bf5c] border-[#f0bf5c]/30',
  bot: 'bg-[#ffb4ab]/15 text-[#ffb4ab] border-[#ffb4ab]/30',
  support: 'bg-primary-container/15 text-primary-container border-primary-container/30',
};

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
};

const CDRAGON_BASE = 'https://cdn.communitydragon.org/latest/champion';
const DDRAGON_SPLASH_BASE = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash';

/**
 * Fallback: if `champion_dd_id` is null (pre-CR-053 guide), heuristically
 * convert the kebab-case slug to PascalCase (e.g. "lee-sin" -> "LeeSin",
 * "kha-zix" -> "KhaZix"). Covers ~99% of cases; the remaining mismatch
 * results in a broken URL and the `onError` removes the `<img>`,
 * leaving the placeholder visible.
 */
function fallbackDdId(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function portraitUrl(ddId: string, championKey: string | null): string {
  // Prefer the numeric champion key when available: CDragon's `latest` alias
  // resolves reliably by numeric id (e.g. /166/...) but has been observed
  // broken on some slugs (aatrox/ahri/akshan on 2026-04-29). The slug path
  // is kept as a fallback for guides predating the keys sync.
  if (championKey && /^\d+$/.test(championKey)) {
    return `${CDRAGON_BASE}/${championKey}/splash-art/centered`;
  }
  return `${CDRAGON_BASE}/${ddId.toLowerCase()}/splash-art/centered`;
}

/**
 * DDragon splash fallback used when CDragon `latest` returns 502 for some
 * specific slugs (observed 2026-04-29 on aatrox/ahri/akshan: `latest` alias
 * is broken for these three slugs but works on others). The DDragon splash
 * is 1215x717 (≈16:9) but framing is not centered per-character, so we
 * accept slight offset rather than a blank tile.
 */
function ddragonSplashUrl(ddId: string): string {
  return `${DDRAGON_SPLASH_BASE}/${ddId}_0.jpg`;
}

function relativeTime(iso: string, lang: 'en' | 'it'): string {
  // SSR-safe relative time without Intl.RelativeTimeFormat surprises:
  // we render absolute date but with short locale month name.
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString(LOCALE_MAP[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function difficultyPips(value: number | null): JSX.Element {
  return (
    <div class="flex gap-0.5" aria-label={`Difficulty ${value ?? 0} of 5`}>
      <For each={[1, 2, 3, 4, 5]}>
        {(i) => (
          <div
            class={`w-1.5 h-1.5 rounded-full ${
              value !== null && i <= value
                ? 'bg-primary-container'
                : 'bg-on-surface-variant/25'
            }`}
          />
        )}
      </For>
    </div>
  );
}

export function GuideCard(props: GuideCardProps): JSX.Element {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };

  const ddId = (): string =>
    props.locale.champion_dd_id ?? fallbackDdId(props.champion);
  const guideHref = (): string =>
    `/${props.lang}/champion/${props.champion}/${props.role}/guide`;

  return (
    <Show
      when={!props.comingSoon}
      fallback={
        <div
          class="group relative flex flex-col rounded-xl border border-outline/30 bg-surface-container overflow-hidden opacity-60 grayscale"
          data-testid="guide-card-coming-soon"
          aria-label={tpl('wp35.hub.card.coming_soon_aria', {
            champion: props.champion,
          })}
        >
          <div class="aspect-[16/9] relative bg-surface-container-low flex items-center justify-center">
            <span class={`absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${ROLE_COLOR[props.role]}`}>
              {props.role}
            </span>
            {/* Lock icon (Material Symbols heuristic — pure SVG, no font dep). */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10 text-on-surface-variant/50"
              aria-hidden="true"
            >
              <path d="M6 10V8a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h8V8a4 4 0 0 0-8 0v2z" />
            </svg>
          </div>
          <div class="p-4 flex flex-col gap-1.5">
            <h3 class="text-lg font-headline font-extrabold text-on-surface capitalize">
              {props.champion.replace(/-/g, ' ')}
            </h3>
            <p class="text-sm text-on-surface-variant/70 italic">
              {t('wp35.hub.card.coming_soon')}
            </p>
          </div>
        </div>
      }
    >
      <a
        href={guideHref()}
        class="group relative flex flex-col rounded-xl border border-outline/30 bg-surface-container overflow-hidden transition-all duration-200 hover:border-primary-container/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-container/10"
        data-testid="guide-card"
        data-champion={props.champion}
        data-role={props.role}
      >
        <div class="aspect-[16/9] relative bg-surface-container-low overflow-hidden">
          <img
            ref={(el) => {
              // Watchdog timer: when CDragon stalls the connection (TCP open
              // but body never delivered, observed 2026-04-29) the browser
              // never fires `error` and the image stays "loading" forever.
              // After STALL_TIMEOUT we force-switch to the DDragon fallback
              // so the user sees something instead of the broken-image icon.
              const STALL_TIMEOUT = 4000;
              const timer = setTimeout(() => {
                if (
                  el.dataset.fallback !== 'ddragon' &&
                  (!el.complete || el.naturalWidth === 0)
                ) {
                  el.dataset.fallback = 'ddragon';
                  el.src = ddragonSplashUrl(ddId());
                }
              }, STALL_TIMEOUT);
              const cancel = () => clearTimeout(timer);
              el.addEventListener('load', cancel, { once: true });
              el.addEventListener('error', cancel, { once: true });
            }}
            src={portraitUrl(ddId(), props.locale.champion_key ?? null)}
            alt={tpl('wp35.hub.card.portrait_alt', {
              champion: props.champion,
            })}
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallback === 'ddragon') {
                img.remove();
              } else {
                img.dataset.fallback = 'ddragon';
                img.src = ddragonSplashUrl(ddId());
              }
            }}
          />
          {/* Gradient scrim so the role pill + difficulty pips remain legible. */}
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-surface-container/40 pointer-events-none" />
          <span class={`absolute top-3 left-3 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm ${ROLE_COLOR[props.role]}`}>
            {props.role}
          </span>
          <Show when={props.locale.difficulty !== null}>
            <div class="absolute top-3 right-3 backdrop-blur-sm bg-surface-container/40 px-1.5 py-1 rounded">
              {difficultyPips(props.locale.difficulty)}
            </div>
          </Show>
        </div>

        <div class="p-4 flex flex-col gap-2">
          <div class="flex items-baseline justify-between gap-3">
            <h3 class="text-lg font-headline font-extrabold text-on-surface group-hover:text-primary-container transition-colors">
              {props.locale.title}
            </h3>
          </div>

          <Show when={props.locale.champion_class || props.locale.damage_type}>
            <p class="text-xs text-on-surface-variant/70 uppercase tracking-wider font-bold">
              <Show when={props.locale.champion_class}>
                {(c) => <span>{c()}</span>}
              </Show>
              <Show when={props.locale.champion_class && props.locale.damage_type}>
                {' · '}
              </Show>
              <Show when={props.locale.damage_type}>
                {(d) => (
                  <span>
                    {tpl('wp35.hub.card.damage_label', { type: d() })}
                  </span>
                )}
              </Show>
            </p>
          </Show>

          <p class="text-sm text-on-surface-variant/85 leading-snug line-clamp-2">
            {props.locale.description}
          </p>

          <div class="flex items-center justify-between pt-2 mt-1 border-t border-outline/20 text-[11px] text-on-surface-variant/60">
            <span class="flex items-center gap-2">
              <span class="font-bold tracking-wider">v{props.locale.patch}</span>
              <span aria-hidden="true">·</span>
              <time datetime={props.locale.last_updated}>
                {relativeTime(props.locale.last_updated, props.lang)}
              </time>
            </span>
            <span class="text-primary group-hover:text-primary-container font-bold inline-flex items-center gap-1 transition-colors">
              {t('wp35.hub.card.cta_read')}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </a>
    </Show>
  );
}

export default GuideCard;
