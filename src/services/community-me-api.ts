// src/services/community-me-api.ts
//
// Typed client for GET /api/community/me (profile + preferences fields).
// Schema aligned with dev-repository/tests/contracts/community/me-response.schema.json.

import { ApiError } from "./community-notifications-api";

export type UUID = string;

export interface BanSummary {
  id: UUID;
  reason_code: string;
  reason_public: string | null;
  scope: "thread" | "global";
  expires_at: string | null;
  created_at: string;
}

export interface MeResponse {
  id: UUID;
  email: string;
  nickname: string | null;
  role: "user" | "moderator" | "admin";
  status: "active" | "warned" | "banned";
  lol_user_id: UUID | null;
  has_premium_badge: boolean;
  language_preference: string | null;
  bio_markdown: string | null;
  avatar_url: string | null;
  avatar_status: "none" | "pending" | "active" | "rejected";
  email_verified_at: string | null;
  digest_optin: boolean;
  email_reply_optout: boolean;
  active_ban: BanSummary | null;
  unread_notification_count: number;
}

const API_BASE = import.meta.env.VITE_COMMUNITY_API_BASE as string;

export async function fetchMe(): Promise<MeResponse> {
  const res = await fetch(`${API_BASE}/me`, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "include",
  });
  const traceId = res.headers.get("x-trace-id");
  if (!res.ok) {
    let body: { error_code?: string; detail?: string } = {};
    try {
      body = await res.json();
    } catch {
      /* non-JSON */
    }
    throw new ApiError(
      res.status,
      body.error_code ?? `http_${res.status}`,
      body.detail ?? res.statusText,
      traceId,
    );
  }
  return (await res.json()) as MeResponse;
}
