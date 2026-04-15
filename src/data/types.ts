export interface NavItem {
  label: string;
  anchor: string;
}

export interface DownloadInfo {
  platform: string;
  url: string;
  filename: string;
  releasesUrl: string;
  smartScreenNote: string;
}

export interface PricingFeature {
  textKey: string;
  included: boolean;
  proBadge?: boolean;
}

export interface PricingPlan {
  nameKey: string;
  price: string;
  originalPrice?: string;
  period?: string;
  subtitle?: string;
  noCardRequired?: boolean;
  promoBadge?: string;
  trialExplainer?: string;
  ctaKey: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Step {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  capability: string;
  lolSensei: boolean;
  staticTools: boolean;
}

export interface FAQItem {
  questionKey: string;
  answerKey: string;
  category: 'safety' | 'howItWorks' | 'performance' | 'billing' | 'gettingStarted';
}

export interface TrustBadge {
  icon: string;
  labelKey: string;
}
