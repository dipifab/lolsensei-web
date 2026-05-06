---
title: "Heimerdinger Top Build & Guía — Patch 16.9"
slug: "heimerdinger-top"
language: "es"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Guía Heimerdinger top para Patch 16.9: build de muralla de torretas, combos UPGRADE, power spikes contra juggernauts melee y win conditions de splitpush."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gana velocidad de movimiento extra cuando está cerca de torres aliadas o de torretas desplegadas. Premio pasivo por luchar dentro del turret nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Despliega una torreta (máximo 3 activas). Las torretas acumulan carga y disparan un rayo más fuerte al máximo. Las cargas se resetean con cada Q. Rango 350, cooldown 1s, 20 maná."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Ráfaga de cohetes a larga distancia (rango 1325) que convergen en el cursor. Los impactos extra hacen daño reducido. Cada cohete que toca a un campeón da 20% de carga a las torretas cercanas."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lanza una granada (rango 970) que ralentiza enemigos en la zona y aturde a los del centro. Golpear una torreta la carga al máximo. Cooldown 11s fijo, 85 maná."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Potencia la siguiente habilidad no-ultimate. R+Q: mega-torreta (8s, inmune a CC, splash AOE + slow). R+W: 4 oleadas de cohetes. R+E: zona de stun mayor + knockup central. Cooldown 100-70s."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y bruisers que cruzan el turret nest (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra tops con sustain (pasiva de Darius, Nasus, Dr. Mundo) — corta su regen de HP"
    - dd_id: "3118"
      name: "Malignance"
      against: "contra comps tanky donde la mega-torreta R+Q es clave — reduce el cooldown del ulti"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cuando el rival compre Magic Resist (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Asfixia a los tops melee con un muro de tres torretas en lane y usa la mega-torreta UPGRADE+Q para anclar peleas de baron y dragon. Acepta el 1v1 solo dentro del nest."
  weakness: "Bruisers y divers móviles con varios dashes derrumban el turret nest antes de que haga daño. Sin escapes más allá de Flash y la velocidad pasiva."
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
    primary_rationale: "Arcane Comet proquea con E (el slow ancla al objetivo) y con W multi-hit. Scorch sobre Gathering Storm: Heimer top gana o pierde en lane y Scorch suma daño real en niveles 1-6 vs juggernauts. Transcendence acorta los cooldowns de E y W para uptime continuo."
    secondary_rationale: "Biscuit Delivery cubre el coste de maná de los Q repetidos en niveles tempranos y da sustain de HP frente al harass de auto-attacks. Cosmic Insight reduce los cooldowns de Flash y UPGRADE, multiplicando las ventanas de mega-torreta."
    secondary_alternative: "Contra un top AD pesado (Darius, Renekton, Garen) cambia Inspiration por Resolve secundario con Conditioning (armor y MR tras el minuto 12) y Overgrowth (HP scaling). Trade-off: menos sustain temprano, más resistencia en all-ins."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Juggernauts inmóviles o lentos que deben caminar bajo cobertura de torretas"
      reason: "No tienen dash ni blink para esquivar el setup del turret nest. Cada paso dentro del rango activa rayos de torreta más cohetes W, fundiendo HP antes de que puedan hacer un trade significativo."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Juggernauts melee con engage corto que no pueden cerrar la distancia con seguridad"
      reason: "Su engage exige pegarse a melee contra tres torretas disparando a la vez. El stun de E en la zona de aproximación más la barrage de W detiene el commit antes de que llegue a Heimerdinger."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Divers móviles con varios dashes que arrasan el turret nest"
      reason: "Hacen dash a través de la zona, resetean en minions y alcanzan a Heimerdinger antes de que reposicione. Zhonya's Hourglass es obligatorio — usa la stasis para gastar sus dashes y forzarles el disengage."
    - examples: ["jayce", "quinn"]
      archetype: "Top laners de largo alcance que pokean fuera del rango 970"
      reason: "Zonan a Heimerdinger fuera de la wave desde una distancia donde E y W no llegan con fiabilidad, obligándolo a comer poke gratis cada vez que intenta colocar torreta o hacer last-hit."
---

## Resumen

Heimerdinger top es un lane bully que convierte los matchups contra melee en una guerra de desgaste sostenida. Su identidad en top lane se aleja del mid: aquí el objetivo no es roamear sino crear un **turret nest** impenetrable — una zona cubierta por las tres H-28 G Evolution Turret que obliga a cualquier campeón melee a elegir entre tragar daño mágico constante o ceder el control de la wave (wave control: decidir si la línea de minions empuja hacia ti o hacia el enemigo). La pasiva **Hextech Affinity** (velocidad de movimiento bonus cerca de estructuras aliadas y de sus propias torretas) le premia por luchar dentro del nest en lugar de kitear lejos de él. El término kite designa el movimiento hacia atrás mientras se inflige daño, manteniendo la distancia frente a un perseguidor.

El game plan es plantar torretas frente a la torre rival, pokear con **W** (Hextech Micro-Rockets) y **E** (CH-2 Electron Storm Grenade) para mantener al oponente bajo el umbral del all-in (all-in: pelea total sin opción de retirarse), y luego desplegar la mega-torreta UPGRADE+Q a nivel 6 para cerrar la lane por completo. La presión de splitpush (splitpush: empujar una side lane en solitario para forzar respuesta enemiga, liberando objetivos al equipo) es la win condition macro: un turret nest en una side lane es lo bastante peligroso como para que el rival tenga que mandar a dos para limpiarlo, dándole al resto del equipo tiempo de tomar objetivos.

## Build Recomendada

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. El maná sostiene los Q repetidos en niveles tempranos, donde cada torreta cuesta 20 maná y conviene reemplazarla al instante tras su destrucción.

**Core items (en orden):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst y sustain de maná. La pasiva se activa con los ataques de torreta contra campeones y refuerza los trades de poke con W (poke trades: intercambios breves a larga distancia que sangran HP sin abrir un fight completo).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana para cortar las runas de armor tempranas (armor runes: runas defensivas que algunos eligen en el tercer shard para reducir daño físico inicial).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP más bonus de velocidad de movimiento al hacer daño con hechizos. Te permite kitear por la lane para reposicionar torretas sin perder rango de W.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, especialmente fuerte para rematar bajo el 40% HP con un rayo cargado de torreta o una salva de W.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP en late game. Con cuatro items, los rayos de torreta y los cohetes W escalan a un daño que justifica splitear una side lane incluso contra dos defensores.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — obligatorio contra divers móviles (divers: campeones que dashean a través de la zona de torretas para matarte a corto rango — Irelia, Camille, Fiora). La stasis gasta su ventana de dash y deja a la mega-torreta haciendo daño mientras eres invulnerable.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra tops con mucho sustain (pasiva de Darius, Nasus, Dr. Mundo). Grievous Wounds (debuff que reduce a la mitad la curación recibida) aplicado por torretas y W corta su loop de regen de HP.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — contra composiciones tanky donde la mega-torreta UPGRADE+Q es tu herramienta principal de teamfight. Reduce el cooldown de R para que la mega-torreta recargue entre objetivos.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — entra cuando un priority target compre un item de Magic Resist (Mercury's Treads, Force of Nature, Spirit Visage).

**Botas:** Sorcerer's Shoes es el default. Cambia a ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity si vas adelantado y quieres más casts de UPGRADE.

**Skill order:** Maxea Q primero por el daño y la velocidad de carga de las torretas. Maxea W segundo para escalar la barrage de cohetes. Maxea E último — es sobre todo utility (stun + carga) más que fuente principal de daño. Sube R en niveles 6, 11, 16.

**Runas:** Primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Contra un top AD pesado, cambia Inspiration por **Resolve** con **Conditioning** y **Overgrowth**.

## Matchups clave

- **Nasus:** Juggernaut orientado al farm sin dash. Coloca las tres torretas en línea diagonal entre él y la wave a nivel 1. No puede tradear sin atravesar los rayos. Usa E para aturdirlo cada vez que intente last-hit bajo presión, y luego W para reforzar. Respeta su W potenciado a nivel 6 (reduce tu attack speed, pero las torretas desplegadas no se ven afectadas — el slow no aplica a estructuras).
- **Darius:** Peligroso a nivel 3 cuando tiene Apprehend (E, su pull) listo. No te quedes pegado a tus torretas sin minions bloqueando el ángulo del pull. Kitea hacia atrás mientras se acerca, centra el stun de E para interrumpir el pull, y dispara W de inmediato. Su pasiva Hemorrhage (sangrado) deja de aplicarse cuando rompes contacto con el movimiento, así que kitear es más eficaz que quedarte a tradear.
- **Irelia:** Matchup duro. Resetea su dash (Ionian Fervor E) en minions y puede llegar a ti incluso a través de tres torretas si planifica el camino. Mantén Zhonya's Hourglass como tercer item. A nivel 6 usa E para aturdirla en la aproximación e inmediatamente UPGRADE+Q para soltar la mega-torreta; el slow AOE (area of effect — daño que cubre una zona en lugar de un único objetivo) la fija para todo el daño del rayo.
- **Garen:** Matchup directo. Sin poke a distancia ni dash; su única escape es Perseverance (regen pasiva de HP). Niega su ventana de regen alternando constantemente poke entre rayos de torreta y cohetes W. Cuando vaya a un last-hit, suelta E para el stun central y sigue con W para el ciclo completo de burst. Su Judgment (E spin) hace daño en círculo: no te le pegues cuando lo active, mantén el rango de W.
- **Jayce:** Su forma ranged (Shock Blast) supera el rango de W (1050 frente a 1325), pero en la práctica se pasará a melee para los autos potenciados. Cuando entre en forma melee, esa es tu ventana: zona de tres torretas más stun de E seguido de W. Si se queda en ranged toda la lane, mantén las torretas más cerca de tu torre y céntrate en igualar su push — no le persigas en la lane abierta.

## Power spikes y condiciones de victoria

- **Nivel 1:** Las tres torretas están online a nivel 3, pero incluso una sola a nivel 1 chipea al rival en su primer acercamiento a la wave. Coloca Q cerca del límite del rango de experiencia para que tenga que entrar al rango de la torreta para hacer last-hit.
- **Nivel 6 (UPGRADE+Q):** La mega-torreta es 8 segundos de daño AOE inmune a CC que ningún melee puede ignorar. Suéltala en el centro de la lane para crear una zona que el rival no puede cruzar sin tragarse un ciclo completo de rayo + slow. Es tu mejor herramienta de splitpush.
- **Cosmic Drive completo (sobre el minuto 14-16):** Con tres items (Luden's + Botas + Cosmic Drive), el daño de torreta empieza a recortar HP incluso a tanks. La velocidad de Cosmic Drive te permite kitear y reemplazar torretas caídas sin perder posicionamiento de fight.
- **Rabadon's Deathcap online (sobre el minuto 24-28):** Heimer en late tiene torretas que pegan como un carry concentrado. Fuerza un fight de baron o dragon con una mega-torreta pre-colocada en la entrada del pit para sacarle el máximo valor.

## Errores comunes

- **No mantener tres torretas en todo momento.** Si una se destruye o expira, reemplázala al instante. Un setup de dos torretas hace 33% menos daño en área y deja huecos. Asigna Q a una tecla rápida y refresca al moverte dentro del rango 350 de un slot vacío.
- **Usar UPGRADE+E (R+E) en lugar de UPGRADE+Q (R+Q) contra juggernauts melee.** El knockup de R+E es vistoso, pero la mega-torreta R+Q hace mucho más daño total a lo largo de 8 segundos contra targets lentos que no pueden salir del radio. Reserva R+E para limpiar oleadas de jungla o castigar mages que se sobreextienden — no como herramienta primaria contra tops melee.
- **Quedarse parado dentro del rango de torretas durante el all-in rival.** Las torretas dan cobertura, no invulnerabilidad. Si el rival commitea (entra en all-in sin plan de fuga) con HP lleno y un gap-close activo, retroceder mientras las torretas hacen daño es lo correcto; no te quedes esperando los procs de stun (el momento en que el stun de la torreta se dispara al golpear).
- **Saltarte Zhonya's Hourglass en matchups con muchos dashes.** Contra Irelia, Camille o Fiora, Zhonya's no es situacional — es core. Compila como tercer item, antes de Shadowflame, siempre que el matchup lo pida.
- **Sobreextenderte para colocar torretas en la jungla rival.** Una torreta en el río o el tribrush enemigo (tribrush: el cluster de tres arbustos del río junto al pit de Dragon o Baron — un punto típico de gank) da gran visión, pero solo si tienes ventaja de velocidad para huir de un aprieto (in a pinch: cuando estás en peligro inmediato y necesitas una solución instantánea). Establece tu nest seguro primero y extiende cobertura hacia objetivos cuando tengas Cosmic Drive.

## Consejo avanzado

Al usar UPGRADE+Q (mega-torreta), el ángulo de colocación define la cobertura AOE. No la sueltes encima del rival sino un paso por detrás de su posición actual, en su línea de retirada. Mientras retrocede de la zona de impacto, camina hacia el rango del rayo en vez de salir de él. Combinado con el stun de E en la aproximación, esto fuerza al rival a absorber dos o tres ciclos completos de rayo (cada uno de unos 1.5 segundos) antes de poder salir — casi la duración entera de los 8 segundos de la mega-torreta a la velocidad de movimiento de un target ralentizado.
