---
title: "Lux Mid Build & Guía — Patch 16.9"
slug: "lux-mid"
language: "es"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Lux mid para League of Legends Patch 16.9: build de mago, matchups clave, power spikes, errores comunes y un consejo avanzado para sacarle todo el partido."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "Los hechizos marcan al enemigo. La siguiente auto-attack de Lux detona la marca y aplica daño mágico extra."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "Skillshot lineal que enraíza hasta dos enemigos. Cooldown largo: úsala como setup, no como poke."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "Escudo de ida y vuelta sobre Lux y los aliados que atraviesa. Reactívala para devolverla antes."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "Zona dirigida que ralentiza y aplica daño por tics. Reactívala para detonar. Tu herramienta principal de waveclear."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "Rayo lineal de larga distancia con daño mágico masivo. Consume las marcas de Illumination al impactar."
      dd_spell_id: "LuxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Diana, Talon, Akali) — la stasis salva el follow-up de tu R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto cualquier objetivo prioritario compre un item de Magic Resist"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snipea targets squishies con R desde máxima distancia en peleas por objetivos cuando Luden's Echo y Shadowflame estén online. Controla el espacio con E y quédate detrás de tu front line."
  weakness: "Sin dash y sin movilidad innata. Counter duro de divers y assassins; si tu front line cae, tu posicionamiento cae con ella."
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
    primary_rationale: "Sorcery primaria: Arcane Comet aprovecha el combo E en Q para garantizar el proc y meter burst extra en cada trade. Manaflow Band sostiene el maná para spamear E en lane, Transcendence empuja el CDR por encima del 40% y Scorch cierra el poke con el enemigo a baja vida."
    secondary_rationale: "Inspiration secundaria: Biscuit Delivery y Cosmic Insight para sustain en early game y un Flash más frecuente en teamfights."
    secondary_alternative: "Si el equipo rival tiene 2+ squishies con resistencias bajas, cambia Inspiration por Precision con Presence of Mind (devolución de maná al matar) y Coup de Grace (+8% de daño a enemigos por debajo del 40% de HP)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Magos inmóviles sin dash"
      reason: "La Q de Lux es un root a larga distancia: los targets sin dash ni stealth se quedan clavados en una línea limpia y comen el combo E + R completo antes de poder responder."
    - examples: ["senna", "ziggs"]
      archetype: "Carries de backline con escape débil"
      reason: "La R cross-map convierte errores de posicionamiento en kills. Aportan desde lejos pero no pueden esquivar un snipe a máxima distancia cuando aparecen los objetivos."
    - examples: ["annie", "sylas"]
      archetype: "Magos de all-in telegrafiado"
      reason: "Su engage exige distancia corta y un tell lento — Lux escuda el burst con W, mete Q en el frame de recovery y se aleja para resetear el trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "Entran dentro de la ventana de cast de la R de Lux antes de que termine el channel; Zhonya's ayuda pero no salva si la cadena de dashes impacta antes de activar la stasis."
    - examples: ["xerath", "vel-koz"]
      archetype: "Magos de artillería con más rango"
      reason: "Pokean a Lux más allá del rango de su Q. Ella no tiene cómo cerrar la distancia, así que cada pelea de wave le sangra HP sin opción de all-in de vuelta."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globales / cross-map"
      reason: "Lux limpia waves y se queda en lane; el rival usa la ulti para voltear side lanes y dragones. Lux pierde el macro game incluso ganando el matchup 1v1."
---

## Resumen

Lux es una maga de artillería a larga distancia que destaca controlando espacio, haciendo poke (hostigar a distancia para rascar HP) y rematando peleas desde la backline (la línea trasera del equipo). Su kit gira en torno a acertar **Light Binding (Q)** como setup, para luego encadenar **Lucent Singularity (E)** y **Final Spark (R)** y reventar al objetivo. Su movilidad base es nula y no tiene dash (desplazamiento rápido), así que el precio a pagar es posicionarse siempre detrás de los minions y de tu frontline (la línea delantera de tanques y bruisers). El mid le sienta bien porque el río ofrece ganks (emboscadas del jungla) a doble sentido a los que puede responder con **Q** o con un **R** vistoso a través del mapa.

Su plan de partida es simple de explicar y exigente de ejecutar: acierta **Q** cuando el enemigo pisa tu **E** (la ralentización encadena el binding en un root garantizado), empuja la wave con **E** cuando el riesgo es bajo y busca rotar por las side lanes cada vez que **R** esté disponible. El skill expression (margen de habilidad personal) está en la colocación de **E** (predecir por dónde tendrá que pasar el rival para hacer last-hit) y en los snipes con **R** a través del fog of war (la zona oscura sin visión) cuando tienes wards.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Salta Corrupting Potion salvo que la lane sea de hostigamiento pesado con auto-attacks contra ti.

**Items core (en orden):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst y sustain de maná para spamear E.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana para borrar a los squishies que más quieres eliminar.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra; la pasiva por umbral de HP encaja con los remates de **R**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador para el late game y tu slot con más AP.

**Items situacionales:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers y assassins (Zed, Diana, Talon, Akali).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka mid, Vladimir, Dr. Mundo top).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto cualquier objetivo prioritario compre un item de Magic Resist.

**Botas:** Sorcerer's Shoes por defecto. Ionian Boots of Lucidity son aceptables si el equipo necesita más uptime de **R** como herramienta de remate.

**Skill order:** Sube **E** primero al máximo (waveclear y DPS principal), **Q** segundo (utility del binding) y **W** al final. Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence** y **Scorch**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**, o bien **Precision** con **Presence of Mind** y **Coup de Grace** si el rival lleva varios squishies con resistencias bajas.

## Matchups clave

- **Yasuo / Yone:** Pueden Wind Wall tu **Q** y tu **E**. Reserva la **Q** hasta que quemen sus habilidades y usa **E** para limpiar wave solo desde distancia segura.
- **Diana / Akali:** Son amenazas de dive (entrar a quemarropa para reventar). Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** después de Luden's; nunca uses **Flash** de forma ofensiva en lane contra ellas.
- **Orianna:** Matchup parejo, lo decide el teamfight. Tu rango iguala al suyo; no piques a entrar a trades de auto-attack porque ella escala mejor con la misma serie de items.
- **Twisted Fate:** Carrera de prioridad por roams. Si te canta carta dorada, métele **Q** antes de que cierre la distancia; en cualquier otro momento controla su **R** con wards en el río y en el tri-bush (el arbusto triangular junto al carril).
- **Galio:** Evita pegarte a un aliado pre-6 en mid (su **W** castiga targets agrupados). Castígalo cuando esté en melee a los minions; no tiene rango de waveclear para superarte en push.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con un punto en **E** y la **Q** que llevas desde el inicio ya tienes herramientas para zonificar (negar espacio al rival) sobre una wave en slow-push.
- **Nivel 6:** El primer **Final Spark** desbloquea roams (rotaciones por la mapa) y presión de snipe. Si tienes el combo **Q-E-R** memorizado, una pelea en mid-río sin wards es kill gratis.
- **Luden's Echo completo (~minuto 12-14):** El control de wave se voltea. Puedes shovear (empujar la wave) y rotar dejando la oleada en el lado enemigo, liberando el path del jungla hacia el bot side rival.
- **Rabadon's Deathcap online (~minuto 24-28):** Tu **R** one-shotea (mata de un golpe) a cualquier squishy que no haya comprado un item de Magic Resist. Fuerza peleas de objetivo en este momento.

## Errores comunes

- **Tirar Q como harass sin setup.** Suelta primero **E** bajo sus pies para ralentizar y luego **Q** por el camino obligado. La **Q** desnuda como poke es maná tirado a la basura.
- **Guardar E para waves vacías.** Empuja la wave en cuanto tengas mana disponible; el trade que cedes es mucho más pequeño que la prio (prioridad de carril) que ganas para roams y para el Scuttle.
- **Auto-posicionarse a rango máximo en teamfights.** A máxima distancia de **R** te quedas fuera del peel (protección) de tu equipo. Colócate en la segunda posición más atrasada para que un flank (rotación lateral) no te borre.
- **Q en cooldown mientras splitpushes.** Reserva **Q** para escapar de ganks; en side lanes no tienes equipo para el follow-up, así que el binding es un botón de pánico, no combustible para poke.

## Consejo avanzado

Practica el W-cancel reactivando **Prismatic Barrier** justo cuando llega a su pico de ida — el escudo de vuelta entra a valor máximo y haces peel y shield-bomb (escudo instantáneo) sobre un aliado al mismo tiempo. En teamfights esto te da más o menos el doble de valor de escudo efectivo comparado con dejar que **W** recorra todo su trayecto.
