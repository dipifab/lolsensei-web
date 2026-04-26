// BoolRule widget — toggle (riuso ConsoleToggle).
import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import type { BoolRule } from '../../lib/types';
import ConsoleToggle from '../../../components/ConsoleToggle';

interface BoolToggleProps {
  rule: BoolRule;
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  disabled?: boolean;
}

export default function BoolToggle(props: BoolToggleProps): JSX.Element {
  // Uso noUnusedLocals-safe: rule e' parte della signature pubblica della
  // factory anche se attualmente BoolRule non ha campi opzionali da render.
  const _unused = (): BoolRule => props.rule;
  void _unused;

  return (
    <div class="space-y-1.5">
      <div class="flex items-center gap-3">
        <ConsoleToggle
          checked={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <span class="text-sm text-on-surface">
          {props.value ? 'true' : 'false'}
        </span>
      </div>

      <Show when={props.error}>
        <p class="text-xs text-error">{props.error}</p>
      </Show>
    </div>
  );
}
