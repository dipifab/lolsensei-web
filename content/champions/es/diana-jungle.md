---
title: "Diana Jungle Build & Guía — Patch 16.9"
slug: "diana-jungle"
language: "es"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Diana jungle para League of Legends Patch 16.9: clear inicial, timings de Scuttle y Drake, rutas de gank, build AP burst, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Cada tercer basic attack golpea en cono a los enemigos cercanos con daño mágico bonus. Lanzar cualquier hechizo da attack speed 5 segundos: motor del clear de jungle."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Skillshot en arco que marca con Moonlight 3 segundos. La marca habilita el reset de E y es tu herramienta de setup para los gank."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Tres orbes que hacen daño mágico al contacto y dan un escudo. Excelente para duelos y para hacer camps sin perder HP."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Dash a target con daño mágico. El cooldown se resetea sobre un objetivo marcado por Q: motor de tu gap-close."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Atrae y ralentiza a los enemigos cercanos, luego explota sobre Diana con daño mágico en área. Único CC del kit (CC = crowd control, control de masas): rango corto."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra tanks de hard-engage (Malphite, Sejuani, Leona): la stasis esquiva su CC chain tras tu R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra comps con dos o más frontline de mucho HP (Cho'Gath, Ornn): el burn escala con HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap apenas un priority target compre Magic Resist (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucho healing (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (charm de Ahri, R de Lissandra, stun de Twisted Fate)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lanza Q desde el fog, dashea con E sobre el target marcado, R para separarlo del equipo, luego W y basic-attack reset con el follow-up de tu equipo. Fuerza fights al nivel 6 sobre objetivos."
  weakness: "Rango efectivo corto (E solo 825 unidades). Champions con disengage fuerte (R de Janna) o peel te despegan del carry; sin Q mark no tienes un segundo dash para escapar."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
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
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana gana los duelos largos en su jungle: Pale Cascade escuda una rotación de daño y Lunar Rush se resetea con la Q mark para un re-engage que no pueden kitear."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "Su power dip llega al nivel 6 mientras la R de Diana abre la presión mid-game. Empareja su tempo de first-clear y trade objetivos hasta que Luden's Echo voltee la partida."
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana clearea más rápido con los passive resets y llega antes al Scuttle Crab. Counter-junglea los camps de atrás tras cada Drake: no rotan a tiempo."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "Invaden a nivel 3 antes de que Diana tenga la E y le rompen el clear. Su CC pasa por encima del escudo de Pale Cascade: un 1v1 en su jungle pre-6 es una kill gratis para ellos."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "La R de Diana solo funciona a melee range: estas tools de counter-engage la sacan de la pull window antes de que Moonfall termine el channel y desperdicia su único CC."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "Caminan dentro de Moonfall (R de Olaf cleansea el CC, R de Udyr ignora el pull) y hacen más DPS que Diana cuando se cae el escudo: ella no tiene una segunda escape."
---

## Resumen

Diana es una diver de daño mágico: assassin melee con escudo integrado, dash gratuito sobre el target marcado y uno de los engage de un solo botón más fuertes del juego (un engage = la acción que abre el fight). En la jungle cambia los gank early por un clear rápido y snowballea al nivel 6 — snowball es la ventaja inicial que crece con el tiempo (kill → gold → item → más kills). Cuando **Lunar Rush (E)** puede encadenar una kill con un segundo dash, se convierte en el pick "pulsa R, borra al carry" por excelencia. (Un diver es un melee que salta sobre la back line del equipo enemigo.)

Su game plan como jungler es empujar el primer clear con **Pale Cascade (W)** y el on-hit de **Moonsilver Blade (P)**, llevarse el **Scuttle Crab** (el cangrejo del río que da visión y un pequeño speed shrine) sobre el minuto 3:30, y luego empezar a gankear lanes con vision setup. Después del nivel 6, cualquier teamfight cerca de un Drake o el Rift Herald es una win condition: **Moonfall (R)** atrae a los priority targets y tu equipo termina el trabajo.

## Build Recomendada

**Starting items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. La mascota Gustwalker da movement speed fuera de combate, perfecta para el mid game gank-heavy de Diana. Salta Mosstomper (mascota de sustain): tu **W** ya escuda un ciclo de clear.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primer spike de burst (burst = daño alto concentrado en 1-2 segundos), AP y ability haste. Los bolts despedazan a los squishies en el momento que les haces E.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana. Boots por defecto en el 95% de las partidas.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra: la pasiva HP-threshold (pasiva que se activa cuando el enemigo está bajo cierto umbral de HP, aquí 35%) cuadra perfecto con tu finisher R-into-E.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling late-game. Tu mayor slot de AP en un solo item.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra tanks de hard-engage (Malphite, Sejuani, Leona). Activa la stasis (te vuelves invulnerable pero no puedes moverte ni actuar 2.5 segundos) justo después de la R: el follow-up CC enemigo falla.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — cuando el equipo rival tiene dos o más frontline con mucho HP (Cho'Gath, Ornn): el burn escala con su pool de HP y tickea mientras te repositionas.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — apenas un priority target compre Magic Resist (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con mucho healing (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (crowd control: stuns, roots, charms) como el charm de Ahri o la R de Lissandra.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** es el default. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra comps AD-pesadas con dos AD threats, o Mercury's Treads contra mucho CC mágico.

**Skill order:** Maxea **Q** primero (waveclear, daño extra de Q, ventana de Moonlight más larga). Maxea **W** segundo (valor de escudo y clear speed). **E** al final: gana rango por nivel pero lo que importa es el reset de cooldown sobre Moonlight, no el scaling crudo. Sube **R** a niveles 6, 11, 16.

**Runes:** Primario **Domination** con **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Magic Resist (o Health contra mucho poke).

## Matchups clave

- **Lee Sin:** Evita las invades a nivel 2 — su follow-up Q-Q rompe tu W shield. Wardea tu blue buff top-side y clearea bot-to-top para encontrarlo en el Scuttle con los passive procs listos.
- **Graves:** Lo out-dueleas tras el nivel 6. Engagea desde el fog (la parte no wardada de la jungle, fog of war) con **Q** para que el rango de su dash no esquive la marca; con Moonlight encima, **E** es un gap-close garantizado (gap-close = habilidad que cierra distancia con el enemigo).
- **Elise:** Carrera de power-spike. Ella gana los gank a nivel 3, tú el fight a nivel 6. Empareja su tempo de first-clear, hovea Drake con visión para que no lo solee.
- **Jarvan IV:** Matchup duro. Su knock-up E-Q cancela el channel de tu **R**. Espera a que él committee la combo primero, luego E sobre él para el trade. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de lo habitual.
- **Kha'Zix:** Matchup parejo que vira a tu favor en el item 2. Te bursta a melee range; baitea el isolation jump con HP bajo, **W**-escuda su Q, después E-R reset. Nunca pases por tu jungle sin ward control o te comes un isolated jump gratis.

## Power spikes y condiciones de victoria

- **Nivel 3 (Q + W + E):** Kit completo. El primer clear termina sobre 3:15: rusha Scuttle Crab antes que el jungler enemigo. La visión del río más el shrine de 50 HP arma el resto del mapa.
- **Nivel 6 (primera Moonfall):** Power de skirmish del río (un skirmish es un fight pequeño 2v2 o 3v3, no un teamfight pleno). Q desde un brush, E sobre el target marcado, R para juntar a sus dos carries — tus laners burstean al resto. El efecto pull a nivel 6 más fuerte del pool jungler.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minuto 9-11):** Spike de burst. Una combo Q-E limpia sobre un target squishy (champion con pocas defensas, como ADCs y la mayoría de mages) borra el 60-70% de su HP antes de que su equipo reaccione. Fuerza fights sobre el segundo Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 22-25):** Umbral de one-shot contra cualquier squishy sin item de Magic Resist. Busca picks (eliminar a un enemigo aislado fuera del teamfight) en el setup de visión de Baron o Elder Dragon.

## Errores comunes

- **Caminar sobre wards en el approach del gank.** El único stealth tool de Diana es el fog. Pasa por el río o de vuelta por tu propia jungle, y haz que tu laner limpie la ward del bush antes de committear.
- **Tirar R sobre la front line.** Tu R atrae a todos en radio 475: arrastrar al tank hacia tu equipo es justo lo que ellos querían. Espera que el engage se desarrolle, luego R sobre la back line (back line = los carries que hacen daño desde posición segura).
- **Usar E en cooldown sin Q mark.** Sin Moonlight, **E** tiene 14 segundos de cooldown y rango corto. Siempre Q primero: el reset sobre el target marcado es lo que hace que Diana se sienta móvil.
- **Greedear el tercer camp en el primer clear.** Si el jungler enemigo es más rápido (Graves, Shyvana, Karthus), pierdes la carrera de invade a nivel 3. Cross-mappea a sus laners: si mid está missing, full-clear es trampa.
- **Over-committear un gank sin salida.** Diana no tiene escape integrada después de la E. Si la lane no tiene slow ni follow-up CC, tu engage se vuelve 1v3 cuando vuelvan los summoners enemigos.

## Consejo avanzado

Practica la combo **Q-Flash-E-R** como starter de teamfight. Con tu Q en el aire, Flashea hacia adelante en el momento del impacto: el target marcado aparece a tu lado, **E** chainea inmediato sobre el reset Moonlight, y tu **R** atrapa a toda su back line apiñada sobre el carry. La combo gana fights que no tendrías derecho a ganar — pero requiere muscle memory para Flashear a mitad de la animación de Q, no después de que aterrice el proyectil. Entrénala en practice tool sobre un dummy quieto hasta que el orden de inputs sea automático.
