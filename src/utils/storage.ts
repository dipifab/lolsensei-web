const hasWindow = (): boolean => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const warnDev = (op: string, err: unknown): void => {
  if (import.meta.env.DEV) {
    console.warn(`[storage] ${op} failed`, err);
  }
};

export function safeGet(key: string): string | null {
  if (!hasWindow()) return null;
  try {
    return window.localStorage.getItem(key);
  } catch (err) {
    warnDev('get', err);
    return null;
  }
}

export function safeSet(key: string, value: string): boolean {
  if (!hasWindow()) return false;
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (err) {
    warnDev('set', err);
    return false;
  }
}

export function safeRemove(key: string): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    warnDev('remove', err);
  }
}
