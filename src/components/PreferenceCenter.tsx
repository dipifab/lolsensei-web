// WP24 TASK-3-009 — Preference center modale.
// Consumato sia via footer link sia via CookieBanner (lazy-loaded).
// WP24 TASK-4-024 — Le chiavi `consent.preferences.*` vivono nel bundle legal
// lazy (src/i18n/legal/<lang>.ts); invochiamo `loadLegal()` in onMount per
// coprire il path "footer link -> preference center" in cui il banner potrebbe
// non essere mai stato montato.
import type { Accessor } from 'solid-js';
import { createSignal, onMount } from 'solid-js';
import Modal from './ui/Modal';
import ConsentToggle from './ConsentToggle';
import { useI18n } from '../i18n';
import type { ConsentScope } from '../lib/consent';
import { pushToast } from './ui/toastStore';

interface Props {
  open: Accessor<boolean>;
  initialScope: ConsentScope;
  onSave: (s: ConsentScope) => void;
  onClose: () => void;
}

export default function PreferenceCenter(props: Props) {
  const { t, loadLegal } = useI18n();
  const [analytics, setAnalytics] = createSignal(props.initialScope.analytics);
  const [marketing, setMarketing] = createSignal(props.initialScope.marketing);

  onMount(() => {
    // Idempotent: se CookieBanner ha gia' caricato il legal, questa chiamata
    // e' un no-op (cache hit sulla promise).
    loadLegal().catch(() => {
      // Failure silenzioso: Modal resta visibile con chiavi raw come fallback
      // finale. Il PreferenceCenter e' comunque gia' lazy-loaded quindi siamo
      // dentro una action utente (no SSR / no prerender concerns).
    });
  });

  const handleSave = () => {
    const next: ConsentScope = {
      technical: true,
      analytics: analytics(),
      marketing: marketing(),
    };
    props.onSave(next);
    pushToast({ message: t('consent.preferences.saved'), variant: 'success' });
    props.onClose();
  };

  return (
    <Modal open={props.open} onClose={props.onClose} title={t('consent.preferences.title')} size="md">
      <p class="text-sm text-on-surface/80 mb-5">{t('consent.preferences.intro')}</p>

      <div class="flex flex-col gap-1 mb-6">
        <ConsentToggle
          label={t('consent.preferences.technical.label')}
          description={t('consent.preferences.technical.description')}
          value={true}
          disabled
          onChange={() => {}}
        />
        <ConsentToggle
          label={t('consent.preferences.analytics.label')}
          description={t('consent.preferences.analytics.description')}
          value={analytics()}
          onChange={setAnalytics}
        />
        <ConsentToggle
          label={t('consent.preferences.marketing.label')}
          description={t('consent.preferences.marketing.description')}
          value={marketing()}
          onChange={setMarketing}
        />
      </div>

      <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={props.onClose}
          class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold border border-on-surface/30 text-on-surface hover:bg-on-surface/5 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-on-surface/40 focus-visible:outline-none"
        >
          {t('common.cancel')}
        </button>
        <button
          type="button"
          onClick={handleSave}
          class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold bg-primary-container text-on-primary-container hover:brightness-110 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
        >
          {t('consent.preferences.save')}
        </button>
      </div>
    </Modal>
  );
}
