import type { JSX } from 'solid-js';
import { A } from '@solidjs/router';

interface Props {
  href: string;
  external?: boolean;
  class?: string;
  'aria-label'?: string;
  children: JSX.Element;
}

const BASE =
  'text-primary-container hover:brightness-110 underline decoration-1 underline-offset-4 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none rounded';

export default function Link(props: Props) {
  const cls = () => `${BASE} ${props.class ?? ''}`.trim();
  if (props.external) {
    return (
      <a
        href={props.href}
        class={cls()}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={props['aria-label']}
      >
        {props.children}
      </a>
    );
  }
  return (
    <A href={props.href} class={cls()} aria-label={props['aria-label']}>
      {props.children}
    </A>
  );
}
