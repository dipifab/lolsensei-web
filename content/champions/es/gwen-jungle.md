---
title: "Gwen Jungle Build & Guía — Patch 16.9"
slug: "gwen-jungle"
language: "es"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía de Gwen jungle para League of Legends Patch 16.9: clear path, timings de Scuttle y Drake, rutas de gank, build AP bruiser, matchups, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Las auto-attacks infligen daño mágico extra basado en el HP máximo del objetivo. Gwen recupera HP con parte del daño hecho a campeones."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Tijeretazo en cono de hasta 6 cortes. El cono central inflige true damage y reaplica la pasiva en cada corte — clear de camps y anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Crea una zona de niebla durante 4 segundos. Los enemigos fuera no pueden apuntarla — solo quien entra en la niebla puede golpearla. Reset defensivo y setup de gank."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash corto que da attack speed, rango de ataque y on-hit AP unos segundos. El cooldown se reembolsa parcialmente al golpear campeón — gap-closer en gank."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lanza una salva de agujas que ralentiza y aplica la pasiva. Se puede relanzar hasta 2 veces más, cada salva inflige más daño que la anterior."
      dd_spell_id: "GwenR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos AD / divers (Zed, Khazix, Rengar) — la stasis 2.5s cubre el cooldown de W y rompe el burst window"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra 4+ tank/bruiser — sustituye a Riftmaker para burn porcentual del HP máx desde el minuto 1"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (R de Lissandra, suppression de Malzahar, stun de Veigar)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contra comps de kite (Vayne, Ezreal) — más ability haste y movement speed para pegarse a carries móviles"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Clear minuto 3-30, completa Riftmaker hacia el minuto 16, fuerza fights de objetivo a nivel 6 con setup de W mist. En teamfights derrite la frontline con Q true damage on-hit dentro de los 4 segundos de mist."
  weakness: "Blanco fácil para invade en niveles 1-3 (sin burst, un solo dash). Hard counter de junglers agresivos early como Lee Sin y Elise que castigan su primer clear lento si la invaden."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaria: Conqueror stackea durante clears largos y skirmishes de Q + auto, dando daño adaptativo y healing. Triumph premia ganks multi-kill, Legend: Alacrity potencia la ventana on-hit de E, Last Stand añade daño con poco HP."
    secondary_rationale: "Resolve secundaria: Second Wind regenera HP entre camps y tras invades, Overgrowth escala HP bruto al late game donde brillan los teamfights de Gwen dentro de la W mist."
    secondary_alternative: "Contra mids AP con mucho poke, cambia Resolve por Sorcery con Manaflow Band (sustain de maná para clears de Q) y Transcendence (más ability haste para más reembolsos de E y R más rápida)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank junglers sin daño single-target alto"
      reason: "Q aplica true damage porcentual del HP máx que ignora armor; los tanks tienen pools de HP enormes que ella desgarra en 3-4 Q durante un 1v1 sostenido dentro de la W mist."
    - examples: ["master-yi", "shaco"]
      archetype: "Asesinos squishy sin disengage"
      reason: "La W mist niega su target lock durante un all-in. Se commitan, comen el cono de Q true damage en mist, y no tienen un segundo escape porque ya gastaron el dash."
    - examples: ["kha-zix", "rengar"]
      archetype: "Asesinos con burst window"
      reason: "Su burst llega en 1.5 segundos, pero la W mist los saca del target range a media salto. Una vez fallado el burst window, Gwen gana fácil el trade prolongado."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Junglers invader early"
      reason: "Gwen no tiene burst en niveles 1-3 y su primer clear es lento. Los invader entran en sus camps y la matan antes de que la pasiva entre en stack."
    - examples: ["kayn", "viego"]
      archetype: "Outscalers con mucha movilidad"
      reason: "Ambos tienen tools de movilidad (Kayn camina por muros, Viego dash on-hit) que ignoran el rango de la W mist; outscalan el tempo de Gwen en skirmishes late."
    - examples: ["kindred", "graves"]
      archetype: "Junglers ranged que kitean"
      reason: "Kindred y Graves auto-atacan desde fuera del rango de protección de la W mist. Gwen debe commitar E para entrar en su rango, y ellos kitean su dash con sus propios tools de movimiento."
---

## Resumen

Gwen es una jungler AP bruiser — un campeón melee que escala con Ability Power (la stat AP), aguanta algún golpe a corta distancia y gana los fights largos en lugar de fundir un objetivo en dos segundos como haría un asesino. Como "skirmisher", su juego es el duelo prolongado: derrite tanks y bruisers con **true damage** (daño que ignora tanto armor como magic resist), recupera HP durante el fight gracias a la pasiva, y resetea el cooldown de su dash al golpear a un campeón. Su **W mist** es la firma del kit: una zona de 4 segundos que la vuelve no-objetivable para quien esté fuera — un tool de gank y counter-engage único.

El game plan es: completa un primer clear limpio, disputa el Scuttle (el cangrejo del río — al matarlo da visión y un pequeño buff de movement speed), gankea una lane de baja movilidad alrededor del nivel 4-5 con la W mist, y luego snowballea — convierte una pequeña ventaja early en una mucho mayor — en el primer drake del minuto 5-7. Gwen es un campeón mid-late: es más débil en los primeros 3 minutos, así que no te dejes pillar en el red buff enemigo (el camp pequeño que da efecto burn a las auto-attacks) sin que tu equipo lo sepa.

## Build Recomendada

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (la pet jungle AP-friendly — quema a los campeones enemigos con on-hit damage durante los ganks) más **Smite** (la summoner spell que toma todo jungler — un golpe rápido a un objetivo, usado para clearar monstruos más rápido y robar objetivos como Drake o Baron).

**Core items (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade quest del starter de jungle. Se auto-evoluciona en torno al minuto 3-4; el daño on-hit de la pet añade daño mágico a las auto-attacks, alineado con el scaling AP de Gwen.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — tu item principal. Tras 2 segundos en combate, parte de tu daño se convierte en true damage (la pasiva "Void Corruption") y obtienes "omnivamp" (recuperas HP de una porción de cualquier daño que hagas — habilidades y autos por igual). Hecho para fights largos, justo lo que Gwen quiere.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (= ignora parte de la magic resist enemiga). Tu daño pega más fuerte contra squishies (campeones con pocas defensas, normalmente las carries enemigas).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed más AP más una pasiva que añade daño mágico extra a cada auto. Combinado con **E** (la ventana on-hit de Skip 'n Slash, donde cada auto aplica daño mágico AP) te conviertes en una torreta DPS sostenida en fights largos.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador AP de late game. Convierte a Gwen de "DPS tanky" en una carry de verdad.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos AD / divers (Zed, Kha'Zix, Rengar — los divers son campeones que saltan sobre las carries de tu backline). El activo da 2.5 segundos de stasis (te vuelves no-objetivable pero tampoco actúas) — suficiente para romper su burst window y resetear el cooldown de W.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contra equipos con 4+ tank/bruiser. Sustituye a Riftmaker como primer item si necesitas burn porcentual del HP máx desde el inicio de cada fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC (= "crowd control": stuns, roots, charms, cualquier cosa que bloquee a tu campeón) single-target. **R** de Lissandra, suppression de Malzahar, stun de Veigar. El escudo bloquea por completo una habilidad enemiga.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contra comps de kite (Vayne, Ezreal). Más ability haste y movement speed para pegarse a las carries móviles.

**Boots:** Sorcerer's Shoes por defecto. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si el equipo enemigo tiene 3+ amenazas AD. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra mucho CC (3+ stuns o knockups).

**Skill order:** Maxea **Q** primero (true damage y scaling AP — tu clear principal de camps), maxea **E** segundo (cooldown y daño on-hit), deja **W** para el final. Toma **R** en niveles 6, 11, 16. Empieza con **Q** al nivel 1 para el primer clear más seguro (el cono de Q golpea todo el paquete de monstruos pequeños), toma **E** al 2 para mobility entre camps, y luego **W** al 3 para seguridad antes del Scuttle.

**Runes:** Primaria **Precision** con **Conqueror** (un keystone que stackea durante fights largos para dar daño adaptativo y healing — perfecto para el playstyle DPS sostenido de Gwen), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundaria **Resolve** con **Second Wind** y **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clave

- **Lee Sin:** Duro early, neutro late. Invade fuerte al nivel 2-3 cuando Gwen aún no tiene W. Empieza por el camp opuesto a tu spawn (red buff si lado azul; blue buff si lado rojo) para estar lejos de su path típico de invade. Tras el nivel 6 lo outscaleas en cualquier 1v1 dentro de la W mist.
- **Master Yi:** Matchup de scaling gratis. Su Alpha Strike (**Q**, un multi-dash que lo vuelve brevemente no-objetivable) no ignora la pasiva de tu W mist — sigue cortado fuera de la mist. Fuerza fights al nivel 6 cerca del drake; cuando se commite con Highlander (su **R** ult, que da mucha attack speed y movement speed), suelta W y spamméale Q durante el duelo.
- **Sejuani:** Matchup duro. Su **R** es point-and-click (= no requiere apuntar, el hechizo se engancha al objetivo) y te congela durante tu dash de **E**. Espera a que use **R** sobre otro, luego commite con W. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de lo habitual.
- **Kha'Zix:** Igualado-favorable. Intentará evolucionar "isolation damage" — daño extra cuando su objetivo no tiene aliados cerca — y cazar a tus carries. La W mist rompe su target lock durante un leap (su Q dash). Cuando se commite con **R** stealth + Q burst, suelta W sobre la carry en vez de sobre ti, y el daño se cancela.
- **Kindred:** Mal matchup. Kitea (= se mueve hacia atrás mientras ataca, manteniendo distancia) tu dash con su **Q** dash, y su ult zone (Lamb's Respite, un círculo que evita que los aliados mueran dentro) salva a cualquier compañero que dives (= persigues bajo torreta). Esquiva su rango de invade, toma objetivos durante los huecos de cooldown de su **R**, y pide ayuda al top en skirmishes.

## Power spikes y condiciones de victoria

- **Nivel 3:** Se desbloquea la primera **W**. Ya puedes gankear lanes — suelta W sobre el laner, dash con E, Q + AA en mist. La mist niega un targeting limpio sobre ti durante 4 segundos, la ventana de protección de gank más larga del jungle.
- **Nivel 6:** Se desbloquea la primera **R**. La salva de agujas aplica el daño mágico porcentual-HP de tu pasiva a cada campeón golpeado, y el slow encadena tus auto-attacks. Fuerza un drake fight o un counter-gank en torno al minuto 8-9 — el kit alcanza su primer pico mayor.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** Spike de omnivamp + true damage. Ahora puedes solo-divear a la mayoría de squishies y sobrevivir a ganks 1v2 si tienes la W up.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completa (~ minuto 24-26):** Spike DPS. Con **E** activa tus autos disparan mucho más rápido y aplican on-hit AP — el momento de meterse en cada teamfight cerca de drake / Baron y dejar que tu equipo te peelee.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 30+):** Fase carry. Tus autos arrancan 25%+ de HP por golpe a la frontline enemiga. Cualquier teamfight donde tu equipo te proteja ("peelea" enemigos lejos de ti) acaba en victoria.

## Errores comunes

- **Primer clear en el mismo lado del jungler enemigo.** El primer clear de Gwen es lento y sus HP early bajos; un invade en el segundo buff suele significar un flash perdido o una muerte. Empieza opuesto al spawn enemigo hasta que scoutees su path.
- **Activar W demasiado pronto en un gank.** La mist es una ventana de 4 segundos — si la sueltas antes de que el laner esté pinchado en el fight, el enemigo sale caminando y no te queda nada. Aterriza primero **E** + auto, luego **W** cuando empiece la reacción enemiga.
- **Q sobre el camp desde fuera del cono.** La zona de daño de **Q** es el centro del cono (el tick de true damage). Posiciónate con el camp en los 30 grados internos del arco — triplicas tu DPS en el primer cast y clareas ~3 segundos antes.
- **Smite-flippear objetivos sin R.** El smite-fight de Gwen es mediocre cuando **R** está down. Fuerza objetivos solo con la ult up y al menos una salva de agujas reservada para el jungler enemigo.
- **Auto-atacar fuera del rango de R.** Cuando **R** está up tienes 3 salvas en total. Mantente a 1000 unidades del borde del fight para poder relanzar **R** sobre un objetivo low HP en vez de correr a la muerte.

## Consejo avanzado

Usa la **W** mist para fintar skillshots (= habilidades que se apuntan manualmente como línea o área) durante los ganks: cuando un laner enemigo con stun o root de largo alcance (Lissandra **E**, Morgana **Q**, Veigar **E**) está a punto de reaccionar a tu dash de **E**, suelta **W** sobre el camino entre tú y él justo al entrar en rango. La mist te vuelve no-objetivable desde fuera — a menudo se comen el cast y consigues 4 segundos de daño sin CC. El truco está en timear **W** sobre la animación de wind-up (los frames de carga antes de que salga el hechizo), no después de que ya haya aterrizado.
