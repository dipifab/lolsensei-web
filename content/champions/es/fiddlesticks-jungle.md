---
title: "Fiddlesticks Jungle Build & Guía — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "es"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía de Fiddlesticks jungle para League of Legends Patch 16.9: build AP, engage con Crowstorm, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "El slot del trinket pasa a cargas de efigie. Coloca espantapájaros falsos para vision; al verlos, el enemigo recibe un fear breve y la efigie estalla."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Selecciona un solo enemigo. Dañarlo con un hechizo estando unseen también auto-Terrify. Lo hace huir lejos de ti durante 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel que drena HP a los enemigos cercanos (te cura). Al final inflige daño bonus de ejecución. Herramienta principal de clear y sustain en jungla."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Guadaña en bumerán en cono amplio: ralentiza a todos los impactados y silencia a los de la línea central. Va y vuelve, golpea dos veces."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, luego blink al punto objetivo con daño AOE por segundo alrededor de Fiddle durante 5s. Lánzalo desde fog of war o detrás de muros."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que interrumpe tu R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap cuando 2+ enemigos compran un item de Magic Resist (umbral ~200+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Aatrox, Soraka, Vladimir, Dr. Mundo) — aplica Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "cuando necesitas Movement Speed extra para perseguir o entrar al rango de Crowstorm desde la fog"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Lanza Crowstorm desde fog of war sobre 2+ enemigos agrupados en un objetivo. Bountiful Harvest finiquita a los supervivientes mientras el silencio de Reap impide el counter-engage."
  weakness: "El channel de 1.5s de R lo interrumpen CC duro single-target, dashes y Cleanse/QSS. Sin sorpresa desde la fog, el engage se telegrafía y el equipo te kitea fuera."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest acumula stacks rápido en peleas agrupadas con el AOE de Crowstorm. Sudden Impact procea en el blink de R para magic pen extra. Treasure Hunter acelera Liandry's. Ultimate Hunter recorta el cooldown de Crowstorm para encadenar ults entre objetivos."
    secondary_rationale: "Sorcery secundario: Manaflow Band arregla los problemas de mana en early jungle al spamear W; Gathering Storm escala a un power spike late que casa con Rabadon's Deathcap."
    secondary_alternative: "Contra engage de CC duro single-target (Lissandra, Malzahar, Veigar) cambia Sorcery por Resolve con Bone Plating (5s de reducción de daño tras el primer golpe) y Revitalize (+5% al heal de Bountiful Harvest)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Junglers de farmeo sin tools de flank"
      reason: "Escalan linealmente con farm pero no pueden castigar tu invade entre niveles 1 y 3. Al llegar al 6, tu Crowstorm desde la fog gana a sus engages face-tank porque no tienen escape pre-cast."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Equipos de artillería inmóvil que se agrupan"
      reason: "Los magos de backline sin escape se one-shotean con un Crowstorm de flank porque no pueden dashear fuera del AOE antes de que el channel ticke."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Magos de control sin dash"
      reason: "Tu R blinka más allá de su zone control antes de que coloquen su setup CC. Si apareces desde la fog, no tienen tool para salir."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Invaders de early-game con presión de tracking"
      reason: "Amenazan tu jungla a niveles 2-3 y te obligan a jugar defensivo. Fiddle no tiene escape pre-6: si te invaden no puedes huir, y el clear es lento sin setup de vision con efigies."
    - examples: ["yasuo", "samira"]
      archetype: "Carries con Wind Wall / bloqueo de proyectiles"
      reason: "Wind Wall bloquea tu Q (proyectil único) y casi todo Reap. Anulan el cast de engage en el peor momento, dejándote canalizando Crowstorm sin follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Magos de CC duro point-and-click"
      reason: "Interrumpen el channel de 1.5s de Crowstorm sin habilidad — Lissandra R, Malzahar R, Veigar E convierten tu engage en ult tirado y muerte instantánea."
---

## Resumen

Fiddlesticks es un jungler de emboscada cuyo kit entero gira en torno a un solo movimiento: blinkar a una pelea desde fog of war con **Crowstorm (R)** y reventar en AOE al equipo enemigo mientras siguen agrupados. Fuera de esa ventana es un mago lento e inmóvil, con duelo flojo y ulti de channel largo, así que la diferencia entre ganar y perder está casi toda en el *setup de vision* y el *timing del engage* (cuándo y dónde aprietas R).

El plan de partida: limpia la jungla rápido con **Bountiful Harvest (W)**, coloca efigies en río y alrededor de la jungla enemiga para tener vision (y fears breves a quien las vea), luego busca una posición de flank escondida cerca del próximo objetivo (Drake o Baron). Cuando 2+ enemigos están agrupados sobre el objetivo, blinka con **R**, suelta **E** para slow + silence, después **W** y **Q** para rematar a quien huya. Sin el factor sorpresa el kit rinde poco — Fiddle es binario: ace de setup o ult tirado.

## Build Recomendada

**Items iniciales:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (el starter de jungler melee que da boost de daño a Smite sobre los monstruos y arranca la quest del pet) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Items core (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Emberknife (auto-evoluciona en torno al minuto 3-4, una vez acumulada XP suficiente de los camps de jungla). Companion para AP (Ability Power, la stat que escala el daño mágico) burst: añade un efecto de daño mágico que se dispara (un "proc") en la auto-attack justo después de un hechizo, encadenando con el burn de Liandry's.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer item completo. El burn porcentual sobre HP (daño que escala con la vida máxima del objetivo) se acumula con cada tick del AOE de Crowstorm sobre tanks, convirtiendo tu ulti en una herramienta de teamwipe.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana. Baratos, inmediatos, default para cualquier AP antes del mid-game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entra en estasis en cuanto terminan los ticks de AOE de Crowstorm; te salva del foco que comes justo después del engage. Obligatorio si el rival lleva un diver o un assassin.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late-game (+35% AP bonus). Tu slot de más AP, hace que Crowstorm one-shotee a los squishies.

**Items situacionales:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrumpe el channel de R (Lissandra R, Veigar E, Twisted Fate stun). El escudo bloquea una habilidad antes de que paren tu ult.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cuando 2+ enemigos compran cualquier item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Aatrox, Soraka, Vladimir, Dr. Mundo). Aplica Grievous Wounds (recorta un 40% las curaciones).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — cuando necesitas Movement Speed extra para perseguir o entrar al rango de R desde la fog.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si 2+ enemigos llevan CC duro y Banshee's sola no basta.

**Skill order:** Maxea **W** primero (clear y sustain en jungla), **E** segundo (slow + silence en peleas), **Q** la última. Punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Domination** con **Dark Harvest**, **Sudden Impact**, **Treasure Hunter** y **Ultimate Hunter**. Secundario **Sorcery** con **Manaflow Band** y **Gathering Storm**. Contra engage de CC duro single-target (Lissandra, Malzahar, Veigar) cambia Sorcery por **Resolve** con **Bone Plating** y **Revitalize**.

## Matchups clave

- **Lee Sin / Elise:** Junglers de invade early. No contestes tu propio buff side a nivel 1; cruza el mapa y arranca el buff opuesto con leash (tus laners ayudan a empezar el camp golpeándolo unos segundos para que tomes menos daño), luego rota a la Scuttle Crab del río. Suelta una efigie en río para spotear el gank y wardea las entradas de tu jungla antes del minuto 3.
- **Karthus:** Carrera de scaling vs scaling. Te supera en clear y en late. Tienes que forzar un gank a nivel 6 o invadir su jungla con vision; si le dejas llegar al 11, su ulti global supera tus victorias de objetivo único.
- **Yasuo bot o mid:** Wind Wall bloquea el proyectil de tu **Q** y la línea central de silencio de tu **E**. Engagea Crowstorm desde un ángulo lateral para que no pueda cubrir al equipo con el muro; flankea desde una brush de lane no obvia.
- **Zac:** Tank de engage espejo con E gap-close. El silencio de tu **E** apaga el timing de detonación de su W si lo aciertas durante su channel; en un teamfight a cara o cruz, gana quien lance antes la **R** + silence.
- **Master Yi:** Es CC-immune al silencio de tu **E** con la **Q** dash y la R Highlander. Guarda la **Q** para fearlo fuera de la ventana de Highlander; sin el fear, su cleanup late game te transforma el engage en un 1-por-3.

## Power spikes y condiciones de victoria

- **Nivel 6 (primer Crowstorm):** Tu primera ventana de gank. Monta vision en la fog del río 30s antes y entra. Un R + E limpio sobre 2 enemigos bajo torre es double kill garantizado.
- **Nivel 9 (W maxada):** Tu clear de jungla toca su pico de velocidad y el sustain en peleas se dispara. Fuerza un Drake fight aquí.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** El AOE de Crowstorm corta a través de los tanks. Fuerza fights de Baron/Drake y busca flanks cross-map.
- **Nivel 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28):** Crowstorm one-shotea a cualquier squishy que no haya construido un item de Magic Resist. Agrúpate con el equipo y fuerza el siguiente objetivo grande.

## Errores comunes

- **Usar R sin setup de fog of war.** Un Fiddle visible con la barra de channel a la vista es un dodge gratis para el equipo enemigo. Lanza siempre desde brush, detrás de un muro, o desde dentro de un camp de jungla no wardado. Si ven la barra, caminan fuera 1.5s y gastas 80 mana más tu única tool de engage.
- **Engagear en solitario con el equipo lejos.** Crowstorm es una tool de engage de equipo, no un pick de assassin. Si tu equipo está a 2+ pantallas, el ulti toca a 1 enemigo y tú mueres en el follow-up. Comprueba la posición de los compañeros antes de pulsar R.
- **Ignorar la colocación de efigies.** Las efigies dan vision y fears breves. Cargas de trinket sin usar son vision gratis que el rival *no* paga por apagar. Coloca una en río antes de cada objetivo.
- **Usar Q para last-hittear camps de jungla.** Q es tu único setup single-target para fears en pelea. Guárdala para los fights — W y E limpian camps perfectamente.

## Consejo avanzado

El channel de 1.5s de **Crowstorm** lo interrumpe cualquier cosa que te desplace o aturda, pero si pulsas **R** en el mismo instante en que un objetivo entra en una brush en la que estás escondido, el corte breve de vision no le da tiempo a reaccionar antes de que el blink aterrice. Practica el timing en customs: escóndete en la brush, espera a que un enemigo camine al lado, pulsa R desde dentro de su personal space. El blink te mantiene encima de él durante todo el AOE, y el pánico de un Fiddle face-of-fog le cuesta más Flashes que cualquier otro engage del juego.
