---
title: "Alistar Support — Build e Guida — Patch 16.9"
slug: "alistar-support"
language: "it"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Guida ad Alistar support per League of Legends Patch 16.9: starter kit, build tank-engage, matchup chiave, power spike, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar carica il ruggito quando stuna o sposta un campione nemico, oppure quando muoiono nemici vicini (minion, mostri della jungle o campioni nemici). A carica piena il prossimo ruggito cura lui e gli alleati vicini."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Frantuma il terreno intorno ad Alistar e knock-up i nemici vicini per 1 secondo. Range corto: devi essere già addosso al bersaglio."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar fa un dash su un nemico, gli infligge danno e lo respinge in linea retta. Tool di engage chiave: incatena la Q subito dopo per la combo W-Q (lo respingi verso la tua squadra, poi lo knock-uppi)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Calpesta il terreno intorno a sé per 5 secondi infliggendo danno e ignorando la collisione dei minion. Ogni pulse che colpisce un campione aggiunge uno stack: a 5 stack la prossima auto-attack su un campione lo stuna e infligge danno bonus."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Cancella istantaneamente tutto il crowd control su Alistar e gli dà forte damage reduction (fisica + magica) per la durata. Va usata prima di engagiare in una squadra con tanto CC, non quando il fight è già finito."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dalle Mercury's vs bot lane da auto-attack pesante (Caitlyn, Draven, Tristana) quando l'harass early fa più male del CC late"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contro carry che stackano attack speed (Tristana, Kog'Maw, Master Yi): rallenta la loro velocità di auto-attack in un'aura ampia"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contro comp di burst AP (es. doppio mago tipo Syndra mid + Brand support): scudo magico passivo che si rigenera fuori combat"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Piazzare la combo W-Q (Headbutt indietro + Pulverize knock-up) su un carry squishy per aprire un fight che il team converte. Premi R prima di engagiare se hanno hard CC, così le catene di CC rimbalzano su di te."
  weakness: "Range di engage corto: devi essere addosso al bersaglio per piazzare la Q. Mana fragile nei primi livelli e zero poke a distanza; se la bot lane nemica gioca passiva, perdi la lane e devi roamare per restare rilevante."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanter squishy senza hard CC propria"
      reason: "Non hanno strumenti per fermare la combo flash + W-Q. Una volta che piazzi il knock-up sotto di loro muoiono prima che il loro ADC possa peelare: Sona e Yuumi non hanno escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADC immobili senza dash"
      reason: "La W ha 650 di range ed è target singolo: gli ADC senza dash o blink mangiano la combo intera ogni volta che si avvicinano per last-hittare. Una volta che parti non possono fuggire."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage support con poke skillshot e nessun escape"
      reason: "Il loro poke fa pressione sui cooldown, ma una E con stack pronti più un flash-Q in faccia li cancella: il vantaggio di range non conta nulla una volta che chiudi la distanza."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Enchanter di disengage con peel attivo"
      reason: "Il polymorph di Lulu ti annulla la W in pieno dash, la R di Milio rimuove il knock-up a distanza, la E di Renata strappa via il carry dalla combo. Il tuo unico engage viene risposto a costo zero."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Poker a lungo raggio con shield o binding"
      reason: "Ti mangiano l'HP gratis a 900-plus di range mentre tu non hai risposta. La Black Shield di Morgana blocca la Q knock-up: ti flashi addosso a vuoto."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Altri tank engage support con hard CC più lungo"
      reason: "Il loro primo cast atterra prima che tu entri in range di Q: Q hook di Nautilus, E dash-stun di Leona, W charge di Rell — tutte battono la tua W. Tu mangi il loro engage, loro non mangiano il tuo."
---

## Panoramica

Alistar è un **vanguard support** (un support di classe tank il cui lavoro è aprire i fight, non curare gli alleati): engagia saltando addosso al carry nemico e tenendolo bloccato con il crowd control. Il suo kit è costruito intorno a una combo iconica: la **Headbutt (W)** è un dash che respinge il bersaglio in linea retta, e ricastando subito **Pulverize (Q)** sotto i tuoi piedi lo knock-uppi. La sequenza completa (W in Q) sposta il nemico **dentro la tua squadra** e lo sospende in aria per un secondo intero, abbastanza perché il tuo ADC ci cammini sopra e scarichi danno gratis. **Trample (E)** ti dà movimento **ghosted** breve (passi attraverso minion e altre unità senza collidere) e una **proc** di stun (un effetto a stack che si attiva quando raggiungi una soglia) sulla prossima auto-attack a 5 stack. **Unbreakable Will (R)** rimuove qualsiasi crowd control su di te e dà forte damage reduction: è quello che permette a un Alistar a 1 HP di camminare attraverso un root di Morgana e finire comunque il kill.

Game plan: in lane, **bait** stando un po' avanti; nel momento in cui l'ADC nemico si fa avanti per last-hittare, Headbutt-lo verso il tuo team, knock-up con Q, cammina addosso con Trample stackato e il tuo ADC converte. Mid-game, **roam** (lascia la bot lane per aiutare mid o jungle) sfruttando il movimento ghosted di Trample più la flessibilità delle summoner spell: Alistar passa attraverso muri di minion dove altri support si incastrano. Late-game, sta in front line, ti mangi il CC nemico con R, e fai engage sul carry la cui morte chiude il fight.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato per i support) più 2 Health Potion. Non last-hittare i minion in lane: lascia il gold al tuo ADC, World Atlas paga il tuo gold a parte tramite la sua quest.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Si evolve automaticamente man mano che accumuli progresso della quest passando per ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, fino all'upgrade endgame che scegli.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist più **tenacity** (una stat che accorcia la durata del crowd control su di te). Sono i boots di default per un engage tank: stun e slow più corti vogliono dire che non ti bloccano fuori dalla combo **W-Q** subito dopo che l'hai committata.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active che scuda tutti gli alleati vicini per pochi secondi. Premilo nel momento esatto in cui parti con l'engage, così il tuo team assorbe il primo **burst** (il danno alto concentrato nei primi 1-2 secondi del fight) della squadra nemica.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega all'**ADC** (Attack Damage Carry: il compagno di bot lane che fa danno con le auto-attack, il principale damage dealer late-game della tua squadra): una parte del danno che lui prende viene redirezionata su di te, e in cambio lo curi. Bondi sempre il carry la cui vita ti serve di più.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame engage-focused del tuo support item (World Atlas si trasforma automaticamente in uno di questi una volta finita la quest). Porta una passiva **Spellblade**: dopo aver lanciato una qualsiasi abilità — Headbutt W, knock-up Q, R cleanse, persino un tick di Trample E — il tuo prossimo auto-attack infligge danno fisico bonus on-hit, e se atterra su un campione nemico questi subisce danno extra da qualsiasi fonte per 4 secondi. Lo schema di gioco è "abilità → AA → abilità → AA" stackato durante tutto il fight, non "tieni l'AA per dopo il CC".

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots con armor e riduzione del danno da auto-attack. Swappa dalle Mercury's Treads contro bot lane nemiche da auto-attack pesante (Caitlyn, Draven, Tristana) quando l'**harass** (poke e chip damage) in lane fa più male del CC late.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — rallenta la velocità di auto-attack dei nemici vicini in un'aura ampia. Pickalo contro carry che stackano attack speed (Tristana, Kog'Maw, Master Yi) dove il tuo lavoro diventa **peelare** (proteggere il tuo carry dai nemici che provano a ucciderlo) invece di engagiare.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — scudo magico passivo che si rigenera mentre sei fuori combat. Pickalo contro comp da burst AP (un setup tipo Syndra mid + Brand support): lo scudo si mangia un'ulti intera e ti permette di sopravvivere all'engage che hai aperto.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacy: uno stun da un secondo di Thresh diventa mezzo secondo, lasciandoti la finestra per concatenare **R** sull'engage. Swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** prima di completarli solo se la bot lane nemica ti fa più male del CC nemico late.

**Skill order:** Maxa **E** (Trample) per primo: è il tuo danno in lane più la proc di stun che ti dà un secondo crowd control dopo la Q. Maxa **W** secondo: cooldown più basso significa più finestre di engage. Maxa **Q** per ultima (è soprattutto un finisher; il rank-up cambia poco il knock-up, solo il danno). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** (l'albero rune difensivo, durability) con **Aftershock** (armor e magic resist gratis per pochi secondi quando applichi crowd control: scatta su ogni Q knock-up), **Font of Life** (il tuo CC marchia il bersaglio; gli alleati che lo attaccano si curano un po'), **Conditioning** contro lane che vincono late o **Bone Plating** contro lane che provano a bruciarti l'HP presto, e **Unflinching** (extra **tenacity**, la stat che accorcia il crowd control su di te, quando usi una summoner spell). Secondary **Inspiration** (albero utility) con **Hextech Flashtraption** (un Flash backup a corto raggio su cooldown lungo: oro per combo W-Q a sorpresa) e **Cosmic Insight** (cooldown ridotti su summoner spell e item active). **Stat shard** (i tre piccoli boost di stat in fondo alla pagina rune): Adaptive Force / Adaptive Force / Health (Adaptive Force = bonus AD o AP in base a cosa il tuo kit usa).

## Matchup chiave

- **Leona:** Specchio di **engage** (entrambi volete aprire il fight). Lei ha CC più lungo del tuo (dash-stun Zenith Blade, R Solar Flare), quindi non provare a engagiare per primo mentre lei ha cooldown su. Aspetta che lanci la E, poi si apre la tua finestra di 10 secondi: flash-Q sul suo ADC mentre lei è senza follow-up.
- **Pyke:** Skill matchup, niente edge chiaro sulla carta, decide chi gioca meglio. Ti out-poka con Q e ti out-roama in **stealth** (diventa invisibile mentre attraversa le brush). Tieni vision profonda nel river e forzalo a fightare in lane dove la R non gli resetta il kill.
- **Lulu:** Hard counter per il tuo **all-in** (commit totale alla kill). Il polymorph ti annulla la W in pieno dash. Non engagiare quando ha il polymorph su; tracciane il cooldown e forza fight solo nella finestra di 13 secondi in cui è giù.
- **Soraka:** Pura **enchanter da sustain** (un support healing-focused che vince tenendo l'ADC vivo, non aprendo i fight) senza tool di engage suo. Le puoi flash-Q in faccia ogni volta che il suo Flash è giù: muore nella tua combo prima che il suo ADC reagisca.
- **Senna:** Matchup di **poke** lungo (danno chip a distanza per consumarti l'HP). Ti bullizza l'HP sotto torre. Non rispondere, accetta la lane brutta, e roama mid o invade sfruttando il movimento ghosted di Trample: la lane di Alistar perde, ma il suo macro game vince.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + W):** Primo spike. La combo W-Q completa si sblocca nel momento in cui hai entrambe le abilità. Un ADC nemico che over-extende (si è spinto troppo avanti rispetto al primo **wave**, la riga di minion in arrivo) è una kill gratis se ingaggi con **Flash** ancora su.
- **Livello 6 (R sblocca):** Il potenziale di engage esplode. **Unbreakable Will** ti trasforma da **diver** one-shot (un campione che salta dentro la backline nemica e muore subito dopo) a tank che cammina attraverso hard CC e ri-apre il fight. Puoi flash-Q a una Morgana, mangiarti il root, R per cancellarlo, e Q ancora sul suo ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primo item da teamfight pronto. Il tuo engage ora porta uno shield gratis al team. Raggruppati con la squadra per il **Drake** (l'obiettivo dragone nel river bot: ucciderlo dà alla tua squadra buff stat permanenti) o per i **Voidgrubs** (piccoli mostri nel river top: la squadra che li uccide guadagna danno bonus alle strutture nemiche).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** Il proc Spellblade più il damage-amp di 4 secondi sui campioni trasforma la rotation completa in una sequenza di DPS. Ora W → AA → Q → AA non è più solo setup per il tuo ADC: può togliere il 25-30% di HP da un **squishy** (un campione a bassa difesa, tipo un ADC o un mago) da solo.

## Errori comuni

- **W-Q nella direzione sbagliata.** Headbutt respinge il bersaglio lontano da te, sulla linea su cui sei in piedi. Se Wi da sotto, lo sbatti su per la lane (lontano dal tuo team). W sempre dal **flank** (l'angolo laterale) così il tuo knockback spinge il carry dentro al danno della tua squadra, non dentro alla loro.
- **Engagiare senza follow-up.** Alistar senza il suo ADC e il suo team dietro è un tank senza danno. Se l'ADC è in base o il jungler è dall'altra parte della mappa, tieni la W. Un engage solo a 4v5 è solo regalare il cooldown della tua R alla squadra avversaria.
- **Bruciare R in modo proattivo per scappare.** **Unbreakable Will** è un tool offensivo, non un bottone di escape: dà damage reduction e cleanse del CC, ma niente movement speed. Usarla per fuggire senza il team intorno ritarda solo la morte di 5 secondi. Conserva R per l'engage che stai per committare, non per il disengage che non ti sarebbe servito.
- **Stackare Trample sui minion.** La E stacka **solo** sui colpi a campioni nemici, non sui minion. Stare su un wave vuoto aspettando che la proc di stun arrivi non fa nulla. La proc conta solo quando puoi incatenarla nel danno della tua squadra.
- **Non usare la passiva durante il fight.** **Triumphant Roar** carica dal CC che applichi (Q, R, proc di E) e dalle morti di nemici vicini: minion, mostri della jungle, o campioni nemici. In un teamfight dove minion e jungle creep muoiono intorno a te, puoi stackare il heal più volte. Tappa il bottone della passiva tra un'azione e l'altra: 50-100 HP gratis su di te e sul tuo ADC vicino fanno girare il fight.

## Suggerimento avanzato

Il **flash-W-Q one-shot**. Flash in avanti e cast subito **W** sul bersaglio prioritario nello stesso frame: il dash parte dalla tua nuova posizione flashata, non da dove il nemico si aspettava la tua hitbox. Poi accoda **Q** mentre sei ancora nell'animazione del dash di W: la Pulverize parte nell'istante esatto in cui finisce il knockback di W, con zero gap tra i due crowd control. Fatto bene, il bersaglio non vede nulla a schermo se non un secondo intero di knock-up e muore prima di reagire. La drill è muscle memory (il riflesso automatico delle dita): bindala in modo che Flash + W + Q stiano sotto la stessa mano, e fai pratica del ritmo nel **Practice Tool** finché non riesci a far partire tutti e tre dentro mezzo secondo. È la meccanica che trasforma Alistar da "tank che aiuta" a "tank che chiude i fight".
