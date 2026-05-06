---
title: "Aurelion Sol Mid Build & Guía — Patch 16.9"
slug: "aurelion-sol-mid"
language: "es"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Guía Aurelion Sol mid lane para League of Legends Patch 16.9: build con scaling de Stardust, matchups clave, power spikes, errores comunes y un consejo técnico final."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mago / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Las habilidades dañinas recolectan Stardust de los champions enemigos. El Stardust aumenta de forma permanente el área, el rango y el umbral de execute de cada hechizo — la paciencia paga en late game."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Aliento de dragón canalizado en cono frontal. Mantén el botón para seguir haciendo daño; cada segundo completo sobre un champion estalla en daño extra y suma Stardust. Tu fuente principal de DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Vuelo dirigido sobre el terreno; mientras vuelas la Q no tiene cooldown. Una takedown en 3s reembolsa parte del CD de W. El Stardust extiende el rango máximo de vuelo."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Coloca un agujero negro que arrastra a los enemigos al centro y aplica daño. El centro ejecuta (mata al instante) targets bajo umbral de HP. El Stardust agranda zona y umbral."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Estrella sobre el target: stun y daño. Tras 100 Stardust la siguiente R pasa a The Skies Descend — área mayor, knock-up en lugar de stun, shockwave AoE."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins móviles (Zed, Fizz, Talon, Akali) — la stasis es el botón de pánico cuando W está en cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra hard CC single-target que interrumpe la Q (Annie R, Lissandra R, gold card de Twisted Fate)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra equipos escurridizos: el slow pega los targets dentro del cono de Q"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en cuanto cualquier objetivo prioritario compre su primer item de Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Acumula Stardust en peleas largas con Q canalizadas y W de persecución. Cuando Liandry's Torment y Rabadon's Deathcap están online, el burn sostenido borra a los squishies a través de su Magic Resist."
  weakness: "La Q es un channel largo: cualquier hard CC que la interrumpa (Annie R, Lissandra R, stun de Twisted Fate) parte tu daño por la mitad. Los assassins móviles cierran la distancia antes de que W esté lista para huir."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "Magos de control inmóviles sin dash"
      reason: "El vuelo de W de Aurelion Sol cierra la distancia mientras la Q sigue canalizando. Targets sin dash ni stealth comen daño Q sostenido mientras la ventana de vuelo lo mantiene fuera de su rango de cast."
    - examples: ["galio", "sylas"]
      archetype: "Skirmishers melee mid de corto rango"
      reason: "Su all-in necesita corta distancia. ASol kitea con W y Q desde fuera del rango de auto-attack; si Flashean dentro, la E los saca de posición y la R stunnea cuando el Stardust escala el área."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "Pueden dashear encima de Aurelion Sol a media canalización, interrumpir la Q y reventarlo antes de que el scaling de Stardust imponga la pelea. La W tiene cooldown demasiado largo para ser un escape fiable."
    - examples: ["yasuo", "yone"]
      archetype: "Champions con Wind Wall"
      reason: "Su muro bloquea toda la línea de Q. La fuente principal de daño de ASol queda inservible a media trade y castigan el channel fallido con un all-in del que no puedes salir."
---

## Resumen

Aurelion Sol es un mago de daño sostenido cuyo kit gira en torno a dos ideas simples: mantén el **Breath of Light (Q)** canalizado sobre un target el mayor tiempo posible (canalización = una habilidad que sigues casteando durante varios segundos, interrumpible por hard crowd control), y usa **Astral Flight (W)** para perseguirlo cuando intente escapar. Su pasiva **Cosmic Creator** recolecta un recurso permanente llamado **Stardust** cada vez que dañas a un champion el suficiente tiempo — el Stardust aumenta de forma permanente el área, el rango y el umbral de execute (el umbral de HP por debajo del cual el hechizo mata al instante) de sus spells. Cuanto más se alarga la partida, más grandes y amenazantes son sus casts. No tiene combo de burst instantáneo: gana quedándose pegado a los enemigos hasta que el burn (daño que pega cada segundo durante varios segundos en lugar de todo de golpe) los remata.

Tu plan de partida en mid es asimétrico. En los primeros niveles haces trades en ventanas cortas (un breve intercambio de daño en lane, no un intento de kill completo): **Q** sobre un champion cuando se acerca a last-hittear, uno o dos ticks de daño, y atrás. Desde el nivel 6, **W** te permite cruzar terreno como un **Flash** gratuito — úsalo para perseguir las kills que tu jungla te monta con un gank (cuando el jungla baja a tu lane para ayudarte a matar al enemigo), o para hacer disengage volando hacia tu torre. En late game te conviertes en battlemage de retaguardia (un mago que pelea a media distancia, mezclando hechizos y posicionamiento en lugar de artillería de larga distancia): plántate al borde del teamfight, detrás de la frontline (los tanks y bruisers, los melees duros que aguantan el daño por el equipo), canaliza **Q** a través de sus cuerpos sobre el carry rival, suelta **Singularity (E)** para arrastrar a los enemigos del borde, y remata con **Falling Star (R)** cuando stunnea al carry.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (el anillo por defecto como primer ítem para mages: un poco de AP, HP y regen de maná) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La regeneración de maná de Doran's es obligatoria — spammeas Q en cada wave de minions.

**Items core (en orden):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — quema un porcentaje del HP máximo del target cada segundo que tu Q lo toca (pega más fuerte contra enemigos tanky, y cuanto más dura el channel más crece el burn). Tu mejor item individual.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — botas de magic penetration: cada cast ignora una parte fija de la Magic Resist enemiga, lo que borra a los squishies (targets de poca defensa, tipo ADCs y mages) más rápido.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica tu **AP** (Ability Power, la stat que escala el daño mágico) un 30% extra. Cada hechizo pega más fuerte. Cómpralo en tercer lugar si vas adelantado.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — daño mágico extra contra enemigos a baja HP (HP-threshold passive: bonus que se activa solo cuando el target está bajo cierto % de HP). Encaja perfectamente con los remates de **R**.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móviles (Zed, Fizz, Talon). La stasis es tu botón de pánico cuando **W** está en cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra hard CC single-target (Annie R, Lissandra R, gold card de Twisted Fate). Un solo stun bloqueado salva tu channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — ralentiza todo lo que toca la **Q**, manteniendo a los targets pegados dentro del cono.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration pesada pensada para los enemigos que ya compraron Magic Resist. Cámbialo en cuanto cualquier objetivo prioritario compre su primer item de MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — aplica Grievous Wounds a los enemigos a los que dañas (un estado que reduce a la mitad la curación recibida). Cómpralo contra composiciones que apilan cura (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (botas que reducen el cooldown de tus habilidades) son una opción si tu equipo necesita la **R** lista más a menudo como herramienta de engage en teamfight.

**Skill order:** Maxea **Q** primero (fuente principal de daño), **E** segundo (waveclear y setup AoE), **W** al final. Punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence** y **Scorch**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**, o **Resolve** con **Second Wind** y **Overgrowth** si la lane es de poke pesado a larga distancia (poke = daño de bajo compromiso para ir bajando HP).

## Matchups clave

- **Yasuo / Yone:** Su **Wind Wall** bloquea por completo la línea de **Q**. Reserva la **Q** hasta que quemen el muro y luego re-engage. Trade solo cuando el muro está en cooldown.
- **Zed / Talon:** Te revientan antes de que **W** esté lista. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**; nunca tengas **Flash** y **W** en cooldown a la vez.
- **Veigar:** Igualado pre-6 — él te stunnea dentro de su jaula W; tú lo pokeas desde fuera de la jaula con el rango de la **Q**. Post-6 puede one-shottearte con E-W-Q-R si te quedas quieto — sigue moviéndote lateralmente mientras canalizas.
- **Annie:** Su stun se esconde en un contador pasivo que no se ve con claridad. Cuenta sus casts: cada 4 habilidades tiene el stun listo. Si su indicador **Pyromania** (el icono naranja de fuego bajo su retrato) está encendido, no te quedes a rango de Tibbers.
- **Twisted Fate:** Es una carrera por ver quién hace roam (deja su lane para ayudar a las otras) primero. Su **R** le teletransporta al otro lado del mapa; tu **W** vuela sobre el terreno para seguirlo. Mantén la wave de mid empujada hacia la torre rival cuando puedas, así si se va a gankear bot tú farmeas CS gratis y quedáis empatados.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** + **W** ya puedes perseguir un error hasta el muro de la lane — castiga a quien camine demasiado cerca del río sin vision.
- **Nivel 6:** Primer **Falling Star** desbloquea un stun instantáneo. Monta ganks con tu jungla (cuando el jungla baja a tu lane para ayudarte a matar al enemigo): pull con **E** → stun con **R** → kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 11-13):** Tu **Q** sostenida pasa de chip damage (daño pequeño y lento) a amenaza real. Fuerza fights en los spawns de Drake (el Dragon en el río que da buffs al equipo) en cuanto Liandry's esté online.
- **100 Stardust acumulados (~ minuto 18-22):** Tu **R** se convierte en **The Skies Descend** — área mayor, knock-up en lugar de stun, shockwave AoE. Esa es tu condición de victoria en teamfight; guárdala para los objetivos en lugar de quemarla en un pickoff (eliminación de un enemigo aislado fuera del teamfight).

## Errores comunes

- **Canalizar Q sin volar.** Quedarte quieto durante el channel de **Q** te convierte en blanco fácil. **W** en la misma dirección a la que escapa el target para que el channel siga sin coste extra de maná mientras tú te mantienes a salvo.
- **Usar W de forma agresiva sin plan de salida.** **W** es tu único escape. Si vuelas sobre 3 enemigos sin setup (jungla cerca, **R** lista, suficiente cooldown reduction para recuperar **W** rápido), mueres sin hacer daño. Trata **W** como un commitment (un all-in: vas por la kill sin vuelta atrás), no como movilidad gratuita.
- **Greedear Stardust en lugar de kills.** El Stardust escala las habilidades a largo plazo, pero si el carry rival es one-shoteable al 30% de HP, remátalo. Un carry muerto vale más que 5 Stardust.
- **Olvidar que E arrastra al centro.** La **E** atrae a los enemigos al centro de la zona — tíralos HACIA tu equipo, no fuera. Una E mal puesta puede salvar al carry rival sacándolo lejos de tu frontline.
- **Pushear la wave con Q en lane.** **Q** empuja muy lento y quema maná. Usa **E** para limpiar caster minions y last-hitea los melees con auto-attacks. Reserva la **Q** para trades y harass.

## Consejo avanzado

La cadena **Q-W-Q** es la técnica que separa a los jugadores de Aurelion Sol. Castea **Q** sobre un champion y luego **W** inmediatamente en la misma dirección a la que está corriendo. Como **W** elimina el límite máximo del channel de Q mientras vuelas, sigues haciendo daño de forma continua por el aire — y la **Q** puede recastearse en pleno vuelo para una segunda instancia si el target original muere y aparece otro a rango. En la práctica te permite comprometerte a una kill desde muy lejos: **W** vuela una distancia larga (alrededor de pantalla y media) y durante ese vuelo tu **Q** sigue golpeando a quien tengas delante, así que la zona de amenaza es la suma del rango de **W** y el rango de **Q**. Al conseguir la takedown se reembolsa parte del cooldown de **W**, así que re-engage el siguiente fight casi de inmediato.
