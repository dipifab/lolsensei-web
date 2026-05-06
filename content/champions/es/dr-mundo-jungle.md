---
title: "Dr. Mundo Jungle Build & Guía — Patch 16.9"
slug: "dr-mundo-jungle"
language: "es"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía de Dr. Mundo jungla para LoL Patch 16.9: ruta con pet Mosstomper, build tank apilando HP, timings de gank, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "El primer hard CC (un stun, root o knockup que te inmoviliza) golpea a Mundo a coste de HP y deja caer un frasco; recógelo para curarte y resetear el pasivo. También da regeneración enorme."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot lineal a larga distancia que hace daño mágico en porcentaje de los HP actuales del objetivo y lo ralentiza. Cuesta HP, no maná: tu barra de recursos es tu vida. Tool principal de gank pre-6 desde 975 de rango."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel sobre sí mismo que tickea daño mágico a los enemigos cercanos y guarda parte del daño que recibes. Reactívalo para una ráfaga: si toca a un campeón, te cura un % del daño guardado. Activo en camps para sustain de clear."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Pasivo: AD bonus que escala con HP máximos. Activo: golpe melee con daño extra basado en tus HP perdidos. Si mata, lanza el cuerpo dañando a enemigos en la trayectoria. Tu spike single-target en ganks."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: heal instantáneo de un % de los HP perdidos, luego bonus Move Speed y regen enorme durante la duración. Púlsala antes de un gank, antes de un fight, antes de morir, nunca después."
      dd_spell_id: "DrMundoR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Plated Steelcaps contra 3+ fuentes de CC o 2+ amenazas AP; la tenacity te salva tras gastar el primer CC del pasivo"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5° o 6° item en partidas largas (~minuto 30+); el pasivo de regen permite curar a full entre camps sin volver a base"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries auto-attack (Vayne bot, Tryndamere top, Master Yi jungle); refleja daño y aplica Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra comps AP pesadas con 2+ mages ranged (Karthus + Brand, Lillia + Lux); MR + Move Speed contra magic damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contra burst AP single-target (Syndra mid, Veigar, LeBlanc); el spellshield (barrera de un uso) anula el opener de combo"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full clear hasta nivel 4, gank al 6 cuando se desbloquea R, traduce cada Drake fight desde el minuto 14 en ventaja de regen. Al min 25 con Heartsteel + Warmog's, caminas a la backline y rehúsas morir."
  weakness: "Clear lento pre-3, invades débiles, kiteado por comps ranged sin forma de pegarse. Los items healing-cut (que cortan heals a la mitad) destruyen su kit; contra true damage (Fiora, Vayne fed) el muro de HP se derrite."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
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
    primary_rationale: "Resolve primaria: Grasp da HP gratis cada 4s en combate de campeones (un gank de 5s acumula 2-3 procs). Font of Life marca targets con tu Q para que tu laner herede heal, Conditioning escala Armor/MR tras minuto 12, Overgrowth convierte camps en HP permanentes."
    secondary_rationale: "Sorcery secundaria: Nimbus Cloak da burst de Move Speed tras usar Flash o Ghost (tus Summoners de gap-close), y Gathering Storm añade Adaptive cada 10 minutos — la win condition de Mundo es el late game, estas runas encajan."
    secondary_alternative: "Contra junglers de skirmish early (Lee Sin, Elise, Xin Zhao), cambia Sorcery por Inspiration con Magical Footwear (botas mejoradas gratis al minuto 10-12) y Cosmic Insight (cooldowns reducidos en Summoners), sacrificando scaling por tempo de invade."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Junglers assassin de burst"
      reason: "Su perfil de daño es una sola combo sobre un squishy. El pasivo de Mundo come el CC opener, R le cura un % de los HP perdidos y W refunda parte del burst. Queman cooldowns y Mundo se va casi a full marcando a su carry para el follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "Junglers AP de poke y kite sin hard engage"
      reason: "Force of Nature + Spirit Visage apilan Magic Resist que crece mientras pokean. El Move Speed de R y el slow porcentual de Q acaban cerrando el gap, y un solo E colapsa sus HP porque no compraron items defensivos."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Carries melee auto-attack en los que confía el equipo enemigo"
      reason: "El slow de Q + Plated Steelcaps les paraliza el attack uptime. La R de Tryndamere compra una rotación, pero un Mundo con Thornmail + R sobrevive a la ventana de inmortalidad y le chunkea con el daño reflejado."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "Skirmishers a true damage"
      reason: "Los Vital de Fiora, la W de Vayne y la R late de Kayle hacen true damage (daño que ignora armor y magic resist — no hay stat defensivo que lo reduzca). Apilar HP no sirve contra true damage; toda la build colapsa."
    - examples: ["trundle", "olaf"]
      archetype: "Junglers anti-tank"
      reason: "La R de Trundle roba Armor, MR y Move Speed durante 8 segundos; la E de Olaf aplica Grievous Wounds y su ulti lo hace CC-immune, así que el pasivo no procea. Ambos están diseñados para neutralizar stats tank."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Comps de poke sostenido a larga distancia"
      reason: "Se quedan más allá del rango 975 de Q y rascan los HP de Mundo cada wave. Mundo no tiene dash y solo un burst de Move Speed en R; entra al daño solo para amenazar engage y pierde 30% HP por rotación sin cerrar nunca."
---

## Resumen

Dr. Mundo jungla es el tank jungler más simple del juego: clear de camps, llegar al nivel 6, caminar a una lane y rehusar morir hagas lo que hagas el rival. Su kit tiene un solo trabajo — absorber engage (el momento en que un enemigo se compromete a iniciar fight, normalmente con hard CC o dash) — y lo hace con tres mecánicas. **Goes Where He Pleases (pasivo)** absorbe el primer hard CC (un stun, root o knockup que te inmoviliza) a coste de HP, soltando un frasco que puedes recoger para curarte. **Heart Zapper (W)** guarda daño recibido durante un fight y lo refunda parcialmente como heal al reactivar. **Maximum Dosage (R)** cura instantáneamente un porcentaje de HP perdidos y da regeneración enorme durante la duración. Juntas hacen que Mundo sea el campeón con más HP efectivos en cualquier teamfight, con la pega de que no tiene hard CC propio y depende de los slows de Q + follow-up del equipo.

El game plan es farming con conciencia del tempo. Pre-3, el clear de Mundo es lento y los HP que pierde en camps son reales — no invadas y no te dejes invadir. Full clear hasta nivel 4, contesta el Scuttle (el cangrejo del río que da vision al matarlo) y busca el primer gank sobre el minuto 4-5 en una lane con priority (priority = la lane que está empujando hacia el enemigo, así el laner puede ausentarse unos segundos sin perder minions). En nivel 6, cada R debería traducirse en kill, objetivo o aliado salvado. Desde el minuto 14 con **Heartsteel** + **Sundered Sky** online, Mundo gana cada Drake fight solo a stats.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade es el starter melee de jungla: te permite hacer daño a los neutrales (los camps que farmeas en la jungla) más rápido y aplica un slow breve a los campeones rivales cuando los golpeas con auto-attack. Refillable Potion es un item de healing que se rellena gratis en base, así ahorras gold en chip damage de los clears.

**Items core (en orden):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — quest upgrade desde Hailblade (auto-evoluciona sobre el minuto 3-4 cuando acumula XP de los camps). El pet companion tank da Armor y MR extra mientras estás out-of-combat con campeones y tenacity (duración menor de stuns sobre ti) cuando entras en fight. Pickup obligatorio para cualquier tank jungler — el icono que se ve primero en la barra quick-learn dice al lector qué starter cogiste.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primer big item. Tu primer auto-attack sobre un campeón en cualquier fight critea y te cura. El crit-heal encaja con tu pattern de gank: entras, Q-slow, auto-crit-heal, E para el slam de missing-HP. Combina con la regen de R en skirmishes extendidas.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto cuando el daño principal del equipo enemigo son auto-attacks. Reducen ese daño entrante en fights largos.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — el item de scaling tardío. Cada proc exitoso sobre un campeón da a Mundo HP permanentes que no se pierden ni muriendo. Al minuto 30 tienes 8-12 procs guardados y tus HP efectivos se duplican comparado con una build flat-tank.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist más un pasivo de healing-amp que potencia el burst-heal de **W**, la regen de **R** y cualquier heal de aliados como Soraka o Yuumi. Cómpralo cuarto o quinto según si el equipo enemigo tiene más AP o AD.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo enemigo tiene 3+ fuentes de CC o 2+ campeones AP. La tenacity (stat que reduce la duración de stuns y slows sobre ti) es la única defensa que importa una vez consumida la inmunidad al primer CC del pasivo.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — quinto o sexto item cuando las partidas pasan del minuto 30. Una vez cruzado el umbral de HP (sobre 3000 HP bonus), el pasivo te cura a full out-of-combat en 4 segundos, así heaeas a full entre camps sin volver a base.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries auto-attack (Vayne bot, Tryndamere top, Master Yi jungle). Refleja daño y aplica **Grievous Wounds** (debuff que reduce a la mitad el healing del objetivo) on hit, el único counter a un Tryndamere o Vayne fed que se curan lo que reciben de tu aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra comps AP pesadas (Karthus + Brand, Lillia + Lux). Apila magic resist mientras recibes magic damage y da Move Speed, ambas cosas que Mundo quiere.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contra burst AP single-target (Syndra, Veigar, LeBlanc). El spellshield (una barrera de un uso que bloquea la siguiente habilidad dirigida a ti) anula el opener de combo y se resetea unos segundos out-of-combat.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra cadenas de CC o composiciones cargadas de AP.

**Skill order:** Maxea **Q** primero (rango, slow y daño porcentual escalan por rank — tu única tool ranged y setup principal de gank). Maxea **E** segunda (el activo de missing-HP escala fuerte con bonus AD, y el bonus AD escala con HP máximos). Maxea **W** al final; un punto temprano basta para sustain de clear. Sube **R** en niveles 6, 11, 16.

**Runas:** primaria **Resolve** con **Grasp of the Undying** — cada 4 segundos en combate con campeones, tu siguiente auto-attack hace daño mágico bonus, te cura y da HP permanentes. Combina con **Font of Life** (tu slow de Q marca a los objetivos para que tu laner herede heal al pegarles — perfecto para ganks), **Conditioning** (Armor y MR extra tras minuto 12) y **Overgrowth** (HP scaling con muerte de minions cercanos). Secundaria **Sorcery** con **Nimbus Cloak** (burst de Move Speed tras usar Flash o Ghost) y **Gathering Storm** (Adaptive scaling cada 10 minutos). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Matchups clave

- **Lee Sin / Elise / Xin Zhao:** junglers early-game que invaden tu lado débil. Trackeálos con vision wards (items colocados que revelan un área pequeña ~90 segundos) en raptors y red buff (camps de tu jungla). Evita invades 1v1 pre-3 — tu clear es lento y no tienes daño Smite para borrar al instante un intento 1v1. Haz full clear, contesta Scuttle y entonces empieza a gankear.
- **Master Yi / Karthus:** junglers de scaling. Igualas su scaling casi item por item, pero ellos llegan antes a su power spike (Yi en Blade of the Ruined King, item de attack speed con lifesteal; Karthus en Liandry's Torment, item AP de daño en quemaduras). Fuerza fights y objetivos (Drake en bot side, Rift Herald en top side — neutrales que dan buffs y gold a todo el equipo al matarlos) antes del minuto 18, y gankea lanes constantemente (un "gank" es una visita sorpresa del jungler a una lane para conseguir kill) para negarles farm.
- **Trundle:** hard counter directo. Su R (Subjugate) te roba Armor, MR y Move Speed durante 8 segundos — exactamente tus tres mejores stats. Evita skirmishes en solitario; pelea solo con compañeros que puedan hacer follow-up en menos de 2 segundos. Builda ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** para aplicar Grievous Wounds sobre el lifesteal de su Q.
- **Hecarim / Volibear:** tanks de engage espejo. Quien aterriza su CC primero gana el trade. Guarda el **pasivo** para después de que se comprometan (knockback E de Hecarim, knockback Q de Volibear). Una vez te comes su primer CC gratis, los superas en sustain en el follow-up.
- **Kha'Zix / Rengar:** assassins jungla centrados en burst. Invaden objetivos solos en side jungle. Tankea su primer burst con pasivo + R, y luego mete E cuando ya estén HP-committed — el scaling de missing-HP de tu E one-shotea a un Rengar al 70% HP desde 30%.

## Power spikes y condiciones de victoria

- **Nivel 4:** full clear hecho, las tres habilidades online. Busca el primer gank en la lane más cercana a un enemigo atascado en push (la lane con menos HP enemigos y más minions del lado enemigo de mid). Q-slow desde 975 de rango con W tickeando encima es kill threat creíble incluso pre-6.
- **Nivel 6:** primer **Maximum Dosage**. El swing de power más grande de la partida de Mundo. Encuentra un fight en menos de 30 segundos tras llegar a 6 — gankea una lane, contesta el segundo Scuttle o setea el primer Drake. El instant heal de R convierte un "gank perdido" en intercambio garantizado.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completado (~ minuto 12-14):** primer spike real de daño y sustain. Pelear por Drake o Rift Herald con W tickeando y procs del crit-heal de Sundered Sky en el engage gana el objetivo sin quemar R.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage online (~ minuto 22-26):** ventana de teamfight pico. El cooldown de R es lo bastante corto para enganchar dos veces por timer de Baron. Fuerza cada objetivo; este es tu pico.

## Errores comunes

- **Invadir antes del nivel 3.** El clear pre-3 de Mundo está entre los más lentos y Hailblade tiene muy poco daño Smite. Un Lee Sin o Elise que te encuentre al minuto 1:30 con una habilidad up te out-tradea y te deja 2 camps por detrás. Quédate en tu jungla hasta nivel 4.
- **Pulsar R después de recibir daño.** El instant heal de R es un porcentaje de los HP *perdidos*, pero la regen-over-time se desperdicia si la activas al 90% HP. Usa R **antes** de comprometerte a un gank o fight, no después — quieres la regen tickeando cuando llega el burst, no vendando después del hecho.
- **Gankear lanes sin priority.** Un gank en una wave freezeada (una wave parada cerca de la torre del laner enemigo) es kill gratis para el rival: su torre te zona y tu laner debe caminar lejos de la suya para hacer follow-up. Solo gankea lanes que pushan hacia tu lado o están al medio.
- **Recoger el frasco del pasivo demasiado tarde.** El frasco químico (la botellita verde que cae cuando procea el pasivo) se queda en el suelo unos segundos antes de despawnear. Si la dejas expirar a mitad de gank, has tirado todo el pasivo — sin heal, sin reset de cooldown. Camina sobre ella el segundo que cae.
- **Buildar full tank sin Spirit Visage.** Cada stat defensivo de Mundo se compone con healing-amp. Sin Spirit Visage, R cura menos, W cura menos, Soraka aliada cura menos. Spirit Visage es el item multiplicador; saltarlo por HP raw es peor build al mismo gold.

## Consejo avanzado

Practica el **flank gank** atravesando la jungla enemiga (entrar a la lane desde un lado o por detrás, no desde el río — el bush detrás del laner enemigo que no ve sin ward). Sobre Mundo esto es especialmente potente por el pasivo: la primera habilidad de CC del laner enemigo se la come gratis en el momento en que apareces detrás de él, lo que significa que incluso un objetivo al 100% HP que Flashea hacia su torre corre directo a un proyectil Q con slow desde 975 de rango y muere en E. El truco está en cronometrar la entrada por el bush del río o el de detrás justo en el momento en que el laner enemigo empuja la wave hacia tu lado y está lejos de su torre; el pattern de gank es invisible hasta que sales, y el CC perdido sella la kill antes de que pueda recuperarse.
