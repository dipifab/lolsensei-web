import { DOWNLOAD_INFO } from '../data/content';
import { useI18n } from '../i18n';
import Icon from './Icon';

type Variant = 'primary' | 'nav' | 'inline';

interface Props {
  variant?: Variant;
  class?: string;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:brightness-110 px-8 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest inline-flex items-center min-h-11 gap-2 shadow-[0_0_40px_rgba(240,191,92,0.08)] motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none',
  nav:
    'bg-primary-container text-on-primary-container hover:brightness-110 px-6 py-2.5 rounded-lg font-headline font-extrabold uppercase tracking-widest inline-flex items-center gap-2 text-sm motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none',
  inline:
    'text-primary-container hover:brightness-110 underline decoration-2 underline-offset-4 font-headline font-extrabold uppercase tracking-widest inline-flex items-center gap-2 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none rounded',
};

/**
 * WP20 REQ-F-020-001: single source of truth for the Download CTA.
 * Renders ``<a>`` with ``download`` attribute pointing at DOWNLOAD_INFO.url.
 * Three presentation variants share the same accessibility props (label + ring).
 */
export default function DownloadCTA(props: Props) {
  const { t } = useI18n();
  const variant = () => props.variant ?? 'primary';

  return (
    <a
      href={DOWNLOAD_INFO.url}
      download={DOWNLOAD_INFO.filename}
      aria-label={t('hero.cta.download')}
      class={`${VARIANT_CLASSES[variant()]} ${props.class ?? ''}`.trim()}
    >
      <Icon name="download" class="w-5 h-5" />
      {t('hero.cta.download')}
    </a>
  );
}
