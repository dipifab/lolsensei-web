---
title: "Cassiopeia Mid Build & Guía — Patch 16.9"
slug: "cassiopeia-mid"
language: "es"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Guía de Cassiopeia mid para League of Legends Patch 16.9: kit inicial, build de mago, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Pasiva que amplifica todo el bonus de Move Speed que Cassiopeia recibe de items, runas y de su Q. Las botas escalan más en ella que en otros magos."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "AOE dirigido al suelo que detona tras un breve retraso y aplica Poison. Acertar a un campeón da un burst de Move Speed para perseguir o hacer kite."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Muro de nubes venenosas que ralentiza y aplica ground a los enemigos dentro. Los grounded pierden dashes, blinks y movimientos — herramienta anti-mobility principal."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Hechizo de cooldown bajísimo (0.75s) que hace daño bonus a targets Poisoned y cura a Cassiopeia. Devuelve maná en takedown. Botón principal de DPS."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Cono frontal: los enemigos que la miran quedan stuneados ~1.5s; los que miran hacia otro lado solo reciben slow. Apúntala de frente para el lock completo."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst assassins (Zed, Talon, Akali): la stasis de 2.5s da tiempo para que vuelva la E y el peel del equipo"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que corta tu E (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con curación apilada (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds limita lifesteal y regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo en el slot de Shadowflame en cuanto cualquier objetivo prioritario compre un item de Magic Resist"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra comps melee que te caminan encima: cada E refresca un slow, peel para la backline además del ground de W"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Acumula daño de Liandry's sobre targets envenenados con E spam (cd 0.75s) mientras W bloquea dashes. Acierta R de frente al nivel 6 para convertir prio en kills, luego escala como battlemage de front line."
  weakness: "Rango 700 sin dash, blink ni escape. Los magos de artillería la pokean fuera de su alcance; ganks pre-6 con hard CC cierran la lane antes de que escale. Sin maná si la E falla."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery gana a Domination/Precision: Stormraider's da el burst de Move Speed (3 procs rápidos) que el kit no tiene. Manaflow alimenta la E de 40 maná, Transcendence sube Ability Haste (cooldowns más rápidos) y Gathering Storm escala mejor que el burst de Electrocute en late."
    secondary_rationale: "Inspiration secundaria: Biscuit Delivery cubre maná y HP en la laning phase dura antes de Liandry's, Cosmic Insight devuelve Flash y los actives de items más rápido en teamfights."
    secondary_alternative: "Contra mucho poke o burst (Xerath, Syndra, Zed), cambia Inspiration por Resolve con Second Wind (regen contra harass ranged) y Bone Plating (absorbe los 3 primeros golpes de un combo all-in)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Mid laners basados en dash"
      reason: "Miasma los grounded dentro de la nube: en cuanto pisan, todo dash, blink o movimiento queda bloqueado. Sus kits colapsan contra una campeona que les borra la herramienta principal de escape."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Magos inmóviles sin escape"
      reason: "Cassiopeia gana los trades extendidos contra quien debe quedarse quieto para castear: la E (cd 0.75s) hace más daño en envenenados que sus rotaciones completas, y no pueden esquivar la W que les cae encima."
    - examples: ["renekton", "sett"]
      archetype: "Bruisers melee que necesitan pegarse a ti"
      reason: "Sin un dash largo deben caminar 700 unidades a través de W y Q poison para tocarte. Twin Fang te devuelve a full HP en cada trade."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Magos de artillería de larga distancia"
      reason: "Pokean fuera del rango de 850 de la Q de Cassiopeia. Sin dash no puede cerrar distancia, así que cada wave le sangra HP. Su power curve necesita farm en lane que no puede tomar segura."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globales / cross-map"
      reason: "Cassiopeia está atada a mid (sin roam rápido). Los rivales usan ulti para voltear side lanes y dragones; ella gana el 1v1 pero pierde el macro game (los trades de objetivo en otras zonas del mapa)."
    - examples: ["lissandra", "syndra"]
      archetype: "Magos burst con CC chain-lock"
      reason: "Inmovilizan a Cassiopeia antes de que W los grounded, luego le sueltan la full combo. La R de Lissandra es point-and-click — Banshee's ayuda pero no salva de una cadena de stun de 6 segundos con jungla detrás."
---

## Resumen

Cassiopeia es una battlemage (maga que pelea a media distancia, no desde el fondo) con unos 700 de rango — justo fuera del alcance de las basic auto-attacks. Gana los trades extendidos (intercambios de daño en lane) contra casi cualquiera que necesite un dash para llegarle. Su **Twin Fang (E)** tiene un cooldown de 0.75 segundos — el más bajo de cualquier mid laner —, así que en cuanto **Noxious Blast (Q)** envenena al objetivo se convierte en una corriente continua de daño que además la cura. **Miasma (W)** es la firma del kit: los enemigos dentro de la nube quedan *grounded*, así que dashes, blinks y movimientos dejan de funcionar hasta que salgan. Pickearla contra assassins móviles (kits que viven entrando y saliendo con dashes, tipo Yasuo, Akali o Zed) les arranca su herramienta de trabajo.

Su game plan es corto de explicar y lento de ejecutar: envenena la wave (la fila de minions) con **Q**, lanza **E** sin parar para limpiar y hostigar, suelta **W** en cuanto un rival con dash haga engage (se comprometa al fight), y apunta **R** de frente al nivel 6 — el cono stunea a quien la mira y solo ralentiza a los demás. No tiene dash, ni blink, ni equivalente de movimiento en su barra, así que el posicionamiento es el precio de cada jugada. Si das un paso de más hacia delante, el kit colapsa en una sola cadena de CC (una secuencia de stuns y roots seguidos). **CC** = "crowd control", cualquier efecto que te interrumpe: stun, root, slow, silence.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Cassiopeia consume mucho maná (cada E lo cuesta y lanza muchas) y el regen de Doran's es justo lo que la E spam necesita.

**Items core (en orden):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer item completo. La pasiva burn (daño repartido en los segundos posteriores a cada golpe, en vez de todo de golpe) se acumula en cada target envenenado que toque tu E, lo que en Cassiopeia es prácticamente cada cast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana (el item ignora parte de la Magic Resist enemiga, así tus hechizos pegan más). La pasiva Serpentine Grace amplifica también el Move Speed de las botas.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — el mayor multiplicador de AP (Ability Power, la stat que escala el daño mágico) del juego. Sube el daño por cast de la E que disparas 30+ veces en un teamfight largo.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — penetración mágica que escala más cuando el rival baja del 35% HP (pasiva por umbral de HP: efecto que se activa cuando el target baja de un % de vida). Encaja con rematar a las backline carries (los damage dealers squishies, como ADC y magos, que tu equipo necesita matar primero).

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra burst assassins (Zed, Talon, Akali — campeones que hacen mucho daño en 1-2 segundos). La stasis activa de 2.5 segundos (te vuelves invulnerable pero no puedes moverte ni castear) da tiempo para que la **E** vuelva del cooldown y para que el equipo haga peel (alejar a los enemigos de ti).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que te corta la E (charm de Ahri, R de Lissandra, gold card de Twisted Fate).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con curación apilada (Soraka mid, Vladimir, Dr. Mundo top): aplica Grievous Wounds (debuff que recorta la curación enemiga aproximadamente a la mitad), limitando lifesteal (HP recuperado del daño que infligen) y regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cámbialo en el slot de Shadowflame en cuanto un objetivo prioritario (el enemigo que tu equipo más necesita muerto, normalmente su carry principal) compre un item de Magic Resist.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra comps melee que tratan de caminarte encima. Cada E refresca un slow al target, peel (proteger) para tu backline además del ground de W.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (botas que dan Ability Haste, reduciendo cooldowns) son aceptables si quieres más uptime de **W** para mantener bloqueados los dashes del equipo rival.

**Skill order:** Sube **E** primero al máximo (botón principal de DPS), **Q** segunda (poison y Move Speed), **W** al final. Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con keystone **Stormraider's Surge** (el keystone es la runa principal en la cima del árbol; "proc" significa activar el efecto — Stormraider's procea tras 3 hits rápidos de hechizos), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**, o **Resolve** con **Second Wind** y **Bone Plating** contra mucho poke (chip damage de larga distancia que desgasta tu HP).

## Matchups clave

- **Yasuo / Yone:** Kit lleno de dashes. Su tercera Q es un dash con knock-up — la primera vez que te saltan encima, suelta **W** bajo tus pies. Se quedan pegados sin movimiento y la **E** spam gana. Guarda **R** para su ulti, así la comen de frente con stun.
- **Zed:** Threat champion. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item completo si coge ventaja. Suelta **W** sobre ti cuando active su ulti (te marca y teleporta a su shadow clone); si aterriza detrás de ti, el teleport del swap queda *grounded* por la W y no puede escapar.
- **Xerath:** Matchup duro. Te pokea fuera del rango de tu **Q** (te resta HP desde una distancia a la que no puedes responder). Cede algo de CS (creep score: el oro de matar minions) bajo torre y busca un roam (ir a otra lane a ayudar a un aliado) a bot al nivel 6 — pelearle en lane solo te sangra HP gratis.
- **Akali:** Antes del 6 ganas trades extendidos con E spam sobre targets envenenados. Después del 6 su smoke shroud (W) la oculta y rompe el target de la E. Wardea los lados y no empujes mucho hacia delante sin **R** lista.
- **Twisted Fate:** Puedes ganar la lane, pero no el mapa. Te stunea con su gold card, ulta a bot y vuelve la partida un cross-map fight (kill que ocurre lejos de donde estás) en el que no influyes. Empuja la wave en cooldown y pinga a tu bot lane cada vez que su **R** vuelva del cooldown.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** y un punto en **E** ya tienes el primer loop envenena-y-pega. Camina hacia delante cuando su wave (fila de minions) sea más grande que la tuya y fuerza un trade.
- **Nivel 6:** **Petrifying Gaze (R)** se desbloquea. Una **R** frontal a corta distancia stunea ~1.5 segundos, suficiente para encadenar el combo completo **Q-W-E-E-E**. Fuerza un fight sobre el rebote de la wave (el momento en que la fila de minions deja de avanzar y vuelve hacia ti).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completo (~ minuto 11-13):** Tu E spam ahora aplica un burn de daño-en-el-tiempo encima del daño directo. Empujas waves al doble de velocidad y presionas las ventanas de roam de tu mid rival.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** El daño por cast de la E escala muchísimo (gana mucho power con este item). Busca anclar los teamfights de mid alrededor de objetivos (Drake, Baron, torres) — Cassiopeia en late se queda más cerca del fight que otros magos, casi como segunda frontline.

## Errores comunes

- **Castear E sin poison en el target.** **Twin Fang** hace daño mágico normal sobre un target limpio y daño bonus solo en envenenados. Siempre **Q** (o W) primero, luego E spam — nunca al revés.
- **Guardar W para el engage perfecto.** **Miasma** también es defensa. En cuanto Yasuo lance W (el wind wall que bloquea proyectiles) o Akali ulte, suelta **W** sobre ti. El ground cancela sus movimientos aunque tu equipo no esté listo para hacer follow-up.
- **Apuntar R a ciegas.** **Petrifying Gaze** solo stunea a los enemigos que la miran. Desde el costado o por la espalda solo los slowea y desperdicias el cooldown. Camina al frente del fight, gírate y dispara R.
- **Empujar más allá del río sin visión.** Cassiopeia no tiene escape. Sin un ward (trinket de visión que se planta en el mapa) en el bush del río, una emboscada del jungla rival (un *gank*) con hard CC (stuns o roots largos, frente al soft CC que solo es slow) cierra tu lane.
- **Ignorar el maná en los primeros 5 minutos.** Cada E cuesta 40 de maná flat sin importar el rango. Castearla repetidamente sobre minions antes de tener Manaflow Band te seca la barra en dos waves y te deja indefensa contra un all-in (un compromiso total para matarte).

## Consejo avanzado

Practica soltar **W (Miasma)** *bajo tus propios pies* en el instante en que un dash te toca, no delante de ti. El ground se aplica en cuanto la nube aterriza — si Yasuo, Yone o Akali engagean en melee, están justo donde la nube spawnea y pierden al instante el acceso a su segundo dash. La mayoría de Cassiopeias siguen tirando W delante como si fuera un poke spell, perdiendo el uso defensivo que cierra en el sitio casi todo intento de all-in de un assassin.
