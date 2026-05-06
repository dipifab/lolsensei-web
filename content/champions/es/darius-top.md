---
title: "Darius Top Build & Guía — Patch 16.9"
slug: "darius-top"
language: "es"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Darius top para League of Legends Patch 16.9: build de juggernaut, presión de stacks de Hemorrhage, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Auto-attacks y habilidades dañinas aplican un stack de sangrado al objetivo. Con 5 stacks Darius se enfurece, gana mucho AD bonus durante unos segundos y el bleed tickea por daño enorme."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Hachazo cargado en anillo amplio. Golpear con la hoja exterior hace daño completo, aplica un stack de bleed y cura a Darius. El mango interior hace medio daño y no aplica stack."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Próxima auto-attack potenciada: daño bonus y slow pesado. Resetea el timer del auto: encájala entre dos autos normales para maximizar el daño por segundo."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Pasiva: penetración de armor plana. Activa: hook de hacha a corto rango que tira y ralentiza enemigos en cono. Es el único gap-closer del kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Salta a un campeón e inflige true damage que escala con los stacks de bleed que ya tenga. Si mata, el cooldown se resetea y puedes relanzarla sobre otro objetivo."
      dd_spell_id: "DariusExecute"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Plated Steelcaps contra mucho daño mágico o cadenas de CC (Lissandra, Malphite ult, pull de Sett)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra frontlines con armor stackeada (Malphite, Rammus, Shen) — cada Q reduce armor para todo el equipo"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra equipos AP fuertes cuando necesitas MR y healing-amp sobre Death's Dance y R lifesteal"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contra equipos con armor y tenacity (Rammus, Tahm Kench, Malphite) — armor pen más slow al impactar"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "cuando necesitas Move Speed extra para alcanzar kiters (Quinn, Vayne top, Gnar) y entrar en rango de R"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stackea Hemorrhage a 5, aprovecha el enrage para el AD bonus y cierra con R por true damage. Convierte kills tempranas en un timing de Stridebreaker que snowballea 1v1 en side lane y dives bot."
  weakness: "Sin mobility salvo el pull corto de E y el salto one-shot de R. Kiters a larga distancia, top ranged y campeones que mantienen distancia (Quinn, Vayne, Teemo, Gnar) lo dejan sin stacks ni trades."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
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
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Bruisers melee de corto rango sin disengage fuerte"
      reason: "Darius gana los trades prolongados porque cada auto y Q aplica un stack de bleed: cuando el rival quiere disengage, la ventana de enrage a 5 stacks ya inclinó el intercambio a su favor."
    - examples: ["nasus", "kayle"]
      archetype: "Melees de scaling tardío con lane temprana débil"
      reason: "Sus primeros 6 niveles son pasivos — Darius puede E + W para sacarlos de la wave repetidamente, matándolos antes de que lleguen a los items que los hacen peligrosos."
    - examples: ["yasuo", "yone"]
      archetype: "Carries melee que pelean dentro del rango de Q"
      reason: "Tienen que entrar al rango de Q para hacer daño. Wind Wall bloquea proyectiles pero no el golpe melee, así que una Q en el borde aplica el stack y arranca el snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Tops ranged o que kitean"
      reason: "Se quedan fuera del rango de E y le rosen el HP gratis. Sin gap-closer más allá de E (hook corto) o R (salto one-shot), no logra stackear y pierde la prio de lane."
    - examples: ["fiora", "camille"]
      archetype: "Duelistas con true damage, parry o escudo"
      reason: "La W de Fiora hace parry al knock-up del kit y sus Vitals (marcas que ella autoatacca con true damage — daño que ignora armor y MR) saltan la build HP; la R de Camille aísla a Darius del equipo y lo supera en peleas largas."
    - examples: ["gnar", "kennen"]
      archetype: "Tops ranged con CC integrado"
      reason: "Pokean desde fuera del rango de Q y tienen stuns ranged: el throw de Gnar en mega, la W de Kennen. Mantienen a Darius sangrando HP sin entrar nunca en su ventana de trade."
---

## Resumen

Darius es un **juggernaut** (campeón melee lento e inmóvil que pega muy fuerte y tanquea daño en peleas directas) construido alrededor de stackear su pasiva **Hemorrhage** sobre un objetivo. Cada auto-attack y cada Q que conecta con la **hoja exterior** aplica un stack de bleed. A los **5 stacks** se enfurece unos segundos y gana AD bonus masivo — esa es la ventana donde mata o revienta al rival. Su kit le da exactamente un gap-closer corto (**E**, hook de 535 unidades) y un salto de cooldown largo (**R**, ejecución a true damage que se resetea con cada kill). Fuera de esos dos botones camina a Move Speed base y muere contra cualquiera que sepa mantener distancia.

El game plan es simple: **quedarte pegado al objetivo hasta que muera**. En lane, conecta la Q con la **hoja exterior** (no con el mango interior — el mango hace medio daño y cero stack), para chippear HP y curarte; arma el all-in con la **E** (pull, knock-up, slow) cuando el enemigo ya tenga 2-3 stacks, y detona con **W** + cadenas de auto-attack. De mid-game en adelante, la **R** es un botón de kill: incluso a 0 stacks pega mucho **true damage** (daño que ignora tanto armor como MR — no hay stat defensiva que lo reduzca), y el cooldown se resetea con cada kill, así que un teamfight limpio puede encadenar 2 o 3 R seguidas. Es uno de los **bruisers** (luchadores melee que mezclan daño y supervivencia) más fuertes en cuanto sale Stridebreaker.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La pasiva de regen HP amortigua el poke (daño a distancia y bajo coste que rosen tu HP sin comprometerse a un fight) hasta el power spike de nivel 2. Coge ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** solo contra una lane melee donde estés seguro de querer all-in nivel 1-2 (ej. mirror Darius).

**Core items (en orden):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primer spike (el momento donde tu daño y tu **stickiness** — la capacidad de quedarte pegado a un objetivo que intenta huir — más saltan). La activa es un dash corto que ralentiza todo en cono — exactamente el segundo gap-closer (herramienta para cerrar distancia rápido) que le falta a Darius. AD, HP y ability haste (stat que reduce los cooldowns) encajan con lo que el kit pide.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto cuando el rival hace daño sobre todo con auto-attacks. Reducen ese daño en trades prolongados (intercambios repetidos en lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP más un **escudo lifeline**: cuando el HP baja del ~30%, salta un escudo automático. Esa ventana es justo cuando necesitas tiempo extra para landar la R con reset.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el **burst** AD (daño alto en 1-2 segundos, tipo combo de asesino) en un sangrado lento (daño repartido en los siguientes segundos en vez de todo de golpe). Al matar, el bleed restante se limpia — synergy perfecta con los reset chain de R.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primer o cuarto item alternativo según el inicio: la primera auto-attack a un campeón en pelea critea y cura. Combinado con el reset de auto de W, ese crit llega casi a demanda.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo rival tiene mucho daño mágico o cadenas de **CC** (crowd control: stuns, roots, knockbacks — todo lo que te bloquea para que no puedas actuar). La tenacity (stat que reduce la duración del CC sobre ti) es crítica contra equipos que pueden mantenerte lejos del carry.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra frontlines con armor stackeada (Malphite, Rammus, Shen). Cada Q reduce stacks de armor del objetivo para todo el equipo.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra **AP** (Ability Power, la stat detrás del daño mágico) pesado. Da MR (Magic Resistance) más una pasiva de healing-amp que potencia la cura de Q, la limpieza de bleed de Death's Dance y los efectos lifesteal de R.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contra escuadrones tank con armor y tenacity. Penetración de armor más una proc (pasiva que se activa automática a cada hit) de slow en cada habilidad dañina — Q, W y R incluidas.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — cuando necesitas la pasiva de Move Speed apilada para perseguir kiters (Quinn, Vayne top, Gnar) y entrar en rango R antes de que se reposicionen.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** son lo estándar. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el equipo rival tenga tres o más fuentes de CC o de daño mágico pesado.

**Skill order:** Maxea **Q** primero (waveclear, healing, fuente principal de daño). Maxea **W** segundo (la duración del slow escala por rank, el auto-reset es tu sticky-tool). Pon puntos en **E** a niveles 1 y 2 por la pasiva de armor pen pero sigue maxeando W; **E** se maxea de último porque el scaling de la activa es bajo. Coge **R** a niveles 6, 11, 16.

**Runes:** Árbol primario **Precision** con la keystone (la runa principal del árbol) **Conqueror** — pasiva que ramp-uppea AD bonus mientras sigues peleando contra campeones, capped tras 5 segundos de combate sostenido. Combina con **Triumph** (cura pequeña y burst de oro al takedown), **Legend: Bloodline** (life-steal que stackea en takedowns) y **Last Stand** (más daño bajo el 60% HP). Árbol secundario **Resolve** con **Bone Plating** (reducción de daño en los próximos 3 hits tras recibir daño) más **Overgrowth** (HP scaling con muertes de minions cercanos, perfecto para un top que farmea 8+ minions por wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clave

- **Garen:** Skill matchup (gana el que juega mejor, sin importar el pick). Su **W** (escudo de damage reduction de 4 segundos) anula un stack de bleed, pero el silencio de su Q se esquiva caminando de lado. Pega la Q en el borde cuando su W esté en cooldown; bajo R, lo superas en el trade si tienes al menos un item de ventaja.
- **Sett:** Lane favorable. Su combo Q-W está telegrafiada (el wind-up es lo bastante visible para reaccionar). Pulléalo con E después de que comprometa la W, luego stackea bleed antes de que pueda hacer disengage con un recast. No tradees si tiene Grit (su barra escudo) llena.
- **Fiora:** El matchup melee más duro. Su **W** es un parry (escudo breve que bloquea y contraataca la siguiente habilidad) — baitéalo con una Q antes de comprometer la E. Sus Vitals hacen true damage, así que Death's Dance es obligatorio; rushea ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** solo si saca kills tempranas.
- **Quinn / Teemo:** Matchup ranged muy duro. Te ciegan (cancelan tus auto-attacks por un tiempo corto) o te kitean fuera de rango. **Freezea** la wave cerca de tu tower (deja de pushear y mantén la wave en tu lado de la lane) para negarles el farm (oro y XP de los minions), y llama al jungler — Darius no gana este 1v1 sin ayuda.
- **Mordekaiser:** Matchup parejo decidido por el timing de R. Su R te aísla en un realm 1v1; lo superas a 5 stacks si guardas la E para pullarlo después de que use su propia E para rootearte. Compra ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** temprano si su R te está matando.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + E desbloqueadas, Darius tiene una ventana real de all-in (ventana donde puedes comprometerte totalmente a la kill, sin fallback). Pull con E, Q en el borde para daño y cura, dos auto-attacks, y el rival ya está a 3 stacks de bleed antes de poder responder.
- **Nivel 6:** Se desbloquea la primera **R**. Incluso con 3 stacks ya en el rival, R hace suficiente true damage para matar desde ~40% HP. Busca un all-in de nivel 6 en cuanto tu jungler aparezca en top side.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completo (~ minuto 11-13):** El dash + slow de la activa le da a Darius el segundo gap-closer que le falta. Fuerza 1v1 en side lane y romea (deja tu lane para ayudar mid o bot) para hacer picks (kills aisladas en rivales fuera de posición).
- **Dos items + R online (~ minuto 18-22):** Pico de teamfight. Camina hacia la back line (los carries squishies que se quedan detrás de sus tanks durante un fight), R al objetivo de menor HP, recast al siguiente squishy. Dos resets de R pueden cerrar un teamfight por sí solos.

## Errores comunes

- **Pegar la Q con el mango interior.** El mango hace medio daño y aplica **cero stack de bleed**. Da un paso atrás justo antes de que termine la animación para que la **hoja exterior** cliquee al objetivo — es el único hit de Q que importa.
- **Usar la E como herramienta de movimiento.** La E es tu único gap-closer fiable; si la quemas para cruzar la wave más rápido, no tienes nada para abrir el engage durante los próximos 16-26 segundos. Resérvala para iniciar el all-in.
- **Pulsar R demasiado pronto.** R hace true damage escalado por stack de bleed. A 0 stacks el daño es mediocre; a 5 stacks es zona de one-shot. Construye al menos 3 stacks con autos y Q antes de pulsar R, salvo cuando es finisher en un rival moribundo.
- **Perseguir kiters más allá de la torre T2.** Darius no tiene escape. Sin R o E listas, cada paso pasada la torre es un gank gratis para el jungler rival — y su Move Speed base baja significa que no puede hacer disengage limpio.
- **Stackear items puro tank.** Darius escala con **AD**, no solo con HP. Buildear Sunfire + Warmog's mata tu daño; dejas de one-shotear squishies y te conviertes en un minion lento andante. Mantén el core AD-bruiser.

## Consejo avanzado

Practica el **W animation cancel**: Crippling Strike resetea el timer del auto-attack, así que puedes lanzar un auto, presionar W inmediatamente y disparar la auto-W potenciada justo después — dos hits a daño completo en el tiempo de uno. El mismo truco funciona al revés: castea W *durante* un wind-up de Q en curso y la auto potenciada aterriza el momento en que Q resuelve. En partida real, el uso de máximo impacto es dentro de la ventana de enrage a 5 stacks: AA → W → AA → Q-borde encadena cuatro hits que aplican bleed en menos de 2 segundos, suficiente para matar a casi cualquier squishy desde 70% HP. Pruébalo en custom game contra un target dummy hasta que el ritmo salga automático.
