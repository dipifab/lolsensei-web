// WPCP-027 (CR-063) — CounterAutocompleteList component.
//
// Render `<ul role="listbox">` con `<li role="option">` per ogni suggestion.
// Ogni voce mostra ChampionPortrait (size=sm) + display_name + role badge.
// Il consumer (CounterSearchInput) controlla `highlightedIdx` da tastiera e
// passa `onSelect(slug)` come callback. Lo `mouseDown` (non `click`) e' usato
// per evitare la perdita di focus prima della navigazione (l'input perde il
// focus su click se gestissimo `click`).
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §2 (Struttura componenti)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2 (ARIA listbox)

import { For, Show, type JSX } from 'solid-js';
import type { Lang } from '../../lib/counter/types';
import type { SearchResult } from '../../lib/counter/search';
import { useCounterI18n } from '../../lib/counter/i18n';
import { ChampionPortrait } from '../champion/ChampionPortrait';

export interface CounterAutocompleteListProps {
  /** Lingua corrente (riservato; le label vengono dal provider i18n). */
  lang: Lang;
  /** id DOM dell'`<ul>` (legato a `aria-controls` dell'input). */
  listId: string;
  /** Suggestion da mostrare (gia limitate a 10 dal consumer). */
  suggestions: SearchResult[];
  /** Indice della suggestion attualmente evidenziata da tastiera (null = nessuna). */
  highlightedIdx: number | null;
  /** Callback invocato quando l'utente seleziona una suggestion. */
  onSelect: (slug: string) => void;
}

function optionId(listId: string, idx: number): string {
  return `${listId}-opt-${idx}`;
}

export function CounterAutocompleteList(
  props: CounterAutocompleteListProps,
): JSX.Element {
  const { label } = useCounterI18n();

  return (
    <Show when={props.suggestions.length > 0}>
      <ul
        id={props.listId}
        role="listbox"
        aria-label={label('counter.a11y.suggestion_role')}
        class="absolute left-0 right-0 top-full mt-1 z-20 max-h-80 overflow-y-auto
               bg-surface-container border border-outline/20 rounded-lg shadow-lg
               divide-y divide-outline/10"
        data-testid="counter-autocomplete-list"
        data-lang={props.lang}
      >
        <For each={props.suggestions}>
          {(s, i) => {
            const isHighlighted = (): boolean => props.highlightedIdx === i();
            return (
              <li
                id={optionId(props.listId, i())}
                role="option"
                aria-selected={isHighlighted() ? 'true' : 'false'}
                class={`flex items-center gap-3 p-2 cursor-pointer
                  ${
                    isHighlighted()
                      ? 'bg-primary/15'
                      : 'hover:bg-surface-container-low'
                  }`}
                // mouseDown invece di click: il click sull'`<li>` farebbe
                // blur dell'input prima che il navigate parta. mouseDown
                // attiva prima del blur, preservando lo stato della query
                // per la navigazione.
                onMouseDown={(e) => {
                  e.preventDefault();
                  props.onSelect(s.slug);
                }}
              >
                <ChampionPortrait
                  slug={s.slug}
                  championDdId={s.dd_id}
                  championKey={s.key}
                  variant="square"
                  size="sm"
                  alt={label('counter.a11y.portrait_alt', { name: s.display_name })}
                />
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-sm truncate">{s.display_name}</div>
                  <Show when={s.cited_in_roles.length > 0}>
                    <div class="text-[10px] uppercase text-on-surface-variant/70">
                      {s.cited_in_roles.join(' · ')}
                    </div>
                  </Show>
                </div>
              </li>
            );
          }}
        </For>
      </ul>
    </Show>
  );
}

export default CounterAutocompleteList;
