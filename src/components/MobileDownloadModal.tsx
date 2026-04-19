import { Show, createSignal, onMount, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { useI18n } from '../i18n';
import { isMobileViewport, isMobileUserAgent } from '../services/download-url';
import Button from './ui/Button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDownloadModal(props: Props) {
  const { t } = useI18n();
  let dialogRef: HTMLDivElement | undefined;
  let previousFocus: Element | null = null;

  const handleKey = (e: KeyboardEvent) => {
    if (!props.open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      props.onClose();
      return;
    }
    if (e.key === 'Tab' && dialogRef) {
      const focusable = dialogRef.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  onMount(() => {
    document.addEventListener('keydown', handleKey);
  });

  onCleanup(() => {
    document.removeEventListener('keydown', handleKey);
  });

  const onEnter = () => {
    previousFocus = document.activeElement;
    setTimeout(() => {
      const first = dialogRef?.querySelector<HTMLElement>('button, a');
      first?.focus();
    }, 0);
  };

  const onExit = () => {
    (previousFocus as HTMLElement | null)?.focus?.();
  };

  return (
    <Show when={props.open}>
      <Portal>
        {(() => {
          onEnter();
          onCleanup(onExit);
          return (
            <div
              class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-4"
              onClick={(e) => e.currentTarget === e.target && props.onClose()}
              role="presentation"
            >
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-modal-title"
                aria-describedby="mobile-modal-body"
                class="relative max-w-md w-full rounded-xl bg-surface border border-on-surface/10 p-6 shadow-xl"
              >
                <h2
                  id="mobile-modal-title"
                  class="font-headline font-bold text-xl mb-3 text-on-surface"
                >
                  {t('mobile.downloadModalTitle')}
                </h2>
                <p id="mobile-modal-body" class="font-body text-on-surface leading-relaxed mb-6">
                  {t('mobile.downloadModalBody')}
                </p>
                <div class="flex justify-end">
                  <Button variant="primary" size="md" onClick={props.onClose}>
                    {t('mobile.modalDismiss')}
                  </Button>
                </div>
              </div>
            </div>
          );
        })()}
      </Portal>
    </Show>
  );
}

export function useMobileGuard(): { shouldIntercept: () => boolean } {
  const [mobile] = createSignal(isMobileViewport() || isMobileUserAgent());
  return { shouldIntercept: mobile };
}
