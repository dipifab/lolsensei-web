---
title: "Kalista Bot Build & Guía — Patch 16.9"
slug: "kalista-bot"
language: "es"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Guía de Kalista bot lane para League of Legends Patch 16.9: build on-hit, mecánica Soulbound con el support, matchups clave, power spikes, errores comunes y un tip final."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Cada auto-attack y cada Pierce conceden un pequeño hop durante el wind-up. Un click de movimiento antes del impacto fija la dirección del salto."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Skillshot lineal. Si mata al primer objetivo, la lanza continúa y transfiere todos los stacks de Rend al siguiente enemigo impactado."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Pasiva Soulbound: vincula a Kalista con un aliado. Cuando ambos golpean al mismo target, daño mágico extra basado en HP máximo."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Cada auto-attack y cada Pierce clavan una lanza en el target. Al activar las arranca: el daño escala con el número de stacks y aplica slow en área."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Pone al Soulbound en stasis y lo arrastra hasta Kalista. El aliado puede reactivarla para lanzarse como dash con knockback que se detiene al primer champion."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra tanks/bruisers con 2500+ HP (Sion, Ornn, Cho'Gath): el armor pen escala con su ventaja de HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de healing (Soraka support, Aatrox, Dr. Mundo): Grievous Wounds reduce las curas a la mitad"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra burst/assassin comps (Zed, Talon, Kha'Zix): la segunda vida deja espacio al follow-up Soulbound tras tu R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hard CC single-target (Ashe arrow, Morgana Q, Blitzcrank hook): bloquea una habilidad y tu hop reset sobrevive"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Acumula 6+ stacks de Rend sobre el target prioritario en teamfight, luego Q reset al segundo objetivo. Con Wit's End y Blade of The Ruined King online, ganas a otros marksmen en peleas largas."
  weakness: "Escalas con tu support: un Soulbound que no fija targets te deja sin engage. Hook supports (Blitzcrank, Thresh) agarran a tu partner fuera del rango del hop y el fight termina antes de que tengas R."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Press the Attack: tres hops sobre el mismo target proccan PtA para +12% daño bonus mientras Rend se acumula rápido. Triumph premia el skirmish constante, Legend: Alacrity nutre la curva on-hit de AS, Coup de Grace remata bajo 40% HP."
    secondary_rationale: "Domination secundaria: Taste of Blood da sustain tras cada trade corto en lane (las hop windows te dejan salir limpia), Relentless Hunter stackea con takedowns y añade el movement speed fuera de combate que necesitas para roamear mid con tu Soulbound."
    secondary_alternative: "Contra lanes de poke pesado (Caitlyn + Lux, Varus + Brand) cambia Domination por Resolve con Bone Plating (-30/-60 daño en los primeros 3 golpes) y Second Wind (HP regen sube bajo 50% HP) para sobrevivir los primeros 6 niveles."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "ADCs late-game inmóviles sin dash"
      reason: "Su única seguridad es el posicionamiento. Kalista hopa con cada auto-attack, así que tradea en melee sin dejar de moverse: no tienen respuesta salvo Flash, y tú stackeas Rend más rápido de lo que ellos resetean el trade."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Marksmen de posicionamiento estático dependientes del lockdown del support"
      reason: "Si su support engagga primero, tu R para reposicionar y el on-hit mágico de Wit's End baten su curva de AS. No pueden kitear a un campeón que cierra 350 unidades por cada auto."
    - examples: ["caitlyn"]
      archetype: "ADCs de artillería long-range en lane phase"
      reason: "Caitlyn te pokea niveles 1-3, pero su trap-and-net es un único dash en CD largo: con boots y Wit's End online, la caminas en el nivel 6."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Lane-bully marksmen con fuerte all-in niveles 1-3"
      reason: "Su daño temprano supera tu hop spacing (la distancia segura saltando con cada auto) antes de que tengas AS para stackear Press the Attack. Una Q mal puesta al lvl 2 y se llevan una kill antes del support."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports pickeados contra tu Soulbound partner"
      reason: "Si hookean a tu support, el link Soulbound es irrelevante: no puedes R-arlo fuera de la línea del grab, y el engage ocurre 800+ unidades fuera de tu hop window."
    - examples: ["tristana", "vayne"]
      archetype: "Hypercarries móviles con self-peel"
      reason: "Tristana W escapa de tu dive, Vayne tumble cancela el timer del stack de Press the Attack. Ambas escalan a items que baten tu core on-hit en 1v1 después del minuto 25."
---

## Resumen

Kalista es un marksman skirmisher on-hit ("on-hit" = items cuyos efectos se activan en cada auto-attack, no desde habilidades; "skirmisher" = campeón que gana en intercambios cortos y repetidos, no en un gran all-in) definido por **Martial Poise (P)**: cada auto-attack y cada **Pierce (Q)** le conceden un pequeño hop durante el wind-up. Ese salto convierte los auto-attacks en mobility: camina sobre los enemigos que se quedan quietos y se desenganchade los melee sin dejar de disparar. El precio es un early game frágil (AD bajo, sin shields) y uno de los skill floors más altos entre los marksmen: el hop hay que comandarlo con clicks de movimiento frame por frame.

Su game plan gira en torno a los stacks de **Rend (E)**. Cada auto-attack clava una lanza en el target; la activación las arranca para daño creciente. Stackea 6-8 lanzas en un tank, luego E para borrar al squishy (campeón de mucho daño y pocas defensas, típico de los ADC) que está al lado, y has cerrado el teamfight. La mecánica Soulbound de **Sentinel (W)** la liga toda la partida a un aliado (normalmente el support), y **Fate's Call (R)** lanza a ese aliado como dash con knockback. Con un engage support tipo Thresh o Leona, la R de Kalista convierte un flank Soulbound en un pick garantizado (eliminar a un enemigo aislado fuera del teamfight). Con un poke support escala peor y la R se vuelve un panic disengage en lugar de herramienta de engage.

## Build Recomendada

**Items iniciales:** Doran's Blade + 1 Health Potion. Salta Doran's Shield incluso contra lanes ranged: Kalista necesita el AD extra para convertir su hop spacing en kill threat.

**Items core (en orden):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — primer item: tu spike de attack speed (AS), el primer gran salto en velocidad de golpe. Añade daño mágico en cada auto-attack, escala perfecto con la frecuencia de hop, y la magic resist pesa contra combos AP support + AP mid.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed extra para los stacks de Press the Attack y aplicar Rend más rápido.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — hace daño igual a un porcentaje del HP máximo actual del target en cada auto-attack, más un active con slow. Cierra el intercambio en melee y es el mejor segundo item contra cualquier frontline (los tanks/bruisers que abren el teamfight).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — los bolts aplican Rend a dos targets extra. Es lo que convierte la E en spike AOE de teamfight (area of effect: daño que golpea a más de un objetivo a la vez).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quinto item: AD más el shield de lifesteal para los intercambios extendidos del late.

**Items situacionales:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra tanks con 2500+ HP (Sion, Ornn, Cho'Gath); el armor pen escala con su ventaja de HP sobre ti.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con mucho healing (Soraka support, Aatrox, Dr. Mundo). Grievous Wounds reduce la cura a la mitad.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra burst/assassin comps (Zed, Talon, Kha'Zix); la segunda vida da tiempo al Soulbound para seguir tras la R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC single-target (CC = crowd control: stuns, roots, knock-ups que te bloquean en sitio). Bloquea una flecha de Ashe o un hook de Blitzcrank y el hop reset sobrevive.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto. Cambia a ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** si el equipo rival tiene 4+ slows que no puedes esquivar con el hop.

**Skill order:** Sube **Q** primero al máximo (daño principal + mecánica de transferencia de Rend), **E** segundo y **W** al final. Punto en **R** a los niveles 6, 11 y 16. Empieza con **Q** en nivel 1 para tener poke fiable en peleas de invade.

**Runas:** Árbol primario **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity** y **Coup de Grace**. Secundario **Domination** con **Taste of Blood** y **Relentless Hunter**. Contra lanes de poke pesado (Caitlyn + Lux, Varus + Brand) cambia Domination por Resolve con **Bone Plating** y **Second Wind** para sobrevivir los niveles 1-6.

## Matchups clave

- **Aphelios:** Kalista gana post-6 si acierta el hop spacing. Los damage spikes de Aphelios varían por arma, así que step-uppea solo cuando su off-hand sea Severum (lifesteal) o Crescendum (turret), ambas de corto alcance: lo caminas.
- **Caitlyn:** Lane perdedora niveles 1-5: las trampas y los 650 de auto-range castigan tu necesidad de caminar hacia delante para stackear Rend. Toma **Bone Plating** secundaria, pídele al support que tanke una trap, luego busca nivel 6 con **R** + gank de la jungla.
- **Draven:** Lane bully. Evita los trades cuando tenga **Spinning Axe** activa: su auto-reset encadena tu hop en una kill garantizada si te quedas quieto. Stackea un Rend por auto a minion, guarda E para cuando te impacte una Q, y re-engaga cuando se le caiga el hacha.
- **Jinx:** Pareja pre-6, escalas mejor post-6. El hop de Kalista countera el slow de la **W** de Jinx porque el dash arranca antes de que el proyectil aterrice. Después de nivel 9 le all-ineas cualquier wave que esté forzada a clearear.
- **Vayne:** Matchup de scaling perdedor pasado el minuto 25. Mátala en los primeros dos items: Wit's End online antes de que ella cierre Kraken Slayer es la única ventana en la que Kalista gana el 1v1 directo.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + un punto en **E**, tienes un trade pattern fiable: AA, AA, E con stack pleno. Casi todas las lanes pierden este intercambio.
- **Nivel 6:** El primer **Fate's Call** desbloquea el flank Soulbound (entrar al fight por un lado que los enemigos no están vigilando): coloca a tu support en un side-bush, R-alo sobre el support enemigo y encadena con tu Rend stackada.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End completo (~minuto 11-13):** Tu curva de AS despega. Caminas a casi todos los marksmen en niveles 6-9 y te conviertes en la líder DPS de auto-attack del bot side.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King online (~minuto 18-21):** El % HP máximo on-hit destruye frontlines. Fuerza un drake o un Rift Herald aquí: tu E stackada en el tank borra al ADC enemigo que está a su lado.

## Errores comunes

- **Castar Rend a 1-2 stacks por chip damage.** Rend escala fuerte con el número de stacks: spamear E temprano vacía la pila antes del kill threshold. Mantén E hasta tener 5+ stacks en el target prioritario, o hasta cerrar la kill (E reembolsa CD al matar, así que un cast de finisher resetea el ciclo).
- **Olvidar que el hop es un comando de movimiento.** Los novatos en Kalista auto-attacan y se quedan quietos. El hop solo se activa si haces click en una dirección durante el frame del wind-up. Practica click + ataque alternados en custom games antes de ir a lane.
- **Usar R como engage ofensivo con un poke support (Karma, Lulu).** Sus kits no tienen follow-up CC tras el knockback. Guarda la R como panic save: stasis al support para esquivar una flecha de Ashe o un hook de Blitzcrank, luego desengaga.
- **Saltarte Wit's End contra comps AD.** Aun así, Wit's End es tu spike de AS más rápido y el daño mágico aplica independientemente del armor. Cómpralo primero; los items de AD pen van en slot 4 o 5.
- **Quedarte en fight con 0 hops disponibles.** El hop está en cada auto-attack, pero si no hay enemigo en rango de ataque, te toca caminar. Vigila cuando se acaben los targets atacables y back off: Kalista sin hop es un marksman a 580 MS sin dash, menos mobility que Caitlyn.

## Consejo avanzado

Practica el **Q reset sobre minions para escapar a la jungla**. Cuando hagas un wall jump cerca del río o el tri-bush, queue una **Q (Pierce)** sobre la oleada de minions detrás del muro: si la lanza mata al minion, la lanza continúa y te permite hopar el muro en el mismo frame. El truco te saca de un gank que te ha cortado la ruta del río, porque el frame del hop cuenta como movimiento y bypassa la hitbox del muro. Bindea una **Q** quick-cast para reducir el tiempo de reacción.
