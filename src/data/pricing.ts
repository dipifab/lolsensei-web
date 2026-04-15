import type { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '0',
    subtitle: 'Free forever',
    noCardRequired: true,
    ctaText: 'Download Free',
    features: [
      { text: 'Live game detection', included: true },
      { text: 'Phase tracking', included: true },
      { text: 'Champion icons & team composition', included: true },
      { text: 'Player statistics', included: true },
      { text: 'Connection status', included: true },
      { text: 'Multi-region support', included: true },
      { text: 'AI Champion Select Advisor', included: false, proBadge: true },
      { text: 'AI Item Build Advisor', included: false, proBadge: true },
      { text: 'AI Game Start Analysis', included: false, proBadge: true },
    ],
  },
  {
    name: 'Pro',
    price: '7.99',
    originalPrice: '12.99',
    period: '/month',
    promoBadge: 'Launch Offer',
    trialExplainer: '3 days free, then EUR 7.99/month. Cancel anytime.',
    ctaText: 'Start Free Trial',
    highlighted: true,
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'AI Champion Select Advisor', included: true, proBadge: true },
      { text: 'AI Item Build Advisor', included: true, proBadge: true },
      { text: 'AI Game Start Analysis', included: true, proBadge: true },
      { text: '15 AI credits/day', included: true },
    ],
  },
];
