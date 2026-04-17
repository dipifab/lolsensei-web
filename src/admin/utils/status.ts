import type { AdminBadgeVariant } from '../components/AdminBadge';

/**
 * Maps a raw subscription status plus the suspension flag to the
 * corresponding AdminBadge variant used across the user management UI.
 */
export function statusToVariant(
  status: string,
  suspended: boolean,
): AdminBadgeVariant {
  if (suspended) return 'suspended';
  switch (status) {
    case 'active':
      return 'active';
    case 'trialing':
      return 'trialing';
    case 'past_due':
      return 'past_due';
    case 'cancelled':
      return 'expired';
    case 'free':
      return 'free';
    default:
      return 'inactive';
  }
}
