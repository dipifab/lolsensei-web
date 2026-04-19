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
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
  type Locale,
} from '../types/locale';
import { safeSet } from '../utils/storage';

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, isValidLocale, type Locale };

type TranslationKey = keyof typeof en;
type Translations = Record<TranslationKey, string>;

const loaders: Record<Locale, () => Promise<Translations>> = {
  en: () => Promise.resolve(en),
  it: () => import('./it').then((m) => m.default as unknown as Translations),
  ko: () => import('./ko').then((m) => m.default as unknown as Translations),
  'zh-Hans': () => import('./zh-Hans').then((m) => m.default as unknown as Translations),
  'pt-br': () => import('./pt-br').then((m) => m.default as unknown as Translations),
  es: () => import('./es').then((m) => m.default as unknown as Translations),
  fr: () => import('./fr').then((m) => m.default as unknown as Translations),
  de: () => import('./de').then((m) => m.default as unknown as Translations),
};

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
      if (locale() === currentLocale) {
        setLoadedTranslations(translations);
      }
    });
  });

  const t = (key: string): string => {
    const current = loadedTranslations();
    const value = current[key as TranslationKey];
    if (value !== undefined) return value;

    const fallback = en[key as TranslationKey];
    if (fallback !== undefined) return fallback;

    return key;
  };

  const setLocale = (lang: Locale) => {
    safeSet('locale', lang);

    const currentPath = location.pathname;
    const currentLocale = locale();

    const prefix = `/${currentLocale}`;
    const pagePath = currentPath.startsWith(prefix)
      ? currentPath.slice(prefix.length) || '/'
      : currentPath;

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
