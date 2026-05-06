---
title: "Janna Support Build & Guía — Patch 16.9"
slug: "janna-support"
language: "es"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Janna support para League of Legends Patch 16.9: build enchanter, matchups de peel, power spikes, errores comunes y un consejo avanzado de disengage."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Los aliados que se mueven hacia Janna ganan Move Speed extra. Janna también convierte parte de su Move Speed bonus en daño mágico extra al impactar."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Carga un tornado y suéltalo para que vuele en línea recta y eleve a los enemigos. Cargar más = más rango, daño y duración del knock-up."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Pasiva: bonus Move Speed y atraviesas unidades. Activa: daño mágico y slow a un enemigo (consume el bonus pasivo)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Escudo dirigido a un campeón aliado o a una torre, con bonus Attack Damage al aliado mientras dura."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel que empuja a todos los enemigos cercanos, luego cura a los aliados durante el resto de la duración. Disengage y recuperación en un botón."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra burst AOE pesado (Yone R, Kennen R, Orianna R) — escudo instantáneo a todo el equipo"
    - dd_id: "3107"
      name: "Redemption"
      against: "cuando el equipo necesita heal de grupo en peleas largas o para disputar Drake y Baron"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contra AP carries que escalan con Ability Haste (Hwei, Ezreal AP) — bonus AP al aliado que escudas"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "contra comps de engage con un AD carry claro (Aphelios, Kai'Sa) — el vínculo combina con tu R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Mantén vivo al AD carry tras la fase de skirmish, acumula peel con Move Speed y usa la R para romper los engage enemigos en los objetivos."
  weakness: "Poco daño en solitario y rango corto en E. Si el enemigo te clava hard CC antes de la R, no puedes peelar a nadie, ni siquiera a ti misma."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Supports de hard engage"
      reason: "La R de Janna cancela el dive en pleno aire: en cuanto saltan sobre tu AD carry, el channel los empuja y deshace el intento de engage."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "AD carries inmóviles con auto-attacks fuertes"
      reason: "Tailwind más E shield más Ardent Censer convierten a un marksman estático en una fortaleza de peel: aumenta su daño y Move Speed sin tener que reposicionarse."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Junglers diver vistosos"
      reason: "Su gank es un único salto telegrafiado: la Q de Janna los eleva en pleno dash y la R los manda de vuelta por donde vinieron."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports de hook a larga distancia"
      reason: "Janna no tiene gap-closer ni hard CC al level 1: un hook acertado antes del 6 borra al AD carry antes de que la R esté lista para disengage."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage supports de larga distancia"
      reason: "Pokean fuera del rango de 800 de la E shield: ella escuda el golpe pero no puede devolver — el desgaste de HP gana la lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanters de sustain que out-healan el poke"
      reason: "La única herramienta de daño en lane de Janna es la Q, telegrafiada por una carga larga — estos enchanters out-healan el trade y la superan en valor de teamfight."
---

## Resumen

Janna es una enchanter support cuyo kit entero gira en torno a un solo verbo: **peel** (proteger a un compañero, normalmente el AD carry — el marksman de bot lane que escala con items — de quien lo esté atacando). Su pasiva **Tailwind** añade Move Speed bonus a cada aliado que camina hacia ella, **Howling Gale (Q)** eleva a quien intente divar la back line (el carry ranged squishy que se queda al fondo en los teamfights), **Zephyr (W)** desgasta y slowa a la amenaza más cercana, **Eye of the Storm (E)** es un escudo con un buff de Attack Damage incorporado para el aliado al que se lo lanza, y **Monsoon (R)** es una de las herramientas de disengage más limpias del juego (una habilidad que rompe el intento de engage enemigo: cuando ellos saltan dentro, tú los empujas fuera).

Su game plan es tranquilo y mecánico: el AD carry no muere nunca. Ponte entre las amenazas y tu carry, lanza el escudo cada vez que esté listo, carga la **Q** detrás de un muro para que el tornado salga a tamaño máximo y guarda la **R** como "panic button" para cuando el equipo enemigo lo committe todo sobre tu back line. Con Janna casi nunca quieres engagiar — tu trabajo es ganar peleas negándote a perderlas.

## Build Recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (el starter de support que evoluciona y da más oro) más 2 Health Potions. Salta los starters de daño: Janna no snowballea con kills de lane, escala con la utility en teamfight.

**Core items (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — evoluciona en Bounty of Worlds y luego en un legendary support. Acumula gold y cargas de ward de forma automática.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — el Ability Haste te permite spamear **E** shield y **W** slow con cooldowns más cortos; bota por defecto de los enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — pasiva de heal-on-shield que crece en peleas largas. Combinada con tus **E** spameadas, el AD carry casi no recibe daño neto.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — potencia con daño on-hit y Attack Speed extra al aliado que escudas. Mejor item del juego junto a un AD carry de auto-attack.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — limpia hard CC de un aliado. Obligatorio si el enemigo tiene un stun single-target o un hook sobre tu carry.

**Situational items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE pesado (daño en área, tipo Yone R o Kennen R). El active da un escudo instantáneo a todo el equipo.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — cuando las peleas se alargan (Drake, Baron, teamfights largos). Heal AOE retardado que puedes dropear desde media mapa.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contra AP carries que escalan con Ability Haste (Hwei, Ezreal AP). Buffea con Ability Power extra al aliado que escudas.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — contra comps de engage donde tu AD carry necesita un slow garantizado sobre su target durante tu **R**.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son las de defecto. Boots of Swiftness pueden sustituirlas contra una comp con muchos slows de los que tienes que escapar.

**Skill order:** Maxea **E** primero (el valor del escudo y el bonus de Attack Damage escalan por nivel), **Q** segunda (más knock-up y daño), **W** la última. Sube **R** en niveles 6, 11 y 16. Empieza con **W** al level 1 para la Move Speed extra al ir a lane y coge **E** al 2 para escudar el primer all-in.

**Runes:** Árbol primario **Sorcery** con **Summon Aery** (añade un pequeño daño y valor de escudo a tus hechizos), **Manaflow Band** (sustain de mana para escudar y **W** cada wave), **Absolute Focus** (AP bonus por encima del 70% HP, fácil con Janna porque te quedas a salvo) y **Scorch** (más poke con la **Q**). Secundario **Resolve** con **Font of Life** (slowas a un target con **W** → todos los aliados que lo atacan curan) y **Overgrowth** (HP escalante permanente). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchups clave

- **Leona / Rakan:** Supports de hard engage. Guarda la **R** para el momento en que committen sobre tu AD carry; nunca la quemes para buscar un tornado. Carga la **Q** detrás de un muro para que no vean el windup.
- **Blitzcrank / Thresh:** Supports de hook. Quédate detrás de los minions cada vez que cruces el river. El hook acierta una vez y el AD carry está muerto — no puedes **R**-ar fuera de un stun de 1.75 segundos.
- **Xerath / Brand:** Mage supports fuera del rango de tu **E** shield. Pégate a la wave, no intercambies auto-attacks y deja que tu jungler te haga hard-side. Compra ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** antes de lo habitual.
- **Soraka:** Espejo de sustain. La superas en escudos a costa de menos heal bruto. Fuerza un all-in al level 2: **W** a la cara, **E** al AD carry, échala de la wave antes de su spike de **R**.
- **Pyke:** Amenaza de roam. Trackéalo con visión en tri-bush y entrada al river; si deja bot lane, ping mid al instante. La **R** de Janna detiene su execute solo si committe en cuerpo a cuerpo — en hook a larga distancia es inatrapable.

## Power spikes y condiciones de victoria

- **Level 2:** Con **W** al 1 y **E** al 2 puedes shield-engagiar un trade corto (un intercambio breve de daño en lane, no un all-in completo). Casi todas las lanes pierden este trade porque su spike de nivel 2 (el momento en que un campeón gana un boost de poder) es más débil que el tuyo.
- **Level 6:** Se desbloquea **Monsoon**. Cualquier intento de 2v2 enemigo es ganable a partir de aquí — engagian, tú channeleas, terminan empujados de vuelta a tu torre.
- **Moonstone Renewer + Ardent Censer (~ minuto 16-20):** Es el spike de teamfight donde dejas de ser un support de lane y pasas a ser un multiplicador de equipo. El HP efectivo de tu AD carry casi se duplica si shield-spameas durante una pelea.
- **Tres legendaries online (~ minuto 25):** Con Mikael's añadido, limpias la única habilidad de CC que borraría a tu carry. Desde aquí, cada pelea por objetivo es un 5v4 si el enemigo committe hard CC.

## Errores comunes

- **Lanzar Q sin cargar en lane.** Un tornado de 0.5 segundos casi no hace nada. Carga la **Q** los 3 segundos completos detrás de un muro o en fog of war (el bush sin wardear cerca del river bot), y suéltala mientras el enemigo camina hacia una wave.
- **Quemar la R por una kill.** La **R** de Janna es el mejor disengage de tu equipo. Cada vez que la usas para cerrar una kill que el AD carry habría rematado igual, dejas a tu equipo sin panic button los siguientes 100+ segundos.
- **Escudarte a ti misma.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** también te selecciona, pero el bonus de Attack Damage en Janna está desperdiciado. Por defecto, escuda al AD carry; auto-escúdate solo si tienes un skillshot (un proyectil dirigido que se puede esquivar) lockeado encima y tu carry ya está a salvo.
- **Quedarte demasiado atrás en las peleas.** Tu **E** tiene un rango corto de 800 unidades. Si miras desde detrás de tu equipo no puedes escudar a nadie. Quédate dentro del rango de escudo del AD carry, en segunda línea — más cerca de lo que el instinto te dice.
- **Auto-atacar minions buscando daño.** Tailwind solo se triggea con golpes a campeones. Empujar la wave con autos regala al enemigo una ventana de trade gratis sin ningún beneficio de daño para ti.

## Consejo avanzado

Practica el **Q-Flash**. Empieza a cargar **Howling Gale** detrás de un muro, luego Flashea adelante y suelta el tornado en el mismo movimiento: el knock-up acierta sobre un target que nunca vio el windup. Esta jugada convierte a Janna de una enchanter defensiva en un disengage de un solo botonazo contra un enemigo fed (un campeón con ventaja en kills y oro) que ha pusheado demasiado. El coste es tu **Flash** durante los 5 minutos siguientes — gástalo solo si la kill, o la supervivencia del AD carry, está asegurada.
