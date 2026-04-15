import { useI18n } from '../i18n';

interface TierBadgeProps {
  tier: 'pro' | 'free';
  size?: 'sm' | 'md';
}

export default function TierBadge(props: TierBadgeProps) {
  const { t } = useI18n();

  const sizeClass = () => (props.size === 'sm'
    ? 'text-[9px] px-1.5 py-0.5 leading-none'
    : 'text-[10px] px-2.5 py-1');

  const variantClass = () => (props.tier === 'pro'
    ? 'text-on-primary-fixed bg-[var(--color-promo-badge-bg)]'
    : 'text-tertiary border border-tertiary/30');

  return (
    <span class={`font-headline font-extrabold uppercase tracking-widest rounded-full ${sizeClass()} ${variantClass()}`}>
      {props.tier === 'pro' ? t('tier.pro') : t('tier.free')}
    </span>
  );
}
