const parseBool = (raw: unknown, fallback: boolean): boolean => {
  if (typeof raw !== 'string') return fallback;
  return raw.toLowerCase() === 'true';
};

export const ENV = Object.freeze({
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'https://api.lolsensei.com',
  publicPagesEnabled: parseBool(import.meta.env.VITE_PUBLIC_PAGES_ENABLED, false),
  consentBannerEnabled: parseBool(import.meta.env.VITE_CONSENT_BANNER_ENABLED, false),
  buildVersion: (import.meta.env.VITE_BUILD_VERSION as string | undefined) ?? 'dev',
});

export type Env = typeof ENV;
