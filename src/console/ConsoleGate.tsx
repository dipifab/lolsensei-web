// ConsoleGate WP21 — probe /api/admin/me + gating lazy children
// REQ-F-021-009, CLR-113, CLR-214, CLR-116
import { createSignal, onMount, Show, type JSX } from 'solid-js';
import { useNavigate, useLocation } from '@solidjs/router';
import { getJwt } from '../auth/store';

type Phase = 'probing' | 'ok' | 'denied';

export interface ConsoleGateProps {
  children: JSX.Element;
}

function LoadingGate() {
  return (
    <div
      role="status"
      aria-live="polite"
      class="min-h-screen flex items-center justify-center bg-surface"
    >
      <div class="flex flex-col items-center gap-3">
        <div
          class="h-8 w-8 rounded-full border-2 border-outline-variant border-t-primary-container animate-spin"
          aria-hidden="true"
        />
        <p class="text-sm text-on-surface-variant">Verifica accesso...</p>
      </div>
    </div>
  );
}

export default function ConsoleGate(props: ConsoleGateProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [phase, setPhase] = createSignal<Phase>('probing');

  onMount(async () => {
    const jwt = getJwt();

    // No JWT → login con returnTo preservato (solo se path e' /console/*).
    if (!jwt) {
      const currentPath = location.pathname + (location.search ?? '');
      const returnTo = currentPath.startsWith('/console/') || currentPath === '/console'
        ? currentPath
        : undefined;
      const loginUrl = returnTo
        ? '/console-login?returnTo=' + encodeURIComponent(returnTo)
        : '/console-login';
      navigate(loginUrl, { replace: true });
      return;
    }

    // JWT presente: raw fetch (no wrapper interceptor, altrimenti 404 su /me
    // triggera re-probe infinito — vedi Note TASK-6-001).
    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const res = await fetch(apiBase + '/api/admin/me', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + jwt,
        },
      });
      if (res.status === 200) {
        setPhase('ok');
        return;
      }
      // 404 o altri status → denied (privileges missing); redirect silenzioso.
      setPhase('denied');
      navigate('/', { replace: true });
    } catch (_err) {
      // U18: network error (no HTTP status) → non possiamo discriminare
      // "non admin" da "BE irraggiungibile". Porta l'utente alla login
      // page con un reason flag cosi' il banner informativo spiega la
      // differenza rispetto al redirect silenzioso del caso 404.
      console.warn('admin_probe_network_error');
      setPhase('denied');
      navigate('/console-login?reason=admin_probe_failed', { replace: true });
    }
  });

  return (
    <Show when={phase() === 'ok'} fallback={<LoadingGate />}>
      {props.children}
    </Show>
  );
}
