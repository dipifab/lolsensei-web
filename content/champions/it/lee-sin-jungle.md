---
title: "Lee Sin Jungle Build & Guida — Patch 16.9"
slug: "lee-sin-jungle"
language: "it"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Lee Sin jungle per League of Legends Patch 16.9: starter kit, build da skirmisher, matchup chiave, power spike, errori comuni e una chiusura tecnica."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "Dopo aver lanciato un'abilità, le 2 auto successive guadagnano attack speed e restituiscono energia. Ritmo abilità — auto — auto."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Skillshot lineare. Se colpisce, la recast fa dash sul bersaglio infliggendo danno fisico su HP mancanti. Il tuo gap close principale."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash su alleato, ward o te stesso con shield. La recast dà lifesteal e spell vamp. Mobilità più sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "Danno AOE che rivela i nemici colpiti. La recast li rallenta. Strumento di clear, anti-stealth e fonte di slow."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Calcio rotante che spinge indietro il bersaglio e danneggia i nemici dietro di esso. Strumento di pickoff e disengage."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti damage dealer fisici (Yasuo + Caitlyn): trasforma il danno fisico in un sanguinamento spalmato, non istantaneo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP (Diana, Syndra, Lux mid): il lifeline shield trasforma un one-shot in un trade sopravvivibile"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro 3+ campioni con CC duro (es. Leona + Lissandra + Sejuani): la tenacity accorcia stun e root e ti tiene la catena di dash"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "quando devi fare dive (entrare sotto torre nemica per uccidere qualcuno): lo scudo lifeline scatta dopo la prima botta grossa"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "assicurazione di flank nel late game: se sbagli un timing di R, la resurrezione fa pareggiare il trade al tuo team"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Vinci i primi 14 minuti con invade e gank. Una volta finito Eclipse, contesta ogni obiettivo e usa la R per togliere un nemico chiave dalla posizione. Late game cerca un flank, calcia una carry squishy nel team."
  weakness: "Crolla forte dopo il minuto 25 contro carry che scalano. Niente dash affidabile se Q1 manca o se W non ha bersagli. Le catene di CC duro chiudono il tuo engage all'istante."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Panoramica

Lee Sin è un jungler da early game — uno skirmisher, cioè un campione che vince i combattimenti corti tra due o tre giocatori. Immagina un artista marziale con una catena di dash: ti colpisce con un'onda sonora, ci salta sopra, ti calcia verso il suo team, e le sue auto-attack hanno un bonus di attack speed integrato dopo ogni spell. Tutto il kit è costruito attorno a una sola idea: essere il combattente più forte sulla mappa nei primi 15 minuti, poi convertire quel vantaggio in kill, obiettivi e tempo prima che le carry avversarie scalino.

Il game plan è diretto. Nei primi 8 minuti fai invade — entri nel jungle nemico per rubare camp e cercare lo scontro col jungler avversario. Dopo, fai gank in lane ogni volta che la **Q** è pronta. Late game smetti di provare gli 1v1 (li perdi) e cerchi flank: giri attorno alla mappa, ti nascondi in un cespuglio senza ward, poi **R** la carry nemica nel tuo team. Se non riesci ad atterrare la **Q1** in modo costante, niente di tutto questo funziona — il resto del kit si concatena al primo skillshot.

## Build Consigliata

**Item iniziali:** Smite + **Hailblade** per un primo clear più veloce con danno AOE alla seconda hit, più **Refillable Potion**. Prendi Emberknife solo se vuoi massimo sustain in un full clear più lento ma con più solo dueling.

**Item core (in ordine):**

1. **Eclipse** — burst, shield e omnivamp. Lo scudo a doppio colpo si lega perfettamente al tuo ritmo della passive (Cast → AA → AA). Primo item più pulito per skirmish.
2. **Plated Steelcaps** contro nemici a peso AD / **Mercury's Treads** contro 3+ campioni a CC duro. Default Plated.
3. **Heartsteel** — HP e auto-attack potenziata che premia gli skirmish prolungati. Ti permette di brawlare oltre il classico timer "muoio a 2 oggetti".
4. **Black Cleaver** — armor shred che scala col tuo ritmo Q-AA-Q. Trasforma anche il danno fisico del tuo team in minaccia di kill.

**Item situazionali:**

- **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn). Spalma il danno fisico in entrata come bleed lento invece di farlo arrivare istantaneo.
- **Maw of Malmortius** — contro lane AP burst (Diana, Syndra, Lux mid).
- **Sterak's Gage** — quando devi fare dive (entrare sotto torre nemica per uccidere qualcuno). Il lifeline shield ti compra il secondo che serve al tuo team per fare follow-up.
- **Guardian Angel** — assicurazione di flank nel late game dopo 4 oggetti.

**Stivali:** Plated Steelcaps di default. Boots of Mobility solo su mappe gank-heavy senza minacce di CC early — pick di nicchia, non standard.

**Skill order:** Massimizza la **Q** per prima (danno e gap close), la **E** per seconda (clear e uptime di slow), la **W** per ultima (l'utility scala bene a rank 1). **R** ai livelli 6, 11, 16.

**Rune:** Primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondario **Domination** con **Sudden Impact** + **Treasure Hunter** per costruire uno snowball lead (un vantaggio iniziale che cresce nel tempo: kill → gold → item → altre kill), oppure **Resolve** con **Second Wind** + **Revitalize** se ti aspetti una partita lunga.

## Matchup chiave

- **Vi:** Perde gli skirmish pre-6 se baiti la sua **Q** caricata. Atterra la tua **Q1** su di lei, **E** per slow, poi salta sul support dopo il kick — peela la tua carry mentre lei è in cooldown.
- **Hecarim:** Ti supera dopo 3 oggetti ma perde i fight pre-9 minuti. Mettilo sotto pressione presto; se arrivi al livello 6 prima di lui, gank top o mid senza tregua. Mai 1v1 dopo il suo primo item.
- **Master Yi:** Matchup di skill. La tua **E** lo rivela mentre la sua **Q** è attiva, rompendo il target lock. Allenalo finché non diventa riflesso. Salva **R** per calciarlo fuori dalla tua backline nei teamfight.
- **Kha'Zix:** Invade fino al livello 6. Dopo la sua **R** evoluta può solo-killarti se sei isolato — mai entrare nel jungle nemico da solo dopo il minuto 12 senza copertura del team.
- **Graves:** Matchup specchio sul tempo. Entrambi i jungler vincono i primi 6 livelli. Vince chi gankа di più. Tieni d'occhio le sue cariche di **E**; se le ha bruciate entrambe, lo dueli.

## Power spike & condizioni di vittoria

- **Livello 3:** Kit completo. Il tuo pattern di gank è **Q1 → aspetta CC alleato o Flash → Q2 → E slow → reset auto**. Se non hanno Flash, è una kill al 60% HP.
- **Livello 6:** **Dragon's Rage** sblocca la giocata del kick. Pre-6 la **R** non vale nulla — un first blood pre-6 è il punto di leva più alto della partita.
- **Timing Eclipse (~ minuto 9):** Vinci gli skirmish prolungati. Forza fight su Scuttle, Drake e Voidgrubs in questa finestra.
- **Late game (~ minuto 30):** Lee perde valore contro carry che scalano (Vayne, Kog'Maw, Master Yi). La tua condizione di vittoria residua è l'ace-flank: prendi vision nel jungle nemico, trova una posizione laterale, **R** la carry attraverso la mappa, follow-up con **Q-E-W**.

## Errori comuni

- **Sprecare Q1 su un minion low-HP nei fight.** La tua **Q** ha due parti: lo skillshot e il dash. Se la spari su un minion per finirlo, hai bruciato l'intera abilità per 12 secondi e non hai più gap close. Salva Q1 per l'all-in (lo scambio totale fino alla kill, senza spazio per disimpegnarsi).
- **W-jumping a metà skirmish per sustain.** Il lifesteal di **W** è reale, ma se W su una ward per curarti rinunci al gap close. Se il trade è vincibile, salva **W** per un Insec (il trucco del calcio inverso — vedi suggerimento avanzato) o per saltare sul support dopo la **R**.
- **R-in-torre senza follow-up.** Calciare una carry low-HP verso il tuo team funziona solo se il team è in range e pronto a impegnarsi. **R** da sola, fuori schermo, è un coin flip da 100g.
- **Auto-leash sul red side al livello 1.** Con Hailblade fai full-clear da solo dalla bot side. Il leash sacrifica la corsa allo Scuttle. Di' alla bot lane: leash solo il primo attack-and-go, poi via.
- **Pickare Lee in una comp senza piano di pickoff.** Lee brilla quando il team capitalizza su un singolo nemico isolato (un "pickoff": eliminare un nemico isolato fuori dal teamfight). Se il team non ha CC di follow-up, la **R** è solo uno strumento di peel — adatta la build verso Death's Dance e Sterak's invece che oggetti da all-in.

## Suggerimento avanzato

L'"Insec" — il calcio inverso: cammina oltre il bersaglio, **W** su una ward piazzata dietro di lui, poi **R** appena atterri — il calcio parte da dietro, lo manda verso il tuo team invece che lontano. La sequenza completa è **Q1 hit → Q2 dash → ward dietro → W sulla ward → R**. Allenalo in Practice Tool finché non riesci a chiudere il timing senza pensarci. La finestra tra l'atterraggio della W e la R è circa 0.3 secondi — troppo lento e il bersaglio si gira a guardarti, troppo veloce e l'animazione di W mangia il cast della R. Quando riesci a concatenarla sotto pressione, Lee fa due tier nelle tue mani.
