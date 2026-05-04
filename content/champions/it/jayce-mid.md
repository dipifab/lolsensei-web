---
title: "Jayce Mid Build & Guida — Patch 16.9"
slug: "jayce-mid"
language: "it"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Guida Jayce mid per League of Legends Patch 16.9: rush di Manamune, combo di weapon-swap, matchup chiave, power spike, errori frequenti e consiglio avanzato."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Ad ogni weapon swap (R) Jayce ottiene un breve burst di Movement Speed e per qualche istante ignora la collisione con le unità."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: salta sul bersaglio infliggendo danno fisico e rallentando i nemici intorno. Cannon: spara una skillshot AOE a lungo raggio — il principale strumento di poke in mid."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passiva mana su auto, attiva un'aura che danneggia i nemici vicini. Cannon: massimizza l'Attack Speed per i prossimi 3 attacchi — finestra di burst con autoattack negli all-in."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback corto raggio che infligge danno magico in % di max HP. Cannon: piazza un gate che velocizza gli alleati e amplifica una Q (Shock Blast) sparata attraverso — il setup standard in mid."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (cooldown 6s). Alterna tra Hammer (engage, sustain, knockback) e Cannon (poke, AOE waveclear). Il primo attacco dopo il passaggio a Cannon riduce Armor e Magic Resist del bersaglio."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro mid-laner AP (Annie, Veigar, Syndra): lo scudo magico blocca la combo burst e aggiunge AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC duro single-target (Ahri charm, Lissandra R, Sylas E): lo spellshield blocca l'abilità di lockdown"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contro composizioni 5v5 raggruppate con frontline stackato: l'attiva AOE colpisce la backline attraverso il fronte"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps se il team enemy ha 3+ minacce AP/CC; la tenacity riduce la durata di stun e slow"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Carica Tear (Manamune) col poke Cannon Q, raggiungi lo spike Muramana al minuto 14, poi elimina a distanza i mid squishy con E-gate Q. Ruota nelle side lane appena la R è rank 2 per convertire il vantaggio."
  weakness: "Mana hungry pre-Manamune: una Q mancata butta gran parte dello scambio. Gli assassini mobili chiudono la distanza della Cannon Q dentro la cast window. Cala nel late vs Magic Resist stackata sui team AP-heavy."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack attivata dal pattern Cannon Q + AA + Hammer Q-AA-E aggiunge +8% di danno e trasforma il poke in kill threat già al minuto 6. Triumph restituisce HP nei takedown, Legend: Alacrity centra l'AS cap nella W (Hyper Charge), Coup de Grace +8% sotto il 40% HP."
    secondary_rationale: "Manaflow Band accumula stack rapidamente sul poke Cannon Q per +50 mana permanenti per stack. Transcendence al livello 5 aggiunge Ability Haste, che si compone con Manamune e accorcia la finestra di weapon swap della R."
    secondary_alternative: "Contro team comp di assassini (Zed mid + Kha'Zix jungle), swap Sorcery → Resolve con Bone Plating (riduzione di danno sui primi 3 colpi) e Second Wind (rigen HP sotto il 50%). Sacrifica scaling early per sopravvivere al burst pre-Edge of Night."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Mid-laner mage immobili senza dash"
      reason: "Non possono rispondere al range di Cannon Q pre-6. Veigar deve piazzare la E (Event Horizon) per setuppare la Q, ma il gate di Jayce amplifica la tua Q prima della sua combo. Al 50% HP, swap a Hammer e li uccidi in un colpo attraverso il cast delle loro abilità."
    - examples: ["akali", "yone"]
      archetype: "Skirmisher melee senza tool di poke ranged"
      reason: "Cannon Q supera il range della E di Akali (Shuriken Flip) e la Q di Yone; entrambi devono committare in finestra melee per fare danno. La Hammer E knockback nega le loro chain di dash, e lo shred di Cannon-stance apre l'armor per follow-up gank."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Assassini mobili con multipli gap-closer"
      reason: "Zed W (Living Shadow) e Fizz E (Playful/Trickster) chiudono il range della Cannon Q dentro la cast window. Una volta in range Hammer con la R up, ti bruciano prima che chiuda la combo Hammer Q-W-E. Edge of Night aiuta ma non salva se il gap-close arriva prima."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage artiglieria a lungo raggio"
      reason: "Hanno range superiore a Cannon Q. La Q di Xerath (Arcanopulse) e la Q di Vel'Koz (Plasma Fission) colpiscono a distanze che Jayce non può eguagliare senza camminare nella loro full combo. Ogni wave fight ti drena HP senza darti la finestra per fare all-in di rimando."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamer globali / cross-map"
      reason: "Jayce ruota lentamente sulla mappa senza sinergia di stance. La R di Twisted Fate (Destiny) ribalta una side lane in 8 secondi; la R di Galio (Hero's Entrance) atterra dove Jayce non può seguire. Il 1v1 in mid potrebbe essere pari, ma la macro brucia obiettivi altrove."
---

## Panoramica

Jayce mid è il classico **lane bully** (campione che vince la corsia in modo prepotente con poke costante): un ibrido ranged-melee che vince early con una skillshot AOE (area-of-effect, danno su zona) a lungo raggio in **Cannon stance** e finisce i bersagli con la combo leap-Q + knockback-E in **Hammer stance**. La R ha cooldown 6 secondi, e il primo attacco dopo il passaggio a Cannon riduce Armor e Magic Resist del bersaglio — il trigger d'ingresso di ogni all-in (scambio totale fino alla kill).

Il game plan in mid si divide in tre fasi. Pre-6 accumuli stack di poke Cannon Q sulla wave (il proiettile fora i minion); l'obiettivo è far calare il nemico dal 100% al 50% HP senza sprecare mana. Al livello 6 l'all-in Cannon-to-Hammer diventa kill threat: droppa **E** (Acceleration Gate) verso il bersaglio, spara **Q** (Shock Blast) attraverso il gate per il danno amplificato, swap a Hammer con **R**, salta con **Q**, droppa **W** per l'aura, knockback con **E** verso la tua torre. Post-Manamune (~minuto 14) la Cannon Q uccide in un colpo le wave dei mid squishy (campioni con poche difese, es. Annie, Veigar) e inizi a fare roam nelle side lane per tradurre il vantaggio early in tempo globale.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Salta start greedy come ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (precursore di Manamune): ti servono AD e lifesteal di Doran's Blade per sopravvivere ai primi tre minuti contro un mid-laner che eguaglia il tuo range.

**Core items (in order):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — primo item da rushare. Stacka durante il poke Cannon Q sulla wave. L'Awakening in ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** allo stack massimo aggiunge bonus damage ad ogni Q, AA e tick di W aura — il maggiore spike AD nella build di Jayce.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots contro lane AD (Yasuo, Zed, Akshan). Switch a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro AP/CC stackato.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (statistica che ignora una parte fissa dell'armatura nemica) più una passiva (Eminence) che accumula stack ad ogni takedown (kill o assist). Combinata con Muramana, lo scaling AD diventa brutale ad ogni roam.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality e slow on damage. Lo slow sulla Cannon Q trasforma i nemici in Flash in target da catch con Hammer Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro mid-laner AP (Annie, Veigar, Syndra). Lo scudo magico blocca la combo burst e aggiunge AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro CC duro single-target (Ahri charm, Lissandra R, Sylas E). Lo spellshield si carica fuori combat e blocca la prima abilità di lockdown (CC duro che ti immobilizza).
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — contro composizioni 5v5 raggruppate con frontline stackato. L'attiva AOE colpisce la backline attraverso il fronte e si rimborsa sui takedown.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai Plated Steelcaps se il team enemy ha 3+ minacce AP o CC.

**Boots:** Plated Steelcaps di default. Mercury's Treads contro magic damage pesante o chain CC.

**Skill order:** Maxa **Q** per prima (danno principale in entrambi gli stance), **E** per seconda (knockback per execute, gate per amplificare il poke), **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16. Nota: prendi **E** al livello 2 (non W) per kill pressure con la combo Acceleration Gate + Cannon Q.

**Runes:** Primario **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Contro team comp di assassini, swap secondario a **Resolve** con **Bone Plating** + **Second Wind**.

## Matchup chiave

- **Yasuo / Yone:** Bloccano la tua Cannon Q con il loro Wind Wall (W). Posizionati così che la Q arrivi da un angolo di flank (di lato) che li forza a guardare via dalla loro wave; non possono fermare con il muro quello che non vedono in tempo. Salva la Q per quando il muro è in cooldown, poi chain E-gate-Q.
- **Zed:** Tieni ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** carico in qualsiasi momento dopo il minuto 12; blocca la sua R (Death Mark). Pre-6 lo pokei. Post-6 la lane si ribalta: non superare la wave quando ha la R up.
- **Ahri:** Matchup pari, deciso dal timing della Q. La E (Charm) è telegrafata (visibile in anticipo) da lontano — schivala con un sidestep dietro un minion prima di sparare la Cannon Q. Quando manca la charm, la lane è tua per 9 secondi.
- **Annie / Veigar:** Matchup di poke gratis pre-6. Non hanno mobility; la combo Cannon Q + E ti fa drenare HP off-creep. Tieni d'occhio il cooldown di stun (passiva Annie, E Veigar) prima di all-in: il loro stun annulla l'animazione di knockback della Hammer Q.
- **Twisted Fate:** Lo pokei pre-6 ma perdi la macro game (gioco strategico di mappa). Quando la R va up, segnala mid mia (missing in action: campione sparito dalla mappa) e back presto; la lane prio (priority, vantaggio di lane che ti permette di lasciarla senza perdere risorse) che hai vale meno della sua gold card cross-map.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Cannon Q + Acceleration Gate + AA è uno scambio del 30% HP sulla maggior parte dei squishy. Il piazzamento del gate funge anche da via di fuga — droppalo dietro di te verso la torre se il nemico committa.
- **Livello 6 (prima R):** Entrambi gli stance unlockano al massimo. L'all-in Cannon-to-Hammer diventa kill threat al 45% HP invece che chunk trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune completion + stacking (~ minuto 12-14):** Quando si trasforma (Awaken) in Muramana, ogni Q colpisce ~15% più forte e il danno autoattack spike. È il momento di massimo spike per Jayce mid e dovrebbe puntare a roam (girare per la mappa per aiutare gli alleati) nelle side lane.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + stack di takedown (kill o assist, ~ minuto 19-22):** Gli stack di Eminence (la passiva di Hubris che dà AD bonus per ogni kill/assist) si compongono con Muramana per numeri AD assurdi. Forza un fight a questo punto o spingi per un inhibitor.

## Errori comuni

- **Buttare Cannon Q senza Acceleration Gate.** La Q nuda costa mana ed è facile da schivare. Droppa prima la **E** (Acceleration Gate) verso il nemico; il gate amplifica la Q che lo attraversa (range più lungo, più danno, AOE più larga) e il leggero delay forza il nemico a committare a una direzione di movimento prima di sparare.
- **Caricare Manamune troppo lentamente.** La Cannon Q deve colpire un campione o uccidere una wave per contare per gli stack di Manamune; le Q mancate non danno stack. Pianifica il poke sulla wave così che ogni Q colpisca almeno tre minion per accelerare la trasformazione della Tear.
- **Bruciare lo shred (riduzione di Armor/MR) R-Cannon sui minion.** Quando swap da Hammer a Cannon (R), la prima AA riduce Armor e Magic Resist del bersaglio per qualche secondo. Colpire un melee minion con quell'auto butta il trigger; salvalo per un campione ogni volta.
- **Roam senza consapevolezza del cooldown R.** La R ha cooldown 6 secondi e fa anche da unica mobility (passiva Move Speed sul swap). Muoviti con la R fuori cooldown così da poter disimpegnare da un counter-roam; arrivare a un fight senza R è committare senza uscita.
- **Dimenticare il sustain mana di Hammer W.** In assedi lunghi a Cannon poke, swap a Hammer per 2-3 auto per ricaricare mana via passiva W (Mana on hit). Saltarlo svuota il pool e forza un back precoce.

## Suggerimento avanzato

Allena il **timing-flip gate-Q** contro bersagli in movimento. La maggior parte dei Jayce droppa l'Acceleration Gate dove il nemico sta in quel momento, poi spara la Q attraverso. I pro invece droppano il gate dove il nemico *sarà* tra 0.5 secondi (cast time del gate più animazione Q) — di solito verso la wave, dato che il nemico deve camminare a last-hittare. La Q amplificata atterra sulla posizione predetta, non su quella passata. Allenalo nel Practice Tool mettendo un target dummy in modalità Move e impara la lead distance finché diventa muscle memory.
