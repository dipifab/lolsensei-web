---
title: "Briar Jungle Build & Guia — Patch 16.9"
slug: "briar-jungle"
language: "pt-br"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Guia da Briar jungle para League of Legends Patch 16.9: clear path, build core de lifesteal, matchups-chave, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Autos e habilidades aplicam um sangramento em stacks que cura a Briar com base no dano causado. A cura bônus escala com HP perdido. Sem HP regen base."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Salto curto: atordoa e reduz em % a Armor e MR do alvo. Gap closer (fecha distância) e abertura de trade (troca rápida de golpes)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Briar pula para frente e se auto-provoca no inimigo mais próximo (prioridade em champions), ganhando Attack Speed, Move Speed e autos AOE. Recast para uma mordida empowered que escala com HP perdido e cura."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Cancela Blood Frenzy e canaliza: damage reduction e cura % HP durante a carga. Ao soltar aplica slow; em carga máxima dá knockback e atordoa contra parede. O self-cancel do W é a mecânica-chave."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Briar lança uma gema global que marca o primeiro champion atingido como presa. Voa até ela, aplica fear nos inimigos ao redor no pouso, e ganha Frenzy empowered com resistências, lifesteal e Move Speed bônus até a presa morrer."
      dd_spell_id: "BriarR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra double-AD (ex. Yasuo + Caitlyn): converte o burst em sangramento lento, dá tempo de resetar com o chomp do W"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP (Syndra, Veigar, Lissandra) — o escudo mágico ativa quando um AP threat está em pleno combo em cima de você"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dos Steelcaps se o adversário tem 3+ CC duros (stuns, roots): a tenacity evita que o R seja interrompido em pleno voo"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra comps AP-heavy com dano mágico contínuo: amplifica em 25% a cura de Crimson Curse e do chomp do W"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Acerte o R num carry de backline e cavalgue a Frenzy empowered até a presa cair. Sundered Sky e Bloodthirster te seguram em HP durante a chase; o fear espalha os peelers deles."
  weakness: "Sem range e o self-taunt do W gruda você no inimigo mais próximo — adversários espertos baitam a Frenzy num tank, depois peelam de fora do range enquanto a corrente de CC te prende."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Árvore Precision (runas de fight longo): a Frenzy do W dura 5+ segundos, então keystones de burst desperdiçam dano cedo. Conqueror acumula a cada hit e atinge o pico quando o R pousa. Triumph cura no abate, Alacrity adiciona Attack Speed, Last Stand paga em HP baixo."
    secondary_rationale: "Domination secundária: Treasure Hunter dá gold extra desde os primeiros ganks (gank = ataque surpresa da jungle) e Relentless Hunter dá Move Speed fora de combate para follow-ups de R cross-map (você chega na side lane uma wave antes)."
    secondary_alternative: "Se o adversário tem 3+ CC de habilidade (Lissandra R, Maokai roots, Sejuani Q), troque Domination por Resolve com Second Wind (HP regen passivo abaixo de 50%) e Revitalize (+10% na cura de W e R). Você troca snowball por sobreviver à corrente de CC."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Mages imóveis de mid lane"
      reason: "O R lança um skillshot global que marca o primeiro champion atingido. Mages de backline sem dash são puxados numa cadeia de fear + Frenzy da qual não conseguem sair antes do chunk de dano cair."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lentos"
      reason: "O shred percentual de Armor do Q rasga as resistências deles, e o W com Attack Speed mais sustain vence fights longos. Eles não te kitam e o CC deles é single-cast: uma vez em cooldown você cura mais que tudo."
    - examples: ["warwick", "shyvana"]
      archetype: "Skirmishers de sustain sem escape"
      reason: "1v1 estilo mirror na jungle. O chomp da Briar escala em HP perdido, então quanto mais o fight se arrasta mais a matemática vira pro lado dela. O stun do Q interrompe as ultis canalizadas deles."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "CC AOE com múltiplos roots"
      reason: "Eles encadeiam CC na Briar no meio da Frenzy, e a única saída dela é o E pra auto-cancelar o W — mas o E é um channel longo, então te re-CCam antes da cura completar. O R a empurra pra pior posição possível."
    - examples: ["olaf", "morgana"]
      archetype: "Champions CC-immune ou anti-heal"
      reason: "O R do Olaf cleansa o knockback e o stun do E; o E da Morgana bloqueia com spell shield o stun do Q e o fear do R, quebrando a janela de engage antes da Frenzy subir."
    - examples: ["nidalee", "gragas"]
      archetype: "Pokers de longa distância com displacements"
      reason: "Nidalee castiga o clear da Briar com javelins de fora do range do W; o R ou E do Gragas a tiram da Frenzy no meio da chase, resetando a rampa de dano e a deixando sem sustain."
---

## Visão geral

Briar é uma **diver / skirmisher** corpo a corpo (um champion que pula em cima do carry adversário e vence 1v1 longos). Ela transforma a própria perda de controle em feature: a **Blood Frenzy (W)** coloca ela em piloto automático no inimigo mais próximo com bônus de Attack Speed e Move Speed, e a passiva **Crimson Curse** a cura através do sangramento que as próprias auto-attacks aplicam. Ela tem zero HP regen base, então o único jeito de continuar viva é continuar batendo — quando ela para de atacar, ela para de curar. A ulti **Certain Death (R)** é um skillshot global (uma habilidade que atravessa o mapa inteiro) que marca um alvo como presa e a prende numa chase empowered até a presa morrer, com fear (efeito que faz os inimigos correrem sem controle por um curto período) em tudo ao redor no pouso.

O plano de partida é clear rápido (clear = matar todos os monstros neutros do seu quadrante de jungle) dos camps com a W AOE (area of effect = dano em área), procurar ganks (ataques surpresa da jungle pra uma lane) começando no nível 6, onde o R consegue isolar um carry de backline (o damage dealer frágil que fica atrás do time) longe dos peelers (aliados que protegem o carry). Daí, snowball (transformar kills cedo em mais kills) numa máquina de chase que cura mais que os 1v1 com lifesteal de itens e self-heal stackado. A jogada de skill alta é o self-cancel W-pra-E: saber exatamente quando interromper a própria Frenzy com **Chilling Scream (E)** pra curar e reposicionar, depois reengajar com Q.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. A quest do pet completa sozinha por volta do minuto 3-4.

**Itens core (em ordem):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — upgrade do pet a partir do Hailblade (auto-evolui por volta do minuto 3-4 quando você acumular XP suficiente). O companheiro Gustwalker dá Move Speed ao causar dano em champion, que soma ao bônus do W e transforma a transição clear-pra-gank em dives surpresa (dive = pular no inimigo até embaixo da torre pra matar).
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primeiro item lendário, primeiro grande power spike (o momento em que seu champion fica muito mais forte). A passiva transforma sua próxima auto-attack num crítico garantido (crit = ataque que dá dano dobrado) e te cura. Essa cura encaixa com o chomp empowered do W, dando à Crimson Curse o combustível de HP-perdido que ela precisa pra escalar.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão contra a maioria das comps. Reduzem dano de auto-attacks (AA = auto-attack), o que pesa muito em fights longos de Frenzy contra marksmen (carries físicos de longo alcance, tipo Caitlyn ou Jinx).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Attack Damage extra baseado no AD base mais um escudo Lifeline (passiva por threshold de HP: um escudo que dispara automaticamente quando o HP cai abaixo de 30%). O escudo é a rede de segurança pros R commits (engagements totais com R) que dão errado.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — sobe o cap de lifesteal (lifesteal = % do dano de auto-attack convertido em cura) e transforma a cura excedente em escudo. Combinado com Crimson Curse + Sundered Sky, você cura mais do que qualquer time que não tenha comprado anti-heal (itens que reduzem a cura recebida).

**Itens situacionais:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra times com dois damage dealers físicos fortes (ex. Yasuo + Caitlyn): converte o burst que você toma num sangramento espalhado por alguns segundos, te dando tempo de resetar com a cura do chomp do W.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP (Syndra, Veigar, Lissandra). O escudo mágico ativa exatamente quando um AP threat está no meio da combo em cima de você.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dos Steelcaps se o adversário tem 3+ habilidades de hard CC (CC = stuns, roots, fears que travam seu personagem). A stat Tenacity dessas botas reduz a duração desses CCs, então seu R commit não é chain-stunado em pleno voo.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra comps AP-heavy com dano mágico contínuo: amplifica em 25% a cura de Crimson Curse e do chomp do W, dobrando a identidade da Briar em vez de só remendar.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Mude pra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando a contagem de CC ultrapassar a de threats AA.

**Skill order:** Maximize **W** primeiro (DPS, sustain, Move Speed), **Q** em segundo (gap close + shred percentual de Armor/MR), **E** por último. Coloque um ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Domination** com **Treasure Hunter** e **Relentless Hunter**, ou **Resolve** com **Second Wind** e **Revitalize** se o time adversário encadear 3+ CCs de habilidade em você.

## Matchups principais

- **Warwick:** Mirror de sustain na jungle (ambos os champions curam muito em fights). Ele escala com Attack Speed nas autos; você escala com a W AOE mais o chomp que faz dano em HP perdido. Não abra com HP cheio dos dois lados: deixe ele soltar o Q (que aplica fear em você) primeiro, cancele sua própria Frenzy com E pra desviar, e reengaje quando a ulti dele estiver em cooldown.
- **Lillia:** Ela te kita (te ataca enquanto recua) com o dano passivo do Q e o slow do W. Guarde o E pra quando ela vier andando em cima de você spammando Q: o knockback joga ela na parede e atordoa. Sem E, ela fica girando ao seu redor pra sempre.
- **Lee Sin:** Fighter de early que te bate no nível 3 se abrir com Q + Smite (summoner spell de jungler). Evite a red-side jungle dele até o nível 4; depois que Sundered Sky entra online, a matemática vira a seu favor e o escudo W dele cura menos que seu chomp do W.
- **Sejuani:** Tank jungler com hard CC. O shred de Armor do Q (redução percentual da stat Armor dela) abre ela, mas o R dela cancela seu R commit em pleno voo. Marque o cooldown de ulti dela — se estiver up, não abra R num alvo perto dela.
- **Kha'Zix:** O counterpick clássico (um champion escolhido especificamente pra te neutralizar no draft) pros skirmishers. Ele te isola e bursta em 2 segundos (burst = dano alto em 1-2 segundos). Agrupe com o time depois do nível 6 e jogue com vision (use wards pra não ser surpreendida); não vá fazer solo-invade no lado da jungle dele.

## Power spikes e condições de vitória

- **Nível 3:** Todas as três habilidades básicas online. Primeira janela razoável de gank — Q por cima da parede num alvo, W em Frenzy, Q stun contra a parede.
- **Nível 6:** Primeira **Certain Death**. Ganks cross-map (R lançado atravessando o mapa pra uma side lane) viram uma ameaça real: até um inimigo que já gastou Flash e não tem dash perde a troca quando o R trava nele.
- **Sundered Sky completo (~ minuto 10-12):** Primeiro spike de duelo (o momento em que você vence 1v1 de forma confiável). Você vence a maioria dos junglers e a maioria dos laners em quem você abre R de fora da vision deles.
- **Sterak's Gage online (~ minuto 22-26):** O escudo Lifeline transforma R commits que deram errado em kills. Combinado com o overheal de Bloodthirster, você vira frontline (o corpo tank que abre fights) e finisher ao mesmo tempo.

## Erros comuns

- **W-Frenzy num tank em vez do carry.** O self-taunt do W trava no inimigo mais próximo com prioridade em champions, mas se Maokai (um tank) estiver mais perto que Caitlyn (um carry), você come Maokai. Use Q primeiro pra pular por cima da frontline (os champions tankys na frente do time); o Q te coloca no alvo prioritário antes do piloto automático do W ligar.
- **Segurar o E demais pelo wall stun.** O E em carga máxima dá knockback nos inimigos, mas o channel (o período em que você fica parada conjurando) é longo e durante o channel você toma dano (só reduzido, não bloqueado). Se não tem parede alinhada, solte entre 50 e 70% de carga pra ter só o slow — E parcial te salva, E completo te mata.
- **Usar R num grupo de 4 inimigos.** O R aplica fear nos inimigos ao redor da presa, mas eles se recuperam em 1.5 segundo. Quando se recuperam, você está sozinha no meio do time deles em Frenzy empowered sem aliados pra te peelar (peel = proteção aliada que tira atacantes de cima de você). Use o R quando a presa está separada — flanks (um único inimigo se aproximando pelo lado), rotações, momentos de backline isolada — não num engage limpo agrupado (um fight onde o inimigo tá todo junto).
- **Esquecer que Crimson Curse precisa de HP perdido pra escalar.** A cura bônus cresce conforme seu HP cai. Não recall pra base com HP cheio depois de um gank bem-sucedido se vem um segundo fight; ficar em 40% HP faz o próximo chomp curar quase o dobro.

## Dica avançada

Treine o **self-cancel do W via E**: quando a Frenzy gruda no inimigo errado (um tank em vez do carry, ou te leva pra dentro do CC), aperte E no meio da Frenzy pra resetar. A damage reduction durante o channel do E + a cura por % HP máx transformam um engage estragado num reposicionamento de graça. Solte o E sem carga (ou em 30%) no instante em que o alvo prioritário entra no range do Q, depois Q nele e re-W pra começar uma Frenzy limpa na pessoa certa. O custo total de animação é cerca de 1 segundo; a diferença em conversão de kill é uma barra de HP inteira.
