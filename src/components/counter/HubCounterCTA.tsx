// WPCP-040 (CR-063 / Phase 5) — HubCounterCTA component.
//
// CTA prominente sopra-the-fold sull'hub `/[lang]/champion/`. Punta a
// `/[lang]/counter/` (counter-pick search). Visibile su 360x640 senza scroll
// (placement nel header dell'hub, vedi `ChampionGuidesHub.tsx`).
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md (Cross-link)
//   - dev-repository/wp-counter-picker/design/i18n.md §3.3 (counter.cta.*)
//   - dev-repository/wp-counter-picker/design/routing.md §4 (Hub -> Search)

import type { JSX } from 'solid-js';
import type { Lang } from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';

export interface HubCounterCTAProps {
  /** Lingua corrente (dal route param `[lang]`). */
  lang: Lang;
}

export function HubCounterCTA(props: HubCounterCTAProps): JSX.Element {
  const { label } = useCounterI18n();
  const href = (): string => `/${props.lang}/counter/`;

  return (
    <a
      href={href()}
      data-testid="hub-counter-cta"
      class="inline-flex items-center gap-3 rounded-xl border border-primary/40
             bg-primary/10 hover:bg-primary/15 transition-colors
             motion-safe:transition-colors px-4 py-3
             focus-visible:outline focus-visible:outline-2
             focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      {/* Icona inline (SVG): minimo footprint, niente font-icon dependency. */}
      <span
        aria-hidden="true"
        class="inline-flex items-center justify-center w-9 h-9 rounded-lg
               bg-primary/20 text-primary shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 h-5"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </span>
      <span class="flex flex-col leading-tight min-w-0">
        <span class="text-sm md:text-base font-headline font-extrabold text-on-surface truncate">
          {label('counter.cta.hub_label')}
        </span>
        <span class="text-xs md:text-sm text-on-surface-variant/85 truncate">
          {label('counter.cta.hub_subtitle')}
        </span>
      </span>
      <span aria-hidden="true" class="text-primary text-lg ml-1">
        →
      </span>
    </a>
  );
}

export default HubCounterCTA;
