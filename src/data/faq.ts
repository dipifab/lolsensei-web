import type { FAQItem } from './types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is LoL Sensei Riot Games compliant?',
    answer: 'Absolutely. LoL Sensei operates as a non-intrusive live-overlay tool that strictly adheres to the Riot Games Developer API Terms of Service. We do not inject code into the game client or automate gameplay actions. Our AI analyzes data already available to players in the client, ensuring you maintain a fair competitive environment while gaining superior strategic insight.',
  },
  {
    question: 'Can using the software lead to a ban?',
    answer: 'No. Because we don\'t interact with the game\'s executable (no DLL injection, no memory manipulation), LoL Sensei is designed to be fully compatible with Vanguard\'s anti-cheat system. We prioritize account safety above all features.',
  },
  {
    question: 'Will it impact my FPS or system performance?',
    answer: 'LoL Sensei is engineered with a zero-latency engine. Most of the AI heavy-lifting is performed on our remote servers. The local client uses less than 1% of CPU cycles and roughly 150MB of RAM, ensuring your frame rates remain stable even during chaotic teamfights.',
  },
  {
    question: 'What AI models are used for coaching?',
    answer: 'We leverage advanced AI models with high-reasoning capabilities and low-latency processing. The system combines massive data-processing with specialized game-state decision trees for real-time analysis and natural language post-game debriefing.',
  },
  {
    question: 'How do credit limits work?',
    answer: 'Pro members receive a daily allocation of AI credits. Each deep-dive AI review consumes 1 credit. Live basic overlays and match-up scouting are always available and do not consume credits. Free users get 1 credit per day, Pro users get 15 credits per day.',
  },
];
