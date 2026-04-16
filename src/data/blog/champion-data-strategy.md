# Champion Guide Pages — Data Strategy

> **Status**: Planning (not yet implemented)
> **Target URL pattern**: `/:lang/champions/:champion-name`
> **Estimated pages**: 6,880 (172 champions x 5 page types x 8 languages)

---

## 1. Riot DDragon API — Endpoints Reference

DDragon is Riot Games' free, public CDN for static game data. No API key required.
Data updates with each game patch (roughly every 2 weeks).

### Version

```
GET https://ddragon.leagueoflegends.com/api/versions.json
```

Returns an array of version strings. The first element is the latest version.

```json
["15.7.1", "15.6.1", "15.5.1", ...]
```

### Champion List

```
GET https://ddragon.leagueoflegends.com/cdn/{version}/data/{lang}/champion.json
```

Example: `https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json`

Response structure:

```json
{
  "type": "champion",
  "format": "standAlone",
  "version": "15.7.1",
  "data": {
    "Aatrox": {
      "version": "15.7.1",
      "id": "Aatrox",
      "key": "266",
      "name": "Aatrox",
      "title": "the Darkin Blade",
      "blurb": "Once honored defenders of Shurima...",
      "info": { "attack": 8, "defense": 4, "magic": 3, "difficulty": 4 },
      "image": {
        "full": "Aatrox.png",
        "sprite": "champion0.png",
        "group": "champion",
        "x": 0, "y": 0, "w": 48, "h": 48
      },
      "tags": ["Fighter", "Tank"],
      "partype": "Blood Well",
      "stats": {
        "hp": 650, "hpperlevel": 114, "mp": 0, "mpperlevel": 0,
        "movespeed": 345, "armor": 38, "armorperlevel": 4.45,
        "spellblock": 32, "spellblockperlevel": 2.05,
        "attackrange": 175, "hpregen": 3, "hpregenperlevel": 1,
        "mpregen": 0, "mpregenperlevel": 0,
        "crit": 0, "critperlevel": 0,
        "attackdamage": 60, "attackdamageperlevel": 5,
        "attackspeedperlevel": 2.5, "attackspeed": 0.651
      }
    },
    "Ahri": { ... },
    ...
  }
}
```

### Champion Detail (single champion)

```
GET https://ddragon.leagueoflegends.com/cdn/{version}/data/{lang}/champion/{ChampionId}.json
```

Example: `https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion/Aatrox.json`

This returns the full champion object including abilities, lore, skins, and tips.

Response includes additional fields not present in the list endpoint:

```json
{
  "data": {
    "Aatrox": {
      "id": "Aatrox",
      "name": "Aatrox",
      "lore": "Once honored defenders of Shurima against the Void...",
      "allytips": [
        "Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting."
      ],
      "enemytips": [
        "Avoiding Aatrox's attacks is key to beating him."
      ],
      "spells": [
        {
          "id": "AatroxQ",
          "name": "The Darkin Blade",
          "description": "Aatrox slams his greatsword...",
          "tooltip": "...",
          "leveltip": { "label": [...], "effect": [...] },
          "maxrank": 5,
          "cooldown": [14, 12, 10, 8, 6],
          "cost": [0, 0, 0, 0, 0],
          "image": { "full": "AatroxQ.png", ... }
        }
      ],
      "passive": {
        "name": "Deathbringer Stance",
        "description": "Periodically, Aatrox's next basic attack...",
        "image": { "full": "Aatrox_Passive.png", ... }
      },
      "skins": [
        { "id": "266000", "num": 0, "name": "default" },
        { "id": "266001", "num": 1, "name": "Justicar Aatrox" },
        ...
      ],
      "recommended": []
    }
  }
}
```

### Item Data

```
GET https://ddragon.leagueoflegends.com/cdn/{version}/data/{lang}/item.json
```

Response structure:

```json
{
  "data": {
    "1001": {
      "name": "Boots",
      "description": "<mainText>...</mainText>",
      "plaintext": "Slightly increases Movement Speed",
      "gold": { "base": 300, "purchasable": true, "total": 300, "sell": 210 },
      "tags": ["Boots"],
      "into": ["3006", "3009", "3020", "3047", "3111", "3117", "3158"],
      "maps": { "11": true, "12": true, "21": true, "22": false },
      "stats": { "FlatMovementSpeedMod": 25 },
      "image": { "full": "1001.png", ... }
    },
    ...
  }
}
```

### Image CDN

| Asset | URL Pattern |
|-------|-------------|
| Champion square | `https://ddragon.leagueoflegends.com/cdn/{version}/img/champion/{ChampionId}.png` |
| Champion loading art | `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{ChampionId}_0.png` |
| Champion splash art | `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{ChampionId}_0.png` |
| Skin splash art | `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{ChampionId}_{skinNum}.png` |
| Ability icon | `https://ddragon.leagueoflegends.com/cdn/{version}/img/spell/{SpellId}.png` |
| Passive icon | `https://ddragon.leagueoflegends.com/cdn/{version}/img/passive/{PassiveImage}.png` |
| Item icon | `https://ddragon.leagueoflegends.com/cdn/{version}/img/item/{ItemId}.png` |
| Sprite sheet | `https://ddragon.leagueoflegends.com/cdn/{version}/img/sprite/{SpriteName}.png` |

### Language Mapping

DDragon uses Riot locale codes. Mapping to our i18n locales:

| Our locale | DDragon locale |
|------------|---------------|
| `en`       | `en_US`       |
| `it`       | `it_IT`       |
| `ko`       | `ko_KR`       |
| `zh`       | `zh_CN`       |
| `pt-br`    | `pt_BR`       |
| `es`       | `es_ES`       |
| `fr`       | `fr_FR`       |
| `de`       | `de_DE`       |

---

## 2. Data Available from DDragon

### Per Champion

| Field | Source | Notes |
|-------|--------|-------|
| Name | `champion.json` → `data[id].name` | Localized |
| Title | `champion.json` → `data[id].title` | Localized (e.g., "the Darkin Blade") |
| Short description | `champion.json` → `data[id].blurb` | Localized, truncated lore |
| Full lore | `champion/{Id}.json` → `lore` | Localized |
| Abilities (P + QWER) | `champion/{Id}.json` → `passive` + `spells[]` | Name, description, cooldowns, costs, icon |
| Base stats | `champion.json` → `data[id].stats` | HP, AD, armor, MR, AS, MS, range, regen |
| Stat growth per level | `champion.json` → `data[id].stats.*perlevel` | For computing stats at any level |
| Roles/tags | `champion.json` → `data[id].tags` | e.g., ["Fighter", "Tank"] |
| Difficulty | `champion.json` → `data[id].info.difficulty` | 1-10 scale |
| Resource type | `champion.json` → `data[id].partype` | Mana, Energy, Blood Well, etc. |
| Skins | `champion/{Id}.json` → `skins[]` | Name + skin number for splash URL |
| Tips (playing as) | `champion/{Id}.json` → `allytips[]` | Array of strings |
| Tips (playing against) | `champion/{Id}.json` → `enemytips[]` | Array of strings |
| Square image | CDN | 120x120 |
| Loading art | CDN | 308x560 |
| Splash art | CDN | 1215x717 |

### Per Item

| Field | Source | Notes |
|-------|--------|-------|
| Name | `item.json` → `data[id].name` | Localized |
| Description | `item.json` → `data[id].description` | HTML-formatted |
| Plain text | `item.json` → `data[id].plaintext` | Short description |
| Cost | `item.json` → `data[id].gold` | base, total, sell |
| Build path | `item.json` → `data[id].from` / `into` | Array of item IDs |
| Stats | `item.json` → `data[id].stats` | Flat stat modifiers |
| Tags | `item.json` → `data[id].tags` | e.g., ["Damage", "CriticalStrike"] |
| Map availability | `item.json` → `data[id].maps` | Which maps the item is available on |

---

## 3. What DDragon Does NOT Provide

These require external data sources or our own data pipeline:

| Data | Why It Matters | Possible Sources |
|------|----------------|-----------------|
| Win rate / pick rate / ban rate | Core metric for "is this champion good?" | Riot API match data, public stat aggregators, third-party data sources |
| Recommended builds per matchup | Primary user intent for "X build" searches | AI analysis of high-elo games |
| Counter pick data | "Who beats X?" is a top query | Statistical analysis of matchup win rates |
| Rune recommendations | Part of every build guide | Game data analysis, community APIs |
| Skill order | "What to max first?" | Game data analysis |
| Summoner spell choices | Flash + ?, varies by role | Game data analysis |
| Patch-specific meta | Meta shifts every 2 weeks | Ongoing data pipeline per patch |
| Role-specific builds | Same champion plays differently top vs mid | Game data filtered by position |
| Rank-specific data | Optimal builds differ by rank | Game data filtered by tier |
| Pro player builds | "What do pros build on X?" | Pro match APIs, esports data |
| Matchup-specific item adjustments | "Build X against tanks" | AI analysis or statistical modeling |

---

## 4. Implementation Strategy

### Phase 1 — Static Generation with DDragon Data

**Goal**: Get 6,880 indexable pages live with zero ongoing infrastructure cost.

**What to build**:

1. **Build-time fetch script** (`scripts/fetch-champions.ts`)
   - Fetch latest version from `versions.json`
   - Fetch `champion.json` for all 8 DDragon locales
   - Fetch individual `champion/{Id}.json` for each champion in each locale
   - Fetch `item.json` for all 8 locales
   - Save all data as JSON files in `src/data/champions/`
   - Log fetch stats (champion count, version, timestamp)
   - Run as npm script: `npm run fetch:champions`

2. **Data directory structure**:
   ```
   src/data/champions/
   ├── meta.json                    # { version, fetchedAt, championCount }
   ├── en/
   │   ├── champions.json           # Full list (from champion.json)
   │   ├── items.json               # Full item data
   │   └── champions/
   │       ├── aatrox.json           # Individual champion detail
   │       ├── ahri.json
   │       └── ...
   ├── it/
   │   └── ... (same structure)
   └── ... (all 8 locales)
   ```

3. **Page types** (per champion, per language):
   - **Champion overview** (`/:lang/champions/:name`) — stats, abilities, lore, tips, skins
   - **Champion list** (`/:lang/champions/`) — filterable grid of all champions

4. **i18n integration**:
   - Champion names, titles, descriptions come pre-localized from DDragon
   - UI strings (labels, headers, navigation) use our existing i18n system
   - Map our locale codes to DDragon locale codes (see table in section 1)

5. **Image handling**:
   - Use DDragon CDN URLs directly (no need to download/host images)
   - Lazy-load champion splash art and skin images
   - Use square icons for list views and compact displays
   - Add `loading="lazy"` and explicit `width`/`height` for CLS prevention

6. **Sitemap generation**:
   - Script reads `meta.json` + champion list to generate sitemap entries
   - One `<url>` per champion per language, with `<xhtml:link rel="alternate">` for hreflang
   - Include `<lastmod>` based on DDragon version release date
   - Add to existing sitemap or generate a separate `sitemap-champions.xml`

**Estimated effort**: 2-3 days for a developer familiar with the codebase.

### Phase 2 — AI-Powered Coaching Content

**Goal**: Differentiate from competitors with AI-generated analysis unique to LoL Sensei.

**What to build**:

1. **Per-champion AI content generation** (batch job, run per patch):
   - "Why play this champion" — strengths, weaknesses, ideal team comps
   - "How to play this champion" — laning phase, teamfighting, combos
   - Playstyle summary for each role the champion can fill
   - Matchup-specific advice for the most common matchups

2. **Content format**:
   - Store as structured JSON (not free-form markdown) for i18n and rendering flexibility
   - Each piece of content tagged with patch version
   - Content generated in English, then translated to other locales

3. **Integration with champion pages**:
   - New sections on the overview page: "LoL Sensei Analysis", "Playstyle Guide"
   - Clearly branded as AI-generated coaching content
   - Links to full LoL Sensei app for personalized coaching

**Estimated effort**: 1-2 weeks (including AI prompt engineering, content pipeline, review).

### Phase 3 — Live Data Integration

**Goal**: Provide the real-time stats users expect from a build guide site.

**What to build**:

1. **Data pipeline**:
   - Scheduled job (weekly or per-patch) to aggregate match data
   - Compute per-champion: win rate, pick rate, ban rate, by rank tier and role
   - Compute popular builds: items, runes, skill order, summoner spells
   - Compute counter picks: matchup-specific win rates with sample sizes
   - Store in a lightweight data store (JSON files on CDN, or a simple API)

2. **New page types**:
   - **Builds page** (`/:lang/champions/:name/builds`) — recommended builds, rune pages, skill order
   - **Counters page** (`/:lang/champions/:name/counters`) — best/worst matchups with win rates
   - **Full guide** (`/:lang/champions/:name/guide`) — combines all content into one comprehensive page

3. **Data freshness**:
   - Display "Patch 15.7" and "Updated 2 days ago" on each page
   - Stale data warning if more than 1 patch behind
   - Per-patch historical data for trend analysis

**Estimated effort**: 2-4 weeks (data pipeline is the main investment).

---

## 5. URL Structure

```
/:lang/champions/                     → Champion list (filterable grid)
/:lang/champions/:name                → Champion overview (Phase 1)
/:lang/champions/:name/builds         → Recommended builds (Phase 3)
/:lang/champions/:name/counters       → Counter picks (Phase 3)
/:lang/champions/:name/guide          → Full guide (Phase 3)
```

**Champion name slug format**: lowercase, hyphenated.

| Champion Name | URL Slug | DDragon ID |
|--------------|----------|------------|
| Aatrox | `aatrox` | `Aatrox` |
| Aurelion Sol | `aurelion-sol` | `AurelionSol` |
| Dr. Mundo | `dr-mundo` | `DrMundo` |
| K'Sante | `ksante` | `KSante` |
| Lee Sin | `lee-sin` | `LeeSin` |
| Miss Fortune | `miss-fortune` | `MissFortune` |
| Rek'Sai | `reksai` | `RekSai` |
| Twisted Fate | `twisted-fate` | `TwistedFate` |
| Xin Zhao | `xin-zhao` | `XinZhao` |

A mapping file (`src/data/champions/slug-map.json`) will map URL slugs to DDragon IDs:

```json
{
  "aatrox": "Aatrox",
  "aurelion-sol": "AurelionSol",
  "dr-mundo": "DrMundo",
  ...
}
```

This mapping should be generated automatically by the fetch script based on champion names.

---

## 6. SEO Impact Estimate

### Page Count

| Phase | Pages per Champion | Champions | Languages | Total Pages |
|-------|-------------------|-----------|-----------|-------------|
| Phase 1 | 1 (overview) + 1 (list shared) | 172 | 8 | 1,384 |
| Phase 3 | 4 (overview + builds + counters + guide) + 1 (list) | 172 | 8 | 5,512 |

Plus 8 champion list pages (one per language) = **5,520 total at Phase 3**.

### Target Keywords

| Keyword Pattern | Monthly Searches (est.) | Competition |
|----------------|------------------------|-------------|
| "[champion] build" | 2,000-50,000 per champion | High |
| "[champion] guide" | 500-10,000 per champion | High |
| "[champion] counter" | 500-5,000 per champion | Medium |
| "[champion] runes" | 1,000-20,000 per champion | High |
| "best [champion] build" | 200-5,000 per champion | Medium |
| "[champion] tips" | 100-2,000 per champion | Low |

Aggregate monthly search volume for all champion-related queries: **2-4M searches/month**.

### Traffic Projection

| Phase | Timeline | Estimated Monthly Organic Traffic |
|-------|----------|----------------------------------|
| Phase 1 (static content only) | Month 1-3 | 5K-15K visits |
| Phase 1 mature | Month 3-6 | 15K-40K visits |
| Phase 2 (AI content) | Month 6-9 | 40K-80K visits |
| Phase 3 (live data) | Month 9-12 | 80K-200K visits |

These estimates assume proper SEO implementation (structured data, hreflang, sitemap, internal linking).

### SEO Technical Requirements

- **Structured data**: `Article` or `WebPage` schema for each champion page
- **hreflang tags**: Link all 8 language versions of each page
- **Canonical URLs**: Avoid duplicate content between page types
- **Internal linking**: Champion pages link to counters, counters link back, items link to champions who use them
- **Meta tags**: Unique title and description per page, per language
- **Open Graph**: Champion splash art as OG image for social sharing
- **Breadcrumbs**: Home > Champions > [Champion Name] > [Page Type]

---

## 7. Technical Requirements

### Build Script (`scripts/fetch-champions.ts`)

**Purpose**: Fetch all DDragon data at build time and store as JSON.

**Behavior**:
1. Fetch latest version from `versions.json`
2. Compare with `src/data/champions/meta.json` — skip if version unchanged (unless `--force` flag)
3. For each locale:
   - Fetch `champion.json` (list with basic data)
   - For each champion, fetch `champion/{Id}.json` (full detail)
   - Fetch `item.json`
4. Generate `slug-map.json` from champion names
5. Write `meta.json` with version, timestamp, champion count
6. Rate limiting: DDragon has no strict rate limit, but add a small delay (50-100ms) between requests to be respectful

**npm scripts**:
```json
{
  "fetch:champions": "tsx scripts/fetch-champions.ts",
  "fetch:champions:force": "tsx scripts/fetch-champions.ts --force",
  "prebuild": "npm run fetch:champions"
}
```

### Data Cache (`src/data/champions/`)

- All JSON files committed to git (they are static assets, not secrets)
- `.gitignore` should NOT exclude this directory
- Total estimated size: ~15-25 MB for all 172 champions in 8 languages
- JSON files are tree-shakeable at build time if imported individually

### Page Components

**Champion List Page** (`src/pages/ChampionsPage.tsx`):
- Grid of champion cards (square icon + name + title + roles)
- Filter by role (Fighter, Mage, Tank, etc.)
- Search by name
- Sort by name or difficulty
- Responsive: 4 columns desktop, 2 columns mobile

**Champion Detail Page** (`src/pages/ChampionDetailPage.tsx`):
- Hero section: splash art + name + title + roles
- Stats table: base stats with per-level growth
- Abilities section: passive + Q/W/E/R with icons, names, descriptions
- Tips section: playing as + playing against
- Skins gallery: carousel of skin splash arts
- Lore section: collapsible full lore text

### Routing Changes (`App.tsx`)

```tsx
// New routes to add inside the /:lang route group
<Route path="/champions" component={ChampionsPage} />
<Route path="/champions/:name" component={ChampionDetailPage} />
<Route path="/champions/:name/builds" component={ChampionBuildsPage} />    // Phase 3
<Route path="/champions/:name/counters" component={ChampionCountersPage} /> // Phase 3
<Route path="/champions/:name/guide" component={ChampionGuidePage} />       // Phase 3
```

### Image Optimization

- Champion square icons: use directly from DDragon CDN, 120x120 is already small
- Splash art: large (1215x717), lazy-load with `loading="lazy"`
- Consider a `<picture>` element with WebP conversion via a CDN transform (Cloudflare Polish or Images) if available
- Set explicit `width` and `height` on all `<img>` tags to prevent layout shift
- Use DDragon sprite sheets for list views where many icons appear simultaneously

### Sitemap Generation

Script to generate `public/sitemap-champions.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://lolsensei.gg/en/champions/aatrox</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://lolsensei.gg/en/champions/aatrox"/>
    <xhtml:link rel="alternate" hreflang="it" href="https://lolsensei.gg/it/champions/aatrox"/>
    <xhtml:link rel="alternate" hreflang="ko" href="https://lolsensei.gg/ko/champions/aatrox"/>
    <!-- ... all 8 languages -->
    <lastmod>2025-04-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... repeat for each champion -->
</urlset>
```

---

## 8. Dependencies and Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| DDragon data format changes | Build script breaks | Pin version, add schema validation, alert on fetch failure |
| New champion release | Missing page | Script auto-discovers all champions from API response |
| DDragon CDN downtime | Images don't load | Cache critical images locally or use fallback placeholder |
| Large data size slows build | Longer CI/CD times | Incremental fetch (only changed data), cache in CI |
| Champion name collisions in slugs | Routing errors | Generate slug map deterministically, add collision detection |
| Riot TOS compliance | Legal risk | DDragon is explicitly provided for community use; follow Riot's legal guidelines and attribute properly |

---

## 9. Success Metrics

| Metric | Target (6 months) | Target (12 months) |
|--------|-------------------|---------------------|
| Indexed pages | 1,000+ | 5,000+ |
| Organic traffic (monthly) | 15K-40K | 80K-200K |
| Average position for "[champion] build" | Top 20 | Top 10 |
| Pages per session (from champion pages) | 2+ | 3+ |
| Bounce rate on champion pages | < 60% | < 50% |
| Time on page | > 1 min | > 2 min |
