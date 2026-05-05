---
title: "Kai'Sa ADC Build & Guida — Patch 16.9"
slug: "kaisa-bot"
language: "it"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Guida Kai'Sa ADC bot lane patch 16.9: gestione degli stack di Plasma, build hybrid Kraken con evolve, matchup chiave, power spike, errori comuni e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Gli auto-attack accumulano stack di Plasma sul bersaglio; il CC degli alleati che immobilizza aggiunge stack extra. Inoltre gli item che compri evolvono Q/W/E al raggiungimento di soglie nascoste di AD/AP/Attack Speed."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Spara 6 missili che si dividono tra i nemici vicini (range 600). I colpi ripetuti sullo stesso bersaglio fanno danno ridotto. Evolve a circa 100 bonus AD: 12 missili invece di 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Missile lineare lungo (3000 unità). Marca il primo nemico colpito con 2 stack di Plasma e lo rivela per 4s. Evolve a circa 100 AP: 4 stack e -50% cooldown se colpisce un campione."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channel di circa 1.5s con bonus Move Speed e Ghosted (passa tra le unità), poi 4s di Attack Speed elevata. Gli auto-attack riducono il cooldown. Evolve a 60% bonus Attack Speed: brevissima invisibilità."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash vicino a un campione nemico con 5 stack di Plasma (o pienamente ruptured da Plasma). Dà uno scudo all'arrivo. Si usa per finire un bersaglio già chip-killed, non per engageare."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro HP/armor stacker (Cho'Gath, Sion, Malphite, Ornn): la percentuale di armor pen ignora una quota fissa dell'armor"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con healing alto (Soraka, Vladimir, Aatrox): applica Grievous Wounds (dimezza le cure ricevute dal nemico)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, Brand support): magic resist + shield sotto il 30% HP per sopravvivere alla combo"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contro poke prolungato (Ezreal, Caitlyn, Xerath): il lifesteal ti cura mid-fight e l'overheal diventa shield temporaneo"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro assassin o diver (Zed, Kha'Zix, Talon): la Ghost passive ti fa passare tra unità mentre kiti"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Stacca Plasma sul carry nemico in back line con W e auto-attack, R-dasha sopra di lui appena raggiunge 5 stack, finisci con Q e auto-attack potenziati mentre la E ti dà la finestra di Attack Speed."
  weakness: "La R richiede stack di Plasma sul bersaglio: senza W che colpisce o CC alleato non hai engage. Squishy senza dash prima della R; se sbagli il timing della E mangi tutto il burst prima dell'invisibilità."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades: 3 auto-attack super veloci subito dopo il dash della R precaricano stack di Plasma e il proc true damage di Kraken Slayer. Taste of Blood dà sustain in lane, Sixth Sense rivela ward, Ultimate Hunter abbassa il cooldown della R."
    secondary_rationale: "Precision come secondario: Triumph cura il 12% dell'HP mancante a ogni takedown (kill o assist), trasformando la R-into-fight in un'uscita sicura. Coup de Grace aggiunge 8% di danno sotto il 40% HP."
    secondary_alternative: "Contro lane di poke pesante (Caitlyn + Lux, Ezreal + Karma) swappa Precision con Resolve: Second Wind (regen quando subisci danno da campioni) e Overgrowth (HP per minion assorbito) per il sustain in lane."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "ADC immobili senza dash"
      reason: "Una volta che Kai'Sa ha 5 stack di Plasma in range R, gli ADC immobili non possono uscire dal dash + Q burst. Devono sopravvivere all'all-in (scambio totale fino alla kill, senza spazio per disimpegnarsi) senza alcun reposition tool."
    - examples: ["senna", "kog-maw"]
      archetype: "Carry da late-game senza escape"
      reason: "La W ha 3000 unità di range e li rivela per 4s: Kai'Sa li poka fuori dalla wave da fuori threat range, poi R appena Plasma è pieno."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Enchanter squishy senza hard CC"
      reason: "Questi support non hanno stun o knock-up per peelare (proteggere il carry da chi lo attacca) un dive in back line. Kai'Sa pesca l'ADC con R e il support non ha modo di interrompere l'all-in una volta che parte l'invisibilità della E evolved."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Bully da lane con auto-attack damage early più alto"
      reason: "Entrambi battono Kai'Sa nei trade ai livelli 1-3, prima della soglia di evolve della Q. Le axes potenziate di Draven e il double-shot passive di Lucian vincono ogni trade breve prima che Kai'Sa scali."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Support engage con CC point-and-click"
      reason: "Kai'Sa non ha dash prima della R, e la R richiede un bersaglio con Plasma. Una E di Leona o Q di Nautilus la blocca a metà lane prima che possa stackare un solo Plasma; la chain CC la uccide prima che parta l'invisibilità della E evolved."
    - examples: ["vayne", "twitch"]
      archetype: "Hyper-scaler late-game che superano Kai'Sa post-3-item"
      reason: "Il true damage sulla W di Vayne e l'Expunge di Twitch crescono più dello scaling hybrid di Kai'Sa una volta che entrambe le squadre sono a 3 item. Kai'Sa deve chiudere prima del minuto 30 o il danno relativo cala."
---

## Panoramica

Kai'Sa è una marksman hybrid: una campionessa che scala sia con AD (danno degli auto-attack) sia con AP (danno delle abilities), invece di puntare solo su una stat. È l'unica ADC (attack damage carry: ranged auto-attacker che diventa la fonte di danno principale del team nel late) le cui abilities si potenziano da sole quando superi soglie nascoste di item: 100 bonus AD evolve la Q, 100 AP evolve la W, 60% bonus Attack Speed evolve la E. Per questo motivo l'ordine di build conta più che su qualsiasi altro marksman: comprare l'item sbagliato vuol dire che un evolve non parte, e una Kai'Sa senza E evolved (niente invisibilità sul dash) è metà campione.

Il game plan è un puzzle a stack: ogni auto-attack mette stack di Plasma sul bersaglio, e appena ne raggiunge 5 (o si ruptura completamente da Plasma) la R si sblocca come dash a lungo raggio sopra di lui. Il CC del support (Crowd Control: stun, slow, root che bloccano il nemico) accelera il conteggio gratis. In lane si poka (chip damage a distanza per logorare l'HP senza committare) con W a 3000 unità per rivelare e pre-stackare Plasma; in teamfight (scontri 5v5 che decidono obiettivi come Drake e Baron — mostri neutrali che danno buff di squadra) si sta a max range AA fino a quando un bersaglio in back line è chip-killed, poi si dasha con R + invisibilità della E evolved per chiudere. Lo skill ceiling è nella scelta del target della R.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (un po' di AD + lifesteal, cura una porzione del danno inflitto) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primo power spike (il momento in cui un campione diventa nettamente più forte appena completa un item). Dà AD e Attack Speed; la passive Bring It Down infligge true damage extra ogni terzo colpo, la finestra di burst breve subito dopo la R.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots di Attack Speed. Ti spingono verso la soglia 60% bonus Attack Speed che evolve la E.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — aggiunge due frecce laterali a ogni auto-attack e altra Attack Speed. Le frecce laterali applicano Plasma ai nemici vicini, quindi in teamfight stacchi Plasma su tutta la squadra avversaria mentre attacchi un solo bersaglio. Questo item completa l'evolve della E.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — dà AD, AP e Attack Speed in un unico slot. È il modo più economico per superare la soglia di 100 AP che evolve la W (cooldown refund + 4 stack di Plasma per cast). Phantom Hit ogni terzo AA aggiunge altro on-hit damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore di crit da late-game (critical strike: probabilità che un AA faccia ~175% del danno). Combinato con i due proiettili extra di Runaan's, ogni AA tira 3 chance di crit insieme.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro squadre con HP/armor stacker (Cho'Gath, Sion, Malphite, Ornn). Sostituisce ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** come quinto item se la squadra avversaria ha 2+ tank.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni con healing accumulato (Soraka, Vladimir, Aatrox). Applica Grievous Wounds (effetto che dimezza le cure ricevute dal nemico).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Syndra, Veigar, Brand support — un burst mage ti cancella in 1-2 secondi con una sola combo). Magic resist + shield sotto il 30% HP ti regala il secondo che ti serve per piazzare la seconda R e scappare.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contro poke prolungato (chip damage a distanza da artillery mage o ADC long-range). Il lifesteal ti cura mid-fight e in overheal trasforma l'eccesso in shield temporaneo.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contro assassin o diver (Zed, Kha'Zix, Talon — campioni progettati per dive sulla back line). La Ghost passive ti fa passare attraverso minion e campioni nemici mentre kiti (muoversi indietro mentre attacchi).

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** è l'unica scelta corretta. L'Attack Speed alimenta direttamente l'evolve della E e il DPS della Q multi-missile durante le combo dopo R.

**Skill order:** Maxa **Q** per prima (DPS principale, evolve più importante). Maxa **E** per seconda (più cooldown reduction e finestra di Attack Speed più lunga). Maxa **W** per ultima (utility soltanto: range lungo + stack di Plasma, ma il base damage per skill point è il peggiore delle tre abilities). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Domination** (l'albero del burst-AA) con **Hail of Blades** (3 auto-attack super veloci appena cominci ad attaccare un campione), **Taste of Blood** (cura 18-30 HP quando danneggi un campione, ogni circa 20s), **Sixth Sense** (un ping che rivela una ward nemica ogni circa 75s), **Ultimate Hunter** (taglia fino al 25% del cooldown della R man mano che fai takedown). Secondary **Precision** con **Triumph** (cura su takedown — kill o assist) e **Coup de Grace** (danno extra sotto il 40% HP).

## Matchup chiave

- **Caitlyn:** Ti out-rangea pesantemente al livello 1 (650 AA contro 525). Stai dietro la tua linea di minion e fai uno step in avanti solo quando piazza una trap (è animation-locked durante il piazzamento). Power-farma in sicurezza (concentrati solo sul gold dei minion) finché non completi ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**, poi cerca i pick cross-map con W appena puoi dashare con R.
- **Draven:** Perdi la guerra di AA: le sue Q-axes fanno molto più danno per AA del tuo basic. Evita i trade 1-per-1, committa solo quando le sue ascie cadono a terra (le perde dopo 2.5s). Tieni la **W** come strumento di poke fino a quando ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** è online.
- **Lucian:** Perde contro Kai'Sa post-6 ma ti bullizza dal livello 2 al 5 con il double-shot passive. Schiva la sua **Q** nascondendoti dietro i minion, tieni la **E** come disengage di emergenza (ability che spezza un all-in nemico). Mantieni priorità in lane farmando sotto torre fino al livello 6, poi cerca l'all-in al primo errore.
- **Vayne:** Kai'Sa vince la lane early (Vayne è praticamente melee finché non ha 3 item). Spingi la wave (manda i tuoi minion verso la sua torre) appena puoi, harassa (chip damage per logorare l'HP) con **W** a ogni cooldown. Dopo il minuto 25 lei scala più di te, quindi devi chiudere la partita nel mid-game o pendi a sfavore.
- **Jhin:** Matchup di poke a lunga distanza. La sua **W** è uno slow root da 3550 unità che ignora il tuo dodge se passa prima per un minion. Stai dietro la prima fila di minion e non tradare durante la sua reload window: è massimamente forte con il caricatore pieno e debole nei 2.5s dopo il quarto colpo.

## Power spike & condizioni di vittoria

- **Livello 6:** la prima **R** sblocca i pick (eliminare un nemico isolato fuori dal teamfight) sui bersagli di lane chip-killati. Lancia **W** + 2 AA sull'ADC nemico, poi dasha con **R** appena fa uno step avanti per last-hittare (auto-attack che dà il colpo finale al minion per prendere il gold).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer (~ minuto 12-14):** la priorità di lane si ribalta. Puoi shovare (spingere la wave veloce) con la Q e poi roamare (lasciare la lane per aiutare gli alleati) per pick cross-map su Drake o skirmish in mid (piccoli scontri 2-3 giocatori in river o jungle).
- **Q evolve (~ minuto 22-24, dopo ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade):** la Q passa da 6 a 12 missili — il burst single-target su campioni quasi raddoppia. Forza i teamfight a ogni obiettivo (Drake, Baron) da qui in poi.
- **E evolve (Berserker's + Runaan's + Guinsoo's completi):** la E ora dà brevissima invisibilità durante il channel. È la differenza tra dashare con R e morire all'istante, e dashare con R e prendere la kill: l'invisibilità ti rende untargetable per circa 0.5s dopo il dash, abbastanza per dodgeare il follow-up CC.

## Errori comuni

- **Tirare la R senza stack di Plasma.** La R richiede un bersaglio con 5 stack di Plasma (o pienamente ruptured). Se la premi su un nemico con 0-2 stack la spell non parte e va in cooldown pieno. Sempre W-poi-AA prima, controlla l'indicatore di Plasma sopra la barra HP del nemico, e poi committa la R.
- **R-are al 100% HP dentro la squadra avversaria.** La R è un finisher, non un engage. Lo shield che dà è piccolo (~110 + 25% bonus HP) e dura 2s: muori all'istante se la front line nemica è ancora in piedi. Aspetta almeno una di queste condizioni: bersaglio sotto il 40% HP, CC nemico in cooldown, o la tua squadra già sopra di lui.
- **Pushare la wave senza vision.** Kai'Sa non ha escape integrato fino all'evolve della E al minuto 22+. Se spingi oltre il mid-river senza che il support warddi tribush (piccoli cespugli che bloccano la vision) e river, il jungler nemico ti uccide gratis.
- **Saltare ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves per boots tankier.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sembrano tentanti contro un team AD-pesante, ma rallentano la soglia 60% Attack Speed che evolve la E. Niente evolve = niente invisibilità sul dash = la R diventa una sentenza di morte.
- **Tenere la E per l'engage offensivo.** Il valore vero della E è la finestra Ghost (passa tra unità) + Attack Speed durante un fight. Premi E **dopo** la R, non prima: l'invisibilità della E evolved parte all'inizio del channel, quindi castarla da posizione sicura sprecha i frame di immunità.

## Suggerimento avanzato

Il **flash R** finisher si fa al contrario di come Kai'Sa di solito si gioca. Quando un ADC nemico sta scappando a basso HP nella fog of war (le parti della mappa che al momento non vedi) e la **R** ti porterebbe fuori posizione, **Flash** (summoner spell che ti teletrasporta 400 unità nella direzione scelta) verso di lui per entrare in range R, poi immediatamente R. Brucia Flash ma trasforma una semi-fuga in una kill garantita ad alti rank. Trick: bufferizza il cast della R 0.1s dopo il Flash tenendo premuto il tasto della R — l'input buffer di League fa partire la R esattamente nell'istante in cui Flash atterra, così il nemico non vede arrivare il dash.
