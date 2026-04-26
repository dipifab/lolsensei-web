import { useI18n } from '../../i18n';
import Icon from '../Icon';

/**
 * 503 surface for both summoner page and tier list page when the BE / Riot
 * upstream is unreachable AND no stale cache is available (DEC-OP-013).
 *
 * The route handler is responsible for:
 *   - HTTP status 503
 *   - `Retry-After: <seconds>` header
 *   - `X-Robots-Tag: noindex`
 *   - `Cache-Control: no-store`
 *
 * This component just renders the user-facing copy. It also exposes the
 * suggested retry-after delay so the caller can keep header + body in sync.
 */
export interface ServiceUnavailableProps {
  retryAfterSeconds: number;
  lang: string;
}

export function ServiceUnavailable(props: ServiceUnavailableProps) {
  const { t } = useI18n();

  return (
    <main class="min-h-screen flex items-center justify-center px-8">
      <div class="text-center max-w-2xl">
        <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-warning/10 text-warning">
          <Icon name="hourglass_top" class="w-8 h-8" />
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-headline text-on-surface">
          {t('wp30.summoner.unavailable.heading')}
        </h1>
        <p class="text-on-surface-variant mb-2 max-w-md mx-auto">
          {t('wp30.summoner.unavailable.body')}
        </p>
        <p
          class="text-xs text-on-surface-variant/60 mb-8"
          aria-live="polite"
          data-retry-after-seconds={props.retryAfterSeconds}
        >
          {t('wp30.summoner.unavailable.retry_label')}: {props.retryAfterSeconds}s
        </p>

        <a
          href={`/${props.lang}/`}
          class="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-surface-variant/20 transition-colors"
        >
          <Icon name="arrow_back" class="w-5 h-5" />
          {t('wp30.shared.cta.download_button')}
        </a>
      </div>
    </main>
  );
}
