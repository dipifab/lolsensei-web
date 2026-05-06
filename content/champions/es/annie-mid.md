---
title: "Annie Mid Build & Guía — Patch 16.9"
slug: "annie-mid"
language: "es"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Annie mid lane para League of Legends Patch 16.9: setup del stun de Pyromania, build de burst, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mago / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "Cada 4 hechizos lanzados cargan Pyromania: el siguiente hechizo de daño aplica stun. Annie empieza partida y respawnea con el stun listo — carga el contador en minions antes de los all-ins."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Bola de fuego point-and-click a 625 de rango. Devuelve maná y resetea el 50% del cooldown si mata al objetivo — herramienta más barata de poke y last-hit del kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "Cono de fuego a 600 de rango. Waveclear principal (limpia toda la línea de caster minions en un solo cast) y el hechizo con más daño base al rank 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Escudo dirigido + movement speed decreciente sobre Annie o un aliado. Devuelve daño mágico al siguiente atacante. Cuenta como hechizo lanzado — úsalo para recargar Pyromania antes de engager."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Daño AOE point-blank a 600 de rango que invoca a Tibbers, un oso que ataca y quema a los enemigos cercanos. El cast cuenta como hechizo, así que una R con 4 stacks de Pyromania stunea a todos los impactados."
      dd_spell_id: "AnnieR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins móviles y divers (Zed, Diana, Talon, Akali) — la stasis te salva tras hacer R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra comps de kite sin CC duro — el slow de R + W ancla a los targets dentro del aura de Tibbers"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto cualquier objetivo prioritario compre un item de Magic Resist"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Carga Pyromania a 4 stacks en minions, avanza con Flash + R para un stun AOE point-blank sobre enemigos agrupados y revienta la backline squishy con Luden's Companion + Shadowflame."
  weakness: "Movilidad base nula, rango de hechizos 600-625. Pierde el poke contra magos de artillería y los assassins móviles cruzan el rango de R con dashes antes de que caiga el stun."
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
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Magos inmóviles sin dash"
      reason: "La R de Annie es un stun AOE point-blank a 600 de rango + Tibbers DPS. Los magos sin dash ni stealth comen el combo entero en el all-in de nivel 6 y no pueden responder a tiempo."
    - examples: ["diana", "katarina"]
      archetype: "Burst melee con tell visible"
      reason: "Annie precarga Pyromania durante el waveclear: en el momento en que se comprometen al gap-close, el stun de Flash + R interrumpe su combo antes de que aterrice el daño."
    - examples: ["fizz", "kassadin"]
      archetype: "Magos melee débiles pre-6"
      reason: "Tienen que entrar al rango de Q para farmear pre-6: Annie los pokea libremente, mantiene el level 2 con Pyromania cargado y los fuerza a back sin counter-engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Magos de artillería a larga distancia"
      reason: "Pokean a Annie desde 850-1400 de rango mientras ella está a 625. No tiene dash ni shield contra el poke a distancia y sangra HP cada wave sin opción de all-in."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "Assassins de alta movilidad post-6"
      reason: "Sus dashes o ventanas de stealth salen del radio de 600 de la R antes de que aterrice el stun. La shroud de Akali y el Wind Wall de Yasuo se comen directamente sus hechizos principales."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globales / cross-map"
      reason: "Annie no tiene rango de roam — limpia waves y se queda en mid. Su ulti voltea side lanes y dragones, así que Annie pierde el macro game incluso ganando el 1v1."
---

## Resumen

Annie es el mago burst más simple del juego (un campeón que mete mucho daño mágico concentrado en 1-2 segundos y luego espera a sus cooldowns) y uno de los más fuertes castigando errores en torno al nivel 6. Su kit parece minúsculo sobre el papel — una Q point-and-click, una W en cono, un escudo sobre sí misma o un aliado y una ulti que invoca a un oso — pero su pasiva **Pyromania** lo une todo: cada cuarto hechizo lanzado carga un stun garantizado sobre el siguiente objetivo impactado. Esa única mecánica convierte un campeón apto para principiantes en una amenaza con stun seguro capaz de borrar una backline squishy (los carries colocados en la retaguardia del equipo durante una pelea) con un solo botón en cuanto sale Tibbers.

Su plan de juego es idéntico en lane y en teamfight: carga **Pyromania** a 4 stacks sobre los minions, avanza a 600 de rango y dispara el contador sobre el enemigo más valioso con **R** (Tibbers), luego **W** y **Q**. Dos decisiones separan a una buena Annie de una excelente: saber **cuándo mantener el contador listo** (no quemarlo en un minion justo antes de comprometerte — entrar de lleno — a una pelea) y **cómo aterrizar la R** (Flash + R es una de las herramientas de engage — habilidades que abren un teamfight — más fiables del juego sobre un equipo agrupado).

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (da maná extra para que Annie pueda spamear Q y W desde el principio) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (curan HP en el tiempo durante la lane). El ring alimenta los primeros trades; las pociones sostienen frente al poke (chip damage a distancia del mago rival).

**Items core (en orden):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst de primer item (un "power spike" es el momento en que un campeón se vuelve notablemente más fuerte gracias a un level-up o a completar un item). El combo de Annie es corto, así que el daño bonus al primer hechizo encaja perfecto con **R + W** sobre un objetivo stuneado.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — botas con magic penetration plana. Tus kills vienen de targets squishy con poca Magic Resist, y la pen plana escala mejor que la porcentual en este punto.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con pasiva por umbral de HP (daño mágico bonus cuando el enemigo está por debajo de ~35% HP). Finisher barato que convierte el R + W de Annie de "casi letal" a one-shot.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game (+30% AP total, donde AP / Ability Power es la stat que escala todos los hechizos de Annie). Cuando entra en juego, el combo de R borra a enemigos agrupados, no solo a un squishy aislado.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móviles y divers (Zed, Diana, Talon, Akali). Tras el engage con R + Flash, activa la stasis (la activable que te vuelve invulnerable durante 2.5 segundos): sobrevives mientras tu equipo entra al follow-up.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra comps de kite sin CC duro (escuadras que retroceden mientras atacan, manteniendo distancia). El slow de R + W ancla a los targets dentro del aura ardiente de Tibbers.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Lissandra R, Twisted Fate stun, Ahri charm). El escudo bloquea el hechizo de engage para que conserves tu **Flash** ofensivamente.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — añádelo en cuanto cualquier objetivo prioritario compre un item de Magic Resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son una alternativa cuando el equipo necesita más uptime de **R** como herramienta para abrir teamfights.

**Skill order:** Sube **Q** primero al máximo (cooldown más bajo, mana refund al matar, tu herramienta principal de trade — intercambio breve de daño en lane). **W** segundo (waveclear, limpiar la wave de minions enemiga; W tiene el daño base más alto al rank 5). **E** al final (utility, no escala mucho con el rank). Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** (el árbol de daño mágico) con **Arcane Comet** (proyectil extra de daño mágico al impactar a un campeón), **Manaflow Band** (tu maná máximo crece al impactar hechizos), **Transcendence** (cooldown reduction a niveles 5, 8, 11), **Scorch** (daño bonus por quemadura sobre el siguiente hechizo cada ~10 segundos). Árbol secundario **Inspiration** con **Biscuit Delivery** (galletas gratis con maná y HP en lane) y **Cosmic Insight** (más uptime de **Flash** y **R** en mid game).

## Matchups clave

- **Yasuo / Yone:** Hacen Wind Wall a tu **Q** y **W** (la pared que bloquea proyectiles). Cebéa el Wind Wall con una **Q** a stacks bajos (1-2 cargas de Pyromania, sin stun listo), luego avanza con stacks completos cuando esté en cooldown — su downtime es largo y no pueden tapar a la vez tu **Q** y tu engage.
- **Lux:** Te supera en rango a 1100 con su **Q**. No la persigas; limpia waves a distancia segura con **W**, busca roam (deja la lane para ayudar a aliados en otra parte) en cuanto termines ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** y deja que tu jungla castigue su falta de escape en un counter-gank.
- **Veigar:** Favorable. Necesita stackear **Q** sobre minions para AP y no tiene dash; precarga Pyromania, avanza a nivel 6 con **Flash + R** y lo stuneas fuera de su jaula de **E** antes de que pueda inmovilizarte.
- **Twisted Fate:** Carrera por quién hace roam (deja la lane para ayudar en otra) primero. Empuja waves con **W** en cooldown. Cuando suba su **R**, pingea mid mia (missing in action) a tu equipo y rota (muévete con la wave) hacia la side lane que ataque con tu propia ulti lista — un fight 2v2 a Pyromania completa es kill garantizada.
- **Diana:** Pre-6 es de cristal (defensas bajas, muere rápido); hostigala con **Q** point-and-click cada vez que se acerque a last-hit. A 6, mantén stacks de Pyromania llenos: cuando te haga **R** encima, tu **R + W** la stunea antes de que pueda recastear el segundo salto.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + **W** en la barra y Pyromania listo, tienes un all-in corto (compromiso total, ninguno de los dos puede desengagear) que vence a la mayoría de magos ranged que no esperan el stun de nivel 2. Si el enemigo se acerca a un cs (creep score: rematar minions para coger gold) justo después de que ambos suban a nivel 2, avanza y haz trade.
- **Nivel 6 + Flash:** El primer **R** con **Flash** es tu mayor power spike de pelea individual de la partida. Una pelea de wave agrupada es una doble kill gratis si el jungla rival está al otro lado del mapa.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 11-13):** Se voltea el umbral de burst. Tu combo **R + W + Q** sobre un squishy stuneado es ahora letal sin follow-up del equipo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** El daño del aura de Tibbers + la AOE del propio cast se vuelve un nuke de teamfight (un cast que borra a varios objetivos a la vez); fuerza peleas de objetivo aquí y busca **Flash + R** sobre 3+ objetivos agrupados.

## Errores comunes

- **Quemar el 4º stack de Pyromania en un minion justo antes de un all-in.** Comprueba siempre el contador de stacks bajo tu portrait antes de entrar en rango de trade. Si está a 3 y casteas **W** para waveclear, acabas de regalar tu stun garantizado a un caster minion.
- **Castear R sin Pyromania listo.** **R** sin el stun hace daño pero deja al objetivo salir del aura de Tibbers. Si Pyromania no está cargado, recárgalo casteando **E** sobre ti misma antes de comprometerte.
- **Quedarse a rango máximo de R durante el cast.** **R** es 600 de rango, lo mismo que el auto-attack de Annie. Usa **Flash** para cubrir las últimas 200-400 unidades hacia el equipo agrupado en lugar de castear desde el borde — en el borde, solo el enemigo más cercano queda stuneado y los demás escapan.
- **Saltarse ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes por otro item de AP plano.** El burst de Annie solo mata cuando la MR es baja; rushear más AP sin magic penetration plana deja a los squishies a 50 HP en vez de a 0 y convierte kills seguras en persecuciones.
- **Q-spam sin mirar el maná.** **Q** solo refunde su maná **al matar**. Si haces Q a un minion de 200 HP y no muere, has pagado 60-80 de maná por nada. Usa **Q** sobre minions cerca de la ejecución o sobre champions, no como poke cuando están a HP completa y sobra un creep.

## Consejo avanzado

Practica el **Flash + R animation cancel** (un truco que usa **Flash** durante el frame de cast en lugar de esperar a que termine): en el momento en que pulsas **R**, pulsa **Flash** en la misma dirección (el input se memoriza durante el cast). El cast point de **R** es lo bastante corto como para que **Flash** te reposicione sobre el objetivo antes de que la AOE resuelva — te permite stunear una backline a 800 de rango como si partieras desde 600. La mayoría de novatos aprende el combo como "pulsa **R**, luego reacciona a dónde aterrizó"; el animation cancel lo convierte en un gap-close (un teletransporte breve que cierra distancia) de 700 unidades casi imposible de esquivar.
