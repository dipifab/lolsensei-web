---
title: "LeBlanc Mid Build & Guia — Patch 16.9"
slug: "leblanc-mid"
language: "pt-br"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "Guia da LeBlanc mid no Patch 16.9 do League of Legends: build de AP burst assassin, combos Sigil double-tap, matchups principais, spike de nível 6 e erros comuns."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "Quando a LeBlanc fica abaixo de 40% de HP, ela fica invisível por 1 segundo e cria um clone que imita seus movimentos por até 8s. Ferramenta de bait defensivo, sem dano."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Magia single-target que acerta e marca o alvo por 3,5s. Uma segunda fonte de dano sobre a marca detona o sigilo para o burst real. Devolve mana e parte do cooldown se Q matar."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash até um ponto e dano ao chegar. Em 4s você recasta para voltar ao ponto inicial. Engage com W1, escape com W2 — saber atrasar separa um pick limpo de um throw."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot que prende o primeiro inimigo atingido. Se ficar preso por 1,5s (sem flash, sem dash, sem minion break), entra em rooted e leva dano extra. Setup principal pra detonar Q."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Recasta a última habilidade básica com dano potencializado. Permite Q duplo pra burst total, W duplo pra engage seguro ou E duplo pra travar alvo. R não reseta cooldowns: adiciona um cast extra."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Diana, Talon, Akali): a stasis te dá margem pra esperar o burst e fechar com Mimic-Q"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primeiro item alternativo pra um dash extra além do W: burst extra e carga somando ao W para engages do fog"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target que mata o engage (Annie stun, Lissandra R, Ahri charm, TF stun): o spell shield come a primeira"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "alternativa ao Void Staff contra times com 2+ itens de MR (Mercury's Treads + Banshee's, ou comp anti-AP)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowballa a mid no poke de Q pré-6, depois converte o nível 6 em kill num squishy com W-Q-AA-R-Q. Roma side lanes sempre que R estiver up; pickoff com W in / W out."
  weakness: "Squishy sem defesas além do W de retorno. Cai no late: scalers com sustain (Kassadin, Cassiopeia) passam ela depois do minuto 25. Trave ela com hard CC antes do burst e morre na hora."
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
    primary_rationale: "Domination primary: Electrocute proca em toda Q-AA-E (3 hits em 3s) somando burst grátis em cima da detonação do Sigil. Sudden Impact dá magic pen depois de cada W, e Ultimate Hunter corta segundos do R pra que o Q duplo volte mais rápido entre roams."
    secondary_rationale: "Sorcery secondary: Manaflow Band resolve a mana apertada do early pra você spammar Q sem voltar à base, e Transcendence empurra o ability haste acima de 40% reduzindo cooldowns de W e R em trades curtos repetidos."
    secondary_alternative: "Contra lanes que te superam no poke (Xerath, Vel'Koz) troque Sorcery por Inspiration: Magical Footwear (botas grátis ~min 12) + Cosmic Insight (haste extra no Flash pra combos W-Flash mais apertados)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Mages imóveis sem dash confiável"
      reason: "Sem habilidade de mobilidade não escapam da detonação W-Q-AA, e a jaula do Veigar é um círculo que você contorna no W."
    - examples: ["lux", "syndra"]
      archetype: "Mages artillery squishy de cooldowns altos"
      reason: "Se sobrevive ao primeiro poke de Q, all-in quando a magia de setup deles está down — Lux Q e Syndra E são janelas de 12-13s para punir."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanters mid sem escape duro"
      reason: "Os shields atrasam mas não param a segunda detonação de Q; W in por cima do shield, Q de novo com R, kill confirma antes do sustain."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillery de longo alcance"
      reason: "Habilidades alcançam 1100-1500 unidades, bem além do seu Q a 700; te shovam pra fora do range de XP e você não consegue all-in passando pelo CC."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Mids late-scaler que te superam"
      reason: "Sobrevivendo ao seu spike 6-9 te ultrapassam em dano puro e mobilidade; o R do Kassadin após o 11 escapa da sua janela W-Q-R, a zona grounded da Cassiopeia desliga o W de retorno."
    - examples: ["lissandra", "galio"]
      archetype: "Mid laners com lockdown confiável"
      reason: "Q-W da Lissandra ou W taunt do Galio te param no lugar durante o salto; LeBlanc não tem Cleanse e o HP derrete assim que ela para."
---

## Visão geral

A LeBlanc é uma AP burst assassin: uma campeã construída pra derrubar um único alvo squishy em 1-2 segundos (essa janela curta de dano alto se chama "burst"). Toda luta gira em torno da passive dela, **Sigil of Malice (Q)** — Q dá um hit pequeno e marca o alvo, depois qualquer segunda fonte de dano sobre essa marca detona o sigilo pro burst real. O ritmo clássico "double-tap" é Q pra marcar e depois auto-attack ou **E** pra detonar.

O game plan: poke com Q na lane (cooldown de 6 segundos te deixa spammar), explode um squishy no nível 6 com W-Q-AA-R-Q e depois roma (sai da sua lane pra fazer uma jogada em outra) nas side lanes assim que R estiver up. A LeBlanc está no auge do minuto 8 ao 25; depois disso, mages de scaling e bruisers alcançam ela. Sempre planeje a saída — **Distortion (W)** pode ser usada pra engage *e* disengage, mas só se você atrasar o recast pra fugir, não só pra confirmar a kill.

## Build recomendada

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. O anel resolve o mana regen pra spammar Q na lane.

**Core items (em ordem):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — spike de burst com dano mágico bônus on-hit e proc de movement speed quando você marca uma takedown. Encaixa perfeito com a combo Q-AA-E: cada detonação também triggera o Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (seu dano mágico ignora uma fatia da Magic Resist inimiga). Upgrade direto contra squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra quando o inimigo está abaixo de ~40% HP (é uma HP-threshold passive: ativa só quando o alvo cruza essa linha). Soma com o Mimic Q pra one-shot em ADCs.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador late-game em toda sua AP. Seu slot de maior dano absoluto.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration percentual quando os inimigos começam a comprar MR; mantém o scaling contra alvos mais tanky.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers e assassins (Zed, Diana, Talon, Akali). O active de stasis te deixa invulnerável por ~2,5s, esperando o burst deles passar pra fechar com o Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primeiro item alternativo se você quiser um dash extra; soma com W pra um engage mais longo saindo do fog of war (áreas do mapa sem vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC single-target (Annie stun, Lissandra R, Ahri charm, Twisted Fate stun). O spell shield bloqueia a primeira habilidade jogada em você.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — alternativa ao ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** quando o time precisa mais da aura de cura do que de burst puro.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** são o padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** são corretas contra 2+ ameaças de hard CC (Annie + Galio, Lissandra + Leona).

**Skill order:** Maxe **Q** primeiro (poke e dano principais), **W** segundo (cooldown menor no dash de engage/escape e mais dano de impacto), **E** por último (a duração do root escala com rank, mas o CD pesa menos no burst). Ponto em **R** nos níveis 6, 11, 16.

**Runes:** As runas são bônus passivos escolhidos antes da partida; você pega um primary tree (5 runas) e um secondary tree (2 runas). Primary **Domination** com **Electrocute** como keystone — proca (o efeito da runa ativa) quando você acerta um alvo com três habilidades ou auto-attacks em 3 segundos, o que Q-AA-E cobre sem esforço. Adicione **Sudden Impact** (mais magic pen depois de um dash de W), **Sixth Sense** pra pressão de vision quando roma e **Ultimate Hunter** pra reduzir o CD do R e o Q duplo voltar mais rápido. Secondary **Sorcery** com **Manaflow Band** (sustain de mana pra spammar Q) e **Transcendence** (ability haste — suas habilidades voltam mais rápido). Stat shards: dois Adaptive Force + Health Scaling.

## Matchups principais

- **Annie:** Pré-6 você out-trade ela no poke de Q. Pós-6 ela tem o stun pronto (a passive pisca "Pyromania" no portrait com 4 cargas) e uma cadeia com Tibbers te mata. Compre ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como terceiro item se ela snowballa (transforma uma vantagem pequena em uma muito maior) cedo.
- **Twisted Fate:** Uma corrida de roam. Ele escolhe a lane pra gankar com **R**, mas perde a lane direta — Q toda vez que ele se aproxima pra last-hit e zone ele (controla o espaço ao redor) pra fora da wave. Trackeie os windups de **R** dele com vision wards (itens posicionáveis que dão vision em uma área) no river.
- **Kassadin:** Hard counter no scaling. Pré-6 você poka ele com Q (ele não tem resposta até o 6); depois do 11 o **R** dele dá dash mais rápido que seu W de retorno e te out-trade. Vença a lane antes do minuto 14 ou chame o jungler duas vezes.
- **Xerath:** Te out-rangea. O **Q** dele alcança 1500 unidades (o seu, 700). Fique atrás da wave de minions, esquive o **Q** dele pro lado e só commita quando ele estiver low mana — o Q dele custa 80-100 mana, 5 Q errados e ele fica seco.
- **Diana:** Empate pré-6 (você out-poka), losing pós-6 se ela acertar o **R**. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** depois de ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** se ela tiver 2+ kills; a stasis desperdiça o ulti combo dela.

## Power spikes e condições de vitória

- **Nível 2 (Q + W):** Primeiro spike real. Q-AA-W2 é um pattern poke-and-leave: dash in com W, Q, auto-attack pra detonar o Sigil, recasta W pra fugir. Use isso pra zonar o adversário pra fora da segunda wave.
- **Nível 6:** O primeiro **R** é o maior spike pontual da partida. Mimic-Q num alvo marcado adiciona uns 200-250 de dano no nível 6 com um item; contra um squishy a 65% HP a combo cheia W-Q-AA-R-Q confirma a kill antes dele Flashar.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completo (~ minuto 11-13):** O limiar de burst sobe outros 80-100 de dano por hit. Roma pra side lanes com W assim que empurrar a wave embaixo da torre mid inimiga.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 23-26):** Multiplicador em todo outro item AP. A partir daqui você one-shot qualquer squishy através do Banshee's Veil com W-Q-R-Q-E. Force fights ao redor de objetivos (Drake, Baron) e busque picks na backline (eliminar o carry inimigo isolado do time).

## Erros comuns

- **W in pra kill sem guardar o W2.** A janela de recast do Distortion é só 4 segundos. Se você joga toda a combo num segundo e fica plantada 3 segundos no meio do time inimigo, o support deles te pega e você morre. Sempre planeje: W in, dano, W out — o retorno é a diferença entre um pick limpo e um throw (uma morte evitável que dá momentum pro inimigo).
- **Detonar o Sigil com outro Q.** Q não detona a própria marca — só uma *segunda* fonte de dano detona. LeBlancs novas castam Q duas vezes esperando números grandes; precisa de Q + auto-attack, ou Q + E, ou Q + R-Q. O pattern é marcar-depois-detonar, nunca marcar-depois-marcar.
- **Castar R-W como primeiro instinto.** O W mimicado tem o dobro do range, mas te leva o dobro mais fundo no perigo. Mimic Q num alvo marcado é quase sempre o botão da kill; mimic W é só pra chases e escapes.
- **Pushar a lane sem romar.** Quando chegar a ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e **R**, seu valor está nas side lanes. Se continuar farmando mid enquanto uma side lane morre, desperdiça o pick. Empurre a wave, pingue "indo" e use **W** pelo fog of war pra pickar o side laner.
- **Buildar itens de bruiser contra um time squishy.** A LeBlanc não tem sustain de kit — itens que trocam burst por durabilidade desperdiçam o toolkit. Fique no ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** a menos que o time inimigo tenha 3+ tanks.

## Dica avançada

A combo "W-Flash" é o engage surpresa assinatura da LeBlanc. Casta **W** em direção ao alvo e, durante a janela curtíssima do dash, aperta **Flash** — Flash te leva mais 400 unidades além do ponto de pouso do W, e o dano do W aplica na nova posição. O range total W + Flash bate a maioria dos setups de counter-CC (stun da Annie, binding da Lux, taunt do Galio W) porque você cobre o gap mais rápido do que eles conseguem reagir. Guarde **R** pro segundo cast: chegando em range curto, R-Q no alvo marcado fecha a kill antes do support deles peelar (proteger o carry). O truque é o buffer: aperta Flash bem no início do dash do W, não no fim, ou o W cancela e o burst se perde.
