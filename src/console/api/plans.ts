import { consoleFetch } from './client';
import type {
  PlanResponse,
  PlanCreateRequest,
  PlanUpdateRequest,
} from '../types';

export function fetchPlans(isActive?: boolean): Promise<PlanResponse[]> {
  const params = isActive !== undefined ? `?is_active=${isActive}` : '';
  return consoleFetch<PlanResponse[]>(`/api/admin/plans${params}`);
}

export function createPlan(data: PlanCreateRequest): Promise<PlanResponse> {
  return consoleFetch<PlanResponse>('/api/admin/plans', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updatePlan(
  planId: string,
  data: PlanUpdateRequest,
): Promise<PlanResponse> {
  return consoleFetch<PlanResponse>(`/api/admin/plans/${planId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function deactivatePlan(planId: string): Promise<PlanResponse> {
  return consoleFetch<PlanResponse>(`/api/admin/plans/${planId}`, {
    method: 'DELETE',
  });
}
