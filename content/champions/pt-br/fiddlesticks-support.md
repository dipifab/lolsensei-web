---
title: "Fiddlesticks Support Build & Guia — Patch 16.9"
slug: "fiddlesticks-support"
language: "pt-br"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Guia Fiddlesticks support para League of Legends Patch 16.9: build AP de engage, harass na lane, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "O slot do trinket vira cargas de efígie. Plante espantalhos falsos do Fiddle para vision; quem os ver leva um fear curto e a efígie explode."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Mira em um único inimigo. Dar dano com uma spell enquanto você está unseen também o Terrifica. Faz ele fugir de você por 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel que drena HP dos inimigos próximos (te cura). No fim do channel causa dano bônus de execução. Sustain de lane após o primeiro back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Foice bumerangue em cone amplo: aplica slow em todos os atingidos e silencia quem estiver na linha central. Principal harass de lane — acerta duas vezes."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, depois blink para o ponto alvo com dano AOE por segundo ao redor do Fiddle por 5s. Lance de uma brush de lane no ADC inimigo."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE-burst pesado quando o time precisa de escudo ativo (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que interrompe o channel do R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque quando 2+ inimigos comprarem qualquer item de Magic Resist"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Coloque vision profunda na bot, esconda no tri-bush no nível 6 e dê Crowstorm no ADC inimigo para um kill garantido que faz seu carry snowballar na liderança."
  weakness: "A pior fase de lane entre os supports de engage pre-6: sem escudo, sem CC point-and-click. Se invadido ou pokado fora, não tem ferramenta de comeback até o ult."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock procca no Q Terrify (CC imobilizante) para um spike de 2.5s de armor e MR que salva o Fiddle do focus depois do Crowstorm. Font of Life cura os carries depois de cada fear, Bone Plating come o burst de all-in early, Revitalize potencia o sustain de Bountiful Harvest."
    secondary_rationale: "Sorcery secundária: Manaflow Band resolve os problemas de mana durante o spam de E na lane; Transcendence empurra o ability haste acima de 30 quando você fecha Sorcerer's Shoes para ciclos de Crowstorm mais curtos."
    secondary_alternative: "Contra lanes de poke pesado (Lux, Karma, Xerath support) troque Sorcery por Inspiration com Biscuit Delivery (5 biscoitos de graça no early para se manter full) e Cosmic Insight (Flash e Crowstorm com cooldown reduzido)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishies sem CC duro"
      reason: "O kit deles gira em torno de healing e shielding — um Crowstorm do tri-bush ultrapassa os cooldowns deles e mata em um hit os dois e o ADC antes que heal ou shield sejam usados duas vezes."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "ADCs imóveis sem dash"
      reason: "Esses ADCs não conseguem escapar de um flank vindo da brush; assim que R + E acertam, eles não têm ferramenta de mobilidade para resetar distância e sua bot converte o kill em torre."
    - examples: ["sona", "seraphine"]
      archetype: "Supports mage de retaguarda sem escape"
      reason: "Eles ficam atrás para encantar — mas suas efígies dão vision profunda que acha a posição deles, e o channel do R de dentro do hex deles mata em um hit antes que se movam."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Enchanters com Black Shield / spell-shield"
      reason: "Black Shield absorve Terrify (Q fear) e o primeiro tick AOE do Crowstorm no carry, neutralizando seu cast de engage e dando 5s de janela para disengage."
    - examples: ["janna", "lulu"]
      archetype: "Enchanters de disengage / peel"
      reason: "R da Janna ou W da Lulu te empurram do carry no instante em que você aterrissa. O AOE do Crowstorm continua tickando mas sem follow-up CC, a luta reseta e você come focus damage à toa."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Supports de artillery longo alcance"
      reason: "Te pokam fora da lane antes do 6 além do alcance do seu E. Fiddle não tem escudo nem como fechar a distância, então sua barra de HP cai pela metade antes do primeiro R."
---

## Visão geral

Fiddlesticks support é um pick hide-and-engage: um support AP (Ability Power, scaling de dano mágico) cuja fase de lane inteira é um setup para um único momento — apertar **Crowstorm (R)** de dentro de uma brush de lane no nível 6 no ADC inimigo (o marksman, o carry de auto-attack à distância da bot lane), com a sua bot dando follow-up no blink. Fiddle não tem escudo, nem CC point-and-click, nem escape, então o preço por esse power spike no nível 6 é a pior fase de lane entre os supports de engage entre os níveis 1 e 5.

O plano de jogo: coloque efígies no tri-bush bot e no river para ameaçar lurk plays, use **Reap (E)** para harass de slow + silence quando um inimigo chegar para last-hit, e evite ser pokado fora pelos matchups de longo alcance. Quando **R** estiver up, busque qualquer momento em que o ADC inimigo esteja shovado além da torre dele ou o support esteja roamando — então blinke. No mid game seu trabalho é achar flanks para Drake fights pela fog do river ou por entradas de jungle sem ward. Você é basicamente um Fiddle jungle que passa a fase de lane do lado de um ADC.

## Build recomendada

**Itens iniciais:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (o starter AP de support que questa em Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Itens core (na ordem):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — recompensa de quest do Spellthief's Edge. Obrigatório: dá a renda de ouro que permite comprar itens de verdade, mais um stack de AP-on-takedown que faz seu dano snowballar. Feche a quest no minuto 12-14.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetração mágica fixa (corta a magic resist inimiga). Baratos e melhores que ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** quando o R está online.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — seu item principal. O slow do **E** e do **R** marca os alvos; quando um aliado bate no alvo marcado, a marca detona por dano bônus (e divide ouro com seu ADC). Sinergia pura com o kit cheio de slows do Fiddle.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entre em stasis no instante em que o Crowstorm termina de tickar. Mandatório se o inimigo tem diver ou assassin; sem ele, você morre logo após cada engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — só se a partida arrastar e sobrar ouro depois dos itens de support. O +35% de AP bônus faz o Crowstorm matar squishies em um hit.

**Itens situacionais:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE pesado (Yasuo + Malphite, Wukong, Diana). O escudo ativo salva o time durante a wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrompe o R (Lissandra R, Veigar E, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando 2+ inimigos compram qualquer item de Magic Resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se 2+ inimigos têm CC duro.

**Skill order:** Maxe **E** primeiro (slow + silence é seu único harass de lane), **W** em segundo (sustain após o primeiro back), **Q** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** árvore primária **Resolve** com **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Contra lanes de poke pesado (Lux, Karma, Xerath support) troque Sorcery por **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**.

## Matchups principais

- **Lux support:** Q binding de longo alcance mais poke com E. Esconda atrás da wave para que o **Q** dela não tenha linha limpa, e nunca face-checke o tri-bush sem antes verificar com uma efígie. Sobreviva até o 6, depois Crowstorm nela se ela over-extend.
- **Morgana:** Black Shield neutraliza o fear do seu **Q** e o primeiro tick AOE do R no ADC dela. Engage sempre no ADC ao invés da Morgana, e force ela a pre-shieldar com um passo falso na brush antes de commitar.
- **Leona:** Matchup de engage espelho, mas Leona tem CC point-and-click e Aftershock que vencem o seu pre-6. Trade só quando ela tiver usado o **E**, e nunca engage primeiro contra Leona — ela te stuna fora do channel do R.
- **Janna:** Hard counter ao seu engage. O **R** da Janna na hora que você aterrissa te empurra do carry, anulando o ult inteiro. Guarde Crowstorm para quando ela já tiver gastado o R em outra luta, ou quando estiver roamando.
- **Duplas Caitlyn / Senna ADC:** Sua lane dos sonhos. Faltam mobilidade — assim que você bate o 6, Crowstorm do tri-bush acaba com elas toda vez. Avise seu ADC para freezar a wave para crashar no minuto 5 e vocês baterem o 6 juntos.

## Power spikes e condições de vitória

- **Nível 2 (com E + W):** Primeira janela de trade. Acerte **E** atravessando a wave para chunkar o ADC inimigo; se shovarem em sua direção, **W** debaixo da torre para sustain.
- **Nível 6 (primeiro Crowstorm):** Seu único spike real de lane. Plante uma Stealth Ward (a ward branca grátis do trinket que todo champion começa com) no tri-bush (o triângulo de matos entre o river bot e a bot lane) 30s antes, posicione dentro, depois blinke no ADC inimigo. Um R + E + follow-up do ADC limpo é kill garantido.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate online (~ minuto 14-16):** O proc de dano do slow spika. Procure flanks cross-map para Drake fights — o ouro que você e seu ADC dividem dos procs do Mandate acelera o bot side inteiro.
- **Nível 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ minuto 22):** Seu segundo ponto em R reduz o cooldown e a stasis te cobre pós-engage. Force teamfights em Drake ou Baron a partir de setup na fog.

## Erros comuns

- **Engagar sem follow-up do ADC.** Um Crowstorm solo tagga os inimigos mas não mata ninguém se seu ADC está back-recall. Cheque o mapa e o mana do ADC antes de apertar R; se não tem ult e não tem mana, segure o engage para uma janela melhor.
- **Ficar na frente da wave no nível 1-3.** Você não tem escudo nem escape pre-6. Fique atrás do ADC e da linha de minions; deixe ele last-hit, você se esconde na brush esperando um fear de efígie no tri-bush para setupar o trade.
- **Desperdiçar efígies nas brush de lane.** Efígies valem mais quando dão vision que o inimigo *não* está pagando para limpar. Plante no tri-bush ou na pixel brush para setup de engage, não nas brush óbvias da bot lane que são limpas no primeiro sweep do support inimigo.
- **Engagar contra um Black Shield não consumido (Morgana).** Uma Morgana com Black Shield up vira seu spike de nível 6 em ult desperdiçado. Engage sempre no ADC, não na Morgana, e force ela a pre-shieldar fingindo um walk-in na brush 2 segundos antes de commitar.

## Dica avançada

O channel de 1.5s do **Crowstorm** é interrompível por qualquer coisa que te desloque ou stune, mas o channel em si não quebra a stealth da brush — ou seja, você pode apertar **R** ainda dentro do tri-bush, e o inimigo só verá a barra do channel por uma fração de segundo antes do blink aterrissar. Treine isso em normal: espere o ADC inimigo over-extend para um CS, aperte R de dentro do tri-bush, blinke na cara dele. O cue de áudio (a risada icônica do Fiddle) é o único aviso que eles recebem, e quando reagem o AOE já está tickando.
