// WP32 F5 — CancelAddonButton (Stripe Customer Portal redirect).
//
// Implements UX-OP-309: default flow redirects the user to Stripe's hosted
// Customer Portal so the cancellation step is owned by Stripe (TOS-friendly
// and reduces our own UI maintenance). The button confirms intent before
// firing the BE call (component-design §8.1 sequence diagram).

import { Show, createSignal, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import { deactivate } from '../../services/addon-api';
import {
  CoachApiError,
  CoachUnauthenticatedError,
} from '../../services/coach-api';
import type { DeactivateResponse } from '../../types/wp32';

export interface CancelAddonButtonProps {
  /** When true, skip the redirect to portal and ask BE for direct cancel. */
  directCancel?: boolean;
  /** Override fetcher (used by tests). */
  fetcher?: typeof deactivate;
  /** Notify parent so it can refresh status without a portal hop. */
  onDirectCancelSuccess?: (response: DeactivateResponse) => void;
  /** Notify parent on unauthenticated state. */
  onUnauthenticated?: () => void;
  /**
   * Override the global `window.location.assign` redirect — used by tests
   * to assert the URL the button would navigate to.
   */
  redirector?: (url: string) => void;
}

function defaultRedirect(url: string): void {
  if (typeof window !== 'undefined' && typeof window.location?.assign === 'function') {
    window.location.assign(url);
  }
}

export function CancelAddonButton(props: CancelAddonButtonProps): JSX.Element {
  const { t } = useI18n();
  const [busy, setBusy] = createSignal(false);
  const [confirming, setConfirming] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const reset = () => {
    setError(null);
    setConfirming(false);
  };

  const onConfirm = async () => {
    if (busy()) return;
    setError(null);
    setBusy(true);
    const fetcher = props.fetcher ?? deactivate;
    const redirector = props.redirector ?? defaultRedirect;
    try {
      const response = await fetcher({ redirect_to_portal: !props.directCancel });
      if ('portal_url' in response) {
        redirector(response.portal_url);
        return;
      }
      props.onDirectCancelSuccess?.(response);
    } catch (err) {
      if (err instanceof CoachUnauthenticatedError) {
        props.onUnauthenticated?.();
        return;
      }
      if (err instanceof CoachApiError) {
        setError(t('coach.chat.error.generic'));
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setBusy(false);
      setConfirming(false);
    }
  };

  return (
    <div class="flex flex-col gap-2" data-testid="coach-cancel-addon">
      <Show
        when={confirming()}
        fallback={
          <button
            type="button"
            class="px-5 py-3 rounded-full border border-on-surface/20 text-on-surface font-medium hover:bg-on-surface/5 transition-colors"
            onClick={() => setConfirming(true)}
            data-testid="coach-cancel-addon-trigger"
          >
            {t('coach.addons.cta.manage')}
          </button>
        }
      >
        <p class="text-sm text-on-surface-variant" data-testid="coach-cancel-addon-disclaimer">
          {t('coach.addons.cta.cancel_disclaimer')}
        </p>
        <div class="flex gap-2">
          <button
            type="button"
            class="px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50 transition-colors"
            onClick={() => void onConfirm()}
            disabled={busy()}
            data-testid="coach-cancel-addon-confirm"
          >
            {t('coach.addons.cta.manage')}
          </button>
          <button
            type="button"
            class="px-4 py-2 rounded-full border border-on-surface/20 text-on-surface font-medium hover:bg-on-surface/5 transition-colors"
            onClick={reset}
            disabled={busy()}
            data-testid="coach-cancel-addon-abort"
          >
            {t('coach.checkout.consent.required')}
          </button>
        </div>
      </Show>
      <Show when={error()} keyed>
        {(message) => (
          <p class="text-sm text-red-600" role="alert" data-testid="coach-cancel-addon-error">
            {message}
          </p>
        )}
      </Show>
    </div>
  );
}

export default CancelAddonButton;
