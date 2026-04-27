import { useI18n } from '../i18n';
import Icon from './Icon';

type Variant = 'primary' | 'nav' | 'inline';

interface Props {
  variant?: Variant;
  class?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-primary-container/40 text-on-primary-container/80 px-8 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest inline-flex items-center min-h-11 gap-2 shadow-[0_0_40px_rgba(240,191,92,0.05)] cursor-not-allowed select-none',
  nav:
    'bg-primary-container/40 text-on-primary-container/80 px-5 py-2.5 rounded-lg font-headline font-extrabold uppercase tracking-widest inline-flex items-center gap-2 text-sm whitespace-nowrap cursor-not-allowed select-none',
  inline:
    'text-primary-container/70 font-headline font-extrabold uppercase tracking-widest inline-flex items-center gap-2 cursor-not-allowed select-none rounded',
};

/**
 * Desktop client coming-soon placeholder. Renders a non-interactive badge
 * in place of the active download link until the desktop build ships.
 */
export default function DownloadCTA(props: Props) {
  const { t } = useI18n();
  const variant = () => props.variant ?? 'primary';

  return (
    <span
      role="text"
      aria-disabled="true"
      aria-label={t('hero.cta.comingSoon')}
      title={t('hero.cta.comingSoon')}
      class={`${VARIANT_CLASSES[variant()]} ${props.class ?? ''}`.trim()}
    >
      <Icon name="download" class="w-5 h-5" />
      {t('hero.cta.comingSoon')}
    </span>
  );
}
