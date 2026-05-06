---
title: "Corki Bot Build & Guía — Patch 16.9"
slug: "corki-bot"
language: "es"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Guía de Corki bot lane para League of Legends Patch 16.9: build de ADC híbrido, runes, matchups 2v2 clave, power spikes, errores comunes y consejo avanzado."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Una parte del daño de los basic attacks se convierte en true damage. DPS constante que ignora armor y magic resist — la razón para apilar attack speed e items on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bomba de área dirigida que hace daño mágico y revela brevemente a los enemigos. Sirve para last-hit cuando estás zonado, checkear bushes y abrir cada trade de poke."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash corto que deja un rastro de fuego. Tu única herramienta de movilidad: úsalo para escapar, gap-close o esquivar un skillshot. Nunca lo gastes en waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cono channellado frente a Corki: hace daño y reduce armor y magic resist de los enemigos golpeados. Suma DPS sostenido y ablanda a los tanques para los misiles de R."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Misil de larga distancia que explota al impactar. Acumulas hasta 7 cargas; cada tercera es una Big One con burst extra. Tu poke principal y tu execute."
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra front line con 2+ tanques (Sion, Ornn, Maokai): armor pen pesada para que el DPS sostenido siga cortando"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que apilan curación (Soraka, Aatrox, Vladimir, Dr. Mundo): aplica grievous wounds y reduce el heal a la mitad"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Brand support, Veigar, Syndra mid): el escudo mágico absorbe una full combo y te deja salir con W"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra ultis single-target que te lockean (Malzahar R, Skarner R, Mordekaiser R): el active limpia la suppression que te deletearía"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Sobrevive el 2v2 hasta dos items con poke de R y sustain de Q, después carrya los teamfights late con autos Manamune-stacked y Big Ones de R desde la backline."
  weakness: "Squishy con un solo dash. Lanes early agresivas (Draven, Lucian + engage support) lo shovean del CS antes de Trinity, y las habilidades anti-projectile (Yasuo Wind Wall, Braum E) anulan el poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaria: Fleet Footwork procca con los autos (que Corki spammea por el true damage de la passive) y entrega heal más burst de movimiento — el sustain en lane que necesitas para un 2v2 largo. Triumph y Coup de Grace cierran kills, Legend: Alacrity apila attack speed."
    secondary_rationale: "Inspiration secundaria: Magical Footwear retrasa la compra de botas pero te da stats antes en otros slots; Cosmic Insight añade cooldown de summoner spells (Flash y Heal más frecuentes), la palanca de supervivencia más grande del 2v2 bot."
    secondary_alternative: "Contra lanes de poke pesado (Caitlyn + Lux, Ezreal + Karma) donde no puedes permitirte el delay de botas de Magical Footwear, cambia Inspiration por Sorcery con Manaflow Band (mana sustain en el spam de R) y Gathering Storm (AP gratis al late en Q y Big Ones)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hypercarries de corto rango sin escape"
      reason: "Corki los out-rangea pre-Trinity con poke de R a 1225 y un W que ellos no tienen. Tienen que quedarse en rango de last-hit, y Corki los desangra antes de su power spike de hyper-carry."
    - examples: ["senna", "ezreal"]
      archetype: "ADCs de poke estático"
      reason: "Rango parejo, pero Corki tiene un dash más una Q de área instantánea, mientras que Senna y Ezreal pokean con un único proyectil. Puede W sobre un minion que comió Q y devolver el trade sin gastar cooldowns."
    - examples: ["sivir", "ashe"]
      archetype: "ADCs sin escape point-and-click"
      reason: "Sivir Spell Shield solo bloquea una habilidad — come Q y el siguiente misil entra gratis. Ashe no tiene dash. Corki snowballea el matchup con repositioning de W al que no pueden responder."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "ADCs de lethality-burst early-game"
      reason: "Out-tradan a Corki en los primeros 6 niveles y snowballean con kills de lane. Corki no puede duelarlos pre-Trinity, y cada W usada agresivo se castiga con sus patrones de dash-reset."
    - examples: ["lucian", "tristana"]
      archetype: "Lanes multi-dash con auto-trade"
      reason: "La E de Lucian y la W de Tristana entran y salen del rango de auto de Corki a placer. Lucian además out-escala el true damage de la passive con su cadena auto-Q en los primeros niveles, ganándole de frente."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blockers (off-meta bot)"
      reason: "Wind Wall come la Q y el barrage entero de R. Aunque estos campeones son off-meta en bot, el matchup es duro porque dos tercios del daño de Corki en un trade desaparecen."
---

## Resumen

Corki bot es un marksman híbrido (carry a distancia que mezcla daño físico y mágico) que juega la lane como una mage-carry: rasca HP enemigos desde lejos ("poke") con **Missile Barrage (R)** a 1225 unidades, mata minions y harassea (daño pequeño repetido) con **Phosphorus Bomb (Q)**, y cuando **Trinity Force** y **Manamune** están completos (fully built) carrya los teamfights late con auto-attacks que aplican una parte como true damage (daño que ignora armor y magic resist) gracias a **Hextech Munitions (P)**. El rol le sienta porque un support puede comprarle el tiempo early que necesita para escalar (ganar poder según se completan los items) y peelar (proteger al carry de divers que entran a matarlo) mientras él compromete su único dash, **Valkyrie (W)**, solo en oportunidades reales.

Plan de partida en una línea: tradear (intercambiar ráfagas cortas de daño) con R + Q desde rango máximo para drenar al 2v2 enemigo, nunca gastar W sin un follow-up planeado, y llegar a un late game donde los autos potenciados por Manamune más los Big Ones de R (cada tercer misil de R es más fuerte) one-shottean (matan en una combo) a los squishies de la backline (los carries enemigos que se quedan lejos del fight).

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La blade da lifesteal (parte del daño infligido te cura) que combina con el passive on-attack y aguanta los trades early de Q + auto mejor que Doran's Ring para un ADC.

**Items core (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un componente de Trinity) procca (dispara un efecto de daño extra) en cada Q y cada misil de R, más AD, attack speed, ability haste (reducción de cooldown) y movement speed. El power spike único más grande del champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune se transforma lentamente en una versión más fuerte llamada Muramana según gastas mana; una vez "stacked" (transformado por completo) suma daño bonus en cada auto y cada habilidad que cuesta mana, incluyendo cada misil de R.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed plano que escala con Trinity y con el true damage on-hit del passive. Bota por defecto para Corki bot.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — tu primer auto sobre un enemigo ("auto energized") hace daño bonus y llega más lejos que el rango normal. El crit chance encaja con el perfil de stats de Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed más crit (chance de que los autos hagan daño extra) para DPS sostenido a través de **Gatling Gun (E)** y del true damage on-hit del passive.

**Items situacionales:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra front line con 2+ tanques (Sion, Ornn, Maokai): armor pen pesada para que el DPS sostenido siga cortando.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps que apilan curación (Soraka, Aatrox, Vladimir): aplica grievous wounds y reduce el heal a la mitad.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP fuerte (Brand support, Syndra mid): el escudo mágico absorbe una full combo y te deja salir con W.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra ultis single-target que te lockean (Malzahar R, Skarner R, Mordekaiser R): el cleanse activo rompe la suppression que te borraría.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si el equipo enemigo tiene 3+ amenazas AD apuntándote en fights.

**Skill order:** Maxea **Q** primero (poke, waveclear, daño mágico), **E** segundo (DPS más shred de armor y magic resist), **W** al final (utility). Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Primaria **Precision** con **Fleet Footwork**, **Triumph**, **Legend: Alacrity** y **Coup de Grace**. Secundaria **Inspiration** con **Magical Footwear** y **Cosmic Insight**, o **Sorcery** con **Manaflow Band** y **Gathering Storm** contra lanes de poke pesado.

## Matchups clave

- **Caitlyn:** Te out-rangea. Quédate detrás de minions para negar sus setups de trampas, esquiva su Q lineal side-steppeando (moviéndote de lado) en el cast indicator (la línea visual que aparece en el suelo cuando lanza), y nunca te acerques a un muro donde su Q ricochete (rebote) y haga daño bonus. Guarda W para escapar de su R execute cuando estés low.
- **Draven:** Early game más duro. Out-trada en niveles 1-5 y snowballea (la ventaja inicial crece) con kills de lane. Concede CS (last-hits = creep score = oro) para mantenerte vivo, pingea ventanas de gank cuando dropea sus Spinning Axes, y nunca tradees contra un hacha en vuelo.
- **Lucian:** Quiere entrarte con E (dash). Q'lo cuando comprometa el dash, así el slow más el CC (crowd control = stuns, slows, roots) del support voltea el trade. Nunca auto-tradees a melee; el doble disparo de su passive bursta más allá de la ventaja del true damage.
- **Jhin + Lulu / Senna + Tahm:** Lanes de disengage a larga distancia (composiciones diseñadas para romper tu engage con escudos y CC). Tienes que ganar el all-in al level 6 o stallear hasta ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**. Pushea la wave con Q + autos y busca un setup de gank con R + W del jungla.
- **Samira:** Opresor de all-in al level 6 (su ulti fuerza un fight del que no puedes retirarte). Compra ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** si su R cae una sola vez en tu equipo — el cleanse activo (quita un debuff) rompe la cadena. Pre-6 puedes igualarla en trades; post-6 disengagea con W hasta que tus Big Ones de R superen su rampa de daño.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + W o Q + E puedes castigar un mal posicionamiento enemigo con un trade Q-AA-AA ("AA" = auto-attack base) y follow-up de W si el support enemigo está comprometido adelante.
- **Nivel 6:** El primer **Missile Barrage (R)** desbloquea el all-in (un fight comprometido del que no te retiras). Con stocks de R más Trinity Force pronto, una combo Q-AA-R-R-R más CC del support mata a la mayoría de ADCs a low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 13-15):** Sheen procca en cada Q y cada misil de R, convirtiendo el poke en kill threat. Es el momento para all-in o para tomar un fight de Drake si la vision (wards en el mapa) está limpia.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minuto 18-22):** Muramana añade daño bonus en cada acción que cuesta mana; el daño en teamfight casi se duplica respecto al pre-stack. Fuerza fights de objetivo (Drake, Baron) aquí.

## Errores comunes

- **Spammear R off-cooldown para waveclear.** Las R son un stock finito; si las vacías en minions, en el siguiente teamfight tienes cero burst en el peor momento. Pushea con Q + autos; guarda 4+ misiles para los objetivos.
- **Usar W agresivo sin follow-up.** W es tu única fuga. Dasharte para cerrar una kill que necesitaba un auto más es la forma clásica en que Corki muere — si no puedes matarlo con el mana y los cooldowns que te quedan, no committeas (no te comprometas en el trade).
- **Auto-tradear a melee sin follow-up del support.** El true damage del passive de cerca tienta, pero la pool HP de Corki es squishy (baja y frágil). Quédate a rango de R cuando el support enemigo tiene CC duro arriba.
- **Rushear ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge como 2º item.** Infinity Edge necesita crit chance alta para funcionar, y los tres primeros items de Corki (Trinity, Manamune, Berserker's) dan muy poco crit. Mantén el orden Trinity → Manamune → Rapid Firecannon → Phantom Dancer; Infinity Edge solo como 5º o 6º item.
- **Recallear con stocks de R sin gastar.** Los stocks se resetean al morir pero persisten al recall — dispara los misiles restantes a una wave o torre antes de backear en vez de dejarlos sin usar.

## Consejo avanzado

Trackea y explota el ritmo de la **Big One**. Cada tercer misil de R (el "Big One") hace mucho más daño que los dos regulares. Antes de un teamfight, cuenta los misiles que tienes en stock — si el siguiente es una Big One, guárdala para el target prioritario; si la acabas de gastar, dispara los dos misiles filler a una wave o torre para que la Big One recargue lista para el engage. Los jugadores que disparan R a ciegas desperdician Big Ones en minions; los que trackean el conteo one-shottean a los squishies (carries de bajo HP) cuando importa.
