---
title: "Azir Mid Build & Guía — Patch 16.9"
slug: "azir-mid"
language: "es"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Azir mid para League of Legends Patch 16.9: starter kit, build battle mage, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Una vez por cada torre aliada caída, Azir puede resucitar un Disc of the Sun temporal: una torre que pega muy fuerte y controla el espacio alrededor de los escombros."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Envía a todos los Sand Soldier activos hacia un punto, infligiendo daño mágico y slow en línea. Su poke principal y herramienta de reposicionamiento."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Invoca un Sand Soldier (a cargas). Los soldados extienden las auto-attacks de Azir: cuando hace AA cerca de uno, el soldado apuñala en línea por daño mágico."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Escudo + dash hacia un soldado existente. Se detiene al impactar en un campeón y devuelve una carga de soldado. Tu único escape y único gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Muro de soldados que avanza, knockback sobre los enemigos y deja una línea bloqueante varios segundos. La herramienta del icónico 'Shuffle'."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Diana, Talon, Akali) — la stasis cubre el cooldown de tu E cuando te pillan"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target pesado (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto un objetivo prioritario compre Magic Resist — tus soldier autos atraviesan la MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps de curación apilada (Soraka, Vladimir, Dr. Mundo) — el anti-heal se aplica en cada golpe de soldado"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Llega con Nashor's Tooth + Sorcerer's Shoes online (~ minuto 18-20) y controla las peleas por objetivos con auto-attacks extendidas por soldados, haciendo Shuffle (R + Flash) sobre los carries enemigos."
  weakness: "Champion mecánicamente exigente y débil antes del nivel 6. Sin E disponible no tienes escape; el chip damage a distancia y los Wind Wall (Yasuo, Yone) anulan tanto los soldados de Q como la R."
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
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Magos inmóviles sin dash"
      reason: "El rango de los soldados de Azir supera su rango de cast, y no tienen dash para esquivar el poke soldier-Q ni para interrumpir la secuencia de auto-attacks potenciadas por la W."
    - examples: ["annie", "syndra"]
      archetype: "Magos de all-in lento y telegrafiado a corta distancia"
      reason: "Azir mantiene la distancia en sus ventanas de commit (el momento en que dan un paso adelante para atacar): cada vez que se acercan los soldier autos los rascan, y la R Shuffle voltea el all-in si Flashean dentro."
    - examples: ["malzahar", "kassadin"]
      archetype: "Magos late-game flojos en peleas pequeñas tempranas"
      reason: "Azir farma seguro con W desde el nivel 1 y aguanta su potencial late sin regalar exp — al minuto 14 él ya está online antes de que ellos lleguen a su propio spike."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions con Wind Wall"
      reason: "Wind Wall come cada línea de soldados de la Q y el follow-up del muro de la R. Con su poke principal neutralizado, Azir queda como un mago melee sin herramientas cuerpo a cuerpo."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Assassins early-game burst con varios dashes"
      reason: "Hacen all-in pre-6 cuando Azir no tiene E lista; incluso con Zhonya's, los kits con dashes múltiples le caen encima antes de que su R tenga tiempo de salir."
    - examples: ["xerath", "vel-koz"]
      archetype: "Magos de artillería a larga distancia"
      reason: "Le rascan HP desde más allá del rango de los soldados de Azir (740). No tiene cómo igualar su sustain pre-6 y llega a su primer item con HP bajos."
---

## Resumen

Azir es un battle mage que pelea a larga distancia a través de sus **Sand Soldiers** — pequeñas unidades fantasmales que invoca con **W (Arise!)** y que actúan como puestos remotos de auto-attack. Cuando Azir ataca a un enemigo cerca de un soldado, es el soldado quien apuñala en línea infligiendo daño mágico. Tiene el skill ceiling más alto de esta lista (Riot lo puntúa 9/10 en dificultad), y sus primeros niveles son honestamente débiles. Hasta que no haya colocado su primer soldado y construido la muscle memory **W → Q**, pierde de plano contra la mayoría de laners en un trade (un breve intercambio de daño en lane, no una pelea completa).

Su game plan en una frase: farma seguro con **W** hasta que ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** esté online sobre el minuto 18, luego usa la **R (Emperor's Divide)** — el famoso "Shuffle" — para empujar a los carries rivales (los champions de alto daño de su equipo) hacia tu equipo en las peleas por objetivos (teamfights alrededor de los grandes objetivos del mapa: Drake, el dragón en el río bot; Atakhan, un nuevo boss de mid-game; o Baron Nashor a finales). La skill expression vive en tres sitios: la colocación de soldados (dónde estás tú frente a dónde proyectan tus soldados el rango de auto-attack), la combo "Shuffle" **E + Flash + R**, y saber cuándo gastar tu único escape (**E**) y cuándo guardarlo para un counter-engage (el momento en que devuelves un ataque enemigo contra ellos mismos).

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Salta la ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**: gastas maná en **W** (poco) y **Q** (medio), el regen de Doran's cubre el resto.

**Items core (en orden):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — primer item cada partida. La attack speed hace que tus auto-attacks extendidas por soldados (basic attacks, también AA — el rango de auto de Azir solo importa cuando hay un soldado cerca) salgan más rápido, y el daño mágico on-hit (daño extra aplicado en cada basic attack) se acumula en cada golpe de soldado. Este es el spike (el momento en que un campeón se vuelve significativamente más fuerte) que te lleva de pasivo a amenazante.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana (un valor fijo, no porcentual, de Magic Resist enemiga ignorada). Botas por defecto para cualquier mid mage que quiera borrar a los squishies (campeones con defensas bajas, como ADCs y otros magos).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica todo tu scaling de AP (Ability Power, la stat que aumenta el daño mágico). Tras este item cada auto de soldado y cada **Q** pega mucho más fuerte; este es tu verdadero damage spike para los teamfights de late.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra (daño alto concentrado en uno o dos segundos), con una pasiva de umbral de HP (una pasiva que se activa cuando el enemigo está bajo el ~35% HP) que encaja con el follow-up de kill tras un Shuffle.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers y assassins (Zed, Diana, Talon, Akali). Un "diver" es un campeón que salta sobre tu carry de back-line para borrarlo a pesar del riesgo. La stasis (unos segundos en los que no puedes recibir daño ni moverte) te compra tiempo para que vuelva la **E** cuando te pillan.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target pesado (CC = crowd control: stuns, charms, snares — todo lo que toma el control de tu personaje). Ejemplos: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cámbialo en cuanto cualquier objetivo prioritario compre un item de MR (Magic Resist, la stat que reduce el daño mágico recibido). Los soldier autos y la **Q** atraviesan la MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps de curación apilada (Soraka, Vladimir, Dr. Mundo). El anti-heal (una pasiva que recorta a la mitad las curaciones enemigas durante unos segundos) se aplica en cada golpe de soldado.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables cuando el equipo necesita tu **R** disponible más a menudo (menos espera entre casts) para las peleas por objetivos.

**Skill order:** Sube **Q** primero (daño y slow del soldado escalan por rango, y el cooldown baja de 14s en rango 1 a 6s en rango 5), **W** segundo (más cargas de soldado y duración más larga del soldado), **E** al final. Coge **R** a los niveles 6, 11, 16. Empieza con **W** al nivel 1 — sin un soldado no puedes farmear la wave a distancia.

**Runas:** Primaria **Sorcery** (el árbol de runas de daño mágico) con **Arcane Comet** (un pequeño proyectil que aplica daño extra cuando golpeas con un slow o un root), **Manaflow Band** (maná extra cada vez que impactas a un campeón con una habilidad), **Transcendence** (cooldown reduction al nivel 5), **Scorch** (pequeño daño quemante en tu primera habilidad que impacta cada pocos segundos). Secundario **Inspiration** con **Biscuit Delivery** (pociones gratis en lane) y **Cosmic Insight** (más uptime de summoner spells). Cambia el secundario a **Precision** con **Presence of Mind** (devolución de maná en takedowns) y **Coup de Grace** (más daño a targets con HP bajo) cuando el equipo rival lleve varios squishies con resistencias bajas.

## Matchups clave

- **Yasuo / Yone:** Su **Wind Wall** bloquea cada proyectil de tu kit — los golpes de soldado de **Q** y la onda de **R**. Guarda la **Q** hasta que hayan usado Wind Wall en otra cosa; si consigues hacerles bait (forzar que lo gasten en un ataque de bajo valor) con un solo golpe de soldado, los siguientes 24 segundos de trades son gratis.
- **Zed:** Amenaza de dive (se mete bajo tu torre para matarte a pesar de los disparos de la torre) desde nivel 6. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item. Guarda la **E** — nunca la uses ofensivamente hasta que él suelte su ult; si ulta y tú tienes **E** + Zhonya's, sobrevives al burst.
- **Veigar:** Parejo a favorable. No tiene dash. El poke soldier-Q (chip damage desde distancia segura) lo saca del rango de XP cada vez que se acerca a last-hittear; respeta su **E (Event Horizon)** guardando tu dash de **E** para romper la jaula.
- **Twisted Fate:** Carrera de prio para los roams. "Roam" significa salir de tu lane para ayudar a otra; "priority" significa tener una ventaja de wave-control que te deja salir sin perder minions. Empuja la wave en cooldown con **W** + **Q**. Cuando llegue a nivel 6 y empiece a roamear con su ult, pinguea a tu equipo y fuerza tower trades (te llevas su torre mientras él mata a tu bot lane) en su lado del mapa en vez de perseguirle; Azir castiga las side waves con el Shuffle de la **R** sobre torres mejor que la mayoría de mids.
- **Akali:** Diver con gap-close. Coloca soldados en los bushes desde donde le gusta hacer flank (entrar a una pelea desde un lado descubierto). Dentro de su zona stealth de **W (Twilight Shroud)** no la puedes targetear — pre-coloca **W** para que los soldados la ataquen al verla salir.

## Power spikes y condiciones de victoria

- **Nivel 4:** Tres puntos en **Q** desbloquean un damage spike real. El poke soldier-Q ahora amenaza kills de verdad si el rival se mete en rango dos veces seguidas.
- **Nivel 6:** La primera **R** desbloquea la combo "Shuffle": **Flash + R** voltea la frontline rival (los tanques en la primera línea de la pelea) hacia atrás dentro de tu equipo. Úsala la primera vez en una skirmish (una pelea pequeña, más chica que un teamfight 5v5) 2v2 en el río para que un fallo no tire la lane.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** Te conviertes en la amenaza DPS (damage per second, daño por segundo) de mid-game que tu equipo estaba esperando. Fuerza una pelea en Atakhan o Drake (Atakhan es un boss de mid-mapa; Drake es el dragón en el río bot) — tus soldier autos sacan más daño que la mayoría de magos en esta fase.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 28-32):** Cada soldier auto aplasta a los squishies. A partir de aquí Azir es uno de los carries más fuertes del juego, pero solo si se queda al máximo rango de soldado y su frontline (los tanques/bruisers delante de él) aguanta.

## Errores comunes

- **Caminar a rango de auto para last-hittear antes de tener W lista.** Las basic attacks de Azir sin un soldado cerca son cortas y débiles. Invoca siempre un soldado bajo el minion que quieres antes de dar el paso adelante; el soldado farma por ti, no tu basic attack.
- **Guardar R para el Shuffle perfecto que nunca llega.** Incluso una **R** mediocre que empuje a un enemigo y cree un muro es mejor que no usar **R**. Úsala como peel (proteger a tu carry de los divers) cuando no haya oportunidad de engage (la acción de iniciar una pelea metiéndose dentro).
- **Usar la E ofensivamente sin plan de salida.** La **E** es tu único escape. Si dasheas dentro, los soldados expiran, el dash se va a cooldown y te quedas plantado como un glass cannon (un campeón con mucho daño y cero defensas) a rango melee. Solo entra con **E** cuando puedas garantizar la kill o seguir con una **R** inmediata.
- **Olvidar que las torres de Shurima's Legacy existen.** Cuando una torre exterior aliada cae, puedes resucitar una potente torreta Disc of the Sun sobre los escombros. Úsala para control de objetivo alrededor de Atakhan o como defensa bajo tu inhibitor (la estructura entre la segunda torre y el Nexus). La mayoría de Azir nunca pulsa la pasiva.
- **Spamear Q como poke sin setup de W.** La **Q** proyecta daño *a lo largo de la línea de cada soldado activo*. Sin soldados en pie, la **Q** no hace nada. Coloca **W** primero, *luego* **Q** para mandar al soldado adonde quieras.

## Consejo avanzado

Practica el Shuffle **E + Flash + R** en Practice Tool (el modo offline de entrenamiento del cliente) hasta que lo ejecutes en menos de 0,4 segundos. El orden importa: **E** te ancla a la trayectoria del soldado, **Flash** te reposiciona a mitad del dash para que el muro de **R** salga desde el nuevo punto, y **R** carga en la dirección hacia la que mira tu personaje *en el momento del cast*. Hecho bien, convierte a un assassin o carry aislado que camine por tu fog of war (la zona del mapa sin wards — sentinelas que dan visión — que no puedes ver) en una kill garantizada, sin importar dónde empezara.
