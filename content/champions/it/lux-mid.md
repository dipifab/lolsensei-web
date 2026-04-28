---
title: "Lux Mid Build & Guida — Patch 16.9"
slug: "lux-mid"
language: "it"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Lux mid lane per League of Legends Patch 16.9: starter kit, build mago core, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "Le spell marchiano i nemici. La prossima auto-attack di Lux detona il marchio per danno magico bonus."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "Skillshot lineare che immobilizza fino a due nemici. Cooldown lungo — usa come setup, non come poke."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "Scudo all'andata e al ritorno su Lux e alleati attraversati. Rilancia per richiamarla in anticipo."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "Area targettata che rallenta e infligge danno nel tempo. Rilancia per detonare. Strumento principale di waveclear."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "Raggio lineare a lunga gittata con danno magico massiccio. Consuma i marchi di Illumination presenti."
      dd_spell_id: "LuxR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi salva il follow-up della R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena qualunque target prioritario compra un item di Resistenza Magica"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snipa i target squishy con R dalla massima gittata negli obiettivi una volta online Luden's Echo e Shadowflame. Controlla lo spazio con E e resta dietro alla front line."
  weakness: "Nessun dash, mobilità base nulla. Hard counter di diver e assassini; se la front line salta, anche il tuo posizionamento crolla."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "La Q di Lux è un root a lunga gittata: chi non ha dash né stealth viene bindato su una linea pulita e mangia tutto il combo E + R prima di poter rispondere."
    - examples: ["senna", "xerath", "ziggs"]
      archetype: "Carry da retroguardia con escape debole"
      reason: "La R cross-map trasforma errori di posizionamento in kill. Contribuiscono da lontano ma non possono schivare uno snipe a max range sugli obiettivi."
    - examples: ["annie", "sylas"]
      archetype: "Mage da all-in telegrafato"
      reason: "Il loro engage richiede corto raggio e un tell lento: Lux scuda il burst con W, Q nel frame di recovery, e passeggia via per resettare il trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "Entrano dentro il cast window della R di Lux prima che lei finisca il channel; Zhonya's Hourglass aiuta ma non basta se la catena di dash colpisce prima che la stasi parta."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery mage a gittata superiore"
      reason: "Pokano Lux oltre il range della Q. Lei non ha modo di chiudere la distanza, quindi ogni scambio in lane le costa HP senza opzione di all-in di ritorno."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamer globali / cross-map"
      reason: "Lux pusha la wave e resta in lane; l'avversario usa l'ult per ribaltare le sidelane e i dragoni. Lux perde il macro game anche quando vince il matchup 1v1."
---

## Panoramica

Lux è un mago a lunga gittata che eccelle nel zonare, picchiare a distanza e finire i teamfight dalla retroguardia. Il suo kit ruota intorno a colpire **Light Binding (Q)** come setup, per poi concatenare **Lucent Singularity (E)** e **Final Spark (R)** per il danno massimo. La mobilità base è bassa e non ha dash: il prezzo da pagare è restare dietro ai minion e alla front line. Il mid le si adatta perché il river le offre gank a doppio senso a cui può rispondere con **Q** o con una **R** dall'altra parte della mappa.

Il suo piano partita è semplice da spiegare e duro da eseguire: centra **Q** quando il nemico passa sopra alla tua **E** (lo slow concatena la binding in un root garantito), spingi le wave con **E** quando il rischio è basso e cerca rotazioni in side lane ogni volta che **R** è disponibile. Lo skill expression sta nel piazzamento di **E** (anticipare dove il nemico deve camminare per last-hit) e nello sniping di **R** in fog of war quando ci sono ward.

## Build Consigliata

**Item iniziali:** Doran's Ring + 2 Health Potions. Evita Corrupting Potion a meno che la lane non sia di harass auto-attack pesante contro di te.

**Item core (nell'ordine):**

1. **Luden's Echo** — spike di burst, sostegno mana per spammare E.
2. **Sorcerer's Shoes** — penetrazione magica fissa per cancellare i target squishy.
3. **Shadowflame** — burst extra; la passiva sotto soglia HP combacia con il finisher di **R**.
4. **Rabadon's Deathcap** — moltiplicatore late-game, lo slot AP più alto.

**Item situazionali:**

- **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali).
- **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top).
- **Void Staff** — appena qualunque target prioritario compra un item di Resistenza Magica.

**Stivali:** Sorcerer's Shoes di default. Ionian Boots of Lucidity accettabili se il team chiede più uptime di **R** come finisher.

**Skill order:** Massimizza **E** per primo (waveclear e DPS principale), **Q** per secondo (utility binding), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure **Precision** con **Presence of Mind** e **Coup de Grace** se la squadra avversaria ha più squishy a basse resistenze.

## Matchup chiave

- **Yasuo / Yone:** Possono Wind Wall la tua **Q** e **E**. Tieni **Q** finché non hanno bruciato le abilità, e usa **E** per pulire wave solo a distanza di sicurezza.
- **Diana / Akali:** Minacce di dive. Compra Zhonya's Hourglass dopo Luden's Echo; non usare **Flash** in modo offensivo in lane contro di loro.
- **Orianna:** Matchup pari, deciso nei teamfight. La gittata coincide; non lasciarti tirare in scambi auto-attack perché scala meglio con lo stesso set di oggetti.
- **Twisted Fate:** Gara di rotazione. Se ti tira la carta gialla, **Q** prima che chiuda; altrimenti tracciagli la **R** con ward su river e tri-cespuglio.
- **Galio:** Evita di stare appiccicato a un alleato pre-6 (la sua **W** punisce target raggruppati). Puniscilo quando è in melee sui minion; non ha gittata di waveclear per superarti in push.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in **E** più la **Q** di partenza hai gli strumenti per zonare il nemico da una wave in slow-push.
- **Livello 6:** Prima **Final Spark** sblocca rotazioni e pressione di snipe. Con il combo **Q-E-R** memorizzato, un teamfight su mid-river senza ward è una kill garantita.
- **Luden's Echo completo (~ minuto 12-14):** Il controllo della wave si ribalta. Puoi spingere e roamare lasciando la wave dalla parte avversaria, liberando il jungler verso il loro bot side.
- **Rabadon's Deathcap online (~ minuto 24-28):** La tua **R** one-shotta gli squishy che non hanno comprato un item di Resistenza Magica. Forza i fight obiettivo qui.

## Errori comuni

- **Lanciare Q per harass senza setup.** Atterra **E** sotto i loro piedi prima per rallentarli, poi **Q** sul percorso obbligato. La **Q** nuda di poke è mana sprecato.
- **Tenere E per wave vuote.** Spingi la wave a cooldown quando hai mana; il trade che cedi è molto più piccolo della priorità che guadagni per roam e Scuttle.
- **Auto-posizionarsi a gittata massima nei teamfight.** Massima distanza di **R** ti mette fuori dal peel del team. Stai nella seconda posizione più arretrata in modo che un flank non ti elimini.
- **Q in cooldown quando fai split-push.** Tieni **Q** per scappare dai gank; in side lane non hai team per follow-up, la binding è un pulsante d'emergenza, non carburante per poke.

## Suggerimento avanzato

Allena la cancellazione di **W** rilanciando **Prismatic Barrier** nel momento in cui raggiunge il picco di andata — lo scudo di ritorno arriva al valore massimo e fai contemporaneamente peel e shield-bomb su un alleato. Nei teamfight questo dà circa il doppio del valore di scudo effettivo rispetto a lasciare la **W** percorrere tutto il tragitto.
