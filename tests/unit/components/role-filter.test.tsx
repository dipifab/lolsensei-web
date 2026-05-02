// @vitest-environment jsdom
//
// WPCP-026 — RoleFilter component tests.
//
// Pillole tab-like: 6 bottoni (any + 5 ruoli). Click emette `onRoleChange`.
// Selected ha `aria-pressed="true"`. Ogni bottone e' raggiungibile da tastiera.

import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { RoleFilter } from '../../../src/components/counter/RoleFilter';

afterEach(cleanup);

describe('RoleFilter — rendering', () => {
  it('renders all 6 role buttons (any + 5 roles)', () => {
    render(() => <RoleFilter lang="en" value="any" onRoleChange={() => {}} />);
    // 6 bottoni con role="radio" (radiogroup pattern)
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBe(6);
  });

  it('marks the active role with aria-checked=true', () => {
    render(() => <RoleFilter lang="en" value="mid" onRoleChange={() => {}} />);
    const mid = screen.getByRole('radio', { name: /mid/i });
    expect(mid.getAttribute('aria-checked')).toBe('true');
  });

  it('marks non-selected roles with aria-checked=false', () => {
    render(() => <RoleFilter lang="en" value="mid" onRoleChange={() => {}} />);
    // Phase 5 (WPCP-025): senza I18nProvider il componente emette la chiave
    // i18n come passthrough (es. 'counter.role.top'). Asserzione mirata.
    const top = screen.getByRole('radio', { name: 'counter.role.top' });
    expect(top.getAttribute('aria-checked')).toBe('false');
  });

  it('emits i18n keys for role labels (resolved by I18nProvider in app shell)', () => {
    // Phase 5: il componente non hardcoda piu le label EN/IT; le risolve dal
    // provider i18n. In test (no provider) le label cadono in passthrough sulla
    // chiave i18n ("counter.role.<role>"). La parita EN/IT e coperta dal test
    // dedicato \.
    render(() => <RoleFilter lang="it" value="any" onRoleChange={() => {}} />);
    expect(screen.getByRole('radio', { name: 'counter.role.any' })).toBeTruthy();
  });

  it('exposes radiogroup with aria-label', () => {
    const { container } = render(() => (
      <RoleFilter lang="en" value="any" onRoleChange={() => {}} />
    ));
    const group = container.querySelector('[role="radiogroup"]');
    expect(group).toBeTruthy();
    expect(group?.getAttribute('aria-label')).toMatch(/role/i);
  });
});

describe('RoleFilter — interaction', () => {
  it('calls onRoleChange with the new role on click', () => {
    const spy = vi.fn();
    render(() => <RoleFilter lang="en" value="any" onRoleChange={spy} />);
    fireEvent.click(screen.getByRole('radio', { name: 'counter.role.top' }));
    expect(spy).toHaveBeenCalledWith('top');
  });

  it('calls onRoleChange with "any" when clicking the any pill', () => {
    const spy = vi.fn();
    render(() => <RoleFilter lang="en" value="top" onRoleChange={spy} />);
    fireEvent.click(screen.getByRole('radio', { name: 'counter.role.any' }));
    expect(spy).toHaveBeenCalledWith('any');
  });
});
