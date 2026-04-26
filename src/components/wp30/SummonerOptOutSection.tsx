// WP30 — Privacy policy "summoner opt-out" section (REQ-NF-030-011, DEC-OP-009).
//
// Rendered after the MDX privacy policy body (route: `/[lang]/privacy`).
// All copy comes from `wp30.legal.privacy.*` i18n keys so the section keeps
// parity across the 8 locales without duplicating the long-form MDX in each
// language. Falls back to EN copy in the 6 non-bilingual locales (per the
// existing F0-01 i18n strategy).
//
// Wording (EN) is verbatim what the GDPR Art. 12(3) response wording requires:
//   - explicit contact channel (`privacy@lolsensei.com`),
//   - 14-day SLA + 72-hour acknowledgement,
//   - retention disclosure (5h cache, no persistent storage),
//   - post-opt-out semantics (HTTP 410 Gone + `X-Robots-Tag: noindex`).
//
// The `id="summoner-opt-out"` anchor is referenced by the privacy policy
// MDX changelog as the canonical pointer.

import { useI18n } from '../../i18n';

const CONTACT_EMAIL = 'privacy@lolsensei.com';

export function SummonerOptOutSection() {
  const { t } = useI18n();

  return (
    <section
      id="summoner-opt-out"
      aria-labelledby="summoner-opt-out-heading"
      class="mt-10 border-t border-outline-variant/30 pt-8"
    >
      <h2
        id="summoner-opt-out-heading"
        class="text-2xl font-headline font-extrabold text-on-surface mb-3"
      >
        {t('wp30.legal.privacy.opt_out_heading')}
      </h2>

      <p class="text-on-surface mb-3">
        {t('wp30.legal.privacy.opt_out_body')}
      </p>

      <p class="text-on-surface-variant text-sm mb-3">
        {t('wp30.legal.privacy.opt_out_technical_note')}
      </p>

      <p class="text-on-surface-variant text-sm mb-4">
        {t('wp30.legal.privacy.opt_out_sla_note')}
      </p>

      <p class="text-sm">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Summoner%20opt-out%20request`}
          class="text-primary-container underline decoration-primary-container/40 hover:decoration-primary-container"
        >
          {t('wp30.legal.privacy.opt_out_email_label')}
        </a>
      </p>
    </section>
  );
}
