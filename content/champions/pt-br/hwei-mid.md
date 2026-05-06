---
title: "Hwei Mid Build & Guia — Patch 16.9"
slug: "hwei-mid"
language: "pt-br"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Guia Hwei mid no Patch 16.9 do League of Legends: itens iniciais, build de mago burst, matchups da rota, power spikes, erros comuns e dica avançada final."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Causar dano em um campeão coloca uma marca. Uma segunda spell de dano diferente completa a assinatura e detona uma AOE mágica após um pequeno delay."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Abre 3 sub-spells de dano. QQ bola de fogo (% HP máx), QW raio atrasado (bônus contra isolado/imobilizado), QE caminho de poças de lava que dão slow."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Abre 3 sub-spells utility. WQ linha de Move Speed para aliados, WW pool de escudo no tempo, WE 3 cargas que dão dano extra e mana refund nos próximos casts."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Abre 3 sub-spells de CC. EQ cone de medo, EW olho fixo que dispara um root teleguiado, EE mandíbulas atrasadas que puxam e dão slow."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Projétil de longo alcance que gruda no primeiro campeão atingido, expande zona de slow e depois explode causando dano mágico pesado."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins com vários gap-closers (Zed, Akali, Talon) — a stasis ganha tempo sem dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun) que te trava antes do cast"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com cura empilhada (Soraka, Vladimir, Dr. Mundo): Grievous Wounds corta a regen"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "botas alternativas quando o time precisa de mais uptime de R que magic pen flat"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Combine o proc da passiva com QW Severing Bolt num alvo rooted ou slowed nas brigas de objetivo, depois encaixe R do alcance máximo para dar follow-up ao time."
  weakness: "Sem dash, sem escape. Toda sub-spell tem cast time: qualquer all-in que fecha distância (assassin, diver) antes de você terminar a sequência de CC normalmente te mata."
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
    primary_rationale: "Sorcery primária: qualquer EW root ou QE slow garante o proc de Arcane Comet no Q seguinte, dando poke de graça. Manaflow Band sustenta o mana enorme do Hwei, Transcendence corta CDs das nove sub-spells, Scorch fecha kills."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery compensa o mana early péssimo, Cosmic Insight reduz CDs dos summoners e deixa Flash mais frequente nas teamfights."
    secondary_alternative: "Contra artillery de poke pesado (Xerath, Vel'Koz), troque Inspiration por Resolve com Second Wind (regen vs poke) e Overgrowth (HP late) para sobreviver às trades que você não responde."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "O olho EW do Hwei trava em alvos sem mobilidade e dispara um root teleguiado, encadeando um QW garantido com dano enorme. Sem dash, eles não saem da janela de cast."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei tem outrange em todo nível e mantém eles slowed com as poças QE. Não chegam na posição de cast dele sem queimar Flash."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "O engage deles exige curta distância e tem tell lento. Hwei pré-casta EW da fog, root no engage e sai andando para resetar o trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Os dashes e blinks deles batem o cast time do Hwei. Quando ele abre E e escolhe a sub-spell certa, o assassin já tá dentro com o burst pronto."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Eles pokeam o Hwei além do alcance do Q e forçam ele a castar sob pressão. Hwei não tem escape nem como fechar distância — cada wave drena HP."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall bloqueia todo projétil de sub-spell do Hwei (Q, EW, R). Eles passam por cima dos slows com dash e fecham o trade antes dele completar a assinatura passiva."
---

## Visão geral

Hwei é um mage artillery de longo alcance com o kit mais profundo do jogo: cada Q, W e E abre um menu de três sub-spells, somando nove pressionamentos de habilidade mais a R. Ele cumpre o mesmo papel de um control mage no mid (afastar inimigos do farm, pokear HP de longe, travar com CC, snipar inimigos isolados), mas troca simplicidade bruta por adaptabilidade — em cada wave você escolhe entre dano, utility e CC dependendo da situação. Hwei é frágil e imóvel: posicionar atrás da frontline (o tank ou bruiser do time que absorve os hits) é obrigatório.

O plano de jogo é em camadas: marque um alvo com uma sub-spell de dano para iniciar a passiva **Signature of the Visionary**, depois complete a assinatura com um segundo cast de dano para adicionar uma AOE mágica bônus. A abertura mais limpa na lane é EW (o olho teleguiado que dá root) seguido de QW (Severing Bolt, que ganha dano bônus enorme contra alvos rooted ou imobilizados). Fora da lane o kit pende para controle: WQ para Move Speed aliada, WW para uma pool de escudo, EE jaws para puxar um time aglomerado para dentro da sua AOE.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Sustain de mana é crítico: as sub-spells do Hwei queimam mana rápido, e a regen do Doran's Ring é o jeito mais barato de ficar na lane até completar o primeiro ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** rumo ao Luden's Companion.

**Itens core (na ordem):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — power spike de burst, mana sustain para a rotação constante de sub-spells e ability haste que reduz CDs.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Toda explosão da assinatura passiva se beneficia da pen, e você normalmente mira em alvos squishies.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — pen mágica percentual. Compre como terceiro item assim que qualquer alvo prioritário fechar uma peça de Magic Resist — Hwei escala enorme com AP multiplicado, o dano precisa passar.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — seu slot de maior AP. O multiplicador +35% AP amplifica cada sub-spell e a explosão passiva por igual.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra com a passiva HP-threshold (passiva de item que ativa quando o inimigo está abaixo de um limite de vida, aqui 35%) que se alinha com o dano de explosão da R.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins com vários gap-closers (Zed, Akali, Talon). A stasis ganha os segundos que faltam ao Hwei por ele não ter dash.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun). O escudo bloqueia o lock que interromperia seu cast de sub-spell.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps com cura empilhada (Soraka mid, Vladimir, Dr. Mundo top). O Grievous Wounds corta a regen em que eles se apoiam.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — alternativa às ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** quando o time precisa de mais uptime de R que penetração.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por padrão. Troque pelas ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se o time precisar de mais uptime de R como ferramenta de finisher.

**Skill order:** Maximize **Q** primeiro (as sub-spells de dano, de onde vêm as kills), **E** em segundo (sub-spells de CC), **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Troque a secundária para **Resolve** (Second Wind + Overgrowth) contra matchups de poke pesado.

## Matchups principais

- **Yasuo / Yone:** Wind Wall bloqueia todo projétil de sub-spell (Q, EW, R). Segure E e W até eles gastarem as habilidades; nunca face-caste uma QQ bola de fogo com a parede ativa.
- **Zed / Akali:** Ameaças de dive (campeões que pulam em você sob a torre para te matar mesmo levando tiro de torre). Eles batem o cast time do Hwei. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item depois do ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pré-caste EW da fog antes de ir last-hittar, nunca face-up.
- **Orianna:** Matchup parelho que escala para o lado dela em teamfights. Você poke ela na lane com QQ + procs de passiva, mas ela ganha as fights aglomeradas com a R Shockwave; em posicionamento late, afaste-se do time para a R dela não pegar você e o carry juntos.
- **Twisted Fate:** Corrida de prioridade de roams. Ele tem stun da carta dourada e R global; trackeie a ulti dele com vision wards no rio e na tri-bush. Se ele tirar carta dourada em você, EW para dar root antes que ele feche a distância.
- **Veigar:** Parelho-favorável na lane. A jaula do E é a única ameaça real (entrar = stun). Fique fora do raio da jaula ao pokear; QW Severing Bolt pune ele duro se ele comer o próprio root por engano.

## Power spikes e condições de vitória

- **Nível 2:** Com um ponto em Q (Disaster) mais o E inicial, você tem uma sub-spell de dano e uma de CC. EW root em QW Severing Bolt é uma janela real de all-in (um commit total à briga, não uma trade rápida) se o jungler deles não estiver perto.
- **Nível 6:** A primeira **Spiraling Despair** desbloqueia controle de objetivos. A R gruda no primeiro campeão atingido e expande uma zona de slow, perfeita para preparar fights de Scuttle Crab para o seu jungler.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 13-15):** O wave control vira. Com o sustain de mana do Luden's você empurra qualquer wave com QQ + QE em uma rotação, liberando roams e dives no bot.
- **Spike de 3 itens (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ minuto 27-30):** O dano de combo com proc de passiva passa pelo primeiro item de MR que os inimigos compraram. Force fights de objetivo enquanto sua frontline estiver viva.

## Erros comuns

- **Spammar Q em CD sem setup.** Sempre abra com E (sub-spell de CC) ou acerte um alvo já slowed/rooted por um aliado. QQs nuas da posição neutra são esquivadas em reação por qualquer um com dash e desperdiçam mana.
- **Escolher a sub-spell errada sob pressão.** As sub-spells são commitadas no momento que você aperta a tecla do menu — não tem cancel. Treine o finisher certo em custom ou normal antes de levar Hwei pra ranqueada: QW para alvos isolados, QE para waveclear, QQ para chip damage em HP baixo.
- **Esquecer que a assinatura passiva exige duas habilidades diferentes.** Dois QQs seguidos não detonam a passiva. A assinatura só dispara quando uma segunda spell de dano de uma sub-spell diferente acerta — tipicamente QQ depois QW, ou EW root depois QW Severing Bolt.
- **Usar a R como damage finisher em vez de ferramenta de setup.** O valor principal de Spiraling Despair é a zona de slow para o follow-up, não o dano da explosão. Caste primeiro para travar o inimigo no combo do time, depois encaixe suas sub-spells por cima.
- **Ficar no alcance máximo em teamfights sem peel.** Hwei não tem dash. O range máximo de projétil te coloca fora da proteção do time, e um único assassin de flank te deleta. Fique na segunda posição mais distante para que um peeler (a habilidade do seu support que te protege de divers) consiga intervir.

## Dica avançada

Use WE Stirring Lights para converter dead time em burst (dano alto concentrado em 1-2 segundos). Pré-caste antes de entrar na teamfight: ela coloca três cargas potencializadas nas suas próximas três habilidades ou auto-attacks, cada uma adiciona dano mágico bônus e te devolve mana. A sequência ótima é WE → EW olho → QW Severing Bolt → auto-attack no alvo rootado: cada cast da cadeia consome uma carga, e o refund de mana te permite seguir imediatamente com R num segundo alvo sem ficar OOM (out-of-mana, sem mana no meio da briga).
