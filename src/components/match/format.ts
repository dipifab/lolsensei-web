// WP31 F4 — Pure formatters used by the match-* components.
//
// Extracted into a dedicated module so unit tests can import them without
// pulling in the SolidJS render runtime (and transitively `@solidjs/router`,
// which crashes when imported outside a render context).

/**
 * Format a UTC ISO timestamp as `HH:MM`. Stable across host timezones — the
 * label intentionally surfaces UTC so users in different regions read the
 * same string (matches the i18n key `match.quota.badge.reset_at`).
 */
export function formatResetTime(isoUtc: string): string {
  try {
    const d = new Date(isoUtc);
    if (Number.isNaN(d.getTime())) return isoUtc;
    const hh = String(d.getUTCHours()).padStart(2, '0');
    const mm = String(d.getUTCMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  } catch {
    return isoUtc;
  }
}

/**
 * Format a timeline timestamp (milliseconds from game start) as `M:SS` (no
 * hour rollover — matches show as `65:00` rather than `1:05:00` for at-a-
 * glance scanning).
 */
export function formatGameTime(timestampMs: number): string {
  const safe = Math.max(0, Math.floor(timestampMs / 1000));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
