import { For } from 'solid-js';
import { PRICING_PLANS } from '../data/pricing';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" class="py-32 px-8">
      <div class="max-w-7xl mx-auto">
        {/* Header */}
        <div class="text-center mb-20">
          <span class="text-xs font-headline font-extrabold uppercase tracking-[0.2em] text-primary-container mb-4 block">
            Mastery Tiers
          </span>
          <h2 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-headline">
            <span class="bg-gradient-to-r from-primary-container to-primary bg-clip-text text-transparent">
              Precision Pricing.
            </span>
          </h2>
          <p class="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
            Choose the tier that matches your ambition. Upgrade or cancel at any
            time, no strings attached.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <For each={PRICING_PLANS}>
            {(plan) => <PricingCard plan={plan} />}
          </For>
        </div>
      </div>
    </section>
  );
}
