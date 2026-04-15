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
    questionKey: 'faq.item1.question',
    answerKey: 'faq.item1.answer',
    category: 'safety',
  },
  {
    questionKey: 'faq.item2.question',
    answerKey: 'faq.item2.answer',
    category: 'safety',
  },
  {
    questionKey: 'faq.item3.question',
    answerKey: 'faq.item3.answer',
    category: 'performance',
  },
  {
    questionKey: 'faq.item4.question',
    answerKey: 'faq.item4.answer',
    category: 'howItWorks',
  },
  {
    questionKey: 'faq.item5.question',
    answerKey: 'faq.item5.answer',
    category: 'billing',
  },
  {
    questionKey: 'faq.item6.question',
    answerKey: 'faq.item6.answer',
    category: 'gettingStarted',
  },
  {
    questionKey: 'faq.item7.question',
    answerKey: 'faq.item7.answer',
    category: 'gettingStarted',
  },
  {
    questionKey: 'faq.item8.question',
    answerKey: 'faq.item8.answer',
    category: 'howItWorks',
  },
  {
    questionKey: 'faq.item9.question',
    answerKey: 'faq.item9.answer',
    category: 'howItWorks',
  },
  {
    questionKey: 'faq.item10.question',
    answerKey: 'faq.item10.answer',
    category: 'howItWorks',
  },
];
