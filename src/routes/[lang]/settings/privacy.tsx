// WP24 TASK-3-014 — DSR dashboard (JWT-gated): export + delete + manage cookies.
import { Meta, Title } from '@solidjs/meta';
import { createSignal, Show, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Modal from '../../../components/ui/Modal';
import { useI18n } from '../../../i18n';
import { getJwt } from '../../../auth/store';
import {
  deleteUserData,
  downloadExportAsJson,
  getUserDataExport,
  type DsrError,
} from '../../../lib/dsr';
import { pushToast } from '../../../components/ui/toastStore';
import { consentStore } from '../../../stores/consentStore';

const DELETE_CONFIRMATION = 'DELETE_MY_ACCOUNT';

export default function SettingsPrivacyRoute() {
  const { t, locale, loadLegal } = useI18n();
  const navigate = useNavigate();

  const [exporting, setExporting] = createSignal(false);
  const [deleting, setDeleting] = createSignal(false);
  const [confirmOpen, setConfirmOpen] = createSignal(false);
  const [confirmText, setConfirmText] = createSignal('');

  onMount(() => {
    void loadLegal();
    if (!getJwt()) {
      navigate(`/${locale()}/`, { replace: true });
    }
  });

  const handleExport = async () => {
    if (exporting()) return;
    setExporting(true);
    try {
      const data = await getUserDataExport();
      downloadExportAsJson(data);
      // WP24 F-06 — copy dedicato per l'export (non la chiave consent.preferences.saved).
      pushToast({ message: t('settings.privacy.export_success'), variant: 'success' });
    } catch (err) {
      const e = err as DsrError;
      const msg =
        e.status === 429 && e.retry_after_sec
          ? t('settings.privacy.error.rate_limited').replace(
              '{minutes}',
              String(Math.ceil(e.retry_after_sec / 60)),
            )
          : e.detail || t('settings.privacy.error.export_failed');
      pushToast({ message: msg, variant: 'error' });
    } finally {
      setExporting(false);
    }
  };

  const handleDelete = async () => {
    if (deleting() || confirmText() !== DELETE_CONFIRMATION) return;
    setDeleting(true);
    try {
      await deleteUserData();
      setConfirmOpen(false);
      pushToast({ message: t('settings.privacy.delete_success'), variant: 'success' });
      navigate(`/${locale()}/`, { replace: true });
    } catch (err) {
      const e = err as DsrError;
      pushToast({
        message: e.detail || t('settings.privacy.error.delete_failed'),
        variant: 'error',
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <Title>{t('settings.privacy.title')} — LoL Sensei</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main class="mx-auto max-w-2xl px-6 py-10 md:py-16 text-on-surface">
        <h1 class="text-3xl md:text-4xl font-headline font-extrabold mb-8">
          {t('settings.privacy.title')}
        </h1>

        <section class="mb-8 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20">
          <h2 class="font-headline font-bold text-xl mb-2">{t('settings.privacy.export_button')}</h2>
          <p class="text-sm text-on-surface/80 mb-4">{t('settings.privacy.export_description')}</p>
          <button
            type="button"
            onClick={handleExport}
            disabled={exporting()}
            aria-busy={exporting()}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold bg-primary-container text-on-primary-container hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
          >
            {exporting() ? '…' : t('settings.privacy.export_button')}
          </button>
          <span class="sr-only" aria-live="polite">
            {exporting() ? t('common.loading') : ''}
          </span>
        </section>

        <section class="mb-8 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20">
          <h2 class="font-headline font-bold text-xl mb-2">{t('settings.privacy.delete_button')}</h2>
          <p class="text-sm text-on-surface/80 mb-4">{t('settings.privacy.delete_description')}</p>
          <button
            type="button"
            onClick={() => {
              setConfirmText('');
              setConfirmOpen(true);
            }}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold border border-error text-error hover:bg-error/10 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-error focus-visible:outline-none"
          >
            {t('settings.privacy.delete_button')}
          </button>
        </section>

        <section class="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20">
          <h2 class="font-headline font-bold text-xl mb-4">{t('settings.privacy.manage_cookies')}</h2>
          <button
            type="button"
            onClick={() => consentStore.openCenter()}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold border border-on-surface/30 text-on-surface hover:bg-on-surface/5 motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-on-surface/40 focus-visible:outline-none"
          >
            {t('consent.footer_link')}
          </button>
        </section>
      </main>

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title={t('settings.privacy.delete_button')}
        dismissOnOverlay={false}
      >
        <p class="text-sm text-on-surface/80 mb-4">{t('settings.privacy.delete_description')}</p>
        <label class="block mb-4">
          <span class="block text-sm font-semibold mb-2">
            {t('settings.privacy.delete_confirm_placeholder')}
          </span>
          <input
            type="text"
            value={confirmText()}
            onInput={(e) => setConfirmText(e.currentTarget.value)}
            placeholder={DELETE_CONFIRMATION}
            aria-invalid={
              confirmText().length > 0 && confirmText() !== DELETE_CONFIRMATION
            }
            aria-describedby="delete-confirm-hint"
            class="w-full min-h-11 px-4 py-2 rounded-lg bg-surface border border-outline text-on-surface font-mono focus-visible:ring-2 focus-visible:ring-error focus-visible:outline-none"
          />
          <p id="delete-confirm-hint" class="sr-only" role="status">
            <Show
              when={
                confirmText().length > 0 && confirmText() !== DELETE_CONFIRMATION
              }
            >
              {t('settings.privacy.delete_mismatch_hint')}
            </Show>
          </p>
        </label>
        <div class="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => setConfirmOpen(false)}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold border border-on-surface/30 text-on-surface hover:bg-on-surface/5"
          >
            {t('common.cancel')}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting() || confirmText() !== DELETE_CONFIRMATION}
            aria-busy={deleting()}
            class="inline-flex items-center justify-center min-h-11 px-6 py-3 rounded-lg font-headline font-semibold bg-error text-on-error disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-error focus-visible:outline-none"
          >
            <Show when={deleting()} fallback={t('settings.privacy.delete_button')}>
              …
            </Show>
          </button>
        </div>
      </Modal>
      <Footer />
    </>
  );
}
