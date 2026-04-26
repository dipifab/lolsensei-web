import { useI18n } from '../../i18n';
import Icon from '../Icon';

/**
 * Banner shown when Riot's privacy enforcement returns a match list where
 * the puuid is absent from `match.info.participants` (DEC-OP-022).
 *
 * The page is still indexable: rank info remains a meaningful signal and the
 * URL is a stable identity for the player. The banner explains why the match
 * history section is empty.
 */
export function PrivatePlayerNotice() {
  const { t } = useI18n();

  return (
    <div
      role="status"
      class="mx-auto my-6 max-w-2xl rounded-lg border border-outline-variant/30 bg-surface-variant/10 px-6 py-4"
    >
      <div class="flex items-start gap-3">
        <Icon name="visibility" class="w-5 h-5 mt-0.5 text-on-surface-variant flex-shrink-0" />
        <div>
          <p class="font-headline font-bold text-on-surface mb-1">
            {t('wp30.summoner.state.private.heading')}
          </p>
          <p class="text-sm text-on-surface-variant">
            {t('wp30.summoner.state.private.body')}
          </p>
        </div>
      </div>
    </div>
  );
}
