// WP34 — Counter data + Pro builds public API types.
// SYNC: manually mirrored from backend Pydantic schemas.
// Contract sources:
//   - backend/app/schemas/public_counters.py
//   - backend/app/schemas/public_pro_builds.py
// Design references:
//   - dev-repository/wp-34/design/api-contracts.md (sezioni 1.1, 1.2, 1.3)
//   - dev-repository/wp-34/design/data-model.md (sezioni 1.1, 1.2)
//
// Any change to the backend DTO MUST be mirrored here.

// -------------------- Shared --------------------

/**
 * Role enum allineato al naming routes pubbliche WP34
 * (`/api/v1/public/counters/{champion}/{role}`). Mappa 1:1 a Riot
 * `teamPosition` con normalizzazione: BOTTOM -> bot, UTILITY -> support.
 */
export type Wp34Role = 'top' | 'jungle' | 'mid' | 'bot' | 'support';

const WP34_ROLES: ReadonlySet<string> = new Set([
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
]);

// -------------------- Counter data --------------------

/**
 * Bucket qualitativo counter (Reg 17: zero decimali pubblici). Output API
 * filtra `Indeterminato`: solo Favorevole / Neutro / Difficile finiscono
 * nelle response 200.
 */
export type CounterClassification = 'Favorevole' | 'Neutro' | 'Difficile';

const COUNTER_CLASSIFICATIONS: ReadonlySet<string> = new Set([
  'Favorevole',
  'Neutro',
  'Difficile',
]);

/**
 * Singolo opponent restituito da `/api/v1/public/counters/{champion}/{role}`.
 * Ordine API: `sample_size DESC`.
 */
export interface CounterOpponent {
  /** Riot champion slug `[a-z][a-z0-9-]+`. */
  slug: string;
  classification: CounterClassification;
  /** Numero match aggregati per la coppia (>= 30 per non-Indeterminato). */
  sample_size: number;
}

/**
 * Payload completo `GET /api/v1/public/counters/{champion}/{role}`.
 * `last_aggregated`: ISO date YYYY-MM-DD (es. "2026-04-24").
 * `patch_id`: nullable se la prima aggregazione non ha ancora popolato il
 * campo (es. seed dataset). Stringa formato Riot "MAJOR.MINOR".
 */
export interface CounterData {
  champion: string;
  role: Wp34Role;
  patch_id: string | null;
  last_aggregated: string;
  opponents: CounterOpponent[];
}

// -------------------- Pro builds --------------------

/**
 * Periodo rolling MVP: solo `last_14d` per ora (DEC-OP-W34-012).
 */
export type ProBuildsPeriod = 'last_14d';

/**
 * Pattern build aggregato dominante (top-3 item order, top-1 rune set,
 * top-1 summoner spells). Niente PII: SOLO id catalog + slug.
 */
export interface ProBuildPattern {
  /** Top-3 sequenze item id stringhe (es. "item_3071"). Outer length <= 3. */
  item_order_top3: string[][];
  rune_top1: {
    keystone: number;
    primary_tree: number[];
    secondary_tree: number[];
  };
  /** Top-1 summoner spell pair (es. ["flash", "ignite"]). */
  summoner_top1: string[];
}

/**
 * Payload `GET /api/v1/public/pro-builds/{champion}/{role}`.
 *
 * Anonimizzazione hard (REQ-F-034-017): nessun `gameName`, `tagLine`,
 * `summonerName`, `puuid` raw. Solo aggregato.
 */
export interface ProBuildsData {
  champion: string;
  role: Wp34Role;
  period: ProBuildsPeriod;
  /** ISO 8601 UTC timestamp ultima aggregation (es. "2026-04-24T22:30:00Z"). */
  data_freshness_at: string;
  /** Region MVP: ["euw1", "na1"]. */
  regions: string[];
  /** Numero match nel pattern dominante. */
  sample_size: number;
  build_pattern: ProBuildPattern;
}

/**
 * Bucket qualitativo win-rate per leaderboard (Reg 17: niente decimali).
 */
export type WinRateClass = 'Eccellente' | 'Buono' | 'Medio';

const WIN_RATE_CLASSES: ReadonlySet<string> = new Set([
  'Eccellente',
  'Buono',
  'Medio',
]);

/**
 * Singola entry leaderboard challenger anonimizzata.
 *
 * `puuid_bucket_id` = SHA-256(puuid + CHALLENGER_PUUID_HASH_SALT). Esposto
 * come bucket id pubblico ma NON navigabile (no route `/pro/{id}` MVP).
 * `common_build_signature` = signature compatta del pattern dominante per
 * il bucket (es. "item_3071_3053_6333").
 */
export interface LeaderboardEntry {
  puuid_bucket_id: string;
  region: string;
  match_count_14d: number;
  win_rate_class: WinRateClass;
  common_build_signature: string;
}

/**
 * Payload `GET /api/v1/public/pro-builds/leaderboard`.
 */
export interface LeaderboardData {
  champion: string;
  role: Wp34Role;
  period: ProBuildsPeriod;
  leaderboard: LeaderboardEntry[];
}

// -------------------- Type guards --------------------

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isWp34Role(value: unknown): value is Wp34Role {
  return typeof value === 'string' && WP34_ROLES.has(value);
}

export function isCounterClassification(
  value: unknown,
): value is CounterClassification {
  return typeof value === 'string' && COUNTER_CLASSIFICATIONS.has(value);
}

function isCounterOpponent(value: unknown): value is CounterOpponent {
  if (!isObject(value)) return false;
  return (
    typeof value.slug === 'string' &&
    isCounterClassification(value.classification) &&
    typeof value.sample_size === 'number'
  );
}

export function isCounterData(value: unknown): value is CounterData {
  if (!isObject(value)) return false;
  if (typeof value.champion !== 'string') return false;
  if (!isWp34Role(value.role)) return false;
  if (value.patch_id !== null && typeof value.patch_id !== 'string') {
    return false;
  }
  if (typeof value.last_aggregated !== 'string') return false;
  if (!Array.isArray(value.opponents)) return false;
  return value.opponents.every(isCounterOpponent);
}

function isProBuildPattern(value: unknown): value is ProBuildPattern {
  if (!isObject(value)) return false;
  if (!Array.isArray(value.item_order_top3)) return false;
  for (const seq of value.item_order_top3) {
    if (!Array.isArray(seq)) return false;
    if (!seq.every((s) => typeof s === 'string')) return false;
  }
  if (!isObject(value.rune_top1)) return false;
  if (typeof value.rune_top1.keystone !== 'number') return false;
  if (!Array.isArray(value.rune_top1.primary_tree)) return false;
  if (!value.rune_top1.primary_tree.every((n) => typeof n === 'number')) {
    return false;
  }
  if (!Array.isArray(value.rune_top1.secondary_tree)) return false;
  if (!value.rune_top1.secondary_tree.every((n) => typeof n === 'number')) {
    return false;
  }
  if (!Array.isArray(value.summoner_top1)) return false;
  return value.summoner_top1.every((s) => typeof s === 'string');
}

export function isProBuildsData(value: unknown): value is ProBuildsData {
  if (!isObject(value)) return false;
  return (
    typeof value.champion === 'string' &&
    isWp34Role(value.role) &&
    value.period === 'last_14d' &&
    typeof value.data_freshness_at === 'string' &&
    Array.isArray(value.regions) &&
    value.regions.every((r) => typeof r === 'string') &&
    typeof value.sample_size === 'number' &&
    isProBuildPattern(value.build_pattern)
  );
}

export function isWinRateClass(value: unknown): value is WinRateClass {
  return typeof value === 'string' && WIN_RATE_CLASSES.has(value);
}

function isLeaderboardEntry(value: unknown): value is LeaderboardEntry {
  if (!isObject(value)) return false;
  return (
    typeof value.puuid_bucket_id === 'string' &&
    typeof value.region === 'string' &&
    typeof value.match_count_14d === 'number' &&
    isWinRateClass(value.win_rate_class) &&
    typeof value.common_build_signature === 'string'
  );
}

export function isLeaderboardData(value: unknown): value is LeaderboardData {
  if (!isObject(value)) return false;
  return (
    typeof value.champion === 'string' &&
    isWp34Role(value.role) &&
    value.period === 'last_14d' &&
    Array.isArray(value.leaderboard) &&
    value.leaderboard.every(isLeaderboardEntry)
  );
}
