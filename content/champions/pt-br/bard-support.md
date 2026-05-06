---
title: "Bard Support Build & Guia — Patch 16.9"
slug: "bard-support"
language: "pt-br"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Guia Bard support para League of Legends Patch 16.9: estilo roaming-pickoff, build, matchups principais, power spikes, erros comuns e dica avançada de wall-stun."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Os Meeps surgem ao lado do Bard e adicionam dano mágico bônus às auto-attacks. Os chimes nascem pelo mapa: coletá-los dá XP, mana e move speed fora de combate."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Skillshot linear que aplica slow no primeiro alvo. Se o projétil acerta um segundo inimigo ou uma parede, ambos tomam stun. Wall-stun é a marca registrada de pickoff do Bard."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Coloca um altar de cura que carrega por 10 segundos. O primeiro aliado a pisar nele cura HP e ganha um boost breve de move speed. Até 3 ativos. Inimigos destroem."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Abre um portal de mão única através do terreno próximo. Qualquer campeão (aliado ou inimigo) pode usar. Cooldown longo: serve para gank, escape ou flank surpresa."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "AOE de longo alcance que coloca campeões, minions, monstros e torres em stasis por 2.5 segundos. Use para travar alvos, salvar aliados do golpe letal ou congelar um tower dive."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra lockdown CC single-target no seu ADC (Morgana Q, Ashe R, Leona E em cadeia R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de burst AOE (Yone + Malphite, setups de teamfight da Orianna)"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de teamfight agrupadas: o heal em área cai mesmo morto"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins ou divers pesados (campeões que pulam pra te deletar rápido: Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "quando seu ADC é a win condition e o time inimigo tem várias ameaças de dive"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roama o tempo todo para coletar chimes e wall-stunna inimigos isolados com Q. Em teamfights, R na frontline inimiga para o time deletar a backline antes do engage commitar."
  weakness: "Squishy e sem dash. Se Q erra ou não pega wall-stun, não tem follow-up de CC e o ADC morre no 2v2. Punido por supports com CC point-and-click e bullies agressivos no nível 2."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Enchanters imóveis sem dash"
      reason: "A ameaça do Q-into-wall stun obriga eles a ficarem muito atrás dos minions. Sem escape, um wall-stun limpo vira kill antes do time deles conseguir rotacionar."
    - examples: ["alistar", "nautilus"]
      archetype: "Engagers melee telegrafados"
      reason: "O R cancela o engage commit. Logo depois do Flash-W deles em cima do seu ADC, aperta R no engager: ele congela em stasis e seu ADC sai de graça."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Enchanters de lockdown com CC point-and-click"
      reason: "O CC deles é point-and-click (não tem skillshot pra desviar). Eles fazem **peel** trivial nas suas tentativas de dive (peel = proteger um aliado interrompendo quem pulou nele), e o Bard não tem dash pra disengage quando o trade vira."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Hookers de longo alcance"
      reason: "O hook deles (range 1100-1150) te alcança antes da sua linha de Q ficar limpa. Sem dash, depois de um hook acertado a lane joga 1v2 por 30 segundos."
    - examples: ["pantheon"]
      archetype: "Bullies agressivos de nível 2"
      reason: "Lanes de all-in nos níveis 2-3 punem suas stats early fracas. Sem sustain além da W, que precisa de 10 segundos para carregar antes de pagar."
---

## Visão geral

Bard é um **support roaming** (um support que sai constantemente da lane para influenciar o resto do mapa). A identidade dele fica **fora** do 2v2 da bot lane (o confronto bot lane entre os dois ADCs — os carries de dano principais — e seus dois supports). Ele coleta **chimes** brilhantes que aparecem pelo mapa: coletá-los dá experiência, mana e move speed fora de combate de graça. Converte essa mobilidade em **pickoffs** — pegar inimigos isolados longe do time e matar. O Q dele é um slow de longo alcance que vira stun se o projétil acerta um segundo alvo ou, mais famoso, uma parede atrás do primeiro. O R dele é uma bomba de stasis (4 segundos de voo, depois um AOE largo) que congela tudo na área por 2.5 segundos: aliados, inimigos, torres e minions inclusos.

Plano de jogo: colete chimes sem parar, cace pickoffs com wall-stun no **river** (a zona neutra central que separa as duas metades do mapa) e na jungle, e trate sua bot lane como uma das três lanes que você patrulha — não o lugar onde você mora. Em teamfights, você é o **disengage** (o jogador que quebra o engage inimigo com R) e o **catch** (o jogador que trava alvos isolados) — quase nunca a frontline.

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (consumíveis que recuperam HP em alguns segundos). World Atlas é o quest item de support: gera ouro com o tempo e evolui automaticamente em uma de quatro versões finais conforme você causa dano em campeões inimigos e **wardeia** o mapa (coloca wards, objetos que dão visão nos arbustos, para o time ver o que está acontecendo). Para Bard, deve sempre virar Bloodsong.

**Itens core (na ordem):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — finalização do path de support. Escolha certa porque Bard é support de **poke** (dano à distância para desgastar HP) e pickoff, não um **enchanter** (support de cura/escudo como Soraka ou Janna). Bloodsong dá AP (Ability Power — stat que escala dano mágico) e premia colocar dano em campeões inimigos — exatamente o que seus combos de Q + auto-attack fazem.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas com **ability haste** (stat que reduz todos os seus cooldowns) e cooldown reduzido em **summoner spells** (os dois spells extra no canto superior da barra: Flash, Ignite, etc.). Seu **Flash** volta antes para engages, e o **R** roda mais rápido para fights de objetivo (teamfights no drake ou Baron — Baron Nashor é o monstro neutro gigante no river top que dá um buff forte para o time inteiro).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — habilidade ativa que dá 4 segundos de move speed extra para você e aliados próximos. Combina com seu roam já rápido para **ganks** (correr para outra lane para matar um inimigo lá) impossíveis de fugir, do bot pro mid.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — dá heal/shield power que cresce no late game (depois de ~25-30 minutos quando os campeões têm 4+ itens). Compre quando a partida está se alongando e as cargas do W curam números reais.

**Itens situacionais:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ativo que limpa um stun, root (não pode mover, mas pode atacar) ou fear (movimento descontrolado) do seu ADC. Compre contra lockdown single-target (Morgana Q, Ashe R, cadeia Leona E em R).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — ativo que escuda todos os aliados próximos por 2.5 segundos. Compre contra comps de burst AOE (squads tipo Yone + Malphite + Orianna que one-shotam — matam em um golpe — times agrupados).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal de área que você joga em cima dos aliados mesmo morto. Combina com comps de teamfight que se agrupam em torno de objetivos.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — ativo que te deixa invulnerável por 2.5 segundos. Compre contra assassins ou **divers** pesados (campeões que pulam em você para matar em 1-2 segundos: Zed, Talon, Diana) quando estão claramente te focando.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — redireciona 12% do dano que um aliado vinculado leva para você, e cura esse aliado nas suas auto-attacks. Compre quando seu ADC está hyper-fed (8+ kills de vantagem, deleta inimigos em 1-2 hits) e o time inimigo tem várias ameaças de dive.

**Botas:** Ionian Boots of Lucidity por padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** é a alternativa quando o time inimigo tem muito CC (Lulu, Leona, Lissandra) — dão resistência mágica mais 30% de tenacity (duração de CC reduzida em você).

**Skill order:** Maxe **Q** primeiro (dano principal e ferramenta do wall-stun), **W** em segundo (a cura escala com o rank), **E** por último (a redução de cooldown quase não importa — um ponto basta até late). Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Runas são passivos escolhidos antes da partida (6 picks em duas árvores: uma primária de 4 runas e uma secundária de 2). O padrão do Bard é:

- Primária **Inspiration**: **Glacial Augment** (quando você acerta um auto-attack em um alvo lentificado, aparece embaixo dele uma área extra de slow — combina com o slow do Q), **Magical Footwear** (botas grátis no minuto 12), **Biscuit Delivery** (3 biscoitos no early que recuperam HP e mana), **Cosmic Insight** (extra ability haste e summoner spells reduzidos).
- Secundária **Resolve**: **Bone Plating** (depois de levar 3 hits, os próximos 3 dentro de 1.5s causam menos dano) + **Revitalize** (seus heals e escudos ficam mais fortes). Escolha de safety na lane.
- Secundária alternativa **Sorcery**: **Manaflow Band** + **Scorch** para mais dano de poke na lane.

## Matchups principais

- **Lulu / Janna:** hard counters no 2v2. O **CC point-and-click** delas (CC que não precisa mirar — só clicar no alvo) cancela suas tentativas de dive. O W da Lulu te transforma num bichinho inofensivo (polymorph); o Q da Janna te lança para cima. Fique atrás, roame para mid assim que o **R** estiver disponível no nível 6, e confie que seu ADC vai **farmar** seguro (farmar = dar o último golpe no minion para ouro e XP).
- **Leona / Nautilus:** **tanks** (campeões de frontline com muito HP) de engage com CC point-and-click. Posicione-se atrás do seu ADC sempre. Se pularem no seu ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** neles para congelar o engage, e depois saia. Nunca **trade** auto-attacks contra eles (um trade é uma troca curta de hits na lane, não uma tentativa total de kill) — a cadeia de CC deles é mais longa que sua janela de trade.
- **Blitzcrank / Pyke / Thresh:** supports de hook (a spell signature deles é um **skillshot** — habilidade mirada — de longo alcance que te puxa para perto). O range de hook deles supera seu range efetivo de Q. Fique atrás dos minions toda vez que o hook deles estiver pronto. Depois de um hook errado, pegue um trade grátis e mande **Q**: o hook deles fica em cooldown por 15+ segundos.
- **Pantheon support:** bully de lane agressivo (campeão forte o bastante para te empurrar pra fora da lane no early). Ele faz **all-in** (commit total na kill, sem recuo) no nível 2 com stun **W** + lança **Q**. Você não tem sustain. Fique bem longe, wardeie os dois arbustos do river (as zonas de mato alto onde os campeões ficam ocultos da visão) e recuse trades no nível 2. Recupere pós-6 com roams de **R** para o mid.
- **Senna:** **scaler** passiva (fica mais forte com o tempo, não se compromete no early). Você não consegue all-inar limpo por causa das auto-attacks de longo alcance dela. A lane é um farm-trade lento. Vença o map game coletando chimes e roame para mid para plays de **R**. Nunca se exponha demais — o **W** root dela vindo da **fog of war** (as zonas não wardadas do mapa que seu time não vê) é setup de gank grátis para o jungler dela (o colega de time que limpa os camps da jungle).

## Power spikes e condições de vitória

- **Nível 2 (um ponto em W):** coloque um altar no arbusto da lane para sustain entre trades. Combinado com **Q** no nível 1, você tem ameaça de kill se o support inimigo se posicionar mal.
- **Nível 6 (R desbloqueado):** o primeiro **Tempered Fate** abre plays que mudam a partida. Stasis no ADC inimigo durante um 2v2 é, muitas vezes, kill na hora. Roame para mid assim que a wave (a linha de minions) voltar para sua torre (quando os minions naturalmente começam a andar para o outro lado depois de um push) — seu **R** mais o combo do mid laner ganha contra um mid desavisado.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong completo (~ minuto 14-16):** seu quest item de support evolui. Você começa a contribuir com dano real nos hits de Q e seus roams escalam.
- **Nível 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong online:** o rank 2 do R (a segunda vez que você gasta um ponto em R) baixa o cooldown para 95 segundos. Com Shurelya's ativo, você consegue rotacionar (mover entre lanes) rápido o bastante para influenciar as duas side lanes (top e bot) e mais os drake fights (teamfights na cova do drake) a cada 90 segundos.

## Erros comuns

- **Jogar Q em campo aberto pra poke.** Sem um segundo alvo ou parede atrás, **Q** é só um slow — e um slow de 60 mana e 11 segundos de cooldown é um trade brutal. Sempre confira se tem um minion ou parede na linha atrás do alvo. Se não tiver, não aperte Q.
- **Roamar com a wave empurrada na sua torre.** Quando você sai, a wave (a linha de minions em luta) bate na sua torreta — os minions morrem embaixo da torre e seu ADC perde 2-3 minions de farm mais as **tower plates** (as placas de armadura nas torres do early; quebrar uma dá ouro). Roame **só** quando a wave estiver no meio da lane ou empurrando para a torre inimiga (os minions estão avançando, então seu ADC fica seguro na torre dele enquanto você não está).
- **Dar R no próprio ADC durante um fight.** A stasis no aliado pausa tudo o que ele estava fazendo — incluindo uma cadeia de auto-attack que estava prestes a vencer o trade. Use **R** em inimigos, em aliados morrendo (para interromper o golpe letal) e em torres (para cancelar um tower dive). Quase nunca em um carry saudável.
- **Ficar dentro da própria área do R.** O AOE é largo e o tempo de voo é 4 segundos: você esquece onde castou, anda para dentro da própria stasis, desperdiça a ult. Caste e saia.
- **Ignorar os chimes fora da lane.** Chimes são XP e mana. Um Bard que coleta chimes chega ao nível 6 cerca de 2 minutos antes de um Bard que fica na lane. Se você não está 1 nível à frente do resto do time no minuto 10, está jogando errado.

## Dica avançada

Treine o **flash-stun**: caste Q e ative **Flash** (o summoner spell de teleporte curto universal) no meio do voo para reposicionar seu personagem — e o projétil de Q, que segue seu modelo, ganha um ângulo novo do ponto novo. O truque é flashar *na direção* de onde o inimigo está fazendo **dash** (movimento instantâneo curto). Assim você pega gente que desviaria de uma Q normal de boa. É o truque de maior alavancagem no kit do Bard (o conjunto das habilidades dele) e muitas vezes a diferença entre um Bard que ganha as partidas e um que não ganha.
