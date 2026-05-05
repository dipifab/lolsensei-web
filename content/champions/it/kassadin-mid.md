---
title: "Kassadin Mid Build & Guida — Patch 16.9"
slug: "kassadin-mid"
language: "it"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Guida a Kassadin mid lane per League of Legends Patch 16.9: build da late-game scaler, matchup chiave, power spike, errori comuni e una tip avanzata in chiusura."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Passiva: Kassadin riceve danno magico ridotto e ignora la collisione con le unita' (passa attraverso minion e champion)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Skillshot single-target: danno magico + interrompe i channel. Concede a Kassadin un magic shield per 1.5s — anti-poke vs mage AP."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Passiva: danno magico bonus sugli auto-attack. Attiva: il prossimo auto e' potenziato e restituisce mana mancante (di piu' sui champion)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "Cono AOE con slow + danno magico. Si carica dalle abilita' lanciate nelle vicinanze (tue o nemiche). Serve carica per attivarsi: usalo come finisher."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Blink corto a basso cooldown. Ogni cast successivo entro pochi secondi raddoppia il costo mana e aggiunge danno bonus, fino a 4 stack."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comp che out-scali post-11: AP + ability haste + movement speed per chainare Riftwalk e rimanere addosso alla backline squishy"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs CC magico single-target (Ahri charm, Lissandra R, Twisted Fate stun) che ti chiude la finestra di Riftwalk"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comp con healing pesante (Soraka mid, Vladimir, Dr. Mundo top): applica Grievous Wounds, dimezza le cure"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs carry squishy con shield (Riven, Yasuo passive): burst extra per finire l'execute con R+Q+E"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Sopravvivi alla lane fino al livello 11 con un item completo, poi snowball (trasforma piccoli vantaggi in grandi): R sui carry squishy, Q+AA+E per cancellarli, R fuori prima del peel."
  weakness: "Lane phase brutale: poco danno base, range corto, niente waveclear prima del 9. Burst mage e poke a distanza ti shovano sotto torre e ti chippano l'HP prima che scali."
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
  primary_rationale: "Inspiration come primary: First Strike premia le finestre di burst late-game di Kassadin con gold extra e danno bonus quando apri con R. Magical Footwear ti risparmia 350 gold per accelerare il primo item, Biscuit Delivery copre il pool di mana scarso in lane, Cosmic Insight riduce i CD dei summoner spell per piu' Flash nelle skirmish."
  secondary_rationale: "Sorcery come secondary: Manaflow Band e' obbligatoria — senza, lo spam di Q in lane ti svuota il mana prima del 9. Transcendence porta l'ability haste oltre il 40%: il CD di Riftwalk cala abbastanza da chainare 3-4 R in teamfight invece che 2."
  secondary_alternative: "Se affronti poke mage che ti negano qualsiasi farm pre-6 (Xerath, Vel'Koz), swap Sorcery → Resolve con Second Wind (rigen HP passivo vs poke) e Overgrowth (HP scaling) per sopravvivere abbastanza da scalare."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Mage immobili senza dash"
      reason: "Dopo il livello 11 il CD di Riftwalk e' 2s: blinki sopra di loro, Q sul cast, E per slow, AA-execute prima che riescano a piazzare il loro burst combo completo."
    - examples: ["lux", "syndra"]
      archetype: "Skillshot mage di setup senza escape"
      reason: "Il loro danno richiede una setup a lungo raggio (Q root, stack di stun); la R late di Kassadin permette di sidestepparla mid-combo e chiudere il gap con un blink che non possono punire."
    - examples: ["taliyah", "azir"]
      archetype: "Mage di area-denial a lungo raggio"
      reason: "Pre-6 ti bullizzano, ma post-11 il magic shield della Q + la mobilita' della R neutralizzano i loro tool di kiting. Quando la partita va lunga, la loro AOE e' sprecata su un target che non riescono a fissare."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Poke mage a lungo raggio"
      reason: "Pokano fuori dal range della tua Q (650) per tutta la fase pre-6. Il magic shield della Q aiuta ma non ricarica HP — al livello 6 sei gia' a meta' barra e non puoi all-in."
    - examples: ["talon", "zed"]
      archetype: "Assassin AD early-game"
      reason: "Hanno il powerspike a 2 item intorno al minuto 14 mentre Kassadin e' ancora al primo item. I roam in side lane puniscono lo scaling lento di Kassadin: la partita finisce prima che arrivi il tuo late game."
    - examples: ["pantheon", "yasuo"]
      archetype: "Lane bully con pressione all-in"
      reason: "Il loro all-in al livello 2-3 (Pantheon Q+W stun, Yasuo Q-windwall-knockup) ti polverizza l'HP prima che la tua Q sia max rank. Il magic shield della Q e' inutile contro danno fisico."
---

## Panoramica

Kassadin e' un AP assassin (un mage che chiude il gap e cancella un singolo target, invece di pokarlo da lontano) costruito per il late game. Il suo kit ruota intorno a **Riftwalk (R)**: un blink corto con cooldown molto basso che diventa il miglior tool di reposizionamento in gioco quando arriva al rank 3 al livello 16. Il prezzo e' una lane phase punitiva: range corto (650 sulla **Q**), niente waveclear prima del 9, e danno base che perde ogni all-in (scambio totale fino alla kill) pre-6 contro la maggior parte dei mid laner. La mid lane gli si addice perche' il river e' la via piu' breve verso scuttle e side lane appena la **R** e' online — ma devi prima sopravvivere a 11-13 minuti di sofferenza.

Il game plan e' semplice: non feedare pre-6, raggiungi il livello 11 con un item completo, poi inizia a cacciare i carry squishy. La skill expression sta nella gestione mana di **Riftwalk** (ogni cast entro 7 secondi raddoppia il costo, quindi 4 R in un fight senza un item basato su Tear e' impossibile) e nello stackare ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** dalle tue abilita' prima che il fight inizi.

## Build Consigliata

**Starting items:** Doran's Ring + 2 Health Potions. Il mana di Doran's vale piu' dell'HP di Doran's Shield: spammi **Q** in lane per last-hittare a distanza quando puoi.

**Core items (in ordine):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — il miglior scaler mana + HP + AP per Kassadin. La passiva Eternity al minuto 10 ti cura ad ogni level-up, ti tiene vivo in lane phase. Primo item completato.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat, gli stivali quasi sempre giusti contro target squishy mid/ADC.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP del 35%. Il combo Q+E+AA raddoppia in danno con questo on.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasi. Ti permette di R sulla backline e stasi se arriva il peel, poi R fuori quando la stasi finisce.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR stack. Obbligatorio appena un priority target compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** o ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + un item MR.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comp che out-scali post-11. AP + ability haste + movement speed: chaini Riftwalk piu' veloce e rimani addosso alla backline squishy una volta dentro.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs CC magico single-target che ti chiude la finestra della **R** (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comp con healing pesante. Applica Grievous Wounds (un debuff che dimezza le cure ricevute) al danno.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs carry squishy che comprano shield. La passive HP-threshold (una passiva che si attiva quando il target e' sotto ~35% HP) si allinea con l'execute **R+Q+E**.

**Boots:** Sorcerer's Shoes di default. Swap su ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs comp con AP + CC pesante (2+ stun / root nel team nemico).

**Skill order:** Maxa **Q** prima (miglior danno e shield mana-cheap), **E** seconda (la waveclear sblocca al livello 9 con E max), **W** ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**. Swap Sorcery a **Resolve** (Second Wind + Overgrowth) nei matchup di poke a lungo raggio.

## Matchup chiave

- **Xerath / Vel'Koz:** Il range della loro Q supera il tuo di 200+ unita'. Last-hitti solo con **Q** a max range, mangi il poke, mai pushare oltre il river. Usa lo shield di ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** mezzo secondo prima che le loro abilita' atterrino — il magic shield blocca la maggior parte del danno.
- **Zed:** Evita all-in pre-6. Dopo che la **R** sblocca, baiti il mark della sua **R**, poi Riftwalk per evitare il danno snap-back. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come item 2 invece di Deathcap se e' fed (gia' a 4+ kill).
- **Veigar:** Pari pre-6, brutale post-11. Sta' fuori dal range della sua **E** (la cage) fino al livello 11; appena hai R a 2 secondi di CD, divi sopra di lui con un Riftwalk laterale (la cage ha angoli aperti, non muri pieni).
- **Ahri:** Race di roam priority. Pusha la wave quando lei e' a corto di mana, segui i suoi roam. Il Charm cancella la tua **R** mid-blink — compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** come 4o item se lei e' la threat carry.
- **Yasuo:** Bully early pesante. Non auto-attaccare in wave (la sua **E** dasha sui tuoi minion per poke gratis). Sta' indietro, lascialo pushare, freezi la wave vicino alla tua torre con auto-attack pull. Sopravvivi al livello 6 poi inizia a tradare R+Q.

## Power spike & condizioni di vittoria

- **Livello 6:** Sblocca **Riftwalk**. Ora puoi blinkare oltre i muri — esci dai gank attraverso il pit dei Krug, il muro dei Raptor, il bordo del pit del drake. Il danno della R al rank 1 e' basso, non fare ancora all-in.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages completato (~ minuto 12-14):** Primo cuscino HP/mana significativo. La lane phase diventa sopportabile; cerca trade brevi quando il mid nemico e' in cooldown.
- **Livello 11:** Il secondo rank di **R** taglia il CD a 3.5 secondi. E' qui che Kassadin e' davvero online — chaini 2 R e sopravvivi, oppure R-Q-E-AA-R out su uno squishy. Forza i teamfight da qui.
- **Livello 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** R a 2 secondi di CD, AP scaling sopra. One-shotti qualsiasi squishy senza MR e chaini 3-4 R in un singolo fight. Forza fight su baron e elder dragon — il late-game Kassadin li vince.

## Errori comuni

- **Provare a vincere la lane.** Kassadin e' il peggior laner early del mid by design. Se vai per all-in al livello 3 muori, resti indietro, non arrivi mai al tuo spike. Last-hit, mangi poke, arrivi al livello 11 vivo — questa e' la win condition.
- **Spammare Riftwalk nelle skirmish.** Ogni cast entro 7 secondi raddoppia il costo mana. 4 R consecutive bruciano 600+ mana — finisci il fight senza Q e senza E. Tieni d'occhio la barra mana prima della terza R.
- **Tenere la E per il cono perfetto.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** carica con le abilita' lanciate vicino (le tue e quelle nemiche contano). Lancia Q su una wave una volta prima del fight per stackare E pronta, poi engage. Entrare in fight senza E carica e' buttare il finisher di slow.
- **R-engage senza piano d'uscita.** Riftwalk e' a corto raggio (500). Se blinki sull'ADC backline e il tuo team non segue, il peel ti mangia prima che la R rinfreschi. Cerca sempre la direzione della seconda R (dove R out?) prima della prima R.
- **Comprare Deathcap prima di Rod of Ages.** Deathcap costa 3600 gold senza HP/mana — se lo compri prima muori in qualsiasi teamfight prima che l'AP conti. Rod of Ages (3700g, +400 HP, +400 mana) e' l'item di sopravvivenza che rende usabile il Deathcap.

## Suggerimento avanzato

Usa la **Q** come buffer di magic shield prima dei wind-up nemici, non solo come poke. Lo shield magico di 1.5 secondi di Null Sphere assorbe una quota fissa di danno magico — castalo nel mezzo secondo prima che una **W** di Veigar, una **R** di Lissandra, o una **R+Tibbers** di Annie atterrino, e neghi la maggior parte del loro burst. Esercitati nel timing in Practice Tool contro un Veigar bot: lo shield deve essere attivo **mentre la spell colpisce**, non prima del cast. Questo singolo trick e' cio' che separa i Kassadin che perdono lane 0/3 da quelli che la perdono 0/0 e scalano.
