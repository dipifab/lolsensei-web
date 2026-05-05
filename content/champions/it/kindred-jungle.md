---
title: "Kindred Jungle Build & Guida — Patch 16.9"
slug: "kindred-jungle"
language: "it"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida Kindred jungle per League of Legends Patch 16.9: caccia ai Mark, build on-hit, matchup chiave, power spike, errori comuni e advanced tip finale."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "Ogni 4 minuti compare un Mark su un nemico random (champion o jungle camp). Ucciderlo dà uno stack permanente: bonus AS, AD e range degli auto-attack. È il game plan."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Dash breve + 3 auto-attack rapidi sui bersagli più vicini. Resetta il timer dell'auto. Usalo per clear, repositioning e per bufferare le catene di auto in fight."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf attacca un'area per ~8s, dà AS e rivela camp. Lamb accumula stack muovendosi e attaccando; al massimo carica un auto che la cura. Toggle per clear speed e sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot che slow il bersaglio. Dopo 4 auto su di lui, l'attacco successivo aggiunge danno basato sull'HP mancante. Tool di burst sui champion sotto il 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Crea una zona sacra: ogni unità dentro (alleati E nemici) non può scendere sotto 1 HP per la durata, poi heal alla fine. Save tool reactive. Mai precastato."
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs ulti single-target a lock-on (Malzahar R, Skarner R, Warwick R) — lo spell shield blocca il cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs catene di hard CC (Leona + Lissandra, Sett R + Ashe R) — l'attivo cleansa il lock e ti dà tempo di riposizionarti"
    - dd_id: "6676"
      name: "The Collector"
      against: "quando sei avanti e l'enemy team non ha early armor — execute sotto il 5% HP chiude i lead"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs comp con sustain alto (Aatrox, Soraka, Dr. Mundo) — applica grievous wounds tagliando le cure di circa metà nei fight estesi"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ champion con hard CC (es. Leona + Lissandra + Sejuani) — tenacity accorcia stun e root, continui ad auto-attaccare"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Stacka Mark presto. Ogni Mark completato dà AS + AD + range permanenti: il vantaggio fa snowball (kill → stat → altre kill) fino al flanker da 3 item che out-kite ogni brawler."
  weakness: "Squishy, niente hard CC, R reactive con CD lungo. Junglers con hard CC che invadono al level 2-3 (Lee Sin, Xin Zhao, Elise) ti uccidono prima dei Mark; tank con on-hit mitigation ignorano il tuo DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades fa partire 3 auto rapidissimi: esattamente le auto che servono per chiudere la catena di Mounting Dread. Sudden Impact premia il dash di Q con lethality, Sixth Sense rivela i ward nemici, Treasure Hunter trasforma i Mark kill in oro extra."
    secondary_rationale: "Precision come secondary: Triumph rimborsa HP sul takedown (rimani basso dopo aver committato 4 auto), Coup de Grace aggiunge l'8% di danno sotto il 40% HP — sinergia con il colpo HP-mancante della E."
    secondary_alternative: "Vs comp AP burst pesante (Diana jungle + Syndra mid + Brand support), swappa Precision → Resolve con Second Wind + Revitalize per sustain in jungle e una R che cura di più alla fine della zona."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Junglers e carry late-scaler con early debole"
      reason: "Vogliono farmare fino a 3 item prima di muoversi; tu puoi mark-huntare nella loro jungle e bullizzare i camp early. Ogni Mark completato allarga il gap prima che spikino."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Marksman backline squishy senza escape integrato"
      reason: "Gank cross-map: la E slowsa abbastanza da permetterti la catena di 4 auto e far scattare il colpo HP-mancante di Mounting Dread, e loro non hanno dash che spezzi la catena."
    - examples: ["maokai", "nasus"]
      archetype: "Tank lenti senza dash"
      reason: "Non riescono a chiudere la distanza su un Kindred che kite. Auto-attacchi da fuori range del loro CC mentre Wolf's Frenzy li chippa passivamente."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers da invade early con hard CC e lockdown"
      reason: "Entrano nei tuoi camp al level 2 con kick, knock-up o stun e ti uccidono prima che tu stacchi un solo Mark. Non hai dash che spezzi i lock-on e la R non è ancora disponibile."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut tank con mitigazione o immunità on-hit"
      reason: "Lo shield W di Sion e la passive heal di Mundo annullano il tuo DPS auto-attack — il tuo unico danno è on-hit, quindi tutto ciò che rompe quel loop ti neutralizza."
    - examples: ["zed", "talon"]
      archetype: "Burst assassins che ti deletano prima che la R copra"
      reason: "Sei squishy senza hard CC; ti killano nella finestra di 0.5s prima che parta il cast di Lamb's Respite. La R non blocca il danno, solo la morte — aspettano che finisca e re-engagano."
---

## Panoramica

Kindred è un marksman che caccia in jungle. Lamb tira frecce, Wolf morde, e tutto il kit ruota intorno a una meccanica che nessun altro champion ha: **Mark of the Kindred**. Ogni 4 minuti compare un Mark su un nemico random — un champion o un jungle camp — e ucciderlo dà uno stack permanente di attack speed, attack damage e range bonus degli auto-attack. Stacka 4 mark e il range fa un salto; stacka 8 e inizi a out-tradeare i marksman da fuori il loro stesso range di auto.

Il game plan si divide in due metà. Early game sei un **mark hunter**: leggi l'icona del Mark sulla minimap, decidi se contestarla (tuo = vai sempre, loro = scambi pressione per portarglielo via) e pieghi il tuo path attorno a lei. Mid game diventi un flanker — Q-dash dietro la backline avversaria (i carry che stanno dietro i loro tank), E sul carry, catena di 4 auto, e Mounting Dread esegue sul colpo HP-mancante. Late game sei uno skirmisher hyper-scaling che out-kite ogni brawler del gioco (kite = arretrare attaccando, così il nemico non ti raggiunge mai).

## Build Consigliata

**Starting items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** per un clear più veloce (sei ranged, devi prendere Hailblade — Emberknife è solo melee) e ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade da Hailblade (auto-evolve verso il minuto 3-4 una volta accumulata abbastanza XP). Companion per AD skirmisher: breve burst di movement-speed uscendo dal cespuglio, perfetto per inseguire un Mark o chiudere un gank dalla fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — ogni terzo basic attack fa true damage bonus. Il true damage ignora l'armor, quindi sfonda le itemizzazioni dei tank che altrimenti non riusciresti a shreddare.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots di attack speed flat. Default; passa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo se l'enemy team ha 3+ hard CC.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — aggiunge due frecce extra ad ogni auto. Triplica la velocità di clear in jungle e in teamfight spalma il DPS Wolf-and-Lamb su 3 bersagli.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit (danno magico extra aggiunto ad ogni basic attack) + magic resist. Doppio uso: lifeline contro AP burst (Diana, Syndra, Brand) e shred contro backline a basso magic resist.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — range bonus sul colpo energizzato, sopra il range che già stacchi dai Mark. Late game auto-attacchi i carry da bordo schermo mentre il loro team insegue niente.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs ulti single-target lock-on (Malzahar, Skarner, Warwick). Lo spell shield mangia il cast e la catena non parte.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs catene di hard CC. L'attivo cleansa ogni CC inclusa la suppression — premilo l'attimo che Skarner ti pulla o Sett R ti scaraventa.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — quando sei avanti, esegue sotto il 5% HP. Si combina pulito con il colpo HP-mancante della E e dà oro bonus sul cadavere.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs comp con sustain alto (Aatrox, Soraka, Dr. Mundo). Applica grievous wounds tagliando le loro cure di circa metà nei fight estesi.

**Boots:** Berserker's Greaves di default. Mercury's Treads solo vs hard CC pesante.

**Skill order:** Maxa **Q** per primo (clear speed e danno per dash), **E** per seconda (più burst sul colpo HP-mancante per rank), **W** per ultima (l'AS e la heal scalano bene a rank 1). **R** a 6, 11, 16.

**Runes:** Primary **Domination** con **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Secondary **Precision** con **Triumph** + **Coup de Grace**. Hail of Blades è iconica su Kindred perché porta i primi 3 auto al massimo dell'attack speed — esattamente le auto che ti servono per partire la catena di Mounting Dread.

## Matchup chiave

- **Lee Sin:** Perde il level 1 contro di te, ma al level 2-3 il combo Q-W-Q-kick ti delete prima che abbia la R. Evita la sua side fino al level 4, poi cerca un counter-gank quando committa Q senza W pronta. Tracka il CD di W — senza non ha modo di uscire da un fight.
- **Karthus:** Pure scaler. Invade la sua red side al minuto 3 e rubagli un buff; non può fermarti, e la perdita di tempo ritarda il suo spike level 6. Dopo 3 item lui vince, quindi chiudi prima del minuto 18.
- **Master Yi:** Da uccidere prima che faccia ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**. Tieni la E per la finestra di uscita del suo Q-dash — quando riappare prende lo slow e il tuo team chaina CC. Dopo il primo item, niente 1v1.
- **Diana:** Lei vuole divare la tua backline; tu vuoi divare la sua. Tieni la **R** per quando atterra la sua R sul tuo carry — la zona sacra mantiene il carry sopra 1 HP attraverso il burst, poi il tuo team la uccide nella finestra di recovery.
- **Xin Zhao:** Knock-up + lock-down ti uccide in 1.5 secondi. Mai pathare adiacente ai suoi camp al level 2; raggruppati con un laner per i buff finché non hai 2 Mark di range bonus. Dopo 3 item out-kite con i reset di Q.

## Power spike & condizioni di vittoria

- **Level 3:** Kit completo. La pattern di gank è **E sul bersaglio -> 3 auto con Q-dash a metà -> 4° auto fa scattare il burst HP-mancante**. Senza R, non committare profondo a un gank level 3 — solo a Flash-distance.
- **Primo Mark stack (~ minuto 5):** AS, AD e range bonus permanenti. Ogni Mark completato dopo allarga il gap. Combatti per i Mark anche se sono neutri — il vantaggio statistico è più grande di un singolo trade (uno scambio breve di colpi in skirmish).
- **Level 6:** **Lamb's Respite** unlocked. Da qui puoi salvare un compagno da una kill garantita. Il trucco è **mai pre-castare** — droppi la zona l'attimo che vedi il nemico committare la spell di kill, altrimenti la zona finisce prima che la threat si risolva.
- **3 item + range bonus 4-Mark (~ minuto 22):** Out-rangi ogni marksman del gioco. In teamfight stai dietro la frontline, fermo, e auto fino a quando tutto muore. Questo è il tuo cliff di scaling — raggruppati col team, non splitpushare (non farmare una side lane da solo).

## Errori comuni

- **Pre-castare Lamb's Respite.** **R** è reactive, non proactive (la piazzi DOPO aver letto la threat, non prima). Droppi l'attimo che la spell ulti nemica colpisce, non quando si avvicinano e basta. Le R precastate non salvano nessuno e ti tolgono l'unico save tool per 110 secondi.
- **Ignorare l'icona del Mark.** La minimap mostra il Mark con un piccolo teschio. I giocatori che non lo trackano perdono l'intera identità del champion. Apri la mappa ogni 30 secondi e chiediti: "il Mark è mio da prendere o loro da negarmi?"
- **Q-dashare nel team nemico senza via d'uscita.** **Dance of Arrows** ha 12 secondi di CD a rank 1. Se Q in per chase una kill e ti CCano, non hai escape. Q sempre con un muro dietro la traiettoria del dash così la prossima Q (dopo il CDR) ti bouncia fuori.
- **Dimenticare il requisito 4-auto di Mounting Dread.** **E** fa poco danno on-cast ma il payoff vero è il 4° auto sul bersaglio slowsato. Se E e poi piazzi solo 2 auto, il burst HP-mancante non parte. Committa alla catena completa o non castare E.
- **Tenere la R per il momento perfetto che non arriva mai.** Una R "sprecata" che salva un alleato per 3 secondi è meglio di una R perfetta che non premi mai perché l'hai tenuta troppo. Nel dubbio, droppala.

## Suggerimento avanzato

L'**R-bait** sugli obiettivi. A Drake o Baron con il tuo team a basso HP, droppi **Lamb's Respite** SULL'obiettivo invece che sul tuo team. Ogni unità dentro non può scendere sotto 1 HP — incluso l'obiettivo. Il tuo team smita o finisce l'obiettivo durante la zona, e ogni nemico che entra non può ucciderti, quindi o lascia il contest o si fa beccare quando la zona finisce e il tuo team è full HP grazie alla heal coda della R. Trasforma un Drake fight 50/50 in un obiettivo + double-kill garantito quando l'enemy team non legge la giocata.
