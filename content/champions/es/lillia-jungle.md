---
title: "Lillia Jungle Build & Guía — Patch 16.9"
slug: "lillia-jungle"
language: "es"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Guía de Lillia jungla para League of Legends Patch 16.9: starter kit, build AP burst, matchups clave de jungla, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Cada habilidad aplica un stack de daño mágico continuo en % HP a campeones y monstruos. Los stacks de Dream Dust habilitan su R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "Giro AOE alrededor de Lillia: daño cercano y true damage extra en el borde. Acumula Move Speed. Herramienta principal de clear y DPS en skirmish."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE con carga y zona de daño: el centro pega muchísimo más. Es el burst single-target. Tell largo, combínala con E para slow."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Skillshot lobbeado de largo alcance: daño, slow y reveal. Si falla, rueda hasta golpear. Sirve de setup, vision o herramienta de escape."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Globalmente aplica Drowsy progresivo a todo enemigo con Dream Dust y luego los duerme. El primer golpe los despierta con bonus damage."
      dd_spell_id: "LilliaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs asesinos y dive comp (Zed, Diana, Kha'Zix) — la stasis cubre el gap mientras DOT y R hacen su trabajo"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs backline squishy sin Magic Resist — la pasiva por umbral HP encaja con el wake-up burst de la R"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps que kitean — Move Speed y Ability Haste alimentan su skirmish a ciclo de habilidades"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo cuando un target prioritario compre Magic Resist (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Acumula Dream Dust en los targets prioritarios con pasadas de Q, lanza R para el sleep team-wide y encadena W centrado y Q para máximo burst antes de cleanse o peel."
  weakness: "Early levels blandos y solo una forma de mobility (stacks de Q). Invades agresivos a level 2-3, cadenas de hard CC (Lee Sin Q, Vi R) y Mercury's Treads en sus targets de R rompen su snowball."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primario: First Strike premia su estilo farm-and-gank con gold extra cada gank, Magical Footwear da botas gratis mientras farmea, Biscuit Delivery y Cosmic Insight cubren el mana early y reducen cooldown de Smite/Flash en peleas por objetivo."
    secondary_rationale: "Sorcery secundario: Manaflow Band tapa su mana para que el spam Q-W-E entre camps no la deje seca, Transcendence aporta Ability Haste para R más frecuentes desde el segundo teamfight."
    secondary_alternative: "Contra skirmish 1v1 extendidos (Master Yi, Warwick, Udyr), cambia Inspiration por Precision con keystone Conqueror y Triumph: el daño adaptativo apilado y el HP-on-takedown inclinan los duelos largos a tu favor."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Junglas farm-heavy sin invade early"
      reason: "Quieren clearear tranquilos hasta level 6. Lillia iguala su velocidad de farm y los supera en scuttle gracias a los stacks de Move Speed de Q y a la presión DOT de la pasiva."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Top tanks vulnerables al DOT en % HP"
      reason: "Liandry's Torment y la pasiva en % HP destrozan rápido los pools de HP grandes. Su R sleep convierte sus amenazas de cast lento (Sion R, Mundo Q) en posicionamiento gratis para tu equipo."
    - examples: ["senna", "kog-maw"]
      archetype: "Carries de backline sin movilidad"
      reason: "La E cross-screen prepara el lockdown del gank, y la R sleep abre una ventana de pickoff garantizada antes de que se posicionen detrás de su frontline."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Invaders agresivos a level 2-3"
      reason: "Los primeros 3 niveles son el punto débil de Lillia: sin hard CC y solo Q para daño. Una invade exitosa la mata antes de su power spike de clear más mobility."
    - examples: ["yasuo", "camille"]
      archetype: "Champions con dashes o Wind Wall que esquivan el slow de W"
      reason: "Su burst single-target con W necesita el target clavado en el centro. Dashes repetidos y la E hookshot de Camille la dejan pegando al vacío."
    - examples: ["kindred", "graves"]
      archetype: "Junglas AD ranged que ganan scuttle"
      reason: "La superan en scuttle con rango de auto-attack mientras ella tiene que entrar al hitbox de Q. Perder scuttle dos veces seguidas colapsa su vision de río y sus tiempos de roam."
---

## Resumen

Lillia es una jungla AP skirmisher cuyo kit completo aplica daño mágico continuo en % HP mediante su pasiva **Dream-Laden Bough**. Cada Q, cada W, cada E deja una marca de "dream dust" que sigue picando daño durante unos segundos: por eso clearea los camps más rápido que casi cualquier otra jungla AP, y por eso sus duelos parecen desgastar al enemigo aun con los cooldowns en pausa. Su game plan es simple: acumula dust en cuantos campeones enemigos puedas y luego pulsa **R** para dormirlos a todos a la vez.

Quiere tempo, no farm lento. Usa **Q** para mantener arriba el bonus de Move Speed mientras pathea entre camps, **E** para gankear desde fuera del rango de wards y **W** como martillo single-target en skirmish una vez slowado el target. Late game su R es el setup CC team-wide más fiable del pool de junglas AP, pero depende de haber etiquetado a los targets primero — una R "desnuda" sobre un equipo limpio es una ulti tirada.

## Build Recomendada

**Starting items:** Hailblade (1039) + Refillable Potion (2031). Lillia es ranged, así que Hailblade es el starter de pet correcto.

**Core items (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Hailblade; auto-evoluciona en torno al minuto 3-4 una vez acumulada XP de monstruos. Es el pet de AP burst: cada auto-attack tras un hechizo añade un proc on-hit mágico que encaja perfecto con su DOT pasiva.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer item completo. El bleed en % HP (daño repartido durante varios segundos, no burst instantáneo) se suma a su pasiva: cuanto más HP total tiene el enemigo, más rápido lo tritura.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana. Botas por defecto cuando Magical Footwear te entrega las gratuitas hacia el minuto 12.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item de pelea extendida: acumula omnivamp (heal-on-damage) y convierte parte del daño en true damage tras 3 segundos en combate. Encaja con su reloj DOT.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador AP de late game; convierte el chip damage de la pasiva en ventanas reales de one-shot.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos y dive comp (Zed, Diana, Kha'Zix). La stasis cubre el momento posterior al R sobre la backline mientras DOT y equipo cierran la kill.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs backline squishy sin Magic Resist. Su pasiva por umbral HP (daño mágico extra cuando el target está bajo de vida) encaja con el tick de despertar de tu R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps que kitean. Move Speed y Ability Haste alimentan su skirmish a ciclo de habilidades, ya que su daño viene de encadenar hechizos, no de auto-attacks.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un target prioritario compra un item de Magic Resist.

**Boots:** Sorcerer's Shoes por defecto. Mercury's Treads es aceptable contra AP burst con CC pesado (Lissandra + Twisted Fate); la tenacity protege la ventana de cast de tu R.

**Skill order:** Maxea **Q** primero (clear speed y DPS en skirmish), **W** segundo (burst single-target), **E** al final. Punto en **R** a niveles 6, 11, 16. Nivel 1 en **Q**, nivel 2 en **E** para gankear, nivel 3 en **W**.

**Runes:** Primario **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**.

## Matchups clave

- **Lee Sin / Xin Zhao:** Invaders agresivos a level 2-3 (entran a tu jungla a matarte antes de tener el kit completo) que la borran antes de su power spike de clear más mobility. Empieza por el camp más lejano de su línea de invade probable; pide a tus laners wards cerca de tu segundo buff. No contestes scuttle (el cangrejo del río) pre-6.
- **Karthus:** Carrera de farm. Escala mejor late pero tú le ganas el tempo en la ventana 6-14. Trackea su clear, gankea sus líneas en cada cooldown de R. Si vas detrás, no duelees: enfócate en trades por side objective.
- **Amumu:** Ambos clearean rápido pero él no tiene skirmish presence pre-6. Toma scuttle en su lado del mapa tras el primer clear; no puede castigarte sin la Q stun lista.
- **Master Yi:** Territorio counterpick una vez que tiene 2 items. Buildea ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** antes de lo habitual; kitea su Q (su alpha strike) acumulando el Move Speed de tu Q pasiva y pre-colocando E detrás de ti.
- **Graves:** Pierde scuttle contra él a HP completo. Pathea al lado opuesto del mapa hasta tener ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** completo; el bleed en % HP por fin nivela el trade en auto-attack.

## Power spikes y condiciones de victoria

- **Level 3 (Q + W + E):** Kit completo. Primer clear cerrado hacia el 3:15 con HP sano — es tu primera ventana de gank con setup de E en W centrado.
- **Level 6 (R desbloqueada):** Primera **Lilting Lullaby**. Busca dust pre-acumulada en un laner bajo de vida: entra en vision, R, espera el ramp de 1.5s, suelta el combo de wake-up. Es el timing más técnico de su kit (R temprana es ulti tirada).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completo (~ minuto 9-11):** El DPS en skirmish se duplica. Fuerza aquí las peleas por grub o primer dragon; su DOT más el bleed del item destrozan la frontline tank antes de que pueda reposicionarse.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ minuto 18-22):** Poder de pelea extendida. Out-sustain a los bruisers en 5v5 porque tu cura escala con la cantidad de daño que sigues aplicando, y tu kit aplica daño en cada cooldown.

## Errores comunes

- **Castear R en enemigos sin Dream Dust.** R solo duerme a targets que ya cargan stacks de tu pasiva. Pégales antes con Q o E; una R "vacía" aplica solo un Drowsy breve, no un sleep completo.
- **Quedarse quieta para soltar W.** El centro de la W es el burst, pero la carga es larga. Combínala antes con E para slow: con la E acertada, el centro de W queda casi garantizado incluso sin Flash.
- **Spamear Q por fog enemigo.** La Q te revela en cada cast. En jungla enemiga con wards, spamear Q clearando un camp pinta un ping rojo enorme en su minimap. Entra en silencio y luego comprométete.
- **Ignorar el upgrade del jungle pet.** Muchas Lillias nuevas saltan la quest del Hailblade clearando demasiado eficiente. Revisa la barra del pet — si se atasca en "needs more XP", pasa por un camp pequeño extra antes de backear.
- **Buscar pickoffs con R en solitario late game.** R es herramienta de setup de team, no botón de gank individual. Si tu equipo está en mid-rotation cuando la lanzas, el sleep timer expira antes de que lleguen. Pinga el spell, cuenta uno y comprométete.

## Consejo avanzado

Practica un ángulo "E-flash" para setups de R en mid river. Avanza hacia el mid laner enemigo desde el bush lateral, flash-E en su línea de marcha para que la seed caiga detrás de él (le obligas a caminar al slow), luego R en la ventana de slow. El slow garantiza que los stacks de la pasiva caigan antes de que la R resuelva, así el sleep es completo y no un Drowsy parcial. Ahorra el cast en spawns de objetivos donde el enemigo está rotando y los wards son escasos.
