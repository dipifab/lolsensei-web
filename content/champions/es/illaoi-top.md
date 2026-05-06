---
title: "Illaoi Top Build & Guía — Patch 16.9"
slug: "illaoi-top"
language: "es"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Guía de Illaoi top para League of Legends Patch 16.9: build juggernaut con Tentáculos, presión con Test of Spirit, matchups, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "Aparecen Tentáculos en muros y terreno impasable cercano. Golpean a enemigos tocados por W, a Vessels creados por E y a cualquier espíritu extraído. Curan a Illaoi al impactar a campeones y Vessels."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Golpea con un Tentáculo en línea, daño físico. Pasiva: amplifica el daño de cada slam de Tentáculo — Q es además su waveclear y el botón para activar Tentáculos."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Auto-attack potenciada: salta al objetivo, hace daño físico en % HP máx y ordena slammar a todo Tentáculo cercano. El salto es su única mobility."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Skillshot lineal de largo alcance que arranca el espíritu del enemigo. El daño al espíritu se replica en el campeón real. Si muere o el target sale del rango, se vuelve Vessel y los Tentáculos lo cazan."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Slam AOE alrededor de Illaoi: daño + un Tentáculo extra por campeón impactado. Durante 8s los Tentáculos son untargetable y slamman 50% más rápido, y el CD de W baja a ~1.5s."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia desde Plated Steelcaps con 2+ amenazas AP o CC encadenado (Lissandra, Malphite ult, pull de Sett)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra kiters que salen del rango de W (Quinn, Vayne, Gnar) — la dash activa más slow los retiene en zona de Tentáculos"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra frontlines con mucho armor (Malphite, Rammus, Shen) — cada Q y proc de W reduce armor para todo el equipo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra comps AP-heavy con burst (Vladimir, LeBlanc) — el escudo mágico salta a HP bajo, justo cuando los Tentáculos siguen slammando"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "cuando el equipo va 4v5 y toca splitpush — resistencias extra contra minions y torres para asediar una side lane sola"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Arranca el espíritu con E y mantén al objetivo dentro del rango del mayor número posible de Tentáculos. Cada Q y cada W tickan en espíritu y campeón — los fights largos son su zona de victoria."
  weakness: "Sin dash, sin huida fuera de Flash. Tops ranged la pokean fuera del rango de W, y skirmishers con varias dashes baitan los Tentáculos, salen del rango y reentran cuando Conqueror ya cayó."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Conqueror: cada Q, W y slam de Tentáculo apila la keystone, y la win zone de Illaoi son fights de 5+ segundos. Triumph cura en takedowns, Legend: Alacrity da Attack Speed para resets de W, Last Stand premia el HP bajo donde aterriza R."
    secondary_rationale: "Resolve secundaria: Bone Plating corta los primeros 3 golpes de un all-in (en niveles 2-3 Illaoi pierde HP sin poder devolver), Overgrowth escala HP con minions hasta ~3.5% bonus health al minuto 25 — durabilidad para sobrevivir teamfights."
    secondary_alternative: "Si el top es ranged poke duro (Teemo, Quinn, Jayce, Kennen), conserva Conqueror pero swap Resolve a Inspiration con Triple Tonic (pociones extra) y Magical Footwear (Boots gratis al minuto 12) — pierdes prio igualmente, Inspiration recupera oro y HP."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Juggernauts melee de corto alcance sin dash"
      reason: "Todo su perfil de daño está dentro del rango de W. Cuando saltas con W, cada Tentáculo cercano slamma — y no tienen dash para salir antes de que Conqueror llegue al cap y el daño se dispare."
    - examples: ["nasus", "sion"]
      archetype: "Tank scalers con laning débil"
      reason: "Sus primeros 6 niveles son farmeo pasivo. La E los empuja fuera de la wave para chip gratis y los convierte en Vessels: los Tentáculos los cazan hasta la wave y el eco del espíritu duplica cada Q."
    - examples: ["yorick", "volibear"]
      archetype: "Bruisers melee que invocan pets o buffs para luchar"
      reason: "Se committean hacia adelante para usar su kit (los ghouls de Yorick, el AA potenciado de Volibear): una vez committeados están en rango de W y el enjambre de Tentáculos los castiga por quedarse."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Tops ranged que pokean o kitan"
      reason: "Se quedan fuera del rango de W (400 unidades) y te chippan el HP con autos. Cada paso para acercarte les da otro auto gratis — y no tienes dash para cerrar la distancia."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Skirmishers con varias dashes"
      reason: "Entran al rango de Tentáculos, hacen burst y salen con dash antes de que Conqueror llegue al cap. Cuando vuelven sus dashes, tus Tentáculos están en cooldown — eligen el ritmo del trade, no tú."
    - examples: ["jayce", "gnar"]
      archetype: "Form-shifters ranged-melee"
      reason: "Pokean en forma ranged y solo pasan a melee cuando los Tentáculos no están activos. Tú gastas la W intentando engagear y ellos cancelan el trade volviendo a forma ranged."
---

## Resumen

Illaoi es una **juggernaut** (campeona melee lenta e inmóvil que pega muy fuerte y aguanta daño en un fight directo) construida en torno a su pasiva **Prophet of an Elder God**. Aparecen **Tentáculos** en cada muro y terreno impasable cercano — brazos enormes, untargetable, colgando del mapa y golpeando a la orden. Los Tentáculos hacen la mayor parte de su daño; tu trabajo es obligar al enemigo a quedarse dentro del radio el tiempo suficiente para morir. Su kit gira en torno a dos herramientas que dan a los Tentáculos algo a lo que pegar: **W (Harsh Lesson)** es un salto corto que ordena a cada Tentáculo cercano slammar al objetivo, y **E (Test of Spirit)** arranca el espíritu del enemigo para que los Tentáculos lo machaquen (con el daño replicándose en el campeón real).

Su game plan es brutalmente simple. **Acierta E para marcar al objetivo, camina hacia adelante y W al campo de Tentáculos más denso de tu lado del mapa.** Si el enemigo sale del radio, el espíritu muere y se convierte en **Vessel** — un debuff en el que los Tentáculos lo persiguen por la lane. Desde el nivel 6, **R (Leap of Faith)** crea un Tentáculo extra por campeón enemigo impactado y vuelve untargetable a los existentes durante 8 segundos — es la única ventana en la que tiene burst real para borrar un objetivo, así que guarda R para un all-in o un teamfight, nunca para waveclear.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La pasiva de regen HP amortigua el poke enemigo (daño a distancia barato que te chippa el HP sin committearse) hasta que la presión de Tentáculos llega al nivel 3.

**Core items (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primer spike (el momento en que tu fuerza da el mayor salto). La pasiva Spellblade (un auto-attack potenciado gratis cada pocos segundos tras lanzar una habilidad) encaja perfectamente con W: cada auto del salto procca Spellblade. Aporta AD (Attack Damage, la stat detrás del daño físico), HP, ability haste (stat que reduce cooldowns) y Attack Speed — todo lo que el kit necesita.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto contra equipos que pegan sobre todo con auto-attacks. Reduce el daño de autos en trades prolongados (intercambios de daño en lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP más un **escudo lifeline**: cuando tu HP baja del ~30%, salta un escudo automático. Esa ventana es justo cuando tus Tentáculos siguen slammando, así que los segundos extra de supervivencia se convierten en kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el **burst** AD recibido (mucho daño en 1-2 segundos, tipo combo de asesino) en un **bleed** lento (daño repartido en los segundos siguientes en lugar de instantáneo). En los takedowns el bleed restante se limpia — un reset gratis cada vez que R encadena una kill.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) más una pasiva que amplifica curaciones: potencia las curas de Tentáculos de la pasiva, el bleed-clean de Death's Dance y el trade en % HP máx de W. El mayor multiplicador de supervivencia de la build.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el enemy team tiene 2+ amenazas AP o **CC** encadenado (crowd control: stuns, roots, knockbacks — todo lo que te bloquea e impide actuar). La tenacity (stat que acorta la duración del CC sobre ti) es crítica porque no tienes dash para escapar.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contra kiters que se alejan de tu W de 400 unidades (Quinn, Vayne top, Gnar). La activa es una dash corta más un slow AOE — exactamente el segundo gap-closer que el kit no tiene. Sustituye a ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** como primer item, no apiles ambos.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra frontlines con mucho armor (Malphite, Rammus, Shen). Cada Q y proc de W rebaja stacks de armor del objetivo para todo el equipo.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra comps AP-heavy con **burst** (Vladimir, LeBlanc, Veigar). El escudo mágico salta automáticamente al bajar de HP — justo los segundos que necesitas para mantener Tentáculos slammando.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — cuando el equipo va 4v5 y tu trabajo es **splitpushear** (empujar una side lane sola para forzar al rival a responder). Resistencias extra contra minions y torres dejan a Illaoi asediar una side sola.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** son el default. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el enemy team tiene tres o más fuentes de CC o mucho daño mágico.

**Skill order:** Sube al máximo **Q** primero (waveclear, amplifica daño de Tentáculos, cooldown más bajo). Sube **E** segunda (el cooldown baja 4 segundos al rank máx, lo que significa más presión de Vessel por minuto). **W** se sube al final — su daño ya es enorme porque escala con HP máx del objetivo, así que los rangos extra aportan menos. Pon puntos en **R** en niveles 6, 11, 16.

**Runes:** Primaria **Precision** con la keystone (la runa principal del árbol) **Conqueror** — pasiva que acumula AD bonus mientras peleas con campeones, capada tras 5 segundos de combate sostenido. Combina con **Triumph** (curación pequeña y burst de oro al takedown), **Legend: Alacrity** (Attack Speed por takedowns) y **Last Stand** (daño extra bajo el 60% HP). Secundaria **Resolve** con **Bone Plating** (reducción de daño en los próximos 3 golpes tras recibir daño) y **Overgrowth** (HP que escala con muertes de minions cercanos, perfecto para un top que farma 8+ minions por wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clave

- **Sett:** Lane favorable. Su combo Q-W-E es telegrafiado (la wind-up — la animación visible antes del cast — es lo bastante larga para reaccionar). Guarda E para arrancarle el espíritu en el momento en que lanza W — vaciada la barra de escudo no tiene disengage, y el enjambre de Tentáculos le quita un buen pedazo de HP antes de que tenga R.
- **Darius:** Skill matchup (gana el mejor jugador, da igual el pick). Te gana el trade prolongado a 5 stacks si los Tentáculos están abajo — baita su pull de E, luego W de vuelta a un campo de Tentáculos. Nunca tradees en mitad de la lane, solo en tu lado donde tus Tentáculos cubren el muro.
- **Fiora:** Matchup melee duro. Su **W** es un parry (escudo breve que bloquea y contraataca la siguiente habilidad) — si parrea tu E, el espíritu no aparece y pierdes 14 segundos de cooldown. **Baita** el parry con un animation cancel (empieza el cast de E, luego desplázate de lado) antes de committear el cast real.
- **Teemo / Quinn:** Matchup ranged muy duro. Se quedan fuera del rango de W, ciegan tus auto-attacks (los cancelan un rato) y te chippan HP gratis. **Freeze** la wave cerca de tu torre (deja de pushear y mantén la wave en tu lado de la lane) para negar farm (oro y XP de minions) y llama al jungler — Illaoi no gana este 1v1 sola.
- **Camille:** El matchup melee más duro. Su E hookshot la mete y saca del rango de W libremente, y su R te encierra en un 1v1 lejos de tus Tentáculos. Guarda E para el instante después de su dash in: si arrancas el espíritu mientras está committeada, su R no la salva. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** pronto — la mayor parte de su daño es true on-hit (true damage aplicado por cada auto: ignora armor y MR), pero cada punto de armor sigue ayudando contra el resto del kit.

## Power spikes y condiciones de victoria

- **Nivel 3:** Con Q + E + W desbloqueadas, Illaoi tiene su combo de lane completo por primera vez. E para marcar, caminas a tu campo de Tentáculos, W para saltar y ordenar slams. Desde aquí la lane es tuya salvo que el enemigo sea ranged.
- **Nivel 6:** Primera **R** desbloqueada. Aunque solo tengas un Tentáculo en el muro, R hace aparecer otro y los vuelve **untargetable** (ningún enemigo puede atacarlos) durante 8 segundos. Un 1v1 con R disponible es una kill contra cualquier bruiser no móvil.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completada (~ minuto 13-15):** Daño y **stickiness** (capacidad de quedarte pegado a un objetivo que intenta huir) dan el mayor salto. Fuerza 1v1 en side lane y busca **roamear** (dejar tu lane para ayudar mid o bot) por picks (kills aisladas sobre enemigos fuera de posición).
- **Dos items + R disponible (~ minuto 18-22):** Pico de teamfight. Atraviesa la frontline (los tanks/bruisers de tu equipo en primera línea), R sobre 3+ enemigos para crear 3+ Tentáculos al instante y deja que el enjambre destroce la backline (los carries squishy — campeones con poca defensa y mucho daño que se quedan detrás de los tanks) mientras Conqueror llega a su cap en los primeros 5 segundos.

## Errores comunes

- **Pelear en mitad de la lane.** Los Tentáculos solo aparecen en muros y terreno impasable. Si W sobre un objetivo en medio del río o en lane abierta, ningún Tentáculo slamma y la W es solo un salto de 400 unidades sin extra. Elige siempre el fight cerca de un muro — el bush de tu lado, el tri-bush, la entrada de tu jungla.
- **Tirar E sobre una línea de minions a HP bajo.** E es tu habilidad más importante y tiene 12-16 segundos de cooldown. Si la lanzas y el skillshot pega un minion o falla al campeón, te quedas sin setup 14 segundos — y el enemigo lo sabe. Espera línea de visión limpia sobre el campeón antes de pulsar E.
- **Pulsar R para waveclear.** R hace daño AOE, pero su valor real son los 8 segundos de Tentáculos untargetable más el Tentáculo bonus por campeón impactado. Usarla en una wave gasta un cooldown de 70-120 segundos y te deja con cero teamfight tools cuando aparece el jungler enemigo.
- **Caminar a un fight sin mirar las posiciones de los Tentáculos.** Si los Tentáculos cercanos están a punto de expirar (el brillo naranja se apaga justo antes), espera 4 segundos al spawn nuevo antes de committear W. Una Harsh Lesson sin Tentáculos que slammen es un salto desperdiciado.
- **Apilar puro item de tank.** Illaoi escala con **AD** (Attack Damage, la stat detrás del daño físico) — cada slam de Tentáculo es un porcentaje de su AD. Ir Sunfire + Warmog's mata tu daño; dejas de matar squishies y te conviertes en un minion lento. Mantente en el core AD-bruiser.

## Consejo avanzado

Practica el **E animation cancel**. Test of Spirit tiene una animación de cast larga (~0.5s) durante la cual Illaoi queda bloqueada — tiempo suficiente para que cualquier enemigo atento esquive el skillshot lineal. La solución es empezar el cast, caminar 1-2 pasos hacia adelante para baitar el dodge en una dirección, y castear en la dirección *opuesta* en el último frame. El mismo truco funciona al revés: pasa el cursor sobre el enemigo, finge el cast y recasta sobre la trayectoria de dodge predicha del espíritu. En partida real el uso más impactante es el all-in de nivel 3: E-fake, W al espíritu cuando empieza a esquivar, luego E real sobre su dash reactivo. Practícalo en practice tool contra un target dummy hasta que el ritmo sea automático.
