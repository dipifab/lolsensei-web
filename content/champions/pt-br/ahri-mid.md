---
title: "Ahri Mid Build & Guia — Patch 16.9"
slug: "ahri-mid"
language: "pt-br"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Guia da Ahri mid no Patch 16.9: starter kit, build de mage assassin, matchups-chave, power spikes, erros comuns e uma dica técnica final."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Cura você após matar 9 minions ou monstros da jungle; cura maior quando participa de um takedown em champion. Sustain de lane que escala com farm."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Skillshot linear que arremessa um orbe e o puxa de volta. Dano mágico na ida, dano true na volta. Ferramenta principal de waveclear e poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Solta 3 fox-fires que se auto-direcionam aos inimigos próximos; o primeiro acerto causa dano cheio, os outros reduzido. Também concede um breve boost de Move Speed."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot de beijo que encanta o primeiro inimigo atingido — ele caminha indefeso em direção à Ahri sofrendo dano. Ferramenta de setup, nunca poke seco."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Até três dashes curtos numa janela apertada, cada um disparando bolts auto-direcionados. Takedowns em champion estendem a janela de recast. Mobilidade somada a execute."
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Diana, Talon, Fizz) — a stasis te faz sobreviver depois de comprometer R numa teamfight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "compre assim que qualquer alvo prioritário fechar Magic Resist (Mercury's Treads + item de MR)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "primeiro item alternativo se o time inimigo tem 4+ alvos squishies para one-shotar — pick ceiling maior, dano sustentado menor"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charme um alvo squishy, dashe pra dentro com R, descarregue W e o orbe de retorno da Q para o dano true, depois saia com os dashes restantes do R. Transforme cada pickoff no próximo dragão ou roam."
  weakness: "Sem Charm não tem burst. Se E erra, você compromete o combo todo no vácuo; se R está em cooldown, você não tem escape e qualquer hard CC te deleta."
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Mages imóveis sem dash"
      reason: "O E (Charm) da Ahri é um skillshot de longo alcance que trava o alvo. Quem não tem dash ou stealth é encantado numa linha limpa e come o combo R + Q + W inteiro antes de conseguir sair do alcance."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Carries de backline sem escape"
      reason: "Spirit Rush dá à Ahri três dashes que resetam em takedown — ela consegue mergulhar passando da frontline, deletar um carry imóvel e dashar de volta antes do peel chegar."
    - examples: ["malzahar", "vladimir"]
      archetype: "Mages de dano sustentado sem burst"
      reason: "O burst da Ahri num combo R completo deleta esses alvos em menos de um segundo, antes que o dano sustentado ou a cura deles consiga acumular num trade significativo."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions com Wind Wall"
      reason: "O Wind Wall deles bloqueia Charm e o orbe da Q. A Ahri perde tanto a ferramenta de setup quanto o poke principal — ela tem que entrar dentro da parede para acertar qualquer coisa, que é exatamente onde eles querem."
    - examples: ["fizz", "kassadin"]
      archetype: "Assassins móveis com mitigação de dano mágico"
      reason: "O E do Fizz desvia dos bolts do R da Ahri e o passivo dele reduz burst mágico; Kassadin tem um shield de dano mágico mais um blink. A Ahri compromete o combo inteiro e eles sobrevivem com um fio de HP, depois matam ela no frame de recovery."
    - examples: ["lissandra", "galio"]
      archetype: "Mages anti-assassin com hard CC"
      reason: "O hard CC deles pega a Ahri no meio do R: um único root ou taunt durante a janela de dash cancela tanto o dano quanto o escape, transformando a tentativa de pickoff em kill grátis para eles."
---

## Visão geral

A Ahri é uma mage assassin de mid: ela faz poke (dano à distância para desgastar o HP do inimigo) à distância como uma mage, mas o **Spirit Rush (R)** permite que ela mergulhe num único alvo squishy (champion frágil, tipo um ADC ou um mage), mate ele e dashe de volta — um padrão de jogada chamado **pickoff** (eliminar um inimigo isolado, não uma teamfight inteira). O kit dela (o conjunto completo das habilidades) gira em torno do **Charm (E)**, um skillshot de beijo que trava o inimigo no lugar. Toda outra habilidade do kit foi construída para encadear nesse acerto único. O **R** tem uma particularidade: cada takedown em champion reseta o contador de dashes, então um pick bem-sucedido permite encadear um segundo na mesma luta.

O plano de jogo é paciência, depois commit (ir all-in num combo sem opção de voltar atrás). **Farme** com **Q** (mate minions para gold e experiência), coloque wards (sentinelas de visão) no river e espere o inimigo pisar num lugar previsível antes de jogar **E**. Quando o **Charm** acertar, o resto do combo é mecânico: puxe o alvo com o orbe de retorno da **Q**, descarregue **W** para o dano auto-direcionado e use **R** para fechar a distância ou para escapar. Depois do nível 6 ela vira uma das melhores champions de **roam** do jogo (sair da própria lane para ajudar top ou bot lane) — cada spawn de dragão é uma chance de virar o mapa.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring é o starter padrão de mage: pequeno bônus de AP (Ability Power, a stat que escala dano mágico), HP extra e mana regen para spammar **Q**.

**Itens core (na ordem):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst no primeiro acerto de habilidade e o mana sustain (mana regen para você não ficar a seco) que você precisa para spammar **Q** a cada cooldown. Sua meta de gold antes do minuto 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (seu dano ignora uma quantia fixa do Magic Resist do inimigo).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra com um passivo por threshold de HP: ativa quando o alvo está abaixo de cerca de 35% de HP, alinhando exatamente com o execute do seu **R** (finalizar um inimigo já com pouco HP).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game. Aumenta seu AP total em 35%, o que praticamente dobra o dano que cada item anterior adiciona ao combo.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers (champions que mergulham para matar um único alvo e escapar) e assassins (Zed, Diana, Talon, Fizz). O ativo te transforma numa estátua dourada intocável (stasis) por 2.5 segundos, te deixando sobreviver depois de comprometer o **R** fundo numa teamfight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (CC = crowd control: stun, root, qualquer coisa que te trave no lugar). O escudo bloqueia a primeira habilidade que te imobilizaria.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — no instante em que qualquer alvo prioritário do time inimigo compra magic resist (tipicamente Mercury's Treads mais um item de MR).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — primeiro item alternativo quando o time inimigo tem quatro ou mais alvos squishies que você quer one-shotar. Troca dano sustentado por um teto mais alto de single-pick.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** só quando a comp inimiga tem várias correntes de hard CC apontadas pra você (hard CC = stun, root, knock-up, taunt — o tipo que tira completamente o controle do champion).

**Skill order:** Maxe **Q** primeiro (waveclear — limpar wave de minion rápido — e DPS principal, damage per second), **W** em segundo (dano de luta), **E** por último — o dano base é irrelevante, só a duração do charm escala de forma significativa. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Árvore primária **Sorcery** com **Arcane Comet** (projétil mágico de delay que dispara em cada acerto de habilidade), **Manaflow Band** (mais mana máximo, escala com acertos de habilidade), **Transcendence** (ability haste — cooldowns menores em todas as spells), **Scorch** (pequeno dano de burn bônus no primeiro acerto de habilidade, a cada 10 segundos — ótimo para harass de early lane: dano de chip que vai gastando o HP do inimigo). Secundária **Inspiration** com **Magical Footwear** (botas grátis que chegam por volta do minuto 12) e **Cosmic Insight** (mais ability haste, inclusive no **Flash**, o summoner spell pessoal de teleporte curto que você bota no F ou no D).

## Matchups principais

- **Yasuo / Yone:** Os dois conseguem Wind Wall sua **Q** e **E** em pleno voo (Wind Wall é uma parede em formato de muro que eles colocam e que bloqueia todo projétil que cruza). Segure o **E** até eles comprometerem uma habilidade e farme em max range com **W** — os três fox-fires se auto-direcionam atravessando o Wind Wall, são sua única ferramenta de dano segura contra a parede.
- **Zed:** Uma lane cara-ou-coroa que vira nos itens. Pré-6, só avance quando a **Q** dele estiver visivelmente em cooldown. Depois do 6, segure **R** para dashar para fora da ulti dele — comprometer **R** ofensivamente e depois não ter escape quando a ulti dele acerta é o jeito mais rápido de jogar a lane fora.
- **Galio:** Ele te pune por estar agrupada — o **W** dele tauntea alvos perto dos aliados dele. Pushe a wave com **Q** e roame para as side lanes onde ele não consegue te seguir com a ulti tão rápido quanto você consegue com três dashes.
- **Twisted Fate:** Corrida de prioridade de roam. Ele tem pressão de rotação global com o **R** dele, você tem mobilidade de três dashes — ameaça igual. Pushe toda wave com **Q** no instante em que a ulti dele sobe, e ward as duas entradas do river para você responder com ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** se ele tentar te ganckar (gank = jungler inimigo chegando na sua lane para te matar).
- **Cassiopeia:** Outescala você (cresce mais no late game) em trades prolongados porque o **W** dela nega os dashes do seu **R** (você não consegue dashar pela zona de grounding dela). Faça trade só em rajadas curtas (trade = troca breve de habilidades e auto-attacks, não uma luta até a morte) e nunca comprometa **R** ofensivamente quando o **W** dela está up.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q + E** desbloqueadas, você tem as ferramentas para uma kill na lane se o inimigo pisar muito pra frente. Segure **E**, avance como se estivesse last-hittando (dar o golpe final no minion para garantir o gold), depois solte o charm assim que ele entrar no alcance da sua auto-attack.
- **Nível 6:** O primeiro **Spirit Rush** desbloqueia o potencial de pickoff. O combo **E → R → W → Q** deleta qualquer champion squishy que ainda não comprou um único item defensivo.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** O controle de wave inverte — você consegue shovar (empurrar uma wave a toda velocidade até a torre inimiga) e roamar a cada cooldown. Aqui é quando sua win condition ativa: roame, charme, mate, dashe pra fora. Cada pickoff bem-sucedido vira snowball (vantagem que cresce no tempo) para o próximo — o gold de uma kill financia um item que torna o próximo pick mais fácil.
- **Spike de três itens (~ minuto 24):** Com seus três itens core online, seu combo **R** completo deleta qualquer champion de backline (os carries — ADC, mage — que ficam atrás dos tanks deles) abaixo de 70% de HP. Force lutas de objetivo aqui (5v5 por dragão, Baron ou torres).

## Erros comuns

- **Jogar E como poke sem setup.** **Charm** seco tem projétil lento e cooldown longo — a maioria dos oponentes de mid lane desvia de reação. Use uma wave ou um minion como cobertura e mire no caminho que eles são obrigados a fazer para last-hittar um minion.
- **Usar R para engage (iniciar a luta) em vez de finalizar.** **Spirit Rush** é sua única ferramenta de escape. Se você dasha pra dentro sem um alvo que você garante que vai morrer, entrega a janela de dash e morre quando o time deles converge em cima de você (os aliados deles rotacionam para te esmagar porque agora você está presa fora de posição).
- **Spammar Q de poke e ficar OOM.** OOM significa out of mana — sem mana você não casta spell, então vira uma auto-atacante inútil por 30 segundos. **Orb of Deception** custa um bocado de mana por cast: guarde para waveclear e trades garantidos.
- **Esquecer que R reseta em takedown.** Quando você fecha uma kill durante o **Spirit Rush**, a janela de recast estende. Quem internaliza isso encadeia um pick num segundo na mesma teamfight em vez de dashar pra fora logo na primeira kill.

## Dica avançada

Treine o **combo Q-back**: jogue **Q** na frente do alvo, depois imediatamente use **R** para dashar atravessando ele. O orbe no caminho de retorno passa pelo inimigo a queima-roupa, entregando a parte de dano true (true damage ignora todas as resistências do inimigo — até tank toma dano cheio) enquanto você já está em melee com **W** disparando por cima. Uma única sequência **Q + R + W** entregue assim coloca três instâncias de dano em menos de um segundo — muito mais burst do que a ordem do manual **E → R → W → Q** sugere, e funciona até quando o **Charm** ainda está em cooldown.
