// WP24 TASK-3-028 — lib/cookie.ts guards.
// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { deleteCookie, readCookie, writeCookie } from '../../../src/lib/cookie';

describe('cookie helper (WP24)', () => {
  beforeEach(() => {
    // Clear document.cookie best-effort
    document.cookie.split(';').forEach((c) => {
      const [name] = c.split('=');
      document.cookie = `${name.trim()}=; Max-Age=0; Path=/`;
    });
  });

  it('readCookie returns null for missing key', () => {
    expect(readCookie('not-there')).toBeNull();
  });

  it('writeCookie stores a value recoverable via readCookie', () => {
    writeCookie('wp24_test', 'hello');
    expect(readCookie('wp24_test')).toBe('hello');
  });

  it('writeCookie URL-encodes values with reserved chars', () => {
    writeCookie('wp24_json', '{"a":"b c"}');
    expect(readCookie('wp24_json')).toBe('{"a":"b c"}');
  });

  it('deleteCookie removes the value', () => {
    writeCookie('wp24_del', 'x');
    expect(readCookie('wp24_del')).toBe('x');
    deleteCookie('wp24_del');
    expect(readCookie('wp24_del')).toBeNull();
  });

  it('readCookie handles URL-encoded names', () => {
    writeCookie('wp24 name with space', 'ok');
    expect(readCookie('wp24 name with space')).toBe('ok');
  });
});
