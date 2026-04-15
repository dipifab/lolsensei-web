import { FAQ_ITEMS } from '../data/faq';
import { useI18n } from '../i18n';

export default function FAQSchemaLD() {
  const { t } = useI18n();

  const schema = () => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: t(item.questionKey),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(item.answerKey),
      },
    })),
  });

  return (
    <script type="application/ld+json" innerHTML={JSON.stringify(schema())} />
  );
}
