import { adminFetch } from './client';
import type {
  PromotionResponse,
  PromotionCreateRequest,
  PromotionUpdateRequest,
} from '../types';

export function fetchPromotions(
  isActive?: boolean,
): Promise<PromotionResponse[]> {
  const params = isActive !== undefined ? `?is_active=${isActive}` : '';
  return adminFetch<PromotionResponse[]>(`/api/admin/promotions${params}`);
}

export function createPromotion(
  data: PromotionCreateRequest,
): Promise<PromotionResponse> {
  return adminFetch<PromotionResponse>('/api/admin/promotions', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updatePromotion(
  promoId: string,
  data: PromotionUpdateRequest,
): Promise<PromotionResponse> {
  return adminFetch<PromotionResponse>(`/api/admin/promotions/${promoId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function terminatePromotion(
  promoId: string,
): Promise<PromotionResponse> {
  return adminFetch<PromotionResponse>(`/api/admin/promotions/${promoId}`, {
    method: 'DELETE',
  });
}
