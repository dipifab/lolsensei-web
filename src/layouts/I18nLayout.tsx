import { createEffect, onCleanup, Show } from 'solid-js';
import { isServer } from 'solid-js/web';
import type { RouteSectionProps } from '@solidjs/router';
import { useParams } from '@solidjs/router';
import { I18nProvider, isValidLocale, DEFAULT_LOCALE } from '../i18n';
import CookieBanner from '../components/CookieBanner';
import CFAnalytics from '../components/CFAnalytics';
import ToastContainer from '../components/ui/Toast';

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

  return (
    <I18nProvider>
      {props.children}
      {/* WP24 TASK-3-022: cookie banner + toast globali, client-only (Show gate SSR). */}
      <Show when={!isServer}>
        <CookieBanner />
        <ToastContainer />
        <CFAnalytics />
      </Show>
    </I18nProvider>
  );
}
