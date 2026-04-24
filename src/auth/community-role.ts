// src/auth/community-role.ts
//
// Minimal role extraction from the community JWT payload (base64url-decoded).
// No heavy dependencies: admin routes are CSR-only and the JWT is the same one
// stored in localStorage by src/auth/store.ts. Signature validation is NOT
// performed client-side; the backend is the source of truth. The helper only
// guards the UI to avoid confusing 403 states for non-admins.

import { jwtSignal } from "./store";

export type CommunityRole = "user" | "moderator" | "admin";

interface JwtPayload {
  role?: CommunityRole;
  scope?: string;
  exp?: number;
  sub?: string;
}

function base64UrlDecode(segment: string): string | null {
  try {
    const padded = segment
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(segment.length / 4) * 4, "=");
    if (typeof atob === "function") {
      return atob(padded);
    }
    return null;
  } catch {
    return null;
  }
}

export function decodeJwtPayload(token: string | null): JwtPayload | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const raw = base64UrlDecode(parts[1]);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as JwtPayload;
  } catch {
    return null;
  }
}

const VALID_ROLES: ReadonlySet<CommunityRole> = new Set([
  "user",
  "moderator",
  "admin",
]);

export function getCommunityRole(): CommunityRole | null {
  const payload = decodeJwtPayload(jwtSignal());
  if (!payload) return null;
  if (payload.scope !== "community") return null;
  const role = payload.role;
  return role && VALID_ROLES.has(role) ? role : null;
}

export function hasModeratorAccess(): boolean {
  const r = getCommunityRole();
  return r === "moderator" || r === "admin";
}

export function hasAdminAccess(): boolean {
  return getCommunityRole() === "admin";
}
