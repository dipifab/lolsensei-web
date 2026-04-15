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
  text: string;
  included: boolean;
  proBadge?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  period?: string;
  subtitle?: string;
  noCardRequired?: boolean;
  promoBadge?: string;
  trialExplainer?: string;
  ctaText: string;
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
  question: string;
  answer: string;
}

export interface TrustBadge {
  icon: string;
  label: string;
}
