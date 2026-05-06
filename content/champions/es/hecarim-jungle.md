---
title: "Hecarim Jungle Build & Guía — Patch 16.9"
slug: "hecarim-jungle"
language: "es"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Hecarim jungle para League of Legends Patch 16.9: clear path, patrones de gank, build bruiser, matchups clave, power spikes, errores y un consejo final."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim convierte un porcentaje de su Move Speed bonus en Attack Damage. Cada item de velocidad es también un item de daño."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "Tajo AoE a los enemigos cercanos por daño físico. Cada golpe acumula stacks que reducen cooldown y aumentan el daño. Botón principal de clear y DPS."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "Zona AoE de daño mágico que cura a Hecarim según el daño que reciben los enemigos dentro. Sustain en clears y dives a torre."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Move Speed creciente más ghosting (atraviesas unidades). El siguiente basic attack hace knockback con daño escalado por la distancia recorrida. Core gank tool."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Carga lineal con daño mágico y fear sobre los enemigos al final del recorrido. Engage y disengage de larga distancia para teamfights."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs mucho CC o daño mágico (Lissandra, Syndra, Brand): cambia por Plated Steelcaps cuando el CC pesa más que la armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tanks (Ornn, Sion): el armor shred de autos y stacks de Q ayuda a todo el equipo"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs equipos sin tanks cuando necesitas wave clear y splitpush (empujar una side lane solo para forzar respuesta)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs comps sin burst real (4-5 fighters/tanks): más ability haste y uptime de R en peleas largas"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs equipos AP pesados (Brand + Karthus + Vladimir): magic resist y move speed pasivo que alimenta Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "cuando te focalizan primero: una segunda vida gratis te deja committear más a fondo como engage"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Usa el Move Speed creciente de E y Phase Rush para flankear targets squishies (carries de bajas defensas tipo ADC), follow-up con el fear de R y cycla Q mientras W te cura del burst."
  weakness: "Débil antes del nivel 3 y frágil cuando E está en cooldown. Hard CC como roots (Morgana Q, Lillia R) o grounds (Cassiopeia W) apagan tu engage y te dejan sin escape."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lentos sin gank early fuerte"
      reason: "Hecarim los out-clearra y llega a level 3 antes; puede invadir su segundo buff o counter-gankear una lane antes de que aparezcan. Su scaling sobre la velocidad le gana al de stats puras."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Enchanters squishies sin peel propio"
      reason: "E + R deja a Hecarim alcanzar y fearear al carry desde fuera de pantalla; en cuanto cae el support, el ADC enemigo se queda sin shields y se desploma en segundos."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "ADCs inmóviles o con dash corto"
      reason: "Phase Rush más la carga de E cierran el gap antes de que puedan kitear; su única salida (Flash) tiene un cooldown mucho mayor que tu engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champions con roots, slows o grounds que bloquean el movimiento"
      reason: "Todo el kit de Hecarim escala con Move Speed (Warpath convierte velocidad bonus en Attack Damage). Una vez rooteado o groundeado, pierde daño y la posibilidad de hacer disengage."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Junglers fuertes en early-game e invade"
      reason: "Hecarim es débil antes del nivel 3. Estos junglers pueden invadirle el segundo buff, matarlo o quemarle el Flash, y snowballear antes de que él se encienda."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Bruisers duelistas que castigan el dive en solitario"
      reason: "Si Hecarim engaga solo (sin equipo para follow-up), estos lo ganan en 1v1 con passives anti-AD o true damage y convierten su commit en kill regalada."
---

## Resumen

Hecarim es un diver jungler rápido — un fighter que cierra distancias enormes, mete knockback al enemigo dentro de su equipo y luego se queda pegado como una garrapata gracias a **Devastating Charge (E)** y **Onslaught of Shadows (R)**. Su pasiva **Warpath** convierte cada punto de Move Speed bonus en Attack Damage, así que los items de velocidad son también items de daño. El kit es fácil de leer pero exigente con los tiempos: pasarás casi toda la partida como una amenaza móvil que castiga a los carries expuestos (damage dealers de bajas defensas como ADCs y mages).

El game plan es repetible. Clear rápido con **Rampage (Q)** y **Spirit of Dread (W)** para llegar a level 3, luego busca ganks early en la lane que te ofrezca el mejor ángulo de carga con E (las lanes largas y rectas son las mejores). Desde el mid game en adelante tu trabajo es **flankear** (entrar en el fight desde un lado que nadie vigila) con **R**, fearear la backline enemiga y encadenar knockbacks de **E** hasta que caiga todo.

## Build Recomendada

**Items iniciales:** Mosstomper Seedling (o Gustwalker Hatchling si quieres más velocidad fuera de combate) + Refillable Potion. Mosstomper da un escudo cuando estás a HP llenos — perfecto para sobrevivir al primer clear.

**Items core (en orden):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — tu spike de AD más una active que ralentiza (Halting Slash). El slow on-demand es la diferencia entre un gank que cierra la kill y uno en el que el enemigo se va con Flash.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor contra auto-attack. Botas por defecto cuando el equipo enemigo tiene 2+ amenazas AD.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity y un escudo grande cuando recibes daño pesado. Es el item que te permite committear al fight (entrar full sin echarte atrás) y sobrevivir lo bastante para rotar abilities.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el daño físico que recibes en un sangrado distribuido (daño repartido en los segundos siguientes en vez de instantáneo). Además recupera HP en takedown, así puedes ir all-in (commit total hasta la kill) y salir sano.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantiza un crítico en tu primer auto de cada fight (perfecto con el knockback de **E**) y te cura un buen tramo de HP. Combina con Stridebreaker porque ambos quieren que metas autos entre ability y ability.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — en lugar de Plated Steelcaps cuando el equipo enemigo tiene mucho crowd control o daño mágico (Lissandra, Syndra, Brand). La tenacity reduce la duración de los stuns para que aún puedas castear **R**.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tanks (Ornn, Sion). Autos y stacks de **Q** rompen armor para todo el equipo.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cuando quieres splitpushear una side lane (empujar solo para forzar una respuesta) y te falta wave clear más omnivamp.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs comps lentos sin burst. Más ability haste = más fears con **R** y más spam de **Q** en peleas largas.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs equipos muy AP (Brand + Karthus + Vladimir). Magic resist en stacks y la passive de Move Speed son doble valor con Warpath: más velocidad = más AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — cuando el equipo enemigo te focalizan en cada engage. Te revive para limpiar el fight después de que tu equipo ya gastó habilidades.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el CC pesa más que el daño auto-attack.

**Skill order:** Sube **Q** primero al máximo (waveclear, jungle clear, DPS principal), **E** segundo (más duración de ghost y menos cooldown para ganks), **W** al final. Pon punto en **R** a niveles 6, 11, 16.

**Runas:** Primario **Sorcery** con **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush se activa con 3 hits separados de habilidad en 4 segundos — fácil en Hecarim con **E**-auto-**Q** en gank, y el burst de Move Speed se convierte en AD vía Warpath. Secundario **Resolve** con **Bone Plating** y **Overgrowth**. Usa Conqueror en Precision si el equipo enemigo va lleno de tanks de frontline (quieres daño creciente en peleas largas).

## Matchups clave

- **Lillia:** Su **R** te rootea desde una mapa de distancia. Hazla quemar caminando hacia delante a HP bajos y commitea solo después de que la haya usado. Si te alcanza, tu engage se cierra durante 14+ segundos.
- **Kha'Zix:** Invasor fuerte y assassin. Trackealo — si su blue buff no está a las 2:30, está en tu jungle. Pathing lejos de su ruta esperada hasta el nivel 4, luego agrúpate con tus laners el resto del early.
- **Jarvan IV:** Matchup en espejo. Quien ulta primero suele ganar el trade. Mantén wards en su jungle para detectarlo y avisar a tus laners; nunca te agrupes con aliados en zonas estrechas si su **R** está up.
- **Sejuani:** Tank jungler que escala. La out-clearras y la out-pressionas en early. Fuerza fights antes del minuto 20; en late sus stuns y su peel de equipo baten tu dive en solitario.
- **Master Yi:** Cuidado con tu **R**. Yi puede cleansearte el fear con la cadena **Q**-**Alpha Strike** en invuln. Guarda **R** para cuando su **Q** esté en cooldown — espera a verla usar en una wave o un campo, luego engaga en los siguientes 12 segundos.

## Power spikes y condiciones de victoria

- **Nivel 3 (después del primer clear completo):** primera ventana de gank. Con un punto en **Q**-**E**-**W** puedes full-comboar a un target que se exponga. Las peleas en el Crab ya son reales — llegas antes que la mayoría de junglers.
- **Nivel 6:** Onslaught of Shadows online. Flanks cross-mapa y dives a torre se vuelven posibles. Si una side lane tiene prio, **R** desde el fog y fuerza la pelea.
- **Stridebreaker completado (~ minuto 10-12):** flip grande de tempo. La active Halting Slash te deja pegado a targets que huyen sin quemar **E**. Push a Drake o Herald justo después.
- **Sterak's Gage online (~ minuto 22-25):** te conviertes en el engage que sobrevive los primeros 2 segundos del fight. Busca picks (eliminar a un enemigo aislado fuera del teamfight) sobre el ADC enemigo o el mid laner alrededor de objetivos.

## Errores comunes

- **Spamear Q sin auto-attacks entre cast y cast.** Warpath te da AD desde la velocidad — deja que entren los autos en los huecos. Animation cancel: casteas **Q**, hard-clic a un auto, casteas **Q** otra vez.
- **Ultar contra la frontline.** **R** es una herramienta de flank, no de engage frontal. Fearear al tank enemigo lo manda de vuelta con su ADC para peel. Camina alrededor del fight (usa visión o fog) y luego **R** directo a los carries.
- **Engagear sin tu equipo en rango de visión.** Todo el daño de Hecarim es "knockear de vuelta al equipo que hace follow-up". Si tus laners no están a 2 segundos de catch-up, la kill no la coge nadie y tú mueres en su jungle.
- **Buildear full damage con un score 1/3.** Cuando vas detrás y no estás snowballeando (snowball = ventaja creciente que se autoalimenta), Sterak's más Sundered Sky te mantienen útil como engage. Hacer Ravenous Hydra second en una partida perdida te convierte en un dive bot de 2 golpes.
- **Gastar el ghost de E en minions.** **E** te deja atravesar unidades solo durante su ventana corta. Resérvalo para cuando tengas que pasar por una wave o una ward — no lo tires on-cooldown en la jungle.

## Consejo avanzado

Usa una rotación "fake-flank" alrededor de los objetivos de mid game. Camina en visión por tu propia jungle para que el enemigo te trackee en su minimap, luego retírate inmediatamente al fog of war (las zonas oscuras que no ves) y haz el rodeo largo. Cuando el enemigo se haya rotado pensando que sigues donde te vio por última vez, **R** desde el lado que no esperan. El truco depende del Move Speed puro de Hecarim: la mayoría de junglers no puede hacer esta jugada porque no cubre la distancia a tiempo. Con Phase Rush más Stridebreaker active, tú sí.
