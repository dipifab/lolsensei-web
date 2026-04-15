import type { NavItem, DownloadInfo, Step, ComparisonRow, TrustBadge } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', anchor: '#features' },
  { label: 'Pricing', anchor: '#pricing' },
  { label: 'FAQ', anchor: '#faq' },
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
    icon: 'download',
    title: '1. Download',
    description: 'Grab the free installer from GitHub — one click, no sign-up required.',
  },
  {
    icon: 'install_desktop',
    title: '2. Install',
    description: 'Run the setup and launch LoL Sensei. Windows SmartScreen may ask you to confirm.',
  },
  {
    icon: 'sports_esports',
    title: '3. Play',
    description: 'Start a League of Legends match. LoL Sensei detects the game automatically.',
  },
  {
    icon: 'psychology',
    title: '4. Get AI Advice',
    description: 'Upgrade to Pro for real-time AI coaching on champion select, items, and strategy.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: 'Live game state analysis', lolSensei: true, staticTools: false },
  { capability: 'Adaptive item recommendations', lolSensei: true, staticTools: false },
  { capability: 'Ultra-light Tauri engine', lolSensei: true, staticTools: false },
  { capability: 'Riot API Compliance', lolSensei: true, staticTools: true },
];

export const RIOT_DISCLAIMER =
  "LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.";

export const TRUST_BADGES: TrustBadge[] = [
  { icon: 'verified_user', label: 'Riot API Compliant' },
  { icon: 'speed', label: '0 FPS Impact' },
  { icon: 'gavel', label: 'No Banned Features' },
];
