export interface NavSection {
  home: string;
  pricing: string;
  faq: string;
  download: string;
  changelog: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaDownload: string;
}

export interface FooterSection {
  copyright: string;
  privacyLink: string;
  termsLink: string;
  dataProcessors: string;
}

export interface MobileSection {
  downloadModalTitle: string;
  downloadModalBody: string;
  modalDismiss: string;
}

export interface CheckoutSection {
  successTitle: string;
  successBody: string;
  cancelTitle: string;
  cancelBody: string;
}

export interface LegalSection {
  privacyTitle: string;
  termsTitle: string;
}

export interface Dictionary {
  nav: NavSection;
  hero: HeroSection;
  features: Record<string, string>;
  pricing: Record<string, string>;
  faq: Record<string, string>;
  changelog: Record<string, string>;
  footer: FooterSection;
  checkout: CheckoutSection;
  mobile: MobileSection;
  legal: LegalSection;
}

export type DictionaryKey = string;
