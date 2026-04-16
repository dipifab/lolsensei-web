// === Dashboard ===

export interface DashboardPeriod {
  start_date: string;
  end_date: string;
}

export interface DashboardRevenue {
  mrr_cents: number;
  projected_monthly_cents: number;
  active_subscriptions: number;
}

export interface DashboardUsers {
  active: number;
  trialing: number;
  past_due: number;
  cancelled: number;
  expired: number;
  no_subscription: number;
}

export interface DashboardConversions {
  trial_to_paid_rate: number;
  trial_started: number;
  trial_converted: number;
  churn_rate: number;
  churned: number;
  active_at_period_start: number;
}

export interface DashboardAICostByModel {
  model: string;
  cost_usd: string;
  requests: number;
}

export interface DashboardAICosts {
  total_cost_usd: string;
  by_model: DashboardAICostByModel[];
}

export interface DashboardResponse {
  period: DashboardPeriod;
  revenue: DashboardRevenue;
  users: DashboardUsers;
  conversions: DashboardConversions;
  ai_costs: DashboardAICosts;
}

// === Plans ===

export interface PlanResponse {
  id: string;
  name: string;
  slug: string;
  credits_daily: number | null;
  credits_weekly: number | null;
  credits_monthly: number | null;
  price_base_cents: number;
  stripe_price_id: string;
  ai_model_slug: string;
  trial_days: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PlanCreateRequest {
  name: string;
  slug: string;
  credits_daily: number | null;
  credits_weekly: number | null;
  credits_monthly: number | null;
  price_base_cents: number;
  stripe_price_id: string;
  ai_model_slug: string;
  trial_days: number;
  is_active: boolean;
}

export interface PlanUpdateRequest {
  name?: string;
  slug?: string;
  credits_daily?: number | null;
  credits_weekly?: number | null;
  credits_monthly?: number | null;
  price_base_cents?: number;
  stripe_price_id?: string;
  ai_model_slug?: string;
  trial_days?: number;
  is_active?: boolean;
}

// === Promotions ===

export type EffectiveStatus = 'scheduled' | 'active' | 'expired' | 'terminated';

export interface PromotionResponse {
  id: string;
  name: string;
  plan_id: string;
  plan_name: string;
  promo_price_cents: number;
  starts_at: string;
  ends_at: string | null;
  is_active: boolean;
  stripe_coupon_id: string;
  effective_status: EffectiveStatus;
  created_at: string;
}

export interface PromotionCreateRequest {
  name: string;
  plan_id: string;
  promo_price_cents: number;
  starts_at: string;
  ends_at: string | null;
}

export interface PromotionUpdateRequest {
  name?: string;
  ends_at?: string | null;
  is_active?: boolean;
}

// === Trial Config ===

export interface TrialConfigResponse {
  default_trial_days: number;
  default_trial_plan_id: string;
  default_trial_plan_name: string;
}

export interface TrialConfigUpdateRequest {
  default_trial_days?: number;
  default_trial_plan_id?: string;
}

// === AI Providers & Models ===

export interface AIModelResponse {
  model_id: string;
  slug: string;
  display_name: string;
  input_rate_per_million: string;
  output_rate_per_million: string;
  is_active: boolean;
}

export interface AIProviderResponse {
  provider_id: string;
  name: string;
  is_active: boolean;
  api_key_masked: string;
  models: AIModelResponse[];
}

export interface AIProviderUpdateRequest {
  api_key?: string;
  is_active?: boolean;
}

export interface AIModelUpdateRequest {
  display_name?: string;
  input_rate_per_million?: string;
  output_rate_per_million?: string;
  is_active?: boolean;
}

// === Admin Users ===

export interface AdminUserResponse {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  revoked_at: string | null;
}
