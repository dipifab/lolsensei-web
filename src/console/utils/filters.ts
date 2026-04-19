import type { FilterValues } from '../components/users/FilterBar';

/**
 * Returns true when at least one filter field on the users list page is set.
 * Kept in a shared util to avoid duplicating the boolean expression across
 * FilterBar and UsersListPage.
 */
export function hasActiveFilters(values: FilterValues): boolean {
  return Boolean(
    values.status
    || values.plan_id
    || values.registered_from
    || values.registered_to
    || (values.search && values.search.length > 0),
  );
}
