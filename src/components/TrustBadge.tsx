import { useI18n } from '../i18n';
import Icon from './Icon';

interface Props {
  icon: string;
  labelKey: string;
  noteKey?: string;
  class?: string;
}

/**
 * WP20 REQ-F-020-004: single trust-badge renderer for quantitative trust
 * claims. Supports an optional subtle caption (e.g. ``trust.perfImpact.note``)
 * rendered below the main label.
 */
export default function TrustBadge(props: Props) {
  const { t } = useI18n();
  return (
    <div class={`flex items-center gap-3 ${props.class ?? ''}`.trim()}>
      <Icon name={props.icon} class="w-8 h-8" />
      <div class="flex flex-col">
        <span class="font-headline font-extrabold uppercase tracking-tighter text-sm">
          {t(props.labelKey)}
        </span>
        {props.noteKey ? (
          <span class="text-[10px] uppercase tracking-widest text-on-surface-variant/60">
            {t(props.noteKey)}
          </span>
        ) : null}
      </div>
    </div>
  );
}
