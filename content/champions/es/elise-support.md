---
title: "Elise Support Build & Guía — Patch 16.9"
slug: "elise-support"
language: "es"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Guía de Elise support para League of Legends Patch 16.9: ángulos de engage con Cocoon, build path por Bloodsong, matchups clave, power spikes y un consejo final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Dos formas. Human: cada ability que impacta genera un Spiderling dormido. Spider: las AA hacen daño mágico extra y curan a Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke targeteado que escala con la HP actual del enemigo (anti-tank). Spider: salto que escala con HP perdida (ejecuta targets a baja vida)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lanza un Spiderling que avanza y explota cerca de los enemigos (slow + daño AOE). Spider: Elise y sus pets ganan attack speed para DPS sostenido."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot lineal que stunea al primer enemigo impactado. Tu herramienta de engage. Spider: Rappel — elevación corta intargeteable y caída con bonus damage."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Ulti toggle que alterna entre Human (caster a distancia) y Spider (skirmisher melee con movement speed y enjambre de Spiderlings). Cambio gratis sin cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (Ahri charm, Lissandra R) — el spell shield bloquea un engage y permite recocoonar"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra hard CC pesado (stuns, knock-ups) — botas con tenacity (reduce duración del CC)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps con burst AOE (Yasuo + Malphite, wombo Orianna) — el active escuda al equipo entero"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "cómpralo con 10+ kills/asistencias de ventaja sin morir — convierte el snowball en AP puro"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Engage con E cocoon desde la fog of war para abrir el all-in del ADC. Mantente relevante en late stuneando al carry rival dentro de la ventana de Aftershock y Liandry's Torment."
  weakness: "Todo depende de acertar el cocoon: un skillshot fallado te deja en melee range sin escape. Outranged por hook supports que te agarran antes de que cast."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Aftershock se activa con el stun de cocoon y da armor + MR más una onda AOE retardada — la ventana de supervivencia tras engagear desde melee. Font of Life cura al ADC en cada cocoon, Bone Plating amortigua all-ins early, Revitalize amplifica heal/shield."
    secondary_rationale: "Sorcery secundaria: Manaflow Band sostiene el maná en la fase de lane (cocoon cuesta 50-90 maná por cast) y Transcendence empuja el Ability Haste por encima del 40%, así cocoon vuelve antes en peleas largas."
    secondary_alternative: "Contra lanes de poke o all-in pesado (Lucian + Nami, Draven + Thresh), cambia Sorcery por Inspiration con Magical Footwear (8304, botas gratis al minuto 10) y Cosmic Insight (8347, reduce CD de summoner spells); el Flash extra te salva de engages fallados."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Enchanter supports squishy sin tenacity"
      reason: "El stun largo de cocoon ignora su kit de utility. No tienen escape tipo Flash, y el burn de Liandry's Torment (daño extendido en pocos segundos) castiga sus shields y heals."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Carries ranged inmóviles sin dash"
      reason: "Cocoon desde un arbusto los pilla parados. Una vez stuneados, al nivel 3 W (slow) + Q (anti-HP) + el burst del ADC mata antes de que Flash pueda responder."
    - examples: ["draven", "samira"]
      archetype: "Carries agresivos que pisan adelante por kills"
      reason: "Su presión de kill los obliga a cruzar el equilibrio de wave (la safe lane line). Cocoon castiga el paso adelante, Aftershock voltea el all-in (commit total) a tu favor."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports que outrangean cocoon"
      reason: "El hook de Blitzcrank (~1100) supera el cast range de E (1075). Engagean primero sobre ti, eliminando tu engage y dejándote en melee con Spider form sin escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell shields que bloquean cocoon"
      reason: "Una sola carga de Spell Shield se come tu stun completo. Sin cocoon no hay setup, y el follow-up del equipo se estanca hasta que vuelva el cooldown."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Engage supports tanky con CC point-and-click"
      reason: "Su engage es targeteado (sin skillshot que esquivar). Se quedan pegados a tu ADC más tiempo del que tú puedes contenerlos, y tu daño mágico no los mata a través del armor."
---

## Resumen

> **Mini-glosario (léelo una vez):** **ADC** = Attack Damage Carry, el bot-laner que hace daño físico (Caitlyn, Jinx). **AP** = Ability Power, la stat que escala las habilidades mágicas. **MR** = Magic Resist, defensa contra magia. **CS** = Creep Score, número de minions que has matado. **CC** = Crowd Control, cualquier efecto que detiene a un campeón (stun, slow). **Engage** = iniciar la pelea. **Disengage** = retirarse. **Trade** = intercambio breve de daño. **All-in** = commit total. **Peel** = proteger a tu carry. **Kite** = moverte hacia atrás mientras atacas.

Elise support es un híbrido engage-mage: lanza **Cocoon (E)** desde un arbusto o desde la fog of war (la zona de mapa sin visión) para enrootar al carry rival, y luego compromete con **Spider Form (R)** para follow-up damage y disengage intargeteable vía **Rappel**. Cambia la seguridad del enchanter por kill pressure pura — cada cocoon acertado entre niveles 3 y 6 debería convertirse en kill o en un Flash quemado. Su debilidad es la otra cara de su fuerza: sin cocoon a tierra, no tiene engage ni heals a los que recurrir.

El game plan es presionar bot lane los primeros 6 niveles, cerrar Bloodsong y **Sorcerer's Shoes** entre el minuto 12-14, y rotar a mid con el boost de movement speed de **Spider Form**. En late game el rol cambia: se vuelve una flank assassin que espera el error de posicionamiento del carry rival, lanza cocoon desde un ángulo lateral y deja que el equipo cierre.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item de support quest: te da gold de support con el tiempo siempre que no hagas last-hit a los minions tú misma) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (en orden):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade final de la línea support quest (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). La variante AP: cada cuarto AA contra un campeón hace daño mágico extra. Sinergiza naturalmente con los autos rápidos de Spider form en un dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana. Crucial porque como support tienes menos gold que el mid laner, así que la penetración rinde más que el AP puro en early.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer big AP item. El burn HP-based (daño que escala con el HP máx del target, extendido en unos segundos) castiga a las frontlines tanky que intentan absorber tu cocoon stun.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — cada habilidad slowea. Convierte tu **W** en herramienta de chase y stackea con cocoon stun para fiabilidad de follow-up.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — item de supervivencia. Tras engagear en melee range, el active te da 2.5 segundos de stasis (no puedes moverte, recibir daño ni ser targeteada), tiempo suficiente para que el equipo limpie.

**Items situacionales:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC single-target (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap cuando el equipo rival lleva hard CC pesado.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps con AOE burst (combo Yasuo + Malphite, wombo Orianna).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — solo cuando vas 10+ kills/asistencias por delante con cero muertes. El riesgo de perder stacks es real; no lo compres si vas en desventaja.

**Botas:** Sorcerer's Shoes es el estándar. Mercury's Treads si el equipo rival tiene tres o más fuentes de hard CC (stuns, knock-ups).

**Skill order:** Sube **E** primero al máximo (el stun de cocoon es tu trabajo), **Q** en segundo (daño), **W** al final. Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**.

## Matchups clave

- **Blitzcrank:** El peor matchup de lane. Su Q outrangea tu E por unas 25 unidades. Quédate detrás de tu ADC, no des nunca un paso adelante para lanzar cocoon — te hookea en el momento que committeas.
- **Thresh:** Hook duel que puedes sobrevivir pero rara vez ganar. Espera a que tire y falle su Q, después camina adelante para landar cocoon en la ventana de recovery. Evita meterte en el arco de la lantern cuando engagea sobre tu ADC.
- **Soraka:** Lane gratis. Su silence es de corto alcance y su heal es interrumpible por cocoon. Engagea al nivel 3 con maná lleno; el trade quema su HP más rápido de lo que ella puede curarse.
- **Leona:** Gana el all-in pero pierde la guerra de poke. Quédate a max range de cocoon, lanza E para interrumpir la animación de su **W** (Eclipse) y retrocede. No commitees a no ser que puedas landar cocoon primero.
- **Sivir:** Su **E** (Spell Shield) bloquea el cocoon entero. Cebá el shield lanzando primero la **W** spiderling; una vez que ella shielda la W, tu cocoon entra limpio durante todo el cooldown del shield (~12 segundos).

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **E** + **Q**, ya tienes setup de all-in. Empuja el nivel 2 primero contra supports melee y engagea al primer cocoon que landes.
- **Nivel 6:** Primer **Spider Form (R)**. El potencial de disengage y re-engage se duplica; puedes divear a un enemigo a baja HP bajo torre usando Rappel como herramienta de re-positioning.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 13-15):** Roam window. Ve a mid para un 3v2 si tu wave está empujada bajo la torre rival. El snipe a mid con **Cocoon (E)** + cierre con **Spider Q** mata casi siempre a cualquier mid laner squishy.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ minuto 18-20):** Lista para teamfight. Tu trabajo ahora es flankear la backline desde los arbustos laterales; landa cocoon sobre el ADC rival, **Aftershock** se activa con el stun, tu equipo limpia.

## Errores comunes

- **Lanzar E cocoon como poke.** Misma regla que Elise jungle: cocoon es engage, no harassment. Espera a que el carry pise adelante; un cocoon fallado te deja 12 segundos sin defensas.
- **AA a los minions en lane.** Los items de support castigan el CS a minions — last-hittear cancela el income de gold del World Atlas y mata de hambre a tu ADC. Usa **W** sobre la wave solo cuando la siguiente wave esté volviendo.
- **Engagear sin follow-up del ADC.** Mira la barra de mana y los cooldowns del ADC antes de tirar el cocoon. Si están sin maná o sin **Flash**, no engagees; en el mejor caso vas a tradear 1 por 1.
- **Olvidar comprar ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) wards en cada base.** Como support, eres tú quien pone la visión en el mapa. Wards en los arbustos del río controlan los ángulos de engage de tu jungla. Usa ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens para barrer wards rivales antes de los objetivos.
- **Divear con R sin escape disponible.** Spider form no tiene escape integrado. Si **Flash** y **Rappel** están abajo, no commitees al dive bajo torre; el ADC rival te kiteará (se mueve atrás mientras ataca) hasta que la torre te mate.

## Consejo avanzado

Prepara los ángulos de cocoon con visión antes de que empiece la pelea. Una ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** colocada en el arbusto lateral te da un engage angle gratis: entra al arbusto desde la fog, tira cocoon mientras el ADC rival da un paso adelante para last-hittear, después **Spider R** + Rappel drop. La secuencia entera es invisible desde la perspectiva enemiga hasta que el cocoon impacta. Es la jugada de mayor impacto que Elise support puede hacer, y la mayoría de jugadores de bajo rank la ignora porque engagea derecho desde lane en lugar de desde ángulos preparados.
