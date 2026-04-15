import { Show, For } from 'solid-js';
import type { PricingPlan } from '../data/types';
import { scrollToSection } from '../utils/scroll';
import TierBadge from './TierBadge';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard(props: PricingCardProps) {
  const isHighlighted = () => props.plan.highlighted;

  const handleCta = () => {
    scrollToSection('#download');
  };

  return (
    <div
      class={
        isHighlighted()
          ? 'relative bg-surface-container-highest rounded-xl border-2 border-primary-container p-10 flex flex-col shadow-[0_0_40px_rgba(240,191,92,0.15)] md:-translate-y-4 shadow-2xl hex-bg'
          : 'relative bg-surface-container-low rounded-xl border border-outline-variant/10 p-10 flex flex-col hover:bg-surface-container-high transition-colors'
      }
    >
      {/* Promo badge — top-right corner */}
      <Show when={props.plan.promoBadge}>
        <div class="absolute top-0 right-8 -translate-y-1/2 bg-[var(--color-promo-badge-bg)] px-4 py-1.5 rounded-full text-[10px] font-headline font-extrabold text-[#261900] uppercase tracking-widest">
          {props.plan.promoBadge}
        </div>
      </Show>

      {/* Plan name */}
      <h3
        class={
          isHighlighted()
            ? 'text-xl font-bold uppercase tracking-widest mb-1 text-primary'
            : 'text-xl font-bold uppercase tracking-widest mb-1 text-on-surface'
        }
      >
        {props.plan.name}
      </h3>

      {/* Subtitle */}
      <Show when={props.plan.subtitle}>
        <p class="text-sm text-on-surface-variant mb-4">{props.plan.subtitle}</p>
      </Show>

      {/* Price */}
      <div class="flex items-baseline gap-2 mb-2">
        <Show when={props.plan.originalPrice}>
          <span class="text-xl text-[var(--color-strikethrough)] line-through">
            EUR {props.plan.originalPrice}
          </span>
        </Show>
        <span
          class={
            isHighlighted()
              ? 'text-5xl font-extrabold text-on-surface'
              : 'text-4xl font-extrabold text-on-surface'
          }
        >
          {props.plan.price === '0' ? 'EUR 0' : `EUR ${props.plan.price}`}
        </span>
        <Show when={props.plan.period}>
          <span class="text-on-surface-variant text-sm">{props.plan.period}</span>
        </Show>
      </div>

      {/* No card required */}
      <Show when={props.plan.noCardRequired}>
        <p class="text-xs text-on-surface-variant/60 mb-6">No credit card required</p>
      </Show>

      {/* Feature list */}
      <ul class={`space-y-4 mb-10 flex-grow ${props.plan.noCardRequired ? '' : 'mt-6'}`}>
        <For each={props.plan.features}>
          {(feature) => (
            <li
              class={
                feature.included
                  ? 'flex items-center gap-3 text-sm text-on-surface'
                  : 'flex items-center gap-3 text-sm text-on-surface/40'
              }
            >
              <Show
                when={feature.included}
                fallback={
                  <span class="material-symbols-outlined text-[var(--color-feature-locked)] text-lg">
                    lock
                  </span>
                }
              >
                <span class="material-symbols-outlined text-[var(--color-feature-included)] text-lg">
                  check_circle
                </span>
              </Show>
              <span>{feature.text}</span>
              <Show when={feature.proBadge}>
                <TierBadge tier="pro" size="sm" />
              </Show>
            </li>
          )}
        </For>
      </ul>

      {/* CTA */}
      <button
        type="button"
        onClick={handleCta}
        class={
          isHighlighted()
            ? 'w-full gold-gradient py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-[#261900] shadow-[0_0_20px_rgba(240,191,92,0.3)] hover:shadow-[0_0_30px_rgba(240,191,92,0.45)] transition-shadow text-center text-sm border-none cursor-pointer'
            : 'w-full border border-outline-variant/30 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest hover:bg-surface-container-highest transition-colors text-center text-sm bg-transparent cursor-pointer text-on-surface'
        }
      >
        {props.plan.ctaText}
      </button>

      {/* Trial explainer */}
      <Show when={props.plan.trialExplainer}>
        <p class="text-xs text-on-surface-variant text-center mt-4">
          {props.plan.trialExplainer}
        </p>
      </Show>
    </div>
  );
}
