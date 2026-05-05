---
title: "Milio Support Build & Guida — Patch 16.9"
slug: "milio-support"
language: "it"
patch: "16.9"
champion: "milio"
role: "support"
last_updated: "2026-05-05"
description: "Guida Milio support League of Legends Patch 16.9: build enchanter, matchup di peel e range buff, power spike, errori comuni e un consiglio avanzato sul posizionamento."
quick_learn:
  champion_dd_id: "Milio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Range Buff"
  abilities:
    - key: "P"
      name: "Fired Up!"
      description: "Le abilità di Milio marchiano gli alleati colpiti. Il loro prossimo attacco o spell infligge danno magico bonus e brucia il bersaglio nel tempo."
      dd_spell_id: "Milio_Passive"
    - key: "Q"
      name: "Ultra Mega Fire Kick"
      description: "Skillshot lineare a lunga gittata che respinge il primo nemico ed esplode dietro di lui rallentando l'area. Centrare un campione rimborsa parte del costo mana."
      dd_spell_id: "MilioQ"
    - key: "W"
      name: "Cozy Campfire"
      description: "Posiziona un focolare che segue un alleato. Gli alleati vicini guadagnano Attack Range bonus, cura nel tempo e proc periodici di Fired Up. Rilancia per cambiare portatore."
      dd_spell_id: "MilioW"
    - key: "E"
      name: "Warm Hugs"
      description: "Scudo targettato + Move Speed bonus su un alleato. 2 cariche, gli effetti si stackano sullo stesso alleato. Strumento principale di peel e protezione anti-engage."
      dd_spell_id: "MilioE"
    - key: "R"
      name: "Breath of Life"
      description: "Channel AOE attorno a Milio che pulisce il CC immobilizzante dagli alleati, li cura e dà Tenacità. Il miglior disengage del gioco in un singolo bottone."
      dd_spell_id: "MilioR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "fight lunghi sugli obiettivi (Drake, Baron) — heal AOE ritardato che puoi droppare da metà mappa"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contro AP carry che scalano con Ability Haste (Hwei, AP Ezreal) — buffa l'alleato che scudi con AP extra"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE pesante (Yone R, Kennen R, Orianna R) — active dà uno scudo istantaneo a tutto il team"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo) — la tua Q applica Grievous Wounds e ti dà anche un piccolo boost di AP"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Stacka Attack Range e scudi su un AD carry da basic attack. Tieni R per il momento in cui il nemico committa hard CC, poi guarda il team passare attraverso il loro engage senza prendere danno."
  weakness: "Damage solo basso e Q lenta in windup. Se il nemico ti centra hard CC prima che R sia online non puoi fare peel a nessuno — incluso te stesso."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaria: Aery viaggia su ogni scudo E e ogni heal di W per poke gratis e scudo extra. Manaflow Band tiene il mana per spammare E e W, Transcendence porta l'Ability Haste oltre il 40%, Scorch trasforma ogni Q in chip damage a basso HP."
    secondary_rationale: "Resolve secondaria: Font of Life si triggera dallo slow di Q e dagli auto del tuo AD carry per cura di team costante, Revitalize amplifica del 10% ogni scudo e ogni heal che lanci — pura matematica enchanter."
    secondary_alternative: "Contro hook support (Blitzcrank, Thresh, Pyke), swap Resolve verso Inspiration con Biscuit Delivery (sustain early game) e Cosmic Insight (Flash a cooldown ridotto — l'unica escape contro hook prima che R sia online a livello 6)."
matchup_draft:
  pick_into:
    - examples: ["jhin", "caitlyn", "ashe", "senna"]
      archetype: "AD carry immobili da basic attack"
      reason: "L'Attack Range bonus di Cozy Campfire trasforma un marksman fermo in artiglieria: out-rangea ogni lane avversaria senza bisogno di esporsi avanzando."
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Support hard engage"
      reason: "La R pulisce il loro CC nel momento in cui colpisce e dopo dà Tenacità — la back line resta viva anche se il primo pick va a segno."
    - examples: ["zac", "hecarim", "warwick", "amumu"]
      archetype: "Jungler diver da all-in"
      reason: "Il loro gank è un singolo salto committed con hard CC; la R pulisce il lock-down sull'AD carry e il Move Speed di Warm Hugs porta il carry fuori dal melee range."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Support con hook a lunga gittata"
      reason: "Milio non ha gap-closer e nessun CC istantaneo: un hook a segno prima del livello 6 cancella l'AD carry prima che R sia online. La Q è troppo lenta per interrompere il cast."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage support a lunga gittata"
      reason: "Pokano oltre i 650 di range di Warm Hugs: Milio scuda ogni colpo ma non può rispondere, e l'attrizione di HP nel tempo vince la lane prima del suo team-fight spike."
    - examples: ["pantheon", "alistar"]
      archetype: "Support all-in livello 1-2"
      reason: "Il kit di Milio a livello 1 è solo Warm Hugs e una Q a 10s — perde ogni trade breve prima che W sia online. Il combo Pantheon Q + W e Alistar Q + W cancellano il carry prima della R."
---

## Panoramica

Milio è un enchanter support la cui intera identità sta in un verbo: **buff** — rendere l'AD carry di bot lane (il marksman che scala con item e basic attack) più grande, più sicuro e più cattivo. **Fired Up!** marchia ogni alleato toccato da una spell così che il loro prossimo colpo bruci il bersaglio. **Ultra Mega Fire Kick (Q)** è un knockback a lunga gittata usato per peel su un diver (un campione che salta sulla back line) lontano dal carry. **Cozy Campfire (W)** è un focolare che segue un alleato e gli dà Attack Range extra, cura e proc di danno periodico — l'abilità signature che permette a una Caitlyn o a uno Jhin di sparare da una distanza che nessun altro può eguagliare. **Warm Hugs (E)** è uno scudo a 2 cariche con Move Speed bonus, e **Breath of Life (R)** è il disengage più pulito del gioco (un'abilità che spezza il tentativo di engage avversario — quando saltano dentro con hard CC, tu pulisci il CC e cammini fuori).

Il piano partita è calmo e meccanico: non lasciare mai morire l'AD carry, e trasformare ogni basic attack in un colpo a gittata maggiore e più dannoso. Stai tra le minacce e il tuo carry, lancia W sul carry a ogni fight perché possa sparare da fuori dal range avversario, scuda a cooldown, e tieni R come pulsante d'emergenza per quando il team nemico committa tutto sulla tua back line. Su Milio non engage quasi mai — il suo lavoro è vincere i fight rifiutando di perderli.

## Build Consigliata

**Item iniziali:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter support che ha una quest interna per più gold income e più cariche di ward) più 2 Health Potions. Evita gli starter da damage: Milio non snowballa dalle kill in lane (snowball = trasformare un vantaggio iniziale in un divario crescente nel tempo), scala dall'utility da teamfight.

**Item core (nell'ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completa in Bounty of Worlds, poi in un legendary support più tardi. Stacka gold e cariche di ward in automatico.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste per spammare scudi **E** e abbreviare il cooldown di **W**; stivali di default per gli enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva heal-on-shield che sale in fight prolungati. Combinata con lo spam di **E** l'AD carry quasi non subisce danno netto.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — l'alleato che scudi guadagna danno on-hit bonus e Attack Speed. Item top di gamma accanto a un AD carry da basic attack come Caitlyn o Jhin.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — pulisce hard CC su un alleato in aggiunta alla **R**. Obbligatorio se la squadra avversaria ha uno stun single-target o un hook sul carry.

**Item situazionali:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si allungano (Drake, Baron, teamfight prolungati). Heal AOE ritardato (cura ad area che atterra qualche secondo dopo il cast) lanciabile da metà mappa.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contro AP carry che scalano con Ability Haste (Hwei, AP Ezreal). Buffa l'alleato che scudi con Ability Power extra oltre al Move Speed.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE pesante (un grosso pezzo di danno su tutta la squadra in 1-2 secondi, come Yone R o Kennen R). L'active dà uno scudo istantaneo a tutto il team.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo). La tua **Q** applica Grievous Wounds (un debuff che dimezza le cure nemiche) e in più hai un piccolo boost di Ability Power.

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. Boots of Swiftness sono accettabili contro composizioni con molti slow da cui devi camminare via.

**Skill order:** Massimizza **E** per primo (il valore di scudo scala forte per livello — strumento di peel principale), **Q** per secondo (più danno e slow più lungo), **W** per ultimo (il bonus di Attack Range è già grande a rank 1, l'upgrade migliora soprattutto la cura). Punto in **R** ai livelli 6, 11, 16. Apri **E** a livello 1 per scudare il primo all-in (all-in = scambio totale fino alla kill, senza uscita), poi **W** a 2 per dare Attack Range all'AD carry.

**Rune:** Albero primario **Sorcery** con **Summon Aery** (attacca un piccolo proiettile di danno e di scudo a ogni tua spell), **Manaflow Band** (sustain di mana per scudare e usare W ogni wave), **Transcendence** (Ability Haste oltre il cap del 40%), **Scorch** (chip damage extra dalla **Q** a basso HP). Secondario **Resolve** con **Font of Life** (rallenti un nemico con **Q** → tutti gli alleati che lo colpiscono si curano) e **Revitalize** (10% bonus su ogni scudo e cura che lanci). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Leona / Rakan:** Support hard engage. Tieni **R** per il momento in cui committano sull'AD carry, mai bruciarla in un trade di poke. Sta dietro la wave così non possono Flash-engage da fog of war (il cespuglio non wardato sul lato del river).
- **Blitzcrank / Thresh / Pyke:** Support con hook. Sta dietro ai minion ogni volta che attraversi il river. L'hook a segno una volta uccide l'AD carry — non puoi **R** fuori da uno stun di 1.75 secondi. Compra ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** prima del solito.
- **Xerath / Brand:** Mage support fuori dal range del tuo scudo **E**. Sta attaccato alla wave, niente scambi auto-attack, e fai hard-side la lane al tuo jungler (lo metti a campare il tuo lato del river). ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** anticipata aiuta ad assorbire il chip poke (piccolo danno ripetuto che logora HP senza un commit completo).
- **Lulu:** Mirror enchanter su un asse diverso. Lei ha peel più forte single-target (la R rende un alleato più grosso e untargettabile), tu hai sustain più forte e più range di team. Out-scalala stackando scudi su un carry ranged tipo Caitlyn invece di provare a rispondere col danno.
- **Pyke (in roam):** Tracciagli il movimento con vision al tri-cespuglio e all'imbocco del river; se lascia bot lane, ping mid subito. La **R** di Milio ferma la sua execute solo se committa in melee e l'AD carry è dentro al raggio di cura.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **E** a 1 e **W** a 2 puoi shield-engage uno scambio breve (un trade rapido di danno in lane, non un all-in). Il bonus di Attack Range da W di solito vince questo trade per te perché il loro support non può rispondere col danno da 200 unità più indietro.
- **Livello 6:** Prima **Breath of Life** sbloccata. Ogni tentativo di 2v2 da parte avversaria è ora vincibile — engagiano con hard CC, tu channeli R, il CC viene pulito a metà fight e tu continui a sparare.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer + Ardent Censer (~ minuto 16-20):** Questo è il team-fight spike (il momento in cui un campione guadagna un improvviso aumento di potere) in cui smetti di essere un support da lane e diventi un moltiplicatore di team. Gli HP effettivi del tuo AD carry circa raddoppiano quando spammi scudi attraverso un fight, e il bonus on-hit di Ardent alza il loro DPS sensibilmente.
- **Tre legendary online (~ minuto 25):** Aggiungendo ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** hai due cleanse (R + Mikael's) per le due abilità di CC che possono cancellare il carry. Da qui in poi, ogni fight obiettivo è 5v4 se il nemico committa hard CC sulla tua back line.

## Errori comuni

- **Lanciare W su te stesso.** ![Cozy Campfire](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **W** ti targetta anche, ma il bonus di Attack Range su Milio è sprecato perché le sue auto sono deboli. Default: droppa il focolare sull'AD carry; auto-W solo se il carry è morto e ti serve la cura per scappare.
- **Bruciare R per una kill.** La **R** di Milio è il miglior disengage e cleanse del team. Ogni volta che la usi per una kill che l'AD carry avrebbe finito comunque, il team resta senza pulsante d'emergenza per i prossimi 100+ secondi.
- **Q a carica piena senza setup.** La **Q** ha un windup lento e viaggia in linea retta — se il nemico è solo fermo su una wave la schiva di lato. Lancia Q solo quando il nemico è committed (in mezzo a un dash, in channeling, o bloccato in un rimbalzo di minion) così non può uscire dalla linea.
- **Stare troppo indietro nei fight.** La tua **E** ha un range corto da 650 unità. Se ti affacci da dietro al team non puoi scudare nessuno. Sta dentro al range di scudo dell'AD carry, in seconda linea — più vicino di quanto l'istinto suggerisca.
- **Dimenticare di rilanciare W.** **W** può essere ri-targettata su un altro alleato durante i suoi 5 secondi di durata. In un teamfight dovrebbe saltare dal carry di bot a chi è attualmente focusato (peel — proteggere un alleato dal campione che lo sta attaccando). Il recast è l'abitudine più tecnica del kit di Milio.

## Suggerimento avanzato

Allena il **W swap a metà fight**. Droppa **Cozy Campfire** sull'AD carry pre-fight per il bonus di Attack Range. Nell'istante in cui l'assassino o diver avversario salta sul mid laner invece, rilancia **W** per spostare il focolare sul mid (il carry aveva già il vantaggio di range a inizio fight). Il nuovo focolare ricomincia il ciclo cura-Fired Up su chi è ora sotto pressione. Questo singolo recast trasforma Milio da enchanter mono-target a piattaforma di damage e sustain a doppio target — la differenza tra perdere un alleato nel fight e tenerne due vivi abbastanza a lungo perché torni online la **R**.
