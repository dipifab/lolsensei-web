// ConsoleRouter WP21 — dispatcher lazy delle route console (CLR-113, CLR-213).
// Gli import lazy delle pagine vivono qui, non nel file App.tsx, cosi' le
// stringhe di path `/admin-users`, `/allowlist`, `/promotions` non finiscono
// nell'entry chunk pubblico del sito.
import { Route } from '@solidjs/router';
import { lazy, type JSX } from 'solid-js';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const UsersListPage = lazy(() => import('./pages/UsersListPage'));
const UserDetailPage = lazy(() => import('./pages/UserDetailPage'));
const PlansPage = lazy(() => import('./pages/PlansPage'));
const PromotionsPage = lazy(() => import('./pages/PromotionsPage'));
const TrialConfigPage = lazy(() => import('./pages/TrialConfigPage'));
const AIProvidersPage = lazy(() => import('./pages/AIProvidersPage'));
const ConsoleAdminListPage = lazy(() => import('./pages/ConsoleAdminListPage'));
const AllowlistPage = lazy(() => import('./pages/AllowlistPage'));

// Factory che restituisce le child routes per il nested router di App.
// Le stringhe path vivono in questo modulo lazy (chunk `_lazy_console_*`),
// non nell'entry chunk del sito pubblico.
export function consoleChildRoutes(): JSX.Element {
  return (
    <>
      <Route path="/" component={DashboardPage} />
      <Route path="/users" component={UsersListPage} />
      <Route path="/users/:id" component={UserDetailPage} />
      <Route path="/plans" component={PlansPage} />
      <Route path="/promotions" component={PromotionsPage} />
      <Route path="/trial-config" component={TrialConfigPage} />
      <Route path="/ai-providers" component={AIProvidersPage} />
      <Route path="/admin-users" component={ConsoleAdminListPage} />
      <Route path="/allowlist" component={AllowlistPage} />
    </>
  );
}

// Default export per lazy import: e' un componente "vuoto" che serve solo a
// triggerare il caricamento del chunk. SolidJS Router in realta'
// preferisce le Route definite sopra; il componente rimane come stub.
export default function ConsoleRouter() {
  return null;
}
