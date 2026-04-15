import type { NavItem, DownloadInfo, Step, ComparisonRow, TrustBadge } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', anchor: '/features' },
  { label: 'Pricing', anchor: '/pricing' },
  { label: 'FAQ', anchor: '/faq' },
  { label: 'Community', anchor: '/community' },
  { label: 'Blog', anchor: '/blog' },
];

export const DOWNLOAD_INFO: DownloadInfo = {
  platform: 'Windows',
  url: 'https://github.com/dipifab/lolai/releases/latest/download/LoLSensei-Setup.exe',
  filename: 'LoLSensei-Setup.exe',
  releasesUrl: 'https://github.com/dipifab/lolai/releases',
  smartScreenNote:
    "Windows may show a security warning — click 'More info' → 'Run anyway'. This is normal for new apps not yet code-signed.",
};

export const STEPS: Step[] = [
  {
    icon: 'cable',
    title: '1. Connect',
    description: 'LoL Sensei detects your League client automatically through our lightweight Tauri engine.',
  },
  {
    icon: 'school',
    title: '2. Learn',
    description: 'Your AI coach explains team compositions, item choices, and lane strategy in real-time.',
  },
  {
    icon: 'trending_up',
    title: '3. Grow',
    description: 'Build lasting game knowledge with coaching that adapts to your progress and playstyle.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: 'Explains decisions in real-time', lolSensei: true, staticTools: false },
  { capability: 'Adapts coaching to your skill level', lolSensei: true, staticTools: false },
  { capability: 'Zero performance impact (Tauri engine)', lolSensei: true, staticTools: false },
  { capability: 'Riot API Compliance', lolSensei: true, staticTools: true },
];

export const TRUST_BADGES: TrustBadge[] = [
  { icon: 'verified_user', label: 'Riot API Compliant' },
  { icon: 'speed', label: '0 FPS Impact' },
  { icon: 'gavel', label: 'No Banned Features' },
  { icon: 'diversity_3', label: 'For All Skill Levels' },
];

export const RIOT_DISCLAIMER =
  "LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.";
