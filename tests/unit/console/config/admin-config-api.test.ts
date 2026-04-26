// T-CONFIG-025 — admin-config-api unit tests
//
// Mocka `fetch` globale (consoleFetch wrappa fetch). Verifica:
// - querystring construction per filtri opzionali
// - happy path GET/PATCH
// - 409 mappato a VersionMismatchError con current_version
// - 4xx generici mappati a ConsoleApiError

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ConfigApiError,
  VersionMismatchError,
  listConfig,
  getConfig,
  patchConfig,
  listAudit,
} from '../../../../src/console/config/lib/admin-config-api';
import { ConsoleApiError } from '../../../../src/console/api/client';

interface MockResponse {
  status: number;
  body: unknown;
  ok?: boolean;
}

function makeFetchMock(...responses: MockResponse[]) {
  let idx = 0;
  return vi.fn(async () => {
    const r = responses[idx];
    idx = Math.min(idx + 1, responses.length - 1);
    if (!r) {
      throw new Error('mock exhausted');
    }
    const ok = r.ok ?? (r.status >= 200 && r.status < 300);
    return new Response(JSON.stringify(r.body), {
      status: r.status,
      headers: { 'Content-Type': 'application/json' },
      // `ok` e' derivato da status, non sovrascrivibile su Response;
      // preserviamo l'override solo per documentare l'intento
      statusText: ok ? 'OK' : 'ERR',
    });
  });
}

describe('admin-config-api', () => {
  let originalFetch: typeof globalThis.fetch;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  describe('listConfig', () => {
    it('issues GET without query params when filters are empty', async () => {
      const fetchMock = makeFetchMock({
        status: 200,
        body: { items: [], total: 0, by_category: {} },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      const res = await listConfig();
      expect(res.total).toBe(0);
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain('/api/admin/config');
      expect(calledUrl).not.toContain('?');
    });

    it('serializes filters into querystring (booleans + strings)', async () => {
      const fetchMock = makeFetchMock({
        status: 200,
        body: { items: [], total: 0, by_category: {} },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await listConfig({
        category: 'tunable',
        q: 'cap',
        requires_restart: true,
        env_override_active: false,
      });
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain('category=tunable');
      expect(calledUrl).toContain('q=cap');
      expect(calledUrl).toContain('requires_restart=true');
      expect(calledUrl).toContain('env_override_active=false');
    });

    it('skips empty string filters', async () => {
      const fetchMock = makeFetchMock({
        status: 200,
        body: { items: [], total: 0, by_category: {} },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await listConfig({ q: '' });
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).not.toContain('q=');
    });
  });

  describe('getConfig', () => {
    it('returns AppConfigItem on 200', async () => {
      const item = {
        key: 'coach.light.chat_cap_monthly',
        value: 50,
        value_type: 'int',
        category: 'tunable',
        description: 'cap',
        validation_rules: null,
        version: 3,
        requires_restart: false,
        env_override_active: false,
        env_var_name: null,
        last_updated: '2026-04-26T00:00:00Z',
        last_updated_by_email: null,
        last_updated_by_google_id: null,
      };
      const fetchMock = makeFetchMock({ status: 200, body: item });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      const res = await getConfig('coach.light.chat_cap_monthly');
      expect(res.key).toBe('coach.light.chat_cap_monthly');
      expect(res.value).toBe(50);
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain(
        '/api/admin/config/coach.light.chat_cap_monthly',
      );
    });

    it('encodes special chars in the key', async () => {
      const fetchMock = makeFetchMock({
        status: 200,
        body: { key: 'a/b' },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await getConfig('a/b').catch(() => undefined);
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain('/api/admin/config/a%2Fb');
    });
  });

  describe('patchConfig', () => {
    it('returns updated item on 200', async () => {
      const updated = {
        key: 'k',
        value: 100,
        value_type: 'int',
        category: 'tunable',
        description: null,
        validation_rules: null,
        version: 4,
        requires_restart: false,
        env_override_active: false,
        env_var_name: null,
        last_updated: '2026-04-26T00:00:00Z',
        last_updated_by_email: null,
        last_updated_by_google_id: null,
      };
      const fetchMock = makeFetchMock({ status: 200, body: updated });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      const res = await patchConfig('k', {
        value_json: 100,
        change_reason: 'just because',
        version: 3,
      });
      expect(res.version).toBe(4);
      const init = fetchMock.mock.calls[0]?.[1] as RequestInit;
      expect(init.method).toBe('PATCH');
      expect(init.body).toBe(
        JSON.stringify({
          value_json: 100,
          change_reason: 'just because',
          version: 3,
        }),
      );
    });

    it('throws VersionMismatchError on 409 with current_version from refetch', async () => {
      const fetchMock = makeFetchMock(
        { status: 409, body: { detail: 'mismatch', current_version: 7 } },
        {
          status: 200,
          body: {
            key: 'k',
            value: 100,
            value_type: 'int',
            category: 'tunable',
            description: null,
            validation_rules: null,
            version: 7,
            requires_restart: false,
            env_override_active: false,
            env_var_name: null,
            last_updated: '2026-04-26T00:00:00Z',
            last_updated_by_email: null,
            last_updated_by_google_id: null,
          },
        },
      );
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await expect(
        patchConfig('k', {
          value_json: 100,
          change_reason: 'reason text 10',
          version: 3,
        }),
      ).rejects.toMatchObject({
        name: 'VersionMismatchError',
        currentVersion: 7,
        status: 409,
      });
    });

    it('falls back to body.version when refetch fails', async () => {
      const fetchMock = makeFetchMock(
        { status: 409, body: { detail: 'mismatch' } },
        { status: 500, body: { detail: 'oops' } },
      );
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      const err = (await patchConfig('k', {
        value_json: 100,
        change_reason: 'reason text 10',
        version: 3,
      }).catch((e) => e)) as VersionMismatchError;

      expect(err).toBeInstanceOf(VersionMismatchError);
      expect(err.currentVersion).toBe(3);
    });

    it('propagates ConsoleApiError on non-409 errors', async () => {
      const fetchMock = makeFetchMock({
        status: 400,
        body: { detail: 'too short' },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await expect(
        patchConfig('k', {
          value_json: 1,
          change_reason: 'short',
          version: 3,
        }),
      ).rejects.toBeInstanceOf(ConsoleApiError);
    });
  });

  describe('listAudit', () => {
    it('serializes pagination params + filters', async () => {
      const fetchMock = makeFetchMock({
        status: 200,
        body: { entries: [], total: 0, page: 2, per_page: 25 },
      });
      globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

      await listAudit({
        key: 'coach.light',
        user_email: 'owner@',
        source: 'admin_ui',
        page: 2,
        per_page: 25,
      });
      const calledUrl = fetchMock.mock.calls[0]?.[0] as string;
      expect(calledUrl).toContain('key=coach.light');
      expect(calledUrl).toContain('user_email=owner');
      expect(calledUrl).toContain('source=admin_ui');
      expect(calledUrl).toContain('page=2');
      expect(calledUrl).toContain('per_page=25');
    });
  });

  it('exports the ConfigApiError class for typed catches', () => {
    const e = new ConfigApiError(500, 'oops', 'CODE');
    expect(e).toBeInstanceOf(ConsoleApiError);
    expect(e.code).toBe('CODE');
  });
});
