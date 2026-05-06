---
title: "Brand Support Build & Guia — Patch 16.9"
slug: "brand-support"
language: "pt-br"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Guia de Brand support para League of Legends Patch 16.9: pressão agressiva na lane, build de poke, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Os feitiços do Brand colocam fogo no alvo (dano ao longo de 4s, até 3 stacks). Em 3 stacks o blaze detona como uma pequena explosão AOE que reaplica os efeitos dos feitiços."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linear de dano mágico. Se o alvo já está ablaze, ele fica stunado — seu setup de kill para a AD carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE com delay após um pequeno tell. Alvos ablaze tomam +25% de dano. Maior dano de poke do kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosão alvo que pula nos inimigos próximos. Se o alvo principal está ablaze, o raio de propagação dobra — aplica blaze em dois inimigos num único cast."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fogo de longo alcance que pula até 5 vezes entre inimigos, priorizando os ablaze. Vence teamfights quando ADC e support inimigos estão grudados."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC na sua ADC (cadeia de stun da Leona, Q da Morgana, hook do Pyke)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE engage pesado (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Yuumi peel, time com Aatrox ou Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que qualquer alvo prioritário fechar o primeiro item de Magic Resist"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pressione o 2v2 com o poke do W antes do nível 3, depois busque setups de E + Q stun para a sua ADC. Pós-6, os pulos do R entre ADC e support inimigos grudados transformam a lane num snowball."
  weakness: "Sem shield, sem heal, sem peel para a ADC. Se o support inimigo engaja primeiro, Brand não consegue proteger a carry — só matar quem engajou mais rápido do que ele mata a carry."
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
    primary_rationale: "Sorcery primária: Arcane Comet auto-procca em todo hit de W ou E, somando poke grátis a cada cooldown. Manaflow Band sustenta mana para spammar W no 2v2, Transcendence empurra a ability haste além de 40%, Scorch fecha kills baixos sob torre."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery resolve a fome de mana do Brand nos 6 primeiros níveis e Cosmic Insight dá mais uptime de Flash — Flash é o único jeito de desviar de um engage, o kit não tem escape natural."
    secondary_alternative: "Contra hookers pesados (Blitzcrank, Thresh, Pyke) onde você precisa sobreviver ao primeiro hook para vencer a lane, troque Inspiration por Resolve com Bone Plating (reduz o dano back-to-back do combo do hook) e Revitalize (reforça sua única opção defensiva, o shield do Mikael's)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Enchanters squishies com pouca HP"
      reason: "O W do Brand passa por cima do alcance de cura deles em poke e a rotação E + Q os mata antes da carry conseguir peel. Yuumi perde o corpo numa rotação completa só; Soraka não consegue curar através dos ticks de blaze."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Supports utility sem engage"
      reason: "Brand vence a fase de lane na força — eles não conseguem punir o spam de W porque o kit deles é para escudar a carry, não para tradear. Pós-nível 6 o CC deles é single-target enquanto o seu R pega os dois juntos."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "ADCs de longo alcance sem escape"
      reason: "Esses ADCs ficam no alcance máximo para last-hit; um E no support deles espalha blaze neles, seu Q encaixa o stun e a AD carry atrás de você pega a kill antes deles flasharem."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports tank de hard-engage"
      reason: "Eles engajam fora do alcance do W do Brand com uma cadeia flash-stun. Ele não tem peel para si nem para a carry — assim que Leona stuna, o kit não tem resposta a não ser morrer ou queimar Flash + Zhonya's juntos."
    - examples: ["rakan", "alistar"]
      archetype: "Supports engage móveis"
      reason: "Rakan dasha por cima dos seus skillshots e puxa a sua ADC de posição; a cadeia headbutt-pulverize do Alistar pula por cima do stun do Q. Brand não reage rápido o bastante a nenhum dos dois."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "Supports all-in que igualam o burst do Brand"
      reason: "O Q do Pantheon e o hook do Blitzcrank têm alcance efetivo parecido com o Q do Brand. Quem encaixar o setup primeiro vence a troca, e os dois têm survival embutido (block do Aegis, hook-and-leave) que o Brand não tem."
---

## Visão geral

Brand support é o caster support mais agressivo do jogo. Ele não traz nenhuma das coisas que um support tradicional traz — sem shield, sem heal, sem peel para a carry ("peel" = habilidades que protegem um aliado empurrando ou stunando quem o ataca), sem engage que termine numa cooldown de sobrevivência tank. O que ele traz no lugar é uma **threat de kill plana desde o minuto 1**. Cada feitiço coloca fogo no inimigo (passiva **Blaze**), e assim que um inimigo está em chamas o seu **Q (Sear)** deixa de ser um feitiço de dano e vira um stun. O plano de lane é: pokear com **W (Pillar of Flame)** até dois stacks de blaze grudarem, **E** para espalhar blaze nos dois alvos, e **Q** o stun para a sua ADC andar e fechar a kill.

O preço é a fragilidade. Brand não tem escape, sem sustain natural, e nenhuma ferramenta para proteger a AD carry. Se o support inimigo engaja primeiro — stun da Leona, hook do Nautilus, dash do Rakan — sua única resposta real é *matar quem engajou mais rápido do que ele mata a carry*, o que só funciona quando você está na frente. O pick é binário: ou você stompa a lane e snowball (snowball é uma vantagem inicial que cresce: kill → gold → item → mais kills), ou morre cedo e alimenta dois inimigos. Não tem muito meio termo, e por isso esse guia se apoia tanto no spike do nível 2 e nos pulos da **R** em teamfight como os dois momentos que você tem que executar bem.

## Build recomendada

**Itens iniciais:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (o starter de support AP que faz quest até Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Itens core (na ordem):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — a quest reward do support a partir de Spellthief's Edge. Obrigatório: dá o income de gold que permite comprar itens de verdade, mais um stack de AP-on-takedown que snowballa o seu dano.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — o item identitário de dano do Brand. Burn percentual de HP que se soma aos ticks de blaze, punindo tanks e times com HP empilado.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste, priorizadas sobre Sorcerer's Shoes aqui porque como support você casta mais habilidades e farma menos minions. Mais uptime de R por teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra mais um passivo que ignora ainda mais magic resist em inimigos abaixo do limite de HP. Casa com os pulos do R caçando o alvo de baixa HP.

**Itens situacionais:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC na sua ADC (cadeia de stun da Leona, Q da Morgana, hook do Pyke). Cleansar o CC da carry é o mais perto de peel que o Brand chega.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps de AOE engage pesado (R do Malphite, wombo do Yasuo — um "wombo" é quando várias ultimates encadeiam juntas para pegar todo o seu time de uma vez, R do Kennen). O shield ativo é botão de salvar teamfight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka, Yuumi peel, time com Aatrox ou Vladimir). O passivo Grievous Wounds corta o healing pela metade.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que qualquer alvo prioritário fechar o primeiro item de magic resist. Impede que um único componente de 800 gold soft-counter sua build.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** é o padrão. Troque por ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se o time inimigo tem 3+ ameaças de hard CC com dano mágico.

**Skill order:** Maxe **W** primeiro (maior dano base e poke principal de 2v2), **Q** em segundo (mais dano no stun), **E** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Árvore primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence** e **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**.

## Matchups principais

- **Leona / Nautilus / Rell:** Supports tank de hard-engage. Fique fora do alcance de flash-engage deles até ter ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**. Pré-coloque **W** debaixo de você quando eles avançarem, pronto para encaixar **Q** no stun no exato momento do engage.
- **Blitzcrank / Thresh / Pyke:** Hookers. Fique sempre atrás de um minion — o hook deles é skillshot single-target que a wave bloqueia. Pune hooks errados com **W → Q** para poke grátis; nunca auto-attack fora da cobertura quando eles têm hook disponível.
- **Yuumi:** Lane grátis. Yuumi não tem corpo quando não está grudada. Tempe **W** para acertar no exato instante em que ela se solta para last-hit ou proccar a auto empoderada. Uma Yuumi solta pega por **W → Q** é uma kill antes da carry conseguir escudar.
- **Soraka:** Out-pression-a empilhando poke até o mana dela secar. Soraka cura a ADC ao custo de 5% da própria HP — cada tick de blaze na ADC desfaz 30 segundos de cura.
- **Lulu:** Polymorph e shield deixam burst em 1v1 pouco confiável. Pokeie do alcance máximo do **W**, nunca commit ao stun-into-all-in (um "all-in" é commit total na kill — sem saída, vai até alguém morrer) a não ser que seu jungler esteja vindo; se Lulu polymorpha sua ADC no meio do trade, o trade já era.

## Power spikes e condições de vitória

- **Nível 2 (W + Q):** Primeiro spike. Com um ponto em **W** mais o **Q** que você começa, o combo **W → Q** stun está online. Essa janela concentra 90% das kills do Brand support — empurre a wave para chegar no nível 2 antes e encaixe o combo no support inimigo.
- **Nível 6 (R desbloqueado):** Primeira **Pyroclasm** disponível. Se a bot lane inimiga está grudada (quase sempre — supports ficam atrás da ADC deles), uma única **R** faz cerca de 50% da HP de um squishy por pulo.
- **Bloodsong + Liandry's Torment online (~ minuto 14-16):** O dano vira. Daqui em diante você out-damaga qualquer enchanter support e ameaça kill numa ADC alimentada. Force fights agrupados no drake.
- **R + Shadowflame online (~ minuto 22-26):** Dois inimigos agrupados comem a sequência inteira de pulos e morrem. É aqui que Brand vence teamfights de trás — escolha ângulos onde a carry e o support inimigos estejam dentro do alcance de pulo um do outro.

## Erros comuns

- **Auto-attack na wave para last-hit.** Como support você não pega last-hits — o gold do farm da AD carry é o que financia a lane. Fique atrás, pokeie com **W**, e só auto-attack um minion se a carry está morta ou recallando.
- **Jogar Q como poke seco.** **Q** sem ablaze é um projétil lento que erra em quem dá side-step. Coloque **W** no chão primeiro, ou **E** num minion que vai espalhar blaze — depois Q pelo stun.
- **Ficar na frente da sua ADC.** Brand não tem peel para si mesmo nem para ninguém. Se fica na frente, o engage acerta em você, você morre, sua ADC fica sem support. Fique na mesma profundidade ou um passo atrás, com um minion entre você e o hook.
- **Ultar um inimigo só.** **R** pula entre alvos priorizando os ablaze, mas com queda enorme de dano por salto num alvo único. Guarde **R** para fights onde dois ou três inimigos estão dentro do alcance de pulo — nunca use como finisher num alvo solo fugindo.
- **Pré-colocar W onde o inimigo está agora.** Pillar of Flame tem delay antes de cair. Caste onde o inimigo *vai estar* em 0.6 segundo — tipicamente o ponto que ele tem que atravessar para chegar no próximo minion ou escapar do seu stun. Castar na posição atual é miss garantido contra qualquer adversário meio atento.

## Dica avançada

Treine o **double-spread setup**. Quando o support e a ADC inimigos estão grudados (típico quando eles estão empurrando a wave ou quando o support está cobrindo a ADC), faça nessa ordem: **W** entre os dois → ambos pegam blaze stack 1. **E** no support inimigo → blaze stack 2 no support, espalha na ADC para stack 2 na ADC. Agora os dois alvos estão em 2 stacks — você não precisa do **Q** para preparar o stun, precisa dele como *finisher*. Q no support: stack 3 cai, o support fica stunado, a detonação instável atinge a ADC e leva ela também a stack 3. **R** agora pula entre dois alvos stunados em blaze máximo, os dois morrem e você não troca nada de volta. Essa é a rotação que transforma um "Brand support decente" num Brand que vence a lane toda partida.
