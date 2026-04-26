// WP32 F5 — PricingCard component-design §6.8 (AddonUpsellCard).
//
// Renders a single add-on plan (Light €5 or Full €9). The CTA copy adapts
// to the user's current state via `resolveCardCopy` (in `./pricing-copy.ts`):
//   - No addon active   -> "Buy AI Coach Light/Full"
//   - Light active card == light  -> "Active" disabled / cancel hint
//   - Light active card == full   -> "Switch to Full"
//   - Full active card == light   -> "Switch to Light"
//   - Full active card == full    -> "Active" disabled
//
// Pure presentational: parent decides what action to dispatch on click.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type { AddonCode } from '../../types/wp32';
import { resolveCardCopy, type CardCopy, type PricingTier } from './pricing-copy';

export type { PricingTier, CardCopy };
export { resolveCardCopy };

export interface PricingCardProps {
  /** Which tier this card represents. */
  tier: PricingTier;
  /** Currently active add-on code, if any. `null` for free users. */
  currentAddonCode: AddonCode | null;
  /** Click handler (parent decides activate vs swap). */
  onAction: () => void | Promise<void>;
  /** Loading state propagated from parent (disables CTA). */
  loading?: () => boolean;
  /** Error to surface inside the card (string already localized by parent). */
  errorMessage?: () => string | null;
}

export function PricingCard(props: PricingCardProps): JSX.Element {
  const { t } = useI18n();
  const copy = (): CardCopy => resolveCardCopy(props.tier, props.currentAddonCode);
  const isLoading = () => Boolean(props.loading?.());
  const error = () => props.errorMessage?.() ?? null;

  const titleKey = () =>
    props.tier === 'full' ? 'coach.addons.full.name' : 'coach.addons.light.name';
  const priceKey = () =>
    props.tier === 'full' ? 'coach.addons.full.price' : 'coach.addons.light.price';
  const taglineKey = () =>
    props.tier === 'full' ? 'coach.addons.full.tagline' : 'coach.addons.light.tagline';
  const featureChatKey = () =>
    props.tier === 'full'
      ? 'coach.addons.full.feature.chat'
      : 'coach.addons.light.feature.chat';
  const featureDrillKey = () =>
    props.tier === 'full'
      ? 'coach.addons.full.feature.drill'
      : 'coach.addons.light.feature.drill';

  return (
    <article
      class="flex flex-col gap-4 px-6 py-6 rounded-2xl border border-on-surface/10 bg-surface"
      data-testid="coach-pricing-card"
      data-tier={props.tier}
    >
      <header class="flex flex-col gap-1">
        <h3 class="text-lg font-bold text-on-surface">{t(titleKey())}</h3>
        <p class="text-2xl font-extrabold text-primary">{t(priceKey())}</p>
        <p class="text-sm text-on-surface-variant">{t(taglineKey())}</p>
      </header>

      <ul class="flex flex-col gap-2 text-sm text-on-surface">
        <li>{t(featureChatKey())}</li>
        <li>{t(featureDrillKey())}</li>
      </ul>

      <Show when={error()} keyed>
        {(message) => (
          <p class="text-sm text-red-600" role="alert" data-testid="coach-pricing-error">
            {message}
          </p>
        )}
      </Show>

      <button
        type="button"
        class="mt-auto px-5 py-3 rounded-full bg-primary text-on-primary font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={() => void props.onAction()}
        disabled={isLoading() || copy().isCurrent}
        data-testid={copy().ctaTestId}
        aria-disabled={isLoading() || copy().isCurrent}
      >
        {t(copy().ctaKey)}
      </button>
    </article>
  );
}

export default PricingCard;
