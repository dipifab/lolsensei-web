import {
  createContext,
  useContext,
  createMemo,
  type JSX,
} from 'solid-js';
import { useParams, useNavigate, useLocation } from '@solidjs/router';
import en from './en';
import it from './it';
import ko from './ko';
import zh from './zh';
import ptBr from './pt-br';
import es from './es';
import fr from './fr';
import de from './de';

export const SUPPORTED_LOCALES = ['en', 'it', 'ko', 'zh', 'pt-br', 'es', 'fr', 'de'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

type TranslationKey = keyof typeof en;
type Translations = Record<TranslationKey, string>;

const LOCALE_MAP: Record<Locale, Translations> = {
  en,
  it: it as Translations,
  ko: ko as Translations,
  zh: zh as Translations,
  'pt-br': ptBr as Translations,
  es: es as Translations,
  fr: fr as Translations,
  de: de as Translations,
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

  const translations = createMemo(() => LOCALE_MAP[locale()]);

  const t = (key: string): string => {
    const current = translations();
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
