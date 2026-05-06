---
title: "Kai'Sa ADC Build & Guia — Patch 16.9"
slug: "kaisa-bot"
language: "pt-br"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Guia Kai'Sa ADC bot lane patch 16.9: gestão dos stacks de Plasma, build hybrid Kraken com evolves, matchups principais, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Os auto-attacks empilham Plasma no alvo; o CC imobilizante dos aliados adiciona stacks extras. Os itens comprados também fazem Q/W/E evoluir quando Kai'Sa atinge limiares ocultos de AD/AP/Attack Speed."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Dispara 6 mísseis que se dividem entre os inimigos próximos (alcance 600). Acertos repetidos no mesmo alvo causam dano reduzido. Evolui em ~100 bonus AD: 12 mísseis em vez de 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Míssil linear de longo alcance (3000 unidades). Marca o primeiro inimigo atingido com 2 stacks de Plasma e o revela por 4s. Evolui em ~100 AP: 4 stacks e 50% de cooldown refund ao acertar campeão."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channel de ~1.5s com bonus Move Speed e Ghosted (atravessa unidades), depois 4s de Attack Speed elevado. Os auto-attacks reduzem o cooldown. Evolui em 60% bonus Attack Speed: invisibilidade breve."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash ao lado de um campeão inimigo com 5 stacks de Plasma (ou totalmente ruptured por Plasma). Concede um escudo na chegada. Serve para finalizar um alvo já chip-killed, não para engage."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn): a armor pen percentual ignora uma fração fixa da armadura"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que empilham cura (Soraka, Vladimir, Aatrox): aplica Grievous Wounds (corta a cura inimiga pela metade)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Syndra, Veigar, Brand support): magic resist + escudo abaixo de 30% HP"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra poke prolongado (Ezreal, Caitlyn, Xerath): lifesteal cura no meio do fight, overheal vira escudo"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra assassins ou divers (Zed, Kha'Zix, Talon): a Ghost passive te faz atravessar unidades enquanto kita"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Empilhe Plasma no alvo da backline com W e auto-attacks, R-dasha em cima quando ele atingir 5 stacks e finalize com Q + AAs potencializados enquanto a E te dá a janela de Attack Speed."
  weakness: "A R exige stacks de Plasma no alvo — sem W acertando ou CC aliado você não tem engage. Squishy sem dash antes da R; se erra o timing da E você come o burst todo antes da invisibilidade."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades: 3 auto-attacks super rápidos logo após o dash da R carregam stacks de Plasma e o proc de true damage do Kraken Slayer. Taste of Blood dá sustain na lane, Sixth Sense revela wards, Ultimate Hunter reduz o cooldown da R."
    secondary_rationale: "Precision como secundária: Triumph cura 12% do HP faltante a cada takedown (kill ou assist), transformando a R-into-fight em escape seguro. Coup de Grace adiciona 8% de dano abaixo de 40% HP."
    secondary_alternative: "Contra lanes de poke pesado (Caitlyn + Lux, Ezreal + Karma) troque Precision por Resolve com Second Wind (regen ao receber dano de campeões) e Overgrowth (HP por minion absorvido) para sustain."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "Marksmen imóveis sem dash"
      reason: "Quando Kai'Sa entra no alcance da R com 5 stacks de Plasma, os ADCs imóveis não conseguem escapar do dash + Q burst. Eles precisam sobreviver ao primeiro all-in (troca total visando a kill) sem nenhuma ferramenta de reposicionamento."
    - examples: ["senna", "kog-maw"]
      archetype: "Carries de late-game scaler sem escape"
      reason: "A W tem 3000 unidades de alcance e os revela por 4s — Kai'Sa os poka fora da wave de fora do threat range deles, e depois R assim que o Plasma rupture o alvo."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Enchanters squishy sem hard CC"
      reason: "Esses supports não têm stun ou knock-up para peelar um dive na backline. Kai'Sa acerta a R no ADC e o support não tem nada para interromper o all-in quando a invisibilidade da E evolved entra online."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Bullies de lane com mais auto-attack damage no early"
      reason: "Os dois ganham os trades contra Kai'Sa nos níveis 1-3, antes do limiar de evolve da Q. As axes potencializadas do Draven e o double-shot passive do Lucian ganham toda janela curta de trade antes da Kai'Sa escalar."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports de hard engage com CC point-and-click"
      reason: "Kai'Sa não tem dash antes da R, e a R exige um alvo com Plasma. Um E da Leona ou Q do Nautilus a trava no mid-lane antes que ela empilhe um único Plasma — a chain CC mata ela antes da invisibilidade da E evolved entrar online."
    - examples: ["vayne", "twitch"]
      archetype: "Hyper-scalers de late-game que out-DPS Kai'Sa pós-3-itens"
      reason: "O true damage da W de Vayne e o Expunge do Twitch escalam mais forte que o scaling hybrid da Kai'Sa quando ambos os times estão com 3 itens. Kai'Sa precisa fechar antes do minuto 30 ou o dano relativo dela cai."
---

## Visão geral

Kai'Sa é uma marksman hybrid: uma campeã que escala tanto com AD (dano de auto-attack) quanto com AP (dano de habilidade) ao mesmo tempo, em vez de empilhar só uma stat. Ela é a única ADC (attack damage carry: ranged auto-attacker que vira a fonte principal de dano do time no late) cujas habilidades literalmente se aprimoram sozinhas quando você cruza limiares ocultos de itens: 100 bonus AD evolui Q, 100 AP evolui W, 60% bonus Attack Speed evolui E. O caminho de build importa mais para ela do que para qualquer outro marksman — ordem errada significa que um evolve nunca dispara, e uma Kai'Sa sem E evolved (sem invisibilidade no dash) é meia campeã.

O game plan dela é um quebra-cabeça de stacks: cada auto-attack coloca stacks de Plasma no alvo, e quando o alvo atinge 5 stacks (ou ruptura totalmente por Plasma) a **R** se desbloqueia como dash de longo alcance em cima dele. O CC do support (Crowd Control: stuns, slows, roots que travam o inimigo no lugar) acelera a contagem de graça. Na lane ela poka (chip damage de longo alcance para drenar HP sem se comprometer com um fight) com **W** a 3000 unidades; em teamfights (lutas 5v5 que decidem objetivos como Drake ou Baron — monstros neutros que dão buffs de time) ela fica em max alcance de AA até um alvo da backline ser chip-killed, e depois entra com **R** + invisibilidade da **E** evolved para limpar. O skill ceiling fica na escolha de alvo da **R**.

## Build recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (um pouco de AD + lifesteal — cura uma porção do dano causado) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (em ordem):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primeiro power spike (o momento em que um campeão fica nitidamente mais forte ao completar um item). Dá AD + Attack Speed; a passive Bring It Down causa true damage extra a cada terceiro hit, o que carrega o dano na janela curta de burst logo depois da R.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots de attack speed. Te empurram em direção ao limiar de 60% bonus Attack Speed necessário para evolve E.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adiciona duas flechas laterais a cada auto-attack e mais Attack Speed. As flechas laterais aplicam Plasma nos inimigos próximos, então em teamfight Kai'Sa empilha Plasma no time inteiro adversário enquanto AAa só um alvo. Esse item completa o evolve da E.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — dá AD, AP e Attack Speed em um único slot. A forma mais barata de cruzar o limiar de 100 AP que evolui a W (cooldown refund + 4 stacks de Plasma por cast). Phantom Hit a cada terceiro AA proca mais on-hit damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de crit do late-game (critical strike: chance de um auto-attack causar ~175% de dano). Combinado com os dois projéteis extras do Runaan's, cada AA rola 3 chances de crit ao mesmo tempo.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn). Substitui ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** como 5º item se o time inimigo tiver 2+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps com healing acumulado (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (efeito que corta a cura recebida pela metade).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (Syndra, Veigar, Brand support — um burst mage te deleta em 1-2 segundos com um único combo). Magic resist + escudo abaixo de 30% HP te compra o segundo da R que você precisa para fugir.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra poke pesado. O lifesteal te cura mid-fight; em overheal estoca HP como escudo temporário.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra assassins ou divers (Zed, Kha'Zix, Talon — campeões desenhados para divear na backline). A Ghost passive te faz atravessar minions e campeões inimigos enquanto kita (recuar enquanto ataca).

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é a única escolha correta. Attack speed alimenta direto o evolve da E e o DPS da Q multi-míssil durante os combos pós-R.

**Skill order:** Maxe **Q** primeiro (DPS principal, evolve mais importante). Maxe **E** em segundo (mais cooldown reduction e janela de Attack Speed mais longa). Maxe **W** por último (utility só — alcance longo + stacks de Plasma, mas o pior base damage por skill point). Pegue **R** nos níveis 6, 11, 16.

**Runes:** Tree primária **Domination** (a árvore do burst-AA) com **Hail of Blades** (3 auto-attacks super rápidos quando você começa a AAar um campeão), **Taste of Blood** (cura 18-30 HP ao causar dano em um campeão a cada ~20s), **Sixth Sense** (um ping wallhack que revela uma ward inimiga a cada ~75s), **Ultimate Hunter** (corta até 25% do cooldown da R conforme você faz takedowns). Tree secundária **Precision** com **Triumph** (cura em takedown — kill ou assist) e **Coup de Grace** (dano extra contra inimigos abaixo de 40% HP).

## Matchups principais

- **Caitlyn:** Te out-rangea pesado no nível 1 (650 AA contra 525). Fique atrás da sua linha de minions e só dê um step pra frente quando ela colocar uma trap (fica animation-locked durante o posicionamento). Power-farma em segurança (foque só em coletar gold dos minions sem riscos) até completar ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**; depois procure picks cross-map com W assim que puder dashar com R.
- **Draven:** Perde a guerra de AAs direta — as axes Q dele causam muito mais por AA do que seu basic. Evite trades 1-por-1; só commit quando as axes dele caem no chão (perde elas em um timer de 2.5s). Guarde o **W** como ferramenta de poke até ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** estar online.
- **Lucian:** Perde para Kai'Sa pós-6 mas a bullia entre os níveis 2-5 com o double-shot passive. Esquive o **Q** dele entre os minions, guarde o **E** como disengage de pânico (habilidade que quebra o all-in inimigo). Mantenha priority na lane farmando sob torre até o nível 6, depois procure all-in no próximo erro dele.
- **Vayne:** Kai'Sa ganha a lane no early (Vayne é praticamente melee até os 3 itens dela). Empurre a wave (mande seus minions em direção à torre dela) toda vez que puder, harasse (chip damage para drenar o HP) com **W** a cada cooldown. Depois do minuto 25 ela escala mais, então feche a partida no mid-game ou pende a favor dela.
- **Jhin:** Matchup de poke a longo alcance. O **W** dele é um slow root de 3550 unidades que ignora o seu dodge se acertar um minion antes. Fique atrás da sua primeira linha de minions e nunca trade durante a reload window dele — ele é mais forte com o pente cheio e mais fraco nos 2.5s depois do quarto tiro.

## Power spikes e condições de vitória

- **Nível 6:** A primeira **R** desbloqueia tentativas de pick (eliminar um inimigo isolado fora do teamfight) em alvos de lane chip-killed. Acerte **W** + 2 AAs no ADC inimigo, e depois dasha com **R** assim que ele andar pra frente para last-hittar (auto-attack do golpe final em um minion).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer (~ minuto 12-14):** A priority de lane vira. Você pode shovar (empurrar a wave rápido) com Q e depois roamar (sair da lane para ajudar os aliados) para plays cross-map em Drake ou skirmishes no mid (briguinhas 2-3 jogadores no river ou jungle).
- **Q evolve (~ minuto 22-24, depois de ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade):** A Q agora dispara 12 mísseis em vez de 6 — o burst single-target em campeões praticamente dobra. Force teamfights em todo objetivo.
- **E evolve (Berserker's + Runaan's + Guinsoo's completos):** A E agora dá invisibilidade breve durante o channel. É a diferença entre dashar com R e morrer no instante, e dashar com R e pegar a kill — a invisibilidade te torna untargetable por ~0.5s depois do dash, suficiente para esquivar o follow-up CC.

## Erros comuns

- **Soltar a R sem stacks de Plasma prontos.** A R exige um alvo com 5 stacks de Plasma. Se você apertar a R em um alvo com 0-2 stacks, o spell não faz nada e vai pra cooldown completo. Sempre W-depois-AAs primeiro, observe o indicador de Plasma acima da barra de HP do alvo, e depois commit a R.
- **Dar R com 100% de HP em cima do time inimigo.** A R é um finisher, não um engage. O escudo da R é pequeno (~110 + 25% bonus HP) e dura 2s — você morre no instante se a frontline inimiga ainda estiver de pé. Espere por pelo menos uma destas condições: alvo abaixo de 40% HP, CC inimigo em cooldown, ou seu time já em cima deles.
- **Pushar a wave demais sem vision.** Kai'Sa não tem escape integrado até a E evolve no minuto 22+. Se você empurrar além do mid-river sem o seu support wardar tribush (tufos pequenos de mato que bloqueiam a vision) e river, o jungler inimigo te mata de graça.
- **Pular as ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves por boots mais tankys.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** parecem tentadoras contra um time AD-pesado, mas atrasam o limiar de 60% Attack Speed que evolui a E. Sem evolve = sem invisibilidade = sua R é uma sentença de morte.
- **Guardar a E para engage ofensivo.** O valor principal da E é a janela curta de Ghost (atravessa unidades) + Attack Speed durante um fight. Aperte E **depois** da R, não antes — a invisibilidade da E evolved entra no início do channel, então castar de uma posição segura desperdiça os frames de imunidade.

## Dica avançada

O finisher de **flash R** funciona ao contrário do jeito que Kai'Sa é normalmente jogada. Quando um ADC inimigo está fugindo com pouco HP para a fog of war (as partes do mapa que você não consegue ver no momento) e a sua **R** te dasharia para fora de posição, **Flash** (summoner spell que te teletransporta 400 unidades em uma direção escolhida) na direção dele primeiro para entrar no alcance da R, e depois R imediatamente. Queima o Flash mas transforma uma quase-fuga em uma kill garantida em rankings altos. O truque: bufferize o cast da R 0.1s depois do Flash segurando o botão da R — o input buffer da League dispara a R no instante exato em que o Flash aterrissa, então o inimigo nunca vê o dash chegar.
