import type { NavItem, DownloadInfo, Step, ComparisonRow, TrustBadge } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', anchor: '/features' },
  { label: 'Pricing', anchor: '/pricing' },
  { label: 'FAQ', anchor: '/faq' },
  { label: 'Community', anchor: '/community' },
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
    description: 'Auto-detects League of Legends client instantly via our low-latency Tauri engine.',
  },
  {
    icon: 'precision_manufacturing',
    title: '2. Play',
    description: 'AI analyzes team composition, item builds, and game state to deliver adaptive recommendations.',
  },
  {
    icon: 'trending_up',
    title: '3. Improve',
    description: 'Receive dynamic recommendations that evolve with the match\'s complexity.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: 'Live game state analysis', lolSensei: true, staticTools: false },
  { capability: 'Adaptive item recommendations', lolSensei: true, staticTools: false },
  { capability: 'Ultra-light Tauri engine', lolSensei: true, staticTools: false },
  { capability: 'Riot API Compliance', lolSensei: true, staticTools: true },
];

export const TRUST_BADGES: TrustBadge[] = [
  { icon: 'verified_user', label: 'Riot API Compliant' },
  { icon: 'speed', label: '0 FPS Impact' },
  { icon: 'gavel', label: 'No Banned Features' },
];
