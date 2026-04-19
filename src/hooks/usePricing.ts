import { createResource, onCleanup, type Resource } from 'solid-js';
import { fetchPricing } from '../services/pricing-api';
import type { PricingResponse } from '../types/pricing';

/**
 * Runtime pricing resource. Owns an AbortController tied to the caller's
 * reactive scope: when the consuming component unmounts, the in-flight fetch
 * is aborted (no leak on route change).
 */
export function usePricing(): Resource<PricingResponse> {
  const controller = new AbortController();
  onCleanup(() => controller.abort());

  const [pricing] = createResource<PricingResponse>(() =>
    fetchPricing(controller.signal),
  );

  return pricing;
}
