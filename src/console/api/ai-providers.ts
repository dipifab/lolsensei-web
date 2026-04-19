import { consoleFetch } from './client';
import type {
  AIProviderResponse,
  AIProviderUpdateRequest,
  AIModelResponse,
  AIModelUpdateRequest,
} from '../types';

export function fetchAIProviders(): Promise<AIProviderResponse[]> {
  return consoleFetch<AIProviderResponse[]>('/api/admin/ai-providers');
}

export function updateAIProvider(
  providerId: string,
  data: AIProviderUpdateRequest,
): Promise<AIProviderResponse> {
  return consoleFetch<AIProviderResponse>(
    `/api/admin/ai-providers/${providerId}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
    },
  );
}

export function updateAIModel(
  modelId: string,
  data: AIModelUpdateRequest,
): Promise<AIModelResponse> {
  return consoleFetch<AIModelResponse>(`/api/admin/ai-models/${modelId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
