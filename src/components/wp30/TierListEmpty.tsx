import { useI18n } from '../../i18n';

/**
 * Tier-list empty state (REQ-F-030-013, DEC-OP-025).
 *
 * Rendered when the BE returns `insufficient_sample = true` for the requested
 * (role, patch) pair. The page itself is also marked `noindex` upstream by
 * the route handler — that gating is intentionally NOT done here so this
 * component stays a pure presentational unit reusable in tests/storybook.
 *
 * Suggested filters lower the bounce rate by giving the user a curated set
 * of (role) combinations that are statistically well-populated even on
 * smaller traffic days (mid + jungle + all roles).
 */
export interface TierListEmptyProps {
  role: string;
  patch: string;
  lang: string;
}

export function TierListEmpty(props: TierListEmptyProps) {
  const { t } = useI18n();

  return (
    <section class="text-center py-16 max-w-2xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
        {t('wp30.tier_list.empty.heading')}
      </h2>
      <p class="text-on-surface-variant mb-8">
        {t('wp30.tier_list.empty.body')}
      </p>
      <p class="text-xs text-on-surface-variant/60 mb-8" data-current-role={props.role} data-current-patch={props.patch}>
        {t('wp30.tier_list.unavailable.body')}
      </p>

      <h3 class="text-sm uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-4">
        {t('wp30.tier_list.empty.suggestions_heading')}
      </h3>
      <ul class="flex flex-wrap justify-center gap-3">
        <li>
          <a
            href={`/${props.lang}/tier-list?role=mid`}
            class="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-sm hover:bg-surface-variant/20 transition-colors"
          >
            {t('wp30.tier_list.filter.role.mid')}
          </a>
        </li>
        <li>
          <a
            href={`/${props.lang}/tier-list?role=jungle`}
            class="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-sm hover:bg-surface-variant/20 transition-colors"
          >
            {t('wp30.tier_list.filter.role.jungle')}
          </a>
        </li>
        <li>
          <a
            href={`/${props.lang}/tier-list`}
            class="inline-flex items-center gap-2 border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-sm hover:bg-surface-variant/20 transition-colors"
          >
            {t('wp30.tier_list.filter.role.all')}
          </a>
        </li>
      </ul>
    </section>
  );
}
