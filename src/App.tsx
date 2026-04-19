import { Router, Route, Navigate } from '@solidjs/router';
import { lazy } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import I18nLayout from './layouts/I18nLayout';
import BareLayout from './layouts/BareLayout';
import { matchFilters } from './routing/match-filters';

const Home = lazy(() => import('./pages/Home'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const CheckoutCancelPage = lazy(() => import('./pages/CheckoutCancelPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const ConsoleLoginPage = lazy(() => import('./pages/ConsoleLoginPage'));
const OAuthCallbackHandler = lazy(() => import('./pages/OAuthCallbackHandler'));

const ConsoleGate = lazy(() => import('./console/ConsoleGate'));
const ConsoleLayout = lazy(() => import('./console/components/ConsoleLayout'));

const DashboardPage = lazy(() => import('./console/pages/DashboardPage'));
const UsersListPage = lazy(() => import('./console/pages/UsersListPage'));
const UserDetailPage = lazy(() => import('./console/pages/UserDetailPage'));
const PlansPage = lazy(() => import('./console/pages/PlansPage'));
const PromotionsPage = lazy(() => import('./console/pages/PromotionsPage'));
const TrialConfigPage = lazy(() => import('./console/pages/TrialConfigPage'));
const AIProvidersPage = lazy(() => import('./console/pages/AIProvidersPage'));
const ConsoleAdminListPage = lazy(() => import('./console/pages/ConsoleAdminListPage'));
const AllowlistPage = lazy(() => import('./console/pages/AllowlistPage'));

function ConsoleShellRoute(props: RouteSectionProps) {
  return (
    <ConsoleGate>
      <ConsoleLayout {...props}>
        {props.children}
      </ConsoleLayout>
    </ConsoleGate>
  );
}

function NotFoundShell() {
  return (
    <BareLayout variant="404">
      <NotFoundPage />
    </BareLayout>
  );
}

export default function App() {
  return (
    <Router>
      {/* Root "/" redirect handled by inline script in index.html (WP10 TASK-10-3-001).
          Keep SSR/crawler fallback route for clients that skip the script. */}
      <Route path="/" component={() => <Navigate href="/en/" />} />

      {/* Locale-prefixed routes */}
      <Route path="/:lang" component={I18nLayout} matchFilters={matchFilters}>
        <Route path="/" component={Home} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/checkout/success" component={CheckoutSuccessPage} />
        <Route path="/checkout/cancel" component={CheckoutCancelPage} />
      </Route>

      {/* Public console entrypoints (outside i18n) */}
      <Route path="/console-login" component={ConsoleLoginPage} />
      <Route path="/auth/google/callback" component={OAuthCallbackHandler} />

      {/* Legacy /admin/* redirect -> /console/* (WP20 beta bookmark compat) */}
      <Route
        path="/admin/*rest"
        component={(props: RouteSectionProps<unknown>) => {
          const rest = (props.params.rest as string | undefined) ?? '';
          const suffix = rest ? '/' + rest : '';
          return <Navigate href={`/console${suffix}`} />;
        }}
      />

      {/* Console (gate JWT + allowlist) — WP21 */}
      <Route path="/console" component={ConsoleShellRoute}>
        <Route path="/" component={DashboardPage} />
        <Route path="/users" component={UsersListPage} />
        <Route path="/users/:id" component={UserDetailPage} />
        <Route path="/plans" component={PlansPage} />
        <Route path="/promotions" component={PromotionsPage} />
        <Route path="/trial-config" component={TrialConfigPage} />
        <Route path="/ai-providers" component={AIProvidersPage} />
        <Route path="/admin-users" component={ConsoleAdminListPage} />
        <Route path="/allowlist" component={AllowlistPage} />
      </Route>

      {/* Catch-all 404 wrapped in BareLayout (EN-only, outside I18nProvider) */}
      <Route path="*" component={NotFoundShell} />
    </Router>
  );
}
