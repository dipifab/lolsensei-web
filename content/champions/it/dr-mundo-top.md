---
title: "Dr. Mundo Top: Build e Guida — Patch 16.9"
slug: "dr-mundo-top"
language: "it"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Guida Dr. Mundo top per League of Legends Patch 16.9: build juggernaut HP-stacking con Heartsteel, sopravvivenza in lane, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Il primo hard CC (uno stun, root o knockup che ti immobilizza) viene assorbito: Mundo paga HP invece di subire l'effetto e droppa una boccetta a terra; raccoglierla heala e resetta il passive. Inoltre rigenerazione HP altissima."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot lineare a lungo raggio: danno magico in percentuale degli HP attuali del bersaglio + slow. Costa HP, non mana — la barra delle risorse e' la barra della vita. Tool principale di poke e waveclear."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel su se stesso che ticka danno magico sui nemici vicini e immagazzina parte del danno subito. Recast (o fine canale) per dare una raffica di danno: se colpisce un campione, heal pari a una percentuale del danno immagazzinato."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passivo: bonus AD che scala con HP massimi. Attivo: colpo melee con la borsa medica che fa danno extra basato sui tuoi HP mancanti. Se uccide il bersaglio, scaraventa il corpo colpendo gli avversari sulla traiettoria."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: heal istantaneo di una percentuale degli HP mancanti, poi bonus Move Speed e rigenerazione HP enorme per la durata. Premila prima dei fight e prima di morire, non dopo."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps contro 3+ fonti di CC o 2+ minacce AP; la tenacity (riduce la durata degli stun) salva dalla chain-CC death"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro carry auto-attack (Vayne, Tryndamere, Master Yi); riflette danno e applica Grievous Wounds (dimezza l'healing nemico) on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro comp con poke AP pesante e 2+ mage ranged (Brand + Karthus, Ziggs + Xerath); MR + Move Speed contro magic damage"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contro AP wave-clearer raggruppati (Karthus, Brand, Anivia); l'aura di magic burn punisce chi combatte vicino a te"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contro AP burst single-target (Syndra, Veigar, LeBlanc); lo spellshield (barriera one-use) annulla l'opener della combo"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Sopravvivi in lane con poke di Q e sustain di W, raggiungi Heartsteel e Warmog's, poi cammina sulla back line nemica a HP regen massimo e rifiuta di morire abbastanza a lungo perche' il team faccia clean up."
  weakness: "Niente hard CC e niente dash. I top ranged ti tengono a distanza dalla 975 di Q; gli item di healing-cut (che dimezzano i tuoi heal) tagliano W e R, trasformando il tank in un minion che cammina lento."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
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
    primary_rationale: "Resolve primary: Grasp da' HP gratis ogni 4s in lane combat e scala con la pila di HP di Mundo. Bone Plating mangia il burst dei bruiser, Conditioning aggiunge Armor e MR dopo il minuto 12, Overgrowth converte minion farmati in HP permanenti."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak da' un burst di Move Speed dopo Flash o Ghost (i tuoi Summoner di engage), e Gathering Storm aggiunge Adaptive ogni 10 minuti — esattamente lo scaling tardivo che vuole la win condition di Mundo."
    secondary_alternative: "Contro lane bully early game (Darius, Riven), swap Sorcery → Inspiration con Biscuit Delivery (Health Potion gratis ogni 2 minuti pre-12) e Cosmic Insight (cooldown ridotti sui Summoner), barattando lo scaling per pura sopravvivenza in lane."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Bruiser melee senza poke ranged"
      reason: "La Q di Mundo e' uno slow da 975 di range che costa HP, non mana, quindi puo' chippare ogni wave da fuori auto-attack range nemico. Devono camminare addosso a lui per fare danno, e l'aura W + healing di Spirit Visage vincono ogni trade esteso."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Assassini con un'unica burst window"
      reason: "Il loro intero damage profile e' una combo. Il passive di Mundo mangia il loro primo hard CC, la R heala una percentuale degli HP mancanti istantaneamente, e la W refunda parte del danno subito durante il burst — bruciano i cooldown e Mundo se ne va quasi full HP."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Melee auto-attack che hanno bisogno di stickare"
      reason: "Lo slow di Q + Plated Steelcaps gli paralizza l'attack uptime. La R di Tryndamere lo heala attraverso una rotation, ma un Mundo con R + Thornmail sopravvive alla finestra di immortalita' e lo chunka col danno riflesso."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Top ranged con percent-HP o blind"
      reason: "La W di Vayne (true damage ogni terzo auto, ignora ogni statistica difensiva) e la Q di Teemo (un blind che annulla i suoi auto-attack) bypassano l'intera pila di HP. Quinn col suo range piu' il blind passive tiene Mundo sempre fuori dalla 975 di Q."
    - examples: ["fiora"]
      archetype: "Duellanti true-damage"
      reason: "I Vital di Fiora fanno true damage (danno che ignora armor e magic resist — non c'e' statistica difensiva che lo riduca). Stackare HP non serve a niente contro il true damage; lo shredda in un singolo duello anche full build."
    - examples: ["trundle"]
      archetype: "Champion anti-tank che rubano stat"
      reason: "La R di Trundle ruba Armor, MR e Move Speed di Mundo per 8 secondi. Il true damage del passive di E (basato sul bonus AD da HP) si svuota e l'unica escape (lo speed boost di R) gli viene rubata anche lei. Tutto il profilo tank si annulla."
---

## Panoramica

Dr. Mundo e' un **juggernaut tank** (un campione melee lento, immobile, che colpisce duro una volta arrivato a qualche item, con HP ed HP regen enormi). La sua identita' sta su tre cose: stackare HP con **Heartsteel** (ogni auto-attack su un campione stacka HP permanenti sull'item), HP regen da **R** + healing amp di Spirit Visage, e premere **Q** ogni cooldown per chippare il nemico da 975 di range. Il **passive** e' la meccanica piu' importante da capire: il primo hard CC (uno stun, root o knockup che ti immobilizza) viene ridotto — costa HP invece di lockarti, e tu droppi una boccetta che puoi raccogliere per healare. Significa che un Sett o un Malphite hanno esattamente una chance di fermarti, e dopo cammini attraverso il loro team per i prossimi 8-10 secondi.

Il game plan e' "non morire, mai." In lane, **freeza la wave** (lasciala stare appena fuori dalla tua tower in modo che il nemico debba camminare lontano dalla sua per fare CS) e farma con Q da max range. Dal minuto 14 in poi, **Heartsteel** + **Warmog's Armor** superano la soglia in cui hai cosi' tanti HP e regen che il team nemico ha bisogno di item di healing-cut anche solo per farti male. Da li' in poi, ogni fight inizia con te che cammini dentro lentamente, mangi il primo stun, premi R, e stai sulla back line (i carry squishy che fanno danno da dietro ai tank del proprio team) finche' il carry non muore. Questo significa "assorbire engage": quando il nemico committa a iniziare il fight con uno stun o un dash, il tuo compito e' essere quello che si prende lo stun.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Il passive HP-regen di Doran's Shield ammortizza il poke nemico (danno ranged a basso costo che chippa HP senza committare a un fight) ed e' la pick giusta in quasi ogni matchup di Mundo, melee inclusi — il game plan e' "stai vivo, farma, scala," non "vinci il livello 1."

**Core items (in order):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — il tuo item identitario. Ogni auto-attack su un campione carica Heartsteel; al proc fai danno bonus enorme e l'item guadagna HP permanenti che si accumulano. Non c'e' tetto allo stack di HP, motivo per cui Mundo top one-shotta gli squishy al minuto 35 con una sola E. Compralo ogni partita, primo item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default quando la fonte principale di danno nemica sono auto-attack. Riduce il danno in arrivo durante i fight estesi.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sblocca il passive "out-of-combat heal a full in 4 secondi" una volta superata la soglia HP (intorno a 3000 HP bonus, che Heartsteel + componenti di Warmog's raggiungono insieme). E' il breakpoint in cui le skirmish in side lane (piccoli fight 1-3 player nella top o bot lane mentre il resto della mappa fa altro) si curano completamente tra una wave e l'altra.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist piu' un passive di healing-amp che potenzia il burst-heal di **W**, il regen di **R**, gli heal di alleati come Soraka o Yuumi, e i tick di Doran's Shield. Compralo quarto in qualsiasi team con almeno una minaccia AP.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — il primo auto-attack su qualsiasi campione in un fight critta e ti heala. Si combina perfettamente con la finestra di lifeline che il passive crea e ti da' un piccolo spike di burst per minacciare kill, non solo sopravvivenza.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team nemico ha 3+ fonti di CC o 2+ campioni AP. La tenacity (statistica che riduce la durata di stun e slow su di te) e' l'unica difesa che conta una volta che il primo CC e' stato consumato dal passive.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro carry auto-attack (Vayne, Tryndamere, Master Yi). Riflette danno e applica **Grievous Wounds** (debuff che dimezza l'healing del bersaglio) on hit, l'unico modo per rallentare un Tryndamere o una Vayne fed dall'healare quello che prendono dalla tua aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contro comp di poke AP pesante (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Stacka magic resist man mano che subisci magic damage e da' Move Speed, entrambe cose che Mundo vuole.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contro AP wave-clearer raggruppati (Karthus, Brand, Anivia). L'aura di magic burn ticka danno su chiunque combatta vicino a te e da' MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contro AP burst su single-target (Syndra, Veigar, LeBlanc). Lo spellshield (barriera one-use che blocca la prossima abilita' diretta a te) annulla l'opener della loro combo e si resetta dopo qualche secondo fuori combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** e' il default. Switcha a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro chain-CC pesanti o composizioni AP-heavy.

**Skill order:** Maxa **Q** prima (range, slow, danno percent-current-HP — tutti scalano per rank, e questa e' la tua unica abilita' ranged). Maxa **E** seconda (l'attivo missing-HP scala duro col bonus AD, e gli stack di Heartsteel lo alimentano). Maxa **W** ultima; un punto early basta per l'heal-on-recast e l'aura damage. Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying** — ogni 4 secondi in lane combat, il tuo prossimo auto-attack su un campione fa danno magico bonus, ti heala e ti da' HP permanenti. Pair con **Bone Plating** (riduzione danno sui prossimi 3 colpi dopo aver subito danno), **Conditioning** (Armor e MR extra dopo il minuto 12) e **Overgrowth** (HP scaling con la morte di minion vicini — perfetto per un farmer di lane). Secondary **Sorcery** con **Nimbus Cloak** (burst di Move Speed dopo Flash o Ghost, entrambi Summoner comuni di Mundo) e **Gathering Storm** (Adaptive scaling ogni 10 minuti). Stat shard: **Adaptive Force** + **Health Scaling** + **Health Scaling** — HP extra ovunque, perche' ogni statistica difensiva su Mundo si traduce in piu' HP effettivi sullo stesso stack di Heartsteel.

## Matchup chiave

- **Darius:** Matchup early difficile. Il bleed Hemorrhage (uno stack damage-over-time che cresce piu' volte ti colpisce) ticka attraverso il tuo HP regen e la sua pull annulla la wind-up della tua Q. **Freeza la wave** vicino alla tua tower, prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, e accetta di perdere CS — una volta che hai ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** + componenti di Warmog's, lo out-scali ogni minuto dopo il 14.
- **Sett:** Matchup favorevole. Salva il **passive** per la sua W (il terzo auto-attack stuna) — la mangi per HP e te ne vai. Trade con Q da 975 di range; non ha risposta al poke a lungo raggio e il suo self-heal non sta dietro al chip della Q.
- **Vayne / Teemo:** La lane piu' difficile in assoluto. Stanno fuori dalla 975 di Q e usano **true damage** (danno che ignora sia armor che magic resist — non c'e' statistica difensiva che lo riduca) o un blind che annulla i tuoi auto-attack. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeza sotto tower, e chiama il jungler il secondo che overextendono (pushano oltre il river senza vision). Compra ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush invece di Spirit Visage se Vayne snowballa.
- **Fiora:** Il matchup melee piu' duro. La sua **W** e' un parry (uno scudo breve che blocca e contrasta la prossima abilita' — esca con un auto-attack prima di committare Q o E). I suoi Vital fanno true damage, quindi stackare HP non serve a niente qui. Rusha ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** + componenti di ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** e gioca per i gank del jungler.
- **Mordekaiser:** Skill matchup. La sua R ti isola in un realm 1v1 per 7 secondi senza escape. Se ti R-a prima che il passive si attivi, sei stuck e muori. Se hai **R** su e passive su, sopravvivi — la finestra del realm e' circa la durata di una R. Salva **Flash** per riposizionarti fuori dalla sua Q grab durante il realm.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **Maximum Dosage**. Anche al 6 senza item, l'instant heal di R + Move Speed trasforma un trade perdente in una sopravvivenza o una kill. Cerca un **all-in** (commit totale, niente ritirata) il momento in cui il jungler appare top side e il laner nemico e' sotto il 60% HP.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel completion (~ minuto 13-15):** Il primo vero spike. Ogni proc su un campione in lane ti da' HP permanenti che non se ne vanno mai, anche se muori. Pusha la wave appena Heartsteel e' online e trada auto attraverso i minion nemici per bankare stack.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + stack di Heartsteel (~ minuto 18-22):** Il breakpoint dove Mundo diventa unkillable in side lane. Il regen out-of-combat parte alla nuova soglia HP; puoi prendere un fight a 50% HP, camminare fino alla wave dopo, e arrivare full HP.
- **3-item spike con ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ minuto 24-28):** Picco teamfight. L'healing-amp potenzia ogni tick di regen — R passa da "decente" a "non riesco a portarlo sotto meta' HP". Forza ogni Drake e Baron qui; il team ha bisogno di te per camminare dentro per primo e assorbire l'engage.

## Errori comuni

- **Premere R dopo aver subito danno.** L'instant heal di R e' una percentuale degli HP *mancanti*, ma il regen-over-time e' sprecato se la triggeri al 90% HP. Usa R **prima** di committare in un fight, non dopo — vuoi entrare nel fight col regen gia' attivo, in modo che il burst window sia bufferato, non bendato dopo.
- **Lanciare Q full HP su un nemico healthy.** Q costa HP e fa danno percent-current-HP. Lanciarla su un nemico al 100% HP quando tu sei al 100% HP scambia HP per un piccolo chip — perdi il trade. Usa Q dopo che un nemico melee ha perso HP per minion aggro o dopo che un alleato apre un all-in con CC.
- **Raccogliere la boccetta del passive troppo tardi.** La boccetta chimica (la fialetta verde che droppa quando il passive procca) sta a terra qualche secondo prima di sparire. Se la lasci scadere, hai sprecato l'intero passive — niente heal, niente cooldown refund. Cammina sopra il secondo che droppa, anche in mid-fight.
- **Buildare full tank senza Spirit Visage.** Ogni statistica difensiva di Mundo si compone con l'healing-amp. Senza Spirit Visage, R heala meno, W heala meno, Soraka alleata heala meno. Un Mundo full-tank senza healing-amp e' un minion che cammina lento; con Spirit Visage, gli stessi item allungano i suoi HP effettivi molto di piu'.
- **Restare con W toggle attivo fuori combat.** **Heart Zapper** drena HP ogni secondo durante il channel. Se la attivi per il clear e te la dimentichi, arrivi al fight gia' al 70% HP. Recasta prima che il channel finisca, ogni volta.

## Suggerimento avanzato

Allena la **passive bait** nelle skirmish in side lane (1v1 nella top o bot lane mentre il resto della mappa fa altro). Quando il diver nemico ha solo un hard CC su — ad esempio la W stun di Sett o lo stun di Renekton — cammina nella sua lane visibilmente low HP. Lui brucia il CC per committare, il tuo passive lo mangia gratis, e tu R-Q-E-AA sotto i tuoi minion mentre lui non ha piu' niente. Il trucco e' *visibilmente* low HP: stai allo scoperto al 35-40%, prenditi qualche auto per confermare che il nemico sta committando, poi vai nel trade. Un Mundo con passive e R off cooldown e 50%+ HP dietro le linee nemiche e' una delle minacce 1v1 piu' forti del gioco; la bait crea lo scenario.
