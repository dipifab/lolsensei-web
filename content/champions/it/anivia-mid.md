---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "it"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Guida ad Anivia mid lane su League of Legends Patch 16.9: starter kit, build da control mage, matchup chiave, power spike, errori tipici e una tip finale."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "Quando subisce danno letale, Anivia diventa un uovo immobile per qualche secondo. Se l'uovo sopravvive, rinasce a HP pieni. Cooldown lungo — non baitarla due volte nello stesso fight."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Skillshot lineare a lungo raggio: una sfera di ghiaccio rallenta i nemici lungo la traiettoria; a fine corsa esplode e stunna. Ricasta per detonarla prima."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Evoca un muro di ghiaccio invalicabile per pochi secondi. Blocca ogni movimento (anche il tuo) e i dash che lo attraversano."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Esplosione mirata a corto raggio. Infligge danno doppio se il bersaglio è Chilled da Q o da una R fully formed."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Toggle a terra: tempesta di ghiaccio che rallenta e ticka danno magico. A regime applica Chill, così E fa danno doppio dentro l'area."
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Akali, Diana) — la stasi copre il gap finché R non torna su"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro magic CC singolo bersaglio (Ahri charm, Lissandra R, Twisted Fate stun) che interrompe la R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro comp con tanto sustain (Soraka, Vladimir, Aatrox) — R applica grievous wounds in area"
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena un priority target completa il primo item di Magic Resist"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Landa la Q a max range per applicare Chill, poi E per il danno doppio, poi piazza R sotto i loro piedi così chi è rallentato becca un'altra E empowered. Wall (W) il resto del team fuori così la kill non viene interrotta."
  weakness: "Lenta, no dash, base armor bassa, mana hungry early. Se sbagli la Q il trade è morto e i diver ti raggiungono prima che R sia fully formed. Wind Wall e silence rovinano tutto il kit."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Q + W intrappolano i mage immobili: non possono schivare il chill in E doppia, e non hanno modo di girare attorno al wall quando lei spezza la wave."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize blocca ogni linea di engage melee; con E per shovare e R per pulire wave, lei farma in sicurezza mentre loro non la raggiungono senza burnare Flash."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize spezza in due l'engage avversario: se il muro va tra l'iniziatore e il follow-up, il wombo cade su uno o due bersagli, non su cinque."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Entrano nel suo cast range mentre lei sta lanciando E; non ha dash e l'uovo è uno solo, quindi una catena di dash la bursta prima che R sia formata."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall blocca la Q (il chill non arriva) e la principale minaccia di danno crolla: senza chill la E dimezza, e il matchup diventa un melee fight che lei non vince."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Out-rangeano la Q in ogni fase di lane e pokeano da fuori del suo threat range; lei non ha mobilità per chiudere il gap o punire i loro cooldown."
---

## Panoramica

Anivia è una control mage a lungo raggio con due barre HP, una ulti AOE lenta ma devastante, e l'unico muro invalicabile del gioco. Il suo kit punisce errori di posizionamento: **Flash Frost (Q)** applica **Chill** (uno status di rallentamento speciale su cui ruota tutto il resto del kit), **Frostbite (E)** raddoppia il danno sui bersagli Chilled, e **Glacial Storm (R)** tiene tutti slowed dentro l'area. Scambia mobilità per utility — niente dash, ma **Rebirth (P)** le dà una seconda vita ogni volta che l'uovo sopravvive.

Il game plan in mid è semplice da spiegare e brutale da eseguire: shovi (spingi la fila di minion dentro la torre nemica) la wave con **R** + **E**, colpisci river o jungle con un combo **Q-E** attraverso la fog quando un nemico ci si infila, e usi **Crystallize (W)** per spezzare l'engage (il momento in cui inizia un teamfight) o salvare un alleato dai dive (champion che ti saltano addosso per burstarti — burst = danno alto concentrato in 1-2 secondi). A ogni rank vinci anche partite che nessun altro mid riesce a tenere — una **R** fully formed (al massimo della grandezza) è un muro di danno magico costante.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Anivia è mana hungry early e ha bisogno dell'AP e del mana regen per lanciare due **Q** a wave senza svuotare la barra.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (potenziamento del tuo danno concentrato) e mana sustain. Ti permette di lanciare **Q-E** senza guardare la barra.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (taglia una quantità fissa della MR nemica) per amplificare il danno doppio della **E** sugli squishy (champion con poche difese, tipicamente ADC e mage).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplica l'AP, alzando lo scaling (quanto un champion diventa più forte ad ogni item e livello) del burst già forte fino a soglia one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra più una HP-threshold passive (passiva che si attiva quando il bersaglio scende sotto ~35% HP) che si allinea con i finisher in **E**.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Akali, Diana). La stasi (un breve freeze invulnerabile) ti dà tempo finché **Glacial Storm** non torna su.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC pesante a singolo bersaglio (Ahri charm, Lissandra R, Twisted Fate stun) che interromperebbe il toggle della **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni con tanto sustain (Soraka, Vladimir, Aatrox). I tick costanti della **R** applicano grievous wounds (debuff che taglia la cura ricevuta) su un'area larga.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — comprala appena un priority target (il bersaglio prioritario, di solito il carry o il mage avversario) completa il primo item di Magic Resist (MR — la statistica difensiva contro il danno magico). Il danno di Anivia crolla contro l'MR se aspetti troppo.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è accettabile solo se la tua squadra ha bisogno di più uptime sulla **R** (cioè di averla pronta più spesso) negli skirmish (scontri 2v2 o 3v3 fuori dal teamfight principale).

**Skill order:** Maxa **E** per primo — è il tuo vero bottone di danno, doppio sui Chilled. Maxa **Q** per seconda (slow + stun più lunghi), **W** per ultima. Punto in **R** ai livelli 6, 11, 16. Prendi comunque **W** al livello 3 anche se la maxi per ultima: un solo rank del muro ti salva la vita o spezza un engage.

**Runes:** Primaria **Sorcery** con **Arcane Comet** (un proiettile gratis di danno che cade quando colpisci un nemico con un'abilità), **Manaflow Band** (mana gratis ogni volta che colpisci un nemico con uno skillshot), **Transcendence** (riduzione cooldown), **Scorch** (un piccolo burn extra sulla prima abilità che ti colpisce un nemico). Secondaria **Inspiration** con **Biscuit Delivery** (potion gratuite in lane) e **Cosmic Insight** (riduzione cooldown extra sui summoner spell, tipo **Flash**). Comet è la singola runa più redditizia in danno per Anivia: ogni **E** Chilled la triggera all'impatto.

## Matchup chiave

- **Yasuo:** Può Wind Wall (un'abilità che blocca i proiettili per qualche secondo) la tua **Q** e anche il proiettile della **E**. Tieni entrambe finché lui non spreca Wind Wall sui minion. Piazza la **W** verticale tra lui e i suoi minion quando prova l'all-in (uno scambio totale fino alla kill) — perde la finestra di Wind Wall sia per il muro sia per il chill.
- **Zed / Akali:** Minacce di dive. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** se sono avanti. Piazza la **R** sotto i tuoi piedi quando entrano — devono combattere dentro la tua tempesta se vogliono la kill.
- **Veigar:** Matchup pari, deciso da chi roama (lascia la lane per aiutare un alleato altrove) per primo. Tu pulisci meglio la wave pre-6 grazie alla **R**; puniscilo shovando e aiutando bot lane mentre lui sta ancora farmando sotto torre.
- **Xerath / Vel'Koz:** Out-pokano il tuo range. Stai dietro ai minion, last-hitta (last-hit = colpisci il minion all'ultimo HP per prendere gold) con **E**, non spingere mai oltre la metà della wave a meno che il jungler non sia mid-side (posizionato nella metà di mappa vicina alla mid lane).
- **Annie:** Una mage da all-in telegrafato — il suo stun ha un tell (l'animazione visibile prima del cast, il segnale per schivare) lento e visibile. Pre-6, **W** sulla traiettoria di atterraggio di Tibbers per spezzare la combo stun + Tibbers. La passiva uovo ti salva da un singolo full burst; lei userà comunque l'ulti e ti regalerà un counter-engage gratis.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **E** puoi già chill-and-double-tap un avversario di lane che si avvicina troppo a un minion. Minaccialo ogni wave; è il trade (un breve scambio di colpi e abilità in lane, non una kill completa) su cui Anivia è costruita.
- **Livello 6:** Prima **Glacial Storm**. Da una delle mage più deboli al livello 5 a uno dei kit più forti per waveclear (la capacità di pulire le wave di minion velocemente) e zoning (impedire al nemico di stare in un'area minacciandolo con il danno) al 6. Shova subito la wave e cerca un roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minuto 12-14):** Una combo **Q-E** completa più il proc di Luden's (la passiva dell'item che si attiva automaticamente quando lanci una skill) one-shotta la maggior parte degli ADC e altri mage senza item MR. Forza fight su obiettivi in questa finestra.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** Il late game di Anivia decolla. Con **R** che ticka (piccoli colpi di danno ripetuti ogni frazione di secondo) e una **E** Chilled, anche i tank perdono fette di HP al secondo. Raggruppati con la squadra e lascia che la frontline (il ruolo dei tank/bruiser che stanno davanti e assorbono danno) faccia il lavoro per te.

## Errori comuni

- **Lanciare Q senza follow-up di E.** **Q** da sola è poke (danno piccolo a distanza per logorare l'HP del nemico senza impegnarsi in un fight) decente; **Q** poi **E** con il bonus chill-doppio è una vera minaccia di kill. Non usare **Q** solo per harass (poke fatto solo per dare fastidio e sottrarre HP) quando hai **E** off cooldown.
- **Murarti fuori dalla tua lane.** **W** è invalicabile per *entrambi* i lati. Piazzala parallela alla wave per peelare (peel = proteggere un alleato da chi gli salta addosso) un gank (ambush del jungler dalla fog), mai perpendicolare attraverso la tua via di fuga.
- **Toggle della R via troppo presto.** **R** non consuma mana una volta su — tienila attiva durante i fight, non panic-toggle appena la barra cala. Lo slow da solo vale già il mana.
- **Egg roulette.** La passiva Rebirth ha un cooldown lungo. Non "fidarti dell'uovo" facendo tower-dive (andare sotto la loro torre per uccidere) a HP bassi a meno che tu non abbia già fatto i conti: bastano pochi colpi per ucciderlo, e uno di quei colpi può essere la torre stessa.
- **Ignorare la W come strumento di peel.** La maggior parte degli Anivia pensa alla **W** solo come tool per chase, non come scudo per il team. Contro pick comp (composizioni che vincono catturando un giocatore fuori posizione), la **W** tra la tua back line (i carry che fanno danno da dietro) e una ulti di Malphite è una delle giocate difensive più forti del mid.

## Suggerimento avanzato

Usa la detonazione recast della **Q** come *strumento di vision*. La sfera di ghiaccio ha un raggio visivo largo sia in volo sia a esplosione: lanciala attraverso la fog of war (la parte di mappa fuori dalla vision della tua squadra) su una traiettoria probabile del nemico — per esempio, in mid-river prima di un drake fight (lo scontro per uccidere il drago, mostro obiettivo nel river di bot lane che dà bonus alla squadra che lo prende) — e ricasta subito al primo contatto. Concedi alla squadra mezzo secondo di vision e uno stun in un solo bottone. I migliori Anivia sostituiscono un ward (una sentinella piazzata che rivela una piccola area della mappa per un po') a fight con una **Q** detonata in fog: più economico, più rapido, e stunna l'engage.
