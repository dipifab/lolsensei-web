import { consoleFetch } from './client';
import type {
  TrialConfigResponse,
  TrialConfigUpdateRequest,
} from '../types';

export function fetchTrialConfig(): Promise<TrialConfigResponse> {
  return consoleFetch<TrialConfigResponse>('/api/admin/trial-config');
}

export function updateTrialConfig(
  data: TrialConfigUpdateRequest,
): Promise<TrialConfigResponse> {
  return consoleFetch<TrialConfigResponse>('/api/admin/trial-config', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
