// OAuth callback — valida state/csrf, scambia code con BE, salva jwt, naviga returnTo
// REQ-F-021-013, CLR-116
import { onMount, createSignal, Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { setAuthJwt } from '../auth/store';

function base64urlDecode(input: string): string {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4));
  const b64 = input.replace(/-/g, '+').replace(/_/g, '/') + pad;
  return atob(b64);
}

function isValidReturnTo(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  if (!value.startsWith('/console/') && value !== '/console') return false;
  if (value.includes('//')) return false;
  if (/[<>"']/.test(value)) return false;
  return value.length < 512;
}

export default function OAuthCallbackHandler() {
  const navigate = useNavigate();
  const [status, setStatus] = createSignal<'working' | 'error'>('working');
  const [errorMsg, setErrorMsg] = createSignal<string>('');

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const stateRaw = urlParams.get('state');

    if (!code || !stateRaw) {
      setErrorMsg('Parametri OAuth mancanti.');
      setStatus('error');
      return;
    }

    let parsed: { csrf?: unknown; returnTo?: unknown };
    try {
      parsed = JSON.parse(base64urlDecode(stateRaw));
    } catch {
      setErrorMsg('Accesso non valido.');
      setStatus('error');
      return;
    }

    const expectedCsrf = (() => {
      try {
        return sessionStorage.getItem('oauth_csrf');
      } catch {
        return null;
      }
    })();

    if (
      typeof parsed.csrf !== 'string' ||
      parsed.csrf.length === 0 ||
      parsed.csrf !== expectedCsrf
    ) {
      setErrorMsg('Accesso non valido.');
      setStatus('error');
      try {
        sessionStorage.removeItem('oauth_csrf');
      } catch {
        // no-op
      }
      return;
    }

    try {
      sessionStorage.removeItem('oauth_csrf');
    } catch {
      // no-op
    }

    const redirectUri = window.location.origin + '/auth/google/callback';
    let res: Response;
    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      res = await fetch(apiBase + '/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ code, redirect_uri: redirectUri }),
      });
    } catch {
      setErrorMsg('Errore di rete. Riprova.');
      setStatus('error');
      return;
    }

    if (!res.ok) {
      setErrorMsg('Accesso rifiutato.');
      setStatus('error');
      return;
    }

    let body: { access_token?: unknown };
    try {
      body = await res.json();
    } catch {
      setErrorMsg('Risposta del server non valida.');
      setStatus('error');
      return;
    }

    if (typeof body.access_token !== 'string' || body.access_token.length === 0) {
      setErrorMsg('Token di accesso non ricevuto.');
      setStatus('error');
      return;
    }

    setAuthJwt(body.access_token);

    const returnTo = isValidReturnTo(parsed.returnTo) ? parsed.returnTo : '/console';
    navigate(returnTo, { replace: true });
  });

  return (
    <div class="min-h-screen flex items-center justify-center bg-surface p-6">
      <div class="w-full max-w-sm rounded-2xl bg-surface-container p-8 text-center">
        <Show
          when={status() === 'working'}
          fallback={
            <div role="alert" class="flex flex-col items-center gap-3">
              <p class="text-sm text-error">{errorMsg() || 'Accesso non valido.'}</p>
              <a
                href="/"
                class="text-xs text-primary-container underline focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
              >
                Torna alla home
              </a>
            </div>
          }
        >
          <div role="status" aria-live="polite" class="flex flex-col items-center gap-3">
            <div
              class="h-8 w-8 rounded-full border-2 border-outline-variant border-t-primary-container animate-spin"
              aria-hidden="true"
            />
            <p class="text-sm text-on-surface-variant">Completamento accesso...</p>
          </div>
        </Show>
      </div>
    </div>
  );
}
