import type { FAQItem } from './types';

export const FAQ_CATEGORIES = [
  { id: 'safety' as const, icon: 'security', labelKey: 'faq.category.safety' },
  { id: 'howItWorks' as const, icon: 'psychology', labelKey: 'faq.category.howItWorks' },
  { id: 'performance' as const, icon: 'speed', labelKey: 'faq.category.performance' },
  { id: 'billing' as const, icon: 'account_balance_wallet', labelKey: 'faq.category.billing' },
  { id: 'gettingStarted' as const, icon: 'play_circle', labelKey: 'faq.category.gettingStarted' },
] as const;

export type FAQCategoryId = (typeof FAQ_CATEGORIES)[number]['id'];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is LoL Sensei Riot Games compliant?',
    answer: 'Absolutely. LoL Sensei operates as a non-intrusive live-overlay tool that strictly adheres to the Riot Games Developer API Terms of Service. We do not inject code into the game client or automate gameplay actions. Our AI analyzes data already available to players in the client, ensuring a fair environment while helping you learn and improve.',
    category: 'safety',
  },
  {
    question: 'Can using the software lead to a ban?',
    answer: 'No. Because we don\'t interact with the game\'s executable (no DLL injection, no memory manipulation), LoL Sensei is designed to be fully compatible with Vanguard\'s anti-cheat system. We prioritize account safety above all features. Our tool is built with the same architecture as major verified league apps.',
    category: 'safety',
  },
  {
    question: 'Will it impact my FPS or system performance?',
    answer: 'LoL Sensei is built with a lightweight Tauri engine designed for minimal resource usage. Most of the AI processing happens on our remote servers. The local client uses less than 1% of CPU cycles and roughly 150MB of RAM, ensuring your frame rates remain stable even during chaotic teamfights.',
    category: 'performance',
  },
  {
    question: 'What AI models are used for coaching?',
    answer: 'We leverage advanced AI models with high-reasoning capabilities and low-latency processing. The system combines large-scale data processing with specialized game-state analysis for real-time coaching and natural language explanations. This means your coach can explain complex concepts in plain, easy-to-understand language.',
    category: 'howItWorks',
  },
  {
    question: 'How do credit limits work?',
    answer: 'Pro members receive a daily allocation of AI credits. Each deep-dive AI coaching session consumes 1 credit. Live basic overlays and match-up information are always available and do not consume credits. Free users get 1 credit per day, Pro users get 15 credits per day.',
    category: 'billing',
  },
  {
    question: 'Who is LoL Sensei for?',
    answer: 'LoL Sensei is for League of Legends players of all skill levels — from beginners learning the basics to experienced players who want to deepen their understanding. Whether you\'re playing your first ranked games or trying to understand advanced concepts like wave management and team composition, our AI coach adapts to your level.',
    category: 'gettingStarted',
  },
  {
    question: 'Do I need to be good at the game to use it?',
    answer: 'Not at all! LoL Sensei is designed to help you learn, regardless of your current rank. The AI coach explains concepts in plain language and adjusts its advice based on your experience level. Think of it as having a patient friend who knows the game well and is always happy to explain things.',
    category: 'gettingStarted',
  },
  {
    question: 'What will I actually learn?',
    answer: 'LoL Sensei helps you understand three core areas: champion select (why to pick certain champions), lane strategy (how to approach your matchup), and item builds (why certain items are better in different situations). Instead of just telling you what to do, it explains the reasoning — so you learn to make good decisions on your own.',
    category: 'howItWorks',
  },
  {
    question: 'Does it work for all roles?',
    answer: 'Yes! Whether you play Top, Jungle, Mid, Bot, or Support, LoL Sensei provides role-specific coaching. The AI understands the unique demands of each position and tailors its advice accordingly.',
    category: 'howItWorks',
  },
  {
    question: 'How is this different from just looking up builds online?',
    answer: 'Static websites show you the most popular build, but they can\'t tell you why it\'s popular or when to deviate. LoL Sensei analyzes your specific game — your team, the enemy team, how the match is going — and explains why certain choices make sense right now. It\'s the difference between copying someone\'s homework and actually understanding the subject.',
    category: 'howItWorks',
  },
];
