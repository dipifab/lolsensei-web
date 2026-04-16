import { Show } from 'solid-js';
import Icon from '../../components/Icon';

interface AdminEmptyStateProps {
  icon: string;
  title: string;
  subtitle?: string;
  action?: { label: string; onClick: () => void };
}

export default function AdminEmptyState(props: AdminEmptyStateProps) {
  return (
    <div role="status" class="flex flex-col items-center justify-center py-16 text-center">
      <span aria-hidden="true">
        <Icon name={props.icon} class="w-12 h-12 text-outline mb-4" />
      </span>
      <h3 class="text-lg font-medium text-on-surface mb-1">{props.title}</h3>
      <Show when={props.subtitle}>
        <p class="text-sm text-on-surface-variant">{props.subtitle}</p>
      </Show>
      <Show when={props.action}>
        <button
          class="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold gold-gradient text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          onClick={() => props.action!.onClick()}
        >
          {props.action!.label}
        </button>
      </Show>
    </div>
  );
}
