import { Router, Route, Navigate } from '@solidjs/router';
import { lazy } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { I18nProvider, SUPPORTED_LOCALES } from './i18n';

const Home = lazy(() => import('./pages/Home'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const CheckoutCancelPage = lazy(() => import('./pages/CheckoutCancelPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function I18nLayout(props: RouteSectionProps) {
  return (
    <I18nProvider>
      {props.children}
    </I18nProvider>
  );
}

export default function App() {
  return (
    <Router>
      {/* Root redirect to default locale */}
      <Route path="/" component={() => <Navigate href="/en" />} />

      {/* Locale-prefixed routes */}
      <Route
        path="/:lang"
        component={I18nLayout}
        matchFilters={{ lang: SUPPORTED_LOCALES as unknown as readonly string[] }}
      >
        <Route path="/" component={Home} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/checkout/success" component={CheckoutSuccessPage} />
        <Route path="/checkout/cancel" component={CheckoutCancelPage} />
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" component={NotFoundPage} />
    </Router>
  );
}
