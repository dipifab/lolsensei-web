/**
 * Legal document versioning (WP20, REQ-F-020-005/009).
 *
 * Semver convention:
 * - PATCH: copy fix, typo, translation correction
 * - MINOR: new sections (cookie policy, GDPR Art. 6 mapping, etc.)
 * - MAJOR: new legal basis, new non-EU processor, waiver mechanism change
 *
 * Bump on any change to privacy/terms i18n copy. Sent to backend via:
 * - ``POST /api/consent/riot-id`` body field ``privacy_version``
 * - ``Stripe Checkout Session metadata.terms_version``
 *
 * WP20 bump rationale (data-model-wp20.md §6):
 * - PRIVACY_VERSION 1.0.0 -> 1.1.0: MINOR bump for cookies section,
 *   GDPR Art. 6 legal-basis mapping, and EU-US SCC/DPF transfer disclosure.
 * - TERMS_VERSION 1.0.0 -> 2.1.0: MAJOR bump for new 14-day EU withdrawal
 *   waiver mechanism (Directive 2011/83 Art. 16(m)); MINOR for copy
 *   clarifications on digital-content clause.
 */

export const PRIVACY_VERSION = '1.1.0';
export const TERMS_VERSION = '2.1.0';
