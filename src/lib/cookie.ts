// WP24 — Cookie helper SSR-safe. Default attributi GDPR-compliant.
// REQ-F-024-013: durata 6 mesi per cookie di consenso, SameSite=Lax, Secure, Path=/.
// Mai HttpOnly: i cookie di consenso/anon devono essere leggibili da JS.
//
// WP24 M5 (SEC#8): ``deleteCookie`` deve replicare gli attributi (``Secure``,
// ``SameSite``, ``Domain``) del cookie originale, altrimenti alcuni browser
// non riconoscono la cancellazione (il tuple name+path+domain deve matchare).

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

// WP24 M5 — expiry differenziati per categoria:
// - consent: 6 mesi (Garante 2021, rinnovato a ogni interazione)
// - anon identifier: 13 mesi (cookie tecnico ex art. 122, scope analytics)
export const COOKIE_MAX_AGE_CONSENT = 15_552_000; // 180 giorni
export const COOKIE_MAX_AGE_ANON = 34_164_000;    // 395 giorni (~13 mesi)

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

export function deleteCookie(
  name: string,
  opts: Pick<CookieOptions, 'path' | 'domain' | 'sameSite' | 'secure'> = {},
): void {
  if (!isBrowser()) return;
  const path = opts.path ?? DEFAULT_OPTIONS.path;
  const sameSite = opts.sameSite ?? DEFAULT_OPTIONS.sameSite;
  const secure = opts.secure ?? DEFAULT_OPTIONS.secure;
  const segments = [
    `${encodeURIComponent(name)}=`,
    `Path=${path}`,
    'Max-Age=0',
    `SameSite=${sameSite}`,
  ];
  if (secure) segments.push('Secure');
  if (opts.domain) segments.push(`Domain=${opts.domain}`);
  document.cookie = segments.join('; ');
}
