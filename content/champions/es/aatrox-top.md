---
title: "Aatrox Top Build & Guía — Patch 16.9"
slug: "aatrox-top"
language: "es"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Aatrox top para League of Legends Patch 16.9: build de bruiser, mecánica de Q en el borde, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "De forma periódica, su próxima auto-attack inflige daño mágico bonus en función de los HP máximos del objetivo y cura a Aatrox. Vigila el indicador en su retrato."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Espadazo en tres casts encadenados, cada uno con una forma distinta. Acertar el borde exterior provoca un knock-up breve y aplica un 25% de daño extra. Es la fuente principal de daño de Aatrox."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Cadena que ralentiza al primer objetivo impactado. Si un campeón o un monster grande no sale de la zona de impacto a tiempo, es arrastrado de vuelta al centro y vuelve a recibir daño."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: cura una porción del daño infligido a campeones (lifesteal). Active: dash corto, usable durante el wind-up de la Q para alinear el golpe en el borde o para kitear."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Forma demoníaca: AD bonus, Move Speed que decae con el tiempo y self-healing aumentado. Hace fear a los minions cercanos. Cada takedown extiende la duración."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia desde Plated Steelcaps cuando el equipo enemigo tiene mucho daño mágico o cadenas de CC (ej. Lissandra, Sett, ulti de Malphite)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Syndra, Vex, Fizz mid que rota a top): el spell shield bloquea un golpe mágico grande y salva tu engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dos AD dealers físicos fuertes (Yasuo + Caitlyn): convierte el burst AD en sangrado lento que el lifesteal de la E cura"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra lockdown single-target que apaga tu engage (Q de Morgana, hook de Blitzcrank, R de Lissandra)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "cómpralo como componente antes de terminar Eclipse si estás perdiendo HP contra un top AP (Vladimir, Rumble) y necesitas MR antes del back"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Acierta el borde de la Q para hacer knock-up, encadena W para fijar al objetivo y usa E para reposicionar. Convierte la ventaja de Eclipse + Black Cleaver en victorias 1v1 en side lane."
  weakness: "Todo el daño depende del timing de la Q. Si fallas el borde, pierdes el trade. Hard CC, kiters a larga distancia y duelistas con true damage (Fiora, Camille) destrozan su sustain."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Fighters melee inmóviles sin tools de engage"
      reason: "Aatrox gana los trades antes del nivel 6 con los Q en el borde; la W los mantiene fijos lo suficiente como para que no puedan acumular cargas de sus passives con seguridad ni escapar de un all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Magos a corto rango que tienen que entrar para hacer daño"
      reason: "Necesitan ponerse a distancia melee para soltar el daño completo; Aatrox castiga ese gap con el slow de la W más un Q en el borde con knock-up antes de que puedan desengancharse."
    - examples: ["kayle", "k-sante"]
      archetype: "Lanes early débiles que escalan tarde"
      reason: "Aatrox tiene una de las mejores curvas de laning early; puede matarlos o negarles XP antes de que lleguen a los items late-game que los vuelven peligrosos."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "Duelistas con true damage, parry o escudo"
      reason: "La W de Fiora hace parry al knock-up de la Q y sus Vitals (marcas que Fiora pone sobre Aatrox y golpea con autos a true damage — daño que ignora armor y MR) bypassan la build drain tank; la E de Camille suma más true damage encima."
    - examples: ["quinn", "teemo"]
      archetype: "Kiters a larga distancia o con invisibilidad"
      reason: "Se mantienen fuera del rango de la Q y rompen los wind-ups de Aatrox con blind o vault (el dash de Quinn con knockback); él no tiene cómo cerrar el gap sin quemar E y Flash a la vez."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks con hard CC instantáneo (sin apuntar)"
      reason: "Sus stuns y roots son point-and-click — no hay proyectil que esquivar. Interrumpen los recasts de la Q a media animación, y una vez que Aatrox queda bloqueado por el CC no puede recuperar HP con la E lifesteal."
---

## Resumen

Aatrox es un melee fighter (campeón cuerpo a cuerpo que pelea a corta distancia) construido alrededor de una **Q** a tres casts con un mandoble. Cada cast cubre una forma distinta, y acertar el **borde exterior** del swing — no la zona interior — hace dos cosas extra: provoca un breve **knock-up** (manda al objetivo al aire un instante para que no pueda actuar) y aplica un 25% de daño bonus. Su kit también incluye un slow + chain pull (**W**: una cadena que ralentiza al primer enemigo impactado y lo arrastra de vuelta al centro si no sale de la zona a tiempo), un dash corto (**E**: desplazamiento rápido, activable durante la animación de la Q para reposicionarse) y una ulti en forma demoníaca (**R**: cooldown largo, buff potente). Es un **drain tank**: no un tank real, sino un fighter que sobrevive curándose el daño recibido a través del **lifesteal** de la E (un porcentaje del daño que infliges vuelve como HP), en lugar de apilar armor o HP.

Su game plan es corto de describir y exigente de ejecutar: en lane, acércate con la **W** lista como lock-down (el slow que clava al enemigo en el sitio) y luego suelta la **Q** para que el **borde** del swing pille al objetivo ralentizado. Usa la **E** para deslizarte hasta la posición correcta para el segundo y tercer cast de Q. Desde mid-game en adelante, busca duelos 1v1 en side lane y skirmishes 2v2 (mini-peleas entre dos jugadores por bando, fuera del teamfight principal). Aatrox es uno de los **bruisers** (campeones que mezclan daño y robustez) más fuertes del juego una vez que tiene la R disponible y al menos un item online.

## Build Recomendada

**Items iniciales:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La regeneración de HP pasiva del Doran's Shield lleva a Aatrox a través de los niveles early, donde su sustain (su capacidad de curarse durante un fight) es más débil.

**Items core (en orden de compra):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item spike (el momento en que más sube tu daño). Da **AD** (Attack Damage, la stat detrás del daño físico de auto-attacks y Q), **omnivamp** (lifesteal que funciona sobre cualquier tipo de daño, no solo auto-attacks) y **ability haste** (reduce el cooldown de las habilidades). Su passive se activa al segundo golpe, y Q1 + Q2 lo encadenan en secuencia.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto cuando el daño rival viene sobre todo de auto-attacks físicas. Reducen ese daño en los trades prolongados (intercambios largos de daño en lane).
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — cada golpe de Q reduce una carga de **armor** (la stat que mitiga el daño físico) al enemigo. También aporta HP para sobrevivir y ability haste para más rotaciones de Q por fight.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP más un **lifeline shield**: cuando tu vida cae por debajo de un umbral (en torno al 30%), salta un escudo automático. Esa ventana es justo cuando necesitas tiempo extra para que la E lifesteal te cure de vuelta.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo enemigo tiene mucho daño mágico o cadenas de **CC** (crowd control: stuns, roots, knockbacks — cualquier cosa que te bloquee y te impida actuar). Ejemplos: el root de Lissandra, el pull de Sett, la ulti de Malphite.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst **AP** pesado (AP = ability power, la stat detrás del daño mágico; burst = daño alto entregado en 1-2 segundos). La passive Lifeline bloquea un golpe mágico grande, muchas veces la diferencia entre morir a media iniciación del fight y aguantar lo suficiente para conectar la R.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra equipos con dos damage dealers físicos (AD) fuertes (ej. Yasuo + Caitlyn). Convierte el burst en un **bleed** lento (daño repartido en los segundos siguientes en lugar de impactar todo de golpe), dándole tiempo a la E lifesteal para curarlo.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC single-target que te apaga el engage (la Q de Morgana, el hook de Blitzcrank, la R de Lissandra). Lleva un spell shield de un solo uso que absorbe la habilidad de lockdown, así puedes comprometerte a fondo en la pelea en vez de tener que esquivar a distancia máxima.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — componente de **MR** (Magic Resistance, la stat que reduce el daño mágico) early. Cómpralo antes de terminar ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** si un top AP como Vladimir o Rumble te está ganando la lane.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** es el default. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el equipo rival tiene tres o más fuentes de CC o mucho daño mágico.

**Skill order:** Sube **Q** primero al máximo (es tu único damage), **E** en segundo lugar (el lifesteal escala con cada rank, así que más dashes por fight) y **W** al final. Coge **R** en los niveles 6, 11 y 16.

**Runas:** Las runas son efectos pasivos que escoges antes de la partida desde un "árbol" de opciones, cada uno construido alrededor de un estilo distinto. Aatrox usa **Precision** como árbol primario (el construido sobre el daño sostenido de auto-attacks) con la keystone (la runa central del árbol) **Conqueror** — una passive que sube tu daño conforme sigues peleando — más **Triumph** (una pequeña cura en cada takedown), **Legend: Alacrity** (Alacrity = stat que da attack speed bonus, ayudando a Aatrox a auto-attackear más rápido entre habilidades) y **Last Stand** (más daño cuando estás a HP bajos). Como árbol secundario coge **Resolve** (el árbol de la durabilidad) con **Second Wind** + **Revitalize** para sustain de HP en lane, o bien **Inspiration** con **Magical Footwear** (botas gratis al minuto 12) y **Cosmic Insight** (ability haste extra) si esperas una lane tranquila.

## Matchups clave

- **Fiora:** Matchup más duro. Su **W** es un parry (un escudo breve que bloquea y contesta una habilidad) que cancela el knock-up de tu Q. Cebale el parry — fuérzala a usarlo sobre una Q1 — antes de comprometerte con el tercer cast. Evita los trades largos: haz Q1 + E entrar-salir cortos, y nunca te comprometas con Q3 si su W no está en cooldown.
- **Darius:** Skill matchup (gana quien juega mejor, independientemente de los counters). Mantente fuera del rango del pull de su **E** cuando ya tiene tres o más cargas de bleed encima de ti (su passive te resta HP cada segundo por cada stack). Acierta la Q en el borde cuando su Q esté en cooldown; bajo R, los trades te favorecen si vas al menos un item por delante.
- **Renekton:** Pierde la lane antes del nivel 6 si respetas el stun de su W. Acércate solo cuando tu W esté lista; castiga sus cooldowns en vez de intercambiar a pecho descubierto. Después del 6, tu R sostiene mejor que la fury (la barra de recurso de Renekton) que él consume.
- **Malphite:** Evita pegarte a tu propia minion wave — su Q es un poke a larga distancia (daño a distancia para rascar HP sin comprometerse) que te quita HP gratis. Compra ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** si su poke early te está ganando la lane; **freezea** la wave cerca de tu tower (deja de empujar y mantén la oleada de tu lado) para negarle farm (el oro y la XP que vienen de matar minions).
- **Quinn:** Muy complicado. Su habilidad te aplica blind (te anula las auto-attacks por un instante, incluida la auto empowered de la passive) y te mantiene a raya con kite (se mueve hacia atrás mientras ataca, manteniéndote fuera del cuerpo a cuerpo). Empuja la wave con fuerza y haz roam (deja la lane para ayudar en otra, normalmente mid) buscando picks (kills sobre enemigos aislados y mal posicionados) en lugar de intentar ganar el 1v1.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + **W** desbloqueadas, Aatrox tiene una ventana real de all-in (un momento en el que puedes comprometerte del todo a la kill, sin vías de escape). Si el enemigo se sposiciona mal, acércate con la W lista y golpéalo con la Q en el borde después de que aterrice el slow.
- **Nivel 6:** Desbloqueas tu primera R. Busca un all-in si el enemigo está por debajo del 60% de HP — el bonus de AD y el healing buff convierten incluso un trade neutro en una kill.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completo (~minuto 11-13):** Tu daño da un salto fuerte. Fuerza duelos en side lane y busca un roam a bot para un dive 2v3 (entrar bajo la tower enemiga junto con tu jungla — el jugador que farmea los campamentos de la jungla y rota a las lanes — y matar a los rivales aguantando los golpes de la torre).
- **Dos items + R lista (~minuto 18-22):** Pico teamfight. Usa el lifeline shield del ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** más el healing amp de la R (amplification — la R aumenta toda la curación que recibes) para hacer dive sobre la back line enemiga (los carries squishies — alto daño pero poca defensa — que se quedan detrás de sus tanks durante la pelea) y resetear (refrescar) la duración de la R con cada takedown (kill o assist).

## Errores comunes

- **Soltar Q1 al primer contacto.** Q1 es el cast más pequeño y lento. Abre con la **W** para el slow, y luego ajusta el timing de Q1 para que el **borde** del swing pille al objetivo — no la zona interior. El bonus de daño desde el borde ronda el 25%.
- **Quemar la E para moverte en lugar de para alinear la Q.** La E es tu herramienta para ganar trades. Resérvala para deslizarte al rango del Q en el borde o para esquivar una habilidad clave del rival durante la animación previa de la Q (el wind-up, los frames antes de que el daño aterrice). No gastes la E solo para cruzar la wave más rápido.
- **Pulsar R demasiado pronto en el fight.** La R de Aatrox tiene un cooldown largo y el buff decae con el tiempo. Inicia el fight con **W** + **Q**; activa la R cuando ya estés comprometido y necesites el AD/healing amp, no como herramienta inicial de engage.
- **Ignorar la W sobre los minions.** La W atraviesa un minion para ralentizar al campeón que está detrás. En matchups duros (Fiora, Camille), lanza la W desde detrás de tu wave para que el proyectil pille al rival a través de los cuerpos de los minions antes de que pueda reaccionar.
- **Apilar armor en lugar de haste/AD.** Aatrox es un drain tank, no un tank real. Sobrevive curándose el daño a través de la E lifesteal; esa cura escala con el daño que infliges. Hacer una build de pura HP-tank te mata el output y la sustain a la vez.

## Consejo avanzado

Usa la **E** durante la animación de carga de Q1 para mover la hitbox de la Q a media ejecución: puedes empezar la Q mirando en una dirección, hacer dash atravesando un minion o cruzándote por detrás del enemigo, y que el espadazo aterrice en un ángulo completamente distinto. Esta técnica se llama **Q animation cancel** y convierte Q predecibles en jugadas imposibles de leer. Practícala en una partida custom contra un target dummy (un muñeco de pruebas inmóvil): lanza Q1, mantén el cast, haz dash con la E y observa dónde resuelve la Q. En partida real, el uso de mayor impacto es hacer dash **dentro** de un enemigo que ha intentado side-step (desplazarse lateralmente para esquivar) sobre una Q telegrafiada (una Q con animación lo bastante visible como para que la haya leído venir), pillándolo entonces sobre el borde del nuevo ángulo para el knock-up.
