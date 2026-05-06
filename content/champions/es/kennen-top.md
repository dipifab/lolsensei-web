---
title: "Kennen Top Build & Guía — Patch 16.9"
slug: "kennen-top"
language: "es"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Guía de Kennen top para League of Legends Patch 16.9: starter, build AP bruiser, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Cada habilidad de Kennen aplica un stack de Mark al objetivo. Tres stacks lo aturden. Es el motor del kit: cada combo busca el triple stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Skillshot lineal que hace daño mágico y aplica 1 stack de Mark. El poke a distancia y el primer stack fácil sobre el objetivo."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Pasiva on-hit (efecto al golpear): cada 5 autos hace daño mágico extra y aplica 1 Mark. Activa: detona un burst mágico sobre todos los enemigos cercanos que ya tengan Mark."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Dash corto que atraviesa unidades, aplica 1 Mark y devuelve energy al impactar. Al terminar, Kennen gana attack speed unos segundos. Herramienta de movilidad y reposicionamiento."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channel AOE alrededor de Kennen. Cada tick hace daño mágico y aplica 1 Mark a los enemigos dentro. Con enemigos agrupados aturde al equipo entero en 2 segundos."
      dd_spell_id: "KennenShurikenStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "contra peleas largas y bruisers top (Sett, Darius, Mordekaiser): sustain en fight más true damage"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "contra backline squishy sin Magic Resist: penetración mágica extra bajo 35% HP encaja con los finishers de R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "en cuanto un priority target enemigo compre un item de Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra enemigos con mucho healing (Vladimir top, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lanzar Flash + R sobre la back line (la fila de ADC y mages enemigos) en teamfight para triple-stackear la pasiva en varios objetivos. Aturdimiento AOE + W detonate decide el fight."
  weakness: "Sin CC point-and-click salvo R, y la R es un channel al que tienes que comprometerte: aturdimientos instantáneos o knock-ups (Pantheon W, Camille E2) cancelan la ulti antes de que aterricen los stacks."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute proca con Q + W detonate + auto, burst en cada triple stack. Taste of Blood da sustain en línea, Sixth Sense marca wards enemigas en side lanes (clave para el flank), Ultimate Hunter recorta el cooldown de R."
    secondary_rationale: "Resolve secondary: Kennen quiere zambullirse en cuerpo a cuerpo con la R, así que Second Wind te regenera HP mientras encajas poke en línea y Bone Plating absorbe los tres primeros golpes cuando comprometes un all-in (intercambio total hasta la kill)."
    secondary_alternative: "Contra poke ranged duro (Vladimir, Lillia top), cambia Resolve por Sorcery con Nimbus Cloak (movement speed extra tras un summoner spell, para lanzar R más rápido) y Transcendence para ability haste."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Bruisers melee sin gap-closer"
      reason: "El rango de auto-attack de Kennen (~550) supera la velocidad de caminata de estos campeones. El poke con Q y el reposicionamiento con E permiten farmear desde fuera de su threat range hasta el power spike de nivel 6."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpushers sin CC fiable"
      reason: "No tienen forma de bloquearte para impedir el channel de la R. Cuando Kennen tiene 1-2 items, cada teamfight donde flanquea es un aturdimiento de 3 stacks sobre varios enemigos: ningún split iguala ese impacto solo en una side lane."
    - examples: ["udyr", "olaf"]
      archetype: "Juggernauts de corto alcance"
      reason: "Los kiteas con el dash de E y la pasiva on-hit de W. Su stickiness depende de pegarse a ti en cada paso, y tu rango más el refresh del dash los mantiene fuera del alcance de sus autos."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Bruisers con CC point-and-click"
      reason: "El aturdimiento de Pantheon W (objetivo único, instantáneo) o el root del segundo casteo de Camille E cancelan tu R a mitad de channel: pierdes el aturdimiento AOE antes de que aterrice un solo stack, convirtiendo el engage en una ulti tirada."
    - examples: ["vladimir", "lillia"]
      archetype: "Top laners ranged con sustain"
      reason: "Tienen más rango que tu Q en los primeros 6 niveles y se curan del poke. Sin gap-closer, Kennen pierde cualquier intercambio corto y se queda atrás de CS hacia el minuto 8."
    - examples: ["sion", "galio"]
      archetype: "Tanks con Magic Resist y pasivas tipo cleanse"
      reason: "La pasiva de muerte de Sion y el escudo magic damage de la W de Galio neutralizan tus ventanas de burst. Tres stacks de Mark siguen aturdiendo, pero la W detonate hace la mitad de daño en cuanto stackean MR."
---

## Resumen

Kennen es un yordle ranged AP que juega top como flank engager en los teamfights (el jugador que rodea la pelea para entrar por un lado que los enemigos no vigilan). Todo el kit gira en torno a una mecánica: la pasiva **Mark of the Storm (P)** apila tres veces y aturde. Cada habilidad — **Q**, **W** activa, dash de **E**, cada tick de **R** — pone 1 stack, así que un engage limpio aturde al equipo entero en 2 segundos. Tiene una buena lane phase gracias a su rango de auto-attack ~550 que supera al de la mayoría de bruisers, pero su identidad se desbloquea en nivel 6: es EL flank engager top que da la vuelta a los teamfights mid-late.

Su game plan es simple de describir y exigente de ejecutar: farmear seguro con el poke de **Q** (daño a distancia para bajar HP sin comprometerte al fight) y la pasiva on-hit de **W** (efecto que se activa cada varios autos), mantener prio para los objetivos, luego **Flash + R** sobre la back line (la fila de carries squishy: ADC y mages, mucho daño y poca vida, detrás de los tanks). La skill expression vive en dos puntos: gestión de la energy (Kennen quema energy rápido y sin ella no castea) y elegir el ángulo correcto en el teamfight para que tu channel de **R** no sea interrumpido por un aturdimiento point-and-click (un aturdimiento que el enemigo aplica con un clic, sin apuntar).

## Build Recomendada

**Starting items:** Doran's Shield + 2 Health Potions. Doran's Ring es aceptable si la línea no tiene auto-attack harass y quieres más regeneración de energy.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — el burn (daño aplicado a lo largo de varios segundos, no instantáneo) escala con la naturaleza multi-objetivo de **R**. Cada tick sobre cada enemigo proca el burn, derritiendo las pools de HP de los tanks.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana para los squishies de la back line a los que quieres aturdir y borrar.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — te compra una stasis tras **Flash + R**, así el equipo enemigo quema cooldowns sobre un objetivo congelado mientras tus stacks de aturdimiento terminan de aterrizar.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador AP late game. El burst de **R** que produce one-shotea a los squishies que no han comprado Magic Resist.

**Situational items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — sustituye a Liandry's contra top laners bruiser (Sett, Darius, Mordekaiser). Sustain en fight (curación durante la pelea) más conversión a true damage te permite sobrevivir a la segunda ola inevitable de melees encima de ti.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — contra back line squishy sin Magic Resist. La pasiva HP-threshold (penetración mágica extra bajo el 35% HP) encaja con los finishers de **R**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en el momento en que un priority target enemigo compre un item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra enemigos con mucho healing (Vladimir top, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** es el default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** es aceptable contra 2+ amenazas mágicas con hard CC.

**Skill order:** Maxa **Q** primero (mayor base damage, cooldown más bajo: tu poke principal y primer stack en cada combo), **W** segundo (más burst dentro del fight), **E** al final. Pon un punto en **R** en niveles 6, 11 y 16.

**Runes:** Primary **Domination** con **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** con **Second Wind** y **Bone Plating** para durabilidad en línea.

## Matchups clave

- **Garen:** Lo superas con el rango de las autos. Pokea con **Q**, no dejes que su **E** (la giratoria) te alcance, y usa el dash de **E** a través suya cuando comprometa la **Q** silence. Lane ganable desde nivel 3.
- **Sett:** Quédate fuera del rango de la barra de carga de su **W** — cada auto que encajes la rellena. Intercambia solo cuando su **W** esté vacía; dashea a través suya para romperle el facing si te cae la **E** stun.
- **Pantheon:** Matchup más duro. Su **W** es point-and-click y te cancelará la **R** en cada fight. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes del segundo item, y no engagees con **R** hasta que su **W** esté en cooldown.
- **Vladimir:** Lane larga, pierdes CS. Lleva Doran's Shield + Second Wind, guarda la **Q** como punish a su pool y pide presión de jungle antes del 6 porque no ganas un trade extendido.
- **Mordekaiser:** Matchup parejo que pivota sobre la **R**: su death realm cancela el peel de tu equipo, pero tú llevas aturdimiento AOE. Si su **R** está up, no engagees; si está en cooldown, puedes lanzar la tuya en su back line.

## Power spikes y condiciones de victoria

- **Nivel 6:** Primer **Slicing Maelstrom**. Combinado con **Flash**, este es el momento en que Kennen se vuelve un campeón que decide partidas — Flash + R sobre un equipo agrupado aturde a todos en rango.
- **Nivel 9 (Q maxed):** **Thundering Shuriken** tiene 4 segundos de cooldown a rank 5. La lane phase y el farm en side lane se vuelven triviales; puedes incluso pokear torres con **Q** seguro.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 14-16):** Primer spike de teamfight. Agrúpate con tu equipo para cualquier drake; tu **R** con 2 items borra supports y ADCs squishy.
- **Tres items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** Umbral de burst superado. Combo **R** + **W** detonate one-shotea cualquier back line que no haya construido Magic Resist. Fuerza Baron y los fights tardíos por objetivo.

## Errores comunes

- **Engagear la R sin Flash up.** Kennen no tiene gap-closer hacia la back line. Sin **Flash + R** solo cazas la front line (los tanks y bruisers que abren el fight) — y aturdir a su tank no te da nada mientras sus carries te kitean (se mueven hacia atrás mientras atacan, manteniéndote fuera de su rango de auto) hasta matarte.
- **Quemar toda la energy en línea.** Kennen no tiene mana, pero tiene energy que regenera lenta. Spamear **Q** sobre la oleada y cuando llegue el jungler enemigo estarás vacío. Guarda siempre ~50 energy para el dash de **E** en huida.
- **Maxear W primero.** El daño activo de la **W** es más alto que el de la **Q**, pero la **Q** tiene 4 segundos de cooldown a rank 5 contra 6 de la **W**. **Q** maxed primero significa más stacks por minuto y más poke sostenido; la **W** queda a rank 1 hasta nivel 8.
- **Auto-cancelarte la R saliéndote del anillo.** La **R** es un channel anclado a tu campeón. Si sales del rango del teamfight, los ticks dejan de impactar a los enemigos. Quédate en el centro del fight, no en el borde — Zhonya's existe exactamente para esto.
- **Olvidar la pasiva on-hit de la W.** Cada 5 autos dispara daño mágico bonus más un Mark gratis. En un trade 1v1, intercala 2 autos entre **Q** y **E** para baitear al rival a un aturdimiento que no esperaba.

## Consejo avanzado

El flank más fuerte de Kennen es lo que los pros llaman "blind ult": desde fog of war (zona no visible), Flasheas directamente al cluster enemigo más grande y lanzas la **R** antes de que vean tu modelo. Su ventana de reacción es la pista de audio de la **R** más el render de tu personaje — unos 0.4 segundos — más corta que el tiempo necesario para salir del rango del channel. Para preparar esto, tu equipo debe estar ya en fight (o aparentarlo), así los enemigos miran al frente y tú das la vuelta por la jungla unwarded. Practícalo en los drakes al minuto 14-16: cruza el río, escóndete en el campamento de raptors enemigo, espera a que la front line engagee a tu equipo y entonces Flash + R sobre la back line. Una sola ejecución limpia gana un objetivo 4v5 en inferioridad numérica.
