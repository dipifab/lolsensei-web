---
title: "Ezreal Bot Build & Guía — Patch 16.9"
slug: "ezreal-bot"
language: "es"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Guía de Ezreal bot lane para League of Legends Patch 16.9: starter kit, build AD core, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Cada habilidad que impacta a un enemigo acumula un stack de attack speed (hasta 5). Es el motor de DPS auto-attack de Ezreal."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Skillshot lineal de largo alcance, daño físico. Reduce cooldowns al impactar y aplica efectos on-hit — tu botón principal de poke y DPS."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Orbe mágico que se pega a un campeón u objetivo. Detona con el siguiente ataque o habilidad para daño bonus y devolución de mana."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Blink corto + bolt automático. Cooldown largo — es tu única vía de escape, no la malgastes para hacer daño en niveles bajos."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Rayo global lineal que daña fuerte al primer objetivo no-minion. Para pickoffs (eliminar a un enemigo aislado fuera del teamfight), execute o waveclear de emergencia."
      dd_spell_id: "EzrealTrueshotBarrage"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra hard CC single-target a purgar (Malzahar R, Skarner R, Warwick R) — el activo quita el lock-down y sigues kiteando"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC de proyectil telegrafiado (Morgana Q, Ashe R, Blitzcrank Q) — el spell shield bloquea una habilidad y salva tu posicionamiento"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra lanes de poke (Caitlyn, Varus, Xerath support) donde necesitas sustain de lifesteal y un escudo para aguantar trades"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra burst AP fuerte (LeBlanc mid, Syndra, Brand support) — magic resist y daño on-hit mágico extra en cada Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Acumula stacks de attack speed lanzando Q a cada cooldown, kitea a max range con auto-attacks más Q, y snowballea bot lane hasta el spike de 3 ítems al minuto 25-30 donde superas en DPS al carry rival."
  weakness: "Frágil y sin escape salvo E (cooldown largo). Vulnerable a engages fuertes y CC a largo alcance; si fallas Q en lane te quedas atrás porque los stacks decaen tras 6 segundos sin impacto."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Marksmen hiper-agresivos a corto alcance"
      reason: "La Q de Ezreal supera su rango de auto-attack (1150 vs ~525-550). Pokealos fuera de la wave desde distancia segura; necesitan all-in (intercambio total a muerte) para ganar la lane y tu E es un panic button contra su dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Marksmen inmóviles sin dash"
      reason: "Ezreal puede sidesteppear una Q lenta (Sivir Boomerang, Varus Q) mientras coloca la suya. No pueden castigar su waveclear lento porque no cierran la distancia cuando da step up."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Marksmen de scaling con laning débil"
      reason: "El spike de Ezreal entre nivel 2 y 6 es más fuerte que el suyo. El poke con Q los empuja fuera de la wave, llegan a sus core ítems atrasados y pierden su ventaja de scaling."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Marksmen con burst pre-6 frontloaded"
      reason: "Su patrón de trade en nivel 1-3 (auto reset de Jhin, Double Up de MF) supera en daño a Ezreal antes de que cargue la passive. Te obligan a backear pronto y perder tempo en Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Artillería de mayor alcance (poke lane)"
      reason: "Su rango de Q o de trap supera los 1150 de Ezreal. No puede responder sin meterse en su zona de amenaza, así la lane le sangra HP sin dejarle hacer all-in de vuelta."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Tank supports de hard engage"
      reason: "Su engage point-and-click (Leona E, Naut Q, Thresh Q hook) ignora el punto fuerte de Ezreal, el poke a distancia segura. Una vez locked, su E muchas veces no basta para escapar del follow-up."
---

## Resumen

Ezreal es un AD carry de largo alcance que cambia DPS pura de auto-attack por seguridad y poke con skillshot. Su kit gira en torno a clavar **Mystic Shot (Q)** a cada cooldown — cada impacto reduce parte de sus cooldowns, acumula la passive **Rising Spell Force** para attack speed (hasta 5 stacks, un spike de aproximadamente +50% AS) y aplica efectos on-hit como el daño bonus de Kraken Slayer. Tiene la mejor herramienta de escape de cualquier ADC tradicional con **Arcane Shift (E)**, pero el precio es un sustain de lane frágil y una curva de scaling más lenta que ADCs como Jinx o Aphelios.

El game plan es paciente: poke con **Q** desde max range (1150 unidades, más largo que cualquier auto-attack ADC), empuja waves con combos **W**-**Q** cuando el enemigo da step back, y roma a mid con **R** para conseguir pickoffs por todo el mapa. La skill expression vive en la prediction de **Q** (anticipa el vector de movimiento del objetivo — son más fáciles de pegar mientras last-hittean porque se ralentizan ellos mismos para atacar a un minion) y en la disciplina de **E** (no blinkees para hacer daño; guárdala para escapar del engage que llegará igual).

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's da el AD y el lifesteal que necesitas para tradear con **Q** sin caer en HP.

**Core items (en orden):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primer spike DPS. Cada tercera auto hace daño true (daño que ignora armor y magic resist), y la **Q** cuenta como aplicación on-hit. Es tu primera compra incondicional.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed que multiplican los stacks de la passive. Cómpralas tras el primer componente de Kraken.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — extiende tu rango de auto-attack ~150 unidades cuando está cargado, igualando el rango de tu **Q**. Te deja kitear (moverte hacia atrás mientras atacas, manteniendo distancia) desde max range sin dar step forward.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — los basic attacks reducen cooldowns no-ulti. Combinado con el refund propio de **Q**, lanzas una **Q** cada ~2 segundos.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration para late game cuando los tanks de la frontline han stackeado armor.

**Situational items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra hard CC single-target a purgar (Malzahar R, Skarner R, Warwick R). El activo quita el lock-down y sigues kiteando.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC de proyectil telegrafiado (Morgana Q, Ashe R, Blitzcrank Q). El spell shield bloquea una habilidad y salva tu posicionamiento.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra lanes de poke (Caitlyn, Varus, Xerath support). El lifesteal te hace sobrevivir al harass y el overheal shield te da un buffer de HP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra burst AP fuerte (LeBlanc mid, Syndra, Brand support). Magic resist y daño on-hit mágico bonus en cada auto y cada **Q**.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** son la default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables si necesitas más uptime de **R** para snipes cross-map.

**Skill order:** Maxea **Q** primero (es tu motor de daño y DPS), **W** segundo (burst extra sobre objetivos pegados), **E** al final (nunca hace daño suficiente para meterle puntos — se queda como blink). Pon un punto en **R** a niveles 6, 11 y 16.

**Runes:** Primaria **Precision** con **Lethal Tempo** (o **Press the Attack** en lanes más squishy), **Presence of Mind** (sustain de mana), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace**. Secundaria **Sorcery** con **Manaflow Band** (esencial — los costes de mana de Ezreal son brutales sin ella) y **Transcendence**.

## Matchups clave

- **Caitlyn:** Te supera el rango de **Q** con su auto-attack (650 vs tus 550 melee, pero sus traps te zonean fuera). Quédate detrás de minions, nunca pises una trap, y farma con **Q**. Busca el all-in cuando use **Net (E)** para huir de una wave — su cooldown está up.
- **Draven:** Quiere trades (intercambios cortos de golpes) a corto rango. Usa **Q** para empujar la wave, freezala (last-hittear minions sin matar la wave para que se quede bajo tu torre) si vas atrás, y pide ganks tempraneros. Evita sus Spinning Axes — si tiene 2 hachas girando, no le auto-ataques.
- **Lucian:** Mirror match para el trade tempo. Guarda la **E** para cuando él use el **Dash (E)** en plan ofensivo — ahí está committed (totalmente comprometido, sin marcha atrás), y puedes baitearlo bajo torre o seguir con tu burst de **Q**.
- **Jhin:** Su 4ª auto pega un crítico enorme; lleva la cuenta de su munición (cuenta sus autos: 1, 2, 3, y back antes del 4). Castígalo durante la larga animación de reload dando step up y clavando **Q**.
- **Sivir:** Matchup neutro hasta nivel 6. Su **Spell Shield (E)** bloquea tu **Q** — baitéalo primero con un orbe de **W** (barato y rápido), y luego tira **Q** durante la ventana de down.

## Power spikes y condiciones de victoria

- **Nivel 2:** Primera ventana de trade. Con **Q** + **W** detonada con **Q**, haces un chunk de daño que gana casi cualquier trade corto.
- **Nivel 6:** El primer **Trueshot Barrage** desbloquea los roams y la execute pressure (uso de la R para rematar a enemigos low-HP que huyen por el mapa). **R** al mid laner enemigo si backea low; el rango global convierte errores de posición en kills.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer completado (~ minuto 12-14):** Tu DPS prácticamente se duplica. Fuerza un dive 2v2 ahora — cada 3ª auto hace daño true que el support enemigo no puede itemizar contra.
- **Spike de 3 ítems (~ minuto 25-30):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** es cuando superas en DPS a la mayoría de carries desde un rango más seguro. Empuja para Baron y peleas de drake aquí.

## Errores comunes

- **Aguantar la Q para el tiro perfecto.** Los stacks de la passive (el buff de AS al impactar) decaen tras 6 segundos sin un hit. Tira **Q** a los minions para refrescar stacks y refundar cooldown — incluso una **Q** fallada al campeón que pega a un minion vale el mana.
- **Usar E ofensivamente en lane.** **Arcane Shift** tiene cooldown 14-26 segundos; una vez que blinkeas dentro, no te queda nada si el support engagea. Guárdala solo para escapes hasta tener ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** y un lead de kills.
- **Quedarte a max range de R en teamfights.** Tu rango de **Q** es 1150; estar a 1500+ para clavar snipes con **R** te deja fuera del peel del support (la protección que tu support te da contra dives entrantes). Quédate en la segunda posición más lejana, así un flank no te delete instantáneamente.
- **Pokar con Q sin mana.** Si estás por debajo del 30% de mana, empuja la wave y backea. Un Ezreal scaling sin mana es inútil porque cada acción del kit (incluida E para escapar) cuesta al menos 28 mana.
- **Ignorar W en objetivos.** **Essence Flux** se pega a drakes y Baron. Coloca **W**, luego **Q** para detonarla y haz ~250 daño bonus en el contest del smite — un chunk gratis que gana el steal.

## Consejo avanzado

Practica la combo **W**-stick sobre campeones: tira **W** a un enemigo low-HP a través de la fog of war (si tienes vision), e inmediatamente **Q** para detonarla. La detonación devuelve el coste mana de **W** más mana extra, así la combo es esencialmente gratis si entra. En teamfights, pegar **W** sobre el carry rival hace que cada basic attack de tu equipo la detone, transformando un orbo de 50 mana en un chunk de aproximadamente 400 daño en 4 segundos repartido entre varias fuentes. La clave es lanzar **W** *antes* de que arranque el engage, no durante — su velocidad de viaje de 0.25s es demasiado lenta para pillar a un objetivo que ya está moviéndose.
