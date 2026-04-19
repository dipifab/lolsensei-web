import { Show } from 'solid-js';
import { useLocation } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { I18nProvider, useI18n } from '../i18n';
import Icon from '../components/Icon';

// Fallback usato quando NotFoundPage viene raggiunto da un percorso fuori
// da ``I18nProvider`` (es. /admin/*, catch-all di App.tsx). ``useI18n``
// lancia se non c'e' provider: la chiamata va protetta.
function tryUseI18n(): ReturnType<typeof useI18n> | null {
  try {
    return useI18n();
  } catch {
    return null;
  }
}

const FALLBACK = {
  title: 'Page not found',
  description:
    "The page you're looking for doesn't exist or has been moved.",
  cta: 'Back to home',
  legacyAdminTitle: 'The admin console has moved.',
  legacyAdminBodyBefore: 'Use the new path to sign in:',
  legacyAdminLinkLabel: '/console-login',
};

export function NotFoundContent() {
  const i18n = tryUseI18n();
  const t = (key: string): string => {
    if (i18n) return i18n.t(key);
    if (key === 'notFound.title') return FALLBACK.title;
    if (key === 'notFound.description') return FALLBACK.description;
    if (key === 'notFound.cta') return FALLBACK.cta;
    if (key === 'notFound.legacyAdmin.title') return FALLBACK.legacyAdminTitle;
    if (key === 'notFound.legacyAdmin.bodyBefore') return FALLBACK.legacyAdminBodyBefore;
    if (key === 'notFound.legacyAdmin.linkLabel') return FALLBACK.legacyAdminLinkLabel;
    return key;
  };
  const locale = () => (i18n ? i18n.locale() : 'en');

  const location = useLocation();

  // U19: i bookmark legacy /admin/* cadono qui (WP21 ha spostato la console
  // su /console/*). Mostriamo un banner informativo con link esplicito.
  const isLegacyAdminPath = () => location.pathname.startsWith('/admin');

  return (
    <main class="min-h-screen flex items-center justify-center px-8">
      <div class="text-center">
        <Show when={isLegacyAdminPath()}>
          <div
            role="alert"
            class="mx-auto mb-6 max-w-md rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-left text-sm text-warning"
          >
            <p class="font-semibold">{t('notFound.legacyAdmin.title')}</p>
            <p class="mt-1">
              {t('notFound.legacyAdmin.bodyBefore')}{' '}
              <a
                href="/console-login"
                class="font-semibold underline focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
              >
                {t('notFound.legacyAdmin.linkLabel')}
              </a>
              .
            </p>
          </div>
        </Show>
        <p class="text-8xl font-extrabold text-primary-container/20 font-headline mb-4">404</p>
        <h1 class="text-3xl font-extrabold tracking-tight mb-4 font-headline">{t('notFound.title')}</h1>
        <p class="text-on-surface-variant mb-8 max-w-md mx-auto">
          {t('notFound.description')}
        </p>
        <a
          href={`/${locale()}`}
          class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
        >
          <Icon name="arrow_back" class="w-5 h-5" />
          {t('notFound.cta')}
        </a>
      </div>
    </main>
  );
}

export default function NotFoundPage() {
  // Wrap con I18nProvider: catch-all route "*" vive fuori da I18nLayout
  // (vedi App.tsx), e Navbar/Footer usano useI18n unguarded.
  return (
    <I18nProvider>
      <Navbar />
      <NotFoundContent />
      <Footer />
    </I18nProvider>
  );
}
