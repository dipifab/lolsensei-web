---
title: "Jhin Bot Build & Guía — Patch 16.9"
slug: "jhin-bot"
language: "es"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Guía Jhin bot lane para League of Legends Patch 16.9: starter kit, build lethality-crit, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "El revólver de Jhin solo dispara 4 balas y luego debe recargar. La 4ª siempre crittea y ejecuta a enemigos con poca HP. Los crits dan también un breve burst de Move Speed."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Disparo dirigido que rebota hasta 4 veces. Cada kill aumenta el daño del siguiente rebote. Poke fiable y waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Skillshot lineal de larguísimo alcance. Enraíza si el target ha sido golpeado hace poco por ti o un aliado. Úsala tras una auto-attack o un engage del support."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Trampa lotus invisible que se arma tras un breve delay. Ralentiza al pisarla y luego explota. Sirve para zonar, cubrir flancos y confirmar los root de W."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Ulti channellada: 4 disparos a larguísimo alcance que se detienen en champions, los ralentizan y hacen más daño cuanto menos HP tienen. El 4º crittea."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "contra backline rival squishy (sin tanks): la lethality amplifica el burst del W-root y el Move Speed activo ayuda a roams"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que apilan curación (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds reduce a la mitad sus heals durante tu R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target que cancela tu R (Blitzcrank hook, Morgana Q, Ashe R): el spell shield te regala el cast"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "cuando vas por delante y necesitas lifesteal + un escudo para sobrevivir fights largos sin un peeler (aliado que protege al carry)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra divers de all-in (Diana, Kha'Zix, Master Yi): el Move Speed en combate y el ghosting por minions ayudan a kitear"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Acierta el crit del 4º disparo en cada trade y encadena W-roots con tu support para clavar targets a larga distancia. Posiciónate para mantener limpias las líneas de R en peleas por objetivos."
  weakness: "Attack speed bloqueada y sin dash. Hard counter de divers móviles y tanks de engage; si separan a tu support no tienes escape más allá de Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Marksmen inmóviles a larga distancia"
      reason: "Comparten con Jhin la falta de dash pero tienen ventanas de burst más cortas. Una vez Jhin entra en el ritmo del 4º disparo con follow-up del support, gana los trades directos a partir del level 6."
    - examples: ["sivir", "kalista"]
      archetype: "Marksmen de reset/movilidad que viven en corto"
      reason: "Su kit pide rango corto; Jhin los W-rootea desde fuera de su rango de auto-attack y sigue con E (la trampa lotus) para cerrar la kill antes del reset."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters pure-heal en bot lane"
      reason: "El W-root + R execute de Jhin castiga rápido a los heal-bots con poca HP. Con Mortal Reminder online (Grievous Wounds reduce las cures a la mitad) su plan se hunde."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Lane bullies agresivos en level 1-3"
      reason: "Burstean a Jhin durante sus ventanas de reload (tras cada ciclo de 4 disparos el revólver debe recargar). Jhin no tiene mobility para disengage y su W root necesita un setup que solo no puede crear a level 1."
    - examples: ["kai-sa", "tristana"]
      archetype: "Hypercarries móviles con escapes integrados"
      reason: "Sus dashes propios (Kai'Sa E reposition, Tristana W jump) esquivan los W-roots e interrumpen los cast windows de la R. Escalan a un 1v1 del que Jhin no puede kitear."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Tank supports de hard-engage"
      reason: "Aplican CC point-and-click sobre Jhin durante los frames de reload; él no tiene dash para peelarse y su W necesita que ya estén dañados para enraizar."
---

## Resumen

Jhin es un marksman a larga distancia que juega como un francotirador, no como un carry de DPS sostenido (damage-per-second, daño constante en el tiempo). Su revólver **Whisper (Pasiva)** dispara solo 4 balas entre recargas, pero la 4ª siempre crittea y ejecuta a targets con poca HP — así que cada trade (un intercambio breve de golpes en lane, no un intento total de kill) se construye en torno al timing de esa 4ª bala sobre un campeón herido. No tiene dash y la attack speed está bloqueada, así que el posicionamiento y el setup importan más que el APM mecánico.

Su plan: pokear con **Q** y auto-attacks hasta que el support engage, y luego encadenar **W**-roots en un crit del 4º disparo. Tras el level 6, **R** convierte los picks (eliminar a un enemigo aislado fuera del teamfight) y los asedios a objetivos en kills desde fuera del rango del equipo rival. Si tu front line te peelea (te protege de los divers), outscalas a casi todos los duos de bot lane antes del minuto 25.

## Build Recomendada

**Starting items:** Doran's Blade + 1 Health Potion. Salta Doran's Shield salvo que la lane sea un matchup pesado de auto-attack como Draven o Lucian, donde la HP extra vale más que el daño bonus.

**Core items (en orden):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primer spike de burst. El execute por debajo del 5% HP encaja con el 4º disparo execute de Jhin y con su R; cierras kills que tu equipo perdería de otra forma.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — los stivales con attack speed son la elección estándar para marksmen; la attack speed bloqueada de Jhin escala en daño por disparo, así que la AS se traduce en daño puro.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — el disparo energized añade poke a larga distancia (encaja con la identidad de Jhin) y el rango bonus te deja golpear champions antes de que entren en su propio rango de ataque.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — el 4º disparo de Jhin es un crit garantizado, así que el multiplicador de daño crit de IE lo convierte en un botón one-shot contra squishies.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration para el late game cuando la front line rival compre items defensivos.

**Items situacionales:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primer item alternativo cuando el equipo rival no tiene tanks. La lethality (armor pen plana) hace que el burst del W-root borre squishies en 1-2 disparos en skirmishes tempranas, y el Move Speed activo ayuda a posicionarse para los cast windows de R.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — sustituye a Lord Dominik's contra comps que apilan curación (Soraka, Aatrox, Vladimir). Grievous Wounds reduce las heals a la mitad durante la ventana de execute de R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — cómpralo de 3º o 4º contra CC duro single-target que cancele el channel de tu R (Blitzcrank hook, Morgana Q, Ashe R). El spell shield bloquea una habilidad y te deja terminar el cast.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — cuando vas por delante y necesitas lifesteal más un escudo para sobrevivir a fights largos sin un peeler dedicado.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra divers de all-in (Diana, Kha'Zix, Master Yi). El Move Speed en combate y el ghosting por minions te ayudan a kitear (moverte hacia atrás mientras atacas) hasta que tu equipo te peele.

**Botas:** Berserker's Greaves por defecto. Boots of Swiftness solo son la elección correcta cuando el equipo rival apila slows que no puedes evitar (composición tipo Ashe + Nautilus + Anivia).

**Skill order:** Maximiza primero **Q** (DPS principal y waveclear), luego **W** (fiabilidad del root y daño base) y por último **E** (utility, basta un punto para el slow). Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Primaria **Precision** con **Fleet Footwork** (movimiento + sustain en lane), **Presence of Mind** (devolución de mana en la ulti), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace** (daño extra en targets con poca HP — encaja con el 4º disparo execute de Jhin). Secundaria **Sorcery** con **Absolute Focus** y **Gathering Storm** para el scaling tardío.

## Matchups clave

- **Caitlyn:** Te out-rangea con auto-attacks pero pierde todos los all-in (un compromiso total a por la kill, no solo un trade rápido) en cuanto tienes 4 stacks de pasiva. Quédate detrás de los minions, hazle Q-poke cuando falle traps y W-rootéala si tu support la toca primero.
- **Draven:** Lane bully. Evita trades de auto-attack en level 1-3; gana los DPS exchanges directos. Espera al poke de Q cuando esté ocupado stackeando hachas; si sobrextiende, tu crit del 4º disparo lo castiga duro.
- **Lucian:** Burstea durante tus ventanas de reload. Vigila tu contador de 4 disparos (el icono del revólver muestra los disparos restantes) y no inicies trades con el disparo 3 o 4 — recarga primero, luego engage.
- **Sivir:** Su spell shield bloquea tu W-root. Cebale el shield primero con Q y lanza W cuando esté en cooldown. Tras el 6, su R le permite chasarte, así que pelea solo con CC del support para follow-up.
- **Soraka / Yuumi:** Supports pure-heal. Compra Mortal Reminder de 3er o 4º item; sin Grievous Wounds (el debuff que reduce las cures a la mitad) no las matas por muchos disparos que aciertes.

## Power spikes y condiciones de victoria

- **Level 2-3:** Con **Q** y **W** tienes el patrón de all-in level 2 más fuerte de la lane: engage del support → AA → Q → W root para el crit del 4º disparo. Fuerza un fight la primera vez que llegues a level 2 antes que el rival.
- **Level 6:** **Curtain Call** se desbloquea. Puedes cerrar kills iniciadas por tu jungla en el río o picar a un enemigo con poca HP a una pantalla durante un recall. Ten siempre R lista antes de que arranquen los fights por objetivos.
- **The Collector completado (~ minuto 11-13):** Spike de primer item. El 5% de execute te deja cerrar kills que abre tu support. Esta es la ventana en la que snowballear la lane (convertir una ventaja temprana en ventaja de items, que pasa a ser ventaja de kills) es más fácil.
- **Infinity Edge online (~ minuto 28-32):** Spike de tres items. Tu 4º disparo one-shotea a casi todos los champions no-tank. Fuerza teamfights por objetivos ahora — Jhin late con IE + Rapid Firecannon golpea backlines (los carrys detrás de los tanks) desde fuera de su rango de R.

## Errores comunes

- **Auto-atacar cuando el disparo 4 está cargado contra un tank.** El 4º disparo execute se desperdicia en frontliners full HP. Guarda el 4º para un target squishy que se asome, o last-hitea un minion para refrescar el ciclo antes de re-engagear.
- **Caminar hacia delante durante el reload.** Tras el 4º disparo debes recargar antes del próximo auto-attack. Retrocede en esa ventana — muchas muertes de Jhin pasan en el medio segundo en que el rival entiende que no puedes disparar.
- **Lanzar W a ciegas para pokear.** W solo enraíza si el target ha sido dañado hace poco por ti o un aliado (en ~4 segundos). Encadena una auto-attack o espera al engage del support; en otro caso W es solo una línea de daño lenta y esquivable.
- **Channelar R sin vision.** Jhin queda anclado durante Curtain Call. Sin wards en los flancos, un assassin te rodea y te mata a media R. Coloca E (la trampa lotus) en el flanco antes de pulsar R.
- **Saltarse el placement de E en objetivos.** Las trampas lotus cubren las entradas de Drake y Baron a coste cero. Plántalas a cada cooldown — revelan flancos, frenan el engage y confirman los W-roots.

## Consejo avanzado

Usa **E** (Captive Audience) como confirm para los **W**-roots. La trampa lotus se arma de forma invisible y ralentiza a quien la pisa; si predices por dónde caminará el support rival para wardear, suelta **E** ahí 2 segundos antes y dispara **W** en el momento en que se activa el slow — el slow vuelve imposible de esquivar el W-skillshot a 3000 de rango desde cualquier punto del mapa. Los Jhin expertos consiguen al menos un W-root de 3000 de rango por fight con esta técnica.
