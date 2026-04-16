import type { JSX } from 'solid-js';
import { Show } from 'solid-js';
import Icon from '../../components/Icon';

interface AdminButtonProps {
  variant: 'primary' | 'secondary' | 'danger' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  children: JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function AdminButton(props: AdminButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled || props.loading}
      onClick={() => props.onClick?.()}
      class="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
      classList={{
        'gold-gradient text-on-primary-fixed hover:brightness-110': props.variant === 'primary',
        'border border-outline-variant text-on-surface hover:bg-surface-container': props.variant === 'secondary',
        'bg-error-container text-error hover:brightness-110': props.variant === 'danger',
        'text-on-surface-variant hover:bg-surface-container hover:text-on-surface': props.variant === 'ghost',
        'opacity-50 cursor-not-allowed pointer-events-none': props.disabled || props.loading,
      }}
    >
      <Show when={props.loading}>
        <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </Show>
      <Show when={!props.loading && props.icon}>
        <Icon name={props.icon!} class="w-4 h-4" />
      </Show>
      {props.children}
    </button>
  );
}
