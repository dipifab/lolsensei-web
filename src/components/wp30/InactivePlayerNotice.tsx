import { useI18n } from '../../i18n';
import Icon from '../Icon';

/**
 * Banner shown when the player has zero recent matches (DEC-OP-013 / thin
 * content trigger). The route handler also stamps `X-Robots-Tag: noindex`
 * so the page does not pollute search results — but the page is still
 * reachable via direct URL.
 */
export interface InactivePlayerNoticeProps {
  lang: string;
}

export function InactivePlayerNotice(props: InactivePlayerNoticeProps) {
  const { t } = useI18n();

  return (
    <div
      role="status"
      class="mx-auto my-6 max-w-2xl rounded-lg border border-outline-variant/30 bg-surface-variant/10 px-6 py-4"
    >
      <div class="flex items-start gap-3">
        <Icon name="schedule" class="w-5 h-5 mt-0.5 text-on-surface-variant flex-shrink-0" />
        <div class="flex-1">
          <p class="font-headline font-bold text-on-surface mb-1">
            {t('wp30.summoner.state.inactive.heading')}
          </p>
          <p class="text-sm text-on-surface-variant mb-3">
            {t('wp30.summoner.state.inactive.body')}
          </p>
          <a
            href={`/${props.lang}/tier-list`}
            class="inline-flex items-center gap-2 text-primary-container hover:text-primary text-sm font-headline font-bold uppercase tracking-widest"
          >
            <Icon name="analytics" class="w-4 h-4" />
            {t('wp30.summoner.state.inactive.cta_tier_list')}
          </a>
        </div>
      </div>
    </div>
  );
}
