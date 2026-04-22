// WP24 — Cookie helper SSR-safe. Default attributi GDPR-compliant.
// REQ-F-024-013: durata 6 mesi, SameSite=Lax, Secure, Path=/.
// Mai HttpOnly: i cookie di consenso/anon devono essere leggibili da JS.

export interface CookieOptions {
  path?: string;
  maxAge?: number;
  sameSite?: 'Lax' | 'Strict' | 'None';
  secure?: boolean;
  domain?: string;
}

const DEFAULT_OPTIONS: Required<Omit<CookieOptions, 'domain'>> = {
  path: '/',
  maxAge: 15_552_000, // 6 mesi in secondi (180 giorni)
  sameSite: 'Lax',
  secure: true,
};

function isBrowser(): boolean {
  return typeof document !== 'undefined';
}

export function readCookie(name: string): string | null {
  if (!isBrowser()) return null;
  const target = encodeURIComponent(name) + '=';
  const parts = document.cookie.split(';');
  for (const raw of parts) {
    const c = raw.trim();
    if (c.startsWith(target)) {
      return decodeURIComponent(c.substring(target.length));
    }
  }
  return null;
}

export function writeCookie(
  name: string,
  value: string,
  opts: CookieOptions = {},
): void {
  if (!isBrowser()) return;
  const { path, maxAge, sameSite, secure } = { ...DEFAULT_OPTIONS, ...opts };
  const segments = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `Path=${path}`,
    `Max-Age=${maxAge}`,
    `SameSite=${sameSite}`,
  ];
  if (secure) segments.push('Secure');
  if (opts.domain) segments.push(`Domain=${opts.domain}`);
  document.cookie = segments.join('; ');
}

export function deleteCookie(name: string, path: string = '/'): void {
  if (!isBrowser()) return;
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0; SameSite=Lax`;
}
