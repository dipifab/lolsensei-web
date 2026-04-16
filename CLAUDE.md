# LoL Sensei Web — Project Instructions

## Regole contenuto

- **Non menzionare mai competitor per nome** nel codice, contenuti, blog, documentazione o qualsiasi output. Nessun riferimento a: op.gg, u.gg, Blitz.gg, Porofessor, Mobalytics, o qualsiasi altro tool/servizio concorrente. Usare termini generici: "stat tracking tools", "overlay apps", "tier list websites", "other tools".

## Stack tecnico

- SolidJS + Vite + Tailwind CSS v4
- Deploy: Cloudflare Workers
- i18n: 8 lingue (en, it, ko, zh, pt-br, es, fr, de), blog solo en/it
- CSR puro (migrazione SSG pianificata — vedi WP18 in `../lolai/architecture-repository/`)

## Governance

- TOGAF ADM e work packages governati in `../lolai/architecture-repository/`
- Questo repo corrisponde a WP10 (Go-to-Market) e WP18 (SolidStart SSR/SSG)
