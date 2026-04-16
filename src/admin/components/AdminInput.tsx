import type { JSX } from 'solid-js';
import { Show } from 'solid-js';

let idCounter = 0;

interface AdminInputProps {
  label?: string;
  type: 'text' | 'number' | 'password' | 'date';
  value: string;
  onInput: (value: string) => void;
  error?: string;
  disabled?: boolean;
  prefix?: string;
  placeholder?: string;
  monospace?: boolean;
}

export default function AdminInput(props: AdminInputProps): JSX.Element {
  const id = `admin-input-${++idCounter}`;
  const errorId = `${id}-error`;

  return (
    <div>
      <Show when={props.label}>
        <label
          for={id}
          class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
        >
          {props.label}
        </label>
      </Show>

      <div class="relative flex">
        <Show when={props.prefix}>
          <span class="flex items-center px-3 rounded-l-lg border border-r-0 border-outline-variant bg-surface-container text-sm text-on-surface-variant">
            {props.prefix}
          </span>
        </Show>

        <input
          id={id}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          aria-invalid={props.error ? true : undefined}
          aria-describedby={props.error ? errorId : undefined}
          onInput={(e) => props.onInput(e.currentTarget.value)}
          class="w-full border bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline transition-colors focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          classList={{
            'border-error': !!props.error,
            'border-outline-variant': !props.error,
            'font-mono': !!props.monospace,
            'rounded-lg': !props.prefix,
            'rounded-l-none rounded-r-lg': !!props.prefix,
          }}
        />
      </div>

      <Show when={props.error}>
        <p id={errorId} class="mt-1 text-xs text-error">
          {props.error}
        </p>
      </Show>
    </div>
  );
}
