// WP-SEO-AUDIT-2026-05 — JSON-LD Product emitter for pricing page (REQ-SEO-011).
//
// Emits Product schema with AggregateOffer covering the 3 subscription tiers.
// Tiers consumed from pricing API result; defaults to BUILD_TIME_FALLBACK on SSR
// to guarantee structured data presence even before client-side resource resolves.

import type { JSX } from 'solid-js';
import { BASE_URL, ORG } from '../../lib/jsonld-data';
import type { PricingTier } from '../../types/pricing';

export interface JsonLdProductProps {
  tiers: ReadonlyArray<PricingTier>;
}

export function JsonLdProduct(props: JsonLdProductProps): JSX.Element {
  const data = () => {
    const offers = props.tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.id,
      price: String(tier.price_eur ?? 0),
      priceCurrency: tier.currency ?? 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/en/pricing`,
    }));
    const prices = props.tiers
      .map((t) => t.price_eur ?? 0)
      .filter((p) => p > 0);
    const lowPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const highPrice = prices.length > 0 ? Math.max(...prices) : 0;
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${BASE_URL}/#product`,
      name: 'LoL Sensei Subscription',
      description:
        'Subscription tiers for LoL Sensei: AI coaching overlay for League of Legends. Free, Ad-Free, and Pro plans.',
      image: `${BASE_URL}/og-image.png`,
      brand: { '@id': ORG['@id'] },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: String(lowPrice),
        highPrice: String(highPrice),
        offerCount: props.tiers.length,
        offers,
      },
    };
  };

  return (
    <script
      type="application/ld+json"
      innerHTML={JSON.stringify(data())}
    />
  );
}

export default JsonLdProduct;
