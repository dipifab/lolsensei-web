---
title: "Irelia Top Build & Guía — Patch 16.9"
slug: "irelia-top"
language: "es"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Irelia top lane para League of Legends Patch 16.9: starter kit, build core con Trinity Force, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Golpear a un enemigo con un hechizo da stacks de Attack Speed (max 4). A pleno stack Irelia inflige también daño mágico bonus on-hit."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash que golpea a un objetivo y cura. El cooldown se resetea si el objetivo muere o tiene Mark — el llamado Q reset (encadenas dashes minion a minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel de un golpe cargado que escala en daño y reduce el daño físico y mágico recibido durante la carga (channel = mantener para cargar)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Coloca una hoja, reactiva para la segunda. Vuelan una hacia la otra stuneando y aplicando Mark a todo en medio. Herramienta principal de setup."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Volea de hojas a larga distancia que aplica Mark a los champions golpeados, luego forma un muro alrededor del primer champion que ralentiza y daña. Engage y zoning."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra daño mágico pesado o CC encadenado (Lissandra, Ryze, Malphite — la tenacity recorta stuns y slows)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra kiters y tops ranged (Vayne, Gnar, Kennen) — dash + slow al cast ayudan a stickar a objetivos móviles"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra tanks que apilan armor (Malphite, Ornn, Sion) — el armor shred amplifica las Q repetidas y el follow-up del equipo"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "contra comps de splitpush donde necesitas waveclear y sustain 1v1 (lifesteal en AOE = cleave en área + cura)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Acierta E para el stun, Q-resetea entre minions para stickar al objetivo y luego tradea con stacks de pasiva activos. Snowball de la lane (convierte una ventaja inicial en otra mayor) hacia las skirmishes de mid-game."
  weakness: "Sin E acertada no tienes engage fiable. Poke a larga distancia y disengage te apagan antes de llegar a la front line. Sin Trinity Force o Stridebreaker te kitean fácil."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Tanks lentos e inmóviles sin poke ranged"
      reason: "No tienen disengage contra el stun de la E ni respuesta a los Q resets a través de la wave; los out-tradeas a cada nivel en cuanto Conqueror empieza a stackar."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Juggernauts melee sin dash"
      reason: "E + Q te dan gap-close y la reducción de daño de W cubre la ventana de burst rival; no pueden kitearte ni escapar al stun."
    - examples: ["azir", "ryze"]
      archetype: "Magos de media distancia flexeados top"
      reason: "Squishies a corto rango (HP bajos, defensas bajas) sin dash se one-shotean en cuanto tengas Trinity Force y les pases stacks de pasiva completos."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Tops ranged o kiters"
      reason: "Te auto-attack fuera del rango de la E, kitean tu Q con su propio dash o transformación, y castigan cada acercamiento. Necesitas Stridebreaker solo para hacer engage."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelists con counter point-and-click o true damage"
      reason: "Fiora parea la E o la R, el E hookshot de Camille stunea a través de tu dash, la E de Jax stunea y supera tu pasiva basada en AS en trades largos."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane bullies con herramientas anti-skirmisher"
      reason: "El suppress de Malzahar (silence point-and-click + lockdown) cancela tus Q resets; la W empowered de Renekton stunea a través de tu W cargada y cierra el trade antes de que escales."
---

## Resumen

Irelia es una skirmisher melee (un fighter que gana con escambios cortos y repetidos en lugar de un solo burst). Vive o muere con los dashes de **Bladesurge (Q)**. La Q tiene cooldown base largo pero se **resetea** (cooldown restaurado al instante) cada vez que mata un minion o golpea a un objetivo con el debuff Mark (un icono que aplican las spells de Irelia a los enemigos). Una sola skirmish puede encadenar cuatro o cinco dashes seguidos. Su pasiva **Ionian Fervor** stackea Attack Speed hasta cuatro veces cuando aciertas spells (cada spell que conecta añade un stack, hasta cuatro), y el quinto stack añade daño bonus y reducción de crowd-control.

El game plan en top lane es simple de explicar y exigente de ejecutar. Usa **Flawless Duet (E)** para acertar el stun (requiere una pequeña ventana de setup), follow-up con **Q** sobre el objetivo stuneado, **W** para mitigar el daño de retorno y Q-resetea a través de la wave para disengagear o perseguir. A partir de nivel 6, **Vanguard's Edge (R)** convierte las skirmishes de lane en kills añadiendo zone control y un segundo Mark para Q resets gratis. En mid-game roameas a través de la wave con Q resets para buscar pickoffs (eliminar a un enemigo aislado fuera del teamfight) y rotar a objetivos.

## Build Recomendada

**Items iniciales:** Doran's Blade + 1 Health Potion. Coge Doran's Shield solo en lanes de harass ranged (Kennen, Quinn, Vayne) donde necesites la regen.

**Items core (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — tu spike principal. La pasiva Sheen (un efecto integrado que se activa, en jerga "proc", en la siguiente auto-attack tras un hechizo) combina con cada Q dash; el Ability Haste baja el cooldown de la Q; la Attack Speed completa el stack de la pasiva.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto contra equipos AD-pesados. Cómpralas tras Trinity si la lane es melee o AD ranged.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, scaling AD y un escudo a HP bajo que hace sobrevivibles tus ventanas de dive.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el daño físico recibido en un sangrado spread durante unos segundos (daño repartido, no instantáneo). Cómpralo contra equipos con dos damage dealers físicos fuertes (ej. Yasuo + Caitlyn): sobrevives la ventana de burst lo suficiente para Q-salir.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — crit garantizado en la primera basic attack contra un champion, más heal. Encaja perfecto con el ciclo Sheen + Q reset.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra daño mágico pesado o CC encadenado (Lissandra, Ryze, Malphite). La tenacity recorta stuns y slows.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — mythic alternativo contra kiters y tops ranged (Vayne, Gnar, Kennen). El active dash + slow te da un gap-closer no ligado a la Q.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra tanks con stacks de armor (Malphite, Ornn, Sion). El armor shred amplifica las Q repetidas y el follow-up del equipo.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cuando haces splitpush (empujas una side lane solo para forzar respuesta). AOE cleave más lifesteal hacen triviales 1v1 y waveclear.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el equipo rival tenga 2+ fuentes de CC encadenado.

**Skill order:** Maxea **Q** primero (cooldown más bajo = más resets, más daño), **E** segundo (setup del stun), **W** al final. R en niveles 6, 11, 16.

**Runas:** Árbol primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundario **Resolve** con **Bone Plating** y **Revitalize**. Coge **Press the Attack** en lugar de Conqueror contra lanes de burst donde los trades cortos ganan la lane (ej. Pantheon, Renekton early): Press the Attack premia 3 hits en 4 segundos con un spike de daño en lugar de stackar en un fight largo.

## Matchups clave

- **Renekton:** Lane bully. Mantente a salvo pre-3, esquiva su W stun y farmea bajo torre. El power swing llega a nivel 6 con la R; tradea solo después de que **W** pueda absorber su combo.
- **Fiora:** Parea tu E stun y el Mark de la R con su **Riposte (W)**. Carnea la parry lanzando una sola hoja de E como finta, luego commit con Q solo cuando su W esté en cooldown.
- **Malphite:** Lane gratis pre-6: esquiva su E slow y Q-resetea por la wave para hostigarlo. Tras el 6 puede flash-R sobre tu equipo — agrúpate con aliados para los objetivos y no extiendas (empujar más allá del río sin backup) sin vision wards.
- **Vayne:** Hard counter salvo que ella la cague. Te kitea (se mueve hacia atrás mientras ataca, manteniendo distancia) la Q con **Tumble (Q)** y te come HP con **Silver Bolts (W)**. Compra Stridebreaker primero, freezea la wave cerca de tu torre (mantén la wave quieta junto a tu torre para que ella no last-hitee a salvo) y pide ganks del jungla antes de nivel 6.
- **Camille:** Más o menos parejo. Su **Hookshot (E)** stunea a través de tu dash; guarda **Flawless Duet** para stunearla a mitad del hookshot. El que aterrice primero su CC gana el trade.

## Power spikes y condiciones de victoria

- **Nivel 3:** Las tres habilidades básicas online. Puedes acertar E stun + Q + auto-attack + W para una ventana completa de trade con stacks de pasiva.
- **Nivel 6:** **Vanguard's Edge (R)** desbloquea una ventana de all-in (commit total a la kill). El Mark de la R te da un Q reset gratis a través de la jaula; ulta sobre un objetivo a HP bajo cuando tu jungla aparezca.
- **Trinity Force completo (~ minuto 14-16):** Tu daño por Q sube gracias a las procs de Sheen. El control de wave se voltea: puedes shovear y roam a objetivos con Q resets por la wave lateral.
- **3 items (Sterak's online, ~ minuto 24-28):** Te conviertes en una skirmisher de teamfight: dive sobre la back line (los carries squishy detrás de sus tanks) con Q resets, sobrevive su burst con el escudo de Sterak's + W, y limpia con la cage de la R.

## Errores comunes

- **Spamear Q sin setup.** Q desnuda sobre un objetivo sin Mark se come el cooldown base largo por un solo dash. Acierta siempre primero la **E** stun, o encadena Q en un minion a HP bajo para mantener vivo el ciclo de reset.
- **Mantener W demasiado durante un stun.** **Defiant Dance** es un channel: no puedes moverte ni atacar mientras cargas. Tap-cancel después de la ventana de reducción de daño si el enemigo disengagea — no te quedes channeleando hasta el release máximo si nadie está en rango.
- **Engagear a través de una parry.** Fiora **W**, Sivir spell shield, Olaf R: se comen tu E stun gratis. Carnea esas habilidades primero, después commitea tu CC.
- **Splitpushear pre-Trinity.** Sin Trinity tu daño en torres y waves es débil; cedes tempo a cambio de nada. Mantén la wave cerca de torre hasta que Trinity esté online, luego empuja la side lane.
- **Ultar a un solo objetivo con el equipo agrupado.** **R** en cage sobre un solo squishy se desperdicia si su tank puede body-block. Apunta la R para clipar 2-3 enemigos a través de un choke (un corredor estrecho de jungla) y deja que la cage zonifique a la back line fuera del fight.

## Consejo avanzado

Practica el combo **R-flash**: lanza **Vanguard's Edge** en una dirección, luego **Flash** inmediato en otra para redirigir la volea de hojas. Las hojas siguen la posición de Irelia, así que un flash perpendicular a la línea de cast te permite encajar en cage a un champion que se creía a salvo fuera del rango de R. Úsalo como herramienta de engage cuando tu equipo necesite un pickoff (eliminar un enemigo aislado) sobre un carry en huida cerca de la pit del dragon o del baron.
