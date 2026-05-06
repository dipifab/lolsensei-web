---
title: "Galio Mid Build & Guía — Patch 16.9"
slug: "galio-mid"
language: "es"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "Guía de Galio mid para League of Legends Patch 16.9: starter kit, build AP-tank, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Cada pocos segundos, el siguiente ataque básico de Galio inflige daño mágico bonus en un área pequeña al impacto."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Dos ráfagas de viento que convergen en un tornado en el punto objetivo, infligiendo daño mágico con el tiempo. Herramienta principal de waveclear y poke."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carga un escudo que absorbe daño mágico; al soltarlo provoca a los enemigos cercanos. Carga larga — nunca la sueltes en vacío."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Pequeño paso atrás y luego dash hacia adelante que lanza al aire al primer campeón enemigo golpeado. Engage y gap-close principal."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa un aliado; tras una breve espera, Galio cae sobre su posición, escudando a los aliados del área y lanzando enemigos al aire."
      dd_spell_id: "GalioR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra front lines con mucha vida (dos o más tanques tipo Cho'Gath, Sion, Dr. Mundo) — el burn % escala en peleas largas"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "cuando lideras kills temprano (3+ antes del minuto 12) — AP barata por stack que premia engages agresivos"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "cuando un objetivo prioritario compra MR; combina con Sorcerer's Shoes para penetración mixta"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos con follow-up tras tu engage (Zed, Talon) — la stasis cubre el cooldown post-R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que te bloquea cargando W (Malzahar suppress, Lissandra R, Twisted Fate stun)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Usa Hero's Entrance R desde mid para voltear side lanes y skirmishes de Drake con Riftmaker listo. En teamfight, E a la back line, suelta W y deja que tu front line cierre sobre los objetivos lockeados."
  weakness: "W tiene una carga larga (1.5s) y E un breve paso atrás — ambas interrumpibles. Asesinos móviles y poke mágico DOT bypassan el escudo W, que absorbe burst, no daño constante por ticks."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve: Aftershock proca con W o knockup R, pico de resistencias al ser focuseado. Shield Bash da daño bonus on-attack, Bone Plating absorbe el primer burst, Unflinching añade tenacity para no quedar bloqueado por CC en el engage."
    secondary_rationale: "Sorcery secundaria: Manaflow Band mantiene el maná para spamear Q en línea (Galio sufre de maná pre-Riftmaker) y Transcendence empuja Ability Haste para que Q y E vuelvan más rápido entre peleas."
    secondary_alternative: "En matchups de mana-war (Cassiopeia, Cho'Gath) donde la línea es guerra de stats HP, cambia Sorcery por Inspiration con Biscuit Delivery (HP y maná gratis al nivel 6) más Cosmic Insight (reduce CD de Flash — mejor catch con combo R+Flash)."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "Magos de artillería inmóviles"
      reason: "El knockup E de Galio cierra la distancia en la que se apoya su rango, y W absorbe el burst de hechizos largos como Lux R o Veigar R."
    - examples: ["ahri", "syndra"]
      archetype: "Magos burst de rango medio sin sustain"
      reason: "Su escudo mágico W corta el grueso de su combo; cuando su burst está en cooldown no pueden duelar a un AP-tank."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "Carries inmóviles de bot alcanzables con R"
      reason: "Hero's Entrance cae sobre un aliado; los ADC sin dash no escapan al knockup y tu bot colapsa para la kill."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "Asesinos cortos con múltiples dashes"
      reason: "El shroud de Akali rompe el target lock de W, y las cadenas de dash de Zed/Fizz cierran el trade antes de que W salga de carga — el mejor CC de Galio tiene un tell lento que ellos superan."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "Daño mágico DOT y lockdown point-and-click"
      reason: "El escudo W absorbe burst, no daño constante por ticks; la R de Malzahar suprime a Galio cargando W y cancela todo el engage."
    - examples: ["yasuo", "yone"]
      archetype: "Usuarios de Wind Wall"
      reason: "El Wind Wall de Yasuo bloquea por completo las ráfagas Q de Galio, eliminando su única herramienta de presión a distancia en línea."
---

## Resumen

Galio es un battlemage AP (ability power, daño mágico) con escalado tank — crece tanto con AP como con HP. Está diseñado para interrumpir al equipo enemigo y absorber el daño mágico que lanzan sobre tu front line (los tanques/bruisers del frente). Su kit es corto pero ruidoso: **Winds of War (Q)** para waveclear y poke (chip damage a distancia), **Shield of Durand (W)** para un taunt cargado (fuerza al enemigo a atacarte un instante) que también es escudo mágico, **Justice Punch (E)** para hacer knockup (lanzar al aire brevemente, como un stun corto) al primer enemigo del dash, y **Hero's Entrance (R)** para teleportarte sobre un aliado con knockup-y-escudo. Juega mid porque necesita la posición central para amenazar rotaciones de R en cada línea.

El plan de partida es paciente hasta el nivel 6, luego explosivo. Empuja la wave con Q, guarda E para counter-engage o gap-close en tu propio gank, y cuando R esté disponible vigila las side lanes — cada pelea bot o top está en tu rango. La skill expression vive en el timing de carga W (suéltala para interrumpir un channel clave — Katarina R, Karthus R, Master Yi Q) y en la mira de E (el dash golpea solo al **primer** campeón en el camino, así que puedes pickar un objetivo de back line caminando por una side lane).

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Toma ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** solo si enfrentas un Q-spammer melee que te fuerce a recall temprano por maná.

**Items core (en orden):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primer slot. Da AP, HP, ability haste (reducción de cooldown en cada hechizo) y una rampa de omnivamp (te cura un porcentaje del daño que infliges, escalando cuanto más dura el combate) que convierte peleas largas en self-sustain. El taunt W de Galio fuerza a varios objetivos a atacarlo, alimentando la omnivamp.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana (cantidad fija que se resta a la resistencia mágica del enemigo, así tus hechizos pegan más). Cómpralas salvo si el equipo enemigo tiene 3+ amenazas AD (campeones que hacen daño físico); en ese caso swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slow en cada tick de Q. Combina con Riftmaker para que el equipo enemigo no pueda hacer disengage de tu rango de taunt, y los HP que da te mantienen tank-shaped.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — movement speed y ability haste. Cierra la distancia con back-line targets que tu R no alcanza directamente y baja el cooldown de Q/E para re-engage entre teamfights.

**Items situacionales:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contra front lines con mucha vida (dos o más tanques tipo Cho'Gath, Sion, Dr. Mundo). Quema un porcentaje de su HP por tick de Q.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — solo si llevas ventaja temprana de kills (estás snowballeando — cada kill te hace más fuerte y más probable conseguir la siguiente). Tres o más kills antes del minuto 12 hacen que la matemática funcione; si mueres una vez y pierdes stacks, el item se desperdicia.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — entra en cuanto un objetivo prioritario compre un item de Magic Resist como ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** o ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** en un fighter.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos con follow-up de kill-pressure tras tu engage (Zed, Talon). La stasis cubre la ventana de cooldown cuando W y E están abajo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrumpe tu W mid-charge (Malzahar suppression, Lissandra R, Twisted Fate stun).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. Toma ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps de mucho CC (varios stuns, roots, charms), o ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra composiciones de auto-attack pesado (dos AD carries, Master Yi).

**Skill order:** Maximiza **Q** primero (daño principal y waveclear). **E** segundo (menor cooldown en el engage). **W** al final — su daño por tick y valor de escudo escalan poco comparado con el rank-up de Q. Punto en **R** a niveles 6, 11, 16.

**Runas:** Primaria **Resolve** con **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. Secundaria **Sorcery** con **Manaflow Band** y **Transcendence**. Cambia secundaria a **Inspiration** (Biscuit Delivery + Cosmic Insight) en líneas de mana-war.

## Matchups clave

- **Akali:** Línea dura. Su shroud (W) hace que W y E de Galio pierdan el target lock. Mantente a max range de Q, deja ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** en la lista, y usa R para roamear — no puede igualar tu impacto en side lanes.
- **Yasuo / Yone:** Wind Wall bloquea por completo tus ráfagas Q. Guarda Q hasta que empujen el muro, mantén E para counter-engage cuando hagan all-in. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** temprano para sobrevivir a la ventana de auto-attacks.
- **Lux:** Favorable. Caminas a través de su Q binding y dashas sobre ella con E — sus cooldowns son demasiado largos para trades sostenidos, y W escuda el poke de su R.
- **Cassiopeia:** Difícil. Su daño DOT bypassa la absorción de burst de W. No intentes all-in pre-6; farma bajo torre con Q y busca roamear al nivel 6.
- **Twisted Fate:** Carrera de roams. Iguala el rango de tu R con su teleport. Empuja la wave, ping bot/top cuando su ult salga de cooldown, y prepárate a counter-R su rotación en lugar de iniciar la tuya.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + W tienes tu primer trade all-in. Carga W mientras el enemigo pisa tu tornado Q y camina hacia él — el taunt fuerza el auto-attack sobre ti mientras los ticks de Q rematan.
- **Nivel 6:** **Hero's Entrance** desbloquea el impacto en side lanes. Empuja la wave fuerte, ping a tu bot lane, y busca la primera pelea de Drake.
- **Riftmaker completo (~ minuto 12-14):** Galio se vuelve una pieza real de teamfight. Fuerza peleas de objetivo aquí — tu omnivamp de R-en-W-en-E te deja absorber la primera ola de cooldowns enemigos y sobrevivir.
- **Spike de tres items (~ minuto 22-26):** Con ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** y ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter**, el slow del tornado más el knockup E encadenan 1.5+ segundos de control sobre una back line que no puede kitarte.

## Errores comunes

- **Soltar W sin objetivo.** El taunt solo se activa si un campeón está en melee range al soltar. Carga W caminando *hacia* un objetivo, no encima de una ward vacía.
- **Usar R como first engage cuando el equipo no tiene follow-up.** Hero's Entrance da un knockup, pero si tu equipo está repositionando cuando aterrizas, el enemigo se va caminando. Espera a que aterrice un CC aliado (Ashe R, Lulu Q, Pantheon Q), luego R encima.
- **Ignorar la waveclear pre-6.** La Q de Galio es una de las herramientas de waveclear AOE de mayor rango en mid; no empujar significa ceder la prio que necesitas para usar R en roams.
- **Maxear W en segundo lugar.** El valor del escudo escala con rank pero el cooldown baja apenas. Max E te da una E de 4 segundos de cooldown a nivel 13, lo que se traduce directamente en más ventanas de engage.
- **Riftmaker primero contra una comp sin tank.** Si el enemigo es 4-AD (Yasuo + 2 ADC + Talon), las stats de tank se desperdician. Compra ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** primero — el burn presiona su back line squishy.

## Consejo avanzado

El knockup E golpea solo al **primer** campeón enemigo en el camino del dash — usa esto para pickar un target. Si la front line enemiga está entre ti y su carry, rodea por los arbustos laterales (o flanqueas desde fog) para que la línea de E clipee al carry primero mientras la front line queda del lado equivocado. El mismo truco funciona tras aterrizar la R: si el knockup acaba e inmediatamente E desde la espalda de la formación enemiga, re-knockeas al back-line target mientras su tank aún se está recuperando.
