import { createResource, type Resource } from 'solid-js';
import { fetchPricing } from '../services/pricing-api';
import type { PricingResponse } from '../types/pricing';

export function usePricing(): {
  data: Resource<PricingResponse>;
  refetch: () => void;
} {
  const [data, { refetch }] = createResource<PricingResponse>(() => fetchPricing());
  return {
    data,
    refetch: () => {
      refetch();
    },
  };
}
