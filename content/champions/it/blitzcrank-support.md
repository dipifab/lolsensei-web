---
title: "Blitzcrank Support Build & Guida — Patch 16.9"
slug: "blitzcrank-support"
language: "it"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Guida Blitzcrank support per la Patch 16.9: timing del hook, ward in bot lane, build engage tank, matchup chiave, power spike e errori comuni per novizi."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "Quando scendi a HP bassi ricevi uno scudo proporzionale al mana corrente. Conviene tornare in fight con la barra mana piena."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Skillshot lineare lungo: tira verso di te il primo nemico colpito (un 'hook' — uno strappo che attira il bersaglio). Cooldown lungo: hook mancato = 16-20 secondi senza engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-buff: tanto move speed e attack speed, poi uno slow alla fine. Si usa per chiudere il gap prima della Q o per inseguire dopo il knock-up della E."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Carica il prossimo basic attack per fare un knock-up breve. Range corpo a corpo: Blitz deve essere gia accanto al bersaglio."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Attiva: danno e silence (blocco breve di tutte le spell) ai nemici intorno. Passiva: una carica fa danno extra elettrico sul prossimo basic attack."
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro tanto crowd control o burst AP (Lux, Morgana, Ahri) — magic resist piu tenacity (recuperi prima dal CC)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro hard CC sul tuo carry (Morgana Q, Ashe R, Leona engage) — l'attivo toglie uno stun all'ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "contro comp da poke (Xerath, Caitlyn, Senna) — heal ad area in teamfight recupera l'HP perso prima del fight"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "quando vuoi piu hook per fight — Ability Haste taglia secondi alla Q: un hook mancato pesa meno"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Landa una Rocket Grab su un priority target (ADC o backline mage) e finiscilo con la chain W-AA-E-R prima che il loro team faccia peel (proteggere il carry dal danno in arrivo)."
  weakness: "Se la Q manca, hai 16-20 secondi senza quasi nessun engage. Lane con disengage (Janna, Lulu) o con corpi che bloccano l'hook (minion, tank davanti) spengono il kit."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "ADC con posizione statica e senza dash"
      reason: "Devono fermarsi a range per attaccare dietro la linea di minion: un hook tirato sull'arco del minion cannone arriva pulito perche non hanno escape istantaneo."
    - examples: ["soraka", "janna", "yuumi"]
      archetype: "Enchanter squishy con HP base bassi"
      reason: "Tirando l'enchanter fuori posizione cancelli la lane: il loro carry resta senza peel, e la combo Q-W-E-R su un bersaglio da 500 HP chiude il trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Mage support stazionari"
      reason: "Stanno fermi dietro per pokare. Un hook a max range sul frame di cast li prende prima che possano flashare, e regalano un 4v5 al tuo team."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Tank engage che vincono la gara di hook"
      reason: "Se hookano o caricano per primi, la tua animazione di Q viene interrotta e il tuo compagno mangia la chain di CC: in lane hook-vs-hook perde chi telegrafa il cast."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage e immunita CC"
      reason: "Janna Q tornado ti sbatte fuori dal range della E; Lulu W ti slowna o ti polymorpha durante l'engage; Morgana Black Shield blocca direttamente l'hook."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Bruiser che fanno self-peel"
      reason: "Dopo un hook riuscito possono headbuttare via il proprio ADC o ingoiarlo: il pull non chiude la kill, e il cooldown lungo della Q diventa una finestra di punish."
---

## Panoramica

Blitzcrank e un support tank-engage il cui gameplay ruota tutto intorno a una abilita: **Rocket Grab (Q)**. L'hook (uno strappo che attira il nemico verso di te) apre ogni fight con questo kit. Se la landi, la bot lane diventa un 2v1 per due secondi; se la sbagli, hai un cooldown di 16-20 secondi quasi senza engage. Scala con cooldown reduction (chiamato "Ability Haste") e con una build tank, perche il suo lavoro e camminare in avanti, hookare, knock-uppare, e sopravvivere abbastanza per far ripulire al suo ADC.

Il game plan in una frase: warda i bush, guarda i piedi dell'ADC nemico, lancia la **Q** quando passa su una traiettoria prevedibile, poi concatena **W** (self-buff di move speed) → auto-attack → **E** (knock-up) → **R** (silence ad area). Fuori dai fight il tuo lavoro e la vision: piazza ward in river e tri-bush cosi jungler e mid laner sanno quando il nemico e missing.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + trinket ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**. Compra un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** ad ogni back dal secondo back in poi.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter da support. Da gold passivo e si aggiorna automaticamente in ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** una volta superata la soglia di gold (intorno al minuto 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — l'upgrade warden dello starter. Health, Ability Haste e un'aura che slowna il nemico che immobilizzi: si incastra perfetto con il knock-up della **E**.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots con armor contro bot lane piene di auto-attack (la maggior parte degli ADC); swap in ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro tanto crowd control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — attivo che da uno scudo ad area. Dopo che hai hookato e il tuo team committa, schiacci Locket mentre il burst nemico e a meta cast: assorbe lo spike e trasforma un fight 50/50 in un fight pulito.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — lega la passiva al tuo ADC. Dopo che la tua **R** detona, l'ADC riceve un buff di danno sui basic attack per qualche secondo.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — peel item da late game (peel = proteggere il carry dal danno in arrivo): redirige una parte del danno che prende l'ADC su di te. Si combina con la tua stack tank e ti permette di correre nella back line per body-blockare (metterti sul percorso per assorbire colpi destinati a un alleato).

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contro hard CC sul tuo carry (Morgana Q, Ashe R, Leona engage). L'attivo toglie uno stun dall'ADC durante il fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contro comp da poke (Xerath, Caitlyn, Senna): l'heal ad area in teamfight recupera l'HP perso a provare a camminare in avanti.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — quando vuoi piu hook per fight; Ability Haste taglia secondi alla **Q**, cosi un hook mancato fa meno male.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sono il default contro la maggior parte delle bot lane. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro burst AP o stun; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se ti fidi dei tuoi hook e vuoi rilanciarli prima.

**Skill order:** Massimizza prima la **Q** (l'hook e il kit), poi la **E** (il knock-up scala con il rank), per ultima la **W**. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock ti da un burst di armor e magic resist subito dopo aver immobilizzato un nemico: scatta proprio sul pull della **Q**, quindi nel momento esatto in cui diventi un bersaglio, tankki il danno di ritorno. Secondary **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Alternativa: **Inspiration** primario con **Glacial Augment** se preferisci una lane piu da poke-and-slow (meno comune ma valida contro enchanter immobili).

## Matchup chiave

- **Caitlyn / Janna:** Caitlyn piazza trappole nei bush in cui passeresti per hookare. Compra un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** per il bush di lane e controllalo prima di entrare; il tornado della Q di Janna interrompe l'animazione della tua **Q**, quindi aspetta che lo usi sulla wave prima di lanciare la tua.
- **Thresh / Nautilus:** Lane hook-vs-hook. Chi hooka per primo di solito perde, perche la seconda hook e una risposta gratis. Usa i minion come body-block: stai dietro al cannone, costringi loro a committare, e punisci sul cooldown.
- **Lulu / Yuumi:** Scalano con il loro ADC e non hanno engage. Hai prio in lane: lancia hook ragionati, ma soprattutto roama in mid intorno al livello 4-6 con la **W** attiva. Un hook cross-map su un mid laner che pusha troppo e la giocata di valore piu alto in assoluto per Blitz.
- **Morgana / Lux:** Entrambe possono fermare l'hook con un root a lungo range. La E di Morgana (Black Shield) mangia interamente la tua **Q**. Costringila a usarla sulla wave: fingi un hook, fai un sidestep, poi committi quando il suo shield e in cooldown.
- **Ezreal / Senna:** Pokano senza committare in avanti. Il piano di lane non e "hook l'ADC ogni 16 secondi" — e "negagli vision cosi il jungler ti gankka". Piazza ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** all'ingresso del river e pinga gank quando Ezreal flasha una wave.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + W):** Primo power spike di hook. Con la **W** attiva insegui il pull qualche passo in piu prima che parta lo slow finale: spesso e cio che trasforma un hook in una kill invece di un trade al 50% HP.
- **Livello 6 (R sbloccata):** Il tuo all-in (lo scambio totale fino alla kill, senza tornare indietro) diventa una kill garantita sulla maggior parte degli ADC. La combo e **Q** → **W** → auto-attack → **E** knock-up → **R** silence e damage. Il silence impedisce al support nemico di **Flash**-disengage il carry.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completion (~ minuto 12-15):** L'upgrade warden dello starter sblocca la versione teamfight del kit: ogni immobilize che landi slowna il bersaglio per il tuo ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 22-26):** Adesso puoi engage su un 5-stack mid game senza che la back line venga bursteta. E lo spike da cui inizi a cercare giocate da ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** verso gli obiettivi.

## Errori comuni

- **Lanciare la Q in cooldown senza setup.** Un hook senza follow-up e sprecato: se tiri verso di te un bersaglio che il tuo team non riesce a raggiungere, hai appena regalato 16-20 secondi al nemico. Lancia **Q** solo quando l'ADC e in range per committare l'all-in (la chain di danno completa fino alla kill, senza tornare indietro).
- **Telegrafare l'animazione dell'hook.** Blitz alza il braccio con un'animazione di cast chiaramente visibile prima che la **Q** parta. Avversari decenti fanno sidestep sul wind-up. Lancia la **Q** da dentro un bush, dalla fog of war (le zone scure non visibili della mappa dove il nemico non ti vede), o mentre il nemico e bloccato a fare animazione di una sua abilita: cosi non puo reagire.
- **Hookare il bersaglio sbagliato.** Tirare il tank o il bruiser nemico e quasi sempre un disastro: regala al loro team un engage gratis su di te. Cerca sempre prima il bersaglio squishy (campione ad alto danno e poche difese, tipo gli ADC o i mage) prima di committare la **Q**.
- **Dimenticare il costo mana della passiva.** Lo scudo della passiva **Mana Barrier** scala con il mana corrente, quindi backare a mana basso significa partire il prossimo fight con un -30% di scudo. Backa quando la **Q** e in cooldown e il mana e sotto il 40%, non quando ti gira.
- **Usare la R solo per il danno.** **Static Field** e piu utile come silence (un blocco breve sul cast delle spell nemiche) che come danno. Tienila per quando il support nemico e a meta channel di un'abilita chiave: l'interrupt vale piu del burst su nemici a 200 HP.

## Suggerimento avanzato

Il setup di hook piu forte del gioco e il **bush-fog hook**. Cammina nel bush della lane dietro la tua wave, dove il nemico non ti vede. Aspetta che la wave pushi cosi l'ADC nemico avanza per fare last-hit (uccidere un minion per gold) sul minion cannone. Lancia la **Q** attraverso il muro del bush: non hanno animazione da leggere, non hanno tempo di fare sidestep, e la mano attraversa il bush prima che si rendano conto del cast. Combinalo con la **W** attiva cosi chiudi il gap prima che venga su il flash del support. Questo singolo pattern e responsabile della maggior parte delle kill di lane che Blitzcrank fa sopra la soglia di rank bronze.
