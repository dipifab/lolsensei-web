import type { ConsoleBadgeVariant } from '../components/ConsoleBadge';

/**
 * Maps a raw subscription status plus the suspension flag to the
 * corresponding ConsoleBadge variant used across the user management UI.
 */
export function statusToVariant(
  status: string,
  suspended: boolean,
): ConsoleBadgeVariant {
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
