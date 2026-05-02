// WPCP-041 (CR-063 / Phase 5) — GuideCounterLink component.
//
// Link "vedi counter di {name}" sopra-the-fold sulla pagina guida
// `/[lang]/champion/[champion]/[role]/guide`. Naviga a
// `/[lang]/counter/<champion-slug>` (Detail Page) preservando la lingua.
//
// Note slug: l'href punta al solo `championSlug` (no role), perche la detail
// page usa `parseSlugParam` e di default mostra il counter sui champion-key.
// Volendo agganciare il role specifico della guida si passerebbe
// `championSlug-role`, ma il design (routing.md §4) parla di "counter di X"
// agnostico al ruolo per l'entry-point dalla guida.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md (Cross-link)
//   - dev-repository/wp-counter-picker/design/i18n.md §3.3 (counter.cta.guide_label)
//   - dev-repository/wp-counter-picker/design/routing.md §4 (Guide -> Detail)

import type { JSX } from 'solid-js';
import type { Lang } from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';

export interface GuideCounterLinkProps {
  /** Lingua corrente. */
  lang: Lang;
  /** Slug champion canonical Riot (es. "aatrox", "lee-sin"). NON il segmento
   *  guida `<slug>-<role>`. */
  championSlug: string;
  /** Display name per interpolazione "See {name}'s counters". */
  name: string;
}

export function GuideCounterLink(props: GuideCounterLinkProps): JSX.Element {
  const { label } = useCounterI18n();
  const href = (): string => `/${props.lang}/counter/${props.championSlug}`;
  const text = (): string =>
    label('counter.cta.guide_label', { name: props.name });

  return (
    <a
      href={href()}
      data-testid="guide-counter-link"
      class="inline-flex items-center gap-2 text-sm md:text-base font-medium
             text-primary hover:underline
             focus-visible:outline focus-visible:outline-2
             focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <span aria-hidden="true">⚔</span>
      <span>{text()}</span>
      <span aria-hidden="true" class="ml-0.5">
        →
      </span>
    </a>
  );
}

export default GuideCounterLink;
