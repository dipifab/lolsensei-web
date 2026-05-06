---
title: "Anivia Mid Build & Guía — Patch 16.9"
slug: "anivia-mid"
language: "es"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Anivia mid para League of Legends Patch 16.9: starter kit, build de control mage, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "Al recibir daño letal, Anivia se convierte en un huevo inmóvil unos segundos. Si el huevo sobrevive, revive a HP llenos. Cooldown largo — no la baitees dos veces en el mismo fight."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Skillshot lineal a larga distancia: una esfera de hielo ralentiza enemigos en su trayectoria; al final detona y stunnea. Reactívala para detonarla antes."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Invoca un muro de hielo infranqueable durante unos segundos. Bloquea cualquier movimiento (también el tuyo) y los dashes que lo atraviesen."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Explosión dirigida a corto alcance. Hace daño doble si el objetivo está Chilled por Q o por una R fully formed."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Toggle al suelo: tormenta de hielo que ralentiza y tickea daño mágico. Una vez formada aplica Chill, así E hace daño doble dentro del área."
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Akali, Diana) — la stasis cubre el gap hasta que R vuelve"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (Ahri charm, Lissandra R, Twisted Fate stun) que interrumpe la R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucho sustain (Soraka, Vladimir, Aatrox) — R aplica grievous wounds en área"
    - dd_id: "3135"
      name: "Void Staff"
      against: "en cuanto cualquier priority target complete su primer item de Magic Resist"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Acierta Q a max range para aplicar Chill, sigue con E para daño doble, suelta R bajo sus pies para que el ralentizado coma otra E empowered. Wallea al resto fuera para que la kill no se interrumpa."
  weakness: "Lenta, sin dash, base armor baja, mana hungry early. Si fallas la Q el trade muere y los divers te alcanzan antes de que R esté fully formed. Wind Wall y silencios destrozan todo el kit."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "La Q + W de Anivia atrapa magos inmóviles: no pueden esquivar el chill en E doble, y no pueden rodear el muro cuando ella parte la wave."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize bloquea cualquier línea de engage melee; con E para shovear y R para clear de wave, ella farma a salvo y ellos no la alcanzan sin quemar Flash."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize parte en dos el equipo enemigo en el engage; si el muro va entre el iniciador y el follow-up, el wombo cae sobre uno o dos targets, no sobre cinco."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Entran en su rango de E durante las cast windows; ella no tiene dash y solo un huevo, así que una cadena de dashes la bursta antes de que R termine de formarse."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall bloquea la Q por completo (el chill nunca llega) y su principal amenaza de daño se cae; sin chill la E se reduce a la mitad y la lane se vuelve un melee fight que no gana."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Out-rangean la Q de Anivia en cada fase de la lane y pokean desde fuera de su threat radius; ella no tiene movilidad para cerrar el gap o castigar sus cooldowns."
---

## Resumen

Anivia es una control mage a larga distancia con dos barras de vida, una ulti AOE lenta pero devastadora, y el único muro infranqueable del juego. Su kit castiga errores de posicionamiento: **Flash Frost (Q)** aplica **Chill** (un estado de slow especial sobre el que gira el resto del kit), **Frostbite (E)** hace daño doble sobre objetivos Chilled, y **Glacial Storm (R)** mantiene a todos slowed dentro de su zona. Cambia movilidad por utility — no tiene dash, pero **Rebirth (P)** le da una segunda vida cada vez que el huevo sobrevive.

Su plan de partida en mid es simple de explicar y brutal de ejecutar: shovea (empuja la oleada de minions hacia la torre enemiga) la wave con **R** + **E**, golpea el río o la jungla con un combo **Q-E** a través de la fog cuando un enemigo entra, y usa **Crystallize (W)** para partir el engage (engage = el momento en que empieza un teamfight) o salvar aliados de los dives (champions que saltan encima para reventarte — burst = daño alto en 1-2 segundos). En cualquier rank también gana partidas aguantando lanes que nadie más aguanta — una **R** fully formed (a tamaño completo) es un muro de daño mágico constante.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Anivia es mana hungry early y necesita el AP y el mana regen para tirar dos **Q** por wave sin secarse.

**Items core (en orden):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (potenciador de tu daño concentrado) y mana sustain. Te permite encadenar **Q-E** sin mirar la barra.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (corta una cantidad fija de la MR enemiga) para amplificar el daño doble de **E** sobre los squishies (champions de pocas defensas, típicamente ADCs y mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica tu AP, llevando el scaling (cuánto se fortalece el champion por cada item y nivel) ya fuerte hasta zona de one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra y una HP-threshold passive (pasiva que se activa cuando el objetivo baja de ~35% HP) que cuadra con los finishers de **E**.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers y assassins (Zed, Akali, Diana). La stasis (un breve freeze invulnerable) te da tiempo hasta que **Glacial Storm** vuelva.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC pesado single-target (Ahri charm, Lissandra R, Twisted Fate stun) que interrumpiría el toggle de tu **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra composiciones con mucho sustain (Soraka, Vladimir, Aatrox). Los ticks constantes de **R** aplican grievous wounds (debuff que reduce la curación recibida) sobre un área amplia.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cómpralo en cuanto cualquier priority target (el objetivo prioritario, normalmente el carry o mago rival) cierre su primer item de Magic Resist (MR — la stat defensiva contra daño mágico). El daño de Anivia se cae a pedazos contra MR si tardas demasiado.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables solo si tu equipo está pidiendo más uptime de **R** (cómo de seguido la tienes lista) en skirmishes (peleas de 2v2 o 3v3 fuera del teamfight principal).

**Skill order:** Maxea **E** primero — es tu botón real de daño, doble sobre Chilled. Maxea **Q** segunda (slow + stun más largos), **W** al final. Punto en **R** a niveles 6, 11, 16. Coge **W** a nivel 3 aunque la maxes al final: un solo rank del muro ya te salva la vida o parte un engage.

**Runas:** Primario **Sorcery** con **Arcane Comet** (un proyectil gratuito de daño que cae cuando golpeas a un enemigo con una habilidad), **Manaflow Band** (mana gratis cada vez que aciertas un skillshot), **Transcendence** (cooldown reduction), **Scorch** (un quemado extra en tu primera habilidad). Secundario **Inspiration** con **Biscuit Delivery** (potions gratis en lane) y **Cosmic Insight** (cooldown reduction extra en summoner spells como **Flash**). Comet es la runa más rentable para Anivia: cada **E** Chilled la proquea al impactar.

## Matchups clave

- **Yasuo:** Puede Wind Wall (una habilidad que bloquea proyectiles unos segundos) tu **Q** y hasta el proyectil de la **E**. Guarda ambas hasta que él haya quemado Wind Wall en minions. Suelta la **W** vertical entre él y sus minions cuando intenta el all-in (un pelea total a muerte) — pierde la ventana de Wind Wall por el muro y por el chill.
- **Zed / Akali:** Amenazas de dive. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** después de ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** si van por delante. Coloca **R** bajo tus pies cuando entren — tienen que pelear dentro de tu tormenta si quieren la kill.
- **Veigar:** Matchup parejo, lo decide quien roame (deja la lane para ayudar en otra) primero. Tú clearas mejor la wave pre-6 gracias a **R**; castígalo shoveando y ayudando a bot mientras él aún farmea bajo torre.
- **Xerath / Vel'Koz:** Out-pokean tu rango. Quédate detrás de minions, last-hittea (last-hit = el golpe que mata al minion y da gold) con **E**, no empujes nunca más allá de la mitad de la wave salvo que tu jungla esté mid-side (posicionado en la jungla cerca de la mid lane).
- **Annie:** Una mage de all-in telegrafiado — su stun tiene un tell (una animación visible justo antes del cast que avisa para esquivar) lento y obvio. Pre-6, pon la **W** en la trayectoria de aterrizaje de Tibbers para partir su combo stun-y-summon. Tu pasiva huevo te salva de un intento full burst; ella usará la ulti igualmente y te regalará un counter-engage gratis.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + **E** ya puedes chill-and-double-tap a un rival que se acerque demasiado a un minion. Amenaza esto cada wave; es el trade (un intercambio rápido de golpes y habilidades, no un intento completo de kill) sobre el que Anivia está construida.
- **Nivel 6:** Primera **Glacial Storm**. Pasas de ser una de las mages más débiles en nivel 5 a uno de los mejores kits de waveclear (capacidad de limpiar oleadas rápido) y zoning (forzar al enemigo a salir de un área amenazándolo con daño) en nivel 6. Shovea la wave al instante y busca un roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** Un combo **Q-E** completo más el proc de Luden's (la pasiva del item que se dispara automáticamente al castear) one-shotea a la mayoría de ADCs y otros mages sin item de MR. Fuerza peleas de objetivo en esta ventana.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** El late game de Anivia despega. Con **R** tickeando (pequeños golpes de daño cada fracción de segundo) y una **E** Chilled, hasta los tanks pierden trozos de HP por segundo. Agrúpate con el equipo y deja que la frontline (rol de tanks/bruisers que están delante absorbiendo daño) haga el trabajo por ti.

## Errores comunes

- **Tirar Q sin follow-up de E.** **Q** sola es poke (daño pequeño a distancia para rascar HP del enemigo sin comprometerte) decente; **Q** y luego **E** con el bonus chill-doble es una verdadera amenaza de kill. No uses **Q** solo para harass (poke pensado solo para molestar y restar HP) cuando tienes **E** off cooldown.
- **Murarte fuera de tu propia lane.** **W** es infranqueable para *ambos* lados. Colócala paralela a la wave para peelar (peel = usar una habilidad para proteger a un aliado de quien le salta encima) un gank (emboscada del jungla desde la fog), nunca perpendicular cortando tu vía de escape.
- **Apagar la R demasiado pronto.** **R** no consume mana una vez activa — mantenla puesta durante los fights, no la apagues a la primera bajada de la barra. El slow por sí solo ya vale el mana.
- **Ruleta del huevo.** Tu pasiva Rebirth tiene un cooldown largo. No "te fíes del huevo" haciendo tower-dive (entrar bajo su torre para matar) a HP bajos a no ser que hayas hecho los cálculos: bastan unos pocos golpes para matarlo, y uno de esos puede ser la torre misma.
- **Ignorar la W como herramienta de peel.** La mayoría de Anivias solo piensa en **W** como tool de chase. **Peel** = usar una habilidad para proteger a un aliado de quien le salta encima. Contra pick comps (composiciones que ganan cazando a un jugador fuera de posición), la **W** entre tu back line (los carries que dañan desde detrás) y un ulti de Malphite es una de las jugadas defensivas más fuertes del mid.

## Consejo avanzado

Usa la detonación recast de **Q** como *herramienta de visión*. La esfera de hielo tiene un radio visual amplio en vuelo y al detonar: lánzala a través de la fog of war (la zona oscura del mapa fuera de la visión de tu equipo) sobre una trayectoria probable del rival — por ejemplo, en mid-river antes de un drake fight (la pelea del equipo por el dragón, mostro objetivo del río de bot que da bonus a quien lo mata) — y reactívala al primer contacto. Le das al equipo medio segundo de visión y un stun en un solo botón. Los Anivia top sustituyen un ward (un centinela que revela una pequeña zona del mapa por un rato) por fight con una **Q** detonada en fog: más barato, más rápido, y stunnea el engage.
