---
title: "Kindred Jungle Build & Guía — Patch 16.9"
slug: "kindred-jungle"
language: "es"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Guía Kindred jungle para League of Legends Patch 16.9: caza de Marks, build on-hit, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "Cada 4 minutos aparece un Mark sobre un enemigo aleatorio (champion o jungle camp). Matarlo da un stack permanente: bonus de AS, AD y rango de auto-attack. Es el plan de juego."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Dash corto + 3 auto-attacks rápidos a los objetivos más cercanos. Resetea el timer del auto. Sirve para clear, reposicionar y encadenar autos en peleas."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf ataca un área ~8s, da AS y revela camps. Lamb acumula stacks moviéndose y atacando; al máximo carga un auto que la cura. Toggle para clear y sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot que ralentiza al objetivo. Tras 4 autos sobre él, el siguiente ataque añade daño según HP perdido. Herramienta de burst sobre champions bajo el 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Crea una zona sagrada: ninguna unidad dentro (aliados Y enemigos) puede bajar de 1 HP durante la duración, luego cura al final. Save tool reactivo. Nunca pre-castear."
      dd_spell_id: "KindredR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra ultis lock-on (Malzahar R, Skarner R, Warwick R) — el spell shield bloquea el cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra cadenas de hard CC (Leona + Lissandra, Sett R + Ashe R) — el activo cleansa y permite reposicionarse"
    - dd_id: "6676"
      name: "The Collector"
      against: "vas adelante y el rival no apila armor — execute bajo 5% HP cierra leads"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con curas (Aatrox, Soraka, Dr. Mundo) — grievous wounds corta su sustain a la mitad"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra 3+ champions con hard CC (Leona + Lissandra + Sejuani) — tenacity acorta stuns y roots"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Stackea Marks pronto. Cada Mark completado da AS + AD + rango permanentes — la ventaja hace snowball (kills → stats → más kills) hasta un flanker de 3 ítems que out-kitea a todo brawler."
  weakness: "Squishy, sin hard CC, R reactiva con CD largo. Junglers con hard CC que invaden al level 2-3 (Lee Sin, Xin Zhao, Elise) te matan antes de un solo Mark; tanks con on-hit mitigation ignoran tu DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades dispara los 3 primeros autos a velocidad máxima — exactamente los que necesitas para cerrar la cadena de Mounting Dread. Sudden Impact premia el dash de Q con lethality, Sixth Sense revela wards, Treasure Hunter convierte mark kills en oro extra."
    secondary_rationale: "Precision como secundario: Triumph rembolsa HP en takedowns (quedas bajo tras los 4 autos), Coup de Grace añade 8% de daño bajo 40% HP — sinergia con el golpe HP-faltante del 4° auto."
    secondary_alternative: "Contra comps AP burst (Diana jungle + Syndra mid + Brand support), cambia Precision → Resolve con Second Wind + Revitalize: sustain en tu jungla y una R que cura más al final."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Junglers y carries late-scaler con early débil"
      reason: "Quieren farmear hasta 3 ítems antes de moverse; tú puedes mark-huntear en su jungla y bullear sus camps tempranos. Cada Mark completado amplía el gap antes de su spike."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Marksman backline squishy sin escape integrado"
      reason: "Gank cross-map: la E mete slow suficiente para encadenar 4 autos y disparar el golpe HP-faltante de Mounting Dread, y no tienen dash que rompa la cadena."
    - examples: ["maokai", "nasus"]
      archetype: "Tanks lentos sin dash"
      reason: "No pueden cerrar la distancia sobre una Kindred kiteando. Auto-atacas desde fuera del rango de su CC mientras Wolf's Frenzy los desgasta pasivamente."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers de invade early con hard CC y lockdown"
      reason: "Entran en tus camps al level 2 con kick, knock-up o stun y te matan antes de un solo Mark. No tienes dash que rompa lock-on y tu R aún no está."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut tanks con mitigación o inmunidad on-hit"
      reason: "El shield W de Sion y la passive heal de Mundo anulan tu DPS auto-attack — tu único daño es on-hit, así que cualquier cosa que rompa ese loop te neutraliza."
    - examples: ["zed", "talon"]
      archetype: "Burst assassins que te deletean antes de que la R cubra"
      reason: "Eres squishy sin hard CC; te matan en la ventana de 0.5s antes del cast de Lamb's Respite. La R no bloquea el daño, solo la muerte — esperan que pase y vuelven a engager."
---

## Resumen

Kindred es un marksman que caza en la jungla. Lamb dispara, Wolf muerde, y todo el kit gira en torno a una mecánica que ningún otro champion tiene: **Mark of the Kindred**. Cada 4 minutos aparece un Mark sobre un enemigo aleatorio — un champion o un jungle camp — y matarlo da un stack permanente de attack speed, attack damage y rango bonus de auto-attack. Stackea 4 marks y tu rango pega un salto; stackea 8 y empiezas a out-tradear marksmen desde fuera de su propio rango de auto.

Tu plan de juego se divide en dos mitades. Early game eres un **mark hunter**: lees el icono del Mark en la minimap, decides si vale la pena disputarlo (tuyo = siempre vas, suyo = cambias presión por arrebatárselo) y curvas tu pathing alrededor. Mid game te vuelves flanker — Q-dash detrás de la backline rival (los carries que están detrás de los tanks), E sobre el carry, cadena de 4 autos, y Mounting Dread ejecuta con el golpe HP-faltante. Late game eres un skirmisher hyper-scaling que out-kitea a todo brawler del juego (kite = retroceder mientras sigues atacando, así el enemigo nunca te alcanza).

## Build Recomendada

**Starting items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** para clear más rápido (eres ranged, debes coger Hailblade — Emberknife es solo melee) más ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (en orden):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade desde Hailblade (auto-evoluciona sobre el minuto 3-4 al acumular suficiente XP). Companion para AD skirmishers: breve burst de movement-speed saliendo de la maleza, perfecto para perseguir un Mark o cerrar un gank desde fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — cada tercer basic attack hace true damage bonus. El true damage ignora la armor, así que atraviesa la itemización tank de enemigos que no podrías reventar de otra forma.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots de attack speed flat. Default; cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo si el equipo rival tiene 3+ hard CC.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — añade dos flechas extra a cada auto. Triplica el clear de jungla y reparte el DPS Wolf-and-Lamb sobre 3 objetivos en teamfight.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit (daño mágico extra añadido a cada basic attack) + magic resist. Doble función: lifeline contra AP burst (Diana, Syndra, Brand) y shred contra backlines de bajo magic resist.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — rango bonus en el disparo energizado, encima del rango que stackeas con Marks. Late game auto-atacas a los carries desde el borde de la pantalla mientras su equipo persigue nada.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra ultis single-target lock-on (Malzahar, Skarner, Warwick). El spell shield se come el cast y la cadena no arranca.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra cadenas de hard CC. El activo cleansa todo CC incluyendo suppression — lo pulsas en el instante en que Skarner te tira o Sett ulti aterriza.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — cuando vas adelante, ejecuta bajo el 5% HP. Combina limpio con el golpe HP-faltante de la E y el cadáver da oro extra.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con sustain alto (Aatrox, Soraka, Dr. Mundo). Aplica grievous wounds cortando sus curas a la mitad en peleas extendidas.

**Boots:** Berserker's Greaves de default. Mercury's Treads solo contra hard CC pesado.

**Skill order:** Maxea **Q** primero (clear y daño por dash), **E** segunda (más burst en el golpe HP-faltante por rank), **W** última (el AS y la heal escalan bien a rank 1). **R** a 6, 11, 16.

**Runes:** Primary **Domination** con **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Secondary **Precision** con **Triumph** + **Coup de Grace**. Hail of Blades es icónica en Kindred porque lleva los 3 primeros autos a velocidad máxima — exactamente los que necesitas para arrancar la cadena de Mounting Dread.

## Matchups clave

- **Lee Sin:** Pierde el level 1 contra ti, pero al level 2-3 su combo Q-W-Q-kick te delete antes de que tengas la R. Evita su side hasta el level 4, luego busca un counter-gank cuando él committe Q sin W lista. Trackea el CD de su W — sin ella no tiene salida del fight.
- **Karthus:** Pure scaler. Invade su red side al minuto 3 y róbale un buff; no puede pararte, y la pérdida de tempo retrasa su spike de level 6. Tras 3 ítems él gana, así que cierra antes del minuto 18.
- **Master Yi:** Hay que matarlo antes de ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**. Guarda la E para la ventana de salida de su Q-dash — al reaparecer come el slow y tu equipo encadena CC. Tras su primer ítem, nada de 1v1.
- **Diana:** Ella quiere divear tu backline; tú la suya. Guarda la **R** para cuando aterrice su R sobre tu carry — la zona sagrada mantiene al carry sobre 1 HP a través del burst, y tu equipo la mata en la ventana de recovery.
- **Xin Zhao:** Knock-up + lock-down te mata en 1.5 segundos. Nunca pathees adyacente a sus camps al level 2; agrupa con un laner para los buffs hasta tener 2 Marks de rango bonus. Tras 3 ítems le out-kiteas con resets de Q.

## Power spikes y condiciones de victoria

- **Level 3:** Kit completo. Tu pattern de gank es **E al objetivo -> 3 autos con Q-dash a media cadena -> el 4° auto dispara el burst HP-faltante**. Sin R, no committees profundo en un gank de level 3 — solo a Flash-distance.
- **Primer Mark stack (~ minuto 5):** AS, AD y rango bonus permanentes. Cada Mark completado después amplía el gap. Pelea por los Marks aunque sean neutros — la ventaja estadística pesa más que un trade aislado (un trade = un intercambio breve de daño en una skirmish).
- **Level 6:** **Lamb's Respite** desbloqueada. Desde aquí puedes salvar a un compañero de una kill garantizada. El truco es **nunca pre-castear** — la dropas el instante en que ves al enemigo committear la spell de kill, si no la zona se acaba antes de que se resuelva la threat.
- **3 ítems + bonus de rango 4-Mark (~ minuto 22):** Out-rangueas a todo marksman del juego. En teamfight te quedas detrás de tu frontline, quieto, y autos hasta que todo muera. Es tu cliff de scaling — agrúpate con el equipo, no splitpushes (no farmees una side lane solo).

## Errores comunes

- **Pre-castear Lamb's Respite.** **R** es reactiva, no proactiva (la pones DESPUÉS de leer la threat, no antes). Dropa el segundo en que la ulti enemiga impacta, no cuando se acercan. Las R precasteadas no salvan a nadie y te quitan tu único save tool por 110 segundos.
- **Ignorar el icono del Mark.** La minimap muestra el Mark con una calavera. Los jugadores que no la trackean pierden la identidad entera del champion. Abre la mapa cada 30 segundos y pregúntate: "¿es mi Mark para coger o el suyo para negarles?".
- **Q-dashear al equipo enemigo sin salida.** **Dance of Arrows** tiene 12 segundos de CD a rank 1. Si Q in para chase una kill y te CCean, no tienes escape. Q siempre con un muro detrás de la trayectoria del dash, así la siguiente Q (tras CDR) te bouncia fuera.
- **Olvidar el requisito de 4 autos de Mounting Dread.** **E** hace poco daño on-cast pero el payoff real es el 4° auto sobre el objetivo ralentizado. Si E y solo metes 2 autos, el burst HP-faltante no salta. Comprométete a la cadena completa o no castees E.
- **Guardar la R para el momento perfecto que nunca llega.** Una R "desperdiciada" que salva a un aliado 3 segundos es mejor que una R perfecta que nunca pulsas por aguantarla demasiado. En la duda, dropa.

## Consejo avanzado

El **R-bait** sobre objetivos. En Drake o Baron con tu equipo a HP bajo, dropa **Lamb's Respite** SOBRE el objetivo en vez de sobre tu equipo. Toda unidad dentro no puede bajar de 1 HP — incluido el objetivo. Tu equipo smitea o termina el objetivo durante la zona, y cualquier enemigo que entre tampoco puede matarte, así que o suelta la disputa o se queda pillado cuando la zona termina y tu equipo está full HP por la heal de cola de la R. Convierte un Drake fight 50/50 en objetivo + double-kill garantizado cuando el equipo rival no lee la jugada.
