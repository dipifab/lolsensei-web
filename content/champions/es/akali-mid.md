---
title: "Akali Mid Build & Guía — Patch 16.9"
slug: "akali-mid"
language: "es"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Akali mid para League of Legends Patch 16.9: build de assassin AP, matchups clave, power spike de nivel 6, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Dañar a un campeón con una habilidad lo marca. Salir del anillo potencia el siguiente basic attack con rango y daño extra."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Cono de kunai que daña y ralentiza. Herramienta principal de poke y trade. Cuesta energía y tiene cooldown corto: úsala on-cooldown en cada trade."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Zona de humo que vuelve a Akali invisible al targeting y da hasta +80 de energía máx mientras activa. Actuar dentro la revela. Suéltala en mitad de la combo, no solo para escapar: el bono da una Q extra en la rotation."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Salto hacia atrás y shuriken que marca al primer enemigo golpeado. Reactiva para dashar al objetivo marcado. Marca solo a campeones, nunca a un minion."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Ulti en dos partes. R1 salta y daña; R2 dasha y ejecuta enemigos con poco HP. La ejecución escala con el HP que les falta al objetivo."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst single-target alto (Zed R, Veigar combo, LeBlanc): la stasis te salva antes del R2"
    - dd_id: "3135"
      name: "Void Staff"
      against: "en cuanto un objetivo prioritario compre un item de Magic Resist — mantiene el daño contra targets más resistentes"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que apaga tu engage (Ahri charm, Lissandra R, Twisted Fate stun) — el spell shield come el primer impacto"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "en peleas más largas y comps con muchos bruisers donde necesitas curación y durabilidad en lugar de burst puro"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Engancha squishies aislados con el dash E1+E2, encadena Q + auto-attack potenciado + combo de R para la ejecución. Roamea por las side lanes siempre que tengas R disponible."
  weakness: "Waveclear débil y rango corto pre-6: vulnerable al poke a distancia y a los ganks del jungla. Sin CC duro y sin escape si W está en cooldown — pueden bloquearte y reventarte antes de que la combo aterrice."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Resumen

Akali es una assassin AP de burst: una campeona construida para soltar muchísimo daño en 1-2 segundos (el "burst", daño concentrado en una ventana muy corta) sobre un único objetivo. Su kit es una cadena de dashes — **Shuriken Flip (E)**, **Perfect Execution (R)** — montada alrededor de la ventana de invisibilidad de **Twilight Shroud (W)**. No tiene maná, usa energía: los cooldowns cortos pesan más que el presupuesto de recurso. La mid lane le sienta bien porque el río ofrece caminos cortos para roamear (salir de tu lane para hacer una jugada en otro carril) hacia las side lanes, y la **R** a nivel 6 transforma cualquier pelea sin vision wards enemigos (objetos colocables que revelan un área) en un pickoff (eliminar a un enemigo aislado de su equipo).

El plan de partida es sobrevivir a una fase de lane débil (waveclear flojo — sus habilidades tardan en limpiar la oleada de minions, y no hay kill threat early) hasta el nivel 6, y luego convertir cualquier pequeña ventaja en roams y dives bajo torre. El truco del campeón está en la colocación de la **E** — la E primero dispara un shuriken; solo el primer campeón enemigo que toque se vuelve el objetivo del dash. Si marcas un minion por error, pierdes el dash para toda la rotation de habilidades (el ciclo de lanzar Q + W + E + R una vez cada una).

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. El Doran's Ring da AP y mana regen que Akali no necesita, pero el bonus damage a minions arregla su waveclear early débil. Salta ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** salvo que la lane sea de harass pesado con auto-attacks.

**Items core (en orden):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (un activo que te lanza en dash hacia el enemigo) más burst damage; combina con **E** y **R** para engagear (abrir la pelea) desde fuera de rango.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (tu daño de hechizo ignora una porción de la Magic Resist enemiga). Upgrade directo de daño para matar squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con bonus damage cuando el enemigo está por debajo del ~40% HP, encajando perfectamente con la ejecución de la **R2**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador late-game sobre todo tu AP. Tu slot con más AP.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra Zed, Veigar, LeBlanc o cualquier rival cuyo burst aterriza en la misma ventana que el tuyo. Su activo de stasis te vuelve invulnerable e inmóvil ~2.5 segundos: aguantas su daño y rematas con **R2**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cámbialo en cuanto cualquier objetivo prioritario compre un item de Magic Resist; mantiene tu daño escalado.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun); el spell shield se come su setup.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primer item alternativo en peleas más largas contra comps cargadas de bruisers; cambia burst por daño sostenido y healing.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** son el default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** son aceptables contra CC pesado (Lissandra, Ahri, Galio).

**Skill order:** Sube **Q** primero al máximo (daño principal y refund de energía, la energía que recuperas al usarla), **E** segundo (cooldown más bajo en el dash) y **W** al final. Coloca un punto en **R** a niveles 6, 11 y 16.

**Runas:** Las runas son bonificaciones pasivas que eliges antes de la partida; un árbol primario (5 runas) y uno secundario (2 runas). Primaria **Domination** con **Electrocute** (burst extra al golpear con tres habilidades seguidas), **Sudden Impact** (más magic penetration tras un dash), **Sixth Sense** para presión de visión y **Ultimate Hunter** (cooldown más bajo en la **R**). Secundaria **Sorcery** con **Transcendence** (ability haste — habilidades que vuelven a estar disponibles más rápido) y **Gathering Storm** (escalado de AP late-game). Akali usa energía, no maná, así que nada de **Manaflow Band**.

## Matchups clave

- **Galio:** Counter duro pre-6. Su pasiva refuerza los auto-attacks y su **W** te taunta y bloquea tu dive con **R**. Farma seguro hasta nivel 6, pinguea al jungla y solo committea cuando su **W** esté en cooldown.
- **Yasuo:** Su **Wind Wall** bloquea **Q** y el shuriken de **E**. Abre con el dash de ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** o con la **E**, guarda la **Q** hasta que su Wind Wall esté abajo.
- **Lux:** La superas en duelo 1v1. Esquiva su **Q** (skillshot lineal largo y lento — una habilidad no automática que se evita moviéndote de lado cuando la lanza) con **E**, y luego clávate sobre ella al 6. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** si termina su ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** antes que tú.
- **Twisted Fate:** Carrera de roams. Él tiene la mejor herramienta de roam (su **R** lo teletransporta por el mapa), así que tienes que pushear tu wave (forzar la línea de minions hacia la torre enemiga) más rápido de lo que él tarda en irse. Trackea su **R** con vision wards (objetos colocables que dan visión en un área) en el río y en el tri-bush (los tres arbustos junto al carril mid).
- **Zed:** Matchup parejo. Él gana los trades cortos antes del 6; a partir del 6 tu **R** lo remata con poco HP. No vayas all-in (entrar a un intercambio total a kill, sin retirada) salvo que haya quemado las **W** de las sombras; si no, escapa de tu **R2**.

## Power spikes y condiciones de victoria

- **Nivel 3:** Kit básico completo (Q + W + E). Por fin tienes la combo dash + invisibilidad para tradear (un intercambio breve de habilidades en lane, no un intento de kill) o disengagear (salir de una pelea). Busca un trade corto para tomar prio (cuando tu wave está más cerca de la torre enemiga que de la tuya, te permite irte de lane sin perder recursos) antes del primer gank de la jungla (un ataque sorpresa del jungla rival entrando en lane).
- **Nivel 6:** La primera **R** es el spike más grande de la partida. Desbloqueas un kill threshold contra cualquier squishy (campeones de mucho daño y poca defensa, como los ADC). Si el río no está wardado (cubierto por vision wards enemigos), las peleas en mitad del río son kills gratis.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completo (~ minuto 12-14):** El daño full all-in ya one-shotea a los squishies a través de la ejecución de R2 (la R2 los remata cuando su HP baja del umbral). Roamea a las side lanes en cuanto tu wave esté empujada bajo la torre enemiga.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** El burst escala muchísimo. Fuerza peleas alrededor de objetivos (Drake, Baron, torres) y busca picks en la backline (la línea trasera del equipo) usando **W** para flanquear — entrar en la pelea por un lado que no vigilan, normalmente a través de fog of war no wardado (zonas del mapa sin visión).

## Errores comunes

- **All-in antes del nivel 6 sin setup del jungla.** El daño de trade pre-6 de Akali es mediocre — Q + auto-attack solos no matan a un rival atento. Farma seguro, pinguea al jungla y committea al 6.
- **Gastar E1 en un minion.** El primer impacto del Shuriken Flip marca lo que toque, minion incluido. Si la shuriken aterriza en un creep, pierdes el dash al campeón detrás. Angula siempre la **E** para que el campeón sea lo primero que toque la shuriken.
- **Auto-atacar dentro de tu W.** Actuar (cualquier hechizo o auto-attack) te revela ~0.5s. Quedarte dentro de **Twilight Shroud** y pokear desde ahí no te mantiene invisible — usa **W** para esquivar un único skillshot (una habilidad apuntada que se puede esquivar moviéndose) o para romper visión antes de reposicionarte.
- **Quemar R1 sin plan para R2.** R1 sola te deja en mitad del equipo enemigo. Ten siempre un objetivo para R2 — como remate o como dash de fuga.
- **Buildear items de bruiser contra un equipo enemigo squishy.** Items como ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** cambian burst por sustain. Contra un equipo de carries frágiles quieres burst puro (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**), no durabilidad.

## Consejo avanzado

Suelta **Twilight Shroud (W)** en el instante exacto en que aterriza **R1**. El shroud se abre a tus pies justo cuando llegas en mitad del equipo enemigo, rompiendo su target lock (forzando al enemigo a re-seleccionarte, porque te vuelves no-targeteable un instante) durante la media ventana antes de que vuelvan a clickarte. Usado bien, te permite reposicionarte para la **R2** de ejecución o incluso cancelar el all-in si el trade pinta perdido — y la habilidad de peel del support enemigo (el hechizo que protege a su carry) suele aterrizar en vacío porque te volviste no-targeteable a mitad del engage.
