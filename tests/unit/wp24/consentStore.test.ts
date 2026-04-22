// WP24 TASK-3-028 — consentStore hydration, shouldPrompt, setScope merge.
// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Stub fetch BEFORE importing the store (the store reads env at import time).
global.fetch = vi.fn(() =>
  Promise.resolve(new Response(JSON.stringify({}), { status: 200 })),
) as unknown as typeof fetch;

vi.stubGlobal('crypto', {
  randomUUID: () => 'deadbeef-0000-4000-8000-000000000000',
});

// Import AFTER stubs so env picks them up.
import { consentStore } from '../../../src/stores/consentStore';

function clearCookies(): void {
  document.cookie.split(';').forEach((c) => {
    const [name] = c.split('=');
    document.cookie = `${name.trim()}=; Max-Age=0; Path=/`;
  });
}

describe('consentStore (WP24)', () => {
  beforeEach(() => {
    clearCookies();
    consentStore._reset();
    (global.fetch as ReturnType<typeof vi.fn>).mockClear();
  });

  it('shouldPrompt is false before init (SSR-safe)', () => {
    expect(consentStore.shouldPrompt()).toBe(false);
  });

  it('init() generates anonymous_id when cookie missing', () => {
    consentStore.init();
    expect(consentStore.anonymousId).toBe('deadbeef-0000-4000-8000-000000000000');
    expect(document.cookie).toContain('lolsensei_anon');
  });

  it('shouldPrompt becomes true after init with no consent cookie', () => {
    consentStore.init();
    expect(consentStore.shouldPrompt()).toBe(true);
  });

  it('setScope forces technical=true even if partial omits it', () => {
    consentStore.init();
    consentStore.setScope({ analytics: true });
    expect(consentStore.scope.technical).toBe(true);
    expect(consentStore.scope.analytics).toBe(true);
    expect(consentStore.scope.marketing).toBe(false);
  });

  it('setScope writes the consent cookie and emits a POST', () => {
    consentStore.init();
    consentStore.setScope({ analytics: true, marketing: false });
    expect(document.cookie).toContain('lolsensei_consent');
    expect(global.fetch).toHaveBeenCalled();
  });

  it('revokeAll resets analytics + marketing to false', () => {
    consentStore.init();
    consentStore.setScope({ analytics: true, marketing: true });
    consentStore.revokeAll();
    expect(consentStore.scope.analytics).toBe(false);
    expect(consentStore.scope.marketing).toBe(false);
    expect(consentStore.scope.technical).toBe(true);
  });

  it('hasConsent(technical) is always true, others follow scope', () => {
    consentStore.init();
    expect(consentStore.hasConsent('technical')).toBe(true);
    expect(consentStore.hasConsent('analytics')).toBe(false);
    consentStore.setScope({ analytics: true });
    expect(consentStore.hasConsent('analytics')).toBe(true);
  });

  it('openCenter/closeCenter toggle centerOpen', () => {
    consentStore.init();
    expect(consentStore.centerOpen).toBe(false);
    consentStore.openCenter();
    expect(consentStore.centerOpen).toBe(true);
    consentStore.closeCenter();
    expect(consentStore.centerOpen).toBe(false);
  });
});
