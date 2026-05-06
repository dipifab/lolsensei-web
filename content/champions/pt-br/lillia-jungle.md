---
title: "Lillia Jungle Build & Guia — Patch 16.9"
slug: "lillia-jungle"
language: "pt-br"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Guia da Lillia jungle para League of Legends Patch 16.9: starter kit, build de AP burst, matchups chave, power spikes, erros comuns e uma dica avançada final."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Cada habilidade aplica um stack de dano mágico contínuo em % HP em campeões e monstros. Stacks de Dream Dust habilitam a R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "Giro AOE em volta da Lillia: dano perto, true damage extra na borda. Stacka Move Speed. Ferramenta principal de clear e DPS em skirmish."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE com carga e zona de dano: o centro bate muito mais forte. Burst single-target. Tell longo, combine com E para slow."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Skillshot lançado a longa distância: dano, slow e reveal. Se errar, a semente rola até bater. Ferramenta de setup, vision ou fuga."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Globalmente aplica Drowsy progressivo em todo inimigo já marcado com Dream Dust e os adormece. O primeiro hit os acorda com bonus damage."
      dd_spell_id: "LilliaR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassinos e dive comp (Zed, Diana, Kha'Zix) — a stasis cobre o gap enquanto DOT e R fazem o trabalho"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs backline squishy sem Magic Resist — passiva por threshold de HP sincroniza com o wake-up burst da R"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps que kitam — Move Speed e Ability Haste alimentam o skirmish em ciclo de habilidades"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que um alvo prioritário comprar Magic Resist (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Stacka Dream Dust nos alvos prioritários com passadas de Q, lança R para o sleep team-wide e encadeia W central e Q para burst máximo antes de cleanse ou peel."
  weakness: "Early levels frágeis e só uma forma de mobility (stacks de Q). Invades agressivos no level 2-3, cadeias de hard CC (Lee Sin Q, Vi R) e Mercury's Treads nos alvos da R quebram o snowball."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primário: First Strike premia o estilo farm-and-gank com gold extra a cada gank, Magical Footwear dá botas grátis durante o farm, Biscuit Delivery e Cosmic Insight cobrem o mana early e reduzem cooldown de Smite/Flash em fights por objetivo."
    secondary_rationale: "Sorcery secundário: Manaflow Band cobre o mana para o spam Q-W-E entre camps não secar, Transcendence empurra Ability Haste para R mais frequentes do segundo teamfight em diante."
    secondary_alternative: "Contra skirmish 1v1 estendidos (Master Yi, Warwick, Udyr), troque Inspiration por Precision com keystone Conqueror e Triumph: stacking de dano adaptativo e HP-on-takedown viram lutas longas a seu favor."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Junglers farm-heavy sem invade early"
      reason: "Querem clearar tranquilos até o level 6. Lillia segura a velocidade de farm deles e os bate no scuttle graças aos stacks de Move Speed do Q e à pressão DOT da passiva."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Top tanks vulneráveis a DOT em % HP"
      reason: "Liandry's Torment com a passiva em % HP destroem rápido pools grandes de HP. A R sleep transforma ameaças de cast lento (Sion R, Mundo Q) em posicionamento grátis para o time."
    - examples: ["senna", "kog-maw"]
      archetype: "Carries de backline imóveis"
      reason: "A E cross-screen prepara o lockdown do gank, e a R sleep abre uma janela de pickoff garantida antes que se posicionem atrás da própria frontline."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Invaders agressivos no level 2-3"
      reason: "Os primeiros 3 níveis são o ponto fraco da Lillia: sem hard CC e só Q como dano. Um invade bem-sucedido a fecha antes do power spike de clear mais mobility."
    - examples: ["yasuo", "camille"]
      archetype: "Champions com dashes ou Wind Wall que ignoram o slow do W"
      reason: "O burst single-target do W precisa do alvo cravado no centro. Dashes repetidos e a E hookshot da Camille a deixam batendo no vazio."
    - examples: ["kindred", "graves"]
      archetype: "Junglers AD ranged que vencem o scuttle"
      reason: "Vencem o scuttle no range de auto-attack enquanto ela tem que entrar no hitbox do Q. Perder scuttle duas vezes seguidas colapsa a vision de river e os tempos de roam."
---

## Visão geral

Lillia é uma jungler AP skirmisher cujo kit inteiro aplica dano mágico contínuo em % HP via passiva **Dream-Laden Bough**. Cada Q, cada W, cada E deixa uma marca de "dream dust" que continua causando dano por alguns segundos — por isso ela clearia os camps mais rápido que quase qualquer outra jungler AP, e por isso os duelos dela parecem desgastar o inimigo mesmo com os cooldowns vazios. O game plan é simples de descrever: stacka dust em quantos campeões inimigos for possível e depois aperte **R** para colocar todos para dormir de uma vez.

Você quer tempo, não farm lento. Use **Q** para manter o stack de Move Speed ativo enquanto pathea entre camps, **E** para gankar de fora do alcance dos wards, e **W** como martelo single-target em skirmish quando o alvo já estiver slowado. Late game a R dela é o setup CC team-wide mais confiável do pool de junglers AP, mas depende de você ter taggado os alvos antes — uma R "nua" em um time limpo é uma ult desperdiçada.

## Build recomendada

**Starting items:** Hailblade (1039) + Refillable Potion (2031). Lillia é ranged, então Hailblade é o starter de pet correto.

**Core items (em ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Hailblade; auto-evolui por volta do minuto 3-4 quando acumula XP suficiente de monstros. É o pet de AP burst: cada auto-attack após um spell adiciona um proc on-hit mágico, alinhado perfeitamente com a DOT da passiva.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. O burn em % HP (dano espalhado por alguns segundos, não burst instantâneo) stacka com a passiva: quanto mais HP total o inimigo tem, mais rápido derrete.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Botas padrão depois que Magical Footwear entrega o par grátis por volta do minuto 12.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item de luta prolongada: stacka omnivamp (heal-on-damage) e converte parte do dano em true damage após 3 segundos em combate. Casa naturalmente com o relógio DOT dela.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP no late; transforma o chip damage da passiva em janelas reais de one-shot.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos e dive comp (Zed, Diana, Kha'Zix). A stasis cobre o momento depois que você dá R na backline enquanto DOT e time fecham a kill.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs backline squishy sem Magic Resist. A passiva de threshold HP (dano mágico extra quando o alvo está com pouca vida) sincroniza com o tick de wake-up da R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps que kitam muito. Move Speed e Ability Haste alimentam o skirmish em ciclo de habilidades, já que o dano vem do encadeamento de spells, não dos auto-attacks.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um alvo prioritário compra um item de Magic Resist.

**Boots:** Sorcerer's Shoes é padrão. Mercury's Treads é aceitável contra AP burst com CC pesado (Lissandra + Twisted Fate); a tenacity protege a janela de cast da R.

**Skill order:** Maxe **Q** primeiro (clear speed e DPS em skirmish), **W** segundo (burst single-target), **E** por último. Ponto em **R** nos níveis 6, 11, 16. Nível 1 em **Q**, nível 2 em **E** para gankar, nível 3 em **W**.

**Runes:** Primário **Inspiration** com **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secundário **Sorcery** com **Manaflow Band** e **Transcendence**.

## Matchups principais

- **Lee Sin / Xin Zhao:** Invaders agressivos no level 2-3 (entram na sua jungle para te matar antes de ter o kit completo) que te apagam antes do power spike de clear mais mobility. Comece pelo camp mais distante da linha de invade provável; peça aos laners para colocar wards perto do segundo buff. Não conteste o scuttle (o caranguejo do rio) pré-6.
- **Karthus:** Corrida de farm. Ele escala melhor late, mas você ganha o tempo dele na janela 6-14. Tracke o clear dele, ganke as lanes a cada cooldown de R. Se ficar atrás, não duele: foque em trades de side objective.
- **Amumu:** Os dois clearam rápido, mas ele não tem skirmish presence pré-6. Pegue o scuttle do lado dele do mapa após o primeiro clear; ele não pode te punir sem o Q stun pronto.
- **Master Yi:** Território de counterpick depois que ele tem 2 itens. Builde ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** mais cedo que o normal; kite o Q dele (o alpha strike) stackando o Move Speed da Q passiva e pré-colocando E atrás de você.
- **Graves:** Perde scuttle contra ele com HP cheio. Pathe pelo lado oposto do mapa até completar ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment**; o burn em % HP finalmente nivela o trade de auto-attack.

## Power spikes e condições de vitória

- **Level 3 (Q + W + E):** Kit completo. Primeiro clear fechado em ~3:15 com HP saudável — é a sua primeira janela de gank com setup de E em W central.
- **Level 6 (R desbloqueada):** Primeira **Lilting Lullaby**. Procure dust pré-stackada em um laner baixo: entre na vision, R, espere o ramp de 1.5s, encaixe o combo de wake-up. É o timing mais técnico do kit (R cedo é ult desperdiçada).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completa (~ minuto 9-11):** DPS em skirmish dobra. Force aqui as fights por grub ou primeiro dragon; a DOT dela mais o burn do item destroem a frontline tank antes que consiga reposicionar.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ minuto 18-22):** Poder de luta prolongada. Você out-sustaina os bruisers no 5v5 porque a cura escala com quanto dano você continua aplicando, e o kit aplica dano em todo cooldown.

## Erros comuns

- **Castar R em inimigos sem Dream Dust.** R só dorme alvos que já carregam stacks da passiva. Acerte primeiro com Q ou E; uma R "vazia" aplica só um Drowsy curto, não um sleep completo.
- **Ficar parada para encaixar W.** O centro do W é o burst, mas o windup é longo. Combine antes com E para slow: com a E acertada, o centro do W fica quase garantido mesmo sem Flash de setup.
- **Spammar Q no fog inimigo.** Q te revela a cada cast. Na jungle inimiga wardada, spammar Q clearando um camp coloca um ping vermelho enorme no minimap deles. Entre em silêncio, depois committa.
- **Ignorar o upgrade do jungle pet.** Muitas Lillias novas pulam a quest do Hailblade clearando rápido demais. Fique de olho na barra do pet — se travar em "needs more XP", passe por um camp pequeno extra antes de backar.
- **Buscar picks de R sozinha no late game.** R é ferramenta de setup de time, não botão de gank solo. Se o time está em mid-rotation quando você dá R, o sleep timer expira antes deles chegarem. Pingue o spell, conte um, depois committa.

## Dica avançada

Treine um ângulo "E-flash" para setups de R em mid river. Avance contra o mid laner inimigo pelo bush lateral, flash-E na linha de caminhada dele para que a seed caia atrás (forçando-o a andar dentro do slow), depois R durante a janela de slow. O slow garante que os stacks da passiva caiam antes da R resolver, então o sleep é completo e não um Drowsy parcial. Salva o cast em spawns de objetivo onde o inimigo está em rotation e o warding é raro.
