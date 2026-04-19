import { createEffect, onCleanup } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { useParams } from '@solidjs/router';
import { I18nProvider, isValidLocale, DEFAULT_LOCALE } from '../i18n';

export default function I18nLayout(props: RouteSectionProps) {
  const params = useParams<{ lang?: string }>();

  createEffect(() => {
    const lang = params.lang;
    const resolved = lang && isValidLocale(lang) ? lang : DEFAULT_LOCALE;
    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolved;
    }
  });

  onCleanup(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = DEFAULT_LOCALE;
    }
  });

  return <I18nProvider>{props.children}</I18nProvider>;
}
