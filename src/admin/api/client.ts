import type { DashboardResponse } from '../types';
import { getErrorMessage } from './error-messages';

const ADMIN_KEY_STORAGE = 'admin_key';
const MAX_RETRIES_429 = 2;
const DEFAULT_RETRY_AFTER_MS = 2000;
const RETRY_DELAY_5XX_MS = 1000;
const RETRY_DELAY_NETWORK_MS = 1000;

export class AdminApiError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
    this.name = 'AdminApiError';
  }
}

export function getAdminKey(): string | null {
  return sessionStorage.getItem(ADMIN_KEY_STORAGE);
}

export function setAdminKey(key: string): void {
  sessionStorage.setItem(ADMIN_KEY_STORAGE, key);
}

export function clearAdminKey(): void {
  sessionStorage.removeItem(ADMIN_KEY_STORAGE);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function adminFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const key = getAdminKey();
  if (!key) {
    throw new AdminApiError(401, 'ADMIN_KEY_MISSING', 'Chiave admin non presente');
  }

  const headers = new Headers(options.headers);
  headers.set('X-Admin-Key', key);
  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const doFetch = (): Promise<Response> =>
    fetch(path, { ...options, headers });

  let retries429 = 0;
  let retriedServer = false;

  for (;;) {
    let response: Response;
    try {
      response = await doFetch();
    } catch {
      if (!retriedServer) {
        retriedServer = true;
        await sleep(RETRY_DELAY_NETWORK_MS);
        continue;
      }
      throw new AdminApiError(0, 'NETWORK_ERROR', 'Errore di rete. Verifica la connessione.');
    }

    if (response.ok) {
      if (response.status === 204) return undefined as T;
      return response.json() as Promise<T>;
    }

    if (response.status === 401) {
      clearAdminKey();
      const body = await response.json().catch(() => ({}));
      throw new AdminApiError(
        401,
        body.code ?? 'ADMIN_KEY_INVALID',
        body.detail ?? 'Sessione scaduta',
      );
    }

    if (response.status === 429 && retries429 < MAX_RETRIES_429) {
      retries429++;
      const retryAfter = response.headers.get('Retry-After');
      const delayMs = retryAfter
        ? parseInt(retryAfter, 10) * 1000
        : DEFAULT_RETRY_AFTER_MS;
      await sleep(delayMs);
      continue;
    }

    if (response.status >= 500 && !retriedServer) {
      retriedServer = true;
      await sleep(RETRY_DELAY_5XX_MS);
      continue;
    }

    const body = await response.json().catch(() => ({}));
    const code = body.code ?? `HTTP_${response.status}`;
    throw new AdminApiError(
      response.status,
      code,
      body.detail ?? getErrorMessage(code),
    );
  }
}

export function fetchDashboard(
  startDate?: string,
  endDate?: string,
): Promise<DashboardResponse> {
  const params = new URLSearchParams();
  if (startDate) params.set('start_date', startDate);
  if (endDate) params.set('end_date', endDate);
  const qs = params.toString();
  return adminFetch<DashboardResponse>(
    `/api/admin/dashboard${qs ? `?${qs}` : ''}`,
  );
}
