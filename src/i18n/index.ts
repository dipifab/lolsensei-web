import {
  createContext,
  useContext,
  createMemo,
  createSignal,
  createEffect,
  type JSX,
} from 'solid-js';
import { useParams, useNavigate, useLocation } from '@solidjs/router';
import en from './en';

export const SUPPORTED_LOCALES = ['en', 'it', 'ko', 'zh', 'pt-br', 'es', 'fr', 'de'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

type TranslationKey = keyof typeof en;
type Translations = Record<TranslationKey, string>;

const loaders: Record<Locale, () => Promise<Translations>> = {
  en: () => Promise.resolve(en),
  it: () => import('./it').then((m) => m.default as Translations),
  ko: () => import('./ko').then((m) => m.default as Translations),
  zh: () => import('./zh').then((m) => m.default as Translations),
  'pt-br': () => import('./pt-br').then((m) => m.default as Translations),
  es: () => import('./es').then((m) => m.default as Translations),
  fr: () => import('./fr').then((m) => m.default as Translations),
  de: () => import('./de').then((m) => m.default as Translations),
};

export function isValidLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

interface I18nContextValue {
  t: (key: string) => string;
  locale: () => Locale;
  setLocale: (lang: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>();

export function I18nProvider(props: { children: JSX.Element }) {
  const params = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const locale = createMemo<Locale>(() => {
    const lang = params.lang;
    if (lang && isValidLocale(lang)) return lang;
    return DEFAULT_LOCALE;
  });

  const [loadedTranslations, setLoadedTranslations] = createSignal<Translations>(en);

  createEffect(() => {
    const currentLocale = locale();

    if (currentLocale === 'en') {
      setLoadedTranslations(en);
      return;
    }

    const loader = loaders[currentLocale];
    loader().then((translations) => {
      // Only apply if locale hasn't changed during the async load
      if (locale() === currentLocale) {
        setLoadedTranslations(translations);
      }
    });
  });

  const t = (key: string): string => {
    const current = loadedTranslations();
    const value = current[key as TranslationKey];
    if (value !== undefined) return value;

    // Fallback to English
    const fallback = en[key as TranslationKey];
    if (fallback !== undefined) return fallback;

    return key;
  };

  const setLocale = (lang: Locale) => {
    const currentPath = location.pathname;
    const currentLocale = locale();

    // Strip the current locale prefix to get the page path
    const prefix = `/${currentLocale}`;
    const pagePath = currentPath.startsWith(prefix)
      ? currentPath.slice(prefix.length) || '/'
      : currentPath;

    // Navigate to the same page in the new locale
    const newPath = pagePath === '/' ? `/${lang}` : `/${lang}${pagePath}`;
    navigate(newPath);
  };

  const value: I18nContextValue = { t, locale, setLocale };

  return I18nContext.Provider({ value, get children() { return props.children; } });
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
