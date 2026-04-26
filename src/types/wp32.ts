// WP32 — AI Coach Persistente (Add-on Opt-In) shared FE types.
//
// SYNC: manually mirrored from backend Pydantic schemas. Sources:
//   - backend/app/schemas/coach.py (chat / drill / weekly-recap / quota)
//   - backend/app/schemas/subscription_addon.py (checkout / swap / deactivate /
//     list addons)
// Design references:
//   - dev-repository/wp-32/design/api-contracts.md sezioni 2-9
//   - dev-repository/wp-32/design/data-model.md sezione 8 (JSONB shapes)
//
// Any change to the backend DTO MUST be mirrored here. These types are
// consumed by `services/coach-api.ts` and `services/addon-api.ts` (F5-01 /
// F5-02) and by FE components in F5-04..F5-13.

// -------------------- Shared primitives --------------------

/** Add-on commercial code. Backend `addon_code` enum. */
export type AddonCode = 'ai_coach_light' | 'ai_coach_full';

/** Add-on lifecycle status. Mirrors Stripe subscription_item state + DB enum. */
export type AddonStatus = 'active' | 'canceled' | 'past_due' | 'paused';

/** Anthropic model tier exposed by `ai_usage_log.mode_context_json`. */
export type ModelTier = 'haiku' | 'sonnet';

/** Supported coach UI / prompt languages (REQ-NF-032-004). */
export type CoachLanguage = 'en' | 'it';

/** ISO 8601 week year (e.g. `2026-W17`). Backend regex `^\d{4}-W\d{2}$`. */
export type WeekYear = string;

/** ISO 8601 timestamp (UTC) emitted by all backend datetime fields. */
export type IsoTimestamp = string;

/** UUID string (any version). Backend emits gen_random_uuid() v4. */
export type UUID = string;

// -------------------- Quota --------------------

/**
 * Quota residua per surface coach. `*_remaining` = `*_max - usage_calendar_month`.
 * `consolidation_*` valorizzato solo per `ai_coach_full`; per light tier il BE
 * emette `consolidation_remaining: null` e `consolidation_max: 0`
 * (api-contracts §9.3 light tier).
 */
export interface RemainingQuota {
  chat_remaining: number;
  chat_max: number;
  drill_remaining: number;
  drill_max: number;
  recap_remaining: number;
  recap_max: number;
  consolidation_remaining: number | null;
  consolidation_max: number;
}

/** Risposta GET /api/v1/coach/quota. */
export interface QuotaResponse {
  addon_code: AddonCode;
  current_quota: RemainingQuota;
  reset_at: IsoTimestamp;
}

/**
 * Suggerimento upgrade emesso dal BE quando l'utente light tier raggiunge
 * il cap o tenta una surface full-only (es. extended drill).
 */
export interface UpgradeHint {
  addon_code: AddonCode;
  chat_max?: number;
  drill_max?: number;
  recap_max?: number;
}

// -------------------- Chat --------------------

/**
 * Override opzionale del context di chat. Default: BE legge `playstyle_tags`
 * da `coach_persona_memory` e ultimi N match da `match_v5_timeline` (WP31).
 */
export interface ChatContext {
  playstyle_tags?: Record<string, number> | null;
  recent_match_ids?: string[] | null;
}

export interface ChatRequest {
  /** Messaggio utente. Pydantic validator: 1..2000 char. */
  message: string;
  context?: ChatContext;
}

export interface ChatResponse {
  response: string;
  model_used: string;
  model_tier: ModelTier;
  language: CoachLanguage;
  ai_usage_log_id: UUID;
  current_quota: Pick<RemainingQuota, 'chat_remaining' | 'chat_max'> & {
    reset_at: IsoTimestamp;
  };
}

/**
 * Payload "200 quota exceeded" — non un errore HTTP ma un branch del response
 * di chat/drill/recap (api-contracts §2.4). FE deve discriminare via
 * `quota_exceeded === true`.
 */
export interface QuotaExceededResponse {
  quota_exceeded: true;
  addon_code: AddonCode;
  current_quota: Pick<RemainingQuota, 'chat_remaining' | 'chat_max'> & {
    reset_at: IsoTimestamp;
  };
  upgrade_hint?: UpgradeHint;
}

// -------------------- Drill --------------------

/**
 * Drill singolo. `steps` popolato solo per full tier (extended drills);
 * light tier emette `steps: null`.
 */
export interface Drill {
  drill_id_str: string;
  title: string;
  description: string;
  duration_min_int: number;
  weakness_tag: string;
  steps: string[] | null;
}

export interface DrillRequest {
  weakness_focus?: string;
}

export interface DrillResponse {
  drills: Drill[];
  tier: 'light' | 'full';
  is_precached: boolean;
  ai_usage_log_id: UUID | null;
  current_quota: Pick<RemainingQuota, 'drill_remaining' | 'drill_max'> & {
    reset_at: IsoTimestamp;
  };
}

// -------------------- Weekly recap --------------------

/**
 * Sub-shape per `extended_trend_json` (data-model §8.4). Solo full tier;
 * light tier emette `extended_trend: null`.
 */
export interface MonthlyTrend {
  winrate_4w: number;
  kda_avg_4w: number;
  csing_trend: 'improving' | 'stable' | 'declining';
  matches_4w: number;
}

export interface HistoricalComparison {
  vs_last_month_winrate_delta: number;
  vs_last_month_kda_delta: number;
  personal_best_kda: number;
}

export interface ExtendedTrend {
  monthly_trend: MonthlyTrend;
  historical_comparison: HistoricalComparison;
}

export interface Recap {
  week_year: WeekYear;
  summary: string;
  key_insights: string[];
  language: CoachLanguage;
  generated_at: IsoTimestamp;
}

/**
 * Risposta GET /api/v1/coach/weekly-recap. Quando il recap non e' ancora
 * stato generato (api-contracts §4.5), il BE emette `recap: null` +
 * `next_recap_at` valorizzato.
 */
export interface RecapResponse {
  recap: Recap | null;
  extended_trend: ExtendedTrend | null;
  tier: 'light' | 'full';
  next_recap_at?: IsoTimestamp;
  detail?: string;
}

// -------------------- Add-on lifecycle --------------------

/**
 * Riga `subscription_addon` come esposta da GET /api/v1/subscription/addons.
 * `metadata` riflette JSONB shape (data-model §8.3). Tutti i field sono opt
 * lato FE — il BE puo' arricchire con campi diagnostici futuri senza breaking.
 */
export interface AddonStatusItem {
  addon_code: AddonCode;
  status: AddonStatus;
  started_at: IsoTimestamp;
  current_period_end: IsoTimestamp;
  ended_at: IsoTimestamp | null;
  stripe_price_id: string;
  metadata: Record<string, unknown>;
}

export interface Pagination {
  limit: number;
  offset: number;
  total: number;
}

export interface AddonListResponse {
  addons: AddonStatusItem[];
  pagination: Pagination;
}

/** Alias semantico esposto al consumer FE. */
export type Addon = AddonStatusItem;

// -------------------- Checkout / swap / deactivate --------------------

export interface CheckoutRequest {
  addon_code: AddonCode;
  success_url: string;
  cancel_url: string;
}

export interface CheckoutResponse {
  checkout_url: string;
}

export interface SwapTierRequest {
  to_addon_code: AddonCode;
}

export interface SwapTierResponse {
  from_addon_code: AddonCode;
  to_addon_code: AddonCode;
  /** Importo Stripe proration in EUR (positivo = addebito, negativo = credito). */
  stripe_proration_amount_eur: number;
  new_period_end: IsoTimestamp;
  swap_at: IsoTimestamp;
}

export interface DeactivateRequest {
  /** Default `true` (UX-OP-309): redirect a Stripe Customer Portal. */
  redirect_to_portal?: boolean;
}

/**
 * Discriminated union sul flow di deactivate:
 * - portal redirect (default): payload con `portal_url`
 * - direct cancel (legacy): payload con `addon_code` + `status`
 */
export type DeactivateResponse =
  | {
      portal_url: string;
      message: string;
      current_period_end: IsoTimestamp;
    }
  | {
      addon_code: AddonCode;
      status: AddonStatus;
      ended_at: IsoTimestamp;
      message: string;
    };

// -------------------- Errors --------------------

/**
 * Shape standard per tutti gli errori 4xx/5xx coach (api-contracts §2.5/3.5/...).
 * I detail textual sono esposti dal BE come string libero — FE deve
 * discriminare tramite HTTP status, non parsare il detail.
 */
export interface ErrorResponse {
  detail: string;
  addon_code_required?: AddonCode;
  upgrade_url?: string;
  current_addon_code?: AddonCode;
}
