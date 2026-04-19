import type { JSX } from 'solid-js';
import { splitProps } from 'solid-js';
import { A } from '@solidjs/router';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  class?: string;
  children: JSX.Element;
}

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

export type Props = AnchorProps | ButtonProps;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:brightness-110 rounded-lg font-headline font-extrabold uppercase tracking-widest inline-flex items-center gap-2 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none',
  secondary:
    'border border-on-surface/30 text-on-surface hover:bg-on-surface/5 rounded-lg font-headline font-semibold inline-flex items-center gap-2 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-on-surface/40 focus-visible:outline-none',
  ghost:
    'text-on-surface/80 hover:text-on-surface rounded inline-flex items-center gap-2 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-on-surface/40 focus-visible:outline-none',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-9',
  md: 'px-6 py-2.5 text-sm min-h-10',
  lg: 'px-8 py-4 text-base min-h-11',
};

export default function Button(props: Props) {
  const [local, rest] = splitProps(props as CommonProps & { href?: string; external?: boolean }, [
    'variant',
    'size',
    'class',
    'children',
    'href',
    'external',
  ]);

  const variant = local.variant ?? 'primary';
  const size = local.size ?? 'md';
  const cls = `${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${local.class ?? ''}`.trim();

  if (local.href) {
    if (local.external) {
      return (
        <a href={local.href} class={cls} rel="noopener noreferrer" target="_blank">
          {local.children}
        </a>
      );
    }
    return (
      <A href={local.href} class={cls}>
        {local.children}
      </A>
    );
  }

  return (
    <button {...(rest as JSX.ButtonHTMLAttributes<HTMLButtonElement>)} class={cls}>
      {local.children}
    </button>
  );
}
