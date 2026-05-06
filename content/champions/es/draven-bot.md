---
title: "Draven Bot Build & Guía — Patch 16.9"
slug: "draven-bot"
language: "es"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Guía Draven bot lane para League of Legends Patch 16.9: catch de hachas, build de snowball, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Capturar una Spinning Axe o matar una unidad acumula stacks de Adoration. Los takedowns sobre champion convierten los stacks en oro bonus — el motor de snowball de Draven."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Carga la siguiente auto con daño físico bonus. El hacha rebota hacia arriba tras el golpe: capturarla recarga otra Q, hasta dos en pila."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Buff breve de Move Speed y Attack Speed. Capturar una Spinning Axe resetea su cooldown — tu movilidad escala con lo bien que captures."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Hacha lineal que aparta a los enemigos y los ralentiza. Herramienta principal de peel y disengage; también reposiciona targets para el follow-up del support."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Dos hachas gigantes lanzadas por el mapa, retornables al recastear. El daño cae por cada enemigo golpeado pero ejecuta targets bajo un umbral de HP ligado a Adoration."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con cura pesada (Soraka, Yuumi, Aatrox, Vladimir) — aplica Grievous Wounds y reduce la cura a la mitad"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Syndra mid + comps doble mago) — escudo bajo 50% HP y Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra dive de assassins (Zed, Talon, Rengar) — la revive permite cobrar los stacks de Adoration antes de morir otra vez"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC single-target de lockdown (Morgana Q, Lux Q, Ashe R) — el spell shield bloquea el primer hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Acumula Adoration con catches y last-hits, luego cobra en la primera kill para un spike de 600+ oro. Convierte la ventaja en items más rápidos y snowballea cada skirmish antes de que el ADC enemigo escale."
  weakness: "Sin dash, sin escape, y el patrón de catch te encierra en arcos predecibles. Hard CC en niveles 1-3 te mata antes del reset de W, y perder Adoration arruina tu curva de oro."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling con early débil"
      reason: "Su nivel 1-3 es solo farmear; la Q de Draven mete daño bonus enorme en cada catch y la W se resetea al capturar, así que puede correrlos antes de que lleguen a dos items."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Marksmen inmóviles sin dash"
      reason: "La E de Draven aparta y ralentiza, la W le da burst de Move Speed: estos ADCs no pueden hacer disengage cuando él avanza. Pierden todos los all-in pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Supports enchanters que heal-tradean en lane"
      reason: "El daño de la Q de Draven apila demasiado rápido para las lanes de poke-and-heal. Dos hachas capturadas seguidas rompen un ciclo de cura de Soraka, y su snowball convierte cada kill en 200+ oro de ventaja."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Marksmen de poke a larga distancia"
      reason: "Pokean fuera del attack range de 550 de Draven mientras él está atrapado en sus arcos de catch. Cada minuto que Draven no puede engagear es un minuto en que sus stacks de Adoration se desvanecen."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Supports de hard-engage con CC"
      reason: "Draven no tiene dash ni inmunidad. Una cadena de CC al nivel 2 lo borra mientras sus hachas rebotan inútilmente en la lane. Pre-6 no puede literalmente devolver."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Supports de lockdown / pick"
      reason: "Un solo hook de Thresh o Q de Morgana detiene a Draven a mitad de catch. Sin catch, los resets de Q se cancelan, la velocidad de W cae, y queda como un ADC inmóvil sin escape."
---

## Resumen

Draven es un marksman de snowball construido alrededor de una sola mecánica: capturar sus propias hachas giratorias. Cada auto-attack mientras **Spinning Axe (Q)** está cargada sale como un hacha que rebota al aire — si Draven camina bajo el punto de aterrizaje, la captura, mete un golpe bonus enorme y recarga otra Q. Puede tener hasta dos Spinning Axes en pila a la vez. Su pasiva **League of Draven** convierte esos catches en oro: cada catch y cada minion muerto acumula stacks de Adoration, y el primer takedown sobre un champion tras una cierta cantidad de stacks los cobra en un bonus de oro (a menudo 100-500 oro extra por kill).

El plan de partida es brutal y directo: bullear la bot lane desde nivel 1, forzar una kill antes del minuto 8, cobrar el spike de Adoration y power-farmear hacia un snowball lead (una ventaja temprana que se compone: kill → oro → item → más kills). El skill expression vive en el posicionamiento del catch (predecir dónde cae el hacha sin exponerte a skillshots) y en el uptime de **Blood Rush (W)** — cada catch resetea la W, así que un Draven fluido es permanentemente más rápido que un Draven que falla dos hachas seguidas.

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade es el starter estándar de marksman: pequeño bonus de Attack Damage (AD), algo de HP y lifesteal (curas un porcentaje del daño que haces con auto-attacks). Draven necesita cada punto de AD porque su Q escala con el daño del basic-attack, y el patrón de catch es brutal con tu HP si no recuperas con lifesteal.

**Items core (en orden):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primer item de snowball. Lethality (un tipo de penetración de armadura que ignora un trozo de la armadura del target, especialmente útil contra targets squishy — campeones con pocas defensas como ADCs y magos) más una ejecución bajo 5% HP convierte cada auto Q-cargada en una amenaza de kill. Casa con Adoration: más kills significan más stacks, y más stacks significan spikes de oro mayores por takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed (más autos por segundo). Default para Draven porque más autos significan más oportunidades de catch por segundo, y la W se resetea con cada catch.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de daño crítico. Tras dos items crit (Collector cuenta como una pseudo-fuente crit por scaling AD, IE es la segunda), Infinity Edge desbloquea 175% de daño crítico. El daño de Spinning Axe escala con tu AD, y un catch crítico a estas alturas one-shotea a la mayoría de targets squishy.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (curas un porcentaje del daño que haces con auto-attacks) más un escudo desde full HP. Draven muere ante assassins porque no tiene escape; el escudo te regala un fight extra por teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — slot final de penetración de armadura que escala con el HP bonus del enemigo (más efectivo cuanto más grande es su tank). Sustitúyelo por Mortal Reminder si el equipo enemigo tiene cura pesada.

**Swaps situacionales:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — mismo slot que Lord Dominik's, esta versión cuando el equipo enemigo tiene cura pesada (Soraka, Yuumi, Aatrox, Vladimir): aplica Grievous Wounds, que reduce la cura a la mitad.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot tardío contra comps de burst AP (Syndra + Veigar + Annie). El escudo se activa bajo el umbral de HP — es decir, cuando bajas del 50% HP — y absorbe daño mágico.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — slot final contra dive de assassins (Zed, Talon, Rengar). La revive te da 4 segundos para escapar o terminar tu cobro de Adoration, y la stat de armor reduce el daño del dive en ~20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — sustituye a Bloodthirster contra CC single-target de lockdown (Morgana Q binding, Lux Q root, Ashe R stun). El spell shield bloquea el primer hard CC cada 40 segundos — ese tiempo lo gastas metiendo autos en vez de quedando encadenado.

**Skill order:** Maxea **Q** primero (daño bruto del hacha, eje de tu snowball), **W** segundo (más Move Speed y Attack Speed para el flujo de catch), **E** al final (utility — un punto a nivel 3 basta hasta el late game). Sube **R** a niveles 6, 11, 16 como siempre.

**Runes:** Árbol primario **Precision** (construido alrededor de auto-attacks): **Conqueror** como keystone (apila con cada auto y convierte parte del daño en cura en peleas largas — perfecta para el patrón de all-in de Draven), luego **Triumph** (cura y oro bonus en takedowns — casa con el cobro de Adoration), **Legend: Alacrity** (más attack speed por cada takedown apilado), **Coup de Grace** (daño extra a targets de bajo HP). Árbol secundario **Domination** con **Sudden Impact** (Lethality extra tras usar un dash o buff — Draven la saca con W) y **Treasure Hunter** (oro extra por cada takedown único — casa con la identidad snowball).

## Matchups clave

- **Caitlyn:** La lane más dura del board. Su attack range de 650 supera en poke (chip de tu HP desde fuera de tu propio rango) los 550 de Draven en cada trade. Solo da el paso cuando ella está animation-locked en un last-hit, y nunca camines sobre una trap para coger un hacha — deja caer el hacha si aterriza en una trap.
- **Aphelios:** Lane gratis pre-6. La Q de Aphelios tiene 9 segundos de cooldown y sus armas se quedan sin munición; la de Draven es permanente. Pushea fuerte el nivel 2 (fuerza la wave a crashear primero en su lado), engagea sobre su arma más débil (Severum o Crescendum — ambas main-hand de melee range) y quémale el Flash antes del minuto 5.
- **Lucian:** ADC early-game de tier espejo. Te supera en trade en una ventana de 1 segundo con su combo Q-AA-AA; tú lo superas en una ventana de 4 segundos con Qs apiladas. Rechaza los short trades (no engagees), commitea a extended trades (un "trade" = un breve intercambio de golpes; "extended trade" = pelea sostenida de 3+ segundos donde las Qs apiladas de Draven superan al burst de Lucian).
- **Jhin:** Te poka pre-6 (su daño a distancia te chipea HP desde lejos en niveles tempranos) pero pierde en all-in (una pelea de compromiso total en la que vas por la kill sin opción de fallback) en el reload de su 4º disparo. Cuenta su contador de balas; engagea en "0/4" o justo después de que gaste un disparo en un minion. Su W root es 1 segundo de autos gratis sobre un Draven que no tiene dash para esquivar.
- **Samira:** Ella quiere apilar el rank S de su pasiva para la **R** en lane. No tradees con ella una vez ha alcanzado S: aléjate, recall (vuelve a base) y re-engagea solo a full HP. Su **R** te supera en DPS a melee range, pero una E de Draven (Stand Aside) la saca del rango del channel y resetea el fight.

## Power spikes y condiciones de victoria

- **Nivel 2:** La Q de Draven mete daño bonus enorme incluso en rank 1. Con un punto en **W** para Move Speed y Attack Speed, el all-in de nivel 2 es uno de los más fuertes del juego — la mayoría de partidas de Draven se deciden por quién aterriza el trade del nivel 2.
- **Nivel 6 con primera kill:** Whirling Death **R** se vuelve un kill button a bajo HP — ejecuta (mata al instante) cualquier target bajo un umbral de HP ligado a tus stacks de Adoration. Si has estado capturando hachas durante 6 niveles, el umbral es lo bastante alto como para finiquitar a un enemigo huyendo desde el otro lado del mapa.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completado (~ minuto 11-13):** Spike de primer item (un salto claro de power ligado a un milestone de nivel o item). Lethality más la ejecución al 5% HP significa que cada auto Q-cargada amenaza una kill en un target chip-damaged. Fuerza un fight a este timing — un cobro de Adoration aquí a menudo te financia el segundo item 3 minutos antes.
- **Spike a 3 items (Collector + Berserker's + Infinity Edge sobre el minuto 22-24):** El burst de Draven (el daño que metes en una ventana de 1-2 segundos) se vuelve el más alto de cualquier marksman. Juega alrededor de objetivos (Dragon, Baron, Rift Herald — targets neutrales que dan buffs de equipo o presión de mapa) en este punto y busca picks (eliminar a un enemigo aislado fuera del teamfight) en targets aislados de las side lanes.

## Errores comunes

- **Capturar hachas en posiciones peligrosas.** Un Draven que camina 400 unidades dentro de la wave para coger una Q es un Draven que se come una trap de Caitlyn o un engage de Leona. Si el hacha cae en mal sitio, **déjala caer** — perder una Q está bien, perder una kill por overextension (dar un paso más allá de la zona segura para perseguir una jugada) no.
- **Acumular stacks de Adoration sin cobrar.** Los stacks decaen si no los cobras dentro de ~30 segundos de un intento de takedown. Si llegas a 100+ stacks, fuerza un fight o coge una Scuttle skirmish (peleas pequeñas de 2-4 jugadores en el río por el cangrejo Scuttle) — quedarte sentado farmeando con stacks es tirar oro gratis.
- **Usar R por daño en vez de para ejecutar.** El daño de Whirling Death cae bruscamente por cada enemigo golpeado. Lanzarla a través de una wave es desperdicio; lanzarla como segunda hacha (el recast de retorno) sobre un target huyendo a bajo HP es una jugada de 1500 oro. Trátala como un rifle de francotirador, no una herramienta de waveclear.
- **Quedarte quieto en team fights.** Draven no tiene dash. Dos segundos en el mismo punto contra cualquier amenaza móvil (Zed, Diana, Camille) y estás muerto. Strafea (muévete de lado mientras atacas) entre cada auto-attack — pasos cortos pero movimiento constante. El arco de catch te empuja hacia delante; la velocidad de W te deja resetear la posición justo después.
- **Ignorar Stand Aside (E) como peel.** La E de Draven aparta a los enemigos y los ralentiza. En team fights no es solo poke — es el disengage (una habilidad que rompe un fight committeado, deshaciendo el all-in del enemigo) que te compra 1.5 segundos de autos gratis mientras una Camille o un Hecarim se recuperan del knockback.

## Consejo avanzado

Practica el truco **W-into-fountain-axe-bounce** en side lanes: lanza una Q vacía contra un muro o coberturas finas, luego camina con W inmediatamente a través de la zona de rebote. Como el Move Speed de Blood Rush decae rápido, castearla durante el arco del hacha te lleva a una posición de catch que no alcanzarías sin ella, y luego capturas el hacha para resetear el cooldown de W para la siguiente jugada. Esta única mecánica es lo que separa a un Draven casual que falla un hacha de cada tres de un Draven fluido que captura cada Q que lanza.
