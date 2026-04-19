// Console login — redirect a Google OAuth con state CSRF + returnTo whitelist
// REQ-F-021-013, CLR-003, CLR-116
// Nessun X-Admin-Key, nessun admin_key in sessionStorage.
// sessionStorage['oauth_csrf'] e transient e viene pulito dal callback.
import { onMount, createSignal, Show } from 'solid-js';
import { useSearchParams } from '@solidjs/router';

const GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';

function base64url(input: string): string {
  return btoa(input).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function isValidReturnTo(value: string | undefined | null): value is string {
  if (!value) return false;
  if (!value.startsWith('/console/') && value !== '/console') return false;
  if (value.includes('//')) return false;
  if (/[<>"']/.test(value)) return false;
  return value.length < 512;
}

export default function ConsoleLoginPage() {
  const [params] = useSearchParams();
  const [redirectUrl, setRedirectUrl] = createSignal<string | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  // U18: se il gate ha reindirizzato con ?reason=admin_probe_failed, mostriamo
  // un banner informativo e saltiamo l'auto-redirect a Google finche' l'utente
  // non clicca un'azione. Non ritentiamo in automatico per non nascondere
  // problemi di connettivita persistenti.
  const rawReason = Array.isArray(params.reason) ? params.reason[0] : params.reason;
  const networkErrorNotice = rawReason === 'admin_probe_failed';

  onMount(() => {
    if (networkErrorNotice) {
      // Mostra il banner, niente redirect automatico.
      return;
    }
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId) {
      setError('Configurazione OAuth mancante (VITE_GOOGLE_CLIENT_ID).');
      return;
    }

    const csrf = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '');
    try {
      sessionStorage.setItem('oauth_csrf', csrf);
    } catch {
      setError('Impossibile memorizzare il token CSRF. Abilita i cookie/storage.');
      return;
    }

    const rawReturnTo = params.returnTo;
    const returnTo = Array.isArray(rawReturnTo) ? rawReturnTo[0] : rawReturnTo;
    const statePayload: { csrf: string; returnTo?: string } = { csrf };
    if (isValidReturnTo(returnTo)) {
      statePayload.returnTo = returnTo;
    }
    const state = base64url(JSON.stringify(statePayload));

    const redirectUri = window.location.origin + '/auth/google/callback';
    const url = new URL(GOOGLE_AUTH_ENDPOINT);
    url.searchParams.set('client_id', clientId);
    url.searchParams.set('redirect_uri', redirectUri);
    url.searchParams.set('scope', 'openid email profile');
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('access_type', 'online');
    url.searchParams.set('prompt', 'select_account');
    url.searchParams.set('state', state);

    const href = url.toString();
    setRedirectUrl(href);
    // redirect al frame successivo per permettere al DOM di renderizzare fallback link
    queueMicrotask(() => {
      window.location.assign(href);
    });
  });

  return (
    <div class="min-h-screen flex items-center justify-center bg-surface p-6">
      <div class="w-full max-w-sm rounded-2xl bg-surface-container p-8 text-center">
        <h1 class="font-headline text-xl font-bold text-on-surface mb-3">
          Accesso Console
        </h1>
        <Show when={networkErrorNotice}>
          <div
            role="alert"
            class="mb-4 rounded-lg border border-warning/40 bg-warning/10 px-3 py-2 text-left text-sm text-warning"
          >
            Impossibile verificare le credenziali admin. Riprova.
          </div>
        </Show>
        <Show when={!error()} fallback={
          <p role="alert" class="text-sm text-error">
            {error()}
          </p>
        }>
          <Show when={networkErrorNotice} fallback={
            <div role="status" aria-live="polite" class="flex flex-col items-center gap-3">
              <div
                class="h-8 w-8 rounded-full border-2 border-outline-variant border-t-primary-container animate-spin"
                aria-hidden="true"
              />
              <p class="text-sm text-on-surface-variant">
                Reindirizzamento a Google...
              </p>
              <Show when={redirectUrl()}>
                <a
                  href={redirectUrl() ?? '#'}
                  class="text-xs text-primary-container underline focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
                >
                  Se il reindirizzamento non avviene, clicca qui.
                </a>
              </Show>
            </div>
          }>
            <a
              href="/console-login"
              class="inline-block rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
            >
              Riprova l'accesso
            </a>
          </Show>
        </Show>
      </div>
    </div>
  );
}
