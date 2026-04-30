import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
  type Locale,
} from '../types/locale';
import { safeGet } from '../utils/storage';

export function normalizeNavigatorLang(raw: string): Locale | null {
  if (!raw) return null;
  const lower = raw.toLowerCase();

  if (lower === 'zh-cn' || lower === 'zh' || lower === 'zh-hans' || lower.startsWith('zh-hans')) {
    return 'zh-hans';
  }
  if (lower === 'pt-br' || lower.startsWith('pt-br')) {
    return 'pt-br';
  }

  if (isValidLocale(lower)) return lower;

  const base = lower.split('-')[0];
  const match = (SUPPORTED_LOCALES as readonly string[]).find((l) => l === base);
  return match ? (match as Locale) : null;
}

export function detectInitialLocale(): Locale {
  const stored = safeGet('locale');
  if (stored && isValidLocale(stored)) return stored;

  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;

  const langs = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : navigator.language
      ? [navigator.language]
      : [];

  for (const raw of langs) {
    const match = normalizeNavigatorLang(raw);
    if (match) return match;
  }

  return DEFAULT_LOCALE;
}
