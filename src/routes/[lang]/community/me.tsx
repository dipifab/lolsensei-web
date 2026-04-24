// src/routes/[lang]/community/me.tsx
//
// Community profile + notification preferences page.
// Requires auth (community JWT). Renders profile summary and mounts
// NotificationPreferencesToggles with initial prefs from /me.

import { Show, createEffect, createResource, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";
import { useNavigate, useParams } from "@solidjs/router";
import { useI18n } from "../../../i18n";
import { jwtSignal } from "../../../auth/store";
import { fetchMe } from "../../../services/community-me-api";
import NotificationPreferencesToggles from "../../../components/community/NotificationPreferencesToggles";

export default function CommunityMeRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [authed, setAuthed] = createSignal(!!jwtSignal());

  createEffect(() => {
    const token = jwtSignal();
    setAuthed(!!token);
    if (!token) {
      navigate(`/${params.lang}/login?next=/${params.lang}/community/me`, {
        replace: true,
      });
    }
  });

  const [me] = createResource(authed, async (isAuth) => {
    if (!isAuth) return null;
    return await fetchMe();
  });

  return (
    <>
      <Title>{t("community.me.title")}</Title>
      <main class="max-w-3xl mx-auto px-6 py-24">
        <h1 class="text-3xl font-extrabold font-headline text-on-surface mb-8">
          {t("community.me.title")}
        </h1>

        <Show when={me.loading}>
          <div class="h-40 bg-surface-container-low rounded-xl animate-pulse" />
        </Show>

        <Show when={me.error}>
          <div
            role="alert"
            class="p-4 rounded-lg bg-error/10 text-error border border-error/30"
          >
            {t("community.me.error_generic")}
          </div>
        </Show>

        <Show when={me()}>
          {(data) => (
            <>
              <section class="bg-surface-container rounded-xl p-6 mb-8">
                <h2 class="text-lg font-bold text-on-surface mb-4">
                  {t("community.me.profile")}
                </h2>
                <dl class="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 text-sm">
                  <dt class="text-on-surface-variant">
                    {t("community.me.nickname")}
                  </dt>
                  <dd class="text-on-surface">
                    {data().nickname ?? t("community.me.nickname_empty")}
                  </dd>
                  <dt class="text-on-surface-variant">
                    {t("community.me.email")}
                  </dt>
                  <dd class="text-on-surface">{data().email}</dd>
                  <dt class="text-on-surface-variant">
                    {t("community.me.role")}
                  </dt>
                  <dd class="text-on-surface">
                    {t(`community.me.role_${data().role}`)}
                  </dd>
                </dl>
              </section>

              <section class="bg-surface-container rounded-xl p-6">
                <h2 class="text-lg font-bold text-on-surface mb-4">
                  {t("community.preferences.section_title")}
                </h2>
                <NotificationPreferencesToggles
                  initial={{
                    digest_optin: data().digest_optin,
                    email_reply_optout: data().email_reply_optout,
                    bell_enabled: true,
                  }}
                />
              </section>
            </>
          )}
        </Show>
      </main>
    </>
  );
}
