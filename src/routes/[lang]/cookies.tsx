// WP24 TASK-3-013 — Cookie Policy route (MDX SSG).
import { Link, Meta, Title } from '@solidjs/meta';
import { ErrorBoundary, Show, onMount } from 'solid-js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { useI18n } from '../../i18n';
import { BASE_URL } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import CookiesEN from '../../content/cookie-policy.en.mdx';
import CookiesIT from '../../content/cookie-policy.it.mdx';

const POLICY_VERSION =
  (import.meta.env.VITE_PRIVACY_POLICY_VERSION as string | undefined) ?? '1.0.0';

export default function CookiesRoute() {
  const { t, locale, loadLegal } = useI18n();
  onMount(() => { void loadLegal(); });
  const canonical = () => `${BASE_URL}/${canonicalLocale(locale())}/cookies`;
  const pageTitle = () => `${t('cookies.title')} — LoL Sensei`;

  return (
    <>
      <Title>{pageTitle()}</Title>
      <Meta name="description" content="LoL Sensei cookie inventory: names, purpose, duration, and how to manage your preferences." />
      <Link rel="canonical" href={canonical()} />
      <HreflangCluster path="cookies" baseUrl={BASE_URL} />
      <Navbar />
      <main class="mx-auto max-w-[65ch] px-6 py-10 md:py-16 text-on-surface prose prose-sm md:prose prose-invert prose-headings:font-headline prose-a:text-primary-container">
        <div class="mb-6 text-xs uppercase tracking-wider text-on-surface/60">
          {t('privacy.version_label')}: <span class="font-mono">{POLICY_VERSION}</span>
        </div>
        <ErrorBoundary
          fallback={
            <div>
              <p>
                The full cookie policy is temporarily unavailable in this language.
                For any privacy-related inquiry, contact{' '}
                <a href="mailto:privacy@lolsensei.com">privacy@lolsensei.com</a>.
              </p>
              <p>
                English version: <a href={`${BASE_URL}/en/cookies`}>lolsensei.com/en/cookies</a>
                {' · '}
                Italian version: <a href={`${BASE_URL}/it/cookies`}>lolsensei.com/it/cookies</a>.
              </p>
            </div>
          }
        >
          <Show when={locale() === 'it'} fallback={<CookiesEN />}>
            <CookiesIT />
          </Show>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
