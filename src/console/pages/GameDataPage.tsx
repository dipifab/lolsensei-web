import { createResource, createSignal, Show } from 'solid-js';
import type { GameDataPatchResponse } from '../types';
import { fetchGameDataPatch, syncGameData } from '../api/game-data';
import { ConsoleApiError, clearAdminKey } from '../api/client';
import { useToast } from '../contexts/toast-context';
import PageHeader from '../components/PageHeader';
import ConsoleCard from '../components/ConsoleCard';
import ConsoleButton from '../components/ConsoleButton';
import ConsoleInfoBanner from '../components/ConsoleInfoBanner';
import ConfirmDialog from '../components/ConfirmDialog';
import Icon from '../../components/Icon';

export default function GameDataPage() {
  const toast = useToast();
  const [confirmOpen, setConfirmOpen] = createSignal(false);
  const [syncing, setSyncing] = createSignal(false);

  const [patch, { refetch }] = createResource<GameDataPatchResponse | undefined>(
    async () => {
      try {
        return await fetchGameDataPatch();
      } catch (err) {
        if (err instanceof ConsoleApiError) {
          if (err.status === 401) {
            clearAdminKey();
            return undefined;
          }
          toast.showToast(err.message, 'error');
        }
        return undefined;
      }
    },
  );

  const isDbEmpty = () => {
    const p = patch();
    return !p || p.version === 'unknown' || p.champions_count === 0;
  };

  async function handleConfirmSync() {
    setSyncing(true);
    try {
      const result = await syncGameData();
      toast.showToast(
        `Sync completato: ${result.champions_synced} champion, ${result.items_synced} item · patch ${result.version}`,
        'success',
      );
      setConfirmOpen(false);
      await refetch();
    } catch (err) {
      if (err instanceof ConsoleApiError) {
        if (err.status === 401) {
          clearAdminKey();
          return;
        }
        toast.showToast(err.message, 'error');
      } else {
        toast.showToast('Errore imprevisto durante il sync. Riprova.', 'error');
      }
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div class="space-y-6">
      <PageHeader title="Game Data" />

      <Show when={isDbEmpty()}>
        <ConsoleInfoBanner
          variant="warning"
          message="Il database non contiene dati di gioco. Avvia un sync Data Dragon per popolarlo."
        />
      </Show>

      <ConsoleCard title="Stato attuale">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatTile
            label="Patch version"
            value={patch.loading ? '…' : (patch()?.version ?? '—')}
            icon="update"
          />
          <StatTile
            label="Champion nel DB"
            value={patch.loading ? '…' : String(patch()?.champions_count ?? 0)}
            icon="group"
          />
          <StatTile
            label="Item nel DB"
            value={patch.loading ? '…' : String(patch()?.items_count ?? 0)}
            icon="inventory_2"
          />
        </div>
      </ConsoleCard>

      <ConsoleCard title="Sync Data Dragon">
        <div class="space-y-4">
          <p class="text-sm text-on-surface-variant">
            Il sync scarica da{' '}
            <a
              href="https://developer.riotgames.com/docs/lol#data-dragon"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              Data Dragon
            </a>{' '}
            l'elenco aggiornato di champion e item per la patch corrente del client
            LoL, e aggiorna le tabelle <code>champions</code> e <code>items</code> del
            DB (upsert idempotente, ~2 secondi). Esegui dopo ogni nuova patch.
          </p>
          <p class="text-xs text-on-surface-variant/70">
            Non impatta le statistiche di gameplay (win rate, pick rate), che hanno
            una pipeline separata.
          </p>
          <div>
            <ConsoleButton
              variant="primary"
              icon="sync"
              onClick={() => setConfirmOpen(true)}
              disabled={syncing()}
            >
              Sync Now
            </ConsoleButton>
          </div>
        </div>
      </ConsoleCard>

      <ConfirmDialog
        open={confirmOpen()}
        onClose={() => {
          if (!syncing()) setConfirmOpen(false);
        }}
        onConfirm={handleConfirmSync}
        title="Confermi il sync Data Dragon?"
        message="Il sync scarica da Data Dragon e sovrascrive champion/item del DB con i dati della patch corrente. L'operazione e idempotente ma puo durare alcuni secondi."
        confirmLabel="Sync Now"
        variant="warning"
        loading={syncing()}
      />
    </div>
  );
}

interface StatTileProps {
  label: string;
  value: string;
  icon: string;
}

function StatTile(props: StatTileProps) {
  return (
    <div class="rounded-lg border border-outline-variant/10 bg-surface-container-lowest px-4 py-3 flex items-center gap-3">
      <div class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon name={props.icon} class="w-5 h-5" />
      </div>
      <div class="min-w-0">
        <div class="text-xs text-on-surface-variant uppercase tracking-wide">
          {props.label}
        </div>
        <div class="text-lg font-semibold text-on-surface truncate">
          {props.value}
        </div>
      </div>
    </div>
  );
}
