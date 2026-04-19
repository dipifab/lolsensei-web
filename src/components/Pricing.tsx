import { For, Show } from 'solid-js';
import { PERFORMANCE_FEATURES } from '../data/pricing';
import { usePricing } from '../hooks/usePricing';
import { useI18n } from '../i18n';
import { BUILD_TIME_FALLBACK } from '../services/pricing-api';
import type { Locale } from '../types/locale';
import type { PricingTier } from '../types/pricing';
import { formatCurrency } from '../utils/intl';
import Icon from './Icon';

export default function Pricing() {
  const { t, locale } = useI18n();
  const pricing = usePricing();

  // Render order is guaranteed by the API contract (tiers[0]=free, [1]=ad-free, [2]=pro)
  // and by the runtime type guard; we defensively fall back to BUILD_TIME_FALLBACK
  // while `createResource` is still pending so the first paint is never empty.
  const tiers = (): ReadonlyArray<PricingTier> =>
    (pricing()?.tiers ?? BUILD_TIME_FALLBACK.tiers);

  // True when we are rendering BUILD_TIME_FALLBACK (either initial paint before
  // the resource resolves, or a first-fetch failure where `lastKnown` is still
  // the module-initial BUILD_TIME_FALLBACK reference). Once a fetch succeeds,
  // reference changes and subsequent refresh failures render the stale-but-real
  // `lastKnown`, which is acceptable and does not trigger this notice.
  const isFallback = () => pricing() === undefined || pricing() === BUILD_TIME_FALLBACK;

  return (
    <section id="pricing" class="py-32 px-8">
      <div class="max-w-7xl mx-auto">
        {/* Hero header */}
        <div class="text-center mb-20">
          <span class="text-xs font-headline font-extrabold uppercase tracking-[0.2em] text-primary-container mb-4 block">
            {t('pricing.label')}
          </span>
          <h2 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-headline">
            <span class="bg-gradient-to-r from-primary-container to-primary bg-clip-text text-transparent">
              {t('pricing.title')}
            </span>
          </h2>
          <p class="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* WCAG 4.1.3 Status Messages: announce fallback state to assistive tech
            without visual noise. Keep role="status" + aria-live="polite". */}
        <Show when={isFallback()}>
          <p class="sr-only" role="status" aria-live="polite">
            {t('pricing.fallback.notice')}
          </p>
        </Show>

        {/* Pricing cards grid (3 tiers: Free, Ad-Free, Pro).
            No <Suspense>: `tiers()` already falls back to BUILD_TIME_FALLBACK
            synchronously so the first paint is never empty. `opacity-60` during
            a background refetch gives a subtle visual cue to sighted users. */}
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mb-32"
          classList={{ 'opacity-60': pricing.loading }}
        >
          <For each={tiers()}>
            {(tier) => <PricingTierCard tier={tier} locale={locale()} />}
          </For>
        </div>

        {/* Performance features section */}
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold tracking-tight uppercase">
            {t('pricing.performance.title')}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <For each={PERFORMANCE_FEATURES}>
            {(feat) => (
              <div class="bg-surface-container-high rounded-xl border border-outline-variant/10 p-8 flex flex-col">
                <div class="flex items-center justify-between mb-6">
                  <Icon name={`${feat.icon}_filled`} class="w-8 h-8 text-primary-container" />
                  <Show when={feat.proExclusive}>
                    <span class="text-[10px] font-headline font-extrabold uppercase tracking-widest text-primary-container border border-primary-container/30 px-2.5 py-1 rounded-full">
                      {t('pricing.proExclusive')}
                    </span>
                  </Show>
                </div>
                <h3 class="text-xl font-bold tracking-tight mb-3">
                  {t(feat.titleKey)}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t(feat.descriptionKey)}
                </p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

interface PricingTierCardProps {
  tier: PricingTier;
  locale: Locale;
}

function PricingTierCard(props: PricingTierCardProps) {
  const { t } = useI18n();
  const isPro = () => props.tier.id === 'pro';
  const price = () => formatCurrency(props.tier.price_eur, props.locale);
  const originalPrice = () =>
    props.tier.price_eur_original !== null
      ? formatCurrency(props.tier.price_eur_original, props.locale)
      : null;

  return (
    <div
      class={
        isPro()
          ? 'relative bg-surface-container-highest rounded-xl border-2 border-primary-container p-10 flex flex-col shadow-[0_0_40px_rgba(240,191,92,0.15)] md:-translate-y-4 shadow-2xl hex-bg'
          : 'relative bg-surface-container-low rounded-xl border border-outline-variant/10 p-10 flex flex-col hover:bg-surface-container-high transition-colors'
      }
    >
      <Show when={props.tier.badge_key}>
        {(key) => (
          <div class="absolute top-0 right-8 -translate-y-1/2 gold-gradient px-4 py-1.5 rounded-full text-[10px] font-headline font-extrabold text-on-primary-fixed uppercase tracking-widest">
            {t(key())}
          </div>
        )}
      </Show>

      {/* Tier name */}
      <h3
        class={
          isPro()
            ? 'text-xl font-bold uppercase tracking-widest mb-1 text-primary'
            : 'text-xl font-bold uppercase tracking-widest mb-1 text-on-surface'
        }
      >
        {t(props.tier.name_key)}
      </h3>

      {/* Price */}
      <div class="flex items-baseline gap-2 mb-8 mt-6">
        <Show when={originalPrice()}>
          {(orig) => (
            <span class="text-2xl font-bold text-on-surface-variant/60 line-through">
              {orig()}
            </span>
          )}
        </Show>
        <span
          class={
            isPro()
              ? 'text-5xl font-extrabold text-on-surface'
              : 'text-4xl font-extrabold text-on-surface'
          }
        >
          {price()}
        </span>
      </div>

      {/* Features */}
      <ul class="space-y-4 mb-10 flex-grow">
        <For each={props.tier.features}>
          {(featureKey) => (
            <li class="flex items-center gap-3 text-sm text-on-surface">
              <Icon
                name={isPro() ? 'star_filled' : 'check_circle'}
                class={isPro() ? 'w-5 h-5 text-primary-container' : 'w-5 h-5 text-tertiary'}
              />
              {t(featureKey)}
            </li>
          )}
        </For>
      </ul>

      {/* CTA — desktop download. Pro trial is started from inside the app. */}
      <a
        href={props.tier.download_url}
        class={
          isPro()
            ? 'w-full gold-gradient text-on-primary-fixed py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-center inline-block text-sm transition-transform hover:-translate-y-0.5'
            : 'w-full border border-outline-variant/30 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-center inline-block text-sm text-on-surface hover:bg-surface-container-high transition-colors'
        }
      >
        {t(props.tier.cta_key)}
      </a>
    </div>
  );
}

