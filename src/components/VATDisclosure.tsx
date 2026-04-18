import { useI18n } from '../i18n';

/**
 * WP20 REQ-F-020-010: VAT disclosure line rendered in pricing-related
 * footers. Intentionally unstyled beyond muted caption typography.
 */
export default function VATDisclosure() {
  const { t } = useI18n();
  return (
    <p class="text-xs md:text-sm text-on-surface-variant/60 text-center mt-6">
      {t('pricing.footer.vat')}
    </p>
  );
}
