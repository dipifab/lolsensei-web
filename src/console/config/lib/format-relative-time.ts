// Relative time formatter — admin runtime config UI
//
// "Just now" / "X seconds ago" / "X minutes ago" / "X hours ago" / "Yesterday"
// / "X days ago" / "X weeks ago" / "X months ago" / "X years ago".
//
// Stringhe in inglese: l'admin console e' in inglese only (ux-flows §1).
//
// Intl.RelativeTimeFormat e' usato lato browser; fallback manuale per coerenza
// con il vincolo SSR (Cloudflare Workers) — l'output deve essere identico
// sia che venga calcolato server-side, sia client-side.

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY; // approssimazione: nessun calendario civil
const YEAR = 365 * DAY;

function plural(n: number, singular: string, plural: string): string {
  return n === 1 ? singular : plural;
}

/**
 * Formatta una stringa ISO-8601 come tempo relativo "umano".
 *
 * Per timestamp futuri o invalidi, ritorna `"unknown"` (resilient: l'UI
 * mostra comunque qualcosa anziche crashare). I test coprono i casi limite.
 *
 * @param iso ISO-8601 timestamp (es. "2026-04-26T15:01:42Z")
 * @param now Iniettabile per test deterministici (default: Date.now())
 */
export function formatRelativeTime(iso: string, now: Date = new Date()): string {
  if (!iso || typeof iso !== 'string') return 'unknown';

  const then = new Date(iso);
  const ts = then.getTime();
  if (Number.isNaN(ts)) return 'unknown';

  const delta = now.getTime() - ts;

  // Future timestamps: clamp a "just now" (UI non deve gestire futuro nei
  // tempi audit log; eventuale clock skew ≤ qualche secondo).
  if (delta < 0) {
    if (Math.abs(delta) < MINUTE) return 'just now';
    return 'in the future';
  }

  if (delta < 30 * SECOND) return 'just now';
  if (delta < MINUTE) {
    const s = Math.floor(delta / SECOND);
    return `${s} ${plural(s, 'second', 'seconds')} ago`;
  }
  if (delta < HOUR) {
    const m = Math.floor(delta / MINUTE);
    return `${m} ${plural(m, 'minute', 'minutes')} ago`;
  }
  if (delta < DAY) {
    const h = Math.floor(delta / HOUR);
    return `${h} ${plural(h, 'hour', 'hours')} ago`;
  }
  if (delta < 2 * DAY) {
    return 'yesterday';
  }
  if (delta < WEEK) {
    const d = Math.floor(delta / DAY);
    return `${d} ${plural(d, 'day', 'days')} ago`;
  }
  if (delta < MONTH) {
    const w = Math.floor(delta / WEEK);
    return `${w} ${plural(w, 'week', 'weeks')} ago`;
  }
  if (delta < YEAR) {
    const mo = Math.floor(delta / MONTH);
    return `${mo} ${plural(mo, 'month', 'months')} ago`;
  }
  const y = Math.floor(delta / YEAR);
  return `${y} ${plural(y, 'year', 'years')} ago`;
}
