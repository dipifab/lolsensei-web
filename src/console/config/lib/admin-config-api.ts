// Admin Runtime Config — API client typed
//
// Riusa `consoleFetch` (JWT-aware, navigate-on-denied) di console/api/client.ts.
// Le funzioni mappano 1:1 gli endpoint /api/admin/config* descritti in
// dev-repository/wp-config-migration/design/api-contract.md §2.
//
// Custom errors: il chiamante distingue 409 (VersionMismatchError, expone
// current_version per la dialog "valore aggiornato altrove") dal generico
// ConsoleApiError. Tutti gli altri 4xx/5xx (404, 400 validation, 500)
// si propagano come ConsoleApiError invariato — gestiti dal toast UI.

import { consoleFetch, ConsoleApiError } from '../../api/client';
import type {
  AppConfigItem,
  AppConfigListResponse,
  AppConfigPatchRequest,
  AppConfigAuditListResponse,
  ListConfigFilters,
  ListAuditFilters,
} from './types';

// === Custom errors ===

/**
 * Errore generico contestualizzato sui fallimenti delle API admin/config.
 * Estende ConsoleApiError per mantenere la compatibilita con il pattern
 * di error handling esistente (toast, navigate-on-denied, ecc.).
 */
export class ConfigApiError extends ConsoleApiError {
  constructor(status: number, detail: string, code?: string) {
    super(status, detail, code);
    this.name = 'ConfigApiError';
  }
}

/**
 * Sollevato esclusivamente sui PATCH 409 — optimistic concurrency mismatch.
 * Il backend ritorna `current_version` nel body cosicche la UI possa
 * mostrare il conflict dialog "valore aggiornato altrove, ricarica".
 */
export class VersionMismatchError extends ConfigApiError {
  readonly currentVersion: number;

  constructor(detail: string, currentVersion: number) {
    super(409, detail, 'CONFIG_VERSION_MISMATCH');
    this.currentVersion = currentVersion;
    this.name = 'VersionMismatchError';
  }
}

// === Helpers ===

function buildQuery(params: Record<string, unknown>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'string' && value.length === 0) continue;
    if (typeof value === 'boolean') {
      search.set(key, value ? 'true' : 'false');
    } else {
      search.set(key, String(value));
    }
  }
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

// === API functions ===

export function listConfig(
  filters: ListConfigFilters = {},
): Promise<AppConfigListResponse> {
  const qs = buildQuery({
    category: filters.category,
    q: filters.q,
    requires_restart: filters.requires_restart,
    env_override_active: filters.env_override_active,
  });
  return consoleFetch<AppConfigListResponse>(`/api/admin/config${qs}`);
}

export function getConfig(key: string): Promise<AppConfigItem> {
  return consoleFetch<AppConfigItem>(
    `/api/admin/config/${encodeURIComponent(key)}`,
  );
}

/**
 * PATCH /api/admin/config/{key}.
 *
 * Mappa 409 -> VersionMismatchError leggendo `current_version` dal body
 * d'errore. Per gli altri stati lascia propagare ConsoleApiError standard.
 *
 * Nota: consoleFetch su 409 fa parseError che NON espone i campi extra del
 * body, quindi facciamo una fetch diretta per accedere a `current_version`.
 */
export async function patchConfig(
  key: string,
  body: AppConfigPatchRequest,
): Promise<AppConfigItem> {
  try {
    return await consoleFetch<AppConfigItem>(
      `/api/admin/config/${encodeURIComponent(key)}`,
      {
        method: 'PATCH',
        body: JSON.stringify(body),
      },
    );
  } catch (err) {
    if (err instanceof ConsoleApiError && err.status === 409) {
      // Re-fetch per estrarre `current_version` dal body (non esposto da
      // ConsoleApiError standard). Usa GET per evitare side-effect.
      try {
        const current = await getConfig(key);
        throw new VersionMismatchError(err.detail, current.version);
      } catch (refetchErr) {
        if (refetchErr instanceof VersionMismatchError) throw refetchErr;
        // Re-fetch fallita: solleva il conflict originale senza version.
        throw new VersionMismatchError(err.detail, body.version);
      }
    }
    throw err;
  }
}

export function listAudit(
  filters: ListAuditFilters = {},
): Promise<AppConfigAuditListResponse> {
  const qs = buildQuery({
    key: filters.key,
    user_email: filters.user_email,
    date_from: filters.date_from,
    date_to: filters.date_to,
    source: filters.source,
    page: filters.page,
    per_page: filters.per_page,
  });
  return consoleFetch<AppConfigAuditListResponse>(
    `/api/admin/config/audit${qs}`,
  );
}
