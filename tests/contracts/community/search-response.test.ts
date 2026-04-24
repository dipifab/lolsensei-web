// tests/contracts/community/search-response.test.ts
//
// AJV contract test mirroring Regola 34. Fails if the local schema
// drifts from the committed snapshot in lolai/dev-repository.
//
// The JSON schema is expected to live at
// `tests/contracts/community/schemas/search-response.schema.json`.
// It is pulled either via git submodule or by a prebuild script that
// mirrors `dev-repository/tests/contracts/community/`.

import Ajv, { type ErrorObject } from "ajv";
import addFormats from "ajv-formats";
import { describe, it, expect } from "vitest";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- JSON import is validated at runtime by Ajv.compile
import schema from "./schemas/search-response.schema.json" assert { type: "json" };

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

function sampleResponse(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    items: [
      {
        thread_id: "6a1a0a0e-6e23-4d0e-9a6c-6dd9f1a2e111",
        thread_slug: "patch-notes",
        title: "Patch 14.09 notes",
        snippet: "Notable changes in <<hl>>patch<</hl>> 14.09.",
        matched_in: "body",
        author: {
          nickname: "example",
          has_premium_badge: false,
          deleted: false,
        },
        category_slug: "strategy",
        tag_slugs: ["patch", "meta"],
        reply_count: 12,
        reaction_count: 3,
        language: "en",
        rank_score: 0.42,
        created_at: "2026-04-24T12:00:00Z",
      },
    ],
    next_cursor: "b2Zmc2V0PTIw",
    total_approx: 42,
    has_more: true,
    took_ms: 18,
    query_echo: {
      q: "patch",
      sort: "relevance",
      language: "en",
      category: null,
      tag: null,
      author_nickname: null,
      date_from: null,
      date_to: null,
      dictionary_used: "simple",
    },
    ...overrides,
  };
}

function errorSummary(errors: ErrorObject[] | null | undefined): string {
  return (errors ?? [])
    .map((e) => `${e.instancePath || "<root>"} ${e.message}`)
    .join("\n");
}

describe("search-response.schema.json", () => {
  it("accepts a well-formed SearchResponse", () => {
    const ok = validate(sampleResponse());
    expect(ok, errorSummary(validate.errors)).toBe(true);
  });

  it("requires query_echo", () => {
    const bad = sampleResponse();
    // @ts-expect-error intentional violation
    delete bad.query_echo;
    expect(validate(bad)).toBe(false);
  });

  it("rejects invalid sort enum", () => {
    const bad = sampleResponse();
    (bad.query_echo as { sort: string }).sort = "bogus";
    expect(validate(bad)).toBe(false);
  });

  it("accepts null snippet and null author", () => {
    const ok = sampleResponse();
    (ok.items[0] as { snippet: string | null }).snippet = null;
    (ok.items[0] as { author: unknown }).author = null;
    expect(validate(ok), errorSummary(validate.errors)).toBe(true);
  });

  it("round-trips sentinels in snippet", () => {
    const ok = sampleResponse();
    (ok.items[0] as { snippet: string | null }).snippet =
      "<<hl>>foo<</hl>> bar <<hl>>baz<</hl>>";
    expect(validate(ok)).toBe(true);
  });
});
