// src/components/community/SearchBar.tsx
//
// Controlled input with 500ms trailing debounce.
//  - onInput: schedule debounced search
//  - onSubmit (Enter): flush debounce and search immediately
//  - ESC: clear
// The component does NOT own AbortController: it delegates request
// cancellation to the store (the store aborts on every new runSearch).

import {
  createSignal,
  createEffect,
  onCleanup,
  Show,
  type JSX,
} from "solid-js";
import { useI18n } from "../../i18n";
import { debounce } from "../../utils/debounce";

export interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  /** Debounce delay in ms (default 500). */
  delayMs?: number;
  disabled?: boolean;
  id?: string;
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const { t } = useI18n();
  const [local, setLocal] = createSignal(props.value);

  // keep local signal in sync when URL/store changes externally
  createEffect(() => setLocal(props.value));

  const debounced = debounce((next: string) => {
    props.onChange(next);
    if (next.trim().length >= 2) props.onSubmit();
  }, props.delayMs ?? 500);

  onCleanup(() => debounced.cancel());

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    const next = e.currentTarget.value;
    setLocal(next);
    debounced(next);
  };

  const onKeyDown: JSX.EventHandler<HTMLInputElement, KeyboardEvent> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      debounced.cancel();
      props.onChange(local());
      if (local().trim().length >= 2) props.onSubmit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setLocal("");
      debounced.cancel();
      props.onClear();
    }
  };

  const clear = () => {
    setLocal("");
    debounced.cancel();
    props.onClear();
  };

  const id = props.id ?? "community-search-input";
  const hintId = `${id}-hint`;
  const tooShort = () => local().trim().length > 0 && local().trim().length < 2;

  return (
    <form
      role="search"
      aria-label={t("community.search.form_label")}
      class="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        debounced.cancel();
        props.onChange(local());
        if (local().trim().length >= 2) props.onSubmit();
      }}
    >
      <label
        for={id}
        class="block text-sm font-medium mb-1 text-on-surface-variant"
      >
        {t("community.search.label")}
      </label>
      <div class="relative flex items-center">
        <input
          id={id}
          type="search"
          class="w-full min-h-[44px] rounded border border-outline-variant/50 bg-surface-container px-3 py-2 pr-10 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t("community.search.placeholder")}
          value={local()}
          disabled={props.disabled}
          onInput={onInput}
          onKeyDown={onKeyDown}
          aria-describedby={hintId}
          autocomplete="off"
          spellcheck={false}
        />
        <Show when={local().length > 0}>
          <button
            type="button"
            onClick={clear}
            aria-label={t("community.search.clear")}
            class="absolute right-1 w-9 h-9 rounded hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant"
          >
            <span aria-hidden="true">×</span>
          </button>
        </Show>
      </div>
      <p
        id={hintId}
        class="mt-1 text-xs text-on-surface-variant"
        aria-live="polite"
      >
        <Show
          when={tooShort()}
          fallback={t("community.search.hint_ready")}
        >
          {t("community.search.hint_min_chars")}
        </Show>
      </p>
    </form>
  );
}
