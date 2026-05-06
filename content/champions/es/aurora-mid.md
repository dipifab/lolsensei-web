---
title: "Aurora Mid Build & Guía — Patch 16.9"
slug: "aurora-mid"
language: "es"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Guía de Aurora mid para League of Legends Patch 16.9: starter kit, build core de burst-mage, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Dañar enemigos libera espíritus que siguen a Aurora y la curan al contacto. Sustain constante en lane y en teamfights."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Skillshot lineal que maldice a los enemigos impactados. La reactivación arrastra la maldición hacia Aurora con un segundo golpe basado en HP perdidos."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash al lanzar; al aterrizar se vuelve invisible y gana movement speed. Se resetea con takedowns. Su principal herramienta de movilidad."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "Estallido mágico AOE que ralentiza enemigos. Aurora salta hacia atrás tras lanzarlo, ofreciendo un disengage seguro de trades cortos."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Salto y luego una zona slow que Aurora puede atravesar teletransportándose. Los enemigos que entran o salen sufren un slow mayor."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins móviles (Zed, Fizz, Akali) — la stasis cubre la ventana en que W está en cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cuando un objetivo prioritario compra un item de Magic Resist (sobre 60 MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucha curación (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Castiga errores de posicionamiento con W jump-in más burst de Q recast cuando tengas Stormsurge y Shadowflame. Usa los resets de W en takedowns para encadenar el teamfight."
  weakness: "Hard CC antes de W cierra todas sus vías de escape. Los magos de artillería a larga distancia la pokean fuera de su ventana de step-up antes de poder engagear."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Magos inmóviles sin escape"
      reason: "Estos mids no tienen dash ni stealth: Aurora puede entrar con W después de acertar la Q, terminar la curse-recast en sus narices y volver con W gracias al reset por takedown."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Mids melee de corto rango"
      reason: "Aurora les out-rangea con el poke de Q y usa el backward hop de E para rechazar trades; ellos deben comprometer gap-closers que Aurora castiga con la Q recast en su entrada."
    - examples: ["veigar", "ziggs"]
      archetype: "Magos burst inmóviles con cast lento"
      reason: "Su kill window exige que Aurora esté quieta para un proyectil lento o una jaula. La invisibilidad de W rompe el read del cast y le permite sidestep al setup."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Magos de artillería a larga distancia"
      reason: "La pokean fuera del rango de Q en cada wave. Aurora no tiene shield innato, así que cada step-up para soltar E o Q le cuesta HP que su pasiva sola no recupera."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "La burstean en la ventana de cooldown de W. Incluso con Zhonya's, una cadena de dashes más ulti la borra antes de que pueda meter stasis o resincronizar W."
    - examples: ["yasuo"]
      archetype: "Champions con bloqueo de proyectiles"
      reason: "El Wind Wall de Yasuo anula la Q de salida y el pull-back de la recast, eliminando aproximadamente la mitad del damage en lane de Aurora con una sola habilidad."
---

## Resumen

Aurora es una maga de daño mágico con perfil **burst** — concentra casi todo su daño en una ventana de 1-2 segundos — con herramientas de assassin acopladas: **Across the Veil (W)** es un dash más una stealth corta, y **Between Worlds (R)** es a la vez un salto de engage (forma de iniciar una pelea entrando primero) y una zona de repositioning. Su kit premia leer al rival: acierta **Twofold Hex (Q)** a distancia, camina hacia delante para alinear la recast y entonces salta con **W** cuando el pull-back de la maldición esté en línea. Su pasiva la cura cada vez que los espíritus exorcizados por sus habilidades la alcanzan, lo que le da **sustain** en lane (capacidad de recuperar HP durante la fase de carril sin volver a base) que la mayoría de mids **squishy** — campeones frágiles con mucho daño, como Lux o Ahri — no tienen.

Su game plan es ganar **trades** cortos (escaramuzas breves donde dos campeones intercambian un par de golpes) con **Q** más auto-attacks mientras busca la ventana de **all-in** — el momento en que se compromete a cerrar la kill — en cuanto **W** vuelva a estar disponible. **W** también tiene un reset por **takedown** (el cooldown se reembolsa con cada kill o asistencia), así que una kill limpia en lane le regala un segundo salto para escapar, y en teamfights le permite encadenar del primer squishy abatido al siguiente target en la **back line** (los carries posicionados detrás de los tanques).

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (algo de AP — Ability Power, la stat que potencia el daño mágico — más mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La pasiva de Aurora ya la cura; Doran's Ring cubre el maná early que necesita para mantener **Q** en **poke** (daño a distancia para rascar HP del rival sin comprometerse a una pelea).

**Items core (en orden):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — el primer **spike** de Aurora (momento en que un campeón se vuelve mucho más fuerte, normalmente al completar un item). Cuando daña a un campeón ya bajo de HP, la pasiva de Stormsurge **procea** (así se llama la activación de un efecto bonus) y añade daño extra y movement speed, exactamente lo que necesita para encadenar un W de entrada con la Q recast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — **magic penetration** plana (reduce la Magic Resist del rival, así tus spells pegan más), útil sobre todo contra targets squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — su pasiva por umbral de HP (daño mágico extra cuando el target está bajo ~35% HP) coincide exacto con el burst de la Q recast, que pega más sobre targets con HP perdidos.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — item de **scaling** late game (multiplica el AP de los demás items de la build, así que se vuelve más fuerte cuanto más AP ya tienes). Con Deathcap online, la Q recast empieza a one-shotear a un squishy en una sola combo antes de que reaccione.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móviles (Zed, Fizz, Akali). La activa da **stasis** (2,5 segundos en los que no recibes daño, pero tampoco puedes moverte ni castear). Úsala en la ventana en que **W** está en cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — magic resist más un escudo pasivo que bloquea la siguiente habilidad enemiga. Cómpralo contra **CC** mágico single-target (CC viene de crowd control: stuns, roots, slows que te bloquean el kit) que interrumpe tu engage — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — penetración mágica porcentual. Cómpralo en cuanto un target prioritario suba a Magic Resist (sobre 60 MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — aplica Grievous Wounds, que recorta la curación enemiga. Cómpralo contra composiciones con mucha curación (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables si el equipo necesita más uptime de **R** para engagear.

**Skill order:** Sube **Q** primero al máximo (es su daño principal y el botón que activa el burst de la recast), **E** en segundo lugar (limpia waves de minions y el backward hop ofrece un **disengage** gratis — disengage es el modo de salir de una pelea ya iniciada), **W** al final. Coloca un punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Domination** con **Electrocute**, **Cheap Shot**, **Sixth Sense** y **Ultimate Hunter**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**. Electrocute procea tras tres golpes rápidos sobre el mismo target — exactamente lo que hace Aurora en cada trade corto con Q-auto-Q-recast — y Ultimate Hunter recorta el cooldown de **R** para un segundo engage en teamfight.

## Matchups clave

- **Yasuo:** El Wind Wall (W de Yasuo, un muro de viento que bloquea cualquier proyectil que lo atraviese) se come las dos mitades de **Q** (el missile de salida y el pull-back de la recast). Guarda **Q** hasta que use Wind Wall sobre una wave de minions, luego camina hacia delante y haz trade con auto-attacks y **E** mientras su Wind Wall está en cooldown.
- **Zed:** Assassin móvil. Mantén **W** defensiva para cuando aterrice su **R**; no la quemes en ofensiva durante la lane. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item si su jungla también tiene hard engage.
- **Anivia:** Inmóvil y vulnerable a un W all-in en cuanto cae su muro. Pisa con agresividad sus colocaciones de muro justo después de que lo lance; el muro tiene cooldown largo y no tiene otra herramienta para amenazarte a corta distancia.
- **Lux:** Matchup parejo o ligeramente favorable. Su Q te out-rangea, pero ganas los intercambios cortos gracias a **W** más auto-attacks. Sidestepea su **E** mientras la coloca (telegrafía el cast point — hay una animación visible antes de que la spell aterrice), después camina hacia delante.
- **Twisted Fate:** Carrera por el primer **roam** (un roam es dejar tu carril para hacer plays en otra parte del mapa). Si te canta gold card, **W** lateral antes de que la carta aterrice — el dash rompe el lock-on. Controla su **R** con **wards** (totems que dan visión de un área durante minutos — sweepa los accesos del río y el tri-bush, el arbusto en el cruce entre mid y río); si ulta, ping mid-mia (el clásico "missing in action" que avisa al equipo de que tu laner acaba de irse) y rota tú también.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con un punto en **W** de pronto tienes movilidad — la primera ventana de all-in se abre si el rival está bajo ~70% HP. Camina hacia delante, **Q**, auto-attack, luego **W** detrás de él y **Q** recast.
- **Nivel 6:** La primera **R** desbloquea el repositioning cross-zona que le permite comprometerse a un 1v1 incluso bajo torre rival, porque **R** le da una ruta de escape integrada al otro lado de la zona.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completo (~minuto 12-14):** primer spike de asesinato. Ya puede solo-killear a un squishy a HP completos con la combo entera, y el reset de **W** por takedown hace realista una segunda kill en el mismo teamfight.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~minuto 24-28):** la Q recast sobre HP perdidos empieza a one-shotear a cualquier target que no haya comprado un item de Magic Resist. Fuerza peleas en torno a objetivos (drake, baron, herald, voidgrub) en cuanto este item está online.

## Errores comunes

- **Quemar W en la entrada en vez de guardarla para el reset.** **W** se resetea con takedowns. Si comprometes **W** para engagear, cierra la kill en la misma ventana para que el reset te dé la salida. Si la kill no es segura, guarda **W** y usa el backward hop de **E** para disengagear.
- **Olvidar reactivar Q.** **Twofold Hex** se autorecasta cuando expira la duración, pero la recast manual te deja elegir el ángulo del pull-back. Caminar dos pasos hacia delante antes de recastar arrastra el segundo golpe a través de más enemigos para daño **AOE** (area-of-effect — daño que pega a varios enemigos en una zona, no a un solo target).
- **Quedarte en tu propia zona de R cuando el slow ya expiró.** **Between Worlds** te cierra visualmente en un área marcada; en cuanto pasa el slow de entrada/salida, la zona es solo un cartel que dice "colapsen aquí". Salta el borde en cuanto la kill esté asegurada.
- **Apilar AP sin magic penetration.** Comprar ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** antes de ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** o de ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** te quita daño contra cualquier rival con MR base. Penetración primero, AP en bruto después.
- **Usar R para engagear cuando el equipo no te sigue.** **R** es un compromiso de cooldown largo — quemarla para nada porque tu equipo estaba clearando una side wave es el **throw** más común (un throw es tirar una partida ganada con un commit imprudente). Pingea el engage tres segundos antes de castar para que el equipo tenga tiempo de girarse hacia el lado correcto.

## Consejo avanzado

Usa el borde del realm-hop de **R** como herramienta de **kite** (kitear es hacer daño mientras retrocedes, para que el rival no cierre la distancia) y no solo de engage. Lanza **R** detrás de un enemigo en huida para que la zona slow le cierre la línea de escape, después salta a través del área para cortarle el ángulo. El slow de entrada y salida hace que la única ruta segura fuera del área sea el camino largo — normalmente lo bastante largo para que aterrices una **Q** más un auto-attack y cierres la kill.
