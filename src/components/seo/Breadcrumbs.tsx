import type { JSX } from 'solid-js';
import { For } from 'solid-js';
import { JsonLd } from './JsonLd';

export type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs(props: { items: BreadcrumbItem[] }): JSX.Element {
  const itemListElement = () =>
    props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href,
    }));

  const data = () => ({
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement(),
  });

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol>
          <For each={props.items}>
            {(item, index) => (
              <li>
                {index() < props.items.length - 1 ? (
                  <a href={item.href}>{item.name}</a>
                ) : (
                  <span aria-current="page" class="font-semibold text-on-surface">{item.name}</span>
                )}
              </li>
            )}
          </For>
        </ol>
      </nav>
      <JsonLd data={data()} />
    </>
  );
}
