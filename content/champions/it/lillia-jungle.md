---
title: "Lillia Jungle Build & Guida — Patch 16.9"
slug: "lillia-jungle"
language: "it"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida Lillia jungle per League of Legends Patch 16.9: starter kit, build AP burst, matchup chiave in jungla, power spike, errori comuni e una tip avanzata finale."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Ogni colpo di abilità lascia un segno che continua a fare danno magico (in % HP) per qualche secondo su champion e mostri. Questi stack sbloccano la R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "Roteata AOE attorno a Lillia: danno vicino, true damage extra sull'orlo. Stacka Move Speed. Strumento principale per clear e DPS in skirmish."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE con caricamento e una zona di danno: il centro fa molto più male. È il single-target burst. Ha un tell lungo, abbinala a E per slow."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Skillshot lobbato a lungo raggio: danno, slow e reveal. Se manca, il seme rotola finché non colpisce. Setup, vision o tool di salvataggio."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "A livello globale, applica Drowsy progressivo a tutti i champion già marchiati di Dream Dust, poi li addormenta. Il primo hit li sveglia con bonus damage."
      dd_spell_id: "LilliaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassini e dive comp (Zed, Diana, Kha'Zix) — la stasi copre il gap mentre il tuo DOT e la R fanno lavoro"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs backline squishy senza Magic Resist — la passive a soglia HP sincronizza con il wake-up burst della R"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comp che kitano molto — Move Speed e Ability Haste alimentano il suo skirmish a ciclo di abilità"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swappa appena un target prioritario compra un item di Magic Resist (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Stacka Dream Dust sui target prioritari con i passaggi di Q, lancia R per il sleep team-wide, poi incatena W centrale e Q per massimo burst prima che cleansino o vengano peelati."
  weakness: "Early level molli e una sola forma di mobility (gli stack di Q). Invade aggressive a livello 2-3, catene di CC (Lee Sin Q, Vi R) e Mercury's Treads sui target della R rompono il suo snowball."
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
    primary_rationale: "Inspiration come primario: First Strike premia il suo gioco farm-and-gank con gold extra ad ogni scambio, Magical Footwear dà gli stivali gratis mentre lei farma, Biscuit Delivery e Cosmic Insight coprono il mana early e accorciano il cooldown di Smite e Flash sugli obiettivi."
    secondary_rationale: "Sorcery secondario: Manaflow Band tappa il mana così Q-W-E spam tra i camp non la lasciano a secco, Transcendence porta Ability Haste extra per R più frequenti dal secondo teamfight in poi."
    secondary_alternative: "Contro skirmish 1v1 estesi (Master Yi, Warwick, Udyr), swappa Inspiration con Precision: keystone Conqueror più Triumph. Lo stacking di danno adattivo e l'HP-on-takedown ribaltano gli scambi lunghi."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Jungler farm-heavy senza invade early"
      reason: "Vogliono clearare in pace fino al level 6. Lillia regge la loro velocità di farm e li batte allo scuttle grazie agli stack di Move Speed di Q e alla pressione DOT della passive."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Top tank vulnerabili al DOT in % HP"
      reason: "Liandry's Torment più la passive in % HP shreddano in fretta i pool di vita grossi. La R sleep trasforma le loro minacce a cast lento (Sion R, Mundo Q) in posizionamento gratis per la tua squadra."
    - examples: ["senna", "kog-maw"]
      archetype: "Carry backline immobili"
      reason: "La E cross-screen prepara il lockdown del gank, poi la R sleep apre una finestra di pickoff garantita prima che riescano a posizionarsi dietro la propria front line."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Invade aggressivi a level 2-3"
      reason: "I primi 3 livelli sono il punto debole di Lillia: niente hard CC e solo Q come danno. Un'invade riuscita la chiude prima del power spike di clear più mobility."
    - examples: ["yasuo", "camille"]
      archetype: "Champion con dash o Wind Wall che bypassano lo slow di W"
      reason: "Il burst single-target della W vuole il target inchiodato sul centro. Dash ripetuti e l'E hookshot di Camille la lasciano a colpire il vuoto."
    - examples: ["kindred", "graves"]
      archetype: "Jungler AD ranged che battono lo scuttle"
      reason: "Le battono allo scuttle con il range degli auto, mentre lei deve entrare nell'hitbox della Q. Perdere scuttle due volte di fila collassa la vision di river e i tempi di roam."
---

## Panoramica

Lillia è una jungler AP skirmisher con un kit che applica un damage-over-time magico in % HP attraverso la passive **Dream-Laden Bough**. Ogni Q, ogni W, ogni E lascia un marchio di "dream dust" che continua a fare danno per qualche secondo: per questo clearа i camp più velocemente di quasi tutte le altre jungler AP, e per questo i suoi duelli sembrano logorare il nemico anche quando i cooldown sono in pausa. Il game plan è semplice da raccontare: stacka dust su quanti più champion nemici possibile, poi premi **R** per metterli a dormire tutti insieme.

Vuole tempo, non farm lento. Usa la **Q** per tenere su lo stack di Move Speed mentre passi tra i camp, la **E** per gankare da fuori la portata dei ward, e la **W** come single-target hammer in skirmish dopo aver slowato il bersaglio. Late game la R è il setup CC team-wide più affidabile tra le AP jungler, ma dipende dal fatto che tu abbia già taggato i target — una R "nuda" su un team pulito è una ulti sprecata.

## Build Consigliata

**Starting items:** Hailblade (1039) + Refillable Potion (2031). Lillia è ranged, quindi Hailblade è il pet starter giusto.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Hailblade; auto-evolve attorno al minuto 3-4 una volta accumulata abbastanza XP da mostri. È il pet AP-burst: ogni auto-attack post-spell aggiunge un proc di danno magico, perfettamente in linea con la sua passive DOT.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. Il bleed in % HP (danno spalmato nei secondi successivi, non istantaneo) si somma alla sua passive: più HP totali ha il nemico, più li shredda.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Default una volta che Magical Footwear ti consegna gli stivali gratis attorno al minuto 12.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item da scambio lungo: stacka omnivamp (heal-on-damage) e converte parte del danno in true damage dopo 3 secondi in combat. Si sposa con il suo orologio DOT.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP late game, trasforma il chip damage della passive in finestre di one-shot reali.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs assassini e dive comp (Zed, Diana, Kha'Zix). La stasi copre il momento dopo che entri in R sulla back line mentre DOT e team chiudono la kill.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs backline squishy senza Magic Resist. La sua HP-threshold passive (passiva di item che si attiva sotto soglia HP nemico, qui sotto il 35%) sincronizza con il tick di risveglio della R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comp che kitano molto. Move Speed e Ability Haste alimentano il suo skirmish a ciclo di abilità, dato che il danno arriva dal chain di spell, non dagli auto-attack.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario compra un item di Magic Resist.

**Boots:** Sorcerer's Shoes di default. Mercury's Treads è accettabile contro AP burst più CC pesante (Lissandra + Twisted Fate); la tenacità protegge la finestra di cast della R.

**Skill order:** Maxa **Q** per primo (clear speed e DPS in skirmish), **W** per secondo (burst single-target), **E** per ultimo. Punto in **R** ai livelli 6, 11, 16. Livello 1 in **Q**, livello 2 in **E** per i gank, livello 3 in **W**.

**Runes:** Primario **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**.

## Matchup chiave

- **Lee Sin / Xin Zhao:** Invader aggressivi a level 2-3 (entrano nella tua jungla per ucciderti prima che tu abbia il kit completo) che la chiudono prima del suo power spike di clear più mobility. Inizia dal camp più lontano dalla loro probabile linea di invade; chiedi ai laner di piazzare ward attorno al second buff. Non contestare lo scuttle (il granchio del fiume) pre-6.
- **Karthus:** Gara di farm. Scala meglio late ma tu lo batti per tempo nella finestra 6-14. Tracca il suo clear e ganka le sue lane su ogni cooldown di R. Se rimani indietro, non duellare: gioca solo trade su side objective.
- **Amumu:** Entrambi clearate veloci ma lui non ha skirmish presence pre-6. Prendi scuttle dal suo lato dopo il primo clear; non può punirti senza la Q stun pronta.
- **Master Yi:** Territorio counterpick una volta che ha 2 item. Builda ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** prima del solito; kita la sua Q (l'alpha strike) stackando il Move Speed della tua Q passive e pre-piazzando la E dietro di te.
- **Graves:** Perde scuttle contro di lui a HP pieni. Patta sul lato opposto della mappa finché non hai completato ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment**; il bleed in % HP livella finalmente lo scambio in auto-attack.

## Power spike & condizioni di vittoria

- **Level 3 (Q + W + E):** Kit completo. Primo clear chiuso intorno a 3:15 con HP sani — è la tua prima finestra di gank con E setup in W centrale.
- **Level 6 (R sbloccata):** Prima **Lilting Lullaby**. Cerca dust pre-stackata su un laner basso: cammina dentro vision, R, aspetta i 1.5s di ramp, poi piazza il combo wake-up. È il timing più tecnico del kit (R precoce è ulti sprecata).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minuto 9-11):** DPS in skirmish raddoppia. Forza qui i fight su grub o primo dragon: la sua DOT più il bleed dell'item shreddano la front line tank prima che riesca a riposizionarsi.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ minuto 18-22):** Potere da scambio lungo. Out-sustaini i bruiser nei 5v5 perché la cura scala con quanto danno continui ad applicare, e il suo kit applica danno ad ogni cooldown.

## Errori comuni

- **Castare R su nemici senza Dream Dust.** R fa sleep solo sui target che già hanno gli stack della passive. Colpiscili prima con Q o E; una R "nuda" applica solo un breve Drowsy, non un sleep pieno.
- **Stare ferma per piazzare la W.** Il centro della W è il burst, ma il caricamento è lungo. Abbinala prima alla E per slow: con la E che atterra, il centro della W diventa quasi garantito anche senza Flash.
- **Spammare Q nel fog nemico.** La Q ti rivela ad ogni cast. In jungle nemica con ward, spammarla per clear ti mette un grosso ping rosso sulla minimap. Entra in silenzio, poi committa.
- **Ignorare l'upgrade del jungle pet.** Tante Lillia novelle saltano la quest di Hailblade clearando troppo velocemente in lane mate. Controlla la barra del pet — se stalla a "needs more XP", passa per un camp piccolo extra prima di backare.
- **Andare a cercare R pick da sola late game.** R è uno strumento di setup di team, non un bottone di gank singolo. Se la tua squadra è in mid-rotation quando R, il timer del sleep finisce prima che arrivino. Pinga la spell, conta uno, poi committa.

## Suggerimento avanzato

Allenati su un'angolazione "E-flash" per il setup R sul mid river. Ti muovi verso il mid laner nemico dal cespuglio laterale, flash-E nella sua direzione di camminata in modo che il seme atterri dietro di lui (lo costringi a passare nello slow), poi R durante la finestra di slow. Lo slow garantisce che gli stack della passive arrivino prima che la R risolva, e quindi il sleep diventa pieno e non un Drowsy parziale. Salva il cast sugli spawn obiettivi quando il nemico è in rotation e i ward sono radi.
