// Auth store WP21 — JWT in localStorage (key "jwt"), signal SolidJS
// REQ-F-021-013, CLR-003
import { createSignal } from 'solid-js';

const JWT_STORAGE_KEY = 'jwt';

function readInitial(): string | null {
  try {
    return localStorage.getItem(JWT_STORAGE_KEY);
  } catch {
    return null;
  }
}

const [jwt, setJwt] = createSignal<string | null>(readInitial());

export function getJwt(): string | null {
  return jwt();
}

export function setAuthJwt(token: string | null): void {
  try {
    if (token === null || token === '') {
      localStorage.removeItem(JWT_STORAGE_KEY);
    } else {
      localStorage.setItem(JWT_STORAGE_KEY, token);
    }
  } catch {
    // ambienti privacy-restricted: ignora storage error, aggiorna solo signal
  }
  setJwt(token && token !== '' ? token : null);
}

// Per consumers che vogliono reagire reattivamente
export const jwtSignal = jwt;
