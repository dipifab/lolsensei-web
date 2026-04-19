import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import type { TimelineEvent, CreditOverride } from '../../types';
import Icon from '../../../components/Icon';
import { formatEur } from '../../utils/format';

interface TimelineEventItemProps {
  event: TimelineEvent;
}

interface Rendered {
  icon: string;
  color: string;
  title: string;
  body: JSX.Element;
}

const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

function renderOverride(o: CreditOverride | undefined): string {
  if (!o) return '--';
  const parts: string[] = [];
  if (o.daily !== null && o.daily !== undefined) parts.push(`daily=${o.daily}`);
  if (o.weekly !== null && o.weekly !== undefined) parts.push(`weekly=${o.weekly}`);
  if (o.monthly !== null && o.monthly !== undefined) parts.push(`monthly=${o.monthly}`);
  return parts.length ? parts.join(' · ') : '--';
}

function render(event: TimelineEvent): Rendered {
  switch (event.type) {
    case 'registration':
      return {
        icon: 'group_add',
        color: 'text-primary',
        title: 'Registration',
        body: <>New account {event.payload.email ?? ''}</>,
      };
    case 'trial_started':
      return {
        icon: 'hourglass_top',
        color: 'text-warning',
        title: 'Trial started',
        body: (
          <>
            Plan: <span class="font-semibold">{event.payload.plan_name ?? '--'}</span>
            <Show when={event.payload.trial_ends_at}>
              <span class="text-on-surface-variant"> · trial ends {dateFormatter.format(new Date(event.payload.trial_ends_at!))}</span>
            </Show>
          </>
        ),
      };
    case 'trial_converted':
      return {
        icon: 'check_circle',
        color: 'text-success',
        title: 'Trial converted',
        body: <>Plan: <span class="font-semibold">{event.payload.plan_name ?? '--'}</span></>,
      };
    case 'subscription_renewed':
      return {
        icon: 'credit_card',
        color: 'text-success',
        title: 'Subscription renewed',
        body: (
          <Show
            when={event.payload.amount_cents !== undefined && event.payload.currency}
            fallback={<>Renewal processed</>}
          >
            <>
              {formatEur(event.payload.amount_cents!)} ({(event.payload.currency ?? '').toUpperCase()})
            </>
          </Show>
        ),
      };
    case 'subscription_cancelled':
      return {
        icon: 'cancel',
        color: 'text-on-surface-variant',
        title: 'Subscription cancelled',
        body: (
          <>
            <Show when={event.payload.expires_at}>
              <span>Expires {dateFormatter.format(new Date(event.payload.expires_at!))}</span>
            </Show>
            <Show when={event.payload.cancel_reason}>
              <span class="block text-on-surface-variant mt-0.5">{event.payload.cancel_reason}</span>
            </Show>
          </>
        ),
      };
    case 'user_suspended':
      return {
        icon: 'block',
        color: 'text-error',
        title: 'User suspended',
        body: (
          <>
            <Show when={event.payload.reason}>
              <span class="block">{event.payload.reason}</span>
            </Show>
            <Show when={event.payload.admin_name}>
              <span class="block text-on-surface-variant mt-0.5">Admin: {event.payload.admin_name}</span>
            </Show>
          </>
        ),
      };
    case 'user_unsuspended':
      return {
        icon: 'check_circle',
        color: 'text-success',
        title: 'User reactivated',
        body: (
          <>
            <Show when={event.payload.reason}>
              <span class="block">{event.payload.reason}</span>
            </Show>
            <Show when={event.payload.admin_name}>
              <span class="block text-on-surface-variant mt-0.5">Admin: {event.payload.admin_name}</span>
            </Show>
          </>
        ),
      };
    case 'credit_override_applied':
      return {
        icon: 'tune',
        color: 'text-warning',
        title: 'Credit override applied',
        body: (
          <>
            <span class="block font-mono text-xs">{renderOverride(event.payload.override)}</span>
            <Show when={event.payload.reason}>
              <span class="block text-on-surface-variant mt-0.5">{event.payload.reason}</span>
            </Show>
          </>
        ),
      };
    case 'credit_override_removed':
      return {
        icon: 'tune',
        color: 'text-on-surface-variant',
        title: 'Credit override removed',
        body: (
          <Show when={event.payload.reason} fallback={<>Reverted to plan defaults</>}>
            <>{event.payload.reason}</>
          </Show>
        ),
      };
    default: {
      const _never: never = event;
      return {
        icon: 'schedule',
        color: 'text-on-surface-variant',
        title: (_never as TimelineEvent).type ?? 'Event',
        body: <>Unknown event</>,
      };
    }
  }
}

function formatPerformedBy(pb: string): string {
  if (pb === 'user') return 'User';
  if (pb === 'system') return 'System';
  if (pb.startsWith('admin:')) return `Admin ${pb.slice(6, 14)}`;
  return pb;
}

export default function TimelineEventItem(props: TimelineEventItemProps) {
  const r = () => render(props.event);
  return (
    <li class="relative pl-9 pb-6">
      <span
        aria-hidden="true"
        class="absolute left-3 top-1 bottom-0 w-px bg-outline-variant"
      />
      <span
        aria-hidden="true"
        class={`absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-surface-container-low ring-2 ring-outline-variant ${r().color}`}
      >
        <span class="absolute inset-0 flex items-center justify-center">
          <Icon name={r().icon} class="w-3 h-3" />
        </span>
      </span>
      <div class="ml-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class={`text-sm font-semibold ${r().color}`}>{r().title}</span>
          <time
            datetime={props.event.timestamp}
            title={props.event.timestamp}
            class="text-xs text-on-surface-variant"
          >
            {dateTimeFormatter.format(new Date(props.event.timestamp))}
          </time>
        </div>
        <div class="mt-1 text-sm text-on-surface">{r().body}</div>
        <p class="mt-1 text-xs uppercase tracking-wider text-on-surface-variant">
          {formatPerformedBy(props.event.performed_by)}
        </p>
      </div>
    </li>
  );
}
