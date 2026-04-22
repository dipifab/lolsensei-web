// WP24 TASK-3-010 — Footer block: Privacy + Cookie Policy links + "Preferences" button.
// `onOpenPreferences` e wired al consentStore nel mount point (TASK-3-021).
import { A } from '@solidjs/router';
import { useI18n } from '../i18n';

interface Props {
  compact?: boolean;
  onOpenPreferences?: () => void;
}

export default function PrivacyLinks(props: Props) {
  const { t, locale } = useI18n();
  const href = (path: string) => `/${locale()}${path}`;

  const gap = () => (props.compact ? 'gap-3' : 'gap-4');
  const linkCls =
    'inline-flex items-center min-h-11 min-w-11 px-1 text-sm text-on-surface/80 hover:text-on-surface underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none rounded';

  return (
    <nav aria-label="Privacy and cookie preferences" class={`flex flex-wrap items-center ${gap()}`}>
      <A href={href('/privacy')} class={linkCls}>
        {t('privacy.page_title')}
      </A>
      <A href={href('/cookies')} class={linkCls}>
        {t('cookies.title')}
      </A>
      <button
        type="button"
        onClick={() => props.onOpenPreferences?.()}
        class={`${linkCls} cursor-pointer bg-transparent border-0`}
      >
        {t('consent.footer_link')}
      </button>
    </nav>
  );
}
