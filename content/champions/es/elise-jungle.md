---
title: "Elise Jungle Build & Guía — Patch 16.9"
slug: "elise-jungle"
language: "es"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía Elise jungle para League of Legends Patch 16.9: ruta de gank en Spider Form, setups de Cocoon, prioridades de items, matchups clave, power spikes y un consejo final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Dos formas. Human: cada ability que impacta genera un Spiderling dormido. Spider: las AA hacen bonus magic damage y curan a Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke dirigido que escala con el HP actual del enemigo (anti-tank). Spider: salto que escala con HP perdido (ejecuta a low HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lanza un Spiderling que avanza y explota cerca del enemigo (slow + daño AOE). Spider: Elise y sus pets ganan attack speed para DPS sostenido."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot lineal que aturde al primer enemigo impactado. Spider: Rappel — Elise se eleva intargeteable y cae sobre un objetivo con bonus damage y heal."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate que alterna entre Human (caster a distancia, más rango) y Spider (skirmisher melee, más move speed y un enjambre de Spiderlings). Free swap a cooldown."
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
      against: "contra magic CC single-target (Ahri charm, Lissandra R, Twisted Fate stun) — el spell shield come una ulti y salva tu Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap cuando 2+ enemigos compran un item de Magic Resist; sustituye a Rylai's o Banshee's en el late"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra hard CC pesado (stuns, knock-ups) — boots swap que añade tenacity (reducción de duración del CC)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra comps con heal stack (Soraka, Vladimir, Dr. Mundo); también sirve como Magic Penetration"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Snowballea con ganks tempranos usando E cocoon stuns en niveles 3-6, luego pivota a dives de objetivo con Rappel cuando Liandry's y Rylai's estén online. Pickea backliners squishy en mid game."
  weakness: "Cae en late game cuando las frontlines acumulan Magic Resist y HP. En Spider form no tiene disengage fiable: un cocoon fallado durante un dive suele acabar en Elise muerta."
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
    primary_rationale: "Domination primary: Electrocute procea en cada gank porque W slow + E stun + Q burst son tres ability hits distintos (trigger del keystone). Sudden Impact premia el dash de Rappel, Treasure Hunter da gold extra en takedowns, Ultimate Hunter recorta cooldown de R."
    secondary_rationale: "Sorcery secondary: Manaflow Band cubre los problemas de mana early (cocoon cuesta mucho), Transcendence empuja la Ability Haste más allá del soft cap del 40% y reembolsa cooldown en cada takedown."
    secondary_alternative: "Contra poke pesado o counter-jungle (Lee Sin, Graves, Nidalee), cambia Sorcery por Resolve con Bone Plating (8473, reducción de daño tras 3 golpes recibidos) y Revitalize (8453, amplificador de heal y shield) para más sustain early."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Laners squishy sin dash ni stealth"
      reason: "El E cocoon en niveles 3-4 aterriza sobre objetivos planos sin escape. Rappel (Spider E) cierra el dive incluso si usan Flash, porque eres intargeteable mid-cast."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Junglers con una pre-level 6 form débil"
      reason: "Master Yi no duela antes del 6, Kayn está form-locked hasta terminar la quest, Shyvana no tiene CC fiable. Elise se lleva Scuttle Crab gratis y los counter-jungla hacia déficit de gold."
    - examples: ["draven", "kalista", "samira"]
      archetype: "ADCs agresivos que se overextienden por kills"
      reason: "Su positioning forward te regala ángulos de cocoon. Un gank a nivel 3 en una lane empujada (wave shoveada más allá del river) suele cerrar la kill cuando W slow + E stun encadenan con el CC del support."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Engagers tanky con counter-engage hard CC"
      reason: "Su CC AOE pilla a Elise durante la caída de Rappel o tras hacer commit al dive. A 2 items, tu magic burst deja de derretirlos y no tienes disengage en Spider form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Duelistas early-game fuertes con gap-closer"
      reason: "Te ganan el 1v1 a nivel 3 si te quedas sin mana de cocoon o yerras el timing de Rappel. Evita invadir su river: sus dashes se comen tu única escape."
    - examples: ["olaf", "garen"]
      archetype: "Divers inmunes al CC (cleanse pasivo o ult immunity)"
      reason: "La R de Olaf y la Q de Garen rompen las cadenas de stun e ignoran tu único setup. Cuando el cocoon deja de aterrizar, el all-in de Elise (commit total al trade) colapsa y la duelan a muerte sin escape."
---

## Resumen

> **Mini-glosario (léelo una vez):** **ADC** = Attack Damage Carry, el bot-laner que hace daño físico (Caitlyn, Jinx). **AP** = Ability Power, la stat que potencia ability mágicas. **MR** = Magic Resist, defensa contra magia. **CS** = Creep Score, número de minions matados. **CC** = Crowd Control, cualquier efecto que detiene a un campeón (stun, slow, knock-up). **Gank** = el jungler emboscando una lane. **Dive** = entrar bajo torre para matar. **Trade** = intercambio breve de daño en lane. **All-in** = commit total a la pelea. **Snowball** = ventaja que crece sola (más kills → más gold → más items → más kills).

Elise es un burst-mage diver — un campeón que pokea desde rango y luego hace commit total a la backline enemiga para cerrar una kill. Su kit gira en torno a aterrizar **Cocoon (E)** en Human form para stunear a un objetivo, luego swap a **Spider Form (R)** para hacer dive con **Rappel (E)** y daño de execute. Tiene la jungle pre-nivel-6 más fuerte del juego: a nivel 3 ya tiene las cuatro ability de daño y vence a casi cualquier otro jungler en 1v1. El precio es una complejidad mecánica alta (timing de form-swap, precisión skillshot) y un late game pobre cuando los tanks acumulan Magic Resist.

Su game plan: invade los camps del jungle enemigo a nivel 3 si el matchup lo permite, luego construye snowball (ventaja que crece) gankeando las lanes con más kill pressure (ADC squishy, mid laner a bajo HP). Cuando **Liandry's Torment** esté online sobre el minuto 11-13, pivota del pathing a base de gank al control de objetivos — dive bajo torre usando Rappel como "blink" (teleport corto e instantáneo), pickea targets prioritarios y fuerza Drake o Rift Herald.

## Build Recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (jungle starter ranged) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Hailblade (auto-evoluciona sobre el minuto 3-4 cuando ha comido suficiente XP). El companion para campeones de AP burst: añade un proc de magic damage (efecto disparado) a tu siguiente AA tras castear una ability, perfecto para encadenar con **Spider Q** en skirmishes.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer item completo. Añade un burn de HP (daño esparcido en pocos segundos) en cada ability, stackea con **Rylai's** después para un single-target sustained damage imbatible.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana para que tu Q y E peguen más fuerte contra targets squishy (campeones con pocas defensas, tipo ADCs y mages).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — cada ability slowea al objetivo. Sinergia masiva con **W** (ya un slow) y los lunges de **Spider Q**.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. La active te hace intargeteable 2.5 segundos tras un dive de Rappel, dándole al equipo tiempo de seguir antes de que te maten.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling de late game. Cómpralo último para pasar 1000 AP.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic crowd control single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cuando dos o más enemigos compran un item con Magic Resist.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap cuando el equipo enemigo tiene hard CC pesado (stuns, knock-ups).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps con heal stack (Soraka, Vladimir, Dr. Mundo); también funciona como Magic Penetration.

**Boots:** Sorcerer's Shoes por defecto. Cambia a Mercury's Treads si el equipo enemigo tiene tres o más fuentes de hard CC.

**Skill order:** Maxea **Q** primero (daño y execute), **E** segundo (cooldown del cocoon — menos cooldown = más stuns), **W** al final. Pon un punto en **R** en niveles 6, 11, 16.

**Runes:** Primary **Domination** con **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** con **Manaflow Band** y **Transcendence**.

## Matchups clave

- **Lee Sin:** Te duela mejor que tú tras el nivel 3 si haces greedy en camps. Trackea su pathing — si está bot side, invádele red o blue camp top side. Nunca face-checkees fog (river bushes sin ward) cuando esté missing.
- **Graves:** Pierde contra Elise pre-6 porque su E corta (Quickdraw) no escapa al cocoon, pero escala mejor. Diveale la lane con gank dos veces antes del minuto 10 o llegará a dos items y te outscaleará.
- **Master Yi:** Matchup gratis early. Invádele el segundo camp (el que limpia tercero), kill, repite. Cuando saque Wit's End más Botrk gana los 1v1, así que la win condition es cerrar la partida antes del minuto 25.
- **Sejuani / Maokai:** Hard counter-engage. Guarda Rappel para después de que usen su CC AOE, nunca engagees primero. En teamfights, flankea la backline en vez de engagear a través del muro de tanks.
- **Olaf:** Su R (Ragnarok) cleansea tu cocoon stun mid-flight. Espera a que la use en un dive, luego re-engagea en los siguientes 6 segundos mientras está en cooldown.

## Power spikes y condiciones de victoria

- **Nivel 3:** Primer unlock de Spider form y kit completo. Tienes el daño 1v1 más fuerte de cualquier jungler del juego en esta ventana — invade o gankea una lane overextendida ya.
- **Nivel 6:** Free **R** swap a demanda. La gank pressure se duplica porque puedes disengagear a través de muros en Spider form (da un pequeño boost de movement speed).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Completar Liandry's Torment (~ minuto 11-13):** Primer gran spike de scaling. Los dives single-target ya matan ADCs y mages en dos rotaciones de ability. Fuerza Drake o Rift Herald en cuanto se complete.
- **Dos items completados + Boots (~ minuto 16-18):** Ventana pico. Después de esto empiezas a perder fuerza relativa cuando los enemigos suben Magic Resist; tu trabajo es convertir este lead en calls de Baron o Elder Drake.

## Errores comunes

- **Tirar E cocoon como tool de poke.** Cocoon es tu único setup — si lo fallas, no tienes follow-up. Espera a que el target esté en commit (low HP, Flash usado, slowed por tu **W**) antes de castear.
- **Hacer dive en Spider form sin Flash o R disponibles.** Spider form no tiene escape (no dash, no shield, no intargeteable). Si tu **R** está en cooldown, no hagas commit; pull back y espera los 3 segundos a que vuelva.
- **Maxear W segundo en lugar de E.** W te da algo más de clear speed pero no añade nada a la fiabilidad de gank. Los rank-ups de E bajan directamente el cooldown del cocoon y suben el damage de Rappel — ese es tu damage y tu CC.
- **Smitear Scuttle Crab pronto en vez de guardar Smite para objetivos.** Guarda Smite para contests de Drake y Rift Herald. Los 70 gold y el movement speed buff del Scuttle no valen perder un Drake contra un enemigo que tenga Smite up.
- **Quedarte en melee range en teamfights en Spider form cuando vas avanzada.** Una vez muerta la backline, swappa de vuelta a Human form para tirar cocoon y limpiar. Spider form tiene melee auto-attack range — quedarte ahí como Elise fed (snowballed de kills) sólo regala las kills de vuelta.

## Consejo avanzado

Usa **Rappel (Spider E)** como blink *defensivo* además de ofensivo. Cuando un duelista hace commit sobre ti, castea Rappel sobre un minion a low HP o un minion lejano de tu jungle: Elise se vuelve intargeteable durante el lift (~2 segundos), suficiente para esquivar una ulti como Lee Sin R o Vi Q. El cooldown es corto (10 segundos a rank 5) — perderlo para sobrevivir suele salvar más kills de las que gastarías ofensivamente.
