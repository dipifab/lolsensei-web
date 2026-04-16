import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import AdminDialog from './AdminDialog';
import AdminButton from './AdminButton';
import Icon from '../../components/Icon';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  variant?: 'danger' | 'warning';
  loading?: boolean;
  children?: JSX.Element;
}

const ICON_MAP = {
  danger: 'cancel',
  warning: 'schedule',
} as const;

const ICON_COLOR_MAP = {
  danger: 'text-error',
  warning: 'text-warning',
} as const;

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const variant = () => props.variant ?? 'danger';

  return (
    <AdminDialog
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      width="sm"
      footer={
        <div class="flex gap-3">
          <AdminButton
            variant="secondary"
            onClick={props.onClose}
            disabled={props.loading}
          >
            Annulla
          </AdminButton>
          <AdminButton
            variant={variant() === 'danger' ? 'danger' : 'primary'}
            onClick={props.onConfirm}
            loading={props.loading}
          >
            {props.confirmLabel ?? 'Conferma'}
          </AdminButton>
        </div>
      }
    >
      <div class="flex gap-4 items-start">
        <div
          class={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            variant() === 'danger' ? 'bg-error-container/20' : 'bg-[rgba(245,158,11,0.15)]'
          }`}
        >
          <Icon
            name={ICON_MAP[variant()]}
            class={`w-5 h-5 ${ICON_COLOR_MAP[variant()]}`}
          />
        </div>
        <div class="space-y-2">
          <p class="text-sm text-on-surface">{props.message}</p>
          <Show when={props.children}>
            <div class="text-sm text-on-surface-variant">{props.children}</div>
          </Show>
        </div>
      </div>
    </AdminDialog>
  );
}
