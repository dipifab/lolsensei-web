// SYNC: manually mirrored from backend `app/integrations/riot_api/regions.py`
// REGION_MAP. ADR-WP30-D-06 / DEC-OP-006 — single source of truth on backend
// side; FE keeps a pinned copy for path validation at the edge (no extra fetch
// on every summoner request) and for typed UI dropdowns.
//
// Parity with backend is enforced by `tests/regions-parity.test.ts` (TASK F2-04)
// which fails CI if the two sets diverge. When the backend whitelist changes:
//   1. Update `ALLOWED_REGIONS` and `REGION_DISPLAY` here.
//   2. Update `tests/fixtures/regions-snapshot.json`.
//   3. Bump `wp30.shared.region.*` i18n keys if a new region is added.

export const ALLOWED_REGIONS = [
  'br1',
  'eun1',
  'euw1',
  'jp1',
  'kr',
  'la1',
  'la2',
  'na1',
  'oc1',
  'ph2',
  'ru',
  'sg2',
  'th2',
  'tr1',
  'tw2',
  'vn2',
] as const;

export type AllowedRegion = (typeof ALLOWED_REGIONS)[number];

/**
 * Display label for the region. Kept in English here (server-side / SEO
 * surface). The localized label per i18n locale lives in i18n keys
 * `wp30.shared.region.<region>` and is preferred in user-facing UI.
 *
 * NB: the JSON-LD `homeLocation.name` (Person schema, DEC-OP-022) and the
 * `summoner_info.region_display` field already coming from the backend both
 * use this English form to keep machine-readable artifacts consistent.
 */
export const REGION_DISPLAY: Record<AllowedRegion, string> = {
  br1: 'Brazil',
  eun1: 'EU Nordic & East',
  euw1: 'EU West',
  jp1: 'Japan',
  kr: 'Korea',
  la1: 'Latin America North',
  la2: 'Latin America South',
  na1: 'North America',
  oc1: 'Oceania',
  ph2: 'Philippines',
  ru: 'Russia',
  sg2: 'Singapore',
  th2: 'Thailand',
  tr1: 'Turkey',
  tw2: 'Taiwan',
  vn2: 'Vietnam',
};

export function isAllowedRegion(value: string): value is AllowedRegion {
  return (ALLOWED_REGIONS as readonly string[]).includes(value);
}
