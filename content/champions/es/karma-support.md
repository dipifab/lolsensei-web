---
title: "Karma Support Build & Guía — Patch 16.9"
slug: "karma-support"
language: "es"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Karma support para League of Legends Patch 16.9: build enchanter, runas, matchups clave, power spikes, errores comunes y un consejo final para novatos."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mago / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Golpear a un campeón enemigo con una habilidad o auto-attack reduce el cooldown de Mantra. Mantente activa en los trades para tener la R lista."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Skillshot lineal que explota al primer impacto, daña y ralentiza a los enemigos en una pequeña área. Tu herramienta principal de poke en lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether (enlace) sobre un enemigo. Si no se rompe en la duración, daña dos veces y enraíza. La distancia de ruptura importa."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Escudo dirigido sobre un aliado con buff breve de Move Speed. Úsalo en el ADC para disengage o para cerrar una kill."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empodera tu próxima Q, W o E. RQ añade una detonación AOE retrasada, RW cura a Karma y prolonga el root, RE escuda aliados cercanos y da más Move Speed."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucha curación (Soraka, Yuumi, Vladimir, Dr. Mundo): corta el healing cuando los dañas con Q."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra burst AOE (Yasuo + Malphite, ult de Orianna): el escudo de equipo bloquea la wombo combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (gancho de Blitzcrank, Q de Morgana, stun de Twisted Fate)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins que te buscan (Zed, Talon, Akali): la stasis de 2,5s permite al equipo hacer peel."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "cuando el equipo necesita más daño desde tu poke y ADC más jungla rematan tu slow de forma constante."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bullea la bot lane con poke de Q desde nivel 1, prepara kills con el root de W y la Q empoderada por Mantra (RQ), y peelea al ADC con E y RE en los teamfights."
  weakness: "Enchanter squishy sin dash. Los supports de hard-engage (Leona, Nautilus, Rell) te bloquean antes del tether de W, y una Q fallida es HP gastada a cambio de nada."
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
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Mage supports inmóviles"
      reason: "El rango de Q de Karma iguala al suyo y su escudo E anula el poke, así que gana los trades largos curando la diferencia que ellos no pueden cerrar."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters pasivos sin CC duro"
      reason: "No pueden castigar una Q fallida, así que Karma poka al ADC sin riesgo y snowballea la lane antes de que ellos lleguen al spike de item."
    - examples: ["draven", "kalista"]
      archetype: "ADC lane-bullies que buscan supports pokeables"
      reason: "La E de Karma sobre su propio ADC absorbe el burst del all-in y luego retradea más fuerte con Q-RQ porque Aery proca en cada hechizo."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tanques de hard-engage con CC point-and-click"
      reason: "Sus stuns conectan antes de que el tether de W se cierre, así que Karma come el engage sin meter el root y muere antes de que la E pueda salvar al ADC."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook supports de largo rango"
      reason: "Karma no tiene dash para esquivar un skillshot lineal limpio; un gancho a nivel 2-3 sobre ella cierra la lane porque no tiene herramienta de escape."
    - examples: ["alistar", "rakan"]
      archetype: "Peel-engagers móviles"
      reason: "Saltan sobre Karma más rápido de lo que tarda en lanzar Q o E, y rompen el root con sus propios knock-ups antes de que la W ticke."
---

## Resumen

Karma es un support híbrido enchanter-poke: un enchanter es un campeón construido alrededor de curar y escudar a los aliados, y "poke" significa rascarle HP al enemigo desde lejos sin comprometerse a un fight completo. Pokea con **Inner Flame (Q)**, fija objetivos con **Focused Resolve (W)** y protege a su ADC (el carry a distancia que la acompaña en bot lane) con **Inspire (E)**. Su ultimate **Mantra (R)** no es un hechizo separado, sino un empoderamiento que añade un efecto extra a la siguiente Q, W o E. Como Mantra está disponible desde el nivel 1, Karma es uno de los pocos campeones que "tiene su ulti" en el primer cast en lane — cada auto-attack sobre un campeón enemigo le quita segundos al cooldown gracias a su pasiva **Gathering Fire**.

El plan de partida es ganar la bot lane con poke de Q en cooldown, buscar un root (un "root" impide que el enemigo se mueva durante un par de segundos) con W cuando el rival se adelante a last-hittear, y escudar al ADC con E para absorber el all-in (el intercambio total a muerte). Hacia el minuto 12, con ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** y ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** terminados, Karma se transforma en una enchanter de teamfight que escuda al carry aliado de la frontline (frontline = el tank o fighter que abre la pelea) y zonea la back line (back line = los carries que dañan desde atrás) con RQ.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el item de la quest support) más 2 Health Potions y una Stealth Ward. Salta las pociones de maná: Manaflow Band y Biscuit Delivery cubren los problemas de maná tempranos.

**Items principales (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completa en ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** sobre el minuto 10-12, es la recompensa de la quest support. Da gold income y cargas de ward.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas que dan Ability Haste (estadística que reduce el cooldown de tus hechizos), para tener Mantra y Q más a menudo.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — cuando escudas a un aliado con E, le das attack speed (golpea más rápido) y daño mágico on-hit (daño extra en cada basic attack). Brilla con ADCs que pegan rápido (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heals y escudos repetidos disparan una curación acumulativa sobre aliados con poco HP. Combina con E spam y RE en teamfights.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — área de curación con 5 segundos de delay, se usa en peleas por objetivo (Drake, Baron) para topar al equipo entero.

**Items situacionales:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con mucho healing (Soraka mid, Yuumi, Vladimir top). Corta la curación enemiga cada vez que los dañas con Q.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE (Yasuo + Malphite, R de Orianna). El activo da al equipo entero un escudo amplio y bloquea la wombo combo (una "wombo combo" es un engage con CCs encadenados que limpia al equipo en 1-2 segundos).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra casters con CC mágico single-target que te one-shottean (gancho de Blitzcrank, binding de Morgana, gold card de Twisted Fate).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins que te apuntan específicamente (Zed, Talon, Akali). Los 2,5 segundos de stasis ("te vuelves no objetivo, pero no puedes moverte ni castear") le dan tiempo al equipo a hacer peel sobre ti.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — cuando el equipo necesita más daño y tu jungla/ADC siguen tu slow de Q de forma fiable.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son el default por el Ability Haste (quieres Mantra lo antes posible). Mobility Boots son aceptables si roameas mucho a mid lane.

**Skill order:** Maxea **Q** primero (poke principal y daño AOE), **E** segunda (escudo más grande + Move Speed), **W** al final. Pon un punto en **R** en niveles 6, 11, 16 — pero recuerda que Mantra ya es usable desde nivel 1.

**Runas:** Primaria **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery proca en cada Q para daño extra de poke y en cada E para un pequeño bonus de escudo. Secundaria **Inspiration** con **Biscuit Delivery** (sustain de maná gratis en lane) y **Cosmic Insight** (más Ability Haste sobre summoners e items).

## Matchups clave

- **Lulu / Janna:** Matchup parejo. Las dos son enchanters sin hard engage; la lane se decide en el cruce de ADCs. Pokéales con Q cuando se adelanten a wardear, pero no comprometas Mantra en lane — guárdala para rotaciones de objetivo.
- **Soraka:** Guerra de poke favorable. Tu slow de Q más los procs de Aery ganan al coste de HP de su W. Empújala fuera de la wave hacia los niveles 3-5 lanzando Q on cooldown.
- **Leona / Nautilus:** Lane dura. Engagean (abren la pelea) con CC point-and-click (crowd control que bloquea instantáneamente sin apuntar, tipo stun a click) antes de que puedas tetherar con **W**. Guarda E para el momento exacto del engage (escuda el burst — daño alto en 1-2 segundos — y da Move Speed para hacer peel out, es decir, escapar con el ADC), y nunca pushees la wave más allá del río sin visión.
- **Pyke / Thresh:** El rango del gancho coincide con el rango de tu Q. Quédate detrás del ADC, escóndete tras los minions para romper la línea de visión sobre los ganchos, y Q al support — no al ADC — cuando su gancho esté en cooldown.
- **Blitzcrank:** El pull es toda la lane. Avanza solo cuando veas su Q en cooldown; si te aganchan, E sobre ti misma de inmediato (escudo + speed boost te dan opciones para llegar a torre).

## Power spikes y condiciones de victoria

- **Nivel 1:** Mantra ya está lista. RQ a nivel 1 es un invade tool fuerte (colarse en la jungla rival para preparar una kill temprana) porque la detonación AOE (daño en área que afecta a todo lo que esté en un círculo) hace daño real sobre enemigos amontonados (varios objetivos pegados entre sí).
- **Nivel 6:** El segundo punto en R desbloquea cooldowns más rápidos de Mantra. Con Manaflow Band stackeada puedes spamear combos Q-RQ-W en el all-in de bot lane.
- **Bloodsong + Ionian Boots of Lucidity (~ minuto 10-12):** Se abre la ventana de roam (roaming = abandonar tu lane para ayudar a otra). Empuja la wave fuerte con una Q y camina al río de mid lane para montar un 3v2 con tu jungler y mid laner.
- **Ardent Censer + Moonstone Renewer (~ minuto 24-28):** Pico de teamfight. Cada escudo de E activa el attack speed de Ardent y la curación acumulativa de Moonstone. Tu ADC escala sobre cualquier matchup con esos dos items detrás suyo.

## Errores comunes

- **Gastar Mantra en lane sobre el poke.** RQ se siente fuerte, pero quemar Mantra en el minuto 4 significa no tener detonación AOE cuando el jungler enemigo gankee (ataque sorpresa desde el río sobre tu lane) en el minuto 6. Guarda RQ para el setup tras un root de W o para enemigos amontonados cerca del drake.
- **Escudarte a ti misma con E.** E sobre ti misma vale como panic button (un cast de emergencia cuando estás a punto de morir), pero el valor del escudo más el Move Speed se desperdician si tu ADC muere detrás de ti. Default: E al ADC; te escudas tú solo si el ADC ya está a salvo.
- **Pokear con Q cuando el assassin enemigo está missing en el mapa.** Karma no tiene dash. Si el jungler rival no está controlado, no avances al rango de Q — te van a coger sin escape y vas a cambiar tu vida por nada.
- **Olvidar el rango de ruptura de W.** Tu **W** enraíza solo si el tether se mantiene durante toda la duración. Si la lanzas a max range y el enemigo da un paso atrás, el tether se rompe y no recibes nada. Lanza W cuando el rival esté committed (después de gastar su dash o escape).
- **Buildear daño en lugar de utility.** Karma puede escalar en daño AP, pero la build enchanter (Ardent Censer, Moonstone Renewer, Redemption) le da al equipo mucho más valor que un Rabadon's. Default a utility salvo que vayas masivamente por delante.

## Consejo avanzado

Usa **RE** (Mantra empoderando Inspire) sobre un aliado que carga hacia adelante — no sobre ti misma. La E empoderada escuda al objetivo más a todos los aliados cercanos y da un Move Speed boost más amplio. Lánzala sobre el ADC en el momento exacto en que el equipo compromete el engage: la Move Speed AOE permite a todo el equipo cerrar la distancia sobre la back line enemiga a la vez, convirtiendo un teamfight normal en un colapso forzado. El truco es cronometrar el RE antes del engage, no después, porque el buff de Move Speed sirve más mientras estás entrando.
