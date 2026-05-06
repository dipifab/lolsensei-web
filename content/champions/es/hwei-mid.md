---
title: "Hwei Mid Build & Guía — Patch 16.9"
slug: "hwei-mid"
language: "es"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Guía Hwei mid para League of Legends Patch 16.9: starter kit, build de mago burst, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Al dañar a un campeón lo marca. Una segunda spell distinta de daño completa la firma y detona una AOE mágica tras un breve delay."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Abre 3 sub-spells de daño. QQ bola de fuego (% HP máx), QW rayo retardado (bonus contra aislado/inmovilizado), QE camino de charcos de lava que ralentizan."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Abre 3 sub-spells de utility. WQ línea de Move Speed para aliados, WW pool de escudo en el tiempo, WE 3 cargas que potencian los próximos cast con daño extra y mana refund."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Abre 3 sub-spells de control. EQ cono de miedo, EW ojo fijo que dispara una root teledirigida, EE fauces retardadas que arrastran y ralentizan."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Proyectil de larga distancia que se pega al primer campeón impactado, expande zona de slow y luego explota por gran daño mágico."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins con varios gap-closers (Zed, Akali, Talon) — la stasis compra tiempo sin dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun) que te bloquea antes del cast"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con sustain apilado (Soraka, Vladimir, Dr. Mundo): Grievous Wounds corta la cura"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "boots alternativas si el equipo necesita más uptime de R que magic pen flat"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Combina el proc de la pasiva con QW Severing Bolt sobre un objetivo rooted o slowed en peleas de objetivo, luego superpón R desde max range para encadenar follow-up."
  weakness: "Sin dash, sin escape. Cada sub-spell tiene cast time: cualquier all-in que cierre la distancia (assassin, diver) antes de tu secuencia de CC suele matarte."
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
    primary_rationale: "Sorcery primaria: cualquier root EW o slow QE garantiza un proc de Arcane Comet en la Q de seguimiento, regalando poke gratis. Manaflow Band sostiene el coste de mana enorme, Transcendence reduce CDs de las nueve sub-spells, Scorch cierra kills."
    secondary_rationale: "Inspiration secundaria: Biscuit Delivery compensa el mana early pésimo, Cosmic Insight reduce CDs de summoners y te da Flash más a menudo en teamfights."
    secondary_alternative: "Contra artillery de mucho poke (Xerath, Vel'Koz), pasa a Resolve con Second Wind (regen vs poke) y Overgrowth (HP extra late) para sobrevivir a trades que no puedes responder."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "El ojo EW de Hwei se fija y dispara una root teledirigida contra objetivos sin movilidad, encadenando un QW garantizado de daño enorme. Sin dash no salen de la ventana de cast."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei los outranges en cada nivel y los mantiene slowed con los charcos QE. No alcanzan su posición de cast sin gastar Flash."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "Su engage requiere corta distancia y tell lento. Hwei pre-castea EW desde la fog, los root al engage y se aleja para resetear el trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Sus dashes y blinks superan los cast times de Hwei. Para cuando abre E y elige la sub-spell correcta, el assassin ya está dentro con burst listo."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Lo poke-an más allá del rango de Q y lo obligan a castear bajo presión. Hwei no tiene escape ni forma de cerrar la distancia, así que cada wave le sangra HP."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall bloquea cada proyectil de sub-spell de Hwei (Q, EW, R). Dashean por encima de sus slows y cierran el trade antes de que complete la firma pasiva."
---

## Resumen

Hwei es un mage artillery a larga distancia con el kit más profundo del juego: cada Q, W y E abre un menú de tres sub-spells, sumando nueve presses de habilidad más la R. Cumple el rol de un control mage en mid lane (zonificar enemigos lejos del farm, poke desde el rango, lock-down con CC, snipe a rezagados), pero cambia simplicidad por adaptabilidad: cada wave eliges entre daño, utility y CC según la situación. Hwei es frágil e inmóvil: posicionarse detrás de la frontline (el tank o bruiser de tu equipo que absorbe golpes) es obligatorio.

Su game plan es por capas: marca un objetivo con una sub-spell de daño para iniciar la pasiva **Signature of the Visionary**, luego completa la firma con un segundo cast de daño para añadir una AOE mágica bonus. La apertura más limpia en lane es EW (el ojo teledirigido que root) seguido de QW (Severing Bolt, que gana daño enorme bonus contra rooted o inmovilizados). Fuera de lane el kit cambia hacia control: WQ para Move Speed aliada, WW para una pool de escudo, EE jaws para arrastrar a un equipo apiñado dentro de tu AOE.

## Build Recomendada

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. El sustain de mana es crítico: las sub-spells de Hwei queman mana muy rápido, y la regen de Doran's Ring es la forma más barata de quedarte en lane hasta terminar el primer ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** rumbo a Luden's Companion.

**Core items (en orden):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — power spike de burst, mana sustain para la rotación constante de sub-spells y ability haste que reduce CDs.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Cada explosión de la firma pasiva se beneficia y normalmente apuntas a squishies.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — pen mágica porcentual. Cómpralo de tercer item en cuanto un enemigo prioritario se haga una pieza de Magic Resist: Hwei escala enorme con AP multiplicado y el daño debe pasar.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — tu slot de mayor AP. El multiplicador +35% AP amplifica cada sub-spell y la explosión pasiva por igual.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con la pasiva HP-threshold (pasiva de un item que se activa cuando el enemigo está bajo umbral de vida, aquí 35%) que se alinea con el daño final de la R.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins con varios gap-closers (Zed, Akali, Talon). La stasis compra los segundos que a Hwei le faltan al no tener dash.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun). El escudo bloquea el lock que de otro modo te interrumpiría el cast.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps con sustain apilado (Soraka mid, Vladimir, Dr. Mundo top). El Grievous Wounds corta la regen sobre la que se apoyan.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — alternativa a ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** cuando el equipo necesita más uptime de R que penetración.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. Cambia a ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si el equipo necesita más R como herramienta de finisher.

**Skill order:** Maxea **Q** primero (las sub-spells de daño, donde salen las kills), **E** segundo (sub-spells de CC), **W** al final. Punto en **R** en niveles 6, 11, 16.

**Runes:** Primary **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Cambia el secondary a **Resolve** (Second Wind + Overgrowth) contra matchups de poke pesado.

## Matchups clave

- **Yasuo / Yone:** Wind Wall bloquea todos los proyectiles de sub-spell (Q, EW, R). Aguanta E y W hasta que gasten habilidades; nunca face-castees una QQ bola de fuego con el muro arriba.
- **Zed / Akali:** Amenazas de dive (campeones que saltan sobre ti bajo torre y te matan a pesar de los disparos). Vencen los cast times de Hwei. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item tras ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pre-castea EW desde la fog antes de ir a last-hittear, nunca face-up.
- **Orianna:** Matchup parejo que escala hacia ella en teamfights. La poke-as en lane con QQ + proc de pasiva pero ella gana fights apiñados con la R Shockwave; en posicionamiento late, sepárate del equipo para que su R no os pille al carry y a ti juntos.
- **Twisted Fate:** Carrera de prioridad de roams. Tiene gold-card stun y R global; trackea su ulti con vision wards en river y tri-bush. Si te elige gold card, EW para root antes de que cierre la distancia.
- **Veigar:** Parejo-favorable en lane. Su E jaula es la única amenaza real (entrar = stun). Quédate fuera del radio de la jaula al pokearlo; QW Severing Bolt lo castiga duro si come su propia root por error.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con un punto en Q (Disaster) más la E inicial, tienes una sub-spell de daño y otra de CC. EW root en QW Severing Bolt es una verdadera ventana de all-in (un compromiso total, no un trade rápido) si su jungler no está cerca.
- **Nivel 6:** La primera **Spiraling Despair** desbloquea el control de objetivos. La R se pega al primer champion golpeado y expande zona de slow, perfecto para montar fights de Scuttle Crab para tu jungler.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completado (~ minuto 13-15):** El control de wave se da la vuelta. Con el sustain de mana de Luden's puedes shovear cualquier wave con QQ + QE en una rotación, liberando roams y dives bot.
- **Spike de 3 items (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ minuto 27-30):** El daño de combo con proc pasivo bypassa el primer item de MR enemigo. Fuerza fights de objetivo mientras tu frontline esté viva.

## Errores comunes

- **Spammear Q a CD sin setup.** Abre siempre con E (sub-spell de CC) o golpea a un objetivo ya slowed/rooted por un aliado. Las QQ a pelo desde posición neutra las esquiva por reacción cualquiera con dash y desperdician mana.
- **Elegir la sub-spell incorrecta bajo presión.** Las sub-spells se comprometen al pulsar la tecla del menú: no hay cancel. Practica el finisher correcto en custom o normal antes de llevar Hwei a ranked: QW para objetivos aislados, QE para waveclear, QQ para chip damage en HP bajo.
- **Olvidar que la firma pasiva requiere dos abilities diferentes.** Dos QQ seguidos no detonan la pasiva. La firma se dispara solo cuando una segunda spell de daño de una sub-spell distinta golpea: típicamente QQ luego QW, o EW root luego QW Severing Bolt.
- **Usar la R como damage finisher en vez de herramienta de setup.** El valor principal de Spiraling Despair es la zona de slow para el follow-up, no el daño de la explosión. Cástala primero para anclar al enemigo a la combo del equipo, luego superpón tus sub-spells.
- **Quedarse a max range en teamfights sin peel.** Hwei no tiene dash. El rango máximo de proyectil te pone fuera de la protección del equipo, y un assassin de flank te borra. Sitúate en la segunda posición más alejada para que un peeler (la habilidad de tu support que te protege de divers) pueda intervenir.

## Consejo avanzado

Usa WE Stirring Lights para convertir el dead time en burst (daño alto concentrado en 1-2 segundos). Pre-cástala antes de entrar al teamfight: coloca tres cargas potenciadas sobre tus próximos tres casts o auto-attacks, cada uno añade daño mágico bonus y refunde mana. La secuencia óptima es WE → EW ojo → QW Severing Bolt → auto-attack al rooted: cada cast en la cadena consume una carga, y el refund de mana te permite seguir inmediatamente con R sobre un segundo objetivo sin quedarte OOM (out-of-mana, sin mana a media pelea).
