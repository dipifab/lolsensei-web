---
title: "Corki Mid Build & Guía — Patch 16.9"
slug: "corki-mid"
language: "es"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Guía de Corki mid para League of Legends Patch 16.9: build de marksman híbrido, runes, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Una parte del daño de los auto-attacks se convierte en true damage. DPS constante que ignora armor y magic resist — por eso apilas attack speed y on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bomba en área que hace daño mágico y revela brevemente a los enemigos. Sirve para last-hits cuando estás zoneado, para checkear bushes y para abrir cada trade de poke."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash corto que deja un rastro de fuego. Es tu única movilidad: úsala para huir, gap-close o esquivar un skillshot. No la malgastes en waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cono channelado frente a Corki: hace daño y reduce armor y magic resist. Suma DPS y ablanda al objetivo para las missile de R."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Misil de largo alcance que explota al impactar. Acumulas hasta 7 cargas; cada tercera es una Big One con burst extra. Tu poke principal y herramienta de remate."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins con varios dashes (Zed, Akali, Talon): la stasis frena su burst y da tiempo a tu W o al peel del equipo"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontline con 2+ tanques (Sion, Ornn, Maokai): armor pen pesada para que autos y missile sigan haciendo daño"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (LeBlanc, Veigar, Syndra): el escudo mágico absorbe una full combo y te deja salir con W"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra equipos con 3+ hard CC (stuns, roots): cambia de botas cuando la chain CC pesa más que la magic pen"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Escala detrás de los minions hasta Trinity Force y Manamune, luego raspa HP a los squishies con poke de R a máximo rango. Caza objetivos aislados durante las rotaciones mientras el equipo controla los objetivos."
  weakness: "Squishy con un único dash. Assassins móviles con varios gap-closers lo arrollan antes de dos items, y las habilidades anti-projectile (Yasuo Wind Wall, Braum E) anulan su poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike premia a Corki por abrir cada trade con Q o R, convirtiendo ese daño inicial en oro extra que financia la build greedy Trinity + Manamune. Magical Footwear, Biscuit y Cosmic Insight extienden el sustain early para escalar sin morir."
    secondary_rationale: "Sorcery secondary: Manaflow Band es obligatoria porque los misiles de R cuestan maná y los spameas en línea; Gathering Storm regala AP gratis que infla el daño mágico de Q y de la Big One en el late game."
    secondary_alternative: "Contra lanes de poke pesado (Xerath, Vel'Koz, Zoe) donde no puedes permitirte ir por detrás de HP, cambia Sorcery por Resolve con Second Wind (regen pasiva bajo harass) y Overgrowth (max HP scaling) para escalar más seguro."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Magos inmóviles sin dash"
      reason: "La R de Corki llega a 1225 unidades y su W le da la única ventaja de movilidad de la lane. Targets sin dash ni stealth comen poke de R repetido y no pueden castigar las ventanas en las que la W está en cooldown."
    - examples: ["xerath", "vel-koz"]
      archetype: "Magos de artillería con channel largos"
      reason: "Corki iguala su rango con la R y además tiene un dash para interrumpir channels largos (Xerath R, Vel'Koz R). No pueden hacerle all-in y los trades favorecen al lado con movilidad."
    - examples: ["annie", "syndra"]
      archetype: "Magos de burst de corto alcance"
      reason: "Su kill threat empieza dentro del rango de auto-attack, justo donde la passive a true damage de Corki más Trinity Force los supera. Pre-6 los out-pokeas con R; post-6 esquivas su stun con W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "Corki solo tiene un dash (W) con cooldown largo. Kits con varios dashes entran en su cast range antes de que la W vuelva y lo revientan a través del HP de Trinity, sobre todo antes de dos items."
    - examples: ["yasuo", "yone"]
      archetype: "Bloqueadores de proyectil con Wind Wall"
      reason: "Wind Wall come la Q y todo el missile barrage de R, quitando dos tercios del daño de Corki en el trade. Aunque gane HP, el coste en cooldowns del trade es brutal."
    - examples: ["fizz", "kassadin"]
      archetype: "Escapes untargetable / blink"
      reason: "La E de Fizz y la R de Kassadin esquivan una combo committeada y luego re-engagean a Corki cuando su W está abajo. No tiene burst de follow-up cuando se vuelven untargetable."
---

## Resumen

Corki es un marksman híbrido (carry a distancia que mezcla daño físico y mágico) que juega mid lane como una artillería de largo alcance: se hace más fuerte a medida que completa items ("escala"), raspa HP a los enemigos desde lejos ("poke" = daño chip desde fuera de su rango) con **Missile Barrage (R)** y remata a los squishies (campeones con poco HP) a auto-attacks una vez tiene **Trinity Force**. Su **Hextech Munitions (P)** convierte una parte de cada auto-attack en true damage (daño que ignora armor y magic resist), así que attack speed y stats on-hit cuentan tanto como AD o AP en bruto. Está en mid porque el río ofrece ganks (emboscadas del jungla) por ambos lados que su **Valkyrie (W)** puede esquivar, y porque las missile de R pueden pokear las side lanes desde el centro del mapa.

Game plan en una frase: acumula maná en Manamune para transformarlo en Muramana, empuja waves (mata minions rápido para forzar la oleada hacia delante) con **Phosphorus Bomb (Q)** y R, y aprovecha cada cooldown window (los segundos en los que tus skills están listas) para rascarle HP al laner enemigo y que tu jungla pueda divear (matarlo bajo su torre). El skill expression está en el aim de la R — anticipa hacia dónde se moverá el target y apunta ahí — y en el timing de la Big One (cada tercera R es un misil más fuerte) para el momento en el que el enemigo está más bajo. **W** es tu único dash: úsala mal y cualquier assassin te walka down.

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La blade da lifesteal (una parte del daño infligido te cura) que se sinergia con la passive de auto-attack; salta Doran's Ring salvo que enfrentes una pure poke lane donde el sustain de maná pese más que el dueling.

**Items core (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un componente de Trinity) procca (dispara un efecto de daño extra) en cada Q y cada misil de R, además de AD, attack speed, ability haste (reducción de cooldown) y movement speed. El power spike más grande del campeón.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune se transforma poco a poco en una versión más fuerte llamada Muramana mientras gastas maná; una vez "stacked" (totalmente transformado) suma daño bonus en cada auto-attack y cada habilidad que cueste maná, incluida cada missile de R.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (ignora una parte de la magic resist enemiga) que infla el daño de Q y R.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — tu primer auto-attack a un enemigo ("auto energized") hace daño bonus y llega más lejos del rango normal. El crit chance encaja con el perfil de stats de Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed para DPS sostenido por **Gatling Gun (E)** y por el true damage on-hit de la passive.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins con varios dashes (Zed, Akali, Talon): la stasis frena su ventana de burst para que tu equipo o tu W puedan salvarte.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra frontline con 2+ tanques (Sion, Ornn, Maokai): armor pen pesada para que autos y missile de R sigan cortando.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (LeBlanc, Veigar, Syndra): el escudo mágico absorbe una full combo y te deja salir con W.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia las Sorcerer's cuando el equipo enemigo tiene 3+ hard CC (stuns, roots) y la chain CC pesa más que la magic penetration.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** es la opción por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si la team comp es CC-pesada.

**Skill order:** Maxea **Q** primero (poke y waveclear), **E** segundo (DPS y shred de resistencias), **W** al final (utility). Punto en **R** a los niveles 6, 11 y 16.

**Runes:** Primary **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery** y **Cosmic Insight**. Secondary **Sorcery** con **Manaflow Band** y **Gathering Storm**, o **Resolve** con **Second Wind** y **Overgrowth** contra lanes de poke pesado.

## Matchups clave

- **Yasuo / Yone:** Bloquean tu Q y misiles de R con Wind Wall. Guarda Q hasta que gasten habilidades, retén R hasta que el Wind Wall esté en cooldown y nunca tradees (intercambies daño) a melee range donde puedan saltarte con E sobre los minions a tu lado.
- **Akali / Zed:** Diving threats (campeones que pueden saltarte bajo torre para matarte). Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** después de Trinity Force; nunca gastes la W en un trade si su cadena de dashes sigue disponible.
- **Veigar:** Iguala su rango con R, esquiva su W (una jaula que se expande lentamente y te encierra) y evita auto-trades dentro del anillo de su E (un círculo que stunea cuando lo cruzas). Sus stacks de Q escalan infinitamente (más kills = más AP permanente), así que cierra la lane antes del minuto 25.
- **Twisted Fate:** Carrera de roams (ambos campeones tratan de salir de la lane primero para ayudar a sus aliados). Empuja la wave con Q antes de que llegue al nivel 6, pinguea al jungla enemigo cuando su R está disponible y W lejos del target de la gold card en lugar de tankear el stun de cara.
- **Galio:** Castígalo pre-6 matando la wave que él no puede igualar a melee (Galio es cuerpo a cuerpo, tú a distancia). Post-6 su R es una herramienta de engage global — agrúpate con tu equipo solo cuando tienes missile en stock para peelar (sacarlo de tus carries de backline) cuando aterrice.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + W o Q + E, puedes castigar un last-hit fallado con un trade Q-AA-AA ("AA" = auto-attack base) y disengagear con W o follow-up si su Flash está abajo.
- **Nivel 6:** La primera **Missile Barrage (R)** desbloquea side-lane pressure (la opción de salir de mid y amenazar top o bot). Con stocks de R más W, puedes roamar a bot, soltar dos misiles más una Big One en un trade 1v1 y volver a la wave con W.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completada (~ minuto 12-14):** Sheen procca en cada Q y cada misil de R, transformando el poke en kill threat. Es el momento de all-inear (commit total a la kill, sin retirada) al laner low-HP con Q-AA-R-AA.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minuto 18-22):** Muramana suma daño bonus en cada acción que gasta maná; el daño en teamfight aproximadamente se duplica respecto al pre-stack. Fuerza peleas por objetivo (Drake, Baron) aquí.

## Errores comunes

- **Spamear R en cooldown para waveclear.** Las missile son un stock finito; si las vacías sobre minions, en el siguiente teamfight tendrás cero burst en el peor momento. Empuja waves con Q + autos; guarda 4+ misiles para los objetivos.
- **Usar la W en agresivo sin follow-up.** La W es tu única huida. Dashar dentro para cerrar una kill que requería un auto más es como muere Corki — si no puedes matarlos con el maná y los cooldowns que te quedan, no commitees (no te impliques del todo).
- **Auto-tradear a melee range.** El true damage de la passive de cerca es tentador, pero la pool de HP de Corki es squishy (baja y frágil, como un ADC). Quédate a R range cuando el laner tenga gap-closers up.
- **Comprar ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes contra un equipo CC-pesado.** La magic penetration es desperdicio si pasas el fight stuneado. Sorcerer's solo cuando su CC es bajo; si no, cambia a Mercury's Treads.
- **Roamar con stocks de R vacíos.** Un roam sin 2 misiles es un volado. Espera los 8-12 segundos para los stocks antes de cruzar río; ese único delay es la diferencia entre una kill y regalar tu wave por nada.

## Consejo avanzado

Trackea y explota el ritmo de la **Big One**. Cada tercer misil de R (la "Big One") hace mucho más daño que los dos regulares. Antes de un teamfight, cuenta los misiles que tienes en stock — si el siguiente sería una Big One, guárdalo para el target prioritario; si lo acabas de gastar, dispara los dos misiles filler sobre la wave o una torre para que la Big One recargue lista para el engage. Quien dispara R a ciegas malgasta Big Ones en minions; quien trackea el conteo one-shotea a los squishies (carries low-HP) cuando importa.
