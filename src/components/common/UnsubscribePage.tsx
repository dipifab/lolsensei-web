// src/components/common/UnsubscribePage.tsx
//
// Landing page for /community/unsubscribe. Reads ?token&kind&lang from URL,
// calls GET /api/community/unsubscribe with Accept: application/json.
// Three states: loading, success, error (401 expired, 429 rate-limited, other).

import { createResource, Show, Switch, Match } from "solid-js";
import { isServer } from "solid-js/web";
import { useSearchParams } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import { useI18n } from "../../i18n";
import { formatTemplate } from "../../lib/datetime";
import {
  fetchUnsubscribe,
  ApiError,
  type UnsubscribeResponse,
} from "../../services/community-notifications-api";

const VALID_KINDS = [
  "all",
  "digest",
  "reply",
  "mention",
  "warn",
  "ban",
  "pending",
] as const;
type Kind = (typeof VALID_KINDS)[number];

export default function UnsubscribePage() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const token = (params.token ?? "") as string;
  const kindParam = (params.kind ?? "all") as string;
  const kind: Kind = (VALID_KINDS as readonly string[]).includes(kindParam)
    ? (kindParam as Kind)
    : "all";
  const lang = (params.lang ?? "en") as string;

  const [res] = createResource(
    () => (isServer ? null : { token, kind, lang }),
    async (q): Promise<UnsubscribeResponse> => {
      if (!q.token) {
        throw new ApiError(400, "missing_token", "token required", null);
      }
      return fetchUnsubscribe(q);
    },
  );

  return (
    <>
      <Title>{t("community.unsubscribe.page_title")}</Title>
      <Meta name="robots" content="noindex,nofollow" />
      <main class="min-h-screen flex items-center justify-center bg-surface p-6">
        <div class="max-w-md w-full rounded-lg border border-outline-variant/30 bg-surface-container p-6 text-center">
          <Show
            when={!res.loading}
            fallback={
              <p aria-live="polite" class="text-sm text-on-surface-variant">
                {t("community.unsubscribe.processing")}
              </p>
            }
          >
            <Switch fallback={<ErrorState error={res.error} lang={lang} />}>
              <Match when={res()}>
                {(data) => <SuccessState data={data()} lang={lang} />}
              </Match>
            </Switch>
          </Show>
        </div>
      </main>
    </>
  );
}

function SuccessState(props: {
  data: UnsubscribeResponse;
  lang: string;
}) {
  const { t } = useI18n();
  const body = () =>
    formatTemplate(t("community.unsubscribe.success_body"), {
      kind: props.data.kind,
    });
  return (
    <>
      <h1 class="text-xl font-semibold mb-2 text-on-surface">
        {t("community.unsubscribe.success_title")}
      </h1>
      <p class="text-sm text-on-surface-variant mb-6">{body()}</p>
      <div class="flex flex-col gap-2">
        <a
          href={`/${props.lang}/community/me`}
          class="px-4 py-2 rounded bg-primary text-on-primary hover:opacity-90"
        >
          {t("community.unsubscribe.preferences_cta")}
        </a>
        <a
          href={`/${props.lang}/community`}
          class="px-4 py-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest"
        >
          {t("community.unsubscribe.back_to_community")}
        </a>
      </div>
    </>
  );
}

function ErrorState(props: { error: unknown; lang: string }) {
  const { t } = useI18n();
  const isRateLimit =
    props.error instanceof ApiError && props.error.status === 429;
  const isExpired =
    props.error instanceof ApiError &&
    (props.error.status === 401 ||
      props.error.errorCode === "signature_invalid");

  return (
    <>
      <h1 class="text-xl font-semibold mb-2 text-error">
        {isExpired
          ? t("community.unsubscribe.expired_title")
          : isRateLimit
            ? t("community.unsubscribe.rate_limit_title")
            : t("community.unsubscribe.error_title")}
      </h1>
      <p class="text-sm text-on-surface-variant mb-6">
        {isExpired
          ? t("community.unsubscribe.expired_body")
          : isRateLimit
            ? t("community.unsubscribe.try_later")
            : t("community.unsubscribe.error_body")}
      </p>
      <div class="flex flex-col gap-2">
        <a
          href={`/${props.lang}/login?next=/${props.lang}/community/me`}
          class="px-4 py-2 rounded bg-primary text-on-primary hover:opacity-90"
        >
          {t("community.unsubscribe.login_and_manage_cta")}
        </a>
        <a
          href={`/${props.lang}/community`}
          class="px-4 py-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest"
        >
          {t("community.unsubscribe.back_to_community")}
        </a>
      </div>
    </>
  );
}
