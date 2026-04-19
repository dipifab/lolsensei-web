// RevokeConfirmDialog — conferma revoca allowlist con handling 400 self-remove
// REQ-F-021-003, CLR-115
import { createSignal } from 'solid-js';
import ConfirmModal from './shared/ConfirmModal';
import { ConsoleApiError } from '../api/client';
import { revokeAllowlistEntry, type AllowlistEntry } from '../api/allowlist';

export interface RevokeConfirmDialogProps {
  open: boolean;
  entry: AllowlistEntry | null;
  onCancel: () => void;
  onRevoked: () => void;
  onError: (message: string) => void;
}

export default function RevokeConfirmDialog(props: RevokeConfirmDialogProps) {
  const [loading, setLoading] = createSignal(false);

  const handleConfirm = async () => {
    const entry = props.entry;
    if (!entry || !entry.google_id) {
      props.onError('Entry non revocabile (google_id mancante).');
      return;
    }
    setLoading(true);
    try {
      await revokeAllowlistEntry(entry.google_id);
      props.onRevoked();
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 400) {
          props.onError('Operazione non permessa sul proprio account.');
        } else if (err.status === 404) {
          props.onError('Entry non trovata.');
        } else {
          props.onError(err.detail || 'Errore durante la revoca.');
        }
      } else {
        props.onError('Errore inatteso.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfirmModal
      open={props.open}
      title="Revocare accesso?"
      message={
        props.entry
          ? `Revocare l'accesso di "${props.entry.email}"? L'operazione puo essere ripristinata solo aggiungendo nuovamente l'email.`
          : ''
      }
      variant="danger"
      confirmLabel="Revoca"
      cancelLabel="Annulla"
      loading={loading()}
      onConfirm={handleConfirm}
      onClose={() => {
        if (loading()) return;
        props.onCancel();
      }}
    />
  );
}
