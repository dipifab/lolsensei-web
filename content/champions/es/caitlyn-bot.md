---
title: "Caitlyn Bot Build & Guía — Patch 16.9"
slug: "caitlyn-bot"
language: "es"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Guía de Caitlyn bot lane para League of Legends Patch 16.9: starter kit, build de lane bully, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "Cada N ataques Caitlyn dispara un tiro bonus que escala con crit. Rango duplicado contra enemigos atrapados o nettados."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Skillshot lineal de largo alcance con channel inicial. Daña en fila; el daño baja en los siguientes objetivos. Main DPS y waveclear."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Coloca una trampa que, al activarse, revela y enraíza al campeón enemigo 1.5s y concede un Headshot potenciado."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Red dirigida que ralentiza al enemigo y empuja a Caitlyn hacia atrás. Es una escape ante divers, no una herramienta de engage."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channel + execute global single-target. Los aliados del objetivo pueden hacer de escudo: necesitas aislamiento."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontlines tank o comps HP-stack (Sion, Cho'Gath, Dr. Mundo): el armor pen bonus escala con HP enemigo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de cura pesada (Soraka, Vladimir, Aatrox): aplica Grievous Wounds y corta la cura al instante"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra presión de assassin o diver (Zed, Samira, Yasuo flank): movement speed más passive shield bajo umbral HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hook o pick comps (Blitzcrank, Thresh, Morgana Q): el spell shield come un CC prioritario antes del burst"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Domina la lane con el rango de Q y los setups de trap, snowballea Headshot procs con The Collector y Infinity Edge, y cierra los fights desde detrás de tu front line, kiteando con E y rematando low-HP con R."
  weakness: "Sin escape real cuando E está en cooldown. Counter durísimo de divers y assassins (Samira, Yasuo, Zed flank). Si el early lead no se convierte en pick a midgame, hyperscalers tipo Jinx o Vayne te superan."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Resumen

Caitlyn es la marksman con mayor rango base del juego y el arquetipo de **lane bully** (un campeón que domina la lane desde los primeros minutos, viviendo del lead que construye en laning phase). Toda su identidad consiste en hacer miserables los primeros 12 minutos al duo enemigo y luego convertir esa ventaja en objetivos. Su **Piltover Peacemaker (Q)** tiene más rango que el basic attack de prácticamente cualquier otro ADC, su **Yordle Snap Trap (W)** convierte los chokepoints en zonas de daño, y la pasiva **Headshot** castiga a quien se posicione mal cerca de las traps o el net. A cambio tiene de los valores de armor y HP más bajos entre ADCs: el precio de su dictadura en lane es que se derrite en cuanto un enemigo la pesca fuera de posición.

El game plan es simple de explicar y duro de ejecutar: poke (desgastar HP enemigo a distancia sin comprometerte) la lane con la **Q**, coloca traps en los bushes y en el tri-bush para amenazar el combo **W → Headshot potenciado**, y convierte el lead del primer recall en oro de turret plate. Tras **The Collector** y **Infinity Edge** tu rol cambia: pasas a back line carry (la carry que aporta daño desde la retaguardia). Quédate en la segunda posición más atrasada, kitea con **E** cuando un diver te salte encima, y usa **R** como execute (ejecución bajo umbral HP) sobre runners low-HP — nunca como herramienta de poke.

## Build Recomendada

**Items iniciales:** Doran's Blade + 2 Health Potions. Aunque ganes la lane, salta el segundo Doran's: el oro rinde mucho más en una component Pickaxe para The Collector.

**Items core (en orden):**

1. **The Collector** — first-item rush. La pasiva execute salta bajo el 5% HP y borra justo el tipo de runner low-HP que la **R** quiere finiquitar. La lethality es ideal early porque los ADCs enemigos aún tienen poquísimo armor.
2. **Berserker's Greaves** — botas de attack speed. Mercury's Treads solo si el equipo enemigo tiene 3+ amenazas de hard CC (crowd control: stun, root, knockup).
3. **Infinity Edge** — tu mayor spike de daño. La pasiva Headshot escala con critical strike chance, e IE convierte cada Headshot en un casi one-shot a backline.
4. **Rapid Firecannon** — más rango de auto-attack (más de 700 base + RFC + IE te hace la auto-attacker más larga del lobby) y un proc Energized que se sincroniza con el timing del Headshot.

**Items situacionales:**

- **Lord Dominik's Regards** — contra frontlines tank o comps HP-stack (Sion, Cho'Gath, Dr. Mundo). Sustituye Rapid Firecannon si el equipo enemigo tiene 3+ tanks.
- **Mortal Reminder** — contra comps con cura pesada (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (corta la cura recibida) en cuanto tagges al enemigo.
- **Phantom Dancer** — contra presión de assassin o diver. La pasiva HP-threshold (un escudo que salta bajo umbral) más la movement speed te dan el medio segundo que necesitas para hacer **E** y huir.
- **Edge of Night** — contra hook comps o pick comps (Blitzcrank, Thresh, Morgana Q). El spell shield come un CC prioritario antes de que te quemen: es la diferencia entre vivir y morir en esos matchups.

**Botas:** Berserker's Greaves por defecto. Mercury's Treads solo contra CC AP pesado tipo Brand support o Zyra support.

**Skill order:** Sube **Q** primero al máximo (waveclear y main DPS), **E** segundo (reduce el cooldown de tu única escape), **W** al final (la trap pega más con rangos pero el timer no cambia). Punto en **R** a niveles 6, 11 y 16.

**Runas:** Primario **Precision** con **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secundario **Sorcery** con **Manaflow Band** y **Gathering Storm**, o cambia a **Inspiration** con **Magical Footwear** y **Cosmic Insight** si quieres más oro al completar las botas.

## Matchups clave

- **Draven:** Ligeramente desfavorable a niveles 1-3 porque el burst (daño alto en 1-2 segundos) de su Spinning Axe te supera en los trades. No fight pre-3: freeza la wave (mantén la oleada congelada cerca de tu torre) bajo torre, llega al nivel 3 con las tres habilidades, y tradea (intercambios cortos en lane) solo cuando tengas una **W** en el bush. Castiga las ventanas en que se queda sin maná tras Q-Q-Q.
- **Ezreal:** Even, levemente favor Caitlyn si el support te deja committear. Outranggeas su **Q** por mucho. Cada vez que él Q-ea un minion, **Q** libre tuya por la lane. No dodgees **dentro** de la trayectoria de su **W**.
- **Jhin:** Matchup even, decidido por la disciplina al snipe con **R**. Respeta su cuarta bala (hace daño enorme). Cuando su **W** está en cooldown, camina y tradea. Usa tu **E** para dodgear su **W** root si la telegrafía.
- **Vayne:** Enormemente favor Caitlyn antes del nivel 9, pesadilla pasado el nivel 11. Es tu mina de oro: shovea la wave fuerte pre-3 (empuja la lane fuerte), exíliala con la **Q**, y mantén informado al jungler para dives (entrar bajo torre a matarla a pesar de los disparos de la torre) al nivel 6. Si sobrevive a dos items, la lane está perdida y debes pasar a modo back line.
- **Samira:** Quiere un all-in (intercambio total hasta la kill) cuerpo a cuerpo en cuanto tiene la W. Pon traps en el bush de la lane para cerrar su vía de engage, guarda la **E** como knockback en el momento exacto en que dashea encima (no la quemes en poke), y nunca pelees contra ella sin la Phantom Dancer en shield.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con un punto en **Q** y otro en **E**, el combo Q-AA-AA chunkea el 30-40% del HP del ADC enemigo si camina a last-hittear. Mantén la wave en el centro de la lane y busca esa ventana.
- **Nivel 6:** El primer **Ace in the Hole** desbloquea presión de pick (eliminar a un enemigo aislado fuera de teamfight). Lánzala desde dentro de un tri-bush para que el reveal de la bala no telegrafíe tu posición. No la malgastes como poke: espera un runner low-HP sin aliados cerca.
- **Completion de The Collector (~minuto 8-10):** Primer breakpoint de execute. Casi todos los squishies (campeones con pocas defensas) bajo el 5% HP mueren al instante con la pasiva, así que una **Q** que cleavea una línea baja de minions hasta el campeón enemigo se vuelve kill gratis.
- **Infinity Edge online (~minuto 18-22):** Tu mayor spike de daño. Los procs de Headshot pasan de "pican" a "borran al ADC enemigo". Fuerza fights de objetivo aquí — Drake o Rift Herald — y construye vision en torno a tus zonas de win condition.

## Errores comunes

- **Spammear Q para waveclear sin gestionar maná.** Caitlyn es mana-hungry early. Q a la wave solo cuando alinee dos melee minions más un caster, si no llegas al siguiente trade con el maná vacío.
- **Tirar W traps como poke.** Las traps son un setup tool, no un damage tool. Colócalas en chokepoints (bush de la lane, tri-bush, entrada al river) por donde el enemigo deba pasar a last-hittear o rotar. Una trap desnuda a los pies del ADC enemigo malgasta un segundo de lane prio (priority — el control de lane que te permite irte sin perder recursos).
- **Quedarte siempre a rango máximo en teamfight.** El rango max de AA te deja fuera del peel (la protección que tus aliados ponen sobre ti). Quédate en la segunda posición más atrasada: así un assassin que hace flank (entra por un costado descubierto) no te borra antes de que tu support reaccione.
- **Usar la R como poke de medio mapa.** **Ace in the Hole** tiene channel largo y cualquier aliado cercano body-bloquea la bala. Resérvala para runners **aislados** low-HP — objetivos sin aliados a menos de 350 unidades.
- **Quemar la E para perseguir kill.** **90 Caliber Net** es tu única escape. En cooldown eres un glass cannon (campeón de mucho daño y poca defensa, típico de los ADCs) sin respuesta a un diver. Úsala para huir, no para cerrar distancia.

## Consejo avanzado

Practica la secuencia **"Trap → Q → Headshot potenciado"** en chokepoints. Camina hasta un tri-bush o la entrada de la jungla, coloca la **W** detrás de la línea enemiga por el lado por el que se replegarían, y empújalos con poke de **Q**. En el instante en que pisan la trap, el root de 1.5s te garantiza un follow-up de **Q** más un Headshot potenciado — y el disparo potenciado tiene **rango duplicado** contra objetivos atrapados, lo que significa que lo lanzas desde una distancia desde la que la mayoría de ADCs ni siquiera puede auto-atacar. En la práctica convierte un 2v2 en lane en un 1.5v2: el ADC enemigo elige entre perder wave prio (dejar la lane sin gestionar minions) o pisar un combo garantizado. Sea como sea, ganas el trade.
