---
title: "Heimerdinger Mid Build & Guía — Patch 16.9"
slug: "heimerdinger-mid"
language: "es"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Guía Heimerdinger mid Patch 16.9: build óptima, página de runas, colocación de torretas, matchups clave, power spikes y consejos avanzados para dominar la línea."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
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
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos y divers (Zed, Akali, Diana) — la stasis da tiempo a las torretas"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucho healing (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cuando un objetivo prioritario compra un item de Magic Resist"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Monta el nido de torretas, stunea con E, desgasta con W. En nivel 6 echa al rival con la mega-torreta R+Q — una zona de muerte inamovible."
  weakness: "Sin movilidad y rango de despliegue muy corto (350). Asesinos móviles entran antes de que disparen; las torretas mueren al instante con AOE waveclear."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet proca con E (el slow ancla al objetivo) y con W, sumando burst al DPS de las torretas. Manaflow Band evita quedarte sin maná al reponer torretas. Transcendence acorta E y W. Gathering Storm escala AP en partidas largas."
    secondary_rationale: "Biscuit Delivery aguanta los niveles iniciales hambrientos de maná y Cosmic Insight reduce todos los cooldowns, incluido UPGRADE!!! — rotaciones R+Q más frecuentes definen el mid game."
    secondary_alternative: "Contra líneas de mucho poke (Xerath, Vel'Koz) cambia Inspiration por Resolve con Second Wind (regenera HP tras recibir daño) y Bone Plating (reduce el burst de combos multi-hit) para sobrevivir más en lane."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Mages inmóviles sin dash"
      reason: "No pueden caminar dentro de un nido de tres torretas sin recibir DPS sostenido. Su burst exige acercarse, y el stun de E más el rayo de la torreta castigan el avance antes de que respondan."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Mages cuerpo a cuerpo o tanques que deben entrar al rango de las torretas"
      reason: "Su engage es a corta distancia. Tres torretas desplegadas hacen letal la entrada — un rayo cargado los golpea antes de que termine la animación de engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillery a larga distancia que pokean fuera del rango de las torretas"
      reason: "Las torretas solo cubren un radio en torno a Heimerdinger. Los mages artillery se quedan a 1000+ de rango, fuera del nido, y lo desgastan a cero sin entrar nunca en su zona."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Asesinos móviles que cierran distancia antes de que respondan las torretas"
      reason: "Las torretas tienen un ciclo de ataque lento. Un asesino con triple dash entra al nido y mata a Heimerdinger antes del primer rayo; el cooldown es demasiado corto para salvarlo."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Roamers globales que ignoran el nido por completo"
      reason: "Heimerdinger no puede rotar — mover las torretas requiere tres inversiones de Q. El rival saca kills gratis en las side lanes mientras Heimerdinger optimiza un nido que nunca se pelea."
---

## Resumen

Heimerdinger es un mage de zone control que gana la línea volviéndola inhabitable para el rival. Sus **H-28 G Evolution Turret (Q)** — hasta tres activas a la vez — crean un campo de daño persistente que castiga a cualquier enemigo que entre a rango cuerpo a cuerpo o de cast. A carga máxima cada torreta dispara un rayo potente; la **CH-2 Electron Storm Grenade (E)** stunea o ralentiza a los enemigos en esa zona, y los **Hextech Micro-Rockets (W)** desgastan objetivos hasta 1325 de rango. El resultado es un campeón cuya fuerza depende totalmente del posicionamiento: con su nido de torretas activo es casi imposible matarlo en un intercambio directo; sin él, es uno de los más vulnerables del juego.

Su **UPGRADE!!! (R)** cambia la ecuación por completo. Pulsar **R+Q** despliega una mega-torreta mejorada — inflige daño AOE con splash, aplica un slow y dura 8 segundos sin importar más casteos de **Q**. Considérala una máquina autónoma de negación de zona. El plan en mid es montar y mantener el nido hasta el nivel 6, y entonces usar **R+Q** para echar al rival de su torre tier-1 y snowball (acumular una ventaja temprana que crece progresivamente) hacia el mid game.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. El maná es crítico: cada torreta cuesta 20 de maná y la recastearás continuamente.

**Core items (en orden):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst en el primer ítem, regen de maná para reponer torretas y magic penetration (la capacidad de ignorar parte de la resistencia mágica del enemigo) que hace relevante el poke de W.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana para castigar a los squishy que pisan el rango de las torretas.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — amplifica el burst cuando el enemigo está bajo cierto umbral de HP, encajando con el follow-up R+E en W.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — reduce el cooldown de **UPGRADE!!!** y aumenta el AP mientras la ulti está activa; las rotaciones más frecuentes de la mega-torreta definen el mid game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP late game; cada rayo de torreta y cada cohete pasa a ser una amenaza por sí mismo.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos y divers (Zed, Akali, Diana). La stasis (un breve estado de invencibilidad congelada) deja que las torretas absorban el burst mientras esperas a que pasen sus cooldowns.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con mucho healing (Vladimir, Sylas). Aplica Grievous Wounds (un debuff que reduce la curación un 40%) a través de los impactos de las torretas.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un objetivo prioritario (el campeón cuya muerte más amenaza a tu equipo, normalmente el carry alimentado) compre un ítem de Magic Resist; sustituye a Rabadon's si todo el equipo enemigo apila MR.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes es la opción por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity son aceptables cuando necesitas más cooldown reduction para ciclar **UPGRADE!!!** más rápido.

**Orden de habilidades:** Sube **Q** primero (fuente principal de daño y poder de las torretas), **W** segundo (poke y carga de torretas), **E** al final. Pon puntos en **R** en niveles 6, 11 y 16.

**Runas:** Primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**.

## Matchups clave

- **Syndra:** Lanza esferas a distancia pero necesita castear desde una posición fija. Despliega tres torretas bajo tu torre tier-1, mantén la wave slow-pushed (deja que los minions se apilen en el centro de la línea para que la siguiente oleada llegue mayor) y usa **E** para interrumpir su recogida de esferas. En nivel 6 ganas el all-in (comprometerte por completo a la pelea esperando matar al rival) con **R+Q** sobre el terreno disputado.
- **Zed:** El matchup más duro del pool. Hará dash a través de tus torretas antes de que disparen. Respeta su poder en niveles 3 y 6; compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass como segundo ítem. Cuando use **Death Mark (R)**, activa la stasis de inmediato — las torretas tendrán tres segundos para disparar.
- **Orianna:** Matchup parejo de poke. Puede empujar tus torretas con **Command: Shockwave (R)** durante teamfights. En línea, coloca las torretas en el lado de la wave por el que ella debe acercarse. Evita agruparte cerca de tu nido cuando ella tenga la bola cerca.
- **Twisted Fate:** Ignorará tu nido y rotará. Empuja la wave bajo su torre antes de que se vaya, wardea el río y busca un **R+E** (knockup) en **W** si teleporta de vuelta. No puedes detener su macro game (estrategia general del mapa), pero sí castigar su torre base.
- **Viktor:** Mage inmóvil que necesita estar quieto para hacer daño. Un nido de tres torretas saca su **Death Ray (E)** mientras tú pokeas con **W** detrás del cluster. Pasado el 6, la mega-torreta **R+Q** lo echa de la wave o le quema el Flash.

## Power spikes y condiciones de victoria

- **Nivel 1:** Coloca dos torretas en la oleada de minions antes de que aparezca el primer cañonero. Los rivales que entran a rango de auto-ataque reciben un DPS (Damage Per Second — el daño sostenido por segundo de las torretas) sorprendentemente alto y se retiran — tienes el first push (ventaja de wave: tus minions empujan hacia su torre, así puedes salir a contestar Drake o ayudar mid) sin gastar maná en poke.
- **Nivel 6:** **UPGRADE!!!** disponible. La mega-torreta **R+Q** dura 8 segundos y no puede recibir CC (estar afectada por stuns, slows o cualquier crowd control); convierte toda la zona de Heimerdinger en una trampa mortal. Fuerza ya una pelea o un trade en la torre.
- **Luden's Echo terminado (sobre el minuto 11-13):** El poke de W ahora critea (golpe crítico: ataque amplificado al azar que inflige 175% de daño) a los squishy con daño relevante. Combínalo con E + W para confirmar kills a través del nido.
- **Malignance online (minuto 18-20):** El cooldown de **UPGRADE!!!** baja cerca de los 60 segundos con CDR alta (cooldown reduction — la stat que acorta el tiempo entre usos de habilidad). Puedes poner una mega-torreta en cada pelea de rotación, casi en cada spawn de objetivo (objective spawns = aparición de Baron Nashor o Drake en el mapa, normalmente cada 5-6 minutos).

## Errores comunes

- **Colocar las torretas en línea recta.** Ponlas en triángulo o en el camino que el enemigo debe recorrer para acercarse. Una línea de tres torretas solo dispara cuando el rival avanza recto — un triángulo dispara desde varios ángulos y es mucho más difícil de esquivar.
- **Usar R+Q en campo abierto.** La mega-torreta es una herramienta de zona, no de kill solo. Suéltala en un chokepoint (un paso estrecho como el baron pit, el dragon pit o el arbusto junto a la torre tier-2) para forzar al rival a caminar dentro de su radio de daño.
- **Recastear Q mientras las torretas aún tienen carga.** Una nueva Q despliega una torreta a carga cero y resetea las cargas de TODAS las torretas. Espera a que la más vieja dispare su rayo antes de reponerla — si no, tiras a la basura un disparo cargado.
- **Olvidar la velocidad del Pasivo.** **Hextech Affinity** te da bonus de move speed cerca de tus torretas. Usa el nido como pad de kite (moverte hacia atrás mientras infliges daño): camina hacia tu cluster para escapar de ganks, no te alejes de él.

## Consejo avanzado

Domina la combo **R+E** knockup en **W** follow-up. Cuando tengas UPGRADE!!! disponible, castea **R** y lanza inmediatamente **E**: aterriza como una zona más amplia y los enemigos del centro reciben un knockup (lanzados al aire, brevemente incapaces de actuar) en vez de un simple stun. El tiempo de aire es similar al de un stun, pero el knockup interrumpe channels (como la ulti de Katarina o el recall de Zed), y la zona ampliada caza objetivos huyendo que habrían esquivado el stun normal de E. Mientras están en el aire, dispara la barrera completa de **W** — los cinco cohetes convergen sobre el blanco con CC antes de que aterrice, infligiendo daño casi máximo antes de que pueda hacer nada defensivo.
