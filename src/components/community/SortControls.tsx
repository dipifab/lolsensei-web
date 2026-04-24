// src/components/community/SortControls.tsx
//
// Accessible radio group implementing the WAI-ARIA APG pattern:
//  - role="radiogroup" with aria-label
//  - each option is role="radio" + aria-checked
//  - only the checked (or first) option is Tab-focusable; arrow keys
//    cycle focus + selection inside the group (roving tabindex).

import { createMemo, For, type JSX } from "solid-js";
import { useI18n } from "../../i18n";
import type { SearchSort } from "../../services/community-search-api";

export interface SortControlsProps {
  value: SearchSort;
  onChange: (next: SearchSort) => void;
  /** When true, renders "relevance" disabled (no q term). */
  relevanceDisabled?: boolean;
}

const OPTIONS: readonly SearchSort[] = [
  "relevance",
  "latest",
  "popular",
  "unanswered",
  "trending",
];

export default function SortControls(props: SortControlsProps): JSX.Element {
  const { t } = useI18n();
  const enabled = createMemo(() =>
    props.relevanceDisabled
      ? OPTIONS.filter((o) => o !== "relevance")
      : OPTIONS,
  );

  let refs: Array<HTMLButtonElement | null> = [];

  const focusAt = (i: number) => {
    const list = enabled();
    const idx = ((i % list.length) + list.length) % list.length;
    const el = refs[idx];
    if (el) {
      el.focus();
      props.onChange(list[idx]!);
    }
  };

  const onKeyDown = (idx: number): JSX.EventHandler<HTMLButtonElement, KeyboardEvent> => (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusAt(idx + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusAt(idx - 1);
        break;
      case "Home":
        e.preventDefault();
        focusAt(0);
        break;
      case "End":
        e.preventDefault();
        focusAt(enabled().length - 1);
        break;
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={t("community.search.sort.group_label")}
      class="flex flex-wrap gap-1 border border-outline-variant/30 rounded p-1 bg-surface-container"
    >
      <For each={enabled()}>
        {(opt, i) => {
          const selected = () => props.value === opt;
          return (
            <button
              type="button"
              role="radio"
              aria-checked={selected()}
              tabindex={selected() ? 0 : -1}
              ref={(el) => (refs[i()] = el)}
              onClick={() => props.onChange(opt)}
              onKeyDown={onKeyDown(i())}
              class={
                "min-h-[44px] px-3 rounded text-sm transition-colors " +
                (selected()
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-surface-container-highest")
              }
            >
              {t(`community.search.sort.${opt}`)}
            </button>
          );
        }}
      </For>
    </div>
  );
}
