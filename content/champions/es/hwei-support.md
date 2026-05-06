---
title: "Hwei Support Build & Guía — Patch 16.9"
slug: "hwei-support"
language: "es"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Guía de Hwei support para League of Legends Patch 16.9: kit de pick-mage, build principal, matchups clave en bot, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Las habilidades que infligen daño marcan a los campeones enemigos. Un segundo hechizo dañino completa la firma y deja una marca que estalla tras un breve retraso por daño mágico en área."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Tres subhechizos de daño. QQ bola de fuego rápida, QW rayo retardado de larguísimo alcance (daño extra sobre objetivos aislados o con CC), QE sendero de lava con zona de slow."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Tres subhechizos de utility. WQ línea de Move Speed para aliados, WW pool que da shield en el tiempo, WE tres orbes que potencian los próximos 3 hechizos/autos con daño bonus y maná."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Tres subhechizos de CC. EQ skillshot de huida, EW ojo en el suelo que dispara un root teledirigido cuando un enemigo entra, EE mandíbula que arrastra a los enemigos al centro."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Skillshot de larguísimo alcance. Se pega al primer campeón enemigo golpeado y se expande, ralentizando en stacks; explota tras unos segundos por daño mágico en área."
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC sobre tu ADC (Leona, Morgana, Nautilus): limpia el lockdown que sigue al enganche"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra engage AOE pesado (Kennen, Wukong, Malphite, Yasuo): el shield grupal cubre el fight forzado"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "contra comps de poke-and-disengage donde mantienes a tu equipo curado en peleas largas"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de asedio y 5v5 sobre objetivos (drake pit, Baron pit) donde precastas la heal"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos que se tiran a la backline (Zed, Akali, Talon): el stasis te deja sobrevivir al engage"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Conecta el root con EW o el drag con EE, sigue con QW o QQ para detonar la firma de la pasiva, luego ulta Spiraling Despair sobre el bloqueado. Snowball de la bot vía picks repetidos antes del final de fase de líneas."
  weakness: "Cada hechizo es un skillshot, así que una E fallada te deja sin follow-up ni escape. Hwei no tiene dash y su movilidad es bajísima: un solo engage del support enemigo lo coge fuera de posición."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
    primary_rationale: "Sorcery primary: Aery sirve de poke en Q y de shield bonus en WW. Manaflow Band aguanta el coste de maná de las combos triples, Transcendence acumula ability haste y EW sale cada wave, Scorch cierra kills bajos de HP."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery cubre la sustain débil en lane, Cosmic Insight reduce el cooldown de Flash y de los active items (Mikael, Locket): más ventanas de peel en los teamfights."
    secondary_alternative: "Contra comps full-engage que se tiran a tu backline (Leona, Rakan, Nautilus), cambia Inspiration por Resolve con Bone Plating (-30/-60 daño en el primer burst) y Revitalize (+10% a tus shields y heals): menos CD reduction, más supervivencia."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter supports sin hard CC"
      reason: "No pueden castigar tu setup largo de EW (visión + root). Superas su poke en alcance y la QW retardada los pilla cuando se adelantan a shieldear al ADC."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "ADCs inmóviles sin dash"
      reason: "EW root y EE drag conectan limpios porque no tienen gap-closer para interrumpir el channel. Una vez primados, la firma de la pasiva más la R cierran la kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports skillshot sin escape"
      reason: "Igualas su rango de poke con QQ y QW, pero tienes hard CC que ellos no tienen. En un trade largo ganas porque conviertes una E acertada en kill, mientras que ellos solo erosionan HP."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Supports de hook y lockdown"
      reason: "Su engage point-and-click u hook llega antes de que cierres el channel sobre EW. Una vez bloqueado, Hwei no tiene dash para escapar, y una E fallada lo deja sin respuesta."
    - examples: ["pyke", "rell"]
      archetype: "Engage con roam y gap-close"
      reason: "Cierran la distancia que Hwei necesita para sus skillshots. La stealth de Pyke deja EW inútil porque no lo ves en pantalla; la W de Rell salta la zona de slow de QE."
    - examples: ["alistar", "rakan"]
      archetype: "Tanques con dash y knockup"
      reason: "Su dash más knockup AOE interrumpe la secuencia de hechizos a media animación. Hwei necesita tres pulsaciones para bloquear: una W-Q de Alistar borra esa ventana."
---

## Resumen

Hwei support es un pick mage de larguísimo alcance que convierte las bot lanes inmóviles en kills fáciles. El kit se construye sobre tres árboles de subhechizos: daño en **Q (Subject: Disaster)**, utility en **W (Subject: Serenity)** y crowd control en **E (Subject: Torment)**. Las herramientas estrella en support son **EW (Gaze of the Abyss)** — un root retardado teledirigido que bloquea al primer enemigo que pisa un ojo de visión — y **EE (Crushing Maw)** — una mandíbula que arrastra a los enemigos al centro y les ralentiza al salir. Cualquiera de las dos prepara la **pasiva (Signature of the Visionary)**, que estalla por daño mágico en área al segundo hechizo. El alcance de Hwei es de mage (alrededor de 900-1100 unidades en la mayoría de casts), así que la línea se juega a distancia de poke, no a melee.

El plan de juego es "acierta una E, gana el trade." Coloca **EW** delante del trayecto del ADC enemigo antes de un wave fight, prima la pasiva con **QQ** o **QW**, y luego concatena la **R (Spiraling Despair)** sobre el bloqueado para que el slow se acumule mientras tu propio ADC entra a cerrar. El requisito duro es el posicionamiento: cada hechizo es un skillshot a distancia y no hay dash, así que un solo engage enemigo que te pille fuera de rango es una sentencia de muerte. Quédate detrás de tu ADC, no a su lado.

## Build Recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el nuevo support quest item que evoluciona en Bloodsong / Solstice Sleigh / Dream-Maker a mitad de partida) más 2 Health Potions. Stealth Ward en el slot de trinket.

**Core items (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support item, gold income mientras te quedas cerca del ADC. Auto-upgrade en finished support item sobre el minuto 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — el motor del pick play: cada slow o root del kit primea una marca Mandate que tu ADC detona por daño mágico bonus. Hwei tiene slow en QE, EE y R, así que el proc está prácticamente garantizado en cada fight.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration: QQ y la firma de la pasiva atraviesan la backline squishy enemiga.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — cada pasiva primada y detonada activa un stack de Helia: cura a tu ADC y quema al objetivo. Combinada con Mandate, double-dipping en cada enemigo bloqueado.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra más un spike de magic-penetration por debajo del 35% HP (el momento en que un hechizo remata a un enemigo bajo). Encaja con las explosiones de R sobre objetivos chunkeados.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC sobre el ADC (Leona, Morgana, Nautilus). Limpia el lockdown que el enemigo usa para reventar al carry.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra engage AOE pesado (Kennen, Wukong, Malphite, Yasuo). El shield grupal cubre el fight forzado que tu rango de backline no puede evitar.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — sustituye a Imperial Mandate como finished support item si el equipo enemigo es de poke-and-disengage y pasas menos tiempo acertando E y más manteniendo a tu equipo curado.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos que se tiran a tu backline (Zed, Akali, Talon). El stasis compra tiempo para que el ADC reposicione mientras sobrevives al engage.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si el equipo te exige encadenar CC en peleas largas — el ability haste mantiene EW lista en cada rotación.

**Skill order:** Maxa **E** primero (la fuente principal de lockdown: EW root, EE drag, EQ huida), **W** segundo (shield, MS y empower de tres orbes), **Q** al final (escala con AP pero la cooldown reduction importa menos cuando los slots son de support, no de AP puro). Punto en **R** en niveles 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Cambia Inspiration por **Resolve** con **Bone Plating** y **Revitalize** cuando el bot enemigo tiene hard engage (Leona, Rakan, Nautilus): la supervivencia importa más que el cooldown de los active items cuando su primera habilidad decide el trade.

## Matchups clave

- **Leona / Nautilus:** Amenazas de engage. Quédate fuera del rango de hook/Q; nunca uses **Flash** ofensivamente en lane. Reserva **EW** como root de peel si caminan sobre tu ADC, no como setup de poke. Si flashan adelante, la **EE** drag puede tirarles lejos del carry.
- **Lulu:** Matchup parejo. Ella shieldea y disengagea tu **EW**, pero la superas en alcance de poke. Espera a que **W**ee a su ADC entrando en rango y rootéala a ella en su lugar — Lulu shieldeada sobre un root es kill-confirm para tu ADC.
- **Soraka:** Favorable para Hwei. Su MS base baja y su falta de movilidad hacen que **EW** acierte casi siempre. Empuja la wave primero y luego juega la combo **EW + R** sobre ella en cada cooldown — no tiene respuesta.
- **Pyke:** Matchup duro. Su stealth elimina la visión que **EW** necesita para bloquearlo: si no lo ves en pantalla, el ojo no hace nada. Compra Pink Ward (Stealth Ward, luego Oracle Lens) y mantén los brushes iluminados. Guarda **EE** como pull de peel cuando aterrice su hook, no como herramienta de poke.
- **Xerath / Vel'Koz:** Espejo de mage support a larga distancia. Su poke iguala tu rango, pero tienes hard CC que a ellos les falta: una **EW** acertada gana la lane porque no pueden esquivar **QW** retardada estando rooted. Tradea agresivo antes del 6, antes de que su **R** escale.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con un punto en **E** y otro en **W** tienes lockdown más una pool de shield. Una **EW** confirmada más el spike de tu ADC bastan para matar al support enemigo si overextiende.
- **Nivel 6:** La primera **Spiraling Despair** desbloquea cualquier kill setup. La R se pega al primer campeón golpeado y ralentiza la zona alrededor: combínala con **EE** drag y creas una zona "no-caminable" durante 3-4 segundos.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate completion (~ minuto 12-14):** punto de snowball de la bot lane. Cada pasiva primada más detonación Mandate borra la barra HP del ADC enemigo en una rotación. Agrúpate con el mid para un drake fight aquí.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ minuto 18-22):** empiezas a ganar 2-por-0 en las skirmishes porque la heal de Helia sobre el ADC supera el daño enemigo y la quema extiende tu rango. Es la ventana para forzar picks alrededor del río antes de que el equipo enemigo se agrupe para Baron.

## Errores comunes

- **Tirar Q sin setup.** Un **QW** poke en seco a larga distancia parece tentador, pero el rayo solo hace daño reducido en objetivos en movimiento. Acierta primero **EW** root y luego concatena **QW** para el daño bonus en objetivo aislado/rooted: los números se triplican.
- **Usar EW como hechizo de poke.** EW es tu kill setup. Reservarla para un momento definido por fight gana más partidas que spammearla por chip damage. El cooldown es demasiado largo para permitirte fallar.
- **Estar al lado del ADC.** Hwei no tiene dash. Si el support enemigo engagea sobre el ADC y tú estás también a melee, morís los dos. Posiciónate detrás de 200-300 unidades: así un engage que bloquea a uno deja al otro espacio para peel o escapar.
- **Olvidar el árbol W.** Muchos Hweis juegan puro pick-mage e ignoran los shields **WW** y los orbes **WE**. A media pelea, un empower **WE** sobre los autos del ADC vale más que un tercer hechizo de daño desde tu kit. Usa las dos mitades.
- **Caminar a side lanes sin visión.** El kit necesita visión para acertar EW y para ultar cross-map. Pon wards en tri-bush y río antes de cada roam — sin visión la ventaja de rango desaparece en cuanto pisas fuera de lane.

## Consejo avanzado

La **pseudo-combo EW + EE** es el setup de más valor del kit de Hwei y casi no aparece en guías básicas. Coloca **EW** (el ojo) sobre el camino que el enemigo debe seguir para last-hittear; permanece en el suelo varios segundos antes de bloquear. Después casta **EE** (la mandíbula que arrastra) para tirarles a través del radio de lock-on del ojo — el ojo dispara automáticamente el root teledirigido en el momento en que entran, incluso si intentaron esquivar **EE**. El drag se vuelve imposible de evitar, el root está garantizado, y tu **R** más la pasiva cierran la kill desde HP llenos sobre un squishy. La ventana es estrecha (alrededor de 1 segundo entre casts), pero acertada dos veces en una pelea termina la partida.
