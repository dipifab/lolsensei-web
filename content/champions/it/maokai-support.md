---
title: "Maokai Support Build & Guida — Patch 16.9"
slug: "maokai-support"
language: "it"
patch: "16.9"
champion: "maokai"
role: "support"
last_updated: "2026-05-05"
description: "Guida a Maokai support per League of Legends Patch 16.9: starter kit, build AP-tank engage, matchup chiave, power spike, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Maokai"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage Support"
  abilities:
    - key: "P"
      name: "Sap Magic"
      description: "L'auto-attack di Maokai lo cura e infligge danno magico bonus su un cooldown moderato. Castare spell o essere colpito da spell nemiche abbassa il cooldown: una sequenza Q-W-E quasi sempre prepara la prossima auto empowered."
      dd_spell_id: "Maokai_Passive"
    - key: "Q"
      name: "Bramble Smash"
      description: "Onda lineare a corto-medio raggio che respinge i nemici vicini, infligge danno magico e li rallenta. Tool primario di engage e disengage. Cooldown basso: usabile in quasi tutti i trade."
      dd_spell_id: "MaokaiQ"
    - key: "W"
      name: "Twisted Advance"
      description: "Dash target singolo verso un nemico: Maokai diventa untargetable durante il volo e all'arrivo applica root. È point-and-click, quindi dash e schivate del bersaglio non lo salvano. È l'ancora di hard CC del kit."
      dd_spell_id: "MaokaiW"
    - key: "E"
      name: "Sapling Toss"
      description: "Lancia un sapling che monta la guardia, poi insegue i nemici vicini ed esplode infliggendo danno magico AOE e slow. I sapling rivelano brevemente la vision: servono anche da zoning e ward. Più grande e duraturo se piazzato in brush."
      dd_spell_id: "MaokaiE"
    - key: "R"
      name: "Nature's Grasp"
      description: "Onda di rovi a lungo raggio che viaggia in linea ampia e rooting tutti i nemici colpiti. La durata del root scala con la distanza percorsa: castala da lontano per incatenarla al follow-up del team."
      dd_spell_id: "MaokaiR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "quando il tuo ADC ha un'ult ad alto danno (Jinx R, Miss Fortune R, Samira R): la W root pre-attiva un damage amp sulla loro prima abilità"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro carry da auto-attack pesante (Tristana, Twitch, Master Yi): Grievous Wounds e armor puniscono lo stack di attack speed"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro comp doppio mago (Syndra mid + Brand support): magic resist e bonus move-speed crescente quando ti colpiscono spell"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contro comp di burst AP (es. doppio mago tipo Syndra mid + Brand support): scudo magico passivo che si rigenera fuori combat"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Piazza una R a lungo raggio dalla fog durante i fight su obiettivo, segui con W sul bersaglio prioritario e lascia che il team finisca mentre Locket e Knight's Vow tengono in vita l'ADC."
  weakness: "Range di engage corto fuori dalla R: la W ha solo 525 di range e la Q è più corta. Support con cleanse o disengage schivano l'engage; senza R pronta non hai tool a lungo raggio per aprire il fight."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Health Scaling"
      - "Tenacity and Slow Resist"
      - "Health Scaling"
    primary_rationale: "Aftershock parte quando la W root atterra, dando burst di armor e magic resist quando il team nemico ti focussa. Shield Bash converte ogni shield di Locket e Knight's Vow in danno bonus, Conditioning scala late, Revitalize potenzia heal e shield che ricevi."
    secondary_rationale: "Inspiration secondary: Magical Footwear risparmia 300 gold (importante con income da World Atlas) e Cosmic Insight abbassa il cooldown di Flash e dell'attivo di Locket, entrambi critici per il timing degli engage su R."
    secondary_alternative: "Contro lane di poke pesante (Xerath, Senna, Caitlyn con support poker) swappa Inspiration per Sorcery con Nimbus Cloak (burst di move speed dopo Flash) più Manaflow Band: l'harass Q-E in lane diventa mana-positive e il burst di move speed incatena un engage di flank."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "twitch", "kog-maw"]
      archetype: "ADC immobili senza dash"
      reason: "Twisted Advance è root point-and-click: gli ADC senza dash, blink o stealth mangiano la combo W in auto ogni volta che entri in range di W. L'unica counter-play è il summoner spell, e una volta che il Flash è giù muoiono in una combo."
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Carry a lungo raggio immobili senza Heal"
      reason: "La R cheese di Maokai (Flash + R dalla fog) ignora il loro vantaggio di range. Vivono di spacing, quindi un root da fuori vision salta del tutto la lane phase e regala il kill al jungler."
    - examples: ["sett", "rell", "nautilus"]
      archetype: "Tank engage che batti col range della R"
      reason: "Il loro engage richiede di essere addosso a te, ma Nature's Grasp li rooting da uno schermo di distanza. Non riescono mai ad aprire il fight alle loro condizioni."
  counterpicks:
    - examples: ["janna", "milio", "alistar"]
      archetype: "Support di disengage e cleanse"
      reason: "La R di Janna cancella il tuo engage in pieno cast, la R di Milio rimuove il root della W a distanza, la combo W-Q di Alistar strappa il carry dal tuo follow-up AOE. Il tuo unico hard engage viene risposto a costo zero."
    - examples: ["lucian", "tristana", "ezreal"]
      archetype: "ADC mobili con dash multipli"
      reason: "La E di Lucian, la W di Tristana e la E di Ezreal aggirano l'angolo di knock-back della Q e si riposizionano fuori dal slow del sapling. Camminano attraverso il tuo zoning e tradano durante le tue finestre di cooldown."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanter di pure sustain che battono l'harass"
      reason: "Maokai trada bene ma non one-shotta. Una Soraka che tiene il suo ADC pieno rende l'harass Q-E in lane irrilevante; senza una kill threat al 6, perdi tempo sui roam e tempo sul vantaggio."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support a lungo raggio con shield o stun"
      reason: "Ti pokano da 900-plus di range e ti costringono ad all-inare oltre la distanza sicura. Senza dash mobility, mangi chip damage gratis ogni wave e arrivi al 6 a metà HP, senza tempo per engagiare."
---

## Panoramica

Maokai è un **vanguard support** (un support di classe tank il cui lavoro è aprire i fight e bloccare i bersagli prioritari, non curare gli alleati). Il suo kit è costruito per incatenare hard crowd control: **Twisted Advance (W)** è un dash point-and-click che applica **root** (blocca il bersaglio sul posto, niente movimento, niente Flash) nell'istante in cui arrivi, e **Nature's Grasp (R)** è un muro di rovi a lungo raggio che attraversa mezzo schermo e rooting ogni nemico colpito. Tra questi due pezzi di CC, **Bramble Smash (Q)** respinge i nemici piccoli e li slow-a, **Sapling Toss (E)** lancia un sapling magico che rivela brush ed esplode in AOE, e la passive **Sap Magic** lo cura e aggiunge danno magico bonus sulla prossima auto-attack a cooldown. L'intero kit si auto-incatena: ogni spell castata abbassa il cooldown di Sap Magic, quindi castare Q-W-E in un fight quasi sempre garantisce che la prossima basic attack sia empowered.

Game plan: in lane, **poka** (chip damage da distanza sicura) con Q ed E sapling mentre la passive Sap Magic ti fa tradare in vantaggio. Al 6, cerca la **R cheese**: una combo Flash + R da una side bush per rootare più bersagli e convertire col jungler. Mid-game, raggruppa col team per gli obiettivi e usa la R dalla fog of war per aprire i fight senza farti vedere prima. Late-game, stai in front line, mangia l'engage nemico con Locket e Knight's Vow attivi, e incatena W in R per bloccare il carry nemico mentre l'ADC e il mid finiscono il fight.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato per support) più 2 Health Potions. Non last-hittare i minion in lane: lascia il gold all'ADC, World Atlas ti paga separatamente tramite la sua quest.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolve automaticamente man mano che warding e fai assist passando per ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e poi ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, fino all'upgrade endgame che scegli (Bloodsong per Maokai engage).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist più **tenacity** (una stat che riduce la durata del crowd control su di te). Boots di default: stun e slow più corti significano che riesci a incatenare la Q dopo la W senza essere interrotto dal CC nemico.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — attivo che scuda tutti gli alleati vicini per qualche secondo. Premilo nell'istante in cui R o W in faccia al nemico: la tua squadra si mangia il primo **burst** (il danno alto concentrato che dumpano nei primi 1-2 secondi del fight) gratis.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega al tuo **ADC** (Attack Damage Carry — il carry da auto-attack della bot lane, il principale damage dealer late-game della squadra): una parte del danno che riceve viene reindirizzato a te, e in cambio lo curi. Scegli sempre il carry la cui vita è più importante prolungare.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame engage-focused del tuo support item (World Atlas si trasforma da solo una volta finita la quest). Ha una passive **Spellblade**: dopo qualsiasi spell — W, Q, R, anche un sapling E — la prossima basic attack infligge danno fisico bonus e amplifica del 4% per 4 secondi il danno che il bersaglio riceve. Il pattern è "abilità → AA → abilità → AA" stackato per tutto il fight.

**Situational items:**

- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — link con l'ult del tuo ADC (Jinx R, Miss Fortune R, Samira R). Quando la tua W root atterra, la prossima abilità del tuo ADC riceve un damage amp e la proc aggiunge una zona slow intorno a te per il follow-up del team. Sostituisce Knight's Vow quando l'ADC è il carry da kill, non la priorità da tenere in vita.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — armor più una passive **Grievous Wounds** (taglia l'heal nemico) su ogni basic attack che ricevi. Da prendere contro carry da auto-attack pesante (Tristana, Twitch, Master Yi) o comp con tanto heal (Soraka mid, Aatrox top nemico).
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — magic resist più movement speed crescente ogni volta che una spell ti colpisce. Da prendere contro comp doppio mago (Syndra mid + Brand support); il move speed ti permette di re-engagiare durante il fight, non solo di sopravviverlo.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — scudo magico passivo che si rigenera fuori combat. Da prendere contro comp di burst AP (doppio mago tipo Syndra mid + Brand support): lo scudo si mangia un'ult intera e ti lascia sopravvivere all'engage che hai aperto.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacity. Swap su ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo se la bot lane nemica è auto-attack heavy e il resto del team nemico ha pochissimo hard CC.

**Skill order:** Maxa **Q** per prima (cooldown più basso, miglior tool per harass e trade in lane). Maxa **E** per seconda (più danno per sapling e slow più lungo per AOE waveclear e zoning). Maxa **W** per ultima (il rank-up aggiunge solo danno; la durata del root è fissa). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** (l'albero rune difensivo — durabilità) con **Aftershock** (armor e magic resist gratis per qualche secondo quando applichi crowd control: parte su ogni W root), **Shield Bash** (i tuoi shield aggiungono danno bonus alla prossima auto: si abbina a Locket e Knight's Vow), **Conditioning** (più armor e magic resist a partire dal minuto 12) e **Revitalize** (potenzia l'heal della passive e gli shield che ricevi). Secondary **Inspiration** con **Magical Footwear** (boots gratis, risparmi 300 gold) e **Cosmic Insight** (cooldown più bassi su Flash e attivo di Locket). **Stat shards** (i tre piccoli boost statistici in fondo alla pagina rune): Health Scaling / Tenacity and Slow Resist / Health Scaling.

## Matchup chiave

- **Pyke:** Skill matchup deciso da chi roama meglio. Ti pokerà con la Q e ti supererà sul burst con la R. Non provare ad all-inarlo in lane: tieni gli sapling E sugli ingressi del river per negare il suo **stealth** (diventa invisibile passando nei brush) e forza i fight solo quando il tuo jungler è bot side.
- **Leona:** Mirror **engage**. Ha uno stun a range più lungo del tuo (Zenith Blade), quindi non W-arla addosso se la sua E è up. Una volta che i suoi tool di engage sono in cooldown, la finestra dei tuoi 11 secondi di cooldown della Q vince il trade: lei non ha nulla per controengagiare.
- **Lulu:** Hard counter sul tuo engage. Il polymorph cancella la W in pieno dash. Tieni traccia della finestra di 13 secondi e engagia solo quando è giù. Le ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sono obbligatorie qui per la tenacity.
- **Soraka:** Pura **sustain enchanter** (un support focalizzato sull'heal) senza tool di engage. Cura facilmente attraverso il poke Q-E, quindi non puoi vincere lane sul danno. Roama mid e invadi la jungle nemica con Mobility Boots: la lane di Maokai stalla ma il macro punisce il roam debole di Soraka.
- **Senna:** Matchup di **poke** a lungo raggio (chip damage a distanza per consumarti). Ti bullizza l'HP sotto torre con le Q che la curano e la sua AA range. Non rispondere: prendi la lane brutta, raggruppa presto sugli obiettivi, e usa la R dalla fog intorno a Drake o Voidgrubs per ribaltare i teamfight.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Primo piccolo spike. Sapling Toss in Q poke chunkka l'HP dell'ADC nemico gratis. Se overextende sulla seconda wave senza Flash, il jungler converte.
- **Livello 6 (R unlocks):** Inizia il vero gioco. **Nature's Grasp** trasforma i tentativi di gank dal river in kill gratis: lancia l'onda da una side bush e l'ADC nemico cammina dentro un root da 2 secondi. La R cheese (Flash + R dalla fog) è la giocata di livello 6 più forte del gioco su Maokai.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primo item da teamfight online. Raggruppa col team per **Drake** (l'obiettivo drago nel river bottom: ogni kill regala bonus statistici permanenti alla squadra) o **Voidgrubs** (mostriciattoli nel river top: la squadra che li uccide guadagna danno bonus contro le strutture nemiche). L'engage adesso lascia cadere uno scudo di team gratis proprio quando il nemico burstа indietro.
- **![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) Knight's Vow + ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong online (~ minuto 22-26):** Potenza endgame nei teamfight. Puoi incatenare R in W, mangiare il focus fire mentre Knight's Vow lo condivide con te, e l'amp di Bloodsong permette al tuo ADC di cancellare un bersaglio rooted in una rotazione.

## Errori comuni

- **Lanciare la Q quando nessuno è in range.** Bramble Smash è un'onda corta intorno a Maokai, non uno skillshot lungo. Castarla da lontano spreca 40 mana e il cooldown: aspetta che almeno un nemico sia dentro il cerchio dello slow, poi incatenala dopo la W per tenere il bersaglio bloccato.
- **Tenere la R per "l'engage perfetto" che non arriva mai.** Una Nature's Grasp su 90-130 secondi di cooldown sprecata se non la usi mai. Se la R prende anche un solo campione in una skirmish 4v4 intorno a Drake, hai fatto valore. Non tenertela per un wombo combo immaginario da 5 uomini.
- **Engagiare senza team dietro.** Maokai senza l'ADC e la squadra è un tank senza danno. Se il tuo ADC è in base o il jungler è dall'altra parte della mappa, tieni W e R. Un engage solitario in 4v5 regala il cooldown della tua **R** al team nemico.
- **Piazzare i sapling su sentieri vuoti.** La vision e lo slow del Sapling Toss contano solo dove il nemico passa davvero. Lascia i sapling nei brush dove vuole warding, agli ingressi del river prima di un obiettivo, oppure direttamente sotto un nemico a basso HP — mai in una lane dove la wave sta già pushando verso di te.
- **Sprecare la R per waveclear.** La R è il tuo unico tool di engage a lungo raggio. Anche se una wave sta crashando in torre, mai spendere la R sui minion: perdi la wave, salva il cooldown per il fight che segue.

## Suggerimento avanzato

Il **trick R-Flash**. Inizia a castare Nature's Grasp per primo: l'animazione di cast è breve ma blocca la direzione di Maokai. Nell'istante in cui l'onda inizia a viaggiare, **flasha lateralmente**. L'onda mantiene la direzione originale relativa a dove l'hai castata, quindi arrivi davanti e di lato all'onda, in posizione per W-Q sulla backline nemica mentre reagisce in panico al root. Esercitati in **Practice Tool**: il ritmo è R press → Flash press, entrambi dentro mezzo secondo, con il cursore già piazzato oltre il carry nemico prima di iniziare. Eseguito bene, il team nemico vede l'onda apparire da una direzione che non si aspettava, con te già dentro la loro formazione. Questa è la tecnica che trasforma la R di Maokai da "root a lungo raggio sperato" a "vittoria garantita del teamfight".
