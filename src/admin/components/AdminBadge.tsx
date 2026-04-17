import { Show } from 'solid-js';

export type AdminBadgeVariant =
  | 'active'
  | 'inactive'
  | 'scheduled'
  | 'expired'
  | 'terminated'
  | 'revoked'
  | 'free'
  | 'trialing'
  | 'past_due'
  | 'suspended';

interface AdminBadgeProps {
  variant: AdminBadgeVariant;
  dot?: boolean;
  pulse?: boolean;
  label?: string;
}

const labels: Record<AdminBadgeVariant, string> = {
  active: 'Active',
  inactive: 'Inactive',
  scheduled: 'Scheduled',
  expired: 'Expired',
  terminated: 'Terminated',
  revoked: 'Revoked',
  free: 'Free',
  trialing: 'Trialing',
  past_due: 'Past Due',
  suspended: 'Suspended',
};

export default function AdminBadge(props: AdminBadgeProps) {
  return (
    <span
      class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold"
      classList={{
        'bg-success/15 text-success': props.variant === 'active',
        'bg-surface-container-highest text-outline':
          props.variant === 'inactive'
          || props.variant === 'expired',
        'bg-warning/15 text-warning':
          props.variant === 'scheduled' || props.variant === 'past_due',
        'bg-error/15 text-error':
          props.variant === 'terminated'
          || props.variant === 'revoked'
          || props.variant === 'suspended',
        'bg-secondary/15 text-secondary': props.variant === 'free',
        'bg-primary/15 text-primary': props.variant === 'trialing',
      }}
    >
      <Show when={props.dot}>
        <span
          aria-hidden="true"
          class="relative w-1.5 h-1.5 rounded-full bg-current"
        >
          <Show when={props.pulse}>
            <span aria-hidden="true" class="absolute inset-0 rounded-full bg-current motion-safe:animate-pulse" />
          </Show>
        </span>
      </Show>
      {props.label ?? labels[props.variant]}
    </span>
  );
}
