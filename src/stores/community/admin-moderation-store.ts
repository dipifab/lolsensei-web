// src/stores/community/admin-moderation-store.ts
//
// Moderation triage queue store. Fine-grained reactivity via createStore.
// Selection uses a ReadonlySet with SHIFT-click range expansion tracked via
// lastSelectedId for keyboard+mouse parity.

import { createStore, produce } from "solid-js/store";
import { batch } from "solid-js";
import type {
  ModQueueItem,
  QueueQuery,
  ReportStatus,
} from "../../services/community-admin-api";

export interface ModerationFilters extends Omit<QueueQuery, "page" | "per_page"> {
  status: ReportStatus | "in_progress";
}

export interface AdminModerationState {
  items: ModQueueItem[];
  total: number;
  page: number;
  perPage: number;
  filters: ModerationFilters;
  selection: ReadonlySet<string>;
  lastSelectedId: string | null;
  reporterIdentityRedacted: boolean;
  loading: boolean;
  error: string | null;
}

const DEFAULT_PER_PAGE = 20;

function emptyState(): AdminModerationState {
  return {
    items: [],
    total: 0,
    page: 1,
    perPage: DEFAULT_PER_PAGE,
    filters: { status: "pending" },
    selection: new Set<string>(),
    lastSelectedId: null,
    reporterIdentityRedacted: true,
    loading: false,
    error: null,
  };
}

export const [modState, setModState] = createStore<AdminModerationState>(
  emptyState(),
);

export function setFilters(next: Partial<ModerationFilters>): void {
  batch(() => {
    setModState("filters", (prev) => ({ ...prev, ...next }));
    setModState("page", 1);
    setModState("selection", new Set<string>());
    setModState("lastSelectedId", null);
  });
}

export function setPage(page: number): void {
  batch(() => {
    setModState("page", page);
    setModState("selection", new Set<string>());
    setModState("lastSelectedId", null);
  });
}

export function toggleSelection(id: string, withShift: boolean): void {
  setModState(
    produce((s) => {
      const next = new Set(s.selection);
      if (withShift && s.lastSelectedId) {
        const ids = s.items.map((i) => i.report.id);
        const a = ids.indexOf(s.lastSelectedId);
        const b = ids.indexOf(id);
        if (a >= 0 && b >= 0) {
          const [lo, hi] = a < b ? [a, b] : [b, a];
          for (let i = lo; i <= hi; i++) next.add(ids[i]);
        }
      } else if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      s.selection = next;
      s.lastSelectedId = id;
    }),
  );
}

export function clearSelection(): void {
  batch(() => {
    setModState("selection", new Set<string>());
    setModState("lastSelectedId", null);
  });
}

export function removeReportsLocal(ids: string[]): void {
  // Optimistic: remove from current page after successful action.
  setModState(
    produce((s) => {
      const drop = new Set(ids);
      s.items = s.items.filter((i) => !drop.has(i.report.id));
      s.total = Math.max(0, s.total - ids.length);
      const sel = new Set(s.selection);
      ids.forEach((id) => sel.delete(id));
      s.selection = sel;
    }),
  );
}

export function resetStore(): void {
  setModState(emptyState());
}
