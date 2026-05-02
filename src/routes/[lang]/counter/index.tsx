// WPCP-029 (CR-063) — Counter Search Page route.
//
// Route `/[lang]/counter/`: ricerca client-side dell'enemy contro cui trovare
// counter. Layout:
//   - <h1> + tagline
//   - <RoleFilter> (any | top | jungle | mid | bot | support)
//   - <CounterSearchInput> con autocomplete dropdown
//
// SSR e' disabilitato per questa pagina: l'asset `/counter-index/<lang>.json`
// e' fetchato client-side via `loadIndex`. La pagina detail (Phase 4) sara'
// invece SSR-on per l'indicizzabilita.
//
// Lingue supportate: en + it (DEC-7, parita ADR-034). Lingue non supportate
// vengono redirezionate alla home dalla logica esistente del repo (e in
// Phase 4 il middleware aggiungera anche un redirect 308 dedicato).
//
// Phase 4 dependency: il navigate dopo Enter punta a `/[lang]/counter/<slug>`
// che oggi non esiste — Phase 4 implementera la detail page. Fino a quel
// momento il navigate produce 404. Comportamento atteso e accettato.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §2
//   - dev-repository/wp-counter-picker/design/routing.md §1, §7

import { Show, createMemo, createSignal, onMount } from 'solid-js';
import { Navigate, useNavigate, useParams } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BASE_URL } from '../../../lib/seo/routes';
import { loadIndex } from '../../../lib/counter/index-loader';
import { useCounterI18n } from '../../../lib/counter/i18n';
import type { CounterIndex, Lang, RoleFilter as RoleFilterValue } from '../../../lib/counter/types';
import { RoleFilter } from '../../../components/counter/RoleFilter';
import { CounterSearchInput } from '../../../components/counter/CounterSearchInput';

const COUNTER_LANGS = ['en', 'it'] as const;
type CounterLang = (typeof COUNTER_LANGS)[number];

function isCounterLang(v: string): v is CounterLang {
  return (COUNTER_LANGS as readonly string[]).includes(v);
}

export default function CounterSearchRoute() {
  const params = useParams<{ lang: string }>();
  const lang = (): string => params.lang.toLowerCase();
  const isSupported = createMemo(() => isCounterLang(lang()));

  return (
    <Show
      when={isSupported()}
      fallback={<Navigate href={`/${lang()}/`} />}
    >
      <CounterSearchPage lang={lang() as CounterLang} />
    </Show>
  );
}

function CounterSearchPage(props: { lang: CounterLang }): ReturnType<typeof Show> {
  const navigate = useNavigate();
  // Phase 5 (WPCP-025): le chiavi `counter.*` sono ora ufficiali nei locale
  // EN+IT (e replicate negli altri 6 file di lingua per soddisfare il parity
  // check; gli utenti su quelle lingue ricevono comunque un 308 redirect via
  // middleware). Helper i18n centralizzato in `lib/counter/i18n.ts`.
  const { label } = useCounterI18n();

  const canonical = `${BASE_URL}/${props.lang}/counter`;

  const [role, setRole] = createSignal<RoleFilterValue>('any');

  // createResource: fetch lazy dell'indice al mount. Refetch se la lingua
  // cambia (in pratica non succede senza ri-mount perche le lingue sono nel
  // path), ma il pattern e' robusto.
  // SSR-off pattern: il fetcher non puo girare lato server perche lo
  // `fetch('/counter-index/<lang>.json')` di Node non accetta URL relativi
  // (richiede origin). La pagina e' designata client-only, quindi il
  // resource ritorna undefined su SSR e fetcha solo dopo l'idratazione.
  // Phase 6 fix: il fetcher gira solo su client (search e' SSR-off
  // by design — la pagina mostra subito la chrome poi idrata). Usiamo
  // un signal manuale + onMount perche createResource() con SSR=null
  // poi non re-firava il client refetch (vedi probe E2E counter).
  const [index, setIndex] = createSignal<CounterIndex | null>(null);
  const [isLoading, setIsLoading] = createSignal<boolean>(false);
  const [error, setError] = createSignal<string | null>(null);
  onMount(() => {
    setIsLoading(true);
    loadIndex(props.lang as Lang)
      .then((idx) => {
        setIndex(idx);
        setError(null);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  const onSubmit = (slug: string): void => {
    const r = role();
    const suffix = r === 'any' ? '' : `-${r}`;
    navigate(`/${props.lang}/counter/${slug}${suffix}`);
  };

  const title = label('counter.search.page_title');
  const h1 = label('counter.search.h1');
  const tagline = label('counter.search.tagline');

  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={tagline} />
      {/* SSR-off page: rumours non aggiungiamo alle sitemap solo le detail (Phase 2 sitemap). */}
      <Meta name="robots" content="index, follow" />
      <Link rel="canonical" href={canonical} />
      <Link rel="alternate" hreflang="en" href={`${BASE_URL}/en/counter`} />
      <Link rel="alternate" hreflang="it" href={`${BASE_URL}/it/counter`} />
      <Link rel="alternate" hreflang="x-default" href={`${BASE_URL}/en/counter`} />

      <Navbar />
      <Breadcrumbs
        items={[
          { label: label('breadcrumbs.home'), href: `/${props.lang}/` },
          { label: h1 },
        ]}
      />

      <main class="min-h-[60vh] px-3 py-6 md:px-6 md:py-10 max-w-3xl mx-auto">
        <header class="mb-6">
          <h1 class="text-2xl md:text-3xl font-headline font-extrabold mb-2">
            {h1}
          </h1>
          <p class="text-on-surface-variant text-sm md:text-base">{tagline}</p>
        </header>

        <section class="mb-4">
          <RoleFilter
            lang={props.lang as Lang}
            value={role()}
            onRoleChange={setRole}
          />
        </section>

        <section>
          <CounterSearchInput
            lang={props.lang as Lang}
            index={index()}
            isLoading={isLoading()}
            error={error()}
            role={role()}
            onSubmit={onSubmit}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
