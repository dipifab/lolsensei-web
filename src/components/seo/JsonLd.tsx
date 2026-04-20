import type { JSX } from 'solid-js';

type JsonLdPayload = Record<string, unknown>;

export function renderJsonLdScript(data: JsonLdPayload): string {
  const withContext = { '@context': 'https://schema.org', ...data };
  const json = JSON.stringify(withContext);
  return json.replace(/<\/script/gi, '<\\/script');
}

export function JsonLd(props: { data: JsonLdPayload }): JSX.Element {
  const serialized = renderJsonLdScript(props.data);
  return <script type="application/ld+json" innerHTML={serialized} />;
}
