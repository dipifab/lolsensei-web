---
title: "Leona Support Build & Guía — Patch 16.9"
slug: "leona-support"
language: "es"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Leona support para League of Legends Patch 16.9: starter kit, build tank-engage, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Las habilidades de Leona aplican el debuff Sunlight durante 1.5 s. El siguiente aliado que dañe al objetivo consume la marca para daño mágico extra. Daño bonus gratis en cada engage."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "La próxima auto-attack de Leona aturde brevemente y aplica daño mágico bonus. Auto-targeted (no requiere apuntar) pero a melee range: hay que estar pegada. El segundo crowd control fiable tras la E o R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Damage reduction más armadura y resistencia mágica extra durante unos segundos. Al expirar inflige daño AOE (área, golpea a todos los cercanos); si impacta, las resistencias duran más. Actívala antes del engage."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona proyecta una espada en línea: el último campeón impactado queda rooteado (atrapado) y Leona dasha hasta él. Skillshot (habilidad que hay que apuntar, vuela en línea, esquivable). Engage principal, abre la cadena E en Q."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "AOE retardado de largo alcance: los enemigos en el centro quedan aturdidos, los del borde ralentizados. Cast delay largo: úsala para abrir un fight desde lejos, lockear a un objetivo en fuga o iniciar un teamfight fuera del rango de E."
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
      against: "swap desde Mercury's vs bot lanes con mucho auto-attack (Caitlyn, Draven, Tristana) cuando el harass duele más que el CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps con melee carry (Yasuo, Yone, Master Yi) sobre el que ulteas fiable: la R añade daño mágico bonus a sus auto-attacks"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs comps de burst AP (doble mago tipo Syndra mid + Brand support): escudo mágico pasivo que se regenera fuera de combate"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Lanza E desde fog (brush sin ward), aterriza sobre el ADC enemigo, encadena Q stun y AA con la marca Sunlight: tu ADC dobla daño en la proc y el carry muere antes de que el support reaccione."
  weakness: "La E es un skillshot lento, fácil de esquivar en terreno plano. Cero poke a distancia: si la bot lane enemiga se queda fuera de E pierdes la calle y tienes que roamar. Mana frágil en early."
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
      reason: "No tienen herramientas para interrumpir el dash de la E. En cuanto la E aterriza sobre el ADC, muere en el stun de la Q antes de que el enchanter pueda escudar o peelear. Yuumi ni siquiera se desliga a tiempo."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs inmóviles sin dash"
      reason: "La E tiene 875 de rango y dasha sobre el último campeón impactado: los ADCs sin blink se comen la cadena E en Q cada vez que avanzan a last-hittear. Una vez que comprometes, no pueden escapar."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports estacionarios sin escape"
      reason: "Su poke les cuesta posicionamiento: un Flash más E los engancha y la W se come su counter-burst. Tienen que quedarse quietos para castear sus skillshots largos: justo cuando la E aterriza limpia."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Bloqueadores de hard CC y enchanters de disengage"
      reason: "Black Shield de Morgana bloquea el root de la E: te flasheas en vano. La R de Milio limpia la cadena de stun a distancia. El polymorph de Lulu cancela el dash a media animación. Tu único engage queda respondido gratis."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Pokers de largo alcance con sustain o roots"
      reason: "Te chipean HP gratis a más de 800 de rango y tú no tienes respuesta. La Q de Lux te bindea durante el engage y la burbuja de Nami interrumpe el dash; comes poke sin entrar nunca en rango."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports que te sacan de posición"
      reason: "Su hook aterriza antes que tu E (Q de Thresh ~1100 vs E 875). Comes el pull, te focusean solo en su equipo y tu ADC queda expuesto sin tool de engage."
---

## Resumen

Leona es un **vanguard support** (un support tipo tank cuyo trabajo es abrir fights, no curar aliados): corre sobre el carry enemigo, lo encadena en crowd control y deja que sus compañeros cierren los kills. Su kit apila dos crowd controls sobre un mismo objetivo: **Zenith Blade (E)** es un skillshot dash a largo alcance que rootea al último campeón impactado, **Shield of Daybreak (Q)** es un stun en la próxima auto-attack, y su pasiva **Sunlight** marca a cada enemigo que daña para que el siguiente aliado que lo golpee inflija daño mágico bonus. **Eclipse (W)** es la capa defensiva que se activa *antes* del engage: damage reduction más armadura y magic resist que duran más si impacta a algún enemigo al expirar. **Solar Flare (R)** es un stun AOE retardado usable a más distancia que la E — para engagiar desde fog of war o lockear un kill en fuga.

Game plan: en lane, quédate al borde del brush hasta que el ADC enemigo se acerque a last-hittear; entonces lanza la E desde fog (brush sin ward) para que no pueda sidesteppear, encadena Q y deja que tu ADC convierta. En mid-game, **roamea** (deja la bot lane para ayudar a mid o jungla) usando la R para picks cross-lane. En late-game, abre el fight sobre el objetivo prioritario — normalmente el ADC enemigo o el mago mid — y mantente vivo lo suficiente para hacer **peel** (proteger a tu propio carry).

## Build Recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el starter unificado de support) más 2 Health Potions. No last-hitees minions: deja el oro al ADC. World Atlas te paga el oro aparte mediante su quest progression.

**Core items (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evoluciona automáticamente a medida que acumulas progreso de quest pasando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** y ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, hasta el upgrade endgame que elijas.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist más **tenacity** (stat que reduce la duración del crowd control sobre ti). Un stun más corto significa que aún consigues castear tu Q después de que el support enemigo intente interrumpirte.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armadura, magic resist y un activo que escuda a todos los aliados cercanos. Actívalo en el momento que metes E para que el equipo absorba el primer **burst** (daño alto en los primeros 1-2 segundos).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te une al **ADC** (Attack Damage Carry — el bot lane que pega con auto-attacks): una porción del daño que recibe se redirige a ti, y tú lo curas a cambio.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — el upgrade endgame engage-focused del support item. Lleva una pasiva **Spellblade**: tras cualquier habilidad, tu siguiente auto-attack inflige daño bonus y amplifica el daño sobre el objetivo durante 4 segundos. Patrón: "habilidad → AA → habilidad → AA".

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas de armadura que reducen el daño de auto-attack. Cambia desde Mercury's cuando la bot lane enemiga sea pesada en auto-attack (Caitlyn, Draven, Tristana) y su **harass** (poke y chip damage) duela más que el CC late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — te une a un aliado; cuando ulteas, ese aliado gana daño mágico bonus en sus ataques. Pickéalo con un melee carry (Yasuo, Yone, Master Yi) sobre el que ultees fiable.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — escudo mágico pasivo que se regenera fuera de combate. Pickéalo en comps de burst AP (doble mago tipo Syndra + Brand): el escudo se come una ulti entera.

**Boots:** Por defecto ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** por la tenacity — un hook de Thresh de 1.25s pasa a 0.85s, suficiente para castear la Q. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo contra bot lanes AA-heavy.

**Skill order:** Maxea **E** (Zenith Blade) primero — menor cooldown significa más ventanas de engage, y la E es tu única herramienta a distancia. Maxea **W** segunda para más damage reduction. Maxea **Q** la última (subir rangos casi no cambia el stun, sobre todo daño). Toma **R** en niveles 6, 11, 16.

**Runes:** Primary **Resolve** (el árbol de runas defensivas — durabilidad) con **Aftershock** (armadura y magic resist gratis cuando aplicas crowd control, dispara en cada Q stun y E root), **Font of Life** (tu CC marca al objetivo; los aliados que lo ataquen se curan), **Conditioning** vs lanes que escalan late o **Bone Plating** vs burst early, **Unflinching** (extra **tenacity** al usar un summoner spell). Secondary **Inspiration** con **Hextech Flashtraption** (Flash de respaldo en cooldown largo) y **Cosmic Insight** (cooldowns reducidos en summoners y activos de item). **Stat shards**: Adaptive Force / Adaptive Force / Health.

## Matchups clave

- **Nautilus:** Mirror **engage**. Su Q hook supera a tu E (~1100 vs 875), así que no avances mientras su hook esté up. Esquívalo y luego flash-E sobre su ADC mientras él no tiene follow-up.
- **Pyke:** Skill matchup. Te pokea más con la Q y te supera en roam con su **stealth** (invisible al cruzar brushes). Mantén vision profunda en el río y fuerza fights en lane donde su R no resetea sobre el kill.
- **Morgana:** Hard counter contra tu **all-in** (commit total al kill). Black Shield bloquea el root de la E entera: te flasheas en vano. Trackea su cooldown de 18 segundos y fuerza fights solo en la ventana en que está down.
- **Soraka:** Pura **enchanter de sustain** (support cura que gana manteniendo viva al ADC, no abriendo fights). Flash-E sobre ella siempre que su Flash esté down — muere en tu combo antes de que el ADC reaccione.
- **Caitlyn:** Matchup de **poke** a largo alcance (chip damage a distancia). Te bullea el HP bajo torre. No respondas, asume la mala lane, roamea mid o invade con Mobility Boots — Leona pierde la lane pero gana el macro.

## Power spikes y condiciones de victoria

- **Nivel 2 (E + W):** Primer spike. La cadena completa E en Q se desbloquea en nivel 3, pero con E más W ya puedes **tradear** fuerte (un intercambio breve, no un kill commit completo). Un ADC enemigo que se sobreextiende (más allá de su primer **wave** — la fila de minions entrantes) es un kill gratis si metes E con **Flash** up.
- **Nivel 6 (R desbloqueada):** El potencial de engage explota. **Solar Flare** te permite abrir fights desde fog of war: cástala desde dentro del brush del río sin mostrarte. La R también funciona como **peel** (proteger a tu carry) — déjala caer sobre quien dive a tu ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primer item de teamfight. Tu engage suelta un escudo de equipo gratis. Agrúpate para **Drake** (objetivo dragón en el río inferior — los kills dan buffs de stat permanentes) o **Voidgrubs** (monstruos pequeños en el río superior — el equipo que los mata gana daño bonus a estructuras).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** La proc de Spellblade más los 4 segundos de amp de daño sobre campeones convierten tu rotación en daño real. E → AA → Q → AA quita personalmente 20-25% del HP a un **squishy** (campeón con poca defensa, tipo ADC o mago).

## Errores comunes

- **E desde terreno abierto.** Zenith Blade es un proyectil lento, fácil de sidesteppear en lane plana. Casta E desde dentro de un brush o desde un ángulo sin ward — el proyectil cruza el medio segundo de visión que el enemigo necesita para reaccionar. En terreno abierto, casta E solo cuando el objetivo ya está CCeado por otra fuente.
- **Engagiar sin follow-up.** La E de Leona te commitea hacia adelante y no puedes retroceder. Si tu ADC está en base o el jungla está al otro lado del mapa, retén la E. Un engage en solitario en 4v5 te regala y quema la R por nada.
- **W casteada después del engage en vez de antes.** Eclipse da damage reduction el *instante* en que la casteas, no cuando explota. Pulsa W primero, *después* E. Si haces E y solo entonces te das cuenta de que necesitabas las resistencias, el bonus de W suele expirar antes de llegar al objetivo.
- **R reactiva a corto alcance.** Solar Flare tiene cast delay largo y travel time — a melee range incluso un objetivo quieto se sale del stun central. Guarda la R para abrir un fight desde fog of war o cerrar un runner low-HP.
- **Olvidar la pasiva Sunlight.** Cada hechizo que aciertas marca al objetivo durante 1.5 segundos; el primer aliado que lo golpea consume la marca para daño bonus. Tempa la Q de modo que tu ADC ya esté en rango de auto-attack — la cadena debería sonar como "Q stun, ADC AA, Sunlight estalla, objetivo muerto".

## Consejo avanzado

La **combo R-Flash-E desde fog of war**. Quédate sin ser vista en el brush enemy-side del río en nivel 6. Casta **R** sobre el ADC enemigo mientras farmea — ven el indicador en el suelo pero no la fuente. En el instante en que empiece a moverse para esquivar, **Flash** hacia delante, **E** durante el flash (el dash se extiende desde la posición flasheada) y **Q** al llegar. Bien hecho, el objetivo come stun de R, root de E y stun de Q — tres crowd controls en dos segundos sin counter-play. Practica el timing en **Practice Tool** hasta que R-Flash-E-Q sea una secuencia fluida en medio segundo.
