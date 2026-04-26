// T-CONFIG-026 — formatRelativeTime unit tests
// 10+ casi: now, 30s ago, 5min, 2h, yesterday, days, weeks, months, years,
// invalid input, future timestamp.

import { describe, expect, it } from 'vitest';
import { formatRelativeTime } from '../../../../src/console/config/lib/format-relative-time';

const NOW = new Date('2026-04-26T15:00:00Z');

function ago(ms: number): string {
  return new Date(NOW.getTime() - ms).toISOString();
}

describe('formatRelativeTime', () => {
  it('returns "just now" for less than 30s', () => {
    expect(formatRelativeTime(ago(0), NOW)).toBe('just now');
    expect(formatRelativeTime(ago(15_000), NOW)).toBe('just now');
  });

  it('returns "X seconds ago" between 30s and 60s', () => {
    expect(formatRelativeTime(ago(30_000), NOW)).toBe('30 seconds ago');
    expect(formatRelativeTime(ago(45_000), NOW)).toBe('45 seconds ago');
  });

  it('returns "1 minute ago" singular', () => {
    expect(formatRelativeTime(ago(60_000), NOW)).toBe('1 minute ago');
  });

  it('returns "X minutes ago" plural', () => {
    expect(formatRelativeTime(ago(5 * 60_000), NOW)).toBe('5 minutes ago');
    expect(formatRelativeTime(ago(59 * 60_000), NOW)).toBe('59 minutes ago');
  });

  it('returns "X hours ago"', () => {
    expect(formatRelativeTime(ago(60 * 60_000), NOW)).toBe('1 hour ago');
    expect(formatRelativeTime(ago(2 * 60 * 60_000), NOW)).toBe('2 hours ago');
  });

  it('returns "yesterday" between 24h and 48h', () => {
    expect(formatRelativeTime(ago(24 * 60 * 60_000), NOW)).toBe('yesterday');
    expect(formatRelativeTime(ago(40 * 60 * 60_000), NOW)).toBe('yesterday');
  });

  it('returns "X days ago" between 2 and 7 days', () => {
    expect(formatRelativeTime(ago(2 * 24 * 60 * 60_000), NOW)).toBe('2 days ago');
    expect(formatRelativeTime(ago(5 * 24 * 60 * 60_000), NOW)).toBe('5 days ago');
  });

  it('returns "X weeks ago" between 7 and 30 days', () => {
    expect(formatRelativeTime(ago(7 * 24 * 60 * 60_000), NOW)).toBe('1 week ago');
    expect(formatRelativeTime(ago(20 * 24 * 60 * 60_000), NOW)).toBe('2 weeks ago');
  });

  it('returns "X months ago" between 30 days and 1 year', () => {
    expect(formatRelativeTime(ago(30 * 24 * 60 * 60_000), NOW)).toBe('1 month ago');
    expect(formatRelativeTime(ago(180 * 24 * 60 * 60_000), NOW)).toBe('6 months ago');
  });

  it('returns "X years ago" beyond 365 days', () => {
    expect(formatRelativeTime(ago(365 * 24 * 60 * 60_000), NOW)).toBe('1 year ago');
    expect(formatRelativeTime(ago(2 * 365 * 24 * 60 * 60_000), NOW)).toBe('2 years ago');
  });

  it('returns "unknown" for invalid input', () => {
    expect(formatRelativeTime('', NOW)).toBe('unknown');
    expect(formatRelativeTime('not-a-date', NOW)).toBe('unknown');
    // @ts-expect-error - testing runtime resilience
    expect(formatRelativeTime(null, NOW)).toBe('unknown');
  });

  it('returns "just now" for slight clock skew (future <1min)', () => {
    const future = new Date(NOW.getTime() + 30_000).toISOString();
    expect(formatRelativeTime(future, NOW)).toBe('just now');
  });

  it('returns "in the future" for distant future timestamps', () => {
    const future = new Date(NOW.getTime() + 60 * 60_000).toISOString();
    expect(formatRelativeTime(future, NOW)).toBe('in the future');
  });
});
