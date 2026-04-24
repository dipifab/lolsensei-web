import { isServer } from 'solid-js/web';
import { ENV } from '../config/env';
import {
  type PricingResponse,
  type PricingTier,
  isPricingResponse,
} from '../types/pricing';

// Contract: dev-repository/design/api-contracts-wp10.md §3
// - Timeout: 4000ms via AbortController (combined with caller signal)
// - Retry: none — fallback to last-known (or BUILD_TIME_FALLBACK on first fail)
const TIMEOUT_MS = 4000;

const DOWNLOAD_URL = 'https://www.lolsensei.com/downloads/LoLSensei-Setup.exe';

// Canonical translation keys mirror the BE WP11 contract (api-contracts-wp10.md §1.1).
// Order and membership of `features[]` per tier MUST match the JSON sample in §1.1
// so that FE render is byte-identical between fallback and live response.
const FALLBACK_TIERS: [PricingTier, PricingTier, PricingTier] = [
  {
    id: 'free',
    name_key: 'pricing.tier.free.name',
    price_eur: 0,
    price_eur_original: null,
    currency: 'EUR',
    badge_key: null,
    features: [
      'feature.game_detection',
      'feature.player_stats',
      'feature.multi_region',
      'feature.overlay_shell',
    ],
    ads_included: true,
    cta_key: 'pricing.tier.free.cta',
    download_url: DOWNLOAD_URL,
    stripe_checkout_url: null,
    trial_days: 0,
  },
  {
    id: 'ad-free',
    name_key: 'pricing.tier.adfree.name',
    price_eur: 2.99,
    price_eur_original: null,
    currency: 'EUR',
    badge_key: null,
    features: [
      'feature.game_detection',
      'feature.player_stats',
      'feature.multi_region',
      'feature.no_ads',
    ],
    ads_included: false,
    cta_key: 'pricing.tier.adfree.cta',
    download_url: DOWNLOAD_URL,
    stripe_checkout_url: null,
    trial_days: 0,
  },
  {
    id: 'pro',
    name_key: 'pricing.tier.pro.name',
    price_eur: 7.99,
    price_eur_original: 12.99,
    currency: 'EUR',
    badge_key: 'pricing.tier.pro.badge_launch',
    features: [
      'feature.game_detection',
      'feature.player_stats',
      'feature.multi_region',
      'feature.no_ads',
      'feature.champion_select_advisory',
      'feature.item_build_advisory',
      'feature.game_start_analysis',
    ],
    ads_included: false,
    cta_key: 'pricing.tier.pro.cta',
    download_url: DOWNLOAD_URL,
    stripe_checkout_url: null,
    trial_days: 3,
  },
];

export const BUILD_TIME_FALLBACK: PricingResponse = {
  tiers: FALLBACK_TIERS,
  updated_at: '1970-01-01T00:00:00Z',
};

// In-memory last-known pricing. Private on purpose: consumers must go through
// `fetchPricing()` so the signal wiring and fallback semantics stay consistent.
let lastKnown: PricingResponse = BUILD_TIME_FALLBACK;

/**
 * Fetch pricing from the backend, enforcing a 4000ms timeout and propagating
 * an optional caller-provided AbortSignal (e.g. component lifecycle).
 *
 * No retries. On any failure (timeout, network, HTTP error, schema mismatch)
 * returns the last-known pricing (seeded from BUILD_TIME_FALLBACK).
 */
export async function fetchPricing(signal?: AbortSignal): Promise<PricingResponse> {
  // SSR / prerender guard (WP18): durante nitro-prerender il backend non e'
  // raggiungibile e una unhandled rejection farebbe abortire silenziosamente
  // il build. Ritorniamo il fallback sincrono; il browser rifara' il fetch
  // live al mount runtime (dati sempre freschi in client).
  if (isServer) {
    return lastKnown;
  }

  // Canonical endpoint per ADR-014 / WP25 (CR-038). Precedente path
  // `/api/subscription/pricing` (shape flat) non era piu' allineato al BE
  // e faceva cadere il FE sul BUILD_TIME_FALLBACK in modo silenzioso.
  const url = `${ENV.apiBaseUrl}/api/v1/public/pricing`;
  const timeoutController = new AbortController();
  const timer = setTimeout(() => timeoutController.abort(), TIMEOUT_MS);

  const onCallerAbort = () => timeoutController.abort();
  if (signal) {
    if (signal.aborted) {
      timeoutController.abort();
    } else {
      signal.addEventListener('abort', onCallerAbort, { once: true });
    }
  }

  try {
    const res = await fetch(url, {
      signal: timeoutController.signal,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const json: unknown = await res.json();
    if (!isPricingResponse(json)) {
      throw new Error('Invalid pricing response shape');
    }
    lastKnown = json;
    return json;
  } catch (err) {
    const errorType =
      err instanceof DOMException && err.name === 'AbortError'
        ? 'timeout_or_abort'
        : err instanceof Error && err.message.startsWith('HTTP ')
          ? 'http_error'
          : err instanceof Error && err.message === 'Invalid pricing response shape'
            ? 'schema_mismatch'
            : 'network_error';
    const errorMessage = err instanceof Error ? err.message : String(err);
    // Structured log: a future metrics pipeline (CF Workers Analytics Engine o simile)
    // potra' aggregare questi eventi per monitorare il tasso di fallback in prod.
    console.warn(
      JSON.stringify({
        event: 'pricing_api_fallback',
        error_type: errorType,
        error_message: errorMessage,
        using_last_known: lastKnown !== BUILD_TIME_FALLBACK,
        timestamp: new Date().toISOString(),
      }),
    );
    return lastKnown;
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onCallerAbort);
  }
}
