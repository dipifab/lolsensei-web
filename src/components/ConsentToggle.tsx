// WP24 TASK-3-008 — Toggle switch per categoria consenso.
// Componente controlled. Semantica <input type="checkbox" role="switch">.
import { createUniqueId } from 'solid-js';

interface Props {
  label: string;
  description: string;
  value: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  id?: string;
}

export default function ConsentToggle(props: Props) {
  const autoId = createUniqueId();
  const inputId = () => props.id ?? autoId;
  const descId = () => `${inputId()}-desc`;
  const checked = () => props.disabled || props.value;

  return (
    <label
      for={inputId()}
      class={`flex items-start gap-4 p-3 rounded-lg min-h-11 cursor-pointer motion-safe:transition-colors hover:bg-surface-variant/30 ${
        props.disabled ? 'opacity-60 cursor-not-allowed' : ''
      }`}
    >
      <span class="flex-1 pr-2">
        <span class="block font-headline font-semibold text-on-surface">{props.label}</span>
        <span id={descId()} class="block text-sm text-on-surface/70 mt-1">
          {props.description}
        </span>
      </span>

      <span class="relative inline-flex shrink-0 mt-1">
        <input
          id={inputId()}
          type="checkbox"
          role="switch"
          aria-checked={checked()}
          aria-describedby={descId()}
          checked={checked()}
          disabled={props.disabled}
          onChange={(e) => !props.disabled && props.onChange(e.currentTarget.checked)}
          class="peer sr-only"
        />
        <span
          aria-hidden="true"
          class={`relative inline-block w-11 h-6 rounded-full motion-safe:transition-colors ${
            checked() ? 'bg-primary-container' : 'bg-surface-variant'
          } peer-focus-visible:ring-2 peer-focus-visible:ring-primary-container peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface`}
        >
          <span
            class={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-on-surface motion-safe:transition-transform ${
              checked() ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </span>
      </span>
    </label>
  );
}
