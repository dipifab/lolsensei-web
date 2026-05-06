---
title: "Gangplank Top Build & Guía — Patch 16.9"
slug: "gangplank-top"
language: "es"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Guía de Gangplank top para League of Legends Patch 16.9: starter kit, build crit con Trinity Force, matchups clave, power spikes, errores y un consejo avanzado de barriles encadenados."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Auto-attack potenciada periódica que quema al objetivo con true damage durante varios segundos. Fuerza una ventana en melee — controla su timer para anticipar el all-in de GP."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Disparo a 625 de rango que hace daño físico, aplica on-hit (crit, Sheen de Trinity Force) y da oro al matar. Principal poke y detonador de barriles."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Limpia todos los CC y cura según los HP que faltan. Cooldown largo y coste de maná alto — guárdala para el CC decisivo, no para slows menores."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Coloca un barril; golpéalo para detonarlo, haciendo daño físico AOE y slow. Dos barriles adyacentes se encadenan — un combo de 3 barriles encadenados es el pico de win-condition."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Ulti global: apunta a cualquier punto del mapa con cañonazos que ralentizan e infligen daño mágico. Mejorable en tienda con plunder (oro extra que da la Q al matar unidades)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con muchas curaciones (Aatrox, Soraka, Vladimir, Dr. Mundo) — grievous wounds corta la cura enemiga"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra tanques que apilan HP (Cho'Gath, Sion, Ornn) — armor pen escala con el HP del objetivo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Kennen R, Vladimir, Rumble) — escudo mágico bajo HP que te salva del golpe final"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contra all-in burst (Camille, Wukong R, engage de Malphite) — escudo HP que dispara y te da un segundo para limpiar con W"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Sobrevive a la lane hasta Trinity Force, luego encadena 3 barriles en teamfights. Una Q crit sobre 3 barriles encadenados en la backline cierra el fight antes de empezar."
  weakness: "Sin dash y sin movilidad innata. Lo countean champions con herramientas anti-auto-attack (parry de Fiora, E de Jax) y el engage hard-CC point-and-click que no puedes cleansear a tiempo."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primario: Grasp da sustain en los trades melee con Trial by Fire y apila HP permanente — el patrón ideal para Gangplank mientras escala. Demolish castiga torres en roams enemigos, Conditioning sostiene el late-game, Overgrowth engorda el HP que Trinity Force aprovecha."
    secondary_rationale: "Precision secundario: Triumph devuelve HP y oro en takedowns cuando flanqueas teamfights con R — Gangplank suele divear la backline, así que el heal salva el follow-up. Legend: Alacrity sube attack speed para detonar barriles más rápido y mejorar la cadencia on-hit de la Q."
    secondary_alternative: "Contra matchups ranged poke (Teemo, Quinn, Vayne top) cambia Precision por Inspiration con Biscuit Delivery (HP y maná sustain del que careces) y Cosmic Insight (Flash y Teleport más frecuentes)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Scalers late-game inmóviles"
      reason: "La Q de Gangplank llega a 625 unidades, muy fuera de su rango de farm en auto-attack. No tienen dash para acortar la distancia y castigar un barril encadenado; tú escalas más rápido que ellos una vez online Trinity Force."
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers melee sin disengage"
      reason: "Quédate fuera de su threat radius con la gittata de Q y ralentízalos con las zonas de Powder Keg. Cuando finalmente cierran, no tienen herramientas de follow-up para mantenerte en melee — reseteas el trade y te marchas."
    - examples: ["urgot", "kled"]
      archetype: "Fighters con ventana early fuerte que cae después"
      reason: "Farma a rango de Q en niveles 1-3, guarda W para su ulti de nivel 6 y outscala tras Trinity Force. No tienen respuesta late-game a un combo de barriles encadenados en teamfight."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Fighters móviles que bloquean auto-attacks"
      reason: "La W parry de Fiora stunea a Gangplank y refleja el CC; la E de Jax esquiva todo auto y Q durante dos segundos. Ambos rompen el patrón de trade que Gangplank necesita para escalar a late game."
    - examples: ["renekton", "olaf"]
      archetype: "Bullies early-window de all-in"
      reason: "El stun de Renekton en nivel 2 más su ulti de nivel 6 cancelan el plan de scaling de Gangplank antes de Trinity Force. La R de Olaf da CC immunity, así que la W cleanse no detiene su persecución con hachas en true damage."
    - examples: ["malphite", "kennen"]
      archetype: "Engage hard-CC point-and-click"
      reason: "La R de Malphite es point-and-click sin skillshot que esquivar. El stun de Kennen W y su R AOE encadenan CC más allá de la ventana de cleanse de la W de Gangplank — una vez arrancada la cadena, la W no llega a tiempo."
---

## Resumen

Gangplank es un top laner que escala a late game pagando un peaje duro en early a cambio de uno de los techos de daño crit más altos del rol. Su kit parece sobrecargado pero se reduce a dos ideas. **Parrrley (Q)** es una auto-attack a distancia con rango 625 que aplica los efectos on-hit (probabilidad de crit, proc del Sheen de Trinity Force, burn en true damage) y los lleva al objetivo a distancia. **Powder Keg (E)** es un barril que coloca y golpea para detonarlo; dos barriles adyacentes se encadenan, y tres barriles encadenan otra vez. El patrón signature consiste en apilar 3 barriles encadenados y hacerlos estallar con la Q sobre un equipo enemigo agrupado para un burst instantáneo — daño masivo concentrado en un segundo.

El plan de partida exige paciencia. Farma seguro a rango de Q en la ventana bully de niveles 1-6, completa Trinity Force sobre el minuto 14-16 y empieza a presionar las side lanes con **Cannon Barrage (R)** para girar dragones o robar torres desde el otro lado del mapa. En teamfights, coloca los barriles detrás de tu front line (los tanques y bruisers que abren tu equipo) y avanza dentro de la cadena solo cuando puedas detonarla sobre la backline enemiga (el carry que dispara desde atrás). Si sobrevives a la lane y llegas a 3 ítems, cada fight en el que conectes una Q crit sobre barril encadenado se cierra unilateralmente.

## Build Recomendada

**Ítems iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** contra bruisers melee — quieres lifesteal (daño de auto-attack que te cura) para los trades (intercambios cortos en los que gastas un par de habilidades y te marchas). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion contra matchups ranged (Teemo, Quinn, Gnar) — la regeneración te permite farmar bajo poke (daño a distancia que va comiendo HP sin comprometerse a un fight).

**Ítems core (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un bonus pasivo que potencia el siguiente auto-attack tras lanzar una habilidad) procca en cada Q dando un boost enorme de daño. Attack speed, ability haste (la stat que reduce los cooldowns), HP — toda la stat-line es el pico de win-condition de Gangplank.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed para detonar barriles más rápido y mejorar la cadencia on-hit de la Q.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — primer ítem crit; devuelve maná por cada Q. Resuelve el problema de maná de Gangplank y arranca el scaling crit.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — el pico de daño crit. Q crit y detonaciones de barril ahora one-shotean a los squishies (champions con poca defensa, como ADCs y mages burst).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal para sustain en teamfights largos, más un escudo HP de overflow cuando estás a tope de vida.

**Ítems situacionales:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra composiciones con muchas curaciones (Aatrox, Soraka, Vladimir, Dr. Mundo); la pasiva grievous wounds corta la cura enemiga, así tu daño se mantiene en lugar de ser regenerado.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra tanques que apilan HP (Cho'Gath, Sion, Ornn). La armor pen escala con el HP del objetivo respecto al tuyo.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (Kennen R, Vladimir, Rumble); el escudo mágico se activa al bajar de HP y te salva del golpe final.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — contra all-in burst (Camille E + R, Wukong R, engage de Malphite R); el escudo HP procca en el momento del golpe one-shot, comprándote el segundo que necesitas para cleansear con W y resetear.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra equipos AD-heavy (3+ amenazas físicas) o ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps AP con CC duro donde tu W estará en cooldown a menudo.

**Skill order:** Maximiza **Q** primero (el scaling por rank de Parrrley es tu fuente principal de daño), **E** segundo (menor cooldown de barril = más detonaciones encadenadas), **W** al final. Pon punto en **R** en los niveles 6, 11 y 16.

**Runas:** Primario **Resolve** con **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Secundario **Precision** con **Triumph** y **Legend: Alacrity**, o **Inspiration** con **Biscuit Delivery** y **Cosmic Insight** contra matchups ranged poke.

## Matchups clave

- **Darius:** Hard bully en early — su Q cura, W ralentiza y R ejecuta; puede aplastarte de los niveles 1-6. Farma a rango de Q, no contestes minions en melee y guarda **W** para su pull con E. Una vez online ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** lo outscalas en 1v1; hasta entonces la lane es un ejercicio de supervivencia.
- **Sion:** Lane de farm gratis. Él apila cadáveres y HP, tú apilas barriles y crit. Pushéalo a torre con barriles E, niégale los minions cañón para su pasiva. Esquiva su Q cargada point-and-click y lo outscalas cada partida.
- **Fiora:** El peor matchup de lane. Su **W** es un parry — una ventana corta en la que absorbe tu siguiente auto-attack o habilidad, te stunea y refleja todo CC. Hasta un slow de barril puede volverse en tu contra. Nunca lances **Q** sobre su vital point (el punto coloreado en su cuerpo que ella tiene que golpear para su pasiva) — riposteará (contraatacará) en el momento que tu proyectil llegue. Farma bajo torre, pide ayuda al jungler y acepta el déficit de CS; no puedes 1v1arla hasta tener 3 ítems y verla atrasada.
- **Camille:** Matchup de dive a nivel 6 (un dive es cuando un enemigo entra bajo tu torre, se come unos cañonazos e intenta matarte igualmente). Te encierra dentro de la jaula de su ulti. Su **E** stun ignora el slow del barril y su **R** te aísla. Compra ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** antes de lo habitual (4º ítem) y guarda Flash para su jaula R, no para los trades de poke.
- **Malphite:** Hard counterpick — su R point-and-click no tiene tell de skillshot y tu **W** no puede cleansearla si cae mientras estás en mid-cast. Mantén ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** como build-path de emergencia y nunca tomes teamfights sin visión sobre su ángulo de engage.

## Power spikes y condiciones de victoria

- **Nivel 6:** El primer **Cannon Barrage** desbloquea presión global. Puedes girar un fight de dragón con R desde la base, rematar a un enemigo huyendo en mid lane con la zona de slow o zonear la bot lane fuera de un objetivo — todo sin abandonar tu wave.
- **Nivel 9 (Q maxeada):** Parrrley alcanza el scaling máximo por rank. El coste de maná baja a 30 y el daño se dispara; puedes pokar cualquier matchup que no tenga parry o dodge e intercambiar Q por Q a tu favor.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 14-16):** El pico más grande. Sheen procca cada 1.5 segundos en la Q, la attack speed reduce a la mitad el tiempo de detonación de barril y tu pool HP por fin te permite sobrevivir a un intento de one-shot. Es cuando la lane pasa de defensiva a agresiva — puedes forzar trades que antes evitabas.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** Q crit sobre un cluster de 3 barriles encadenados borra a cualquier squishy en un segundo. Fuerza fights de objetivo aquí y colócate al borde de la frontline de tu equipo para que la cadena de barriles caiga en los carries enemigos.

## Errores comunes

- **Gastar W como cleanse de pánico al primer CC.** Guarda **Remove Scurvy** para la habilidad que define el trade — E de Camille, stun W de Renekton, stun W de Sett. Quemarla en un polymorph de Lulu o un slow menor te deja indefenso ante la amenaza real.
- **Apilar barriles antes de Q rank 3.** Por debajo de rank 3 el cooldown del barril es demasiado largo para el timing de cadena, y el segundo barril a menudo expira antes de que el tercero esté listo. Farma con barriles sueltos hasta nivel 5 y luego empieza a practicar cadenas.
- **Usar R de forma egoísta sin coordinar con el equipo.** Cannon Barrage es una herramienta global de engage — una habilidad que inicia un teamfight desde el otro lado del mapa; si la sueltas en una persecución 1v1 de poke tu equipo pierde el fight 4v5 en casa. Pinea siempre la intención, sincronízala con la smite del jungler y revisa el minimapa antes de lanzar.
- **Comprar ítems defensivos antes del scaling crit.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** parece seguro, pero si lo construyes antes de ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** y ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** renuncias al pico de daño que justifica pickear Gangplank. Confía en el W cleanse y el HP de Trinity Force para sobrevivir el mid-game.
- **Olvidarte de mejorar R con el plunder.** Cada Q que mata una unidad da oro; gástalo en tienda para mejorar Cannon Barrage (más daño, más duración, zona de cura). Una R sin mejorar al minuto 30 supone una pérdida de daño cercana al 30% sobre la misma ulti.

## Consejo avanzado

Practica el **barrel-jump combo**: coloca el barril A, inmediatamente coloca el barril B a la distancia máxima de cadena (justo dentro del radio de link) y luego auto-ataca el barril A. La detonación encadenada activa el barril B; mientras B está a media cadena, coloca el barril C adyacente a B. Con la attack speed de ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** y Q rank 5 puedes sostener un patrón de detonación continua cada 3-4 segundos, creando una zona AOE rodante que el equipo enemigo se ve obligado a rodear. Es la diferencia entre un Gangplank que borra una backline y un Gangplank que pokea sin efecto desde el costado.
