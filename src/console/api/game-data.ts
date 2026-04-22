import { consoleFetch } from './client';
import type {
  GameDataPatchResponse,
  GameDataSyncResponse,
} from '../types';

// Stato corrente del DB: patch version + conteggi champion/item.
// Endpoint pubblico (nessun auth), ma consoleFetch aggiunge il JWT
// comunque se presente — nessun problema.
export function fetchGameDataPatch(): Promise<GameDataPatchResponse> {
  return consoleFetch<GameDataPatchResponse>('/api/game-data/patch-version');
}

// Trigger sync Data Dragon → popola/aggiorna tabelle champions e items.
// Richiede JWT valido (get_current_user sul backend).
export function syncGameData(): Promise<GameDataSyncResponse> {
  return consoleFetch<GameDataSyncResponse>('/api/game-data/sync', {
    method: 'POST',
  });
}
