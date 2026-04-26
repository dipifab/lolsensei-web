// ConfigCategoryGroup — header collapsible con counter chiavi.
//
// Default state: collapsed (OP-021). Persiste preferenza expand/collapse
// in localStorage via expanded-categories-store. Counter "Tunable (22)".
import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import type { ConfigCategory } from '../lib/types';

const CATEGORY_LABELS: Record<ConfigCategory, string> = {
  tunable: 'Tunable',
  flag: 'Flag',
  url: 'URL',
  public_id: 'Public ID',
  tuning: 'Tuning',
};

interface ConfigCategoryGroupProps {
  category: ConfigCategory;
  count: number;
  expanded: boolean;
  onToggle: () => void;
  children: JSX.Element;
}

export function categoryLabel(category: ConfigCategory): string {
  return CATEGORY_LABELS[category];
}

export default function ConfigCategoryGroup(
  props: ConfigCategoryGroupProps,
): JSX.Element {
  return (
    <section class="border border-outline-variant rounded-lg overflow-hidden">
      <button
        type="button"
        class="w-full flex items-center justify-between gap-2 px-4 py-3 bg-surface-container-low text-left hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        aria-expanded={props.expanded}
        onClick={props.onToggle}
      >
        <span class="flex items-center gap-2">
          <span aria-hidden="true" class="text-on-surface-variant">
            {props.expanded ? '▼' : '▶'}
          </span>
          <span class="font-semibold text-on-surface">
            {categoryLabel(props.category)}
          </span>
          <span class="text-sm text-on-surface-variant">
            ({props.count})
          </span>
        </span>
      </button>

      <Show when={props.expanded}>
        <div class="border-t border-outline-variant divide-y divide-outline-variant/50">
          {props.children}
        </div>
      </Show>
    </section>
  );
}
