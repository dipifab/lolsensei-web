---
title: "Evelynn Jungle: Build & Guida — Patch 16.9"
slug: "evelynn-jungle"
language: "it"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida a Evelynn jungle per League of Legends Patch 16.9: percorso di gank con Demon Shade, build core con Lich Bane, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Fuori dal combattimento Evelynn entra in Demon Shade. Si cura a basso HP e ottiene Camouflage dal livello 6 — invisibile ai ward e ai nemici oltre un piccolo raggio."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Il Lasher di Evelynn colpisce il nemico più vicino, poi spara fino a tre raffiche di spike sui bersagli intorno. Principale clear in jungla e DPS in combo."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Maledice un nemico. Dopo un breve delay, il prossimo attacco o spell di Evelynn applica un charm e gli riduce la magic resist. Lanciala da Demon Shade per il setup più pulito."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dash sul bersaglio infliggendo danno magico e dando un breve move speed. Da Demon Shade diventa un balzo lungo con danno bonus e reset dell'autoattack."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Breve finestra untargetable, poi un cono di danno magico massiccio davanti a lei prima del blink all'indietro. Danno bonus sotto il 30% HP — il tuo execute."
      dd_spell_id: "EvelynnR"
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
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena 2+ nemici comprano un item di Resistenza Magica — sostituisce uno slot di danno per penetrazione magica percentuale"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro lockdown single-target che punisce l'animazione della R (Veigar cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo, Aatrox) — applica Grievous Wounds, dimezza le cure"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pickoff su nemici isolati post-6 con W charm in R execute. Usa Demon Shade Camouflage per invadere e fare gank senza warning di vision. Trasforma il gold lead di jungla in snowball e colpisci gli squishy negli skirmish."
  weakness: "Pre-6 zero pressione di gank — niente Camouflage, niente charm range. Counter forte di Control Ward e lane prio. Se i nemici si raggruppano con peel, non raggiungi la carry."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primario: Dark Harvest accumula stack su pickoff isolati — game plan di Evelynn. Sudden Impact scatta dopo R untargetable e W charm per più burst. Sixth Sense rivela i ward avversari, mantenendo utile la Camouflage. Ultimate Hunter taglia il CD della R."
    secondary_rationale: "Sorcery secondario rispetto a Inspiration o Resolve: Evelynn ha bisogno di scaling AP puro per one-shottare la carry, non di utility. Manaflow Band tiene il mana per spam di Q in clear, Gathering Storm aggiunge AP gratis ogni 10 minuti per il W+R one-shot del late game."
    secondary_alternative: "Se enemy team ha 4+ squishy e poco peel, passa da Sorcery a Precision con Presence of Mind (refund mana su takedown) e Coup de Grace (+8% danno sotto il 40% HP) per execute più consistenti."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hyper-carry immobili"
      reason: "Carry senza dash o blink: una W charm + R li uccide istantaneamente in teamfight, e non hanno strumenti per uscire dal cono della tua R untargetable prima che esploda."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Healer di backline senza escape"
      reason: "Una volta arrivata in fondo all'enemy team con la Camouflage di Demon Shade, queste enchanter muoiono in un W+R prima di castare il proprio kit difensivo."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Junglers da farm e scaling"
      reason: "Jungler che vogliono farmare e scalare: Evelynn invade, ruba camp e fa gank con Camouflage post-6, costringendoli a difendersi invece di scalare."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Duellanti early-game con lethality"
      reason: "La Q di Lee Sin e il leap di Rengar coprono distanza prima del livello 6 — quando Evelynn non ha Camouflage né R, perde le invade pre-6 e i duel 1v1 senza scampo."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanter che peelano la carry"
      reason: "Lulu R rende invulnerabile la carry, Tahm Kench la mangia, Morgana E le dà Spell Shield: ognuna annulla la combo W+R nel momento esatto in cui dovrebbe killare."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Support con vision e CC chain"
      reason: "Comprano Control Ward al primo back, ti vedono in Demon Shade in lane, e la chain di CC (Naut Q, Leona E+R) ti blocca prima che la W charm parta."
---

## Panoramica

Evelynn è l'unica campionessa in League con uno stealth incorporato che scala col livello: dal livello 6 la passiva **Demon Shade (P)** le dà Camouflage fuori dal combattimento, cioè i nemici non la vedono se non sono dentro un piccolo raggio attorno a lei — neanche i Control Ward (i ward rosa che gli avversari piazzano per rivelare lo stealth) la rilevano a piena distanza. Tutta la sua identità sta qui. È un'assassina a danno magico senza vero waveclear o duel power prima del 6, ma nel momento in cui sblocca **Last Caress (R)** diventa il jungler da pickoff (champion costruito per eliminare un nemico isolato alla volta, fuori dai teamfight pieni) più affidabile del gioco: cammini invisibile in fondo all'enemy team — la backline, dove stanno le carry squishy (campioni ad alto danno e poche difese, tipo gli ADC) — applichi un charm alla carry con **Allure (W)**, e la elimini in una combo prima che qualunque peel (abilità degli alleati che proteggono la carry, tipo lo shield di Janna o l'ult di Lulu) possa reagire.

Il piano partita è brutale: fai farm fino al 6 senza morire, cerca un gank su una lane a basso HP senza ward vicini, e da lì in avanti caccia un bersaglio isolato ogni volta che la **R** è disponibile. Lo skill expression sta nel leggere il pathing (dove puoi camminare in Camouflage senza far suonare un ward?) e nel timing del commit (non impegnarti a fondo con la **R** se la carry ha Cleanse o un peeler tipo Lulu vicino). Se fai snowball sui primi due pick (trasformi un vantaggio iniziale in più kill, più gold, più item), il team avversario si raggruppa, tu scali (guadagni potenza con item e livelli) in range di one-shot con ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** e chiudi la partita dall'invisibilità.

## Build Consigliata

**Item iniziali:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter standard da jungler melee — nessuna eccezione per Evelynn.

**Item core (nell'ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Emberknife (auto-evolve intorno al minuto 3-4 quando il pet di jungla ha mangiato abbastanza mostri). Companion per AP (Ability Power, la statistica che scala il danno magico) burst: aggiunge un effetto di danno magico che si attiva (un "proc") sull'autoattack subito dopo uno spell, allineandosi perfettamente con **Lich Bane** più tardi.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — lo spike-firma di Evelynn. Ogni volta che lanci uno spell, il prossimo basic attack aggiunge un grosso colpo bonus di danno magico, e il charm di **W** + il reset dell'autoattack di **E** (effetto che ti permette di sparare un attacco fresco subito, ignorando il normale ritardo di attack speed) ti permettono di concatenare due proc di **Lich Bane** in meno di un secondo.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration fissa (sottrae una quantità fissa di magic resist al bersaglio, facendo male di più con i tuoi spell). Standard per qualunque AP burster che bersaglia squishy.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — AP e magic penetration extra; la passiva sotto soglia HP (passiva che si attiva quando il nemico è sotto una soglia bassa, intorno al 35%) si allinea esattamente con il cono dell'execute della **R**.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game su tutto l'AP. Il quarto o quinto slot è dove Evelynn entra in range "one-shot della carry da HP pieno".

**Item situazionali:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena 2 o più nemici comprano un item di magic resist.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro lockdown single-target (Veigar cage, Lissandra R, Malzahar R). La stasi copre i recovery frame dopo la **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo, Aatrox). Applica Grievous Wounds, dimezzando le cure ricevute.

**Stivali:** Sorcerer's Shoes di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** accettabili solo se l'enemy team ha pochissima magic resist e il tuo team chiede più uptime di **R** (cast più frequenti) come finisher di fight.

**Skill order:** Massimizza **Q** per primo (clear di jungla e DPS principale), **E** per secondo (mobility e damage scaling sul reset), **W** per ultimo (il cooldown conta più del rank). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Domination** con **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Gathering Storm**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling. Cambia il secondario in **Precision** (Presence of Mind + Coup de Grace) quando l'enemy team è quasi tutto squishy e vuoi consistenza sull'execute.

## Matchup chiave

- **Lee Sin / Rengar (jungle avversario):** Minacce di invade pre-6. Non contestare lo scuttle al livello 3 — tracciali con vision e fai full clear in sicurezza. Una volta toccato il 6 il matchup si ribalta: cammini nella loro jungla in Camouflage e fai gank sulle lane senza ward.
- **Lulu (support avversario):** Il peel più duro del gioco per un'assassina. Brucia la sua **R** con un fake commit (inizia il W charm ma tirati indietro se usa la R), poi torna sul bersaglio quando la R di Lulu è in cooldown.
- **Tahm Kench (support avversario):** La **W** mangia la carry nell'istante in cui la tua **R** atterra. Aspetta che usi **W** su qualcos'altro (un'onda di minion, un tank in engage), poi impegnati a fondo. Se è full mana e guarda l'ADC, cerca un altro target.
- **Karthus (jungle avversario):** Gara di scaling. Lui supera te nel farm, tu lui nei pickoff. Se arriva al 16 con full item perdi: forza gank ogni volta che la sua **R** è giù e chiudi entro il minuto 30.
- **Pyke (support avversario):** Hard counter al tuo "execute a basso HP". Anche la sua **R** executa a HP basso, e i suoi roam mettono i tuoi pathing sotto pressione di vision. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima del solito per schivare la sua finestra di execute dopo che ti sei impegnata.

## Power spike & condizioni di vittoria

- **Livello 6 (primo unlock della R):** La tua vera partita inizia qui. Demon Shade ottiene Camouflage, la **R** si sblocca, e qualunque lane senza ward di vision (i piccoli occhi invisibili che gli alleati piazzano per vedere la fog of war) è una kill gratis. Direzionati verso la lane con i nemici a HP più basso.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completo (~ minuto 12-14):** Salto da "2 spell per killare" a "1 combo W+AA+E+Q+R su uno squishy". Caccia pick appena finisce.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ minuto 18-20):** La passiva sotto soglia HP si allinea col cono di execute della **R**. Dopo questo item, qualunque squishy sotto il 60% HP è morto in una combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** Range completo di one-shot sui carry di backline da 100% HP. Forza un 5v5 attorno a Baron appena Deathcap finisce — il tuo team inizia il fight 5v4 nell'istante in cui la combo atterra.

## Errori comuni

- **Fare gank pre-6 perché il team lo segnala via ping.** Non hai charm range, non hai Camouflage, e niente che sorprenda il nemico. Pre-6 fai farm e cerchi counter-jungle sui nemici che superi di livello. Di' ai laner: "gank al 6".
- **Lanciare W fuori da Demon Shade.** Quando sei visibile (in combat o a basso HP), il nemico vede l'animazione di **W** e può usare Flash in anticipo per evitare il charm. Imposta sempre il gank entrando da Camouflage, poi **W** a 1100+ di range.
- **Usare R per il danno invece che come execute.** La **R** infligge danno bonus sotto il 30% HP. Bruciarla su un target full HP spreca lo spike — apri con la combo **W+E+Q**, poi **R** nell'istante in cui scendono sotto la soglia di execute.
- **Tunnel vision sulla kill.** La **R** ti porta indietro (warp) per una distanza lunga dopo il cast. Se sei in mezzo all'enemy team quando la premi, il warp ti porta in mezzo al niente. Posizionati così che il warp ti tiri verso il tuo team o verso fog of war (la zona di jungla senza ward), non più dentro i nemici.
- **Rifiutare di tornare alla base a HP pieno.** Demon Shade fuori combat ti cura lentamente anche da full mana. Se hai 1300+ gold per un componente di danno come ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** o di mana come ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, rientra alla base. HP pieno e 0 gold = tempo sprecato.

## Suggerimento avanzato

La combo doppio-proc di ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane**: dopo il **W** charm, annulla l'animazione dell'autoattack lanciando subito **E** (Whiplash da Demon Shade ha reset dell'autoattack incorporato). L'ordine è **W → AA → E → AA → Q → R**. I due autoattack consumano due proc di **Lich Bane** perché **E** conta come spell cast. Su uno squishy senza magic resist, questa combo infligge circa 1.5x il danno della classica apertura **W → R** dei rank bassi, e ti permette di eliminare una carry da 1800 HP da HP pieno a 3 item invece di 4.
