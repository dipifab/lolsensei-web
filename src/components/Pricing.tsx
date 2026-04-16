import { For, Show } from 'solid-js';
import { PRICING_PLANS, PERFORMANCE_FEATURES } from '../data/pricing';
import { useI18n } from '../i18n';
import PricingCard from './PricingCard';
import Icon from './Icon';

export default function Pricing() {
  const { t } = useI18n();

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

        {/* Pricing cards grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start mb-32">
          <For each={PRICING_PLANS}>
            {(plan) => <PricingCard plan={plan} />}
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
