---
title: "Lucian Bot Build & Guida — Patch 16.9"
slug: "lucian-bot"
language: "it"
patch: "16.9"
champion: "lucian"
role: "bot"
last_updated: "2026-05-05"
description: "Guida Lucian bot lane per League of Legends Patch 16.9: starter kit, build da lane bully, matchup chiave, power spike, errori comuni e una tip avanzata."
quick_learn:
  champion_dd_id: "Lucian"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully ADC"
  abilities:
    - key: "P"
      name: "Lightslinger"
      description: "Dopo qualsiasi ability cast, il prossimo basic attack di Lucian spara DUE colpi (il secondo è ridotto). Questo ritmo a doppio colpo è il motore del kit."
      dd_spell_id: "Lucian_Passive"
    - key: "Q"
      name: "Piercing Light"
      description: "Skillshot lineare. Si può lanciare su un minion o su un campione: il raggio attraversa e danneggia tutto ciò che è dietro al bersaglio sulla linea."
      dd_spell_id: "LucianQ"
    - key: "W"
      name: "Ardent Blaze"
      description: "Skillshot lineare che esplode a stella, marca i nemici colpiti e li rivela. Colpire un bersaglio marcato dà a Lucian un burst di movement speed."
      dd_spell_id: "LucianW"
    - key: "E"
      name: "Relentless Pursuit"
      description: "Dash corto. Il cooldown si riduce quando i colpi di Lightslinger colpiscono nemici (di più sui campioni). Il dash è ciò che rende Lucian un lane bully."
      dd_spell_id: "LucianE"
    - key: "R"
      name: "The Culling"
      description: "Channel di una raffica di colpi in linea, ognuno applica i proc di Lightslinger. Puoi muoverti durante il channel e intrecciare Relentless Pursuit nel cast."
      dd_spell_id: "LucianR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "6692"
      name: "Eclipse"
      against: "contro lane squishy da all-in early (Senna, Karma, Lulu): scudo + omnivamp ogni due ability proc snowballano la lane"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro frontline tank o squadre HP-stack (Sion, Cho'Gath, Dr. Mundo): l'armor pen bonus scala con gli HP del nemico"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con cure pesanti (Soraka, Vladimir, Aatrox): applica Grievous Wounds (taglia le cure) appena tagghi un bersaglio"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro pick comp e hook (Blitzcrank, Thresh, Morgana Q): lo spell shield mangia un CC prioritario prima del chain-burst"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro duo lane AD-heavy (Draven + Pyke, double-AD comp con Kha'Zix o Talon che roamma bot): armor extra e riduzione danno da AA"
  base_combo: ["Q", "AA", "W", "AA", "E", "AA"]
  win_condition: "Vinci la laning phase con Q poke + dash trades, snowballa con Essence Reaver e Navori Flickerblade entro il minuto 25, poi chiudi i fight a midgame con R + E weave prima che gli scaler vengano online."
  weakness: "Dopo il minuto 30 perde forte contro marksman da scaling (Vayne, Twitch, Kog'Maw). Niente disengage affidabile, armor base bassa: una E sbagliata significa eat l'intero burst dei diver e degli assassin."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack stacca in 3 colpi: il doppio colpo di Lightslinger dopo Q arriva a 3 proc in meno di 2 secondi, il keystone più veloce che Lucian può triggerare. Triumph + Bloodline danno sustain, Coup de Grace aggiunge 8% danno sotto 40% HP per execute con R."
    secondary_rationale: "Domination secondary: Sudden Impact si attiva subito dopo ogni Relentless Pursuit, aggiungendo lethality al follow-up Q-AA immediato. Treasure Hunter premia l'aggressione early game finanziando un secondo item più veloce."
    secondary_alternative: "Se la bot lane nemica è un 2v2 da scaling (Kog'Maw + Lulu, Vayne + Soraka) e non prevedi kill early, swap Domination → Inspiration con Magical Footwear (Boots gratis al minuto 12) + Cosmic Insight (più Flash uptime nei teamfight late)."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw"]
      archetype: "ADC immobili da scaling senza early dominance"
      reason: "Q poke + E dash di Lucian vincono ogni trade level 2-6; gli scaler immobili non riescono a rispondere prima degli item e cedono plate e CS."
    - examples: ["blitzcrank", "thresh"]
      archetype: "Support da hook senza dash-counterplay"
      reason: "Relentless Pursuit dodga gli hook in reattiva. Con E disponibile, Lucian cammina nel bush della lane contro un hooker e costringe il support a sbagliare la previsione del dash."
    - examples: ["senna", "karma"]
      archetype: "Enchanter squishy con resistenze base basse"
      reason: "I windup Q-AA-AA double-shot di Lucian svuotano la barra HP degli enchanter in una sola trade window; non hanno peel early che sopravvive a un E-flash all-in."
  counterpicks:
    - examples: ["vayne", "twitch"]
      archetype: "ADC hyper-carry da late game"
      reason: "Se sopravvivono oltre il minuto 25 con due item, la curva di danno di Lucian si appiattisce mentre la loro spara: lo superano in damage in ogni fight prolungato."
    - examples: ["caitlyn", "jhin"]
      archetype: "ADC da poke a lungo raggio"
      reason: "Entrambi outrange la Q di Lucian in modo significativo: Caitlyn shovva e zona con Q, Jhin punisce con il root della W da off-screen. Lucian non riesce a chiudere il gap per le trade."
---

## Panoramica

Lucian è un **lane bully ADC** costruito attorno a un ritmo semplice: ogni ability triggera la passiva **Lightslinger**, che fa partire il prossimo basic attack come doppio colpo. Quindi ogni partita di Lucian è una sequenza di **Q → AA-AA → W → AA-AA → E → AA-AA**, intrecciando ability e doppi colpi così velocemente che la bot lane nemica non vede mai una trade window pulita. Ha la pressione di lane più alta del gioco a livello 1-9 tra i marksman, un dash corto sulla **E** con cooldown reset on takedown, e una **R** che fa sia da execute che da burst in teamfight. Il rovescio: scala peggio di Jinx, Kog'Maw o Vayne, quindi ogni minuto dopo il 30 è un minuto perso.

Il game plan è "convertire la pressione di lane in un lead da 2 item entro il minuto 18, poi snowballare (vantaggio crescente che si auto-alimenta — kill, gold, item, altre kill) tramite pickoff in teamfight prima che gli scaler vengano online". Con **Essence Reaver** e **Navori Flickerblade** completi, Lucian può chainare combo Q-AA quasi a cooldown e la **R** torna abbastanza veloce da poterla usare due volte per skirmish. Da lì in poi giochi come midgame teamfighter: apri ogni fight con **W** per marcare e rivelare il bersaglio prioritario, dasha dentro con **E**, channelli **R** scivolando lateralmente per dodgare gli skillshot in arrivo, e lasci che il reset on takedown ricicli il dash per il pick successivo.

## Build Consigliata

**Starting items:** Doran's Blade + 2 Health Potion. Le mana cost di Lucian sono gestibili grazie a **Essence Reaver** che restituisce mana sui basic attack, quindi un secondo Doran's vale meno di un componente Pickaxe verso il primo item.

**Core items (in ordine):**

1. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — first-item rush. Il refund di mana su ogni basic attack permette a Lucian di castare Q a cooldown senza svuotare la pool, e l'AD + crit chance dà uno spike di danno significativo al minuto 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots da attack speed. Il doppio colpo ama l'attack speed: AA più veloci = proc Lightslinger più veloci = trigger Press the Attack più veloci.
3. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — il tuo spike da secondo item. Ogni crit riduce i cooldown delle basic ability: in pratica la Q torna così veloce che la lanci due volte nella stessa trade window. È l'item che trasforma la combo da "Q-AA-AA-W-AA-AA" in "Q-AA-AA-Q-AA-AA-W-AA-AA" — un terzo di combo extra, gratis.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — sustain + AD. Il lifesteal lascia Lucian sopravvivere alle skirmish a midgame e l'overheal shield compra tempo quando un diver gli atterra addosso. Skip se l'enemy team ha priorità Grievous Wounds.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — spike di crit damage late game. Quando finisci IE dovresti già aver chiuso la partita con i teamfight di midgame; se non l'hai fatto, IE è la tua ultima chance per stare al passo degli hyper-carry.

**Situational items:**

- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — sostituisce Essence Reaver come first-item rush contro lane squishy che vuoi all-in da subito. Lo scudo + omnivamp ogni due ability proc converte le trade window level 2-6 in pura kill pressure.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro frontline tank o squadre HP-stack (Sion, Cho'Gath, Dr. Mundo). Sostituisci Bloodthirster se l'enemy team ha 2+ tank; l'armor pen bonus scala con gli HP massimi del bersaglio.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp con cure pesanti (Soraka, Vladimir, Aatrox). Applica Grievous Wounds — un debuff che taglia le cure nemiche — appena tagghi il bersaglio.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro pick comp e hook (Blitzcrank, Thresh, Morgana Q). Lo spell shield mangia un CC prioritario prima che il nemico riesca a chain-burstarti.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — sostituisce Berserker's Greaves contro duo lane AD-heavy (Draven + Pyke) o comp con Kha'Zix / Talon che roamma bot. Armor extra e riduzione danno da basic attack.

**Boots:** Berserker's Greaves di default. Plated Steelcaps solo contro comp AD-heavy.

**Skill order:** Maxa **Q** prima (è la tua DPS principale e il tool di poke), **W** seconda (cooldown più corto sulla mark + speed burst), **E** ultima (il cooldown resta basso da solo grazie ai proc di Lightslinger). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Precision** con **Press the Attack**, **Triumph**, **Legend: Bloodline**, **Coup de Grace**. Secondary **Domination** con **Sudden Impact** e **Treasure Hunter**. Stat shards: Adaptive, Adaptive, Health Scaling.

## Matchup chiave

- **Caitlyn:** Leggermente sfavorevole. Lei outrange la tua **Q** di parecchio, quindi non provare a pokarla attraverso i minion: tieni la wave dal tuo lato e cerca un all-in **E**-flash a level 2 o 3 prima che i suoi proc **Headshot** diventino punitivi. Quando committi, dodga il path della sua trap **W** con **E**.
- **Draven:** Pari, leans Lucian-favored se il tuo support engaggia. Draven ha bisogno di mani libere per raccogliere la Spinning Axe; puniscilo ogni volta che insegue un'ascia fuori posizione seguendolo con **Q** sulla linea su cui sta correndo. **Press the Attack** stacka più veloce del suo windup Q-Q-Q.
- **Jhin:** Lucian-favored level 1-5, pari al 6, leggermente Jhin-favored late. Cammina avanti quando la sua **W** è in cooldown, **Q** attraverso i minion per chippare HP, e dasha dentro con **E** appena usa il quarto proiettile (la finestra di reload lenta è il tuo timing di kill). Rispetta la sua **R** durante i recall: può sniparti da metà mappa.
- **Vayne:** Pesantemente Lucian-favored prima del livello 9. Questa è la tua miniera d'oro: shovva la wave forte pre-3, falla scappare dalla lane con il poke di **Q**, e ping il jungler per un dive a level 2. Se sopravvive a 2 item la lane è chiusa; passa a splitpush (spingere una side lane da solo per attirare nemici lontano) o teamfight da backline e smetti di provare a 1v1arla.
- **Kai'Sa:** Matchup pari deciso dai timing di item. Lucian vince minuto 1-12, Kai'Sa vince dal minuto 18+. Non lasciarla farmare gratis fino a 2 item: shovva ogni wave, minaccia plate, e pinga il jungler per un dive sul prossimo errore. Dopo che completa **Bloodthirster** ti supera in ogni fight prolungato.

## Power spike & condizioni di vittoria

- **Level 2:** Con un punto in **Q** e uno in **W**, la combo Q-AA-AA-W toglie il 35-45% degli HP di un ADC nemico se cammina avanti per last-hittare. Tieni la wave al centro lane e cerca questa trade window prima che possa recuperare.
- **Level 6:** La prima **The Culling** sblocca il pickoff. Non aprire con **R**: apri con **W** per marcare, **E** dentro, poi channel della **R** strafando di lato. La combo completa cancella ogni support squishy beccato da solo nel bush.
- **![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) Essence Reaver completion (~ minuto 10-12):** Primo spike da mana refund. Ora puoi castare **Q** a cooldown su tutta la wave e fino al ADC nemico; il prio di lane (priority — lasciare la lane senza perdere CS) ti permette di crashare la wave e roammare verso un fight per il Drake.
- **![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) Navori Flickerblade online (~ minuto 18-22):** Il tuo spike di win-condition. Il cooldown di **Q** scende a circa 3 secondi sotto auto sostenute, e ci infili due **Q** in una sola skirmish. Forza i fight qui — Drake, Rift Herald, Atakhan — prima che il terzo item dell'ADC nemico venga online e tu cominci a calare.

## Errori comuni

- **Camminare avanti senza controllare il cooldown della E.** **Relentless Pursuit** è la tua unica escape e il tuo unico gap-closer. Se committi a una trade con E down, non puoi disimpegnarti quando il support nemico engagia. Sappi sempre il secondo segno sul timer della E.
- **Bruciare la R come poke da metà lane.** **The Culling** ha un channel lungo e una linea di fuoco visibile. Se la lanci a max range da full HP, i primi 2-3 colpi vengono walkati fuori e non ottieni nulla bruciando un cooldown da 90 secondi. Usa la R come finisher (bersaglio sotto il 40% HP) o come opener midgame in teamfight in combo con il mark di **W**, mai come waveclear.
- **Non intrecciare auto-attack tra una ability e l'altra.** Il doppio colpo di **Lightslinger** parte solo se basic-attacchi dopo ogni cast. Chi inizia spamma Q-W-E-R e si perde l'intera finestra del doppio colpo, perdendo circa il 40% del damage. Il ritmo è sempre **ability → AA → AA → ability → AA → AA**.
- **Maxare E o W per prima.** Lo scaling di danno della **E** è irrilevante; il valore è nel dash, che ha già un reset base sui Lightslinger hit. Maxa sempre **Q** per prima — è l'ability con più damage-per-rank del kit e l'unico tool di poke a distanza.
- **Provare a 1v1 un hyper-carry dopo il minuto 30.** La tua curva di danno si appiattisce dopo il terzo item; la loro si impenna. Se la lane è pari al minuto 25, smetti di cacciare l'1v1 e gioca da backline teamfighter dietro al tank: che provino loro a flankarti.

## Suggerimento avanzato

Allena il **"Q-E animation cancel"** in Practice Tool finché non diventa muscle memory. Il windup del basic attack di Lucian dopo la **Q** è abbastanza lungo che un giocatore sciatto cammina avanti e aspetta — perdendo il secondo proiettile di Lightslinger perché il nemico esce dal range. La fix è **dashare con E durante l'animazione della Q**: cancelli il windup riposizionando Lucian più vicino, e il doppio colpo parte comunque perché Lightslinger è in queue dal cast della Q. In pratica questo ti permette di lanciare la Q da max range, dashare avanti di 445 unità per chiudere il gap, e sparare immediatamente **AA-AA** a distanza ravvicinata, coprendo 1145 unità totali in meno di un secondo. Contro qualsiasi lane non-mobile (Senna, Karma, Aphelios) questa combo cancella il 50-60% degli HP in una singola trade window senza counterplay. Spendi 10 minuti in Practice Tool finché non riesci a chainare Q-E-AA-AA senza droppare un solo colpo: la differenza tra un Lucian bronze e un Lucian platinum è esattamente questo animation cancel.
