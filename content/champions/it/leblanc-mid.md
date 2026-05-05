---
title: "LeBlanc Mid Build & Guida — Patch 16.9"
slug: "leblanc-mid"
language: "it"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "Guida LeBlanc mid per League of Legends Patch 16.9: build da AP burst assassin, combo Sigil double-tap, matchup chiave, power spike al 6, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "Quando LeBlanc scende sotto il 40% HP diventa invisibile per 1 secondo e crea un clone che la mimi per 8s. Strumento difensivo da bait, non fa danno."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Spell single-target: colpisce e marca il bersaglio per 3.5s. Una seconda abilità o auto-attack sul marcato detona il sigillo per il vero burst. Q rifonde mana e parte del cooldown se uccide."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash verso un punto, danno ai nemici all'arrivo. Entro 4s puoi ricastarla per tornare al punto di partenza. Engage con W1, escape con W2 — saperla ritardare è ciò che separa un pick pulito da un throw."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot che incatena il primo nemico colpito. Se resta agganciato 1.5s (no flash, no dash, no minion break) viene rooted e prende danno extra. Setup principale per la detonazione di Q."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Re-cast dell'ultima abilità base con danno potenziato. Permette doppio Q per il burst pieno, doppio W per engage più sicuro, doppio E per lockare. R non resetta i CD base — aggiunge un cast extra."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali): la stasi ti dà ~2.5s per aspettare il burst e chiudere con Mimic-Q"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primo item alternativo se vuoi un terzo dash oltre a W — burst extra e una carica che si somma a W per engage più lunghi dalla fog"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro magic CC single-target che spegne l'engage (Annie stun, Lissandra R, Ahri charm, TF stun): lo spell shield mangia la prima"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "alternativa a Void Staff se il team ha bisogno dell'aura cura più che di burst puro contro 2+ MR item"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowballa il lane mid con poke di Q pre-6, poi al 6 trasforma il vantaggio in una kill su un squishy con W-Q-AA-R-Q. Roamma in side lane ogni volta che R è up; pickoff con W in / W out."
  weakness: "Squishy senza difese se non il W di ritorno. Falloff in late: scaler come Kassadin o Cassiopeia ti superano dopo il minuto 25. Lockala con hard CC prima del burst e muore istantaneamente."
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
    primary_rationale: "Domination primary: Electrocute si attiva su ogni Q-AA-E (3 colpi in 3 secondi) aggiungendo burst gratis sopra la detonazione del Sigil. Sudden Impact ti dà magic pen extra dopo ogni W, e Ultimate Hunter taglia secondi all'R così il doppio Q torna prima fra un roam e l'altro."
    secondary_rationale: "Sorcery secondary: Manaflow Band sistema il mana stretto early per spammare Q senza dover backare, e Transcendence porta l'ability haste oltre il 40% riducendo i CD di W e R per trade ripetuti."
    secondary_alternative: "Contro lane che ti out-pokano (Xerath, Vel'Koz) swap Sorcery → Inspiration con Magical Footwear (boots gratis ~minuto 12) + Cosmic Insight (haste extra su Flash per combo W-Flash più tirate)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Mage immobili senza dash affidabile"
      reason: "Senza un'abilità di movimento non scappano dalla detonazione W-Q-AA, e la cage di Veigar è un cerchio che con W aggiri."
    - examples: ["lux", "syndra"]
      archetype: "Mage artillery squishy con cooldown alti"
      reason: "Se sopravvivi al primo poke di Q, all-ini quando la loro spell di setup è giù — Lux Q e Syndra E sono finestre da 12-13 secondi che puoi punire."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanter mid senza escape duro"
      reason: "I loro shield ritardano ma non fermano la seconda detonazione di Q; W in sopra lo shield, Q di nuovo con R, kill confermata prima del sustain."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mage artillery a lungo raggio"
      reason: "Le loro abilità arrivano a 1100-1500 unità, ben oltre il tuo Q a 700; ti shovano fuori dal range XP e non puoi all-inare oltre i loro setup di CC."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Mid late-scaler che ti superano"
      reason: "Sopravvissuti al tuo spike 6-9 ti sorpassano su danno e mobilità puri; l'R di Kassadin dopo l'11 schiva la tua finestra W-Q-R, la zona grounded di Cassiopeia disabilita il W di ritorno."
    - examples: ["lissandra", "galio"]
      archetype: "Mid laner con lockdown affidabile"
      reason: "Q-W di Lissandra o W taunt di Galio ti inchiodano sul posto durante il salto; LeBlanc non ha un Cleanse e i suoi HP fondono appena smette di muoversi."
---

## Panoramica

LeBlanc è un AP burst assassin: un campione costruito per buttare giù un singolo bersaglio squishy in 1-2 secondi (questa finestra di danno alto e concentrato si chiama "burst"). Ogni scambio gira intorno alla sua passive, **Sigil of Malice (Q)** — Q fa un colpo piccolo e marca il bersaglio, poi una seconda fonte di danno sul mark detona il sigillo per il burst vero. Il ritmo classico "double-tap" è Q per marcare, poi auto-attack o **E** per detonare.

Il game plan: poka con Q in lane (cooldown 6 secondi, lo spammi), esplodi un squishy (campione fragile, tipo gli ADC) al 6 con W-Q-AA-R-Q, poi roamma (lasciare la propria lane per fare una giocata altrove) in side lane appena R è up. LeBlanc è al massimo dal minuto 8 al 25; dopo, scaler come Kassadin o bruiser ti raggiungono. Pianifica sempre la via d'uscita — **Distortion (W)** la usi per engage *e* per disengage, ma solo se ritardi il recast per la fuga, non solo per confermare la kill.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. L'anello sistema il mana regen per spammare Q in lane.

**Core items (in ordine):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — spike di burst con danno magico bonus on-hit e proc di movement speed quando segni una takedown. Si lega perfettamente alla combo Q-AA-E: ogni detonazione triggera anche Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration piatta (il danno delle tue spell ignora una fetta della Magic Resist nemica). Upgrade diretto sui squishy.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra quando il nemico è sotto ~40% HP (è una HP-threshold passive: si attiva solo quando il bersaglio scende sotto quella soglia). Si somma al Mimic Q per one-shottare gli ADC.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game su tutta la tua AP. È lo slot col danno più alto in assoluto.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration percentuale quando i nemici iniziano a comprare MR; mantiene lo scaling contro i bersagli più tanky.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). La stasi ti rende invulnerabile per ~2.5s, lasciandoti aspettare il loro burst e chiudere col Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primo item alternativo se vuoi un dash extra; si somma a W per un engage più lungo dalla fog of war (zone della mappa senza vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC single-target (Annie stun, Lissandra R, Ahri charm, Twisted Fate stun). Lo spell shield blocca la prima abilità che ti tirano addosso.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — alternativa a ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** quando il team ha bisogno dell'aura di cura più che di burst puro.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sono il default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se affronti 2+ minacce di hard CC (Annie + Galio, Lissandra + Leona).

**Skill order:** Maxa **Q** per primo (poke e danno principali), **W** per secondo (cooldown ridotto sul dash di engage/escape e più danno all'impatto), **E** per ultimo (la durata del root scala col rank, ma il CD conta meno nel burst). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Le rune sono bonus passivi che scegli prima della partita; prendi un primary tree (5 rune) e un secondary tree (2 rune). Primary **Domination** con **Electrocute** come keystone — proca (l'effetto della runa si attiva) quando colpisci un bersaglio con tre abilità o auto-attack in 3 secondi, cosa che Q-AA-E copre senza sforzo. Aggiungi **Sudden Impact** (più magic pen dopo un dash di W), **Sixth Sense** per la pressione di vision quando roammi, e **Ultimate Hunter** per ridurre il CD di R così il doppio Q torna prima. Secondary **Sorcery** con **Manaflow Band** (sustain di mana per Q spam) e **Transcendence** (ability haste — le tue abilità tornano più in fretta). Stat shards: due Adaptive Force + Health Scaling.

## Matchup chiave

- **Annie:** Pre-6 la out-tradi col poke di Q. Post-6 ha lo stun pronto (la sua passive lampeggia "Pyromania" sul portrait a 4 cariche) e una catena con Tibbers ti uccide. Compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** come terzo item se snowballa (trasforma un piccolo vantaggio iniziale in uno molto più grande) early.
- **Twisted Fate:** Una corsa al roam. Sceglie la lane da gankare con **R**, ma perde il lane diretto — Q ogni volta che si avvicina a un minion per last-hittarlo e zonalo (controlla lo spazio attorno) fuori dalla wave. Tracka i windup di **R** con vision ward (item piazzabili che danno vision in un'area) sul river.
- **Kassadin:** Hard counter di scaling. Pre-6 lo poki con Q (non ha risposta fino al 6); dopo l'11 il suo **R** dasha più rapido del tuo W di ritorno e ti out-trade. Vinci la lane prima del minuto 14 oppure chiama il jungler due volte.
- **Xerath:** Ti out-rangea. La sua **Q** arriva a 1500 unità (il tuo Q è 700). Resta dietro la wave dei minion, schiva la sua Q lateralmente, e committi solo quando è low mana — la sua Q costa 80-100 mana, 5 Q mancate e si è prosciugato.
- **Diana:** Pari pre-6 (la out-poki), losing post-6 se lei landa la **R**. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** se ha 2+ kill; la stasi le sprecra l'ulti combo.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + W):** Primo vero spike. Q-AA-W2 è un pattern poke-and-leave: dash in con W, Q, auto-attack per detonare il Sigil, ricasta W per scappare. Usalo per zonare l'avversario fuori dalla seconda wave.
- **Livello 6:** La prima **R** è il singolo spike più grande della partita. Mimic-Q su un bersaglio marcato aggiunge ~200-250 danni al 6 con 1 item; contro un squishy al 65% HP la combo piena W-Q-AA-R-Q conferma la kill prima che possa Flashare.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Completamento Stormsurge (~ minuto 11-13):** La soglia di burst sale di altri 80-100 danni per colpo. Roamma in side lane con W appena la wave è spinta sotto la torre mid avversaria.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 23-26):** Moltiplicatore su ogni altro item AP. Da qui in poi one-shotti qualsiasi squishy attraverso Banshee's Veil con W-Q-R-Q-E. Forza fight intorno agli obiettivi (Drake, Baron) e cerca pick sulla backline (eliminare il carry avversario isolato dal team).

## Errori comuni

- **W in per la kill senza salvare il W2.** La finestra di recast di Distortion è solo 4 secondi. Se sboi tutta la combo in un secondo e poi resti piantato 3 secondi in mezzo al team avversario, il loro support ti prende e muori. Pianifica sempre: W in, danno, W out — il ritorno è la differenza fra un pick pulito e un throw (una morte evitabile che dà momentum al nemico).
- **Detonare il Sigil con un altro Q.** Q non detona il proprio mark — solo una *seconda* fonte di danno detona. Le LeBlanc nuove castano Q due volte aspettandosi numeri grossi; serve Q + auto-attack, oppure Q + E, oppure Q + R-Q. Il pattern è marca-poi-detona, mai marca-poi-marca.
- **Castare R-W come prima reazione.** La W mimicata ha range doppio, ma ti porta il doppio più dentro al pericolo. Mimic Q su un bersaglio marcato è quasi sempre il bottone della kill; mimic W è solo per chase ed escape.
- **Pushare la lane senza roammare.** Una volta arrivati a ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e R, il valore del champion sta nelle side lane. Se continui a farmare mid mentre una side lane sta morendo, sprechi il pick. Spingi la wave, pinga "in arrivo" e usa **W** dalla fog per pickare il side laner.
- **Buildare item da bruiser contro un team squishy.** LeBlanc non ha sustain di kit — gli item che barattano burst per durabilità sprecano il toolkit. Resta su ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** a meno che il team avversario abbia 3+ tank.

## Suggerimento avanzato

La combo "W-Flash" è l'engage a sorpresa firma di LeBlanc. Casta **W** verso il bersaglio e durante la finestra brevissima del dash premi **Flash** — Flash ti porta altri 400 unità oltre il punto di atterraggio di W, e il danno di W si applica nella nuova posizione. Il range totale W + Flash batte la maggior parte dei setup di counter-CC (stun di Annie, binding di Lux, taunt di Galio W) perché copri il gap più in fretta di quanto possano reagire. Tieni **R** per il secondo cast: una volta arrivata a tiro corto, R-Q sul bersaglio marcato chiude la kill prima che il loro support possa peelare (proteggere il loro carry). Il trucco è il buffer: premi Flash all'inizio del dash di W, non alla fine, altrimenti W si cancella e il burst è sprecato.
