---
title: "Aurelion Sol Mid Build & Guia — Patch 16.9"
slug: "aurelion-sol-mid"
language: "pt-br"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Guia Aurelion Sol mid lane no Patch 16.9: build com scaling de Stardust, matchups principais, power spikes, erros comuns e uma dica técnica final para fechar o jogo."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Habilidades de dano coletam Stardust dos champions inimigos. O Stardust aumenta de forma permanente a área, o alcance e o limite de execute de cada spell — paciência paga no late game."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Sopro de dragão canalizado em cone à frente. Segure o botão para continuar causando dano; cada segundo cheio em um champion aplica dano extra e gera Stardust. Principal fonte de DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Voo direcional sobre o terreno; durante o voo a Q não tem cooldown. Uma takedown em 3s reembolsa parte do CD de W. O Stardust aumenta o alcance máximo do voo."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Coloca um buraco negro que arrasta inimigos para o centro e causa dano. O centro executa (mata na hora) alvos abaixo do limite de HP. O Stardust aumenta a zona e o limite."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Estrela que cai sobre o alvo: stun e dano. Após 100 Stardust a próxima R vira The Skies Descend — área maior, knock-up no lugar do stun, shockwave AoE."
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
      against: "contra assassins móveis (Zed, Fizz, Talon, Akali) — a stasis é o botão de pânico quando W está em cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra hard CC single-target que interrompe a Q (Annie R, Lissandra R, gold card de Twisted Fate)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra times escorregadios: o slow gruda os alvos dentro do cone da Q"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que qualquer alvo prioritário comprar o primeiro item de Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Acumule Stardust em fights longos com Q canalizada e W de perseguição. Quando Liandry's Torment e Rabadon's Deathcap estão online, o burn sustained apaga os squishies através da Magic Resist."
  weakness: "A Q é um channel longo: qualquer hard CC que interrompa (Annie R, Lissandra R, stun de Twisted Fate) corta seu dano pela metade. Assassins móveis fecham distância antes da W estar pronta."
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
      archetype: "Mages de controle imóveis sem dash"
      reason: "O voo de W do Aurelion Sol fecha distância enquanto a Q segue canalizando. Alvos sem dash ou stealth comem dano Q sustained enquanto a janela de voo o mantém fora do alcance de cast."
    - examples: ["galio", "sylas"]
      archetype: "Skirmishers melee mid de curto alcance"
      reason: "O all-in deles exige distância curta. ASol kita com W e Q de fora do alcance de auto-attack; se Flasham para dentro, a E os tira de posição e a R stunna quando o Stardust aumenta a área."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Eles dasham em cima do Aurelion Sol no meio do channel, interrompem a Q e o matam antes do scaling Stardust virar o fight. A W tem cooldown longo demais para servir de escape confiável."
    - examples: ["yasuo", "yone"]
      archetype: "Champions com Wind Wall"
      reason: "A parede deles bloqueia toda a linha da Q. A principal fonte de dano do ASol fica inútil no meio do trade e eles punem o channel perdido com um all-in do qual ele não escapa."
---

## Visão geral

Aurelion Sol é uma mage de dano sustained cujo kit gira em torno de duas ideias simples: mantenha **Breath of Light (Q)** canalizando no alvo o máximo de tempo possível (canalização = uma habilidade que você continua conjurando por vários segundos, interrompível por hard crowd control), e use **Astral Flight (W)** para perseguir quando ele tentar fugir. A passiva **Cosmic Creator** coleta um recurso permanente chamado **Stardust** toda vez que você causa dano em um champion por tempo suficiente — o Stardust aumenta de forma permanente a área, o alcance e o limite de execute (limite de HP abaixo do qual o spell mata na hora) das spells. Quanto mais a partida se estende, maior e mais ameaçador fica cada cast. Ele não tem combo de burst instantâneo: ganha colando nos inimigos até o burn (dano que tica em vários segundos em vez de cair de uma vez) finalizar.

Seu plano de jogo no mid é assimétrico. Nos primeiros níveis você troca em janelas curtas (uma troca breve de dano na lane, não uma tentativa de kill completa): **Q** num champion que se aproxima para last-hittear, um ou dois ticks de dano, e volte. A partir do nível 6, **W** te permite atravessar o terreno como um **Flash** grátis — use para perseguir kills que o jungler montar com um gank (quando o jungler desce para te ajudar a matar o inimigo), ou para fazer disengage voando para a sua torre. No late game você vira um battlemage de retaguarda (uma mage que luta a média distância, misturando spells e posicionamento em vez de artillery de longa distância): fique na borda do teamfight, atrás da frontline (os tanks e bruisers, os melees duros que comem dano pelo time), canalize **Q** atravessando os corpos deles até o carry inimigo, jogue **Singularity (E)** para puxar inimigos da borda, e finalize com **Falling Star (R)** quando ela stunnar o carry.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (o anel padrão de primeiro item para mages: um pouco de AP, HP e regen de mana) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. A regen de mana de Doran's é obrigatória — você spamma Q em toda wave de minion.

**Itens core (na ordem):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — queima uma porcentagem do HP máximo do alvo a cada segundo enquanto a Q encosta nele (bate mais forte em inimigos tanky, e quanto mais longa a canalização maior o burn). Seu melhor item individual.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — botas com magic penetration: cada cast ignora uma parte fixa da Magic Resist inimiga, deletando os squishies (alvos frágeis tipo ADCs e mages) mais rápido.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica seu **AP** (Ability Power, a stat que escala dano mágico) em 30% extra. Cada spell bate mais forte. Compre em terceiro se estiver à frente.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — dano mágico bônus em inimigos com pouco HP (HP-threshold passive: bônus que ativa só quando o alvo está abaixo de uma certa % de HP). Combina perfeitamente com os finishers de **R**.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móveis (Zed, Fizz, Talon). A stasis é seu botão de pânico quando **W** está em cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra hard CC single-target (Annie R, Lissandra R, gold card de Twisted Fate). Um stun bloqueado salva seu channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — aplica slow em tudo que a **Q** atinge, mantendo os alvos colados dentro do cone.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration pesada para inimigos que já compraram Magic Resist. Troque assim que qualquer alvo prioritário comprar o primeiro item de MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — aplica Grievous Wounds nos inimigos que você dana (status que corta a cura recebida pela metade). Compre contra composições que empilham cura (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (botas que reduzem o cooldown das habilidades) são uma opção se o time precisa do **R** mais frequente como ferramenta de engage em teamfight.

**Skill order:** Maxe **Q** primeiro (principal fonte de dano), **E** segundo (waveclear e setup AoE), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence** e **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**, ou **Resolve** com **Second Wind** e **Overgrowth** se a lane for de poke pesado a longa distância (poke = dano de baixo comprometimento para ir consumindo o HP).

## Matchups principais

- **Yasuo / Yone:** o **Wind Wall** deles bloqueia toda a linha da **Q**. Segure a **Q** até queimarem a parede e depois re-engage. Trade só quando a parede está em cooldown.
- **Zed / Talon:** matam você antes da **W** estar pronta. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**; nunca deixe **Flash** e **W** em cooldown ao mesmo tempo.
- **Veigar:** equilibrado pré-6 — ele te stunna dentro da gaiola W; você poka de fora com o alcance da **Q**. Pós-6 ele te one-shotta com E-W-Q-R se você ficar parado — fique se mexendo lateralmente enquanto canaliza.
- **Annie:** o stun dela está escondido num contador passivo difícil de ler. Conte os casts: a cada 4 habilidades ela tem o stun pronto. Se o indicador **Pyromania** (o ícone laranja de chama abaixo do retrato) está aceso, não fique no alcance de cast do Tibbers.
- **Twisted Fate:** corrida de quem roama (sai da própria lane para ajudar as outras) primeiro. O **R** dele teleporta para o outro lado do mapa; sua **W** voa por cima do terreno para seguir. Mantenha a wave do mid empurrada pra torre inimiga sempre que puder, assim, se ele sair pra gank no bot, você farma CS de graça enquanto ele está fora e fica empatado.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q** + **W** já dá pra perseguir um erro até o muro da lane — pune quem anda perto do river sem vision.
- **Nível 6:** Primeira **Falling Star** libera um stun instantâneo. Monte ganks com seu jungler (quando o jungler desce na lane para te ajudar a matar o inimigo): pull com **E** → stun com **R** → kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 11-13):** Sua **Q** sustained passa de chip damage (dano pequeno e lento) para ameaça real. Force fights nos spawns do Drake (o Dragon no river que dá buffs para o time) assim que Liandry's estiver online.
- **100 Stardust acumulados (~ minuto 18-22):** Sua **R** vira **The Skies Descend** — área maior, knock-up em vez de stun, shockwave AoE. Essa é sua condição de vitória de teamfight; segure pra objetivos em vez de queimar num pickoff (eliminação de um inimigo isolado fora do teamfight).

## Erros comuns

- **Canalizar Q sem voar.** Ficar parado durante o channel da **Q** te transforma em alvo fácil. **W** na mesma direção em que o alvo foge pra o channel continuar sem custo extra de mana enquanto você fica seguro.
- **Usar W de forma agressiva sem plano de saída.** **W** é seu único escape. Se você voar em cima de 3 inimigos sem setup (jungler perto, **R** pronta, cooldown reduction suficiente para recuperar **W** rápido), você morre sem causar dano. Trate **W** como commitment (um all-in: você vai pra kill sem volta fácil), não como mobilidade grátis.
- **Greedar Stardust em vez de kill.** O Stardust escala suas habilidades no longo prazo, mas se o carry inimigo está one-shottável a 30% de HP, finalize. Um carry morto vale mais que 5 Stardust.
- **Esquecer que E puxa pro centro.** Sua **E** arrasta inimigos pro meio da zona — puxe-os PARA DENTRO do seu time, não pra fora. Uma E mal posicionada salva o carry inimigo tirando ele da sua frontline.
- **Pushar a wave com Q na lane.** **Q** empurra devagar demais e queima mana. Use **E** para limpar caster minions e last-hitte os melees com auto-attack. Guarde a **Q** para trades e harass.

## Dica avançada

A cadeia **Q-W-Q** é a técnica que separa os jogadores de Aurelion Sol. Conjure **Q** num champion e logo em seguida **W** na mesma direção em que ele está fugindo. Como **W** remove o limite máximo do channel da Q enquanto você voa, você continua causando dano de forma contínua no ar — e a **Q** pode ser reconjurada em pleno voo para uma segunda instância se o alvo original morrer e tiver outro no alcance. Na prática isso te permite se comprometer com uma kill de muito longe: **W** voa uma distância longa (cerca de uma tela e meia) e durante esse voo a sua **Q** continua acertando quem estiver na sua frente, então a zona de ameaça é a soma do alcance da **W** com o da **Q**. Na takedown, parte do cooldown da **W** é reembolsado, então você re-engage o próximo fight quase imediatamente.
