---
title: "Nidalee Jungle Build & Guida — Patch 16.9"
slug: "nidalee-jungle"
language: "it"
patch: "16.9"
champion: "nidalee"
role: "jungle"
last_updated: "2026-05-06"
description: "Guida Nidalee jungle per League of Legends Patch 16.9: clear pattern, build AP burst, matchup chiave, power spike, errori comuni e una tip avanzata sui combo cougar."
quick_learn:
  champion_dd_id: "Nidalee"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Mage"
  abilities:
    - key: "P"
      name: "Prowl"
      description: "Movimento più veloce nei cespugli, con un boost più alto se stai inseguendo un campione. Colpire un campione o un mostro con Q o W lo marca come Hunted, restituendo Mana e resettando il cooldown di Aspect Of The Cougar."
      dd_spell_id: "Nidalee_Passive"
    - key: "Q"
      name: "Javelin Toss / Takedown"
      description: "Forma umana: skillshot lineare a 1500 di gittata che scala il danno con la distanza percorsa. Forma cougar: attacco melee a corto raggio che esegue il bersaglio se a bassa HP."
      dd_spell_id: "JavelinToss"
    - key: "W"
      name: "Bushwhack / Pounce"
      description: "Forma umana: piazza una trappola invisibile che rivela e danneggia. Forma cougar: balzo direzionale corto che raddoppia di gittata se il bersaglio è marchiato Hunted."
      dd_spell_id: "Bushwhack"
    - key: "E"
      name: "Primal Surge / Swipe"
      description: "Forma umana: cura mirata più buff di attack speed su te o un alleato. Forma cougar: artigliata a cono che colpisce tutto davanti a te."
      dd_spell_id: "PrimalSurge"
    - key: "R"
      name: "Aspect Of The Cougar"
      description: "Switch tra forma umana (caster a distanza) e forma cougar (skirmisher melee). Ogni forma ha le sue Q/W/E. Il recast è gratis, solo il cambio forma costa cooldown."
      dd_spell_id: "AspectOfTheCougar"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini e diver (Zed, Talon, Master Yi, Wukong) — la stasi rompe la finestra di burst su di te a metà fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target pesante (Lissandra R, Morgana Q, Sylas E) — lo scudo si mangia il primo hard CC"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ nemici comprano Resistenza Magica (Mercury's Treads, Maw, Wit's End) — restituisce magic pen percentuale"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "se sei 2+ kill in vantaggio entro il minuto 10 — accelera lo scaling AP per snowballare; droppalo se inizi a morire"
  base_combo: ["Q", "R", "W", "E", "Q"]
  win_condition: "Centra spear in fog (zone non visibili) e vicino agli obiettivi, poi entra con R-Pounce-Swipe-execute su target isolati. Trasforma gli invade early in 2 item di vantaggio prima del Magic Resist nemico."
  weakness: "Squishy (fragile) e zero hard CC (stun/root) in forma cougar. Quando gli avversari comprano Magic Resist o tenacity boots, gli spear fanno solo poke e il dive non blocca. Crolla contro bruiser tank dopo i 25 minuti."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primario: Electrocute scatta sulla catena Q-AA-cougar W (auto-attack tra le abilità), aggiungendo burst di danno su ogni pick. Sudden Impact attiva su Pounce, Sixth Sense rivela le ward nemiche, Ultimate Hunter taglia il cooldown della R."
    secondary_rationale: "Sorcery secondario: Manaflow Band sostiene il mana per ripetere spear nei clear early. Transcendence porta l'ability haste (CDR) oltre la soglia di 40%, così W ed E in forma cougar si resettano tra un trade e l'altro."
    secondary_alternative: "Contro un jungler avversario da poke pesante (es. Nidalee mirror, Karthus, Elise), swap Sorcery con Inspiration: Magical Footwear (boots Tier 2 gratis ~minuto 12) e Cosmic Insight (più uptime su Flash e Smite negli scontri da obiettivo)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "brand"]
      archetype: "Jungler con clear lento e senza tool di invade"
      reason: "L'invade di Nidalee al livello 3 con due spear più Pounce uccide questi jungler clear-focused prima del loro item spike. Non possono contestare la vision né rispondere con counter-invade alla sua mobilità nei cespugli."
    - examples: ["kha-zix", "rengar", "kayn"]
      archetype: "Jungler solo-carry assassini senza CC d'engage"
      reason: "Entrambe le squadre vincono sui pick isolati (eliminare un nemico solo, lontano dal team). Nidalee vince perché il suo spear da 1500 di range apre ogni skirmish con un vantaggio HP gratis prima che Pounce chiuda la distanza."
    - examples: ["seraphine", "karma", "soraka"]
      archetype: "Enchanter a lunga gittata senza escape"
      reason: "Snipe cross-mappa con javelin mentre stanno usando un poke a channel (abilità con tempo di carica). Una hit pulita al 60% HP apre il combo Pounce-Swipe-Q execute che chiude la kill prima che gli alleati arrivino a peelare il carry."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Jungler tank con hard CC point-and-click"
      reason: "Nidalee è squishy e la forma cougar ha zero CC. Un singolo stun o root point-and-click (target diretto, non skillshot) la concatena alla morte; la R si cancella se viene presa da hard CC. Non riesce a kitare il loro engage."
    - examples: ["wukong", "vi", "diana"]
      archetype: "Jungler early-game con engage point-and-click"
      reason: "Invadono il red side di Nidalee al livello 3 e arrivano dentro il range di Pounce senza dover schivare nulla. Senza Flash pronto, muore; il suo escape reattivo è troppo lento contro un charge engage incondizionato."
    - examples: ["jax", "trundle", "warwick"]
      archetype: "Bruiser e duelisti che scalano sui 2-3 item"
      reason: "Il danno di Nidalee è front-loaded sugli spear e sul burst di Pounce. Dopo il minuto ~25 un bruiser con sustain regge il combo cougar nel trade e sopravvive abbastanza da ucciderla in melee."
---

## Panoramica

Nidalee è una jungler AP (ability power, danno magico) che cambia forma. In forma umana lancia **Javelin Toss (Q)** — uno spear (giavellotto) da 1500 di range che scala il danno con la distanza volata — e piazza trappole **Bushwhack (W)** per vision (visibilità) e danno a logoramento. In forma cougar diventa una skirmisher melee (combatte da vicino in scaramucce) dove **Takedown (Q)** esegue i target a basse HP e **Pounce (W)** raddoppia il salto sui bersagli marchiati. Tutto il kit ruota intorno alla passiva **Prowl**, che dà movement speed nei cespugli e resetta **Aspect Of The Cougar (R)** ogni volta che colpisci un campione o un mostro con Q o W. Quel reset è ciò che le permette di cambiare forma più volte nello stesso scontro senza pagare il cooldown.

Il game plan è logorare i nemici da fog of war (zone non visibili) con i giavellotti, poi entrare con un dive da one-shot quando un target è sotto il ~50% HP — di solito intorno al minuto 10-14 quando **Lich Bane** è completo. È un campione che vince dettando gli skirmish (eliminando avversari isolati, lontano dal loro team), non i trade a piena HP. Snowball forte sulle kill early (un vantaggio precoce che cresce nel tempo) e cade quando i fight diventano brawl 5v5 in lategame.

## Build Consigliata

**Item iniziali:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade è la jungle starter ranged (Nidalee è ranged in forma umana); si auto-evolve nel companion qui sotto man mano che la quest Smite avanza, intorno al minuto 3-4.

**Item core (nell'ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade della quest da Hailblade. Il companion AP aggiunge un proc (effetto bonus) di danno magico sull'auto-attack dopo aver lanciato un'abilità, perfetto per la sequenza cougar Q-AA.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — primo item, il tuo più grande power spike. Dopo aver lanciato un'abilità, il prossimo basic attack fa danno AP bonus. Si combina col reset dell'auto-attack di Takedown cougar per fare one-shot agli squishy.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa (riduce la Magic Resist nemica); gli stivali standard quando nessuno nella squadra avversaria ti forza su Mercury's Treads.
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed per la catena Swipe/AA in forma cougar, più danno magico on-hit (a ogni colpo). Abbassa il cooldown tra le auto-attack, alimentando i proc di Lich Bane.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP per il lategame; il momento in cui il tuo spear-from-fog diventa un one-tap su un carry (champion che fa molto danno) da 1500 HP senza Magic Resist.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini e diver (campioni che si tuffano sul tuo carry — es. Zed, Talon, Master Yi, Wukong). La stasi (un freeze di ~2.5 secondi in cui sei intoccabile) ti salva quando devi entrare in forma cougar e ti serve aspettare la finestra di burst nemica.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro hard CC magico single-target (es. Lissandra R, Morgana Q, Sylas E). Lo scudo blocca il primo hard CC al posto tuo.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena 2+ nemici comprano un item con Magic Resist (Mercury's Treads, ![Maw](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) Maw of Malmortius, ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End). La penetrazione magica percentuale ti restituisce il danno degli spear.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — quando sei 2+ kill in vantaggio entro il minuto 10. Accelera lo scaling AP su uno snowball lead (vantaggio iniziale che cresce nel tempo: kill → gold → item → più kill); rinuncia a comprarlo se stai morendo, perché perdere stack azzera il valore.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Cambia con ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando la squadra avversaria ha 3+ fonti di CC (crowd control, abilità che ti bloccano), perché la stat di tenacity accorcia stun e root su di te.

**Skill order:** Massimizza **Q** per primo (la tua source di danno principale e l'unico tool ranged), **E** per secondo (la Swipe cougar scala il danno cono col rank), **W** per ultimo. Un punto in **R** ai livelli 6, 11 e 16.

**Rune:** Albero primario **Domination** con **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**, oppure swap a **Inspiration** con **Magical Footwear** e **Cosmic Insight** contro jungler nemici da poke pesante.

## Matchup chiave

- **Lee Sin:** Matchup pari-favorevole. Lee Sin vince gli skirmish al livello 3 se piazza una Sonic Wave, ma il suo clear è più lento del tuo. Invadi il suo secondo buff a 3:00 se hai vision con Prowl: lancia uno spear dal cespuglio e usa Pounce solo se la spear atterra. Evita duelli in spazio aperto.
- **Vi:** Hard counter early. La sua R è point-and-click (target automatico, non skillshot): ti aggancia contro un muro e il suo team fa dive. Mantieni il path sul lato opposto della mappa fino al livello 6, poi tracciala con ward **Sixth Sense** prima di contestare qualunque obiettivo.
- **Master Yi:** Skill matchup. Lo poke meglio di lui pre-6 con gli spear; lui ti vince i duelli a 2 item se completa Wit's End. Uccidilo in forma cougar sotto il 60% HP prima che la sua Q si resetti, oppure fai kite indietro con il toggle R se committa l'all-in.
- **Karthus:** Gara di clear che vinci tu. Il suo invade al livello 3 è nullo: invadi il suo red side, lancia uno spear sul suo blue buff mentre fa clear con Defile, e usa Pounce quando il suo Wall è a cooldown. Snowball facile.
- **Sejuani:** Evita l'1v1 in modo categorico. Il suo Permafrost ti applica uno stun al primo proc di chain (effetto incatenato), e la W cougar non ha il disengage per scappare dopo Glacial Prison. Tracciala intorno alla vision e fai gank nelle lane che non sta pressando lei.

## Power spike & condizioni di vittoria

- **Livello 3:** Kit completo (Q+W+E). Prima finestra di invade (entrare nella jungla nemica) — fai scout del red side nemico dal minuto 2:30 con la vision in cespuglio di **Prowl**, lancia uno spear, poi committi solo se hai già un vantaggio HP. Una catena spear-pounce-swipe pulita solo-killa un jungler al 100% HP.
- **Livello 6:** **Aspect Of The Cougar** sblocca il combo spear-into-execute. Pre-6 prepari le kill con poke (logoramento a distanza); dal 6 in poi qualsiasi avversario sotto il 50% HP nel tuo range è morto.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completo (~ minuto 12-14):** Spike di burst (danno alto concentrato in pochi secondi). La Q cougar resetta il prossimo basic attack e Lich Bane somma il proc (effetto bonus che si attiva) sull'AA dopo abilità — fai one-shot agli squishy in una sola rotazione.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 22-24):** Spike di danno sostenuto. La forma cougar tiene il duello contro i bruiser fino a 2 item perché Swipe-AA-Q (auto-attack tra le abilità) concatena ogni ~0.6 secondi con l'attack speed di Nashor's.

## Errori comuni

- **Lanciare gli spear su wave a piena HP per "pushare prio" (guadagnare priorità in lane).** Ogni spear costa 50-70 mana e fa alla wave (linea di minion) meno di metà HP. Salva la Q per i pick; se la wave va clearata (eliminata), passa in forma cougar e usa Swipe sui caster (i minion che lanciano magie da retroguardia).
- **Usare Pounce senza prima centrare uno spear.** La W cougar senza marchio Hunted vola corto e fa solo chip damage. Atterra sempre la Q prima per marchiare il bersaglio: questo raddoppia il range di Pounce e ti resetta la R se connette.
- **Dimenticarsi di tornare in forma umana per il follow-up spear.** Il toggle R è gratis al recast (rilancio): appena la Q cougar esegue, torna umana, lancia una Q umana per applicare slow (rallentamento) a chi scappa, poi rientra cougar per pulire la kill. La maggior parte delle Nidalee novizie resta in forma melee troppo a lungo lasciando scappare le kill.
- **Fare invade da soli senza vision.** **Sixth Sense** rivela le ward nemiche (occhi che danno vision), non i nemici stessi. Lancia uno spear dal fog solo quando hai il controllo del cespuglio da cui esci; altrimenti ti prendi un counter-engage dal jungler nemico più il laner più vicino.
- **Path automatico nello stesso cespuglio in lategame.** Dopo il minuto 25 ogni cespuglio vicino agli obiettivi ha un Control Ward (ward che disabilita gli altri ward). Varia le route e fai clear ai Control Ward con la Swipe cougar prima di lanciare uno spear in fog.

## Suggerimento avanzato

Allena la **brush-Q double release** (lancio dal cespuglio). Stai dentro un cespuglio così **Prowl** è al boost del 30% di tracking-champion (lo speed boost contro un campione visibile entro 1400 di range), poi lancia la Q umana mentre cammini fuori: lo spear vola prima che il nemico ti veda uscire, quindi ha ~0.3 secondi in meno di reazione rispetto a uno spear lanciato in spazio aperto. Poi immediatamente R in cougar, usa Pounce sul target marchiato, Swipe, e Takedown per eseguire. Eseguita correttamente l'intera catena dura sotto 1.5 secondi ed è impossibile da schivare da piena HP se l'avversario è un support squishy o un marksman (champion ADC, fragile da retroguardia) senza Flash.
