---
title: "Zed Mid Build & Guida — Patch 16.9"
slug: "zed-mid"
language: "it"
patch: "16.9"
champion: "zed"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Zed mid lane per League of Legends Patch 16.9: build AD assassin lethality, rune, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Zed"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Contempt for the Weak"
      description: "Le auto-attack di Zed contro nemici a HP bassi infliggono danno magico bonus. Si attiva una volta ogni pochi secondi per target."
      dd_spell_id: "Zed_Passive"
    - key: "Q"
      name: "Razor Shuriken"
      description: "Skillshot lineare che attraversa i nemici. Sia Zed che le sue ombre lanciano un shuriken — sovrapponili sullo stesso target per triplicare il colpo."
      dd_spell_id: "ZedQ"
    - key: "W"
      name: "Living Shadow"
      description: "Manda un'ombra in avanti; rilancia per scambiare posto con essa (shadow swap = teletrasporto sull'ombra). Unico strumento di mobility."
      dd_spell_id: "ZedW"
    - key: "E"
      name: "Shadow Slash"
      description: "Slash AOE corto da Zed e da ogni ombra attiva. Slow sui nemici colpiti e rimborsa cooldown di W per ogni champion centrato."
      dd_spell_id: "ZedE"
    - key: "R"
      name: "Death Mark"
      description: "Zed dasha untargetable su un champion, lo marchia, e dopo 3s il marchio detona ripetendo una porzione del danno inflitto durante la finestra."
      dd_spell_id: "ZedR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "swap contro squad con muri di creep o bisogno di waveclear extra — l'attivo è una seconda piccola finestra di burst"
    - dd_id: "6676"
      name: "The Collector"
      against: "contro squad con carry a HP molto bassi (ADC + mage backline): l'execute chiude le kill che il burst lascerebbe a 50 HP"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, LeBlanc) — lo scudo magico blocca il one-shot che ti ucciderebbe a metà R"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dagli Lucidity contro double-AD comp (due forti damage dealer fisici come Yasuo + Caitlyn)"
  base_combo: ["W", "E", "Q", "R", "AA"]
  win_condition: "Snowball mid (costruisci un vantaggio kill prima del minuto 12) tradando con W-E-Q. Dopo il livello 6, side-lane per assassinare target isolati con R + ult flash combo (Flash a metà R per cogliere il target di sorpresa)."
  weakness: "CC duro durante il dash di R ti congela sul target senza shadow swap disponibile. Nemici raggruppati con peel (Janna, Lulu, Braum) cancellano la finestra dell'assassino prima che il danno si ripeta."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8138, name: "Eyeball Collection", icon_path: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["lux", "orianna", "viktor", "syndra"]
      archetype: "Mage immobili a media gittata senza dash"
      reason: "Lo shadow swap di W chiude la distanza al primo skillshot schivato. Una volta in melee non hanno escape: E slow in Q e a livello 6 la R li elimina prima che castino una ulti lunga come Final Spark."
    - examples: ["xerath", "ziggs"]
      archetype: "Artillery mage a HP bassi e escape debole"
      reason: "I mage a lunga gittata stanno fermi a channelare il poke; Zed manda l'ombra in avanti, Q-poka da 900, e a sei R-flasha addosso attraverso la finestra di poke."
    - examples: ["karma", "lulu", "morgana"]
      archetype: "Mid-laner spostati dal pool support"
      reason: "Partono con AD base bassa e nessun waveclear di gittata. Zed shovea con doppia Q e roama bot o top mentre loro restano sotto torre a pulire una wave alla volta."
  counterpicks:
    - examples: ["malzahar", "kassadin"]
      archetype: "Mid-laner con spell shield o suppression nel kit"
      reason: "La passiva di Malzahar mangia la proc Q + E, poi la suppression della R ti blocca a metà dash senza shadow swap disponibile. La E silence di Kassadin spezza il combo nel frame di recovery dello swap di W."
    - examples: ["lissandra", "annie", "veigar"]
      archetype: "Burst mage con CC point-and-click"
      reason: "Il loro stun ti colpisce nell'istante in cui R-i dentro. La finestra di 3s del marchio si aspetta che continui a fare danno — bloccato a terra non produci nulla per la detonazione."
    - examples: ["galio", "pantheon"]
      archetype: "Bruiser-mid con magic damage reduction o stun on-demand"
      reason: "La W di Galio assorbe tutto il burst come scudo e ti stunna; la W di Pantheon stunna attraverso il dash di R. Entrambi appiattiscono la kill window prima che tu possa W-out al sicuro."
---

## Panoramica

Zed è un assassino AD melee (un assassino è un champion ad alto burst progettato per cancellare un singolo target squishy — squishy = champion con poche difese, tipo gli ADC e la maggior parte dei mage). Il suo kit ruota intorno a un'ombra che manda in avanti e con cui può scambiare posto: questo "shadow swap" (teletrasporto sull'ombra) è l'unico strumento di mobility di tutto il suo arsenale, quindi ogni giocata è una questione di dove piazzare l'ombra. **Razor Shuriken (Q)** è poke e damage principale; **Living Shadow (W)** è lo swap; **Shadow Slash (E)** è uno slash AOE corto che rallenta e rimborsa il cooldown di **W** per ogni champion colpito; **Death Mark (R)** è il pulsante kill — Zed dasha untargetable su un campione, lo marchia, e dopo 3 secondi il marchio ripete una porzione di tutto il danno fatto durante la finestra.

Il suo piano partita in mid: shovi la wave con il pattern Q-W-Q a doppio shuriken, forzi i trade mandando l'ombra ad angolo cosicché il nemico debba schivare due shuriken contemporaneamente, e a livello 6 ti committi sulle side lane per assassinare con l'**ult flash combo** (Flash durante il dash di R per atterrare sul lato cieco del target, una mossa classica di Zed che punisce errori di posizionamento). Snowballi (costruisci un vantaggio kill iniziale che poi si autoalimenta: ogni kill paga item, ogni item porta più kill) eliminando target isolati, non vincendo teamfight — Zed è costruito intorno al pickoff 1v1 (eliminare un nemico isolato fuori dal teamfight).

## Build Consigliata

**Item iniziali:** Doran's Blade + Health Potion. Evita il Doran's Shield (resistenza magica) a meno che il matchup non sia di poke AP pesante.

**Item core (nell'ordine):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primo item da rushare. La passiva due-colpi-sul-target combacia con il pattern di trade Q + auto di Zed, e lo scudo dà margine di sopravvivenza per il commit della R.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — stivali di ability haste per ridurre il cooldown della R e accelerare il refresh dei summoner spell, in particolare Flash per l'ult flash combo.
3. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — lethality (stat che dà penetrazione di armatura fissa contro target a poca armor, in pratica danno gratis sui squishy) più l'attivo di movement speed per inseguire bersagli che roamano.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield che blocca la prima abilità nemica dopo un breve channel. Ti salva dalla R di Malzahar, dalla R di Lissandra o da qualunque CC point-and-click che ti bloccherebbe nel mezzo del tuo dash di R.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — penetrazione di armatura late-game che scala con l'armor del target. Lo slow sulle abilità di danno permette alla Q di rincorrere chi è sopravvissuto al primo burst.

**Item situazionali:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — quando serve waveclear extra o una seconda piccola finestra di burst dall'attivo.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — contro squad con carry a HP molto bassi: la passiva execute (target sotto il 5% HP muoiono all'istante) chiude le kill che il burst lascerebbe a 50 HP.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Syndra, Veigar, LeBlanc): lo scudo magico blocca il one-shot che ti ucciderebbe a metà R.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — swap di stivali contro double-AD comp (due forti damage dealer fisici come Yasuo + Caitlyn).

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. Passa a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro double-AD; tieni Lucidity contro AP pesante o composizioni miste.

**Skill order:** Massimizza **Q** per primo (danno principale e waveclear), **E** per secondo (slow + rimborso cooldown W), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Domination** con **Electrocute**, **Sudden Impact**, **Eyeball Collection**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Electrocute si attiva dopo tre colpi rapidi sullo stesso target — esattamente Q-W swap-Q in un unico trade — e Ultimate Hunter accorcia il cooldown di R per avere una seconda finestra di assassinio per ogni rotazione in side lane. Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Matchup chiave

- **Lux:** Pusha la wave con doppia Q e schiva la sua Q binding lateralmente con W. Quando lei sbaglia la Q, swappa avanti e tradai con E + Q + auto. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** per bloccare il suo snipe di R quando sei a HP da finishing.
- **Yasuo / Yone:** Wind Wall blocca la tua Q. Manda prima l'ombra e tira la Q da un angolo diverso così che il muro copra solo uno shuriken. Evita all-in pre-6: lo scudo passivo nega la proc di Electrocute.
- **Malzahar:** Hard counter. La sua passiva mangia la prima proc Q + E, la sua R ti blocca con suppression fuori dallo shadow swap. Farma sicuro, chiedi gank, costruisci ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** prima di committere a qualunque all-in.
- **Galio:** Evita di tradare a melee — la sua W in carica ti stunna. Poke solo dalla gittata della Q, pusha la wave per roamare, e dopo il 6 commit con R solo se la W è in cooldown.
- **Sylas:** Gara di rotazione. Ruba la tua R appena la usi — non R lui mai per primo. Tieni la R per il secondo target in uno skirmish 2v2 e uccidi Sylas con W-E-Q-AA prima che possa rubarla.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + W puoi shadow-pokare da 900 di gittata. Pusha la wave veloce e harassa a cooldown della Q.
- **Livello 6:** La prima **Death Mark** sblocca l'ult flash combo. Un teamfight su mid-river senza ward è una kill garantita su un mid avversario a HP bassi.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completo (~ minuto 11-13):** Spike di danno. Vai in side-lane sulla wave appena shovata e cerca una kill su un nemico isolato.
- **Due item (Eclipse + ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade, ~ minuto 18-20):** Cancelli qualunque squishy su cui R-i. È la finestra principale di snowball — forza fight in side lane, non raggrupparti col team adesso.

## Errori comuni

- **Usare R come engage su una frontline tanky.** R copia una porzione del danno fatto nella finestra di 3s. Su un tank non produci abbastanza danno grezzo, quindi il marchio detona per niente. R sempre il champion più squishy raggiungibile.
- **Sprecare W come poke.** W è il tuo unico escape. Se swappi avanti per tirare una Q e il trade va male, non hai modo di uscire. Conserva W per l'engage **e** il disengage dello stesso trade — se la spendi solo per il poke, ti stai impegnando totalmente alla cieca.
- **Dimenticarsi di ri-castare W durante R.** Dentro Death Mark resta un'ombra al punto di partenza. Puoi rilanciare W per tornare a casa e sopravvivere a un counter-engage. Chi se lo dimentica muore al primo Flash + CC di follow-up.
- **Raggrupparsi a metà partita.** Zed scala come assassino, non come teamfighter. Raggrupparsi per obiettivi al minuto 15 con due item spreca il tuo tempo — un solo Janna disengage ti cancella il burst. Vai in side lane e tradai pickoff (eliminare un nemico isolato fuori dal teamfight) per fare pressione obiettivo.
- **Q senza overlap.** Razor Shuriken colpisce più forte quando sia Zed che l'ombra la centrano sullo stesso target. Una Q nuda senza setup di W fa circa un terzo del danno potenziale.

## Suggerimento avanzato

Allena l'**ult flash combo**: lancia **R** sul target, poi **Flash** durante l'animazione del dash. Il dash di R prosegue verso la destinazione ma riemergi spostato della distanza di Flash, atterrando sul lato cieco del target o dietro al peel del team avversario. Questo è imblocccabile da qualunque abilità direzionale (Janna Q, Yasuo Wind Wall) perché il Flash avviene durante i frame di untargetable. Lo stesso combo serve per agganciare un target in fuga che prova a Flashare via — il tuo Flash matcha il suo e il marchio resta applicato.
