---
title: "Ekko Jungle Build & Guía — Patch 16.9"
slug: "ekko-jungle"
language: "es"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Ekko jungle para League of Legends Patch 16.9: ruta de clear, build AP assassin, patrones de gank, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "Cada tercer impacto (auto o spell) sobre el mismo objetivo aplica daño mágico extra y, si es campeón, regala a Ekko un breve burst de move speed."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Skillshot bumerán: una granada sale, ralentiza al impactar, luego vuelve hacia Ekko con un segundo tick de daño. Los dos pasajes pegan, así que la posición importa."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Pasiva: daño mágico extra en autos contra enemigos a poca vida. Activa: coloca un círculo retardado que ralentiza y luego stunea brevemente si Ekko entra."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Dash corto que potencia la siguiente auto, teletransportando a Ekko al objetivo con daño bonus. Gap-closer principal y trigger de la pasiva del tercer hit."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Rebobina la posición de Ekko a donde estaba ~4 segundos antes, aplica daño mágico en área al llegar y cura según el daño recibido en esa ventana."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst AD pesado (Zed, Talon, Kha'Zix, Rengar) — la stasis anula su ventana de kill tras el reposicionamiento de R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "en cuanto un objetivo prioritario compre Magic Resist (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con curación (Soraka, Aatrox, Dr. Mundo, Vladimir) — aplica Grievous Wounds"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra carries móviles (Vayne, Ezreal, Tristana) — slow en cada hit, Q + E pegan fácil"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "late vs frontline con MR — magic pen y pequeña cura tras takedown"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Coloca W desde la fog, entra con E y resetea fights con R cuando estés bajo. Snowballea early-mid con ganks pre-6 y skirmishes en objetivos."
  weakness: "Clear inicial débil y rango corto: un jungla de invade lo castiga al nivel 3. R con cooldown largo — sin ella, Ekko se queda sin botón de pánico."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
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
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglas ranged squishy sin CC point-and-click"
      reason: "El setup W + E de Ekko cierra la distancia antes de que terminen una rotación de kite; el reset de R hace el all-in seguro aunque su equipo rote a ayudar."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers de scaling con early débil"
      reason: "Los ganks pre-6 al nivel 3 con W + E + Q los pillan farmando camps; una sola kill construye el gold lead para asesinar carries antes del minuto 14."
    - examples: ["amumu", "zac"]
      archetype: "Tanks de engage sin dash"
      reason: "La mobility de Ekko (E + R rewind) esquiva su engage telegrafiado, y el burst AP pega más fuerte contra tanks de poca MR. Los kitea entre esquinas y revienta a sus carries desde la fog."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Junglas de invade early fuerte"
      reason: "El primer clear de Ekko es flojo y su duel a nivel 3 es débil. Caminan a su jungle, lo matan antes de que W y E estén maxeados, y snowballean con la bounty."
    - examples: ["nocturne"]
      archetype: "Junglas con presión global y spell shield"
      reason: "La E de Nocturne es un spell shield que bloquea el stun de la W de Ekko (= la habilidad que monta cada gank). Sin stun el gank falla, y la R de Nocturne supera sus tools de counter-gank."
    - examples: ["galio", "maokai"]
      archetype: "Tanks que stackean Magic Resist temprano"
      reason: "Los junglas que stackean MR pronto aplastan el spike mid-game de Ekko: cuando el combo Lich Bane solo rasca en lugar de one-shottear la frontline, su plan de snowball se atasca."
---

## Resumen

Ekko es un assassin AP (= Ability Power, la stat que escala el daño mágico) jungla que one-shotea a los carries squishy con un combo rápido W stun → E dash → AA + Q. Su pasiva **Z-Drive Resonance** premia la secuencia de tres hits sobre el mismo objetivo con daño mágico extra y un burst de move speed: la rotación de daño se construye para encajar tres impactos rápidos, no para spammear spells. Su **Chronobreak (R)** es la red de seguridad: lo teletransporta a donde estaba hace ~4 segundos y cura según el daño recibido en esa ventana, así que puede meterse al fight, asumir riesgo y deshacer la consecuencia si sobrevive al channel.

Game plan: clear limpio de los primeros camps, gank al nivel 3 sobre una lane con poca mobility (Lux, Senna, Veigar, mid laners inmóviles), forzar Scuttle (= el cangrejo del río, da vision y un pequeño buff de move speed) en el lado donde tu equipo tiene prio (= priority, tu laner está empujando dentro y puede rotar sin perder CS), y snowball (= convertir una pequeña ventaja early en una mucho mayor) en las skirmishes (= peleas pequeñas 1v1 o 2v2, no un teamfight pleno) alrededor del segundo drake. Ekko no es un campeón scaling (= que se vuelve más fuerte con el paso del tiempo): si llegas al minuto 25 sin kills, el ADC enemigo termina 2 items y dejas de one-shottear a nadie.

## Build Recomendada

**Items iniciales:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (la jungle pet AP-friendly — aplica daño on-hit a los campeones enemigos durante los ganks) más **Smite** (la summoner spell que toma todo jungla — un ataque de burst rápido sobre un único objetivo, usado tanto para clearear camps más rápido como para robar objetivos como Drake o Baron al equipo enemigo).

**Items core (en orden):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primer spike AP. Daño on-cast extra y mana sustain hacen que la rotación Q + W + E rasque al objetivo antes incluso de que la auto de la E aterrice.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (= ignora una parte de la MR enemiga). Los carries squishy tienen ~30 MR base, así que la pen plana se traduce en daño extra puro.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= la siguiente auto tras una spell aplica un gran daño mágico bonus). La E de Ekko ya potencia la siguiente auto, así que Lich Bane se apila encima: es el item que convierte el dash de la E en un one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra (= mucho daño en 1-2 segundos). Su pasiva por umbral de HP (= pasiva que se activa bajo cierto HP) cuadra con los finishers tras el reset de R.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador AP late-game y el slot con el techo más alto de la build.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra AD assassins (Zed, Talon, Kha'Zix, Rengar). La stasis (= Ekko se vuelve invulnerable pero inmóvil 2.5 segundos) compra tiempo para cooldowns y, en pareja con R, te hace sobrevivir cualquier all-in AD.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un objetivo prioritario construya MR (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). El magic pen porcentual escala con cuánta MR stackee el target.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con curación (Soraka, Aatrox, Dr. Mundo, Vladimir). Aplica Grievous Wounds (= debuff que reduce a la mitad la curación) sobre el daño.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra carries ranged móviles (Vayne, Ezreal, Tristana). Cada hit de spell aplica un slow, así que Q + E los clava para la kill.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — sustituye a Shadowflame en el late game contra frontlines que stackean MR. Magic pen y una pequeña cura revive sobre los takedowns.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables si el equipo necesita más uptime de R como herramienta de re-engage (= tu ulti volviendo antes te permite voltear un segundo teamfight).

**Skill order:** Maxea **Q** primero (waveclear y poke principal), **E** segundo (daño del dash), **W** al final. Punto en **R** a niveles 6, 11 y 16. Comienza con **Q** al 1 para el clear más seguro, después **E** al 2 y **W** al 3.

**Runas:** Árbol primario **Domination** (el árbol assassin — bonus de stats que premian rematar a objetivos solos) con **Electrocute** (tras impactar a un campeón con tres fuentes de daño separadas en 3 segundos, el siguiente hit aplica burst extra — el chain W + E + Q lo proca perfecto), **Sudden Impact** (magic pen extra durante 4 segundos tras un dash o stealth), **Sixth Sense** (revela automáticamente las wards enemigas cercanas con cooldown largo — presión de vision para el pathing en jungla), **Ultimate Hunter** (reduce el cooldown de R por cada takedown único). Árbol secundario **Sorcery** con **Manaflow Band** (devolución de mana en hits de spell, arregla el pequeño mana pool de Ekko) y **Transcendence** (ability haste — tus habilidades vuelven antes — que escala todo el kit).

## Matchups clave

- **Lee Sin:** Invade early fuerte (= un jungla que entra a tu jungle a matarte antes de tener items). Mantén vision sobre tus buffs (= los camps pequeños que dan bonus stat temporal, blue y red). Evita pelear antes del nivel 4 — su duel early supera al tuyo.
- **Karthus:** Matchup gratis. Su R hace daño a todo tu equipo a través del mapa, pero tiene cero mobility — W bajo sus pies, E in, Q + AA y muere en una rotación (= una secuencia completa de habilidades). Counter-junglea (= roba sus camps) tras cada gank que committea.
- **Master Yi:** Rival scaling. Mátalo antes del minuto 20 o acepta que te supera en el teamfight tardío. Fuerza el fight en el spike ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** y dive su bot lane mientras él farma camps.
- **Sejuani:** Matchup duro. Su R es point-and-click (= no hay que apuntar, la spell se engancha al target) y te congela durante el dash de E. Espera a que la use sobre otro y entonces committea. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de lo habitual.
- **Rammus:** Evita los duelos 1v1. Su pasiva de espinas refleja parte del daño de tus autos; tú haces sobre todo daño mágico (bueno contra las espinas) pero su W steroid (= un multiplicador temporal de armor y reflexión) sigue rebajando tu auto Lich Bane. Farma el lado opuesto de la jungle y agrúpate solo con tu equipo.

## Power spikes y condiciones de victoria

Un power spike es el momento en que el campeón de pronto se vuelve mucho más fuerte que un minuto antes — normalmente cuando entra una nueva habilidad o un item.

- **Nivel 3:** Primer combo **W** + **E** + **Q** desbloqueado. Por fin puedes ganckear lanes pre-6 (= antes de que tu ulti esté online): suelta W en la fog (= zona oscura sin vision, detrás de un arbusto o muro), espera a que el enemigo pise para el stun, dash con E, Q a la salida. Es el patrón de gank pre-6 más fuerte que tiene Ekko.
- **Nivel 6:** **Chronobreak (R)** online. Ahora cada dive (dive = caminar bajo torre para matar a un target a poca vida) es recuperable: comes los tiros de torre, matas al objetivo, R atrás a salvo. Fuerza un fight o un drake al instante.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 10-12):** Primer spike real de daño. Rascas a los squishies solo con Q y one-shotteas enemigos por debajo del 60% HP con el combo completo. Busca picks (= matar a un enemigo aislado fuera de posición) en las side lanes.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minuto 16-18):** ESTE es EL spike. La auto potenciada de E más Spellblade de Lich Bane le quita ~50% de HP a un ADC en un solo dash. Agrúpate en drake y Baron — cada enemigo aislado muere en un combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Hasta los objetivos que stackean MR caen al burst pleno. Si el ADC enemigo no ha comprado ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) ni Quicksilver Sash, tu reset de R es kill gratis sobre la backline.

## Errores comunes

- **Ganckear lanes pre-3 sin colocar la W.** Sin stun de W el gank de Ekko es solo un dash E lento — fácil de kitear (kite = retroceder mientras atacas, manteniendo distancia). Siembra siempre la W en la fog 2 segundos antes de caminar a lane: el stun retardado pilla al enemigo cuando reacciona al dash.
- **Apretar R en cuanto bajan los HP.** Chronobreak te rebobina a una posición de hace 4 segundos. Si ulteas al primer auto recibido, vuelves al fight del que querías huir. Espera — absorbe daño durante el channel de R (= el windup antes de que se active) para que la cura final sea mayor y el destino sea de verdad más seguro.
- **Spammear Q para waveclear en jungla.** La Q tiene un coste de mana alto y el retorno del bumerán es el tick de daño más grande. Camina más allá del camp para que el retorno toque el pack dos veces; spammearla quieto desperdicia el segundo hit.
- **Forzar Drake sin prio.** El smite-fight de Ekko (= el momento en que ambos junglas committean Smite a un objetivo en disputa) es mediocre porque su R se cancela si lo interrumpen a media canalización. Si tus laners no tienen prio (= lane empujada, libres para rotar), cede el drake y farma vision.
- **Ignorar la pasiva del tercer hit en las skirmishes.** Z-Drive Resonance dobla el daño del trade cuando encajas tres hits seguidos sobre el mismo target. Tirar Q a la wave por poke gasta el stack en un minion. Reserva la Q para trades sobre campeones, no sobre creeps que no necesitas clearear.

## Consejo avanzado

Usa **Parallel Convergence (W)** como herramienta de vision pre-emptiva, no solo como setup de stun. Castear W coloca el círculo en el suelo 3.5 segundos antes de activarse, y durante ese windup ves si alguien atraviesa la zona — un fog check gratis sobre un chokepoint (= paso estrecho que el enemigo debe cruzar) o detrás del Drake pit. Los pros usan el truco para scoutar al jungla enemigo cruzando el río, y luego o committean el gank con stun listo o rotan sin committear. La habilidad se convierte a la vez en herramienta de pick y en ward (= el pequeño objeto que da vision en una zona).
