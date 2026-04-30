---
title: "Leona Support — Build e Guida — Patch 16.9"
slug: "leona-support"
language: "it"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Guida a Leona support per League of Legends Patch 16.9: starter kit, build tank-engage, matchup chiave, power spike, errori comuni di engage e una tip finale."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Le abilità di Leona marchiano i nemici colpiti con il debuff Sunlight per 1.5 sec. Il prossimo alleato che infligge danno a quel target consuma il marchio per danno magico bonus. Danno extra gratis su ogni engage che l'ADC segue."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "La prossima auto-attack di Leona stuna brevemente il bersaglio e infligge danno magico bonus. Auto-targeted (non serve mirare) ma melee range: devi essere addosso al nemico. Il secondo crowd control affidabile dopo E o R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Damage reduction più armatura e magic resist bonus per qualche secondo. A scadenza infligge danno AOE (area-of-effect, colpisce tutti i nemici vicini); se colpisce, le resistenze restano più a lungo. Attiva prima dell'engage."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona proietta una spada in linea: l'ultimo campione colpito viene rootato (bloccato) brevemente e Leona dasha addosso. Skillshot (abilità che va mirata, vola in linea, si può schivare). Engage principale, opener della chain E in Q."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "AOE ritardata a lungo raggio: i nemici al centro vengono stunati, quelli ai bordi rallentati. Cast delay lungo: serve per aprire un fight da distanza, lockare un bersaglio in fuga, o setuppare un teamfight oltre il range della E."
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dalle Mercury's vs bot lane da auto-attack pesante (Caitlyn, Draven, Tristana) quando l'harass early fa più male del CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comp dove ulti affidabilmente sopra a un carry alleato (Yasuo, Yone, Master Yi): la R aggiunge danno magico bonus alle sue auto-attack"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contro comp di burst AP (es. doppio mago tipo Syndra mid + Brand support): scudo magico passivo che si rigenera fuori combat"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Piazza la E da fog (brush non wardata), atterra sull'ADC nemico, incatena Q stun e AA con il marchio Sunlight pronto: l'ADC fa danno bonus sulla proc e il carry muore prima che il support nemico reagisca."
  weakness: "La E è uno skillshot lento, facile da schivare in piano. Zero poke a distanza: se la bot lane nemica resta fuori dal range della E perdi la lane e devi roamare. Mana fragile early."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanter squishy senza hard CC propria"
      reason: "Non hanno strumenti per interrompere il dash della E. Appena la E atterra sull'ADC nemico, muore nello stun della Q prima che l'enchanter possa shieldare o peelare. Yuumi non riesce nemmeno a saltare via in tempo."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADC immobili senza dash"
      reason: "La E ha 875 di range e dasha sull'ultimo campione colpito: gli ADC senza blink mangiano la chain E in Q ogni volta che si avvicinano per last-hittare. Una volta che parti non possono fuggire."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support stazionari senza escape"
      reason: "Il loro poke costa loro il posizionamento: un Flash più E li gancia, e la W mangia il loro counter-burst. Devono stare fermi per castare gli skillshot lunghi: è esattamente il momento in cui la E atterra pulita."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Bloccatori di hard CC e enchanter di disengage"
      reason: "La Black Shield di Morgana blocca il root della E: ti flashi addosso a vuoto. La R di Milio rimuove la chain di stun a distanza. Il polymorph di Lulu cancella il dash a metà cast. Il tuo unico engage viene risposto a costo zero."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Poker a lungo raggio con sustain o root"
      reason: "Ti mangiano l'HP gratis a 800-plus di range mentre tu non hai risposta. La Q di Lux ti binda durante l'engage, la bolla di Nami ti interrompe il dash; mangi poke senza mai entrare in range."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook support che ti tirano fuori posizione"
      reason: "Il loro hook atterra prima della tua E (Q di Thresh ~1100 vs E 875). Mangi il pull, vieni focalizzato da solo nel loro team, e il tuo ADC resta esposto senza tool di engage."
---

## Panoramica

Leona è un **vanguard support** (un support di classe tank il cui lavoro è aprire i fight, non curare gli alleati): corre addosso al carry nemico, lo blocca in una catena di crowd control, e lascia che siano i compagni a chiudere il kill. Il suo kit incatena due crowd control sullo stesso bersaglio: **Zenith Blade (E)** è uno skillshot dash a lungo raggio che roota l'ultimo campione colpito, **Shield of Daybreak (Q)** è uno stun sulla prossima auto-attack, e la passiva **Sunlight** marchia ogni nemico che colpisce in modo che il prossimo alleato che lo colpisce infligga danno magico bonus. **Eclipse (W)** è il livello difensivo che si attiva *prima* dell'engage: damage reduction più armatura e magic resist che restano attive più a lungo se colpisci a scadenza. **Solar Flare (R)** è uno stun AOE ritardato usabile da più lontano della E — per engagiare dal fog of war o lockare un kill in fuga.

Game plan: in lane, sta sul bordo della brush finché l'ADC nemico non si avvicina per last-hittare, poi piazza la E dal fog (brush non wardata) così non può sidesteppare, incatena Q, e lascia che l'ADC converta. Mid-game, **roam** (lascia bot lane per aiutare mid o jungle) usando la R per pick cross-lane. Late-game apri il fight sul bersaglio prioritario e resta vivo abbastanza per **peel** (proteggere il tuo carry).

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato dei support) più 2 Health Potion. Non last-hittare i minion: lascia il gold all'ADC. World Atlas ti paga il gold separatamente attraverso la sua quest.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolve automaticamente man mano che accumuli quest progress attraverso ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, fino all'upgrade endgame che scegli.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist più **tenacity** (una stat che riduce la durata del crowd control su di te). Uno stun più corto su di te significa che riesci comunque a piazzare la Q dopo che il support nemico prova a interromperti.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armatura, magic resist e un attivo che shielda tutti gli alleati vicini. Premilo quando committi la E così la squadra assorbe il primo **burst** (il danno alto nei primi 1-2 secondi del fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega all'**ADC** (Attack Damage Carry — il bot lane che fa auto-attack): una porzione del danno che riceve viene redirezionata su di te, e tu lo curi in cambio.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame engage-focused dello support item. Ha una passiva **Spellblade**: dopo qualsiasi abilità, la prossima auto-attack infligge danno bonus e amplifica il danno sul bersaglio per 4 secondi. Pattern: "abilità → AA → abilità → AA".

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boot armatura che riducono il danno da auto-attack. Swap dalle Mercury's quando la bot lane nemica è auto-attack pesante (Caitlyn, Draven, Tristana) e il loro **harass** (poke e chip damage) ti fa più male del CC late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — ti lega a un alleato; quando ulti, quell'alleato ottiene danno magico bonus sulle auto-attack. Pickalo con un melee carry (Yasuo, Yone, Master Yi) su cui ulti affidabilmente.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — scudo magico passivo che si rigenera fuori combat. Pickalo in comp di burst AP (doppio mago tipo Syndra + Brand): lo scudo si mangia un'ulti intera.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacity — un hook di Thresh da 1.25s diventa 0.85s, abbastanza per piazzare la Q. Switch a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo contro bot lane AA-heavy.

**Skill order:** Maxa **E** (Zenith Blade) per prima — cooldown più basso significa più engage, ed è il tuo unico tool a distanza. Maxa **W** per seconda. Maxa **Q** per ultima (rank-up cambia poco lo stun). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** (l'albero rune difensive — durability) con **Aftershock** (armor e magic resist gratis quando piazzi crowd control, scatta su ogni Q stun ed E root), **Font of Life** (il tuo CC marchia il bersaglio; gli alleati che lo attaccano si curano), **Conditioning** vs lane che scalano late o **Bone Plating** vs burst early, **Unflinching** (extra **tenacity** quando usi un summoner spell). Secondary **Inspiration** con **Hextech Flashtraption** (Flash di backup su long cooldown) e **Cosmic Insight** (cooldown ridotti su summoner e attivi item). **Stat shards**: Adaptive Force / Adaptive Force / Health.

## Matchup chiave

- **Nautilus:** Mirror **engage**. La Q hook supera la tua E (~1100 vs 875): non camminare avanti mentre il suo hook è up. Schivala, poi flash-E sul suo ADC.
- **Pyke:** Skill matchup. Ti pokeа con la Q e ti supera in roam grazie alla **stealth** (invisibile in brush). Tieni vision deep nel river e forza fight in lane dove la sua R non resetta sul kill.
- **Morgana:** Hard counter all'**all-in** (commit completo al kill). La Black Shield blocca il root della E: ti flashi addosso a vuoto. Tracka il cooldown da 18s e forza fight solo nella window in cui è down.
- **Soraka:** Pura **enchanter di sustain** (support cura che vince mantenendo l'ADC vivo, non aprendo fight). Flash-E sopra di lei quando il suo Flash è down: muore nella combo prima che il suo ADC reagisca.
- **Caitlyn:** Matchup di **poke** a lungo raggio (chip damage da distanza). Ti bullizza l'HP sotto torre. Non risponderle, roama mid: la lane perde ma il macro game vince.

## Power spike & condizioni di vittoria

- **Livello 2 (E + W):** Primo spike. La chain completa E in Q si sblocca al livello 3, ma con E più W puoi già **tradare** forte (uno scambio breve di danno, non un kill commit completo). Un ADC nemico che over-extende (oltre il primo **wave** — la fila di minion in arrivo) è un kill gratis se piazzi la E con **Flash** up.
- **Livello 6 (R sblocco):** Il potenziale di engage esplode. **Solar Flare** ti permette di aprire fight dal fog of war: castala dalla brush del river senza farti vedere. La R serve anche come **peel** (proteggere il tuo carry): droppala su chi sta divando il tuo ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primo item da teamfight. Il tuo engage droppa uno shield gratis di team. Raggruppa per **Drake** (obiettivo drago nel river bottom: i kill danno buff stat permanenti) o **Voidgrubs** (mostri piccoli nel river top: il team che li uccide guadagna danno bonus alle strutture).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** La proc Spellblade più i 4 secondi di amplificazione del danno sui campioni trasformano la rotation in vera minaccia di danno. E → AA → Q → AA toglie personalmente 20-25% di HP a un **squishy** (campione a poca difesa tipo ADC o mago).

## Errori comuni

- **E in piano scoperto.** Zenith Blade è un proiettile lento, facile da sidesteppare in lane piatta. Casta la E da dentro una brush o da un'angolazione non wardata: il proiettile attraversa il mezzo secondo di vision che il nemico ha per reagire. In piano scoperto la E si lancia solo quando il bersaglio è già CCato da un'altra fonte.
- **Engage senza follow-up.** La E di Leona ti committa avanti e non puoi tornare indietro. Se l'ADC è in base o il jungler è dall'altra parte della mappa, tieni la E. Un engage solitario in 4v5 ti regala alla squadra nemica e brucia il cooldown della R per niente.
- **W castata dopo l'engage invece che prima.** Eclipse dà damage reduction nell'*istante* in cui la casti, non quando esplode. Premi prima W, *poi* E. Se prima fai E e poi realizzi che ti servivano le resistenze, il bonus scade spesso prima che tu raggiunga il bersaglio.
- **R reattiva a corto raggio.** Solar Flare ha un cast delay lungo e travel time lungo: a melee range anche un bersaglio fermo scivola fuori dallo stun centrale. Tieni la R per aprire un fight dal fog of war o chiudere un runner low-HP.
- **Dimenticare la passiva Sunlight.** Ogni abilità marchia il bersaglio per 1.5 secondi; il primo alleato che lo colpisce consuma il marchio per danno bonus. Tempa la Q in modo che l'ADC sia già in range di auto-attack: la chain deve suonare come "Q stun, ADC AA, Sunlight scatta, target morto".

## Suggerimento avanzato

La **combo R-flash-E dal fog of war**. Stai non visto dentro la brush enemy-side del river al livello 6. Casta **R** sull'ADC nemico mentre farma: vede solo l'indicatore a terra, non la sorgente. Nell'istante in cui inizia a muoversi per schivare, **Flash** in avanti, **E** durante il flash (il dash si estende dalla posizione flashata), e **Q** appena arrivi. Fatto bene, il bersaglio mangia stun della R, root della E, stun della Q: tre crowd control in due secondi senza counter-play. Pratica la tempistica in **Practice Tool** finché R-Flash-E-Q diventa fluido in mezzo secondo.
