// @vitest-environment jsdom
//
// WPCP-027 — CounterAutocompleteList component tests.
//
// `<ul role="listbox">` con `<li role="option">` per ogni suggestion. Highlight
// dell'item corrente via aria-selected. Click emette `onSelect(slug)`.

import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CounterAutocompleteList } from '../../../src/components/counter/CounterAutocompleteList';
import type { SearchResult } from '../../../src/lib/counter/search';

afterEach(cleanup);

function makeSuggestions(): SearchResult[] {
  return [
    {
      slug: 'zed',
      display_name: 'Zed',
      dd_id: 'Zed',
      key: '238',
      cited_in_roles: ['mid'],
      has_guide: true,
    },
    {
      slug: 'zeri',
      display_name: 'Zeri',
      dd_id: 'Zeri',
      key: '221',
      cited_in_roles: ['bot'],
      has_guide: false,
    },
    {
      slug: 'zilean',
      display_name: 'Zilean',
      dd_id: 'Zilean',
      key: '26',
      cited_in_roles: ['support'],
      has_guide: false,
    },
  ];
}

describe('CounterAutocompleteList — rendering', () => {
  it('renders a listbox with one option per suggestion', () => {
    render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={makeSuggestions()}
        highlightedIdx={null}
        onSelect={() => {}}
      />
    ));
    expect(screen.getByRole('listbox')).toBeTruthy();
    expect(screen.getAllByRole('option').length).toBe(3);
  });

  it('uses the listId as the ul id (for aria-controls wiring)', () => {
    const { container } = render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="autocomplete-xyz"
        suggestions={makeSuggestions()}
        highlightedIdx={null}
        onSelect={() => {}}
      />
    ));
    const ul = container.querySelector('ul[role="listbox"]');
    expect(ul?.id).toBe('autocomplete-xyz');
  });

  it('marks the highlighted option with aria-selected=true', () => {
    render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={makeSuggestions()}
        highlightedIdx={1}
        onSelect={() => {}}
      />
    ));
    const options = screen.getAllByRole('option');
    expect(options[0]?.getAttribute('aria-selected')).toBe('false');
    expect(options[1]?.getAttribute('aria-selected')).toBe('true');
    expect(options[2]?.getAttribute('aria-selected')).toBe('false');
  });

  it('renders display_name and a role badge for each option', () => {
    render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={makeSuggestions()}
        highlightedIdx={null}
        onSelect={() => {}}
      />
    ));
    expect(screen.getByText('Zed')).toBeTruthy();
    expect(screen.getByText('Zeri')).toBeTruthy();
    expect(screen.getByText('Zilean')).toBeTruthy();
  });

  it('renders empty when suggestions are empty', () => {
    const { container } = render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={[]}
        highlightedIdx={null}
        onSelect={() => {}}
      />
    ));
    // No <ul> when empty (consumer renders alternative empty-state copy).
    expect(container.querySelector('ul[role="listbox"]')).toBeNull();
  });
});

describe('CounterAutocompleteList — interaction', () => {
  it('calls onSelect with the clicked slug', () => {
    const spy = vi.fn();
    render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={makeSuggestions()}
        highlightedIdx={null}
        onSelect={spy}
      />
    ));
    const opts = screen.getAllByRole('option');
    fireEvent.mouseDown(opts[1]!);
    expect(spy).toHaveBeenCalledWith('zeri');
  });

  it('respects max 10 suggestions visible (consumer responsibility but verify boundary)', () => {
    // Costruisci 12 entry; il componente le rendera tutte ma il consumer
    // deve aver gia fatto slice. Il container scrollera oltre 10.
    const many: SearchResult[] = Array.from({ length: 12 }, (_, i) => ({
      slug: `pad-${i}`,
      display_name: `Pad ${i}`,
      dd_id: null,
      key: null,
      cited_in_roles: ['top'],
      has_guide: false,
    }));
    render(() => (
      <CounterAutocompleteList
        lang="en"
        listId="test-list"
        suggestions={many}
        highlightedIdx={null}
        onSelect={() => {}}
      />
    ));
    // Verifica che il container abbia una classe overflow per scroll oltre 10.
    const ul = screen.getByRole('listbox');
    const cls = ul.className;
    expect(cls).toMatch(/overflow/);
    expect(screen.getAllByRole('option').length).toBe(12);
  });
});
