---
title: "Karthus Jungle Build & Guida — Patch 16.9"
slug: "karthus-jungle"
language: "it"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida Karthus jungle League of Legends Patch 16.9: smite path, clear con Defile, R globale, matchup chiave, power spike, errori comuni e tip avanzato."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "Quando muore, Karthus entra in forma spirito per 7 secondi e continua a lanciare Q/W/E senza costo di mana. Gli permette di chiudere un fight da oltre la tomba."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Blast a target su area con piccolo delay. Infligge danno doppio se colpisce un solo nemico. Skill expression: predire il movimento e isolare il bersaglio."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Muro largo che riduce magic resist e rallenta chi lo attraversa. Si usa come strumento di chase, lock per gank, o peel sui diver che entrano nella back line."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle che crea un'aura di danno magico al secondo intorno a Karthus, drenando mana finche e attiva. E il vero motore del clear in jungle e della DPS in teamfight: tienilo on durante ogni camp."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Ultimate globale con channel di 3 secondi che infligge danno magico pesante a tutti i champion nemici sulla mappa. Snipe cross-map e cleanup post-mortem."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro jungler invade early (Lee Sin, Xin Zhao, Elise) — la stasi copre l'assenza totale di mobilita mentre il team ruota in soccorso"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando un priority target compra il primo item magic resist (Mercury's Treads contano)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro engage di magic CC singolo bersaglio (Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni con healing stacking (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Arriva a livello 6, full-clear piu veloce del jungler nemico, e usa R per finire i target a basso HP cross-map. Dopo due item ogni teamfight 5v5 e tuo: la sola Defile cancella la back line."
  weakness: "Niente dash, niente escape, zero dueling early. Counter-jungled o invaso prima del livello 6 resti indietro tutta la partita. Mobili e jungler con CC pesante rompono il clear pre-Liandry's."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror si stacka su Defile (toggle aura che ticka danno al secondo), trasformando ogni skirmish in AP bonus e healing. Triumph rifonde HP sui takedown. Legend: Haste accorcia R. Last Stand premia la spirit form a basso HP."
    secondary_rationale: "Sorcery secondary: Manaflow Band risolve la mana starvation early causata da Defile che drena mana ogni secondo. Transcendence porta l'ability haste oltre il cap del 40% perche Q torni piu veloce tra le wave e R ruoti piu spesso."
    secondary_alternative: "Contro jungler nemici da invade pesante (Lee Sin + roam Pyke, Elise + support con CC early), swap Sorcery a Resolve con Second Wind (HP regen dopo aver subito danno, aiuta a sopravvivere all'invade di livello 3) e Overgrowth (HP bonus che scala con i monster uccisi)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-game scaler con presenza early debole"
      reason: "Hanno bisogno di 25+ minuti per arrivare online; Karthus vince gia gli skirmish a livello 6 e usa R per negare le loro Baron solo. Out-tempo: forza drake e chiudi prima che hittino il loro power spike."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Jungler farm-heavy lenti senza invade level 3"
      reason: "Full-clearano alla stessa velocita di Karthus, ma Karthus ha la R globale che trasforma il loro gank in uno scambio 2-for-1: anche se uccidono il tuo laner, R fa cleanup del loro cross-map prima che riescano a recall."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline scaler senza mobilita"
      reason: "La R cross-map trasforma i loro errori di posizione in kill sugli objective spawn. Contribuiscono da lontano ma non possono schivare uno snipe globale lockato su una flash o ulti mancante."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Jungler early-game da invade con CC duro"
      reason: "Entrano nella jungla di Karthus a livello 2-3 prima che Defile scali in mana. Karthus non ha escape, niente dash, e la Q e troppo lenta per salvarlo da una catena Lee Sin Q + W o da un rappel Elise. Un invade andato male gli rovina la partita."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Assassini stealth o burst dalla jungle"
      reason: "Aprono con isolation damage su un bersaglio a difese zero; anche Zhonya's Hourglass ritarda solo l'inevitabile in 1v1. Karthus muore prima di stackare Conqueror o di poter contrattare in modo significativo."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-deny ganker e tracker jungler"
      reason: "Nocturne R taglia la vision del team, Karthus non vede l'engage sulla sua back line; il blood tracking di Warwick trasforma una R cross-map in un dive su un bersaglio in channel. Karthus ha bisogno di vision per channellare R in sicurezza, e questi due la tolgono."
---

## Panoramica

Karthus jungle e il prototipo dell'**apex jungler**: un champion con il tetto piu alto della categoria e uno dei pavimenti piu bassi. Il kit ruota intorno a due idee. **Defile (E)** e una toggle aura che ticka danno magico al secondo intorno a Karthus mentre drena mana, ed e il motore del clear: risolto il problema mana, full-clearia piu veloce di quasi qualsiasi altro champion. **Requiem (R)** e una ultimate globale che colpisce ogni champion nemico sulla mappa, e trasforma errori di posizione altrove in kill — la cosa piu preziosa che un jungler possa fare al momento giusto.

Il game plan e rigido. Full-clear dei primi tre camp (red → krug oppure blue → gromp a seconda del side) con **E** toggled on, recall per i componenti di **Liandry's Torment**, dal livello 6 cerchi target R cross-map mentre skirmishi (uno "skirmish" e uno scontro breve tra 1-3 giocatori per parte, di solito intorno a un camp o un objective di river) intorno a drake e grub (i piccoli mostri neutrali nel pit del void che danno gold e un buff al team). Senza escape ne dash, ward sugli ingressi della tua jungle al minuto 1:30 non e opzionale. Il payoff e il post-6: Karthus e uno dei pochi champion piu pericoloso da morto che da vivo, perche **Death Defied** lo tiene a castare per 7 secondi dopo gli HP a zero.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default per jungler ranged — da il smite-pet che velocizza il clear e fornisce gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Hailblade (auto-evolve intorno al minuto 3-4 una volta accumulata abbastanza XP in jungle). Companion default per jungler AP burst: aggiunge un proc di danno magico sulla prossima auto-attack dopo aver lanciato un'ability (un "proc" e un effetto passivo che si attiva da una condizione — qui, lanciare una qualsiasi ability arma la prossima auto). Si lega bene al danno di Q sui bersagli isolati.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. Il burn percentuale sugli HP punisce le pool HP degli objective (drake, baron, herald) e si stacka sopra ogni tick di Defile. E l'item che ribalta la velocita del clear e ti permette di contestare drake dal minuto 8 in poi.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, il power spike piu economico tra i core item.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — lo slow su ogni hit di spell chiude il difetto piu grande di Karthus (no chase, no escape). Ti permette di restare attaccato a target kitati cosi Defile stacka Conqueror, e trasforma il post-mortem in un cleanup garantito.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — rivela i nemici colpiti da abilita a lungo raggio e aggiunge un moltiplicatore di danno. Si sposa con Q e Wall of Pain a long range, e la reveal aiuta a lockare R globali attraverso fog of war (la zona non rivelata fuori dalla vision del tuo team).
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot di scaling late game. Compralo per ultimo, a meno di essere 4+ kill avanti, in quel caso anticipalo per snowball ("snowball" = vantaggio iniziale che cresce: kill → gold → item → altri kill).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver early game (Lee Sin, Xin Zhao, Hecarim, Diana). La stasi e l'unica risposta che Karthus ha quando una catena di dash supera la front line (i tank e bruiser davanti che normalmente assorbono i colpi al posto tuo). Permette anche di castare R in stasi.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — nel momento in cui un priority target compra il primo item magic resist. Le ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (le boots magic resist) contano come quel primo item MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro engage di magic CC telegrafato (Ahri R, Lissandra R, Nautilus hook). Lo shield blocca la prima ability cosi non vieni one-shottato prima di poter castare R.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni con healing stacking (Soraka, Vladimir, Yuumi, Dr. Mundo). Il Grievous Wounds dimezza l'healing nemico cosi il danno di Defile attecchisce davvero.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sono il default. Swap a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se il team nemico ha 3+ minacce di hard CC su danno magico.

**Skill order:** Maxa **Q** per prima (il tuo single-target burst e waveclear, e l'unica ability che scala forte con il rank), **E** seconda (alza il danno al secondo di Defile e sostiene il drain mana), **W** per ultima. Metti un punto in **R** ai livelli 6, 11 e 16.

**Runes:** Primary **Precision** con **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**.

## Matchup chiave

- **Lee Sin:** Perdi ogni 1v1 prima del livello 6. La sua catena Q + W salta il delay della tua Q. Evita skirmish solitari pre-6, full-clear invece, e ward su entrambi gli ingressi della tua jungle al minuto 1:30.
- **Master Yi:** Counter netto in 1v1 dopo Wit's End. Forza il fight 5v5 in fiumi stretti (drake pit, baron pit) dove il W-cleanse non lo salva da una sequenza Defile + R prolungata. Compra Zhonya's Hourglass come secondo item se prende ritmo.
- **Karthus mirror:** Decisa dal tempo di farm e dalla disciplina su R. Chi full-clearia un camp avanti a livello 6 vince la prima R race. Non sprecare la R se non per garantire una kill o uno smite — una R sprecata mette il Karthus mirror un minuto avanti sul controllo objective.
- **Hecarim:** Matchup pari. Ti sovrasta in chase ma raggruppa per Defile in teamfight. Wall of Pain sulla traiettoria di carica lo rallenta fuori dal suo stesso engage, e il post-mortem fa cleanup se ti uccide comunque.
- **Sejuani / Amumu:** Favorevole. Engagiano raggruppando il team nemico in uno stack — esattamente la forma che Defile vuole. Engage sull'engage: se ulano dentro il tuo team, entri con E toggled e guardi ogni nemico in fiamme sciogliersi.

## Power spike & condizioni di vittoria

- **Livello 6 (R sbloccata):** Primo power spike globale. **Requiem** trasforma qualsiasi nemico cross-map a basso HP in una kill. Da questo punto in poi, ping il mid laner nemico prima del recall e ulta sul suo channel di recall — kill gratuita a rischio zero.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 9-11):** Il clear speed si ribalta e la DPS sugli objective (DPS = damage per second, qui contro le pool HP di drake/baron/grub) raddoppia. Da qui in poi devi essere tu a iniziare i drake fight, non a reagire.
- **Due item + boots (~ minuto 18-22):** Defile da sola ticka per danno serio; in ogni fight raggruppato Conqueror si stacka veloce e R locka il cleanup. E la finestra di skirmish piu forte.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** R one-shotta i squishy che non hanno costruito un singolo item magic resist. Forza objective fight raggruppati — Baron, Soul Drake, Atakhan ("Atakhan" = un boss neutrale late-game che spawna intorno al minuto 14; tratta lo spawn come un 5v5 forzato).

## Errori comuni

- **Andare in panic con Death Defied.** La maggior parte dei novizi spreca i 7 secondi post-mortem scappando dal cadavere. Il play corretto e engagiare in un fight a basso HP sapendo che morirai: la morte inizia la rotation di danno, non la chiude. Q-Q-Q-E in spirit form fa spesso piu danno di quanto avresti fatto da vivo.
- **Lanciare Q a caso.** Lay Waste fa danno doppio su un singolo bersaglio isolato. Se spari Q in una wave con tre minion piu il laner, il danno cappa al valore basso. Tira il laner fuori con W o aspetta un singolo bersaglio esposto, poi Q sul punto previsto.
- **Castare R per il kill steal.** Ulta in mezzo al teamfight e sprecata: ogni nemico e gia dentro Defile. Tieni R per snipe cross-map (uso di R come finisher a distanza e a rischio zero su un nemico mancante a basso HP dopo un fight) o per cleanup post-mortem. R e "after-the-fight", non "during-the-fight".
- **Saltare la vision nella tua jungle.** Piazza Stealth Ward su tri-bush e pixel brush al minuto 1:30. Karthus non ha escape; un invade non visto e una kill gratuita per un jungler mobile.
- **Smite-greedare gli objective senza R.** Drake e grub hanno HP scalati; lo smite no. Senza R off cooldown contro un jungler che ce l'ha, perdi la smite war e il drake.

## Suggerimento avanzato

Allena il **suicide engage**. Quando il team commita un 5v5 che non puoi vincere a viso aperto, cammina con Karthus dentro la back line nemica con Defile toggled, aspettandoti di morire. L'istante in cui gli HP arrivano a zero, Death Defied ti regala 7 secondi di cast gratis senza costo mana — e la front line nemica smette di colpire il cadavere perche non c'e nulla da hittare. In quella finestra di spirit form Q-spammi il nemico a HP piu basso che raggiungi e finisci con R chi scappa. Fatto bene, un Karthus che muore per primo trasforma un fight non vincibile in un ace.
