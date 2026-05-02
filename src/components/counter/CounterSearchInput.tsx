// WPCP-028 (CR-063) — CounterSearchInput component.
//
// Input single-field con autocomplete listbox sotto. Stato:
//   - `query`         : stringa inserita dall'utente
//   - `highlightedIdx`: indice del suggestion evidenziato (0..n-1)
//
// Keyboard:
//   - typing       -> aggiorna query, ricalcola suggestion, reset highlight a 0
//   - ArrowDown    -> highlight = min(highlight+1, last)
//   - ArrowUp      -> highlight = max(highlight-1, 0)
//   - Enter        -> onSubmit(suggestions[highlight].slug)
//   - Escape       -> query = ''
//
// Loading/error states sono renderizzati al posto del listbox.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §2 (Stato + ARIA)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2

import {
  createMemo,
  createSignal,
  Show,
  type JSX,
} from 'solid-js';
import type { CounterIndex, Lang, RoleFilter } from '../../lib/counter/types';
import { searchChampions, type SearchResult } from '../../lib/counter/search';
import { useCounterI18n } from '../../lib/counter/i18n';
import { CounterAutocompleteList } from './CounterAutocompleteList';

export interface CounterSearchInputProps {
  /** Lingua corrente (riservato; le label vengono dal provider i18n). */
  lang: Lang;
  /** Indice gia caricato. Null mentre `isLoading` o in caso di `error`. */
  index: CounterIndex | null;
  /** Indica che il loader sta ancora fetching l'asset. */
  isLoading?: boolean;
  /** Messaggio errore non-null se la fetch e' fallita. */
  error?: string | null;
  /** Filtro role attualmente applicato (controllato dal parent). */
  role: RoleFilter;
  /** Callback quando l'utente conferma la selezione (Enter o click su option). */
  onSubmit: (slug: string) => void;
  /** Auto-focus al mount (default true). */
  autofocus?: boolean;
}

const LIST_ID = 'counter-search-list';

export function CounterSearchInput(props: CounterSearchInputProps): JSX.Element {
  const [query, setQuery] = createSignal('');
  const [highlightedIdx, setHighlightedIdx] = createSignal<number>(0);

  const { label } = useCounterI18n();

  const suggestions = createMemo<SearchResult[]>(() => {
    const idx = props.index;
    if (!idx) return [];
    return searchChampions(query(), props.role, idx);
  });

  const hasSuggestions = (): boolean => suggestions().length > 0;

  const onInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
    setQuery(e.currentTarget.value);
    setHighlightedIdx(0);
  };

  const onKeyDown: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent> = (e) => {
    const sugg = suggestions();
    if (e.key === 'ArrowDown') {
      if (sugg.length === 0) return;
      e.preventDefault();
      setHighlightedIdx((i) => Math.min(i + 1, sugg.length - 1));
    } else if (e.key === 'ArrowUp') {
      if (sugg.length === 0) return;
      e.preventDefault();
      setHighlightedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (sugg.length === 0) return;
      e.preventDefault();
      const idx = Math.min(highlightedIdx(), sugg.length - 1);
      const target = sugg[idx];
      if (target) props.onSubmit(target.slug);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setQuery('');
      setHighlightedIdx(0);
    }
  };

  const activeDescendant = (): string | undefined => {
    if (!hasSuggestions()) return undefined;
    return `${LIST_ID}-opt-${Math.min(highlightedIdx(), suggestions().length - 1)}`;
  };

  return (
    <div class="relative w-full" data-lang={props.lang}>
      <label class="block">
        <span class="sr-only">{label('counter.search.input_aria')}</span>
        <input
          type="text"
          inputmode="search"
          autocomplete="off"
          spellcheck={false}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autofocus={props.autofocus !== false}
          class="w-full px-4 py-3 bg-surface-container/40 border border-outline/30 rounded-lg
                 text-on-surface placeholder:text-on-surface-variant/60
                 focus:outline-none focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-primary focus-visible:outline-offset-1"
          role="combobox"
          aria-autocomplete="list"
          aria-controls={LIST_ID}
          aria-expanded={hasSuggestions() ? 'true' : 'false'}
          aria-activedescendant={activeDescendant()}
          aria-label={label('counter.search.input_aria')}
          placeholder={label('counter.search.input_placeholder')}
          value={query()}
          onInput={onInput}
          onKeyDown={onKeyDown}
        />
      </label>

      {/* Suggestion dropdown */}
      <Show when={!props.isLoading && !props.error && props.index && hasSuggestions()}>
        <CounterAutocompleteList
          lang={props.lang}
          listId={LIST_ID}
          suggestions={suggestions()}
          highlightedIdx={highlightedIdx()}
          onSelect={props.onSubmit}
        />
      </Show>

      {/* Hint quando query < 2 char */}
      <Show when={!props.isLoading && !props.error && query().length < 2}>
        <p class="mt-2 text-sm text-on-surface-variant/70">
          {label('counter.search.placeholder_hint')}
        </p>
      </Show>

      {/* No results message */}
      <Show
        when={
          !props.isLoading &&
          !props.error &&
          query().length >= 2 &&
          props.index &&
          !hasSuggestions()
        }
      >
        <p
          class="mt-2 text-sm text-on-surface-variant"
          role="status"
          aria-live="polite"
        >
          {label('counter.search.no_results')}
        </p>
      </Show>

      {/* Loading state */}
      <Show when={props.isLoading}>
        <p class="mt-2 text-sm text-on-surface-variant" aria-live="polite">
          {label('counter.search.loading')}
        </p>
      </Show>

      {/* Error state */}
      <Show when={props.error}>
        <p class="mt-2 text-sm text-error" role="alert">
          {label('counter.search.error_load')}
        </p>
      </Show>
    </div>
  );
}

export default CounterSearchInput;
