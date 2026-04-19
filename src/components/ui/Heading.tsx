import type { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  level: Level;
  class?: string;
  id?: string;
  children: JSX.Element;
}

const DEFAULT_STYLES: Record<Level, string> = {
  1: 'font-headline font-extrabold text-4xl md:text-5xl tracking-tight',
  2: 'font-headline font-bold text-3xl md:text-4xl tracking-tight',
  3: 'font-headline font-bold text-2xl md:text-3xl',
  4: 'font-headline font-semibold text-xl md:text-2xl',
  5: 'font-headline font-semibold text-lg',
  6: 'font-headline font-semibold text-base',
};

export default function Heading(props: Props) {
  const tag = () => `h${props.level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const cls = () => `${DEFAULT_STYLES[props.level]} ${props.class ?? ''}`.trim();
  return (
    <Dynamic component={tag()} id={props.id} class={cls()}>
      {props.children}
    </Dynamic>
  );
}
