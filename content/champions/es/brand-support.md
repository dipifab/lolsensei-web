---
title: "Brand Support Build & Guía — Patch 16.9"
slug: "brand-support"
language: "es"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Guía de Brand support para League of Legends Patch 16.9: presión agresiva en lane, build de poke, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Los hechizos de Brand prenden fuego al objetivo (daño en el tiempo durante 4s, hasta 3 stacks). A 3 stacks el blaze detona como una pequeña explosión AOE que reaplica los efectos de los hechizos."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineal con daño mágico. Si el objetivo ya está ablaze, lo stunea — tu setup de kill para la AD carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE retardada tras un breve tell. Los objetivos ablaze reciben +25% daño. La herramienta de poke con más daño del kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosión dirigida que rebota a los enemigos cercanos. Si el objetivo principal está ablaze, el radio de propagación se duplica — aplica blaze a dos enemigos en un solo cast."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fuego de larga distancia que rebota hasta 5 veces entre enemigos, priorizando los ablaze. Gana teamfights cuando la ADC y el support enemigos están pegados."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC sobre tu ADC (cadena de stun de Leona, Q de Morgana, hook de Pyke)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps con AOE engage pesado (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka, Yuumi peel, equipo con Aatrox o Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto un objetivo prioritario cierre su primer item de Magic Resist"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pressiona el 2v2 con poke de W antes del nivel 3, después busca setups de E + Q stun para la ADC. Post-6 los rebotes de R entre ADC y support enemigos pegados convierten la lane en un snowball."
  weakness: "Sin shield, sin heal, sin peel para la ADC. Si el support rival engagia primero, Brand no puede proteger a su carry — solo matar al engager más rápido de lo que el engager mata a la carry."
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
    primary_rationale: "Sorcery primaria: Arcane Comet se auto-procca con cada hit de W o E, sumando poke gratis en cada cooldown. Manaflow Band sostiene el maná para spamear W en 2v2, Transcendence empuja la ability haste por encima del 40% y Scorch cierra los kills bajos bajo torre."
    secondary_rationale: "Inspiration secundaria: Biscuit Delivery resuelve el hambre de maná de Brand en los primeros 6 niveles y Cosmic Insight da más uptime de Flash — Flash es la única forma de esquivar un engage, el kit no tiene escape innata."
    secondary_alternative: "Contra hookers (Blitzcrank, Thresh, Pyke) donde sobrevivir al primer hook decide la lane, swap Inspiration por Resolve con Bone Plating (reduce daño back-to-back del combo) y Revitalize (potencia el shield de Mikael's, tu única opción defensiva)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Enchanters squishies con poco HP"
      reason: "La W de Brand supera su rango de healing en poke y la rotación E + Q los mata antes de que la carry pueda peelarlos. Yuumi pierde el cuerpo a una sola rotación completa; Soraka no puede curar a través de los ticks de blaze."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Supports utility sin engage"
      reason: "Brand gana la fase de lane por fuerza — no pueden castigar el spam de W porque su kit sirve para escudar a la carry, no para tradear. Después del nivel 6 su CC es single-target mientras tu R los pilla a los dos a la vez."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "ADCs de larga distancia sin escape"
      reason: "Estos ADCs se quedan a max range para last-hit; una E sobre su support propaga blaze a ellos, tu Q clava el stun y la AD carry detrás de ti se lleva la kill antes de que puedan flashear."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports tank de hard-engage"
      reason: "Engagian fuera del rango de la W de Brand con una cadena flash-stun. No tiene peel para sí mismo ni para la carry — en cuanto Leona stunea, el kit no tiene respuesta salvo morir o quemar Flash + Zhonya's juntos."
    - examples: ["rakan", "alistar"]
      archetype: "Supports engage móviles"
      reason: "Rakan dashea a través de tus skillshots y saca a la ADC de posición; la cadena headbutt-pulverize de Alistar salta por encima del stun de Q. Brand no reacciona a tiempo a ninguno."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "Supports all-in que igualan el burst de Brand"
      reason: "La Q de Pantheon y el hook de Blitzcrank tienen rangos efectivos similares a la Q de Brand. Quien clave el setup primero gana el trade, y ambos llevan survival incorporado (block del Aegis, hook-and-leave) que a Brand le falta."
---

## Resumen

Brand support es el caster support más agresivo del juego. No trae nada de lo que un support tradicional aporta — ni shield, ni heal, ni peel para la carry ("peel" = habilidades que protegen a un aliado empujando o stuneando a quien lo ataca), ni engage que termine en un cooldown de supervivencia tank. Lo que sí trae es una **threat de kill plana desde el minuto 1**. Cada hechizo prende fuego al enemigo (pasiva **Blaze**), y una vez que un enemigo está ardiendo tu **Q (Sear)** deja de ser un hechizo de daño y se convierte en un stun. El plan de lane es: pokearlos con **W (Pillar of Flame)** hasta que dos stacks de blaze se peguen, **E** para propagar blaze a ambos targets y **Q** el stun para que tu ADC se acerque y remate.

El precio es la fragilidad. Brand no tiene escape, ni sustain innato, ni herramientas para proteger a su AD carry. Si el support rival engagia primero — stun de Leona, hook de Nautilus, dash de Rakan — tu única respuesta real es *matar al engager más rápido de lo que ellos matan a tu carry*, y eso solo funciona cuando vas adelantado. El pick es binario: o stompeas la lane y haces snowball (un snowball es una ventaja temprana que crece: kill → gold → item → más kills), o mueres pronto y nutres a dos enemigos. Hay muy poco término medio, por eso esta guía se apoya tanto en el spike del nivel 2 y en los rebotes de **R** en teamfight como los dos momentos que tienes que ejecutar bien.

## Build Recomendada

**Items iniciales:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (el starter de support AP que questea a Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (en orden):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — la quest reward del support desde Spellthief's Edge. Obligatorio: te da el income de gold que te permite comprar items reales, más un stack de AP-on-takedown que snowballea tu daño.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — el item identitario de daño de Brand. Burn de porcentaje de HP que se suma a los ticks de blaze y castiga tanks y equipos con HP apilado.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste, priorizadas sobre Sorcerer's Shoes aquí porque como support casteas más habilidades y farmeas menos minions. Más uptime de R por teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra más una pasiva que ignora aún más Magic Resist en enemigos por debajo del umbral de HP. Encaja con los rebotes de R cazando al objetivo a baja vida.

**Items situacionales:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC sobre tu ADC (cadena de stun de Leona, Q de Morgana, hook de Pyke). Cleansear el CC sobre la carry es lo más parecido al peel que Brand tiene.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps con AOE engage pesado (R de Malphite, wombo de Yasuo — un "wombo" es cuando varias ultis se concatenan para pillar a todo tu equipo de golpe, R de Kennen). El shield activo es un botón de salvar la teamfight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka, Yuumi peel, equipo con Aatrox o Vladimir). La pasiva Grievous Wounds reduce su healing a la mitad.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un objetivo prioritario cierre su primer item de Magic Resist. Evita que un único componente de 800 gold soft-counteree tu build.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si el equipo enemigo tiene 3+ amenazas de hard CC con daño mágico.

**Skill order:** Maxea **W** primero (más daño base y poke principal en 2v2), **Q** segundo (más daño en el stun), **E** al final. Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence** y **Scorch**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**.

## Matchups clave

- **Leona / Nautilus / Rell:** Supports tank de hard-engage. Quédate fuera de su rango de flash-engage hasta que tengas ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**. Pre-coloca **W** sobre ti misma cuando se acerquen, lista para clavar **Q** el stun en el momento en que engagien.
- **Blitzcrank / Thresh / Pyke:** Hookers. Quédate siempre detrás de un minion — su hook es un skillshot single-target que la wave bloquea. Castiga los hooks fallados con **W → Q** para poke gratis; nunca auto-attaquees fuera de cobertura cuando tienen hook disponible.
- **Yuumi:** Lane gratis. Yuumi no tiene cuerpo cuando no está pegada. Tempa la **W** para que aterrice justo cuando se despega para last-hit o proccear su auto potenciado. Una Yuumi despegada cazada por **W → Q** es una kill antes de que su carry pueda escudarla.
- **Soraka:** Out-pressionala apilando poke hasta que su maná se seque. Soraka cura a su ADC al coste del 5% de su propio HP — cada tick de blaze sobre la ADC anula 30 segundos de su healing.
- **Lulu:** Polymorph y shield hacen poco fiables los burst en 1v1. Pokea desde max rango de **W**, nunca commits al stun-into-all-in (un "all-in" es commit total a la kill — sin salida, vas hasta que alguien muere) salvo que tu jungla esté en camino; si Lulu polymorphea a tu ADC a mitad de trade, el trade está perdido.

## Power spikes y condiciones de victoria

- **Nivel 2 (W + Q):** Primer spike. Con un punto en **W** más la **Q** que llevas desde el inicio, el combo **W → Q** stun está online. Esta ventana es donde se llevan el 90% de las kills de Brand support — empuja la wave para llegar a nivel 2 antes y luego clava el combo sobre el support rival.
- **Nivel 6 (R desbloqueado):** Primera **Pyroclasm** disponible. Si la bot lane rival está pegada (casi siempre — los supports se pegan detrás de su ADC), una sola **R** hace alrededor del 50% del HP de un squishy por rebote.
- **Bloodsong + Liandry's Torment online (~ minuto 14-16):** El daño se voltea. Desde aquí superas en daño a cualquier enchanter support y amenazas la kill sobre una ADC nutrida. Fuerza fights agrupados en drake.
- **R + Shadowflame online (~ minuto 22-26):** Dos enemigos agrupados se comen la secuencia de rebotes completa y mueren. Aquí es cuando Brand gana teamfights desde atrás — escoge ángulos donde la carry y el support rivales estén dentro del rango de rebote uno del otro.

## Errores comunes

- **Auto-atacar la wave por last-hits.** Como support no coges last-hits — el gold del farm de la AD carry es lo que financia la lane. Quédate atrás, pokea con **W** y solo auto-ataca un minion si la carry está muerta o haciendo recall.
- **Tirar Q como poke desnudo.** **Q** sin ablaze es un proyectil lento que falla contra enemigos que se mueven en lateral. Coloca primero **W** en el suelo, o **E** sobre un minion que propague blaze — entonces Q para el stun.
- **Estar delante de tu ADC.** Brand no tiene peel para sí mismo ni para nadie. Si te pones delante, el engage te impacta a ti, mueres y tu ADC se queda sin support. Ponte a la misma profundidad o un paso detrás, con un minion entre tú y el hook.
- **Ultar a un solo enemigo.** **R** rebota entre objetivos priorizando los ablaze, pero con una caída de daño enorme por salto sobre un solo target. Guarda **R** para fights donde dos o tres enemigos estén dentro del rango de rebote — nunca la uses como finisher contra un solo target en huida.
- **Pre-colocar W donde el enemigo está ahora.** Pillar of Flame tiene delay antes de aterrizar. Cástala donde el enemigo *va a estar* en 0.6 segundos — típicamente el hueco por el que tiene que pasar para llegar al siguiente minion o escapar de tu stun. Castarla sobre su posición actual es un fallo garantizado contra cualquier rival medio atento.

## Consejo avanzado

Practica el **double-spread setup**. Cuando el support y la ADC rivales están pegados (típico cuando empujan la wave o cuando el support pantalla a la ADC), haz en orden: **W** entre ellos → ambos cogen blaze stack 1. **E** sobre el support rival → blaze stack 2 sobre el support, propaga sobre la ADC para stack 2 sobre la ADC. Ahora ambos targets están a 2 stacks — no necesitas clavar **Q** para preparar el stun, necesitas clavarla como *finisher*. Q al support: stack 3 aterriza, el support queda stuneado, la detonación inestable golpea a la ADC y la lleva también a stack 3. **R** ahora rebota entre dos targets stuneados a blaze máximo, ambos mueren y no tradeas nada de vuelta. Esta es la rotación que convierte a un "Brand support decente" en un Brand que gana lane todas las partidas.
