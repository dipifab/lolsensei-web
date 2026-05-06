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
import it from './it';
import es from './es';
import fr from './fr';
import de from './de';
import ptBr from './pt-br';
import ko from './ko';
import zhHans from './zh-hans';
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
  type Locale,
} from '../types/locale';
import { safeSet } from '../utils/storage';

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, isValidLocale, type Locale };

type BaseTranslationKey = keyof typeof en;
type BaseTranslations = Record<BaseTranslationKey, string>;
// Le chiavi legal (consent/privacy/cookies/age-gate/settings.privacy) sono
// caricate solo dinamicamente: nessun import statico, cosi' il chunk entry-layer
// non le inlinea (condizione del bundle-guard WP24).
type LegalTranslations = Record<string, string>;

// CR-067 fix (2026-05-06) — base bundle ora STATICO per tutti i locali.
// Era dynamic import async, che durante SSR (sync) non si risolveva in tempo
// e il signal restava su `en`, producendo HTML SSR sempre in inglese anche
// per /it/, /de/, /ko/, ecc. Il fallback EN persiste fino al next render
// post-hydrate, ma alcuni testi in posizioni "statiche" del DOM SSR non
// venivano mai aggiornati. Ora `baseTranslations[locale]` e' sync, sia in
// SSR che in client, e il `t()` ritorna immediatamente la stringa giusta.
//
// Cost: i 6 dataset extra (~99 KB raw cad. = ~600 KB raw, ~150 KB gz) entrano
// nel bundle Worker entry. Bundle pre-fix ~1.2 MiB gz, post-fix stimato
// ~1.4 MiB gz. Margine ampio rispetto al cap Cloudflare Workers Free 3 MiB.
//
// Cast `unknown` necessario perche' i 7 file non-EN dichiarano la propria
// shape che e' un superset/sottoinsieme di `BaseTranslations` (tipo derivato
// da `keyof typeof en`); l'enforcement reale e' nello script `check-i18n-keys.mjs`.
const baseTranslations: Record<Locale, BaseTranslations> = {
  en,
  it: it as unknown as BaseTranslations,
  es: es as unknown as BaseTranslations,
  fr: fr as unknown as BaseTranslations,
  de: de as unknown as BaseTranslations,
  'pt-br': ptBr as unknown as BaseTranslations,
  ko: ko as unknown as BaseTranslations,
  'zh-hans': zhHans as unknown as BaseTranslations,
};

const legalLoaders: Record<Locale, () => Promise<LegalTranslations>> = {
  en: () => import('./legal/en').then((m) => m.default as unknown as LegalTranslations),
  it: () => import('./legal/it').then((m) => m.default as unknown as LegalTranslations),
  ko: () => import('./legal/ko').then((m) => m.default as unknown as LegalTranslations),
  'zh-hans': () =>
    import('./legal/zh-hans').then((m) => m.default as unknown as LegalTranslations),
  'pt-br': () => import('./legal/pt-br').then((m) => m.default as unknown as LegalTranslations),
  es: () => import('./legal/es').then((m) => m.default as unknown as LegalTranslations),
  fr: () => import('./legal/fr').then((m) => m.default as unknown as LegalTranslations),
  de: () => import('./legal/de').then((m) => m.default as unknown as LegalTranslations),
};

interface I18nContextValue {
  t: (key: string) => string;
  locale: () => Locale;
  setLocale: (lang: Locale) => void;
  /**
   * Lazy-load il bundle legale (consent/privacy/cookies/age-gate) per la lingua
   * corrente piu' il fallback EN. Idempotente: chiamate successive riusano la
   * promise in cache. Da invocare in onMount dei componenti che leggono chiavi
   * legal (CookieBanner, PreferenceCenter, Footer, pagine privacy/cookies/
   * settings-privacy, age gate). Durante il caricamento `t('consent.*')`
   * ritorna la chiave; i consumer devono gate-are il render (tipicamente
   * gia' presente perche' i banner attendono `mounted()`).
   */
  loadLegal: () => Promise<void>;
}

const I18nContext = createContext<I18nContextValue>();

// Cache module-level: sopravvive al remount del provider e condivide
// promise/valori tra istanze (in pratica c'e' un solo provider, ma il pattern
// e' safe anche se Solid rimonta il tree).
const legalCache = new Map<Locale, Promise<LegalTranslations>>();

function getLegal(lang: Locale): Promise<LegalTranslations> {
  const cached = legalCache.get(lang);
  if (cached) return cached;
  const p = legalLoaders[lang]();
  legalCache.set(lang, p);
  return p;
}

export function I18nProvider(props: { children: JSX.Element }) {
  const params = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const locale = createMemo<Locale>(() => {
    const lang = params.lang;
    if (lang && isValidLocale(lang)) return lang;
    return DEFAULT_LOCALE;
  });

  // CR-067 fix — sync lookup nel record statico. Reattivo perche' `locale()`
  // e' un createMemo che dipende da `params.lang`. Quando l'utente naviga
  // /en/... -> /de/..., il memo aggiorna e i consumer di `t()` re-renderano.
  const loadedTranslations = createMemo<BaseTranslations>(
    () => baseTranslations[locale()] ?? en,
  );
  // Legal per la lingua corrente + fallback EN: due mappe indipendenti.
  const [legalCurrent, setLegalCurrent] = createSignal<LegalTranslations>({});
  const [legalEn, setLegalEn] = createSignal<LegalTranslations>({});
  const [legalRequested, setLegalRequested] = createSignal(false);

  createEffect(() => {
    const currentLocale = locale();
    // Se il legal era gia' stato richiesto (es. banner mount precedente al
    // cambio lingua), ricarichiamo il legal nella nuova lingua per mantenere
    // la UI coerente.
    if (legalRequested()) {
      getLegal(currentLocale).then((legalT) => {
        if (locale() === currentLocale) {
          setLegalCurrent(legalT);
        }
      });
    }
  });

  const loadLegal = async (): Promise<void> => {
    setLegalRequested(true);
    const currentLocale = locale();
    const promises: Promise<void>[] = [
      getLegal(currentLocale).then((legalT) => {
        if (locale() === currentLocale) setLegalCurrent(legalT);
      }),
    ];
    if (currentLocale !== 'en') {
      promises.push(
        getLegal('en').then((legalT) => {
          setLegalEn(legalT);
        }),
      );
    }
    await Promise.all(promises);
  };

  const t = (key: string): string => {
    const base = loadedTranslations();
    const legalL = legalCurrent();
    const legalEnL = legalEn();

    // Lookup order: legal (per-locale) > base (per-locale) > legal-EN fallback
    // > base-EN fallback > key stessa.
    const legalVal = legalL[key];
    if (legalVal !== undefined) return legalVal;

    const baseVal = base[key as BaseTranslationKey];
    if (baseVal !== undefined) return baseVal;

    const enLegalVal = legalEnL[key];
    if (enLegalVal !== undefined) return enLegalVal;

    const enBaseVal = en[key as BaseTranslationKey];
    if (enBaseVal !== undefined) return enBaseVal;

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

  const value: I18nContextValue = { t, locale, setLocale, loadLegal };

  return I18nContext.Provider({ value, get children() { return props.children; } });
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
