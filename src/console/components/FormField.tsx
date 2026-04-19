import type { JSX } from 'solid-js';
import { Show } from 'solid-js';

interface FormFieldProps {
  label: string;
  error?: string;
  helper?: string;
  required?: boolean;
  children: JSX.Element;
}

export default function FormField(props: FormFieldProps): JSX.Element {
  return (
    <div class="space-y-1.5">
      <label class="block text-xs font-semibold uppercase tracking-wider text-primary">
        {props.label}
        <Show when={props.required}>
          <span aria-hidden="true" class="text-error ml-1">*</span>
          <span class="sr-only">(obbligatorio)</span>
        </Show>
      </label>

      <div>{props.children}</div>

      <Show when={props.error}>
        <p class="text-xs text-error">{props.error}</p>
      </Show>

      <Show when={!props.error && props.helper}>
        <p class="text-xs text-outline">{props.helper}</p>
      </Show>
    </div>
  );
}
