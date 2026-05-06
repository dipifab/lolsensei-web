---
title: "Ahri Mid Build & Guía — Patch 16.9"
slug: "ahri-mid"
language: "es"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Ahri mid para League of Legends Patch 16.9: starter kit, build mago/asesino, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Se cura tras matar 9 minions o monstruos de jungle; cura mayor cuando participa en un takedown sobre un campeón. Sustain en lane que escala con el farm."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Skillshot lineal que lanza un orbe y lo recoge. Daño mágico a la ida, daño true a la vuelta. Herramienta principal de waveclear y poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Suelta 3 fox-fires que se auto-targetean al enemigo cercano; el primer impacto hace daño completo, los siguientes reducido. Da también un breve boost de Move Speed."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot que encanta al primer enemigo impactado — camina indefenso hacia Ahri mientras recibe daño. Herramienta de setup, nunca poke a secas."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Hasta tres dashes cortos en una ventana corta, cada uno dispara proyectiles auto-dirigidos. Los takedowns sobre campeones extienden la ventana de recast. Movilidad más execute."
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Diana, Talon, Fizz) — la stasis te hace sobrevivir tras committear R en un teamfight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto cualquier objetivo prioritario compre Magic Resist (Mercury's Treads + item de MR)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "primer item alternativo si el equipo rival tiene 4+ targets squishies para one-shotear — techo de pick más alto, menos daño sostenido"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Encanta a un target squishy, dashea dentro con R, suelta W y la Q de vuelta para el daño true, y escapa con los dashes restantes de R. Convierte cada pickoff en el siguiente dragon o roam."
  weakness: "Sin Charm no hay burst. Si E falla, gastas el combo entero en nada; si R está en cooldown no tienes escape y cualquier hard CC te elimina."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Mages inmóviles sin dash"
      reason: "La E (Charm) de Ahri es un skillshot a larga distancia que bloquea al objetivo. Los targets sin dash ni stealth se quedan clavados en una línea limpia y se comen el combo R + Q + W completo antes de poder salir del rango."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Carries de backline sin escape"
      reason: "Spirit Rush le da a Ahri tres dashes que se resetean con cada takedown — puede tirarse más allá de la frontline, eliminar a un carry inmóvil y dashear de vuelta antes de que llegue el peel."
    - examples: ["malzahar", "vladimir"]
      archetype: "Mages de daño sostenido sin burst"
      reason: "El burst de Ahri con un combo R completo los elimina en menos de un segundo, antes de que su daño sostenido o sus curas alcancen a apilarse en un trade significativo."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions con Wind Wall"
      reason: "Su Wind Wall bloquea Charm y el orbe de Q. Ahri pierde tanto su herramienta de setup como su poke principal — tiene que meterse dentro del muro para impactar algo, que es exactamente donde ellos la quieren."
    - examples: ["fizz", "kassadin"]
      archetype: "Assassins móviles con mitigación de daño mágico"
      reason: "La E de Fizz esquiva los proyectiles de la R de Ahri y su pasiva reduce el burst mágico; Kassadin tiene un escudo contra daño mágico más un blink. Ahri suelta el combo entero y ellos sobreviven con un hilo de HP, y luego la matan en el frame de recovery."
    - examples: ["lissandra", "galio"]
      archetype: "Mages anti-assassin con hard CC"
      reason: "Su hard CC pilla a Ahri a mitad de R: un solo root o taunt durante la ventana de dash cancela tanto su daño como su escape, convirtiendo un intento de pickoff en una kill gratis para ellos."
---

## Resumen

Ahri es un mage-assassin de mid: pokea a distancia como un mage, pero **Spirit Rush (R)** le permite tirarse encima de un solo target squishy (un campeón frágil con poca defensa, tipo ADC o mage), matarlo y dashear de vuelta — un patrón llamado **pickoff** (eliminar a un enemigo aislado, no un teamfight completo). Su kit (el conjunto de habilidades del campeón) gira en torno a **Charm (E)**, el skillshot que bloquea al objetivo en su sitio. Cada otra habilidad de su kit está construida para encadenarse sobre ese único impacto. La **R** tiene una particularidad: cada takedown sobre un campeón resetea uno de los dashes, así que un pick que sale bien le permite encadenar un segundo en la misma pelea.

Su plan de partida es paciencia, y luego commit (entrar a fondo en un combo sin marcha atrás). **Farmea** con **Q** (mata minions para conseguir gold y experiencia), coloca wards (sentinelas de visión) en el río, y espera a que el enemigo pise una posición predecible antes de tirar **E**. En cuanto **Charm** acierta, el resto del combo es mecánico: tira al objetivo con el orbe de vuelta de **Q**, suelta **W** para el daño auto-dirigido, y usa **R** para cerrar la distancia o para escapar. A partir del nivel 6 se convierte en una de las mejores campeonas de **roam** del juego (dejar tu propia lane para ir a ayudar al top o al bot lane) — cada spawn de dragón es una oportunidad para voltear el mapa.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring es el starter estándar del mage: pequeño bonus de AP (Ability Power, la stat que escala el daño mágico), HP extra y regeneración de maná para spamear **Q**.

**Items core (en orden):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst en el primer impacto de habilidad y el sustain de maná (regeneración de maná para que no te quedes a cero) que necesitas para spamear **Q** a cada cooldown. Tu objetivo de gold antes del minuto 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (tu daño ignora una cantidad fija de la Resistencia Mágica del enemigo).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con una pasiva por umbral de HP: se activa cuando el target está por debajo del ~35% de HP, encajando exactamente con el execute de tu **R** (rematar a un enemigo a baja vida).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game. Aumenta tu AP total un 35%, lo que prácticamente duplica el daño que cada item anterior añade a tu combo.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers (campeones que se tiran a matar a un solo target y luego escapan) y assassins (Zed, Diana, Talon, Fizz). El activo te convierte en una estatua dorada intocable (stasis) durante 2.5 segundos, dejándote sobrevivir tras committear **R** profundo en un teamfight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (CC = crowd control: stuns, roots, cualquier cosa que te bloquee en su sitio). El escudo bloquea la primera habilidad que te dejaría inmóvil.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto cualquier target prioritario del equipo enemigo compre Magic Resist (típicamente Mercury's Treads más un item de MR).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — primer item alternativo cuando el equipo rival tiene cuatro o más targets squishies que quieres one-shotear. Cambia daño sostenido por un techo de pick único más alto.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo cuando la composición rival tiene varias cadenas de hard CC apuntadas a ti (hard CC = stun, root, knock-up, taunt — el tipo de CC que te quita por completo el control del campeón).

**Skill order:** Sube **Q** primero (waveclear — limpiar olas de minions rápido — y main DPS, damage per second), **W** segundo (daño en peleas), **E** al final — su daño base es irrelevante, solo escala de manera significativa la duración del charm. Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet** (un proyectil mágico retardado que se activa con cada impacto de habilidad), **Manaflow Band** (más maná máximo, escala con los impactos de habilidad), **Transcendence** (ability haste — menor cooldown en todos los hechizos), **Scorch** (pequeño daño bonus de quemadura sobre el primer impacto de habilidad cada 10 segundos — perfecto para harass temprano en lane: rascar HP del rival hasta desgastarlo). Secundario **Inspiration** con **Magical Footwear** (botas gratis sobre el minuto 12) y **Cosmic Insight** (ability haste extra, también sobre **Flash**, el summoner spell personal de teleport corto que asignas a F o D).

## Matchups clave

- **Yasuo / Yone:** Ambos pueden Wind Wall tu **Q** y tu **E** en pleno vuelo (Wind Wall es un muro que colocan y que bloquea cualquier proyectil que lo atraviese). Reserva **E** hasta que hayan committeado una habilidad, y farmea a máximo rango con **W** — sus tres fox-fires se auto-dirigen y pasan más allá del Wind Wall, son tu única herramienta de daño segura contra el muro.
- **Zed:** Una lane a cara o cruz que se decide con los items. Pre-6, acércate solo cuando su **Q** esté visiblemente en cooldown. A partir del 6, guarda **R** para dashear fuera de su ulti — committear **R** ofensivamente y luego no tener escape cuando aterriza su ulti es la forma más rápida de tirar la lane.
- **Galio:** Te castiga si te agrupas — su **W** tauntea a los targets cercanos a sus aliados. Pushea la wave con **Q** y roamea a las side lanes, donde su ulti no le sigue tan rápido como tus tres dashes.
- **Twisted Fate:** Carrera de prioridad por roams. Él tiene presión global con su **R**, tú tienes movilidad de tres dashes — amenaza a la par. Pushea cada wave con **Q** en cuanto su ulti esté disponible, y warde ambas entradas del río para responder con ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** si intenta hacerte un gank (el jungla rival llegando a tu lane para matarte).
- **Cassiopeia:** Te outescala (crece más en late game) en trades prolongados porque su **W** anula los dashes de tu **R** (no puedes dashear a través de su zona de grounding). Haz trades solo cortos (un trade = un breve intercambio de habilidades y autos, no una pelea a muerte), y nunca committees **R** ofensivamente cuando su **W** esté disponible.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q + E** desbloqueadas, tienes las herramientas para una kill en lane si el enemigo pisa demasiado adelante. Reserva **E**, acércate como si fueras a hacer last-hit (dar el golpe final a un minion para llevarte el gold), y suelta el charm en cuanto entre en el rango de tu auto-attack.
- **Nivel 6:** El primer **Spirit Rush** desbloquea el potencial de pickoff. El combo **E → R → W → Q** elimina a cualquier squishy que no haya construido un solo item defensivo.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** El control de wave se voltea — puedes shovear (empujar la wave a toda velocidad hasta la torre enemiga) y roamear a cada cooldown. Aquí se activa tu win condition: roam, charm, kill, dash de vuelta. Cada pickoff se convierte en un **snowball** (ventaja que crece con el tiempo): el gold de una kill financia un item que hace más fácil el siguiente pick.
- **Spike de tres items (~ minuto 24):** Con tus tres items core online, tu combo **R** completo elimina a cualquier campeón de backline (los carries — ADC, mage — que se quedan detrás de los tanques) por debajo del 70% de HP. Fuerza peleas por objetivos aquí (peleas 5v5 por dragon, Baron o torres).

## Errores comunes

- **Tirar E como poke sin setup.** **Charm** a secas tiene un proyectil lento y un cooldown largo — la mayoría de mids rivales lo esquivan de reacción. Usa una wave o un minion como cobertura y apunta al camino obligado que tienen que recorrer para hacer last-hit.
- **Usar R para engage (iniciar la pelea) en vez de para finalizar.** **Spirit Rush** es tu única herramienta de escape. Si dasheas dentro sin un objetivo que asegures matar, regalas la ventana de dash y mueres tú cuando su equipo se te tira encima (sus aliados rotan para aplastarte porque ya estás fuera de posición).
- **Spamear Q de poke y quedarte OOM.** OOM significa "out of mana" (sin maná) — sin maná no puedes castear hechizos, así que te conviertes en un auto-attacker inútil durante 30 segundos. **Orb of Deception** cuesta una cantidad significativa de maná por cast: resérvala para waveclear y para trades asegurados.
- **Olvidar que R se resetea con cada takedown.** Cuando consigues una kill durante **Spirit Rush**, la ventana de recast se extiende. Quien interioriza esto puede encadenar un pick en un segundo pick dentro del mismo teamfight en vez de dashear de vuelta inmediatamente sobre la primera kill.

## Consejo avanzado

Practica el **combo Q-back**: tira **Q** delante de tu objetivo, y luego usa inmediatamente **R** para dashear a través de él. El orbe en su trayectoria de vuelta ahora pasa por el enemigo a quemarropa, infligiendo la parte de daño true (true damage ignora todas las resistencias enemigas — incluso los tanks lo reciben a valor completo) mientras tú ya estás en melee con **W** auto-disparando encima. Una sola secuencia **Q + R + W** ejecutada así mete tres instancias de daño en menos de un segundo — mucho más burst de lo que el combo de manual **E → R → W → Q** sugiere, y funciona incluso cuando **Charm** sigue en cooldown.
