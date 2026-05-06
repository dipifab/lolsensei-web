---
title: "Ivern Jungle Build & Guía — Patch 16.9"
slug: "ivern-jungle"
language: "es"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Guía de Ivern jungla en Patch 16.9: clear pacifista vía groves, build enchanter, setups de root con Q, control con Daisy, matchups clave y errores comunes."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Jungla de utilidad"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "No puede atacar ni ser atacado por monstruos de jungla (solo épicos como Drake/Baron). Planta groves en los campamentos que liberan a los monstruos al madurar."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot lineal largo que enraíza al primer enemigo impactado. Los aliados que atacan al objetivo enraizado dashan hasta él. Reactiva para dashar tú."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Pasiva: en arbusto, los autos hacen daño mágico extra (tú y aliados cercanos). Activa: crea un arbusto en cualquier sitio para visión y zona de daño."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Escuda a un aliado (o a Daisy). Tras 1.5s el escudo estalla, hace daño mágico y ralentiza enemigos cercanos. Si no impacta a nadie, el escudo se renueva."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoca a Daisy, un golem aliado tanque. Su tercer auto seguido sobre el mismo objetivo lanza una onda de knockup. Reactiva para reposicionarla."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra CC duro de objetivo único encadenado al ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra composiciones de AOE engage (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "cuando la amenaza principal del rival es un CC mágico de largo alcance contra ti"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos móviles que dive la backline (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Crea picks con Q desde la fog, escuda al carry más fuerte con E en mitad del fight y suelta a Daisy detrás de la front line para que el knockup del tercer auto limpie objetivos enraizados. Spike fuerte en el 6."
  weakness: "No puede 1v1 contra champions: autos débiles, kit sin escape. Recovery lentísimo si invaden tu jungla antes de plantar dos groves; una Q whiffeada en gank quema todo el setup."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery viaja con cada escudo de E y procea también en Q root para daño mágico extra. Manaflow Band sostiene maná para E continuo, Transcendence sube ability haste por encima de 40 para Q más rápida, Scorch cierra ventanas de poke en skirmish."
    secondary_rationale: "Resolve secondary: Font of Life se activa con cada Q root — tu ADC se cura al atacar al objetivo enraizado, convirtiendo un setup en burst más sustain. Revitalize amplifica los escudos de Aery y el refund de E cuando no impacta enemigos."
    secondary_alternative: "Si necesitas más uptime de Flash en teamfights largos y tu ADC ya aporta sustain, cambia Resolve por Inspiration con Biscuit Delivery (maná y HP early) y Cosmic Insight (summoner spell haste, Flash y Smite más frecuentes)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Carries inmóviles sin dash"
      reason: "Una Q desde la fog los fija; el dash automático del ADC al objetivo atacado cierra la distancia antes de que puedan flashear, sobre todo cuando Daisy entra para el follow-up con knockup."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Junglas de auto-attack scaling"
      reason: "El sistema de groves de Ivern se salta el fight de campamentos por completo; mientras los rivales muelen autos contra monstruos, Ivern ya está escudando lanes y montando roots con su ADC al nivel 5."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Invasores de early game"
      reason: "Ivern no puede 1v1: la W necesita arbusto y la Q no aporta escape. Una invasión pre-3 borra sus groves y le obliga a un clear defensivo que dispara la ventaja de XP y oro rival para toda la partida."
    - examples: ["kha-zix", "rengar"]
      archetype: "Asesinos móviles que dive al carry"
      reason: "Saltan por encima del peel de Ivern hasta el carry; el escudo E se consume rápido bajo burst, y su único hard CC es una Q de windup lento que los dashes esquivan antes de impactar."
    - examples: ["amumu", "zac"]
      archetype: "Tanques con AOE hard-engage"
      reason: "Sus cadenas R-Flash atrapan a un equipo agrupado en un solo cono; un único E shield no cubre varios objetivos, y el knockup del tercer auto de Daisy llega tarde para salvar la backline."
---

## Resumen

Ivern es un jungla pacifista — y esa única palabra cambia todo en su forma de jugar. Su pasiva le prohíbe atacar a los monstruos de jungla, así que nunca intercambia autos en un campamento. En su lugar planta una semilla de **Brushmaker (W)** en cada camp, se va, y vuelve más tarde para encontrar a los monstruos liberados con todo su oro y XP. La contrapartida: mientras un jungla normal está full-clearing, Ivern está escudando aliados, controlando la visión del río con arbusto activo y cruzando el mapa para ganks de nivel 3 que llegan antes de que ningún otro jungla esté siquiera en el mapa.

Su game plan es enchanter, no asesino. Acierta **Rootcaller (Q)** desde la fog of war (niebla de guerra), tu ADC dasha al objetivo enraizado por el proc del auto-attack, le sueltas **Triggerseed (E)** mientras engage, y al nivel 6 lanzas **Daisy! (R)** detrás de la línea enemiga para que su tercer auto consecutivo dispare un knockup garantizado. El kit no tiene escape y los autos pegan poco — si peleas 1v1 contra un champion, pierdes. Quédate en la fog, pegado a un compañero, y deja que tu equipo cargue con el daño mientras tú cargas con los setups.

## Build Recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern es ranged (475 de attack range), así que Hailblade es lo correcto frente a Emberknife. Smite sigue siendo obligatoria: la necesitas para Drake, Baron y Voidgrubs aunque nunca smitees un campamento normal.

**Core items (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Hailblade (auto-evoluciona hacia el minuto 3-4 cuando acumulas suficiente XP). Companion para AP burst: añade un proc de daño mágico al auto post-cast, que se apila sobre el bonus de arbusto de la W.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Tus escudos y curas acumulan un efecto en cadena que sube el healing con cada proc consecutivo — ideal para una enchanter que escuda, ralentiza y vuelve a escudar cada 7-11 segundos.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — el ability haste deja Q y E casi siempre listas.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — cuando la E escuda a un aliado, la pasiva del Censer le da attack speed y daño mágico on-hit. Se suma al bonus de arbusto de la W cuando el ADC pelea dentro o cerca del arbusto.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — segundo trigger de escudo. Da al aliado escudado AP y ability haste extra durante unos segundos.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal/daño global activo con cast de 5 segundos: suéltalo sobre un fight agrupado para girar las barras de HP.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cuando el rival encadena CC larga de objetivo único sobre tu ADC (Morgana Q, Ashe R, Lissandra R). El cleanse activo mantiene al carry vivo más tiempo del que puede aguantar cualquier escudo.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra composiciones de AOE hard-engage (combo Amumu R + Yasuo R, Wukong R). El activo escuda a varios aliados a la vez, algo que una sola E no puede.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — cuando un asesino móvil (Kha'Zix, Zed, Akali, Talon) te caza directamente. La estasis te mantiene vivo lo justo para que Daisy peelée.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir). Tu daño mágico aplica el corte de healing y casteas con la frecuencia suficiente para mantenerlo siempre activo.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** por defecto. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** son aceptables cuando los slows están por todas partes (Twitch, Ashe, Ahri W) y se acumulan sobre ti; la pérdida de ability haste es real, cógelas solo cuando la movilidad sea de verdad el problema.

**Skill order:** Sube **E** primero (el escudo escala muy fuerte y el slow corta dives), **Q** segundo (menos cooldown = más roots), **W** al final (la pasiva escala con el rango pero solo metes puntos cuando ya no queda otra). Sube **R** en niveles 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** con **Font of Life** y **Revitalize**.

## Matchups clave

- **Lee Sin / Graves:** Hard counter. Los dos te invaden la jungla pre-3 y pierdes cualquier 1v1. Empieza cerca de tu lane más fuerte (donde el aliado pueda rotar a fightear 2v2) y planta wards en raptors y red side. Si invaden, retrocede y deja que el laner castigue desde la fog: nunca duelar.
- **Master Yi / Warwick:** Easy. Muelen autos en los campamentos los primeros niveles mientras tú saltas el fight gracias a los groves; llegas a las gank lanes con un nivel más. Una vez Daisy online, su knockup interrumpe la R de Warwick y para a Yi a mitad de Alpha-Strike.
- **Karthus:** Carrera al spike de nivel 6. Él globaliza desde el min 6, tú enraízas y sueltas Daisy desde el min 6. La primera kill decide quién escala; si aciertas una Q temprana sobre él en el Scuttle, tu equipo arrolla los siguientes 10 minutos.
- **Kha'Zix:** Evítalo en la fog. Aísla objetivos squishy para bonus damage — ese objetivo eres tú. Wardea el lado seguro de tu jungla, agrúpate con el equipo para los obj y nunca pathees solo en fog sin ward después del minuto 8.
- **Vi:** Matchup parejo decidido por la prio en mid lane. Su Q-Flash-R bypasa tu Q, pero si tu mid laner tiene prio no puede divar libre. Wardea su ruta de flank y pre-escuda al ADC en cuanto veas la animación de carga de su Q en visión.

## Power spikes y condiciones de victoria

- **Nivel 3-4 (ciclo de groves completo):** Una vez dos camps están maduros y liberados, has igualado el clear de un jungla normal en aproximadamente el 60% del tiempo. Usa el excedente para llegar a una lane con Q lista antes de que el jungla rival esté en nivel 4.
- **Nivel 6 (Daisy! online):** La primera **R** desbloquea el kit. Daisy es un cuerpo tanque en fights y su knockup del tercer auto es una herramienta de engage garantizada. Busca un pick gratis sobre un side-laner justo después de hacer el 6.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completa (~ minuto 11-13):** Las cadenas de escudo/cura empiezan a rampar. En cualquier fight de más de 4 segundos, tu output de healing supera al de cualquier enchanter del mapa, Soraka aparte.
- **Power spike a 3 ítems (Moonstone + Boots + Ardent o Staff, ~ minuto 19-21):** Fuerza los fights por objetivos. Tu ADC escudado pega más fuerte y rápido que el rival, y Daisy R lleva un minuto entero de cooldown — quieres pelear cada vez que esté up.

## Errores comunes

- **Smitar campamentos normales.** No puedes — la pasiva te lo desactiva. Reserva Smite solo para Drake, Baron, Voidgrubs y el raro robo cross-jungle al red/blue rival cuando están a punto de cogerlo. Smite gastada en una animación de grove es throw.
- **Atacar tú al objetivo enraizado.** Cuando metes Q a alguien, no dashas tú — lo hace el ADC, automáticamente, al atacar. Reactiva Q solo si quieres divar de verdad (raro); si no, da un paso atrás y escuda al aliado que entra.
- **Castear arbusto W en fights y no en lanes.** El arbusto vale más en lanes para visión permanente y zona de daño sobre la oleada; en mitad de un fight es apenas una herramienta de visión. Pre-coloca W en tri-bush antes del gank, no después.
- **Soltar a Daisy a máximo rango.** El valor de Daisy está en el knockup del tercer auto, que solo ocurre si llega al objetivo. R dentro del fight, detrás de la línea enemiga — no a 1500 unidades "para hacer daño".
- **Intentar peelear contra AOE engage con un solo escudo E.** La E escuda a un aliado a la vez. Contra Amumu R + Yasuo R atrapando a cuatro, necesitas Locket of the Iron Solari. Planifica ese ítem en cuanto veas el draft.

## Consejo avanzado

Usa el **placement activo del arbusto W** para falsear fog para el posicionamiento del ADC. Suelta un arbusto al borde del rango de un ward enemigo — ven que lo plantas pero no ven quién entra dentro. Mete a tu carry al arbusto y luego dispara la Q a través de la lane: los enemigos no pueden esquivar un skillshot disparado desde detrás de un brush wall que no atraviesan visualmente. Es el mismo truco que hace de los duos Ivern/Caitlyn tempranos una de las combinaciones de laning con más snowball del juego, y escala con el completion de ítems porque los autos del carry escudado se vuelven martillos Ardent-empowered desde dentro del arbusto.
