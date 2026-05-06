---
title: "Kog'Maw Bot Build & Guía — Patch 16.9"
slug: "kog-maw-bot"
language: "es"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Guía Kog'Maw bot lane League of Legends Patch 16.9: build hyper-carry on-hit, matchups clave, power spikes, errores comunes y un consejo de posicionamiento."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "Al morir, Kog'Maw camina como bomba durante 4 segundos y luego explota con true damage. Una amenaza de último aliento, nunca un plan A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Proyectil lineal: daño mágico y shred de Armor y Magic Resist del objetivo unos segundos. Pasiva: Attack Speed bonus permanente."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Auto-buff (~6s) que extiende el rango de los autoataques y añade daño mágico en % de HP máxima on-hit. Es el corazón de cada teamfight."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Skillshot lineal: daño y rastro que ralentiza. Herramienta de disengage y setup para autoataques durante la W."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "Artillería AOE de muy largo rango sobre área en el suelo. CD bajo, coste de maná que sube con cada cast. Poke, wave clear, executes cross-map bajo 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "contra bots de poke pesado: extiende el rango de la primera auto y golpeas desde fuera de su ventana"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra hard CC single-target que te bloquea la W (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra comps de dive pesado (Malphite + Yasuo, Hecarim): la resu convierte un error en dos contribuciones"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontline con 3000+ HP (Sion top, Cho'Gath, doble tanque): armor pen + W % HP funde super-tanques"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con sustain pesada (Soraka, Aatrox, Dr. Mundo): Grievous Wounds parte la cura 5 segundos"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Sobrevive al mid game detrás de tu front line, alcanza el power spike de 3 ítems on-hit hacia el minuto 25 y funde al equipo rival en las ventanas de W durante peleas por objetivos."
  weakness: "Sin dash y con rango base de auto de solo 500. Hookers, asesinos y divers borran a Kog'Maw antes de que vuelva la W si su support está fuera de posición."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Lethal Tempo: stackea durante la W superando el cap de 2.5 attack speed; cada ventana W se vuelve un burst que parte tanques. Triumph cura en takedown, Legend: Alacrity da AS, Coup de Grace +8% bajo 40% HP — los objetivos que la R remata."
    secondary_rationale: "Sorcery secundario: Transcendence sube ability haste para tener W y R más a menudo en peleas largas, y Scorch añade poke desde la R en niveles 1-5 para hacer menos miserable la lane phase de un campeón sin escape."
    secondary_alternative: "Contra supports de hook o burst (Blitzcrank, Thresh, Pyke), cambia Sorcery por Resolve con Bone Plating (cap de daño en los 3 primeros golpes tras ser alcanzado) y Overgrowth (HP máxima bonus): pierdes algo de scaling pero sobrevives hasta el primer ítem."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "Tanques y bruisers que apilan HP"
      reason: "Bio-Arcane Barrage hace daño mágico en % de HP máxima por auto: cuanta más vida apilen, más rápido los borras. Tanques sin dash no pueden castigarte durante tu ventana de W."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Backline scalers inmóviles"
      reason: "Living Artillery (R) golpea objetivos en el suelo a rango extremo. Backliners que necesitan estar quietos para lanzar su hechizo principal reciben chip desde fuera de pantalla y no tienen tool de escape para devolvértelo."
    - examples: ["malphite", "amumu"]
      archetype: "Frontline de engage estacionario"
      reason: "Tras su R, tu equipo tiene 2-3 segundos de fuego libre — exactamente lo que dura un ciclo W completo sobre el frontline lockdown antes de que recupere."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports de hook con lockdown single-target"
      reason: "Kog'Maw no tiene dash, ni blink, ni flash en la E. Un hook en lane equivale a una muerte: su única escape es Flash, un summoner de 5 minutos de cooldown."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Bot laners de poke a largo rango"
      reason: "Su rango de auto supera los 500 base de Kog'Maw sin W: te hostigan gratis en lane y te fuerzan a un early game pobre de maná."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Asesinos de roam"
      reason: "Estos campeones llegan a la back line con dashes, saltos o resets en stealth. Una vez pasan tu front line durante una ventana W, ningún ítem defensivo salvo Guardian Angel te salva a tiempo."
---

## Resumen

Kog'Maw es un marksman hyper-carry construido en torno a una sola ventana corta y decisiva: el buff de **Bio-Arcane Barrage (W)**. Durante unos seis segundos te conviertes en el auto-attacker con más rango del mapa, cada golpe hace daño mágico en porcentaje de HP máxima del objetivo, e ítems on-hit como Wit's End y Blade of The Ruined King transforman esa ventana en una tormenta que borra tanques. Fuera de la W tienes un rango base de auto de 500 — corto para un marksman — sin dash, sin blink. El precio de ser un monstruo late game es ser uno de los objetivos favoritos de los lane bullies agresivos durante los primeros quince minutos.

El game plan es lineal: sobrevive a la lane detrás de un support enchanter (Lulu, Janna, Yuumi, Soraka), farmea con paciencia, alcanza tus tres ítems on-hit hacia el minuto 25 y juega cada teamfight detrás de tu front line para que tu ventana W quede sin contestar. **Living Artillery (R)** amortigua el dolor del early game: te da poke gratis y forma de limpiar oleadas desde rango seguro; el coste de maná sube rápido al spammearla, así que guárdala para asegurar kills o gestionar timers de oleada, no para hostigar.

## Build Recomendada

**Starting items:** Doran's Blade + Health Potion. Doran's Shield es aceptable contra un matchup de poke pesado (Caitlyn, Varus), pero Doran's Blade es el default para acelerar la rampa on-hit.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primer ítem: attack speed y proc de true damage al tercer golpe; sinergia directa con la ventana W on-hit.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bonus attack speed; las únicas botas razonables para un hyper-carry que vive en el cap de attack speed.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — daño mágico on-hit más Magic Resist; el mejor ítem único contra comps AP-heavy y amplifica el daño mágico de tu W.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — los rayos aplican on-hit a dos objetivos extra: convierte tu W en wave clear AOE y en presión AOE de teamfight.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — daño on-hit en % de HP actual, lifesteal y activo que ralentiza; es el dueling tool que cambias por ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** si necesitas escudo en vez de lifesteal.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — contra bots de poke pesado (Caitlyn, Varus). La primera auto energized extiende tu rango efectivo W-auto: chipeas desde fuera de su ventana de poke.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra hard CC single-target que te bloquea la W (Ashe R arrow, Morgana Q snare, Malzahar R suppression). El activo cancela el CC con un botón.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra comps de dive pesado (Malphite + Yasuo, Hecarim). La resu convierte un error de posicionamiento en dos contribuciones de teamfight: justo lo que necesita un AOE damage dealer estacionario.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra frontline con 3000+ HP. La armor pen más el shred mágico % HP máxima de tu W borra super-tanques más rápido que cualquier ítem de pura attack speed.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con sustain pesada (Soraka, Aatrox, Dr. Mundo). Grievous Wounds parte su cura por 5 segundos; sin él, el daño de tu W se cura más rápido de lo que lo aplicas.

**Boots:** Berserker's Greaves es la única elección. Mercury's Treads es incorrecta sobre Kog'Maw — el attack speed que pierdes cuesta más que la tenacity que ganas.

**Skill order:** Maxea **W** primero (es la identidad del kit), **Q** segundo (shred de Armor y Magic Resist más passive attack speed), **E** último (solo utility). Pon un punto en **R** en niveles 6, 11, 16.

**Runes:** Primaria **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundaria **Sorcery** con **Transcendence** y **Scorch**, o **Resolve** con **Bone Plating** y **Overgrowth** contra supports de hook o burst.

## Matchups clave

- **Caitlyn / Varus:** Bot laners de poke a largo rango. Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, escóndete tras la oleada y farmea bajo torre hasta nivel 6. Pide a tu support ward de río y tri-bush; su presión cae al completar ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**.
- **Draven:** Te supera en cualquier all-in (intercambio total hasta la kill) pre-6. Iguala su nivel en lane priority, nunca cambies autos en espacio abierto y usa la **E** para ralentizarlo si te corre encima. Sus hachas lo obligan a posicionarse adelante — castígalo con poke de **R** tras el 6.
- **Lucian:** Evita los trades de auto-attack (su pasiva double-shot gana trades cortos). Acércate solo a last-hit y usa la ventana W tras el minuto 8 para outrange-arlo 100+ unidades respecto a su **E** dash.
- **Jhin / Senna:** Matchups safe. Ninguno tiene dash y los dos quieren posicionarse a largo rango, pero ninguno aguanta el burst en % HP máxima de tu W una vez tienes un ítem. Busca el all-in cuando tu support tenga un CC listo y tu W esté online.
- **Ezreal:** Skill-matchup. Pokea con la **Q** pero cada cast lo deja quieto. Acércate durante la animación de su **Q** para last-hit, guarda la **E** para cuando él use su **E** dash y suelta el slow, y ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** es bueno si su equipo tiene follow-up CC tras su ulti.

## Power spikes y condiciones de victoria

- **Nivel 3:** Con un punto en cada habilidad tienes el kit de poke completo (slow con **E** → auto durante **W** → **Q** shred). Es tu primera ventana creíble de all-in si tu support tiene un CC.
- **Nivel 6:** La primera **Living Artillery** desbloquea poke a toda la lane y last-hit secures desde 1300+ unidades. También desbloquea wave-clear desde el otro lado del río cuando estás pusheado.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves completados (~ minuto 14-16):** primer power spike serio en teamfight. El proc de true damage al tercer golpe se combina con el daño % HP máxima de la W para amenazar al instante a cualquier squishy que entre en rango.
- **3 ítems on-hit online (~ minuto 25-28):** Con ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**, tu ventana W borra las barras de HP de todo el equipo rival en seis segundos. Fuerza Baron, Atakhan y Elder Drake aquí: este es el momento alrededor del cual tu equipo debe jugar.

## Errores comunes

- **Lanzar W on cooldown para trades.** Cada W que quemas en lane es una W que no tienes para el siguiente teamfight. Resérvala para all-ins committed, scuttle skirmishes y peleas por objetivos, no para poke; **R** es tu poke tool.
- **Spammear R hasta quedarte sin maná.** Cada Living Artillery castada en una ventana corta cuesta más maná que la anterior. Tras 3 casts en 6 segundos pagas 100+ maná por shot. Limita el spam a 2 seguidas salvo que estés cerrando una kill.
- **Quedarse al rango máximo de W durante una pelea.** El máximo rango te saca del peel de tu support. Quédate a una distancia de un auto-attack detrás de tu front line, no en su punta — los asesinos (cualquier campeón que funde a un objetivo en 1-2 segundos) te apuntan en cuanto ven tu sombrero asomar.
- **Pickear Kog'Maw sin support enchanter.** Lulu, Janna, Yuumi y Soraka no son preferencias — son el contrato. Con un support de hook o engage no tienes forma de sobrevivir a la lane phase y escalas hacia una pelea a la que nunca llegas.
- **Olvidar el shred de la Q.** Golpear **Q** antes de la W sobre un tanque corta su Armor y Magic Resist durante varios segundos. Abre siempre el all-in con **Q** cuando estés en rango; el daño on-hit que sigue cae como si el rival tuviera un ítem defensivo menos.

## Consejo avanzado

Bufferiza la activación de **Bio-Arcane Barrage (W)** en el mismo input que tu auto-attack de last-hit. Pulsar W un instante antes de la auto cancela el wind-up lento de Kog'Maw y arranca la ventana W 0.1-0.2 segundos antes — sobre un buff de seis segundos eso es aproximadamente un auto-attack extra. En teamfight es la diferencia entre meter cuatro autos durante W sobre el frontline rival y meter cinco antes de que el dive inicial te alcance; es la mecánica con mejor relación valor/esfuerzo para entrenar en practice tool contra una sagoma.
