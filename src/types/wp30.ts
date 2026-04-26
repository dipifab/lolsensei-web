// SYNC: manually mirrored from backend Pydantic schemas
// Contract sources:
//   - backend/app/schemas/public_summoner.py (BE response /api/v1/public/summoner/...)
//   - backend/app/schemas/public_tier_list.py (BE response /api/v1/public/tier-list)
// Design references:
//   - dev-repository/wp-30/design/data-model.md sezioni 3, 4
//   - dev-repository/wp-30/design/api-contracts.md sezioni 3.2, 4.2
//
// Any change to the backend DTO MUST be mirrored here. Both schemas double as
// KV cache `data` payload (envelope schema in `lib/kv-cache.ts`).

// -------------------- SummonerPayload --------------------

/**
 * Identita pubblica del summoner. Sempre presente, anche per player privati o
 * inactive (DEC-OP-022 / DEC-OP-023). `region_display` e gia localizzato
 * server-side in EN (es. "EU West", "Korea") — NON tradotto via i18n al
 * runtime FE (sarebbe duplicazione e inconsistenza con JSON-LD homeLocation).
 */
export interface SummonerInfo {
  puuid: string;
  game_name: string;
  tag_line: string;
  summoner_level: number;
  profile_icon_id: number;
  region: string;
  region_display: string;
}

/**
 * Tier ranked Riot. `null` ammesso a livello payload (UNRANKED player) come
 * `RankInfo | null` su `SummonerPayload.rank` (DEC-OP-023).
 */
export type RankTier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'EMERALD'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';

export interface RankInfo {
  queue_type: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR';
  tier: RankTier;
  division: 'I' | 'II' | 'III' | 'IV';
  league_points: number;
  wins: number;
  losses: number;
}

/**
 * Statistica aggregata per campione, max 5 entry (DEC-OP-018). Backend la
 * computa da `recent_matches` (no DB write — ADR-023 / DEC-OP-011).
 * `null` a livello payload se `is_private = true` (DEC-OP-022).
 */
export interface ChampionStat {
  champion: string;
  games_played: number;
  wins: number;
  losses: number;
  win_rate: number;
  kda: number;
  avg_kills: number;
  avg_deaths: number;
  avg_assists: number;
}

/**
 * Singolo match recente. Max 10 entry (DEC-OP-018). `null` a livello payload
 * se `is_private = true`; `[]` se `is_inactive = true` (triggera noindex FE).
 */
export interface RecentMatch {
  match_id: string;
  queue_id: number;
  game_mode: string;
  duration_seconds: number;
  /** ISO 8601 UTC timestamp (es. "2026-04-25T14:23:11Z"). */
  played_at: string;
  champion: string;
  /** Riot Match-V5 individualPosition: TOP|JUNGLE|MIDDLE|BOTTOM|UTILITY|''. */
  role: string;
  result: 'win' | 'loss';
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
  /** Patch in formato "MAJOR.MINOR" (es. "14.20"). */
  patch: string;
}

/**
 * Freshness timestamp dei dati componenti il payload. Usati per il banner UI
 * "Updated <timeAgo>" (i18n key `wp30.shared.updated_at_label`).
 */
export interface DataFreshness {
  /** ISO 8601 UTC timestamp dell'ultima fetch League-V4. */
  rank_fetched_at: string;
  /** ISO 8601 UTC timestamp dell'ultima fetch Match-V5. */
  matches_fetched_at: string;
}

/**
 * Payload completo summoner page (BE response + KV cache `data`).
 *
 * Cardinalita campi:
 * - `summoner_info`: 1 (sempre).
 * - `rank`: 0..1 (null se UNRANKED — DEC-OP-023).
 * - `champion_stats`: 0..5 entries; `null` se `is_private = true`.
 * - `recent_matches`: 0..10 entries; `null` se `is_private = true`, `[]` se inactive.
 * - `is_private`: DEC-OP-022 — match history Riot privacy.
 * - `is_inactive`: derivato (`recent_matches.length === 0 && !is_private`),
 *   triggera noindex FE.
 */
export interface SummonerPayload {
  summoner_info: SummonerInfo;
  rank: RankInfo | null;
  champion_stats: ChampionStat[] | null;
  recent_matches: RecentMatch[] | null;
  is_private: boolean;
  is_inactive: boolean;
  data_freshness: DataFreshness;
}

// -------------------- TierListPayload --------------------

export type TierListRole = 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'all';
export type TierGrade = 'S' | 'A' | 'B' | 'C' | 'D';

/**
 * Singola riga della tier list ordinata per `rank` ascendente.
 */
export interface TierEntry {
  champion: string;
  tier: TierGrade;
  /** Win rate normalizzato 0..1 (es. 0.5421). */
  win_rate: number;
  /** Pick rate normalizzato 0..1. */
  pick_rate: number;
  /** Ban rate normalizzato 0..1. */
  ban_rate: number;
  sample_size: number;
  /** Ordinale denso 1..N nel (role, patch). */
  rank: number;
}

/**
 * Payload completo tier list page (BE response + KV cache `data`).
 *
 * `insufficient_sample === true` se `sample_size < TIER_LIST_INDEXABLE_THRESHOLD`
 * (DEC-OP-012, costante BE = 200). FE triggera `noindex` quando true.
 */
export interface TierListPayload {
  role: TierListRole;
  /** Patch in formato "MAJOR.MINOR" (es. "14.20"). */
  patch: string;
  /** Locale di emit (per cache-key + JSON-LD label localizzata). */
  lang: string;
  /** ISO 8601 UTC timestamp ultimo refresh cron. */
  computed_at: string;
  insufficient_sample: boolean;
  sample_size: number;
  /** 0..N ordered by `rank` asc. */
  tiers: TierEntry[];
}

// -------------------- KV cache envelope --------------------

/**
 * Envelope JSON uniforme dei valori in `LOLAI_PUBLIC_CACHE` (DEC-OP-013).
 * Usato per logica fresh / stale-while-error in `lib/kv-cache.ts`.
 */
export interface KvCacheEnvelope<T> {
  data: T;
  /** Unix epoch in secondi (`Math.floor(Date.now() / 1000)` lato writer). */
  fetched_at: number;
  /** Fresh window in secondi (1h summoner, 24h tier list). */
  ttl: number;
}

// -------------------- Type guards --------------------

const RANK_TIERS: ReadonlySet<string> = new Set([
  'IRON',
  'BRONZE',
  'SILVER',
  'GOLD',
  'PLATINUM',
  'EMERALD',
  'DIAMOND',
  'MASTER',
  'GRANDMASTER',
  'CHALLENGER',
]);

const TIER_LIST_ROLES: ReadonlySet<string> = new Set([
  'top',
  'jungle',
  'mid',
  'bot',
  'support',
  'all',
]);

const TIER_GRADES: ReadonlySet<string> = new Set(['S', 'A', 'B', 'C', 'D']);

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isSummonerInfo(value: unknown): value is SummonerInfo {
  if (!isObject(value)) return false;
  return (
    typeof value.puuid === 'string' &&
    typeof value.game_name === 'string' &&
    typeof value.tag_line === 'string' &&
    typeof value.summoner_level === 'number' &&
    typeof value.profile_icon_id === 'number' &&
    typeof value.region === 'string' &&
    typeof value.region_display === 'string'
  );
}

function isRankInfo(value: unknown): value is RankInfo {
  if (!isObject(value)) return false;
  return (
    (value.queue_type === 'RANKED_SOLO_5x5' || value.queue_type === 'RANKED_FLEX_SR') &&
    typeof value.tier === 'string' &&
    RANK_TIERS.has(value.tier) &&
    (value.division === 'I' ||
      value.division === 'II' ||
      value.division === 'III' ||
      value.division === 'IV') &&
    typeof value.league_points === 'number' &&
    typeof value.wins === 'number' &&
    typeof value.losses === 'number'
  );
}

function isChampionStat(value: unknown): value is ChampionStat {
  if (!isObject(value)) return false;
  return (
    typeof value.champion === 'string' &&
    typeof value.games_played === 'number' &&
    typeof value.wins === 'number' &&
    typeof value.losses === 'number' &&
    typeof value.win_rate === 'number' &&
    typeof value.kda === 'number' &&
    typeof value.avg_kills === 'number' &&
    typeof value.avg_deaths === 'number' &&
    typeof value.avg_assists === 'number'
  );
}

function isRecentMatch(value: unknown): value is RecentMatch {
  if (!isObject(value)) return false;
  return (
    typeof value.match_id === 'string' &&
    typeof value.queue_id === 'number' &&
    typeof value.game_mode === 'string' &&
    typeof value.duration_seconds === 'number' &&
    typeof value.played_at === 'string' &&
    typeof value.champion === 'string' &&
    typeof value.role === 'string' &&
    (value.result === 'win' || value.result === 'loss') &&
    typeof value.kills === 'number' &&
    typeof value.deaths === 'number' &&
    typeof value.assists === 'number' &&
    typeof value.cs === 'number' &&
    typeof value.patch === 'string'
  );
}

function isDataFreshness(value: unknown): value is DataFreshness {
  if (!isObject(value)) return false;
  return (
    typeof value.rank_fetched_at === 'string' &&
    typeof value.matches_fetched_at === 'string'
  );
}

export function isSummonerPayload(value: unknown): value is SummonerPayload {
  if (!isObject(value)) return false;
  if (!isSummonerInfo(value.summoner_info)) return false;
  if (value.rank !== null && !isRankInfo(value.rank)) return false;
  if (value.champion_stats !== null) {
    if (!Array.isArray(value.champion_stats)) return false;
    if (!value.champion_stats.every(isChampionStat)) return false;
  }
  if (value.recent_matches !== null) {
    if (!Array.isArray(value.recent_matches)) return false;
    if (!value.recent_matches.every(isRecentMatch)) return false;
  }
  return (
    typeof value.is_private === 'boolean' &&
    typeof value.is_inactive === 'boolean' &&
    isDataFreshness(value.data_freshness)
  );
}

function isTierEntry(value: unknown): value is TierEntry {
  if (!isObject(value)) return false;
  return (
    typeof value.champion === 'string' &&
    typeof value.tier === 'string' &&
    TIER_GRADES.has(value.tier) &&
    typeof value.win_rate === 'number' &&
    typeof value.pick_rate === 'number' &&
    typeof value.ban_rate === 'number' &&
    typeof value.sample_size === 'number' &&
    typeof value.rank === 'number'
  );
}

export function isTierListPayload(value: unknown): value is TierListPayload {
  if (!isObject(value)) return false;
  return (
    typeof value.role === 'string' &&
    TIER_LIST_ROLES.has(value.role) &&
    typeof value.patch === 'string' &&
    typeof value.lang === 'string' &&
    typeof value.computed_at === 'string' &&
    typeof value.insufficient_sample === 'boolean' &&
    typeof value.sample_size === 'number' &&
    Array.isArray(value.tiers) &&
    value.tiers.every(isTierEntry)
  );
}

export function isKvCacheEnvelope<T>(
  value: unknown,
  isData: (data: unknown) => data is T,
): value is KvCacheEnvelope<T> {
  if (!isObject(value)) return false;
  if (typeof value.fetched_at !== 'number') return false;
  if (typeof value.ttl !== 'number') return false;
  return isData(value.data);
}
