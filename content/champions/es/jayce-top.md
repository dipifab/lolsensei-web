---
title: "Jayce Top Build & Guía — Patch 16.9"
slug: "jayce-top"
language: "es"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Guía Jayce top para League of Legends Patch 16.9: mecánicas de weapon-swap, build de lethality, matchups clave, power spikes, errores frecuentes y consejo avanzado."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Cada weapon swap (R) le da a Jayce un breve burst de Movement Speed y le permite ignorar la colisión con unidades por un instante."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: salta al objetivo, daño físico y ralentiza a los enemigos cercanos. Cannon: skillshot AOE de largo alcance — herramienta principal de poke."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: pasiva que regenera maná con autos, activa un aura que daña alrededor. Cannon: máxima Attack Speed en los siguientes 3 ataques — ventana de burst."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback corto que inflige daño mágico en % de HP máximo — execute y disengage. Cannon: coloca un gate que acelera aliados y amplifica una Q (Shock Blast) que pase a través."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Cambio de stance (cooldown 6s). Alterna entre Hammer (engage, sustain, knockback) y Cannon (poke, AOE waveclear). El primer ataque tras pasar a Cannon reduce Armor y Magic Resist del objetivo."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra amenazas AP fuertes (Vladimir, Rumble, Kennen): escudo mágico salva del burst y da AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target de engage (Camille E, Sett W, Malphite R): el spellshield bloquea el lockdown"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "cuando vas adelante y te focusan: la resurrección permite committear más en skirmish"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia desde Plated Steelcaps si el enemigo tiene 3+ amenazas AP/CC; tenacity reduce stuns y slows"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Usa Cannon Q para bajar HP antes del nivel 6, luego all-in con Hammer Q salto, W aura, E knockback cuando esté bajo 50%. Convierte la ventaja de lane en presión de splitpush."
  weakness: "Mana hungry: una Q fallada arruina el trade. Gap-closers duros (Camille E, Malphite R) cierran la distancia antes del swap. Cae en late vs builds con MR pesado."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack se activa con el patrón de trade Cannon Q + AA + Hammer Q-AA-E, dando +8% de daño por skirmish. Triumph regenera HP en multi-takedowns, Legend: Alacrity lleva la AS al cap dentro de W (Hyper Charge), Coup de Grace cierra kills bajo 40% HP."
    secondary_rationale: "Sorcery secundario: Manaflow Band evita quedarse sin maná en lanes largas con spam de Cannon Q. Transcendence añade Ability Haste, así la ventana de weapon swap vuelve antes — cada Q extra en lane es HP menos para el rival."
    secondary_alternative: "Contra tops ranged con poke fuerte (Vladimir, Kennen, Quinn), cambia Sorcery a Resolve con Bone Plating (reduce daño en los primeros 3 golpes recibidos) y Second Wind (regen pasiva de HP bajo 50%) para sobrevivir la fase de lane."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Bruisers melee inmóviles sin respuesta a distancia"
      reason: "No tienen forma de interactuar con el rango de Cannon Q. Pókealos fuera de la wave los primeros 6 niveles y no escalan: Nasus pierde stacks de Q, Garen no llega a Q, Sett no llena su barra de W (Haymaker)."
    - examples: ["yorick", "tryndamere"]
      archetype: "Scalers lentos sin tools de harass en lane"
      reason: "Su kill threat depende de items. Cannon Q les quita minutos de farm antes del power spike, y Hammer E knockback niega la ventana de all-in cuando finalmente intentan committear."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tanques con MR por items y ult de engage"
      reason: "Itemizan contra el poke Cannon (Bramble Vest, Negatron Cloak) y su ult (Malphite R, Maokai R) hace flash-engage por encima del Hammer E knockback. Jayce cae si la lane se alarga sin kill."
    - examples: ["vladimir", "kennen"]
      archetype: "Tops ranged con sustain o rango igualado"
      reason: "La Q de Vladimir (Transfusion) cura el poke; la W de Kennen (Electrical Surge) supera el rango de Cannon Q. Ambos fuerzan una lane de poke que Jayce pierde sin la opción de all-in que tendría contra un melee bruiser."
    - examples: ["camille", "renekton"]
      archetype: "Bruisers con CC duro y gap-close rápido"
      reason: "Camille E (Hookshot) y Renekton W (Ruthless Predator) cierran la distancia dentro de la cast window de Cannon Q y bloquean a Jayce con CC antes de que pueda swap a Hammer E. No tiene dash para apartarlos."
---

## Resumen

Jayce es un skirmisher híbrido ranged-melee que vive o muere por su weapon swap (R). En **Cannon stance** es un especialista de poke a largo alcance con una skillshot AOE Q y un movement-speed gate (E) que amplifica la Q cuando se dispara a través. En **Hammer stance** se convierte en un melee bruiser con leap-Q, aura W y un knockback (E) que hace daño mágico en % de HP máximo. La R tiene cooldown de 6 segundos, y el primer ataque tras pasar a Cannon reduce Armor y Magic Resist del objetivo — el trigger de entrada de cada all-in.

Top lane Jayce quiere lanes largas. Erosiona HP con **Cannon Q + E gate** (poke a distancia), retrocede a rango seguro, repite. Cuando el enemigo está bajo media vida, swap a Hammer, salta con **Q**, suelta **W** por el daño aura y la pasiva mana-on-hit, cierra con **E** knockback si sobrevive. Convierte cualquier ventaja de lane en presión de splitpush — empujar una side lane solo para forzar al rival a responder. El rango de Cannon Q en side es uno de los splits más seguros del juego, y Eclipse + Hubris dan el burst (daño alto en 1-2 segundos) para ganar skirmish 1v1 contra la mayoría de top-laners.

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** en matchups poke-friendly. Cambia a ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** contra un top ranged (Vladimir, Quinn, Kennen) para sobrevivir los primeros intercambios de Cannon Q.

**Core items (en orden):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primer spike. El escudo procca con dos abilidades en 1.5s, condición que Jayce cumple naturalmente con Cannon Q + Hammer Q tras swap. Da AD, omnivamp (life-leech sobre todo el daño) y Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto contra un top AD (la mayoría del meta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (estadística que ignora una cantidad fija de armadura enemiga) más una pasiva (Eminence) que acumula stacks por takedown (kill o asistencia) y hace que el daño crezca de una kill a la siguiente. Ideal como segundo item cuando vas adelante.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality y slow on damage. El slow en Cannon Q convierte a enemigos en huida en targets de catch para Hammer Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra amenazas AP (Vladimir, Rumble, Kennen). El escudo mágico salva cuando llega el burst y añade AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC duro single-target de engage (Camille E, Sett W, Malphite R). El spellshield se carga fuera de combate y bloquea la siguiente abilidad de lockdown (CC duro que te inmoviliza).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — cuando vas adelante y te focusan. La resurrección permite committear más en skirmish; si cambias una vida por dos, vuelves para llevarte una tercera.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde Plated Steelcaps si el equipo enemigo tiene 3+ amenazas AP o CC; la tenacity pasiva reduce la duración de stuns y slows.

**Boots:** Plated Steelcaps por defecto. Mercury's Treads contra magic damage pesado o chain CC.

**Skill order:** Maxea **Q** primero (la fuente principal de daño en ambos stances), **E** segundo (knockback para execute, gate para amplificar el poke), **W** al final. Pon punto en **R** en niveles 6, 11, 16.

**Runes:** Primario **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**. Contra tops ranged con poke fuerte, cambia a **Resolve** con **Bone Plating** + **Second Wind**.

## Matchups clave

- **Darius:** Pre-6, mantenlo a distancia (kite) con Cannon Q y nunca entres en el ring exterior de su Q (Decimate). El Hammer E knockback cancela el reset de su W (Crippling Strike) si tienes el timing correcto; una vez que lo empujas bajo torre, pierde todo kill threat.
- **Camille:** Gana post-6 cuando tiene la E (Hookshot) up. Trackea el cooldown de su E: cuando está abajo, freezea la wave (mantén la línea de minions delante de tu torre sin empujar) y bájale HP con Cannon Q. Cuando está up, mantén ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** cargado.
- **Malphite:** La lane es ganable hasta que complete ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** más un item de armadura, después la Cannon Q le hace cosquillas. Gana la lane en los primeros 12 minutos o acepta una scaling loss; considera rushar items de teamfight para skirmish en side.
- **Fiora:** Baitea su W (Riposte) fingiendo Hammer Q — empieza la animación del salto y para. Cuando la W esté en cooldown, all-in con la combo Hammer completa. Si pegas la Q en su W pierdes una abilidad con cooldown de 16s para nada.
- **Vladimir:** El matchup más duro del pool estándar. Su Q cura tu poke Cannon y su W (Sanguine Pool) esquiva el Hammer E knockback. Pide ganks tempranos al jungla antes de que tenga 2 items, luego evita teamfights y haz splitpush (empujar una side lane solo para forzar al rival a responder) en vez de agruparte.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + W o Q + E):** Cannon Q + AA + swap a Hammer Q es un trade del 35-40% HP en la mayoría de los squishies. Si el enemigo se acerca a last-hittear un melee minion, suelta la combo y back off; el Move Speed pasivo en swap te saca antes de que pueda responder.
- **Nivel 6 (primer rank de R):** Ambos stances unlockean al máximo. El all-in Cannon-to-Hammer ahora es kill threat al 40% HP en lugar de chunk trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minuto 11-13):** Primer gran spike. Escudo + omnivamp permiten committear en trades más largos; ya no tienes que retirarte tras un solo ciclo Cannon-Hammer.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ minuto 19-22):** Los stacks de Eminence (la pasiva de AD bonus en takedown) empiezan a hacer snowball (ventaja creciente: kill → AD bonus → más kills). Fuerza una skirmish en side para acumular stacks de Eminence, luego rota a objetivos a daño pleno.

## Errores comunes

- **Tirar Cannon Q sin setup.** La Q sola cuesta mucho maná y es fácil de esquivar. Suelta primero la **E** (Acceleration Gate) hacia el enemigo; el gate amplifica la Q que lo atraviesa (más rango, más daño), y el ligero delay fuerza al enemigo a committear a una dirección de movimiento antes de que dispares.
- **Swappear a Hammer demasiado pronto.** Si swappeas antes de que el enemigo esté bajo ~50% HP, estás committeando a un fight melee sin el burst para cerrar. Mantente Cannon hasta que el chip damage llegue al umbral, luego swap y all-in.
- **Olvidar el shred R-Cannon en el primer ataque.** Cuando swappeas a Cannon (R), tu primera AA reduce Armor y Magic Resist. Quemarla en un minion es tirar daño gratis; guárdala siempre para un campeón.
- **Splitpushear sin R disponible.** La R tiene cooldown de 6 segundos pero es tu única tool de escape — el speed boost en swap. Splitpushear en un gank 4v1 con la R abajo significa morir. Trata la R como un dash con cooldown largo cuando evalúes el riesgo.
- **Ignorar costos de maná en trades extendidos.** La Hammer W tiene una pasiva que regenera maná en autos; si te quedas Cannon en un trade largo, el pool se vacía. Swap a Hammer por 2-3 autos a media trade para recargar, luego swap de nuevo para cerrar en Cannon.

## Consejo avanzado

Domina el **R-cancel** al final de Hyper Charge (Cannon W). Cuando pulsas Cannon W obtienes Attack Speed máxima por 3 ataques — pero si swappeas a Hammer (R) inmediatamente después de que aterrice el tercer ataque, te saltas la animación de auto-recovery y arrancas el salto Hammer Q un cuarto de segundo antes. Es la diferencia entre cazar un objetivo en Flash y verlo escapar con 5 HP. Practícalo en el Practice Tool contra un target dummy hasta que el timing sea memoria muscular antes de llevarlo a ranked.
