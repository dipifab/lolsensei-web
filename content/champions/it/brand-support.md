---
title: "Brand Support Build & Guida — Patch 16.9"
slug: "brand-support"
language: "it"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Guida Brand support per League of Legends Patch 16.9: pressione aggressiva in lane, build da poke, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Le spell di Brand danno fuoco al bersaglio (danno nel tempo per 4s, fino a 3 stack). A 3 stack il blaze detona come una piccola esplosione AOE che riapplica gli effetti delle spell."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineare con danno magico. Se il bersaglio è già ablaze, lo stunna — il setup di kill per la tua AD carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Area AOE ritardata dopo un breve tell. I bersagli ablaze subiscono +25% danno. Lo strumento di poke con il danno più alto del kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Esplosione targettata che rimbalza sui nemici vicini. Se il primo bersaglio è ablaze, il raggio di propagazione raddoppia — applica blaze su due nemici in un solo cast."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Palla di fuoco a lunga gittata che rimbalza fino a 5 volte tra nemici, dando priorità ai target ablaze. Vince i teamfight quando l'ADC e il support avversari stanno appiccicati."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro hard CC sulla tua ADC (catena stun di Leona, Q di Morgana, hook di Pyke)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro composizioni con AOE engage pesante (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Yuumi peel, team con Aatrox o Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario completa il primo item di Resistenza Magica"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pressione 2v2 con il poke di W prima del livello 3, poi cerca setup E + Q stun per la tua ADC. Post-6 i bounce della R tra ADC e support avversari appiccicati trasformano la lane in uno snowball."
  weakness: "Niente shield, niente heal, niente peel per l'ADC. Se il support avversario engagia per primo, Brand non può proteggere la sua carry — può solo uccidere chi engagia più in fretta di quanto loro uccidano la carry."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaria: Arcane Comet si auto-procca su ogni hit di W o E, aggiungendo poke gratis a ogni cooldown. Manaflow Band sostiene il mana per spammare W in 2v2, Transcendence porta l'ability haste oltre il 40%, Scorch chiude i nemici a basso HP sotto torre."
    secondary_rationale: "Inspiration secondaria: Biscuit Delivery risolve la fame mana di Brand nei primi 6 livelli e Cosmic Insight dà più uptime di Flash — Flash è l'unico modo di schivare un engage, il kit non ha alcuna escape innata."
    secondary_alternative: "Contro hooker pesanti (Blitzcrank, Thresh, Pyke) dove devi sopravvivere al primo hook per vincere la lane, swap Inspiration verso Resolve con Bone Plating (riduce il danno back-to-back dell'hook) e Revitalize (potenzia lo shield di Mikael's)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Enchanter squishy con HP bassi"
      reason: "La W di Brand supera il loro raggio di healing in poke e la rotation E + Q li uccide prima che la carry possa peelarli. Yuumi specificamente perde il corpo a una sola rotation completa; Soraka non riesce a curare attraverso i tick di blaze."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Support utility senza engage"
      reason: "Brand vince la fase di lane per forza — non possono punire lo spam di W perché il loro kit serve a scudare la carry, non a tradare. Dopo il livello 6 il loro CC è single-target mentre la tua R li prende entrambi insieme."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "ADC a lunga gittata senza escape"
      reason: "Questi ADC stanno a max range per last-hit; una E sul loro support spande blaze a loro, la Q lock-a lo stun, e l'AD carry alle tue spalle prende la kill prima che possano flashare."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Support tank da hard-engage"
      reason: "Engaggiano fuori dal range della W di Brand con una catena flash-stun. Brand non ha peel per sé né per la carry — appena Leona stunna, il kit non ha risposte se non morire o bruciare Flash + Zhonya's insieme."
    - examples: ["rakan", "alistar"]
      archetype: "Support engage mobili"
      reason: "Rakan dasha attraverso i tuoi skillshot e tira la tua ADC fuori posto; la catena headbutt-pulverize di Alistar salta oltre lo stun della Q. Brand non riesce a reagire abbastanza in fretta a nessuno dei due."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "Support all-in che matchano il burst di Brand"
      reason: "La Q di Pantheon e l'hook di Blitzcrank hanno range effettivi simili alla Q di Brand. Chi atterra il setup per primo vince il trade, e entrambi hanno survival built-in (block dell'Aegis, hook-and-leave) che a Brand mancano."
---

## Panoramica

Brand support è il caster support più aggressivo del gioco. Non porta in dote nessuna delle cose che un support tradizionale porta — niente shield, niente heal, niente peel per la carry ("peel" = abilità che proteggono un alleato spingendo o stunnando chi lo sta attaccando), niente engage che termini in una cooldown di sopravvivenza tank. Quello che porta è una **threat di kill flat dal minuto 1**. Ogni spell dà fuoco al nemico (passiva **Blaze**), e una volta che un nemico è in fiamme la tua **Q (Sear)** smette di essere una spell di danno e diventa uno stun. Il piano partita è: pokali con **W (Pillar of Flame)** finché due stack di blaze non si attaccano, **E** per propagare il blaze a entrambi i target, e **Q** per lo stun che permette alla tua ADC di camminare e finire la kill.

Il prezzo è la fragilità. Brand non ha escape, niente sustain innato, e nessuno strumento per proteggere la sua AD carry. Se il support avversario engagia per primo — Leona stun, Nautilus hook, Rakan dash — la tua unica vera risposta è *uccidere chi engagia più in fretta di quanto loro uccidano la tua carry*, cosa che funziona solo quando sei avanti. Il pick è binario: o stomp-i la lane e snowball-i (uno snowball è un vantaggio iniziale che cresce: kill → gold → item → più kill), o muori early e nutri due nemici. Non c'è molto in mezzo, motivo per cui questa guida si appoggia molto sullo spike di livello 2 e sul bounce della **R** nei teamfight come i due momenti che devi eseguire bene.

## Build Consigliata

**Item iniziali:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (lo starter da support AP che fa quest verso Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Item core (nell'ordine):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — la quest reward del support da Spellthief's Edge. Obbligatorio: dà l'income di gold che ti permette di comprare item veri, più uno stack AP-su-takedown che snowballa il danno.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — l'item identitario di danno di Brand. Burn percentuale degli HP che si somma ai tick di blaze, punendo tank e squadre con HP impilati.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — stivali di ability haste, prioritizzati su Sorcerer's Shoes qui perché da support casti più abilità e farmi meno minion. Più uptime di R per teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra più una passiva che ignora ulteriore Resistenza Magica sotto soglia HP. Si allinea coi bounce della R che cacciano il target a vita più bassa.

**Item situazionali:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contro hard CC sulla tua ADC (catena stun di Leona, Q di Morgana, hook di Pyke). Cleansare il CC sulla carry è la cosa più simile al peel che Brand ha.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro composizioni con AOE engage pesante (R di Malphite, wombo di Yasuo — un "wombo" è quando più ultimate si concatenano per prendere tutta la tua squadra in una volta, R di Kennen). Lo shield attivo è un pulsante salvataggio nei teamfight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka, Yuumi peel, team con Aatrox o Vladimir). La passiva Grievous Wounds dimezza il loro healing.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario completa il primo item di Resistenza Magica. Impedisce a un singolo componente da 800 gold di soft-counterare la build.

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. Swap a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se la squadra avversaria ha 3+ minacce di hard CC con danno magico.

**Skill order:** Massimizza **W** per primo (il danno base più alto e principale poke 2v2), **Q** per secondo (più danno sullo stun), **E** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**.

## Matchup chiave

- **Leona / Nautilus / Rell:** Support tank da hard-engage. Stai fuori dal loro range di flash-engage finché non hai ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**. Pre-piazza **W** sui tuoi piedi quando si avvicinano, pronto a **Q** lo stun nel momento in cui engagiano.
- **Blitzcrank / Thresh / Pyke:** Hookers. Stai sempre dietro a un minion — l'hook è uno skillshot single-target che la wave blocca. Punisci gli hook mancati con **W → Q** per poke gratis; non auto-attaccare mai fuori copertura quando hanno hook disponibile.
- **Yuumi:** Lane gratis. Yuumi non ha corpo quando non è attaccata. Tempa **W** per atterrare nel momento in cui si stacca per last-hit o per proccare l'auto potenziato. Una Yuumi staccata presa dal **W → Q** è una kill prima che la sua carry possa scudarla.
- **Soraka:** Out-pressionala stackando poke finché il suo mana finisce. Soraka cura la sua ADC al costo del 5% dei propri HP — ogni tick di blaze sull'ADC annulla 30 secondi del suo healing.
- **Lulu:** Polymorph e shield rendono inaffidabili i burst 1v1. Poka da max range della **W**, non committare mai allo stun-into-all-in (un "all-in" è il commit totale alla kill — niente uscita, vai finché qualcuno muore) se la tua jungla non è in arrivo; se Lulu polymorph-a la tua ADC a metà trade, il trade è perso.

## Power spike & condizioni di vittoria

- **Livello 2 (W + Q):** Primo spike. Con un punto in **W** più la **Q** di partenza il combo **W → Q stun** è online. Questa finestra è dove avviene il 90% delle kill di Brand support — pusha la wave per arrivare al livello 2 prima, poi atterra il combo sul support avversario.
- **Livello 6 (R sbloccata):** Prima **Pyroclasm** disponibile. Se la bot lane avversaria sta appiccicata (quasi sempre — i support stanno dietro la loro ADC), una sola **R** fa circa il 50% degli HP di uno squishy per bounce.
- **Bloodsong + Liandry's Torment online (~ minuto 14-16):** Il danno si ribalta. Da qui out-damaggi ogni enchanter support e minacci la kill su una ADC nutrita. Forza i fight raggruppati al drake.
- **R + Shadowflame online (~ minuto 22-26):** Due nemici raggruppati mangiano l'intera sequenza di bounce e muoiono. Questo è quando Brand vince i teamfight da dietro — scegli angoli dove la carry e il support avversari sono entro distanza di bounce uno dall'altro.

## Errori comuni

- **Auto-attaccare la wave per i last-hit.** Da support non prendi i last-hit — il gold dal farm dell'AD carry è quello che finanzia la lane. Stai dietro, poka l'avversario con **W**, e auto-attacca un minion solo se la carry è morta o sta recallando.
- **Lanciare Q per poke nudo.** **Q** senza ablaze è un proiettile lento che manca sui nemici che si scansano. Setta con **W** sul terreno prima, o **E** su un minion che propagherà il blaze — poi Q per lo stun.
- **Stare davanti alla tua ADC.** Brand non ha peel per sé né per nessun altro. Se stai davanti, l'engage colpisce te, muori, la tua ADC resta senza support. Stai alla stessa profondità o un passo dietro, con un minion tra te e l'hook.
- **Ultare un solo nemico.** **R** rimbalza tra target dando priorità agli ablaze, ma con grande damage falloff per salto su un solo bersaglio. Conserva **R** per fight dove due o tre nemici sono entro distanza di bounce — non usarla mai come finisher su un solo target in fuga.
- **Pre-piazzare W dove il nemico è adesso.** Pillar of Flame ha un delay prima di atterrare. Castala dove il nemico *sarà* in 0.6 secondi — tipicamente lo spot per cui deve passare per raggiungere il prossimo minion o per scappare dal tuo stun. Castarla sulla posizione attuale è un miss garantito contro qualsiasi avversario mezzo attento.

## Suggerimento avanzato

Allena il **double-spread setup**. Quando il support e l'ADC avversari stanno appiccicati (tipico quando spingono la wave o quando il support copre l'ADC), fai in ordine: **W** tra loro → entrambi prendono blaze stack 1. **E** sul support avversario → blaze stack 2 sul support, propaga sull'ADC per stack 2 sull'ADC. Ora entrambi i target sono a 2 stack — non ti serve atterrare la **Q** per settare lo stun, ti serve atterrarla come *finisher*. Q sul support: stack 3 atterra, il support è stunnato, la detonazione instabile colpisce anche l'ADC e lo porta a stack 3. **R** ora rimbalza tra due target stunnati a blaze massimo, entrambi muoiono, e tu non tradi nulla in cambio. Questa è la rotation che trasforma un "Brand support decente" in un Brand che vince la lane ogni partita.
