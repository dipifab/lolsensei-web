---
title: "Dr. Mundo Top Build & Guía — Patch 16.9"
slug: "dr-mundo-top"
language: "es"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Guía Dr. Mundo top para League of Legends Patch 16.9: build juggernaut HP-stacking con Heartsteel, supervivencia en línea, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "El primer hard CC (un stun, root o knockup que te inmoviliza) le cuesta solo HP a Mundo y suelta una ampolla; recógela para curarte y resetear el pasivo. Además da regen de HP enorme."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot lineal de largo alcance: daño mágico en porcentaje de HP actuales del objetivo más slow. Cuesta HP, no maná — tu barra de recursos es tu vida. Herramienta principal de poke y waveclear."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Canalización sobre sí mismo que tickea daño mágico a enemigos cercanos y almacena parte del daño que recibes. Recast (o fin del canal) suelta una ráfaga: si toca a un campeón, te curas un porcentaje del daño guardado."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Pasiva: AD bonus que escala con HP máximos. Activo: golpe melee con la bolsa que hace daño extra según tu HP perdido. Si mata, lanza el cuerpo y daña a los enemigos en su trayectoria."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: cura instantánea de un porcentaje del HP perdido, luego bonus Move Speed y regen de HP brutal durante la duración. Pulsa antes de los fights y antes de morir, no después."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Plated Steelcaps contra 3+ fuentes de CC o 2+ amenazas AP; tenacity reduce duración de stuns"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries auto-attack (Vayne, Tryndamere, Master Yi); refleja daño y aplica Grievous Wounds (corta el healing a la mitad)"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra comps con poke AP pesado y 2+ mages ranged (Brand + Karthus, Ziggs + Xerath); MR + Move Speed contra magic damage"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra AP wave-clearers agrupados (Karthus, Brand, Anivia); el aura de magic burn castiga a quien pelea cerca"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contra burst AP single-target (Syndra, Veigar, LeBlanc); el spellshield bloquea el opener de la combo"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Sobrevive en línea con poke de Q y sustain de W, llega a Heartsteel y Warmog's, y luego camina hacia la back line enemiga a HP regen máximo y niégate a morir lo suficiente para que tu equipo limpie."
  weakness: "Sin hard CC ni dash. Los tops ranged kitean la Q desde fuera de 975 de rango; los items de healing-cut le cortan el heal de W y la regen de R, dejando al tank caminando como un minion lento."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve: Grasp da HP gratis cada 4s en lane combat y escala con la pila de HP de Mundo. Bone Plating come el burst de bruisers, Conditioning añade Armor y MR tras el minuto 12, Overgrowth convierte minions en HP permanente."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak da un burst de Move Speed tras Flash o Ghost (tus Summoners de engage), y Gathering Storm añade Adaptive cada 10 minutos — exactamente el scaling tardío que la win condition de Mundo necesita."
    secondary_alternative: "Contra lane bullies early (Darius, Riven), cambia Sorcery por Inspiration con Biscuit Delivery (Health Potions gratis cada 2 min pre-12) y Cosmic Insight (cooldowns de Summoners reducidos), perdiendo scaling por supervivencia."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Bruisers melee sin poke ranged"
      reason: "La Q de Mundo es un slow de 975 de rango que cuesta HP y no maná, así que les chippea cada wave desde fuera de su rango de auto-attack. Tienen que caminar hasta él para hacer daño, y la aura W más el healing de Spirit Visage ganan cada trade extendido."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Asesinos con una sola burst window"
      reason: "Su perfil de daño entero es una combo. El pasivo de Mundo come su primer hard CC, la R cura un porcentaje del HP perdido al instante, y la W reembolsa parte del daño recibido durante el burst — gastan cooldowns y Mundo se va casi full HP."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Melees auto-attack que necesitan stickear"
      reason: "El slow de Q más Plated Steelcaps mutila su attack uptime. La R de Tryndamere lo cura una rotación, pero un Mundo con R y Thornmail aguanta la ventana de inmunidad y le mete chunk con el daño reflejado."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Tops ranged con percent-HP o blind"
      reason: "La W de Vayne (true damage en cada tercer auto, ignora todas las defensivas) y la Q de Teemo (un blind que cancela sus auto-attacks) saltan la pila de HP entera. Quinn con su rango más el blind pasivo mantiene a Mundo siempre fuera del rango de Q."
    - examples: ["fiora"]
      archetype: "Duelistas con true damage"
      reason: "Los Vitals de Fiora hacen true damage (daño que ignora armor y magic resist — no hay defensiva que lo reduzca). Stackear HP no sirve contra true damage; ella lo destroza en un solo duelo incluso a full build."
    - examples: ["trundle"]
      archetype: "Anti-tanks que roban stats"
      reason: "La R de Trundle roba Armor, MR y Move Speed de Mundo durante 8 segundos. El true damage del pasivo de E (basado en bonus AD por HP) se apaga y su única escape (el speed boost de R) también queda robada. Todo el perfil tank se anula."
---

## Resumen

Dr. Mundo es un **juggernaut tank** (un campeón melee lento, inmóvil, que pega fuerte una vez tiene unos pocos items y arrastra HP y regen gigantescos). Su identidad gira sobre tres cosas: stackear HP con **Heartsteel** (cada campeón al que tocas con auto-attack acumula HP permanente en el item), regen de HP de la **R** más el healing-amp de Spirit Visage, y pulsar **Q** cada cooldown para chippear al enemigo desde 975 de rango. El **pasivo** es la mecánica más importante: el primer hard CC (un stun, root o knockup que te inmoviliza) que el enemigo te aplica se reduce — cuesta HP en lugar de inmovilizarte y sueltas una ampolla que puedes recoger para curarte. Significa que un Sett o un Malphite tienen exactamente una oportunidad de fijarte, y después caminas a través de su equipo durante los siguientes 8-10 segundos.

El game plan es "no morir, jamás." En línea, **freezea la wave** (déjala parada justo fuera de tu torre para que el laner enemigo tenga que caminar lejos de la suya para last-hittear) y farmea con Q a rango máximo. Desde el minuto 14, **Heartsteel** más **Warmog's Armor** cruzan el umbral en el que tienes tanto HP y regen que el equipo enemigo necesita items de healing-cut hasta para hacerte daño. A partir de ahí, cada fight empieza contigo caminando lentamente, comiendo el primer stun, pulsando R y plantándote en la back line (los carries squishy que hacen daño desde detrás de los tanks de su equipo) hasta que el carry muera. Eso es "absorber engage": cuando el enemigo committea iniciando con un stun o un dash, tu trabajo es ser el que recibe el stun.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La regen de HP del pasivo de Doran's Shield amortigua el poke enemigo (daño ranged barato que chippea HP sin committear a un fight) y es la elección correcta en casi cualquier matchup de Mundo, melees incluidos — tu game plan es "mantente vivo, farmea, escala," no "gana el nivel 1."

**Core items (en orden):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — tu item identitario. Cada auto-attack a un campeón carga Heartsteel; al proc haces daño bonus enorme y el item gana HP permanente acumulable. No hay tope al stack de HP, por eso un Mundo top one-shotea squishies en el minuto 35 con una sola E. Cómpralo cada partida, primer item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto cuando la fuente principal de daño enemigo son auto-attacks. Reducen ese daño durante fights extendidos.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — desbloquea el pasivo "out-of-combat heal a full en 4 segundos" una vez cruzas el umbral de HP (alrededor de 3000 HP bonus, que Heartsteel + componentes de Warmog's alcanzan juntos). Es el breakpoint donde las skirmishes en side lane (peleas pequeñas entre 1-3 jugadores) se curan completamente entre wave y wave.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist más un pasivo de healing-amp que potencia el burst-heal de **W**, la regen de **R**, los heals aliados de soportes como Soraka o Yuumi y los ticks de Doran's Shield. Cómpralo cuarto contra cualquier equipo con al menos una amenaza AP.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — tu primer auto-attack contra cualquier campeón en un fight critea y te cura un trozo de HP. Encaja perfecto con la ventana lifeline que crea tu pasivo y te da un pequeño spike de burst para amenazar kills, no solo supervivencia.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo enemigo tiene 3+ fuentes de CC o 2+ campeones AP. La tenacity (estadística que reduce la duración de stuns y slows sobre ti) es la única defensa que importa una vez que el primer CC del pasivo ha sido consumido.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries auto-attack (Vayne, Tryndamere, Master Yi). Refleja daño y aplica **Grievous Wounds** (un debuff que corta el healing del objetivo a la mitad) on hit, la única forma de evitar que un Tryndamere o una Vayne fed se curen lo que reciben de tu aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra comps de poke AP pesado (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Apila magic resist según recibes magic damage y da Move Speed, las dos cosas que Mundo quiere.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra AP wave-clearers agrupados (Karthus, Brand, Anivia). El aura de magic burn tickea daño a cualquiera que pelee cerca y da MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contra burst AP single-target (Syndra, Veigar, LeBlanc). El spellshield (barrera de un solo uso que bloquea la siguiente habilidad dirigida a ti) anula el opener de su combo y se resetea unos segundos fuera de combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** es el default. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra cadenas de CC pesadas o composiciones AP-heavy.

**Skill order:** Maxea **Q** primero (rango, slow, daño percent-current-HP escalan por rank — es tu única herramienta ranged). Maxea **E** segundo (el activo missing-HP escala fuerte con bonus AD, y los stacks de Heartsteel lo alimentan). Maxea **W** último; un punto temprano basta para el heal-on-recast y el aura de daño. Sube **R** en niveles 6, 11 y 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying** — cada 4 segundos en lane combat, tu siguiente auto-attack a un campeón hace daño mágico bonus, te cura y te da HP permanente. Combínala con **Bone Plating** (reducción de daño en los siguientes 3 hits tras recibir daño), **Conditioning** (Armor y MR extra tras el minuto 12) y **Overgrowth** (HP escalando con la muerte de minions cercanos — perfecto para un farmer de línea). Secondary **Sorcery** con **Nimbus Cloak** (burst de Move Speed tras usar Flash o Ghost, ambos Summoners habituales en Mundo) y **Gathering Storm** (Adaptive escalando cada 10 minutos). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling** — HP extra por todas partes, porque toda defensiva en Mundo se traduce en más HP efectivo sobre el mismo stack de Heartsteel.

## Matchups clave

- **Darius:** Matchup early difícil. Su sangrado Hemorrhage (un stack damage-over-time que crece cuantas más veces te golpea) tickea a través de tu HP regen y su pull cancela el wind-up de tu Q. **Freezea la wave** cerca de tu torre, coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** y acepta perder CS — una vez que tienes ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** más componentes de Warmog's, le out-scaleas cada minuto pasado el 14.
- **Sett:** Matchup favorable. Guarda el **pasivo** para su W (el tercer auto-attack stunea) — te lo comes por HP y te alejas. Tradea con Q a 975 de rango; no tiene respuesta al poke a larga distancia y su self-heal no aguanta el chip de tu Q.
- **Vayne / Teemo:** La línea más dura posible. Se quedan fuera del rango de Q y usan **true damage** (daño que ignora tanto armor como magic resist — no hay defensiva que lo reduzca) o un blind que cancela tus auto-attacks. Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freezea bajo torre, y llama a tu jungla en cuanto se overextiendan (pushen pasado el river sin vision). Compra ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush en lugar de Spirit Visage si Vayne snowballea.
- **Fiora:** El matchup melee más duro. Su **W** es un parry (un escudo breve que bloquea y contraataca la siguiente habilidad — báitealo con un auto-attack antes de committear Q o E). Sus Vitals hacen true damage, así que stackear HP no sirve de nada. Rushea ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** más componentes de ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** y juega para los ganks del jungla.
- **Mordekaiser:** Skill matchup. Su R te aísla en un realm 1v1 durante 7 segundos sin escape. Si te ulta antes de que tu pasivo se haya activado, estás stuck y mueres. Si tienes **R** lista y pasivo arriba, sobrevives — la ventana del realm de 7s coincide más o menos con la duración de una R. Guarda **Flash** para reposicionarte fuera de su Q grab durante el realm.

## Power spikes y condiciones de victoria

- **Nivel 6:** Primer **Maximum Dosage**. Incluso a nivel 6 sin items, el heal instantáneo de R más el Move Speed convierten un trade perdido en supervivencia o kill. Busca un **all-in** (commit total a la kill, sin retirada) en el momento en que tu jungla aparezca por top side y el laner enemigo esté por debajo del 60% HP.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel completado (~ minuto 13-15):** El primer spike real. Cada proc exitoso a un campeón en línea te da HP permanente que no se pierde, ni siquiera al morir. Pushea la wave en cuanto Heartsteel esté online y tradea autos a través de los minions enemigos para acumular stacks.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + stacks de Heartsteel (~ minuto 18-22):** El breakpoint donde Mundo se vuelve unkillable en side lane. La regen out-of-combat se activa al nuevo umbral de HP; puedes tomar un fight al 50% HP, caminar hasta la siguiente wave y llegar a full HP.
- **3-item spike con ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ minuto 24-28):** Pico de teamfight. El healing-amp potencia cada tick de regen — la R pasa de "decente" a "no logro bajarle de la mitad de HP." Fuerza cada Drake y Baron aquí; el equipo necesita que entres primero a absorber el engage.

## Errores comunes

- **Pulsar R después de recibir daño.** El heal instantáneo de R es un porcentaje del HP *perdido*, pero la regen-over-time se desperdicia si la activas al 90% HP. Usa R **antes** de committear a un fight, no después — quieres entrar al fight con la regen ya tickeando, así la ventana de burst está bufferada, no parcheada después.
- **Q-ear con full HP a un enemigo sano.** La Q cuesta HP y hace daño percent-current-HP. Tirársela a un enemigo al 100% HP cuando tú estás al 100% HP solo cambia tu HP por un chip pequeño — pierdes el trade. Usa Q después de que un melee enemigo haya bajado HP por aggro de minions o tras un CC aliado que abra el all-in.
- **Recoger la ampolla del pasivo demasiado tarde.** La ampolla química (el frasco verde que cae al proquear el pasivo) está unos segundos en el suelo antes de desaparecer. Si la dejas expirar, has desperdiciado el pasivo entero — sin heal ni reembolso de cooldown. Camina sobre ella en el segundo en que cae, incluso a media pelea.
- **Buildear full tank sin Spirit Visage.** Cada defensiva de Mundo se compone con healing-amp. Sin Spirit Visage, R cura menos, W cura menos, los heals de una Soraka aliada curan menos. Un Mundo full-tank sin healing-amp es un minion que camina lento; con Spirit Visage, los mismos items estiran su HP efectivo mucho más.
- **Quedarse con la W toggleada fuera de combat.** **Heart Zapper** drena HP cada segundo mientras canalizas. Si la activas para el clear y se te olvida, llegas al fight ya al 70% HP. Recastea antes de que el canal acabe, siempre.

## Consejo avanzado

Practica el **passive bait** en skirmishes de side lane (peleas 1v1 en top o bot mientras el resto del mapa lucha en otro sitio). Cuando el diver enemigo tiene solo una habilidad de hard CC disponible — pongamos la W stun de Sett o el stun de Renekton — camina hacia su línea visiblemente bajo de HP. Quema su CC para committear, tu pasivo se lo come gratis, y tú le sueltas R-Q-E-AA bajo tus propios minions mientras él no tiene nada. El truco está en *visiblemente* bajo HP: ponte al descubierto al 35-40%, recibe un par de autos para confirmar que el enemigo está committeando, y entonces ve al trade. Un Mundo con pasivo y R off cooldown y 50%+ HP detrás de líneas enemigas es una de las amenazas 1v1 más fuertes del juego; el bait es lo que crea el escenario.
