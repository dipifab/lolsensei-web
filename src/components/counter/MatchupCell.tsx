// WPCP-031 (CR-063) — MatchupCell component (Counter Detail Page).
//
// Cella matchup di una colonna detail. E' un `<a>` che punta alla guida
// sorgente all'ancora corretta (#matchup-draft-pick-into o
// #matchup-draft-counterpicks). Contiene:
//   - portrait sm 40px (lazy: vero per le celle sotto-the-fold)
//   - publisher display_name + role tag
//   - rationale_excerpt con line-clamp-2 per overflow su mobile 360x640
//
// Helper riusati da `src/lib/counter/types.ts`:
//   - resolveGuideChampionSlug(cell, champions) -> "<champion>" (con `gp` fallback)
//   - resolveSourceAnchor(lang, championSlug, role, via) -> URL completo con anchor
//   - resolveRationale(cell, rationales) -> stringa rationale dedupata
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §3 (MatchupCell)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2 (ARIA)
//   - dev-repository/wp-counter-picker/design/data-model.md §3.1 (helper)

import type { JSX } from 'solid-js';
import {
  resolveGuideChampionSlug,
  resolveRationale,
  resolveSourceAnchor,
  type ChampionMeta,
  type Lang,
  type MatchupCell as MatchupCellData,
  type MatchupVia,
} from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';
import { ChampionPortrait } from '../champion/ChampionPortrait';

export interface MatchupCellProps {
  /** Lingua corrente (preserva `/[lang]/` nell'href della guida). */
  lang: Lang;
  /** Dati cella dal reverse index (`by_enemy[enemy].is_*[i]`). */
  cell: MatchupCellData;
  /** Origine semantica: pick_into = publisher e' forte contro l'enemy;
   *  counterpick = publisher e' debole contro l'enemy.
   *  Determina l'anchor (#matchup-draft-pick-into | -counterpicks). */
  via: MatchupVia;
  /** Display name dell'enemy (subject della pagina detail). Usato solo per
   *  l'aria-label del link, non per il testo visibile della cella. */
  enemyDisplayName: string;
  /** Tabella champions dell'indice (lookup publisher meta). */
  champions: Record<string, ChampionMeta>;
  /** Tabella rationales dedupata (lookup excerpt). */
  rationales: string[];
  /** Lazy-loading portrait (default true: cella tipica sotto-the-fold). */
  lazy?: boolean;
}

export function MatchupCell(props: MatchupCellProps): JSX.Element {
  const { label } = useCounterI18n();

  // Lookup publisher meta. Fallback difensivo (slug stesso come display_name)
  // se la cella punta a uno slug non presente nei champions: il builder
  // garantisce integrita V3, ma il client deve degradare senza crash.
  const meta = (): ChampionMeta | undefined => props.champions[props.cell.c];
  const displayName = (): string => meta()?.display_name ?? props.cell.c;
  const ddId = (): string | null => meta()?.dd_id ?? null;
  const championKey = (): string | null => meta()?.key ?? null;

  const championSlug = (): string =>
    resolveGuideChampionSlug(props.cell, props.champions);
  const href = (): string =>
    resolveSourceAnchor(props.lang, championSlug(), props.cell.role, props.via);
  const excerpt = (): string => resolveRationale(props.cell, props.rationales);

  const viaLabel = (): string =>
    props.via === 'pick_into'
      ? label('counter.a11y.cell_via_pick_into')
      : label('counter.a11y.cell_via_counterpick');

  const ariaLabel = (): string =>
    label('counter.a11y.cell_link_aria', {
      publisher: displayName(),
      role: props.cell.role.toUpperCase(),
      via: viaLabel(),
      enemy: props.enemyDisplayName,
    });

  const portraitAlt = (): string =>
    label('counter.a11y.portrait_alt', { name: displayName() });

  return (
    <a
      href={href()}
      aria-label={ariaLabel()}
      data-testid="matchup-cell"
      class="block p-2 rounded border border-outline/20 bg-surface-container/30
             hover:bg-surface-container/60 transition-colors motion-safe:transition-colors
             focus-visible:outline focus-visible:outline-2
             focus-visible:outline-primary focus-visible:outline-offset-2
             min-h-[64px]"
    >
      <div class="flex items-start gap-2">
        <ChampionPortrait
          slug={props.cell.c}
          championDdId={ddId()}
          championKey={championKey()}
          variant="square"
          size="sm"
          alt={portraitAlt()}
          lazy={props.lazy !== false}
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-1.5">
            <span class="font-bold text-sm text-on-surface truncate">
              {displayName()}
            </span>
            <span class="text-[10px] uppercase tracking-wider text-on-surface-variant/70 flex-shrink-0">
              {props.cell.role}
            </span>
          </div>
          <p class="text-xs text-on-surface-variant/85 line-clamp-2 leading-snug mt-0.5">
            {excerpt()}
          </p>
        </div>
      </div>
    </a>
  );
}

export default MatchupCell;
