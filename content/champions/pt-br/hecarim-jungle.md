---
title: "Hecarim Jungle Build & Guia — Patch 16.9"
slug: "hecarim-jungle"
language: "pt-br"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Hecarim jungle no Patch 16.9: clear path, padrões de gank, build bruiser, matchups principais, power spikes, erros comuns e uma dica avançada final."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim converte uma porcentagem do Move Speed bônus em Attack Damage. Todo item de velocidade é também item de dano."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "Talho AoE nos inimigos próximos com dano físico. Cada acerto acumula stacks que reduzem o cooldown e aumentam o dano. Botão principal de clear e DPS."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "Zona AoE de dano mágico que cura Hecarim com base no dano que os inimigos dentro recebem. Sustain no clear e em dives de torre."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Move Speed crescente mais ghosting (atravessa unidades). O próximo basic attack dá knockback com dano escalado pela distância percorrida. Ferramenta core de gank."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Carga em linha com dano mágico e fear nos inimigos atingidos no fim. Engage e disengage de longa distância para teamfights."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs muito CC ou dano mágico (Lissandra, Syndra, Brand): troque por Plated Steelcaps quando o CC pesa mais que armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tanks (Ornn, Sion): o armor shred dos autos e dos stacks de Q ajuda o time inteiro"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs times sem tank quando você precisa de wave clear e splitpush (empurrar uma side lane sozinho para forçar resposta)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs comps sem burst real (4-5 fighters/tanks): mais ability haste e uptime de R em fights longos"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs times muito AP (Brand + Karthus + Vladimir): magic resist e move speed passivo que alimenta Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando focam em você primeiro: uma segunda vida grátis deixa committar mais fundo como engage"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Use o Move Speed crescente do E e do Phase Rush para flankar alvos squishy (carries de baixa defesa tipo ADC), follow-up com fear do R, e cycle Q enquanto W te cura do burst."
  weakness: "Fraco antes do nível 3 e frágil quando E está em cooldown. Hard CC como roots (Morgana Q, Lillia R) ou grounds (Cassiopeia W) desliga seu engage e te deixa sem escape."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lentos sem gank early forte"
      reason: "Hecarim os out-clear e chega ao level 3 antes; pode invadir o segundo buff deles ou counter-gankar uma lane antes deles aparecerem. O scaling no speed bate o deles em stats puros."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Enchanters squishy sem peel para si"
      reason: "E + R deixa Hecarim alcançar e fearar o carry de fora da tela; assim que o support cai, o ADC inimigo fica sem shields e desaba em segundos."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "ADCs imóveis ou de dash curto"
      reason: "Phase Rush mais a carga do E fecham o gap antes deles kitarem; a única saída (Flash) tem cooldown bem maior que seu engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champions com roots, slows ou grounds que travam movimento"
      reason: "Todo o kit do Hecarim escala com Move Speed (Warpath converte velocidade bônus em Attack Damage). Uma vez rootado ou groundado, ele perde dano e a opção de disengage."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Junglers fortes em early-game e invade"
      reason: "Hecarim é fraco antes do nível 3. Esses junglers podem invadir o segundo buff, matá-lo ou queimar o Flash, e snowballar antes dele acender."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Bruisers duelistas que punem dive solo"
      reason: "Se Hecarim engaja sozinho (sem follow-up do time), eles vencem o 1v1 com passives anti-AD ou true damage e transformam o commit dele em kill grátis."
---

## Visão geral

Hecarim é um diver jungler veloz — um fighter que fecha distâncias enormes, joga o inimigo de volta para dentro do time dele e gruda como sanguessuga graças a **Devastating Charge (E)** e **Onslaught of Shadows (R)**. A passiva **Warpath** transforma cada ponto de Move Speed bônus em Attack Damage, então itens de velocidade também são itens de dano. O kit é simples de ler mas exige timing apurado: você passa boa parte da partida como ameaça móvel que pune carries expostos (damage dealers de baixa defesa tipo ADCs e mages).

O game plan é repetível. Clear rápido com **Rampage (Q)** e **Spirit of Dread (W)** para chegar ao level 3, depois busca um gank early na lane que oferece o melhor ângulo de carga com E (lanes longas e retas são as melhores). Do mid game em diante, seu trabalho é flankar (entrar no fight pelo lado que ninguém está olhando) com **R**, fearar a backline inimiga, e encadear knockbacks de **E** até cair tudo.

## Build recomendada

**Itens iniciais:** Mosstomper Seedling (ou Gustwalker Hatchling se quiser mais velocidade fora de combate) + Refillable Potion. Mosstomper dá um shield com HP cheio — perfeito para sobreviver ao primeiro clear.

**Itens core (em ordem):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — seu spike de AD mais uma active que aplica slow (Halting Slash). O slow on-demand é a diferença entre um gank que fecha a kill e um em que o inimigo escapa de Flash.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor contra auto-attack. Botas padrão quando o time inimigo tem 2+ ameaças AD.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity e um shield grande quando você toma dano pesado. É o item que deixa você committar no fight (entrar de cabeça sem recuar) e sobreviver tempo suficiente para cyclar habilidades.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — transforma o dano físico recebido em sangramento espalhado (dano dividido nos próximos segundos em vez de tudo de uma vez). Também recupera HP em takedown, então você pode ir all-in (commit total até a kill) e sair andando vivo.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garante um crítico no primeiro auto de cada fight (perfeito com o knockback do **E**) e te cura uma porção decente de HP. Casa com Stridebreaker porque ambos os itens querem que você encaixe autos entre habilidades.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — em vez de Plated Steelcaps quando o time inimigo tem muito crowd control ou dano mágico (Lissandra, Syndra, Brand). A tenacity reduz a duração dos stuns para você ainda conseguir castar **R**.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tanks (Ornn, Sion). Auto-attacks e stacks de **Q** rasgam armor para o time todo.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quando quer splitpushar uma side lane (empurrar sozinho para forçar uma resposta) e precisa de wave clear extra mais omnivamp.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs comps lentas sem burst. Ability haste extra significa mais fears com **R** e mais spam de **Q** em fights longos.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs times pesados de AP (Brand + Karthus + Vladimir). Magic resist em stack e a passiva de Move Speed acumulam com Warpath: mais velocidade = mais AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando o time inimigo te foca a cada engage. Te revive para limpar o fight depois que seu time já gastou habilidades.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por padrão; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o CC pesa mais que dano de auto-attack.

**Skill order:** Maxe **Q** primeiro (waveclear, jungle clear, DPS principal), **E** em segundo (mais duração de ghost e cooldown menor para ganks), **W** por último. Coloque ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Sorcery** com **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush ativa após 3 acertos separados de habilidade em 4 segundos — fácil no Hecarim com **E**-auto-**Q** em gank, e o burst de Move Speed vira AD via Warpath. Secundária **Resolve** com **Bone Plating** e **Overgrowth**. Use Conqueror em Precision se o time inimigo for cheio de tanks de frontline (você quer dano crescente em fights longos).

## Matchups principais

- **Lillia:** o **R** dela te rootea de mapa de distância. Force ela a usar caminhando para frente com HP baixo e só committe depois que ela usar. Se acertar, seu engage some por 14+ segundos.
- **Kha'Zix:** invasor forte e assassin. Track ele — se o blue buff dele estiver faltando aos 2:30, está na sua jungle. Pathing longe da rota esperada até o nível 4, depois agrupe com seus laners pelo resto do early.
- **Jarvan IV:** matchup espelhado. Quem ulta primeiro normalmente vence o trade. Mantenha wards na jungle dele para detectá-lo e chamar seus laners para recuar; nunca agrupe com aliados em espaços apertados se o **R** dele estiver up.
- **Sejuani:** tank jungler que escala. Você out-clear ela e out-pressiona ela early. Force fights antes do minuto 20; no late os stuns dela e o peel de time batem o seu dive solo.
- **Master Yi:** cuidado com o seu **R**. Yi consegue cleansar o fear com a corrente **Q**-**Alpha Strike** em invuln. Guarde **R** para quando o **Q** dele estiver em cooldown — espere ver ele usar em uma wave ou camp, depois engaje nos próximos 12 segundos.

## Power spikes e condições de vitória

- **Nível 3 (depois do primeiro clear completo):** primeira janela de gank. Com ponto em **Q**-**E**-**W** dá para full-comboar um alvo que se expor. Brigas no Crab são reais — você chega antes da maioria dos junglers.
- **Nível 6:** Onslaught of Shadows online. Flanks cross-mapa e dives de torre ficam possíveis. Se uma side lane tem prio, **R** do fog e força o fight.
- **Stridebreaker finalizado (~ minuto 10-12):** flip grande de tempo. A active Halting Slash deixa você grudado em alvos em fuga sem queimar **E**. Pressione Drake ou Herald logo em seguida.
- **Sterak's Gage online (~ minuto 22-25):** você vira a ferramenta de engage que sobrevive os 2 primeiros segundos do fight. Busca picks (eliminar um inimigo isolado fora do teamfight) no ADC ou no mid laner em volta dos objetivos.

## Erros comuns

- **Spammar Q sem auto-attacks entre os casts.** Warpath te dá AD da velocidade — deixe os autos entrarem nos buracos. Animation cancel: casta **Q**, hard-clica um auto, casta **Q** de novo.
- **Ultar na frontline.** **R** é ferramenta de flank, não de engage frontal. Fearar o tank inimigo o manda de volta para o ADC para peel. Contorna o fight (use vision ou fog), depois **R** direto nos carries.
- **Engagear sem o time em alcance de visão.** Todo o dano do Hecarim é "joga de volta no time que faz follow-up". Se seus laners não estão a 2 segundos de catch-up, a kill não vai para ninguém e você morre na jungle deles.
- **Buildar full damage em score 1/3.** Quando você está atrás e não está snowballando (snowball = vantagem crescente que se autoalimenta), Sterak's mais Sundered Sky te mantêm útil como engage. Fazer Ravenous Hydra second em uma partida perdida te transforma em dive bot de 2 hits.
- **Desperdiçar o ghost do E em minions.** **E** te deixa atravessar unidades só durante a janela curta. Reserva para quando precisar passar por uma wave ou ward — não joga no cooldown na jungle.

## Dica avançada

Use uma rotação "fake-flank" em volta dos objetivos do mid game. Caminhe em vision na sua jungle para o inimigo trackar você no minimap dele, depois recua imediatamente para o fog of war (zonas escuras que você não vê) e faz o caminho longo. Quando o inimigo se rotacionar achando que você ainda está onde foi visto pela última vez, **R** pelo lado que eles não esperam. O truque depende do Move Speed puro do Hecarim: a maioria dos junglers não consegue puxar essa jogada porque não cobre a distância a tempo. Com Phase Rush mais Stridebreaker active, você consegue.
