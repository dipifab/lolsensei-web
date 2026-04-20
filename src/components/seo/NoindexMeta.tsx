import type { JSX } from 'solid-js';
import { Meta } from '@solidjs/meta';

export function NoindexMeta(): JSX.Element {
  return <Meta name="robots" content="noindex, nofollow" />;
}
