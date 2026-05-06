---
title: "Jayce Top Build & Guia — Patch 16.9"
slug: "jayce-top"
language: "pt-br"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Guia Jayce top para League of Legends Patch 16.9: mecânicas de weapon-swap, build de lethality, matchups principais, power spikes, erros comuns e dica avançada."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Cada weapon swap (R) dá ao Jayce um burst breve de Movement Speed e permite ignorar a colisão com unidades por um instante."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: salta no alvo, dano físico e lentidão nos inimigos próximos. Cannon: skillshot AOE de longo alcance — ferramenta principal de poke."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passiva que regenera mana com auto, ativa uma aura de dano. Cannon: Attack Speed máxima nos próximos 3 ataques — janela de burst."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback curto que causa dano mágico em % HP máximo — execute e disengage. Cannon: posiciona um gate que acelera aliados e amplifica uma Q (Shock Blast) que passa por ele."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Troca de stance (cooldown 6s). Alterna entre Hammer (engage, sustain, knockback) e Cannon (poke, AOE waveclear). O primeiro ataque após mudar para Cannon reduz Armor e Magic Resist do alvo."
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
      against: "contra ameaças AP fortes (Vladimir, Rumble, Kennen): escudo mágico salva do burst e dá AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target de engage (Camille E, Sett W, Malphite R): spellshield bloqueia o lockdown"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando está na frente e focado: a ressurreição permite committar mais nas skirmishes"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "trocar Plated Steelcaps se inimigo tem 3+ ameaças AP/CC; tenacity reduz stuns e slows"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Use Cannon Q para baixar HP antes do nível 6, depois all-in com Hammer Q salto, W aura, E knockback abaixo de 50%. Converta vantagem de lane em pressão de splitpush."
  weakness: "Mana hungry: uma Q errada arruína o trade. Gap-closers duros (Camille E, Malphite R) fecham distância antes do swap. Cai no late vs builds com MR pesado."
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
    primary_rationale: "Press the Attack proca pelo padrão de trade Cannon Q + AA + Hammer Q-AA-E dando +8% de dano por skirmish. Triumph regenera HP em multi-takedowns, Legend: Alacrity coloca a AS no cap dentro do W (Hyper Charge), Coup de Grace fecha kills abaixo de 40% HP."
    secondary_rationale: "Sorcery secundária: Manaflow Band evita ficar sem mana no spam de Cannon Q em lanes longas. Transcendence adiciona Ability Haste, então a janela de weapon swap volta antes — cada Q a mais na lane é HP a menos no inimigo."
    secondary_alternative: "Contra tops ranged com poke forte (Vladimir, Kennen, Quinn), troque Sorcery por Resolve com Bone Plating (reduz dano nos 3 primeiros golpes recebidos) e Second Wind (regen passiva de HP abaixo de 50%) para sustain de lane."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Bruisers melee imóveis sem resposta a distância"
      reason: "Não têm como interagir com o alcance da Cannon Q. Pokeie eles fora da wave nos primeiros 6 níveis: Nasus perde stacks de Q, Garen nunca chega na Q, Sett nunca enche a barra de W (Haymaker)."
    - examples: ["yorick", "tryndamere"]
      archetype: "Scalers lentos sem ferramentas de harass na lane"
      reason: "O kill threat deles depende de itens. Cannon Q tira minutos de farm antes do power spike, e Hammer E knockback nega a janela de all-in quando finalmente tentam committar."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tanques com MR via item e ult de engage"
      reason: "Itemizam contra o poke Cannon (Bramble Vest, Negatron Cloak) e a ult deles (Malphite R, Maokai R) faz flash-engage por cima do Hammer E knockback. Jayce cai se a lane vai longa sem kill."
    - examples: ["vladimir", "kennen"]
      archetype: "Tops ranged com sustain ou alcance equivalente"
      reason: "A Q de Vladimir (Transfusion) cura o poke; a W de Kennen (Electrical Surge) supera o alcance da Cannon Q. Ambos forçam uma lane de poke que Jayce perde sem a opção de all-in que teria contra um melee bruiser."
    - examples: ["camille", "renekton"]
      archetype: "Bruisers com CC duro e gap-close rápido"
      reason: "Camille E (Hookshot) e Renekton W (Ruthless Predator) fecham a distância dentro da cast window da Cannon Q e travam Jayce com CC antes que ele consiga swap pra Hammer E. Sem dash pra peel."
---

## Visão geral

Jayce é um skirmisher híbrido ranged-melee que vive ou morre pelo seu weapon swap (R). Em **Cannon stance** é um especialista em poke de longo alcance com skillshot AOE Q e um movement-speed gate (E) que amplifica a Q quando atravessada. Em **Hammer stance** vira um melee bruiser com leap-Q, aura W e um knockback (E) que causa dano mágico em % HP máximo. A R tem cooldown de 6 segundos, e o primeiro ataque após mudar para Cannon reduz Armor e Magic Resist do alvo — o gatilho de entrada de todo all-in.

Top lane Jayce quer lanes longas. Erode HP com **Cannon Q + E gate** (poke à distância), recue para alcance seguro, repita. Quando o inimigo está abaixo de metade do HP, swap pra Hammer, salte com **Q**, jogue **W** pelo dano de aura e a passiva mana-on-hit, finalize com **E** knockback se sobreviver. Converta qualquer vantagem de lane em pressão de splitpush — empurrar uma side lane sozinho para forçar o inimigo a responder. O alcance da Cannon Q em side é um dos splits mais seguros do jogo, e Eclipse mais Hubris dão o burst (dano alto em 1-2 segundos) para vencer skirmishes 1v1 contra a maioria dos top-laners.

## Build recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** em matchups poke-friendly. Troque por ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** contra um top ranged (Vladimir, Quinn, Kennen) para sobreviver às primeiras trocas de Cannon Q.

**Core items (em ordem):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primeiro spike. O escudo proca por duas habilidades em 1.5s, condição que Jayce cumpre naturalmente com Cannon Q + Hammer Q após o swap. Adiciona AD, omnivamp (life-leech em todo dano) e Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots padrão contra um top AD (a maioria do meta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (estatística que ignora uma quantidade fixa da armadura inimiga) mais uma passiva (Eminence) que acumula stacks por takedown (kill ou assist) e faz o dano crescer de uma kill para a próxima. Ideal como segundo item quando você está na frente.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality e slow on damage. O slow na Cannon Q transforma inimigos em fuga em alvos de catch para Hammer Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra ameaças AP (Vladimir, Rumble, Kennen). O escudo mágico salva quando o burst chega e adiciona AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC duro single-target de engage (Camille E, Sett W, Malphite R). O spellshield carrega fora de combate e bloqueia a próxima habilidade de lockdown (CC duro que te imobiliza).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando você está na frente e sendo focado. A ressurreição permite committar mais em skirmishes; se trocar uma vida por duas, volta para pegar uma terceira.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troque dos Plated Steelcaps se o time inimigo tem 3+ ameaças AP ou CC; a tenacity passiva reduz a duração de stuns e slows.

**Boots:** Plated Steelcaps padrão. Mercury's Treads contra dano mágico pesado ou chain CC.

**Skill order:** Maxe **Q** primeiro (a fonte principal de dano em ambas stances), **E** depois (knockback para execute, gate para amplificar poke), **W** por último. Coloque ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Precision** com **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Contra tops ranged com poke forte, troque para **Resolve** com **Bone Plating** + **Second Wind**.

## Matchups principais

- **Darius:** Pré-6, kite ele (recue enquanto ataca, fora do alcance dele) com Cannon Q e nunca entre no anel externo da Q dele (Decimate). O Hammer E knockback cancela o reset da W dele (Crippling Strike) com timing certo; uma vez empurrado para baixo da torre, ele perde todo kill threat.
- **Camille:** Ela vence pós-6 quando tem a E (Hookshot) up. Tracke o cooldown da E dela: quando está down, freeze a wave (segure a linha de minions na frente da sua torre sem empurrar) e tire HP com Cannon Q. Quando está up, mantenha ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** carregado.
- **Malphite:** Lane vencível até ele completar ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** mais um item de armadura, depois disso a Cannon Q faz cócegas nele. Vença a lane nos primeiros 12 minutos ou aceite scaling loss; considere rushar itens de teamfight para skirmishes em side.
- **Fiora:** Baite a W dela (Riposte) com Hammer Q falso — comece a animação do salto, depois pare. Quando a W estiver em cooldown, all-in com a combo Hammer completa. Se você Q dentro da W dela, perde uma habilidade com cooldown 16s à toa.
- **Vladimir:** O matchup mais difícil do pool padrão. A Q dele cura através do seu poke Cannon e a W dele (Sanguine Pool) esquiva o Hammer E knockback. Peça ganks cedo ao jungler antes que ele tenha 2 itens, depois evite teamfights e splitpush em side (empurrar uma side lane sozinho para forçar o inimigo a responder) em vez de agrupar.

## Power spikes e condições de vitória

- **Nível 2 (Q + W ou Q + E):** Cannon Q + AA + swap pra Hammer Q é um trade de 35-40% HP na maioria dos squishies. Se o inimigo se aproxima para last-hit em um melee minion, jogue a combo e back off; o Move Speed passivo no swap te tira antes que ele responda.
- **Nível 6 (primeiro rank de R):** Ambas stances unlockam no máximo. O all-in Cannon-to-Hammer agora é kill threat a 40% HP em vez de chunk trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completo (~ minuto 11-13):** Primeiro grande spike. Escudo + omnivamp permitem committar em trades mais longos; você não precisa mais recuar após um único ciclo Cannon-Hammer.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ minuto 19-22):** Stacks de Eminence (a passiva de AD bonus em takedown) começam a snowball (vantagem crescente: kill → AD bonus → mais kills). Force uma skirmish em side para acumular Eminence, depois rotacione para objetivos com dano cheio.

## Erros comuns

- **Jogar Cannon Q sem setup.** Q nua custa muito mana e é fácil de esquivar. Solte primeiro a **E** (Acceleration Gate) na direção do inimigo; o gate amplifica a Q que passa por ele (mais alcance, mais dano), e o pequeno delay força o inimigo a committar a uma direção de movimento antes de você atirar.
- **Swap pra Hammer cedo demais.** Se você swap antes do inimigo estar abaixo de ~50% HP, está committando a um fight melee sem o burst para fechar. Fique Cannon até o chip damage atingir o limiar, depois swap e all-in.
- **Esquecer do shred R-Cannon no primeiro ataque.** Quando você swap pra Cannon (R), seu primeiro AA reduz Armor e Magic Resist. Queimar esse proc num minion é jogar dano fora; sempre guarde para um campeão.
- **Splitpushar sem R disponível.** A R tem cooldown de 6 segundos mas é sua única ferramenta de escape — o speed boost no swap. Splitpushar em um gank 4v1 com R em cooldown significa morrer. Trate a R como um dash com cooldown longo ao avaliar risco.
- **Ignorar custos de mana em trades estendidos.** A Hammer W tem uma passiva que regenera mana com auto; se você fica Cannon em um trade longo, o pool esvazia. Swap pra Hammer por 2-3 autos no meio do trade para recarregar, depois swap pra fechar em Cannon.

## Dica avançada

Domine o **R-cancel** no fim do Hyper Charge (Cannon W). Quando você aperta Cannon W ganha Attack Speed máxima por 3 ataques — mas se swap pra Hammer (R) imediatamente após o terceiro ataque acertar, você pula a animação de auto-recovery e começa o salto Hammer Q um quarto de segundo antes. É a diferença entre alcançar um alvo em Flash e vê-lo escapar com 5 HP. Treine no Practice Tool contra um target dummy até o timing virar memória muscular antes de levar para ranked.
