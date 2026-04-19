import type { JSX } from 'solid-js';

type Variant = 'body' | 'caption' | 'lead';

interface Props {
  variant?: Variant;
  as?: 'p' | 'span' | 'div';
  class?: string;
  children: JSX.Element;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  body: 'font-body text-base leading-relaxed text-on-surface',
  caption: 'font-body text-xs text-on-surface-variant/70',
  lead: 'font-body text-lg md:text-xl leading-relaxed text-on-surface',
};

export default function Text(props: Props) {
  const variant = () => props.variant ?? 'body';
  const cls = () => `${VARIANT_CLASSES[variant()]} ${props.class ?? ''}`.trim();
  const Tag = props.as ?? 'p';
  return <Tag class={cls()}>{props.children}</Tag>;
}
