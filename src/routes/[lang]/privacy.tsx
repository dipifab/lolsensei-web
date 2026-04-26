// WP24 TASK-3-012 — Privacy Policy route (MDX SSG).
// Build-time inline `VITE_PRIVACY_POLICY_VERSION` come badge versione.
//
// WP30 TASK-WP30-F3-05 — Append "summoner opt-out" section after the MDX body.
// The MDX bodies (EN+IT) are kept untouched; the bilingual MDX is the canonical
// long-form privacy policy. The opt-out section is rendered as a sibling
// `<section>` so the GDPR Art. 12 disclosure is part of every locale (EN
// fallback for the 6 non-bilingual locales).
import { Link, Meta, Title } from '@solidjs/meta';
import { ErrorBoundary, Show, onMount } from 'solid-js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HreflangCluster } from '../../components/seo/HreflangCluster';
import { SummonerOptOutSection } from '../../components/wp30/SummonerOptOutSection';
import { useI18n } from '../../i18n';
import { BASE_URL } from '../../lib/seo/routes';
import { canonicalLocale } from '../../lib/i18n/locales';
import PrivacyEN from '../../content/privacy-policy.en.mdx';
import PrivacyIT from '../../content/privacy-policy.it.mdx';

const POLICY_VERSION =
  (import.meta.env.VITE_PRIVACY_POLICY_VERSION as string | undefined) ?? '1.0.0';

export default function PrivacyRoute() {
  const { t, locale, loadLegal } = useI18n();
  onMount(() => { void loadLegal(); });
  const canonical = () => `${BASE_URL}/${canonicalLocale(locale())}/privacy`;
  const pageTitle = () => `${t('privacy.page_title')} — LoL Sensei`;

  return (
    <>
      <Title>{pageTitle()}</Title>
      <Meta name="description" content="LoL Sensei privacy policy: what data we collect, processors, retention, and your GDPR rights." />
      <Link rel="canonical" href={canonical()} />
      <HreflangCluster path="privacy" baseUrl={BASE_URL} />
      <Navbar />
      <main class="mx-auto max-w-[65ch] px-6 py-10 md:py-16 text-on-surface prose prose-sm md:prose prose-invert prose-headings:font-headline prose-a:text-primary-container">
        <div class="mb-6 text-xs uppercase tracking-wider text-on-surface/60">
          {t('privacy.version_label')}: <span class="font-mono">{POLICY_VERSION}</span>
        </div>
        <ErrorBoundary
          fallback={
            <div>
              <p>
                The full privacy policy is temporarily unavailable in this language.
                For any privacy-related inquiry, contact{' '}
                <a href="mailto:privacy@lolsensei.com">privacy@lolsensei.com</a>.
              </p>
              <p>
                English version: <a href={`${BASE_URL}/en/privacy`}>lolsensei.com/en/privacy</a>
                {' · '}
                Italian version: <a href={`${BASE_URL}/it/privacy`}>lolsensei.com/it/privacy</a>.
              </p>
            </div>
          }
        >
          <Show when={locale() === 'it'} fallback={<PrivacyEN />}>
            <PrivacyIT />
          </Show>
        </ErrorBoundary>
        <SummonerOptOutSection />
      </main>
      <Footer />
    </>
  );
}
