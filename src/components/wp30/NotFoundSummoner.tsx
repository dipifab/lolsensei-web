import { useI18n } from '../../i18n';
import Icon from '../Icon';

/**
 * 404 surface for the summoner page (REQ-F-030-014, DEC-OP-005).
 *
 * Three variants describe WHY we're rendering 404, but the body content is
 * uniform per i18n keys (`wp30.summoner.notfound.*`). The variant is exposed
 * as a `data-variant` attribute so analytics / E2E can distinguish them
 * without forking copy.
 *
 *   - `region`     : path region segment is not in `ALLOWED_REGIONS`.
 *   - `malformed`  : handle segment failed `normalizeHandle` (no `-`, empty,
 *                    bad percent-encoding, ...).
 *   - `riot404`    : BE returned 404 (Riot Account-V1 NOT_FOUND).
 *
 * Pure presentational. The route handler is responsible for setting HTTP
 * status 404 + `X-Robots-Tag: noindex, nofollow` (it has access to
 * `getRequestEvent()` whereas this component is reused inside SSR + CSR).
 */
export type NotFoundSummonerVariant = 'region' | 'malformed' | 'riot404';

export interface NotFoundSummonerProps {
  variant: NotFoundSummonerVariant;
  /** Locale path segment (e.g. `'en'`, `'it'`). */
  lang: string;
  /** Original region path segment (may be invalid). Echoed for debug only. */
  region?: string;
  /** Original handle path segment (may be invalid). Echoed for debug only. */
  handle?: string;
}

export function NotFoundSummoner(props: NotFoundSummonerProps) {
  const { t } = useI18n();

  return (
    <main
      class="min-h-screen flex items-center justify-center px-8"
      data-variant={props.variant}
    >
      <div class="text-center max-w-2xl">
        <p class="text-8xl font-extrabold text-primary-container/20 font-headline mb-4">
          404
        </p>
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-headline text-on-surface">
          {t('wp30.summoner.notfound.heading')}
        </h1>
        <p class="text-on-surface-variant mb-8 max-w-md mx-auto">
          {t('wp30.summoner.notfound.body')}
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`/${props.lang}/tier-list`}
            class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            <Icon name="analytics" class="w-5 h-5" />
            {t('wp30.summoner.notfound.cta_tier_list')}
          </a>
          <a
            href={`/${props.lang}/`}
            class="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-surface-variant/20 transition-colors"
          >
            <Icon name="arrow_back" class="w-5 h-5" />
            {t('wp30.summoner.notfound.cta_search')}
          </a>
        </div>
      </div>
    </main>
  );
}
