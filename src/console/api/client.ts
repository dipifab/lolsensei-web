// Console API client WP21 — consoleFetch wrapper JWT-based
// REQ-F-021-009, REQ-F-021-013, CLR-114, CLR-214
//
// WP21 semplifica rispetto al client legacy:
// - Autenticazione via JWT Bearer (no X-Admin-Key, no sessionStorage['admin_key']).
// - Nessun retry automatico 429/5xx (CLR-114): la pagina chiamante gestisce il feedback.
// - Interceptor CLR-114: 404 su endpoint admin re-probe /me; denied → navigate('/').
// - Network error su admin → navigate('/') + re-throw (CLR-214).
// La classe ConsoleApiError mantiene compat con i consumer legacy:
// espone `status`, `detail`, e `code` (mappato da detail o HTTP status).
import { getJwt } from '../../auth/store';
import type { DashboardResponse } from '../types';

const DEFAULT_TIMEOUT_MS = 10_000;

export class ConsoleApiError extends Error {
  readonly status: number;
  readonly detail: string;
  readonly code: string;

  constructor(status: number, detail: string, code?: string) {
    super(detail || `HTTP ${status}`);
    this.status = status;
    this.detail = detail;
    this.code = code ?? (status > 0 ? `HTTP_${status}` : 'NETWORK_ERROR');
    this.name = 'ConsoleApiError';
  }
}

// Shim compat con l'API legacy: nessun admin_key da pulire, no-op.
export function clearAdminKey(): void {
  /* WP21: auth e' via JWT in localStorage; questa funzione e' mantenuta come
     no-op per retrocompat con i chiamanti non ancora migrati. */
}

type NavigateFn = (to: string, opts?: { replace?: boolean }) => void;
let navigateRef: NavigateFn | null = null;

// Registrazione navigate SolidJS router; chiamare in App post-mount per
// evitare accoppiamento fra modulo non-component e useNavigate.
export function registerAdminNavigator(nav: NavigateFn): void {
  navigateRef = nav;
}

function safeNavigateHome(): void {
  if (navigateRef) {
    navigateRef('/', { replace: true });
    return;
  }
  try {
    window.location.replace('/');
  } catch {
    // no-op in ambienti senza location (SSR/test)
  }
}

const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''
).replace(/\/$/, '');

async function rawFetch(
  path: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const url = path.startsWith('http') ? path : API_BASE_URL + path;
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function parseError(res: Response): Promise<ConsoleApiError> {
  let detail = '';
  let code: string | undefined;
  try {
    const body = await res.json();
    if (typeof body?.detail === 'string') {
      detail = body.detail;
    } else if (body?.detail !== undefined) {
      detail = JSON.stringify(body.detail);
    }
    if (typeof body?.code === 'string') {
      code = body.code;
    }
  } catch {
    try {
      detail = await res.text();
    } catch {
      detail = '';
    }
  }
  return new ConsoleApiError(res.status, detail || res.statusText, code);
}

export async function consoleFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  const jwt = getJwt();
  if (jwt) {
    headers.set('Authorization', 'Bearer ' + jwt);
  }

  const isAdminPath = path.startsWith('/api/admin/');
  const isMeProbe = path === '/api/admin/me';

  let response: Response;
  try {
    response = await rawFetch(path, { ...init, headers }, DEFAULT_TIMEOUT_MS);
  } catch (err) {
    if (isAdminPath) {
      safeNavigateHome();
    }
    if (err instanceof Error && err.name === 'AbortError') {
      throw new ConsoleApiError(0, 'Timeout della richiesta.', 'TIMEOUT');
    }
    throw new ConsoleApiError(0, 'Errore di rete.', 'NETWORK_ERROR');
  }

  if (response.ok) {
    if (response.status === 204) {
      return undefined as T;
    }
    return (await response.json()) as T;
  }

  // CLR-114: 404 su admin endpoint (eccetto /me) → re-probe /me per distinguere
  // route non trovata (bug) da accesso revocato (denied).
  if (response.status === 404 && isAdminPath && !isMeProbe) {
    let reprobe: Response | null = null;
    try {
      const probeHeaders = new Headers({ Accept: 'application/json' });
      if (jwt) probeHeaders.set('Authorization', 'Bearer ' + jwt);
      reprobe = await rawFetch(
        '/api/admin/me',
        { headers: probeHeaders },
        DEFAULT_TIMEOUT_MS,
      );
    } catch {
      // network error su probe → treat as denied
    }
    if (!reprobe || reprobe.status === 404) {
      safeNavigateHome();
    }
    throw await parseError(response);
  }

  throw await parseError(response);
}

// Helper mantenuto per retrocompat con DashboardPage legacy.
export function fetchDashboard(
  startDate?: string,
  endDate?: string,
): Promise<DashboardResponse> {
  const params = new URLSearchParams();
  if (startDate) params.set('start_date', startDate);
  if (endDate) params.set('end_date', endDate);
  const qs = params.toString();
  return consoleFetch<DashboardResponse>(
    `/api/admin/dashboard${qs ? `?${qs}` : ''}`,
  );
}
