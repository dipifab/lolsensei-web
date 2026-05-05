---
title: "Kog'Maw Bot Build & Guida — Patch 16.9"
slug: "kog-maw-bot"
language: "it"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Guida Kog'Maw bot lane League of Legends Patch 16.9: build hyper-carry on-hit, matchup chiave, power spike, errori comuni e una tip di posizionamento."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "Quando muore, Kog'Maw cammina come bomba per 4 secondi e poi esplode infliggendo true damage. Minaccia dell'ultimo respiro, mai un piano A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Proiettile lineare: danno magico e shred di Armor e Magic Resist del bersaglio per qualche secondo. Passiva: Attack Speed bonus permanente."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Auto-buff (~6s) che estende il range delle auto-attack e aggiunge danno magico in % di max HP on-hit. È il cuore del kit in teamfight."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Skillshot lineare: danno + scia che rallenta. Tool di disengage e setup per le auto-attack durante W."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "Artiglieria AOE a lungo raggio su area a terra. CD basso, costo mana che cresce a ogni cast. Poke, wave clear, execute cross-map sotto 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "contro bot avversari da poke pesante: estende il range della prima auto e ti fa colpire da fuori della loro finestra di poke"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro hard CC single-target che ti chiude fuori dalla W (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro comp da dive pesante (Malphite + Yasuo, Hecarim): la resurrezione trasforma un errore di posizione in due contributi al teamfight"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro frontline da 3000+ HP (Sion top, Cho'Gath, doppio tank): armor pen + W in % max HP scioglie i super-tank"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con sustain pesante (Soraka, Aatrox, Dr. Mundo): Grievous Wounds dimezza le cure per 5 secondi"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Sopravvivi al mid game dietro la front line, raggiungi il power spike a 3 item on-hit intorno al minuto 25, poi sciogli la squadra avversaria nelle finestre di W durante i fight per gli obiettivi."
  weakness: "Niente dash e range base auto-attack solo 500. Hooker, assassin e diver lo cancellano prima che la W rientri se il support è fuori posizione."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Lethal Tempo: stacca durante W superando il cap di 2.5 attack speed, ogni finestra W diventa un burst che squarcia i tank. Triumph cura sui takedown, Legend: Alacrity dà AS, Coup de Grace +8% danno sotto 40% HP — i bersagli che la R rifinisce."
    secondary_rationale: "Sorcery secondario: Transcendence alza l'ability haste (CD ridotto) per riavere W e R più spesso nei fight prolungati, Scorch aggiunge poke da R nei livelli 1-5 per rendere meno dolorosa la lane phase di un campione senza escape."
    secondary_alternative: "Contro support da hook o burst (Blitzcrank, Thresh, Pyke), passa Sorcery → Resolve con Bone Plating (cap di danno sui primi 3 hit dopo essere stato colpito) e Overgrowth (HP massimi bonus): perdi un po' di scaling ma sopravvivi fino al primo item."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "Tank e bruiser che impilano HP"
      reason: "Bio-Arcane Barrage fa danno magico in % di max HP su ogni auto: più vita accumulano, più velocemente li cancelli. Tank senza dash non hanno modo di punirti durante la finestra W."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Backline scaler immobili"
      reason: "Living Artillery (R) colpisce target a terra a range estremo. I backliner che devono restare fermi per la loro main spell vengono erosi da fuori schermo e non hanno tool di escape per ripicchiare."
    - examples: ["malphite", "amumu"]
      archetype: "Frontline da engage stazionario"
      reason: "Dopo la loro R, la tua squadra ha 2-3 secondi di fuoco libero — esattamente il tempo per un ciclo W completo sul frontline lockato prima che recuperi."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Support da hook con lockdown single-target"
      reason: "Kog'Maw non ha dash, blink o flash sulla E. Un hook in lane = una morte: l'unica escape è Flash, che è un summoner da 5 minuti di cooldown."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Bot lane da poke a lungo raggio"
      reason: "Il loro range auto-attack supera i 500 base di Kog'Maw senza W: ti picchiano gratis in lane e ti costringono a una early game povera di mana."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Assassin da roam"
      reason: "Questi campioni raggiungono la back line tramite dash, salti o reset in stealth. Una volta passata la tua front line durante una finestra W, nessun item difensivo a parte Guardian Angel ti salva in tempo."
---

## Panoramica

Kog'Maw è un marksman hyper-carry costruito attorno a una sola finestra breve e decisiva: il buff di **Bio-Arcane Barrage (W)**. Per circa sei secondi diventi l'auto-attacker dal range più lungo della mappa, ogni colpo fa danno magico in percentuale di HP massimi del bersaglio, e item on-hit come Wit's End e Blade of The Ruined King trasformano quella finestra in una tempesta che cancella i tank. Fuori dalla W hai un range base auto-attack di 500 — corto per un marksman — niente dash, niente blink. Il prezzo per essere un mostro late game è essere uno dei bersagli preferiti dei lane bully aggressivi nei primi quindici minuti.

Il game plan è lineare: sopravvivi alla lane dietro un support enchanter (Lulu, Janna, Yuumi, Soraka), farma con pazienza, raggiungi i tre item on-hit intorno al minuto 25, e gioca ogni teamfight da dietro la tua front line in modo che la finestra W resti incontrastata. **Living Artillery (R)** ammortizza il dolore della early game: dà poke gratis e clear delle wave da safe range; il costo in mana cresce in fretta se la spammi, quindi tienila per kill secure o gestione delle wave, non per harass.

## Build Consigliata

**Starting items:** Doran's Blade + Health Potion. Doran's Shield è accettabile contro un matchup da poke pesante (Caitlyn, Varus), ma Doran's Blade è il default per accelerare la rampa on-hit.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primo item: attack speed e proc di true damage al terzo colpo; sinergia diretta con la finestra W on-hit.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bonus attack speed; le uniche boots ragionevoli per un hyper-carry che vive sul cap di attack speed.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — danno magico on-hit + Magic Resist; è il singolo miglior item contro comp AP-heavy e amplifica il danno magico della W.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — i bolt applicano on-hit a due bersagli extra: trasforma la W in wave clear AOE e in pressione AOE da teamfight.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — danno on-hit in % HP corrente, lifesteal e attivo che rallenta; è il dueling tool che swappi a ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** se ti serve uno scudo invece del lifesteal.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — contro bot lane da poke pesante (Caitlyn, Varus). La prima auto energized estende il range effettivo W-auto: colpisci da fuori della loro finestra di poke.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro hard CC single-target che ti chiude fuori dalla W (Ashe R, snare di Morgana Q, suppression di Malzahar R). L'attivo cancella il CC con un tasto.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro comp da dive pesante (Malphite + Yasuo, Hecarim). La resurrezione trasforma un errore di posizione in due contributi al fight: esattamente quello che serve a un AOE damage dealer immobile.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro frontline da 3000+ HP. Armor pen + il danno magico in % max HP della W cancellano i super-tank più rapidamente di qualunque item da pura attack speed.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp da sustain pesante (Soraka, Aatrox, Dr. Mundo). Grievous Wounds dimezza le cure per 5 secondi: senza, il danno della W viene curato più rapidamente di quanto tu lo applichi.

**Boots:** Berserker's Greaves è l'unica scelta. Mercury's Treads è sbagliato su Kog'Maw — l'attack speed che perdi costa più della tenacity che guadagni.

**Skill order:** Maxa **W** per prima (è l'identità del kit), **Q** per seconda (shred di Armor e Magic Resist + passive attack speed), **E** per ultima (è solo utility). Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primario **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Sorcery** con **Transcendence** e **Scorch**, oppure **Resolve** con **Bone Plating** e **Overgrowth** contro support da hook o burst.

## Matchup chiave

- **Caitlyn / Varus:** Bot lane da poke a lungo raggio. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, sta dietro la wave, e farma sotto torre fino al livello 6. Chiedi al support ward su river e tri-bush; la loro pressione cala una volta completato ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**.
- **Draven:** Ti supera in qualunque all-in (scambio totale fino alla kill) pre-6. Pareggia il suo livello sulla lane priority, mai trade di auto in spazio aperto, e usa la **E** per rallentarlo se ti corre addosso. Le sue asce lo costringono a posizionarsi in avanti — punisci con il poke della **R** dopo il 6.
- **Lucian:** Evita i trade di auto-attack (la sua passiva double-shot vince i trade brevi). Avvicinati solo per last-hit e usa la finestra W dopo il minuto 8 per outrange-arlo di 100+ unità rispetto alla sua **E** dash.
- **Jhin / Senna:** Matchup safe. Nessuno dei due ha un dash e vogliono entrambi posizionarsi a lungo range, ma nessuno regge il burst in % max HP della tua W una volta che hai un item. Cerca l'all-in quando il support ha un CC pronto e la W è online.
- **Ezreal:** Skill matchup. Pokea con la **Q** ma ogni cast lo blocca fermo. Avvicinati durante l'animazione della sua **Q** per last-hit, tieni la **E** per quando lui usa la sua **E** dash così piazzi lo slow, e ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** è ottimo se la sua squadra ha follow-up CC dopo la sua R.

## Power spike & condizioni di vittoria

- **Livello 3:** Con un punto in ogni abilità hai il kit di poke completo (**E** rallenta → auto durante **W** → **Q** shreddi le resistenze). È la prima finestra credibile di all-in se il support ha un CC.
- **Livello 6:** La prima **Living Artillery** sblocca il poke a tutta lane e i last-hit secure da 1300+ unità. Sblocchi anche il wave clear da fuori river quando sei pushato.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves completati (~ minuto 14-16):** primo power spike serio in teamfight. Il proc di true damage al terzo colpo si combina con il danno % max HP della W per minacciare istantaneamente qualunque squishy entri nel range.
- **3 item on-hit online (~ minuto 25-28):** Con ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**, la finestra W cancella le HP bar di tutta la squadra avversaria in sei secondi. Forza Baron, Atakhan ed Elder Drake qui: è il momento attorno a cui la tua squadra deve giocare.

## Errori comuni

- **Usare W per ogni trade.** Ogni W bruciata in lane è una W che non hai per il prossimo teamfight. Tienila per all-in committati, scuttle skirmish, e fight per gli obiettivi, non per il poke; per il poke c'è la **R**.
- **Spammare R fino a finire la mana.** Ogni Living Artillery castata in pochi secondi costa più mana della precedente. Dopo 3 cast in 6 secondi paghi 100+ mana per shot. Fermati a 2 cast di fila a meno che non stia chiudendo una kill.
- **Restare al massimo range della W durante un fight.** Il massimo range ti porta fuori dal peel del support. Sta a una distanza pari a un'auto-attack dietro la tua front line, non sulla sua punta — gli assassin (qualunque campione che brucia un bersaglio in 1-2 secondi) ti puntano nel momento in cui spunti il cappello.
- **Pickare Kog'Maw senza un support enchanter.** Lulu, Janna, Yuumi e Soraka non sono preferenze — sono il contratto. Con un support da hook o engage non hai modo di sopravvivere alla lane phase e scali in un fight a cui non arriverai mai.
- **Dimenticare lo shred della Q.** Colpire **Q** prima della W su un tank taglia Armor e Magic Resist per qualche secondo. Apri sempre l'all-in con **Q** quando sei in range; il danno on-hit che segue arriva come se il bersaglio avesse un item difensivo in meno.

## Suggerimento avanzato

Bufferizza l'attivazione di **Bio-Arcane Barrage (W)** nello stesso input dell'auto-attack di last-hit. Premere W un istante prima dell'auto cancella il wind-up lento di Kog'Maw e fa partire la finestra W 0.1-0.2 secondi prima — su un buff da sei secondi è circa un'auto-attack in più. In teamfight è la differenza tra piazzare 4 auto durante W sulla front line nemica e piazzarne 5 prima che il primo dive arrivi sopra di te; è la singola meccanica con il rapporto valore/sforzo più alto da allenare nel practice tool contro una sagoma.
