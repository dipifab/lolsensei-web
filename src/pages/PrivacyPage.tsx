import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { usePageMeta } from '../utils/seo';
import { useI18n } from '../i18n';
import Icon from '../components/Icon';
import LegalSection from '../components/LegalSection';

export default function PrivacyPage() {
  usePageMeta('privacy', '/privacy');
  const { t, locale } = useI18n();

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('privacy.title'), path: '/privacy' },
        ]}
      />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header class="mb-20 max-w-3xl">
          <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
            {t('privacy.label')}
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
            {t('privacy.title')} <span class="text-primary">{t('privacy.titleHighlight')}</span>
          </h1>
          <p class="text-on-surface-variant text-lg leading-relaxed">
            {t('privacy.intro')}
          </p>
          <p class="text-on-surface-variant/60 text-sm mt-4">
            {t('privacy.lastUpdated')}
          </p>
        </header>

        {/* Policy Content */}
        <div class="max-w-3xl space-y-0">

          {/* Section: Introduction */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.introduction.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
              {t('privacy.introduction.p1')}
            </p>
            <p class="text-on-surface-variant leading-relaxed">
              {t('privacy.introduction.p2.before')}{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>
              {t('privacy.introduction.p2.after')}
            </p>
          </section>

          {/* Section: Data We Collect */}
          <section id="data-collect" class="pb-10 mb-10 border-b border-outline-variant/10 scroll-mt-32">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.dataCollect.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              {t('privacy.dataCollect.intro')}
            </p>

            <div class="space-y-6">
              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  {t('privacy.dataCollect.account.title')}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.dataCollect.account.description')}
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  {t('privacy.dataCollect.lol.title')}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.dataCollect.lol.description')}
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  {t('privacy.dataCollect.gameplay.title')}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.dataCollect.gameplay.description')}
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  {t('privacy.dataCollect.payment.title')}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.dataCollect.payment.description.before')}{' '}
                  <span class="text-secondary font-medium">{t('privacy.dataCollect.payment.description.highlight')}</span>{' '}
                  {t('privacy.dataCollect.payment.description.after')}
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  {t('privacy.dataCollect.analytics.title')}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.dataCollect.analytics.description')}
                </p>
              </div>
            </div>
          </section>

          {/* WP20 — Cookies (REQ-F-020-006) */}
          <LegalSection id="cookies" title={t('privacy.cookies.title')} class="pb-10 border-b border-outline-variant/10">
            <p>{t('privacy.cookies.body')}</p>
          </LegalSection>

          {/* WP20 — GDPR Art. 6 legal basis mapping (REQ-F-020-007) */}
          <LegalSection id="gdpr-basis" title="GDPR Art. 6 legal basis" class="pb-10 border-b border-outline-variant/10">
            <p>{t('privacy.howWeUse.intro')}</p>
            <ul class="list-disc pl-6 space-y-2 mt-2">
              <li>{t('privacy.howWeUse.auth')}</li>
              <li>{t('privacy.howWeUse.ai')}</li>
              <li>{t('privacy.howWeUse.payment')}</li>
              <li>{t('privacy.howWeUse.analytics')}</li>
              <li>{t('privacy.howWeUse.riotId')}</li>
            </ul>
          </LegalSection>

          {/* WP20 — International transfers SCC/DPF (REQ-F-020-008) */}
          <LegalSection id="data-transfers" title={t('privacy.transfer.title')} class="pb-10 border-b border-outline-variant/10">
            <p>{t('privacy.transfer.scc.intro')}</p>
            <ul class="list-disc pl-6 space-y-2 mt-2">
              <li>{t('privacy.transfer.scc.stripe')}</li>
              <li>{t('privacy.transfer.scc.cloudflare')}</li>
              <li>{t('privacy.transfer.scc.anthropic')}</li>
            </ul>
            <p class="text-sm text-on-surface-variant/70">{t('privacy.transfer.scc.note')}</p>
          </LegalSection>

          {/* Section: How We Use Your Data */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.howWeUse.title')}
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon name="psychology_filled" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.howWeUse.ai.label')}</span>{' '}
                  &mdash; {t('privacy.howWeUse.ai.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="tune_filled" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.howWeUse.coaching.label')}</span>{' '}
                  &mdash; {t('privacy.howWeUse.coaching.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="credit_card_filled" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.howWeUse.payment.label')}</span>{' '}
                  &mdash; {t('privacy.howWeUse.payment.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="trending_up" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.howWeUse.improvement.label')}</span>{' '}
                  &mdash; {t('privacy.howWeUse.improvement.description')}
                </p>
              </li>
            </ul>
          </section>

          {/* Section: Third-Party Services */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.thirdParty.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              {t('privacy.thirdParty.intro')}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">{t('privacy.thirdParty.riot.title')}</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.thirdParty.riot.description')}
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">{t('privacy.thirdParty.google.title')}</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.thirdParty.google.description')}
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">{t('privacy.thirdParty.stripe.title')}</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.thirdParty.stripe.description')}
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">{t('privacy.thirdParty.cloud.title')}</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {t('privacy.thirdParty.cloud.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Data Retention */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.retention.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              {t('privacy.retention.before')}{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>
              {t('privacy.retention.after')}
            </p>
          </section>

          {/* Section: Your Rights (GDPR) */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.rights.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              {t('privacy.rights.intro')}
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon name="visibility" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.rights.access.label')}</span>{' '}
                  &mdash; {t('privacy.rights.access.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="edit" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.rights.rectification.label')}</span>{' '}
                  &mdash; {t('privacy.rights.rectification.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="delete" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.rights.erasure.label')}</span>{' '}
                  &mdash; {t('privacy.rights.erasure.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="download" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.rights.portability.label')}</span>{' '}
                  &mdash; {t('privacy.rights.portability.description')}
                </p>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="block" class="w-5 h-5 text-primary mt-0.5" />
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">{t('privacy.rights.object.label')}</span>{' '}
                  &mdash; {t('privacy.rights.object.description')}
                </p>
              </li>
            </ul>
            <p class="text-on-surface-variant leading-relaxed mt-6">
              {t('privacy.rights.contact.before')}{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>
              {t('privacy.rights.contact.after')}
            </p>
          </section>

          {/* Section: Security */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.security.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              {t('privacy.security.description')}
            </p>
          </section>

          {/* Section: Riot Games Disclaimer */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.riotDisclaimer.title')}
            </h2>
            <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5">
              <p class="text-on-surface-variant leading-relaxed text-sm">
                {t('privacy.riotDisclaimer.description')}
              </p>
            </div>
          </section>

          {/* Section: Changes to This Policy */}
          <section>
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              {t('privacy.changes.title')}
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              {t('privacy.changes.description')}
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
