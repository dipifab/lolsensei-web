---
title: "Renekton Top Build & Guida — Patch 16.9"
slug: "renekton-top"
language: "it"
patch: "16.9"
champion: "renekton"
role: "top"
last_updated: "2026-04-29"
description: "Guida Renekton top lane per League of Legends Patch 16.9: gestione Fury, build da lane bully, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Renekton"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Lane Bully"
  abilities:
    - key: "P"
      name: "Reign of Anger"
      description: "Renekton accumula una barra di Fury con auto-attack e abilità (ne guadagna di più con HP bassi). A 50+ Fury la sua prossima Q, W o E diventa empowered con un effetto più forte."
      dd_spell_id: "Renekton_Passive"
    - key: "Q"
      name: "Cull the Meek"
      description: "Roteata AOE attorno a Renekton: danneggia e cura per ogni bersaglio colpito. Con 50+ Fury sia danno che heal sono amplificati — strumento principale di sustain in lane."
      dd_spell_id: "RenektonCleave"
    - key: "W"
      name: "Ruthless Predator"
      description: "Empower sulla prossima auto-attack: due colpi più stun da 0,75s. Con 50+ Fury diventa tre colpi, stun più lungo da 1,5s e distrugge gli scudi nemici."
      dd_spell_id: "RenektonPreExecute"
    - key: "E"
      name: "Slice and Dice"
      description: "Dash in avanti. Se colpisce qualcosa, può essere rilanciata entro qualche secondo per un dash di ritorno. Il recast empowered infligge danno bonus e riduce l'armatura."
      dd_spell_id: "RenektonSliceAndDice"
    - key: "R"
      name: "Dominus"
      description: "Si trasforma in forma Tyrant: HP massimi bonus e un'aura di danno magico per qualche secondo. Genera anche Fury passivamente mentre attiva."
      dd_spell_id: "RenektonReignOfTheTyrant"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "primo item alternativo in matchup melee bully dove vuoi un crit-heal garantito sulla prima auto di ogni fight (Sett, Garen)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha danno magico pesante o CC concatenato (Lissandra, Malphite ult, Sett pull)"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro team AP pesanti quando ti serve MR più self-healing potenziato sopra Death's Dance e gli heal della Q"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contro squadre con armor e tenacity (Rammus, Tahm Kench, Malphite) — armor pen più uno slow su bersagli danneggiati"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quando ti serve la passiva di Move Speed per inseguire kiter (Quinn, Vayne top, Gnar) e restare attaccato alla backline"
  base_combo: ["E", "W", "AA", "Q", "E"]
  win_condition: "Snowballa la lane con l'all-in di livello 2-3: empowered W stun + Q per danno AOE e heal, poi dash di ritorno con E. Trasforma il vantaggio in un timing di Stridebreaker che vince i 1v1 in side lane e dive bot."
  weakness: "Power drop forte dopo il minuto 25 se è dietro. Kiter a lunga gittata e ranged top (Quinn, Vayne, Teemo, Gnar) gli negano Fury e trade; senza Fury le sue abilità sono deboli e la fantasia da lane bully crolla."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["nasus", "kayle", "kassadin"]
      archetype: "Late-game scaler con early laning debole"
      reason: "I loro primi 6 livelli sono fasi di farm passive. L'all-in di livello 2-3 di Renekton (empowered W stun + Q + E reposition) li butta fuori dalla wave ripetutamente, negando gli oggetti che li rendono pericolosi."
    - examples: ["yasuo", "yone", "irelia"]
      archetype: "Carry melee che hanno bisogno di farmare in tranquillità"
      reason: "Renekton li out-trade a livello 2-3 prima che arrivino al loro item spike. Empowered W stunna attraverso i loro dash, e l'heal della Q cancella il loro poke in un colpo solo."
    - examples: ["malphite", "ornn"]
      archetype: "Tank lenti senza danno early forte"
      reason: "Non riescono a punire i trade corti di Renekton. Lui accumula Fury sui minion, cammina verso di loro con empowered W pronta e gli porta via HP ogni volta che le loro abilità sono in cooldown."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Top ranged o da kite"
      reason: "Stanno fuori dal range di W e gli portano via HP gratis. Ha solo un dash corto (E) per chiudere: una volta che è in cooldown, mangia poke senza modo di rispondere e Fury non si carica."
    - examples: ["fiora", "camille"]
      archetype: "Duelist che scalano oltre la fase di lane"
      reason: "La W di Fiora para in pieno empowered W stun; la E hookshot di Camille le permette di disimpegnarsi dalla finestra E + Q di Renekton. Entrambe lo outscalano dal minuto 20 in poi e puniscono il suo late-game debole."
    - examples: ["gnar", "kennen"]
      archetype: "Top ranged con CC integrato"
      reason: "Entrambi pokano fuori dal range di Q e hanno stun a distanza: il throw mega-form di Gnar, la W stun di Kennen. Tengono Renekton senza HP senza mai entrare nella sua trade window."
---

## Panoramica

Renekton è un **lane bully** (un campione disegnato per dominare la fase di laning, e poi convertire quel vantaggio nel resto della partita) costruito attorno alla sua barra di **Fury** — la risorsa gialla che cresce con auto-attack e abilità. Una volta a **50 Fury**, la sua prossima Q, W o E diventa **empowered** con un effetto molto più forte: heal maggiore sulla Q, stun più lungo sulla W, armor shred sulla E. L'intero kit è melee a corto raggio, con un dash in avanti e di ritorno (**E**) come unico vero strumento di mobilità. Renekton vince o perde in base alla capacità di convertire il suo power spike di livello 2-3 in kill prima che gli scaling champion arrivino online.

Il suo piano partita è diretto: **farma Fury sulla wave, cammina verso il nemico a 50+ Fury con empowered W pronta, e fai trade**. Il combo signature è **E in avanti → empowered W stun → auto-attack → Q per danno AOE e heal → E di ritorno** — un pezzo di HP scambiato per uno più grosso del nemico, con te che esci più sano. Da metà partita in poi, **Stridebreaker** insieme alla **R (Dominus)** lo trasforma in un sticky target killer: la R gli dà HP massimi bonus e un'aura di danno mentre attiva, e il dash attivo dello Stridebreaker copre il gap che la E corta non raggiunge. Dopo il minuto 25, se non è avanti, va in power drop — ed è per questo che vincere la lane early non è negoziabile.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passiva di rigenerazione HP attutisce il poke nemico (danno ranged a basso costo che ti porta via HP senza committare al fight) fino al power spike di livello 2. Prendi ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** solo in matchup melee dove pensi di all-in al livello 1-2 (tipo mirror Renekton o Sett).

**Item core (nell'ordine):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primo item spike (il momento in cui il tuo danno e la **stickiness** — la capacità di restare attaccato a un bersaglio che cerca di scappare — saltano di più). L'attivo è un dash corto che rallenta tutto in un cono — esattamente il secondo gap-closer (uno strumento per chiudere distanza in fretta) che a Renekton manca quando la E è in cooldown. AD, HP e ability haste (stat che riduce i cooldown delle abilità) si allineano tutti con quello che il kit chiede.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — stivali di default quando il nemico ti fa danno principalmente con auto-attack. Riducono quel danno nei trade prolungati (scambi di danno avanti e indietro in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più un **lifeline shield**: quando i tuoi HP scendono sotto il ~30%, parte uno scudo automatico. Quella finestra è esattamente quando ti serve tempo extra per piazzare empowered W e fare il dash di ritorno con E.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il **burst** AD (danno alto concentrato in 1-2 secondi, tipo un combo da assassino) in un **bleed** (danno spalmato nei secondi successivi invece che istantaneo). L'effetto cleanse-on-takedown si concatena bene con il buffer HP della R nei teamfight.
5. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — ogni Q, empowered E e auto toglie uno stack di armor al bersaglio. Si stacca veloce sulle hit AOE della Q, e la riduzione armor team-wide rende il follow-up del tuo team enorme.

**Item situazionali:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo item alternativo o quarto item in matchup melee bully dove vuoi un crit-heal garantito sulla prima auto di ogni fight (mirror Sett, Garen). Insieme al trigger di auto-attack reset di empowered W, il crit arriva quasi a comando.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team avversario ha danno magico pesante o **CC** (crowd control: stun, root, knockback — tutto ciò che ti blocca così non puoi agire) concatenato. La tenacity (stat che riduce la durata del CC su di te) è critica contro team che possono tenerti lontano dal carry.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contro **AP** (Ability Power, la stat dietro al danno magico) pesante. Dà MR (Resistenza Magica) più una passiva di amplificazione cure che potenzia gli heal della Q, il cleanse di Death's Dance e qualunque lifesteal accumuli dopo.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contro squad tank con armor e tenacity. Armor pen più uno slow proc (passiva che si attiva automaticamente a ogni hit) su ogni abilità che fa danno — incluse Q, W e il recast empowered di E.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — quando ti serve la passiva stack di Move Speed per inseguire kiter (Quinn, Vayne top, Gnar) e raggiungere la backline (i carry squishy che stanno dietro ai loro tank durante un fight) prima che riposizionino.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è il default. Cambia in ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha tre o più fonti di CC o danno magico pesante.

**Skill order:** Massimizza la **Q** per primo — è la tua fonte principale di danno, il tuo strumento di sustain e il generatore di Fury sulla wave. Massimizza la **W** per seconda (la durata dello stun scala per livello, la versione empowered da tre colpi è il tuo pulsante di kill). Massimizza la **E** per ultima perché lo scaling dell'attivo è piccolo — quello che conta è l'utility del dash + recast, non il rank. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con la keystone (la runa principale dell'albero) **Conqueror** — una passiva che accumula AD bonus mentre continui a combattere campioni, capata dopo 5 secondi di combattimento sostenuto. Premia esattamente lo stile di Renekton di restare attaccato al bersaglio per un intero ciclo di Fury. Accoppia con **Triumph** (piccolo heal e burst di gold sul takedown), **Legend: Bloodline** (stack di life-steal sui takedown) e **Last Stand** (danno extra sotto il 60% HP — combacia con il bonus low-HP della Fury). Albero secondario **Resolve** con **Bone Plating** (riduzione danno sui prossimi 3 hit dopo aver subito danno) più **Overgrowth** (HP scaling sulle morti dei minion vicini, perfetto per un top laner che farma 8+ minion per wave). Stat shard: **Adaptive Force** + **Adaptive Force** + **Health Scaling**. Press the Attack è uno swap accettabile in matchup squishy (Quinn, Kennen) dove vuoi burst extra sul primo combo da 3 hit, ma Conqueror è il default più sicuro.

## Matchup chiave

- **Garen:** Skill matchup (vince il giocatore migliore, indipendentemente dal pick). La sua **W** (uno scudo da 4 secondi di riduzione danno) si mangia il danno della tua empowered W se la spari nel momento sbagliato — fai sprecare la sua W camminando con 0 Fury, poi indietreggia e fai engage a 50+ una volta che lo scudo è giù. Q sulla roteata AOE ad ogni wave per tenerti gli HP pieni.
- **Sett:** Lane favorevole. Il suo combo Q-W è telegrafato (il wind-up è abbastanza visibile da reagire). E-dash dentro dopo che committa W, stunnalo con empowered W mid-cast, Q per l'heal, poi E di ritorno prima che la sua barra Grit si riempia di nuovo.
- **Fiora:** Matchup melee più duro. La sua **W** è un parry (uno scudo breve che blocca e contrattacca la prossima abilità) — fagli sprecare il parry con una W normale prima di committare empowered W stun. I suoi Vital fanno true damage (danno che ignora armor e MR — non c'è stat difensiva che lo riduca), quindi ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** è obbligatorio; rusha ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** solo se prende kill early.
- **Quinn / Teemo:** Matchup ranged molto duro. Ti accecano (cancella le tue auto-attack per un breve periodo) o ti tengono fuori range. **Freezza** la wave vicino alla tua torre (smetti di pushare e tieni la wave dalla tua parte di lane) per negargli il farm (gold ed XP dai minion), e chiama il jungler — Renekton non vince questo 1v1 senza aiuto.
- **Darius:** Lane a coin-flip tra due lane bully melee. Lo out-trade al livello 2 se entri con E e stunni mid-Q con empowered W; lui ti out-trade a livello 6+ quando la passiva della sua R si attiva. Costruisci ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** per primo contro di lui per la sinergia heal-on-crit con il reset auto della empowered W.

## Power spike & condizioni di vittoria

- **Livello 2:** Q + E sbloccate. Renekton ha una vera all-in window (una finestra dove puoi committare totalmente alla kill, senza opzione di tirarti indietro). E in avanti, empowered W se la Fury è già a 50, Q per il danno AOE e l'heal, poi E di ritorno — il nemico è al 40-50% HP prima di poter rispondere.
- **Livello 3:** Tutte e quattro le basic sbloccate. Con 50+ Fury accumulata farmando minion, il combo empowered W stun + Q cancella ~60% degli HP di un nemico squishy. Questo è il livello più forte di Renekton in tutta la partita — forza un fight qui.
- **Livello 6:** Prima **R (Dominus)** sbloccata. L'HP massimo bonus trasforma un trade perdente in uno vincente; lancia R nel momento in cui gli HP scendono sotto il 50% e il buffer più l'aura di danno di solito ribaltano la kill.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completo (~ minuto 11-13):** L'attivo dash + slow dà a Renekton il secondo gap-closer che il kit non ha quando E è in cooldown. Forza 1v1 in side-lane e roama (lascia la lane per aiutare mid o bot) per pick (kill isolate su nemici fuori posto).

## Errori comuni

- **Spendere Fury appena tocca 50.** Empowered W è un pulsante di kill, non uno strumento di waveclear. Tienila per i trade o gli all-in; spararla sui minion spreca l'abilità singola più forte del kit.
- **Usare E come escape pre-engage.** E è un dash in avanti + recast indietro, ma il recast funziona solo se il primo dash colpisce qualcosa. Se la usi nel vuoto per scappare, non hai niente da cui rimbalzare indietro — resti incollato in faccia al nemico. Tienila per l'all-in.
- **Buildare item solo tank.** Renekton scala con **AD**, non solo HP. Buildare Sunfire + Warmog's ti uccide il danno; smetti di bursare gli squishy e diventi un minion lento ambulante. Resta sul core AD-bruiser (Stridebreaker → Sterak's → Death's Dance → Black Cleaver).
- **Inseguire kiter oltre la torre Tier 2.** Renekton non ha escape una volta usata la E. Senza R o E pronta, ogni passo oltre la torre è un gank gratis per il jungler avversario — e la sua move speed base lenta significa che non riesce a disimpegnarsi pulito.
- **Ignorare la gestione della Fury.** Se cammini con 0 Fury, i tuoi trade sono deboli e prevedibili. Controlla sempre la barra Fury prima di engagare — minimo 50 per empowered W, idealmente con anche la Q pronta per concatenare.

## Suggerimento avanzato

Allena la sequenza **double-empower**: in un singolo trade puoi di solito sparare **due** empowered abilities in fila se gestisci bene la Fury. Cammina in lane con 50 Fury accumulata, spara empowered W (consuma 50, applica stun + 3 hit, rigenera circa 30 Fury dai colpi), auto-attacca due volte sul bersaglio stunnato (ogni auto pompa altri 5 Fury), e quando lo stun finisce sei di nuovo a 50+ e puoi sparare **empowered Q** per l'heal maggiore — trasformando un trade da un ciclo in un trade da due cicli dove tu prendi quasi zero danno. Lo stesso trucco funziona con il recast empowered di E per l'armor shred quando insegui un bersaglio in fuga. Lo skill expression è puramente bookkeeping di Fury: conta gli auto-attack, conta le hit di Q, e non lasciare mai overflow della barra oltre 100 (è capata e qualunque generazione extra è sprecata).
