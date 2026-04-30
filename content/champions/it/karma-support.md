---
title: "Karma Support Build & Guida — Patch 16.9"
slug: "karma-support"
language: "it"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Guida Karma support per League of Legends Patch 16.9: build enchanter, rune, matchup chiave, power spike, errori comuni e un consiglio finale per chi inizia."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mago / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Colpire un campione nemico con un'abilità o un'auto-attack riduce il cooldown di Mantra. Restando attiva nei trade tieni la R sempre pronta."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Skillshot lineare che esplode al primo bersaglio, infligge danno e rallenta i nemici nella piccola area. Strumento principale di poke in lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether (collegamento) su un nemico target. Se non si spezza entro la durata, infligge danno due volte e immobilizza. La distanza di rottura conta."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Scudo targettato su un alleato con un breve buff di Move Speed. Usalo sull'ADC per disengage o per chiudere una kill."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empowera la prossima Q, W o E. RQ aggiunge un'esplosione AOE ritardata, RW cura Karma e prolunga il root, RE scuda gli alleati vicini e dà più Move Speed."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni con tante cure (Soraka, Yuumi, Vladimir, Dr. Mundo): riduce le cure nemiche quando li danneggi con la Q."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE (Yasuo + Malphite, ulti di Orianna): lo scudo di squadra blocca la wombo combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro caster con CC magico singolo (gancio di Blitzcrank, Q di Morgana, stun di Twisted Fate)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini che ti puntano (Zed, Talon, Akali): la stasi di 2,5s permette al team di farti peel."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "quando il team ha bisogno di più danno dal tuo poke e ADC e jungler fanno follow-up sul tuo slow in modo costante."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bullizza la bot lane con poke di Q da livello 1, prepara le kill con il root di W e con la Q empowerata da Mantra (RQ), poi peeli l'ADC con E e RE nei teamfight."
  weakness: "Enchanter squishy senza dash. I support di hard engage (Leona, Nautilus, Rell) ti bloccano prima che la W tetheri, e una Q sbagliata significa scambiare HP per niente."
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
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Mage support immobili"
      reason: "La Q di Karma ha range simile alla loro e l'E shielda il poke nemico, quindi vince i trade lunghi grazie alla cura che loro non possono replicare."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanter passivi senza CC duro"
      reason: "Non possono punire una Q sbagliata, quindi Karma poka l'ADC senza rischio e snowballa la lane prima che loro raggiungano lo spike di item."
    - examples: ["draven", "kalista"]
      archetype: "ADC lane-bully aggressivi che vogliono support pokabili"
      reason: "Karma E sull'ADC alleato assorbe il loro burst all-in, poi ritrade più forte con Q-RQ perché Aery procca su ogni spell."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tank di hard-engage con CC point-and-click"
      reason: "I loro stun colpiscono prima che la W tetheri, quindi Karma mangia l'engage senza root e muore prima che la E possa salvare l'ADC."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook support a lungo range"
      reason: "Karma non ha dash per schivare uno skillshot lineare pulito; un gancio su di lei a livello 2-3 chiude la lane perché non ha strumenti di fuga."
    - examples: ["alistar", "rakan"]
      archetype: "Peel-engager mobili"
      reason: "Saltano addosso a Karma più velocemente di quanto lei possa lanciare Q o E, e spezzano il tether con i loro knock-up prima che la W ticchi."
---

## Panoramica

Karma è un support ibrido enchanter-poke: un enchanter è un campione costruito attorno a cure e scudi sugli alleati, e "poke" significa logorare l'HP nemico da distanza senza committare un fight intero. Poka con **Inner Flame (Q)**, blocca i bersagli con **Focused Resolve (W)** e protegge l'ADC (il carry a distanza in bot lane accanto a lei) con **Inspire (E)**. La sua ultimate **Mantra (R)** non è una spell separata, ma un'empowerment che aggiunge un effetto extra alla prossima Q, W o E. Visto che Mantra è disponibile dal livello 1, Karma è uno dei pochi champion che "ha l'ulti" già al primo cast in lane — ogni auto-attack su un campione abbassa il cooldown grazie alla passiva **Gathering Fire**.

Il game plan è vincere la bot lane con Q poke on cooldown, cercare un root (un "root" blocca il movimento del nemico per qualche secondo) con W quando il nemico avanza per last-hittare un minion, e shieldare l'ADC con E per assorbire l'all-in (lo scambio totale fino alla kill). Intorno al minuto 12, con ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** e ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** completati, Karma diventa un'enchanter da teamfight che scuda un carry alleato in prima linea (frontline = il tank o fighter che apre il fight) e zona la back line (back line = i carry che fanno danno da dietro) con RQ.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item della quest support) più 2 Health Potions e una Stealth Ward. Salta le mana potion: Manaflow Band e Biscuit Delivery coprono il problema mana early.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completa in ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** intorno al minuto 10-12, è il reward della quest support. Dà gold income e cariche di ward.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — boots che danno Ability Haste (statistica che abbassa i cooldown delle spell), per avere Mantra e Q più spesso.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando shieldi un alleato con E, gli dai attack speed (attacca più veloce) e danno magico on-hit (danno extra ad ogni basic attack). Ottimo con ADC che attaccano velocemente (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — cure e scudi ripetuti triggerano una cura cumulativa sugli alleati a basso HP. Va a braccetto con E spam e RE nei teamfight.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — area heal con 5 secondi di delay, da usare nei fight su obiettivi (Drake, Baron) per topparti tutto il team.

**Situational items:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp con tante cure (Soraka mid, Yuumi, Vladimir top). Riduce le cure nemiche ogni volta che li danneggi con Q.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE (Yasuo + Malphite, R di Orianna). L'attivo dà al team uno scudo largo, blocca la wombo combo (un "wombo combo" è un engage con CC concatenati che spazza via il team in 1-2 secondi).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro caster con CC magico singolo che ti one-shottano (gancio di Blitzcrank, binding di Morgana, gold card di Twisted Fate).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini che ti puntano specificamente (Zed, Talon, Akali). I 2,5 secondi di stasi ("diventi non bersagliabile ma non puoi muoverti né castare") danno tempo al team di fare peel su di te.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — quando il team ha bisogno di più danno e jungler/ADC fanno follow-up costante sul tuo slow di Q.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è il default per l'Ability Haste (vuoi Mantra il più spesso possibile). Mobility Boots sono accettabili se roami spesso a mid.

**Skill order:** Maxa **Q** per prima (poke principale e danno AOE), **E** per seconda (scudo più grosso + Move Speed), **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16 — ma ricorda che Mantra è già usabile dal livello 1.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery procca su ogni Q per danno extra di poke e su ogni E per un piccolo bonus di scudo. Secondary **Inspiration** con **Biscuit Delivery** (sustain di mana gratis in lane) e **Cosmic Insight** (più Ability Haste su summoner e item).

## Matchup chiave

- **Lulu / Janna:** Matchup pari. Sono entrambe enchanter senza hard engage; la lane si decide sull'incrocio degli ADC. Pokale con Q quando si fanno avanti per piazzare ward, ma non committare Mantra in lane — tienila per le rotation sugli obiettivi.
- **Soraka:** Poke war favorevole. Lo slow di Q più i procchi di Aery vincono il trade contro il costo HP della W di Soraka. Spingila fuori dalla wave entro i livelli 3-5 lanciando Q on cooldown.
- **Leona / Nautilus:** Lane dura. Engagiano (aprono il fight) con CC point-and-click (crowd control che blocca all'istante senza mirare, tipo uno stun a click) prima che tu possa tetherare con **W**. Tieni la E pronta per il momento in cui engagiano (lo scudo + Move Speed assorbe il burst — danno alto in 1-2 secondi — e ti fa peel out, cioè ti fa scappare con l'ADC), e mai pushare la wave oltre il fiume senza vision.
- **Pyke / Thresh:** Il range del gancio coincide con il range della tua Q. Stai dietro all'ADC, nasconditi dietro i minion per spezzare la linea di vista sui ganci, e Q il support — non l'ADC — quando il suo gancio è in cooldown.
- **Blitzcrank:** Il pull è tutta la lane. Avanza solo quando vedi la sua Q in cooldown; se ti aggancia, E immediatamente su te stessa (lo scudo + speed boost ti dà una chance di tornare a torre).

## Power spike & condizioni di vittoria

- **Livello 1:** Mantra è già up. RQ a livello 1 è uno strumento di invade forte (invadere la jungle nemica per impostare una kill early) perché l'esplosione AOE (area di effetto, danno su una zona invece che a singolo bersaglio) fa danno reale su nemici ammassati (più target uno vicino all'altro).
- **Livello 6:** Il secondo punto in R sblocca cooldown di Mantra più rapidi. Con Manaflow Band stackato, puoi spammare combo Q-RQ-W nell'all-in di bot lane.
- **Bloodsong + Ionian Boots of Lucidity (~ minuto 10-12):** Si apre la finestra di roam (roam = lasciare la propria lane per aiutare un'altra lane). Pusha la wave forte con una Q, poi cammina al fiume di mid lane per impostare un 3v2 con jungler e mid laner.
- **Ardent Censer + Moonstone Renewer (~ minuto 24-28):** Picco da teamfight. Ogni scudo di E triggera l'attack speed di Ardent e la cura cumulativa di Moonstone. Il tuo ADC scalerà più di qualunque matchup con questi due item dietro.

## Errori comuni

- **Sprecare Mantra in lane sul poke.** RQ sembra forte, ma bruciare Mantra al minuto 4 significa nessuna detonazione AOE quando il jungler nemico ganka (attacco a sorpresa dalla river sulla tua lane) al minuto 6. Tieni RQ per il setup dopo un root di W o per nemici ammassati vicino al drake.
- **Shieldarsi con E.** E su te stessa va bene come panic button (un cast d'emergenza quando stai per morire), ma valore dello scudo e Move Speed sono sprecati se l'ADC muore dietro di te. Default: E sull'ADC; tu shieldi te solo se l'ADC è già al sicuro.
- **Q poke quando l'assassino nemico è missing sulla mappa.** Karma non ha dash. Se il jungler nemico non è tracciato, non avanzare a portata di Q — ti prendi il gank senza scampo e spendi la vita per niente.
- **Dimenticare il range di rottura della W.** La tua **W** root solo se il tether resta unbroken per tutta la durata. Se la lanci a max range e fanno un passo indietro, il tether si spezza e zero payoff. Lancia W quando il nemico è committed (dopo che ha usato dash o escape).
- **Buildare damage invece che utility.** Karma può scalare in danno AP, ma la build enchanter (Ardent Censer, Moonstone Renewer, Redemption) dà al team molto più valore di una Rabadon's. Default utility, salvo che tu sia massicciamente avanti.

## Suggerimento avanzato

Usa **RE** (Mantra che empowera Inspire) su un alleato che sta caricando in avanti — non su te stessa. La E empowerata scuda il target più tutti gli alleati vicini e dà un Move Speed boost più ampio. Lanciala sull'ADC nel momento esatto in cui il team committa l'engage: la Move Speed AOE permette a tutto il team di chiudere la distanza sulla back line nemica insieme, trasformando un teamfight normale in un collasso forzato. Il trucco è cronometrare RE prima dell'engage, non dopo, perché il buff di Move Speed serve di più mentre entri.
