// WPCP-032 (CR-063) — CounterColumn component (Counter Detail Page).
//
// Colonna lista celle matchup: titolo i18n + lista MatchupCell + empty state.
// Variant `strong` (publisher batte enemy = is_strong_against, accent verde)
// o `weak` (publisher viene counterato dall'enemy = is_weak_against, accent
// rosso). Gli accent border riusano i token gia in `MatchupDraft.tsx`.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §3 (CounterColumn)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2 (h2)

import { For, Show, type JSX } from 'solid-js';
import type {
  ChampionMeta,
  Lang,
  MatchupCell as MatchupCellData,
  MatchupVia,
} from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';
import { MatchupCell } from './MatchupCell';

export type CounterColumnVariant = 'strong' | 'weak';

export interface CounterColumnProps {
  lang: Lang;
  variant: CounterColumnVariant;
  /** Display name dell'enemy (subject pagina detail) per interpolazione titolo. */
  enemyDisplayName: string;
  /** Lista celle gia ordinata (recurrence desc, alpha tie-break). */
  cells: MatchupCellData[];
  /** Tabelle per il join client-side. */
  champions: Record<string, ChampionMeta>;
  rationales: string[];
  /** Test/contesto: utile per id stabili dell'h2 quando piu colonne in pagina. */
  headingId?: string;
}

const VARIANT_TO_VIA: Record<CounterColumnVariant, MatchupVia> = {
  strong: 'pick_into',
  weak: 'counterpick',
};

const VARIANT_TITLE_KEY: Record<CounterColumnVariant, string> = {
  strong: 'counter.detail.column.strong',
  weak: 'counter.detail.column.weak',
};

const VARIANT_EMPTY_KEY: Record<CounterColumnVariant, string> = {
  strong: 'counter.detail.column.empty_strong',
  weak: 'counter.detail.column.empty_weak',
};

const VARIANT_ARIA_KEY: Record<CounterColumnVariant, string> = {
  strong: 'counter.a11y.column_strong_label',
  weak: 'counter.a11y.column_weak_label',
};

export function CounterColumn(props: CounterColumnProps): JSX.Element {
  const { label } = useCounterI18n();

  const title = (): string =>
    label(VARIANT_TITLE_KEY[props.variant], { name: props.enemyDisplayName });
  const ariaLabel = (): string =>
    label(VARIANT_ARIA_KEY[props.variant], { name: props.enemyDisplayName });
  const emptyMsg = (): string =>
    label(VARIANT_EMPTY_KEY[props.variant], { name: props.enemyDisplayName });

  // Riusa il token di colore esistente da MatchupDraft.tsx (CR-026 / WP-SEO).
  const accentClass = (): string =>
    props.variant === 'strong'
      ? 'border-l-[#49e082]/60'
      : 'border-l-[#ffb4ab]/60';
  const titleColor = (): string =>
    props.variant === 'strong' ? 'text-[#49e082]' : 'text-[#ffb4ab]';

  return (
    <section
      aria-label={ariaLabel()}
      class={`pl-3 border-l-2 ${accentClass()} flex flex-col gap-2`}
      data-testid={`counter-column-${props.variant}`}
    >
      <h2
        id={props.headingId}
        class={`font-headline font-extrabold text-sm md:text-base uppercase tracking-wider ${titleColor()}`}
      >
        {title()}
      </h2>
      <Show
        when={props.cells.length > 0}
        fallback={
          <p
            class="text-xs md:text-sm text-on-surface-variant/80 italic mt-2"
            data-testid={`counter-column-${props.variant}-empty`}
          >
            {emptyMsg()}
          </p>
        }
      >
        <ul class="flex flex-col gap-2">
          <For each={props.cells}>
            {(cell, idx) => (
              <li>
                <MatchupCell
                  lang={props.lang}
                  cell={cell}
                  via={VARIANT_TO_VIA[props.variant]}
                  enemyDisplayName={props.enemyDisplayName}
                  champions={props.champions}
                  rationales={props.rationales}
                  // Eager solo per le prime 2 celle visibili above-the-fold;
                  // le successive sono lazy per non saturare la rete (NFR-CP-001).
                  lazy={idx() >= 2}
                />
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
}

export default CounterColumn;
