// WP-COUNTER-PICKER (CR-063) — ChampionPortrait component.
//
// Estratto da `GuideCard.tsx` (CR-054) per essere riusato anche nel counter
// picker (cells + enemy header). Logica fallback CDragon -> DDragon + skeleton
// + watchdog 2s preservata 1:1 dal comportamento esistente del GuideCard.
//
// Due varianti:
//   - "splash" (16:9): usata da GuideCard nel hub. Mantiene aspect ratio e
//     rendering originale; gli elementi sopra il portrait (role pill,
//     difficulty pips, scrim gradient) sono renderizzati dal consumer dentro
//     un wrapper relative -> NON sono parte di questo componente, per evitare
//     coupling con i casi d'uso.
//   - "square": usata dal counter picker. Sizing fisso per props `size`
//     ('sm' 40px / 'md' 64px / 'lg' 96px). `lazy=false` opzionale per
//     above-the-fold (es. EnemyHeader della detail page).

import { Show, createSignal } from 'solid-js';
import type { JSX } from 'solid-js';

const CDRAGON_BASE = 'https://cdn.communitydragon.org/latest/champion';
const DDRAGON_SPLASH_BASE = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash';

// Watchdog: tempo dopo il quale forziamo lo switch a DDragon se CDragon non ha
// ne emesso load ne error (TCP open ma body mai consegnato, osservato 2026-04-29
// su aatrox/ahri/akshan). Allineato al valore del GuideCard pre-refactor.
const STALL_TIMEOUT = 2000;

/**
 * Heuristica fallback: converte slug kebab-case in PascalCase quando
 * `championDdId` non e' disponibile. Copre ~99% dei casi (es. "lee-sin" ->
 * "LeeSin", "kha-zix" -> "KhaZix"). Lo 1% restante (slug Riot non standard)
 * produce un URL rotto e attiva il fallback `onError`.
 */
export function fallbackDdIdFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * URL CDragon primario. Prefer numeric `championKey` quando disponibile (path
 * piu stabile di `latest/<slug>` su alcuni champion); fallback a slug-lowercase
 * derivato da `ddId`.
 */
export function buildPortraitUrl(ddId: string, championKey: string | null): string {
  if (championKey && /^\d+$/.test(championKey)) {
    return `${CDRAGON_BASE}/${championKey}/splash-art/centered`;
  }
  return `${CDRAGON_BASE}/${ddId.toLowerCase()}/splash-art/centered`;
}

/**
 * URL DDragon di fallback. Splash 1215x717 (≈16:9). Usato quando CDragon
 * fallisce o stalla.
 */
export function buildDdragonSplashUrl(ddId: string): string {
  return `${DDRAGON_SPLASH_BASE}/${ddId}_0.jpg`;
}

export type ChampionPortraitVariant = 'splash' | 'square';
export type ChampionPortraitSize = 'sm' | 'md' | 'lg';

export interface ChampionPortraitProps {
  /** Slug champion canonical (es. "lee-sin"). */
  slug: string;
  /** Riot Data Dragon ID PascalCase (es. "LeeSin"). Se null, derivato dal slug. */
  championDdId?: string | null;
  /** Riot numeric champion key (es. "64"). Se null, fallback su slug-derived URL. */
  championKey?: string | null;
  /** Layout: "splash" 16:9 (GuideCard) | "square" (counter cell/header). */
  variant: ChampionPortraitVariant;
  /** Solo per variant="square". Default "md". */
  size?: ChampionPortraitSize;
  /** Alt text obbligatorio (a11y). Il consumer deve fornire il display name
   *  localizzato gia tradotto. */
  alt: string;
  /** Lazy loading (default true). False per portrait above-the-fold. */
  lazy?: boolean;
}

const SQUARE_SIZE_CLASSES: Record<ChampionPortraitSize, string> = {
  sm: 'w-10 h-10', // 40px
  md: 'w-16 h-16', // 64px
  lg: 'w-24 h-24', // 96px
};

export function ChampionPortrait(props: ChampionPortraitProps): JSX.Element {
  const ddId = (): string => props.championDdId ?? fallbackDdIdFromSlug(props.slug);
  const lazy = (): boolean => props.lazy !== false;
  const initialSrc = (): string => buildPortraitUrl(ddId(), props.championKey ?? null);

  // Tracks whether the splash <img> has fully decoded — used to dismiss the
  // skeleton placeholder. Stays false until either CDragon or the DDragon
  // fallback loads successfully (so a totally failed pair keeps the skeleton
  // visible, which still beats a broken-image icon).
  const [splashLoaded, setSplashLoaded] = createSignal(false);

  const wrapperClass = (): string => {
    if (props.variant === 'splash') {
      return 'aspect-[16/9] relative bg-surface-container-low overflow-hidden';
    }
    const size = props.size ?? 'md';
    return `${SQUARE_SIZE_CLASSES[size]} relative rounded bg-surface-container-low overflow-hidden flex-shrink-0`;
  };

  const imgClass = (): string => {
    if (props.variant === 'splash') {
      return 'absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105';
    }
    return 'absolute inset-0 w-full h-full object-cover object-center';
  };

  return (
    <div class={wrapperClass()} data-testid="champion-portrait">
      {/* Skeleton: subtle pulsing gradient shown until the splash decodes.
          Avoids the "empty tile for 4s" UX when CDragon is slow/stalled.
          Stays visible if both CDragon and DDragon fail. */}
      <Show when={!splashLoaded()}>
        <div
          class="absolute inset-0 animate-pulse bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-low"
          aria-hidden="true"
        />
      </Show>
      <img
        ref={(el) => {
          // Watchdog timer: when CDragon stalls the connection (TCP open
          // but body never delivered) the browser never fires `error` and
          // the image stays "loading" forever. After STALL_TIMEOUT we
          // force-switch to the DDragon fallback so the user sees something
          // instead of the skeleton forever.
          const timer = setTimeout(() => {
            if (
              el.dataset.fallback !== 'ddragon' &&
              (!el.complete || el.naturalWidth === 0)
            ) {
              el.dataset.fallback = 'ddragon';
              el.src = buildDdragonSplashUrl(ddId());
            }
          }, STALL_TIMEOUT);
          const cancel = () => clearTimeout(timer);
          el.addEventListener('load', cancel, { once: true });
          el.addEventListener('error', cancel, { once: true });
        }}
        src={initialSrc()}
        alt={props.alt}
        loading={lazy() ? 'lazy' : 'eager'}
        class={imgClass()}
        onLoad={() => setSplashLoaded(true)}
        onError={(e) => {
          const img = e.currentTarget;
          if (img.dataset.fallback === 'ddragon') {
            img.remove();
          } else {
            img.dataset.fallback = 'ddragon';
            img.src = buildDdragonSplashUrl(ddId());
          }
        }}
      />
    </div>
  );
}

export default ChampionPortrait;
