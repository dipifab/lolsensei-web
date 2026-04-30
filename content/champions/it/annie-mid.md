---
title: "Annie Mid Build & Guida — Patch 16.9"
slug: "annie-mid"
language: "it"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Annie mid lane per League of Legends Patch 16.9: setup dello stun di Pyromania, build burst, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mago / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "Ogni 4 spell castate caricano Pyromania: la prossima spell offensiva infligge uno stun. Annie inizia partita e respawna con lo stun pronto — carica il counter sui minion prima degli all-in."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Palla di fuoco point-and-click a 625 di gittata. Rimborsa il mana e azzera il 50% del cooldown se uccide il bersaglio — strumento più economico di poke e last-hit del kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "Cono di fuoco a 600 di gittata. Strumento principale di waveclear (pulisce la wave caster minion in un cast) e spell con il base damage più alto al rank 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Scudo targettato + movement speed in calo su Annie o un alleato. Restituisce danno magico al prossimo attaccante. Conta come spell cast — usalo per ricaricare Pyromania prima dell'engage."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Danno AOE point-blank a 600 di gittata che evoca Tibbers, un orso che attacca e brucia i nemici vicini. Il cast stesso è una spell, quindi una R con 4 stack di Pyromania stordisce tutti i colpiti."
      dd_spell_id: "AnnieR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini mobili e diver (Zed, Diana, Talon, Akali) — la stasi ti fa sopravvivere dopo l'engage R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contro comp che fanno kite senza CC duro — lo slow su R + W tiene i target dentro l'aura di Tibbers"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario completa un item di Resistenza Magica"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Carica Pyromania a 4 stack sui minion, avanza con Flash + R per uno stun AOE point-blank sui nemici raggruppati e burst la back line squishy con Luden's Companion + Shadowflame."
  weakness: "Mobilità base nulla, range delle spell 600-625. Subisce poke dagli artillery mage e viene oltrepassata dagli assassini mobili che fanno dash fuori dal range della R prima che lo stun parta."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Mage immobili senza dash"
      reason: "La R di Annie è uno stun AOE point-blank a 600 di gittata + Tibbers DPS. I mage senza dash o stealth subiscono tutto il combo all'all-in di livello 6 e non hanno tempo di rispondere."
    - examples: ["diana", "katarina"]
      archetype: "Burst melee con tell visivo"
      reason: "Annie precarica Pyromania durante il waveclear: nel momento in cui fanno il commit alla gap-close, lo stun di Flash + R interrompe il loro combo prima che il danno parta."
    - examples: ["fizz", "kassadin"]
      archetype: "Mage melee deboli pre-6"
      reason: "Devono entrare nel range della Q per farmare pre-6: Annie li poka liberamente, tiene il livello 2 con Pyromania caricato e li forza al back senza counter-engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Artillery mage a lunga gittata"
      reason: "Pokano Annie da 850-1400 di range mentre lei sta a 625. Non ha dash né shield contro il poke a distanza e perde HP a ogni wave senza l'opzione di rispondere con un all-in."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "Assassini mobili post-6"
      reason: "I loro dash o intervalli di stealth escono dal raggio di 600 della R prima che lo stun parta. La shroud di Akali e il Wind Wall di Yasuo bloccano direttamente le sue spell principali."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamer globali / cross-map"
      reason: "Annie non ha range di roam — pulisce le wave e resta in mid. La loro ult ribalta side lane e dragoni, quindi Annie perde il macro game anche quando vince il matchup 1v1."
---

## Panoramica

Annie è il mago burst più semplice del gioco (un campione che fa molto danno magico concentrato in 1-2 secondi, poi aspetta i cooldown) e uno dei più forti nel punire gli errori intorno al livello 6. Il kit sulla carta è minimo — una Q point-and-click, una W a cono, uno scudo su sé stessa o un alleato e un'ulti che evoca un orso — ma la passiva **Pyromania** lo tiene insieme: ogni quarta spell castata carica uno stun garantito sul prossimo bersaglio colpito. Quel meccanismo trasforma il kit in una minaccia con stun pronto, capace di cancellare una back line squishy (i carry nella retroguardia del team in fight) con un solo tasto, una volta evocato Tibbers.

Il game plan è identico in lane e in teamfight: carica **Pyromania** a 4 stack sui minion, avanza a 600 di gittata e fai partire il counter sul bersaglio più importante con **R** (Tibbers), poi **W** e **Q**. Due decisioni separano un Annie buono da uno ottimo: sapere **quando tenere il counter pronto** (non bruciarlo su un minion subito prima del fight) e **come piazzare la R** (Flash + R è uno degli engage più affidabili — abilità che aprono un teamfight — del gioco contro un team raggruppato).

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (dà mana extra così Annie può continuare a castare Q e W presto) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (curano HP nel tempo durante la lane). Il ring alimenta i primi trade; le potion sostengono attraverso il poke (chip damage a distanza dal mage avversario).

**Item core (nell'ordine):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike di burst da primo item (un "power spike" è il momento in cui un campione diventa più forte grazie a un level-up o al completamento di un item). Il combo è corto, quindi il danno bonus al primo colpo di spell combacia con **R + W** su un target stordito.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — stivali con magic penetration fissa (ignora una quota di Resistenza Magica). Le tue kill vengono da target squishy con bassa Resistenza Magica, e la pen fissa scala meglio della percentuale a questo stadio.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con HP-threshold passive (passiva che dà bonus danno magico quando il nemico è sotto il ~35% HP). Finisher economico che trasforma il combo R + W di Annie da "quasi letale" a one-shot.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game (+30% AP totale, dove AP / Ability Power è la statistica che scala il danno di tutte le spell di Annie). Quando va online, il combo R cancella i nemici raggruppati, non solo i singoli squishy.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini mobili e diver (Zed, Diana, Talon, Akali). Dopo l'engage R + Flash, attiva la stasi (l'attiva che ti rende invulnerabile per 2.5 secondi): sopravvivi mentre il tuo team segue.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contro comp che fanno kite senza CC duro (squadre che si muovono all'indietro mentre attaccano, mantenendo distanza). Lo slow su R + W incolla i target dentro l'aura ardente di Tibbers.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Lissandra R, Twisted Fate stun, Ahri charm). Lo scudo blocca la spell d'engage, così tieni il tuo **Flash** per l'offensiva.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario completa un item di Resistenza Magica.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** in alternativa quando il team chiede più uptime di **R** come strumento d'apertura del teamfight.

**Skill order:** Max **Q** per primo (cooldown più basso, mana-refund su kill, il principale strumento di trade — breve scambio di danno in lane). Max **W** per secondo (waveclear, pulizia della wave di minion; base damage più alto al rank 5). Max **E** per ultimo (utility, scala meno). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** (l'albero del danno magico) con **Arcane Comet** (proiettile di danno magico extra quando colpisci un campione), **Manaflow Band** (il tuo mana massimo cresce ogni volta che colpisci con una spell), **Transcendence** (riduzione cooldown ai livelli 5, 8, 11), **Scorch** (danno da bruciatura extra sulla prossima spell ogni ~10 secondi). Albero secondario **Inspiration** con **Biscuit Delivery** (biscotti gratuiti che danno mana e HP in lane) e **Cosmic Insight** (più uptime di **Flash** e **R** in mid game).

## Matchup chiave

- **Yasuo / Yone:** Wind Wall (muro che blocca i proiettili) blocca **Q** e **W**. Esca il Wind Wall con una **Q** a stack basso (1-2 cariche, stun non pronto), poi avanza con stack pieni a Wind Wall in cooldown — il downtime è lungo, non bloccano sia **Q** sia engage.
- **Lux:** Ti supera in gittata a 1100 con la **Q**. Non rincorrere; pulisci le wave a distanza con **W**, cerca di fare roam (lasciare la lane per aiutare gli alleati altrove) appena finisci ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** e lascia che il jungler la punisca su un counter-gank.
- **Veigar:** Favorevole. Non ha dash e deve stackare la **Q** sui minion per AP; precarica Pyromania, avanza al 6 con **Flash + R** e lo stordisci fuori dalla sua **E** prima che possa intrappolarti.
- **Twisted Fate:** Gara a chi fa roam per primo. Spingi le wave con **W** a cooldown. Quando la sua **R** è up, ping mid mia (missing in action: segnala al team che è sparito) e ruota verso la side lane che colpisce con la tua ult pronta — fight 2v2 a Pyromania pieno = kill garantita.
- **Diana:** Pre-6 è di vetro (basse difese, muore in fretta); colpiscila con la **Q** ogni volta che si avvicina al last-hit (il colpo che uccide il minion per il gold). A 6, tieni Pyromania a stack pieni: quando ti **R**-tira addosso, **R + W** la stordisce prima che rilanci il secondo salto.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **W** sulla barra e Pyromania pronto, hai un all-in corto (fight con commitment totale, niente disengage) che batte i mage ranged che non si aspettano lo stun di livello 2. Se il nemico avanza per un cs (creep score: uccidere un minion per il gold) subito dopo il level-up, avanza e fai trade.
- **Livello 6 + Flash:** La prima **R** con **Flash** è il tuo power spike singolo più grande della partita. Un fight su wave raggruppata è una doppia kill gratis se il jungler avversario è dall'altra parte della mappa.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 11-13):** La soglia di burst si ribalta. Il combo **R + W + Q** su uno squishy stordito è ora letale senza follow-up del team.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** L'aura di Tibbers + l'AOE del cast diventano un nuke da teamfight (un cast che cancella più bersagli insieme); forza i fight obiettivo qui e cerca **Flash + R** su 3+ target raggruppati.

## Errori comuni

- **Bruciare il 4° stack di Pyromania su un minion subito prima di un all-in.** Controlla sempre il counter di stack sotto il portrait prima di camminare in trade range. Se è a 3 e casti **W** per waveclear, hai appena dato il tuo stun garantito a un caster minion.
- **Castare R senza Pyromania pronto.** **R** senza lo stun fa danno ma lascia il bersaglio uscire dall'aura di Tibbers. Se Pyromania non è caricato, ricaricalo con **E** su te stessa prima del fight.
- **Stare a gittata massima della R quando la casti.** **R** è 600 di range, lo stesso dell'auto-attack. Usa **Flash** per coprire gli ultimi 200-400 unit verso un team raggruppato invece di castare dal bordo — al bordo, solo il nemico più vicino viene stordito e gli altri scappano.
- **Saltare ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes per un altro item AP.** Il burst kill solo quando la Resistenza Magica nemica è bassa; più AP senza magic penetration fissa lascia gli squishy a 50 HP invece di 0.
- **Ripetere Q senza guardare il mana.** **Q** rimborsa il mana **solo se uccide**. Se colpisce un minion da 200 HP e non lo uccide, hai sprecato 60-80 mana. Usala su minion vicini all'esecuzione o su champion, non come poke quando sono full HP.

## Suggerimento avanzato

Allena il **Flash + R animation cancel** (un trick che usa **Flash** durante il frame del cast invece di aspettare che finisca): nel momento in cui premi **R**, premi **Flash** nella stessa direzione (l'input viene memorizzato durante il cast). Il cast point della **R** è abbastanza corto che **Flash** ti riposiziona sul bersaglio prima che l'AOE risolva — ti permette di colpire con stun una back line a 800 di gittata come se partissi da 600. La maggior parte dei novizi impara il combo come "premi **R**, poi reagisci a dove è atterrato"; l'animation cancel lo trasforma in un engage gap-close (un breve teletrasporto che chiude la distanza) da 700 unit quasi impossibile da schivare.
