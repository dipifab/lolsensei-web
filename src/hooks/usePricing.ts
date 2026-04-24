import { createResource, onCleanup, onMount, type Resource } from 'solid-js';
import { isServer } from 'solid-js/web';
import { fetchPricing } from '../services/pricing-api';
import type { PricingResponse } from '../types/pricing';

/**
 * Runtime pricing resource. Owns an AbortController tied to the caller's
 * reactive scope: when the consuming component unmounts, the in-flight fetch
 * is aborted (no leak on route change).
 *
 * SSR note: fetchPricing() returns the BUILD_TIME_FALLBACK synchronously on
 * the server (no backend reachable during prerender). After hydrate we must
 * explicitly refetch() on the client, otherwise createResource stays with
 * the serialized fallback and never hits the live API.
 */
export function usePricing(): Resource<PricingResponse> {
  const controller = new AbortController();
  onCleanup(() => controller.abort());

  const [pricing, { refetch }] = createResource<PricingResponse>(() =>
    fetchPricing(controller.signal),
  );

  onMount(() => {
    if (!isServer) {
      void refetch();
    }
  });

  return pricing;
}
