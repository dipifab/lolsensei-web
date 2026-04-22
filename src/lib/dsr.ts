// WP24 TASK-3-005 — Client DSR (export + delete account).
// JWT obbligatorio via getJwt() (@/auth/store). Nessun retry (operazioni sensibili).
import { getJwt } from '../auth/store';

export type UserDataExport = {
  export_id: string;
  generated_at: string;
  policy_version: string;
  profile: {
    user_id: string;
    email: string;
    display_name: string | null;
    google_id: string;
    region: string | null;
    riot_puuid: string | null;
    subscription_tier: string;
    age_confirmed_at: string | null;
    created_at: string;
  };
  subscriptions: Array<{
    subscription_id: string;
    plan: string;
    status: string;
    current_period_start: string;
    current_period_end: string;
  }>;
  consent_history: Array<{
    consent_id: string;
    consent_type: string;
    scope: Record<string, unknown> | null;
    granted: boolean;
    privacy_version: string;
    client_platform: string;
    created_at: string;
  }>;
  ai_usage_aggregate: {
    total_requests: number;
    period_start: string;
    period_end: string;
    by_model: Record<string, number>;
  };
};

export type UserDeleteRequest = {
  confirmation: 'DELETE_MY_ACCOUNT';
};

export type DsrError = {
  status: number;
  detail: string;
  error_code?: string;
  retry_after_sec?: number;
};

const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''
).replace(/\/$/, '');

function requireJwt(): string {
  const token = getJwt();
  if (!token) {
    const err: DsrError = {
      status: 0,
      detail: 'Authentication required',
      error_code: 'TOKEN_INVALID',
    };
    throw err;
  }
  return token;
}

async function toDsrError(res: Response): Promise<DsrError> {
  let body: { detail?: string; error_code?: string } = {};
  try {
    body = await res.json();
  } catch {
    // no body
  }
  const retryHeader = res.headers.get('Retry-After');
  const retrySec = retryHeader != null ? Number(retryHeader) : NaN;
  return {
    status: res.status,
    detail: body.detail ?? `HTTP ${res.status}`,
    error_code: body.error_code,
    retry_after_sec: Number.isFinite(retrySec) ? retrySec : undefined,
  };
}

export async function getUserDataExport(): Promise<UserDataExport> {
  const jwt = requireJwt();
  const res = await fetch(`${API_BASE_URL}/api/user/data-export`, {
    headers: { Authorization: `Bearer ${jwt}` },
    credentials: 'omit',
  });
  if (!res.ok) throw await toDsrError(res);
  return (await res.json()) as UserDataExport;
}

export async function deleteUserData(): Promise<void> {
  const jwt = requireJwt();
  const res = await fetch(`${API_BASE_URL}/api/user/data`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
    body: JSON.stringify({ confirmation: 'DELETE_MY_ACCOUNT' } satisfies UserDeleteRequest),
  });
  if (res.status === 204) return;
  throw await toDsrError(res);
}

export function downloadExportAsJson(data: UserDataExport, filename?: string): void {
  if (typeof document === 'undefined') return;
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename ?? `lolsensei-data-export-${data.export_id}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
