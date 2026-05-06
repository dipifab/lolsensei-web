---
title: "Kayn Jungle Build & Guía — Patch 16.9"
slug: "kayn-jungle"
language: "es"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Kayn jungle para League of Legends Patch 16.9: elección entre Rhaast y Shadow Assassin, jungle clear, gank timing, matchups clave y power spikes."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Golpear a enemigos llena orbs de dos colores: rojos con melee/fighter, azules con ranged/mage. Llenar una barra al 100% transforma a Kayn al nivel 6 en Rhaast (rojo) o Shadow Assassin (azul)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Dash corto que golpea a los enemigos en la trayectoria, luego un slash AOE. Mobility principal y herramienta de waveclear. El slash de Rhaast inflige daño % HP máximo."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Slow lineal de largo alcance. La versión Rhaast genera knock-up. La versión Shadow Assassin se lanza en movimiento y tiene mayor range."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Atraviesa muros con bonus move speed y una pequeña heal al entrar en terreno. Shadow Assassin obtiene mayor duración, slow immunity y cooldown reducido."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Se esconde dentro de un campeón marcado (mark dura 3.15s tras dañarlo) por unos segundos, luego sale con un burst enorme. Te vuelve untargetable: útil para esquivar CC."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs comps que kitean con varios carry ranged — el active slow deja a Rhaast pegado tras E + Q"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs doble AD (Yasuo + Caitlyn) — el bleed reparte el burst físico recibido"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst mágico ability-based (Syndra, Veigar, Annie) — da MR y un escudo bajo umbral de HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin vs CC single-target (Morgana Q, Ashe R) — el spellshield bloquea el hook antes del engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin vs targets con armor (Tabi tank, Bramble Vest) — armor pen y slow on-damage"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast vs stack de armor (Sion, Malphite) — rompe armor cada golpe y da bonus HP"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Sobrevive hasta nivel 6 para transformarte: Rhaast contra tanques de frontline, Shadow Assassin contra carries squishy. Castiga timings del jungler rival y snowballea con picks de R."
  weakness: "Kayn pre-form (niveles 1-5) es uno de los junglers más débiles: clear lento, sin sustain, fácil de invadir. Si te atrasas antes de transformarte, el scaling colapsa y no aportas nada."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Bruisers melee tanky y juggernauts de frontline"
      reason: "El daño % HP de la Q de Rhaast y el knock-up de la W destrozan targets con HP altos que otros assassins no logran matar, y llenas los orbs rojos de forma natural fighteándolos en skirmishes."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Carries ranged inmóviles (ADCs sin dash)"
      reason: "La R de Shadow Assassin te aparece dentro de su posición y los burstea atravesando la frontline — no tienen herramienta de escape para esquivar el channel mientras eres untargetable."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Supports enchanter squishy"
      reason: "Shadow Assassin los one-shotea en 1-2 abilities entrando por un muro con E, eliminando peel y disengage del equipo antes de que empiece el fight."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Junglers early-game fuertes con presión de invade"
      reason: "Amenazan los primeros tres camps de Kayn antes de que se transforme. Un invade exitoso a nivel 2-3 arruina el scaling porque no puede defender su jungle sin un clear fuerte."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Tanks con CC duro point-and-click"
      reason: "El taunt Q de Rammus o la R de Malphite atrapan a Kayn fuera de E y le cierran la combo. Ni la untargetability de la R de Shadow Assassin te salva si te stunean antes de castear."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Junglers con dueling fuerte y tools de counter-gank"
      reason: "Le ganan a Kayn 1v1 en su fase early débil y pueden invadirlo antes de la form. Si te campean la jungle, no puedes responder hasta el nivel 6."
---

## Resumen

Kayn es un jungler melee assassin/fighter con una mecánica única de transformación: al nivel 6 se convierte en **Rhaast** (forma roja, hybrid bruiser que se cura con el daño de las abilities y brilla contra tanks melee) o en **Shadow Assassin** (forma azul, AD assassin que borra a los carries squishy — "squishy" significa campeones de mucho daño y poca defensa, como los ADC). La forma depende de qué "orbs" llenaste durante el early game — fightea melee/fighter para llenar orbs rojos, fightea ranged/mage para llenar los azules. La primera barra que llegue al 100% bloquea la forma.

Tu game plan tiene dos fases. **Pre-transformación (niveles 1-5)** eres débil: haz clear con **Q** + **W** de forma eficiente, evita skirmishes (peleas pequeñas de 2-4 jugadores, no teamfights enteros) que puedas perder e intenta power-farmear hasta el 6. **Post-transformación** te vuelves una amenaza real: Rhaast busca fights prolongados y se tira sobre los frontliners, Shadow Assassin busca picks de **R** (dive = saltar sobre un enemigo bajo torre o en espacio abierto para matarlo) sobre carries aislados antes de que el equipo se agrupe.

## Build Recomendada

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper da tenacity (resistencia al crowd control) en peleas por objetivos, algo que Kayn necesita en ambas formas. Coge ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** si tienes claro que vas a Shadow Assassin y quieres move speed para los picks.

**Core items (en orden):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primer item de Rhaast. AD, attack speed, active slow. Combina muy bien con el dash de la **Q** para quedarte pegado a carries que kitean (kite = retroceder atacando para mantener distancia con los melee).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots por defecto contra cualquier equipo con stuns o roots. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra mucho daño de auto-attack (dos AD carries).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, escudo de salvavidas (HP-threshold passive: escudo que se activa cuando tu HP baja de un porcentaje). Obligatorio en Rhaast para sobrevivir a los fights largos que quieres iniciar.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — staple de Rhaast. AD, armor, ability haste, y efecto bleed (daño repartido en varios segundos en vez de recibirlo todo de golpe). Mejor item contra equipos con dos damage dealers físicos fuertes.

**Core path Shadow Assassin** (sustituye los items 1, 3, 4):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — primer item de lethality (armor pen flat que escala a la baja contra targets con mucho armor) para Shadow Assassin. AD, lethality, ability haste, y un active de área que ayuda al clear Y remata targets dañados tras la salida de **R**.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst y un active que da move speed para picks por todo el mapa.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive de execute que remata targets bajo el 5% HP, perfecto tras el burst de la **R**.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs burst mágico ability-based (Syndra, Veigar, Annie). Da magic resist y un escudo de salvavidas bajo umbral de HP.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin vs CC single-target (Morgana Q, Ashe R). El spellshield (passive que bloquea la siguiente ability enemiga) salva tu engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin vs stack de armor (Tabi tank, Bramble Vest). Armor pen más slow al dañarlos.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast vs Sion, Malphite, o cualquier frontline que stackee armor. Rompe armor con cada golpe y da bonus HP.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs poke fuerte de una backline mágica (Xerath, Vel'Koz). Mucho HP más un escudo mágico que se regenera fuera de combate.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** son la opción por defecto por la tenacity (duración reducida de stuns y slows). Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra dos AD carries.

**Skill order:** Maxa **Q** primero (reset en camps de jungle y daño principal). Maxa **E** segundo (cooldown reducido para reposicionarte y wall plays). Maxa **W** al final. Pon un punto en **R** a niveles 6, 11, 16.

**Runes:** Primario **Precision** con **Conqueror** (apila adaptive force en fights prolongados, ideal para Rhaast), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Secundario **Domination** con **Sudden Impact** y **Relentless Hunter**. Para setup Shadow Assassin one-shot, **Hail of Blades** en Domination es la alternativa.

## Matchups clave

- **Lee Sin / Elise:** Bullies del early game. Empieza por los camps top si tu top laner tiene CC para ayudarte (counter-gank), y wardea las entradas de raptor/red al minuto 1:30. NO contestes el Scuttle Crab del river si tu top no va contigo — pierdes el 1v1 antes de la form.
- **Sett / Darius (top):** Targets de feed gratis para Rhaast si gankeas top. Su kit los obliga a entrar en melee, llenándote los orbs rojos rápido. Espera a que usen su ability principal (W de Sett, pull de Darius) y engage con **E** atravesando muro + **Q** + **W** knock-up si eres Rhaast.
- **Vayne / Caitlyn (bot):** Targets prioritarios para Shadow Assassin. No tienen dash para esquivar la **R**, y llenan los orbs azules porque pelean a distancia. Tras la form, gankea bot lane en cooldown.
- **Malphite / Rammus (counter top jungle):** Su CC duro point-and-click te cierra la combo. Compra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pronto y nunca engage sin el CC de tu support listo antes.
- **Yuumi / Lulu (support enemigo):** Targets gratis para Shadow Assassin en teamfights late-game. **R** sobre ellos desde una posición de flank en cuanto se despeguen del carry — no tienen peel para sí mismos.

## Power spikes y condiciones de victoria

- **Nivel 6 + transformación:** Este es el spike (un "spike" es el momento en que tu campeón se vuelve mucho más fuerte por un nivel o un item). Antes de transformarte estás por debajo de la media; después, eres un top-3 jungler. Tempa tu primera big play (un gank o pick de **R**) en el segundo en que te transformas, mientras el equipo enemigo aún te cree débil.
- **Control del Crab (minuto 3:15 y minuto 6:00):** El Crab da experiencia y vision. Como Kayn pre-form no puedes duelar por él; trae al top o mid laner a contestar, o cédelo limpio y farmea camps en vez de morir.
- **Primer Drake fight (minuto 6-9):** Kayn pre-form es malo en brawls 5v5. Si tu equipo puede coger Drake sin ti, acordad un trade de Voidgrubs (los gusanos pequeños del river top que dan una passive a quien los remata) en el lado opuesto y farmea tu jungle mientras pelean.
- **Primer item completado (~ minuto 13-15):** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** para Rhaast o ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** para Shadow Assassin: aquí tu conversion rate de ganks pasa de "necesita setup perfecto" a "kill solo con un flash del laner".
- **Tres items Shadow Assassin (~ minuto 22-25):** Con ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online, tu combo de **R** one-shotea a cualquier squishy bajo el 5% HP. Fuerza pickoffs (kills sobre targets aislados) antes de las peleas por objetivos.

## Errores comunes

- **Bloquear la forma equivocada para la comp del equipo.** No auto-pickees Shadow Assassin cada partida porque sea más vistoso. Mira al equipo enemigo: 3+ tanks/bruisers = Rhaast (importan el daño % HP y el sustain). 2+ carries squishy sin dash = Shadow Assassin. Llenar la barra equivocada es culpa tuya: fightea a los enemigos correspondientes hasta que se bloquee la barra correcta.
- **Gankear antes de nivel 6.** Los ganks de Kayn pre-form hacen casi cero daño. A menos que el laner enemigo esté bajo el 30% HP o hard-CC-locked, tu gank solo desperdicia tiempo que deberías gastar farmeando. Gankea solo en setups de overkill (Flash + ulti claros del laner) hasta que te transformes.
- **Usar R defensivamente sin salida.** **Umbral Trespass** te vuelve untargetable mientras estás dentro del enemigo, pero sales en el mismo punto desde el que casteaste. Si ulteas dentro de un fight 5v5 para esquivar CC y tu equipo no está ganando, sales a la misma muerte que intentabas evitar. Usa la **R** cuando puedas rematar el kill o cuando lleguen aliados, no como Flash de pánico.
- **Pasar el muro con E hacia el equipo enemigo.** Los wall walks de **Shadow Step** son vistosos pero tienen cooldown largo. Engage atravesando un muro sin escape detrás te compromete entero. No vayas all-in (comprometerte al fight sin retirada) sobre un muro a menos que la **R** esté lista y tengas un target claro.
- **Ignorar fights de orb rojo como Rhaast.** Si decidiste Rhaast, cada fight contra un target melee llena la barra más rápido. No huyas de un skirmish con el top laner: tírate, llena la barra, y fuerza la form al minuto 5-6 en vez de al 8.

## Consejo avanzado

Usa **E** ofensivamente como tool de vision, no solo como escape. Caminar dentro del muro de la jungle enemiga y esperar 1.5 segundos en el terreno revela si su jungler está al otro lado sin comprometerte — Kayn es invisible para ellos mientras está dentro del muro. Si el camp está cogido, sabes que el enemigo está en tu lado del mapa y rotas atrás. Si el camp está up, puedes cruzar el muro para invadir con combo **Q** + **W** desde un ángulo que no esperan. Este truco solo convierte a Kayn de "scaling jungler" a "information jungler" en el mid-game.
