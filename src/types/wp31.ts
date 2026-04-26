// SYNC: manually mirrored from backend Pydantic schemas (WP31, F0-07).
// Contract sources:
//   - backend/app/schemas/match_v5.py (BE response /api/v1/premium/match-history,
//     /api/v1/premium/match/{id}, POST /api/match/ingest)
//   - backend/app/schemas/post_game_review.py (BE response
//     /api/v1/premium/match/{id}/review, /api/v1/premium/quota/post-game-review)
// Design references:
//   - dev-repository/wp-31/design/data-model.md sezioni 2, 5
//   - dev-repository/wp-31/design/api-contracts.md sezioni 3
//
// Any change to the backend DTO MUST be mirrored here. These types are consumed
// by `services/match-api.ts` (F4-01) and the FE components in F4-04..F4-12.

// -------------------- Shared primitives --------------------

/**
 * Riot Match-V5 identifier. Format: `{regionPlatformId}_{gameId}` — e.g.
 * `EUW1_1234567890`. Backend enforces the regex `^[A-Z0-9]+_\d+$`.
 */
export type MatchId = string;

/**
 * Riot region platform code. Example values: `EUW1`, `EUNE1`, `NA1`, `KR`.
 * Backend allows the conservative regex `^[A-Z]+\d?$`.
 */
export type Region = string;

/** Outcome of the user's team for the match. */
export type MatchOutcome = 'win' | 'loss';

/**
 * Riot queue type relevant for WP31 (REQ-F-031-007). Values mirror the
 * normalized field emitted by `MatchHistoryService.list_matches` — kept narrow
 * because the API only returns ranked Solo/Duo, Flex, and Clash.
 */
export type MatchQueue = 'ranked_solo' | 'ranked_flex' | 'clash';

/**
 * Riot Match-V5 `individualPosition` projected onto the 5 logical roles. The
 * empty string mirrors Riot's behaviour when the position cannot be inferred
 * (e.g. very early disconnect / remake).
 */
export type MatchRole = 'TOP' | 'JUNGLE' | 'MIDDLE' | 'BOTTOM' | 'UTILITY' | '';

// -------------------- Highlight discriminated union --------------------

/**
 * 8 highlight categories produced by `ReplayHighlightExtractor` (OP-006).
 * Backend persists them to `post_game_review.highlights` JSONB. Order in this
 * union mirrors the canonical ordering used in the design doc.
 */
export type HighlightType =
  | 'first_blood'
  | 'dragon'
  | 'baron'
  | 'herald'
  | 'gold_spike'
  | 'deathball'
  | 'late_game_pick'
  | 'objective_steal';

/** Drake sub-type carried in `HighlightDragonPayload.monster_sub_type`. */
export type DragonSubType =
  | 'infernal'
  | 'mountain'
  | 'ocean'
  | 'cloud'
  | 'soul'
  | 'elder';

export interface HighlightFirstBloodPayload {
  killer_id: number;
  victim_id: number;
}

export interface HighlightDragonPayload {
  monster_sub_type: DragonSubType;
  killer_id: number;
}

export interface HighlightBaronPayload {
  killer_id: number;
}

export interface HighlightHeraldPayload {
  killer_id: number;
}

export interface HighlightGoldSpikePayload {
  /** Gold delta vs enemy team at the spike (positive = user's team ahead). */
  delta_gold: number;
  /** Window start, ms from game start (rounded to the minute granularity). */
  window_start_ms: number;
  /** Window end, ms from game start. */
  window_end_ms: number;
}

export interface HighlightDeathballPayload {
  kill_count: number;
  team_id: number;
  duration_ms: number;
}

export interface HighlightLateGamePickPayload {
  killer_id: number;
  victim_id: number;
  /**
   * Remaining seconds of the victim's Teleport (or summoner cooldown that
   * delayed their re-entry into the fight). Used to label the pick "high
   * tempo cost".
   */
  victim_tp_remaining_s: number;
}

export interface HighlightObjectiveStealPayload {
  /** Free-form: 'baron' | 'dragon_infernal' | 'rift_herald' | 'elder'. */
  monster_type: string;
  killer_id: number;
  stolen_from_team_id: number;
}

/**
 * Discriminated union over `type`. Consumers MUST narrow before reading
 * `payload` — TypeScript will refuse access otherwise.
 */
export type Highlight =
  | { type: 'first_blood'; timestamp_ms: number; payload: HighlightFirstBloodPayload }
  | { type: 'dragon'; timestamp_ms: number; payload: HighlightDragonPayload }
  | { type: 'baron'; timestamp_ms: number; payload: HighlightBaronPayload }
  | { type: 'herald'; timestamp_ms: number; payload: HighlightHeraldPayload }
  | { type: 'gold_spike'; timestamp_ms: number; payload: HighlightGoldSpikePayload }
  | { type: 'deathball'; timestamp_ms: number; payload: HighlightDeathballPayload }
  | { type: 'late_game_pick'; timestamp_ms: number; payload: HighlightLateGamePickPayload }
  | { type: 'objective_steal'; timestamp_ms: number; payload: HighlightObjectiveStealPayload };

// -------------------- Match summary (used in card + detail) --------------------

/**
 * Aggregated stats projected from Match-V5 `participantFrames` for the user's
 * own participant. Same shape returned by both `MatchHistoryItem` (list) and
 * `MatchDetail` (detail) — the detail variant simply has more siblings.
 */
export interface MatchSummary {
  champion: string;
  role: MatchRole;
  outcome: MatchOutcome;
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
  /** CS per minute, rounded to 1 decimal server-side. */
  cs_per_min: number;
  gold_earned: number;
  vision_score: number;
  duration_seconds: number;
}

// -------------------- Match history list --------------------

/**
 * Single entry of `GET /api/v1/premium/match-history`. The list is bounded
 * to the user's last 30 ranked matches (REQ-F-031-007). `has_review === true`
 * means a `post_game_review` row exists; the FE uses this to swap the CTA
 * label between "View" and "Generate".
 */
export interface MatchHistoryItem {
  match_id: MatchId;
  region: Region;
  queue: MatchQueue;
  /** ISO 8601 UTC timestamp of `ingested_at` (proxy for played_at, OP-009). */
  played_at: string;
  summary: MatchSummary;
  has_review: boolean;
}

/**
 * Cursor-paginated response for the match-history list. `next_cursor === null`
 * means the list is exhausted — see backend `MatchHistoryService.list_matches`.
 */
export interface MatchHistoryResponse {
  items: MatchHistoryItem[];
  next_cursor: string | null;
}

// -------------------- Match detail --------------------

/**
 * Response for `GET /api/v1/premium/match/{match_id}`. When the timeline is in
 * cold storage (R2, > 90gg), backend hydrates it lazily — the FE may observe a
 * higher latency for the first request after archival.
 */
export interface MatchDetail {
  match_id: MatchId;
  region: Region;
  queue: MatchQueue;
  played_at: string;
  summary: MatchSummary;
  /**
   * Raw Match-V5 timeline. Shape mirrors Riot's `MatchTimelineDto` exactly —
   * we don't re-type it here to avoid drift with Riot upstream changes.
   */
  timeline: Record<string, unknown>;
  /** Storage tier the timeline was loaded from at request time. */
  storage_tier: 'hot' | 'cold';
  /** `null` until the user generates a review (OP-008). */
  review: ReviewResponse | null;
}

// -------------------- Ingest --------------------

/**
 * Response for `POST /api/match/ingest`. Idempotent: re-enqueueing the same
 * `match_id` returns `enqueued = false` without error (OP-018).
 */
export interface IngestResponse {
  match_id: MatchId;
  enqueued: boolean;
  /** Existing `ingest_job.status` after the call. */
  status: IngestJobStatus;
}

/** Mirrors backend `IngestJobStatus` enum (data-model §5.3). */
export type IngestJobStatus = 'queued' | 'in_progress' | 'done' | 'failed' | 'dead';

// -------------------- Review --------------------

/** Mirrors backend `Literal["claude-sonnet", "claude-haiku"]`. */
export type ReviewModel = 'claude-sonnet' | 'claude-haiku';

/** Mirrors backend `Literal["standard", "short_match"]` (OP-002). */
export type ReviewSelectionReason = 'standard' | 'short_match';

/**
 * Response for both `POST /api/v1/premium/match/{id}/review` (generate) and
 * `GET /api/v1/premium/match/{id}/review` (read). Idempotent on POST: a
 * second concurrent call returns the cached row (data-model §4.2).
 *
 * `summary_en` / `summary_it` are populated together by the eager EN+IT
 * gather() at generation time (OP-008/OP-017). They become `null` only in
 * the partial-failure path, which the FE renders as "Try again".
 */
export interface ReviewResponse {
  match_id: MatchId;
  highlights: Highlight[];
  summary_en: string | null;
  summary_it: string | null;
  model_used: ReviewModel;
  selection_reason: ReviewSelectionReason;
  /** ISO 8601 UTC. */
  generated_at: string;
}

// -------------------- Quota --------------------

/**
 * Response for `GET /api/v1/premium/quota/post-game-review`. The FE renders
 * `<DailyQuotaBadge>` from this; rolling 24h success-only window matches the
 * backend cap (`POST_GAME_REVIEW_DAILY_CAP_PREMIUM`, F0-06).
 */
export interface QuotaResponse {
  used: number;
  limit: number;
  /** ISO 8601 UTC timestamp when the rolling window unblocks the next slot. */
  reset_at: string;
}

// -------------------- Type guards --------------------

const HIGHLIGHT_TYPES: ReadonlySet<string> = new Set([
  'first_blood',
  'dragon',
  'baron',
  'herald',
  'gold_spike',
  'deathball',
  'late_game_pick',
  'objective_steal',
]);

const DRAGON_SUB_TYPES: ReadonlySet<string> = new Set([
  'infernal',
  'mountain',
  'ocean',
  'cloud',
  'soul',
  'elder',
]);

const INGEST_STATUSES: ReadonlySet<string> = new Set([
  'queued',
  'in_progress',
  'done',
  'failed',
  'dead',
]);

const MATCH_QUEUES: ReadonlySet<string> = new Set([
  'ranked_solo',
  'ranked_flex',
  'clash',
]);

const MATCH_ROLES: ReadonlySet<string> = new Set([
  'TOP',
  'JUNGLE',
  'MIDDLE',
  'BOTTOM',
  'UTILITY',
  '',
]);

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isHighlightPayload(type: string, payload: unknown): boolean {
  if (!isObject(payload)) return false;
  switch (type) {
    case 'first_blood':
      return (
        typeof payload.killer_id === 'number' &&
        typeof payload.victim_id === 'number'
      );
    case 'dragon':
      return (
        typeof payload.monster_sub_type === 'string' &&
        DRAGON_SUB_TYPES.has(payload.monster_sub_type) &&
        typeof payload.killer_id === 'number'
      );
    case 'baron':
    case 'herald':
      return typeof payload.killer_id === 'number';
    case 'gold_spike':
      return (
        typeof payload.delta_gold === 'number' &&
        typeof payload.window_start_ms === 'number' &&
        typeof payload.window_end_ms === 'number'
      );
    case 'deathball':
      return (
        typeof payload.kill_count === 'number' &&
        typeof payload.team_id === 'number' &&
        typeof payload.duration_ms === 'number'
      );
    case 'late_game_pick':
      return (
        typeof payload.killer_id === 'number' &&
        typeof payload.victim_id === 'number' &&
        typeof payload.victim_tp_remaining_s === 'number'
      );
    case 'objective_steal':
      return (
        typeof payload.monster_type === 'string' &&
        typeof payload.killer_id === 'number' &&
        typeof payload.stolen_from_team_id === 'number'
      );
    default:
      return false;
  }
}

export function isHighlight(value: unknown): value is Highlight {
  if (!isObject(value)) return false;
  if (typeof value.type !== 'string' || !HIGHLIGHT_TYPES.has(value.type)) {
    return false;
  }
  if (typeof value.timestamp_ms !== 'number') return false;
  return isHighlightPayload(value.type, value.payload);
}

function isMatchSummary(value: unknown): value is MatchSummary {
  if (!isObject(value)) return false;
  return (
    typeof value.champion === 'string' &&
    typeof value.role === 'string' &&
    MATCH_ROLES.has(value.role) &&
    (value.outcome === 'win' || value.outcome === 'loss') &&
    typeof value.kills === 'number' &&
    typeof value.deaths === 'number' &&
    typeof value.assists === 'number' &&
    typeof value.cs === 'number' &&
    typeof value.cs_per_min === 'number' &&
    typeof value.gold_earned === 'number' &&
    typeof value.vision_score === 'number' &&
    typeof value.duration_seconds === 'number'
  );
}

export function isMatchHistoryItem(value: unknown): value is MatchHistoryItem {
  if (!isObject(value)) return false;
  return (
    typeof value.match_id === 'string' &&
    typeof value.region === 'string' &&
    typeof value.queue === 'string' &&
    MATCH_QUEUES.has(value.queue) &&
    typeof value.played_at === 'string' &&
    isMatchSummary(value.summary) &&
    typeof value.has_review === 'boolean'
  );
}

export function isMatchHistoryResponse(value: unknown): value is MatchHistoryResponse {
  if (!isObject(value)) return false;
  if (!Array.isArray(value.items)) return false;
  if (!value.items.every(isMatchHistoryItem)) return false;
  return value.next_cursor === null || typeof value.next_cursor === 'string';
}

export function isReviewResponse(value: unknown): value is ReviewResponse {
  if (!isObject(value)) return false;
  if (!Array.isArray(value.highlights)) return false;
  if (!value.highlights.every(isHighlight)) return false;
  return (
    typeof value.match_id === 'string' &&
    (value.summary_en === null || typeof value.summary_en === 'string') &&
    (value.summary_it === null || typeof value.summary_it === 'string') &&
    (value.model_used === 'claude-sonnet' || value.model_used === 'claude-haiku') &&
    (value.selection_reason === 'standard' || value.selection_reason === 'short_match') &&
    typeof value.generated_at === 'string'
  );
}

export function isMatchDetail(value: unknown): value is MatchDetail {
  if (!isObject(value)) return false;
  return (
    typeof value.match_id === 'string' &&
    typeof value.region === 'string' &&
    typeof value.queue === 'string' &&
    MATCH_QUEUES.has(value.queue) &&
    typeof value.played_at === 'string' &&
    isMatchSummary(value.summary) &&
    isObject(value.timeline) &&
    (value.storage_tier === 'hot' || value.storage_tier === 'cold') &&
    (value.review === null || isReviewResponse(value.review))
  );
}

export function isIngestResponse(value: unknown): value is IngestResponse {
  if (!isObject(value)) return false;
  return (
    typeof value.match_id === 'string' &&
    typeof value.enqueued === 'boolean' &&
    typeof value.status === 'string' &&
    INGEST_STATUSES.has(value.status)
  );
}

export function isQuotaResponse(value: unknown): value is QuotaResponse {
  if (!isObject(value)) return false;
  return (
    typeof value.used === 'number' &&
    typeof value.limit === 'number' &&
    typeof value.reset_at === 'string'
  );
}
