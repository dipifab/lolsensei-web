---
title: "Alistar Support Build & Guía — Patch 16.9"
slug: "alistar-support"
language: "es"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Alistar support para League of Legends Patch 16.9: starter kit, build tank-engage, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar carga su rugido cuando aturde o desplaza a un campeón enemigo, o cuando mueren enemigos cercanos (minions, monstruos de jungla o campeones). Al carga máxima, el siguiente rugido lo cura a él y a los aliados cercanos."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Golpea el suelo a su alrededor y aplica knock-up a los enemigos cercanos durante 1 segundo. Rango corto: tienes que estar pegado al objetivo."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar hace dash sobre un enemigo, le inflige daño y lo empuja en línea recta. Tool de engage clave: encadena la Q justo después para la combo W-Q (lo empujas hacia tu equipo y luego lo knock-uppeas)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Pisotea el suelo durante 5 segundos ignorando la colisión de minions y haciendo daño. Cada pulso que toca a un campeón da un stack: a 5 stacks, su próxima auto-attack lo aturde y aplica daño bonus."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Limpia al instante todo el crowd control sobre Alistar y le da fuerte damage reduction (físico + mágico) por la duración. Úsala antes de engagiar contra equipos con mucho CC, no cuando el fight ya empezó."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap desde Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) cuando el harass early duele más que el CC late"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contra carries que apilan attack speed (Tristana, Kog'Maw, Master Yi): ralentiza su velocidad de ataque en aura amplia"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contra comps de burst AP (doble mago tipo Syndra mid + Brand support): escudo mágico pasivo que regenera fuera de combat"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Acierta la combo W-Q (Headbutt hacia atrás + Pulverize knock-up) sobre un carry squishy para abrir un fight que tu equipo convierte. Pulsa R antes de engagiar si tienen hard CC, así las cadenas rebotan en ti."
  weakness: "Rango de engage corto: tienes que estar encima del target para landear la Q. Maná frágil en niveles tempranos y cero poke a distancia; si la bot rival juega pasiva, pierdes lane y debes roamar para mantenerte relevante."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanters squishy sin hard CC propio"
      reason: "No tienen herramientas para frenar la combo flash + W-Q. Una vez landeas el knock-up encima de ellos, mueren antes de que su ADC pueda peelar — Sona y Yuumi sobre todo no tienen escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs inmóviles sin dash"
      reason: "La W tiene 650 de rango y es target único: los ADCs sin dash ni blink comen la combo entera cada vez que se acercan a last-hit. Una vez te comprometes, no pueden escapar del engage."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage supports con poke skillshot y sin escape"
      reason: "Su poke pesca cooldowns, pero un Trample stackeado más un flash-Q encima los borra: su ventaja de rango no importa una vez que cierras la distancia."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Enchanters de disengage con peel activo"
      reason: "El polymorph de Lulu cancela tu W a mitad de dash, la R de Milio limpia tu knock-up a distancia, la E de Renata saca al carry de la combo. Tu único engage queda respondido gratis."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Pokers de largo alcance con shields o binding"
      reason: "Te muerden el HP gratis a 900-plus de rango sin que tengas respuesta. La Black Shield de Morgana bloquea tu Q knock-up entera: flasheas para nada."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Otros tank engage supports con hard CC más largo"
      reason: "Su primer cast aterriza antes de que entres en rango de Q: el Q hook de Nautilus, el dash-stun E de Leona, la W charge de Rell baten tu W. Tú comes su engage, ellos no comen el tuyo."
---

## Resumen

Alistar es un **vanguard support** (un support de clase tank cuyo trabajo es abrir fights, no curar aliados): engagia saltando físicamente sobre el carry rival y bloqueándolo con crowd control. Su kit gira en torno a una combo icónica: **Headbutt (W)** hace dash hasta un objetivo y lo empuja en línea recta, y recastear inmediatamente **Pulverize (Q)** bajo tus propios pies aplica knock-up. La cadena completa (W en Q) desplaza al enemigo **hacia tu equipo** y luego lo suspende en el aire un segundo entero — tiempo de sobra para que tu ADC se acerque y descargue daño gratis. **Trample (E)** le da movimiento **ghosted** breve (atraviesa minions y otras unidades sin colisionar) y un **proc** de stun (un efecto a stacks que se dispara al cumplir una condición) en su próxima auto-attack a 5 stacks. **Unbreakable Will (R)** limpia cualquier crowd control sobre él y da fuerte damage reduction: es lo que permite a un Alistar a 1 HP atravesar un root de Morgana y rematar la kill.

Plan de partida: en lane, **bait** (atrae al rival a comprometerse) quedándote ligeramente adelantado; en el momento que su ADC se acerca a last-hittear, Headbutt lo de vuelta, knock-up con Q, camina sobre él con Trample stackeando, y tu ADC convierte. Mid-game, **roam** (deja la bot lane para ayudar a mid o jungle) usando el movimiento ghosted de Trample y la flexibilidad de las summoner spells: Alistar pasa por muros de minions donde otros supports se atascan. Late-game, mantente en frontline, comete el CC enemigo con **R**, y engagia sobre el carry cuya muerte cierra el fight.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el starter unificado para supports) más 2 Health Potions. No last-hittees minions en lane: deja el oro para tu ADC, World Atlas paga tu oro aparte mediante su quest.

**Items core (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evoluciona automáticamente a medida que acumulas progreso de la quest pasando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** y ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, hasta el upgrade endgame que elijas.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist más **tenacity** (una stat que acorta la duración del crowd control sobre ti). Las botas por defecto para un engage tank: stuns y slows más cortos significan que no te bloquean fuera de la combo **W-Q** justo después de comprometerla.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active que escuda a todos los aliados cercanos por unos segundos. Pulsa el escudo en el instante exacto en que abres el engage, así tu equipo absorbe el primer **burst** (el daño alto concentrado en los primeros 1-2 segundos del fight) del rival.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te vincula a tu **ADC** (Attack Damage Carry, el compañero de bot lane que hace daño con auto-attacks, tu principal damage dealer late-game): una porción del daño que recibe se redirige a ti, y a cambio lo curas. Vincula siempre al carry cuya vida más necesitas extender.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — el upgrade endgame engage-focused de tu support item (World Atlas se transforma automáticamente en uno de estos al completar la quest). Lleva una pasiva **Spellblade**: tras lanzar cualquier habilidad — Headbutt W, Q knock-up, R cleanse, incluso un tick de Trample E — tu próxima auto-attack inflige daño físico bonus on-hit, y si toca a un campeón enemigo este recibe más daño de cualquier fuente durante 4 segundos. El patrón es "ability → AA → ability → AA" stackeado durante todo el fight, no "guarda la AA para después del CC".

**Items situacionales:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas con armor y reducción de daño de auto-attack. Cambia desde Mercury's Treads cuando la bot lane rival es auto-attack heavy (Caitlyn, Draven, Tristana) y su **harass** (poke y chip damage) en lane duele más que la cadena de CC del equipo enemigo.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — ralentiza la velocidad de auto-attack de los enemigos cercanos en un aura amplia. Pícalo contra carries que apilan attack speed (Tristana, Kog'Maw, Master Yi) donde tu trabajo pasa a ser **peelar** (proteger a tu propio carry de los enemigos que intentan matarlo) en vez de engagiar.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — escudo mágico pasivo que se regenera fuera de combat. Pícalo contra comps de burst AP (un setup tipo Syndra mid + Brand support): el escudo se come una ulti entera y te permite sobrevivir al engage que abriste.

**Botas:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** por la tenacity: un stun de un segundo de Thresh pasa a medio segundo, dejándote la ventana para encadenar **R** sobre el engage. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** antes de completarlas solo si la bot lane rival te duele más que el CC late del equipo enemigo.

**Skill order:** Sube **E** (Trample) primero al máximo: es tu daño en lane más el proc de stun que te da un segundo crowd control después de la Q. Sube **W** segundo: cooldown más bajo significa más ventanas de engage. Sube **Q** al final (es sobre todo finisher; el rank-up apenas cambia el knock-up, solo el daño). Punto en **R** a niveles 6, 11, 16.

**Runas:** Primaria **Resolve** (el árbol defensivo, durabilidad) con **Aftershock** (armor y magic resist gratis durante unos segundos cuando aplicas crowd control: dispara en cada Q knock-up), **Font of Life** (tu CC marca al objetivo; los aliados que lo atacan se curan un poco), **Conditioning** contra lanes que escalan late o **Bone Plating** contra lanes que intentan reventarte el HP temprano, y **Unflinching** (extra **tenacity**, la stat que acorta el crowd control sobre ti, al usar una summoner spell). Secundaria **Inspiration** (árbol utility) con **Hextech Flashtraption** (un Flash backup de corto rango con cooldown largo: oro para combos W-Q sorpresa) y **Cosmic Insight** (cooldowns reducidos en summoner spells y actives de items). **Stat shards** (los tres pequeños bonos de stat al final de la página de runas): Adaptive Force / Adaptive Force / Health (Adaptive Force = bonus AD o AP según lo que use tu kit).

## Matchups clave

- **Leona:** Espejo de **engage** (los dos queréis abrir el fight). Ella tiene CC más largo (dash-stun Zenith Blade, R Solar Flare), así que no engagies primero mientras tenga cooldowns up. Espera a que tire la E, y se abre tu ventana de 10 segundos: flash-Q sobre su ADC mientras ella no tiene follow-up.
- **Pyke:** Skill matchup, sin edge claro sobre el papel, lo decide quién juega mejor. Te out-pokea con Q y te out-roama en **stealth** (se vuelve invisible al cruzar arbustos). Mantén vision profunda en el río y fuérzalo a fightear en lane donde la R no le resetea la kill.
- **Lulu:** Hard counter para tu **all-in** (commit total a la kill). Su polymorph cancela tu W a mitad de dash. No engagies cuando tiene polymorph up; trackea su cooldown y fuerza fights solo en la ventana de 13 segundos en que está down.
- **Soraka:** Pura **enchanter de sustain** (un support healing-focused que gana manteniendo viva a su ADC, no abriendo fights) sin tool de engage propio. Puedes flash-Q encima cada vez que su Flash está down: muere en tu combo antes de que su ADC reaccione.
- **Senna:** Matchup de **poke** largo (chip damage a distancia para desgastarte el HP). Te bullea el HP bajo torre. No respondas, acepta la lane mala, y roama mid o invade con Mobility Boots: la lane de Alistar pierde, pero su macro game gana.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + W):** Primer spike. La combo W-Q completa se desbloquea en cuanto tienes ambas habilidades. Un ADC rival que over-extende (se ha empujado demasiado lejos del primer **wave** — la fila de minions entrante) es kill gratis si engagias con **Flash** todavía up.
- **Nivel 6 (R desbloquea):** El potencial de engage explota. **Unbreakable Will** te transforma de **diver** one-shot (un campeón que salta a la backline rival y muere justo después) a tank que atraviesa hard CC y re-engagia. Puedes flash-Q a una Morgana, comerte su root, R para limpiarlo, y Q de nuevo sobre su ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primer item de teamfight online. Tu engage ahora deja un escudo gratis al equipo. Agrúpate con tu equipo para el **Drake** (objetivo dragón en el river bot — matarlo da a tu equipo buffs de stats permanentes) o los **Voidgrubs** (pequeños monstruos en el river top — el equipo que los mata gana daño bonus contra estructuras enemigas).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** El proc Spellblade más la amplificación de daño de 4 segundos sobre campeones convierte tu rotación entera en una secuencia de DPS. Ahora W → AA → Q → AA no es solo setup para tu ADC: puede quitar 25-30% de HP a un **squishy** (un campeón de baja defensa, tipo ADC o mago) él solo.

## Errores comunes

- **W-Q en la dirección equivocada.** Headbutt empuja al objetivo lejos de ti, en la línea sobre la que estás parado. Si Wuas desde abajo, lo lanzas hacia arriba de la lane (lejos de tu equipo). W siempre desde el **flank** (el ángulo lateral), así tu knockback empuja al carry hacia el daño de tu equipo, no hacia el suyo.
- **Engagiar sin follow-up.** Alistar sin su ADC y su equipo detrás es un tank sin daño. Si tu ADC está en base o tu jungler está en el otro lado del mapa, guarda la W. Un engage solo a 4v5 es regalar el cooldown de tu R al equipo rival.
- **Quemar R proactivamente para escapar.** **Unbreakable Will** es un tool ofensivo, no un botón de escape: da damage reduction y cleanse de CC, pero no movement speed. Usarla para huir sin equipo alrededor solo retrasa tu muerte 5 segundos. Guarda R para el engage que vas a comprometer, no para el disengage que no debiste necesitar.
- **Stackear Trample en minions.** La E stackea **solo** con golpes a campeones enemigos, no a minions. Quedarte sobre una wave vacía esperando que el proc de stun esté listo no hace nada. El proc solo importa cuando puedes encadenarlo en el daño de tu equipo.
- **No usar la pasiva durante el fight.** **Triumphant Roar** carga del CC que aplicas (Q, R, proc de E) y de **muertes de enemigos cercanos** — minions, monstruos de jungla o campeones enemigos. En un teamfight donde minions y creeps de jungla mueren a tu alrededor, puedes stackear el heal varias veces. Tappea el botón de la pasiva entre acciones: 50-100 HP gratis sobre ti y tu ADC cercano cambian el fight.

## Consejo avanzado

El **flash-W-Q one-shot**. Flashea hacia delante y castea **W** sobre un objetivo prioritario en el mismo frame: el dash arranca desde tu nueva posición flasheada, no desde donde el enemigo esperaba tu hitbox. Luego encola **Q** mientras estás aún en la animación de dash de W: el Pulverize sale en el instante exacto en que termina el knockback de W, con cero gap entre los dos crowd controls. Hecho bien, el objetivo no ve nada en pantalla más que un knock-up de un segundo y muere antes de reaccionar. La drill es muscle memory (el reflejo automático de los dedos): bindea las spells de modo que Flash + W + Q estén bajo la misma mano, y practica el ritmo en el **Practice Tool** hasta poder lanzar las tres dentro de medio segundo. Es la mecánica que transforma a Alistar de "tank que ayuda" a "tank que cierra fights".
