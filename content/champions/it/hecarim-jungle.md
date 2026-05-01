---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "it"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Hecarim jungle per League of Legends Patch 16.9: clear path, pattern di gank, build bruiser, matchup chiave, power spike, errori comuni e una tip avanzata."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim converte una percentuale del bonus Move Speed in Attack Damage. Ogni item di velocità è anche un item di danno."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "Sfaldata AoE che colpisce i nemici intorno. Ogni colpo accumula uno stack che riduce il cooldown e aumenta il danno. Tool principale di clear e DPS."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "Zona magica AoE che cura Hecarim in base al danno subìto dai nemici al suo interno. Sustain durante clear e dive in torre."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Move Speed crescente più ghosting (passi attraverso le unità). Il prossimo basic attack knockback con danno scalato dalla distanza percorsa. Core gank tool."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Carica in linea, danno magico e fear sui nemici colpiti a fine corsa. Engage e disengage a lungo raggio per i teamfight."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs molto crowd control o danno magico (es. Lissandra, Syndra, Brand): scambialo con Plated Steelcaps quando il CC pesa più dell'armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tank (es. Ornn, Sion): l'armor shred dagli auto e dagli stack di Q aiuta tutta la squadra a chunkare"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs squadre senza tank quando ti serve wave clear e splitpush (spingere una side lane da solo per costringere a una risposta)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs comp senza burst (es. 4-5 fighter/tank): più ability haste e ult uptime nei fight lunghi"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs squadre AP pesanti (es. Brand mid + Karthus + Vladimir): magic resist e move speed che alimenta Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando ti focalizzano per primo nei fight: una seconda vita gratis ti permette di committare più a fondo"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Sfrutta il Move Speed crescente di E e Phase Rush per flankare i target squishy (carry a basse difese tipo gli ADC), follow-up con il fear di R, poi cycla Q mentre W ti cura dal loro burst."
  weakness: "Debole prima del livello 3 e fragile quando E è in cooldown. Hard CC come root (es. Morgana Q, Lillia R) o ground (es. Cassiopeia W) ti spengono l'engage e ti lasciano un bersaglio senza fuga."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
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
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank jungler lenti senza gank early forte"
      reason: "Hecarim li out-clearra e arriva al level 3 prima di loro; può invadergli il secondo buff o counter-gankare una lane prima che si presentino. La sua scalatura sulla speed batte la loro sulle stat pure."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Enchanter squishy senza peel su se stessi"
      reason: "E + R ti fa raggiungere e fearare il loro carry da fuori schermo; appena cade il support, l'ADC nemico resta senza shield e crolla in pochi secondi."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "ADC immobili o con dash corto"
      reason: "Phase Rush più la carica di E chiudono il gap prima che possano kitare via; la loro unica fuga (Flash) ha cooldown molto più alto del tuo engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champion con root, slow o ground che bloccano il movimento"
      reason: "Tutto il kit di Hecarim scala con la Move Speed (Warpath converte la velocità bonus in Attack Damage). Una volta rootato o groundato, perde sia danno sia la possibilità di disengage."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Jungler aggressivi nell'early-game e sull'invade"
      reason: "Hecarim è debole prima del livello 3. Questi jungler possono invadergli il secondo buff, ucciderlo o bruciargli il Flash, e snowballare prima che lui si accenda."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Bruiser duellanti che puniscono il dive in solitaria"
      reason: "Se Hecarim engaga da solo (senza follow-up della squadra), questi 1v1 lo battono con passive anti-AD o true damage, trasformando il suo commit in una kill regalata."
---

## Panoramica

Hecarim è un diver jungler veloce — un fighter che chiude distanze enormi, knocka indietro il nemico nella sua squadra e poi resta attaccato come una sanguisuga grazie a **Devastating Charge (E)** e **Onslaught of Shadows (R)**. La passive **Warpath** trasforma ogni punto di Move Speed bonus in Attack Damage, quindi gli item di velocità sono anche item di danno. Il kit è semplice da leggere ma esigente sui tempi: passerai gran parte della partita come una minaccia mobile che punisce i carry esposti (damage dealer a basse difese, tipo ADC e mage).

Il game plan è ripetibile. Clear veloce con **Rampage (Q)** e **Spirit of Dread (W)** per arrivare al level 3, poi cerca gank early sulla lane che ti dà il miglior angolo di carica con E (le lane lunghe e dritte sono le migliori). Dal mid-game in poi, il tuo lavoro è flankare (entrare nel fight da un lato che nessuno sta guardando) con **R**, fearare la back line nemica, e concatenare i knockback di **E** finché non cade tutto.

## Build Consigliata

**Starting items:** Mosstomper Seedling (oppure Gustwalker Hatchling se vuoi più velocità fuori combattimento) + Refillable Potion. Mosstomper dà uno shield quando sei a HP pieni — perfetto per sopravvivere al primo clear.

**Core items (in ordine):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — il tuo spike di AD più una active che slowa (Halting Slash). Lo slow on-demand è la differenza fra un gank che chiude la kill e uno in cui il nemico se ne va sul Flash.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor contro auto-attack. Boots di default quando l'enemy team ha 2+ minacce AD.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity e un grosso shield quando subisci danno pesante. È l'item che ti permette di committare in fight (entrare full senza tirarti indietro) e sopravvivere abbastanza da rotare le abilità.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il danno fisico ricevuto in un sanguinamento spalmato (danno distribuito nei secondi successivi invece che istantaneo). Recupera anche HP sulle takedown, così puoi fare all-in (full commit fino alla kill) e poi uscire sano.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantisce un colpo critico al primo auto di ogni fight (perfetto col knockback di **E**) e ti cura per un buon tot di HP. Va a braccetto con Stridebreaker perché entrambi gli item vogliono che tu metta auto fra un'abilità e l'altra.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — al posto di Plated Steelcaps quando l'enemy team ha tanto crowd control o danno magico (Lissandra, Syndra, Brand). La tenacity riduce la durata degli stun, così riesci comunque a castare **R**.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tank (Ornn, Sion). Auto-attack e gli stack di **Q** spezzano l'armor a beneficio di tutta la squadra.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quando vuoi splitpushare una side lane (spingere da solo per costringere a una risposta) e ti serve più wave clear più omnivamp.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs comp lente senza burst. Ability haste extra significa più fear di **R** e più spam di **Q** nei fight lunghi.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs squadre molto AP (Brand + Karthus + Vladimir). Magic resist a stack e la passiva di Move Speed sono un doppio vantaggio con Warpath: più velocità = più AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando l'enemy team ti focalizza ad ogni engage. Ti revive per ripulire il fight dopo che la squadra ha già speso le abilità.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il CC pesa più del danno auto-attack.

**Skill order:** maxa **Q** per prima (waveclear, jungle clear, DPS principale), **E** per seconda (più durata del ghost e cooldown più basso per i gank), **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** primary **Sorcery** con **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush si attiva con 3 hit di abilità separati in 4 secondi — facile su Hecarim col combo **E**-auto-**Q** in gank, e il burst di Move Speed diventa AD via Warpath. Secondary **Resolve** con **Bone Plating** e **Overgrowth**. Usa Conqueror in Precision se l'enemy team è pieno di tank di frontline (vuoi danno crescente nei fight lunghi).

## Matchup chiave

- **Lillia:** la sua **R** ti rooting da una mappa di distanza. Falla bruciare camminando avanti a HP bassi, poi committa solo dopo che l'ha usata. Se ti prende, il tuo engage è chiuso per 14+ secondi.
- **Kha'Zix:** invade forte e assassino. Trackalo — se il suo blue buff manca a 2:30, è nella tua jungle. Pathing lontano dalla sua route attesa fino al level 4, poi raggruppati con i laner per il resto dell'early.
- **Jarvan IV:** matchup a specchio. Chi ulta per primo di solito vince il trade. Tieni ward nella sua jungle per individuarlo e chiamare i laner indietro; non grupparti con gli alleati in spazi stretti se la sua **R** è up.
- **Sejuani:** tank jungler che scala. La out-clearri e la out-pressuri early. Forza fight prima del minuto 20; in late i suoi stun e il peel di squadra battono il tuo dive singolo.
- **Master Yi:** attento alla **R**. Yi può cleansarti il fear con la catena **Q**-**Alpha Strike** in invuln. Tieni **R** per quando la sua **Q** è in cooldown — aspetta di vederla usare su una wave o un campo, poi engaga nei 12 secondi successivi.

## Power spike & condizioni di vittoria

- **Level 3 (dopo il primo clear completo):** prima finestra di gank. Con un punto in **Q**-**E**-**W** puoi full-comboare un target che si è esposto. I fight sui Crab diventano reali — arrivi prima della maggior parte dei jungler.
- **Level 6:** Onslaught of Shadows online. Flank cross-mappa e dive in torre diventano possibili. Se una side lane ha prio, **R** dal fog e forza il fight.
- **Stridebreaker completato (~ minuto 10-12):** grosso flip di tempo. La active Halting Slash ti fa restare attaccato ai bersagli in fuga senza bruciare **E**. Push subito su Drake o Herald.
- **Sterak's Gage online (~ minuto 22-25):** diventi il tool di engage che sopravvive ai primi 2 secondi del fight. Cerca pick (eliminare un nemico isolato fuori dal teamfight) sull'ADC o sul mid laner intorno agli obiettivi.

## Errori comuni

- **Spammare Q senza auto-attack fra un cast e l'altro.** Warpath ti dà AD dalla velocità — lascia che gli auto entrino nei buchi. Animation cancel: casti **Q**, hard-clicki un auto, casti **Q** di nuovo.
- **Ultare nella front line.** **R** è un tool di flank, non di engage frontale. Fearare il tank avversario lo spedisce indietro dal suo ADC per peel. Gira intorno al fight (usa vision o fog), poi **R** dritto sui carry.
- **Engagiare senza la squadra in vision range.** Tutto il danno di Hecarim è "knocka indietro nella squadra che fa follow-up". Se i tuoi laner non sono entro 2 secondi di catch-up, la kill non la prende nessuno e tu muori nella loro jungle.
- **Buildare full damage su uno score 1/3.** Quando sei dietro e non snowballi (snowball = vantaggio crescente che si autoalimenta), Sterak's più Sundered Sky ti tengono utile come engage. Fare Ravenous Hydra second su una partita persa ti rende un dive bot da 2 colpi.
- **Sprecare il ghost di E sui minion.** **E** ti fa attraversare le unità solo durante la sua finestra breve. Tienilo per quando devi passare attraverso una wave o una ward — non scaricarlo on-cooldown nella jungle.

## Suggerimento avanzato

Usa una rotazione "fake-flank" intorno agli obiettivi di mid-game. Cammina dentro la vision nella tua jungle in modo che il nemico ti tracci sulla minimap, poi back off subito nel fog of war (le zone scure che non vedi) e fai il giro lungo. Quando il nemico si è ruotato pensando che tu sia ancora dove ti hanno visto l'ultima volta, **R** dal lato che non si aspettano. Il trucco dipende dalla Move Speed pura di Hecarim: la maggior parte dei jungler non riesce a fare questa giocata perché non copre la distanza in tempo. Con Phase Rush più Stridebreaker active, tu sì.
