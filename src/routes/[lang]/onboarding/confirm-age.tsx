// WP24 TASK-3-015 — Age gate form (GDPR Art. 8).
// PATCH /api/user/age-confirmation quando confermato.
import { Meta, Title } from '@solidjs/meta';
import { createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import AgeGateCheckbox from '../../../components/AgeGateCheckbox';
import { useI18n } from '../../../i18n';
import { getJwt } from '../../../auth/store';

const API_BASE_URL = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''
).replace(/\/$/, '');

export default function ConfirmAgeRoute() {
  const { t, locale, loadLegal } = useI18n();
  const navigate = useNavigate();
  const [checked, setChecked] = createSignal(false);
  const [submitting, setSubmitting] = createSignal(false);
  const [error, setError] = createSignal<string | undefined>();

  onMount(() => {
    void loadLegal();
    if (!getJwt()) {
      navigate(`/${locale()}/`, { replace: true });
    }
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!checked()) {
      setError(t('age_gate.error'));
      return;
    }
    setSubmitting(true);
    setError(undefined);
    try {
      const res = await fetch(`${API_BASE_URL}/api/user/age-confirmation`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${getJwt() ?? ''}`,
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
        // WP24 BL-01 (GDPR Art. 8): il contratto backend richiede il campo
        // ``age_confirmed`` (Literal[True]); la precedente shape ``confirmed``
        // produceva 422 sistematico lasciando ``users.age_confirmed_at`` NULL.
        body: JSON.stringify({ age_confirmed: true }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      navigate(`/${locale()}/`, { replace: true });
    } catch {
      setError(t('age_gate.submit_error'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Title>{t('age_gate.page_title')}</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main class="mx-auto max-w-lg px-6 py-16 text-on-surface">
        <h1 class="text-2xl md:text-3xl font-headline font-extrabold mb-6">
          {t('age_gate.heading')}
        </h1>
        <form onSubmit={handleSubmit} class="flex flex-col gap-6">
          <AgeGateCheckbox checked={checked()} onChange={setChecked} error={error()} />
          <button
            type="submit"
            disabled={submitting()}
            aria-busy={submitting()}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest bg-primary-container text-on-primary-container hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
          >
            {submitting() ? '…' : t('age_gate.submit')}
          </button>
          <span class="sr-only" aria-live="polite">
            {submitting() ? t('common.loading') : ''}
          </span>
        </form>
      </main>
      <Footer />
    </>
  );
}
