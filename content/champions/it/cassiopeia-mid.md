---
title: "Cassiopeia Mid: Build e Guida — Patch 16.9"
slug: "cassiopeia-mid"
language: "it"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Guida Cassiopeia mid lane per League of Legends Patch 16.9: kit di partenza, build mage, matchup chiave, power spike, errori comuni e una tip di chiusura."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Passiva che amplifica tutti i bonus di Move Speed che Cassiopeia riceve da item, rune e dalla sua Q. Le boots scalano meglio su di lei."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "Area a terra (AOE) puntata che esplode dopo un breve ritardo e applica Poison. Colpire un campione nemico da' un burst di Move Speed per inseguire o fare kite."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Muro di nuvole velenose che rallenta e applica ground ai nemici dentro. I nemici nella nuvola (grounded) perdono dash, blink e ability di movimento — principale strumento anti-mobility."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Spell a basso cooldown (0.75s) che fa danno bonus a target Poisoned e cura Cassiopeia. Rimborsa mana sull'uccisione (takedown). Main DPS — non smette mai di lanciarla."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Cono frontale: i nemici che la guardano vengono stunati ~1.5s, quelli che le danno la schiena solo slow. Va puntata frontalmente per lo stun pieno."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro burst assassin (Zed, Talon, Akali): la stasi di 2.5s ti compra tempo per far rientrare la E e per il peel della tua squadra"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro single-target magic CC che ti tronca la E (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro comp con tanto healing (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds taglia lifesteal e regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap nel posto di Shadowflame appena un priority target compra un item di Magic Resist"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contro comp melee che ti camminano addosso: ogni colpo di E rinnova uno slow, peel per la backline oltre al ground della W"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Accumula il danno di Liandry's sui target avvelenati con E spam (0.75s cd) mentre la W blocca i dash. Punta la R frontale al livello 6 per convertire la lane prio in kill, poi scala come battlemage front-line."
  weakness: "Range 700, niente dash ne blink ne escape. Le artillery mage la pokano oltre il suo raggio; i gank pre-6 con hard CC chiudono la lane prima che scali. Senza E in target rimane senza mana."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery batte Domination/Precision: Stormraider's da' il burst di Move Speed (3 proc) che il kit non ha. Manaflow alimenta lo spam E da 40 mana, Transcendence aumenta l'Ability Haste (cooldown piu' rapidi), Gathering Storm scala oltre il burst di Electrocute."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery copre mana e HP nella laning phase ruvida prima di Liandry's Torment, Cosmic Insight fa rientrare Flash e item attivi piu' spesso nei teamfight."
    secondary_alternative: "Contro lane di poke pesante o burst (Xerath, Syndra, Zed), sostituisci Inspiration con Resolve: Second Wind (regen contro harass ranged) e Bone Plating (assorbe i primi 3 colpi di una combo all-in)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Mid laner basati su dash"
      reason: "Miasma li blocca dentro la nuvola (ground): nel momento in cui ci entrano, dash, blink e ability di movimento sono disattivate. Il kit collassa contro un campione che cancella la mobilita'."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mage immobili senza escape"
      reason: "Cassiopeia vince gli scambi prolungati contro chi deve restare fermo per castare: la E (cooldown 0.75s) fa piu' danno sui target avvelenati delle loro rotation complete, e non possono schivare la W sopra di loro."
    - examples: ["renekton", "sett"]
      archetype: "Bruiser melee che devono starti addosso"
      reason: "Senza un dash lungo devono camminare 700 unita' attraverso W e Q poison per toccarti. Twin Fang ti riporta full HP a ogni trade."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Mage artillery a lungo raggio"
      reason: "Pokano (chip damage) oltre il range Q di 850 di Cassiopeia. Senza dash non puo' chiudere la distanza, quindi ogni wave la sanguina. La sua curva di power richiede farm in lane che non puo' prendere in sicurezza."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamer global / cross-map"
      reason: "Cassiopeia e' incollata alla mid lane (no roam veloce). L'avversario usa la R per ribaltare side lane e dragon; lei vince l'1v1 ma perde la macro (gli scambi di obiettivo che succedono altrove sulla mappa)."
    - examples: ["lissandra", "syndra"]
      archetype: "Mage burst con CC chain-lock"
      reason: "Bloccano Cassiopeia con il CC prima che la W li metta in ground, poi le scaricano la full combo. La R di Lissandra e' point-and-click — Banshee's Veil aiuta ma non salva da una catena di stun da 6 secondi col jungler dietro."
---

## Panoramica

Cassiopeia e' una battlemage (mage che combatte a media distanza, non dal fondo schermo) con range circa 700 unita', appena fuori dal range delle basic auto-attack. Vince gli scambi di danno prolungati (i trade in lane) contro quasi chiunque debba spendere un dash per arrivarle addosso. La sua **Twin Fang (E)** ha cooldown 0.75 secondi — il piu' basso di qualsiasi mid laner — quindi una volta messa la **Noxious Blast (Q)** sul bersaglio diventa una fonte di danno continuo che la cura anche. **Miasma (W)** e' la firma del kit: i nemici dentro la nuvola sono *grounded*, cioe' dash, blink e ability di movimento smettono di funzionare finche' restano dentro. Sceglila contro assassin mobili (campioni il cui kit ruota attorno al dashare dentro e fuori, tipo Yasuo, Akali o Zed) e gli togli gli strumenti del mestiere.

Il suo game plan e' breve da spiegare e lento da eseguire: avveleni la wave (la fila di minion) con **Q**, lanci **E** in continuazione per pulire e fare harass, lasci cadere **W** appena un avversario dash-based fa engage (impegna il fight), poi punti la **R** frontale al livello 6 — il cono stuna chi la sta guardando e solo slowna gli altri. Non ha dash, niente blink, nessun equivalente di Flash (lo spell che teleporta a corto raggio): il prezzo di ogni gioca e' il positioning. Se fai un passo di troppo, il kit collassa in una sola catena di CC. **CC** = "crowd control", qualsiasi effetto che ti blocca: stun, root, slow, silence.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Cassiopeia consuma tanto mana (ogni E costa mana e ne lancia molte) e il regen di Doran's e' esattamente cio' che serve allo spam di E.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. La passiva burn (danno spalmato nei secondi successivi al colpo invece che tutto insieme) si accumula su ogni target avvelenato toccato dalla E, il che per Cassiopeia significa praticamente ogni cast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (l'item ignora una parte della Magic Resist nemica, quindi le tue spell fanno piu' danno). La passiva Serpentine Grace amplifica anche il Move Speed delle boots.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — il moltiplicatore di AP (Ability Power, la stat che scala il danno magico) piu' grosso del gioco. Aumenta il danno per cast della E che lanci 30+ volte in un teamfight lungo.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration che cresce quando il nemico e' sotto il 35% HP (HP-threshold passive: passiva di item che si attiva sotto soglia HP). Si allinea con l'esecuzione delle back line carry (i damage dealer squishy come ADC e mage che la tua squadra deve uccidere per primi).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro burst assassin (Zed, Talon, Akali — campioni che fanno tanto danno in 1-2 secondi). La stasi attiva di 2.5 secondi (diventi invulnerabile ma non puoi muoverti ne' castare) ti compra il tempo per far rientrare la **E** e per il peel della tua squadra (i compagni che bloccano i nemici lontano da te).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro single-target magic CC che ti tronca la E (charm di Ahri, R di Lissandra, gold card di Twisted Fate).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp con tanto healing (Soraka mid, Vladimir, Dr. Mundo top): applica Grievous Wounds (debuff che dimezza l'healing nemico), limitando lifesteal (HP recuperati dal danno inflitto) e regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swappa nello slot di Shadowflame appena un priority target (il nemico che la tua squadra deve uccidere per primo, di solito la sua carry principale) compra un item di Magic Resist.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contro comp melee che provano a camminarti addosso. Ogni colpo di E rinnova uno slow, peel (proteggi) per la tua back line oltre al ground della W.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e' di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (boots che danno Ability Haste, riducendo i cooldown delle spell) ha senso se vuoi piu' uptime di **W** per tenere bloccati i dash della squadra avversaria.

**Skill order:** Massimizza **E** per prima (main DPS button), **Q** seconda (poison + Move Speed), **W** per ultima. Un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Sorcery** con keystone **Stormraider's Surge** (il keystone e' la runa principale, in cima all'albero; "fare proc" significa attivare l'effetto della runa — Stormraider's si attiva dopo 3 colpi di spell rapidi), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondary **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure **Resolve** con **Second Wind** e **Bone Plating** contro tanto poke (chip damage da lungo raggio che logora l'HP).

## Matchup chiave

- **Yasuo / Yone:** Kit tutto dash. Il loro terzo Q in combo e' un dash con knock-up: la prima volta che ti saltano addosso, lascia cadere la **W** sotto i piedi — restano bloccati in melee senza movement, e da li' lo spam di **E** vince. Tieni la **R** per la loro ultimate, cosi' la prendono frontalmente.
- **Zed:** Threat champion. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item completo se prende un lead. Lascia cadere la **W** su di te quando usa la sua ultimate (ti marca e teleporta su una shadow clone); se atterra dietro di te, il teleport e' bloccato dalla W (grounded).
- **Xerath:** Matchup duro. Poke oltre il range della tua **Q**. Concedi qualche CS (creep score: oro dai minion uccisi) sotto torre e cerca un roam (lasciare la lane per aiutare un alleato) in bot al livello 6 — combatterlo in lane significa solo perdere HP.
- **Akali:** Prima del livello 6 vinci gli scambi prolungati con E spam sui target avvelenati. Dopo il 6 il suo smoke shroud (W) la nasconde, rompendo il target della E. Piazza ward sui lati e non spingere troppo avanti senza **R** pronta.
- **Twisted Fate:** La lane si vince, la mappa no. Lui ti stuna con la gold card (la W gialla), ulta in bot e trasforma la partita in un cross-map fight (un kill lontano da dove sei) su cui non incidi. Spingi la wave a cooldown e pinga il bot ogni volta che la sua **R** rientra.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** e un punto in **E**, hai il primo loop avveleni-poi-colpisci. Cammina avanti quando la loro wave (fila di minion) e' piu' grossa della tua e forza un trade.
- **Livello 6:** **Petrifying Gaze (R)** si sblocca. **R** frontale a corto raggio stuna ~1.5s, abbastanza per la combo piena **Q-W-E-E-E**. Forza un fight sul rimbalzo della wave (la fila smette di avanzare e torna verso di te).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minuto 11-13):** Lo spam di E applica un burn (danno over time) sopra il danno del colpo. Spingi le wave al doppio e pressi le finestre di roam (i momenti in cui il mid avversario vuole aiutare la squadra).
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Il danno per cast della E sale tantissimo. Stai al centro dei teamfight attorno agli obiettivi (Drake, Baron, torri) — Cassiopeia in late combatte piu' avanti delle altre mage, quasi come seconda front line.

## Errori comuni

- **Castare E senza poison sul target.** **Twin Fang** fa danno magico normale su un target pulito e bonus damage solo se avvelenato. Sempre **Q** (o W) prima, poi spam di E — mai al contrario.
- **Tenere W per l'engage perfetto.** **Miasma** e' anche difesa. Quando Yasuo lancia la W (muro che blocca i proiettili) o Akali ulta, lascia cadere la **W** su di te. Il ground annulla le loro movement anche senza follow up della squadra.
- **Puntare R alla cieca.** **Petrifying Gaze** stuna solo i nemici che la guardano. Dal fianco o di spalle li slowi e basta, sprecando il cooldown. Cammina davanti al fight, poi girati e tirala.
- **Spingere oltre il fiume senza vision.** Cassiopeia non ha escape. Senza un ward (oggetto che rivela visione) nel river bush, un gank (imboscata del jungler) con hard CC (stun e root lunghi, vs soft CC che e' solo slow) chiude la lane.
- **Ignorare il mana nei primi 5 minuti.** Ogni E costa 40 mana flat. Castarla in continuazione sui minion prima di Manaflow Band ti svuota la barra in due wave e ti lascia indifesa contro un all-in (impegno totale per ucciderti).

## Suggerimento avanzato

Allenati a lasciare cadere la **W (Miasma)** *sotto i tuoi piedi* nell'istante in cui un dash ti tocca, non davanti a te. Il ground si applica appena la nuvola atterra — se Yasuo, Yone o Akali fanno engage da corpo a corpo, sono esattamente sopra la nuvola spawnata e perdono subito il secondo dash. La maggior parte dei Cassiopeia lancia la W davanti come fosse una spell di poke, perdendosi l'uso difensivo che chiude sul posto la maggior parte degli all-in degli assassin.
