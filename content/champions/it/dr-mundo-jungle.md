---
title: "Dr. Mundo Jungle: Build e Guida — Patch 16.9"
slug: "dr-mundo-jungle"
language: "it"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida Dr. Mundo jungle per LoL Patch 16.9: percorso jungle col pet Mosstomper, build tank HP-stacking, timing dei gank, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Il primo hard CC (uno stun, root o knockup che ti immobilizza) viene assorbito: Mundo paga HP invece di subire l'effetto e droppa una boccetta a terra; raccoglierla heala e resetta il passive. Inoltre rigenerazione HP altissima."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot lineare a lungo raggio che fa danno magico in percentuale degli HP attuali del bersaglio e lo slow. Costa HP, non mana — la barra delle risorse e' la barra della vita. Tool principale di gank pre-6 da 975 di range."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel su se stesso che ticka danno magico ai nemici vicini e immagazzina parte del danno subito. Recast per una raffica: se colpisce un campione, heala una % del danno immagazzinato. Toggle attivo nei camp per sustain del clear."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passivo: bonus AD che scala con HP massimi. Attivo: colpo melee che fa danno extra basato sui tuoi HP mancanti. Se uccide, scaraventa il corpo colpendo gli avversari sulla traiettoria. Spike di danno single-target sui gank."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: heal istantaneo di una percentuale degli HP mancanti, poi bonus Move Speed e rigenerazione HP enorme per la durata. Premila prima di un gank, prima di un fight, prima di morire — mai dopo."
      dd_spell_id: "DrMundoR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps contro 3+ fonti di CC o 2+ minacce AP; la tenacity ti salva una volta consumato il primo CC dal passive"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5° o 6° item nelle partite oltre il minuto 30; il passive HP-regen ti fa healare a full tra camp e rotation senza tornare base"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro carry auto-attack (Vayne bot, Tryndamere top, Master Yi jungle); riflette danno e applica Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro comp AP pesanti con 2+ mage ranged (Karthus jungle + Brand support, Lillia + Lux); MR + Move Speed contro magic damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contro AP burst single-target (Syndra mid, Veigar mid, LeBlanc); lo spellshield (barriera one-use) annulla l'opener della combo"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full clear fino al livello 4, gank al livello 6 quando R sblocca, traduci ogni Drake fight dal minuto 14 in vantaggio di HP regen. Al min 25 con Heartsteel + Warmog's, cammini sulla back line e rifiuti di morire."
  weakness: "Clear lento pre-3, invade deboli, tenuto a distanza dalle comp ranged senza stick. Gli item healing-cut (che dimezzano i tuoi heal) tagliano il kit; contro true damage (Fiora, Vayne fed) il muro di HP si scioglie."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp da' HP gratis ogni 4s in champion combat — un gank da 5s stacka 2-3 proc. Font of Life marca i bersagli rallentati da Q per il follow-up del laner, Conditioning scala Armor/MR dopo il minuto 12, Overgrowth converte camp in HP permanenti."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak da' un burst di Move Speed dopo Flash o Ghost (i tuoi Summoner di gap-close), e Gathering Storm aggiunge Adaptive ogni 10 minuti — la win condition di Mundo e' tarda partita, queste rune fanno esattamente quello."
    secondary_alternative: "Contro jungler da skirmish early (Lee Sin, Elise, Xin Zhao), swap Sorcery → Inspiration con Magical Footwear (boots upgrade gratis al minuto 10-12) e Cosmic Insight (cooldown ridotti sui Summoner), barattando lo scaling per tempo di sopravvivenza alle invade."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Jungler assassini burst"
      reason: "Il loro intero damage profile e' una combo su uno squishy. Il passive di Mundo mangia il CC opener, R heala una percentuale degli HP mancanti, e W refunda parte del burst. Bruciano i cooldown e Mundo se ne va quasi full marcando il loro carry per il follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "Jungler AP da poke e kite senza hard engage"
      reason: "Force of Nature + Spirit Visage stackano Magic Resist che cresce mentre pokano. La Move Speed di R + lo slow percent-current-HP di Q alla fine chiudono il gap e una sola E collassa i loro HP perche' non hanno item difensivi."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Carry melee auto-attack su cui il team nemico fa affidamento"
      reason: "Lo slow di Q + Plated Steelcaps gli paralizza l'attack uptime. La R di Tryndamere compra una rotation, ma un Mundo con Thornmail + R sopravvive alla finestra di immortalita' e lo chunka col danno riflesso."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "Skirmisher a true damage"
      reason: "I Vital di Fiora, la W di Vayne e la R late-game di Kayle fanno true damage (danno che ignora armor e magic resist — non c'e' statistica difensiva che lo riduca). Stackare HP non serve a niente contro il true damage; l'intera build collassa."
    - examples: ["trundle", "olaf"]
      archetype: "Jungler anti-tank"
      reason: "La R di Trundle ruba Armor, MR e Move Speed per 8 secondi; la E di Olaf applica Grievous Wounds e la sua ulti lo rende CC-immune quindi il passive non scatta. Entrambi sono progettati apposta per neutralizzare le statistiche tank."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Comp di poke sostenuto a lungo raggio"
      reason: "Stanno oltre la 975 di Q e chippano gli HP di Mundo ogni wave. Mundo non ha dash e una sola burst di Move Speed su R; cammina dentro il loro danno solo per minacciare engage e perde 30% HP per rotation senza mai chiudere."
---

## Panoramica

Dr. Mundo jungle e' il jungler tank piu' semplice del gioco: clear dei camp, livello 6, cammina in lane, e rifiuti di morire qualunque cosa il nemico ti tiri addosso. Il suo kit ha un solo lavoro — assorbire engage (il momento in cui un nemico committa a iniziare un fight, di solito con hard CC o dash) — e lo fa con tre meccaniche. **Goes Where He Pleases (passive)** assorbe il primo hard CC (uno stun, root o knockup che ti immobilizza) per costo HP, droppando una boccetta che puoi raccogliere per healare. **Heart Zapper (W)** immagazzina danno subito durante un fight e ne refunda parte come heal sul recast. **Maximum Dosage (R)** heala istantaneamente una percentuale degli HP mancanti e da' regen enorme per la durata. Insieme rendono Mundo il campione con piu' HP effettivi in qualsiasi teamfight, col compromesso che non ha hard CC suo e deve fare affidamento sugli slow di Q + follow-up del team.

Il game plan e' farming tempo-aware. Pre-3, il clear di Mundo e' lento e gli HP persi nei camp sono reali — non invadere e fatti non invadere. Full clear fino al livello 4, contesta Scuttle (il granchio del river che da' vision quando ucciso), e cerca il primo gank intorno al minuto 4-5 sulla lane con priority (priority = la lane che sta pushando verso il nemico, in modo che il laner possa lasciarla qualche secondo senza perdere minion). Al livello 6, ogni R premuta dovrebbe tradursi in una kill, un objective, o un compagno salvato. Dal minuto 14 in poi con **Heartsteel** + **Sundered Sky** online, Mundo vince ogni Drake fight a stat puri.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade e' lo starter melee di jungle: ti permette di danneggiare i mostri neutrali (i camp che farmi nella jungla) piu' velocemente e applica un breve slow sui campioni nemici quando li colpisci con un auto-attack. Refillable Potion e' un'item di healing che si ricarica gratis in base, quindi risparmi gold sul chip damage del clear dei camp.

**Core items (in order):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — quest upgrade da Hailblade (auto-evolve intorno al minuto 3-4 una volta accumulata XP dai camp). Il pet companion tank da' Armor e MR extra mentre sei out-of-combat coi campioni e tenacity (durata stun ridotta su di te) quando sei attivo nei fight. Pickup obbligatorio per qualsiasi tank jungler — l'icona che vedi per prima nella barra quick-learn dice al lettore quale starter hai preso.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo big item. Il primo auto-attack su un campione in qualsiasi fight critta e ti heala. Il crit-heal si allinea col tuo pattern di gank: cammini dentro, Q-slow, auto-crit-heal, E per il missing-HP slam. Si combina con la regen di R per skirmish estese.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default quando la fonte principale di danno nemica sono auto-attack. Riducono il danno in arrivo durante i fight estesi.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — l'item di scaling tardivo. Ogni proc su un campione da' a Mundo HP permanenti che non se ne vanno mai, anche se muori. Al minuto 30 banki 8-12 proc e i tuoi HP effettivi raddoppiano rispetto a una build flat-tank.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist piu' un passive di healing-amp che potenzia il burst-heal di **W**, il regen di **R**, e ogni heal di alleati come Soraka o Yuumi. Compralo quarto o quinto a seconda che il team nemico abbia piu' AP o AD.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team nemico ha 3+ fonti di CC o 2+ campioni AP. La tenacity (statistica che riduce la durata di stun e slow su di te) e' l'unica difesa che conta una volta che il primo CC e' stato consumato dal passive.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — quinto o sesto item nelle partite oltre il minuto 30. Una volta superata la soglia HP (intorno a 3000 HP bonus), il passive ti fa healare a full out-of-combat in 4 secondi, quindi heal full tra un camp e l'altro senza fare back.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro carry auto-attack (Vayne bot, Tryndamere top, Master Yi jungle). Riflette danno e applica **Grievous Wounds** (il debuff che dimezza l'healing del bersaglio) on hit, l'unico counter a un Tryndamere o Vayne fed che si curano quello che prendono dall'aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contro comp AP pesanti (Karthus + Brand, Lillia + Lux). Stacka magic resist man mano che subisci magic damage e da' Move Speed, entrambe cose che Mundo vuole.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contro AP burst su single-target (Syndra, Veigar, LeBlanc). Lo spellshield (barriera one-use che blocca la prossima abilita' diretta a te) annulla l'opener della combo e si resetta dopo qualche secondo fuori combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** e' il default. Switcha a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro chain-CC pesanti o composizioni AP-heavy.

**Skill order:** Maxa **Q** prima (range, slow, danno percent-current-HP scalano per rank — l'unica abilita' ranged e setup principale per i gank). Maxa **E** seconda (l'attivo missing-HP scala duro col bonus AD, e il bonus AD scala con HP massimi). Maxa **W** ultima; un punto early basta per il sustain del clear. Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying** — ogni 4 secondi in champion combat, il tuo prossimo auto-attack fa danno magico bonus, ti heala e ti da' HP permanenti. Pair con **Font of Life** (lo slow di Q marca i bersagli, il tuo laner si cura colpendoli — perfetto per i gank), **Conditioning** (Armor e MR extra dopo il minuto 12) e **Overgrowth** (HP scaling con la morte di minion vicini). Secondary **Sorcery** con **Nimbus Cloak** (burst di Move Speed dopo Flash o Ghost) e **Gathering Storm** (Adaptive scaling ogni 10 minuti). Stat shard: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Matchup chiave

- **Lee Sin / Elise / Xin Zhao:** Jungler early-game che invadono la tua weak side. Trackali con vision ward (item piazzati che rivelano una piccola area mappa per ~90 secondi) sui raptors e red buff (camp nella tua jungla). Evita gli invade 1v1 pre-3 — il tuo clear e' lento e non hai danno Smite per cancellare istantaneamente un tentativo 1v1. Fai full clear, contesta Scuttle, poi inizia a gankare.
- **Master Yi / Karthus:** Jungler scaling. Eguagli il loro scaling quasi item per item, ma loro hanno il power spike prima (Yi a Blade of the Ruined King — un item da attack speed e lifesteal; Karthus a Liandry's Torment — l'item AP da burn damage). Forza fight e objective (Drake bot side, Rift Herald top side — mostri neutrali che danno buff al team intero quando uccisi) prima del minuto 18 e ganka costantemente (un "gank" e' una visita a sorpresa del jungler in lane per fare una kill) per negargli la finestra di farm.
- **Trundle:** Hard counter diretto. La sua R (Subjugate) ruba Armor, MR e Move Speed per 8 secondi — esattamente le tue tre statistiche migliori. Evita le skirmish solo; combatti contro di lui solo coi compagni entro 2 secondi di follow-up. Builda ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** per applicare Grievous Wounds sul lifesteal della sua Q.
- **Hecarim / Volibear:** Tank di engage mirror. Chi piazza il proprio CC per primo vince il trade. Salva il **passive** per dopo che committano (knockback E di Hecarim, knockback Q di Volibear). Una volta mangiato il loro primo CC gratis, li out-sustaini nel follow-up.
- **Kha'Zix / Rengar:** Jungler assassini focalizzati sul burst. Invadono single target nella side jungle. Tanka il loro primo burst con passive + R, poi mettigli E una volta che sono HP-committed — lo scaling missing-HP della tua E one-shotta un Rengar al 70% HP da 30%.

## Power spike & condizioni di vittoria

- **Livello 4:** Full clear fatto, tutte e tre le abilita' online. Cerca il primo gank sulla lane piu' vicina a un nemico bloccato in push (la lane con gli HP nemici piu' bassi e piu' minion sul lato nemico di mid). Slow di Q da 975 di range + W che ticka sopra e' un kill threat credibile anche pre-6.
- **Livello 6:** Prima **Maximum Dosage**. Il piu' grande swing di power nella partita di Mundo. Trova un fight entro 30 secondi dal 6 — ganka una lane, contesta il secondo Scuttle, o setta il primo Drake. L'instant heal di R trasforma un "gank perso" in uno scambio garantito.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minuto 12-14):** Primo vero spike di danno e sustain. Combattere per Drake o Rift Herald con W che ticka e i proc del crit-heal di Sundered Sky sull'engage vince l'objective senza bruciare R.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage online (~ minuto 22-26):** Picco teamfight. Il cooldown di R e' abbastanza corto da poter engage due volte per Baron timer. Forza ogni objective; e' il tuo picco.

## Errori comuni

- **Invadere prima del livello 3.** Il clear pre-3 di Mundo e' tra i piu' lenti e Hailblade ha pochissimo Smite damage. Un Lee Sin o Elise che incontri al minuto 1:30 con un'abilita' su ti out-trada e ti mette 2 camp dietro. Resta nella tua jungla fino al livello 4.
- **Premere R dopo aver subito danno.** L'instant heal di R e' una percentuale degli HP *mancanti*, ma il regen-over-time e' sprecato se la triggeri al 90% HP. Usa R **prima** di committare a un gank o fight, non dopo — vuoi il regen attivo quando arriva il burst, non a bendare dopo.
- **Gankare lane senza priority.** Un gank in una wave freezata (una wave seduta vicino alla tower del laner nemico) e' una kill gratis per il laner nemico: la sua tower ti zona, il tuo laner deve camminare lontano dalla sua per fare follow-up. Ganka solo le lane che pushano verso la tua side o stanno al centro.
- **Raccogliere la boccetta del passive troppo tardi.** La boccetta chimica (la fialetta verde che droppa quando il passive procca) sta a terra qualche secondo prima di sparire. Se la lasci scadere a meta' gank, hai sprecato l'intero passive — niente heal, niente cooldown refund. Cammina sopra il secondo che droppa.
- **Buildare full tank senza Spirit Visage.** Ogni statistica difensiva di Mundo si compone con l'healing-amp. Senza Spirit Visage, R heala meno, W heala meno, Soraka alleata heala meno. Spirit Visage e' l'item moltiplicatore; saltarlo per HP puri e' una build peggiore agli stessi gold.

## Suggerimento avanzato

Allena il **flank gank** attraverso la jungla nemica (entrare in lane da un lato o da dietro, non dal river — il bush dietro al laner nemico che lui non vede senza ward). Su Mundo questo e' particolarmente potente per il passive: la prima abilita' CC del laner nemico viene mangiata gratis nel momento in cui appari dietro di lui, il che significa che anche un bersaglio al 100% HP che Flash-a verso la sua tower corre dritto in uno skillshot Q da 975 di range che lo slow-a e muore di E. Il trucco e' tempare l'entrata attraverso il bush river-side o back-side esattamente nel momento in cui il laner nemico spinge la wave verso la tua side ed e' lontano dalla sua tower; il pattern di gank e' invisibile finche' non esci, e il CC mancato chiude la kill prima che possa recuperare.
