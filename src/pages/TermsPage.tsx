import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMeta } from '../utils/seo';
import { useI18n } from '../i18n';

export default function TermsPage() {
  usePageMeta('terms', '/terms');
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header class="mb-16 max-w-3xl">
          <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
            {t('terms.label')}
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
            {t('terms.title')} <span class="text-primary">{t('terms.titleHighlight')}</span>
          </h1>
          <p class="text-on-surface-variant text-lg leading-relaxed">
            {t('terms.lastUpdated')}
          </p>
        </header>

        {/* Terms Content */}
        <div class="max-w-4xl space-y-0">
          {/* Section 1 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">01</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s1.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s1.p1')}</p>
              <p>{t('terms.s1.p2')}</p>
            </div>
          </section>

          {/* Section 2 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">02</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s2.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s2.p1')}</p>
              <p>{t('terms.s2.p2')}</p>
            </div>
          </section>

          {/* Section 3 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">03</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s3.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s3.p1')}</p>
              <p>{t('terms.s3.p2')}</p>
            </div>
          </section>

          {/* Section 4 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">04</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s4.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s4.p1')}</p>
              <p>{t('terms.s4.p2')}</p>
              <p>
                {t('terms.s4.p3.before')}{' '}
                <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                  support@lolsensei.com
                </a>{' '}
                {t('terms.s4.p3.after')}
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">05</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s5.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s5.p1')}</p>
              <p>{t('terms.s5.p2')}</p>
              <p>{t('terms.s5.p3')}</p>
              <p>{t('terms.s5.p4')}</p>
              <p>{t('terms.s5.p5')}</p>
            </div>
          </section>

          {/* Section 6 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">06</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s6.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s6.intro')}</p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>{t('terms.s6.list1')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>{t('terms.s6.list2')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>{t('terms.s6.list3')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>{t('terms.s6.list4')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>{t('terms.s6.list5')}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">07</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s7.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s7.p1')}</p>
              <p>{t('terms.s7.p2')}</p>
            </div>
          </section>

          {/* Section 8 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">08</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s8.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s8.p1')}</p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>{t('terms.s8.list1')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>{t('terms.s8.list2')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>{t('terms.s8.list3')}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>{t('terms.s8.list4')}</span>
                </li>
              </ul>
              <div class="bg-surface-container-high p-6 rounded-xl border border-outline-variant/10 mt-4">
                <p class="text-sm text-on-surface-variant italic">
                  {t('terms.s8.disclaimer')}
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">09</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s9.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s9.p1')}</p>
              <p>{t('terms.s9.p2')}</p>
              <p>{t('terms.s9.p3')}</p>
            </div>
          </section>

          {/* Section 10 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">10</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s10.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s10.p1')}</p>
              <p>{t('terms.s10.p2')}</p>
            </div>
          </section>

          {/* Section 11 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">11</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s11.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s11.p1')}</p>
              <p>
                {t('terms.s11.p2.before')}{' '}
                <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                  support@lolsensei.com
                </a>
                {t('terms.s11.p2.after')}
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">12</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s12.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s12.p1')}</p>
              <p>{t('terms.s12.p2')}</p>
            </div>
          </section>

          {/* Section 13 */}
          <section class="py-10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">13</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">{t('terms.s13.title')}</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>{t('terms.s13.p1')}</p>
            </div>
          </section>

          {/* Contact */}
          <section class="mt-12 p-8 rounded-2xl glass-panel border border-outline-variant/10">
            <h2 class="text-xl font-bold font-headline text-on-surface mb-4">{t('terms.contact.title')}</h2>
            <p class="text-on-surface-variant leading-relaxed">
              {t('terms.contact.before')}{' '}
              <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                support@lolsensei.com
              </a>
              {t('terms.contact.after')}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
