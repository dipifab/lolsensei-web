import { createMemo } from 'solid-js';
import type { JSX } from 'solid-js';
import ConsoleInput from './ConsoleInput';

interface PriceInputProps {
  value: number;
  onChange: (cents: number) => void;
  disabled?: boolean;
  error?: string;
  currency?: string;
}

export default function PriceInput(props: PriceInputProps): JSX.Element {
  const displayValue = createMemo(() => (props.value / 100).toFixed(2));

  function handleInput(val: string) {
    const cleaned = val.replace(/[^0-9.,]/g, '').replace(',', '.');
    const parsed = parseFloat(cleaned);
    if (Number.isNaN(parsed)) {
      props.onChange(0);
    } else {
      props.onChange(Math.round(parsed * 100));
    }
  }

  return (
    <ConsoleInput
      type="text"
      value={displayValue()}
      onInput={handleInput}
      prefix={props.currency ?? 'EUR'}
      disabled={props.disabled}
      error={props.error}
      placeholder="0.00"
    />
  );
}
