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

// === WP15: User Management (app users) ===

export type SubscriptionStatusFilter =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'cancelled'
  | 'suspended'
  | 'free';

export type UserSortField =
  | 'created_at'
  | '-created_at'
  | 'email'
  | '-email'
  | 'revenue'
  | '-revenue';

export interface CreditOverride {
  daily: number | null;
  weekly: number | null;
  monthly: number | null;
}

export interface UserListItem {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  plan_id: string | null;
  plan_name: string | null;
  subscription_status: string;
  is_suspended: boolean;
  revenue_lifetime_cents: number;
  ai_cost_30d_usd: string;
  last_active_at: string | null;
}

export interface KpiSummary {
  total_users: number;
  active_users: number;
  suspended_users: number;
  avg_revenue_per_user_cents: number;
  avg_ai_cost_per_user_30d_usd: string;
}

export interface UserListResponse {
  items: UserListItem[];
  total: number;
  page: number;
  page_size: number;
  kpi_summary: KpiSummary;
}

export interface UserDetailResponse {
  id: string;
  email: string;
  display_name: string | null;
  google_id: string | null;
  riot_puuid: string | null;
  region: string | null;
  created_at: string;
  plan_id: string | null;
  plan_name: string | null;
  subscription_status: string;
  subscription_started_at: string | null;
  trial_started_at: string | null;
  trial_converted_at: string | null;
  last_renewed_at: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  is_suspended: boolean;
  suspended_at: string | null;
  suspended_reason: string | null;
  credit_override: CreditOverride | null;
}

export interface SuspendResponse {
  user_id: string;
  is_suspended: boolean;
  suspended_at: string | null;
  action: 'suspend' | 'unsuspend';
  performed_by_admin_id: string;
  already_in_state: boolean;
}

export interface LimitResponse {
  user_id: string;
  credit_override: CreditOverride | null;
  applied_at: string | null;
  removed_at: string | null;
}

export type InvoiceStatus = 'paid' | 'open' | 'void' | 'uncollectible';

export interface InvoiceItem {
  stripe_invoice_id: string;
  amount_cents: number;
  amount_paid_cents: number;
  currency: string;
  status: InvoiceStatus;
  invoice_date: string;
  paid_at: string | null;
  stripe_invoice_url: string | null;
  period_start: string | null;
  period_end: string | null;
}

export interface MonthRevenue {
  month: string;
  revenue_cents: number;
  invoice_count: number;
}

export interface BillingResponse {
  user_id: string;
  currency: string;
  revenue_lifetime_cents: number;
  total_invoices: number;
  page: number;
  page_size: number;
  invoices: InvoiceItem[];
  by_month: MonthRevenue[];
}

export interface ModelUsage {
  model_id: string | null;
  model_name: string;
  provider_name: string;
  requests: number;
  cost_usd: string;
  input_tokens: number;
  output_tokens: number;
}

export interface AIUsagePeriod {
  requested_from: string;
  requested_to: string;
  effective_from: string;
  effective_to: string;
}

export interface AIUsageResponse {
  user_id: string;
  period: AIUsagePeriod;
  truncated_by_retention: boolean;
  retention_warning: string | null;
  total_cost_usd: string;
  total_requests: number;
  total_input_tokens: number;
  total_output_tokens: number;
  avg_latency_ms: number;
  by_model: ModelUsage[];
}

export type TimelineEventType =
  | 'registration'
  | 'trial_started'
  | 'trial_converted'
  | 'subscription_renewed'
  | 'subscription_cancelled'
  | 'user_suspended'
  | 'user_unsuspended'
  | 'credit_override_applied'
  | 'credit_override_removed';

export interface RegistrationEvent {
  type: 'registration';
  timestamp: string;
  performed_by: string;
  payload: { google_id?: string; email?: string };
}

export interface TrialStartedEvent {
  type: 'trial_started';
  timestamp: string;
  performed_by: string;
  payload: { plan_id?: string; plan_name?: string; trial_ends_at?: string };
}

export interface TrialConvertedEvent {
  type: 'trial_converted';
  timestamp: string;
  performed_by: string;
  payload: { plan_id?: string; plan_name?: string };
}

export interface SubscriptionRenewedEvent {
  type: 'subscription_renewed';
  timestamp: string;
  performed_by: string;
  payload: { plan_id?: string; amount_cents?: number; currency?: string };
}

export interface SubscriptionCancelledEvent {
  type: 'subscription_cancelled';
  timestamp: string;
  performed_by: string;
  payload: { expires_at?: string; cancel_reason?: string };
}

export interface UserSuspendedEvent {
  type: 'user_suspended';
  timestamp: string;
  performed_by: string;
  payload: { reason?: string; admin_name?: string };
}

export interface UserUnsuspendedEvent {
  type: 'user_unsuspended';
  timestamp: string;
  performed_by: string;
  payload: { reason?: string; admin_name?: string };
}

export interface CreditOverrideAppliedEvent {
  type: 'credit_override_applied';
  timestamp: string;
  performed_by: string;
  payload: { override?: CreditOverride; reason?: string; admin_name?: string };
}

export interface CreditOverrideRemovedEvent {
  type: 'credit_override_removed';
  timestamp: string;
  performed_by: string;
  payload: { reason?: string; admin_name?: string };
}

export type TimelineEvent =
  | RegistrationEvent
  | TrialStartedEvent
  | TrialConvertedEvent
  | SubscriptionRenewedEvent
  | SubscriptionCancelledEvent
  | UserSuspendedEvent
  | UserUnsuspendedEvent
  | CreditOverrideAppliedEvent
  | CreditOverrideRemovedEvent;

export interface TimelineResponse {
  user_id: string;
  total: number;
  page: number;
  page_size: number;
  events: TimelineEvent[];
}
