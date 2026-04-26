import { useI18n } from '../../i18n';

/**
 * Riot Games legal attribution footer (REQ-NF-030-010, DEC-OP-009).
 *
 * Renders the FULL i18n string verbatim. No external links (Riot policy
 * forbids linking to Riot.com from attribution blocks).
 *
 * Visual style: footer-grade copy (`text-xs`, muted color, top border).
 * The block is meant to sit at the bottom of the page main content above
 * the global Footer.
 */
export function RiotDisclaimer() {
  const { t } = useI18n();

  return (
    <aside class="border-t border-outline-variant/20 mt-16 pt-6 pb-2 max-w-prose mx-auto px-4">
      <p class="text-xs text-on-surface-variant/70 leading-relaxed">
        {t('wp30.legal.riot_disclaimer.full')}
      </p>
    </aside>
  );
}
