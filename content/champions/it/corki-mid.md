---
title: "Corki Mid: Build e Guida — Patch 16.9"
slug: "corki-mid"
language: "it"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Guida completa di Corki mid lane per League of Legends Patch 16.9: build marksman ibrido, runes, matchup chiave, power spike, errori comuni, advanced tip."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Una parte del danno degli auto-attack diventa true damage. DPS costante che ignora armor e magic resist — motivo per cui costruisci attack speed e on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bomba a area che fa danno magico e rivela brevemente i nemici. Serve per last-hit quando sei zonato, per checkare i bush, e per aprire ogni trade."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash breve che lascia una scia di fuoco. È la tua unica mobilità: usalo per fuga, gap-close o per schivare uno skillshot. Non sprecarlo per waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cono channellato davanti a Corki: fa danno e riduce armor e magic resist dei nemici colpiti. Aggiunge DPS e ammorbidisce i target per le R missile."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Missile a lunga gittata che esplode ad area. Accumuli fino a 7 cariche; ogni terza è una Big One con burst extra. Tuo poke principale ed execute."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini con più dash (Zed, Akali, Talon): la stasi blocca il loro burst e ti dà tempo per la W o il peel del team"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro front line con 2+ tank (Sion, Ornn, Maokai): aggiunge armor pen pesante per bucare la frontline con auto e R missile"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP forti (LeBlanc, Veigar, Syndra): lo scudo magico assorbe una full combo e ti permette di W via"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro team con 3+ hard CC (stun, root): swap shoes quando la chain CC pesa più della magic penetration"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Scala dietro i minion fino a Trinity Force e Manamune, poi macina HP agli squishy con poke R da max range. Pickup target isolati durante le rotation mentre il team tiene gli obiettivi."
  weakness: "Squishy con un solo dash. Assassini mobili con più gap-close lo investono prima di due item, e gli ability anti-projectile (Yasuo Wind Wall, Braum E) annullano il poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike premia Corki che apre ogni trade con Q o R, convertendo il danno iniziale in oro extra che alimenta la build greedy Trinity + Manamune. Magical Footwear, Biscuit e Cosmic Insight estendono il sustain early per scalare safe."
    secondary_rationale: "Sorcery secondary: Manaflow Band è obbligatoria perché le R missile costano mana e tu le spammi in lane; Gathering Storm regala AP scaling gratis che pompa la parte magic damage di Q e della Big One missile nel late game."
    secondary_alternative: "Contro lane di poke pesante (Xerath, Vel'Koz, Zoe) dove non puoi permetterti di rimanere indietro di HP, swap Sorcery con Resolve: Second Wind (regen passiva sotto harass) e Overgrowth (max HP scaling) per scalare più safe."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Mage immobili senza dash"
      reason: "L'R di Corki arriva a 1225 unità e la W gli dà l'unico vantaggio di mobilità della lane. Target senza dash o stealth mangiano R poke ripetuti e non possono punirlo nelle finestre in cui la W è in cooldown."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery mage con channel lunghi"
      reason: "Corki pareggia il loro range con la R e ha un dash per interrompere channel lunghi (Xerath R, Vel'Koz R). Non possono all-in lui, e i trade favoriscono il lato con mobilità."
    - examples: ["annie", "syndra"]
      archetype: "Mage di burst a corto raggio"
      reason: "La loro kill threat parte dentro auto-attack range, esattamente dove la passive a true damage di Corki più Trinity Force li supera. Pre-6 li out-poki con R, post-6 schivi lo stun con W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Assassini mobili con più gap-close"
      reason: "Corki ha un solo dash (W) con cooldown lungo. Kit con più dash entrano nel suo cast range prima che la W ricarichi e lo bursto attraverso gli HP di Trinity, soprattutto prima dei due item."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blocker"
      reason: "Wind Wall mangia la Q e l'intero R missile barrage, togliendo due terzi del danno di Corki dal trade. Anche quando lui vince HP, il costo in cooldown del trade è brutale."
    - examples: ["fizz", "kassadin"]
      archetype: "Untargetable / blink-based"
      reason: "Fizz E e Kassadin R schivano la combo committata e poi re-engagano su Corki quando la sua W è giù. Lui non ha follow-up burst una volta che diventano untargetable."
---

## Panoramica

Corki è un marksman ibrido (carry a distanza che mescola danno fisico e magico) che gioca mid lane come una artillery carry a lungo raggio: diventa più forte mano a mano che completi gli item ("scala"), fa danno a distanza ("poke") con **Missile Barrage (R)** fuori dal range nemico, e finisce gli squishy (campioni con poco HP) con auto-attack appena **Trinity Force** è online. La sua **Hextech Munitions (P)** trasforma una parte di ogni auto-attack in true damage (danno che ignora armor e magic resist), quindi attack speed e on-hit contano quanto AD o AP. È in mid perché il fiume offre gank (attacchi a sorpresa del jungler) da entrambi i lati a cui risponde con la **Valkyrie (W)**, e perché le R missile possono pokare le side lane dal centro mappa.

Game plan in una frase: accumula stack di mana su Manamune per trasformarlo in Muramana, pusha le wave (uccidi i minion velocemente per spingere la corsia in avanti) con **Phosphorus Bomb (Q)** e R, e in ogni cooldown window (i secondi in cui le tue ability sono pronte) chip l'HP del laner avversario perché il tuo jungler arrivi in dive (uccidere il nemico sotto la sua torre). La skill expression è nell'aim della R (anticipa il movimento del nemico, timing del Big One — ogni terza R è una missile più forte) e nell'uso della W: hai un solo dash, sbagliarlo significa che qualunque assassin ti walka down (insegue e uccide).

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La blade dà lifesteal (una parte del danno inflitto ti torna come heal) che si sposa con la passive di auto-attack; salta Doran's Ring a meno che tu non sia contro una pure poke lane in cui il mana sustain pesa più del 1v1.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un componente di Trinity) procca (innesca un effetto di danno extra) su ogni Q e ogni R missile, più AD, attack speed, ability haste (riduzione cooldown) e movement speed. Lo spike singolo più grande del champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune si trasforma lentamente in una versione più forte chiamata Muramana mano a mano che spendi mana; una volta "stacked" (completamente trasformato) aggiunge danno bonus su ogni auto e ogni ability che costa mana, missile incluse.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (ignora una parte della magic resist nemica) che pompa Q e R.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — il primo auto-attack su un nemico ("auto energized") fa danno bonus e arriva più lontano del normale range. Il crit chance si sposa col profilo statistico di Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed per DPS sostenuto su **Gatling Gun (E)** e sul true damage on-hit della passive.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini con più dash (Zed, Akali, Talon): la stasi blocca il loro burst e ti dà tempo per la W o il peel del team.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro front line con 2+ tank (Sion, Ornn, Maokai): armor pen pesante per bucare con auto e R missile.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP forte (LeBlanc, Veigar, Syndra): lo scudo magico assorbe una full combo e ti lascia W via.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dalle Sorcerer's quando l'enemy team ha 3+ hard CC (stun, root) e la chain CC pesa più della magic penetration.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se la team comp avversaria è CC-pesante.

**Skill order:** Maxa **Q** per primo (poke e waveclear), **E** per secondo (DPS più shred di armor e magic resist), **W** per ultimo (utility). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** con **Manaflow Band** e **Gathering Storm**, oppure **Resolve** con **Second Wind** e **Overgrowth** contro lane di poke pesante.

## Matchup chiave

- **Yasuo / Yone:** Bloccano Q e R missile con Wind Wall. Tieni la Q finché non spendono le ability, tieni la R per dopo che il Wind Wall è in cooldown, e non tradare (scambiare danno) a melee range dove possono saltare con la E sui minion accanto a te.
- **Akali / Zed:** Diving threat (campioni che possono saltarti addosso sotto torre per ucciderti). Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo Trinity Force; non spendere la W in trade se la loro catena di dash è ancora pronta.
- **Veigar:** Pareggia il range con la R, schiva la sua W (una gabbia che si espande lentamente e ti incastra) ed evita auto-trade dentro il cerchio della E (un anello stun che scatta quando lo attraversi). I suoi stack di Q scalano all'infinito (più kill = più AP permanente): chiudi la lane prima del minuto 25.
- **Twisted Fate:** Gara di roam (entrambi cercate di lasciare la lane per primi e aiutare i compagni). Pusha la wave con la Q prima che arrivi a livello 6, pinga il jungler avversario quando la sua R è disponibile, e W via dal target della gold card invece di mangiarti lo stun in faccia.
- **Galio:** Punisci pre-6 spingendo la wave che lui non riesce a contestare a melee (lui è corpo a corpo, tu a distanza). Post-6 la sua R è un global engage tool (apertura di teamfight da qualsiasi punto della mappa) — raggruppati col team solo quando hai R missile in stock per peelare (proteggere i tuoi carry dal suo arrivo).

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + W o Q + E, puoi punire un last-hit (uccidere un minion al colpo finale per oro) mancato con un trade Q-AA-AA ("AA" = auto-attack base) e disengagiare con W oppure follow-up se il loro Flash è giù.
- **Livello 6:** La prima **Missile Barrage (R)** sblocca side-lane pressure (la possibilità di lasciare mid e minacciare top o bot). Con stock di R più W, puoi roamare bot, droppare due missile più una Big One su un trade 1v1 e tornare in wave con la W.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completata (~ minuto 12-14):** Sheen procca su ogni Q e ogni R missile, trasformando il poke in kill threat. È il momento per all-in (committare la kill totale, niente fuga) il laner low-HP con Q-AA-R-AA.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minuto 18-22):** Muramana aggiunge danno bonus su ogni azione che costa mana; il danno teamfight raddoppia rispetto al pre-stack. Forza i fight su obiettivo (Drake, Baron) qui.

## Errori comuni

- **Spammare R in cooldown per fare waveclear.** Le R sono uno stock finito; se le svuoti sui minion, nel prossimo teamfight hai zero burst nel momento peggiore. Pusha la wave con Q + auto, tieni 4+ missile per gli obiettivi.
- **Usare la W aggressiva senza follow-up.** La W è la tua unica fuga. Dasharti dentro per chiudere una kill che richiedeva un altro auto è il modo classico in cui Corki muore — se non puoi killare con il mana e i cooldown rimasti, non committare (non impegnarti totalmente nello scambio).
- **Auto-tradare a melee range.** Il true damage della passive a corto raggio sembra invitante, ma la pool HP di Corki è squishy (bassa e fragile come quella di un ADC). Stai a R range quando il laner ha gap-close up.
- **Comprare ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes contro un team CC-pesante.** La magic penetration è sprecata se passi il fight stunnato. Sorcerer's solo quando il loro CC è basso; altrimenti swap Mercury's Treads.
- **Roamare con stock di R vuoti.** Un roam senza 2 missile è un coin flip. Aspetta gli 8-12 secondi per gli stock prima di crossare river; quel singolo delay è la differenza tra una kill e regalare la wave per nulla.

## Suggerimento avanzato

Traccia e sfrutta il ritmo della **Big One**. Ogni terza R missile (la "Big One") fa molto più danno delle due regular. Prima di un teamfight, conta le missile in stock — se la prossima è una Big One, conservala per il target prioritario; se l'hai appena spesa, spara le due filler missile sulla wave o su una torre così che la Big One ricarichi pronta per l'engage. Chi spara R alla cieca spreca Big Ones sui minion; chi traccia il count one-shotta gli squishy (campioni low-HP) quando conta.
