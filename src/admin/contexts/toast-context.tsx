import { createContext, createSignal, useContext, type JSX } from 'solid-js';

export type ToastType = 'success' | 'error' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  toasts: () => Toast[];
  showToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue>();

const MAX_TOASTS = 3;
const AUTO_DISMISS_MS = 5000;

let nextId = 0;

export function ToastProvider(props: { children: JSX.Element }) {
  const [toasts, setToasts] = createSignal<Toast[]>([]);

  function showToast(message: string, type: ToastType) {
    const id = nextId++;
    setToasts((prev) => [
      ...prev.slice(-(MAX_TOASTS - 1)),
      { id, message, type },
    ]);
    setTimeout(() => removeToast(id), AUTO_DISMISS_MS);
  }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {props.children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}
