// WP24 TASK-3-004 — Client HTTP per POST /api/consent/site e GET /api/consent/site/current.
// Retry exponential backoff (200/400/800ms) solo su 5xx/network; mai su 4xx.
// Timeout 3s via AbortController. JWT via header Authorization (credentials: omit).

export type ConsentScope = {
  technical: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentSiteCreate = {
  anonymous_id: string | null;
  scope: ConsentScope;
  privacy_version: string;
  client_platform: 'web';
};

export type ConsentSiteResponse = {
  consent_id: string;
  anonymous_id: string;
  privacy_version: string;
  recorded_at: string;
};

export type ConsentSiteCurrentResponse = {
  anonymous_id: string;
  scope: ConsentScope;
  privacy_version: string;
  current_privacy_version: string;
  needs_reprompt: boolean;
  granted_at: string;
};

export type ConsentError = {
  status: number;
  detail: string;
  error_code?: string;
};

const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''
).replace(/\/$/, '');

const REQUEST_TIMEOUT_MS = 3000;
const RETRY_DELAYS_MS = [200, 400, 800] as const;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function toConsentError(res: Response): Promise<ConsentError> {
  let body: { detail?: string; error_code?: string } = {};
  try {
    body = await res.json();
  } catch {
    // body non JSON
  }
  return {
    status: res.status,
    detail: body.detail ?? `HTTP ${res.status}`,
    error_code: body.error_code,
  };
}

async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(input, { ...init, signal: controller.signal, credentials: 'omit' });
  } finally {
    clearTimeout(timer);
  }
}

export async function postConsentSite(
  body: ConsentSiteCreate,
  jwt?: string | null,
): Promise<ConsentSiteResponse> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (jwt) headers.Authorization = `Bearer ${jwt}`;

  const url = `${API_BASE_URL}/api/consent/site`;
  let lastError: unknown;

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const res = await fetchWithTimeout(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      if (res.ok) return (await res.json()) as ConsentSiteResponse;
      if (res.status >= 400 && res.status < 500) {
        // mai retry su 4xx
        throw await toConsentError(res);
      }
      lastError = await toConsentError(res);
    } catch (err) {
      if ((err as ConsentError)?.status !== undefined) throw err;
      lastError = err;
    }
    if (attempt < RETRY_DELAYS_MS.length) {
      await sleep(RETRY_DELAYS_MS[attempt]);
    }
  }
  throw lastError;
}

export async function getConsentSiteCurrent(
  anonymous_id: string,
): Promise<ConsentSiteCurrentResponse | null> {
  const url = `${API_BASE_URL}/api/consent/site/current?anonymous_id=${encodeURIComponent(anonymous_id)}`;
  const res = await fetchWithTimeout(url);
  if (res.status === 404) return null;
  if (!res.ok) throw await toConsentError(res);
  return (await res.json()) as ConsentSiteCurrentResponse;
}
