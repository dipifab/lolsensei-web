import { Show, createMemo, createSignal, createEffect } from 'solid-js';
import Icon from '../../../components/Icon';
import { formatInteger } from '../../utils/format';

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const lastPage = createMemo(() =>
    Math.max(1, Math.ceil(props.total / props.pageSize)),
  );
  const [draft, setDraft] = createSignal<string>(String(props.page));

  createEffect(() => {
    setDraft(String(props.page));
  });

  const commit = (raw: string) => {
    const n = parseInt(raw, 10);
    if (Number.isFinite(n) && n >= 1 && n <= lastPage() && n !== props.page) {
      props.onPageChange(n);
    } else {
      setDraft(String(props.page));
    }
  };

  return (
    <Show when={props.total > 0}>
      <div class="flex items-center justify-between gap-4 px-1 py-3">
        <span
          class="text-xs text-on-surface-variant"
          aria-live="polite"
        >
          Page <span class="font-semibold text-on-surface">{props.page}</span> of{' '}
          <span class="font-semibold text-on-surface">{lastPage()}</span>
          {' '}&middot; {formatInteger(props.total)} records
        </span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            disabled={props.page <= 1}
            onClick={() => props.onPageChange(props.page - 1)}
            class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            <Icon name="chevron_left" class="w-4 h-4" />
          </button>
          <input
            type="number"
            min={1}
            max={lastPage()}
            aria-label="Page number"
            value={draft()}
            onInput={(e) => setDraft(e.currentTarget.value)}
            onBlur={(e) => commit(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                commit(e.currentTarget.value);
              }
            }}
            class="w-14 text-center rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-2 py-1 text-sm text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container"
          />
          <button
            type="button"
            aria-label="Next page"
            disabled={props.page >= lastPage()}
            onClick={() => props.onPageChange(props.page + 1)}
            class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
          >
            <Icon name="chevron_right" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </Show>
  );
}
