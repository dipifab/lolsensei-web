// REQ-F-030-001 / DEC-OP-015 — lowercase canonical for summoner URLs.
//
// The route param `[handle]` carries `gameName-tagLine` (URL-safe). We:
//   1. `decodeURIComponent` the raw segment (any %xx escapes back to chars).
//   2. Apply Unicode NFC normalization (so KR/JP combining sequences match).
//   3. Lowercase using a locale-independent fold (`toLocaleLowerCase('und')`)
//      to avoid the Turkish-i pitfall (`I` -> `ı` in `tr`).
//   4. Split on the LAST `-` to allow `gameName` to contain `-`.
//   5. Re-encode as `encodeURIComponent(gameName)-encodeURIComponent(tagLine)`
//      and compare with the input. If different we ask the route handler to
//      301-redirect to the canonical lowercase form (Googlebot consolidates).
//
// Edge cases:
//   - empty / no `-` / trailing `-` / leading `-` -> `malformed`.
//   - malformed percent-encoding (`%`) raising in `decodeURIComponent` ->
//     `malformed` (no exception bubbles to the route).

export type HandleParseResult =
  | {
      kind: 'ok';
      gameName: string;
      tagLine: string;
      /** Canonical (lowercase NFC, encoded) form `${gameName}-${tagLine}`. */
      canonical: string;
    }
  | {
      kind: 'needs_redirect';
      /** Canonical form to redirect to (encoded). */
      canonical: string;
    }
  | { kind: 'malformed' };

export function normalizeHandle(rawUrlParam: string): HandleParseResult {
  if (!rawUrlParam) return { kind: 'malformed' };

  let decoded: string;
  try {
    decoded = decodeURIComponent(rawUrlParam);
  } catch {
    return { kind: 'malformed' };
  }

  const nfc = decoded.normalize('NFC');
  const lowered = nfc.toLocaleLowerCase('und');

  // Split on LAST '-' so gameNames containing '-' (e.g. "abc-def#tag") work.
  const lastDash = lowered.lastIndexOf('-');
  if (lastDash <= 0 || lastDash === lowered.length - 1) {
    return { kind: 'malformed' };
  }

  const gameName = lowered.slice(0, lastDash);
  const tagLine = lowered.slice(lastDash + 1);
  if (!gameName || !tagLine) return { kind: 'malformed' };

  const canonical = `${encodeURIComponent(gameName)}-${encodeURIComponent(tagLine)}`;

  if (rawUrlParam !== canonical) {
    return { kind: 'needs_redirect', canonical };
  }

  return { kind: 'ok', gameName, tagLine, canonical };
}
