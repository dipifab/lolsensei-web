---
title: "Hwei Support Build & Guida — Patch 16.9"
slug: "hwei-support"
language: "it"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Guida Hwei support per League of Legends Patch 16.9: starter kit da pick-mage, build path principale, matchup chiave in bot lane, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Le abilità che fanno danno marcano i campioni avversari. Una seconda spell danneggiante completa la firma e lascia un segno che dopo poco esplode in area per danno magico."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Tre subspell di danno. QQ palla di fuoco veloce, QW fulmine ritardato a lunghissima gittata (danno extra su bersaglio isolato o sotto CC), QE pista di lava con zona slow."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Tre subspell di utility. WQ MS in linea per gli alleati, WW pool che dà shield nel tempo, WE tre orbi che potenziano i prossimi 3 spell/auto con danno bonus e mana."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Tre subspell di CC. EQ skillshot di flee, EW occhio piazzato a terra che spara un root a inseguimento quando un nemico entra, EE morsa che draga i nemici verso il centro."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Skillshot a lunghissima gittata. Si appiccica al primo campione colpito e si espande nel tempo, slowando i nemici intorno; esplode dopo qualche secondo per danno magico in area."
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro hard CC sul tuo ADC (stun di Leona, root di Morgana, hook di Nautilus): rimuove il lockdown che usano per finire il tuo carry"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro engage AOE pesante (Kennen, Wukong, Malphite, Yasuo): lo shield di squadra copre il fight forzato che non puoi evitare"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "contro composizioni di poke-and-disengage (logorano da lontano e poi rompono l'engage) dove tieni la squadra in HP invece di cercare pick"
    - dd_id: "3107"
      name: "Redemption"
      against: "contro composizioni da assedio e teamfight da 5v5 sugli obiettivi (drake pit, Baron pit) dove pre-casti la heal a fight in corso"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini che si tuffano sulla backline (Zed, Akali, Talon): la stasi ti tiene vivo mentre l'ADC riposiziona"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Trova il root con EW o il drag con EE, segui con QW o QQ per detonare la firma della passive, poi ulta Spiraling Despair sul bersaglio bloccato. Snowball della bot lane via pick ripetuti prima che la lane finisca."
  weakness: "Ogni spell è uno skillshot, quindi una E mancata ti lascia senza follow-up e senza scampo. Hwei non ha dash e ha mobilità bassissima: un singolo engage del support avversario lo prende fuori posizione."
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Aery dà doppio uso (poke su Q e shield bonus su WW), Manaflow Band regge il mana di combo a tre spell, Transcendence accumula ability haste per avere EW pronta ogni wave, Scorch chiude la kill su nemici a HP bassi."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery copre la sustain debole in lane, Cosmic Insight riduce il cooldown di Flash e degli active item (Mikael, Locket): più finestre di peel disponibili nei teamfight."
    secondary_alternative: "Contro composizioni full-engage che si tuffano sulla backline (Leona, Rakan, Nautilus), swap Inspiration a Resolve con Bone Plating (-30/-60 danno sul primo burst incassato) e Revitalize (+10% sui tuoi shield e heal): meno utility e CD reduction, più sopravvivenza pura."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter supports senza hard CC"
      reason: "Non hanno strumenti per punire il tuo setup EW (vision + root delayed). Tu out-rangi il loro poke e la QW delayed bolt li trova quando si fanno avanti per shieldare l'ADC."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "ADC immobili senza dash"
      reason: "EW root e EE drag connettono puliti perché non hanno gap-closer per interrompere il channel. Una volta primati, la firma della passive più la R chiudono la kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support skillshot-based senza escape"
      reason: "Matchi il loro poke range con QQ e QW, ma tu hai hard CC che a loro mancano. In una lane lunga vinci perché converti una E landata in kill, mentre loro possono solo erodere HP."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Support engage con hook e lockdown"
      reason: "Il loro engage point-and-click o hook arriva prima che tu chiuda il channel su EW. Una volta lockato Hwei non ha dash per scappare, e una E sbagliata lo lascia senza risposta."
    - examples: ["pyke", "rell"]
      archetype: "Engage con roam e gap-close"
      reason: "Chiudono la distanza che a Hwei serve per piazzare gli skillshot. La stealth di Pyke rende EW inutile (non vedi dove piazzare l'occhio), il W jump di Rell salta la zona slow di QE."
    - examples: ["alistar", "rakan"]
      archetype: "Tank con dash e knockup"
      reason: "Il loro dash più il knockup AOE interrompe la sequenza di Hwei a metà cast. Hwei ha bisogno di tre tasti per bloccare un bersaglio: un singolo W-Q di Alistar cancella quella finestra."
---

## Panoramica

Hwei support è un pick mage a lunghissima gittata che trasforma le bot lane immobili in kill facili. Il kit è costruito su tre alberi di subspell: danno sulla **Q (Subject: Disaster)**, utility sulla **W (Subject: Serenity)** e crowd control sulla **E (Subject: Torment)**. Gli strumenti che lo fanno funzionare da support sono **EW (Gaze of the Abyss)** — un occhio piazzato a terra che spara un root a inseguimento sul primo nemico che entra nel raggio — ed **EE (Crushing Maw)** — una morsa che draga i nemici verso il centro e li slow all'uscita. Entrambe preparano la **passive (Signature of the Visionary)** che esplode al secondo colpo per danno magico in area. La gittata di Hwei è da mage (intorno ai 900-1100 unità sulla maggior parte degli spell), quindi la lane si gioca a distanza di poke, non a melee.

Il game plan è "landa una E, vinci il trade." Piazza **EW** sulla traiettoria che l'ADC nemico deve percorrere per last-hittare, prima di un wave fight; prima la passive con **QQ** o **QW**, poi concatena la **R (Spiraling Despair)** sul target lockato così che il rallentamento si accumuli mentre il tuo ADC si avvicina per chiudere. Il vincolo duro è il posizionamento: ogni spell è uno skillshot a distanza senza dash, quindi un singolo engage avversario che ti prende fuori posto è una condanna a morte. Stai dietro al tuo ADC, non accanto.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (il nuovo support quest item che cresce in Bloodsong / Solstice Sleigh / Dream-Maker a metà partita) più 2 Health Potions. Stealth Ward sullo slot trinket.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support item, gold income mentre stai vicino all'ADC. Si auto-upgrada nel finished support item attorno al minuto 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — il motore del pick play: ogni slow o root del tuo kit applica un mark Mandate che il tuo ADC fa esplodere con un colpo bonus di danno magico. Hwei ha slow su QE, EE ed R, quindi il proc è praticamente garantito ogni fight.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration: QQ e la firma della passive bucano la backline squishy avversaria.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — ogni passive primata e detonata triggera uno stack di Helia: cura il tuo ADC e brucia il bersaglio. In coppia con Mandate fai double-dipping su ogni nemico bloccato.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra più una HP-threshold passive (passiva di item che si attiva quando il nemico è sotto soglia HP, qui 35%): l'effetto entra il momento esatto in cui una spell finisce un nemico a HP bassi. Si allinea con le esplosioni della R su target chunkati.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contro hard CC sull'ADC (stun di Leona, root di Morgana, hook di Nautilus). Rimuove il lockdown che usano per finire il tuo carry.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro engage AOE pesante (Kennen, Wukong, Malphite, Yasuo). Lo shield di squadra copre il fight forzato che la tua range da backline non può evitare.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — sostituisci Imperial Mandate come finished support item se la squadra avversaria è poke-and-disengage e tu spendi meno tempo a landare la E e più a tenere la tua squadra in HP nei fight lunghi.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini che si tuffano sulla backline (Zed, Akali, Talon). La stasi compra tempo per riposizionare l'ADC mentre tu sopravvivi all'engage.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se la squadra ti chiede di concatenare CC su fight lunghi — l'ability haste tiene EW pronta a ogni rotation.

**Skill order:** Maxa **E** prima (la fonte primaria di lockdown: EW root, EE drag, EQ flee), **W** seconda (shield, MS, empower a tre orbi), **Q** per ultima (scala con AP ma il valore della CD reduction conta meno quando il build slot è di support item, non di AP puro). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Swap a **Resolve** con **Bone Plating** e **Revitalize** quando il bot avversario ha hard engage (Leona, Rakan, Nautilus): la sopravvivenza vale più del cooldown degli active item quando la loro prima abilità decide il trade.

## Matchup chiave

- **Leona / Nautilus:** Minacce di engage. Stai fuori dalla loro range di hook/Q; mai usare **Flash** offensivamente in lane. Tieni **EW** come root di peel se camminano sull'ADC, non come setup di poke. Se flashano avanti, la **EE** drag può tirarli via dal carry.
- **Lulu:** Matchup pari. Lei shield e disengage da **EW**, ma tu out-rangi il suo poke. Aspetta che **W**i il suo ADC entrando in range, e rootala lei al posto suo — Lulu shieldata su un root è un kill-confirm per il tuo ADC.
- **Soraka:** Favorevole per Hwei. La sua MS bassa di base e la totale assenza di mobilità rendono **EW** quasi sempre confermata. Pusha la wave prima, poi gioca la combo **EW + R** su di lei a ogni cooldown — non ha risposta.
- **Pyke:** Matchup duro. La sua stealth toglie la vision di cui **EW** ha bisogno per lockarlo: se non lo vedi sullo schermo, l'occhio non fa nulla. Compra Pink Ward (Stealth Ward, poi Oracle Lens) e tieni i cespugli illuminati. Tieni **EE** come pull di peel quando il suo hook landa, non come strumento di poke.
- **Xerath / Vel'Koz:** Specchio di mage support a lungo raggio. Il loro poke matcha la tua range, ma tu hai hard CC che a loro manca: una **EW** landata vince la lane perché non possono schivare la **QW** delayed bolt da rooted. Tradi aggressivo prima del 6, prima che la loro **R** scali.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in **E** e uno in **W** hai lockdown più una pool di shield. Una **EW** confermata più lo spike del tuo ADC bastano a uccidere il support avversario se overextende.
- **Livello 6:** La prima **Spiraling Despair** sblocca ogni kill setup. La R si appiccica al primo campione colpito e slow l'area attorno: combinala con **EE** drag e crei una zona "non-camminabile" per 3-4 secondi.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate completion (~ minuto 12-14):** punto di snowball della bot lane (vantaggio iniziale che cresce, kill → gold → item → altre kill). Ogni passive primata più detonazione Mandate cancella la barra HP dell'ADC nemico in una rotation. Raggruppa con il mid per un drake fight in questa finestra.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ minuto 18-22):** inizi a fare 2-per-0 negli skirmish perché la heal di Helia sull'ADC supera il danno avversario e la burn estende la tua range effettiva. È la finestra per forzare pick attorno al river prima che la squadra avversaria si raggruppi per Baron.

## Errori comuni

- **Tirare Q senza setup.** **QW** poke nudo sulla lunga distanza sembra invitante, ma il bolt fa danno ridotto su bersaglio mobile. Landa prima **EW** root, poi concatena **QW** per il danno bonus su target isolato/rooted: i numeri triplicano.
- **Usare EW come spell di poke.** EW è il tuo kill setup. Tenerla per un momento definito per fight vince più game che spammarla per chip damage. Il cooldown è troppo lungo per permettersi una E persa.
- **Stare accanto all'ADC.** Hwei non ha dash. Se il support nemico engage sull'ADC e tu sei in melee con lui, morite entrambi. Posizionati dietro di 200-300 unità: così un engage che blocca uno dei due lascia all'altro lo spazio per peel o scappare.
- **Dimenticare l'albero W.** Molti Hwei giocano puro pick-mage e ignorano gli shield **WW** e gli orbi **WE**. A metà fight, un empower **WE** sulle auto del tuo ADC vale più di una terza spell di danno dal tuo kit. Usa entrambe le metà.
- **Camminare in side lane senza vision.** Il kit ha bisogno di vision per landare EW e per ultare cross-map. Piazza ward in tri-bush e river prima di ogni roam — senza vision il vantaggio di range sparisce nel momento in cui esci dalla lane.

## Suggerimento avanzato

La **pseudo-combo EW + EE** è il setup più valoroso del kit di Hwei e raramente compare nelle guide base. Posa **EW** (l'occhio) sulla traiettoria che il nemico deve percorrere per last-hittare; resta a terra alcuni secondi prima di lockare il bersaglio. Poi casta **EE** (la morsa che draga) per tirarli attraverso il raggio di lock-on dell'occhio — l'occhio spara automaticamente il root a inseguimento nel momento in cui entrano, anche se hanno provato a schivare la **EE**. Il drag diventa impossibile da evitare, il root è garantito, e la **R** più la passive chiudono la kill da HP pieni su uno squishy. La finestra è stretta (circa 1 secondo tra i due cast), ma confermata due volte in un fight chiude la game.
