import { Show } from 'solid-js';
import type { JSX } from 'solid-js';
import Icon from '../../../components/Icon';

interface KPICardProps {
  icon: string;
  label: string;
  value: string;
  sub?: JSX.Element;
  valueClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  showLive?: boolean;
  liveBadgeClass?: string;
}

export default function KPICard(props: KPICardProps) {
  return (
    <div class="bg-surface-container rounded-xl p-5 border border-outline-variant/10 shadow-sm shadow-primary/5">
      <div class="flex justify-between items-start mb-4">
        <div class={`w-10 h-10 rounded-xl ${props.iconBgClass ?? 'bg-primary/10'} flex items-center justify-center`}>
          <Icon name={props.icon} class={`w-5 h-5 ${props.iconColorClass ?? 'text-primary'}`} />
        </div>
        <Show when={props.showLive}>
          <span class={`rounded-full px-2 py-0.5 text-xs font-bold flex items-center gap-1 ${props.liveBadgeClass ?? 'bg-success/15 text-success'}`}>
            <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            live
          </span>
        </Show>
      </div>
      <p class="text-xs text-on-surface-variant mb-1">{props.label}</p>
      <h3 class={`text-2xl font-bold ${props.valueClass ?? 'text-on-surface'}`}>
        {props.value}
      </h3>
      <Show when={props.sub}>
        <p class="text-sm text-on-surface-variant mt-1">{props.sub}</p>
      </Show>
    </div>
  );
}
