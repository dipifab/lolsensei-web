import type { JSX } from 'solid-js';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  size?: Size;
  class?: string;
  as?: 'div' | 'section' | 'main' | 'article';
  children: JSX.Element;
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export default function Container(props: Props) {
  const size = () => props.size ?? 'xl';
  const cls = () => `${SIZE_CLASSES[size()]} mx-auto px-6 md:px-8 ${props.class ?? ''}`.trim();
  const Tag = props.as ?? 'div';
  return <Tag class={cls()}>{props.children}</Tag>;
}
