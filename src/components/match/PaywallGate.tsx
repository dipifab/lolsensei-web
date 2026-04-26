// WP31 F4-04 — Premium gate Layer 2 (CSR fallback).
//
// Renders an inline upsell when the backend returns 403 `premium_required` on
// an authoritative endpoint while the SSR JWT claim still says "active". This
// covers the post-cancel / mid-session race window where the JWT (1h TTL)
// has not yet been refreshed.
//
// The component is intentionally pure: the parent decides when the gate is
// triggered (`enabled` accessor or boolean) by inspecting `PremiumRequiredError`
// from `services/match-api.ts`. The route handler typically wraps the page
// content in `<PaywallGate enabled={isPaywalled}>`.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import { useParams } from '@solidjs/router';

export interface PaywallGateProps {
  /**
   * Truthy when the upsell should replace `children`. Accepts a boolean or a
   * SolidJS accessor — the latter integrates naturally with `createSignal`.
   */
  enabled?: boolean | (() => boolean);
  /**
   * Where the "Upgrade" CTA points. Defaults to `/[lang]/pricing` so the
   * gate works on any localized route. The locale is read from URL params.
   */
  pricingHref?: string;
  /** Page content shown when the gate is closed (i.e. user is Premium). */
  children: JSX.Element;
}

function isEnabled(enabled: PaywallGateProps['enabled']): boolean {
  if (typeof enabled === 'function') return Boolean(enabled());
  return Boolean(enabled);
}

export function PaywallGate(props: PaywallGateProps): JSX.Element {
  const { t } = useI18n();
  const params = useParams<{ lang?: string }>();
  const fallbackHref = () => props.pricingHref ?? `/${params.lang ?? 'en'}/pricing`;

  return (
    <Show when={!isEnabled(props.enabled)} fallback={
      <section
        class="max-w-2xl mx-auto my-12 px-8 py-10 rounded-2xl border border-primary/20 bg-surface-variant/10 text-center"
        role="region"
        aria-labelledby="paywall-gate-title"
        data-testid="paywall-gate"
      >
        <h2 id="paywall-gate-title" class="text-2xl font-extrabold font-headline text-on-surface mb-3">
          {t('match.paywall.title')}
        </h2>
        <p class="text-on-surface-variant mb-6">{t('match.paywall.body')}</p>
        <ul class="text-left max-w-md mx-auto mb-8 space-y-2 text-on-surface-variant">
          <li>- {t('match.paywall.benefit.history')}</li>
          <li>- {t('match.paywall.benefit.review')}</li>
          <li>- {t('match.paywall.benefit.highlights')}</li>
          <li>- {t('match.paywall.benefit.bilingual')}</li>
        </ul>
        <a
          href={fallbackHref()}
          class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-bold hover:bg-primary/90 transition-colors"
          data-testid="paywall-gate-cta"
        >
          {t('match.paywall.cta.upgrade')}
        </a>
      </section>
    }>
      {props.children}
    </Show>
  );
}

export default PaywallGate;
