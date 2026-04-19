import { Show } from 'solid-js';
import Icon from '../../../components/Icon';

interface RetentionWarningBannerProps {
  truncated: boolean;
  requestedFrom?: string | null;
  effectiveFrom?: string | null;
  retentionWarning?: string | null;
}

export default function RetentionWarningBanner(props: RetentionWarningBannerProps) {
  return (
    <Show when={props.truncated}>
      <div
        role="status"
        aria-live="polite"
        class="flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3"
      >
        <Icon name="hourglass_top" class="w-5 h-5 mt-0.5 shrink-0 text-warning" />
        <div class="flex-1 text-sm">
          <p class="font-semibold text-warning">
            Range truncated by 90-day retention
          </p>
          <Show when={props.retentionWarning}>
            <p class="mt-0.5 text-on-surface">{props.retentionWarning}</p>
          </Show>
          <Show when={props.requestedFrom && props.effectiveFrom}>
            <p class="mt-1 text-xs text-on-surface-variant">
              Requested: {props.requestedFrom} &middot; Effective: {props.effectiveFrom}
            </p>
          </Show>
        </div>
      </div>
    </Show>
  );
}
