import { Show } from 'solid-js';
import type { JSX } from 'solid-js';

interface ConsoleSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  unit?: string;
}

export default function ConsoleSlider(props: ConsoleSliderProps): JSX.Element {
  function handleChange(raw: string) {
    const num = parseInt(raw, 10);
    if (Number.isNaN(num)) return;
    const clamped = Math.min(props.max, Math.max(props.min, num));
    props.onChange(clamped);
  }

  return (
    <div>
      <Show when={props.label}>
        <label class="block mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          {props.label}
        </label>
      </Show>

      <div class="flex items-center gap-3">
        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          aria-label={props.label || 'Valore'}
          aria-valuemin={props.min}
          aria-valuemax={props.max}
          aria-valuenow={props.value}
          onInput={(e) => handleChange(e.currentTarget.value)}
          class="flex-1 h-1.5 rounded-full appearance-none bg-surface-container-highest cursor-pointer"
          style={{ "accent-color": "#f0bf5c" }}
        />

        <input
          type="number"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          aria-label={`${props.label || 'Valore'} (numero)`}
          onInput={(e) => handleChange(e.currentTarget.value)}
          class="w-20 rounded-lg border border-outline-variant bg-surface-container-lowest px-2 py-1.5 text-sm text-center text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        />

        <Show when={props.unit}>
          <span class="text-sm text-on-surface-variant">{props.unit}</span>
        </Show>
      </div>
    </div>
  );
}
