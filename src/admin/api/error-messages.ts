const errorMessages: Record<string, string> = {
  // Auth
  ADMIN_KEY_MISSING: 'Chiave admin non presente. Effettua il login.',
  ADMIN_KEY_INVALID: 'Chiave admin non valida.',
  ADMIN_REVOKED: 'Account admin revocato.',

  // Plans
  PLAN_NOT_FOUND: 'Piano non trovato.',
  PLAN_SLUG_CONFLICT: 'Slug già in uso da un altro piano.',
  PRICE_CHANGE_BLOCKED: 'Prezzo non modificabile: esistono promozioni attive.',
  LAST_ACTIVE_PLAN: "Impossibile disattivare l'ultimo piano attivo.",
  INVALID_STRIPE_PRICE: 'Stripe Price ID non valido.',

  // Promotions
  PROMOTION_NOT_FOUND: 'Promozione non trovata.',
  INVALID_PROMO_PRICE:
    'Il prezzo promozionale deve essere inferiore al prezzo base del piano.',
  ACTIVE_PROMO_EXISTS:
    'Esiste già una promozione attiva per questo piano.',
  PROMO_NAME_CONFLICT: 'Nome promozione già in uso.',
  IMMUTABLE_FIELD: 'Questo campo non è modificabile.',
  STRIPE_COUPON_FAILED: 'Errore nella creazione del coupon Stripe.',

  // Trial
  INVALID_TRIAL_DAYS: 'I giorni di trial devono essere tra 1 e 30.',

  // AI Providers
  PROVIDER_NOT_FOUND: 'Provider non trovato.',
  MODEL_NOT_FOUND: 'Modello non trovato.',
  LAST_ACTIVE_PROVIDER: "Impossibile disattivare l'ultimo provider attivo.",
  PROVIDER_HAS_ACTIVE_PLANS:
    'Il provider ha piani attivi che usano i suoi modelli.',
  LAST_ACTIVE_MODEL:
    "Impossibile disattivare l'ultimo modello attivo del provider.",

  // Generic
  STRIPE_UNAVAILABLE: 'Servizio Stripe non disponibile. Riprova più tardi.',
  INVALID_DATE_RANGE: 'Intervallo date non valido.',
  NETWORK_ERROR: 'Errore di rete. Verifica la connessione.',
};

export function getErrorMessage(code: string): string {
  return errorMessages[code] ?? `Errore: ${code}`;
}
