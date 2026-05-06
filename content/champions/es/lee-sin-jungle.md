---
title: "Lee Sin Jungle Build & Guía — Patch 16.9"
slug: "lee-sin-jungle"
language: "es"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía Lee Sin jungla para League of Legends Patch 16.9: starter kit, build de skirmisher, matchups clave, power spikes, errores comunes y un consejo de cierre."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "Tras lanzar una habilidad, las 2 siguientes auto-attacks ganan attack speed y devuelven energía. Ritmo hechizo — auto — auto."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Skillshot lineal. Si impacta, la recast hace dash al objetivo con daño físico sobre HP perdido. Tu gap close principal."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash a un aliado, ward o a ti mismo con escudo. La recast da lifesteal y spell vamp. Movilidad más sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "Daño AOE que revela enemigos. La recast los ralentiza. Herramienta de clear, anti-stealth y fuente de slow."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Patada giratoria que empuja al objetivo y daña a los enemigos detrás. Herramienta de pickoff y disrupción."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dos AD dealers fuertes (Yasuo + Caitlyn): convierte el daño físico en sangrado lento, no instantáneo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP (Diana, Syndra, Lux mid): el lifeline shield convierte el one-shot en trade sobrevivible"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra 3+ campeones con CC duro (Leona + Lissandra + Sejuani): la tenacity acorta stuns y roots"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "cuando debes hacer dive (entrar bajo torre enemiga para matar): el lifeline shield salta tras el primer golpe grande"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "seguro de flank en late game: si fallas el timing de R, la resurrección equilibra el trade"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Gana los primeros 14 minutos con invades y ganks. Con Eclipse listo, contesta cada objetivo y usa la R para sacar a un enemigo clave de posición. Late game busca un flank y patea a una carry squishy hacia tu equipo."
  weakness: "Cae mucho tras el minuto 25 contra carries que escalan. Sin dash fiable si Q1 falla o W no tiene blanco. Las cadenas de CC duro cierran tu engage al instante."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Resumen

Lee Sin es un jungler de early game — un skirmisher, es decir, un campeón que gana los combates cortos entre dos o tres jugadores. Imagina a un artista marcial con una cadena de dashes: te golpea con una onda sonora, salta sobre ti, te patea hacia su equipo, y sus auto-attacks vienen con un bonus de attack speed integrado tras cada hechizo. Todo el kit gira en torno a una sola idea: ser el luchador más fuerte del mapa durante los primeros 15 minutos y luego convertir esa ventaja en kills, objetivos y tempo antes de que las carries enemigas escalen.

Su game plan es directo. En los primeros 8 minutos haces invade — entras en la jungla enemiga para robar camps y cazar al jungler rival. Después, gankeas líneas cada vez que tu **Q** está lista. En late game dejas de intentar 1v1 (los pierdes) y buscas flanks: rodeas el lado del mapa, te escondes en un arbusto sin ward y luego lanzas la **R** sobre la carry enemiga hacia tu equipo. Si no consigues acertar la **Q1** de forma constante, nada de esto funciona — el resto del kit se encadena al primer skillshot.

## Build Recomendada

**Items iniciales:** Smite + **Hailblade** para un primer clear más rápido con daño AOE en el segundo golpe, más **Refillable Potion**. Coge Emberknife solo si quieres máximo sustain en un full clear más lento con más solo dueling.

**Items core (en orden):**

1. **Eclipse** — burst, escudo y omnivamp. El escudo a dos golpes encaja perfectamente con tu ritmo Cast → AA → AA de la pasiva. El primer item más limpio para skirmishear.
2. **Plated Steelcaps** vs enemigos AD-heavy / **Mercury's Treads** vs 3+ campeones de CC duro. Plated por defecto.
3. **Heartsteel** — HP y un auto-attack cargado que castiga los skirmishes prolongados. Te permite pelear más allá del clásico timer "muero a 2 items".
4. **Black Cleaver** — armor shred que escala con tu ritmo Q-AA-Q. Convierte también el daño físico de tu equipo en amenaza de kill.

**Items situacionales:**

- **Death's Dance** — contra equipos con dos AD dealers fuertes (p. ej. Yasuo + Caitlyn). Convierte el daño físico entrante en un sangrado lento en vez de impacto instantáneo.
- **Maw of Malmortius** — contra líneas de burst AP (Diana, Syndra, Lux mid).
- **Sterak's Gage** — cuando necesitas hacer dive (entrar bajo torre enemiga para matar). El lifeline shield te compra el segundo que tu equipo necesita para hacer follow-up.
- **Guardian Angel** — seguro de flank en late game tras 4 items.

**Botas:** Plated Steelcaps por defecto. Boots of Mobility solo en mapas con muchos ganks y sin amenazas tempranas de CC — nicho, no estándar.

**Skill order:** Maxea **Q** primero (daño y gap close), **E** segundo (clear y uptime de slow), **W** al final (la utilidad escala bien a rank 1). **R** en niveles 6, 11, 16.

**Runas:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundaria **Domination** con **Sudden Impact** + **Treasure Hunter** para un snowball lead (ventaja temprana que crece con el tiempo: kill → gold → item → más kills), o **Resolve** con **Second Wind** + **Revitalize** si esperas una partida larga y de scaling.

## Matchups clave

- **Vi:** Pierde los skirmishes pre-6 si baiteas su **Q** cargada. Acierta tu **Q1** sobre ella, **E** para slow, y luego dasha al support tras la patada — peelea para tu carry mientras ella está en cooldown.
- **Hecarim:** Te supera tras 3 items pero pierde los fights pre-9 minutos. Presiónalo fuerte temprano; si llegas a nivel 6 antes que él, gankea top o mid sin descanso. No 1v1 tras su primer item.
- **Master Yi:** Matchup de skill. Tu **E** lo revela mientras su **Q** está activa, rompiendo su target lock. Practícalo hasta que sea reflejo. Guarda **R** para patearlo fuera de tu back line en team fights.
- **Kha'Zix:** Invade hasta nivel 6. Tras su **R** evolucionada puede solo-killarte si estás solo — nunca camines en la jungla enemiga solo después del minuto 12 sin cobertura del equipo.
- **Graves:** Matchup espejo de tempo. Ambos junglers ganan los primeros 6 niveles. Gana el lado que más gankee. Vigila las cargas de su **E**; si quemó las dos, lo dueleas.

## Power spikes y condiciones de victoria

- **Nivel 3:** Kit completo. Tu pattern de gank es **Q1 → espera CC aliado o Flash → Q2 → E slow → reset auto**. Sin Flash enemigo, mata a cualquier squishy al 60% HP.
- **Nivel 6:** **Dragon's Rage** desbloquea la jugada de patada. Pre-6, la **R** no vale nada — un first blood pre-6 es tu punto de máxima palanca en la partida.
- **Timing Eclipse (~ minuto 9):** Ganas los skirmishes prolongados. Fuerza fights en Scuttle, Drake y Voidgrubs en esta ventana.
- **Late game (~ minuto 30):** Lee cae frente a carries que escalan (Vayne, Kog'Maw, Master Yi). Tu condición de victoria restante es el ace-flank: consigue vision en la jungla enemiga, busca posición lateral, **R** a su carry a través del mapa y haz follow-up con **Q-E-W**.

## Errores comunes

- **Gastar Q1 en un minion low-HP en pleno fight.** Tu **Q** tiene dos partes: el skillshot y el dash. Si lanzas Q1 a un minion para limpiarlo, has quemado la habilidad entera durante 12 segundos y te quedas sin gap close. Guarda Q1 para el all-in (compromiso total al trade hasta la kill).
- **W-jumping a mitad de skirmish para sustain.** El lifesteal de **W** es real, pero si haces W a una ward para curarte renuncias al gap close. Si el trade es ganable, guarda **W** para un Insec (el truco del kick inverso — ver consejo avanzado) o para saltar al support tras la **R**.
- **R-into-tower sin follow-up.** Patear a una carry low-HP hacia tu equipo solo funciona si el equipo está en rango y listo para comprometerse. **R** sola, fuera de pantalla, es un coin flip de 100g.
- **Auto-leashear el red side a nivel 1.** Con Hailblade puedes full-clearear desde bot side sin ayuda. El leash sacrifica la carrera al Scuttle. Dile a la bot lane: leash solo del primer attack-and-go, luego fuera.
- **Pickear a Lee en una comp sin plan de pickoff.** Lee brilla cuando su equipo capitaliza una sola kill aislada (un "pickoff": eliminar a un enemigo fuera del teamfight). Si tu equipo no tiene CC de follow-up, la **R** es solo herramienta de peel — adapta la build hacia Death's Dance y Sterak's en vez de items de all-in.

## Consejo avanzado

El "Insec" o kick inverso: camina más allá del objetivo, **W** a una ward que colocaste detrás de él y luego **R** justo al aterrizar — la patada sale por detrás y lo manda hacia tu equipo en vez de alejarlo. La secuencia completa es **Q1 acierto → Q2 dash → ward detrás → W a la ward → R**. Practícalo en Practice Tool hasta que aciertes el timing sin pensar. La ventana entre aterrizar la W y ejecutar la R es de unos 0.3 segundos — demasiado lento y el objetivo se gira hacia ti, demasiado rápido y la animación de W se come el cast de R. Cuando la encadenes bajo presión, Lee sube dos tiers en tus manos.
