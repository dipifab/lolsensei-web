import Icon from '../../components/Icon';

interface IconButtonProps {
  icon: string;
  onClick: () => void;
  tooltip?: string;
  variant?: 'default' | 'danger';
  disabled?: boolean;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      class="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
      classList={{
        'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface': props.variant !== 'danger',
        'text-on-surface-variant hover:bg-error-container/30 hover:text-error': props.variant === 'danger',
        'opacity-50 cursor-not-allowed': props.disabled,
      }}
      aria-label={props.tooltip}
      title={props.tooltip}
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      <Icon name={props.icon} class="w-4 h-4" />
    </button>
  );
}
