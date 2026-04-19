import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';

interface SegmentedControlItem {
  label: string;
  value: string;
  count?: number;
}

interface SegmentedControlProps {
  items: SegmentedControlItem[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function SegmentedControl(props: SegmentedControlProps): JSX.Element {
  function handleKeyDown(e: KeyboardEvent) {
    const currentIndex = props.items.findIndex(item => item.value === props.value);
    let nextIndex = currentIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % props.items.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + props.items.length) % props.items.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = props.items.length - 1;
    }

    if (nextIndex !== currentIndex) {
      props.onChange(props.items[nextIndex].value);
      const container = e.currentTarget as HTMLElement;
      const buttons = container.querySelectorAll<HTMLElement>('[role="radio"]');
      buttons[nextIndex]?.focus();
    }
  }

  return (
    <div
      role="radiogroup"
      aria-label={props.label}
      class="inline-flex rounded-lg bg-surface-container-lowest border border-outline-variant/10 p-0.5"
      onKeyDown={handleKeyDown}
    >
      <For each={props.items}>
        {(item) => {
          const isActive = () => props.value === item.value;

          return (
            <button
              type="button"
              role="radio"
              aria-checked={isActive()}
              tabIndex={isActive() ? 0 : -1}
              onClick={() => props.onChange(item.value)}
              class="px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
              classList={{
                'bg-surface-container-high text-on-surface': isActive(),
                'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50': !isActive(),
              }}
            >
              {item.label}
              <Show when={item.count !== undefined}>
                <span
                  aria-hidden="true"
                  class="ml-1.5 text-xs px-1.5 py-0.5 rounded-full"
                  classList={{
                    'bg-primary-container/30 text-primary-container': isActive(),
                    'bg-surface-container-highest text-outline': !isActive(),
                  }}
                >
                  {item.count}
                </span>
              </Show>
            </button>
          );
        }}
      </For>
    </div>
  );
}
