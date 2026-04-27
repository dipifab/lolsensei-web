// WP35 / CR-056 — Route legacy /[lang]/champion/[champion]/guide (DEC-OP-001).
//
// Dopo CR-056 questa route emette 301 verso il pattern role-explicit
// `/[lang]/champion/[champion]/[role]/guide`. Conservata per backward compat
// dei link in produzione (Lux/Garen/Lee Sin canonical pre-CR-056) e per
// i link esterni che puntano alla forma senza role.
//
// Strategia di scelta del ruolo target:
//   1. Se il champion e' in `top-50-champions.json` -> usa `primary_role`
//      (preserva i canonical pre-CR-056).
//   2. Altrimenti -> primo role disponibile nel dataset per quella
//      (lang, champion), in ordine alfabetico (deterministico).
//   3. Se nessuna guida esiste in quella lingua, ripiega su EN.
//   4. Se non c'e' guida ne in EN ne in IT -> 404 hard.

import { Show, createMemo } from 'solid-js';
import { Navigate, useParams, createAsync } from '@solidjs/router';
import { Meta, Link } from '@solidjs/meta';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { useI18n } from '../../../../i18n';
import { type ContentLang } from '../../../../lib/content/champion-canonical';
import { loadChampions } from '../../../../data/champions';
import top50Data from '../../../../../content/_meta/top-50-champions.json';

const PRODUCTION_BASE = 'https://www.lolsensei.com';
const CHAMPION_LANGS: readonly ContentLang[] = ['en', 'it'];
const VALID_ROLES = ['top', 'jungle', 'mid', 'bot', 'support'] as const;
type ValidRole = (typeof VALID_ROLES)[number];

interface Top50Entry {
  slug: string;
  primary_role: ValidRole;
}

const TOP50: readonly Top50Entry[] = (
  top50Data as { champions: Top50Entry[] }
).champions;

function isContentLang(v: string): v is ContentLang {
  return (CHAMPION_LANGS as readonly string[]).includes(v);
}

function findPrimaryRole(slug: string): ValidRole | null {
  const match = TOP50.find((c) => c.slug === slug);
  return match?.primary_role ?? null;
}

interface ResolveResult {
  /** Ruolo target del 301, null se nessuna guida latest esiste. */
  role: ValidRole | null;
}

async function resolveTargetRole(
  lang: ContentLang,
  champion: string,
): Promise<ResolveResult> {
  // 1) Top-50 fast path: preserva canonical pre-CR-056.
  const fromTop50 = findPrimaryRole(champion);
  if (fromTop50) {
    return { role: fromTop50 };
  }

  // 2) Dataset lookup: primo role alfabetico nella lingua richiesta.
  const list = await loadChampions(lang);
  const inLang = list
    .filter((g) => g.champion === champion && g.is_latest)
    .map((g) => g.role)
    .sort();
  if (inLang.length > 0) {
    return { role: inLang[0] as ValidRole };
  }

  // 3) Fallback su EN se la lingua richiesta non ha guide.
  if (lang !== 'en') {
    const enList = await loadChampions('en');
    const inEn = enList
      .filter((g) => g.champion === champion && g.is_latest)
      .map((g) => g.role)
      .sort();
    if (inEn.length > 0) {
      return { role: inEn[0] as ValidRole };
    }
  }

  return { role: null };
}

export const route = {
  preload: ({ params }: { params: { lang: string; champion: string } }) => {
    const langParam = params.lang.toLowerCase();
    if (!isContentLang(langParam)) return;
    return resolveTargetRole(langParam, params.champion);
  },
};

export default function ChampionGuideLegacyRoute() {
  const params = useParams<{ lang: string; champion: string }>();
  const langParam = () => params.lang.toLowerCase();
  const isSupported = createMemo(() => isContentLang(langParam()));

  const data = createAsync(async () => {
    if (!isSupported()) return null;
    return resolveTargetRole(langParam() as ContentLang, params.champion);
  });

  return (
    <Show
      when={isSupported()}
      fallback={<Navigate href={`/${langParam()}/`} />}
    >
      <Show
        when={data()?.role}
        fallback={
          <NotFoundFallback
            champion={params.champion}
            lang={langParam() as ContentLang}
          />
        }
      >
        {(role) => (
          <RedirectBranch
            lang={langParam() as ContentLang}
            champion={params.champion}
            role={role()}
          />
        )}
      </Show>
    </Show>
  );
}

function RedirectBranch(props: {
  lang: ContentLang;
  champion: string;
  role: ValidRole;
}) {
  // SSR 301: pattern allineato a /[lang]/summoner/[region]/[handle].tsx.
  // Stampa lo status sull'evento di richiesta + meta refresh come fallback
  // se un cache layer dovesse rieseguire il body.
  const target = `/${props.lang}/champion/${props.champion}/${props.role}/guide`;
  const event = getRequestEvent();
  if (event) {
    event.response.status = 301;
    event.response.headers.set('Location', target);
    event.response.headers.set('Cache-Control', 'public, max-age=3600');
  }
  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Meta http-equiv="refresh" content={`0; url=${target}`} />
      <Link rel="canonical" href={`${PRODUCTION_BASE}${target}`} />
    </>
  );
}

function NotFoundFallback(props: {
  champion: string;
  lang: ContentLang;
}) {
  const { t } = useI18n();
  return (
    <>
      <Meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main class="min-h-[60vh] flex items-center justify-center px-8 py-24">
        <div class="max-w-xl text-center">
          <h1 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            {t('wp35.champion_guide.not_found.title')}
          </h1>
          <p class="text-on-surface-variant/80 mb-8">
            {t('wp35.champion_guide.not_found.description')}
          </p>
          <a
            href={`/${props.lang}/champion`}
            class="inline-block text-primary-container hover:text-primary underline font-bold"
          >
            {t('wp35.champion_guide.not_found.suggest_back')}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
