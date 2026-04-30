---
title: "Syndra Mid Build & Guida — Patch 16.9"
slug: "syndra-mid"
language: "it"
patch: "16.9"
champion: "syndra"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Syndra mid lane per League of Legends Patch 16.9: build mago burst AP, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Syndra"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Transcendent"
      description: "Syndra raccoglie Splinters of Wrath salendo di livello e colpendo nemici. Ogni splinter potenzia un'abilità; quello della R la rende un'execute sotto soglia HP."
      dd_spell_id: "Syndra_Passive"
    - key: "Q"
      name: "Dark Sphere"
      description: "Evoca una sfera nel punto bersaglio per danno magico. La sfera resta sul terreno e può essere manipolata da W, E e R. Strumento principale di poke e waveclear."
      dd_spell_id: "SyndraQ"
    - key: "W"
      name: "Force of Will"
      description: "Raccoglie una sfera o un minion, poi rilancia per scagliarla con danno magico e slow. Dopo abbastanza Splinters infligge anche bonus true damage."
      dd_spell_id: "SyndraW"
    - key: "E"
      name: "Scatter the Weak"
      description: "Cono di knockback che spinge nemici e sfere. Le sfere colpite stunnano i nemici toccati: è la tua unica hard CC, difficile da centrare senza setup."
      dd_spell_id: "SyndraE"
    - key: "R"
      name: "Unleashed Power"
      description: "Burst single-target: lancia tutte le sfere orbitanti più quelle vicine su un campione. Una volta upgradata dagli Splinters esegue (uccide istantaneamente) bersagli a basso HP."
      dd_spell_id: "SyndraR"
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
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi compra tempo dopo che hai bruciato R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario compra un item di Resistenza Magica"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top)"
  base_combo: ["Q", "W", "E", "R"]
  win_condition: "Centra uno stun di E su una sfera, poi scarica Q-W-R per il one-shot. Con Luden's Echo e Rabadon's online, R esegue qualunque squishy sotto la soglia degli Splinters."
  weakness: "Niente dash, niente escape. Hard counter contro assassini mobili e artillery a lunga gittata: se sbagli E, salta lo stun e muori prima che la R torni."
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
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Senza dash non possono schivare il setup di stun con E. Una volta che la sfera viene knockata addosso, si mangiano tutto il combo Q-W-R e la R esegue ciò che resta."
    - examples: ["senna", "xerath", "ziggs"]
      archetype: "Carry da retroguardia con escape debole"
      reason: "Vogliono pokare da lontano. Syndra cammina la sfera dentro la propria E, stuna da 1100+ unità con il knockback e li one-shotta prima che possano rispondere."
    - examples: ["malzahar", "annie"]
      archetype: "Engage point-and-click telegrafati"
      reason: "Il loro all-in richiede corto raggio e un tell chiaro. La E di Syndra li spinge fuori prima che possano piazzare la CC, poi Syndra resetta il trade con il poke di Q."
  counterpicks:
    - examples: ["zed", "fizz", "kassadin"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "L'unica hard CC di Syndra è la E (skillshot attraverso una sfera). Champion con due o più dash girano intorno al cono e la raggiungono prima che la R torni."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery mage a gittata superiore"
      reason: "Pokano oltre il range della Q (800). Syndra non ha modo di chiudere la distanza, quindi ogni scambio in lane le costa HP senza opzione di all-in di ritorno."
    - examples: ["yasuo", "yone"]
      archetype: "Utenti di Wind Wall"
      reason: "Wind Wall blocca Q, W, R e la sfera scagliata da E. Syndra perde ogni trade basato su projectile finché il muro non scade, e il setup di stun crolla."
---

## Panoramica

Syndra è un mago burst a lunga gittata (burst = danno alto concentrato in 1-2 secondi) costruito attorno a una meccanica precisa: piazzi una **Dark Sphere (Q)**, la knocki addosso al nemico con **Scatter the Weak (E)** per stunnarlo, poi gli scarichi sopra tutto quello che hai. La passiva **Splinters of Wrath** potenzia ogni abilità durante la partita — la più importante è quella della **R**, che trasforma **Unleashed Power** in un execute single-target sui campioni a basso HP, dandole uno dei finisher più puliti del mid lane. Non ha dash, non ha escape, e lo stun richiede piazzamento preciso della sfera: stare dietro alla front line (il tank o bruiser che apre il fight) non è un'opzione, è obbligo.

Il piano partita è semplice da spiegare: in lane, harassa (logori l'HP del nemico con danno a distanza sicuro) con piazzamenti di **Q** che fanno anche waveclear, cerca i setup **Q-E** quando il nemico ti passa sopra una sfera, e roama con la **R** disponibile per cancellare uno squishy (un campione fragile come l'ADC) in side lane. In teamfight stai a gittata di seconda linea, aspetti che il tuo tank engage, poi stunni con **E** un target prioritario e lo brucia prima che possa riposizionarsi.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Il mana regen di Doran's Ring ti permette di spammare **Q** per il waveclear senza restare a secco al minuto 6.

**Item core (nell'ordine):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike di burst, mana per spammare **Q**, danno AOE sulla prima abilità del combo.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa; trasforma la soglia di execute della **R** in un vero one-shot.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra; la passiva sotto soglia HP (la magic pen bonus si attiva quando il nemico è sotto ~40% HP) combacia con i finisher della **R**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game, lo slot AP più alto.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). La stasi compra i 2.5 secondi che ti servono dopo aver bruciato la **R**, mentre il tuo team fa peel (ti protegge da chi ti sta attaccando).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario compra un item di Resistenza Magica.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top).

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** accettabili se il team chiede più uptime di **R** come finisher e il nemico ha poca MR.

**Skill order:** Massimizza **Q** per primo (unico poke a distanza e DPS principale), **W** per secondo (cooldown più basso e più danno sul throw), **E** per ultimo perché il base damage scala poco con il rank — basta un punto per lo stun. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery procca su ogni **Q** per poke gratuito; Manaflow Band sistema il peggior stat di Syndra. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure **Precision** con **Presence of Mind** e **Coup de Grace** se la squadra avversaria ha più squishy a basse resistenze. **Electrocute** (albero Domination) è un'alternativa valida se vuoi più burst di all-in al livello 2-3, ma Aery è il default più sicuro per un campione così immobile.

## Matchup chiave

- **Zed:** Il matchup più duro del pool. Tieni **E** per il dash della sua **R**, salva **Flash** per la sua ultimate e rusha ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item. Mai pushare la wave oltre il river senza vision.
- **Yasuo / Yone:** Wind Wall blocca **Q**, **W**, **R** e la sfera knockata da **E**. Bait il muro con una **Q** gratis, poi committa il combo nel frame di recovery.
- **Orianna:** Matchup pari, deciso nei teamfight. Non scambiare auto-attack in lane; il suo scudo + ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** vince i trade brevi. Cerca solo kill quando manca la **E**.
- **Twisted Fate:** Gara di rotation. Spingi la wave con **Q** a cooldown, pinga la **R** appena alza le carte, e ruota prima di lui. Le solo kill con **Q-E** funzionano pre-6 perché non ha escape.
- **LeBlanc:** Vuole all-innare (committarsi a un tentativo di kill totale senza via di fuga) al livello 3. Evita di pushare nei primi livelli, tieni **E** per il return della **W**, e rispetta la sua kill threat fino al livello ~9. Dopo ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** il matchup si ribalta — il tuo burst eguaglia il suo e la tua gittata è maggiore.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **Unleashed Power** sblocca il one-shot **Q-W-E-R** su qualsiasi squishy ancora a mana pieno speso. Se hai una sfera già piazzata e il nemico usa **Flash** per schivare la **E**, puoi comunque trascinare la sfera con **W** per un re-engage di stun.
- **Livello 9 (Q maxata):** Il cooldown della Q crolla, il costo mana resta fisso. Il controllo della wave passa dalla tua parte: shovi e roami con **R** disponibile.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completo (~ minuto 12-14):** Primo vero spike di burst. Il combo cancella un target da 1300 HP se centri la **E**.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** La tua **R** one-shotta gli squishy che non hanno un item di Resistenza Magica. Forza i fight obiettivo a questo timing — Drake o Baron — perché qui il tuo valore in teamfight è al picco.

## Errori comuni

- **Lanciare Q per harass senza setup.** Piazza la sfera dove il nemico deve passare per last-hit, poi **E** attraverso la sfera per centrare lo stun. La **Q** nuda di poke senza follow-up è mana sprecato.
- **Dimenticare che W può raccogliere un minion.** Non ti serve una Dark Sphere per scagliare con **W** — basta un minion. In lane significa che puoi **W** un caster minion verso il nemico da 925 di range quando la **Q** è in cooldown, raddoppiando il tuo harass.
- **Bruciare la R su un frontline a HP pieno.** La **R** è single-target e ha 120s di cooldown a rank 1. Tienila per uno squishy sotto la soglia di execute, mai per il tank che ha aperto il fight.
- **Stare fermi a lanciare la E.** La **E** ha un cast time non istantaneo. Se ti fermi per mirare, i campioni mobili leggono il wind-up e dashano fuori. Cammina in avanti mentre la lanci, così il cono copre il loro prossimo passo.
- **Pickare Syndra contro doppio dash assassin.** Decisione pre-game: se il draft ha Zed + Kha'Zix o Akali + Diana, cambia pick. Una volta locked, non risolvi a mecchaniche — anche Zhonya's compra solo 2.5 secondi contro due assassini con reset.

## Suggerimento avanzato

Il **W**-cancel pickup: quando lanci **W** per raccogliere una sfera, puoi **immediatamente** lanciare **Q** durante la breve animazione di pickup per far cadere una seconda sfera al cursore, poi scagliare la prima con il rilancio di **W**. Questo ti dà un setup a 2 sfere nel tempo di un singolo cast cycle: scaglia la sfera della **W** sul nemico per lo slow, poi **E** attraverso la sfera fresca della **Q** per lo stun. Il trick vince fight ai rank alti perché la maggior parte dei nemici si aspetta pressione di una sola sfera, non due impilate in un combo.
