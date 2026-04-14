export const NAVBAR_HEIGHT = 64;

export function scrollToSection(anchor: string): void {
  const element = document.querySelector(anchor);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

  window.scrollTo({ top, behavior: 'smooth' });
}
