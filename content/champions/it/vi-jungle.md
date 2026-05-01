---
title: "Vi Jungle Build & Guide — Patch 16.9"
slug: "vi-jungle"
language: "it"
patch: "16.9"
champion: "vi"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Vi jungle per League of Legends Patch 16.9: clear path, pattern di gank, build bruiser, matchup chiave, power spike, errori comuni e una tip avanzata."
quick_learn:
  champion_dd_id: "Vi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Blast Shield"
      description: "Vi accumula uno shield nel tempo. Lo shield si attiva al primo colpo di abilità contro un nemico — durabilità extra in ogni fight."
      dd_spell_id: "Vi_Passive"
    - key: "Q"
      name: "Vault Breaker"
      description: "Carica un dash che knocka indietro il primo champion colpito e applica uno stack di Denting Blows. Gap-closer principale; più carichi, più range e danno."
      dd_spell_id: "ViQ"
    - key: "W"
      name: "Denting Blows"
      description: "Ogni terzo colpo sullo stesso target fa danno fisico extra in % HP max, riduce armor e dà attack speed a Vi. Riduce anche il cooldown di Blast Shield."
      dd_spell_id: "ViW"
    - key: "E"
      name: "Relentless Force"
      description: "Empowera il prossimo basic attack che colpisce in cono attraverso il target. Resetta il timer di auto e procca on-hit; DPS button principale fra Q e R."
      dd_spell_id: "ViE"
    - key: "R"
      name: "Cease and Desist"
      description: "Aggancia un champion nemico e gli si butta addosso in modo unstoppable; al raggiungimento lo knocka su. Chi è sul tragitto viene scaraventato di lato e stunnato brevemente."
      dd_spell_id: "ViR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs molto crowd control o danno magico (es. Lissandra, Syndra, Ahri): la tenacity riduce gli stun così riesci comunque a castare R"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tank (es. Ornn, Sion): gli stack di Q e W spezzano armor a beneficio di tutta la squadra"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "vs squadre squishy a doppio AD (es. Zed + Caitlyn): l'energized auto aggiunge slow e burst subito dopo il knockup di R"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando l'enemy team ti focalizza per primo: una seconda vita gratis ti permette di committare più a fondo come tool di lock-on"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst AP pesante (es. Syndra + Brand + Ahri): magic resist e shield lifeline quando dive a HP bassi"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs picker single-target con hard CC (es. Morgana Q, Ashe R): lo spell shield blocca un'abilità decisiva sulla partita"
  base_combo: ["Q", "AA", "W", "E", "R"]
  win_condition: "Aggancia R su un carry chiave squishy, scaravantalo nella tua squadra, poi concatena Q + AA-E-AA per ciclare Denting Blows con armor shred mentre Sterak's mangia il danno di ritorno."
  weakness: "Quando Q è in cooldown non hai né fuga né slow. Champion con dash di self-peel (es. Ezreal E, Tristana R) o hard CC su di te (es. Lillia R, Morgana Q) ti spengono l'unico engage e ti lasciano fuori posizione."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
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
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Enchanter squishy senza self-peel"
      reason: "R è point-and-click e unstoppable: nulla di quello che fanno ferma Vi dal raggiungere il loro carry. Una volta morto il support, l'ADC resta senza shield e crolla."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "ADC immobili o con dash corti"
      reason: "Q caricato più R chiudono il gap prima che possano kitare via. La loro unica fuga è il Flash, che ha cooldown molto più alto della tua R da 90 secondi a rank 1."
    - examples: ["azir", "anivia", "veigar"]
      archetype: "Mage immobili senza dash"
      reason: "Non possono uscire dal lock-on di R, e il knockback di Q interrompe i channel lunghi (Veigar W, Anivia R) prima che il danno arrivi a terra."
  counterpicks:
    - examples: ["lillia", "morgana", "ashe"]
      archetype: "Champion con root o sleep lunghi che ti bloccano a metà dash"
      reason: "Se mangi un root o uno sleep prima di castare R, resti senza engage e senza fuga. Trasformano la tua unica finestra di commit in una kill regalata."
    - examples: ["udyr", "warwick", "jarvan-iv"]
      archetype: "Jungler aggressivi nell'early e duellanti"
      reason: "Vi è mediocre prima del livello 6 e il suo clear è onesto, non veloce. Questi jungler invadono il secondo buff o la out-duellano sul Crab e snowballano prima che la R sia online."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "ADC con self-peel su dash a comando"
      reason: "Dopo la R, flashano o dashano fuori dal follow-up, e Vi non ha un secondo gap-close finché Q non torna up — hai speso l'engage per niente."
---

## Panoramica

Vi è un diver point-and-click — un fighter che aggancia **Cease and Desist (R)** sul carry più pericoloso e ci arriva qualunque cosa succeda. Il suo kit è corto e onesto: niente stealth, niente ulti globale, niente mobilità fancy. Quello che ha invece è un engage in lock-on garantito, una passive che spezza armor ogni terzo colpo (**Denting Blows (W)**), e uno shield integrato (**Blast Shield**) che assorbe la prima ondata di danno di ritorno. Il prezzo da pagare è brutale appena **Vault Breaker (Q)** va in cooldown: niente seconda fuga, niente slow, niente peel.

Il game plan è semplice da ricordare e duro da eseguire bene. Clear fino al level 3, cerca un gank early con **Q** + auto-attack + flash-**R** (lo spike di livello 6), poi passa il resto della partita a trackare il carry nemico aspettando una finestra in cui la squadra possa fare follow-up sulla tua **R**. Non sei un champion di flank o un bruiser da side lane — sei un tool di lock-on single-target che vince le partite cancellando un bersaglio prioritario per fight.

## Build Consigliata

**Starting items:** Mosstomper Seedling (oppure Gustwalker Hatchling se la squadra pianifica un invade) + Refillable Potion. Mosstomper dà uno shield a HP pieni — perfetto per sopravvivere al primo clear.

**Core items (in ordine):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — il tuo spike di AD principale più una active che slowa (Halting Slash). Lo slow è enorme per Vi perché, quando **Q** è in cooldown, non hai altri modi per tenere un target a portata di melee.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor contro auto-attack. Boots di default quando il nemico ha 2+ minacce AD (la maggior parte delle partite).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity e un grosso shield quando subisci tanto danno. Vi si tuffa nella back line; questo item è ciò che ti fa sopravvivere ai 2 secondi di danno di ritorno dopo la **R**, così riesci comunque a ciclare **Q** ed **E**.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il danno fisico ricevuto in un sanguinamento spalmato (danno distribuito nei secondi successivi invece che istantaneo). Recupera anche HP sulle takedown, così puoi all-in (full commit fino alla kill) e uscire sano.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantisce un colpo critico al primo auto di ogni fight (perfetto dopo il knockup di **R**) e ti cura per un buon tot di HP. Va a braccetto con **W** perché Vi vuole comunque mettere auto fra un'abilità e l'altra per stackare Denting Blows.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — al posto di Plated Steelcaps quando il nemico ha tanto crowd control o danno magico (Lissandra, Syndra, Ahri). La tenacity riduce la durata degli stun, così riesci a castare **R** anche se ti prendono.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tank (Ornn, Sion). Gli stack di **Q** e i procchi di **W** già spezzano armor; Cleaver aggiunge un altro layer su cui cavalca tutta la squadra.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — vs squadre squishy a doppio AD (due forti damage dealer fisici, es. Zed mid + Caitlyn bot). L'energized auto empowerato aggiunge uno slow e un burst di danno subito dopo il knockup di **R**.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando l'enemy team ti focalizza per primo a ogni engage. Una seconda vita gratis ti fa committare più a fondo senza throwarе il fight.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs burst AP pesante (Syndra + Brand + Ahri). Magic resist e uno shield lifeline quando l'HP scende sotto soglia mentre stai tuffando ti tengono vivo abbastanza da landare la **R**.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs picker single-target con hard CC (Morgana Q, Ashe R). Lo spell shield blocca un'abilità decisiva sulla partita prima che ti colpisca a metà dash.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il CC pesa più del danno auto-attack.

**Skill order:** maxa **Q** per prima (cooldown più basso = più finestre di engage e jungle clear più rapido), **W** per seconda (più danno % HP max e più armor shred a ogni terzo colpo), **E** per ultima. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** primary **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Conqueror si stacca veloce su Vi perché i procchi di **W** e la chain **R** + **E** colpiscono lo stesso target più volte — quando Sterak's pop, sei già a stack pieni. Secondary **Resolve** con **Bone Plating** e **Overgrowth** per la sopravvivenza nella back line.

## Matchup chiave

- **Lillia:** la sua **R** addormenta tutta la tua squadra dall'altra parte della mappa. Se la landa prima che tu prema **R**, la finestra di engage svanisce. Stai nel fog ai fight, tempa la tua **R** nell'istante in cui lei step up per ulteare, e non grupparti con tutti e 4 i compagni in una macchia stretta.
- **Kha'Zix:** invade forte e assassino. È più veloce di te nella jungle early e la sua passive di isolamento trasforma un 1v1 contro di te in un one-shot. Trackalo: se il blue buff manca e non si è visto bot, ti sta cacciando. Pathing lontano dalla sua route attesa fino al level 6.
- **Jarvan IV:** matchup di engage a specchio in lock-on. Il suo **E**-**Q** flag-and-drag ti knocka su prima che tu riesca a castare **R**, e l'ulti ti chiude in gabbia sul posto. Non 1v1arlo nella jungle senza i laner; forza fight solo quando la sua ulti è in cooldown.
- **Sejuani:** tank jungler con CC di squadra. La out-clearri e la out-pressuri nell'early (prima del minuto 14). Forza fight e trade sugli obiettivi quando la sua ulti ha range corto; in late i suoi stun e il peel battono il tuo engage single-target.
- **Master Yi:** attento alla **R**. La **Q** di Yi (Alpha Strike) lo rende invulnerabile per la durata — se la usa nell'istante in cui parti col dash, arrivi su un target che non puoi danneggiare. Aspetta che spenda la **Q** su una wave o un campo, poi engaga nei 12 secondi successivi mentre è in cooldown.

## Power spike & condizioni di vittoria

- **Level 3 (dopo il primo clear completo):** prima finestra di gank. Con un punto in **Q**, **W**, **E** puoi full-comboare un target che si è esposto. I fight sui Crab sono reali — il knockback della tua **Q** vince la maggior parte dei Crab contesi.
- **Level 6:** **Cease and Desist** online. Dive cross-mappa e dive in torre diventano possibili. Se una side lane ha prio (priority — puoi lasciare la lane senza perdere farm), **R** dal fog e forza un 2v2.
- **Stridebreaker completato (~ minuto 10-12):** grosso flip di tempo. Lo slow di Halting Slash ti fa restare attaccato ai bersagli in fuga senza bruciare **Q**, e il salto di AD ti fa 1v1are la maggior parte dei jungler nemici sui fight di Drake o Herald.
- **Sterak's Gage online (~ minuto 22-25):** diventi il tool di engage che sopravvive ai primi 2 secondi del fight. Da qui inizi a cercare pick (eliminare un nemico isolato fuori dal teamfight) sull'ADC o sul mid laner intorno agli obiettivi.

## Errori comuni

- **Castare R sul target più vicino invece che sul carry.** **R** è un lock-on single-target e nell'early ce l'hai una volta ogni 90+ secondi. Sprecarla sul tank avversario ti riconsegna alla loro squadra gratis. Aggancia sempre il carry squishy della back line, anche se devi camminare oltre il tank.
- **Caricare Q in piena vista.** Vi si auto-slowa ed è visibile mentre carica **Q**. Caricala dentro al fog of war (le zone scure che non vedi) o da una brush — mai allo scoperto. Una Q telegrafata si schiva con un sidestep.
- **Engagiare senza la squadra in vision range.** Tutto il profilo di danno di Vi è "knockare il carry nella squadra che chiude la kill". Se i laner sono a 4 secondi di distanza, arrivi, fai il knockup e muori prima che qualcuno faccia follow-up. Aspetta che almeno un compagno sia entro range di Flash dal fight.
- **Spammare E off-cooldown.** **E** ha 2 charge con un refresh lungo. Tienile per dopo il terzo colpo di **W** — l'auto empowerato subito dopo il proc dà la finestra di burst massima. Castare **E** a casaccio su una wave di creep spreca il tuo danno in combattimento.
- **Buildare full damage quando sei dietro.** Quando sei 0/3 e non snowballi (snowball = vantaggio crescente che si autoalimenta), Sterak's più Sundered Sky ti tengono utile come engage. Fare Voltaic Cyclosword second su una partita persa ti rende un dive bot da 2 colpi che muore prima di raggiungere il carry.

## Suggerimento avanzato

Usa Flash + **R** come cancel difensivo contro minacce single-target di lock-on. Se vedi cadere la shadow di Zed su di te o la **W** di Talon in volo, **R** sulla sorgente nell'istante in cui parte l'animazione: il dash di Vi è unstoppable, quindi diventi unselectable per quell'abilità e arrivi sul carry nemico invece di morire nella tua jungle. Il trucco dipende dai tempi di reazione e dal fatto che la **R** non si interrompe — la maggior parte dei giocatori si dimentica che puoi usare un ulti di lock-on come uscita d'emergenza. Tieni il Flash per dopo il dash, così riposizioni quando arrivi.
