// SYNC: manually mirrored from backend OpenAPI /api/v1/public/pricing
// Contract: dev-repository/design/api-contracts-wp10.md §1.1 (data-model-wp10.md §2.3)
// Any change to the backend DTO MUST be mirrored here.

export type Tier = 'free' | 'ad-free' | 'pro';

export interface PricingTier {
  id: Tier;
  name_key: string;
  price_eur: number;
  price_eur_original: number | null;
  currency: 'EUR';
  badge_key: string | null;
  features: string[];
  ads_included: boolean;
  cta_key: string;
  download_url: string;
  stripe_checkout_url: string | null;
  trial_days: number;
}

export interface PricingResponse {
  tiers: [PricingTier, PricingTier, PricingTier];
  updated_at: string;
}

function isPricingTier(value: unknown): value is PricingTier {
  if (!value || typeof value !== 'object') return false;
  const t = value as Record<string, unknown>;
  return (
    (t.id === 'free' || t.id === 'ad-free' || t.id === 'pro') &&
    typeof t.name_key === 'string' &&
    typeof t.price_eur === 'number' &&
    (t.price_eur_original === null || typeof t.price_eur_original === 'number') &&
    t.currency === 'EUR' &&
    (t.badge_key === null || typeof t.badge_key === 'string') &&
    Array.isArray(t.features) &&
    t.features.every((f) => typeof f === 'string') &&
    typeof t.ads_included === 'boolean' &&
    typeof t.cta_key === 'string' &&
    typeof t.download_url === 'string' &&
    (t.stripe_checkout_url === null || typeof t.stripe_checkout_url === 'string') &&
    typeof t.trial_days === 'number'
  );
}

export function isPricingResponse(value: unknown): value is PricingResponse {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  if (!Array.isArray(v.tiers) || v.tiers.length !== 3) return false;
  if (typeof v.updated_at !== 'string') return false;
  if (!v.tiers.every(isPricingTier)) return false;
  // Enforce canonical tier order Free, Ad-Free, Pro (contract §1.1).
  const tiers = v.tiers as PricingTier[];
  return (
    tiers[0].id === 'free' &&
    tiers[1].id === 'ad-free' &&
    tiers[2].id === 'pro'
  );
}
