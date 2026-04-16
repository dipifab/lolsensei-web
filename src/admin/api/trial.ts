import { adminFetch } from './client';
import type {
  TrialConfigResponse,
  TrialConfigUpdateRequest,
} from '../types';

export function fetchTrialConfig(): Promise<TrialConfigResponse> {
  return adminFetch<TrialConfigResponse>('/api/admin/trial-config');
}

export function updateTrialConfig(
  data: TrialConfigUpdateRequest,
): Promise<TrialConfigResponse> {
  return adminFetch<TrialConfigResponse>('/api/admin/trial-config', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
