// WP24 TASK-3-022 — Cloudflare Web Analytics script (cookieless).
// Mount condizionato al consenso analytics. Graceful degrade se env assenti.
import { createEffect } from 'solid-js';
import { isServer } from 'solid-js/web';
import { consentStore } from '../stores/consentStore';

const TOKEN = (import.meta.env.VITE_CF_ANALYTICS_TOKEN as string | undefined) ?? '';
const SRI = (import.meta.env.VITE_CF_BEACON_SRI as string | undefined) ?? '';
const BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js';
const SCRIPT_ID = 'cf-web-analytics';

export default function CFAnalytics() {
  createEffect(() => {
    if (isServer) return;
    if (!TOKEN) return;
    if (!consentStore.hasConsent('analytics')) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.defer = true;
    s.src = BEACON_SRC;
    s.crossOrigin = 'anonymous';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: TOKEN }));
    if (SRI) s.integrity = SRI;
    document.head.appendChild(s);
  });

  return null;
}
