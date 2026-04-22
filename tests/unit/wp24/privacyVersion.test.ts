// WP24 TASK-3-030 — MAJOR bump re-prompt behaviour.
// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';

global.fetch = vi.fn(() => Promise.resolve(new Response('{}', { status: 201 }))) as unknown as typeof fetch;

function clearCookies(): void {
  document.cookie.split(';').forEach((c) => {
    const [name] = c.split('=');
    document.cookie = `${name.trim()}=; Max-Age=0; Path=/`;
  });
}

describe('privacyVersion — MAJOR bump', () => {
  beforeEach(() => {
    clearCookies();
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it('shouldPrompt true when stored MAJOR (1) < current MAJOR (2)', async () => {
    vi.stubEnv('VITE_PRIVACY_POLICY_VERSION', '2.0.0');
    const { consentStore } = await import('../../../src/stores/consentStore');
    consentStore._reset();

    document.cookie = `lolsensei_anon=anon-1; Path=/`;
    document.cookie = `lolsensei_consent=${encodeURIComponent(
      JSON.stringify({
        scope: { technical: true, analytics: true, marketing: false },
        privacy_version: '1.5.3',
        last_updated_at: '2026-01-01T00:00:00Z',
      }),
    )}; Path=/`;

    consentStore.init();
    expect(consentStore.shouldPrompt()).toBe(true);
  });

  it('shouldPrompt false when MAJOR matches even if MINOR/PATCH differ', async () => {
    vi.stubEnv('VITE_PRIVACY_POLICY_VERSION', '2.0.0');
    const { consentStore } = await import('../../../src/stores/consentStore');
    consentStore._reset();

    document.cookie = `lolsensei_anon=anon-2; Path=/`;
    document.cookie = `lolsensei_consent=${encodeURIComponent(
      JSON.stringify({
        scope: { technical: true, analytics: false, marketing: false },
        privacy_version: '2.4.9',
        last_updated_at: '2026-04-01T00:00:00Z',
      }),
    )}; Path=/`;

    consentStore.init();
    expect(consentStore.shouldPrompt()).toBe(false);
  });
});
