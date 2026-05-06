---
title: "Brand Mid Build & Guía — Patch 16.9"
slug: "brand-mid"
language: "es"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Guía de Brand mid para League of Legends Patch 16.9: starter kit, build burn-mage, matchups clave, power spikes, errores comunes y un consejo final avanzado."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Los hechizos de Brand prenden fuego al objetivo (daño durante 4s, hasta 3 stacks). A 3 stacks sobre un campeón el blaze detona en una pequeña explosión AOE que reaplica los efectos del hechizo."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineal con daño mágico. Si el objetivo ya está ablaze, lo aturde en lugar de solo dañarlo — tu herramienta principal de setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE con retardo tras un breve aviso visual. Los blancos ablaze sufren +25% de daño. Hechizo con el daño individual más alto del kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosión dirigida que rebota a enemigos cercanos. Si el primer objetivo está ablaze, el radio de propagación se duplica — la forma más fácil de aplicar blaze a una wave."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fuego de larga distancia que rebota hasta 5 veces entre campeones y minions, priorizando ablaze y aplicando slow al impactar. Daño masivo en teamfight con enemigos agrupados."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Akali, Diana, Fizz) — la stasis cubre tu falta de dash en su gap-close"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo cuando un objetivo prioritario compre su primer item de Magic Resist"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pega fights agrupados con stacks de blaze ya activos en varios targets para que R rebote entre campeones en vez de minions. Quédate detrás de la front line y dispara desde el rango máximo de W."
  weakness: "Cero dash y ninguna escape. Si un diver cruza tu front line solo tienes Flash y Zhonya's entre tú y un one-shot — por eso los items defensivos situacionales no son opcionales."
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
    primary_rationale: "Sorcery primaria: Arcane Comet se auto-proca con cada hit de W o E, añadiendo burst gratis en cada trade. Manaflow Band sostiene el maná para spamear W, Transcendence pasa el ability haste del 40% y Scorch se suma a los ticks de blaze a baja vida."
    secondary_rationale: "Inspiration secundaria: Biscuit Delivery resuelve el problema de maná de Brand los primeros 6 niveles y Cosmic Insight da más uptime de Flash — Flash es tu única forma de esquivar un dash, porque el kit no tiene ninguno."
    secondary_alternative: "Si el equipo rival tiene 2+ squishies a baja resistencia (p. ej. Caitlyn + Senna + Ezreal), cambia Inspiration por Resolve con Second Wind (sustain frente al poke) y Revitalize (potencia el lifesteal-via-burn de la pasiva en takedowns), manteniéndote vivo para clavar R."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Magos estacionarios sin dash"
      reason: "Su patrón de farm los obliga a quedarse quietos para castear o stackear: pon W sobre la wave, Q en el frame de recovery para el aturdimiento, y la rotación completa de blaze cae antes de que puedan moverse."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Tanks de group-engage"
      reason: "Cuando su R atrapa a tu equipo, esa misma R atrapa a los suyos al lado del tuyo — la R de Brand rebota entre todos los campeones agrupados y convierte su engage en tu condición de victoria."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Carries de backline squishy con escape débil"
      reason: "Pyroclasm prioriza targets ablaze; una E en la front line propaga blaze, y la R salta entre cada enemigo agrupado hasta matar al squishy del fondo."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "Saltan por encima de tu Q antes de que la conectes para el aturdimiento. Sin stun el kit no tiene peel para ti, así que te borran antes de que la R termine el primer rebote."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Magos de artillería con más rango"
      reason: "Su umbral de poke supera el rango de tu Q. Brand no tiene movilidad para cerrar la distancia, así que cada wave te tienen bajo de vida hasta volverte un blanco gratis para el jungla rival."
    - examples: ["yasuo", "yone"]
      archetype: "Campeones con Wind Wall y movilidad sostenida"
      reason: "Wind Wall bloquea Q y la trayectoria del proyectil de R; luego dashan más allá de tu zona de W. Quemar un slot defensivo en Zhonya's solo compra supervivencia, no prioridad de lane."
---

## Resumen

Brand es un **mago AP de burst** construido en torno a una sola mecánica — la pasiva **Blaze**. Cada hechizo que lanza prende fuego al objetivo durante cuatro segundos, hasta 3 stacks. A 3 stacks el blaze se vuelve inestable y explota como una pequeña detonación AOE que reaplica los efectos de sus hechizos a cualquiera atrapado en el splash. Traducido al gameplay: cada habilidad es un setup para la siguiente, y en cuanto un enemigo está en llamas tu **Q (Sear)** deja de ser un hechizo de daño y pasa a ser un aturdimiento. El kit hace dos preguntas en bucle — *¿el objetivo ya está ablaze?* y *¿están los enemigos suficientemente agrupados para que la R rebote?* — y todo el plan de partida sale de esas dos respuestas.

Su plan de juego en mid es directo: empuja la wave con **W (Pillar of Flame)**, busca ventanas **W → Q stun** cada vez que el laner rival se acerque a un minion a través del cual puedas alcanzarlo, y luego rota con prio una vez que la wave choque contra su torre. A partir del nivel 6, **R (Pyroclasm)** es una de las ultimates con más daño del juego *si* los enemigos están agrupados — tienes un setup a media distancia por fight, sin dash para reintentarlo, sin escape si fallas. El posicionamiento detrás de la wave es obligatorio: Brand no tiene movilidad innata, ni escudo, ni heal, y su única opción defensiva es comprar Zhonya's Hourglass y apuntar Flash con tiempo.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring resuelve el hambre de maná del spam de W y da el scaling de AP que a Brand le importa más que el daño plano early.

**Items core (en orden):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — el item identitario de Brand. Su pasiva aplica un burn porcentual de HP encima de los stacks de blaze, multiplicando el daño contra tanks y equipos con HP apilado. Maná, ability haste y AP encajan con todo lo que el kit pide.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana sobre los squishies que más quieres borrar con los rebotes de R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, más una pasiva que ignora aún más Magic Resist sobre enemigos por debajo del umbral de HP. Encaja perfecto con los rebotes de R cazando al objetivo más bajo de vida.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling late-game (40% AP bonus). Cómpralo de tercer o cuarto item según si el equipo enemigo ya empezó a apilar Magic Resist.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers y assassins (Zed, Akali, Diana, Fizz). La stasis es la única respuesta de Brand cuando una cadena de dashes cruza su front line (los tanks y bruisers que están delante absorbiendo golpes mientras tú disparas desde atrás).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico telegrafiado (Ahri charm, Lissandra R, Twisted Fate gold card). El escudo bloquea el hechizo de engage que de otra forma te dejaría inmóvil todo el fight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). La pasiva de Grievous Wounds reduce su healing a la mitad para que tu burn se traduzca en kills reales.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto cualquier objetivo prioritario compre su primer item de Magic Resist. Evita que el rival neutralice toda tu build con un componente de 800 oro.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables si el equipo necesita más uptime de R para los spawns de objetivo.

**Skill order:** Maxea **W** primero (el daño base más alto y el waveclear principal), **Q** segundo (más daño y menos cooldown sobre el aturdimiento), **E** al final. Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence** y **Scorch**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**.

## Matchups clave

- **Yasuo / Yone:** Bloquean el proyectil de **Q** y el inicio de **R** con Wind Wall. Guarda **Q** hasta que quemen el muro, reserva **W** para el frame de recovery, y nunca uses **R** como herramienta de flank (un "flank" es entrar al fight desde un ángulo lateral, por detrás de la backline rival) contra ellos — lánzala después de que un aliado haya engageado, así los rebotes ya están moviéndose más allá del muro.
- **Zed / Akali:** Amenazas de dive con varios gap-closers (un "gap-closer" es cualquier dash, blink o salto que cruza terreno rápido). Compra Zhonya's Hourglass después de Liandry's; nunca uses **Flash** ofensivamente en lane contra ellos, y pre-coloca **W** sobre tus pies para aturdirlos cuando salten encima.
- **Veigar:** Mago estacionario al que superas pre-6. Empújalo bajo torre con **W**, busca la rotación **E → Q stun** cuando suba a last-hittear, y recall antes de que llegue al nivel 6 (su jaula da la vuelta a la lane).
- **Anivia:** Pareja pre-6, escala más post-6. Evita pegarte a tu wave — su muro te separa de los minions y te fuerza a un trade largo desde la backline. Roama por las side lanes en cuanto tu **R** esté disponible; ella no tiene movilidad para seguirte.
- **Twisted Fate:** Carrera de roams. Si te tira la carta dorada, **Q**lo antes de que cierre la distancia (aturdir a un campeón mientras castea cancela la carta). En otro caso, rastrea su **R** con wards en el río y en el tri-bush; si ulta a side lane, ping bot/top y empuja tu wave en vez de seguirlo.

## Power spikes y condiciones de victoria

- **Nivel 2 (W + Q):** Primer spike. Con un punto en **W** y la **Q** que llevas desde el inicio tienes el combo **W → Q stun** completo. Pillar of Flame aplica un stack de blaze; Q sobre un objetivo ablaze aturde. Esta ventana es cuando empujas para first blood.
- **Nivel 6 (R desbloqueada):** Primer **Pyroclasm** disponible. Busca un teamfight en Scuttle (cangrejo del río) o el primer drake — si dos enemigos están dentro del rango de rebote, tu R hace alrededor del 50% de la vida de un squishy por cada bote.
- **Liandry's Torment completado (~ minuto 12-14):** El control de wave se voltea ("control de wave" = quién decide dónde pelean los minions, tú o el laner rival) porque el burn porcentual castiga aglomeraciones de wave. Desde aquí eres tú quien empuja y roama, no quien aguanta bajo torre.
- **Rabadon's Deathcap online (~ minuto 24-28):** Tu secuencia completa de rebotes de R one-shotea a squishies que no han comprado nada de Magic Resist. Fuerza fights de objetivo agrupados aquí — Baron, Soul Drake, contests de late game.

## Errores comunes

- **Tirar Q como poke desnudo.** **Q** sin ablaze es solo un proyectil lento. Setea siempre antes con **W** en el suelo o **E** sobre un minion que propague al campeón — la diferencia es un aturdimiento de 1 segundo en vez de un fallo triste.
- **Ultar a un objetivo aislado.** **R** rebota entre objetivos priorizando los ablaze. Si solo un enemigo está en rango, los rebotes van y vienen sobre el mismo target con un damage falloff brutal por salto. Guarda **R** para fights agrupados o para ejecutar a dos enemigos ablaze pegados.
- **Pushear sin vision.** Brand no tiene escape (ni dash, ni blink, ni shield). Pushear más allá del río sin una ward en su jungla es la forma más rápida de regalarles un gank temprano. Pon una Stealth Ward o una Control Ward en el tri-bush antes de cada shove.
- **Auto-atacar por "daño extra" de la pasiva.** Tus auto-attacks no interactúan con Blaze. Usa la ventana del auto para caminar hasta el siguiente spot de **W**, no para perseguir un golpe extra a un minion bajo de vida.
- **Errar el timing de la detonación inestable.** Cuando llegues a 3 stacks de blaze sobre un campeón, tienes dos segundos antes de que detone. Aturdirlo con **Q** *antes* de la detonación lo encierra en el splash y reaplica blaze a cada enemigo cercano. Errar el timing es la diferencia entre matar a un solo target y limpiar un AOE entero.

## Consejo avanzado

Practica el **double-blaze AOE wipe**. Cuando dos enemigos estén pegados (típico en teamfights apretados o sobre una wave apilada), haz esto en orden: **W** en el suelo entre ellos → ambos cogen blaze stack 1. **E** sobre el enemigo A → blaze stack 2 sobre A, se propaga a B con stack 2 sobre B. **Q** sobre A → blaze stack 3 sobre A, A queda aturdido y la detonación inestable golpea también a B, dejándolo en stack 3. Ahora **R** rebota entre dos blancos aturdidos y al máximo de stacks, y convierte la rotación entera en un trade 2 por 0. Esta secuencia es la diferencia entre un "Brand decente" y un Brand que carrea la partida.
