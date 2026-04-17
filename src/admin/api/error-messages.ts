const errorMessages: Record<string, string> = {
  // Auth
  ADMIN_KEY_MISSING: 'Admin key missing. Please sign in.',
  ADMIN_KEY_INVALID: 'Admin key is invalid.',
  ADMIN_REVOKED: 'Admin account has been revoked.',

  // Plans
  PLAN_NOT_FOUND: 'Plan not found.',
  PLAN_SLUG_CONFLICT: 'Slug already used by another plan.',
  PRICE_CHANGE_BLOCKED: 'Price cannot be changed: active promotions exist.',
  LAST_ACTIVE_PLAN: 'Cannot deactivate the last active plan.',
  INVALID_STRIPE_PRICE: 'Invalid Stripe Price ID.',

  // Promotions
  PROMOTION_NOT_FOUND: 'Promotion not found.',
  INVALID_PROMO_PRICE:
    'The promotional price must be lower than the plan base price.',
  ACTIVE_PROMO_EXISTS:
    'An active promotion already exists for this plan.',
  PROMO_NAME_CONFLICT: 'Promotion name already in use.',
  IMMUTABLE_FIELD: 'This field cannot be modified.',
  STRIPE_COUPON_FAILED: 'Failed to create the Stripe coupon.',

  // Trial
  INVALID_TRIAL_DAYS: 'Trial days must be between 1 and 30.',

  // AI Providers
  PROVIDER_NOT_FOUND: 'Provider not found.',
  MODEL_NOT_FOUND: 'Model not found.',
  LAST_ACTIVE_PROVIDER: 'Cannot deactivate the last active provider.',
  PROVIDER_HAS_ACTIVE_PLANS:
    'The provider has active plans that depend on its models.',
  LAST_ACTIVE_MODEL:
    'Cannot deactivate the last active model of this provider.',

  // WP15 — User Management
  USER_NOT_FOUND: 'User not found or deleted.',
  USER_SUSPENDED: 'User is suspended.',
  OVERRIDE_EMPTY: 'Provide at least one of daily/weekly/monthly.',
  NEGATIVE_CREDITS: 'Credit values must be >= 0.',
  REASON_REQUIRED: 'A reason is required (min 5 characters).',
  REASON_TOO_SHORT: 'The reason must be at least 5 characters.',
  REASON_TOO_LONG: 'The reason exceeds 500 characters.',
  PAGE_SIZE_EXCEEDED: 'Maximum allowed page size: 100.',
  RATE_LIMITED: 'Too many requests. Try again shortly.',

  // Generic
  STRIPE_UNAVAILABLE: 'Stripe service unavailable. Try again later.',
  INVALID_DATE_RANGE: 'Invalid date range.',
  NETWORK_ERROR: 'Network error. Check your connection.',
};

export function getErrorMessage(code: string): string {
  return errorMessages[code] ?? `Error: ${code}`;
}
