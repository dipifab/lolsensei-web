---
title: "Bard Support Build & Guía — Patch 16.9"
slug: "bard-support"
language: "es"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Guía Bard support para League of Legends Patch 16.9: estilo de juego roaming-pickoff, build, matchups clave, power spikes, errores comunes y un consejo sobre el wall-stun."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Los Meeps aparecen al lado de Bard y añaden daño mágico extra a sus auto-attacks. Los chimes aparecen por el mapa: recogerlos da XP, maná y move speed fuera de combate."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Skillshot lineal que ralentiza al primer objetivo. Si el proyectil golpea a un segundo enemigo o un muro, ambos quedan stunneados. Los wall-stun son la herramienta de pickoff de Bard."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Coloca un altar curativo que se carga durante 10 segundos. El primer aliado que lo pisa cura HP y recibe un boost breve de move speed. Hasta 3 activos. Los enemigos lo destruyen."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Abre un portal de un solo sentido a través del terreno cercano. Cualquier campeón (aliado o enemigo) puede usarlo. Cooldown largo: sirve para ganks, escapes o flanks sorpresa."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "AOE de larga distancia que pone en stasis a campeones, minions, monstruos y torres durante 2.5 segundos. Úsala para fijar objetivos, salvar aliados del último golpe o congelar un dive."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra lockdown CC single-target sobre tu ADC (Morgana Q, Ashe R, Leona E en cadena R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de burst AOE (Yone + Malphite, setups de teamfight de Orianna)"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de teamfight agrupadas: el área de cura cae incluso muerto"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins o divers duros (campeones que saltan a borrarte rápido: Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "cuando tu ADC es la win condition y el equipo enemigo tiene varias amenazas de dive"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roamea sin parar para recoger chimes y wall-stunnea enemigos aislados con Q. En teamfights, R sobre la frontline rival para que tu equipo borre la backline antes de que el engage se comprometa."
  weakness: "Squishy y sin dash. Si tu Q falla o no engancha wall-stun, no tienes follow-up de CC y tu ADC muere en el 2v2. Lo castigan los supports con CC point-and-click y los bullies agresivos a nivel 2."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Enchanters inmóviles sin dash"
      reason: "La amenaza del Q-into-wall stun les obliga a quedarse muy detrás de los minions. Sin escape, un wall-stun limpio se convierte en kill antes de que su equipo rote a ayudar."
    - examples: ["alistar", "nautilus"]
      archetype: "Engagers melee telegrafiados"
      reason: "La R cancela su engage de commit. Justo después de su Flash-W sobre tu ADC, pulsa R sobre el engager: se congelan en stasis y tu ADC sale gratis."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Enchanters de lockdown con CC point-and-click"
      reason: "Su CC es point-and-click (no hay skillshot que esquivar). Hacen **peel** sin esfuerzo sobre tus intentos de dive (peel = proteger a un aliado interrumpiendo a quien le ha saltado encima), y Bard no tiene dash para disengage cuando el trade se gira."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Hookers a larga distancia"
      reason: "Su hook (rango 1100-1150) te alcanza antes de que tu línea de Q quede limpia. Sin dash, después de un hook la lane juega 1v2 durante 30 segundos."
    - examples: ["pantheon"]
      archetype: "Bullies agresivos a nivel 2"
      reason: "Las lanes de all-in a nivel 2-3 castigan tus stats early débiles. No tienes sustain salvo la W, que necesita 10 segundos para cargarse antes de pagar."
---

## Resumen

Bard es un **support roaming** (un support que sale constantemente de la lane para influir en el resto del mapa). Su identidad vive **fuera** del 2v2 de bot lane (la pelea entre los dos ADC — los carries de daño principales — y sus dos supports). Recoge **chimes** brillantes que aparecen por el mapa: recogerlos da experiencia, maná y move speed fuera de combate gratis. Convierte esa movilidad en **pickoffs** — capturar enemigos aislados lejos de su equipo y matarlos. Su Q es un slow de larga distancia que se vuelve stun si el proyectil golpea un segundo objetivo o, lo más famoso, un muro detrás del primero. Su R es una bomba de stasis (vuelo de 4 segundos, luego un AOE amplio) que congela todo en su zona durante 2.5 segundos: aliados, enemigos, torretas y minions incluidos.

Plan de partida: recoge chimes sin parar, busca pickoffs con wall-stun en el **river** (la zona neutral central que separa las dos mitades del mapa) y en la jungle, y trata tu bot lane como una de las tres lanes que patrullas — no como el sitio donde vives. En teamfights eres el **disengage** (el jugador que rompe el engage rival con R) y el **catch** (el jugador que fija objetivos aislados) — casi nunca la frontline.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (consumibles que curan HP durante unos segundos). World Atlas es el quest item de support: genera oro con el tiempo y se transforma automáticamente en una de cuatro evoluciones a medida que dañas a campeones rivales y **wardeas** el mapa (colocas wards, objetos que dan visión en arbustos, para que tu equipo vea lo que pasa). Para Bard siempre debe convertirse en Bloodsong.

**Items core (en orden):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — finalización del path de support. Es la elección correcta porque Bard es un support de **poke** (daño a distancia para desgastar HP) y pickoff, no un **enchanter** (un support de cura/escudo como Soraka o Janna). Bloodsong da AP (Ability Power — la stat que escala el daño mágico) y premia meter daño a campeones rivales — exactamente lo que hacen tus combos Q + auto-attack.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas con **ability haste** (stat que reduce todos tus cooldowns) y cooldown reducido en **summoner spells** (los dos hechizos extra de la esquina superior de tu barra: Flash, Ignite, etc.). Tu **Flash** vuelve antes para los engages, y la **R** rota más rápido para los fights de objetivo (teamfights en drake o Baron — Baron Nashor es el monstruo neutral gigante en el river top que da un buff potente para todo el equipo).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — habilidad activa que da 4 segundos de move speed extra para ti y los aliados cercanos. Combina con tu roam ya rápido para **ganks** (correr a otra lane para matar a un enemigo allí) imposibles de esquivar de bot a mid.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — da heal/shield power que crece en late game (después de ~25-30 minutos cuando los campeones tienen 4+ items). Cómpralo cuando la partida se alarga y las cargas de tu W curan números reales.

**Items situacionales:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — activo que limpia un stun, root (no te puedes mover, pero sí atacar) o fear (movimiento incontrolado) sobre tu ADC. Cómpralo contra lockdown single-target (Morgana Q, Ashe R, cadena Leona E en R).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — activo que escuda a todos los aliados cercanos durante 2.5 segundos. Cómpralo contra comps de burst AOE (escuadras tipo Yone + Malphite + Orianna que one-shotean — matan en un golpe — equipos agrupados).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — área de cura que puedes lanzar sobre los aliados incluso muerto. Combina con comps de teamfight que se agrupan en torno a objetivos.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — activo que te hace invulnerable durante 2.5 segundos. Cómpralo contra assassins o **divers** duros (campeones que saltan sobre ti para matarte en 1-2 segundos: Zed, Talon, Diana) cuando es claro que te están targeteando.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — redirige el 12% del daño recibido por un aliado vinculado hacia ti, y cura a ese aliado con tus auto-attacks. Cómpralo cuando tu ADC esté hyper-fed (8+ kills de ventaja, borra enemigos en 1-2 golpes) y el equipo enemigo tenga varias amenazas de dive.

**Botas:** Ionian Boots of Lucidity por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** es la alternativa cuando el equipo rival tiene mucho CC (Lulu, Leona, Lissandra): dan resistencia mágica más 30% de tenacity (duración de CC reducida sobre ti).

**Skill order:** Maxea **Q** primero (daño principal y herramienta de wall-stun), **W** segundo (la cura escala con el rank), **E** al final (la reducción de cooldown apenas importa — un punto basta hasta late). Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Las runas son pasivas que se eligen antes de la partida (6 picks repartidos en dos árboles: un primario de 4 runas y un secundario de 2). El estándar de Bard es:

- Primario **Inspiration**: **Glacial Augment** (al pegar una auto-attack a un objetivo ralentizado, aparece debajo una zona que lo ralentiza más — combina con el slow de tu Q), **Magical Footwear** (botas gratis al minuto 12), **Biscuit Delivery** (3 galletas en early que curan HP y maná), **Cosmic Insight** (extra ability haste y summoner spells reducidos).
- Secundario **Resolve**: **Bone Plating** (tras 3 golpes recibidos, los siguientes 3 dentro de 1.5s hacen menos daño) + **Revitalize** (tus heals y escudos son más fuertes). Pícalo para safety en lane.
- Secundario alternativo **Sorcery**: **Manaflow Band** + **Scorch** para más daño de poke en lane.

## Matchups clave

- **Lulu / Janna:** Hard counters en el 2v2. Su **CC point-and-click** (CC que no necesita apuntar, basta con clicar el objetivo) cancela tus intentos de dive. La W de Lulu te convierte en un animalito inofensivo (polymorph); la Q de Janna te lanza al aire. Quédate atrás, roamea a mid en cuanto la **R** esté disponible al nivel 6, y confía en que tu ADC **farme** seguro (farmear = rematar minions con el último golpe para oro y experiencia).
- **Leona / Nautilus:** **Tanks** (campeones de frontline con mucho HP) de engage con CC point-and-click. Posiciónate detrás de tu ADC siempre. Si saltan sobre tu ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** sobre ellos para congelar el engage, y luego retírate. Nunca **trade** auto-attacks contra ellos (un trade es un breve intercambio de golpes en lane, no un intento de kill total): su cadena de CC es más larga que tu ventana de trade.
- **Blitzcrank / Pyke / Thresh:** Supports de hook (su spell signature es un **skillshot** — una habilidad que se apunta — a larga distancia que te tira hacia ellos). Su rango de hook supera tu rango efectivo de Q. Quédate detrás de los minions cada vez que tengan el hook listo. Tras un hook fallado, hazle un trade gratis y **Q**: el hook queda en cooldown 15+ segundos.
- **Pantheon support:** Bully de lane agresivo (un campeón fuerte para echarte de la lane en early). Hace **all-in** (commit total a la kill, sin retirada) al nivel 2 con stun **W** + lanza **Q**. No tienes sustain. Quédate muy atrás, wardea los dos arbustos del río (las zonas de hierba alta donde los campeones quedan ocultos a la vista), y rechaza los trades a nivel 2. Recupera post-6 con roams en **R** a mid.
- **Senna:** **Scaler** pasiva (se hace más fuerte con el tiempo, no se compromete en early). No puedes hacerle all-in limpio por sus auto-attacks de larga distancia. La lane es de farm-trade lento. Gana el map game con la recogida de chimes y roamea a mid para jugadas con **R**. Nunca te expongas demasiado: su **W** root desde la **fog of war** (las zonas no wardeadas que tu equipo no ve) es un setup de gank gratis para su jungler (el compañero que limpia los camps de la jungla).

## Power spikes y condiciones de victoria

- **Nivel 2 (un punto en W):** Coloca un altar en el arbusto de lane para sustain entre trades. Combinado con **Q** a nivel 1, tienes una amenaza de kill si el support rival se posiciona mal.
- **Nivel 6 (R desbloqueada):** El primer **Tempered Fate** desbloquea jugadas que cambian la partida. Stasis sobre el ADC enemigo en un 2v2 suele ser kill al instante. Roamea a mid en cuanto la wave (la línea de minions) rebote hacia tu torre (cuando el rival deja de empujar y los minions vuelven naturalmente a tu lado) — tu **R** más el combo del mid laner gana contra un mid distraído.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong completo (~ minuto 14-16):** Tu quest item de support se mejora. Empiezas a aportar daño real con los Q y los roams escalan.
- **Nivel 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong online:** El rank 2 de R (la segunda vez que pones un punto en R) baja el cooldown a 95 segundos. Con Shurelya's activa puedes rotar (moverte entre lanes) lo bastante rápido para influir en ambas side lanes (top y bot) más los drake fights (teamfights en la fosa del dragón) cada 90 segundos.

## Errores comunes

- **Tirar Q en campo abierto para poke.** Sin un segundo objetivo o un muro detrás, **Q** es solo un slow — y un slow de 60 maná y 11 segundos de cooldown es un trade brutal. Comprueba siempre que haya un minion o un muro en la línea detrás del objetivo. Si no, no pulses Q.
- **Roamear con la wave empujada hacia tu torre.** Cuando te vas, la wave (la línea de minions en pelea) se estrella contra tu torreta — los minions mueren bajo torre y tu ADC pierde 2-3 minions de farm más las **tower plates** (las placas de armadura de las torres en early; romper una da oro). Roamea **solo** cuando la wave esté en mitad de lane o empujando hacia la torre rival (los minions están avanzando, así que tu ADC se queda seguro en su torre mientras estás fuera).
- **R sobre tu propio ADC en mitad de un fight.** La stasis sobre un aliado pausa todo lo que está haciendo — incluida una cadena de auto-attacks que iba a ganar el trade. Usa **R** sobre enemigos, sobre aliados moribundos (para interrumpir el golpe letal) y sobre torretas (para cancelar un tower dive). Casi nunca sobre un carry sano.
- **Quedarte dentro de tu propia área de R.** El AOE es ancho y el tiempo de vuelo es de 4 segundos: olvidas dónde la lanzaste, te metes dentro, desperdicias la ulti. Casteas y luego sales.
- **Ignorar los chimes fuera de lane.** Los chimes son XP y maná. Un Bard que recoge chimes llega al nivel 6 unos 2 minutos antes que un Bard que se queda en lane. Si no estás 1 nivel por encima del resto de tu equipo al minuto 10, estás jugando mal.

## Consejo avanzado

Practica el **flash-stun**: lanza Q y luego activa **Flash** (el summoner spell de teleport corto universal) a media trayectoria para reposicionar tu personaje — y el proyectil de Q, que sigue tu modelo, gana un ángulo nuevo desde la nueva posición. El truco es flashear *hacia* donde el enemigo está haciendo **dash** (su movimiento instantáneo corto). Así cazas enemigos que esquivarían una Q normal sin esfuerzo. Es el truco de mayor leverage del kit de Bard (el conjunto de sus habilidades), y a menudo la diferencia entre un Bard que gana partidas y otro que no.
