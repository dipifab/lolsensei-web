import { Navigate, type RouteSectionProps } from '@solidjs/router';
import { Show, createMemo } from 'solid-js';
import { canonicalLocale, isSupportedLocale } from '../lib/i18n/locales';
import I18nLayout from '../layouts/I18nLayout';

/**
 * File-based route layout for `/[lang]/*` (SolidStart WP18).
 *
 * Validation semantics:
 * - Accepts any casing via `canonicalLocale` (e.g. `zh-hans` -> `zh-Hans`).
 * - Falls back to `/en/` on unsupported locales.
 *
 * I18nLayout consumes RouteSectionProps (reads `params.lang` internally via
 * useParams and wraps children with <I18nProvider>). This layout therefore
 * forwards the section props directly — no `lang` prop is passed.
 */
export default function LangLayout(props: RouteSectionProps) {
  const valid = createMemo(() => {
    const raw = props.params.lang;
    if (!raw) return false;
    return isSupportedLocale(canonicalLocale(raw));
  });

  return (
    <Show when={valid()} fallback={<Navigate href="/en/" />}>
      <I18nLayout {...props} />
    </Show>
  );
}
