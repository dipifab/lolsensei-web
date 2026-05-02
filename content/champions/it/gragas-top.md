---
title: "Gragas Top Build & Guida — Patch 16.9"
slug: "gragas-top"
language: "it"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Guida Gragas top lane per League of Legends Patch 16.9: starter kit, build AP bruiser, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lanciare una qualsiasi abilità cura Gragas per un piccolo ammontare (cooldown interno di 5 secondi). Sustain gratis in lane che gli permette di vincere i matchup di poke nel lungo periodo."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rotola un barile a un punto. Rilancia per detonare, oppure esplode dopo 4 secondi. Danno e slow scalano col tempo di carica — aspetta il picco prima di detonare per i trade in lane."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel di 1 secondo che dà 30% damage reduction per 3 secondi e potenzia la prossima auto-attack con danno magico bonus. È il principale strumento di trade in lane."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash che si ferma sul primo nemico colpito, infliggendo danno AOE e stunnandolo per 1 secondo. È il tuo gap-close, escape e unico hard CC — non usarlo mai per pulire una wave."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lancia un barile che spinge i nemici via dal centro dell'impatto. In top, si usa per buttare un top laner dentro il gank del tuo jungler o per peelare un tower-dive."
      dd_spell_id: "GragasR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini AD o duelist da split-push (Camille, Fiora): la stasi nega la finestra di execute dopo il loro dash su di te"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Lissandra R, suppression di Malzahar): lo spell shield blocca la lockdown che spezzerebbe l'engage"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro lane AD-heavy (Renekton + Kha'Zix, Aatrox + Lee Sin): riduzione di danno fisico vale più della tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contro comp che impilano cure (Aatrox, Vladimir, Dr. Mundo): magic pen più area di healing-reduction sull'attivo"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Out-sustain i bruiser melee in lane con Happy Hour e damage reduction della W; arriva a Riftmaker verso il minuto 13, poi cerca un flip di R nel gank del tuo jungler per snowballare una tower o ribaltare un Drake fight."
  weakness: "Artillery a lungo raggio e top laner ranged (Vayne, Quinn, Teemo, Kennen) ti pickano fuori dal range della Q. Senza E disponibile non hai engage né escape — committare E per harass equivale a buttare la lane."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria invece di Sorcery: Gragas trada in melee e deve vincere HP, non massimizzare il burst. Aftershock dà resistenze quando Body Slam applica lo stun. Demolish converte un back forzato in piastra di tower, Conditioning e Revitalize lo tengono tanky in late."
    secondary_rationale: "Sorcery secondaria: Manaflow Band sostiene il mana per spammare poke con Q per tutta la fase di lane, e Transcendence porta l'Ability Haste oltre lo spike di Cosmic Drive per cooldown più corti su E e R nelle side lane di mid-game."
    secondary_alternative: "Contro top laner ranged (Vayne, Teemo, Quinn) dove il sustain in lane conta più del danno, swap Sorcery secondaria verso Inspiration con Biscuit Delivery (pozioni gratuite) e Time Warp Tonic (sustain da pozioni più Movement Speed) per una build healing-sustain."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruiser melee senza dash"
      reason: "Devono camminare avanti per last-hittare; il poke Q-W-AA di Gragas li chippa fuori dalla finestra di all-in, e il damage reduction della W indebolisce il loro commit pre-6 rispetto al counter-trade di Gragas."
    - examples: ["kennen", "vladimir"]
      archetype: "Top laner AP squishy"
      reason: "Il damage reduction flat di Drunken Rage assorbe il combo stun-burst di Kennen e il poke Q di Vladimir. Gragas può rispondere con E-AA-Q mentre le loro risorse sono spese nello scambio."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Mage da skill-shot e channel"
      reason: "Body Slam interrompe il wind-up della Q di Mordekaiser e il combo channel di Ryze, poi Gragas esce con il damage reduction della W. Entrambi perdono priorità di lane appena il loro cast cycle si rompe."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top laner ranged"
      reason: "Auto-attaccano Gragas da fuori il range della Q e camminano via dal commit della E. Senza modo di chiudere il gap ripetutamente, Gragas viene chippato a metà HP prima del livello 3 e costretto a basare."
    - examples: ["fiora", "camille"]
      archetype: "Bruiser con true damage e pressione execute"
      reason: "I vital di Fiora fanno true damage che ignora le resistenze di Gragas; la R di Camille lo isola per un execute true-damage percentuale. Le stat tanky di Gragas non si traducono in survival in 1v1 contro nessuno dei due."
    - examples: ["malphite", "ornn"]
      archetype: "Top tank da hard-engage"
      reason: "La loro CC concatena per più tempo della finestra di Aftershock. Pareggiano l'engage di Gragas col loro e lo superano in scaling fino al late grazie agli steroidi di resistenze integrati nel kit."
---

## Panoramica

Gragas top è un AP bruiser (un fighter che costruisce AP per il danno ma stacka HP e resistenze per sopravvivere ai dive) che vince la lane attraverso poke (chip damage a distanza sicura) e sustain (cura passiva durante i fight), poi transita in un ruolo da engage da teamfight intorno a **Explosive Cask (R)**. **Happy Hour (P)** gli dà cura passiva ogni volta che lancia un'abilità, quindi un pattern di trade Q → W → AA (auto-attack) dissangua il laner avversario senza dissanguare Gragas. **Drunken Rage (W)** è una finestra di 30% damage reduction — il suo strumento più sottovalutato, perché gli permette di assorbire il commit di all-in (commit completo al danno) nemico e contro-tradare con uno stun gratis di **E**.

Piano partita: domina le lane melee con il poke di Q fino al livello 6, poi cerca flip di **R** che buttino il laner avversario nel gank del tuo jungler o sotto la tua tower. Da lì scala (cresci con item e livelli) con **Riftmaker** e **Cosmic Drive**, raggruppa al minuto 25, e fai da engage primario per il team (il campione che inizia il fight). Evita i matchup ranged — se sei in uno, gioca passivo, farma sotto tower con Q, e chiama il jungler.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Starter standard di sustain che ti permette di tankare il poke di Q dei matchup ranged abbastanza a lungo da arrivare a Riftmaker.

**Item core (nell'ordine):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item AP da burn sostenuto con omnivamp (life-steal che funziona su tutti i tipi di danno, non solo sulle basic attack). I trade prolungati di Gragas trasformano questo nello spike single-item più forte del suo arsenale.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — la tenacity riduce la durata degli stun. Stivali di default in top lane perché la maggioranza dei matchup porta almeno una minaccia di CC (stun di Renekton, root di Camille, stun di Sett).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste più Movement Speed steroide dopo aver danneggiato un campione. Ti permette di girare intorno al fight e piazzare un secondo stun di **E** prima che il primo cooldown finisca.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste più burn magico percentuale sui max HP che rampa quanto più dura il fight. Quarto item contro qualsiasi team con due o più frontliner.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late game. Quinto item quando il team ha raggruppato e stai committando al burst da teamfight invece che allo splitpush.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini AD (Zed, flank di Talon) o duelist da split-push (Camille, Fiora). Attivalo subito dopo **R** per negare la finestra di execute.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (**R** di Lissandra, suppression di Malzahar). Lo spell shield blocca la lockdown che spezzerebbe il tuo flip di **R**.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contro lane AD-heavy (Renekton + jungler AD). Sostituiscono Mercury's Treads quando non c'è una minaccia CC importante.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contro comp che impilano cure. L'attivo dell'R apre una zona di healing-reduction collegata al tuo knockback.
**Stivali:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** di default. Swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** in partite AD-heavy, oppure ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** se la lane è da one-shot e vuoi passare a una build damage-first.

**Skill order:** Massimizza **E** per primo (stun e danno principale), **Q** per secondo (poke e waveclear), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchup chiave

- **Darius:** Cammina a last-hittare solo quando **W** è up; pokalo con Q prima di ogni wave di minion. Il suo all-in è brutale pre-6 — non lasciarlo mai concatenare E-Q dentro di te su un Aftershock-bait positioning.
- **Renekton:** Evita gli scambi di livello 1-2 dove il suo fury-stun snowballa il vantaggio HP. Pareggia al livello 3 col counter-engage **W-E**; appena committa lo stun della W, il tuo damage reduction assorbe il burst e tradate alla pari.
- **Vayne:** Hard counterpick (un campione scelto apposta per battere il tuo in lane). Gioca sotto tower con poke di Q, chiedi gank al jungler presto (livello 3-4), e pianifica il rush di ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** per mitigare le auto-attack potenziate dopo il suo dash (la sua Q le permette di rotolare e ricaricare il colpo della balestra).
- **Camille:** Evita gli 1v1 in side lane dopo che completa il suo primo item core (verso il minuto 11-13); la sua R ti isola (ti chiude dentro un muro lontano dagli alleati) per un execute percentuale. Raggruppa col team e forza teamfight dove ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nega la finestra di danno della sua R.
- **Malphite:** Pari pre-6, hard scaling post-6 perché la sua **R** pareggia la tua e lo stack di armatura assorbe il tuo AP. Roama a mid con flip di **R** quando la sua ult è down — è la tua unica finestra per ribaltare il matchup.

## Power spike & condizioni di vittoria

- **Livello 3 (E sbloccata):** Prima finestra di all-in. Con il damage reduction di **W** up e lo stun di **E** pronto, puoi punire qualsiasi nemico melee che cammina troppo avanti per last-hittare.
- **Livello 6 (prima Explosive Cask):** Power spike. Imposta un flip di **R** nel gank del tuo jungler — butta il top avversario dalla sua tower line dentro il tuo river side per una kill gratis.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Spike che ribalta la lane. Burn sostenuto più omnivamp trasformano i trade prolungati in HP guadagnato; forza un 1v1 se non sei in matchup counter.
- **3 item + stivali (~ minuto 24-28):** Picco da teamfight. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** più ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** più ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** rendono Gragas una minaccia da engage quasi inammazzabile. Raggruppa col team per gli obiettivi.

## Errori comuni

- **Usare E per pulire wave.** **E** è il tuo gap-close, escape, e unico stun. Se fai Body Slam su un minion per pushare, il laner avversario ha 14 secondi gratis per all-innarti. Usa **Q** per pushare le wave; **E** è solo per engage ed escape.
- **Lanciare R come danno di apertura.** **R** sparpaglia il team avversario. Se la lanci senza un piano di piazzamento, butti il laner avversario lontano dal tuo follow-up. Sempre visualizzare dove il target deve atterrare prima di premere **R** — buttalo nel tuo team o nella tua tower, mai nella frontline avversaria.
- **Tradare senza W pronta.** Ogni trade onesto di Gragas inizia con **W**. Senza la finestra di 30% damage reduction, ogni bruiser melee ti supera nello scambio. Se **W** è in cooldown, last-hitta e disengaggia.
- **Force-gankare da solo con R.** I flip di **R** dentro il team avversario senza follow-up del tuo team sono throw. Il barile ri-posiziona il target, ma Gragas da solo non può uccidere un carry a HP pieno — è un enabler per il tuo team, non un finisher da duello.
- **Massimizzare W invece di E.** **W** non dà a Gragas lo stun, il gap-close né la clear speed — **E** fa tutte e tre le cose. Massimizza **E** per primo ogni partita.

## Suggerimento avanzato

Allena il combo **R-Flash**: lancia **R** ai piedi del laner avversario, poi **Flash** durante il cast per ri-posizionare il centro del barile vicino al tuo team o alla tua tower. Il barile detona dalla posizione Flashata, quindi un target posizionato sulla sua tower line può essere flippato sotto la tua tower per una kill gratis. È la meccanica Gragas col più alto skill ceiling e merita reps dedicati in practice tool prima di provarla in solo queue ranked.
