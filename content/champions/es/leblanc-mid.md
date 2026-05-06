---
title: "LeBlanc Mid Build & Guía — Patch 16.9"
slug: "leblanc-mid"
language: "es"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "Guía de LeBlanc mid para League of Legends Patch 16.9: build de AP burst assassin, combos Sigil double-tap, matchups clave, spike al 6 y errores comunes."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "Cuando LeBlanc baja del 40% de HP se vuelve invisible 1 segundo y aparece un clon que imita su movimiento hasta 8s. Herramienta de bait defensiva, no hace daño."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Hechizo single-target que golpea y marca al objetivo durante 3.5s. Una segunda fuente de daño sobre la marca detona el sigilo para el burst real. Devuelve maná y parte del cooldown si Q remata."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash a una posición y daño al llegar. En 4s puedes recastearla para volver al punto inicial. Engage con W1, escape con W2: saber retrasarla separa un pick limpio de un throw."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot que encadena al primer enemigo tocado. Si sigue encadenado 1.5s (sin flash, sin dash, sin minion break) queda rooted y recibe daño extra. Setup principal para detonar Q."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Re-cast de la última habilidad básica con daño potenciado. Permite doble Q para burst pleno, doble W para engage seguro o doble E para lockear. R no resetea cooldowns: añade un cast extra."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Zed, Diana, Talon, Akali): la stasis te da margen para esperar su burst y rematar con Mimic-Q"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primer ítem alternativo si quieres un dash extra junto a W: burst y carga que se suma a W para engages desde fog"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target que mata el engage (Annie stun, Lissandra R, Ahri charm, TF stun): el spell shield come la primera"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "alternativa a Void Staff contra equipos con 2+ items de MR (Mercury's Treads + Banshee's o cualquier comp anti-AP)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowball mid con poke de Q pre-6, luego al 6 conviértelo en kill sobre un squishy con W-Q-AA-R-Q. Roamea side lanes cuando R esté up; pickoff con W in / W out."
  weakness: "Squishy sin defensas más allá del W de retorno. Cae en late: scalers con sustain (Kassadin, Cassiopeia) la superan tras el minuto 25. Lockéala con hard CC antes del burst y muere al instante."
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
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute proca en cada Q-AA-E (3 golpes en 3s) y suma burst gratis sobre la detonación del Sigil. Sudden Impact da magic pen tras cada W, y Ultimate Hunter recorta segundos a R para que el doble Q vuelva antes entre roams."
    secondary_rationale: "Sorcery secondary: Manaflow Band arregla el maná justo del early para spammear Q sin backear, y Transcendence sube ability haste sobre 40% bajando los CD de W y R para trades cortos repetidos."
    secondary_alternative: "Contra lanes que te out-pokean (Xerath, Vel'Koz) cambia Sorcery por Inspiration con Magical Footwear (botas gratis ~min 12) + Cosmic Insight (haste extra en Flash para combos W-Flash más ajustados)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Mages inmóviles sin dash fiable"
      reason: "Sin movilidad no escapan a tu detonación W-Q-AA, y la jaula de Veigar es un círculo que rodeas con W."
    - examples: ["lux", "syndra"]
      archetype: "Mages artillería squishy con cooldowns altos"
      reason: "Si sobrevives al primer poke de Q, all-in cuando su spell de setup esté abajo: Lux Q y Syndra E son ventanas de 12-13s castigables."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanter mids sin escape duro"
      reason: "Sus shields retrasan pero no paran la segunda detonación de Q; W in sobre el shield, Q de nuevo con R y la kill confirma antes del sustain."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillería de largo alcance"
      reason: "Sus habilidades llegan a 1100-1500 unidades, muy por encima de tu Q a 700; te shovean fuera del rango XP y no puedes all-in pasando su CC."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Mids late-scaler que te superan"
      reason: "Si sobreviven a tu spike 6-9 te adelantan en daño y movilidad puros; el R de Kassadin tras el 11 esquiva tu ventana W-Q-R y la zona grounded de Cassiopeia anula el W de retorno."
    - examples: ["lissandra", "galio"]
      archetype: "Mid laners con lockdown fiable"
      reason: "Q-W de Lissandra o W taunt de Galio te clavan en el sitio durante el salto; LeBlanc no tiene Cleanse y sus HP se funden en cuanto deja de moverse."
---

## Resumen

LeBlanc es una AP burst assassin: un campeón construido para tirar abajo un solo objetivo squishy en 1-2 segundos (esa ventana corta de daño alto se llama "burst"). Cada pelea gira en torno a su pasiva, **Sigil of Malice (Q)**: Q da un golpe pequeño y marca al objetivo, y luego cualquier segunda fuente de daño sobre esa marca detona el sigilo para el burst real. El ritmo clásico "double-tap" es Q para marcar y luego auto-attack o **E** para detonar.

El plan de juego: pokea con Q en lane (su cooldown de 6 segundos te deja spammearla), explota a un squishy al 6 con W-Q-AA-R-Q y luego roamea (deja tu lane para hacer una jugada en otra) side lanes en cuanto R esté up. LeBlanc está en su mejor momento del minuto 8 al 25; después, mages de scaling y bruisers la alcanzan. Planea siempre la salida: **Distortion (W)** sirve para engage *y* disengage, pero solo si retrasas el recast para escapar, no para confirmar la kill.

## Build Recomendada

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. El anillo arregla el mana regen para spammear Q en lane.

**Core items (en orden):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — spike de burst con daño mágico bonus on-hit y proc de movement speed al hacer takedown. Encaja perfecto con la combo Q-AA-E: cada detonación también triggea Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (tu daño mágico ignora una porción de la Magic Resist enemiga). Upgrade directo de daño contra squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra cuando el enemigo está bajo ~40% HP (es una HP-threshold passive: solo se activa al bajar de esa línea). Apila con el Mimic Q para one-shot a los ADC.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador late-game sobre toda tu AP. Tu slot de mayor daño absoluto.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration porcentual cuando los enemigos empiezan a comprar MR; mantiene el scaling contra objetivos más tanky.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers y assassins (Zed, Diana, Talon, Akali). El active de stasis te hace invulnerable ~2.5s, dejándote esperar su ventana de burst y rematar con el Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primer ítem alternativo si quieres un dash extra; apila con W para un engage más largo desde fog of war (zonas del mapa sin vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC single-target (Annie stun, Lissandra R, Ahri charm, Twisted Fate stun). El spell shield bloquea la primera habilidad que te tiren.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — alternativa a ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** cuando tu equipo necesita el aura de cura más que el burst puro.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** son el default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** son correctas contra 2+ amenazas de hard CC (Annie + Galio, Lissandra + Leona).

**Skill order:** Maxea **Q** primero (poke y daño principales), **W** segundo (cooldown reducido en el dash de engage/escape y más daño de impacto), **E** al final (la duración del root escala con rank, pero el CD pesa menos en burst). Punto en **R** a niveles 6, 11, 16.

**Runes:** Las runas son bonos pasivos que eliges antes del partido; coges un primary tree (5 runas) y un secondary tree (2 runas). Primary **Domination** con **Electrocute** como keystone — proca (el efecto de la runa se activa) cuando golpeas a un objetivo con tres habilidades o auto-attacks en 3 segundos, cosa que Q-AA-E cubre sin esfuerzo. Añade **Sudden Impact** (más magic pen tras un dash de W), **Sixth Sense** para presión de vision al roamear y **Ultimate Hunter** para bajar el CD de R y que el doble Q vuelva antes. Secondary **Sorcery** con **Manaflow Band** (sustain de maná para spammear Q) y **Transcendence** (ability haste — tus habilidades vuelven más rápido). Stat shards: dos Adaptive Force + Health Scaling.

## Matchups clave

- **Annie:** Pre-6 la out-tradeas con poke de Q. Post-6 tiene el stun listo (su pasiva parpadea "Pyromania" en su retrato a 4 cargas) y una cadena con Tibbers te mata. Compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como tercer ítem si snowballea (convierte una pequeña ventaja inicial en una mucho mayor) early.
- **Twisted Fate:** Una carrera de roam. Elige la lane a gankear con **R**, pero pierde el lane directo: Q cada vez que se acerca a last-hittear y zónalo (controla el espacio alrededor) fuera de la wave. Trackea sus windups de **R** con vision wards (ítems colocables que dan vision en una zona) sobre el river.
- **Kassadin:** Hard counter de scaling. Pre-6 lo pokeas con Q (no tiene respuesta hasta el 6); tras el 11 su **R** dashea más rápido que tu W de retorno y te out-tradea. Gana la lane antes del minuto 14 o llama al jungler dos veces.
- **Xerath:** Te out-rangea. Su **Q** llega a 1500 unidades (la tuya a 700). Quédate detrás de tu wave de minions, esquiva su **Q** lateralmente y solo committea cuando esté low mana — su Q cuesta 80-100 maná, 5 Q falladas y está seco.
- **Diana:** Pareja pre-6 (la out-pokeas), pierdes post-6 si landa la **R**. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** tras ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** si lleva 2+ kills; la stasis le desperdicia el ulti combo.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + W):** Primer spike real. Q-AA-W2 es un patrón poke-and-leave: dash in con W, Q, auto-attack para detonar el Sigil, recasta W para escapar. Úsalo para zonar al rival fuera de la segunda wave.
- **Nivel 6:** Tu primera **R** es el spike puntual más grande del partido. Mimic-Q sobre un objetivo marcado añade unos 200-250 de daño al 6 con un ítem; contra un squishy al 65% HP la combo completa W-Q-AA-R-Q confirma la kill antes de que pueda Flashear.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completado (~ minuto 11-13):** El umbral de burst sube otros 80-100 de daño por habilidad. Roamea side lanes con W en cuanto empujes la wave bajo la torre mid enemiga.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 23-26):** Multiplicador sobre cualquier otro ítem AP. A partir de aquí one-shoteas cualquier squishy a través de Banshee's Veil con W-Q-R-Q-E. Fuerza fights en torno a objetivos (Drake, Baron) y busca picks en la backline (eliminar al carry rival aislado del equipo).

## Errores comunes

- **Hacer W in para la kill sin guardar el W2.** La ventana de recast de Distortion son solo 4 segundos. Si tiras toda la combo en un segundo y luego te quedas plantada 3 segundos en medio del equipo enemigo, su support te coge y mueres. Planea siempre: W in, daño, W out — el retorno es la diferencia entre un pick limpio y un throw (una muerte evitable que da momentum al rival).
- **Detonar el Sigil con otra Q.** Q no detona su propia marca — solo una *segunda* fuente de daño detona. Las LeBlanc nuevas castean Q dos veces esperando números grandes; necesitas Q + auto-attack, o Q + E, o Q + R-Q. El patrón es marcar-luego-detonar, nunca marcar-luego-marcar.
- **Castear R-W como primer instinto.** La W mimicada tiene el doble de range, pero te mete el doble de profundo en peligro. Mimic Q sobre un objetivo marcado es casi siempre el botón de la kill; mimic W es solo para chases y escapes.
- **Pushear la lane sin roamear.** Una vez tienes ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** y **R**, tu valor está en las side lanes. Si sigues farmeando mid mientras una side lane muere, desperdicias el campeón. Empuja la wave, pinga "voy" y usa **W** desde fog of war para pickear al side laner.
- **Buildear ítems de bruiser contra un equipo squishy.** LeBlanc no tiene sustain de kit — los ítems que cambian burst por durabilidad desperdician su toolkit. Mantente en ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** salvo que el equipo rival tenga 3+ tanks.

## Consejo avanzado

La combo "W-Flash" es el engage sorpresa firma de LeBlanc. Castea **W** hacia el objetivo y, durante la ventanita brevísima del dash, pulsa **Flash** — Flash te lleva otras 400 unidades más allá del punto de aterrizaje de W, y el daño de W se aplica en la nueva posición. El range total W + Flash bate la mayoría de setups counter-CC (stun de Annie, binding de Lux, taunt de Galio W) porque cubres el gap más rápido de lo que pueden reaccionar. Guarda **R** para el segundo cast: una vez en rango corto, R-Q sobre el objetivo marcado cierra la kill antes de que su support pueda peelear (proteger a su carry). El truco está en el buffer: pulsa Flash al inicio del dash de W, no al final, o W se cancela y el burst se desperdicia.
