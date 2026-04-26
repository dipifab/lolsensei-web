// IntRule widget — slider o number input.
//
// Riusa ConsoleSlider per il caso `ui_widget=slider` (range con limiti).
// Per `ui_widget=number` (es. nessun max sensato) cade su input number.
// Validazione: clamp `min/max` lato UI; `step` propagato.
//
// Pure logic estratta in `scalar-helpers.ts` per testabilita senza DOM.
import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import type { IntRule } from '../../lib/types';
import ConsoleSlider from '../../../components/ConsoleSlider';
import ConsoleInput from '../../../components/ConsoleInput';
import { clampInt } from './scalar-helpers';

interface IntSliderProps {
  rule: IntRule;
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
}

const SLIDER_FALLBACK_MIN = 0;
const SLIDER_FALLBACK_MAX = 1_000_000;

export default function IntSlider(props: IntSliderProps): JSX.Element {
  const widget = (): 'slider' | 'number' => props.rule.ui_widget ?? 'slider';

  // Per il render slider servono min/max espliciti. Quando il backend non
  // fornisce limiti, fallback a 0..1M (slider degenerate ma non rotto).
  const sliderMin = (): number => props.rule.min ?? SLIDER_FALLBACK_MIN;
  const sliderMax = (): number => props.rule.max ?? SLIDER_FALLBACK_MAX;
  const sliderStep = (): number => props.rule.step ?? 1;

  function handleChange(raw: number): void {
    const clamped = clampInt(raw, props.rule);
    if (clamped === null) return;
    props.onChange(clamped);
  }

  return (
    <div class="space-y-1.5">
      <Show
        when={widget() === 'slider' && props.rule.min !== null && props.rule.min !== undefined && props.rule.max !== null && props.rule.max !== undefined}
        fallback={
          <ConsoleInput
            type="number"
            value={String(props.value)}
            onInput={(v) => {
              const n = parseInt(v, 10);
              if (!Number.isNaN(n)) handleChange(n);
            }}
            disabled={props.disabled}
            error={props.error}
          />
        }
      >
        <ConsoleSlider
          min={sliderMin()}
          max={sliderMax()}
          step={sliderStep()}
          value={props.value}
          onChange={handleChange}
        />
      </Show>

      <Show when={props.error}>
        <p class="text-xs text-error">{props.error}</p>
      </Show>

      <Show when={!props.error && (props.rule.min !== undefined || props.rule.max !== undefined)}>
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
