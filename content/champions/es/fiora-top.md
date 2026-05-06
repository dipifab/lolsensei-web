---
title: "Fiora Top Build & Guía — Patch 16.9"
slug: "fiora-top"
language: "es"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Fiora top para League of Legends Patch 16.9: build de duelista, gestión de Vitals, timing del parry, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "Aparece un punto débil brillante (un Vital) alrededor de cada campeón enemigo cercano. Golpearlo hace true damage, cura a Fiora y le da Move Speed durante unos segundos."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Dash corto direccional que apuñala al enemigo más cercano y resetea el timer del auto-attack. Acertar reembolsa casi todo el cooldown: encadenar Q es su movilidad principal."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry: bloquea todo el daño y los disable entrantes durante un instante, luego apuñala en una dirección. Slowea al primer enemigo, o lo stunea si has parado un efecto de CC."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Potencia los próximos dos auto-attack. El primero ralentiza al objetivo, el segundo siempre crítica. Ambos dan bonus de attack speed durante la ventana."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Revela los cuatro Vitals alrededor del campeón objetivo. Acertarlos todos (o matarlo después de al menos un Vital) cura a Fiora y a los aliados cercanos en una gran AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Plated Steelcaps con mucho daño mágico o cadenas de CC (Lissandra, Ryze, pull de Sett)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "contra bruisers tankier (Mundo, Sion, Ornn) — crit y cura en el primer hit ayudan contra HP-stackers"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra tops móviles (Camille, Irelia, Renekton) — dash + slow para stickear cuando la Q sola no basta"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Mordekaiser, Vladimir, Rumble) — escudo mágico y MR para el splitpush 1v1"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contra frontlines con mucha armor (Malphite, Rammus, Shen) — armor pen y slow para mantener Vitals en rango"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Gestiona Vitals para curarte y hacer snowball early, llega a Trinity Force y luego splitpush en una side lane hasta que envíen dos. En teamfight, R al squishy para la cura AOE que gana fights largos."
  weakness: "Squishy en los primeros 6 niveles y muy item-dependent. Cadenas de hard CC y poke ranged (Teemo, Quinn, Gnar) la alejan de los Vitals; sin resets de Q no tiene movilidad."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts lentos que dependen de una sola gran habilidad"
      reason: "La W de Fiora para la única wind-up telegrafiada que los define (la pull E de Darius, la slam W de Sett, el silence Q de Garen). Con la wind-up gastada, ella rodea y free-hitea Vitals todo el trade."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "Tanks HP-stackers que no pueden frenar sus Vitals"
      reason: "Los Vitals hacen un porcentaje de la HP máxima del objetivo en true damage (daño que ignora armor y MR). Cuanta más HP suben, más los rompe su R en fights largos."
    - examples: ["nasus", "kayle"]
      archetype: "Melees de scaling late con laning early débil"
      reason: "Los apaliza fuera de la wave desde nivel 2 con resets de Q, matándolos o empujándolos bajo torre repetidamente antes de que lleguen a los items que los hacen peligrosos."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Tops ranged que kitean fuera del rango de Q"
      reason: "Fiora no tiene respuesta al poke ranged antes de nivel 6. Se quedan a rango de auto-attack, la ciegan o dashan, y ella no llega a un Vital para curarse."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmishers con movilidad on-demand"
      reason: "Sus dashes ignoran su juego de posicionamiento. La E de Jax stunea durante la ventana del parry, los resets Q de Irelia la reposicionan cada segundo, la R de Camille la atrapa en 1v1 y le drena recursos."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Tanks con hard CC point-and-click"
      reason: "Su CC es fiable y no parable cuando ya está sobre ti. Una R de Malphite o un stop-charge de Poppy cancela la ventana de R de Fiora y su equipo juega 4v5 mientras tanto."
---

## Resumen

Fiora es una **skirmisher** — una duelist melee que gana fights prolongados 1v1 en lugar de hacer burst en 1-2 segundos como un asesino. Su kit gira en torno a su pasiva **Duelist's Dance**: un punto débil brillante llamado **Vital** aparece alrededor de cada campeón enemigo cercano, rotando a un nuevo lado cada pocos segundos. Golpear el Vital hace **true damage** (daño que ignora armor y MR), la cura y le da Move Speed. Su Q **Lunge** es un dash corto a cooldown bajo que se reembolsa casi entero al impactar, así que encadenar Q alrededor del rival para llegar al siguiente Vital es el loop mecánico central. Su W **Riposte** es un **parry** — un escudo breve que bloquea la próxima instancia de daño o CC y contraataca apuñalando, stuneando al objetivo si has parado un efecto de CC.

El plan de juego es sencillo de describir pero mecánico: en lane gestiona Vitals para curarte y rosicar al rival, busca un all-in de nivel 2 o nivel 6 (un fight donde te comprometes totalmente a la kill), y luego **splitpush** (push una side lane sola para forzar al enemigo a enviar a alguien a frenarte) en cuanto sale **Trinity Force**. Alrededor de su R **Grand Challenge** Fiora se vuelve uno de los campeones 1v1 más fuertes del juego: ulta a un objetivo aislado, golpea los cuatro Vitals, y la cura AOE final puede dar la vuelta a un teamfight ella sola. Es squishy y item-dependent en los primeros 6 niveles, así que la lane early va de Vitals, no de kills.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La pasiva de regen HP amortigua el poke (daño ranged que rosica HP sin comprometerse a un fight) hasta tu spike de Q-E en nivel 2. Coge ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** sólo contra una lane melee donde esperes hacer all-in early (p. ej. mirror Fiora, Garen).

**Core items (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primer spike (el salto más grande en daño y **stickiness**, tu capacidad de quedarte pegada al objetivo que intenta huir). El proc Spellblade on-hit triggea cada Q para un gran daño bonus, y la pasiva de Move Speed tras cada habilidad apila la chase a Vitals. AD, attack speed, ability haste (stat que reduce los cooldowns de las habilidades) y HP encajan con lo que el kit pide.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto cuando el enemigo te hace daño sobre todo con auto-attacks.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP más un **escudo lifeline**: cuando tu HP baja del ~30%, salta un escudo automático. Esa ventana es justo cuando necesitas tiempo extra para cerrar los dos últimos Vitals sobre el objetivo de tu R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el **burst** AD (daño alto en 1-2 segundos) en sangrado lento (daño repartido en los segundos siguientes). En kill, el bleed restante se elimina — un reset limpio para dives en splitpush.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cleave AOE en auto-attacks más omnivamp (lifesteal que funciona con cualquier daño que hagas, no sólo autos). Duplica tu waveclear para splitpushear sin perder demasiado tiempo.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo enemigo tiene mucho daño mágico o cadenas de **CC** (crowd control: stuns, roots, knockbacks — cualquier cosa que te bloquee). La tenacity (stat que reduce la duración del CC) mantiene utilizables las ventanas de parry W en teamfight.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primer item alternativo contra lanes de bruiser tankier (Mundo, Sion, Ornn). Cada primer auto sobre un campeón en fight critea y cura — sustain extra contra HP-stackers.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contra tops móviles (Camille, Irelia, Renekton). El dash + slow activo da un segundo gap-closer (herramienta para cerrar la distancia con un enemigo) cuando los resets de Q solos no alcanzan.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst **AP** (Ability Power, la stat detrás del daño mágico) fuerte (Mordekaiser, Vladimir, Rumble). El escudo mágico lifeline + MR mantiene ganable el splitpush 1v1.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contra frontlines que apilan armor (Malphite, Rammus, Shen). Armor pen más una proc (pasiva que se dispara automáticamente con cada golpe que hace daño) de slow mantiene a los tanks pinneados lo suficiente para limpiar los cuatro Vitals.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** son el estándar. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el equipo enemigo tenga tres o más fuentes de CC o de daño mágico pesado.

**Skill order:** Maxea **Q** primero (el cooldown baja por rank, los resets se vuelven casi instantáneos). Maxea **E** segunda (más daño en el crit potenciado, slow más largo para preparar Vitals). **W** se maxea última. Coge **R** en niveles 6, 11, 16.

**Runes:** Árbol primario **Precision** con keystone (la runa principal del árbol) **Conqueror** — escala AD bonus mientras sigues luchando, capada tras ~5 segundos. Combina con **Triumph** (cura y oro en takedown), **Legend: Bloodline** (lifesteal que apila en takedowns) y **Coup de Grace** (más daño bajo el 40% HP — perfecta para cerrar Vitals). Árbol secundario **Resolve** con **Bone Plating** (reducción de daño en los próximos 3 hits tras recibir daño) más **Revitalize** (potencia la cura AOE de tu R). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clave

- **Darius:** Skill matchup. Su Q en el filo exterior aplica una stack de bleed y te out-tradea raw, pero todo su kit está telegrafiado: **W** (parry) sobre su pull E y el trade se da la vuelta. Si paras la pull queda stuneado casi un segundo — Q in, dos Vitals, sales. Nunca tradees con su pasiva a 4-5 stacks.
- **Camille:** Matchup duro. Su hookshot E stunea atravesando tu W si conecta el segundo cast, y su R te aísla 1v1. Guarda **W** para su R, no para su Q. Compra ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** en lugar de Trinity si hace snowball early.
- **Teemo:** Lane brutal. Te ciega (cancela tus auto-attacks por un breve periodo) on cooldown y poka desde fuera del rango Q. **Freeza** la wave cerca de tu torre (deja de pushear y mantén la wave de tu lado) para negarle el farm (oro y XP de minions), y llama al jungla.
- **Garen:** Favorable. Q-W para baitar su **W** (su escudo de damage reduction), luego camina al lado para el Vital lateral. El silence de su Q es una wind-up clavada — paralo on reaction. Evita all-in bajo su R salvo que vayas 1-2 items por delante.
- **Jax:** Matchup parejo que Fiora gana tras un item. Para su **E** (la wind-up de stun de 2 segundos) y la lane es tuya. Sin ese parry, su E + counter-strike te out-tradea porque stunea atravesando cualquier hit que metas durante el channel.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + E desbloqueadas tienes una ventana real de all-in. Q in para un Vital, E para slow + crit auto, camina al lado para el siguiente Vital. La mayoría de las lanes pierden un tercio de su HP en un solo trade de nivel 2.
- **Nivel 6:** Se desbloquea la primera **R**. Incluso a cero items, R aísla a un objetivo y la cura AOE te mantiene viva tras la kill. Fuerza un 1v1 cuando tu jungla aparece top side.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 11-13):** Daño y stickiness pegan el salto más grande aquí. Puedes splitpushear una side lane y batir 1v1 a quien envíen. Fuerza presión en side lane e ignora teamfights de mid cuando salga.
- **Tres items + R online (~ minuto 22-26):** Pico de teamfight. R al objetivo más squishy, baila por los cuatro Vitals, y la cura AOE mantiene viva a todo tu equipo a través de un segundo engage. Si no llegas a la back line, R al frontliner con más HP — el true damage corta su build igual.

## Errores comunes

- **Spamear Q on cooldown por daño.** La Q es herramienta de posicionamiento primero, daño segundo. Si Q hacia el enemigo y comes su combo entera, has gastado dash y reembolso. Q **hacia un Vital**, no hacia el campeón.
- **Gastar W en auto-attacks.** La W para cualquier fuente de daño, pero un auto de minion parado es potencial gastado. Guarda W para la mayor habilidad individual del enemigo. Un parry limpio sobre un CC es una ventana de kill gratis.
- **Ultar contra una pared.** La R coloca cuatro Vitals en los lados cardinales del objetivo. Si el enemigo está pegado a una pared, dos Vitals quedan en el lado pared y no llegas. Tira al objetivo a campo abierto antes, luego R.
- **Splitpushear sin vision.** Fiora bate 1v1 a cualquiera pero pierde 1v2 siempre. Pon un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** en el bush de side-lane enemigo antes de shovear — sin él, cada shove invita a un gank gratis del que no escapas.
- **Tradear contra una pasiva llena.** Juggernauts como Darius, Sett, Renekton ganan los trades raw cuando su pasiva está cargada. Si su barra está llena, retírate, pushea la wave y tradea sólo cuando se vacíe.

## Consejo avanzado

Practica el **timing del parry W** sobre ultis point-and-click (habilidades que se autoapuntan, como la R de Mordekaiser) en lugar de skillshots (habilidades que apuntas a mano). Casi todo el mundo prueba a W sobre la wind-up de la R de Malphite o de Sion, lo cual está bien pero es predecible. Las jugadas enormes son parar la **R de Mordekaiser** (parada lo stunea casi un segundo y te marchas tranquila), la **R de Skarner** (la suppression se cancela y queda stuneado) y la **R de Warwick** (frame-perfect, pero una limpia cierra el fight). Monta un custom game, pide a un amigo que juegue uno de estos campeones y drilla el parry hasta que dejes de pre-castarlo y empieces a reaccionar. Cuando sea reflejo, cada 1v1 con ulti hard-CC se da la vuelta a tu favor incluso con desventaja de items.
