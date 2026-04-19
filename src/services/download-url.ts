const DOWNLOAD_URL = 'https://www.lolsensei.com/downloads/LoLSensei-Setup.exe';
const MOBILE_BREAKPOINT_PX = 768;

export function getDownloadUrl(): string {
  return DOWNLOAD_URL;
}

export function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`).matches;
}

export function isMobileUserAgent(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}
