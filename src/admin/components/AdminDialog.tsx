import { Show, createEffect, onCleanup } from 'solid-js';
import type { JSX } from 'solid-js';
import { Portal } from 'solid-js/web';

interface AdminDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  width?: 'sm' | 'md' | 'lg';
  children: JSX.Element;
  footer?: JSX.Element;
}

const WIDTH_CLASS: Record<NonNullable<AdminDialogProps['width']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

let dialogIdCounter = 0;

function trapFocus(container: HTMLElement) {
  const focusable = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }

  container.addEventListener('keydown', handleKeyDown);
  return () => container.removeEventListener('keydown', handleKeyDown);
}

export default function AdminDialog(props: AdminDialogProps) {
  const titleId = `admin-dialog-title-${++dialogIdCounter}`;

  return (
    <Show when={props.open}>
      <Portal mount={document.body}>
        <DialogContent
          titleId={titleId}
          title={props.title}
          width={props.width}
          onClose={props.onClose}
          footer={props.footer}
        >
          {props.children}
        </DialogContent>
      </Portal>
    </Show>
  );
}

/**
 * Inner component rendered only when the dialog is open.
 * Keeps effects and cleanup lifecycle correctly scoped.
 */
function DialogContent(props: {
  titleId: string;
  title: string;
  width?: 'sm' | 'md' | 'lg';
  onClose: () => void;
  children: JSX.Element;
  footer?: JSX.Element;
}) {
  let panelRef: HTMLDivElement | undefined;

  createEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the dialog panel
    panelRef?.focus();

    // Focus trap
    let removeTrap: (() => void) | undefined;
    if (panelRef) {
      removeTrap = trapFocus(panelRef);
    }

    // Escape key handler
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }
    document.addEventListener('keydown', handleEscape);

    onCleanup(() => {
      document.body.style.overflow = originalOverflow;
      removeTrap?.();
      document.removeEventListener('keydown', handleEscape);
      previouslyFocused?.focus();
    });
  });

  return (
    <div class="admin-theme fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        class="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={() => props.onClose()}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={props.titleId}
        tabindex="-1"
        class={`relative bg-surface-container/90 backdrop-blur-xl rounded-xl border border-outline-variant/10 w-full shadow-[0_12px_40px_rgba(0,0,0,0.4)] mx-4 outline-none ${WIDTH_CLASS[props.width ?? 'md']}`}
      >
        {/* Header */}
        <div class="flex items-center justify-between px-6 py-4 border-b border-outline-variant/10">
          <h2
            id={props.titleId}
            class="font-headline text-lg font-semibold text-on-surface"
          >
            {props.title}
          </h2>
          <button
            type="button"
            aria-label="Chiudi"
            class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={() => props.onClose()}
          >
            &#x2715;
          </button>
        </div>

        {/* Body */}
        <div class="px-6 py-4 max-h-[60vh] overflow-y-auto">
          {props.children}
        </div>

        {/* Footer */}
        <Show when={props.footer}>
          <div class="px-6 py-4 border-t border-outline-variant/10 flex justify-end gap-3">
            {props.footer}
          </div>
        </Show>
      </div>
    </div>
  );
}
