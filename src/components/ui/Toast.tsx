// WP24 TASK-3-002 — Toast container + item.
// Mount una volta sola globalmente. Aria-live per a11y.
import { For, Show } from 'solid-js';
import { toasts, dismissToast, type Toast } from './toastStore';

const VARIANT_CLASSES: Record<Toast['variant'], string> = {
  success: 'bg-surface-variant text-on-surface border-outline-variant/30',
  error: 'bg-error text-on-error border-on-error/20',
  info: 'bg-surface-container-highest text-on-surface border-outline-variant/30',
};

function ToastItem(props: { toast: Toast }) {
  const isError = () => props.toast.variant === 'error';
  return (
    <div
      role={isError() ? 'alert' : 'status'}
      aria-live={isError() ? 'assertive' : 'polite'}
      class={`flex items-start gap-3 min-w-[260px] max-w-sm rounded-lg border px-4 py-3 shadow-lg motion-safe:transition-all ${VARIANT_CLASSES[props.toast.variant]}`}
    >
      <p class="flex-1 text-sm leading-relaxed">{props.toast.message}</p>
      <button
        type="button"
        onClick={() => dismissToast(props.toast.id)}
        aria-label="Dismiss"
        class="shrink-0 inline-flex items-center justify-center min-h-11 min-w-11 -m-2 rounded text-current/80 hover:text-current hover:bg-current/10 focus-visible:ring-2 focus-visible:ring-current focus-visible:outline-none"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function ToastContainer() {
  return (
    <Show when={toasts().length > 0}>
      <div
        class="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 pb-[env(safe-area-inset-bottom)]"
        aria-label="Notifications"
      >
        <For each={toasts()}>{(toast) => <ToastItem toast={toast} />}</For>
      </div>
    </Show>
  );
}
