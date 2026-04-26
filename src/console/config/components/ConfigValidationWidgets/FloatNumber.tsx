// FloatRule widget — input numerico con step decimale.
//
// Pure logic estratta in `scalar-helpers.ts` per testabilita senza DOM.
import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import type { FloatRule } from '../../lib/types';
import ConsoleInput from '../../../components/ConsoleInput';
import { clampFloat } from './scalar-helpers';

interface FloatNumberProps {
  rule: FloatRule;
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
}

export default function FloatNumber(props: FloatNumberProps): JSX.Element {
  function handleInput(raw: string): void {
    if (raw === '' || raw === '-' || raw === '.') return; // utente sta digitando
    const n = parseFloat(raw);
    const clamped = clampFloat(n, props.rule);
    if (clamped === null) return;
    props.onChange(clamped);
  }

  return (
    <div class="space-y-1.5">
      <ConsoleInput
        type="number"
        value={String(props.value)}
        onInput={handleInput}
        disabled={props.disabled}
        error={props.error}
      />

      <Show when={!props.error && (props.rule.min !== undefined || props.rule.max !== undefined || props.rule.step)}>
        <p class="text-xs text-outline">
          Range:
          {' '}
          {props.rule.min ?? '−∞'} … {props.rule.max ?? '+∞'}
          {props.rule.step ? `, step ${props.rule.step}` : ''}
        </p>
      </Show>
    </div>
  );
}
