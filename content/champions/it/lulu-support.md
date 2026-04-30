---
title: "Lulu Support Build & Guide — Patch 16.9"
slug: "lulu-support"
language: "it"
patch: "16.9"
champion: "lulu"
role: "support"
last_updated: "2026-04-29"
description: "Guida Lulu support per League of Legends Patch 16.9: build enchanter peel, uso di polymorph e shield, matchup, power spike e una tecnica avanzata sulla R."
quick_learn:
  champion_dd_id: "Lulu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Peeler"
  abilities:
    - key: "P"
      name: "Pix, Faerie Companion"
      description: "Pix segue Lulu (o l'alleato bersaglio della E) e spara bolt teleguidati sullo stesso target che Lulu colpisce. I bolt possono essere intercettati dai minion."
      dd_spell_id: "Lulu_Passive"
    - key: "Q"
      name: "Glitterlance"
      description: "Lulu e Pix sparano ognuno un bolt che attraversa i nemici. Più colpi sullo stesso target = danno extra. Slow forte che decade. Skillshot — allinealo prima della W."
      dd_spell_id: "LuluQ"
    - key: "W"
      name: "Whimsy"
      description: "Su nemico: lo polymorpha in una creaturina per ~1.5s (non può attaccare né castare). Su alleato: bonus Move Speed e Attack Speed."
      dd_spell_id: "LuluW"
    - key: "E"
      name: "Help, Pix!"
      description: "Su alleato: shield e buff a Pix che aggiunge bolt agli auto. Su nemico: danno magico e True Sight (visione anche in fog) per qualche secondo."
      dd_spell_id: "LuluE"
    - key: "R"
      name: "Wild Growth"
      description: "Targetta un alleato: knock-up sui nemici intorno, bonus max HP all'alleato e slow ai nemici vicini per la durata. Salvavita e counter-engage."
      dd_spell_id: "LuluR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP) — ogni shield gli dà Ability Power extra e più shield uptime per te"
    - dd_id: "3107"
      name: "Redemption"
      against: "quando i fight si trascinano (Drake, Baron) e serve heal AOE di gruppo da metà mappa; combina con Mikael's contro hard CC"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE pesante (Yone R, Kennen R, Orianna R) — l'attivo dà uno shield istantaneo a tutta la squadra durante una wombo"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro single-target magic CC (Ahri charm, Morgana Q, Lissandra R) — lo spell shield mangia la spell che ti bloccherebbe la R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Tieni vivo l'AD carry in ogni all-in: shielda con la E, peela i diver con il polymorph della W, e usa la R come knock-up salva-vita quando saltano sulla back line."
  weakness: "Niente hard CC al level 1 e range della E corto. Se hook o engage a distanza ti landano prima della R, non salvi il carry e il kit resta vuoto."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zed", "kha-zix", "rengar", "kayn"]
      archetype: "Diver e assassini single-target"
      reason: "La W di Lulu polymorpha il diver a mezz'aria (lo trasforma in una creaturina che non può attaccare né castare), e la R lo knock-uppa appena atterra — l'engage si annulla con un solo tasto."
    - examples: ["jhin", "kog-maw", "twitch", "vayne"]
      archetype: "AD carry immobili con autoattacchi forti"
      reason: "Ardent Censer più W ally-cast danno bonus Attack Speed e Move Speed senza riposizionare; shield e R coprono la mancanza di escape del marksman."
    - examples: ["leona", "rakan", "alistar", "rell"]
      archetype: "Engage support con un solo dash"
      reason: "Tutto il loro engage è un singolo salto telegrafato — Lulu polymorpha a mezz'aria e l'AD carry esce libero."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke", "nautilus"]
      archetype: "Support hook con CC a lungo range"
      reason: "Lulu non ha escape e niente hard CC al level 1 — un hook landato prima del 6 cancella l'AD carry prima che la R sia online per spingere via l'engager."
    - examples: ["xerath", "brand", "vel-koz", "zyra"]
      archetype: "Mage support a lungo range"
      reason: "Pokano fuori dai 650 di range della E shield: Lulu può curare il colpo ma non rispondere, l'attrito di HP (lenta erosione di HP su tante wave) vince la lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanter sustain che out-healano il poke"
      reason: "L'unico danno in lane di Lulu è la Q, skillshot lento da allineare — questi enchanter out-healano il trade e la battono sullo scaling teamfight."
---

## Panoramica

Lulu è un enchanter support costruita su due verbi: **peel** (proteggere un alleato, di solito l'AD carry — il marksman della bot lane che scala con gli item — da chi lo sta attaccando) e **buff**. La passive **Pix, Faerie Companion** auto-attacca insieme a te per poke gratuito. **Glitterlance (Q)** è uno slow a lungo range che allinei dopo aver inchiodato un target. **Whimsy (W)** è un polymorph (trasforma il nemico in una creaturina che non può attaccare né castare per ~1.5s) se castato su un nemico, ed è un buff di Move Speed e Attack Speed se castato su un alleato — un solo tasto, due usi completamente diversi. **Help, Pix! (E)** shielda un alleato o logora un nemico. **Wild Growth (R)** è uno dei salvavita più puliti del gioco: knock-uppa tutti i nemici intorno all'alleato bersaglio (un'abilità che spezza il tentativo di engage avversario — quando saltano dentro, tu li butti fuori) e dà a quell'alleato un blocco di HP massimi extra per qualche secondo.

Il game plan in lane è calmo ed egoista per l'AD carry: non lo lasci mai morire. Lancia la **E** su di lui ogni volta che è pronta per shield e buff bolt, tieni la **W** per il momento in cui un hook o un dash committa sul carry, e tieni la **R** come panic button per un all-in (un commitment totale che finisce in kill o flash). Fuori dalla lane, Lulu trasforma un AD carry fed in un 2v9 buffandolo mentre tiene i diver lontani dalla back line.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da support che si evolve dando più gold e cariche ward) più 2 Health Potion. Salta gli starter da danno: Lulu non snowballa sulle kill di lane (snowball = piccolo vantaggio iniziale che cresce — kill diventa gold, gold diventa item, item diventa più kill), scala sull'utility nei teamfight.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — si evolve in un legendary support più avanti. Accumula gold e cariche ward in automatico mentre peeli.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'Ability Haste ti permette di castare **E** shield e **W** polymorph su cooldown ridotti; boot di default per gli enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva di heal-on-shield che cresce con la durata del fight. Combinata con la **E** spammata, l'AD carry quasi non subisce danno netto.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — ogni shield che lanci dà bonus Attack Speed e danno on-hit all'alleato. È il miglior item del gioco accanto a un AD carry da autoattacco.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — pulisce l'hard CC (stun, root, charm — quelli da cui non puoi muoverti) da un alleato. Obbligatorio se il nemico ha una minaccia di lockdown single-target sul tuo carry.

**Situational items:**

- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP). Ogni shield gli dà Ability Power extra.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si trascinano (Drake, Baron, teamfight lunghi). Heal AOE ritardato che puoi droppare da metà mappa.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE pesante (danno su area, tipo Yone R o Kennen R). L'attivo dà uno shield istantaneo a tutta la squadra.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro minacce di magic CC single-target su di te (Ahri charm, Morgana Q). Lo spell shield mangia la spell che ti bloccherebbe fuori dalla **R**.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è il default. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** le sostituiscono contro comp piene di slow da cui devi scappare.

**Skill order:** Maxa **E** per prima (valore shield e danno bolt scalano per livello), **Q** seconda (più burst e slow), **W** ultima. Metti **R** ai livelli 6, 11, 16. Parti **E** al level 1 per vincere il primo trade all-in con shield e bolt di Pix sull'AD carry, poi **W** al 2 per il boost di Move Speed e l'opzione polymorph di follow-up.

**Runes:** Albero primario **Sorcery** con **Summon Aery** (attacca un piccolo proc di danno e shield alle tue spell), **Manaflow Band** (mana sustain per shieldare e **W** ogni wave), **Transcendence** (Ability Haste al level-up — più uptime sulla **E** in lane), **Scorch** (più poke con la **Q** fino al livello 9). Secondario **Inspiration** con **Biscuit Delivery** (biscotti gratis di mana e HP in lane) e **Cosmic Insight** (Ability Haste sui Summoner Spell, **Flash** incluso). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Leona / Rakan:** Hard engage support. Tieni la **W** per il momento in cui committano sull'AD carry — il polymorph cancella il dash a mezz'aria. Carica la **R** per il commitment pieno se Flashano dentro.
- **Blitzcrank / Thresh:** Support hook. Stai dietro ai minion ogni volta che attraversi il river. L'hook landa una volta e l'AD carry è morto — non puoi **R**-are fuori da uno stun da 1.75 secondi.
- **Xerath / Brand:** Mage support fuori dal range della ![Help, Pix!](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **E** shield. Stai attaccato alla wave, non scambiare auto, e fatti hard-sidare la lane dal jungler. Compra ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** prima del solito.
- **Soraka:** Specchio di sustain. La out-buffi al costo di meno heal grezzo. Forza un all-in al level 2: **W** in faccia per lo slow su Q follow-up, **E** sull'AD carry, spingila fuori dalla wave prima che lo spike sulla **R** arrivi online.
- **Pyke:** Minaccia da roam. Trackalo con vision in tri-bush e ingresso river; se lascia bot lane, ping mid subito. La **R** di Lulu ferma la sua execute solo se la casti prima che il dagger landi — reagisci sull'animazione di hook, non dopo.

## Power spike & condizioni di vittoria

- **Level 2:** Con **E** a 1 e **W** a 2 puoi shield-engagiare un trade corto (uno scambio breve di colpi in lane, non un all-in). Quasi tutte le lane perdono questo trade perché il loro spike di livello 2 (il momento in cui un campione ottiene un boost improvviso di potenza) è più debole del tuo più un AD carry buffato dai bolt di Pix.
- **Level 6:** Si sblocca **Wild Growth**. Ogni tentativo di 2v2 dei nemici da qui diventa vincibile — engagiano, tu knock-uppi l'engager e dai HP bonus al carry, il trade si ribalta.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer + ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Ardent Censer (~ minuto 16-20):** È lo spike teamfight in cui smetti di essere un support da lane e diventi un moltiplicatore di squadra. L'HP effettivo dell'AD carry quasi raddoppia se shield-spammi durante un fight, e Ardent su ogni shield alza il suo DPS.
- **Tre legendary online (~ minuto 25):** Con ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** aggiunto, pulisci l'unica abilità CC che cancellerebbe il tuo carry. Da qui ogni fight su un obiettivo è un 5v4 se il nemico committa hard CC.

## Errori comuni

- **Castare la W sul target sbagliato.** **Whimsy** è un polymorph sui nemici e un buff di Move Speed sugli alleati. Default: cast su nemico nei trade 2v2 (il polymorph vince l'all-in); cast su alleato per chase o fuga. Mettere il cursore sull'AD carry per riflesso brucia il cooldown per niente.
- **Bruciare la R per una kill.** La **R** di Lulu è il miglior salvavita knock-up del team. Ogni volta che la usi per chiudere una kill che l'AD carry avrebbe finito comunque, lasci la squadra senza panic button per gli 80-120 secondi successivi.
- **Shieldare te stessa.** ![Help, Pix!](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **E** può targettare anche te, ma il buff bolt di Pix su Lulu è sprecato (i tuoi auto sono deboli). Default: shield sull'AD carry; auto-shield solo se ti hanno locked uno skillshot (un proiettile mirato che si può schivare) e il carry è già al sicuro.
- **Stare troppo indietro nei fight.** La **E** ha un range corto (650 unit). Se peeki da dietro il team non puoi shieldare nessuno. Stai a portata shield dell'AD carry, second-line — più vicina di quanto ti dica l'istinto.
- **Fare auto sui minion per danno.** I bolt di Pix su Lulu colpiscono i minion, ma pushare la wave con le auto regala al nemico un trade window gratis senza alcun beneficio per te. Last-hitta solo quando l'AD carry è respinto in base.

## Suggerimento avanzato

Allenati alla **R su te stessa**. **Wild Growth** può targettare qualsiasi alleato — incluso te in un panico. Se un diver salta su di te e l'AD carry è morto o già al sicuro, **R** su te stessa: il knock-up cancella il loro channel o follow-up, gli HP massimi bonus ti regalano 600+ HP effettivi per qualche secondo, e l'aura di slow gli fa mancare ogni autoattacco mentre cammini in salvo. È la giocata che trasforma un 2v3 sbagliato in una ritirata pulita — e quasi nessun Lulu di low rank si rende conto che la **R** è anche un tasto self-cast.
