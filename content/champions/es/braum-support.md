---
title: "Braum Support Build & Guía — Patch 16.9"
slug: "braum-support"
language: "es"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Braum support para League of Legends Patch 16.9: starter, build path tank-peel, matchups de lane, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Las auto-attacks de Braum aplican un stack de Concussive Blows. Tras el primer stack, las autos de los aliados también suman. A 4 stacks el objetivo queda aturdido y recibe daño mágico. La Q aplica un stack a distancia."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Skillshot lineal de largo alcance que ralentiza y hace daño mágico. Aplica un stack de Concussive Blows a distancia: es la herramienta de setup para iniciar la cadena de stun sin entrar a rango de auto-attack."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum salta a un aliado (campeón o minion). Al llegar, ambos ganan armor y magic resist por unos segundos. Es el peel signature: saltas frente a tu ADC para body-blockear el daño entrante."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum alza el escudo en una dirección durante varios segundos: intercepta cada projectile que viene de ese lado, anula el primer basic attack y reduce el daño de las siguientes auto-attacks desde esa dirección."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum golpea el suelo: knock-up a los enemigos a su lado y en línea frente a él. Sobre la línea queda una grieta helada que ralentiza al cruzarla. Cooldown largo: el botón principal de engage o peel del equipo."
      dd_spell_id: "BraumRWrapper"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap desde Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) cuando el harass early pesa más que el CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps donde el ADC es la carry principal y se queda cerca (Aphelios, Jinx) — el proc de R triggea junto al bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs comps AP burst (doble mago tipo Syndra mid + Brand support): el escudo mágico aguanta una ulti y te deja seguir peelando"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Acierta Q a una carry prioritaria, walk-up para la auto que cierra el stun a 4 stacks, luego peelea a tu ADC con W jumps y muro E durante todo el fight. R cuando el equipo enemigo se agrupe en la zona del knock-up."
  weakness: "Lento e inmóvil (sin dash, sin blink): el hard CC a distancia te corta del ADC. La Q es skillshot — si la fallas no tienes amenaza de kill, y una R desperdiciada te deja fuera del siguiente teamfight."
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
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs inmóviles sin dash"
      reason: "La Q tiene 1000 de rango y aplica un stack de Concussive Blows a distancia. Contra un ADC sin escape, una Q + una auto del ADC + tu auto cierran el stun a 4 stacks: no tienen forma de romper la cadena."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters squishy sin CC duro"
      reason: "No tienen herramientas para frenar tu walk-up. Una vez que la Q toca, no tienen peel para su ADC, y tu E bloquea cada skillshot de healing-cancel que tirarían para salvarlos."
    - examples: ["draven", "lucian"]
      archetype: "ADCs agresivos que se adelantan a tradear"
      reason: "Su kit los obliga a entrar a rango Q para tirar hachas o dash-AA. Cada paso adelante es un stack gratis de Concussive Blows: o se retiran y pierden lane prio, o comen el stun a 4 stacks."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports con pull o stun point-and-click"
      reason: "Un hook acertado saca a Braum del rango W de su ADC. Mientras se lo burstean atrás, el ADC enemigo borra a tu carry sin protección."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports de largo alcance que pokean más allá de la Q"
      reason: "Se sientan a 1100+ de rango y te raspan HP gratis. Braum no tiene respuesta más allá de su Q, y la E solo ayuda si ya estás cerca: ganan la lane por desgaste."
    - examples: ["ashe", "varus"]
      archetype: "ADCs con self-peel gracias a slow built-in"
      reason: "El slow de sus auto-attacks mantiene a Braum a distancia. No llega a rango W para body-blockear, así que su kit de peel queda a la mitad y la frontline de su equipo cae antes."
---

## Resumen

Braum es un **warden support** (un support de clase tank cuyo trabajo es proteger a su propio ADC, no abrir fights) — construido para peelear a los enemigos lejos de su carry, no para divear a la rival. Su kit gira en torno a una sola amenaza: **Concussive Blows**, la pasiva que aturde a cualquier objetivo golpeado por 4 auto-attacks de Braum o de sus aliados. El truco: **Winter's Bite (Q)** aplica un stack a 1000 de rango, así que Braum tira la Q, hace walk-up y una de sus autos más una de su ADC dispara el stun sobre la carry rival. **Stand Behind Me (W)** lo hace saltar a cualquier aliado y les da armor y magic resist al llegar — la herramienta de **peel** (proteger a tu carry de los enemigos que intentan matarlo) que lo hace único. **Unbreakable (E)** es un escudo direccional que hace **body-block** a cada projectile que llega desde la dirección elegida (auto-attacks ADC, R de Caitlyn, R de Ezreal, R de Ashe). **Glacial Fissure (R)** es el knock-up AOE en línea: cooldown largo, usado como engage o como panic peel cuando su **diver** (un campeón que salta al backline rival) cae sobre tu carry.

Game plan: en lane, **poke** (chip damage a distancia) con la Q cada vez que el ADC enemigo se adelante a last-hittear, luego walk-up para la auto que cierra el stun — tu ADC descarga en la ventana de 1 segundo. Después del nivel 6, **roam** (dejar bot lane para ayudar a mid o jungle) con la R para preparar picks: tu **lead** (ventaja early) viene de convertir los stuns por Q en objetivos, no en kills en solitario. Late-game quédate un paso delante del ADC, salta atrás con W en cuanto le hagan engage, y suelta la E en línea con cualquier **skillshot** (una habilidad que hay que apuntar) entrante — Braum es el único support que puede cancelar una ulti de Caitlyn a mitad de channel.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el starter unificado de los supports) más 2 Health Potions. No last-hittees minions en lane: deja el gold a tu ADC, World Atlas te paga por separado a través del progreso de quest.

**Items core (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evoluciona automáticamente conforme acumulas progreso de quest pasando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** y ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, terminando en el upgrade endgame que elijas.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist más **tenacity** (una stat que reduce la duración del crowd control). Bota por defecto para un peel tank: stuns más cortos significa que llegas a rango W de tu ADC antes de que esté ya muerto.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — el upgrade endgame peel-focused del item de support. Cada vez que aplicas CC a un campeón (slow Q, stun pasiva, knock-up R) ralentiza más a los enemigos cercanos y te da a ti y a un aliado cercano un burst de movement speed: justo lo que necesitas para perseguir a un objetivo bajo de HP o kitear hacia tu carry.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te liga a tu **ADC** (Attack Damage Carry — el compañero de bot lane que hace daño con auto-attacks, el principal damage dealer late-game del equipo): una porción del daño que recibe se redirige a ti y tú lo curas a cambio. Elige siempre a la carry cuya vida más necesitas extender.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active que escuda a todos los aliados cercanos por unos segundos. Tíralo en el instante en que el equipo rival comprometa el engage para que tu equipo absorba el primer **burst** (el daño alto que sueltan en los primeros 1-2 segundos del fight).

**Items situacionales:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas que dan armor y reducen el daño de auto-attacks. Cámbialas por Mercury's Treads cuando la bot lane rival sea auto-attack heavy (Caitlyn, Draven, Tristana) y su **harass** (poke y chip damage para desgastarte) te pese más que el CC late-game del equipo enemigo.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bóndalo a tu ADC. Cuando aplicas crowd control a un enemigo (slow Q, knock-up R) la siguiente auto del bonded ally hace daño mágico bonus en área: perfecto cuando tu carry se queda cerca de ti (Aphelios, Jinx) y le metes Q a la front line para preparar su primera auto.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — pasiva escudo mágico que se regenera fuera de combat. Cómpralo contra comps AP burst (un setup doble mago tipo Syndra mid + Brand support): el escudo se come una ulti entera y te permite seguir peelando en vez de morir el primero.

**Botas:** Por defecto ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** por la tenacity — un root de Morgana de 2 segundos pasa a 1.2, dejándote la ventana para hacer W de vuelta a tu ADC. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** antes de completarlas solo si la bot lane rival es auto-attack heavy y te pesa más que el CC late del equipo enemigo.

**Skill order:** Maxea **Q** (Winter's Bite) primero — es tu único daño a distancia, el aplicador de stacks, y el cooldown baja de 8 a 6 segundos al rank 5 (más poke, más presión en lane). Maxea **E** (Unbreakable) segunda — la mayor duración del muro de escudo limpia el peel en teamfight. Maxea **W** la última (el cooldown del salto baja pero las resists importan más en los primeros ranks, y rara vez te faltan targets W). Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Primaria **Resolve** (árbol defensivo — durabilidad) con **Aftershock** (armor y MR gratis por unos segundos cuando aplicas CC, salta en cada stun de pasiva y en cada R), **Font of Life** (tu CC marca al objetivo; los aliados que lo atacan se curan un poco), **Conditioning** vs lanes que escalan late o **Bone Plating** vs lanes de burst early, y **Unflinching** (extra **tenacity**, la stat que reduce el CC, cuando usas un summoner spell). Secundaria **Inspiration** (árbol utility) con **Hextech Flashtraption** (Flash de corto alcance de respaldo en cooldown largo — ángulos R sorpresa) y **Cosmic Insight** (cooldowns reducidos en summoner spells y Locket active). **Stat shards** (tres pequeños boosts al final de la página de runas): Health / Health / Health — Braum escala con HP plano, y la durabilidad early te permite walk-up para aplicar stacks de Q.

## Matchups clave

- **Leona:** Matchup de **engage** (ella quiere abrir el fight) contra tu **peel** (tú quieres frenar el suyo). Tiene CC a más rango que el tuyo (Zenith Blade dash-stun, Solar Flare R), así que no body-blockees temprano — quédate un paso detrás de tu ADC y W lejos en cuanto vuele su Zenith Blade. Cuando su E entre en cooldown tienes 10 segundos para walk-up y Q-stackear a su ADC gratis.
- **Pyke:** Skill matchup — sin ventaja clara sobre el papel, lo decide quién juega mejor. Te poka con Q y te out-roamea en **stealth** (se vuelve invisible al pasar por arbustos). Mantén vision profunda en los bushes del río, fuerza fights en lane donde el reset de su R no importe, y mete E sobre su hook de R para body-blockear el pull a tu ADC.
- **Lulu:** Hard counter a tu **all-in** (commit total a la kill). Su polymorph cancela tu auto-attack a media cadena — ya no cierras el stun a 4 stacks. No commitees con polymorph arriba; trackea su cooldown (alrededor de 13 segundos al rank 1) y fuerza trades solo en la ventana en que esté abajo.
- **Soraka:** **Sustain enchanter** pura (un support healing-focused que gana manteniendo vivo a su ADC, no abriendo fights) sin engage propio. La out-tradeas: no tiene cómo frenar tu Q + walk-up, y su healing es más o menos la mitad de tu daño de stun. Fuerza trades cortos cuando su Q esté en cooldown.
- **Senna:** Matchup de **poke** a largo alcance (chip damage a distancia para desgastarte). Te bullea el HP bajo torre con Q a través de minions. Quédate al fondo de la oleada para que su Q se cure de tus minions pero no te toque, y tradea solo cuando tu jungler esté bot side — Senna sin dash muere a una sola cadena Q-stun.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + W):** Primer spike. La cadena completa **Q + walk-up auto + auto del ADC** se desbloquea con la W como segunda habilidad, porque la W te deja reposicionarte fuera del counter-damage. Un ADC en over-extend (uno que ha pushado más allá de su primera **wave** — la fila de minions entrantes) pierde 30% de HP a una cadena de stack.
- **Nivel 6 (R desbloqueada):** Engage y peel suben de nivel. **Glacial Fissure** es un knock-up en línea que tu ADC convierte en kill; o, alternativamente, es el botón de panic peel cuando su Zed cae sobre tu carry. Puedes Flash-R en ángulos que su equipo no espera — flash adelante e instantáneamente cast R es la herramienta sorpresa de pick.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completo (~minuto 12-14):** Primer item de teamfight online. El burst de movement speed por CC te deja perseguir a un enemigo bajo de HP a través de minions o kitear hacia un carry tambaleante. Agrúpate con tu equipo para **Drake** (el dragón en bot river — las kills dan buffs permanentes al equipo) o **Voidgrubs** (mostriciatos en top river — el equipo que los mata gana daño bonus contra estructuras).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari endgame (~minuto 22-26):** Con Locket y uptime pleno de E, tu equipo sobrevive a un wombo combo (un team-fight engage encadenado). Tu trabajo pasa a ser muralla con E el cono de daño de la carry rival mientras tu equipo mata a la suya primero.

## Errores comunes

- **Tirar la Q sin walk-up.** Una Q-slow sola no es amenaza de kill — el enemigo sale del rango y has gastado 8 segundos de cooldown. La Q es el **setup** (el movimiento que prepara la kill, no la kill); en el instante en que toca, walk-up para la auto. Sin la auto, los stacks de Concussive Blows caen tras unos segundos y el reset de lane llega para nada.
- **W sobre tu ADC cuando ya está muerto.** La W tiene 650 de rango en 12 segundos de cooldown al rank 1. Si esperas a que tu carry esté a 20 HP para saltar, el bonus de resist llega tarde. Regla: W al ADC el **mismo instante** en que ves el commit enemigo (Q de Leona vuela, hook de Blitz en el aire, sombra de Zed dentro), no después de que llegue a cero.
- **Quedarse delante gratis.** La E de Braum solo protege la dirección a la que mira. Si estás detrás del ADC, no escuda nada. La posición por defecto es un paso delante y un paso **hacia** la fuente de daño esperada — mira a la Caitlyn, no a tu jungler.
- **Quemar la R en un solo target.** **Glacial Fissure** es un knock-up AOE en línea con cooldown de 100-130 segundos. Usarla para ultar a un enemigo casi muerto en side lane es un **throw** (regalo de ventaja) — te dejas fuera del siguiente teamfight. R solo cuando hay 2+ enemigos en la línea, o cuando tu carry muere sin el panic peel.
- **Olvidar el reset de los stacks de pasiva.** Los stacks de Concussive Blows **caen** tras unos segundos si no llega uno nuevo, y un objetivo recién aturdido no puede recibir stacks nuevos durante varios segundos más. Spamear autos sobre un ADC recién aturdido no aporta nada — pasa al siguiente target prioritario, o retírate y resetea el timer de resist W.

## Consejo avanzado

El ángulo **flash-R**. La R de Braum tiene una línea de 1250 de rango frente a él; el windup del cast es lo bastante corto para Flashear adelante, pulsar R al instante, y hacer que la línea spawnee desde la **nueva** posición flasheada — pillando a una carry de backline que se creía a salvo a 1500 de rango. Asigna Flash y R al alcance de la misma mano y practica el timing en **Practice Tool** hasta que ambos disparen en un quinto de segundo. Guárdalo para un fight donde tu equipo ya esté agrupado: un flash-R que pille al ADC + support enemigo se convierte en un ace limpio, mientras que la misma R sobre un mid-laner aislado es un cooldown largo gastado en una skirmish.
