import { type RouteSectionProps } from '@solidjs/router';
import { Show, createMemo } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import { canonicalLocale, isSupportedLocale } from '../lib/i18n/locales';
import I18nLayout from '../layouts/I18nLayout';
import { NoindexMeta } from '../components/seo/NoindexMeta';
import BareLayout from '../layouts/BareLayout';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * File-based route layout for `/[lang]/*` (SolidStart WP18).
 *
 * Validation semantics:
 * - Accepts any casing via `canonicalLocale` (e.g. `zh-hans` -> `zh-Hans`).
 * - Renders 404 on unsupported locales so unknown top-level segments
 *   (e.g. `/nonexistent`) surface as real HTTP 404 rather than a
 *   client-side redirect loop against `/en/` (which would mask crawl
 *   errors and produce a soft-404 signal for search engines).
 */
export default function LangLayout(props: RouteSectionProps) {
  const valid = createMemo(() => {
    const raw = props.params.lang;
    if (!raw) return false;
    return isSupportedLocale(canonicalLocale(raw));
  });

  const renderNotFound = () => {
    // SSR-only: stamp the HTTP status so the server-handler emits a real
    // 404. Client-side navigations set no status which is intentional.
    const event = getRequestEvent();
    if (event) {
      event.response.status = 404;
    }
    return (
      <>
        <NoindexMeta />
        <BareLayout variant="404">
          <NotFoundPage />
        </BareLayout>
      </>
    );
  };

  return (
    <Show when={valid()} fallback={renderNotFound()}>
      <I18nLayout {...props} />
    </Show>
  );
}
