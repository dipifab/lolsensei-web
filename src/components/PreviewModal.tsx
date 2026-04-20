import type { JSX } from 'solid-js';
import { Show, createEffect, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { useI18n } from '../i18n';

interface Props {
  open: boolean;
  onClose: () => void;
  /**
   * Optional preview body. When omitted the component renders an i18n caption
   * placeholder — final video/image asset is tracked under TASK-W19-P2-06.
   */
  children?: JSX.Element;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function PreviewModal(props: Props) {
  const { t } = useI18n();

  let dialogRef: HTMLDivElement | undefined;
  let closeButtonRef: HTMLButtonElement | undefined;
  let previouslyFocused: HTMLElement | null = null;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!props.open) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      props.onClose();
      return;
    }

    if (e.key === 'Tab' && dialogRef) {
      const focusable = dialogRef.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !dialogRef.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  // Portal content has its own lifecycle; attach key listener while open.
  createEffect(() => {
    if (!props.open) return;
    document.addEventListener('keydown', handleKeyDown);
    onCleanup(() => document.removeEventListener('keydown', handleKeyDown));
  });

  // Save/restore focus + toggle inert on sibling landmarks + lock body scroll.
  createEffect(() => {
    if (typeof document === 'undefined') return;

    if (props.open) {
      previouslyFocused = (document.activeElement as HTMLElement | null) ?? null;

      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      main?.setAttribute('inert', '');
      footer?.setAttribute('inert', '');
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus the close button on next tick so the portal content is mounted.
      queueMicrotask(() => {
        closeButtonRef?.focus();
      });

      onCleanup(() => {
        main?.removeAttribute('inert');
        footer?.removeAttribute('inert');
        document.body.style.overflow = previousOverflow;
        previouslyFocused?.focus?.();
        previouslyFocused = null;
      });
    }
  });

  const handleOverlayClick: JSX.EventHandler<HTMLDivElement, MouseEvent> = (e) => {
    if (e.currentTarget === e.target) {
      props.onClose();
    }
  };

  return (
    <Show when={props.open}>
      <Portal>
        <div
          class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8 motion-safe:animate-[fade-in_150ms_ease-out]"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
            aria-describedby="preview-modal-description"
            class="relative w-full max-w-3xl bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl p-6 md:p-8 text-on-surface"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <h2
                id="preview-modal-title"
                class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight"
              >
                {t('cta.preview.modal.title')}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={props.onClose}
                aria-label={t('cta.preview.modal.close')}
                class="shrink-0 inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg text-on-surface/70 hover:text-on-surface hover:bg-surface-container-highest/50 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-high focus-visible:outline-none"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p
              id="preview-modal-description"
              class="text-on-surface-variant leading-relaxed mb-6"
            >
              {t('cta.preview.modal.description')}
            </p>

            <Show
              when={props.children}
              fallback={
                <figure class="bg-surface-container-lowest rounded-lg overflow-hidden">
                  <img
                    src="/previews/champ-select-preview.webp"
                    alt={t('cta.preview.modal.title')}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-auto block"
                  />
                  <figcaption class="p-4 text-center text-sm text-on-surface-variant">
                    {t('cta.preview.modal.caption')}
                  </figcaption>
                </figure>
              }
            >
              {props.children}
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
