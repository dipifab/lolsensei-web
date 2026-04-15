import { Show, For } from 'solid-js';
import type { PricingPlan } from '../data/types';
import { useI18n } from '../i18n';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard(props: PricingCardProps) {
  const { t } = useI18n();
  const isHighlighted = () => props.plan.highlighted;

  const subtitle = () =>
    isHighlighted()
      ? t('pricing.card.subtitlePro')
      : t('pricing.card.subtitleFree');

  const displayPrice = () => props.plan.price ?? '\u20AC0';

  const isFeatureIncluded = (index: number) => {
    if (isHighlighted()) return true;
    // Free plan: only the first feature is included
    return index === 0;
  };

  return (
    <div
      class={
        isHighlighted()
          ? 'relative bg-surface-container-highest rounded-xl border-2 border-primary-container p-10 flex flex-col shadow-[0_0_40px_rgba(240,191,92,0.15)] md:-translate-y-4 shadow-2xl hex-bg'
          : 'relative bg-surface-container-low rounded-xl border border-outline-variant/10 p-10 flex flex-col hover:bg-surface-container-high transition-colors'
      }
    >
      {/* Pro badge — top-right corner */}
      <Show when={isHighlighted()}>
        <div class="absolute top-0 right-8 -translate-y-1/2 gold-gradient px-4 py-1.5 rounded-full text-[10px] font-headline font-extrabold text-on-primary-fixed uppercase tracking-widest">
          {t('pricing.card.recommended')}
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
        {t(props.plan.nameKey)}
      </h3>

      {/* Subtitle */}
      <p class="text-sm text-on-surface-variant mb-6">{subtitle()}</p>

      {/* Price */}
      <div class="flex items-baseline gap-1 mb-8">
        <span
          class={
            isHighlighted()
              ? 'text-5xl font-extrabold text-on-surface'
              : 'text-4xl font-extrabold text-on-surface'
          }
        >
          {displayPrice()}
        </span>
        <span class="text-on-surface-variant text-sm">{props.plan.period}</span>
      </div>

      {/* Feature list */}
      <ul class="space-y-4 mb-10 flex-grow">
        <For each={props.plan.features}>
          {(feature, index) => {
            const included = () => isFeatureIncluded(index());

            return (
              <li
                class={
                  included()
                    ? 'flex items-center gap-3 text-sm text-on-surface'
                    : 'flex items-center gap-3 text-sm text-on-surface/40'
                }
              >
                <Show
                  when={isHighlighted()}
                  fallback={
                    <Show
                      when={included()}
                      fallback={
                        <span class="material-symbols-outlined text-on-surface/40 text-lg">
                          block
                        </span>
                      }
                    >
                      <span class="material-symbols-outlined text-tertiary text-lg">
                        check_circle
                      </span>
                    </Show>
                  }
                >
                  <span
                    class="material-symbols-outlined text-primary-container text-lg"
                    style={{ 'font-variation-settings': "'FILL' 1" }}
                  >
                    star
                  </span>
                </Show>
                {t(feature.textKey)}
              </li>
            );
          }}
        </For>
      </ul>

      {/* CTA — downloads the desktop app. Pro upgrade happens in-app after login. */}
      <Show
        when={isHighlighted()}
        fallback={
          <span
            class="w-full border border-outline-variant/30 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-center inline-block text-sm text-on-surface-variant/50 cursor-default select-none"
          >
            {t('pricing.card.comingSoon')}
          </span>
        }
      >
        <span
          class="w-full bg-surface-container-highest/60 border border-outline-variant/30 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-on-surface-variant/50 text-center inline-block text-sm cursor-default select-none"
        >
          {t('pricing.card.comingSoon')}
        </span>
        <p class="text-xs text-on-surface-variant text-center mt-4">
          {t('pricing.card.comingSoonDescription')}
        </p>
      </Show>
    </div>
  );
}
