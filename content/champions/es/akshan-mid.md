---
title: "Akshan Mid Build & Guía — Patch 16.9"
slug: "akshan-mid"
language: "es"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Guía Akshan mid lane para League of Legends Patch 16.9: build core de lethality, runas Press the Attack, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Asesino lethality"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "Cada 3er golpe inflige daño bonus y da escudo si impacta en un campeón. La auto-attack dispara un segundo tiro a daño reducido, cancelable para ganar Move Speed."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Skillshot tipo bumerán que hace daño físico de ida y vuelta. El alcance se extiende cada vez que impacta a un enemigo, así que una línea limpia a través de los minions llega más lejos de lo que parece."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Pasiva: marca como Scoundrel a quien mate aliados. Matar uno revive a los muertos y da oro extra. Activa: camouflage y Move Speed hacia los Scoundrels (se rompe fuera de brush/terreno)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Gancho al terreno; Akshan gira disparando al enemigo más cercano, baja a voluntad o al impacto. El cooldown se resetea con takedowns — encadena un segundo swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Engancha a un campeón y carga balas durante ~5 segundos. Reactivar dispara todas las balas al primer objetivo impactado; el daño escala con HP perdido, es una herramienta de execute."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC point-and-click single-target (Lissandra R, Malzahar R, TF carta dorada) — spellshield bloquea 1 cast cada 30s"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Annie, Veigar, Syndra) — escudo mágico + lifeline contra una rotación de borrado"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con curación apilada (Soraka mid, Vladimir, Aatrox top) — Grievous Wounds en autos y balas R"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra comps con muchos asesinos (Talon + Zed double AD) — segunda vida para el carry que channellea R en abierto"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "primer item alternativo contra comps squishy que snowballeas con pickoff: el slow energized fija al carry que tu R fallaría"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball la lane con trades de 3 golpes y Press the Attack, poke con Q a máximo alcance, luego convierte el lead con roams vía E desde el minuto 6 y ejecuta squishies con R en peleas de objetivo."
  weakness: "La E solo se engancha al terreno: en mid abierto se queda sin reset de swing. CC point-and-click single-target y Wind Wall cancelan el channel de R y el poke de Q."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Mages de artillería inmóviles sin dash"
      reason: "Estos campeones se quedan quietos para escalar o pokear; la E de Akshan rodeando la pared del mid cierra la distancia y encadena Q + 3-hit pasivo + R execute antes de que terminen un cast."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mages con un único escape telegrafiado"
      reason: "Akshan baita el stun de Annie, la Q de Lux o la R de Ahri, luego E-swinguea en el recovery frame para un trade de 3-hit gratis y el escudo de la pasiva."
    - examples: ["senna", "ziggs"]
      archetype: "Carries de backline con peel propio débil"
      reason: "La R de Akshan locka a 2500 de rango e ignora la mayoría del peel; con el target bajo el 50% HP las balas ejecutan a través de su kit incluso desde el otro lado del río."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Mages con CC point-and-click"
      reason: "Su stun o suppress lock-on cancela el channel de R, rompe el swing de E a media rotación y descubre el camouflage de W — Edge of Night bloquea un cast cada 30s pero no salva dos veces."
    - examples: ["yasuo", "yone"]
      archetype: "Campeones con Wind Wall"
      reason: "Wind Wall bloquea la Q boomerang, cada auto-attack del swing de E y cada bala de R; un único Wind Wall bien puesto voltea el trade entero y les permite all-in sin recibir daño."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Asesinos cuerpo a cuerpo con multi-dash"
      reason: "La E de Akshan solo se engancha al terreno, así que no puede swinguear contra un asesino fed en abierto. El shroud de Akali rompe su targeting, la E de Fizz salta sus autos, la R de Diana lo encadena a media channel."
---

## Resumen

Akshan es un híbrido marksman/asesino con un gancho de reposicionamiento, un stealth atado a marcas de venganza y un ultimate de execute (un ataque que mata automáticamente a enemigos por debajo de un umbral de HP) que escala con HP perdido. Su kit cuaja en mid lane porque la geometría de las paredes alrededor del río y del tri-bush le da a ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** terreno consistente al que engancharse, y porque ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** supera en push a la mayoría de mages una vez sube de nivel. Es un campeón de baja movilidad en abierto pero alta movilidad cerca de paredes — toda la partida gira en torno a elegir peleas en las que el mapa esté de tu lado.

Akshan escala con items de **lethality** — equipo que convierte el daño físico en penetración de armadura bonus, ideal para borrar targets squishy como mages y ranged carries pero poco efectivo contra full tanks. Hace daño físico (AD), no mágico.

Su plan de partida es simple en forma y exigente en timing: shovea la wave (empuja tus minions contra la torre rival) con **Q**, busca un trade de 3 golpes (un intercambio breve donde te comprometes con unos golpes y te retiras, no un intento de kill completo) que active el escudo de la pasiva ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**, luego roama (deja tu lane para ayudar a bot o top) entre los minutos 6 y 12 para convertir prio (la libertad de salir de lane sin perder minions ni torre) en kills que resetean **E**. El skill expression vive en dos sitios: (1) hacer rebotar la **Q** en un tank de la frontline (los bruisers/tanks que abren las peleas) hasta el carry de la backline (los squishies que pegan desde atrás), porque el alcance del bumerán se extiende con cada cadena, y (2) leer el momento exacto del channel de **R** — demasiado pronto te comes un stun a media rotación, demasiado tarde el target se ha curado por encima del umbral de execute.

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Apertura por defecto — el AD más el lifesteal alimenta el escudo de la pasiva en los trades de 3 golpes.

**Items core (en orden):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primer item de lethality y la activa de Move Speed convierte los roams a side lane en kills. El spike (momento en el que tu fuerza pega un salto neto) más grande de la build.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots: la pasiva (cada 3er golpe) proca más rápido y la ráfaga de **R** aprieta los intervalos.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — añade AOE de waveclear (un golpe que daña toda la wave de minions a la vez), un activo de dash que encadenas tras la **E** y más lethality. Mejor segundo item de lethality en esta patch.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — su pasiva mata a cualquier campeón bajo el 5% de HP, perfectamente alineado con el escalado de **R** sobre HP perdido: targets que tu R dejaría en 1 HP mueren igualmente.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — finisher con armor pen contra el tank rival en late. Cómpralo en lugar de un item defensivo cuando la partida pase de los 35 minutos.

**Items situacionales:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC point-and-click single-target (CC que se locka en un target sin poder esquivarse: Lissandra R, Malzahar R, Twisted Fate carta dorada). El spellshield (una barrera de un solo uso que absorbe el siguiente hechizo enemigo sobre ti) bloquea 1 cast cada 30 segundos.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP fuerte (daño mágico de una rotación que puede borrarte en un segundo: Annie, Veigar, Syndra). El escudo mágico + lifeline (un buff de cura y ataque que se activa cuando bajas de ~30% HP) te mantiene vivo lo suficiente para responder con la **R**.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra composiciones que apilan curación (Soraka mid, Vladimir top, Aatrox top). Aplica Grievous Wounds (debuff que reduce la curación recibida del target a la mitad) en cada auto y en cada bala de **R**.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra comps con muchos asesinos (Talon + Zed double AD = dos amenazas fuertes de burst físico). Una segunda vida vale más que un slot de DPS cuando eres el carry principal del equipo channelando **R** en abierto.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — primer item alternativo contra comps double-mage squishy con las que pretendes snowballear (construir un lead de kills que se acumula en más kills) con pickoff (cazar un enemigo aislado a la vez fuera de los teamfights). El auto energized aplica un slow fuerte que fija al carry en huida que tu **R** fallaría.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto por el attack speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo contra equipos con 3+ fuentes de hard CC (stuns, roots, knock-ups que te bloquean los botones).

**Skill order:** Sube **Q** primero al máximo (waveclear y DPS principal), **E** segunda (por el daño por disparo del swing en el all-in), **W** al final. Punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Precision** con **Press the Attack** (tras 3 golpes en un campeón, tu siguiente daño se amplifica — perfecto para el proc de la pasiva), **Presence of Mind** (devuelve maná en takedowns), **Legend: Alacrity** (attack speed extra) y **Coup de Grace** (más daño contra enemigos bajo el 40% HP). Secundario **Sorcery** con **Absolute Focus** + **Gathering Storm**, o bien **Inspiration** con **Magical Footwear** (botas gratis al minuto 12) + **Cosmic Insight** si quieres el oro ahorrado para un spike de primer item más temprano.

## Matchups clave

- **Yasuo / Yone:** Matchup duro. Su **W** Wind Wall (un muro vertical de viento que bloquea todos los proyectiles no-melee entrantes durante ~4 segundos) bloquea la **Q**, las autos durante el swing de **E** y cada bala de **R**. Aguanta la **Q** hasta que quemen Wind Wall sobre un minion o tu jungla, luego comprométete. Guarda ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** como tercer item swap contra Yasuo (vs el knock-up de su **Q** — un hechizo que te lanza al aire un instante, bloqueándote los inputs).
- **Zed:** Pareja o ligeramente favorable en lane. Tu trade de 3 golpes supera el poke Q-W de Zed pre-6, pero su **R** lo vuelve untargetable (no seleccionable por hechizos ni autos) un instante, esquivando tu lock-on de R. Reserva la **E** para su shadow swap y úsala como counter-jump.
- **Lissandra:** Hard counter. Su **R** es point-and-click y cancela el channel de tu **R** a media rotación. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** antes del segundo item, y nunca tires **R** en su cara sin spellshield arriba.
- **Annie:** Cuidado a nivel 6. Su all-in con stun supera el windup de tu **R** si te pesca en lane. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** como tercer item convierte una kill en 1 rotación en un trade sobrevivible.
- **Veigar:** Favorable. Su jaula es lo bastante lenta como para que **E** salga limpia, y no tiene escape cuando le all-in pasado el nivel 6. Reserva la **R** para después de que use la **E** cage sobre una wave.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + **E** ya tienes el primer all-in: **Q** sobre la wave para extender el alcance del bumerán, **E** a una pared lateral, swing para las autos, **Q** de vuelta en la salida. Es el spike de nivel 2 más grande del mid lane esta patch.
- **Nivel 6:** El primer **Comeuppance** desbloquea presión de execute en side lane. Solo con ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, una pelea en el río sin wards sobre un target bajo el 50% HP es kill segura.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completo (~ minuto 9-11):** El control de wave se voltea. Activa el Ghostblade off cooldown en cada roam — un gank en side con **E** + **Q** + trade escudado de 3-hit casi siempre convierte sobre un campeón sin MR comprada.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector online (~ minuto 22-26):** Targets al 6% HP mueren a la pasiva del item incluso si tu **R** los habría dejado en 1 HP. Fuerza peleas de objetivo aquí y channelea **R** en cuanto un backline aparezca en visión.

## Errores comunes

- **E al mid abierto.** La **E** solo se engancha al terreno — si la swingueas hacia un campeón sin pared en línea, el cast falla o te engancha a la pared equivocada y te tira dentro de su equipo. Pre-planifica siempre la pared antes de pulsar el botón.
- **Channelar R delante del equipo enemigo.** 5 segundos de windup (el tiempo que pasas channelando antes del rilascio) en línea de visión son 5 segundos de tiro al blanco para cualquier CC point-and-click. Channelea **R** desde fog of war (la zona oscura sin wards de la mapa donde el rival no puede ver) o detrás de una pared, y luego sal a soltar las balas en el último frame.
- **Cancelar el disparo bonus cuando deberías dejarlo salir.** El segundo auto de la pasiva hace ~50% daño reducido pero sigue contando para el contador de 3 golpes. En un trade de kill no canceles — el Move Speed vale menos que cerrar el proc y llevarte el escudo.
- **Q de poke desnuda sin rebote en minion.** **Q** a máxima distancia sin nada en medio es la peor versión de la spell. Mándala siempre a través de una wave o de un minion con poco HP para que el alcance se extienda y la trayectoria de vuelta se mantenga alineada con el siguiente campeón.
- **Going Rogue camouflage en abierto.** La activa se rompe en ~1 segundo si no estás en brush o pegado a una pared. Usada en lane abierta no hace casi nada — resérvala para un flank (entrar a una pelea por un lado que el rival no está mirando) por tri-bush o por brush del río.

## Consejo avanzado

Haz rebotar la ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** en un tank de la frontline para llegar al carry de detrás. Cada campeón impactado por el bumerán extiende el alcance restante, así que una **Q** que sale del bruiser de frontline al límite de la visión sigue viajando a través del carry y vuelve hacia ti, dañando dos veces al mismo target en el camino de regreso. Practica el ángulo en custom contra bots: colócate de modo que el bumerán salga del primer campeón al ángulo que quieres para el segundo target, y el alcance encadenado llegará a un backline que se creía a salvo detrás de su equipo.
