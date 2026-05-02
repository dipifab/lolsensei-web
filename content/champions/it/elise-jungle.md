---
title: "Guida Elise Jungle — Build e Strategia per la Patch 16.9"
slug: "elise-jungle"
language: "it"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida Elise jungle per League of Legends Patch 16.9: percorso di gank in Spider Form, setup di Cocoon, item core, matchup chiave, power spike e un consiglio finale."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Due forme. Human form: ogni ability che colpisce genera uno Spiderling dormiente. Spider form: gli AA fanno bonus magic damage e curano Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke a bersaglio che scala sull'HP attuale del nemico (anti-tank). Spider: balzo che scala sull'HP mancante (esegue i bersagli a basso HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lancia uno Spiderling che cammina in avanti ed esplode vicino ai nemici (slow + danno AOE). Spider: Elise e i suoi pet guadagnano attack speed per DPS continuo."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot lineare che stunna il primo nemico colpito. Spider: Rappel — Elise sale in aria intargetabile, poi ricade su un bersaglio con bonus damage e heal."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate che alterna Human (caster a distanza, range piu lungo) e Spider (skirmisher melee, piu move speed e uno sciame di Spiderling). Free swap a cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — lo spell shield mangia un'ulti e salva la tua Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ nemici comprano un item con Magic Resist; sostituisci Rylai's o Banshee's nel late game"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro hard CC pesante (stun, knock-up) — boots swap che aggiunge tenacity (riduzione durata CC)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contro composizioni che accumulano heal (Soraka, Vladimir, Dr. Mundo); fa anche da magic penetration item"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Costruisci snowball con gank early grazie a E cocoon stun ai livelli 3-6, poi passa ai dive di obiettivo via Rappel quando Liandry's e Rylai's sono online. Pick squishy a meta partita."
  weakness: "Cala nel late game una volta che le frontline accumulano Magic Resist e HP. In Spider form non ha disengage affidabile: un cocoon mancato durante un dive di solito significa Elise morta."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
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
    primary_rationale: "Domination primary: Electrocute scatta ad ogni gank perche W slow + E stun + Q burst sono tre ability hit distinte (innesco del keystone). Sudden Impact premia il dash di Rappel, Treasure Hunter aggiunge gold sui takedown, Ultimate Hunter taglia il cooldown della R."
    secondary_rationale: "Sorcery secondary: Manaflow Band copre i problemi di mana early (cocoon costa molto), Transcendence porta l'Ability Haste oltre il soft cap del 40% e refunda cooldown sui takedown."
    secondary_alternative: "Contro poke pesante o counter-jungle (Lee Sin, Graves, Nidalee), sostituisci Sorcery in Resolve con Bone Plating (8473, riduzione danni dopo 3 colpi ricevuti) e Revitalize (8453, amplificatore di heal e shield) per piu sustain early."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Laner squishy senza dash o stealth"
      reason: "E cocoon ai livelli 3-4 atterra sui bersagli piatti senza escape. Rappel (Spider E) chiude il dive anche se usano Flash, perche sei intargetabile mid-cast."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Jungler con una pre-level 6 form debole"
      reason: "Master Yi non duella prima del 6, Kayn e form-locked finche non finisce la quest, Shyvana non ha CC affidabile. Elise prende Scuttle Crab gratis e li counter-jungla mettendoli in deficit di gold."
    - examples: ["draven", "kalista", "samira"]
      archetype: "ADC aggressivi che si overextenono per le kill"
      reason: "Il loro positioning forward ti regala angoli di cocoon. Un gank al livello 3 su una lane spinta (wave spinta oltre il river) di solito chiude la kill quando W slow + E stun si concatenano col CC del tuo support."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Engage tanky con counter-engage hard CC"
      reason: "Il loro CC AOE prende Elise durante la discesa di Rappel o dopo che fa commit al dive. Una volta a 2 item, il tuo magic burst smette di scioglierli e tu non hai disengage in Spider form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Duellanti early-game forti con gap-closer"
      reason: "Battono Elise nell'1v1 al livello 3 se finisce il mana di cocoon o sbaglia il timing di Rappel. Evita di invadere il loro river: i loro dash mangiano la tua unica escape."
    - examples: ["olaf", "garen"]
      archetype: "Diver immuni al CC (passive cleanse o ult immunity)"
      reason: "La R di Olaf e la Q di Garen rompono le catene di stun e ignorano il tuo unico setup. Quando il cocoon smette di atterrare, l'all-in di Elise (commit totale nel trade) crolla e finisce duellata a morte senza escape."
---

## Panoramica

> **Mini-glossario (leggi una volta):** **ADC** = Attack Damage Carry, il bot-laner che fa danno fisico (Caitlyn, Jinx). **AP** = Ability Power, la stat che potenzia le ability magiche. **MR** = Magic Resist, difesa contro magia. **CS** = Creep Score, numero di minion uccisi. **CC** = Crowd Control, qualsiasi effetto che ferma un campione (stun, slow, knock-up). **Gank** = jungler che fa imboscata in lane. **Dive** = entrare sotto torre per uccidere. **Trade** = scambio breve di danno in lane. **All-in** = commit totale fino alla kill. **Snowball** = vantaggio che cresce nel tempo (kill → gold → item → altre kill).

Elise e un burst-mage diver — un campione che fa poke dalla distanza e poi fa commit totale nella backline avversaria per chiudere una kill. Il kit ruota attorno al landing di **Cocoon (E)** in Human form per stunnare un bersaglio, poi swap in **Spider Form (R)** per il dive con **Rappel (E)** e l'execute damage. Ha la pre-level-6 jungle piu forte del gioco: al livello 3 ha gia tutte e quattro le ability che fanno danno e batte quasi ogni altro jungler in 1v1. Il prezzo da pagare e una complessita meccanica alta (timing di form-swap, precisione skillshot) e un late game povero quando i tank accumulano Magic Resist.

Il game plan: invadi i camp del jungle nemico al livello 3 se il matchup lo permette, poi costruisci uno snowball ( un lead che cresce nel tempo) facendo gank in lane con piu kill pressure (ADC squishy, mid laner a basso HP). Quando arriva **Liandry's Torment** intorno al minuto 11-13, passa dal pathing a base di gank al controllo obiettivi — fa dive sotto torre usando Rappel come "blink" (teleport corto e immediato), fa pick dei bersagli prioritari e forza Drake o Rift Herald.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (jungle starter ranged) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Hailblade (auto-evolve intorno al minuto 3-4 una volta che ha mangiato abbastanza XP). Il companion per i champion AP burst: aggiunge un proc magic damage (effetto attivato) sull'AA successivo a una ability, che si sposa con **Spider Q** negli skirmish.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. Aggiunge un burn HP (danno spalmato in pochi secondi) su ogni ability, stacka con **Rylai's** dopo per un single-target sustained damage imbattibile.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat, per far picchiare la Q e la E sui bersagli squishy (champion con poche difese, tipo ADC e mage).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — ogni ability slowa il bersaglio. Sinergia massiccia con **W** (gia uno slow) e con i lunge di **Spider Q**.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. L'active ti rende intargetabile per 2.5 secondi dopo un dive in Rappel, lasciando al team il tempo di seguire prima che ti uccidano.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling per il late game. Compralo per ultimo per arrivare a 1000+ AP.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando 2+ nemici comprano un item con Magic Resist.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quando il team avversario ha hard CC pesante (stun, knock-up).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contro composizioni con heal stack (Soraka, Vladimir, Dr. Mundo); fa anche da magic penetration item.

**Boots:** Sorcerer's Shoes di default. Passa a Mercury's Treads se il team avversario ha tre o piu fonti di hard CC.

**Skill order:** Metti il max su **Q** per primo (damage e execute), **E** per secondo (cooldown del cocoon — meno cooldown = piu stun), **W** per ultimo. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Domination** con **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**.

## Matchup chiave

- **Lee Sin:** Ti duella meglio di te dopo il livello 3 se greedy sui camp. Tieni traccia del suo pathing — se e bot side, invadi il suo red o blue camp top side. Mai fare face-check della fog (river bushes non wardati) quando e missing.
- **Graves:** Perde contro Elise pre-6 perche la sua E corta (Quickdraw) non scappa al cocoon, ma scala piu forte. Fa dive la sua lane gank due volte prima del minuto 10 o arrivera a due item e ti scalera piu di te.
- **Master Yi:** Matchup gratis early. Invadi il suo secondo camp (quello che pulisce per terzo), kill, ripeti. Una volta che ha Wit's End piu Botrk vince gli 1v1, quindi la win condition e chiudere la partita entro il minuto 25.
- **Sejuani / Maokai:** Hard counter-engage. Salva Rappel per dopo che hanno usato il loro CC AOE, mai engage per primo. In teamfight, flanka la backline invece di fare engage attraverso il muro di tank.
- **Olaf:** La sua R (Ragnarok) cleansa il tuo cocoon stun mid-flight. Aspetta che la usi su un dive, poi re-engage nei 6 secondi successivi mentre e in cooldown.

## Power spike & condizioni di vittoria

- **Livello 3:** Primo unlock di Spider form e kit completo. Hai il damage 1v1 piu forte di qualsiasi altro jungler del gioco in questa finestra — invadi o fai gank in una lane overextesa subito.
- **Livello 6:** Free **R** swap a comando. La pressione di gank raddoppia perche puoi disfare engage attraverso i muri in Spider form (da un piccolo boost di movement speed).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment completion (~ minuto 11-13):** Primo grande spike di scaling. I single-target dive ora chiudono ADC e mage in due rotation di ability. Forza Drake o Rift Herald appena finisce.
- **Due item completi + Boots (~ minuto 16-18):** Finestra di picco. Dopo questa cominci a perdere forza relativa man mano che i nemici comprano Magic Resist; il tuo lavoro e convertire questo lead in chiamate Baron o Elder Drake.

## Errori comuni

- **Lanciare E cocoon come tool di poke.** Cocoon e il tuo unico setup — se lo manchi, non hai follow-up. Aspetta che il bersaglio sia in commit (basso HP, Flash usato, slowato dalla tua **W**) prima di castare.
- **Fa divere in Spider form senza Flash o R disponibili.** Spider form non ha escape (no dash, no shield, no intargetabile). Se la tua **R** e in cooldown, non fare commit; pull back e aspetta i 3 secondi che torni.
- **Mettere il max su W per secondo invece di E.** W ti da poco piu di clear speed ma non aggiunge nulla all'affidabilita di gank. I rank-up di E abbassano direttamente il cooldown del cocoon e aumentano il damage di Rappel — quello e il tuo damage e il tuo CC.
- **Smitare Scuttle Crab presto invece di tenere Smite per gli obiettivi.** Tieni Smite per i contest di Drake e Rift Herald. I 70 gold e il movement speed buff di Scuttle non valgono perdere un Drake contro un nemico che ha Smite up.
- **Stare in melee range nei teamfight in Spider form quando sei avanti.** Una volta uccisa la backline, swappa di nuovo in Human form per lanciare cocoon e cleanare. La Spider form ha auto-attack range melee — restare li come Elise fed (snowballata di kill) ti fa solo regalare le kill indietro.

## Suggerimento avanzato

Usa **Rappel (Spider E)** come blink *difensivo* oltre che offensivo. Quando un duellante fa commit su di te, casta Rappel su un minion a basso HP o su un minion del tuo jungle distante: Elise diventa intargetabile per la durata del lift (~2 secondi), abbastanza per schivare un'ulti tipo Lee Sin R o Vi Q. Il cooldown e corto (10 secondi a rank 5) — perderlo per sopravvivere di solito salva piu kill di quante ne spenderesti offensivamente.
