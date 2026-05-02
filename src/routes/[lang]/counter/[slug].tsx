// WPCP-033 (CR-063) — Counter Detail Page route.
//
// Route `/[lang]/counter/<enemy-slug>[-<role>]`. Mostra:
//   - header enemy (portrait + nome + role badge)
//   - 2 colonne side-by-side (grid-cols-2 sempre, anche su 360x640):
//       * sinistra: "Counter di {name}"  (= is_strong_against)
//       * destra:   "Counterato da {name}" (= is_weak_against)
//   - placeholder no-data quando l'enemy e' noto al registry ma assente
//     dal reverse index (= guida non ancora pubblicata)
//   - 404 quando l'enemy slug non e' nel registry
//
// Lazy fetch dell'indice tramite il loader Phase 3 (cache in-memory + retry
// safe). Lingue supportate: en + it (parita ADR-034). Lingue non supportate
// fanno Navigate a `/{lang}/` (allineato a Phase 3).
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §3
//   - dev-repository/wp-counter-picker/design/routing.md §1, §9, §10
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §1.3, §2

import {
  Show,
  Suspense,
  createMemo,
  createResource,
  createSignal,
} from 'solid-js';
import { getRequestEvent, isServer } from 'solid-js/web';
import { Navigate, useNavigate, useParams } from '@solidjs/router';
import { Title, Meta, Link } from '@solidjs/meta';
import { HttpStatusCode } from '@solidjs/start';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BASE_URL } from '../../../lib/seo/routes';
import { loadIndex } from '../../../lib/counter/index-loader';
import { useCounterI18n } from '../../../lib/counter/i18n';
import { parseSlugParam } from '../../../lib/counter/slug';
import {
  buildHreflangAlternates,
  buildSubjectGuideHref,
  classifyEnemy,
  filterEntryByRole,
  resolveEnemyDisplayName,
  rolesWithMatchups,
  selectEnemyEntry,
} from '../../../lib/counter/detail';
import type { CounterIndex, Lang, Role } from '../../../lib/counter/types';
import { EnemyHeader } from '../../../components/counter/EnemyHeader';
import { CounterColumn } from '../../../components/counter/CounterColumn';
import { RoleTabs } from '../../../components/counter/RoleTabs';

const COUNTER_LANGS = ['en', 'it'] as const;
type CounterLang = (typeof COUNTER_LANGS)[number];

function isCounterLang(v: string): v is CounterLang {
  return (COUNTER_LANGS as readonly string[]).includes(v);
}

export default function CounterDetailRoute() {
  const params = useParams<{ lang: string; slug: string }>();
  const lang = (): string => params.lang.toLowerCase();
  const isSupported = createMemo(() => isCounterLang(lang()));

  return (
    <Show when={isSupported()} fallback={<Navigate href={`/${lang()}/`} />}>
      <CounterDetailPage
        lang={lang() as CounterLang}
        slugParam={params.slug}
      />
    </Show>
  );
}

interface CounterDetailPageProps {
  lang: CounterLang;
  slugParam: string;
}

function CounterDetailPage(props: CounterDetailPageProps) {
  const navigate = useNavigate();
  // Phase 5 (WPCP-025): chiavi counter.* ora ufficiali nei locale EN+IT.
  const { label } = useCounterI18n();

  // Parsing slug+role e' puro: lo facciamo subito, indipendente dall'indice.
  const parsed = createMemo(() => parseSlugParam(props.slugParam));
  const enemySlug = (): string => parsed().championSlug;
  const enemyRole = (): Role | null => parsed().role;

  // Phase 6 fix (chiusura OI-P4-1 / OI-P5-2): la detail page e' SSR-on
  // per soddisfare NFR-CP-008.2 (indicizzabilita SEO). Il fetcher gira
  // sia lato server (passando l'origin estratto dalla request, cosi' CF
  // Workers risolve l'asset con una subrequest interna) che lato client
  // (URL relativa, fetch nativo). Cosi':
  //   - 404 su slug ignoti viene emesso PRIMA dell'idratazione (HTTP 404
  //     reale al crawler, non soft-404 post-hydration).
  //   - no-data e ok renderizzano l'header nel HTML iniziale (LCP veloce).
  // La cache module-level del loader evita refetch duplicati nel ciclo
  // di vita dell'isolato Workers.
  const [index] = createResource(
    () => props.lang as Lang,
    async (lng): Promise<CounterIndex | null> => {
      if (isServer) {
        const event = getRequestEvent();
        if (!event) return null;
        try {
          const origin = new URL(event.request.url).origin;
          return await loadIndex(lng, origin);
        } catch {
          // Fail-safe: se l'asset non e' raggiungibile in SSR, degradiamo
          // a hydration-time render (no 404 SSR ma niente crash). Il client
          // refetcha al boot e classifica.
          return null;
        }
      }
      return loadIndex(lng);
    },
  );

  const classification = createMemo(() => {
    const idx = index();
    if (!idx) return null;
    return classifyEnemy(enemySlug(), idx);
  });

  const enemyDisplayName = createMemo(() => {
    const idx = index();
    if (!idx) return enemySlug();
    return resolveEnemyDisplayName(enemySlug(), idx);
  });

  const entry = createMemo(() => {
    const idx = index();
    if (!idx) return null;
    return selectEnemyEntry(enemySlug(), idx);
  });

  const canonicalPath = (): string => {
    const role = enemyRole();
    return role
      ? `/${props.lang}/counter/${enemySlug()}-${role}`
      : `/${props.lang}/counter/${enemySlug()}`;
  };
  const canonical = (): string => `${BASE_URL}${canonicalPath()}`;

  const alternates = createMemo(() =>
    buildHreflangAlternates(enemySlug(), enemyRole(), BASE_URL),
  );

  const pageTitle = (): string =>
    label('counter.detail.page_title_template', { name: enemyDisplayName() });
  const metaDescription = (): string =>
    label('counter.detail.meta_description_template', {
      name: enemyDisplayName(),
    });

  // I componenti pesanti (colonne con celle) renderizzano solo quando
  // index() e' caricato (Suspense fallback = skeleton).
  return (
    <>
      <Title>{pageTitle()}</Title>
      <Meta name="description" content={metaDescription()} />
      <Meta name="robots" content="index, follow" />
      <Link rel="canonical" href={canonical()} />
      {alternates().map((alt) => (
        <Link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
      ))}

      <Navbar />
      <Breadcrumbs
        items={[
          { label: label('breadcrumbs.home'), href: `/${props.lang}/` },
          {
            label: label('counter.search.h1'),
            href: `/${props.lang}/counter/`,
          },
          { label: enemyDisplayName() },
        ]}
      />

      <Suspense fallback={<DetailSkeleton lang={props.lang as Lang} />}>
        <Show
          when={index() !== undefined && classification()}
          fallback={<DetailSkeleton lang={props.lang as Lang} />}
        >
          {(cls) => (
            <Show
              when={cls().kind !== 'not-found'}
              fallback={
                <NotFoundView
                  lang={props.lang as Lang}
                  onBackToSearch={() => navigate(`/${props.lang}/counter/`)}
                />
              }
            >
              <Show
                when={cls().kind !== 'no-data'}
                fallback={
                  <NoDataView
                    lang={props.lang as Lang}
                    enemySlug={enemySlug()}
                    enemyRole={enemyRole()}
                    enemyMeta={index()?.champions[enemySlug()]}
                    enemyDisplayName={enemyDisplayName()}
                    onBrowseGuides={() =>
                      navigate(`/${props.lang}/champion/`)
                    }
                  />
                }
              >
                <DetailBody
                  lang={props.lang as Lang}
                  enemySlug={enemySlug()}
                  enemyRole={enemyRole()}
                  enemyDisplayName={enemyDisplayName()}
                  index={index()!}
                  entry={entry()}
                />
              </Show>
            </Show>
          )}
        </Show>
      </Suspense>

      <Footer />
    </>
  );
}

function DetailSkeleton(props: { lang: Lang }) {
  const { label } = useCounterI18n();
  return (
    <main
      class="min-h-[60vh] px-3 py-4 md:px-6 md:py-8 max-w-5xl mx-auto"
      aria-busy="true"
      aria-live="polite"
      data-lang={props.lang}
    >
      <div class="flex items-center gap-3 mb-4">
        <div class="w-24 h-24 rounded bg-surface-container-low animate-pulse" />
        <div class="flex-1 h-8 rounded bg-surface-container-low animate-pulse" />
      </div>
      <div class="grid grid-cols-2 gap-2 md:gap-6">
        <div class="h-48 rounded bg-surface-container-low animate-pulse" />
        <div class="h-48 rounded bg-surface-container-low animate-pulse" />
      </div>
      <span class="sr-only">{label('counter.detail.loading')}</span>
    </main>
  );
}

interface DetailBodyProps {
  lang: Lang;
  enemySlug: string;
  enemyRole: Role | null;
  enemyDisplayName: string;
  index: CounterIndex;
  entry: ReturnType<typeof selectEnemyEntry>;
}

function DetailBody(props: DetailBodyProps) {
  const { label } = useCounterI18n();
  const meta = (): CounterIndex['champions'][string] | undefined =>
    props.index.champions[props.enemySlug];
  const subjectHasGuide = (): boolean => meta()?.has_guide === true;

  // Tab ruolo client-side: lo stato e' inizializzato dal ruolo eventualmente
  // presente in URL (`/{lang}/counter/{slug}-{role}`), altrimenti `null`
  // (= tab "Tutti", default per arrivo via search).
  const [selectedRole, setSelectedRole] = createSignal<Role | null>(
    props.enemyRole,
  );

  const availableRoles = createMemo<Role[]>(() =>
    props.entry ? rolesWithMatchups(props.entry) : [],
  );

  const filteredEntry = createMemo(() =>
    props.entry ? filterEntryByRole(props.entry, selectedRole()) : null,
  );

  // REV-001 (chiusura 2026-05-02): l'href usa ora il pattern slash post-CR-056
  // (`/[lang]/champion/<champion>/<role>/guide`) per evitare la soft-404 sulla
  // forma legacy hyphen. Stesso pattern di `resolveSourceAnchor` (helper unico
  // riusato sotto in `buildSubjectGuideHref` per testabilita').
  // Usa `selectedRole()` (non `props.enemyRole`): cosi' il CTA cambia
  // quando l'utente switcha tab.
  const subjectGuideHref = (): string =>
    buildSubjectGuideHref(props.lang, props.enemySlug, selectedRole(), meta());

  // Aggiorna URL via `history.replaceState` (no nuova entry in history,
  // no scroll-to-top): la pagina diventa condivisibile/bookmarkabile sulla
  // vista filtrata corrente. SSR rispetta gia il ruolo presente in URL.
  const handleRoleSelect = (role: Role | null): void => {
    setSelectedRole(role);
    if (typeof window === 'undefined') return;
    const path = role
      ? `/${props.lang}/counter/${props.enemySlug}-${role}`
      : `/${props.lang}/counter/${props.enemySlug}`;
    try {
      window.history.replaceState(window.history.state, '', path);
    } catch {
      // Ignora errori di replaceState in ambienti edge (es. cross-origin):
      // il filtro client funziona comunque, solo l'URL non si aggiorna.
    }
  };

  return (
    <main class="min-h-[60vh] px-3 py-4 md:px-6 md:py-8 max-w-5xl mx-auto">
      <EnemyHeader
        lang={props.lang}
        slug={props.enemySlug}
        meta={meta()}
        role={selectedRole()}
      />

      <Show when={subjectHasGuide()}>
        <a
          href={subjectGuideHref()}
          class="inline-flex items-center gap-1 text-sm text-primary
                 hover:underline focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-primary focus-visible:outline-offset-2
                 mb-4"
          data-testid="enemy-cross-link"
        >
          {label('counter.detail.cross_link_subject', {
            name: props.enemyDisplayName,
          })}
          <span aria-hidden="true">→</span>
        </a>
      </Show>

      <Show when={availableRoles().length >= 2}>
        <div class="mt-2 mb-4">
          <RoleTabs
            lang={props.lang}
            roles={availableRoles()}
            active={selectedRole()}
            onSelect={handleRoleSelect}
          />
        </div>
      </Show>

      <div class="grid grid-cols-2 gap-2 md:gap-6 mt-4" data-testid="detail-grid">
        <CounterColumn
          lang={props.lang}
          variant="strong"
          enemyDisplayName={props.enemyDisplayName}
          cells={filteredEntry()?.is_strong_against ?? []}
          champions={props.index.champions}
          rationales={props.index.rationales}
          headingId="counter-column-strong-heading"
        />
        <CounterColumn
          lang={props.lang}
          variant="weak"
          enemyDisplayName={props.enemyDisplayName}
          cells={filteredEntry()?.is_weak_against ?? []}
          champions={props.index.champions}
          rationales={props.index.rationales}
          headingId="counter-column-weak-heading"
        />
      </div>
    </main>
  );
}

interface NoDataViewProps {
  lang: Lang;
  enemySlug: string;
  enemyRole: Role | null;
  enemyMeta: CounterIndex['champions'][string] | undefined;
  enemyDisplayName: string;
  onBrowseGuides: () => void;
}

function NoDataView(props: NoDataViewProps) {
  const { label } = useCounterI18n();
  // 200 OK: il champion esiste, manca solo il dato matchup. Mostriamo header
  // per coerenza visuale + placeholder + CTA verso hub guide.
  return (
    <main class="min-h-[60vh] px-3 py-4 md:px-6 md:py-8 max-w-3xl mx-auto">
      <EnemyHeader
        lang={props.lang}
        slug={props.enemySlug}
        meta={props.enemyMeta}
        role={props.enemyRole}
      />
      <section
        class="mt-6 p-6 rounded-xl border border-outline/20 bg-surface-container/40"
        data-testid="counter-detail-no-data"
      >
        <p class="text-on-surface-variant text-sm md:text-base">
          {label('counter.detail.no_data', {
            name: props.enemyDisplayName,
          })}
        </p>
        <button
          type="button"
          onClick={props.onBrowseGuides}
          class="mt-4 inline-flex items-center px-4 py-2 rounded-full
                 bg-primary text-on-primary font-medium text-sm
                 hover:opacity-90 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          {label('counter.detail.no_data_cta')}
        </button>
      </section>
    </main>
  );
}

interface NotFoundViewProps {
  lang: Lang;
  onBackToSearch: () => void;
}

function NotFoundView(props: NotFoundViewProps) {
  const { label } = useCounterI18n();
  return (
    <>
      <HttpStatusCode code={404} />
      <main
        class="min-h-[60vh] px-3 py-12 md:px-6 md:py-20 max-w-2xl mx-auto text-center"
        data-testid="counter-detail-not-found"
      >
        <h1 class="text-2xl md:text-3xl font-headline font-extrabold mb-3">
          {label('counter.detail.not_found_title')}
        </h1>
        <p class="text-on-surface-variant text-sm md:text-base mb-6">
          {label('counter.detail.not_found_body')}
        </p>
        <button
          type="button"
          onClick={props.onBackToSearch}
          class="inline-flex items-center px-4 py-2 rounded-full
                 bg-primary text-on-primary font-medium text-sm
                 hover:opacity-90 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          {label('counter.detail.not_found_cta')}
        </button>
      </main>
    </>
  );
}
