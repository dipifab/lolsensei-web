---
title: "Kha'Zix Jungle Build & Guía — Patch 16.9"
slug: "kha-zix-jungle"
language: "es"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Kha'Zix jungle para League of Legends Patch 16.9: ruta de clear, saltos sobre objetivos aislados, evolutions, build lethality, matchups, power spikes y errores."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Fuera de visión, tu siguiente auto a un campeón hace magic damage bonus y aplica slow. Marca objetivos aislados (sin aliado a 425 unidades) para amplificar la Q."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Golpea a un objetivo con physical damage; daño enorme si está aislado (sin aliado cerca). Tu herramienta de duelo principal — la evolution añade rango extendido."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Pincho lineal que daña al impactar y te cura en el área de explosión. Tu único sustain en jungle. La evolution añade slow, vision al impactar y triple cono."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Dash dirigido que daña al aterrizar. La evolution añade 200 de rango y resetea el cooldown al takedown — el patrón assassin de reset vive aquí."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Te vuelves invisible un instante, ganas speed bonus y puedes recastear para volver a stealth. Cada rank evoluciona una habilidad (Q/W/E/R) de forma permanente."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contra comps que exigen waveclear y presión en side lane"
    - dd_id: "6692"
      name: "Eclipse"
      against: "contra comps con muchos bruisers (Sett, Aatrox, Mordekaiser): escudo y cura en trades"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "contra setups de vision pesada (enchanters, junglers de vision): borra wards al cast"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Lucidity contra magic CC pesado (Ahri, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap contra doble AD (dos amenazas físicas tipo Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Encuentra objetivos aislados (ningún campeón enemigo a 425 unidades) y bórralos con E + Q + AA. La E evolucionada se resetea al takedown y permite resaltos."
  weakness: "Si el enemigo se mantiene agrupado tu Q cae en picado — el amplificador de isolation depende del posicionamiento. Hard CC (Malzahar R, Skarner R) cancela el jump y no tienes escape."
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Carry junglers squishy sin hard CC"
      reason: "Caminan solos para power-farmar; la E + Q aislada de Kha'Zix los borra antes de que respondan. Sin CC no hay forma de detener el dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Junglers con clear lento y poca movilidad"
      reason: "Kha'Zix invade más rápido con E y llega al Scuttle Crab a tempo. Roba sus camps traseros tras cada Drake — rotan demasiado lento para castigarte."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Backlines ADC inmóviles o con poca movilidad"
      reason: "Late game tu E evolucionada aterriza en la back line saltando muros. Sin dash no se reposicionan durante la ventana de invisibilidad de la R."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Bruiser junglers front-loaded con CC point-and-click"
      reason: "Su CC interrumpe la animación del jump y te bloquea. Pre-6 te ganan el duelo en su jungle: un invade nivel 3 es una kill gratis para ellos."
    - examples: ["malzahar", "skarner"]
      archetype: "Campeones con suppression o lockdown unstoppable"
      reason: "La suppression no se elimina con Mercury's Treads; en cuanto te marcan, no puedes R out y la ventana de invisibilidad se desperdicia."
    - examples: ["sett", "tahm-kench"]
      archetype: "Bruisers tanky con peel integrado para el carry"
      reason: "Su W o agarre saca al carry de tu ventana de isolation antes de que aterrice la Q. Necesitas un 1v1 limpio y ellos eliminan esa opción."
---

## Resumen

Kha'Zix es un assassin AD melee (un assassin es un campeón de altísimo burst diseñado para borrar a un único objetivo squishy — squishy = un campeón con pocas defensas, como ADCs y la mayoría de magos) cuyo kit gira por completo en torno a encontrar objetivos **aislados**. Aislado, en su caso, significa que ningún aliado está a menos de 425 unidades del objetivo — ligeramente menos que el rango de unos Mercury's Treads. Su passive **Unseen Threat** marca a los enemigos aislados; su Q **Taste Their Fear** les hace daño bonus enorme; su ult **Void Assault** le permite entrar y salir de visión para montar ese burst aislado. Pícalo contra equipos que andan solos — split-pushers, carry junglers, marksmen inmóviles de back line.

Su plan de partida en jungle: clear de bot a top con **W** para sustain (sustain = capacidad de curarte durante el clear), llega a nivel 3 con E desbloqueada y empieza a gankear pre-6 con el patrón assassin de **E** a la lane → espera a que el objetivo del gank esté aislado de su support → **Q** para el daño amplificado → cierras con auto-attack. Después del nivel 6 cada fight es una caza: elige la **Evolved E** (rango extendido y reset al takedown) para que una kill exitosa te devuelva el dash y te permita salir antes de que el equipo colapse sobre ti. Los fights de Drake y Rift Herald se ganan entrando en stealth con **R**, borrando la back line y volviendo a stealth para irte.

## Build Recomendada

**Items iniciales:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. La pet Gustwalker da movement speed fuera de combate, perfecta para llegar rápido a los ganks. Evita Mosstomper (la pet de sustain) — tu **W** ya cura suficiente durante un ciclo de clear.

**Items core (en orden):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primer item a rushear. Lethality (una stat que da armor penetration plana contra objetivos con poca armor, básicamente daño gratis sobre squishies) más la active de movement speed hacen triviales ganks y skirmishes.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste para que tu **R** vuelva más rápido. Cuanto antes esté lista la R, más ventanas de invisibilidad tienes por fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive de execute: objetivos por debajo del 5% HP mueren al instante. Cierra kills que tu burst en bruto dejaría a 50 HP.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield bloquea la primera habilidad enemiga tras un breve channel. Te salva de Malzahar R, Lissandra R o cualquier CC point-and-click que te bloquearía antes de hacer R out.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — armor penetration de late que escala con la armor del objetivo, más slow en habilidades que dañan: tu Q persigue.

**Items situacionales:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — cuando tu equipo necesita presión en side lane: pasiva cleave más active de execute te dejan split-push (empujar una side lane solo para forzar respuesta enemiga) sin perder daño en fights.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — contra comps con muchos bruisers (bruiser = fighter melee tanky tipo Sett, Aatrox, Mordekaiser): escudo + omnivamp (lifesteal que funciona en todo tipo de daño) te mantiene vivo en el trade in-out.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — contra setups de vision pesada (supports enchanter como Janna, Lulu): borra wards al cast más daño bonus a wards, así caminas invisible por su red de vision.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde Lucidity contra magic CC pesado. La tenacity (stat que acorta la duración de stuns y slows sobre ti) te da margen para R out antes de que vuelvan a engagear.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra doble AD (dos amenazas de daño físico tipo Yasuo + Caitlyn): armor plana y reducción de daño por basic-attack.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son el default. Mercury's Treads o Plated Steelcaps solo si el matchup lo exige.

**Skill order:** Maximiza **Q** primero (el scaling sobre objetivos aislados es tu DPS principal), **W** segunda (sustain en jungle y slow en evolution), **E** al final (los rank extra dan daño en bruto pero lo que importa son la distancia del dash y el cooldown, no el scaling). Sube **R** a niveles 6, 11, 16.

**Elecciones de evolution (el upgrade Q/W/E/R que eliges en cada rank-up de la R):** el orden estándar es **Q al 6** (rango extendido y refund en takedown aislado — el spike 1v1 más limpio), **E al 11** (rango extra y reset al takedown para skirmishes), **R al 16** (invisibilidad más larga, segundo recast). Elige **W en lugar de Q al 6** solo si el equipo enemigo tiene varias amenazas inmóviles agrupadas (los tres conos de slow zonan a todo el equipo en un fight). Elige **E primero** en vez de Q solo si tienes que escapar de un jungler con CC pesado (Lee Sin, Vi) — el reset temprano te saca de ganks fallidos, pero renuncias a mucha kill pressure.

**Runas:** Primaria **Domination** con **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundaria **Precision** con **Triumph** y **Coup de Grace** (o **Sorcery** con **Sudden Impact** de apoyo si quieres sustain — sustain = curación durante el fight). Stat shards: Adaptive Force / Adaptive Force / Health.

## Matchups clave

- **Lee Sin:** Evita los invades a nivel 2 y 3. Su Q-Q seguido del escudo de la W gana a tu kit antes de que la E esté online. Clear de bot a top, hovea Scuttle con vision y deja que tus laners lo cojan si se sobre-extiende.
- **Graves:** Parejo early, a tu favor tras nivel 6. Nunca lo duelees en open jungle pre-6: la ceguera de su W cancela tu ventana de auto-attack. Espera una oportunidad de aislamiento — gankéale en lane con **E + Q** y deja que tu laner te lo separe de su ADC.
- **Elise:** Carrera de power spike. Ella gana los ganks nivel 3; tú ganas el jump aislado en nivel 6. Iguala su tempo de primer clear y tradead objetivos — hovea Drake con vision para que no lo solee.
- **Jarvan IV:** Amenaza de counter-engage. Su E-Q knock-up interrumpe la animación del jump. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** antes de lo habitual; el spell shield se come su combo de flag-toss.
- **Karthus:** Matchup gratis. No tiene escape y camina solo a empujar waves. Tracéale la posición pre-6 con vision; en nivel 6, **R + E + Q** lo borra desde el otro lado de su jungle mientras channelea Requiem.

## Power spikes y condiciones de victoria

- **Nivel 3 (Q + W + E):** Kit completo desbloqueado. Busca un gank aislado — flanquea una side lane por el river bush, **E** dentro, **Q** al laner aislado (el support tiene que estar fuera), reset de auto-attack, **W** para el slow al recall. El gank pre-6 de Kha'Zix es de los más fuertes del juego cuando el objetivo está solo.
- **Nivel 6 (primera Void Assault + primera evolution):** Elige **Evolved Q** para el path de burst estándar. Power spike fuerte en skirmishes a mid-river — R para entrar invisible, E sobre el objetivo marcado, Q para el daño amplificado, AA reset, recasta R para salir. La combo completa borra a un squishy de 1800 HP en dos segundos.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completa (~ minuto 9-11):** Spike de burst. La active de velocidad te permite cruzar media mapa para flanquear (entrar a un fight desde un lado que el enemigo no ve, normalmente detrás de su back line). Fuerza fights alrededor del segundo Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ minuto 16-19):** Ventana de reset. Tu E ahora resetea al takedown — un teamfight limpio empieza con E al carry, Q para la kill, y otra E al siguiente objetivo. Aquí Kha'Zix se convierte en una máquina de pick (pick = eliminar a un enemigo aislado fuera del teamfight) decisivo.

## Errores comunes

- **Saltar sobre un objetivo que no está aislado.** Sin el amplificador de isolation (ningún aliado a 425 unidades), tu Q pega aproximadamente un 60% menos. Espera a que el support se aleje o a que tu laner lo separe — no tradees en medio de su equipo.
- **Elegir Evolved W como primera evolution por defecto.** La W evolucionada es una herramienta de zoning para teamfight, no de duelo. Si tu equipo juega a picks (eliminar a un enemigo aislado fuera del teamfight) y skirmishes, Evolved Q es la elección correcta el 90% de las veces.
- **Usar la R para hacer daño en lugar de para reposicionarse.** Tu R es una ventana de invisibilidad para entrar y salir de un fight, no un botón de daño. Guarda el segundo recast para irte una vez que tu objetivo haya muerto — volver a stealth durante el recall desperdicia el valor principal del tool.
- **Greedear camps tras un gank fallido.** Sin reset de E (pre-Evolved E), si el gank falla no tienes salida. Vuelve por tu jungle, no vayas en autopilot al siguiente camp — el jungler enemigo te tracea el path y counter-gankea la siguiente lane.
- **Buildear Eclipse primero por defecto.** Eclipse convierte a Kha'Zix en un bruiser; renuncias al burst lethality que lo hace assassin. Buildea Eclipse solo cuando el matchup es bruiser-heavy y no sobrevives al trade in-out con lethality pura.

## Consejo avanzado

Practica la combo **R-E-Q-AA-recast-R** en practice tool hasta que los inputs sean automáticos. El truco es el reset de auto-attack entre Q y el recast: la Q resetea el timer del basic, así que en el momento que la Q aterrice metes un basic, e inmediatamente recasta R para salir. Ejecutada limpia, esta combo borra un objetivo de 1900 HP en aproximadamente 1.8 segundos y sales invisible — un solo pick (pick = matar a un enemigo aislado fuera del teamfight) sobre el ADC enemigo en el setup de Baron es un objetivo gratis. El skill ceiling está en el timing del AA entre Q y recast de R: demasiado pronto y la Q no ha aterrizado, demasiado tarde y la ventana de la R se ha cerrado.
