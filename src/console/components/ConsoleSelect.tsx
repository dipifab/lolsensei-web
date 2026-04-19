import type { JSX } from 'solid-js';
import { For, Show } from 'solid-js';

let idCounter = 0;

interface ConsoleSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function ConsoleSelect(props: ConsoleSelectProps): JSX.Element {
  const id = `admin-select-${++idCounter}`;
  const errorId = `${id}-error`;

  return (
    <div>
      <Show when={props.label}>
        <label
          for={id}
          class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
        >
          {props.label}
        </label>
      </Show>

      <div class="relative">
        <select
          id={id}
          value={props.value}
          disabled={props.disabled}
          aria-invalid={props.error ? true : undefined}
          aria-describedby={props.error ? errorId : undefined}
          onChange={(e) => props.onChange(e.currentTarget.value)}
          class="w-full appearance-none rounded-lg border bg-surface-container-lowest px-3 py-2 pr-8 text-sm text-on-surface transition-colors focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          classList={{
            'border-error': !!props.error,
            'border-outline-variant': !props.error,
          }}
        >
          <For each={props.options}>
            {(opt) => <option value={opt.value}>{opt.label}</option>}
          </For>
        </select>

        <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
          ▾
        </div>
      </div>

      <Show when={props.error}>
        <p id={errorId} class="mt-1 text-xs text-error">
          {props.error}
        </p>
      </Show>
    </div>
  );
}
