// AllowlistAddDialog — form add email + notes con gestione 409/422
// REQ-F-021-003
import { Show, createEffect, createSignal, createUniqueId } from 'solid-js';
import ConsoleDialog from './ConsoleDialog';
import { ConsoleApiError } from '../api/client';
import {
  createAllowlistEntry,
  type AllowlistEntry,
} from '../api/allowlist';

export interface AllowlistAddDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (entry: AllowlistEntry) => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTES_MAX = 500;

export default function AllowlistAddDialog(props: AllowlistAddDialogProps) {
  const emailId = createUniqueId();
  const notesId = createUniqueId();
  const errorId = createUniqueId();

  const [email, setEmail] = createSignal('');
  const [notes, setNotes] = createSignal('');
  const [submitting, setSubmitting] = createSignal(false);
  const [formError, setFormError] = createSignal<string | null>(null);

  let emailInputRef: HTMLInputElement | undefined;

  createEffect(() => {
    if (props.open) {
      setEmail('');
      setNotes('');
      setFormError(null);
      setSubmitting(false);
      // U17: focus sul primo input all'apertura del dialog.
      // Doppio rAF: il primo tick fa montare <ConsoleDialog> (Portal), il
      // secondo garantisce che l'input sia nel DOM prima del focus().
      requestAnimationFrame(() => {
        requestAnimationFrame(() => emailInputRef?.focus());
      });
    }
  });

  const emailValid = () => EMAIL_REGEX.test(email().trim());
  const canSubmit = () => !submitting() && emailValid() && notes().length <= NOTES_MAX;

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!canSubmit()) return;
    setSubmitting(true);
    setFormError(null);
    const body = {
      email: email().trim().toLowerCase(),
      notes: notes().trim() ? notes().trim() : undefined,
    };
    try {
      const entry = await createAllowlistEntry(body);
      props.onSuccess(entry);
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 409) {
          setFormError('Email gia presente in allowlist.');
        } else if (err.status === 422) {
          setFormError(err.detail || 'Dati non validi.');
        } else if (err.status >= 500) {
          setFormError('Errore server, riprova.');
        } else {
          setFormError(err.detail || 'Errore durante la creazione.');
        }
      } else {
        setFormError('Errore inatteso.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ConsoleDialog
      open={props.open}
      onClose={() => (submitting() ? undefined : props.onClose())}
      title="Aggiungi admin"
      width="md"
      footer={
        <>
          <button
            type="button"
            disabled={submitting()}
            onClick={() => props.onClose()}
            class="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-sm font-medium text-on-surface hover:bg-surface-container-high disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            Annulla
          </button>
          <button
            type="submit"
            form="allowlist-add-form"
            disabled={!canSubmit()}
            class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            {submitting() ? 'Salvataggio...' : 'Aggiungi'}
          </button>
        </>
      }
    >
      <form id="allowlist-add-form" class="space-y-4" onSubmit={handleSubmit} novalidate>
        <div>
          <label
            for={emailId}
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            Email <span class="text-error">*</span>
          </label>
          <input
            id={emailId}
            ref={emailInputRef}
            type="email"
            required
            autocomplete="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            disabled={submitting()}
            aria-invalid={formError() ? 'true' : undefined}
            aria-describedby={formError() ? errorId : undefined}
            class="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container disabled:opacity-50"
            placeholder="nome@example.com"
          />
        </div>
        <div>
          <label
            for={notesId}
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            Note (opz.)
          </label>
          <textarea
            id={notesId}
            value={notes()}
            onInput={(e) => setNotes(e.currentTarget.value)}
            disabled={submitting()}
            maxLength={NOTES_MAX}
            rows={3}
            class="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none resize-y disabled:opacity-50"
            placeholder="Ruolo, team, riferimento ticket..."
          />
          <p class="mt-1 text-right text-xs text-on-surface-variant">
            {notes().length}/{NOTES_MAX}
          </p>
        </div>
        <Show when={formError()}>
          <p id={errorId} role="alert" class="text-sm text-error">
            {formError()}
          </p>
        </Show>
      </form>
    </ConsoleDialog>
  );
}
