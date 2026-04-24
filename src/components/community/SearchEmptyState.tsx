// src/components/community/SearchEmptyState.tsx
//
// Empty state rendered when the current query returns zero hits.

import { useI18n } from "../../i18n";
import { formatTemplate } from "../../lib/datetime";

export default function SearchEmptyState(props: { query: string; lang: string }) {
  const { t } = useI18n();
  return (
    <div class="text-center py-16">
      <div aria-hidden="true" class="text-5xl mb-3 text-on-surface-variant">·</div>
      <h2 class="text-lg font-semibold text-on-surface mb-2">
        {formatTemplate(t("community.search.empty_state.title"), { q: props.query })}
      </h2>
      <p class="text-sm text-on-surface-variant mb-4">
        {t("community.search.empty_state.body")}
      </p>
      <a
        href={`/${props.lang}/community`}
        class="inline-block min-h-[44px] px-4 py-2 rounded bg-primary text-on-primary hover:opacity-90"
      >
        {t("community.search.empty_state.cta")}
      </a>
    </div>
  );
}
