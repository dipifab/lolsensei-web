// src/components/community/SearchResultCard.tsx
//
// Presentation of a single search hit. The title and snippet are rendered
// through HighlightSnippet (escape-then-replace). Counts are interpolated
// via formatTemplate against the flat i18n template string.

import { For, Show } from "solid-js";
import { useI18n } from "../../i18n";
import { formatTemplate } from "../../lib/datetime";
import type { SearchHit } from "../../services/community-search-api";
import { HighlightSnippet } from "./HighlightSnippet";

export default function SearchResultCard(props: {
  hit: SearchHit;
  lang: string;
}) {
  const { t } = useI18n();
  const threadUrl = () =>
    `/${props.lang}/community/t/${props.hit.thread_slug}`;
  const authorName = () =>
    props.hit.author?.deleted
      ? t("community.search.author_deleted")
      : props.hit.author?.nickname ?? t("community.search.author_anon");

  return (
    <li
      role="listitem"
      class="border border-outline-variant/30 rounded bg-surface-container p-4 hover:bg-surface-container-highest"
    >
      <a
        href={threadUrl()}
        class="block focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        <h3 class="text-base font-semibold text-on-surface mb-1">
          <HighlightSnippet text={props.hit.title} class="inline" />
        </h3>
        <Show when={props.hit.snippet}>
          <p class="text-sm text-on-surface-variant mb-2 line-clamp-3">
            <HighlightSnippet text={props.hit.snippet!} />
          </p>
        </Show>
        <div class="text-xs text-on-surface-variant flex flex-wrap items-center gap-2">
          <span>
            {formatTemplate(t("community.search.by"), { nickname: authorName() })}
          </span>
          <span aria-hidden="true">·</span>
          <span>{props.hit.category_slug}</span>
          <For each={props.hit.tag_slugs}>
            {(tg) => (
              <span class="px-1.5 py-0.5 rounded border border-outline-variant/50 text-[10px] text-on-surface-variant">
                {tg}
              </span>
            )}
          </For>
          <span aria-hidden="true">·</span>
          <span>
            {formatTemplate(t("community.search.replies"), { n: props.hit.reply_count })}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {formatTemplate(t("community.search.reactions"), { n: props.hit.reaction_count })}
          </span>
        </div>
      </a>
    </li>
  );
}
