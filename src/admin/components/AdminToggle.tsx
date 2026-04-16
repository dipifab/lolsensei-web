import type { JSX } from 'solid-js';

let idCounter = 0;

interface AdminToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  disabledTooltip?: string;
  size?: 'sm' | 'md';
  label?: string;
}

export default function AdminToggle(props: AdminToggleProps): JSX.Element {
  const id = `admin-toggle-${++idCounter}`;
  const tooltipId = `${id}-tooltip`;

  const isSm = () => (props.size ?? 'md') === 'sm';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={props.checked}
      aria-disabled={props.disabled || undefined}
      aria-describedby={props.disabled && props.disabledTooltip ? tooltipId : undefined}
      aria-label={props.label}
      title={props.disabled ? props.disabledTooltip : undefined}
      disabled={props.disabled}
      onClick={() => {
        if (!props.disabled) {
          props.onChange(!props.checked);
        }
      }}
      class="relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      classList={{
        'w-8 h-4': isSm(),
        'w-10 h-5': !isSm(),
        'bg-primary-container': props.checked,
        'bg-surface-container-highest': !props.checked,
      }}
    >
      <span
        class="absolute top-0.5 rounded-full bg-white shadow transition-transform motion-safe:duration-200"
        classList={{
          'w-3 h-3': isSm(),
          'w-4 h-4': !isSm(),
          'translate-x-4': props.checked && isSm(),
          'translate-x-5': props.checked && !isSm(),
          'translate-x-0.5': !props.checked,
        }}
      />
    </button>
  );
}
