---
title: "Ashe ADC Build & Guida — Patch 16.9"
slug: "ashe-bot"
language: "it"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Ashe ADC per League of Legends Patch 16.9: setup di kiting con Frost Shot, build marksman, matchup chiave, power spike, errori comuni e consiglio finale."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Ogni auto-attack rallenta il bersaglio. I crit non fanno danno bonus ma applicano uno slow più forte. Base del kiting (muoversi all'indietro mentre attacchi) di Ashe."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Carica stack con le auto-attack. A stack massimi, attiva per ottenere attack speed bonus e trasformare ogni AA in un flurry di frecce con danno potenziato. Pulsante DPS principale."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "Cono di frecce a 1200 di gittata davanti. Ogni nemico viene colpito da una sola freccia e subisce lo slow di Frost Shot. Strumento principale di poke e trade in lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Manda un falco ovunque sulla mappa per 5 secondi di vision (capacità di vedere nella fog of war). 2 cariche. Uso principale: scouting obiettivi, non danno."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Skillshot globale (abilità non automatica che parte in linea retta, va schivata). Stuna il primo champion colpito; più distanza = stun più lungo (fino a ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro stacker di HP/armor (Cho'Gath, Sion, Malphite, Ornn) — la % armor pen riconverte le auto-attack in danno reale"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp che impilano cure (Soraka, Vladimir, Aatrox) — applica Grievous Wounds (riduce le cure nemiche del 50%)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro assassini o diver (Zed, Kha'Zix, Talon) — la passiva Ghost ti fa attraversare le unità mentre fai kite"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contro poke pesante o burst comp — grosso lifesteal heal + buffer di overshield"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Spalma slow di Frost Shot in teamfight, fai kite dietro alla front line con auto potenziate dalla Q e finisci i target isolati con la R cross-map per controllare gli obiettivi."
  weakness: "Movement speed base più lenta di tutti i marksman. Niente dash né reposition tool — i diver e gli assassini che entrano in melee la cancellano se il support non riesce a fare peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Marksman a corto raggio senza poke iniziale"
      reason: "La W di Ashe ha 1200 di range e applica lo slow di Frost Shot; li poka da fuori del loro 500-550 di AA e ogni loro avvicinamento diventa un trade vinto da lei."
    - examples: ["kog-maw", "senna"]
      archetype: "Carry da scaling immobili"
      reason: "La R cross-map li elimina sugli spawn obiettivo o nelle finestre di reset alla fountain. Il loro kit non ha dash per scappare alla freccia che esce dalla fog of war."
    - examples: ["ornn", "sejuani"]
      archetype: "Front line tank lente senza dive mobile"
      reason: "Ashe rallenta in continuazione la front line con W + auto, costringendo i fight a durare finché i suoi item DPS finiscono la back line. I tank non la raggiungono se fa kite con il support."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Marksman a lunga gittata con poke"
      reason: "Caitlyn 650 AA, Jhin 4° colpo a 750, Varus W che stacca a 925 — pokano oltre il 600 di AA di Ashe e le tolgono HP a ogni wave senza mai entrare nel range della W."
    - examples: ["lucian", "tristana"]
      archetype: "Marksman ad alta mobilità con dash"
      reason: "La E di Lucian e la W di Tristana ignorano lo slow di Ashe riposizionandosi. Chiudono la distanza senza pagare la tassa di kite che pesa su ogni altro ADC."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Support da engage con burst e CC duro"
      reason: "Ashe non ha dash né shield per uscire da una catena di lock-down. Una Leona Q o Nautilus Q riuscita la toglie dal trade prima che possa rispondere con W, e lo slow non serve se è già stunata."
---

## Panoramica

Ashe è il marksman più semplice di League — un ruolo chiamato "ADC" (attack damage carry: un campione ranged che fa danno con le auto-attack e diventa la fonte principale di danno nel late-game). Non ha dash, non ha reposition tool e ha la movement speed base più lenta di tutti i marksman. In cambio ottiene il kit più affidabile in utility tra gli ADC: ogni auto-attack rallenta, la **W** fa poke (chip damage a distanza per ridurre gli HP del nemico senza impegnarsi in un fight) da 1200 unit di gittata (circa metà dello schermo) con slow, e la **R** è uno skillshot globale che stuna e dà al team engage gratis sugli obiettivi ovunque sulla mappa. È costruita per fare **kite** — muoversi all'indietro mentre attacchi per tenere lontani i nemici — e per abilitare i pick (eliminazioni di un singolo nemico fuori dal teamfight) per il resto del team.

Il game plan in lane è: piazza **W** sull'ADC nemico ogni cooldown per rallentarlo e togliergli HP, farma con calma con le auto-attack, e cerca play di livello 6 con la **R** appena il support ha un CC pronto (Crowd Control: stun, slow, root che bloccano il nemico). In teamfight (fight 5v5 che decidono obiettivi come Drake o Baron — mostri neutrali che danno buff al team che li uccide) resta a gittata massima dietro alla front line (i tank/bruiser che aprono il fight), attiva **Q** quando hai 4 stack (cariche di Q che si accumulano dalle auto-attack; il counter è sotto il portrait) e incatena slow su chiunque entri sulla tua front line. La cosa più difficile da imparare su Ashe è la predizione della **R** — snipare con 1 secondo di volo è la differenza tra un pick gratuito e un'ult sprecata.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (un po' di AD + lifesteal — cura una porzione del danno inflitto) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Item core (nell'ordine):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — power spike di primo item (il momento in cui un campione diventa più forte dopo aver completato un item). Le AA frequenti di Ashe attivano la passiva Energized (effetto a stack che rilascia danno magico bonus su un colpo carico) molto in fretta.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — stivali con attack speed. La Q potenziata scala con attack speed, aiutano in ogni fight dal minuto 8 in poi.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — aggiunge due frecce laterali a ogni AA. Applicano lo slow di Frost Shot ai bersagli vicini: in teamfight Ashe rallenta tutto il team nemico solo attaccando il tank.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore late di crit (critical strike: probabilità che un'AA faccia ~175% di danno). Da qui la Q passa da "fa malino" a "cancella gli squishy in 2 secondi" (squishy: campione con basse difese).

**Item situazionali:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro stacker di HP/armor (Cho'Gath, Sion, Malphite, Ornn). La penetrazione armatura percentuale ignora una quota fissa dell'armor, quindi i tank muoiono alla stessa velocità degli squishy.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp che impilano cure (Soraka, Vladimir, Aatrox). Applica Grievous Wounds (effetto che dimezza le cure ricevute dai nemici).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contro assassini o diver (Zed, Kha'Zix, Talon — campioni progettati per saltare sulla back line). La passiva Ghost ti fa attraversare minion e champion mentre fai kite.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contro poke pesante o burst comp. Il lifesteal cura durante il fight; in overheal accumula HP come scudo.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** è l'unica scelta corretta. L'attack speed si traduce direttamente in DPS della Q potenziata.

**Skill order:** Max **Q** primo (più AD bonus per AA potenziata + active più lungo). Max **W** secondo (CD da 18s a 4s rank 5 — è lo spam di poke in lane). Max **E** ultimo (solo utility). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** (l'albero che scala con le AA) con **Lethal Tempo** (attack speed extra continuando ad attaccare un champion), **Triumph** (cura su takedown), **Legend: Alacrity** (più attack speed che scala con gli stack), **Coup de Grace** (danno extra contro nemici sotto il 40% HP). Albero secondario **Inspiration** con **Biscuit Delivery** (biscotti gratuiti che danno mana e HP in lane) e **Cosmic Insight** (più uptime di **Flash** e **R**).

## Matchup chiave

- **Caitlyn:** Il matchup più duro. Ha 650 di range AA contro i tuoi 600, trap (W) più lunghe e un hook (E) da 1300. Nasconditi dietro ai minion quando piazza trappole; lascia che il tuo support faccia engage (apra il fight) solo se va troppo avanti rispetto ai suoi minion (overextend: nessuna via di fuga in caso di gank). Farma in sicurezza fino a ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv**, poi cerca i pick cross-map con la **R**.
- **Lucian:** Perde lvl 1 ma ribalta a lvl 2 con il combo Q + E. Tieni la **W** per quando fa double-AA su di te (due auto-attack di fila), poi cammina via mentre è bloccato a metà combo. Mai trade dopo la sua **E** — il dash lo rende inafferrabile finché non torna in CD.
- **Vayne:** Pre-6 farm gratuito: 550 di range, niente slow. Spingi la wave (manda i tuoi minion verso la sua tower) dalla sua parte, harassala (chip damage continuo per ridurle gli HP) con **W** ogni cooldown. Dopo il 6 la sua ult le dà invisibilità sul dash della Q; non rincorrerla nei bush (zone di terreno che bloccano la vista).
- **Jhin:** Pokata da lontano dalla sua W. Resta dietro alla prima linea di minion; la sua W rallenta lui se colpisce un minion prima. Puniscilo durante la ricarica (caricatore da 4 colpi + reload manuale di 2.5s).
- **Draven:** Perde la guerra di AA — le sue Q ascia fanno molto più danno per AA delle tue base. Evita scambi 1-per-1; commit solo quando le ascie non sono in mano. Compra ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** prima del solito se prende 3 kill.

## Power spike & condizioni di vittoria

- **Livello 1:** Forte con la **W**. Il cono da 1200 è il miglior strumento di trade lvl 1 di tutti gli ADC (un "trade" è un breve scambio di danno in lane, non un tentativo di kill). Prendi un trade gratuito sull'ADC nemico se si avvicina per un cs (creep score: uccidere un minion per il gold).
- **Livello 6:** La prima **R** sblocca le kill in lane con qualsiasi support CC. Se il tuo Leona / Nautilus / Pyke ha l'ult, R + il loro engage = kill garantita sull'ADC nemico se non è full HP sotto tower.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completa (~ minuto 11-13):** Il waveclear (pulizia rapida della wave di minion con danno AOE) si ribalta. Puoi spingere la wave con W + 2 AA, poi fare roam (lasciare la lane per aiutare gli alleati) per pick cross-map con la **R** sul Drake o nelle skirmish a mid (piccoli fight tra 2-3 giocatori nel river o nella jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** La Q potenziata con i crit scioglie la back line in 2-3 secondi. Forza un teamfight a ogni obiettivo da qui in poi.

## Errori comuni

- **Attivare Q a stack bassi.** **Q** fa danno solo se hai 4 stack (sotto il portrait). Attivarla prima sprecca 30 mana per una Q sotto-tono. Fai 4 AA, poi premi Q.
- **Lanciare R a cooldown in lane.** La **R** è lo strumento più prezioso del team (stun cross-map per fight Drake e setup Baron). Tenerla per i fight obiettivo vale quasi sempre più che bruciarla per un trade in lane. Eccezione: finestra di kill letale dove la R garantisce la kill.
- **Stare ferma mentre auto-attacchi in fight.** Ashe è costruita per fare kite; restare ferma significa mangiare skillshot che schiveresti muovendoti. Muovi 1 passo tra una AA e l'altra per scombinare il timing nemico.
- **Spingere la wave senza vision.** Ashe non ha escape. Se spingi oltre il mid-river senza ward su tribush e river, il jungler ti uccide gratis. Sempre **W** sul bush che non vedi prima di avanzare.
- **W sui minion a cooldown.** **W** costa 75/70/65/60/55 mana e lo slow è il miglior harass in lane. Tienila per l'ADC nemico, non per la wave.

## Suggerimento avanzato

Allena la **flash R** — quando un nemico sta per scappare in fog of war a HP bassi, **Flash** nella direzione in cui corre e spara subito **R**. Il flash ti porta 400 unit avanti, quindi la **R** percorre 400 unit in meno prima di colpire — ma lo stun scala con la distanza, quindi il trick funziona solo come finisher su target near-execute (nemici già abbastanza bassi che un colpo extra li uccide). Win condition: il nemico pensa di essere scappato a 200 HP perché Ashe sembra ancora a 1500 unit di distanza, senza vedere il flash + R che chiude l'inseguimento.
