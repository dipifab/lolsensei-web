---
title: "Amumu Jungle Build & Guía — Patch 16.9"
slug: "amumu-jungle"
language: "es"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Amumu jungla para LoL Patch 16.9: clear path, build AP-tank (magic damage + tank stats), timing de ganks, matchups clave, setup de la R y errores comunes."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Las basic attacks aplican Curse al enemigo. Los targets con Curse reciben true damage extra de cualquier magic damage que les llegue — los hechizos de tu equipo pegan más fuerte."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Skillshot lineal de larga distancia que arrastra a Amumu hacia el primer enemigo impactado y lo stunea. Dos cargas — una para engage, otra para follow-up o escape."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Aura toggle que aplica daño % HP máximo a los enemigos cercanos cada segundo y refresca Curse sobre ellos. Consume maná mientras está activa — apágala fuera de combate."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Pasiva: recibes menos daño físico. Activa: AOE de corto alcance. El cooldown baja cada vez que te golpean, así que spámeala en peleas largas."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Stun AOE enorme que bloquea a todos los enemigos alrededor de Amumu y aplica Curse. Es el sentido del kit — cada teamfight empieza cuando esta conecta."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "contra muchos melee bruisers (Sett, Darius, Olaf): la burn aura se stackea con W y la armor te aguanta el focus de la frontline"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "cuando 3+ enemigos hacen magic damage: el shred AOE de magic resist amplifica cada hechizo de tu equipo sobre targets con Curse"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst comps que te focusean tras la R (Zed, LeBlanc, Syndra): la stasis te mantiene vivo mientras el equipo cierra la pelea"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que abre fights (Ahri charm, Lissandra R, Morgana Q): el spellshield bloquea el engage sobre ti"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Lanza Q desde la fog sobre un target clave, R para bloquear a todos en el rango y luego siéntate sobre la backline con W tickeando daño % HP mientras Tantrum se enfría con cada golpe que recibes."
  weakness: "Tools de engage predecibles y con cooldowns largos. Si la Q falla o un Cleanse Summoner quita la R, Amumu no tiene follow-up — lo kitean hasta que vuelven ambas, sin aportar nada por 90+ segundos."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
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
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "Comps de teamfight agrupado con daño AOE"
      reason: "La R de Amumu pilla a todos en un radio cerrado. Las comps que quieren pelear apretadas (Yasuo + Kennen con ults AOE, Katarina saltando entre targets, Miss Fortune Bullet Time) comen el stun juntas y alimentan su propio AOE a través de la passive Curse."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Carries inmóviles sin escape"
      reason: "Q es un skillshot de 1100 de rango que arrastra a Amumu al primer target impactado. Carries sin dash ni blink son arrancados de su posición en el momento en que dan un paso al frente para last-hittear la wave."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "Compañeros AP que snowballean tu engage"
      reason: "Cursed Touch convierte el magic damage en true damage extra sobre el target. Un equipo AP-heavy convierte un Q-R en kills instantáneas porque cada hechizo posterior pega más fuerte."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Bruisers móviles con parry, inmunidad o dashes"
      reason: "La W de Fiora paría el stun de la Q y lo refleja, la R de Tryndamere ignora el daño que tu W tickea durante la ventana unkillable, la tercera Q de Yone le saca del rango de Tantrum. Sobreviven al engage y le dan la vuelta a la pelea."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Artillería long-range sin compromiso"
      reason: "Pokean más allá de los 1100 de rango de la Q. Amumu tiene que caminar dentro de su daño solo para amenazar engage, y una Q fallada son 25-30 segundos libres para ellos para seguir empujando lane u objetivo."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksmen con escape integrado"
      reason: "La E de Ezreal, la W de Tristana y los hop reset de Kalista salen del radio de la R de Amumu después de que la Q conecte. Curse se desperdicia porque el carry se reposiciona antes de que el equipo pueda hacer follow-up al stun."
---

## Resumen

Amumu es el jungler de engage más simple del juego: caminas en la fog of war (la parte de mapa sin visión fuera de la zona aliada), tiras **Bandage Toss (Q)**, pulsas **Curse of the Sad Mummy (R)** y dejas que tu equipo descargue el daño. Su kit tiene un solo trabajo — abrir la pelea en tus términos — y lo hace desde más distancia que casi cualquier otro engage gracias al pull de 1100 de rango. La passive **Cursed Touch** multiplica a tus compañeros AP convirtiendo sus hechizos en true damage extra sobre cada target con Curse.

El precio: **R** está en cooldown de 100-150s y **Q** es tu único setup. Si fallas, pasas 90 segundos siendo kiteado, así que esta guía está construida en torno a elegir *la pelea correcta* en lugar de forzar cada gank. Game plan: clear, llega al nivel 6 y luego traduce cada R en una kill o un objective durante los siguientes 25-30 minutos.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade es el jungle starter: te deja dañar a los monstruos neutrales rápido y aplica un slow breve sobre los campeones enemigos. Refillable Potion es una pocima de healing que se rellena gratis en base, así ahorras gold del chip damage que recibes en los camps (los grupos de monstruos neutrales que farmeas).

**Items core (en orden):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — el item más importante. La passive de burn % HP máximo se duplica con la **W**, derritiendo a los tanques que intentan quedarse dentro de tu aura. Cómpralo cada partida.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — botas por defecto: dan **tenacity** (una stat que reduce la duración de stuns y slows que recibes), muy importante para un campeón de engage que necesita seguir caminando tras la R. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si el equipo enemigo tiene 3+ amenazas AD y ninguna cadena de hard CC.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (te curas con todo el daño que haces) más una passive que convierte parte del daño en true damage tras 3 segundos en combate. Encaja perfecto con el daño sostenido de la **W**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling para el late game. Con Liandry's + Riftmaker online, Deathcap lleva el daño de la **W** de "molesto" a "no puedo quedarme aquí 2 segundos".

**Items situacionales:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — contra equipos con muchos melee bruisers (campeones cuerpo a cuerpo que mezclan daño y aguante, ej. Sett, Darius, Olaf). El aura de fuego se suma a la de la **W** para AOE doble y da armor extra.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — cuando 3+ enemigos hacen magic damage. Reduce la magic resist de los enemigos cercanos, así que cada hechizo que tu equipo aterrice sobre targets con Curse pega más fuerte.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra burst comps que te focusean en cuanto cae la R (Zed, LeBlanc, Syndra). La stasis (una ventana de 2.5s en la que no puedes recibir daño ni actuar) te mantiene vivo mientras el equipo cierra la pelea.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target de larga duración (Ahri charm en all-in, Lissandra R, Morgana Q). El spellshield (una barrera de un solo uso que bloquea el siguiente hechizo dirigido contra ti) come el engage.

**Botas:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** son el default. Plated Steelcaps solo contra comps AD-heavy sin grandes cadenas de CC.

**Skill order:** Sube **E** primero al máximo (clear speed y daño en peleas sostenidas), **Q** en segundo (gank threat y stun más frecuente), **W** al final. Pon punto en **R** a niveles 6, 11 y 16.

**Runas:** Primario **Resolve** con **Aftershock** (te da armor y magic resist extra durante 2.5 segundos cuando aterrizas un stun de Q o la R — la rune de engage del juego), **Font of Life** (tu CC marca a los enemigos y tu equipo se cura cuando los golpea), **Conditioning** (resistencias extra después del minuto 12), **Revitalize** (potencia escudos y curaciones sobre ti). Secundario **Sorcery** con **Manaflow Band** (mana sustain para mantener la **W** activa durante los clears) y **Transcendence** (ability haste extra — una stat que baja el cooldown de todas tus habilidades).

## Matchups clave

- **Lee Sin / Elise:** Junglers de early-game que invaden tu lado débil. Trackéalos con **wards** (objetos de visión que revelan un área pequeña por ~90 segundos) en raptors y red buff (camps de tu propia jungla). Evita duelos 1v1 antes de nivel 3; haz un full clear (matar cada camp una vez) y ve al Scuttle (el cangrejo del río que da visión al morir) para que pierdan tempo buscándote.
- **Master Yi / Karthus:** Junglers de scaling. Fuerza peleas y objetivos (Drake en bot side, Rift Herald en top side, Baron después) antes del minuto 18 — tú escalas bien, ellos escalan mejor. Cada R que pulses debe apuntar a su carry (el marksman o burst mage de la backline que hace la mayor parte del daño), no al tank de delante, para que el equipo enemigo no tenga nada que peelear.
- **Hecarim / Volibear:** Engage espejo, clear más rápido. No intentes outclearlos; juega alrededor de tus laners y busca un gank en una lane con prio (prio = la lane que está empujando hacia el rival, así el laner puede salir unos segundos sin perder minions) hacia el minuto 4.
- **Maokai / Sejuani:** Tank junglers con su propio engage AOE. Quien aterrice su R primero gana el teamfight. Guarda **Q** para después de que ellos commiteen así tu stun encadena con el suyo (el enemigo queda bloqueado durante la suma de ambos stuns).
- **Kha'Zix / Rengar:** Asesinos que reventan tu backline. Body-blockea por tus carries (literalmente ponte entre el asesino y tu damage dealer para absorber los golpes) en lugar de pararte delante del equipo enemigo — tu aura de **W** más la **E** Tantrum los castigan por commitear sobre un target al lado tuyo.

## Power spikes y condiciones de victoria

- **Nivel 3:** Con **E**, **W** y **Q** desbloqueadas, tu primera amenaza de gank (la visita sorpresa del jungler a una lane para conseguir una kill) es real. Mira la lane con el enemigo más bajo de HP y el follow-up de CC más fuerte; una rotación Q-W-AA-E (AA = auto-attack) bajo un aliado snowballeando (una ventaja que crece con el tiempo: kill → gold → item → más kills) suele ser una kill.
- **Nivel 6:** Primer **Curse of the Sad Mummy**. Es el power swing más grande del juego para Amumu. Encuentra una pelea en los 30 segundos siguientes a llegar al 6 — gankea una lane, contesta Scuttle o monta el primer Drake.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completo (~ minuto 12-14):** Tu **W** pasa de poke a amenaza real. Pelear por Drake o Rift Herald con la **W** tickeando sobre el target en disputa gana el objetivo sin pulsar siquiera la **R**.
- **Spike de 3 items (~ minuto 22-26):** Liandry's + Riftmaker + Deathcap online. El cooldown de la R es lo bastante corto como para teamfightear dos veces por timer de Baron. Fuerza cada objetivo; este es tu pico.

## Errores comunes

- **Tirar Q en cooldown sin setup.** Una Q desnuda gasta tu único tool de engage. Guarda la Q hasta que el enemigo ya esté slowed, rooteado (no puede moverse) o enganchado por un aliado — ej. la Q de Morgana acierta → tu Q encima es garantizada. Q usada como tool de scouting significa que no tienes nada cuando llega la pelea de verdad.
- **Pulsar R en cuanto llegas a la pelea.** R es AOE *centrada en Amumu*. Si la pulsas 200 unidades antes, no stuneas a nadie y gastas el cooldown de 100-150s. Camina hasta estar dentro de su backline, *entonces* R.
- **Dejar W activa fuera de combate.** **Despair** consume 8 maná por segundo mientras está encendida, incluso sin enemigos cerca. Llegarás al minuto 8 sin maná para un stun de Q en un gank claro. Apágala el segundo en que termina la pelea o el clear.
- **Ignorar el reset de cooldown de Tantrum.** La passive de **E** baja su propio cooldown cada vez que recibes una basic attack. En una pelea larga contra melees puedes pulsar **E** cada 1-2 segundos — quédate dentro de su rango de ataque y sigue spammeándola.
- **R sobre el tank en vez del carry.** R es una habilidad de teamfight. Sí, el tank está más cerca, sí, lo cogerás a él — pero tu equipo quiere el stun sobre el carry. Guarda **Flash** (la Summoner Spell que casi todo champion lleva y que te teletransporta una distancia corta una vez cada ~5 minutos) para flanquear (entrar a la pelea por un lado o por detrás, no de frente) y engagear sobre la backline, no sobre el tank de delante.

## Consejo avanzado

Practica el combo **Flash + Q** en el target dummy. El truco: lanza la Q primero y *luego* haces Flash a mitad de animación en dirección al target. La animación de pull de la Q se reengancha a tu posición post-Flash, dándote un proyectil 425 unidades más corto que es casi imposible de dodgear. Esto convierte la Q de skillshot de 1100 de rango en stun garantizado a quemarropa, y es la jugada que separa a los Amumu mains de los one-tricks: te deja flanquear sobre la backline a través de la fog y conectar la Q sobre un target en movimiento que nunca vio venir el engage.
