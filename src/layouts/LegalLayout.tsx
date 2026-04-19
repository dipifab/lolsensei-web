import { useLocation } from '@solidjs/router';
import type { RouteSectionProps } from '@solidjs/router';
import { useI18n } from '../i18n';
import Breadcrumbs from '../components/Breadcrumbs';

export default function LegalLayout(props: RouteSectionProps) {
  const { t, locale } = useI18n();
  const location = useLocation();

  const segment = () => {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  const items = () => {
    const lang = locale();
    const base = [
      { label: t('nav.home'), href: `/${lang}/` },
      { label: t('legal.breadcrumb') || 'Legal' },
    ];
    const seg = segment();
    if (seg === 'privacy' || seg === 'terms') {
      base.push({ label: t(`legal.${seg}.title`) || seg });
    }
    return base;
  };

  return (
    <>
      <Breadcrumbs items={items()} />
      <article class="prose prose-invert max-w-3xl mx-auto px-6 pb-16">
        {props.children}
      </article>
    </>
  );
}
