---
title: "Jax Top Build & Guida — Patch 16.9"
slug: "jax-top"
language: "it"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Guida Jax top lane per League of Legends Patch 16.9: build bruiser scaling, timing di Counter Strike, matchup chiave, power spike, errori comuni e un consiglio tecnico."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Le auto-attack consecutive aumentano gradualmente l'attack speed di Jax. Gli stack si resettano se smetti di attaccare. Continua a colpire una volta committato."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Dash targettato su un'unità o ward. Se il bersaglio è nemico infligge danno fisico. Usa le ward per mobilità extra: è la tua unica fuga e il tuo gap-close."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Carica la prossima auto-attack o Leap Strike con danno magico bonus e un breve slow. Costo basso e cooldown corto: usala in ogni trade breve."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Stance difensiva: schiva tutte le auto-attack in arrivo per un massimo di 2 secondi e riduce il danno AOE. Rilancia o lascia scadere per stordire i nemici intorno."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Passiva: ogni terza auto-attack infligge danno magico bonus. Attiva: burst AOE più Armatura e Resistenza Magica per qualche secondo. Attivala sempre prima di un fight."
      dd_spell_id: "JaxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro avversari ad alto danno auto-attack (Tryndamere, Yasuo, Kayle) — riduzione fissa del danno AA"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro CC pesante o danno AP (Malphite R, Renekton stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "core alternativo contro lane di poke — crit garantito + cura sulla prima auto contro un campione"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti damage dealer fisici (Yasuo + Caitlyn): trasforma il burst in un sanguinamento lento"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Arriva a due item, poi duella chiunque in side lane. Stuna con Counter Strike sull'engage, Empower sulla prima auto, e lascia stackare Relentless Assault — splitpush per costringere risposta."
  weakness: "Pre-6 non hai una vera all-in window; i top ranged fanno poke fuori dalla wave. Senza Counter Strike pronto non hai layer difensivo né minaccia di kill."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion", "cho-gath"]
      archetype: "Tank melee lenti senza dash"
      reason: "Counter Strike li stuna in faccia e non hanno modo di disengage; Jax stacka Relentless Assault liberamente mentre incassano, vincendo ogni trade esteso dopo il livello 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Scaler melee a corto raggio senza AA cancel"
      reason: "Il loro danno è legato alle auto-attack o ad abilità a corto raggio — Counter Strike schiva le auto e lo stun AOE in uscita neutralizza il loro windup."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Duellanti che dipendono dalle auto-attack"
      reason: "Counter Strike mangia la loro fonte di danno principale per 2 secondi. Con Plated Steelcaps il matchup si inclina ulteriormente: non possono pareggiare i trade nella tua stance."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Top ranged con strumenti di kite"
      reason: "Pokano fuori dai 700 di range di Leap Strike e indietreggiano quando Counter Strike è pronto. Jax non ha sustain pre-6 quindi la lane si sanguina senza mai arrivare in range di all-in."
    - examples: ["fiora", "camille"]
      archetype: "Duellanti con true damage e cleanse / catene di dash"
      reason: "Il Riposte di Fiora para lo stun di Counter Strike; l'E hookshot di Camille le permette di committare e disengage sul suo timer. Vincono entrambi l'1v1 post-6 a parità di item."
    - examples: ["malphite", "rumble"]
      archetype: "Hard counter mage contro bruiser melee (quando in lead)"
      reason: "Malphite contro Jax si ribalta sui suoi item: pre-Frostfire perde, post-secondo item l'armor stack e la R lock-on chiudono la finestra di all-in di Jax."
---

## Panoramica

Jax è un fighter melee e duellante la cui intera identità è "scala fino a diventare un dio nell'1v1". Pre-6 non ha pressione di kill: i suoi trade dipendono dal centrare **Counter Strike (E)** per schivare le auto-attack del nemico, poi rispondere con **Empower (W)** mentre stacka le auto-attack di **Relentless Assault (Passive)**. Dal livello 6 in poi, **Grandmaster's Might (R)** lo trasforma in un bruiser bursty che può fare solo kill su quasi ogni top melee in side lane — ma solo se arriva a due item integro.

Il piano partita è paziente e attento alla lane. Last-hitta in sicurezza fino al livello 6, cerca una finestra di all-in (uno scambio totale fino alla kill, senza spazio per disimpegnarsi) quando **Q-E-W-R** è pronto, poi passa allo splitpush (spingere una side lane da solo per costringere il nemico a rispondere) appena **Blade of The Ruined King** è online. Nei teamfight sei un flanker che arriva via **Leap Strike** su una ward piazzata pochi secondi prima — non una frontline che entra dal davanti.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Il regen dello scudo sul danno subito è la risposta più economica al poke iniziale. Evita Doran's Blade a meno di un matchup melee in cui vuoi attivamente fare all-in al livello 2.

**Item core (nell'ordine):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — il tuo primo power spike. Il danno on-hit scala con gli HP del nemico, perfetto contro bruiser e tank in top lane, e l'attiva con slow ti permette di restare attaccato a chi prova a fare kite (muoversi all'indietro mentre attacca, mantenendo distanza).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — il secondo item che trasforma Jax in un duellante. I proc di Sheen (danno extra sull'auto-attack dopo una spell) si concatenano con **Q** e **W**, e il movement speed on-hit ti permette di inseguire attraverso i muri.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — layer di sopravvivenza. Lo scudo si attiva sotto il ~40% degli HP (HP-threshold passive — passiva di un item che si attiva quando i tuoi HP scendono sotto soglia), regalandoti i secondi che ti servono per stackare **Relentless Assault** e ribaltare il fight.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — quarto item contro danno AP; Resistenza Magica più danno magico on-hit che scala con il tuo già alto attack speed.

**Item situazionali:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — core alternativo contro lane di poke pesante; il crit garantito e la cura sulla prima auto contro un campione ti danno sustain (rigenerazione in fight) che a Jax altrimenti manca.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn). Trasforma il burst fisico in un sanguinamento lento (danno spalmato nei secondi successivi invece che istantaneo) così puoi stackare Relentless Assault prima di morire.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — stivali contro lane ad alto danno auto-attack (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — stivali contro CC pesante o burst AP (Malphite R, Rumble, Renekton stun).

**Stivali:** Default **Plated Steelcaps** contro top auto-attack; passa a **Mercury's Treads** se la squadra avversaria ha 2+ fonti di hard CC o forte danno AP.

**Skill order:** Massimizza prima **E** (Counter Strike) — la finestra di dodge scala col rank e il cooldown scende da 17 a 9 secondi. **Q** (Leap Strike) per secondo per waveclear e gap-close, **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stacka veloce su Jax perché le auto-attack a catena di Relentless Assault contano singolarmente. Secondario **Resolve** con **Bone Plating** e **Revitalize** per sopravvivere ai trade iniziali.

## Matchup chiave

- **Darius:** Pari pre-6, scala a favorevole. Tieni **Counter Strike** per l'anello esterno della sua **Q** (l'anello che lo cura). Se centra la zona di cura perdi il trade; se sbaglia lo stuni e te ne vai con un'auto bonus da **W**.
- **Camille:** Lane sfavorevole. Il suo **E** hookshot bypassa il timing del tuo stun e il **W** lifesteal sostiene attraverso Relentless Assault. Freezza la wave vicino alla tua torre (tieni la wave sul tuo lato per negarle i last-hit) e aspetta aiuto dal jungler.
- **Malphite:** Pari early, sfavorevole post-6 se hits Frostfire / Sunfire. Prova un all-in al livello 3 prima che hits due item; una volta che stacka Armor il tuo danno magico da **W** e **R** conta più delle auto fisiche.
- **Teemo:** Sfavorevole, classico counter ranged top. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** primo item, parti con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, e farma sotto torre fino all'arrivo di ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**. Cerca kill solo quando il jungler nemico è bot side.
- **Renekton:** Sfavorevole livelli 1-5, pari dal 6 in poi. Ti out-trada con il sustain della **Q** e lo stun della **W** prima che tu arrivi allo spike di **R**. Gioca passivo, dropa **E** quando committa **W** e freezza (tieni la wave dal tuo lato per negare last-hit) la wave vicino alla torre.

## Power spike & condizioni di vittoria

- **Livello 3:** Prima finestra di trade breve. Con **E + W + Q** sbloccati, puoi schivare due auto avversarie con **E**, rispondere con **Empower + Q** e uscire in vantaggio. Non estendere oltre 3 auto: il tuo stun va in cooldown.
- **Livello 6:** **Grandmaster's Might** si sblocca. L'attiva di Armor + MR rende favorevoli gli all-in ravvicinati. Lancia sempre **R** prima di committare, mai come finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completo (~ minuto 11-13):** Primo spike di duello. Puoi fare splitpush (spingere una side lane da solo per costringere il nemico a rispondere) e uccidere ogni top melee che ti sfida 1v1 senza aiuto del jungler.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ minuto 19-22):** Spike a due item. I proc di Sheen passano da ogni spell e finalmente hai il burst per one-shottare squishy in flank.

## Errori comuni

- **Lanciare Counter Strike a cooldown per waveclear.** **E** è il tuo unico layer difensivo — bruciarlo sui minion ti lascia esposto ai gank senza fuga né stun. Usalo solo quando vuoi fare trade o quando un gank è imminente.
- **Dimenticare di rilanciare la E per lo stun.** **Counter Strike** ha DUE cast: il primo entra in stance di dodge, il secondo rilascia lo stun AOE. I novizi la lasciano scadere; il rilancio manuale ti permette di timare lo stun nel frame esatto in cui il nemico committa.
- **All-in pre-6 contro bruiser.** Jax non ha pressione di kill prima della **R**. Fightare Darius o Renekton al livello 4 finisce con il first blood regalato. Stacka XP passivo, freezza se stai perdendo, aspetta la **R**.
- **Splitpush senza Teleport e senza vision.** Appena **Blade of The Ruined King** è online vuoi fare splitpush, ma se la squadra avversaria ruota a 4 e tu non hai Teleport (summoner spell che ti riporta alla base o accanto a un alleato) pronto, il tuo team perde il 4v4. Controlla sempre i recall timer del team prima di committare a una side lane.
- **Leap Strike sul nemico mentre scappi.** **Q** può targettare ward e minion. Se stai scappando, Q sul minion in fondo o sulla tua trinket ward, mai sul nemico che ti insegue — quello ti riteleporta proprio addosso a lui.

## Suggerimento avanzato

Usa **Counter Strike** durante un avvicinamento per timare lo stun sul frame di commit del nemico invece di lasciarlo auto-scadere. Il trucco: lancia **E**, cammina verso il nemico, aspetta che lanci la sua skillshot chiave o un dash (Renekton **W**, Darius **W**, Camille **E**), poi rilancia **E** nel momento in cui è bloccato in animazione. Lo stun lo prende a metà cast e ti regala una finestra garantita di 2 secondi per stackare Relentless Assault senza risposta. Allenalo in Practice Tool contro un target dummy con auto-attack attive — senti il ritmo entro dieci ripetizioni.
