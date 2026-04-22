// WP24 TASK-3-001 — Modal base riusabile.
// Estratto dal pattern di PreviewModal (trap focus, Portal, aria-modal).
// Usato da PreferenceCenter e ConfirmDelete.
import type { Accessor, JSX } from 'solid-js';
import { Show, createEffect, createUniqueId, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { useI18n } from '../../i18n';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  open: Accessor<boolean>;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  size?: Size;
  dismissOnOverlay?: boolean;
  /** Override ``aria-label`` del bottone close. Default ``t('common.close')``. */
  closeLabel?: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'max-w-md',
  md: 'max-w-[520px]',
  lg: 'max-w-3xl',
};

export default function Modal(props: Props) {
  const { t } = useI18n();
  const titleId = createUniqueId();
  let dialogRef: HTMLDivElement | undefined;
  let closeButtonRef: HTMLButtonElement | undefined;
  let previouslyFocused: HTMLElement | null = null;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!props.open()) return;

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

  createEffect(() => {
    if (!props.open()) return;
    document.addEventListener('keydown', handleKeyDown);
    onCleanup(() => document.removeEventListener('keydown', handleKeyDown));
  });

  createEffect(() => {
    if (typeof document === 'undefined') return;
    if (!props.open()) return;

    previouslyFocused = (document.activeElement as HTMLElement | null) ?? null;
    queueMicrotask(() => closeButtonRef?.focus());

    onCleanup(() => {
      previouslyFocused?.focus?.();
      previouslyFocused = null;
    });
  });

  // WP24 F-11 (WCAG 2.4.11) — scroll lock del body quando il modal e' aperto.
  createEffect(() => {
    if (typeof document === 'undefined') return;
    if (!props.open()) return;
    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';
    onCleanup(() => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    });
  });

  const handleOverlayClick: JSX.EventHandler<HTMLDivElement, MouseEvent> = (e) => {
    if (e.currentTarget !== e.target) return;
    if (props.dismissOnOverlay === false) return;
    props.onClose();
  };

  const size = () => props.size ?? 'md';

  return (
    <Show when={props.open()}>
      <Portal>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            class={`relative w-full ${SIZE_CLASSES[size()]} bg-surface text-on-surface border border-outline-variant/20 rounded-2xl shadow-2xl p-6 md:p-8 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]`}
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <h2
                id={titleId}
                class="text-xl md:text-2xl font-headline font-extrabold tracking-tight"
              >
                {props.title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => props.onClose()}
                aria-label={props.closeLabel ?? t('common.close')}
                class="shrink-0 inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg text-on-surface/70 hover:text-on-surface hover:bg-surface-container-highest/50 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
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

            {props.children}
          </div>
        </div>
      </Portal>
    </Show>
  );
}
