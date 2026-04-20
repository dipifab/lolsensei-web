import { lazy } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { NoindexMeta } from '../components/seo/NoindexMeta';

const ConsoleGate = lazy(() => import('../console/ConsoleGate'));
const ConsoleLayout = lazy(() => import('../console/components/ConsoleLayout'));

export default function ConsoleShellRoute(props: RouteSectionProps) {
  return (
    <>
      <NoindexMeta />
      <ConsoleGate>
        <ConsoleLayout {...props} />
      </ConsoleGate>
    </>
  );
}
