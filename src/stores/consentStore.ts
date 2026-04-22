// WP24 TASK-3-006 — Consent store globale SolidJS.
// Client-only: init() in onMount, guard SSR su ogni path che legge document.
// REQ-F-024-001/003/008/012/013.
import { createSignal } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { deleteCookie, readCookie, writeCookie } from '../lib/cookie';
import {
  getConsentSiteCurrent,
  postConsentSite,
  type ConsentScope,
} from '../lib/consent';
import { getJwt } from '../auth/store';

const COOKIE_CONSENT = 'lolsensei_consent';
const COOKIE_ANON = 'lolsensei_anon';

const ENV_PRIVACY_VERSION =
  ((import.meta.env.VITE_PRIVACY_POLICY_VERSION as string | undefined) ?? '1.0.0');

interface ConsentStoreShape {
  scope: ConsentScope;
  anonymousId: string;
  privacyVersion: string | null;
  lastUpdatedAt: string | null;
  centerOpen: boolean;
}

const DEFAULT_SCOPE: ConsentScope = {
  technical: true,
  analytics: false,
  marketing: false,
};

const [state, setState] = createStore<ConsentStoreShape>({
  scope: { ...DEFAULT_SCOPE },
  anonymousId: '',
  privacyVersion: null,
  lastUpdatedAt: null,
  centerOpen: false,
});

const [hydrated, setHydrated] = createSignal(false);

// Semver MAJOR parser minimale (no dep esterne).
function parseMajor(version: string | null | undefined): number | null {
  if (!version) return null;
  const match = /^(\d+)\./.exec(version);
  return match ? Number(match[1]) : null;
}

function genAnonymousId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  // Fallback best-effort (SSR impedisce comunque l'arrivo qui in prod).
  const rnd = Math.random().toString(16).slice(2);
  return `00000000-0000-4000-8000-${rnd.padEnd(12, '0').slice(0, 12)}`;
}

function isBrowser(): boolean {
  return typeof document !== 'undefined';
}

export const consentStore = {
  get scope(): ConsentScope {
    return state.scope;
  },
  get anonymousId(): string {
    return state.anonymousId;
  },
  get privacyVersion(): string | null {
    return state.privacyVersion;
  },
  get centerOpen(): boolean {
    return state.centerOpen;
  },

  shouldPrompt(): boolean {
    // Plain function (no createMemo) — la reactivity viene comunque catturata dai
    // componenti che leggono `hydrated()` + `state.privacyVersion` in SolidJS.
    if (!hydrated()) return false;
    if (!state.privacyVersion) return true;
    const currentMajor = parseMajor(ENV_PRIVACY_VERSION);
    const storedMajor = parseMajor(state.privacyVersion);
    return currentMajor === null || storedMajor === null || currentMajor !== storedMajor;
  },

  hasConsent(cat: 'technical' | 'analytics' | 'marketing'): boolean {
    if (cat === 'technical') return true;
    return hydrated() && state.scope[cat] === true;
  },

  openCenter(): void {
    setState('centerOpen', true);
  },
  closeCenter(): void {
    setState('centerOpen', false);
  },

  init(): void {
    if (!isBrowser() || hydrated()) return;

    // 1. Hydrate anonymous_id
    let anon = readCookie(COOKIE_ANON);
    if (!anon) {
      anon = genAnonymousId();
      writeCookie(COOKIE_ANON, anon);
    }

    // 2. Hydrate scope + privacy_version from cookie (se presente)
    const raw = readCookie(COOKIE_CONSENT);
    let parsedScope: ConsentScope | null = null;
    let parsedVersion: string | null = null;
    let parsedUpdatedAt: string | null = null;
    if (raw) {
      try {
        const obj = JSON.parse(raw) as {
          scope?: Partial<ConsentScope>;
          privacy_version?: string;
          last_updated_at?: string;
        };
        if (obj.scope) {
          parsedScope = {
            technical: true,
            analytics: obj.scope.analytics === true,
            marketing: obj.scope.marketing === true,
          };
        }
        parsedVersion = obj.privacy_version ?? null;
        parsedUpdatedAt = obj.last_updated_at ?? null;
      } catch {
        // cookie corrotto: ignora e forza re-prompt
      }
    }

    setState(
      produce((s) => {
        s.anonymousId = anon!;
        if (parsedScope) s.scope = parsedScope;
        s.privacyVersion = parsedVersion;
        s.lastUpdatedAt = parsedUpdatedAt;
      }),
    );

    setHydrated(true);
  },

  setScope(partial: Partial<ConsentScope>): void {
    const merged: ConsentScope = {
      technical: true,
      analytics: partial.analytics ?? state.scope.analytics,
      marketing: partial.marketing ?? state.scope.marketing,
    };
    const now = new Date().toISOString();
    setState(
      produce((s) => {
        s.scope = merged;
        s.privacyVersion = ENV_PRIVACY_VERSION;
        s.lastUpdatedAt = now;
      }),
    );

    // Cookie sync (client only)
    if (isBrowser()) {
      const payload = JSON.stringify({
        scope: merged,
        privacy_version: ENV_PRIVACY_VERSION,
        last_updated_at: now,
      });
      writeCookie(COOKIE_CONSENT, payload);
    }

    // Fire-and-forget POST. Store resta autoritativo.
    if (isBrowser()) {
      void postConsentSite(
        {
          anonymous_id: state.anonymousId || null,
          scope: merged,
          privacy_version: ENV_PRIVACY_VERSION,
          client_platform: 'web',
        },
        getJwt(),
      ).catch(() => {
        // silenzioso: lo store autoritativo, retry al prossimo cambio
      });
    }
  },

  revokeAll(): void {
    this.setScope({ analytics: false, marketing: false });
  },

  // Esposto per test + scenari di reset
  _reset(): void {
    setState({
      scope: { ...DEFAULT_SCOPE },
      anonymousId: '',
      privacyVersion: null,
      lastUpdatedAt: null,
      centerOpen: false,
    });
    setHydrated(false);
    if (isBrowser()) {
      deleteCookie(COOKIE_CONSENT);
      deleteCookie(COOKIE_ANON);
    }
  },

  async refreshFromServer(): Promise<void> {
    if (!isBrowser() || !state.anonymousId) return;
    try {
      const current = await getConsentSiteCurrent(state.anonymousId);
      if (!current) return;
      setState(
        produce((s) => {
          s.scope = current.scope;
          s.privacyVersion = current.privacy_version;
          s.lastUpdatedAt = current.granted_at;
        }),
      );
    } catch {
      // fallback: store locale resta autoritativo
    }
  },
};

// Helper per test/mount hook
export const consentHydrated = hydrated;
