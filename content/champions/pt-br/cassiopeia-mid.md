---
title: "Cassiopeia Mid Build & Guia — Patch 16.9"
slug: "cassiopeia-mid"
language: "pt-br"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Guia da Cassiopeia mid no Patch 16.9: itens iniciais, build de mago battlemage, matchups da rota, power spikes, erros comuns e uma dica avançada de fechamento."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Passiva que amplifica todo bônus de Move Speed que Cassiopeia recebe de itens, runas e da própria Q. As botas escalam mais nela do que na maioria das mages."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "AOE no chão alvo que detona após um pequeno delay e aplica Poison. Acertar um campeão concede um burst de Move Speed para perseguir ou kitar."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Parede de nuvens venenosas que reduz movimento e aplica grounded nos inimigos dentro. Alvos grounded perdem dashes, blinks e habilidades de movimento — ferramenta anti-mobilidade."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Habilidade de cooldown baixíssimo (0.75s) que causa dano bônus em alvos com Poison e cura Cassiopeia. Reembolsa mana em takedown. Botão principal de DPS — nunca para de cástar."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Cone amplo na frente de Cassiopeia. Inimigos virados para ela são atordoados ~1.5s; quem está de costas só recebe slow. Mire de frente para o stun completo."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
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
      against: "contra burst assassins (Zed, Talon, Akali): a stasis de 2.5s compra tempo para a E voltar e para o peel da equipe"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que tranca sua E (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds limita lifesteal e regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque pelo slot do Shadowflame quando qualquer alvo prioritário comprar um item de Magic Resist"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra comps melee que tentam te andar em cima: cada E refresca o slow, fazendo peel para a backline além do ground da W"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Acumule dano de Liandry's Torment em alvos envenenados com spam de E (cd 0.75s) enquanto a W tranca dashes. Acerte a R de frente no nível 6 para virar prio em kills, e escale como battlemage de front line."
  weakness: "Range 700 sem dash, sem blink, sem escape. Artillery mages de longo alcance pokam fora do range; ganks pré-6 com hard CC fecham a lane antes do scaling. Sem mana se a E erra demais."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery vence Domination/Precision aqui: Stormraider's dá o burst de Move Speed (3 procs rápidos) que falta no kit. Manaflow alimenta o spam de E de 40 mana, Transcendence aumenta Ability Haste (cooldowns mais rápidos), Gathering Storm escala melhor que Electrocute no late."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery cobre mana e HP na laning phase pesada antes de Liandry's Torment, Cosmic Insight faz Flash e item actives voltarem mais rápido nas teamfights."
    secondary_alternative: "Contra poke ou burst pesado (Xerath, Syndra, Zed), troque Inspiration por Resolve com Second Wind (regen contra harass ranged) e Bone Plating (absorve os 3 primeiros hits de uma combo all-in)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Mid laners baseados em dash"
      reason: "Miasma os tranca dentro da nuvem: no momento em que pisam, dash, blink e habilidades de movimento ficam desativados. O kit deles colapsa contra uma campeã que apaga a ferramenta principal de fuga."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mages imóveis sem escape"
      reason: "Cassiopeia vence trades prolongados contra quem precisa ficar parado para cástar: a E (cd 0.75s) faz mais dano em alvos envenenados que a rotação inteira deles, e não conseguem desviar da W em cima."
    - examples: ["renekton", "sett"]
      archetype: "Bruisers melee que precisam grudar em você"
      reason: "Sem um dash longo, eles têm que andar 700 unidades atravessando W e Q poison para te tocar. Twin Fang te traz de volta full HP a cada trade."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Artillery mages de longo alcance"
      reason: "Pokam além do range 850 da Q. Sem dash ela não fecha distância, então cada wave drena HP. A curva de poder dela exige farm que ela não consegue pegar com segurança."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globais / cross-map"
      reason: "Cassiopeia fica presa no mid (sem roam rápido). Os adversários usam o ult para virar side lanes e dragões; ela vence o 1v1 mas perde o macro (trocas de objetivo acontecendo no mapa)."
    - examples: ["lissandra", "syndra"]
      archetype: "Mages de burst com chain-lock CC"
      reason: "Travam Cassiopeia no lugar antes da W aplicar ground, e descarregam a combo inteira. A R da Lissandra é point-and-click — Banshee's Veil ajuda mas não salva de uma cadeia de stun de 6 segundos com follow-up do jungler."
---

## Visão geral

Cassiopeia é uma battlemage (mage que luta a média distância, não do fundo da tela) com cerca de 700 unidades de range — logo fora do alcance dos basic auto-attacks. Ela vence os trades prolongados (trocas de dano na lane) contra quase qualquer um que precise de um dash para alcançá-la. A **Twin Fang (E)** dela tem cooldown de 0.75 segundo — o mais baixo de qualquer mid laner — então uma vez que a **Noxious Blast (Q)** envenena o alvo, ela vira uma fonte contínua de dano que ainda a cura. **Miasma (W)** é a assinatura: inimigos dentro da nuvem ficam *grounded*, ou seja, dashes, blinks e habilidades de movimento param de funcionar até saírem. Pegue ela contra assassinos móveis (kits construídos em torno de dashar para dentro e para fora, como Yasuo, Akali, Zed) e você tira a ferramenta principal deles.

O game plan é curto de descrever e lento de executar: envenene a wave (a fileira de minions) com **Q**, repita **E** para limpar e fazer harass, jogue **W** no instante em que um adversário dash-based fizer engage (se comprometer no fight), e mire **R** de frente no nível 6 — o cone atordoa quem está virado para você e só aplica slow no resto. Ela não tem dash, blink ou equivalente de movimento, então o posicionamento é o preço de cada jogada. Se andar um passo à frente demais, o kit colapsa numa única chain de CC (uma sequência de stuns e roots em sequência). **CC** = "crowd control", qualquer efeito que te interrompe: stun, root, slow, silêncio.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Cassiopeia é faminta de mana (cada E custa mana e ela cásta muito) e o regen de Doran's é exatamente o que o spam de E precisa.

**Itens core (na ordem):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. A passiva de burn (dano espalhado nos segundos depois de cada hit, em vez de tudo de uma vez) acumula em todo alvo envenenado que sua E tocar, o que na Cassiopeia significa quase todo cast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (o item ignora parte da Magic Resist inimiga, então suas spells batem mais forte). A passiva Serpentine Grace amplifica também o Move Speed das botas.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — o maior multiplicador de AP (Ability Power, a stat que escala dano mágico) do jogo. Aumenta o dano por cast da E que você dispara mais de 30 vezes num teamfight longo.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration que escala mais quando o inimigo está abaixo de 35% HP (passiva de threshold de HP: efeito de item que liga quando o alvo cai abaixo de uma % de vida). Casa com a finalização das back line carries (os damage dealers squishies, como ADCs e mages, que sua equipe precisa derrubar primeiro).

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra burst assassins (Zed, Talon, Akali — campeões que causam muito dano em 1-2 segundos). A stasis active de 2.5 segundos (você vira invulnerável mas não pode se mover nem cástar) compra tempo para a **E** voltar do cooldown e para os aliados darem peel (afastar inimigos de você).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que te tranca fora da E (charm da Ahri, R da Lissandra, gold card stun da Twisted Fate).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka mid, Vladimir, Dr. Mundo top): aplica Grievous Wounds (debuff que corta a cura inimiga em cerca de metade), limitando o lifesteal (HP recuperado pelo dano causado) e o regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — troque pelo slot do Shadowflame no momento em que um alvo prioritário (o inimigo que sua equipe mais precisa morto — geralmente a carry principal deles) comprar um item de Magic Resist.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra comps melee pesadas que tentam te andar em cima. Cada hit de E refresca um slow no alvo, fazendo peel (proteção) para a backline além do efeito de ground da W.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (botas que dão Ability Haste, encurtando os cooldowns das spells) é aceitável se você quer mais uptime de **W** para manter os dashes inimigos travados.

**Skill order:** Maxe **E** primeiro (botão principal de DPS), **Q** em segundo (poison e Move Speed), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Sorcery** com keystone **Stormraider's Surge** (keystone é a runa principal, no topo da árvore; "fazer proc" significa ativar o efeito da runa — Stormraider's procca após 3 hits rápidos de spell), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**, ou **Resolve** com **Second Wind** e **Bone Plating** contra muito poke (chip damage de longo alcance que vai gastando o seu HP).

## Matchups principais

- **Yasuo / Yone:** Kit cheio de dashes. A terceira Q deles é um dash com knock-up — na primeira vez que pulam em cima, jogue **W** debaixo dos seus pés. Eles ficam presos em melee sem movement, e o spam de **E** vence. Guarde a **R** para o ult deles, assim recebem o stun de frente.
- **Zed:** Threat champion. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item completo se ele pegar lead. Jogue **W** em você no segundo em que ele usar a ult (ele te marca e teleporta para uma shadow clone); se aterrissar atrás de você, o teleport da troca de sombra fica *grounded* pela W e ele não foge.
- **Xerath:** Matchup difícil. Ele poka além do range da sua **Q** (vai gastando seu HP de fora da distância em que você consegue revidar). Abra mão de algum CS (creep score: ouro de matar minions) embaixo da torre e procure um roam (sair da lane para ajudar um aliado) para o bot no nível 6 — lutar contra ele na lane só drena HP de graça.
- **Akali:** Antes do nível 6 você vence trades prolongados com spam de **E** em alvos envenenados. Depois do 6 o smoke shroud (W) dela esconde, quebrando o target da E. Coloque ward nos lados e não empurre demais sem **R** pronta.
- **Twisted Fate:** Dá para vencer a lane, mas não o mapa. Ele te atordoa com a gold card, ulta no bot e transforma o jogo num cross-map fight (uma kill acontecendo longe de onde você está) que você não influencia. Empurre a wave a cooldown e pingue o bot toda vez que a **R** dele voltar.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q** e um rank de **E**, você tem o primeiro loop envenenar-e-toque. Ande pra frente quando a wave deles (fileira de minions) for maior que a sua e force um trade.
- **Nível 6:** **Petrifying Gaze (R)** desbloqueia. Uma **R** de frente em curta distância atordoa ~1.5 segundos, o suficiente para encadear a combo completa **Q-W-E-E-E**. Force um fight no rebote da wave (o momento em que a fileira para de avançar e volta na sua direção).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment finalizado (~ minuto 11-13):** O spam de E agora aplica um burn (dano ao longo do tempo) por cima do dano do hit. Você empurra waves no dobro da velocidade e pressiona as janelas de roam do mid adversário.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap pronto (~ minuto 24-28):** O dano por cast da E escala muito (ganha muito poder com este item). Procure ancorar teamfights de mid em torno de objetivos (Drake, Baron, torres) — no late game a Cassiopeia fica mais perto da briga que outras mages, quase como uma segunda frontline.

## Erros comuns

- **Cástar E sem poison no alvo.** **Twin Fang** causa dano mágico normal num alvo limpo e dano bônus só nos envenenados. Sempre **Q** (ou W) primeiro, depois spam de E — nunca o contrário.
- **Segurar W para o engage perfeito.** **Miasma** também é defesa. No instante em que Yasuo cásta W (a parede de vento que bloqueia projéteis) ou Akali ulta, jogue **W** em você. O ground cancela as habilidades de movimento mesmo sem follow-up da equipe.
- **Mirar R no escuro.** **Petrifying Gaze** só atordoa inimigos virados para você. Pelo lado ou pelas costas, só aplica slow e desperdiça o cooldown. Ande até a frente do fight, depois vire e tire a R.
- **Empurrar além do rio sem visão.** Cassiopeia não tem escape. Sem um ward (item visual colocado no mapa) no rio, uma emboscada do jungler inimigo (chamada de *gank*) com hard CC (stuns longos ou roots, em oposição a soft CC como slow) fecha sua lane.
- **Ignorar mana nos primeiros 5 minutos.** Cada E custa 40 mana flat independente do rank. Cástar repetidamente em minions antes de Manaflow Band drena sua barra em duas waves e te deixa indefesa contra um all-in (compromisso total para te matar).

## Dica avançada

Pratique jogar **W (Miasma)** *debaixo dos seus próprios pés* no instante em que um dash te toca, não na frente. O ground se aplica no momento em que a nuvem cai — se Yasuo, Yone ou Akali fizer engage de melee, eles estão exatamente onde a nuvem nasce e perdem na hora o segundo dash. A maioria dos jogadores de Cassiopeia ainda joga W na frente como uma spell de poke, perdendo o uso defensivo que fecha no ato a maior parte das tentativas de all-in dos assassinos.
