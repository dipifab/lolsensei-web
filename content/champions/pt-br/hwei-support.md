---
title: "Hwei Support Build & Guia — Patch 16.9"
slug: "hwei-support"
language: "pt-br"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Guia de Hwei support para League of Legends Patch 16.9: kit de pick-mage, build principal, matchups chave na bot lane, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Habilidades que causam dano marcam campeões inimigos. Um segundo feitiço de dano completa a assinatura, deixando uma marca que detona após um curto delay em dano mágico em área."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Três sub-feitiços de dano. QQ bola de fogo rápida, QW raio retardado de longuíssimo alcance (dano extra em alvo isolado ou sob CC), QE trilha de lava com zona de slow."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Três sub-feitiços de utility. WQ linha de Move Speed para aliados, WW pool que dá shield ao longo do tempo, WE três orbes que potencializam os próximos 3 feitiços/autos com dano bônus e mana."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Três sub-feitiços de CC. EQ skillshot de fuga, EW olho no chão que dispara um root teleguiado quando um inimigo entra, EE mandíbula que arrasta os inimigos para o centro."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Skillshot de longuíssimo alcance. Gruda no primeiro campeão atingido e se expande, lentificando inimigos próximos em stacks; explode após alguns segundos em dano mágico em área."
      dd_spell_id: "HweiR"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC no seu ADC (Leona stun, Morgana root, Nautilus hook): limpa o lockdown que segue"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra engage AOE pesado (Kennen, Wukong, Malphite, Yasuo): shield de equipe para o fight forçado"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "contra comps poke-and-disengage onde você mantém a equipe curada em fights longos"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de cerco e 5v5 sobre objetivos (drake pit, Baron pit) onde você pré-casta a heal"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos que mergulham na backline (Zed, Akali, Talon): a stasis te mantém vivo"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Acerte o root com EW ou o drag com EE, siga com QW ou QQ para detonar a assinatura da passiva, depois ulte Spiraling Despair no alvo bloqueado. Snowball da bot lane via picks repetidos antes do fim da fase de rotas."
  weakness: "Cada feitiço é um skillshot, então uma E perdida deixa você sem follow-up e sem escape. Hwei não tem dash e tem mobilidade baixíssima: um único engage do support inimigo o pega fora de posição."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
    primary_rationale: "Sorcery primary: Aery serve como poke no Q e shield bônus no WW. Manaflow Band sustenta o custo de mana das combos triplas, Transcendence stacka ability haste pra EW estar pronta toda wave, Scorch fecha kills em HP baixo."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery cobre seu sustain fraco na lane, Cosmic Insight reduz o cooldown de Flash e dos active items (Mikael, Locket): mais janelas de peel nos teamfights."
    secondary_alternative: "Contra comps full-engage que mergulham na backline (Leona, Rakan, Nautilus), troque Inspiration por Resolve com Bone Plating (-30/-60 dano no burst inicial) e Revitalize (+10% nos shields e heals): menos CD reduction, mais sobrevivência pura."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter supports sem hard CC"
      reason: "Não conseguem punir seu setup longo de EW (vision + root). Você out-ranga o poke deles e a QW retardada os pega quando avançam para shieldar o ADC."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "ADCs imóveis sem dash"
      reason: "EW root e EE drag conectam limpos porque eles não têm gap-closer pra interromper o channel. Uma vez primados, a assinatura da passiva mais a R fecham a kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports skillshot sem escape"
      reason: "Você iguala o range de poke deles com QQ e QW, mas tem hard CC que falta neles. Numa lane longa você ganha porque converte uma E acertada em kill, enquanto eles só erodem HP."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Supports de hook e lockdown"
      reason: "O engage point-and-click ou hook deles acerta antes de você fechar o channel da EW. Uma vez bloqueado, Hwei não tem dash pra escapar, e uma E perdida o deixa sem resposta."
    - examples: ["pyke", "rell"]
      archetype: "Engage com roam e gap-close"
      reason: "Eles fecham a distância que Hwei precisa pros skillshots. A stealth do Pyke deixa EW inútil porque você não o vê pra colocar o olho; o W jump da Rell pula a zona de slow do QE."
    - examples: ["alistar", "rakan"]
      archetype: "Tanks de dash e knockup"
      reason: "O dash deles mais o knockup AOE interrompe sua sequência de feitiços no meio do cast. Hwei precisa de três botões pra travar um alvo — um único W-Q do Alistar apaga essa janela."
---

## Visão geral

Hwei support é um pick mage de longuíssimo alcance que transforma bot lanes imóveis em kills fáceis. O kit é construído sobre três árvores de sub-feitiços: dano em **Q (Subject: Disaster)**, utility em **W (Subject: Serenity)** e crowd control em **E (Subject: Torment)**. As ferramentas que se destacam no support são **EW (Gaze of the Abyss)** — um root retardado teleguiado que bloqueia o primeiro inimigo que pisa em um olho de visão — e **EE (Crushing Maw)** — uma mandíbula que arrasta inimigos pro centro e os lentifica na saída. Qualquer uma das duas prepara a **passiva (Signature of the Visionary)**, que detona em dano mágico de área no segundo feitiço acertado. O alcance de Hwei é nível mage (em torno de 900-1100 unidades na maioria dos casts), então a bot lane se joga em distância de poke, não de melee.

O game plan é "acerte uma E, ganhe o trade." Coloque **EW** na frente do trajeto previsto do ADC inimigo antes de uma luta de wave, prepare a passiva com **QQ** ou **QW**, e depois encadeie a **R (Spiraling Despair)** no alvo bloqueado pra que o slow se acumule enquanto seu ADC entra pra fechar. O requisito duro é o posicionamento: cada feitiço é um skillshot a distância sem dash, então um único engage inimigo que te pega fora de range é uma sentença de morte. Fique atrás do seu ADC, não ao lado dele.

## Build recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (o novo support quest item que evolui para Bloodsong / Solstice Sleigh / Dream-Maker no mid game) mais 2 Health Potions. Stealth Ward no slot de trinket.

**Core items (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support item, gold income enquanto você fica perto do ADC. Auto-upgrade pra finished support item lá pelo minuto 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — o motor do pick play: cada slow ou root do seu kit prepara uma marca Mandate que seu ADC detona em dano mágico bônus. Hwei tem slow em QE, EE e R, então o proc é praticamente garantido em todo fight.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration: QQ e a assinatura da passiva atravessam a backline squishy inimiga.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — toda passiva preparada e detonada triggera um stack de Helia: cura seu ADC e queima o alvo. Combinada com Mandate, double-dipping em todo inimigo bloqueado.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra mais um spike de magic-penetration abaixo de 35% HP (o momento em que um feitiço finaliza um inimigo em HP baixo). Alinha com as explosões da R em alvos chunkados.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC no seu ADC (Leona, Morgana, Nautilus). Limpa o lockdown que o inimigo usa pra one-shotar seu carry.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra engage AOE pesado (Kennen, Wukong, Malphite, Yasuo). O shield de equipe cobre o fight forçado que seu range de backline não consegue evitar.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — substitui Imperial Mandate como finished support item se a equipe inimiga for poke-and-disengage e você passar menos tempo acertando E e mais tempo mantendo seu time em HP em fights longos.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos que mergulham na backline (Zed, Akali, Talon). A stasis compra tempo pro ADC reposicionar enquanto você sobrevive ao engage.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se a equipe depende de você pra encadear CC em fights longos — o ability haste mantém EW pronta a cada rotação.

**Skill order:** Maxe **E** primeiro (a fonte primária de lockdown: EW root, EE drag, EQ fuga), **W** segundo (shield, MS e empower de três orbes), **Q** por último (escala com AP mas a cooldown reduction importa menos quando o slot do build é de support items, não de AP puro). Ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primary **Sorcery** com **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Troque Inspiration por **Resolve** com **Bone Plating** e **Revitalize** quando o bot inimigo tem hard engage (Leona, Rakan, Nautilus) — sobrevivência importa mais que cooldown de active items quando a primeira ability deles decide o trade.

## Matchups principais

- **Leona / Nautilus:** Ameaças de engage. Fique fora do range de hook/Q deles; nunca use **Flash** ofensivamente na lane. Guarde **EW** como root de peel se eles caminharem no seu ADC, não como setup de poke. Se eles flasharem pra frente, seu **EE** drag pode puxá-los pra longe do carry.
- **Lulu:** Matchup parelho. Ela shielda e desengage sua **EW**, mas você out-ranga o poke dela. Espere ela dar **W** no ADC dela entrando no range, e roote ela em vez disso — Lulu shieldada num root é kill-confirm pro seu ADC.
- **Soraka:** Favorável pro Hwei. A MS base baixa e a falta de mobilidade fazem **EW** acertar quase todo cast. Push a wave primeiro, depois jogue a combo **EW + R** nela a cada cooldown — ela não tem resposta.
- **Pyke:** Matchup duro. A stealth dele remove a vision que sua **EW** precisa pra travá-lo: se você não vê ele na tela, o olho não faz nada. Compre Pink Ward (Stealth Ward, depois Oracle Lens) e mantenha os bushes iluminados. Segure **EE** como pull de peel quando o hook dele acertar, não como ferramenta de poke.
- **Xerath / Vel'Koz:** Espelho de mage support de longo alcance. O poke deles bate seu range, mas você tem hard CC que falta neles: uma **EW** acertada ganha a lane porque eles não conseguem dodge a **QW** retardada estando rooted. Trade agressivo antes do 6, antes que a **R** deles escale.

## Power spikes e condições de vitória

- **Nível 2:** Com um ponto em **E** e um em **W** você tem lockdown mais uma pool de shield. Uma **EW** confirmada mais o spike do seu ADC é o suficiente pra matar o support inimigo se ele overextender.
- **Nível 6:** A primeira **Spiraling Despair** desbloqueia todo kill setup. A R gruda no primeiro campeão atingido e lentifica a área em volta — combine com **EE** drag e crie uma zona "não-andável" por 3-4 segundos.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate completion (~ minuto 12-14):** ponto de snowball da bot lane. Cada passiva preparada mais detonação Mandate apaga a barra de HP do ADC inimigo numa rotação. Agrupe com o mid pra um drake fight aqui.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ minuto 18-22):** você começa a fazer 2-por-0 nos skirmishes porque a heal de Helia no ADC supera o dano inimigo e a queima estende seu range. É a janela pra forçar picks ao redor do river antes da equipe inimiga se agrupar pro Baron.

## Erros comuns

- **Jogar Q sem setup.** **QW** poke nu em longa distância parece tentador, mas o raio só causa dano reduzido em alvo móvel. Acerte primeiro **EW** root, depois encadeie **QW** pro dano bônus em alvo isolado/rooted — os números triplicam.
- **Usar EW como feitiço de poke.** EW é seu kill setup. Guardá-la pra um momento definido por fight ganha mais games que spammar pra chip damage. O cooldown é longo demais pra você se permitir errar.
- **Ficar do lado do ADC.** Hwei não tem dash. Se o support inimigo engaga no ADC e você está no melee também, vocês dois morrem. Posicione-se 200-300 unidades atrás: assim um engage que trava um deixa o outro com espaço pra peelar ou fugir.
- **Esquecer a árvore W.** Muitos Hweis jogam puro pick-mage e ignoram os shields **WW** e os orbes **WE**. No meio do fight, um empower **WE** nos autos do seu ADC vale mais que um terceiro feitiço de dano do seu próprio kit. Use as duas metades.
- **Andar em side lanes sem vision.** O kit precisa de vision pra acertar EW e pra ultar cross-map. Coloque wards no tri-bush e river antes de cada roam — sem vision o vantagem de range some no momento que você sai da lane.

## Dica avançada

A **pseudo-combo EW + EE** é o setup de maior valor do kit do Hwei e mal aparece nos guias básicos. Coloque **EW** (o olho) no caminho que o inimigo precisa percorrer pra last-hitar; ele fica no chão por vários segundos antes de travar. Depois case **EE** (a mandíbula que arrasta) pra puxá-los pelo raio de lock-on do olho — o olho dispara automaticamente o root teleguiado no momento em que entram, mesmo que tenham tentado dodge **EE**. O drag fica impossível de evitar, o root é garantido, e sua **R** mais a passiva fecham a kill em HP cheio num squishy. A janela é apertada (cerca de 1 segundo entre os casts), mas acertada duas vezes num fight termina o jogo.
