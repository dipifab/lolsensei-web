import { A } from '@solidjs/router';
import { useI18n } from '../i18n';
import { consentStore } from '../stores/consentStore';

export default function Footer() {
  const { t, locale } = useI18n();
  const localizedHref = (path: string) => `/${locale()}${path}`;
  const currentYear = new Date().getFullYear().toString();

  // WP24 U2 (WCAG 1.4.3) — contrasto: text-on-surface/40 (~4.42:1) e' sotto
  // il minimo AA 4.5:1 per testo normale. Bump a /70 (~9:1) e focus ring
  // esplicito per 2.4.7 (F-10).
  const linkClass =
    'inline-flex items-center justify-center min-h-11 min-w-11 px-2 text-on-surface/70 hover:text-primary-container transition-colors text-sm font-body tracking-tight rounded focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none';

  return (
    <footer class="w-full py-12 border-t border-surface-variant/10 bg-surface-container-lowest">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div class="text-lg font-bold text-primary-container font-headline uppercase tracking-widest">
          LoL Sensei
        </div>

        <nav aria-label={t('a11y.footerNav')} class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <A href={localizedHref('/terms')} class={linkClass}>
            {t('footer.terms')}
          </A>
          <A href={localizedHref('/privacy')} class={linkClass}>
            {t('footer.privacy')}
          </A>
          <A href={localizedHref('/cookies')} class={linkClass}>
            {t('cookies.title')}
          </A>
          <button
            type="button"
            onClick={() => consentStore.openCenter()}
            class={`${linkClass} bg-transparent border-0 cursor-pointer`}
          >
            {t('consent.footer_link')}
          </button>
          <A href={localizedHref('/community')} class={linkClass}>
            {t('nav.community')}
          </A>
          <A href={localizedHref('/contact')} class={linkClass}>
            {t('footer.contact')}
          </A>
        </nav>

        <p class="text-on-surface/50 text-[10px] font-body tracking-tight text-center md:text-right max-w-md">
          {t('footer.copyright').replace('{year}', currentYear)}
        </p>
      </div>
    </footer>
  );
}
