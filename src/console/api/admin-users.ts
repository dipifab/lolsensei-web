import { consoleFetch } from './client';
import type { ConsoleUserResponse } from '../types';

export function fetchConsoleAdmins(): Promise<ConsoleUserResponse[]> {
  return consoleFetch<ConsoleUserResponse[]>('/api/admin/admins');
}
