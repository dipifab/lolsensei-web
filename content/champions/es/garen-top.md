---
title: "Garen Top Build & Guía — Patch 16.9"
slug: "garen-top"
language: "es"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Garen top para League of Legends Patch 16.9: starter kit, build juggernaut bruiser, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Regenera HP fuera de combate si no recibes daño ni habilidades durante unos segundos. Define el patrón hit-and-retreat."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Ráfaga de movement speed y cleanse de slows. La siguiente auto silencia al objetivo 1.5s e inflige daño bonus."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Pasiva: stacks de armor/MR matando enemigos. Activa: shield + tenacity, luego ventana de mitigación residual."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "Spin AOE que inflige physical damage a los enemigos cercanos durante 3s. Su herramienta principal de waveclear y DPS sostenido."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Ejecuta a un campeón enemigo según los HP que le faltan. True damage bonus contra el enemigo más kill-fed."
      dd_spell_id: "GarenR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra top AP (Mordekaiser, Rumble, Vladimir) — el shield mágico salva trades largos"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dos AD dealers; gestiona el bleed que castiga a glass cannons en teamfights"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 3+ amenazas AP; la pasiva de movement speed te lleva a los fights"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "tercer item ofensivo si vas muy adelantado y quieres el ciclo de ability haste en Q"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Sobrevive a la lane phase con Doran's Shield + sustain de la pasiva, escala hasta Stridebreaker, luego flank en side lane y usa R para ejecutar a las carries kill-fed enemigas en teamfights."
  weakness: "Sin dash ni blink, sin CC duro a distancia. Vulnerable al kite (Quinn, Vayne) y al root long-range (Lissandra, pull de Mordekaiser). Cae en lane si overextiendes sin stacks de W."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Resumen

Garen es un juggernaut melee cuyo valor viene de la presencia sostenida: la pasiva **Perseverance** regenera vida fuera de combate, **Decisive Strike (Q)** le permite cerrar distancia con cleanse, **Courage (W)** da una ventana plana de tankiness más una pasiva de stacks de resistencias, **Judgment (E)** es su daño AOE y waveclear, y **Demacian Justice (R)** ejecuta a los squishies según los HP que les faltan, con scaling true damage contra el enemigo más kill-fed. Es uno de los campeones más simples de ejecutar mecánicamente, lo que significa que todo el techo de habilidad se concentra en **map awareness** (lectura del mapa) y **wave management** — no en la ejecución del combo.

En top quiere trades cortos durante la activa de **W** y waves completas en su lado de la lane. Es fuerte desde el nivel 1 pero no inmortal; no tiene dash ni CC duro, así que cualquier matchup que pueda hacer disengage a voluntad (Quinn, Vayne) o enraizarlo desde lejos (Lissandra, pull de Mordekaiser) superará su lane phase si overextiendes.

## Build Recomendada

**Items iniciales:** Doran's Shield + 1 Health Potion. Doran's Blade solo contra tops a distancia donde necesitas all-in temprano para negar CS.

**Items core (en orden):**

1. **Stridebreaker** — slow en **Q**, activa AOE para pegarte a objetivos que kitean, AD + HP útiles ambos.
2. **Plated Steelcaps** — la mayoría de las top lanes son intensivas en auto-attack. Mercury's Treads solo contra 3+ campeones con CC en el equipo enemigo.
3. **Dead Man's Plate** — sinergia con el bonus de movement speed de **Q**, la pasiva de impacto procea en tu patrón habitual de all-in.
4. **Sterak's Gage** — salvavidas contra ventanas de burst, scaling AD que hace que **R** ejecute más tarde de lo que sugiere su umbral base.

**Items situacionales:**

- **Maw of Malmortius** — contra top AP (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — contra composiciones con dos AD dealers (gestiona el bleed que castiga a glass cannons).
- **Force of Nature** — contra 3+ amenazas AP; la pasiva de movement speed ayuda a llegar a los fights.
- **Spear of Shojin** — tercer item ofensivo top-tier si vas muy adelantado y quieres el ciclo de ability haste.

**Botas:** Plated Steelcaps por defecto. Mercury's Treads contra Renekton+Lissandra+CC pesado.

**Skill order:** Maxea **E** primero (DPS y waveclear), **Q** segundo (slow + utilidad), **W** al final (la pasiva escala bien sin puntos). Sube **R** en 6, 11, 16.

**Runas:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundaria **Resolve** con **Second Wind** + **Unflinching**, o **Inspiration** con **Magical Footwear** + **Cosmic Insight** para timing de botas en mapas a rotation.

## Matchups clave

- **Darius:** Pierdes el nivel 1, ganas tras Stridebreaker si evitas su pull de **E**. Compra Doran's Shield, abraza el nivel de Q por el cleanse.
- **Fiora:** Counter fuerte para ella hasta el 6 si no te clava un vital. Comercia con **W** activa para negar el valor de su parry, luego haz disengage.
- **Quinn:** Skill matchup; ella kitea con **Q** blind + **E** vault. Coge Teleport, cede los CS de la primera wave y haz roam mid desde la wave 4 en adelante.
- **Vayne top:** Tu peor matchup en sensaciones. Construye Plated Steelcaps al nivel 1, lleva Doran's Shield + Second Wind, y juega para el jungler — no puedes ganar trades 1v1 después del 6 en este matchup.
- **Mordekaiser:** Lane lenta hacia el spike del death realm. Trades cortos, golpea **Q** + **E** cuando su **W** esté en cooldown, y llega a Maw of Malmortius antes de su segundo item.

## Power spikes y condiciones de victoria

- **Nivel 2:** **Q** + **E** desbloquea un all-in real. Si te empujan la wave y tu jungler está en top side, esta es tu kill window.
- **Nivel 6:** **Demacian Justice** te deja rematar objetivos low HP que antes se iban andando. Trackea las summoners enemigas; sin Flash, todo top melee está en rango de ejecución.
- **Stridebreaker timing (~ 11 minutos):** El control de wave gira a tu favor. Slow shove, freeze o split push según el estado del mapa. **Q** + activa es seguro de gap-close contra ganks.
- **Condición de ace en late game:** Con el scaling de **R** contra el enemigo más kill-fed y Sterak's Gage, te conviertes en una amenaza de flank que solo-killa carries. Tu trabajo es cargar **E** en fog y **R** antes de que les hagan peel.

## Errores comunes

- **Caminar adelante con pocos stacks de W.** La pasiva de **Courage** da resistencias por stack; si tienes 0 stacks (p. ej. acabas de respawnear), evita trades largos hasta que recargues con minions.
- **Usar R como apertura.** **R** es para ejecutar, no para hacer setup. Si abres con ella, el cast time avisa al enemigo de hacer disengage y pierdes el timer de kill.
- **E sobre una wave parada.** Spinear con 3 minions cuando los tiras en 2 autos quema mana y le dice a la lane tu rotación de cooldowns. Guarda **E** para los trades.
- **Olvidar el silence de Q.** **Q** silencia 1.5 segundos. Q-engage siempre sobre un campeón mid-cast (polymorph de Lulu, shield de Karma, R de Lissandra) — el silence interrumpe el cast.

## Consejo avanzado

Cuando una carry enemiga fed dispara la prioridad de objetivo de **R**, puedes flash-**R** en mitad de un teamfight aunque su support pope un shield: el daño de execute de **R** es true damage sobre el objetivo prioritario, y la mayoría del presupuesto de shields ya lo ha gastado el burst del equipo antes de que tu cast resuelva. Reserva Flash para esta jugada; el ace que genera vale 2 fights de drake.
