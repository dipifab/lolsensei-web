// src/utils/debounce.ts
//
// Minimal debounce utility for Solid. Not a primitive (no reactive
// derivation): thin wrapper that schedules the trailing call after
// `delayMs` ms. Consumers must call `cancel()` on cleanup (e.g. from
// onCleanup) to avoid post-unmount writes.

export interface Debounced<T extends (...args: never[]) => void> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
}

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delayMs: number,
): Debounced<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pendingArgs: Parameters<T> | null = null;

  const wrapped = ((...args: Parameters<T>) => {
    pendingArgs = args;
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (pendingArgs) {
        const a = pendingArgs;
        pendingArgs = null;
        fn(...a);
      }
    }, delayMs);
  }) as Debounced<T>;

  wrapped.cancel = () => {
    if (timer != null) clearTimeout(timer);
    timer = null;
    pendingArgs = null;
  };
  wrapped.flush = () => {
    if (timer != null) clearTimeout(timer);
    timer = null;
    if (pendingArgs) {
      const a = pendingArgs;
      pendingArgs = null;
      fn(...a);
    }
  };

  return wrapped;
}
