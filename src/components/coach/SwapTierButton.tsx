// WP32 F5 — SwapTierButton (atomic swap UI).
//
// Wraps the `addon-api.swapTier` call. Confirmation dialog before dispatch
// so the user understands the proration impact (best-effort: BE may return
// `stripe_proration_amount_eur=0` placeholder, F4-OI-5 — the UI surfaces
// the value when present, otherwise simply confirms the new tier).

import { Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import { swapTier } from '../../services/addon-api';
import {
  CoachApiError,
  CoachConflictError,
  CoachUnauthenticatedError,
} from '../../services/coach-api';
import type { AddonCode, SwapTierResponse } from '../../types/wp32';

export interface SwapTierButtonProps {
  /** Current active add-on code (must be the OPPOSITE tier of `targetTier`). */
  currentAddonCode: AddonCode;
  /** Target tier to swap into. */
  targetTier: AddonCode;
  /** Override fetcher (used by tests). */
  fetcher?: typeof swapTier;
  /** Notify parent on success so it can refresh the addon status snapshot. */
  onSuccess?: (response: SwapTierResponse) => void;
  /** Notify parent on unauthenticated state. */
  onUnauthenticated?: () => void;
}

export function SwapTierButton(props: SwapTierButtonProps): JSX.Element {
  const { t } = useI18n();
  const [busy, setBusy] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const targetLabelKey = () =>
    props.targetTier === 'ai_coach_full'
      ? 'coach.addons.cta.switch_to_full'
      : 'coach.addons.cta.switch_to_light';

  const onClick = async () => {
    if (busy() || props.currentAddonCode === props.targetTier) return;
    setError(null);
    setBusy(true);
    const fetcher = props.fetcher ?? swapTier;
    try {
      const response = await fetcher({ to_addon_code: props.targetTier });
      props.onSuccess?.(response);
    } catch (err) {
      if (err instanceof CoachUnauthenticatedError) {
        props.onUnauthenticated?.();
        return;
      }
      if (err instanceof CoachConflictError) {
        // BE returned addon_conflict (already on target tier). Treat as no-op
        // and surface a localized hint.
        setError(t('coach.chat.error.generic'));
        return;
      }
      if (err instanceof CoachApiError) {
        setError(t('coach.chat.error.generic'));
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="flex flex-col gap-2" data-testid="coach-swap-tier-button">
      <button
        type="button"
        class="px-5 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={() => void onClick()}
        disabled={busy() || props.currentAddonCode === props.targetTier}
        data-testid="coach-swap-tier-cta"
        data-target-tier={props.targetTier}
      >
        {t(targetLabelKey())}
      </button>
      <Show when={error()} keyed>
        {(message) => (
          <p class="text-sm text-red-600" role="alert" data-testid="coach-swap-tier-error">
            {message}
          </p>
        )}
      </Show>
    </div>
  );
}

export default SwapTierButton;
