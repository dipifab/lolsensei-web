---
title: "Orianna Mid Build & Guida — Patch 16.9"
slug: "orianna-mid"
language: "it"
patch: "16.9"
champion: "orianna"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Orianna mid lane per League of Legends Patch 16.9: posizione della Ball, build control mage, matchup chiave, power spike, errori comuni e un tip finale."
quick_learn:
  champion_dd_id: "Orianna"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Clockwork Windup"
      description: "Le auto-attack infliggono danno magico bonus che cresce ad ogni colpo sullo stesso bersaglio. Premia il restare in range nei trade prolungati."
      dd_spell_id: "Orianna_Passive"
    - key: "Q"
      name: "Command: Attack"
      description: "Manda la Ball in linea, danneggia i nemici sul tragitto e la parcheggia a destinazione. Il danno cala dopo il primo bersaglio. Strumento principale di poke e waveclear."
      dd_spell_id: "OrianaIzunaCommand"
    - key: "W"
      name: "Command: Dissonance"
      description: "Pulse di danno intorno alla Ball che lascia un campo: rallenta i nemici e velocizza gli alleati. Per inseguire, kite o peel."
      dd_spell_id: "OrianaDissonanceCommand"
    - key: "E"
      name: "Command: Protect"
      description: "Manda la Ball su un alleato danneggiando i nemici sul tragitto e dandogli uno scudo. Passiva: mentre attaccata fornisce Armor e Magic Resist all'alleato."
      dd_spell_id: "OrianaRedactCommand"
    - key: "R"
      name: "Command: Shockwave"
      description: "Dopo un breve delay, sbalza tutti i nemici vicini alla Ball verso la Ball. Ulti teamfight di riferimento — raggruppa più target per un wombo (combo a follow-up dell'intero team)."
      dd_spell_id: "OrianaDetonateCommand"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi copre il wind-up della R, il team segue"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena qualunque target prioritario compra un item di Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Centra Command: Shockwave su due o più nemici nei teamfight una volta online Luden's Echo e Rabadon's. Controlla lo spazio con Q/W e resta dietro alla front line finché non lanci R."
  weakness: "Niente dash e cast window corte. Dive che pre-empt la R o Wind Wall che blocca i proiettili spezzano sia il poke sia l'ulti; se la front line salta, Orianna viene cancellata."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
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
    - examples: ["sion", "malphite", "rell", "amumu"]
      archetype: "Tank da engage che raggruppano"
      reason: "Il loro team telegrafa lo stack sul frontliner d'engage; un Command: Shockwave sul cluster prende tre o più nemici per un wombo (combo full-team a follow-up)."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Orianna sovrasta il loro poke con Q a 825 di range e li logora in extended trade usando lo slow di W e le auto in stack della passiva."
    - examples: ["senna", "kalista", "varus"]
      archetype: "Carry ranged a posizione statica"
      reason: "I carry da retroguardia che tengono il piede negli obiettivi mangiano una R a max range quando Orianna parcheggia la Ball nel cluster da fog of war."
  counterpicks:
    - examples: ["yasuo", "yone", "samira"]
      archetype: "Champion con Wind Wall / blocca-proiettili"
      reason: "Bloccano la Q e il cast della R sulla Ball quando viaggia come proiettile, neutralizzando sia il poke sia il setup di wombo."
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "I dash multipli (gap-close — abilità che chiudono distanza in fretta) saltano addosso a Orianna dentro il suo range corto di Q; lei non ha dash per disengage."
    - examples: ["leblanc", "ahri", "talon"]
      archetype: "Burst champion con priorità roam"
      reason: "Spingono la wave e roamano da mid alle side dopo il livello 2; Orianna non ha mobilità per seguire e perde pressione macro anche quando è pari in lane."
---

## Panoramica

Orianna è un mago da controllo costruito intorno a un singolo oggetto: la sua Ball. Ogni abilità tranne la passiva manda, parcheggia o detona la Ball, e la sua ulti **Command: Shockwave (R)** è lo strumento teamfight più impattante del pool mid: un pull con delay che tira tutti i nemici vicini verso la Ball. Non ha dash e ha cast window corte: la sua sicurezza viene dal posizionamento della Ball (copriti con scudi e zone) e non dal movimento.

Il piano partita è controllare la wave con **Command: Attack (Q)**, pokare chiunque entri nel range con la stessa spell e cercare una **R** multi-target in ogni fight obiettivo dopo il livello 6. Lo skill expression sta in *dove è la Ball adesso*: una Ball parcheggiata fra te e il nemico è un setup di poke, una Ball sul tuo frontliner è scudo più ulti pre-caricata, una Ball lanciata in fog of war è un teamfight start istantaneo.

## Build Consigliata

**Item iniziali:** Doran's Ring + 2 Health Potions. Evita Corrupting Potion a meno che la lane non sia di harass auto-attack pesante contro di te.

**Item core (nell'ordine):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike di burst sul primo item con sostegno mana per spammare Q in waveclear.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa per cancellare gli squishy (campioni con poche difese, tipo gli ADC e i mage).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP late-game; la R di Orianna scala fortissimo con AP grezza.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra; la passiva HP-threshold (danno extra quando il bersaglio è sotto una soglia HP bassa) si sposa con una R che chiude.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). La stasi copre il gap fra cast e impatto della R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun) che cancellerebbero il channel della R.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena qualunque target prioritario compra un item di Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo).

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se il team chiede più uptime di R come teamfight starter.

**Skill order:** Massimizza **Q** per primo (poke e waveclear), **W** per secondo (zona di slow), **E** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Manaflow Band**, **Transcendence**, **Scorch**. La keystone canonica per trade pesanti è **Electrocute** (custom path da Domination); resta in Sorcery se preferisci la safety. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. **Phase Rush** è uno swap valido contro matchup di kite (Yasuo, Zed) per la finestra di velocità in escape.

## Matchup chiave

- **Yasuo / Yone:** Wind Wall blocca **Q** e il proiettile della Ball del tutto. Tieni **Q** finché non bruciano Wind Wall, poi spingi con **Q** più **W**. Non lasciare che entrino in auto range — le auto in stack della passiva valgono per entrambi e da vicino ti out-tradano.
- **Zed:** Matchup vulnerabile. Tieni d'occhio dove piazza la **W** ombra; rusha ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo Luden's. Tieni **Flash** per il suo all-in al 6, non per harassarlo.
- **Twisted Fate:** Gara di rotazione. Spingi ogni wave con **Q** e ping mid-danger quando arriva al 6 con la **R**. Se ti tira la carta gialla, **E** su te stesso per assorbire il proc dell'auto-attack.
- **Galio:** Evita di stare appiccicato a un alleato pre-6 (la sua **W** punisce target raggruppati). Puniscilo quando è in melee sui minion; non ha gittata di waveclear per superarti in push. Occhio alle rotazioni di ulti dopo il 6.
- **Lux:** Matchup pari, deciso nei teamfight. Le gittate coincidono; out-trada con gli stack di auto della passiva quando sbaglia la **Q**, perché scali meglio con lo stesso set di item.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** più **W** hai il primo vero pattern di trade: Ball avanti con **Q**, **W** sopra per slow, due auto in stack di passiva, ritirata. Quasi tutte le lane perdono la corsa al livello 2 contro questo.
- **Livello 6:** Prima **Command: Shockwave**. Anche una R single-target equivale a un riposizionamento da Flash per il gank del jungler. Una R su due bersagli vicino al river è una doppia kill gratis.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completo (~ minuto 12-14):** Il controllo wave si ribalta. Spingi le side lane con **Q** e cerca giocate cross-map intorno a Drake e Rift Herald con la R.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** R nella back line one-shotta gli squishy stipati. Forza i fight obiettivo qui — è il tuo picco.

## Errori comuni

- **Lanciare R come finisher single-target su HP pieni.** La R è un'ulti da setup, non da snipe. Se non ci sono almeno due nemici dentro al raggio della Ball, tienila; concatena **W** e poi **R** quando il cluster si forma.
- **Lasciare la Ball sulla wave durante un all-in nemico.** Quando stanno per engaggiarti, **E** su te stesso per lo scudo e per recuperare la posizione della Ball. Una Ball su un minion è una Ball che non lavora per te nel teamfight.
- **Usare le auto della passiva come un marksman.** Due stack già fanno parecchio danno; il terzo è ottimo, ma fare un passo avanti per il quarto spesso ti costa un counter-engage. Tradi in finestre da tre auto, poi indietreggi.
- **Dimenticarsi dove è la Ball prima della R.** L'origine della R è la Ball, non Orianna. Se la Ball è su un alleato di backline, la R atterra sulla tua squadra. **Q** o **W** sempre la Ball avanti prima di premere R.
- **Pushare senza prio prima dello spawn del Drake.** Il waveclear di Orianna è così forte che la tentazione è di spingere sempre. A volte tieni la wave dalla tua parte per arrivare per primo a Drake — la prio (priority — uscire dalla lane senza perdere minion né HP) conta più del chip damage.

## Suggerimento avanzato

Padroneggia il **combo Q-W self-cast intorno alla Ball**: lancia **Q** per mandare la Ball avanti, poi immediatamente **W** sulla posizione della Ball. La Ball arriva, il pulse di W esplode su di lei, e il nemico che cammina sull'endpoint della Q prende danno di Q più danno di W più lo slow nello stesso istante. Comprimi la finestra di trade da due cast a un singolo frame di reazione — la maggior parte degli avversari nei rank bassi non riesce a schivare entrambe le metà.
