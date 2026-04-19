import { ENV } from '../config/env';
import {
  type PricingResponse,
  type PricingTier,
  isPricingResponse,
} from '../types/pricing';

const TIMEOUT_MS = 5000;
const MAX_RETRIES = 2;
const RETRY_BACKOFF_MS = 500;

const FALLBACK_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: 'EUR',
    features: [],
    ads_included: true,
    trial_days: 0,
  },
  {
    id: 'ad_free',
    name: 'Ad-Free',
    price: 2.99,
    currency: 'EUR',
    features: [],
    ads_included: false,
    trial_days: 0,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 7.99,
    strikethrough_price: 12.99,
    currency: 'EUR',
    features: [],
    ads_included: false,
    trial_days: 7,
    highlighted: true,
  },
];

export const BUILD_TIME_FALLBACK: PricingResponse = {
  tiers: FALLBACK_TIERS,
  updated_at: '1970-01-01T00:00:00Z',
};

let lastKnown: PricingResponse = BUILD_TIME_FALLBACK;

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchPricing(): Promise<PricingResponse> {
  const url = `${ENV.apiBaseUrl}/api/v1/public/pricing`;
  let attempt = 0;
  let lastError: unknown = null;

  while (attempt <= MAX_RETRIES) {
    try {
      const res = await fetchWithTimeout(url, TIMEOUT_MS);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const json = await res.json();
      if (!isPricingResponse(json)) {
        throw new Error('Invalid pricing response shape');
      }
      lastKnown = json;
      return json;
    } catch (err) {
      lastError = err;
      attempt += 1;
      if (attempt > MAX_RETRIES) break;
      await new Promise((r) => setTimeout(r, RETRY_BACKOFF_MS * attempt));
    }
  }

  if (import.meta.env.DEV) {
    console.warn('[pricing-api] fetch failed, using last-known fallback', lastError);
  }
  return lastKnown;
}

export function getLastKnownPricing(): PricingResponse {
  return lastKnown;
}
