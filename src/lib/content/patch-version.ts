// WP35 — Patch version semver-lite comparator (DEC-OP-023).
//
// I patch slug Riot sono sempre `major.minor` (es. `14.10`). Non hanno
// patch-revision Z, non hanno pre-release. Implementiamo un comparator
// lean focalizzato su questo formato, evitando di importare semver
// (~10kb) per un confronto a due interi.

export type PatchSlug = string;

const PATCH_REGEX = /^(\d{1,2})\.(\d{1,2})$/;

interface ParsedPatch {
  major: number;
  minor: number;
}

function parsePatch(slug: string): ParsedPatch {
  const m = slug.match(PATCH_REGEX);
  if (!m) {
    throw new Error(
      `invalid patch slug ${JSON.stringify(slug)}: expected major.minor`,
    );
  }
  return { major: Number(m[1]), minor: Number(m[2]) };
}

/**
 * Returns -1 if `a < b`, 0 if `a === b`, 1 if `a > b`.
 * Throws on malformed input.
 */
export function compareVersions(a: PatchSlug, b: PatchSlug): -1 | 0 | 1 {
  const pa = parsePatch(a);
  const pb = parsePatch(b);
  if (pa.major !== pb.major) return pa.major < pb.major ? -1 : 1;
  if (pa.minor !== pb.minor) return pa.minor < pb.minor ? -1 : 1;
  return 0;
}

/**
 * Picks the highest patch slug from a non-empty list. Throws on empty.
 * Stable: returns the first occurrence on ties.
 */
export function pickLatestPatch(patches: readonly PatchSlug[]): PatchSlug {
  if (patches.length === 0) {
    throw new Error('pickLatestPatch: empty list');
  }
  return patches.reduce((latest, candidate) =>
    compareVersions(candidate, latest) > 0 ? candidate : latest,
  );
}

export function isValidPatchSlug(slug: string): boolean {
  return PATCH_REGEX.test(slug);
}
