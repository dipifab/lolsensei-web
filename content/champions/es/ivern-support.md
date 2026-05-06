---
title: "Ivern Support Build & Guía — Patch 16.9"
slug: "ivern-support"
language: "es"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Guía de Ivern support para League of Legends Patch 16.9: build enchanter, vision con brush, root con Q, peel de Daisy y matchups clave en bot."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Support de setup"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "No puede atacar a los monstruos de la jungla, ni ellos a él. Planta semillas en los campamentos que se liberan solos al crecer — oro gratis incluso desde bot."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot lineal largo que enraíza al primer enemigo impactado. Los aliados que ataquen al objetivo enraizado dashan hacia él. Reactiva para dashar tú."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Pasiva: en brush, los autos hacen daño mágico bonus (Ivern y aliados cercanos). Activa: crea un brush en cualquier sitio para vision y zona de daño."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Escuda a un aliado. Tras 1.5s el escudo estalla con daño mágico y slow a enemigos cercanos. Si no impacta a nadie, se renueva por la misma duración."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoca a Daisy, un golem aliado tanky. Su tercer auto consecutivo sobre el mismo objetivo lanza un knockup en onda. Reactiva para reposicionarla."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "contra teamfights tardíos agrupados donde el AOE pesa más que el peel a un objetivo"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico fuerte sobre ti (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con heal-stacking (Soraka, Yuumi, Aatrox, Vladimir bot lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Usa los brush laterales para emboscar: pre-coloca W para vision, lanza Q desde la fog y tu ADC dasha al objetivo enraizado. Tras el 6, roamea mid con Daisy y snowball el mapa."
  weakness: "Squishy, sin peel contra hard engage multi-objetivo. Una Q falla en línea te obliga a backear hasta el cooldown — los 14s de Q rank 1 son la ventana muerta más larga de cualquier support roamer."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery viaja en cada E hacia el ADC y procea con Q root para daño en trades. Manaflow Band paga el spam de E, Transcendence supera 40 de haste para Q más frecuentes, Scorch cierra la ventana de poke en lane estática."
    secondary_rationale: "Resolve secondary: Font of Life se activa con cada Q root — tu ADC heala al atacar al enraizado, convirtiendo un setup en daño más sustain. Revitalize amplifica Aery y el refund de E cuando no impacta a nadie."
    secondary_alternative: "Si tu equipo necesita más roams a mid y el uptime de Flash importa, cambia Resolve por Inspiration con Magical Footwear (boots upgradeadas gratis al minuto 12) y Cosmic Insight (haste de summoner — más Flash e Ignite por partida)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports que avanzan para lanzar skillshots"
      reason: "Tienen que caminar al rango de Q para soltar el hook — la Q de Ivern + dash del ADC castiga el windup con un root garantizado antes de que el hook salga del cast."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mages support inmóviles de poke"
      reason: "No tienen dash. Q desde brush + follow-up del ADC los borra; el W activo da a Ivern una zona vision-y-daño gratis que ellos no igualan sin quemar summoners."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Enchanters puros sin lockdown"
      reason: "Persiguen al ADC con heal y shield pero no traen peel contra un setup root; la Q pilla al carry, sigue el slam de Daisy, y el enchanter no puede deshacer un root de 1.75s."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "Tanks de all-in con engage"
      reason: "Flashan adelante y encadenan CC sobre el ADC antes de que Ivern aterrice la Q. No tiene peel contra engage multi-CC; un solo escudo E rompe al instante bajo una stun chain a 2 objetivos."
    - examples: ["lux", "zyra"]
      archetype: "Mages support de zone control / largo rango"
      reason: "La E de Lux corta los ángulos de brush de Ivern y poke fuera del rango de Q; el seed-and-plant de Zyra zonea mejor que la pasiva W sin avanzar nunca."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Supports de peel anti-CC con cleanse o eat"
      reason: "La E de Morgana spell-shieldea el root de Q por completo, anulando el setup; la W de Tahm Kench come al ADC fuera del radio del slam de Daisy antes del tercer auto."
---

## Resumen

Ivern como support es uno de los picks más insólitos de la bot lane: un enchanter capaz de generar brush donde quiera, enraizar a un campeón a través del mapa e invocar un golem tanky al nivel 6. Su pasiva le impide atacar a los monstruos de la jungla, pero no le impide pasar por la jungla bot side en los resets para plantar semillas de **Brushmaker (W)** sobre Krugs o Wolves — eso es oro gratis mientras tu ADC empuja la wave. Es squishy, no tiene escape y muere en trades 1v1 — pero ningún otro support puede crear un muro de brush en mitad de un fight, negar vision y convertir una sola Q en una kill garantizada como Ivern.

Su game plan: pre-coloca el W brush en el river bot o en el tri-brush antes de que la wave te alcance, lanza la Q desde dentro de ese brush para que el enemigo nunca vea el cast, suelta E sobre tu ADC en el momento que dasha al objetivo enraizado, y tras el nivel 6 rota a mid con Daisy para picks cross-map. Los fights no se ganan por el daño de Ivern — se ganan por sus setups, mientras el carry hace la kill real.

## Build Recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. World Atlas es el único starter de support viable — auto-upgrade por etapas de quest hasta ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** y finalmente ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest item de support, oro vía asistencias y minion executes. No last-hitees minions; deja farmear al ADC.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — el ability haste mantiene Q y E casi siempre disponibles.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Tus shields y heals encadenan un efecto que escala el healing en cada proc consecutivo — ideal para un enchanter que escuda, slowea y vuelve a escudar cada 7-11 segundos.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — cuando E escuda al ADC, la pasiva del Censer le da attack speed y on-hit magic damage. Se suma al bonus de brush de W cuando el ADC pelea dentro o cerca del cespuglio.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — segundo item de shield-trigger. Da al aliado escudado AP y ability haste extra unos segundos.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanse activo sobre el ADC. Resuelve cadenas de CC singular pesado que ningún escudo aguanta.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contra fights tardíos agrupados donde el heal/daño AOE de equipo balancea más que un cleanse de Mikael's.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps de AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo). Una E no peelea a cuatro; el activo del Locket sí.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — cuando van a hard-CCar específicamente a ti (Lux Q, Morgana Q, Zoe E sleep). El primer proyectil es absorbido y vives lo suficiente para soltar Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con heal-stacking (Soraka mid, Yuumi support, Aatrox top). Tu daño mágico aplica el corte de heal en cada hechizo.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** por defecto. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** son aceptables en comps de mucho roam donde la velocidad de rotación importa más que los cooldowns en fight.

**Skill order:** Sube **Q** al nivel 1 para cheese-invade en brush nivel 1, luego maxea **E** primero (el escudo escala, el slow corta los dives), **Q** segundo (menos cooldown = más roots), **W** último. Pon punto en **R** a niveles 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** con **Font of Life** y **Revitalize**.

## Matchups clave

- **Leona / Alistar:** Hard counter. Su flash-engage encadena CC sobre el ADC antes de que tu Q pueda salir. Quédate al rango máximo del W brush, no patees nunca entre waves donde su flash llega, y pre-escuda al ADC cuando sus summoners estén up.
- **Thresh:** Skill matchup. Ambos supports buscan setear un único hook/root para una kill, pero Ivern gana la guerra del rango (Q a 1125 unidades, hook de Thresh a 1100). Quédate fuera del rango del hook, lanza Q desde brush; si hookea él primero, suelta E sobre el ADC y aléjate.
- **Lux:** Bully de lane. Te poke con E-Q mientras tú no tienes nada que devolver — tu Q es setup de kill, no herramienta de poke. Trade solo cuando su Q está en cooldown; trae Banshee's Veil si sigue clavando el binding.
- **Yuumi:** Pick gratis. Tiene que despegarse para lanzar skillshots, y en ese momento es un objetivo de 600 HP sin escape. Q al detach, ADC dasha, kill gratis — repite cada 14s.
- **Pyke:** Lúchalo en brush. Tu W pasiva potencia los autos tuyos y del ADC en cespuglio; Pyke pierde todos los trades en brush porque el windup de su Q es visible mientras tu Q desde dentro del W-colocado está totalmente oculta.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + E):** Primera ventana de all-in. Con un punto en Q para el setup y E para escudar el dash, tú y el ADC cambiáis un Flash garantizado por la barra HP del ADC enemigo. Pushea el nivel 2 hitting juntos a los casters de la segunda wave.
- **Nivel 6 (Daisy! online):** Ventana de roam cross-map. Daisy es lo bastante tanky para tankear aggro de torre 4-5 segundos, y su tercer auto knockup es engage cuando tu ADC tiene Flash. Roamea mid en cuanto tengas Daisy y la wave shoveada.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completado (~ minuto 13-15):** Las cadenas de shield/heal escalan. En cualquier fight que dure más de 4 segundos, tu output de healing supera al del support enemigo aunque sea Soraka o Sona.
- **Powerspike a 3 items (Moonstone + Boots + Ardent o Staff, ~ minuto 22-24):** Fuerza fights por objetivos. Tu ADC pega más fuerte y más rápido que el suyo gracias a tus shield triggers, y el cooldown de Daisy R baja con cada item.

## Errores comunes

- **Last-hittear minions.** El proc de execute de World Atlas te da el oro aunque la kill la haga el ADC — no le robes CS. Ponte una fila de minions detrás del ADC salvo que estés seteando un freeze.
- **Whiffear Q a largo rango sin follow-up.** Q son 14s al rank 1 — un cast fallado son 14 segundos sin botón de kill. Si el enemigo la está esquivando, camina primero a un brush y lanza desde un ángulo más cerrado que no espera.
- **Castear W brush en fights en vez de pre-colocarla.** Un brush creado en fight es apenas vision — el valor está en pre-colocarla: deja una en tri-brush 5 segundos antes de un roam, o en mid-river antes de una call por Drake. Brush en fight es reactivo cuando el kit te quiere proactivo.
- **Soltar Daisy a máximo rango en teamfight.** Daisy debe alcanzar a un objetivo y aterrizar tres autos consecutivos para el knockup. R a 1500 unidades = camina 4 segundos antes del primer auto — para entonces el fight terminó. R detrás de la línea enemiga, no "para hacer daño".
- **Intentar peelear uno-vs-muchos solo con E.** E escuda a un objetivo. Contra AOE engage que pega ADC + mid laner + tú, un escudo no llega. Planea Locket of the Iron Solari desde el draft cuando veas la wombo comp.

## Consejo avanzado

Usa el **W brush activo** para fabricar ángulos de Q que el enemigo no puede esquivar. Patrón estándar: coloca el W brush 600 unidades delante de ti, camina dentro del cespuglio (pasas a ser invisible al enemigo si no tiene vision en el patch), lanza Q desde dentro del brush — el proyectil parte desde una posición que el enemigo no podía predecir porque no ve el cast. Es funcionalmente un root gratuito a 1125 de rango sin necesidad de fog, y por eso Ivern brilla en duos con Caitlyn, Senna o Jhin: cualquier ADC que quiere atacar de lejos recibe un dash gratis a un setup de kill garantizado que el enemigo no puede preparar.
