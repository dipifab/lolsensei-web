import type { FAQItem } from './types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What can I do with the free version?',
    answer:
      'The free version gives you full access to live game detection, phase tracking, champion icons, team composition, player statistics, and multi-region support. There is no time limit — use it for as long as you want. AI-powered features (champion select advice, item build recommendations, and game start analysis) are available exclusively with the Pro plan.',
  },
  {
    question: 'How does the free trial work?',
    answer:
      'When you upgrade to Pro, you get 3 days of full AI coaching for free. A credit card is required to start the trial. If you don\'t cancel before the trial ends, you\'ll be automatically charged EUR 7.99/month. You can cancel anytime from the app — no questions asked.',
  },
  {
    question: 'Is this safe to use with Riot Games?',
    answer:
      'Yes. LoL Sensei uses only the official Riot Games API and does not inject code, modify game files, or interact with the game client in any way. It operates as a read-only overlay, fully compliant with Riot\'s Developer API Terms of Service and compatible with Vanguard anti-cheat.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your Pro subscription at any time directly from the app, which will redirect you to the Stripe billing portal. Cancellation is immediate — you\'ll keep access to Pro features until the end of your current billing period.',
  },
  {
    question: 'What platforms are supported?',
    answer:
      'LoL Sensei is currently available for Windows 10 and Windows 11. The app is not code-signed yet, so Windows SmartScreen may show a security warning on first launch — click "More info" then "Run anyway" to proceed. macOS and Linux support is not planned at this time.',
  },
];
