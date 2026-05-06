---
title: "Graves Jungle Build & Guía — Patch 16.9"
slug: "graves-jungle"
language: "es"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Graves jungla para League of Legends Patch 16.9: starter kit, build de lethality, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Mecánica de escopeta con recarga. Cada disparo lanza 4 perdigones en cono que no atraviesan minions; varios impactos en un no-campeón lo empujan."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Proyectil lineal que detona a los 2s, o al instante contra terreno — rebota en muros. Herramienta principal de clear y de angle-shot."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Lanza una nube de humo que bloquea visión y ralentiza al impacto. Úsala para disengage, denegar wards o cubrir rutas de gank."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Dash corto al frente con buff de armadura que acumula al ir hacia un campeón. Las autos bajan el CD y refrescan el buff. Tiene 2 cargas."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Disparo explosivo a larga distancia: pega al primer campeón y luego estalla en cono detrás. Burst spike en niveles 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hard CC mono-objetivo (Malzahar R, Skarner R, Warwick R) — el spell shield bloquea el lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "cuando vas por delante y el rival no apila armadura temprano — el execute bajo 5% HP cierra ventajas"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst AP fuerte (Diana, Syndra, Lux mid) — el escudo lifeline convierte one-shots en trades sobrevivibles"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs dos AD dealers fuertes (p.ej. Yasuo + Caitlyn) — el bleed reparte el daño y evita el one-shot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ campeones con hard CC (p.ej. Leona + Lissandra + Sejuani) — la tenacity recorta stuns y roots"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball de lethality con invades y ganks antes del minuto 14. Con Eclipse arriba, contesta cada objetivo — la escopeta funde a un squishy en dos volleys y la E te devuelve la ventana de trade."
  weakness: "Hambriento de maná en early. La ventana de recarga castiga el posicionamiento codicioso, y te derrites bajo cadenas de hard CC porque no tienes safety más allá del buff de armadura de E."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Resumen

Graves es un marksman que vive en la jungla, no en la bot lane. Sus auto-attacks de escopeta y el buff de armadura integrado en **Quickdraw (E)** le permiten enfrentar a tanks y bruisers cara a cara, sin perder la capacidad de bursar squishies con lethality. Todo el kit gira en torno al **tempo**: clear rápido, invade en cuanto baja el cooldown, y cambiar tu prioridad de jungla por kills antes de que las carries rivales escalen.

El game plan es simple: en los primeros 8 minutos eres el mejor duelista del mapa, así que aprovéchalo. Power-farmea un clear limpio, mira el minimapa y entra en la lane que tenga **Flash** abajo o HP bajo. Tras Eclipse contestas objetivos; tras tres ítems eres un skirmisher de teamfight que borra backlines desde un flank — pero **no** splitpushes en late, porque un Graves solo en el minuto 30 está a una cadena de CC de morir.

## Build Recomendada

**Ítems iniciales:** Smite + **Hailblade** para un clear más rápido y daño AOE en la **R**, junto a **Refillable Potion**. Escoge Emberknife solo si tu equipo necesita presión de counter-jungle desde el lado rojo rival (clear más lento, más sustain).

**Ítems core (en orden):**

1. **Eclipse** — burst+escudo+omnivamp, el primer ítem más limpio para junglers de skirmish. El escudo procea tras dos golpes, lo que encaja con el ritmo de tu escopeta.
2. **Plated Steelcaps** vs equipos cargados de AD / **Mercury's Treads** vs 3+ hard CC. Por defecto, Plated.
3. **Youmuu's Ghostblade** — activo de movement speed y lethality, tu herramienta de gap-close y de cierre de gank.
4. **Serylda's Grudge** — escalado de armor pen para late game cuando los rivales empiezan a apilar armadura; el slow sobre objetivos dañados te mantiene a rango.

**Ítems situacionales:**

- **Edge of Night** — vs ultis mono-objetivo con lock-on (Malzahar, Skarner, Warwick).
- **The Collector** — cuando vas por delante y quieres presión de execute sobre squishies.
- **Maw of Malmortius** — vs burst AP pesado (Diana, Syndra, Lux mid).
- **Death's Dance** — vs equipos con dos AD dealers fuertes (p.ej. Yasuo + Caitlyn). El daño que recibes se reparte como bleed lento en lugar de llegar de golpe.
- **Bloodthirster** — late game cuando necesitas un quinto ítem de daño con escudo y lifesteal incorporados.

**Botas:** Plated Steelcaps por defecto. Berserker's Greaves solo si el rival no tiene amenazas de CC y quieres específicamente scaling de attack speed — pick de nicho en Graves.

**Skill order:** Maximiza **Q** primero (clear y daño), **E** segundo (más dashes por el CD reducido por rank), **W** al final (el slow escala bien ya en rank 1). **R** en niveles 6, 11, 16.

**Runas:** Árbol primario **Domination** con **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Secundario **Precision** con **Triumph** + **Coup de Grace** para presión de snowball, o **Resolve** con **Second Wind** + **Revitalize** si esperas recibir poke en tu jungla.

## Matchups clave

- **Hecarim:** Te supera tras 3 ítems pero pierde los skirmishes pre-6 si E-rolleas en patrón de autos espaciadas. Castígalo antes del minuto 9 y luego retrocede — no lo duelees después de su primer ítem.
- **Lee Sin:** Matchup espejo de tempo. Ambos ganáis los primeros 6 niveles; el jungler con más ganks gana. Trackea el cooldown de su **Q** y las ventanas del W-jump; si su Q está abajo, tu escopeta gana el trade limpio.
- **Master Yi:** Hay que matarlo antes de su nivel 6 + primer ítem. La **W** encima de él durante su **Q** activa le bloquea la visión y pierde el lock — entrénalo en la Sala de Práctica hasta que sea reflejo.
- **Vi:** Tanky y muy gankera. Pierde skirmishes prolongados si tienes cargas de E; no te dejes coger en el aire por su **Q** — eso es un all-in garantizado para su lado.
- **Diana:** Snowball brutal post-6. Guarda **W** para el windup de su **R** (no rompe el engage, pero el slow al impacto alarga su commit y da tiempo a tu equipo a peelar). Construye **Maw of Malmortius** como segundo ítem de daño.

## Power spikes y condiciones de victoria

- **Nivel 3:** Kit completo desbloqueado. Tu patrón de gank es **E para entrar a rango -> Q sobre el muro detrás de ellos -> reset de auto -> W slow en su ruta de retirada**. Con runas Hail of Blades, esto mata a cualquier squishy al 60% HP y sin Flash.
- **Nivel 6:** **Collateral Damage** desbloquea el execute a larga distancia. El proyectil pega al primer campeón y luego estalla en cono — flashea un objetivo contra un muro y te garantizas tanto el impacto directo como el daño del cono.
- **Timing de Eclipse (~ minuto 9):** Ganas cada pelea contestada por objetivo. Fuerza una pelea en Scuttle, Drake o Voidgrubs en esta ventana — pasado el minuto 12, los junglers que escalan (Hecarim, Master Yi) empiezan a igualar tu ritmo.
- **3 ítems (~ minuto 22):** Pasas a ser un flanker de teamfight. Tu trabajo es flankear la backline rival (la carry squishy, la más alejada de su tank) y bursarla antes de que reaccione. No engagees nunca de frente.

## Errores comunes

- **Quemar cargas de E para escapar del clear.** **E** tiene 2 cargas y el cooldown baja cada vez que haces auto-attack. Gastar las dos cargas para esquivar un solo skillshot te deja sin gap-close durante 12 segundos. Guarda al menos una.
- **Q contra el muro detrás de ti por accidente.** **End of the Line** detona al instante contra terreno. Si lanzas Q de espaldas a un muro, el proyectil estalla detrás de ti sin daño. Comprueba siempre tu orientación antes de castear.
- **Smoke Screen sobre ti mismo para sustain.** **W** no cura. El valor está en el slow al impacto — tírala en la ruta de retirada de la carry rival, no encima de ti.
- **R a rango máximo sin setup.** El proyectil es esquivable a larga distancia. Usa **R** a bocajarro tras un Flash, o pre-disparada como finisher cuando el rival ya ha gastado Flash. No abras peleas con ella salvo que estén caminando en línea recta por la fog.
- **Splitpush en el minuto 30.** Graves late no tiene escape si un Skarner/Warwick/Malzahar acierta su R. Agrúpate con tu equipo después del minuto 25 y juega flancos a distancia de teamfight, no 1v1 en una side lane.

## Consejo avanzado

La técnica del **E-buffer-roll**: mientras estás a mitad del windup de Q o de un auto-attack, encola una entrada de **Quickdraw**. El dash sale en el momento en que el windup termina, así obtienes el daño del auto/Q **y** te reposicionas en el mismo ciclo de animación — mantienes el uptime de DPS mientras esquivas o persigues. La ventana de recovery en la que no puedes moverte es de unos 0.4 segundos sin este truco; con el buffer roll es casi cero. Practícalo en los muñecos de la Sala de Práctica hasta que tu ritmo de stutter-step sea auto-attack → E → auto-attack sin pausas.
