---
title: "Jinx Bot Build & Guía — Patch 16.9"
slug: "jinx-bot"
language: "es"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Guía de Jinx bot lane para League of Legends Patch 16.9: starter kit, build hypercarry crit, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Cuando Jinx ayuda a matar a un campeón, monstruo épico o destruye una estructura, gana un gran burst de move speed y attack speed durante unos segundos."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Alterna entre Pow-Pow (minigun, acumula attack speed) y Fishbones (lanzacohetes, daño AOE con más rango, cuesta maná). Palanca principal de DPS."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Skillshot lineal de largo alcance que daña, ralentiza y revela al primer enemigo impactado. Úsalo como poke y como slow de self-peel contra divers."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Lanza tres trampas que enraízan a los campeones enemigos al contacto durante 1.5s. Self-peel y setup de lockdown, no poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Cohete global que hace más daño cuanto más lejos vuela y explota con daño basado en HP faltantes. Snipea runners a baja vida o remata desde medio mapa."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra front lines tanky o comps que apilan HP (Sion, Cho'Gath, Dr. Mundo) — la armor pen extra escala con HP máximos enemigos"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de cura pesada (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds en cuanto los cohetes los rozan"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra presión de assassins o divers (Zed, Samira, Yasuo flank) — move speed y shield bajo umbral dan el segundo para E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra comps de poke pesado o lanes en stalemate — lifesteal y overheal shield te mantienen al máximo entre peleas"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Llega vivo a Statikk Shiv e Infinity Edge, luego juega los teamfights desde la backline con Q cohete. Encadena resets de Get Excited! sobre pickoffs para snowballear Baron y Drake."
  weakness: "Move speed base lento y cero dash o blink. Hard counter de divers y assassins que llegan a la backline; sufre lanes de presión early (Draven, Lucian, Caitlyn) hasta sus dos primeros items."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Marksmen inmóviles late-scaling"
      reason: "Jinx escala y teamfightea mejor que los marksmen estáticos: la Q cohete más Runaan's Hurricane tritura una backline aglomerada que no tiene dash para reposicionarse cuando empieza la pelea."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "Tanks HP-stackers y comps de front line"
      reason: "La Q cohete hace daño físico AOE que escala con attack speed, y la armor pen de Lord Dominik's contra targets de mucho HP convierte las grandes front lines en el target ideal en lugar de un muro."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports engage de lockdown"
      reason: "Cuando el support engancha un target, Jinx tiene una ventana de auto-attack lo bastante larga para meter 3-4 cohetes en la cadena de CC y rematar con la R, ya que el target no puede salir del AOE."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Marksmen de presión early"
      reason: "Out-tradan a Jinx en niveles 1-6 porque su daño en auto-attack supera los stacks de minigun y Jinx no tiene dash para desengancharse; snowballean gold de lane antes de su primer spike de item."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Assassins móviles y divers"
      reason: "Jinx no tiene dash, blink ni CC instantáneo: un solo gap-close que pase Flame Chompers la borra antes de que aterrice la E o expire el root."
    - examples: ["xerath", "ziggs"]
      archetype: "Mages de artillería a largo alcance"
      reason: "Pokean a Jinx más allá del rango de la Q cohete y le sangran HP en cada wave. Sin escape ni sustain, no aguanta en lane lo suficiente para llegar a sus spikes."
---

## Resumen

Jinx es la marksman hypercarry de manual: débil en los primeros diez minutos, terrorífica con dos items completos y capaz de cerrar la partida con un solo reset desde una kill en teamfight. Su **Switcheroo! (Q)** le permite alternar entre una minigun single-target (que acumula attack speed) y un lanzacohetes AOE (más rango, daño físico en área, cuesta maná): cubre tanto DPS limpio sobre la backline enemiga como waveclear y presión sobre la front line con la misma habilidad. Su pasiva **Get Excited! (P)** convierte cada kill, asistencia o estructura destruida en una gran ventana de move speed y attack speed: es el motor que permite a una Jinx adelantada caminar dentro de un teamfight y encadenar tres kills más antes de que el buff caduque.

El plan de partida es simple de explicar y duro de ejecutar: sobrevive la lane contra la agresión early, llega al primer item crit (Statikk Shiv), y luego juega como backline carry — quédate en la segunda posición más atrasada, kitea (muévete hacia atrás mientras atacas para mantener distancia) con la Q cohete, suelta **Flame Chompers (E)** bajo tus pies cuando un diver aterriza, y snipea runners a baja vida con la **R** desde el otro lado del mapa. El skill expression está en los swaps de forma de la **Q** en mid-fight (minigun sobre el tank que engagea, cohetes sobre la backline agrupada) y en los snipes de **R** que convierten errores de posicionamiento rival en kills antes de que lleguen a su retaguardia.

## Build Recomendada

**Items iniciales:** Doran's Blade + 2 Health Potions. Salta el segundo Doran's aunque vayas ganando lane — el gold rinde mucho más en una componente Sheen para Statikk Shiv.

**Items core (en orden):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — primer item de rush. La pasiva Energized proca en la Q cohete para waveclear instantáneo, y la combinación de attack speed más crit chance lleva la forma cohete a ser una herramienta de teamfight real hacia el minuto 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed. Mercury's Treads solo si el equipo rival tiene 3+ amenazas de hard CC.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — tu spike de daño más grande. El daño crit duplica cada hit AOE de la Q cohete sobre la backline; es el item que pasa a Jinx de "molesta" a "borra al ADC enemigo".
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — item de hypercarry para teamfight. Los bolts de Runaan's también disparan cohetes cuando Jinx está en forma Fishbones, así que impactas tres targets a la vez con scaling completo de crit + attack speed.

**Items situacionales:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra front lines tanky o comps que apilan HP (Sion, Cho'Gath, Dr. Mundo). Reemplaza Runaan's si el equipo rival tiene 3+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps de cura pesada (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (un debuff que corta la curación) en cuanto un cohete los toca.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra presión de assassins o divers (Zed, Samira, Yasuo flank). La pasiva por umbral de HP (un escudo que se activa cuando bajas a poca vida) más la move speed te dan el medio segundo que necesitas para soltar la **E** bajo tus pies.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra comps de poke pesado o lanes en stalemate. Lifesteal más overheal shield te dan el sustain para aguantar en lane lo suficiente para llegar a tus spikes.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto. Mercury's Treads solo contra CC AP pesado tipo Brand o Zyra support.

**Skill order:** Maxea **Q** primero (DPS y scaling cohete), **W** segundo (cooldown de Zap! para poke y self-peel slow), **E** al final (la duración del root es fija, solo escala el daño). Punto en **R** a niveles 6, 11, 16.

**Runas:** Árbol primario **Precision** con **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secundario **Sorcery** con **Manaflow Band** (sostiene el coste de maná de la Q cohete) y **Gathering Storm** para scaling de late-game. Stat shards: Attack Speed / Adaptive Force / Health.

## Matchups clave

- **Draven:** Heavily Jinx-unfavored en niveles 1-6. Su Spinning Axe out-tradea en cada intercambio. No pelees pre-3; freezea la wave cerca de tu torre, llega al nivel 6 con Zap! up, y busca dives del jungla solo cuando se sobreextienda. Una vez en Statikk Shiv el matchup se voltea: evita su ventana de all-in y farma seguro hasta entonces.
- **Caitlyn:** Sfavorable. Outranges tu minigun y bullea la lane con Q + setups de trampas. Ponte detrás de los minions, esquiva de lado su línea de Q y nunca pises los arbustos donde haya estado sentada (probablemente trampas). Sobrevive a dos items — su scaling de teamfight cae duro contra tu Q cohete AOE.
- **Lucian:** Sfavorable, sobre todo con un Nami support. Respeta su all-in en nivel 3 (doble shot de pasiva + dash de Q + speed-up de W). Guarda la **E** como self-peel contra su dash; nunca la lances como poke. Llega a ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** sin morir y la lane se estabiliza.
- **Aphelios:** Pareja, ligeramente favorable a Jinx tras dos items. Trackea su rotación de armas; cuando esté en Severum (rojo, lifesteal) o Calibrum (verde, marker de rango) puedes pokear con la Q cohete desde la seguridad de la minigun. Evita trades cuando Infernum (naranja, AOE) esté cargada — es su ventana de cohete-vs-cohete y la gana.
- **Samira:** Quiere un all-in melee una vez tenga la W. Guarda ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** como tercer item planeado si está snowballeando, suelta la **E** en el momento que dashee (no la quemes en poke) y nunca pelees con **Flash** en cooldown.

## Power spikes y condiciones de victoria

- **Nivel 6:** El primer **Super Mega Death Rocket!** desbloquea presión de pickoff. Un enemigo a baja vida volviendo bot-a-base es una R execute gratis si respetas el scaling sobre HP faltantes. No la malgastes como poke — espera runners por debajo del 30% HP.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completo (~ minuto 10-12):** Primer spike real. La Q cohete ya limpia la wave en un cast y el Energized proca en cada stack de minigun, abriendo participación en skirmishes alrededor del Drake.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 20-24):** El breakpoint de hypercarry. Los crits de la Q cohete empiezan a one-shotear targets de backline, y cualquier pickoff o kill triggerea **Get Excited!** para una rotación gratis a la siguiente pelea.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane online (~ minuto 28-32):** Q cohete a tres targets con crit. Es la fantasy de late-game: ponte detrás de tu front line, dispara al grumo enemigo y mira la pelea cancelarse en 4 segundos.

## Errores comunes

- **Spamear la Q cohete en lane.** La forma cohete drena maná rápido y la forma minigun te mantiene los stacks de attack speed altos. Usa los cohetes solo para limpiar last-hits sobre grupos de tres minions o para pokear (ventaja de rango); vuelve a minigun en cuanto se cierre la ventana de trade.
- **Guardar la R para "el snipe perfecto".** **Super Mega Death Rocket!** escala sobre HP faltantes, no sobre HP máximos. Una R segura al 60% sobre un enemigo al 25% HP es kill garantizada; esperar el tiro limpio cruzando el mapa suele significar que el target se cura a base antes de que dispares.
- **Quedarse en rango máximo de AA en teamfights.** Jinx no tiene dash. La distancia máxima de AA te deja fuera del peel del equipo (la protección: CC y escudos del support). Quédate en la segunda posición más atrasada para que un assassin en flank no te borre antes de que el equipo reaccione.
- **Quemar la E para engage.** **Flame Chompers!** es tu único self-peel. En cooldown eres una glass cannon (un campeón con mucho daño y pocas defensas, como la mayoría de ADCs) sin respuesta a un diver. Suéltala bajo tus pies cuando un Zed o una Samira aterricen, nunca como setup de poke.
- **Perseguir kills fuera de la ventana de Get Excited!** La pasiva dura solo unos segundos. Si el buff cae mientras estás en territorio enemigo, tienes move speed base y cero escape. Cuando el boost termine, retírate — la siguiente pelea vuelve a ti más rápido de lo que crees.

## Consejo avanzado

Practica el **swap de forma de Q en mid-AA** para tener los dos mundos activos. El truco: acumula 3 stacks de attack speed con minigun en una wave, switchea a cohetes justo antes de que una Q cohete vaya a last-hitear dos minions, dispara un cohete y vuelve a minigun en el mismo frame para mantener el buff de attack speed. En teamfight esto se traduce en stackear attack speed con la minigun sobre el tank de front line, switchear a cohetes en el momento que el equipo committea el engage, y vaciar 3-4 cohetes sobre la backline rival con crit + Runaan's y attack speed ya cargada. Bien ejecutado añade alrededor de un 40% de DPS extra en los primeros tres segundos de la pelea, que es exactamente la ventana donde los carries viven o mueren.
