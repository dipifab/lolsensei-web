---
title: "Alistar Support Build & Guia — Patch 16.9"
slug: "alistar-support"
language: "pt-br"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Guia completo de Alistar support no Patch 16.9: starter kit, build tank-engage, matchups principais, power spikes, erros comuns e uma dica final de execução."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar carrega o rugido quando atordoa ou desloca um campeão inimigo, ou quando inimigos próximos morrem (minions, monstros da jungle ou campeões). Carregado, o próximo rugido cura ele e os aliados próximos."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Bate no chão à volta e aplica knock-up nos inimigos próximos por 1 segundo. Alcance curto: você precisa estar colado no alvo."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar dasha em um inimigo, causa dano e o empurra em linha reta. Ferramenta principal de engage: encaixe Q logo depois para a combo W-Q (empurra ele pra dentro do seu time, depois knock-up)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Pisoteia o chão por 5 segundos ignorando colisão com minions e causando dano. Cada pulso que acerta um campeão dá um stack — com 5 stacks, o próximo basic attack atordoa e causa dano bônus."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Limpa instantaneamente todo crowd control sobre Alistar e dá redução de dano alta (físico + mágico) durante a duração. Use antes de engagar em times com muito CC, não depois que a luta começou."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "troque do Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) quando o harass early dói mais que o CC late"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contra carries que empilham attack speed (Tristana, Kog'Maw, Master Yi) — diminui a velocidade de ataque deles em aura ampla"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contra comps de burst AP (mago duplo tipo Syndra mid + Brand support) — escudo mágico passivo que regenera fora de combat"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Acerte a combo W-Q (Headbutt pra trás + Pulverize knock-up) num carry squishy pra abrir uma luta que o time converte. Aperte R antes de engagar se eles têm hard CC, assim a corrente de CC quica em você."
  weakness: "Alcance de engage curto — você precisa estar grudado no alvo pra acertar Q. Mana frágil no early e zero poke à distância; se a bot inimiga joga passiva, você perde a lane e tem que roamar pra continuar relevante."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanters squishy sem hard CC próprio"
      reason: "Não têm ferramentas pra parar a combo flash + W-Q. Quando você acerta o knock-up em cima delas, morrem antes do ADC conseguir peelar — Sona e Yuumi não têm escape nenhum."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs imóveis sem dash"
      reason: "O W tem 650 de alcance e é point-and-click: ADCs sem dash nem blink comem a combo inteira sempre que avançam pra last-hittar. Depois que você se commita, eles não fogem do engage."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage supports com poke skillshot e sem escape"
      reason: "O poke deles pesca cooldowns, mas um Trample stackado mais flash-Q em cima deleta: a vantagem de range não vale nada quando você fecha a distância."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Enchanters de disengage com peel ativo"
      reason: "O polymorph da Lulu cancela seu W no meio do dash, o R do Milio limpa seu knock-up à distância, o E da Renata puxa o carry pra fora da combo. Seu único engage é respondido de graça."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Pokers de longo alcance com shield ou binding"
      reason: "Comem seu HP de graça em 900-plus de alcance enquanto você não tem resposta. A Black Shield da Morgana bloqueia o Q knock-up inteiro — você flasha pra nada."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Outros tank engage supports com hard CC mais longo"
      reason: "O primeiro cast deles cai antes de você entrar no alcance do Q: Q hook do Nautilus, dash-stun E da Leona, W charge da Rell — todos batem o seu W. Você come o engage deles, eles não comem o seu."
---

## Visão geral

Alistar é um **vanguard support** (um support tank cuja função é abrir lutas, não curar aliados) — ele engaga pulando fisicamente em cima do carry inimigo e prendendo ele com crowd control. O kit gira em torno de uma combo icônica: **Headbutt (W)** dasha num alvo e empurra em linha reta, e recastar **Pulverize (Q)** imediatamente sob seus pés aplica knock-up. A sequência completa (W em Q) joga o inimigo de volta **pra dentro do seu time** e segura ele suspenso no ar por um segundo inteiro — tempo suficiente pro seu ADC chegar e descarregar dano de graça. **Trample (E)** dá movimento **ghosted** breve (você atravessa minions e outras unidades sem colisão) e um **proc** de stun (efeito a stacks que dispara ao atingir uma condição) no próximo basic attack com 5 stacks. **Unbreakable Will (R)** limpa qualquer crowd control sobre ele e dá redução de dano alta — é o que permite a um Alistar com 1 HP atravessar um root da Morgana e mesmo assim fechar a kill.

Game plan: na lane, **bait** (provoque o inimigo a se commitar) ficando levemente avançado; no momento que o ADC inimigo avança pra last-hittar, dê Headbutt, knock-up com Q, ande em cima com Trample stackando, e o ADC converte. Mid game, **roam** (sai da bot pra ajudar mid ou jungle) usando o movimento ghosted do Trample mais a flexibilidade de summoner spells — Alistar passa por paredes de minions onde outros supports ficam presos. Late game, fica na frontline, come o CC inimigo com **R** e engaga no carry cuja morte fecha a luta.

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (o starter unificado de support) mais 2 Health Potions. Não last-hitte minions na lane: deixa o gold pro seu ADC, World Atlas paga seu gold separado pela quest dele.

**Itens core (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolui automaticamente conforme você acumula progresso de quest, passando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, até o upgrade endgame que você escolher.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist mais **tenacity** (status que diminui a duração de crowd control em você). Botas padrão pra um engage tank: stuns e slows mais curtos significam que você não fica preso fora da combo **W-Q** logo depois de commitar.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active que escuda todos os aliados próximos por alguns segundos. Aperte no instante que você abre o engage, pro time absorver o primeiro **burst** (dano alto concentrado nos primeiros 1-2 segundos da luta) do inimigo.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — vincula você ao seu **ADC** (Attack Damage Carry — o companheiro de bot lane que dá dano com basic attacks, principal damage dealer late-game): uma parte do dano que ele recebe é redirecionada pra você, e em troca você cura ele. Vincule sempre o carry cuja vida você mais precisa estender.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — o upgrade endgame engage-focused do seu support item (World Atlas se transforma em um destes automaticamente quando termina a quest). Carrega um passivo **Spellblade**: depois de castar qualquer habilidade — W Headbutt, Q knock-up, R cleanse, até um tick de E Trample — seu próximo basic attack causa dano físico bônus on-hit, e se acertar um campeão inimigo, ele toma mais dano de qualquer fonte por 4 segundos. O padrão é "habilidade → AA → habilidade → AA" stackado durante a luta inteira, não "guarda o AA pra depois do CC".

**Itens situacionais:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas que dão armor e reduzem dano de basic attacks. Troque do Mercury's Treads quando a bot inimiga é auto-attack heavy (Caitlyn, Draven, Tristana) e o **harass** (poke e chip damage) na lane dói mais do que a corrente de CC do time inimigo.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — diminui a velocidade de basic attack dos inimigos próximos em aura ampla. Compre contra carries que empilham attack speed (Tristana, Kog'Maw, Master Yi) onde sua função vira **peelar** (proteger seu próprio carry dos inimigos que tentam matar ele) em vez de engagar.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — escudo mágico passivo que regenera fora de combat. Compre contra comps de burst AP (setup de mago duplo tipo Syndra mid + Brand support) — o escudo come uma ult inteira e te deixa sobreviver ao engage que você abriu.

**Botas:** Padrão ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pela tenacity — um stun de um segundo do Thresh vira meio segundo, te deixando a janela pra encadear **R** no engage. Troque pra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** antes de finalizar só se a bot inimiga tá doendo mais do que o CC late-game do time deles.

**Skill order:** Maxe **E** (Trample) primeiro — é seu dano em lane mais o proc de stun que te dá um segundo crowd control depois do Q. Maxe **W** em segundo — cooldown menor significa mais janelas de engage. Maxe **Q** por último (é mais finisher; o rank-up muda pouco o knock-up, só o dano). Coloque ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Resolve** (a árvore defensiva — durabilidade) com **Aftershock** (armor e magic resist grátis por alguns segundos quando você aplica crowd control, dispara em todo Q knock-up), **Font of Life** (seu CC marca o alvo; aliados que atacam ele se curam um pouco), **Conditioning** contra lanes que escalam late ou **Bone Plating** contra lanes que tentam te bursar cedo, e **Unflinching** (extra **tenacity**, o status que diminui crowd control em você, quando usa summoner spell). Secundária **Inspiration** (árvore utility) com **Hextech Flashtraption** (Flash backup de curto alcance em cooldown longo — ouro pra combos W-Q surpresa) e **Cosmic Insight** (cooldowns reduzidos em summoner spells e actives de itens). **Stat shards** (os três pequenos boosts no fim da página de runas): Adaptive Force / Adaptive Force / Health (Adaptive Force = bônus AD ou AP dependendo do que seu kit usa).

## Matchups principais

- **Leona:** Espelho de **engage** (os dois querem abrir a luta). Ela tem CC mais longo que o seu (dash-stun Zenith Blade, R Solar Flare), então não tente engagar primeiro com os cooldowns dela up. Espera ela jogar o E, e abre sua janela de 10 segundos — flash-Q no ADC dela enquanto ela está sem follow-up.
- **Pyke:** Skill matchup — sem vantagem clara no papel, decide quem joga melhor. Ele te outpoka com Q e te outroama em **stealth** (fica invisível atravessando arbusto). Mantenha vision profunda no river e force ele a lutar na lane onde o R não reseta a kill.
- **Lulu:** Hard counter pro seu **all-in** (commit total de kill). O polymorph dela cancela seu W no meio do dash. Não engage quando o polymorph dela está up; rastreie o cooldown e force lutas só na janela de 13 segundos em que está down.
- **Soraka:** **Enchanter de sustain** pura (support healing-focused que vence mantendo o ADC dela vivo, não abrindo lutas) sem ferramenta de engage própria. Você pode flash-Q em cima dela toda vez que o Flash dela está down — ela morre na sua combo antes do ADC reagir.
- **Senna:** Matchup de **poke** longo (chip damage à distância pra te desgastar). Ela bula seu HP debaixo da torre. Não responde, aceita a lane ruim, roama mid ou invade com Mobility Boots — a lane do Alistar perde, mas o macro game dele ganha.

## Power spikes e condições de vitória

- **Nível 2 (Q + W):** Primeiro spike. A combo W-Q completa desbloqueia no momento que você tem as duas habilidades. Um ADC inimigo que over-extende (avançou demais além da primeira **wave** — a fileira de minions que está chegando) é kill grátis se você engagar com **Flash** ainda up.
- **Nível 6 (R desbloqueia):** Potencial de engage explode. **Unbreakable Will** te transforma de **diver** one-shot (campeão que pula na backline inimiga e morre logo depois) em tank que atravessa hard CC e re-engaga. Você pode flash-Q numa Morgana, comer o root, R pra limpar, e Q de novo no ADC dela.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completo (~ minuto 14-16):** Primeiro item de teamfight online. Seu engage agora dropa um shield grátis pro time. Agrupe com o time pro **Drake** (objetivo do dragão no river bot — matar dá ao seu time buffs de status permanentes) ou pros **Voidgrubs** (monstrinhos no river top — o time que mata ganha dano bônus contra estruturas inimigas).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** O proc de Spellblade mais a amplificação de dano de 4 segundos em campeões transforma sua rotação inteira numa sequência de DPS. Agora W → AA → Q → AA não é só setup pro seu ADC — pode tirar 25-30% de HP de um **squishy** (campeão de baixa defesa, tipo ADC ou mago) sozinho.

## Erros comuns

- **W-Q na direção errada.** Headbutt empurra o alvo pra longe de você, na linha em que você está. Se Wzar de baixo, joga ele pra cima da lane (longe do seu time). Sempre W do **flank** (ângulo lateral) pro knockback empurrar o carry pra dentro do dano do seu time, não do deles.
- **Engagar sem follow-up.** Alistar sem ADC e time atrás é um tank sem dano. Se seu ADC tá na base ou o jungler tá do outro lado do mapa, segura o W. Engage solo em 4v5 é só dar o cooldown do seu R de presente pro time inimigo.
- **Queimar R proativamente pra fugir.** **Unbreakable Will** é ferramenta ofensiva, não botão de escape: dá redução de dano e cleanse de CC, mas zero movement speed. Usar pra fugir sem time atrás só atrasa sua morte em 5 segundos. Guarda o R pro engage que você vai commitar, não pro disengage que você nunca devia ter precisado.
- **Stackar Trample em minion.** O E stacka **só** em hits em campeões inimigos, não em minions. Ficar numa wave vazia esperando o proc de stun não faz nada. O proc só importa quando você consegue encadear no dano do time.
- **Não usar passiva no meio da luta.** **Triumphant Roar** carrega do CC que você aplica (Q, R, proc de E) e de **mortes de inimigos próximos** — minions, monstros da jungle ou campeões. Numa teamfight onde minions e creeps de jungle morrem em volta, dá pra stackar a cura várias vezes. Aperte o botão da passiva entre as ações: 50-100 HP de cura grátis em você e no ADC próximo viram a luta.

## Dica avançada

O **flash-W-Q one-shot**. Flasha pra frente e casta **W** num alvo prioritário no mesmo frame: o dash sai da sua nova posição flashada, não de onde o inimigo esperava sua hitbox. Depois enfileira **Q** ainda na animação do dash do W — o Pulverize sai no instante exato em que o knockback do W acaba, com zero gap entre os dois crowd controls. Feito direito, o alvo não vê nada na tela além de um knock-up de um segundo e morre antes de reagir. O drill é muscle memory (reflexo automático dos dedos): bind os spells de forma que Flash + W + Q estejam sob a mesma mão, e treina o ritmo no **Practice Tool** até conseguir disparar os três em meio segundo. É a mecânica que transforma Alistar de "tank que ajuda" em "tank que fecha lutas".
