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
 */

export const PRIVACY_VERSION = '1.0.0';
export const TERMS_VERSION = '1.0.0';
