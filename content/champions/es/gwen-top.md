---
title: "Gwen Top Build & Guía — Patch 16.9"
slug: "gwen-top"
language: "es"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Guía de Gwen top para League of Legends Patch 16.9: starter, build core AP bruiser, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Las auto-attack infligen daño mágico extra basado en el HP máximo del objetivo. Gwen recupera HP de parte del daño que hace a campeones."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Tijeretazo en cono con hasta 6 cortes. El cono central inflige true damage y reaplica la pasiva en cada corte — habilidad anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Crea una zona de niebla de 4 segundos. Los enemigos de fuera no pueden seleccionarla — solo quien entra en la niebla la golpea. Reset defensivo."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash corto que da attack speed, rango de auto y on-hit AP unos segundos. Cooldown reembolsado en parte si golpea a un campeón."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lanza una salva de agujas que ralentiza y aplica la pasiva. Hasta 2 relanzamientos más, cada salva hace más daño que la anterior."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers y assassins (Camille, Fiora, Rengar) — la stasis de 2.5s cubre el cooldown de W y rompe su burst window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (pool de Vladimir, R de Lissandra, suppression de Malzahar) — el escudo bloquea una habilidad"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contra matchups de poke ranged (Vayne top, Teemo) — más ability haste y movement speed para cerrar la distancia"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra equipos con 4+ tank/bruiser — sustituye Riftmaker para burn porcentual del HP máximo desde el minuto 1"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Sobrevive el early, completa Riftmaker hacia el minuto 18 y haz splitpush en side lane forzando a 2 enemigos a pararte. En teamfight derrite la frontline con el true damage on-hit de Q."
  weakness: "Early débil (poco burst, sin waveclear ranged). La counterean los top ranged, los outscalers de true damage como Fiora y las cadenas de CC point-and-click que bloquean la W."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision como primaria: Conqueror stackea durante los trades largos de Q + auto, dando daño adaptativo y healing. Triumph premia las multikill, Legend: Alacrity potencia la ventana on-hit de E, Last Stand añade daño a baja HP."
    secondary_rationale: "Resolve como secundaria: Second Wind regenera HP tras el harass ranged (clave contra tops a distancia), Overgrowth escala HP bruto al late game donde brillan los fights de Gwen dentro de la W mist."
    secondary_alternative: "Contra matchups heavy AP sin poke, cambia Resolve por Sorcery con Manaflow Band (sustain de mana para spamear Q) y Transcendence (más ability haste para más reembolsos de E)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Bruisers melee lentos sin poke ranged"
      reason: "Q aplica true damage porcentual del HP máximo e ignora la armor. Un 1v1 largo dentro de la W mist derrite a fighters melee tanky que no pueden kitear ni hacer disengage."
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "Tanks que escalan en resistencias"
      reason: "El true damage de Q y el on-hit AP de E ignoran tanto armor como magic resist. Los tanks acumulan defensas que ella bypasea por completo."
    - examples: ["irelia", "jax"]
      archetype: "Fighters dependientes de items"
      reason: "Sus power spikes llegan al item 2-3 hacia el minuto 25. Gwen completa Riftmaker antes y snowballea la side lane antes de que ellos lleguen al core."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "Outscalers de true damage o early fuerte"
      reason: "Los Vitals de Fiora también hacen true damage y sus dashes de Q ignoran el rango de la W mist. Riven outdamagea a Gwen en niveles 1-3 antes de que la pasiva entre en stack."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Tops ranged que kitean desde rango de auto"
      reason: "Gwen necesita rango melee para aplicar el on-hit AP y el true damage de Q. Los kiters ranged interrumpen el engage e impiden cualquier trade limpio."
    - examples: ["malphite", "pantheon"]
      archetype: "Engage point-and-click con stun"
      reason: "Sus cadenas de CC bloquean a Gwen antes de que active la W. Stuneada a mitad del dash, se come la combo entera enemiga antes de que caiga la mist."
---

## Resumen

Gwen es un AP bruiser — un campeón melee que escala con Ability Power (la stat AP) en lugar de Attack Damage y aguanta algunos golpes en cuerpo a cuerpo en vez de reventar al objetivo desde rango. También es una "skirmisher": gana duelos prolongados, no mata al objetivo en dos segundos como haría un assassin. Su kit le permite derretir tanks con **true damage** (daño que ignora tanto armor como magic resist), recuperar HP en pleno fight gracias a la pasiva, y reposicionarse con un dash que se reembolsa parcialmente. Vive en side lanes y duelos 1v1.

El game plan es sobrevivir los primeros 10 minutos sin regalar kills, completar el primer item importante hacia el minuto 12-14 y empezar a splitpushear — empujar una side lane sola para obligar al equipo enemigo a mandar 2 jugadores a pararte. Sobre el minuto 25 con 3 items puedes entrar en teamfights y encadenar auto-attacks (basic attacks, "AA") sobre la frontline rival (los tanks/bruisers delante de su equipo) hasta derretirla.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** en matchups contra tops ranged o con mucho poke (chip damage continuo desde la distancia). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** en matchups melee más cómodos cuando quieras empezar a escalar AP desde ya.

**Core items (en orden):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — tu spike grande. Tras 2 segundos en combat, parte de tu daño se convierte en true damage (la pasiva "Void Corruption") y obtienes "omnivamp" (recuperas HP de una porción de cualquier daño que hagas, abilidades y auto-attacks por igual). Encaja con el playstyle de fights largos de Gwen mejor que cualquier otro item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana que hace entrar más tu daño contra squishies (campeones con poca defensa, normalmente las carries enemigas).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed más AP más una pasiva que añade daño mágico extra a cada auto-attack. Combinado con **E** (la ventana on-hit de Skip 'n Slash, en la que cada auto-attack también aplica daño mágico basado en AP) te conviertes en una torreta DPS sostenida en fights largos.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica tu AP total. El item de scaling de late game que te transforma de "DPS tanky" en carry de verdad.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers (campeones que se tiran sobre tus carries de backline para matarlos) y assassins (Camille, Fiora, Rengar). El activo te da 2.5 segundos de stasis (te vuelves intargeteable pero tampoco puedes actuar), suficiente para romper su burst window — los 1-2 segundos en los que intentan deletearte.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC ("crowd control": stuns, roots, charms — cualquier cosa que bloquee a tu campeón en el sitio) single-target. Pool de Vladimir seguido de ult, **R** de Lissandra, suppression de Malzahar. El escudo bloquea una habilidad enemiga al completo.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contra matchups de poke ranged (Vayne, Teemo). Más ability haste (cooldowns más rápidos) y movement speed te ayudan a alcanzarlos de verdad.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contra 4+ tanks/bruisers en el equipo enemigo. Sustituye a Riftmaker como primer item si necesitas burn porcentual del HP máximo desde el minuto 1 de cada fight.

**Boots:** Sorcerer's Shoes es el default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si el equipo enemigo tiene 3+ amenazas AD (Attack Damage) incluyendo el jungler. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra composiciones con mucho CC (3+ stuns o knockups).

**Skill order:** Maxea **Q** primero (su true damage y scaling de AP), maxea **E** segundo (cooldown y daño), deja **W** para el final. **R** en niveles 6, 11, 16. Prioridad nivel 1: **Q** para los last-hits (matar minions); nivel 2 coge **E** para el dash; nivel 3 coge **W** para seguridad.

**Runes:** Primaria **Precision** con **Conqueror** (un keystone que stackea durante los fights largos para dar daño adaptativo y healing), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundaria **Resolve** con **Second Wind** y **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clave

- **Fiora:** Matchup duro. Su **Q** también hace true damage en sus "Vitals" — los cuatro puntos brillantes alrededor de tu campeón que, golpeados con su **Q**, activan true damage. Su **R** elimina cualquier efecto cleanse (un buff que rompe el crowd control sobre ti). Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, guarda **W** para el momento en que se activa su **R** y no tradees auto-attacks en niveles 1-2 (un "trade" = un intercambio breve de golpes en el que ambos entran, se golpean y vuelven atrás); ella outscala a la mayoría de bruisers melee en 1v1 puro.
- **Camille:** Igualada o desfavorable. Su hookshot (**E**, un gancho a larga distancia que la lanza encima de ti) bypasea tu **W** mist — puede hacer engage desde fuera del rango de protección de la niebla ("engage" = el momento en que un campeón se compromete a iniciar un fight). Guarda **W** para el momento posterior a su hookshot y sal solo cuando su **W** (cono true damage en su auto potenciada) esté en cooldown.
- **Sett:** Favorable. Él también es bruiser pero no tiene respuesta al true damage porcentual del HP de tu **Q** en trades largos. Salta el all-in temprano (el fight de niveles 1-3 en el que alguien se compromete a la kill), escala hasta ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** y luego 1v1 en side lane.
- **Darius:** Igualada. Evita el rango de su **E** pull; camina hacia delante solo dentro de tu **W** mist. Usa **E** para hacer disengage (= salir del fight para escapar) cuando los stacks de su passive bleed lleguen a 4 — su pasiva aplica un sangrado damage-over-time en sus auto-attacks, y el quinto stack es el potenciado que activa su daño extra.
- **Teemo:** Desfavorable. Sus auto-attacks ranged te trituran fuera de **W**, y su **Q** ciega tus auto-attacks (la fuente principal de tu daño). Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, pídele al jungler un gank temprano (una visita sorpresa del jungler para ayudarte a cerrar una kill) y juega para escalar — la lane no la ganas.

## Power spikes y condiciones de victoria

- **Nivel 6:** Se desbloquea la primera **R**. La salva de agujas aplica el daño mágico porcentual del HP de tu pasiva a cada campeón golpeado, y el slow encadena tus auto-attacks (puedes seguir golpeándolos mientras están ralentizados). Fuerza un fight con la ayuda del jungler hacia el minuto 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** El spike de omnivamp + true damage. Ahora puedes hacer 1v1 a la mayoría de top laners y splitpushear una side lane hasta que manden dos jugadores a pararte.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 26-28):** Spike DPS. Con **E** activa tus auto-attacks van mucho más rápido y aplican on-hit AP — el momento de entrar en teamfights en lugar de solo splitpushear.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 32+):** Fase carry. Tus auto-attacks arrancan 25%+ de HP por golpe en la frontline enemiga. Cualquier teamfight en el que tu equipo te proteja ("peelea" enemigos de encima de ti) acaba en victoria.

## Errores comunes

- **Quedarse en W demasiado tiempo.** Hallowed Mist es una ventana de 4 segundos, no un escudo permanente. Actívala en el momento exacto en que el enemigo se compromete con un CC duro (un stun o un root); activar **W** anticipándote quema el cooldown y te deja expuesta los próximos 18-22 segundos.
- **Q a la wave para hacer poke.** El coste de mana de tu **Q** es alto y el cono tiene rango corto (450 unidades). Guarda **Q** para los momentos en los que puedas golpear a un campeón en el centro del cono (la zona true damage), no para chip damage en oleadas de minions.
- **Tirar la E hacia delante a HP completo.** Tu **E** es a la vez engage y botón de pánico. Si la malgastas hacia delante a HP completo y luego aparece el jungler enemigo, no tienes un segundo dash para escapar.
- **Auto-atacar fuera del rango de la R.** Cuando **R** está disponible, puedes lanzar 3 salvas de agujas en total. Quédate dentro de 1000 unidades del borde del fight para poder relanzar siempre **R** sobre un objetivo de baja HP en lugar de correr hacia la muerte.
- **Comprar ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads sin CC.** Las botas por defecto son ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes; cambia a Mercury's solo si hay 3+ amenazas hard CC o un mid AP fed. Las botas defensivas te cuestan ~20% de tu output de daño.

## Consejo avanzado

Usa la **W** mist para fintar skillshots (= habilidades que tienes que apuntar manualmente como línea o área, lo opuesto a point-and-click): cuando un enemigo con un stun o root a larga distancia (Lissandra **E**, Sett **W**, Morgana **Q**) está cargando la animación de cast, suelta **W** en el borde de su rango de lanzamiento y atraviésala. La niebla te vuelve intargeteable desde fuera — a menudo se comen el cast y tú consigues 4 segundos gratis de auto-attacks sin CC. El truco es tempar **W** en el frame de wind-up (la animación previa antes de que salga el hechizo), no después de que ya se hayan comprometido.
