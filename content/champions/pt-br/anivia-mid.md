---
title: "Anivia Mid Build & Guia — Patch 16.9"
slug: "anivia-mid"
language: "pt-br"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Guia completo da Anivia mid no Patch 16.9: starter kit, build de control mage, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "Ao receber dano letal, Anivia vira um ovo imóvel por alguns segundos. Se o ovo sobreviver, ela renasce com HP cheio. Cooldown longo — não baite duas vezes na mesma luta."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Skillshot linear de longo alcance: uma esfera de gelo aplica slow no caminho; no fim ela detona e stuna. Recaste para detonar antes."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Invoca um muro de gelo intransponível por alguns segundos. Bloqueia qualquer movimento (inclusive o seu) e dashes que tentem atravessar."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Explosão direcionada de curto alcance. Causa dano dobrado se o alvo está Chilled por Q ou por uma R fully formed."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Toggle no chão: tempestade de gelo que aplica slow e tica dano mágico. Quando totalmente formada aplica Chill, então E causa dano dobrado dentro da área."
      dd_spell_id: "GlacialStorm"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Akali, Diana) — a stasis cobre o gap até a R voltar"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (Ahri charm, Lissandra R, Twisted Fate stun) que interrompe a R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com muito sustain (Soraka, Vladimir, Aatrox) — R aplica grievous wounds em área"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que qualquer priority target fechar o primeiro item de Magic Resist"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Acerte Q em max range para aplicar Chill, encaixe E para o dano dobrado, e jogue R debaixo dos pés deles para que quem estiver lento coma outra E empowered. Wall o resto do time fora para a kill não ser interrompida."
  weakness: "Lenta, sem dash, base armor baixa, mana hungry early. Erra a Q e o trade morre; divers te alcançam antes da R fully formed. Wind Wall e silences destroem o kit inteiro."
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Q + W da Anivia prendem mages imóveis: eles não conseguem desviar do chill e da E dobrada, e não têm como passar pelo wall quando ela corta a wave."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize bloqueia toda linha de engage melee; com E para shovar e R para clear de wave, ela farma seguro enquanto eles não chegam sem queimar Flash."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize divide o time inimigo em dois no engage; se o muro fica entre o iniciador e o follow-up, o wombo cai em um ou dois alvos, não em cinco."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Eles entram no alcance de E durante as cast windows; ela não tem dash e só um ovo, então uma sequência de dashes a bursta antes da R formar."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall bloqueia a Q por completo (o chill não chega) e a maior ameaça de dano dela cai por terra; sem chill, a E perde metade do dano e a lane vira um melee fight que ela não vence."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Out-rangeam a Q da Anivia em toda fase de lane e pokeam de fora do threat radius dela; ela não tem mobilidade para fechar gap nem para punir os cooldowns deles."
---

## Visão geral

Anivia é uma control mage de longo alcance com duas barras de vida, uma ulti AOE lenta mas devastadora, e o único muro intransponível do jogo. O kit dela pune erros de posicionamento: **Flash Frost (Q)** aplica **Chill** (um status de slow nomeado em torno do qual gira o resto do kit), **Frostbite (E)** dobra o dano em alvos Chilled, e **Glacial Storm (R)** mantém todo mundo lento dentro da zona. Ela troca mobilidade por utility — sem dash, mas **Rebirth (P)** dá uma segunda vida toda vez que o ovo sobrevive.

O game plan na mid é simples de descrever e brutal de executar: shove (empurre a leva de minions na torre inimiga) a wave com **R** + **E**, golpeie o river ou a jungle com um combo **Q-E** pela fog quando um inimigo entra, e use **Crystallize (W)** para dividir engages (engage = o momento em que começa um teamfight) ou salvar aliados de dives (champions que pulam em cima de você para te bursar — burst = dano alto concentrado em 1-2 segundos). Em qualquer rank ela também ganha partidas segurando lanes que ninguém mais segura — uma **R** fully formed (no tamanho máximo) é um muro de dano mágico constante.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Anivia é mana hungry early e precisa do AP e do mana regen para jogar duas **Q** por wave sem secar.

**Itens core (na ordem):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (turbinada do seu dano concentrado) e mana sustain. Permite encaixar **Q-E** sem olhar para a barra.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (corta uma quantidade fixa da MR inimiga) para amplificar o dano dobrado da **E** em squishies (champions com pouca defesa, geralmente ADCs e mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica o seu AP, levando o scaling (o quanto um champion fica mais forte por item e por nível) já forte para a zona de one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra mais uma HP-threshold passive (passiva que ativa quando o alvo cai abaixo de ~35% HP) que casa com os finalizadores em **E**.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers e assassins (Zed, Akali, Diana). A stasis (um breve freeze invulnerável) ganha tempo enquanto **Glacial Storm** volta.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico pesado single-target (Ahri charm, Lissandra R, Twisted Fate stun) que interromperia o toggle da **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra composições que empilham cura (Soraka, Vladimir, Aatrox). Os ticks constantes da **R** aplicam grievous wounds (debuff que reduz a cura recebida) em área ampla.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — compre na hora em que qualquer priority target (o alvo prioritário, normalmente o carry inimigo) fechar o primeiro item de Magic Resist (MR — a stat defensiva que reduz dano mágico recebido). O dano da Anivia despenca contra MR se você atrasar.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** só são aceitáveis se o time estiver implorando por mais uptime de **R** (o quão frequentemente ela está pronta de novo) em skirmishes (brigas pequenas 2v2 ou 3v3 fora do teamfight principal).

**Skill order:** Maxe **E** primeiro — é o seu botão de dano de verdade, dobrado em alvos Chilled. Maxe **Q** em segundo (slow + stun mais longos), **W** por último. Coloque ponto em **R** nos níveis 6, 11, 16. Pegue **W** no nível 3 mesmo maxando ela por último: um único rank do muro já salva a sua vida ou divide um engage.

**Runas:** Primária **Sorcery** com **Arcane Comet** (um projétil grátis de dano que cai quando você acerta um inimigo com uma ability), **Manaflow Band** (mana grátis toda vez que acerta um skillshot), **Transcendence** (cooldown reduction), **Scorch** (queimadura extra na primeira ability que acerta). Secundária **Inspiration** com **Biscuit Delivery** (potions grátis na lane) e **Cosmic Insight** (cooldown reduction extra em summoner spells como **Flash**). Comet é a runa que mais rende dano para a Anivia: cada **E** Chilled triggera ela no impacto.

## Matchups principais

- **Yasuo:** Ele consegue Wind Wall (uma ability que bloqueia projéteis por alguns segundos) sua **Q** e até o projétil da **E**. Segure as duas até ele queimar Wind Wall em minions. Coloque a **W** vertical entre ele e os minions dele quando ele tentar all-in (uma briga total até a kill) — ele perde a janela de Wind Wall tanto pelo muro quanto pelo chill.
- **Zed / Akali:** Ameaças de dive. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** depois de ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** se eles estiverem na frente. Coloque a **R** debaixo dos seus pés quando entrarem — eles têm que lutar dentro da sua tempestade se quiserem a kill.
- **Veigar:** Matchup parelho, decidido por quem roama (sai da lane para ajudar em outra) primeiro. Você limpa a wave melhor pre-6 graças à **R**; pune ele shovando e ajudando a bot lane enquanto ele ainda farma sob torre.
- **Xerath / Vel'Koz:** Eles out-pokeam o seu alcance. Fique atrás dos minions, last-hite (last-hit = o golpe que finaliza o minion e te dá ouro) com **E**, nunca empurre além da metade da wave a menos que seu jungler esteja mid-side (posicionado na jungle perto da mid lane).
- **Annie:** Uma mage de all-in telegrafado — o stun dela tem um tell (animação visível antes do cast que avisa para desviar) lento e óbvio. Pre-6, **W** na trajetória de pouso do Tibbers para dividir o combo stun-e-summon. Sua passiva ovo te salva de uma tentativa de full burst; ela vai usar a ulti de qualquer jeito e te dar um counter-engage de graça.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q** + **E** já dá para chill-and-double-tap um inimigo de lane que se aproxima demais para um minion. Ameace isso toda wave; é o trade (uma troca rápida de golpes e abilities, não uma tentativa completa de kill) em torno do qual a Anivia foi construída.
- **Nível 6:** Primeira **Glacial Storm**. Você sai de uma das mages mais fracas no nível 5 para um dos kits mais fortes em waveclear (capacidade de limpar wave de minions rapidinho) e zoning (forçar o inimigo a sair de uma área ameaçando dano) no nível 6. Shove a wave na hora e procure um roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** Um combo **Q-E** completo mais o proc do Luden's (a passiva do item que dispara automaticamente quando você casta uma habilidade) one-shota a maior parte dos ADCs e outras mages sem item de MR. Force brigas de objetivo nessa janela.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** O late game da Anivia decola. Com **R** ticando (pequenos golpes de dano repetidos a cada fração de segundo) e uma **E** Chilled, até tanks perdem pedaços de HP por segundo. Agrupe com o time e deixe a frontline (o papel dos tanks/bruisers que ficam na frente absorvendo dano) fazer o serviço por você.

## Erros comuns

- **Jogar Q sem follow-up de E.** **Q** sozinha é um poke (chip damage à distância para roubar HP do inimigo sem se comprometer) decente; **Q** depois **E** com o bônus chill-dobrado é uma ameaça real de kill. Não use **Q** só para harass (poke feito só para incomodar e tirar HP) quando **E** estiver off cooldown.
- **Se isolar com a própria W.** **W** é intransponível para *os dois* lados. Coloque ela paralela à wave para peelar (peel = usar uma ability para proteger um aliado de quem está saltando nele) um gank (emboscada do jungler vinda da fog), nunca perpendicular cortando sua rota de fuga.
- **Desligar a R cedo demais.** **R** não consome mana uma vez ativa — mantenha ligada durante as brigas, não saia desligando em pânico assim que a barra cai. O slow sozinho já vale o mana.
- **Roleta do ovo.** Sua passiva Rebirth tem um cooldown longo. Não "confie no ovo" fazendo tower-dive (entrar embaixo da torre deles para matar) com pouca vida a não ser que você tenha feito as contas: bastam alguns golpes para matar o ovo, e um desses golpes pode ser a própria torre.
- **Ignorar a W como ferramenta de peel.** A maioria dos Anivia só pensa em **W** como tool de chase. Contra pick comps (composições que ganham caçando um jogador fora de posição), uma **W** entre sua back line (os carries que dão dano por trás) e uma ulti de Malphite é uma das jogadas defensivas mais fortes da mid.

## Dica avançada

Use a detonação recast da **Q** como *ferramenta de visão*. A esfera de gelo tem um raio visual amplo em voo e na detonação: lance pela fog of war (a parte escura do mapa fora da visão do seu time) sobre uma trajetória provável do inimigo — por exemplo, no mid-river antes de uma drake fight (a luta de equipe pelo dragão, monstro objetivo no river do bot que dá buff para o time que mata) — e recaste no primeiro contato. Você dá ao seu time meio segundo de visão e um stun em um único botão. Os melhores Anivia substituem um ward (uma sentinela posicionada que revela uma área pequena do mapa por um tempo) por luta com uma **Q** detonada na fog: mais barato, mais rápido, e stuna o engage.
