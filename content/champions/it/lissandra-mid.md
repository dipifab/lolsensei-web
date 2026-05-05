---
title: "Lissandra Mid Build & Guida — Patch 16.9"
slug: "lissandra-mid"
language: "it"
patch: "16.9"
champion: "lissandra"
role: "mid"
last_updated: "2026-05-05"
description: "Guida Lissandra mid per League of Legends Patch 16.9: build control mage, R su se stessa anti-assassino, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Lissandra"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Control Mage / Anti-Assassin"
  abilities:
    - key: "P"
      name: "Iceborn Subjugation"
      description: "I campioni nemici uccisi vicino a Lissandra lasciano un Frozen Thrall che rallenta i nemici e poi esplode infliggendo danno magico. Passiva di flavor minore."
      dd_spell_id: "Lissandra_Passive"
    - key: "Q"
      name: "Ice Shard"
      description: "Skillshot lineare che esplode al primo nemico colpito infliggendo danno magico e slow. Le schegge proseguono colpendo chi e' dietro. Wave clear e poke principale."
      dd_spell_id: "LissandraQ"
    - key: "W"
      name: "Ring of Frost"
      description: "AOE corto raggio attorno a Lissandra che root tutti i nemici colpiti (li blocca sul posto). Anti-engage e setup di root per la R."
      dd_spell_id: "LissandraW"
    - key: "E"
      name: "Glacial Path"
      description: "Skillshot artiglio di ghiaccio che infligge danno magico. Re-cast: teleport alla posizione attuale dell'artiglio. Tool di mobility, fuga, engage."
      dd_spell_id: "LissandraE"
    - key: "R"
      name: "Frozen Tomb"
      description: "Cast su nemico: stun in ghiaccio. Cast su se stessa: Lissandra entra in Stasis (intargettabile, invulnerabile) e si cura, piu' danno AOE. Lifeline anti-assassino."
      dd_spell_id: "LissandraR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "6657"
      name: "Rod of Ages"
      against: "lane di scaling dove vuoi HP, mana e AP cumulativi invece di un primo spike di burst (vs Anivia, Cassiopeia, Kassadin)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "comp con tanto kite e dasher permanenti che servono uno slow stabile sopra alla tua Q (vs Tryndamere, Master Yi, Yone splitpush)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "comp con sustain alto che serve riduzione delle cure per essere uccidibili (vs Soraka, Vladimir, Dr. Mundo)"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "swap quando ti serve piu' burst contro target shieldati (vs Lulu, Janna, Karma in fight front-to-back)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Lockare il carry nemico con W root o R stun nei team fight di mid-game, sopravvivere agli all-in con self-R Stasis, e lasciare che la burn di Liandry's bruci la front line mentre il tuo team chiude."
  weakness: "Range corto. Le mage long-range ti out-pokano, gli hyper-scaler tipo Kassadin ti out-mobilitano dopo l'11, e le ulti CC-immune (Olaf R, Edge of Night active) annullano il tuo lockdown."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike premia chi apre i trade con la Q dando danno bonus e gold extra che finanziano la build AP. Magical Footwear risparmia 350g per arrivare prima a Liandry's, Biscuit copre il sustain debole, Cosmic Insight taglia i cooldown di Flash e R."
    secondary_rationale: "Sorcery secondary: Manaflow Band ti sostiene il mana nei combo E + R che costano caro, Transcendence porta l'ability haste oltre il 40% per piu' W root e piu' finestre di self-R Stasis."
    secondary_alternative: "Phase Rush come keystone (al posto di First Strike) quando giochi contro un assassino mobile come Yasuo o Yone: Q + W + auto procca Phase Rush per un burst di Move Speed (uno scatto di velocita' che ti permette di kite — arretrare attaccando — fuori dal loro dive)."
matchup_draft:
  pick_into:
    - examples: ["zed", "talon", "yasuo"]
      archetype: "Mobile assassins that die to your CC chain"
      reason: "La self-R Stasis (intargettabile + invulnerabile per 2.5s) mangia la loro finestra di burst; la W che root il loro gap-close trasforma il trade in una kill per il tuo team."
    - examples: ["lux", "veigar", "annie"]
      archetype: "Immobile mages with single-cooldown CC"
      reason: "Una volta che il loro root o stun e' in cooldown non hanno risposta al tuo engage E flash + W root + R lockdown; gli sopravvivi al secondo trade su ogni wave."
    - examples: ["sejuani", "leona", "malphite"]
      archetype: "Tank engage initiators"
      reason: "La R blocca il tank a meta' carica, neutralizzando l'engage e trasformando Flash + ulti in 1.5s di immobilita' mentre la tua back line lo brucia con i tick di Liandry's."
  counterpicks:
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mages"
      reason: "Le loro abilita' superano il range della tua Q (725) e della W (450). Ti pokano gratis e tu non hai modo di chiudere la distanza senza committare la E, che ha 12-24s di cooldown."
    - examples: ["kassadin", "ryze"]
      archetype: "Hyper-scaling late-game mages"
      reason: "Il blink chain della R di Kassadin out-mobilita la tua E dopo l'11, e Flash + R + W di Ryze ti colpiscono prima che W root o self-R Stasis siano up. Sopravvivi in lane e chiedi aiuto al jungler per il minuto 14."
    - examples: ["olaf", "morgana"]
      archetype: "CC-immune kits"
      reason: "La R di Olaf lo rende immune a W root e R stun: tutto il piano lockdown muore. La E di Morgana (Black Shield) blocca il CC magico della tua R sul loro carry. Pianifica con la burn di Liandry's invece di puntare al lockdown."
---

## Panoramica

Lissandra e' un control mage con un'identita' di CC-chain: ogni abilita' blocca qualcosa, e l'ulti e' insieme il miglior tool anti-assassino della mid lane. Il kit unisce **Ice Shard (Q)** per wave clear e poke, **Ring of Frost (W)** come root corto raggio (blocca i nemici sul posto), **Glacial Path (E)** come skillshot di mobility re-castabile che la teleporta sull'artiglio, e **Frozen Tomb (R)** che e' il pezzo unico — cast su un nemico stunna, cast su se stessa la mette in Stasis (intargettabile e invulnerabile) per 2.5 secondi mentre cura e infligge danno AOE. Quella R su se stessa e' cio' che rende Lissandra senza paura davanti a Zed, Talon e altri burst assassin (campioni che provano a one-shottarti in 1-2 secondi): loro committano, tu premi R su te stessa, le loro cooldown sono sprecate, il tuo team gli salta addosso.

Il game plan e' sopravvivere in lane contro il poke (range corto — Q arriva a 725 unita', W solo 450), arrivare al power spike di livello 6 per sbloccare il combo R, e diventare il pivot dei team fight dal minuto 14 in poi. **E flash + W root + R stun sul carry** e' l'engage ad alto leverage (la mossa che apre un team fight); **R su se stessa** e' la difesa ad alto leverage. Lo skill expression sta nello scegliere quale modalita' di R usare sotto pressione.

## Build Consigliata

**Starting items:** Doran's Ring + 2 Health Potions. Lissandra ha la fame di mana presto; il +25% mana regen del ring ti finanzia il poke di Q e la zone di W.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo spike da burn-mage. La passiva damage-over-time (danno magico extra che ticka per qualche secondo dopo che hai colpito) brilla su Lissandra perche' ogni abilita' colpisce piu' bersagli. Si combina col W root: i nemici rootati non possono scappare dalla burn.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration per i target squishy che la tua CC chain blocca (qualsiasi campione con poca vita e poche difese, tipo gli ADC e la maggior parte dei mage).
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — seconda opzione di Stasis dopo la self-R. Ti permette di sopravvivere a 2 finestre di burst nello stesso fight; in piu' da' armor contro qualsiasi minaccia AD.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — l'item moltiplicatore di AP. Il danno AOE di Lissandra scala per ratio su tutte e 4 le abilita', quindi questo moltiplica tutto il burst in una volta sola.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — l'istante in cui un target prioritario completa un item di Magic Resist, la magic penetration percentuale lo risolve.

**Situational items:**

- ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — primo item alternativo nelle lane di scaling (vs Anivia, Cassiopeia, Kassadin). Spike piu' lento ma piu' HP e mana per i fight di livello 16, e la passiva ti cura ad ogni level-up.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — vs comp con tanto kite e dasher permanenti (Tryndamere, Master Yi, Yone). Aggiunge uno slow permanente su ogni Q che colpisce, cosi' non possono ripiazzarsi durante il tuo lockdown di team fight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comp con tanto sustain (Soraka mid, Vladimir, Dr. Mundo top). Taglia le cure che ricevono dopo che la tua Q li colpisce.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — quando il team nemico ha shield (Lulu, Janna, Karma). La passiva HP-threshold (magic penetration extra quando il target scende sotto soglia) fa chiudere ai tuoi combo R i target che restano al 20-30% di HP.

**Boots:** Sorcerer's Shoes di default per la magic penetration. Ionian Boots of Lucidity sono accettabili se vuoi piu' uptime di R nei team fight late — il cooldown reduction sui summoner spell si stackka con Cosmic Insight.

**Skill order:** Massimizza **Q** per prima (wave clear e poke principali), **W** per seconda (la durata del root scala col rank), **E** per ultima (il cooldown conta solo sul recast — lo scaling di danno per rank e' piccolo). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**. Cambia keystone in **Phase Rush** quando giochi contro Yasuo o Yone — il proc di Move Speed ti permette di kite (arretrare mentre attacchi) fuori dal range del loro dive dopo Q + W.

## Matchup chiave

- **Zed:** Pari-favorevole. L'all-in di livello 6 con la sua R e' il test: quando vedi la sua ombra cadere, premi **R** su te stessa prima che l'animazione di Death Mark finisca. La rush di ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** ti da' una seconda finestra di Stasis nello stesso fight.
- **Yasuo:** Wind Wall (la sua W) blocca la Q. Salva la **Q** per dopo che ha usato lo shield, lancia Q a max range solo quando Wind Wall e' in cooldown. Cambia keystone in **Phase Rush** per kite (muoverti indietro colpendo) fuori dal gap-close Q3 + E.
- **Xerath:** Sfavorevole. La sua Q va a 1450 unita' e la R e' globale; entrambe sono fuori dalla tua portata. Stai dietro ai minion, pusha forte con la **Q** per tenerlo in lane, e chiama il jungler — non puoi fare questo matchup da sola.
- **Anivia:** Pari, scala late. Lei ha piu' burst con 3 item ma tu hai miglior engage di team fight dal 6. Tradare attraverso la sua passiva dell'uovo solo con R + ignite, mai senza — riviverebbe e supererebbe i tuoi cooldown.
- **Kassadin:** Sfavorevole dopo l'11. Pusha forte la wave pre-6, negagli i CS, e chiedi attenzione al jungler per il minuto 12. Una volta che ha la R rank 2, il blink chain out-mobilita la tua **E** e non riesci a piazzargli la **W**.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **W** hai un combo poke + zone. Tradi camminando avanti, **Q** attraverso la wave per grattarli, poi **W** se entrano per ritorsione.
- **Livello 6:** Prima **Frozen Tomb**. Il combo **E flash + W root + R stun** e' adesso il tuo engage; la self-cast **R** e' adesso la tua escape anti-burst. I roam sulle side lane diventano molto valutativi.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Completamento Liandry's Torment (~ minuto 11-13):** Il tuo danno di team fight raddoppia. Un target rootato dentro la tua **W** + tick di Q-shard perde il 30-40% di HP solo dalla burn prima che il tuo team committi.
- **Due item + boots (~ minuto 18-22):** ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e' il pivot di team fight. Engage sul tank con la R, Stasis sotto torre con Zhonya's se il dive (andare sotto torre per uccidere qualcuno) gira male.

## Errori comuni

- **Usare la R sul target sbagliato.** R-stun su un tank al 70% di HP spreca il cooldown; R-stun su un carry al 30% chiude il fight. Pre-fight, decidi quale nemico vale il lock e non deviare. Tieni il cooldown se in dubbio — una R da 120 secondi e' una risorsa preziosa.
- **Self-cast della R troppo presto.** La Stasis dura 2.5 secondi. Premila l'istante in cui vedi l'assassino committare (ombra di Zed, E di Talon, R1 di Akali) — non 2 secondi prima, o il prossimo cooldown ti finisce quando la Stasis scade.
- **Trattare la E come un tool di danno.** **E** e' mobility prima, danno seconda. Bruciarla per un chip damage in lane ti lascia senza escape contro un gank o un dive (andare sotto torre per uccidere qualcuno). Tieni il recast finche' non ti serve davvero teleportare.
- **Engagiare senza la wave.** Lissandra ha range corto; senza minion davanti cammini dentro al Q-poke del mid laner nemico. Slow-pusha la wave (lasciala crescere sul tuo lato) cosi' hai scudi di carne quando fai E-flash dentro.
- **Saltare ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass contro AD assassin.** La self-R copre una finestra di burst. La seconda ti uccide. Costruisci Zhonya's come terzo item contro qualsiasi matchup a doppia Stasis (Zed, Talon, Kha'Zix in faccia).

## Suggerimento avanzato

Padroneggia l'engage **E + Flash + W + R** come una singola sequenza di muscle memory. Lancia **E** per far partire l'artiglio, **Flash** di lato per ingannare la prediction di posizionamento dell'avversario, re-cast **E** per teleportare sull'artiglio, **W** l'istante in cui atterri per il root AOE, poi **R** sul target lockato prima che il root finisca. Fatto in velocita' (sotto 0.7 secondi per gli ultimi tre input) e' irreagibile: il carry nemico e' rootato prima di realizzare che hai lasciato la tua back line. Allenalo in practice tool sui target dummy finche' non concateni i quattro input senza guardare l'hotbar.
