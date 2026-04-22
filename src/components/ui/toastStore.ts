// WP24 TASK-3-002 — Toast store globale (SolidJS signal).
// FIFO max 3 toast visibili. Auto-dismiss dopo `duration` (default 5s).
import { createSignal } from 'solid-js';

export type ToastVariant = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

const MAX_TOASTS = 3;
const DEFAULT_DURATION = 5000;

const [toasts, setToasts] = createSignal<Toast[]>([]);

export { toasts };

function genId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `t-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function pushToast(t: Omit<Toast, 'id'> & { id?: string }): string {
  const id = t.id ?? genId();
  const duration = t.duration ?? DEFAULT_DURATION;
  const entry: Toast = { id, message: t.message, variant: t.variant, duration };

  setToasts((prev) => {
    const next = [...prev, entry];
    return next.length > MAX_TOASTS ? next.slice(next.length - MAX_TOASTS) : next;
  });

  if (typeof window !== 'undefined' && duration > 0) {
    window.setTimeout(() => dismissToast(id), duration);
  }
  return id;
}

export function dismissToast(id: string): void {
  setToasts((prev) => prev.filter((x) => x.id !== id));
}

export function clearToasts(): void {
  setToasts([]);
}
