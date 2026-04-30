---
title: "Tristana Bot Build & Guida — Patch 16.9"
slug: "tristana-bot"
language: "it"
patch: "16.9"
champion: "tristana"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Tristana bot lane per League of Legends Patch 16.9: starter kit, build da marksman, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Tristana"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC late-game"
  abilities:
    - key: "P"
      name: "Draw a Bead"
      description: "La gittata di auto-attack di Tristana cresce a ogni livello. A 18 supera quasi tutti gli altri ADC."
      dd_spell_id: "Tristana_Passive"
    - key: "Q"
      name: "Rapid Fire"
      description: "Self-buff di attack speed per pochi secondi. Brucia un Explosive Charge stackato o finisce un target a basso HP."
      dd_spell_id: "TristanaQ"
    - key: "W"
      name: "Rocket Jump"
      description: "Salto a target che rallenta in atterraggio. Si resetta su takedown o sull'esplosione max-stack di E. Strumento di engage e fuga."
      dd_spell_id: "TristanaW"
    - key: "E"
      name: "Explosive Charge"
      description: "Bomba su un target che esplode dopo poco. Ogni auto o ability che colpisce il target aggiunge uno stack e aumenta il danno (max 4 stack)."
      dd_spell_id: "TristanaE"
    - key: "R"
      name: "Buster Shot"
      description: "Spinge indietro il bersaglio e stunna i nemici vicini. Raddoppia il raggio di una E già piazzata. Anche tool di disengage."
      dd_spell_id: "TristanaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6673"
      name: "Immortal Shieldbow"
      against: "contro lane di burst pesante (Draven, Lucian + Nami) — lo scudo lifeline ti regala un secondo extra per usare W"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro team con tank stackati (Sion, Cho'Gath, Sejuani) — armor pen obbligatoria se due nemici hanno 200+ armor"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro hard CC single-target su di te (Morgana Q, Leona R, Ashe R, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro assassini che ti pickano dietro (Zed, Talon, Rengar, Kha'Zix) quando sei il target principale"
    - dd_id: "3085"
      name: "Runaan's Hurricane"
      against: "swap quando i teamfight raggruppano 4-5 nemici e serve cleave (sostituisce Bloodthirster nella build)"
  base_combo: ["E", "AA", "AA", "Q", "AA", "W", "R"]
  win_condition: "Stacka quattro hit di E sul target prioritario, poi W addosso dal livello 6 e Buster Shot per detonare. Dopo tre item superi in DPS gli altri ADC a lunga gittata."
  weakness: "Range corto fino al livello 9-10: la lane early è dura contro poke. Se W è in cooldown e ti esponi, non hai escape e i burst champion ti deletano."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sivir", "ashe", "miss-fortune"]
      archetype: "Marksman immobili senza dash"
      reason: "W addosso al livello 6, Buster Shot verso il tuo support, e non hanno mobilità per disimpegnare con l'Explosive Charge stackato addosso."
    - examples: ["soraka", "yuumi", "janna"]
      archetype: "Support enchanter squishy"
      reason: "Il W oltre la linea di minion ti permette di deletare il support prima che l'ADC reagisca. Pochi enchanter sopravvivono a 4 stack di E più burst di Q al livello 6."
    - examples: ["senna", "varus", "jhin"]
      archetype: "Lane bully che droppano late"
      reason: "Sopravvivi al sanguinamento early e il range al livello 16 più il DPS a 3 item ribaltano la loro scaling statica. Il trade si rovescia entro il minuto 25."
  counterpicks:
    - examples: ["caitlyn", "ezreal"]
      archetype: "Marksman a lunga gittata con tool di sicurezza"
      reason: "Caitlyn ti supera in range fino al livello 13 ed Ezreal blink-E annulla il follow-up del W. Entrambi shovano la wave e ti zonano dal CS senza committare al fight."
    - examples: ["draven", "lucian"]
      archetype: "ADC lane bully con all-in early"
      reason: "Ti battono sui trade ai livelli 1-5 quando il tuo range è al minimo. Un singolo trade perso snowballa in un freeze dalla loro parte e CS persi che ritardano i tuoi spike."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Support tank da hard engage"
      reason: "Atterrano CC point-and-click dentro il range dei tuoi auto prima che W sia su. Anche Shieldbow regala solo un secondo extra; serve comunque un peeler per sopravvivere al dive."
---

## Panoramica

Tristana è un marksman **hyperscaling** (cresce molto più in forza con item e livelli rispetto agli altri ADC) con il range late-game più alto della classe. La passiva **Draw a Bead** allunga la gittata di auto-attack a ogni livello: al 18 spara da più lontano di quasi tutti gli altri ADC e da una posizione più sicura. Il suo kit accoppia un self-buff di attack speed (**Rapid Fire / Q**), un dash a target (**Rocket Jump / W**) che si resetta sul takedown di un campione, una bomba damage-amp (**Explosive Charge / E**) e un'ulti knockback (**Buster Shot / R**) che raddoppia il raggio di esplosione di E se il target la sta portando.

Il piano partita: **sopravvivi ai primi 8 minuti**, poi converti. Stacca quattro hit di E sull'ADC o support nemico, salta dentro con W quando hai una kill window (il momento in cui il target è abbastanza low HP da morire al tuo burst), e usa R per finire (con il raggio doppio di E) o per **disengage** se il teamfight ti collassa addosso (disengage = staccarti e arretrare). La singola decisione che separa una Tristana fed da una morta è l'uso di W: tenerlo per scappare o bruciarlo per **all-in** (uno scambio totale fino alla kill, senza tornare indietro).

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion di default. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** solo contro lane di **poke** pesante (poke = harass a distanza per logorare HP senza committare) come Caitlyn o Ezreal, dove ti aspetti di perdere il 30%+ HP da harass auto entro il minuto 5.

**Item core (nell'ordine):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primo spike di DPS. Il danno true on-hit ogni terzo attacco scala con la tua E stackata e ti fa vincere **skirmish** midgame (skirmish = piccoli scontri 2v2 / 3v3, non teamfight pieni) che senza perderesti.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — stivali da attack speed. Compra subito dopo il primo item; finiscili prima (verso il minuto 8) se l'ADC nemico corre attack speed.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — aggiunge range extra a un'auto-attack speciale "Energized" (un colpo che si carica mentre ti muovi e parte extra-lungo al successivo attacco). Combinato con la passiva, è quello che ti rende l'ADC con più gittata sulla mappa.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore di danno crit. Prendilo terzo o quarto in base a se la lane chiede più range prima.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal più scudo overcap, ti rende durevole nei teamfight prolungati.

**Item situazionali:**

- ![Immortal Shieldbow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6673.png) **Immortal Shieldbow** — sostituisce Kraken Slayer come primo item se la bot lane avversaria è una coppia da **burst** (burst = danno alto concentrato in 1-2 secondi, tipo Draven o Lucian + Nami). La passiva sotto soglia HP (scudo automatico quando scendi sotto ~30% HP) ti compra un secondo extra per usare W.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro team con tank stackati. Quando due nemici hanno 200+ armor, swappa uno degli ultimi item per questo.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro hard CC single-target indirizzato a te (Morgana Q, Malzahar R). L'attivo cleansa, e mantieni AD/movement nello stesso slot.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando assassini (Zed, Talon, Rengar) ti **pickano** (ti prendono isolata e ti uccidono velocemente) in side lane o prima che inizino i fight.
- ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — sostituisce ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** quando il team avversario raggruppa 4-5 (il cleave di Runaan's spalma gli stack di E su più target).

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** sono obbligatori su Tristana — l'attack speed amplifica il rate di stack di E e il tuo steroid Q.

**Skill order:** Massimizza **E** per primo (danno principale), **Q** per secondo (trade in lane ed esecuzione), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16. I primi 3 livelli vanno E → Q → W: hai tool di stack, boost di attack speed e un'escape pronti prima del livello 4.

**Rune:** Albero primario **Precision** con **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Sorcery** con **Manaflow Band** e **Gathering Storm** — Manaflow risolve i problemi di mana di Tristana che spamma E, Gathering Storm premia la sua identità hyperscaling. Cambia il secondario in **Inspiration** con **Magical Footwear** + **Cosmic Insight** se ti aspetti una lane safe e vuoi l'efficienza in gold.

## Matchup chiave

- **Caitlyn:** Lane dura. I suoi 650 di range ti battono nei **trade** fino al livello 13 (un trade è un breve scambio di colpi in lane). Stai dietro ai minion, non scambiare se non ha bruciato **Net (E)**, e farma sotto torre fino al primo item spike.
- **Draven:** Evita ogni trade ai livelli 1-3. Le sue asce fanno circa il doppio di un'auto normale di un ADC. Tieni W per scappare se flash; non usarlo mai per **engage** in lane (engage = iniziare il fight saltandoci dentro) se non è sotto il 30% HP.
- **Ezreal:** Lane lenta e safe. Ti supera in range agli auto early ma non può all-in senza bruciare **E (Arcane Shift)**. Quando la sua E è in cooldown hai 4-5 secondi per W in, stackare E e bruciarlo con Q.
- **Lucian + Nami:** Setup aggressivo. Rispetta l'engage quando la **Q** di Nami è su; la bolla è telegrafata (vedi l'animazione di carica, è schivabile). Dopo il 6 lo superi in range nei fight prolungati, ma pre-6 perdi l'all-in ogni volta.
- **Jhin:** Lo outscalia di brutto, ma il suo quarto colpo one-shotta Tristana sotto il 50% HP. Traccia i suoi colpi (visibili sulla cintura) e stai dietro ai minion durante la sua reload.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **Buster Shot** sblocca il combo all-in: stacca 4 hit di E con auto + Q, W addosso, R per detonare la E a raggio doppio. È la finestra di burst più alta prima degli item.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completo (~ minuto 11-13):** Primo item spike. Inizi a vincere skirmish che prima perderesti — raggruppati con il jungler per Drake o Voidgrub.
- **Tre item (~ minuto 25):** Kraken + Rapid Firecannon + Infinity Edge online. Superi in range e DPS la maggior parte degli ADC e puoi prendere fight prolungati a piena attack speed senza scudo.
- **Livello 16 + scaling tier-Rabadon:** Range di auto-attack al massimo. Con **Lethal Tempo** che cappa l'attack speed, sei la minaccia ranged a più alto DPS sulla mappa per i 5 minuti successivi.

## Errori comuni

- **Saltare in W per la kill a basso HP.** Ti affidi al reset di W su takedown — se sbagli anche solo 50 di danno chiudi la kill ma muori al prossimo auto nemico, e il trade del team si ribalta. Usa Q prima per confermare che la kill è in range, poi W solo se R è su per disimpegnare se il reset fallisce.
- **Sprecare R in offensiva quando ti serve per l'escape.** Buster Shot è il tuo unico tool di "no, me ne vado". Se il support nemico ha un hard **engage** come Leona o Nautilus (CC point-and-click che scatta non appena ti raggiungono), tieni R per il momento in cui flashano addosso, non per togliere 200 di danno extra a un tank.
- **Saltare lo stack di E nei fight.** Un combo W-Q-AA nudo fa danno mediocre. Stacca sempre E prima di committare — anche un solo auto di stack è il 25% di burst in più quando R detona.
- **Stare in lane fino al livello 6 senza Flash.** Se hai bruciato Flash e W è in cooldown, sei il target di gank più facile sulla mappa (il jungler nemico ti corre addosso senza che tu possa rispondere). Resetta a base prima di re-pushare la wave.
- **Costruire Bloodthirster come terzo item contro tank.** La lifesteal non serve a nulla se il danno è mitigato. Inserisci ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** in terzo o quarto slot quando il team nemico ha due **armor stacker** (champion che impilano armor, tipo Sion o Malphite).

## Suggerimento avanzato

Allena la **catena di reset di W nei teamfight**: piazza quattro stack di E sul **carry in back line** (il campione da alto danno che sta al sicuro dietro al team nemico, tipicamente un ADC o un mage), W per detonare la bomba (l'auto del quarto stack la fa esplodere subito senza bisogno di R), e se la kill passa il cooldown di W si resetta a circa 1 secondo. Da lì puoi W indietro nella stessa direzione da cui sei venuta, lasciando la back line nemica senza un corpo senza esporti per più di un secondo. Il trucco è l'ordine: stacca E da range di auto-attack prima, **poi** W — mai W a freddo con E non stackata, perché sprechi sia il tool di engage sia lo spike di danno.
