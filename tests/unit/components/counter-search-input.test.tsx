// @vitest-environment jsdom
//
// WPCP-028 — CounterSearchInput component tests.
//
// Stato: query + highlightedIdx. Keyboard:
//   - typing -> ricalcola suggestion via searchChampions
//   - ArrowDown / ArrowUp -> sposta highlight
//   - Enter -> invoca onSubmit con la suggestion highlightata (default 0)
//   - Esc -> resetta query
// Empty/loading/error states gestiti via prop boolean.

import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CounterSearchInput } from '../../../src/components/counter/CounterSearchInput';
import type { CounterIndex } from '../../../src/lib/counter/types';

afterEach(cleanup);

function makeIndex(): CounterIndex {
  return {
    schema_version: 2,
    lang: 'en',
    generated_at: '1970-01-01',
    rationales: ['stub'],
    champions: {
      aatrox: {
        display_name: 'Aatrox',
        dd_id: 'Aatrox',
        key: '266',
        cited_in_roles: ['top'],
        has_guide: true,
      },
      zed: {
        display_name: 'Zed',
        dd_id: 'Zed',
        key: '238',
        cited_in_roles: ['mid'],
        has_guide: true,
      },
      zeri: {
        display_name: 'Zeri',
        dd_id: 'Zeri',
        key: '221',
        cited_in_roles: ['bot'],
        has_guide: false,
      },
    },
    by_enemy: {},
  };
}

describe('CounterSearchInput — initial render', () => {
  it('renders an input with combobox role', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox');
    expect(input).toBeTruthy();
  });

  it('input has aria-autocomplete=list and aria-expanded=false initially', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox');
    expect(input.getAttribute('aria-autocomplete')).toBe('list');
    expect(input.getAttribute('aria-expanded')).toBe('false');
  });

  it('shows the placeholder hint when query is empty', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    // Phase 5 (WPCP-025): senza I18nProvider il componente emette la chiave
    // i18n come passthrough. Asserzione sulla chiave per stabilita.
    expect(screen.getByText('counter.search.placeholder_hint')).toBeTruthy();
  });
});

describe('CounterSearchInput — typing + filtering', () => {
  it('shows suggestions after typing >= 2 chars', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    expect(screen.getByRole('listbox')).toBeTruthy();
    expect(screen.getAllByRole('option').length).toBeGreaterThanOrEqual(2);
    // aria-expanded riflette listbox open
    expect(input.getAttribute('aria-expanded')).toBe('true');
  });

  it('shows no_results message when query has no matches', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'xxxxx' } });
    expect(screen.getByText('counter.search.no_results')).toBeTruthy();
  });
});

describe('CounterSearchInput — keyboard navigation', () => {
  it('ArrowDown moves highlight from 0 to 1', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    // Default highlight = 0 (zed). ArrowDown -> 1 (zeri).
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    const opts = screen.getAllByRole('option');
    expect(opts[1]?.getAttribute('aria-selected')).toBe('true');
  });

  it('ArrowUp at index 0 stays at 0 (clamped)', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    const opts = screen.getAllByRole('option');
    expect(opts[0]?.getAttribute('aria-selected')).toBe('true');
  });

  it('Enter submits the highlighted suggestion slug', () => {
    const spy = vi.fn();
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={spy}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(spy).toHaveBeenCalledWith('zed');
  });

  it('Enter after ArrowDown submits the second suggestion', () => {
    const spy = vi.fn();
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={spy}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(spy).toHaveBeenCalledWith('zeri');
  });

  it('Escape resets the query to empty', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={() => {}}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    expect(input.value).toBe('ze');
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(input.value).toBe('');
  });

  it('Enter with no suggestions does nothing', () => {
    const spy = vi.fn();
    render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="any"
        onSubmit={spy}
      />
    ));
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'xxxxx' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('CounterSearchInput — role filter integration', () => {
  it('respects the role prop when computing suggestions', () => {
    const { rerender } = render(() => (
      <CounterSearchInput
        lang="en"
        index={makeIndex()}
        role="top"
        onSubmit={() => {}}
      />
    )) as unknown as { rerender: (jsx: () => unknown) => void };
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'ze' } });
    // zed is mid -> filtered out by role=top. Result: empty / no_results.
    expect(screen.queryAllByRole('option').length).toBe(0);
  });
});

describe('CounterSearchInput — loading and error states', () => {
  it('shows loading skeleton when isLoading=true', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={null}
        isLoading={true}
        role="any"
        onSubmit={() => {}}
      />
    ));
    expect(screen.getByText('counter.search.loading')).toBeTruthy();
  });

  it('shows error message when error is provided', () => {
    render(() => (
      <CounterSearchInput
        lang="en"
        index={null}
        error="boom"
        role="any"
        onSubmit={() => {}}
      />
    ));
    expect(screen.getByText('counter.search.error_load')).toBeTruthy();
  });
});
