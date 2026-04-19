export interface PricingTier {
  id: 'free' | 'ad_free' | 'pro';
  name: string;
  price: number;
  currency: 'EUR';
  features: string[];
  ads_included: boolean;
  trial_days: number;
  highlighted?: boolean;
  strikethrough_price?: number;
}

export interface PricingResponse {
  tiers: PricingTier[];
  updated_at: string;
}

export function isPricingResponse(value: unknown): value is PricingResponse {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  if (!Array.isArray(v.tiers)) return false;
  if (typeof v.updated_at !== 'string') return false;
  return v.tiers.every((t) => {
    if (!t || typeof t !== 'object') return false;
    const tier = t as Record<string, unknown>;
    return (
      (tier.id === 'free' || tier.id === 'ad_free' || tier.id === 'pro') &&
      typeof tier.name === 'string' &&
      typeof tier.price === 'number' &&
      tier.currency === 'EUR' &&
      Array.isArray(tier.features) &&
      typeof tier.ads_included === 'boolean' &&
      typeof tier.trial_days === 'number'
    );
  });
}
