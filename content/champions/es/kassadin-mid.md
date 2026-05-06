---
title: "Kassadin Mid Build & Guía — Patch 16.9"
slug: "kassadin-mid"
language: "es"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Guía de Kassadin mid para League of Legends Patch 16.9: build de late-game scaler, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Pasiva: Kassadin recibe daño mágico reducido e ignora la colisión con unidades (atraviesa minions y campeones)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Skillshot single-target: daño mágico + interrumpe canalizaciones. Otorga a Kassadin un magic shield de 1.5s — anti-poke vs magos AP."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Pasiva: daño mágico extra en autoataques. Activa: el siguiente auto está potenciado y devuelve maná perdido (más sobre campeones)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "Cono AOE con slow + daño mágico. Se carga con hechizos lanzados cerca (tuyos o enemigos). Necesita carga para activarse: úsalo de finisher."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Blink corto con cooldown bajo. Cada cast en pocos segundos duplica el coste de maná y añade daño extra, hasta 4 stacks."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps que out-escalas post-11: AP + ability haste + movement speed para encadenar Riftwalks sobre la backline squishy"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun) que cierra tu ventana de Riftwalk"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comps con healing (Soraka mid, Vladimir, Dr. Mundo top): aplica Grievous Wounds, reduce a la mitad las curaciones"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs carries squishy con escudos (Riven, Yasuo passive): burst extra para rematar con R+Q+E"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Sobrevive la lane hasta el nivel 11 con un item completo, luego snowball (convierte ventajas pequeñas en grandes): R sobre carries squishy, Q+AA+E para borrarlos, R fuera antes del peel."
  weakness: "Lane phase brutal: poco daño base, rango corto, sin waveclear antes del 9. Magos de burst y poke a distancia te empujan bajo torre y te quitan HP antes de que escales."
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
  primary_rationale: "Inspiration primary: First Strike premia las ventanas de burst late-game con oro y daño extra al abrir con R. Magical Footwear ahorra 350 oro, Biscuit Delivery cubre el maná flojo en lane, Cosmic Insight reduce CD de summoners para más Flash en escaramuzas."
  secondary_rationale: "Sorcery como secundaria: Manaflow Band es obligatoria — sin ella el spam de Q en lane te seca antes del nivel 9. Transcendence empuja la ability haste sobre el 40%: el CD de Riftwalk baja lo justo para encadenar 3-4 R en teamfight en vez de 2."
  secondary_alternative: "Si te toca poke mage que te niega farm pre-6 (Xerath, Vel'Koz), cambia Sorcery por Resolve con Second Wind (regen HP pasivo vs poke) y Overgrowth (escalado de HP) para sobrevivir lo suficiente y escalar."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Magos inmóviles sin dash"
      reason: "Tras el nivel 11 el CD de Riftwalk es de 2s: blinkeas encima, Q al cast, E para slow, AA-execute antes de que aterricen su burst combo completo."
    - examples: ["lux", "syndra"]
      archetype: "Magos de skillshot setup sin escape"
      reason: "Su daño exige aterrizar setups de largo rango (Q root, stack de stun); la R late de Kassadin esquiva el skillshot mid-combo y cierra el gap con un blink que no pueden castigar."
    - examples: ["taliyah", "azir"]
      archetype: "Magos de área-denegación a largo rango"
      reason: "Pre-6 te bullean, pero post-11 el magic shield de Q + la movilidad de R neutralizan sus tools de kiting. Cuando la partida se alarga su AOE se desperdicia en un objetivo que no pueden fijar."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Magos de poke a largo rango"
      reason: "Pokean fuera del rango de tu Q (650) durante toda la fase pre-6. El magic shield de Q ayuda pero no recarga HP — al nivel 6 ya estás a media barra y no puedes all-in."
    - examples: ["talon", "zed"]
      archetype: "Asesinos AD early-game"
      reason: "Llegan a su powerspike de 2 items hacia el minuto 14 mientras Kassadin sigue con el primero. Los roams a side lanes castigan el escalado lento: la partida termina antes de que llegue tu late game."
    - examples: ["pantheon", "yasuo"]
      archetype: "Lane bullies con presión all-in"
      reason: "Su all-in nivel 2-3 (Pantheon Q+W stun, Yasuo Q-windwall-knockup) destroza el HP de Kassadin antes de tener Q max. El magic shield de Q no sirve contra daño físico."
---

## Resumen

Kassadin es un AP assassin (un mago que cierra el gap y borra un único objetivo en lugar de pokear desde lejos) construido para el late game. Su kit gira alrededor de **Riftwalk (R)**: un blink corto con cooldown muy bajo que se convierte en la mejor herramienta de reposicionamiento del juego al alcanzar el rank 3 en el nivel 16. El precio es una lane phase castigadora: rango corto (650 en **Q**), sin waveclear antes del 9, y daño base que pierde cualquier all-in (intercambio total hasta que alguien muere) pre-6 contra la mayoría de mid laners. La mid lane le va bien porque el río es la vía más corta hacia scuttle y side lanes una vez que **R** está online — pero antes hay que sobrevivir 11-13 minutos.

El game plan es simple: no feedees pre-6, llega al nivel 11 con un item completo, y empieza a cazar carries squishy. La skill expression está en la gestión de maná de **Riftwalk** (cada cast en 7 segundos duplica el coste, así que 4 R en una pelea sin un item basado en Tear es imposible) y en stackear ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** con tus hechizos antes de que empiece la pelea.

## Build Recomendada

**Starting items:** Doran's Ring + 2 Health Potions. El maná del Doran's importa más que el HP del Doran's Shield: spammeas **Q** en lane para last-hit a distancia cuando puedes.

**Core items (en orden):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — el mejor scaler maná + HP + AP del juego para Kassadin. La pasiva Eternity, a partir del minuto 10, te cura un buen pellizco en cada level-up y te mantiene vivo en lane. Primer item completado.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana, las botas casi siempre correctas contra targets squishy mid/ADC.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP del 35%. Tu combo Q+E+AA dobla el daño con esto puesto.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis. Te permite R a la backline y stasi si llega el peel, luego R fuera al terminar la stasi.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR stack. Obligatorio en cuanto un priority target compre ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** o ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + un item de MR.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps que out-escalas post-11. AP + ability haste + movement speed: encadenas Riftwalks más rápido y te quedas pegado a la backline squishy una vez dentro.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs CC mágico single-target que cierra la ventana de tu **R** (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comps con healing pesado. Aplica Grievous Wounds (un debuff que reduce la curación a la mitad) al hacer daño.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs carries squishy que compran escudos. La pasiva HP-threshold (una pasiva que se activa cuando el target está bajo el ~35% HP) encaja con tu execute **R+Q+E**.

**Boots:** Sorcerer's Shoes por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs comps con AP + CC pesado (2+ stuns / roots en el equipo enemigo).

**Skill order:** Maxea **Q** primero (mejor daño y el shield mana-cheap), **E** segunda (la waveclear se desbloquea al nivel 9 con E max), **W** la última. Punto en **R** en niveles 6, 11, 16.

**Runes:** Primaria **Inspiration** con **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secundaria **Sorcery** con **Manaflow Band** y **Transcendence**. Cambia Sorcery por **Resolve** (Second Wind + Overgrowth) en matchups de poke a larga distancia.

## Matchups clave

- **Xerath / Vel'Koz:** Su rango de Q supera al tuyo en 200+ unidades. Last-hit solo con **Q** a max range, traga el poke, no pushees nunca pasado el río. Usa el shield de ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** medio segundo antes de que sus hechizos aterricen — el magic shield bloquea la mayor parte del daño.
- **Zed:** Evita all-ins pre-6. Cuando **R** se desbloquee, baitea su mark de **R**, luego Riftwalk para esquivar el daño snap-back. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como item 2 en vez de Deathcap si va fed (ya tiene 4+ kills).
- **Veigar:** Igualado pre-6, brutal post-11. Mantente fuera del rango de su **E** cage hasta el nivel 11; cuando llegues al CD de R de 2 segundos, dive sobre él con un Riftwalk lateral (la cage tiene esquinas abiertas, no muros llenos).
- **Ahri:** Carrera de prioridad de roam. Pushea la wave cuando ella esté baja de maná, sigue sus roams. Su Charm cancela tu **R** mid-blink — compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como 4º item si ella es la threat carry.
- **Yasuo:** Bully early durísimo. No autoataques en wave (su **E** dasha en tus minions para poke gratis). Quédate atrás, déjalo pushear, freezea la wave cerca de tu torre con auto-attack pulls. Sobrevive al nivel 6 y empieza a tradear R+Q.

## Power spikes y condiciones de victoria

- **Nivel 6:** Se desbloquea **Riftwalk**. Ya puedes blinkear sobre muros — escapa de ganks por el pit de Krugs, el muro de Raptors, el borde del pit del drake. El daño de R en rank 1 es bajo, no hagas all-in todavía.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages completado (~ minuto 12-14):** Primer cojín de HP/maná importante. La lane phase se vuelve sobrevivible; busca trades cortos cuando el mid enemigo esté en cooldown.
- **Nivel 11:** El segundo rank de **R** baja el CD a 3.5 segundos. Aquí Kassadin está realmente online — encadenas 2 R y vives, o R-Q-E-AA-R fuera sobre un squishy. Fuerza teamfights desde aquí.
- **Nivel 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** R a 2 segundos de CD, AP scaling encima. Un-shoteas a cualquier squishy sin MR y encadenas 3-4 R en una sola pelea. Fuerza fights de baron y elder dragon — el late-game Kassadin los gana.

## Errores comunes

- **Intentar ganar la lane.** Kassadin es el peor laner early del mid by design. Si vas a por all-ins al nivel 3 mueres, te quedas atrás y no llegas a tu spike. Last-hit, traga poke, llega vivo al nivel 11 — esa es la win condition.
- **Spammear Riftwalk en escaramuzas.** Cada cast en 7 segundos duplica el coste de maná. 4 R seguidas queman 600+ maná — terminas la pelea sin Q y sin E. Mira la barra de maná antes de la tercera R.
- **Aguantar la E para el cono perfecto.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** carga con hechizos lanzados cerca (los tuyos y los enemigos cuentan). Lanza Q sobre una wave una vez antes del fight para tener E lista, luego engage. Entrar en un fight sin E cargada es tirar el finisher de slow.
- **R-engage sin plan de salida.** Riftwalk es de rango corto (500). Si blinkeas sobre el ADC backline y tu equipo no sigue, el peel te come antes de que la R refresque. Busca siempre la dirección del segundo R (¿hacia dónde R fuera?) antes del primero.
- **Comprar Deathcap antes de Rod of Ages.** Deathcap cuesta 3600 de oro sin HP/maná — comprarlo primero significa morir en cualquier teamfight antes de que el AP cuente. Rod of Ages (3700g, +400 HP, +400 maná) es el item de supervivencia que hace usable al Deathcap.

## Consejo avanzado

Usa **Q** como buffer de magic shield antes de los wind-ups enemigos, no solo de poke. El magic shield de 1.5 segundos de Null Sphere absorbe una cantidad fija de daño mágico — castéalo en el medio segundo antes de que aterrice una **W** de Veigar, una **R** de Lissandra, o una **R+Tibbers** de Annie, y niegas la mayor parte de su burst. Practica el timing en Practice Tool contra un Veigar bot: el shield debe estar activo **mientras el hechizo impacta**, no antes del cast. Este único truco es lo que separa a los Kassadin que pierden lane 0/3 de los que la pierden 0/0 y escalan.
