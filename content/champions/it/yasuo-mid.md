---
title: "Yasuo Mid Build & Guida — Patch 16.9"
slug: "yasuo-mid"
language: "it"
patch: "16.9"
champion: "yasuo"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Yasuo mid lane per League of Legends Patch 16.9: starter kit, build AD crit, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Yasuo"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Way of the Wanderer"
      description: "Yasuo ha il doppio della crit chance dagli item, ma i suoi crit infliggono metà del bonus damage normale. Inoltre carica uno scudo mentre si muove, che esplode al primo colpo subito da campione o monster."
      dd_spell_id: "Yasuo_Passive"
    - key: "Q"
      name: "Steel Tempest"
      description: "Affondo lineare, conta come un'auto-attack. Due stack trasformano la prossima Q in un tornado che fa knock-up (= solleva il bersaglio in aria, brevemente stunnato)."
      dd_spell_id: "YasuoQ1Wrapper"
    - key: "W"
      name: "Wind Wall"
      description: "Muro che blocca tutti i proiettili nemici per 4 secondi. Mangia Caitlyn Q, Lux Q, Jhin W, Ashe R — non blocca melee né abilità point-and-click istantanee."
      dd_spell_id: "YasuoW"
    - key: "E"
      name: "Sweeping Blade"
      description: "Dash su un'unità bersaglio (minion, monster, campione). Non puoi rifare dash sulla stessa unità per qualche secondo. Lanciando Q durante il dash ottieni una Q AOE a tornado."
      dd_spell_id: "YasuoE"
    - key: "R"
      name: "Last Breath"
      description: "Blink su un nemico in stato airborne (in aria), prolunga la sospensione e dà bonus armor pen sui crit successivi. Serve un tornado di Q, un knock-up di un alleato o un'altra R per attivarla."
      dd_spell_id: "YasuoR"
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
    - { dd_id: "6673", name: "Immortal Shieldbow" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "alternativa al primo item quando sei avanti in lane: waveclear più rapida, sticky movement e proc su Q per dive aggressivi"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni con molte cure (Soraka, Aatrox, Dr. Mundo) — applica Grievous Wounds (taglia le cure sul bersaglio) appena lo colpisci"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro burst o focus assassini (Zed, LeBlanc) — la rez ti dà un reset gratis per Q-tornado sul team che ha appena bruciato tutto su di te"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, Vladimir) — scudo magico + lifesteal sotto soglia HP ti tiene vivo abbastanza per crittarli"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Stacka due cariche di Q, dasha con E per piazzare il knock-up del tornado, poi R sul bersaglio airborne. Mid-game roama in side lane dopo Immortal Shieldbow e cerca pick sui knock-up degli alleati."
  weakness: "I poke a distanza prima del livello 6 ti tengono fuori dal range di E. CC point-and-click (Annie, Lissandra, Malzahar) e grounding (Cassiopeia W, Singed E) disabilitano del tutto il dash."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "ashe", "ezreal"]
      archetype: "ADC e mage artiglieria a base di proiettili"
      reason: "Wind Wall blocca tutte le loro spell chiave — Caitlyn Q, Jhin W, Ashe R, Ezreal Q. Dopo il livello 6 cammini attraverso il loro poke e li Q-R appena un alleato dà il knock-up."
    - examples: ["yone", "irelia", "tryndamere"]
      archetype: "Duelisti melee senza disengage a lungo raggio"
      reason: "La E di Yasuo gli permette di restare appiccicato ai bruiser melee; arrivato a Immortal Shieldbow il trade lifesteal gira a suo favore e loro non hanno tool di kite per scappare."
    - examples: ["azir", "zilean", "swain"]
      archetype: "Mage stazionari con cast telegrafati"
      reason: "Il loro waveclear e danno dipendono da proiettili lenti o zone evitabili con la E. A 6, basta un gank con knock-up del jungler per cancellarli."
  counterpicks:
    - examples: ["annie", "lissandra", "malzahar"]
      archetype: "Mage hard CC point-and-click"
      reason: "Stun, root o suppress targettati (niente proiettile da wallare, niente skillshot da schivare): possono lockare Yasuo prima che stacki Q o trovi un target di E — e la R di Yasuo serve un airborne che lui da solo non può creare."
    - examples: ["pantheon", "renekton", "pyke"]
      archetype: "Bruiser da all-in early"
      reason: "Lo battono in scambi corti prima del livello 6 e di Immortal Shieldbow. Uno stun di Pantheon W o Renekton W taglia la finestra di dash e ribalta il trade a loro favore."
    - examples: ["cassiopeia", "singed", "morgana"]
      archetype: "Mage che groundano o zonano"
      reason: "Cassiopeia W e Singed E groundano (disabilitano i dash) Yasuo, cancellando la E. Morgana Q + W lo blocca sul follow-up del tornado e la sua E scuda il team dal poke di Q."
---

## Panoramica

Yasuo è uno skirmisher melee che combatte concatenando dash attraverso i minion e chiudendo i fight con setup airborne. Il suo kit ruota su tre loop: stackare due cariche di **Steel Tempest (Q)** per il tornado knock-up (un colpo che solleva il bersaglio in aria, stunnandolo brevemente), usare **Sweeping Blade (E)** per dashare attraverso qualunque unità vicina, e seguire i nemici airborne con **Last Breath (R)** per blinkare addosso e bursarli. Il prezzo è alto: è uno dei melee più dipendenti dai cooldown del gioco e, senza un target su cui dashare, la sua mobilità va a zero.

Il piano partita è sopravvivere alla early lane (specialmente contro poke a distanza), arrivare a **Immortal Shieldbow** + **Berserker's Greaves**, e poi snowballare (snowball = vantaggio iniziale che cresce nel tempo: kill → gold → item → altre kill) attraverso i teamfight in cui gli alleati gli forniscono i knock-up necessari per la **R**. Lo skill expression sta in due punti: il timing di **Wind Wall (W)** per mangiare il proiettile più importante del fight (Caitlyn Q, Ashe R, Lux Q, Jhin W) e la gestione del crit cap — la passiva di Yasuo raddoppia la crit chance dagli item, quindi un solo Infinity Edge lo porta già vicino al cap del 100% di crit. Comprare crit chance oltre quel punto è gold sprecato; la build pivota su AD pura e lifesteal.

## Build Consigliata

**Item iniziali:** Doran's Blade + 1 Health Potion. Doran's dà lifesteal (cura piccola ad ogni auto-attack) e un po' di AD, che scala con la build AD-stacking.

**Item core (nell'ordine):**

1. ![Immortal Shieldbow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6673.png) **Immortal Shieldbow** — primo item di default. Crit chance, AD, lifesteal e una passiva HP-threshold (uno scudo che si attiva quando scendi sotto ~30% HP). Lo scudo è il motivo principale per cui Yasuo sopravvive agli all-in (scambi di kill totali, senza ritirata) che il suo playstyle richiede.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots di attack speed. Mercury's Treads solo se la squadra avversaria ha 3+ fonti di hard CC che non puoi wallare (stun point-and-click, suppress).
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — il più grande spike di danno. Con la passiva **Way of the Wanderer** (che raddoppia la crit chance dagli item), Shieldbow + IE ti porta già vicino al 100% di crit cap. IE poi aumenta il bonus damage di ogni crit, sbloccando completamente la penalità "metà danno" che Yasuo subisce sui crit.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — AD pura, lifesteal alta e uno scudo da overheal. Oltre i tre item non puoi più stackare crit chance (sei al cap), quindi la build pivota su AD scaling diretto.

**Item situazionali:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap del primo item quando sei avanti in lane e vuoi pressione sticky (slow + bonus di movimento che rendono difficile per il nemico scappare). Slow on-hit, attack speed e un proc Spellblade (un burst di danno bonus sull'auto-attack subito dopo aver lanciato una spell) su **Q** rendono i dive più affidabili, ma rinunci alla rete di sicurezza dello scudo di Shieldbow.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni con molte cure (Soraka, Aatrox, Dr. Mundo). Applica Grievous Wounds (taglia le cure sul bersaglio) per qualche secondo a ogni colpo.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro burst o focus assassini (Zed, LeBlanc). La rez ti dà un reset gratis per Q-tornado sul team che ha appena bruciato tutto su di te.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Syndra, Veigar, Vladimir). Scudo magico + lifesteal sotto soglia HP ti tiene vivo abbastanza per cancellarli a colpi.

**Stivali:** Berserker's Greaves di default. Mercury's Treads come swap quando il team avversario ha 3+ fonti di hard CC che non puoi wallare (Wind Wall blocca solo proiettili; stun targettati e suppress passano lo stesso).

**Skill order:** Massimizza **Q** per primo (DPS principale e il tornado è il tuo unico knock-up in solo), **E** per secondo (danno del dash e cooldown ridotto), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Conqueror**, **Triumph**, **Legend: Bloodline**, **Coup de Grace**. Conqueror si stacka rapidamente su Yasuo perché ogni Q, E e auto-attack lo tickano. Secondario **Resolve** con **Bone Plating** e **Unflinching** per sopravvivenza negli scambi melee. **Lethal Tempo** è la keystone alternativa per uno stile più focalizzato su attack speed e cooldown di Q ancora più rapidi — scegli Conqueror contro team più tanky, Lethal Tempo contro lane di squishy.

## Matchup chiave

- **Annie:** Hard counter. Il suo stun è point-and-click (niente skillshot da wallare) e a 6 la sua R **Tibbers** ti cancella prima che tu possa stackare Q. Stai dietro ai minion, non bruciare mai **E** in modo offensivo prima del 6 e chiedi un gank early al jungler.
- **Zed:** Skill matchup. Blocca lo shuriken **Q** con **Wind Wall** per vincere il trade. Compra ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** come quarto item se è feedato.
- **Yone:** Mirror skirmisher melee. Chi piazza il tornado knock-up per primo vince l'all-in. Tieni **E** per dashare attraverso il minion alle tue spalle (escape) invece che attraverso Yone (commit).
- **Caitlyn (quando il bot ruota mid):** La sua **Q** è wallabile, la sua **R** pure e perfino il proiettile della rivelazione di **W** lo è — Yasuo è uno dei counter più puliti contro di lei, al costo del setup di lane.
- **Lissandra:** Hard counter. La sua **E** è point-and-click e così la sua **R** — niente di wallabile. Può lockarti prima che stacki Q. Compra ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** per assorbire il burst.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + E puoi fare E-attraverso-il-minion + Q per un trade veloce. Esci prima che il nemico possa restituire — al livello 2 non hai reset.
- **Livello 6:** Si sblocca **Last Breath**. Se il jungler ha un knock-up qualsiasi (Vi Q, Sejuani Q, passiva di Nautilus), hai un setup di kill garantito sul mid-river.
- **Immortal Shieldbow completo (~ minuto 12-14):** La lane phase si ribalta. Lo scudo HP-threshold (la passiva che si attiva quando scendi basso di vita) ti permette di committare ad all-in che senza non avresti mai vinto. Roama bot side appena la wave è spinta avversaria.
- **Infinity Edge online (~ minuto 22-26):** Tocchi il crit cap e le auto-attack cancellano gli squishy in 2-3 colpi. Forza fight obiettivo e cerca dive sulla back line (saltare oltre la front line per uccidere il carry dietro) — qui gli alleati fanno engage e tu E-flank dal lato.

## Errori comuni

- **Bruciare E in modo offensivo pre-6 in matchup perdenti.** Senza **R** non hai follow-up e, una volta dashato sul target, la stessa unità ha un cooldown per-target sulla **E** — non puoi tornare indietro. Usa **E** sul minion alle spalle per un reset difensivo.
- **Stackare crit chance oltre Infinity Edge.** La passiva di Yasuo raddoppia la crit chance dagli item (il "crit cap" — una volta arrivato al 100% effettivo, ulteriore crit chance è gold sprecato). Dopo Shieldbow + IE sei già vicino al 100%; la build pivota su AD pura (Bloodthirster, Mortal Reminder), non su altri item crit come Phantom Dancer.
- **Sprecare Wind Wall su un'auto-attack singola.** Wind Wall ha un cooldown lungo. Tienilo per il proiettile decisivo (Ashe R, Caitlyn ult, Lux Q di setup) — mai bruciarlo per bloccare un auto-attack di Doran's Ring.
- **R-are senza setup.** **Last Breath** richiede un bersaglio airborne. Se il team non ha knock-up e il tuo Q tornado è in cooldown, non puoi usare R. Pickа Yasuo con team che hanno engage (Malphite, Nautilus, Vi, Sejuani), o accetta che il peso del knock-up è solo tuo.
- **Non punire i cooldown di rientro.** Dopo che il nemico ha bruciato il suo escape principale (Zed W, LeBlanc W, Akali E), hai una finestra di 10-15 secondi senza la sua mobilità. È l'unica finestra in cui Yasuo vince l'all-in — riconoscila e committa invece di aspettare passivo.

## Suggerimento avanzato

Allena il combo **doppio-Q-tornado** con Flash. Due stack di Q rendono la prossima Q un tornado; se fai E-dash attraverso un minion e poi Flash a metà dash, il tornado atterra alla distanza del Flash — molto oltre dove i nemici si aspettano di essere in pericolo. Segui con R appena diventano airborne. È l'esecuzione di Yasuo con la skill cap più alta e trasforma una lane 50/50 in un pickoff garantito (= eliminazione di un nemico isolato fuori dal teamfight). Il prezzo: spendi Flash, quindi committa solo quando la kill è certa o assicura un obiettivo come il Drake.
