import { useI18n } from '../../i18n';
import type { Locale } from '../../types/locale';
import { formatCurrency } from '../../utils/intl';

interface Props {
  price: number;
  class?: string;
}

export default function TrialExplainer(props: Props) {
  const { t, locale } = useI18n();

  const priceFormatted = () => formatCurrency(props.price, locale() as Locale, 'EUR');
  const body = () => t('pricing.trial.body').replace('{price}', priceFormatted());

  return (
    <div
      class={`rounded-lg border border-primary-container/30 bg-primary-container/5 p-4 ${props.class ?? ''}`.trim()}
      role="note"
      aria-label={t('pricing.trial.title')}
    >
      <p class="font-headline font-bold text-sm uppercase tracking-widest text-primary-container mb-2">
        {t('pricing.trial.title')}
      </p>
      <p class="font-body text-sm text-on-surface leading-relaxed">{body()}</p>
    </div>
  );
}
