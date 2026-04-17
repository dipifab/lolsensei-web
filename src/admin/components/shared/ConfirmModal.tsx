import { Show, createEffect, createSignal, createUniqueId } from 'solid-js';
import AdminDialog from '../AdminDialog';

type Variant = 'danger' | 'warning' | 'info';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  message?: string;
  variant?: Variant;
  confirmLabel?: string;
  cancelLabel?: string;
  requireReason?: boolean;
  reasonLabel?: string;
  reasonPlaceholder?: string;
  loading?: boolean;
  onConfirm: (reason?: string) => void;
  onClose: () => void;
}

const VARIANT_CLASS: Record<Variant, string> = {
  danger: 'bg-error text-on-error hover:brightness-110',
  warning: 'bg-warning text-on-surface hover:brightness-110',
  info: 'gold-gradient text-on-primary-fixed hover:brightness-110',
};

export default function ConfirmModal(props: ConfirmModalProps) {
  const [reason, setReason] = createSignal('');
  const [touched, setTouched] = createSignal(false);
  const reasonId = createUniqueId();
  const reasonErrorId = `${reasonId}-err`;
  const reasonHintId = `${reasonId}-hint`;

  createEffect(() => {
    if (props.open) {
      setReason('');
      setTouched(false);
    }
  });

  const trimmed = () => reason().trim();
  const reasonError = (): string | null => {
    if (!props.requireReason) return null;
    const t = trimmed();
    if (!touched() && t.length === 0) return null;
    if (t.length < 5) return 'Minimum 5 characters';
    if (t.length > 500) return 'Maximum 500 characters';
    return null;
  };

  const canSubmit = () => {
    if (props.loading) return false;
    if (props.requireReason) {
      const t = trimmed();
      return t.length >= 5 && t.length <= 500;
    }
    return true;
  };

  const handleConfirm = () => {
    setTouched(true);
    if (!canSubmit()) return;
    props.onConfirm(props.requireReason ? trimmed() : undefined);
  };

  const handleClose = () => {
    if (props.loading) return;
    props.onClose();
  };

  return (
    <AdminDialog
      open={props.open}
      onClose={handleClose}
      title={props.title}
      width="md"
      footer={
        <>
          <button
            type="button"
            disabled={props.loading}
            onClick={handleClose}
            class="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-sm font-medium text-on-surface hover:bg-surface-container-high disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            {props.cancelLabel ?? 'Cancel'}
          </button>
          <button
            type="button"
            disabled={!canSubmit()}
            onClick={handleConfirm}
            class={`rounded-lg px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2 ${VARIANT_CLASS[props.variant ?? 'info']}`}
          >
            {props.loading ? 'Submitting...' : (props.confirmLabel ?? 'Confirm')}
          </button>
        </>
      }
    >
      <div class="space-y-4">
        <Show when={props.message}>
          <p class="text-sm text-on-surface">{props.message}</p>
        </Show>
        <Show when={props.requireReason}>
          <div>
            <label
              for={reasonId}
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {props.reasonLabel ?? 'Reason'} <span class="text-error">*</span>
            </label>
            <textarea
              id={reasonId}
              value={reason()}
              onInput={(e) => setReason(e.currentTarget.value)}
              onBlur={() => setTouched(true)}
              disabled={props.loading}
              placeholder={props.reasonPlaceholder ?? 'e.g. ToS abuse, ticket #1234'}
              rows={3}
              aria-required={true}
              aria-invalid={reasonError() ? true : undefined}
              aria-describedby={reasonError() ? reasonErrorId : reasonHintId}
              minLength={5}
              maxLength={500}
              class="w-full rounded-lg border bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container disabled:opacity-50 resize-y"
              classList={{
                'border-error': !!reasonError(),
                'border-outline-variant': !reasonError(),
              }}
            />
            <div class="mt-1 flex justify-between text-xs">
              <Show
                when={reasonError()}
                fallback={
                  <span id={reasonHintId} class="text-on-surface-variant">
                    Minimum 5, maximum 500 characters.
                  </span>
                }
              >
                <span id={reasonErrorId} class="text-error">
                  {reasonError()}
                </span>
              </Show>
              <span class="text-on-surface-variant">{trimmed().length}/500</span>
            </div>
          </div>
        </Show>
      </div>
    </AdminDialog>
  );
}
