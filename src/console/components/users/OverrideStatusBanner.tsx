import { Show } from 'solid-js';
import Icon from '../../../components/Icon';
import { formatDateTime } from '../../utils/format';

type Variant = 'suspended' | 'limit-override';

interface OverrideStatusBannerProps {
  variant: Variant;
  reason?: string | null;
  appliedAt?: string | null;
  adminName?: string | null;
}

const VARIANT_CONF = {
  suspended: {
    icon: 'block',
    title: 'User suspended',
    bg: 'bg-error/15 border-error/30',
    text: 'text-error',
  },
  'limit-override': {
    icon: 'tune',
    title: 'Credit override active',
    bg: 'bg-warning/15 border-warning/30',
    text: 'text-warning',
  },
} as const;

export default function OverrideStatusBanner(props: OverrideStatusBannerProps) {
  const conf = () => VARIANT_CONF[props.variant];
  return (
    <div
      role="status"
      aria-live="polite"
      class={`flex items-start gap-3 rounded-lg border px-4 py-3 ${conf().bg}`}
    >
      <Icon name={conf().icon} class={`w-5 h-5 mt-0.5 shrink-0 ${conf().text}`} />
      <div class="flex-1 text-sm">
        <p class={`font-semibold ${conf().text}`}>{conf().title}</p>
        <Show when={props.reason}>
          <p class="mt-0.5 text-on-surface">{props.reason}</p>
        </Show>
        <Show when={props.appliedAt || props.adminName}>
          <p class="mt-1 text-xs text-on-surface-variant">
            <Show when={props.adminName}>Admin: {props.adminName} </Show>
            <Show when={props.appliedAt}>
              <span>&middot; {formatDateTime(props.appliedAt ?? null)}</span>
            </Show>
          </p>
        </Show>
      </div>
    </div>
  );
}
