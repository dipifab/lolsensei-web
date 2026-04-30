const enLegal = {

  // Privacy Page
  'privacy.label': 'Legal',
  'privacy.title': 'Privacy',
  'privacy.titleHighlight': 'Policy',
  'privacy.intro': 'Your privacy matters. This policy explains what data LoL Sensei collects, how we use it, and your rights regarding your personal information.',
  'privacy.lastUpdated': 'Last updated: April 2026',
  'privacy.introduction.title': 'Introduction',
  'privacy.introduction.p1': 'LoL Sensei is operated by Fabrizio Di Pietro ("we", "us", "our"). This Privacy Policy describes how we collect, use, and protect your personal information when you use the LoL Sensei desktop application and related services.',
  'privacy.introduction.p2.before': 'By using LoL Sensei, you agree to the collection and use of information in accordance with this policy. If you have questions, contact us at',
  'privacy.introduction.p2.after': '.',
  'privacy.dataCollect.title': 'Data We Collect',
  'privacy.dataCollect.intro': 'We collect the following categories of information to provide and improve our service:',
  'privacy.dataCollect.account.title': 'Account Information',
  'privacy.dataCollect.account.description': 'Google account details (email address and display name) used for authentication and account creation.',
  'privacy.dataCollect.lol.title': 'League of Legends Data',
  'privacy.dataCollect.lol.description': 'By linking your Riot ID you consent to LoL Sensei fetching your match history, champion data, and spectator state via the official Riot Games API. This data is processed locally and on our servers for the sole purpose of delivering pre-match educational content. You can revoke this consent at any time by emailing privacy@lolsensei.com or via the desktop app Settings; revocation stops all Riot ID data fetching within 24 hours.',
  'privacy.dataCollect.gameplay.title': 'Gameplay Session Data',
  'privacy.dataCollect.gameplay.description': 'Champion selections, item builds, and game outcomes collected during active gameplay sessions for AI-powered analysis and coaching recommendations.',
  'privacy.dataCollect.payment.title': 'Subscription & Payment Data',
  'privacy.dataCollect.payment.description.before': 'Payment transactions are processed by Stripe. We receive subscription status and transaction identifiers but',
  'privacy.dataCollect.payment.description.highlight': 'never store credit card numbers',
  'privacy.dataCollect.payment.description.after': 'on our servers.',
  'privacy.dataCollect.analytics.title': 'Usage Analytics',
  'privacy.dataCollect.analytics.description': 'Feature usage patterns and error logs collected to diagnose issues and improve service reliability.',
  'privacy.howWeUse.title': 'How We Use Your Data',
  'privacy.howWeUse.ai.label': 'AI analysis and recommendations',
  'privacy.howWeUse.ai.description': 'Providing real-time and post-game coaching powered by your gameplay data.',
  'privacy.howWeUse.coaching.label': 'Personalized coaching',
  'privacy.howWeUse.coaching.description': 'Tailoring recommendations based on your player history, champion pool, and rank.',
  'privacy.howWeUse.payment.label': 'Payment processing',
  'privacy.howWeUse.payment.description': 'Managing subscriptions and transactions through Stripe.',
  'privacy.howWeUse.improvement.label': 'Service improvement',
  'privacy.howWeUse.improvement.description': 'Enhancing service quality, fixing bugs, and improving our AI models.',
  'privacy.thirdParty.title': 'Third-Party Services',
  'privacy.thirdParty.intro': 'LoL Sensei integrates with the following third-party services, each governed by their own privacy policies:',
  'privacy.thirdParty.riot.title': 'Riot Games API',
  'privacy.thirdParty.riot.description': 'Game data retrieval, subject to the Riot Games API Terms of Service.',
  'privacy.thirdParty.google.title': 'Google OAuth',
  'privacy.thirdParty.google.description': 'Secure authentication, subject to Google\'s Privacy Policy.',
  'privacy.thirdParty.stripe.title': 'Stripe',
  'privacy.thirdParty.stripe.description': 'Payment processing, subject to the Stripe Privacy Policy.',
  'privacy.thirdParty.cloud.title': 'Cloud Infrastructure',
  'privacy.thirdParty.cloud.description': 'Server-side AI processing and data storage on secure cloud infrastructure.',
  'privacy.retention.title': 'Data Retention',
  'privacy.retention.before': 'Match history and gameplay session data are retained for the duration of your account. You may request complete deletion of your data at any time by contacting us at',
  'privacy.retention.after': '. Upon receiving a deletion request, we will remove all personally identifiable data within 30 days.',
  'privacy.rights.title': 'Your Rights',
  'privacy.rights.intro': 'Under the General Data Protection Regulation (GDPR) and applicable data protection laws, you have the following rights:',
  'privacy.rights.access.label': 'Right to access',
  'privacy.rights.access.description': 'Request a copy of the personal data we hold about you.',
  'privacy.rights.rectification.label': 'Right to rectification',
  'privacy.rights.rectification.description': 'Request correction of inaccurate or incomplete personal data.',
  'privacy.rights.erasure.label': 'Right to erasure',
  'privacy.rights.erasure.description': 'Request deletion of your account and all associated personal data.',
  'privacy.rights.portability.label': 'Right to data portability',
  'privacy.rights.portability.description': 'Receive your data in a structured, machine-readable format.',
  'privacy.rights.object.label': 'Right to object',
  'privacy.rights.object.description': 'Object to the processing of your personal data for specific purposes.',
  'privacy.rights.contact.before': 'To exercise any of these rights, contact us at',
  'privacy.rights.contact.after': '. We will respond to your request within 30 days.',
  'privacy.security.title': 'Security',
  'privacy.security.description': 'We take the security of your data seriously. All data is transmitted over HTTPS with TLS encryption. API keys and sensitive credentials are stored server-side only and are never exposed to client applications. We implement industry-standard security practices to protect your information from unauthorized access, alteration, or disclosure.',
  'privacy.riotDisclaimer.title': 'Riot Games Disclaimer',
  'privacy.riotDisclaimer.description': 'LoL Sensei isn\'t endorsed by Riot Games and doesn\'t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc. Game data accessed through the Riot Games API is subject to the Riot Games Developer API Terms of Service.',
  'privacy.changes.title': 'Changes to This Policy',
  'privacy.changes.description': 'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes, we will notify users through the application or via email. We encourage you to review this page periodically for the latest information.',

  // WP20 — Privacy cookies (REQ-F-020-006)
  'privacy.cookies.title': 'Cookies and local storage',
  'privacy.cookies.body': 'LoL Sensei does not use tracking cookies or advertising cookies. We use browser localStorage exclusively to remember your language preference. No third-party tracking is performed on this website.',

  // WP20 — GDPR Art. 6 legal basis mapping (REQ-F-020-007)
  'privacy.howWeUse.intro': 'We process personal data only on the following legal bases (GDPR Art. 6(1)):',
  'privacy.howWeUse.auth': 'Authentication and subscription management — contract (Art. 6(1)(b))',
  'privacy.howWeUse.ai': 'AI-assisted coaching content — legitimate interest (Art. 6(1)(f))',
  'privacy.howWeUse.payment': 'Payment processing — contract (Art. 6(1)(b))',
  'privacy.howWeUse.analytics': 'Aggregated usage analytics — consent (Art. 6(1)(a))',
  'privacy.howWeUse.riotId': 'Riot ID linking and Riot API queries — consent (Art. 6(1)(a))',

  // WP20 — International transfers SCC/DPF (REQ-F-020-008)
  'privacy.transfer.title': 'International data transfers (EU → US)',
  'privacy.transfer.scc.intro': 'Some processors operate in the United States. We rely on Standard Contractual Clauses (SCC) and, where applicable, the EU-US Data Privacy Framework (DPF) as the legal transfer mechanism:',
  'privacy.transfer.scc.stripe': 'Stripe (payments) — SCC + DPF certified',
  'privacy.transfer.scc.cloudflare': 'Cloudflare (hosting, CDN) — SCC + DPF certified',
  'privacy.transfer.scc.anthropic': 'Anthropic (AI processing) — SCC',
  'privacy.transfer.scc.note': 'Processor privacy policies are linked on each vendor page; by default US processors carry no automated decisioning per Art. 22 GDPR.',

  // WP24 — GDPR & Cookie Compliance
  // Cookie banner (Screen #1)
  'consent.banner.title': 'We value your privacy',
  'consent.banner.body': 'We use cookies to run the site and, with your permission, to measure traffic and improve your experience. You can accept all, reject non-essential, or customize your choices. You can change your mind anytime from the footer.',
  'consent.banner.accept': 'Accept all',
  'consent.banner.reject': 'Reject non-essential',
  'consent.banner.customize': 'Customize',
  'consent.banner.close_aria': 'Close banner and reject non-essential cookies',
  'cookies.expand_details': 'Cookie settings — show details',

  // Preference Center (Screen #2)
  'consent.preferences.title': 'Cookie preferences',
  'consent.preferences.intro': 'Choose which categories of cookies you allow. Strictly necessary cookies are always active because they are required for the site to work.',
  'consent.preferences.technical.label': 'Strictly necessary',
  'consent.preferences.technical.description': 'Required to run the site and remember your preferences. Cannot be turned off.',
  'consent.preferences.analytics.label': 'Analytics',
  'consent.preferences.analytics.description': 'Anonymous usage statistics that help us understand how the site is used and improve it.',
  'consent.preferences.marketing.label': 'Marketing',
  'consent.preferences.marketing.description': 'Used to show relevant content or measure the effectiveness of our campaigns. Currently not active.',
  'consent.preferences.save': 'Save preferences',
  'consent.preferences.saved': 'Preferences saved',

  // Footer link

  // Privacy Policy page (WP24 MDX route; `privacy.title` legacy WP10 resta
  // per retrocompat fino alla riscrittura in TASK-3-012)
  'privacy.changelog': 'Changelog',
  'privacy.version_label': 'Version',

  // Cookie Policy page
  'cookies.inventory_title': 'Cookie inventory',

  // Settings — Privacy & Data (DSR Dashboard)
  'settings.privacy.title': 'Privacy & Data',
  'settings.privacy.export_button': 'Export my data',
  'settings.privacy.export_description': 'Download a JSON copy of your account data (profile, subscriptions, consent history).',
  'settings.privacy.delete_button': 'Delete my account',
  'settings.privacy.delete_description': 'Permanently anonymize your account. This action cannot be undone.',
  'settings.privacy.delete_confirm_placeholder': 'Type DELETE_MY_ACCOUNT to confirm',
  'settings.privacy.manage_cookies': 'Manage cookie preferences',

  // Age gate (GDPR Art. 8 — minimum age 16 IT/DE, 14-16 others)
  'age_gate.label': 'I confirm I am at least 16 years old',
  'age_gate.error': 'You must confirm your age to continue',
  'age_gate.explanation': 'Under EU data-protection law (GDPR Art. 8), we need your confirmation that you are old enough to provide valid consent for processing your personal data.',
  'age_gate.page_title': 'Confirm your age — LoL Sensei',
  'age_gate.heading': 'Before you continue',
  'age_gate.submit': 'Continue',
  'age_gate.submit_error': 'Unable to confirm at this time. Please retry.',

  // Settings privacy DSR — status/errors (U3)
  'settings.privacy.export_success': 'Export ready — your download has started',
  'settings.privacy.delete_success': 'Account anonymized',
  'settings.privacy.error.export_failed': 'Export failed. Please try again.',
  'settings.privacy.error.delete_failed': 'Delete failed. Please try again.',
  'settings.privacy.error.rate_limited': 'Rate limited. Retry in {minutes} min.',
  'settings.privacy.delete_mismatch_hint': 'Type DELETE_MY_ACCOUNT exactly to enable the button.',

  // MDX ErrorBoundary fallback localized
  'privacy.policy_unavailable': 'Privacy policy is temporarily unavailable. Please try again later.',
  'cookies.policy_unavailable': 'Cookie policy is temporarily unavailable. Please try again later.',
} as const;

export default enLegal;
