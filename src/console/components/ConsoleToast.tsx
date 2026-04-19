import { For } from 'solid-js';
import { useToast } from '../contexts/toast-context';
import type { Toast } from '../contexts/toast-context';
import Icon from '../../components/Icon';

const ICON_BY_TYPE: Record<Toast['type'], { name: string; class: string }> = {
  success: { name: 'check_circle', class: 'w-5 h-5 text-success' },
  error: { name: 'cancel', class: 'w-5 h-5 text-error' },
  warning: { name: 'schedule', class: 'w-5 h-5 text-warning' },
};

export default function ConsoleToast() {
  const { toasts, removeToast } = useToast();

  return (
    <div
      class="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-2 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <For each={toasts()}>
        {(t) => {
          const icon = ICON_BY_TYPE[t.type];
          return (
            <div
              class="pointer-events-auto flex items-center gap-3 min-w-[320px] max-w-md px-4 py-3 rounded-lg bg-surface-container shadow-lg border-l-4"
              classList={{
                'border-l-success': t.type === 'success',
                'border-l-error': t.type === 'error',
                'border-l-warning': t.type === 'warning',
              }}
              role={t.type === 'error' ? 'alert' : 'status'}
            >
              <Icon name={icon.name} class={icon.class} />
              <span class="flex-1 text-sm text-on-surface">{t.message}</span>
              <button
                class="ml-2 p-1 rounded hover:bg-surface-container-high text-on-surface-variant"
                aria-label="Chiudi"
                onClick={() => removeToast(t.id)}
              >
                <Icon name="cancel" class="w-4 h-4" />
              </button>
            </div>
          );
        }}
      </For>
    </div>
  );
}
