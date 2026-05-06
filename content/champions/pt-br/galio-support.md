---
title: "Galio Support Build & Guia — Patch 16.9"
slug: "galio-support"
language: "pt-br"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Guia Galio support para League of Legends Patch 16.9: starter kit, build engage-tank, matchups principais, power spikes, erros comuns e uma dica avançada final."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "A cada poucos segundos, a próxima auto-attack do Galio causa dano mágico bônus em uma pequena área no impacto."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Duas rajadas de vento que convergem em um tornado no ponto alvo, causando dano mágico ao longo do tempo. Poke a longa distância de posição segura."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carrega um escudo que absorve dano mágico; solte para dar taunt e dano em área. Use no meio do fight para peelar o seu ADC (proteger o carry de divers)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Dá um passo curto para trás, depois avança, lançando para o alto o primeiro campeão acertado. Ferramenta principal de engage."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa um aliado; após um delay, Galio aterrissa na posição dele, escudando aliados e lançando inimigos para cima. Engage cross-map."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra CC pesado single-target no seu ADC (Morgana Q, Ashe R, Skarner R) — o ativo cleansa e cura"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "com ADC focado em auto-attack (Jinx, Caitlyn, Tristana) — o slow do W encadeia na janela DPS"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "com comp aliada de dano mágico (AP mid + AP jungle) — a aura amplifica o dano mágico nos alvos que você taunta"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 3+ ameaças AP no time inimigo (mid + jungle + support com dano mágico)"
    - dd_id: "3107"
      name: "Redemption"
      against: "com ADC enchanter ou comp focada em cura (Soraka, Sona, Yuumi no time) — heal de grupo extra em objective fights"
  base_combo: ["E", "AA", "W"]
  win_condition: "Use Hero's Entrance R para engage cross-map nos spawns de Drake e Rift Herald. Em skirmishes na bot, abra com E knockup, W taunt para peelar o ADC, depois Knight's Vow redireciona o dano para longe do seu carry."
  weakness: "A carga do W é interrompível por hooks (Blitzcrank, Thresh) e silences. Enchanters de disengage (Janna, Lulu) cancelam o follow-up do R. Dano solo limitado: precisa de follow-up do ADC para fechar kills."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primária: Aftershock procca no taunt W ou knockup R, dando resistências para sobreviver depois de engagear. Font of Life cura o ADC quando ele ataca o alvo imobilizado, Bone Plating absorve o primeiro burst, Revitalize amplifica o escudo do R nos aliados."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery dá HP e mana grátis na lane (Galio é mana-hungry com renda de support), e Cosmic Insight reduz o cooldown do Flash — vital porque R+Flash é o seu catch tool de maior impacto."
    secondary_alternative: "Em lane de poke pesado (Brand, Zyra, Xerath support) onde você não chega ao nível 6 saudável, troque Inspiration por Sorcery com Manaflow Band (mais mana para Q de poke back) e Transcendence (E mais rápida para esquivar)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "ADCs imóveis sem dash"
      reason: "Hero's Entrance aterrissa em cima do seu aliado com knockup; carries sem dash não escapam, então qualquer 2v2 vira kill quando o R está disponível."
    - examples: ["leona", "rakan"]
      archetype: "Tank engage supports sem hook"
      reason: "O knockup E do Galio interrompe o windup de engage deles (Q stun-walk da Leona, carga W do Rakan); o escudo W depois absorve o dano mágico do follow-up pós-engage."
    - examples: ["brand", "zyra"]
      archetype: "Mage supports squishy sem escape"
      reason: "Mage supports ficam parados para acertar skillshots; o E do Galio alcança eles através dos minions e o W tanka o burst que normalmente afastaria um melee engager."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports"
      reason: "Um hook que pega o Galio em pleno W cancela o engage inteiro; ele é um alvo enorme sem dodge tool próprio, e um hook em chain CC tira tanto R quanto E do fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Enchanters de disengage"
      reason: "Os AOE knock-aside ou os spells shield-and-cleanse anulam a janela de landing do R e o taunt W — quando o Galio cai, o carry já está fora de alcance."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage supports de artilharia longa"
      reason: "Eles pokeiam fora do alcance do Q do Galio e da distância do dash E, então não dá para puni-los na lane; perder HP pré-6 trava o impacto dele com R em sidelane."
---

## Visão geral

Galio support é a ferramenta de engage (iniciar o fight) cross-map em casca de tank. Ele traz hard CC — controle que o inimigo não consegue cancelar com um cleanse básico — em três habilidades diferentes: **W** taunt (força o alvo a te atacar), **E** knockup (jogada para o ar curta, tipo um stun curto), **R** knockup. Tem um escudo mágico para absorver o burst (dano alto em 1-2 segundos) dos supports a distância, e uma ulti global que transforma os spawns de Drake e Rift Herald em oportunidades de kill 5v5. Joga support porque o impacto dele escala com a map awareness, não com gold — e porque Hero's Entrance é mais útil quando os aliados precisam de um tank caindo do céu, não quando ele mesmo é esse tank.

O plano de jogo na lane é paciente: use Q no alcance máximo para chipar o inimigo, segure o E para o momento em que o seu ADC (o marksman, o carry que dá auto-attack para causar dano) commitar para o fight, e só carregue W quando o inimigo já estiver colado em melee em você. As big plays vêm no nível 6 — quando o seu jungler dive top (entra embaixo da torre buscando kill), você R; quando o jungler inimigo aparece bot, R de volta para o seu top laner. A skill expression mora no timing do W (solte para interromper channels-chave — R da Caitlyn, ulti spray do Twitch, Q do Master Yi) e na seleção de alvo do R (sempre escolha o aliado com mais chance de sobreviver aos 2 segundos de channel — nunca dê R num Vayne já com pouco HP).

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter padrão de support; o upgrade da quest (uma missão integrada que completa farmando gold ao longo do tempo) destrava por volta do minuto 12-14.

**Itens core (na ordem):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade da quest do World Atlas, escolhido porque Galio é engage-leaning (ele inicia fights, não disengaga). Adiciona uma passiva de dano on-immobilized que procca (dispara automaticamente) toda vez que o seu W ou E acerta.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — ativo de escudo em área para skirmishes 5v5. Combina com o R: você cai com R, dropa Locket no landing, e o seu time come o follow-up de burst inimigo com escudo de 700+ por pessoa.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste. Cortam o cooldown de cada spell, então as suas ferramentas de engage voltam mais rápido entre teamfights, e o CDR sobre Summoner Spells encurta o Flash para combos R+Flash.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bind no carry de maior impacto. Redireciona o dano dele para você e empurra o valor do Aftershock porque agora é você o alvo prioritário de focus.

**Itens situacionais:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra CC pesado single-target no seu ADC (Morgana Q, Ashe R, Skarner R). O ativo cleansa o controle e cura.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — com ADC focado em auto-attack (Jinx, Caitlyn, Tristana). O slow do seu W encadeia direto na janela DPS deles.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — com comp aliada de dano mágico (AP mid + AP jungle). A aura debuff amplifica o dano mágico do seu time nos alvos que você taunta com W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra 3+ ameaças AP no time inimigo (mid + jungle + support, todos com dano mágico).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — com ADC enchanter ou comp focada em cura (Soraka, Sona, Yuumi no seu time).

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** padrão — ability haste mais redução de CD do Flash deixam combos R+Flash disponíveis com mais frequência. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps de muito CC (vários stuns/charms/roots mirados em você durante o landing do R).

**Skill order:** Maxe **E** primeiro (cooldown de engage mais curto). Maxe **Q** em segundo (waveclear e chip damage quando o ADC está shovado — preso embaixo da torre sem minion para farmar). **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Resolve** com **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Troque a secundária para **Sorcery** (Manaflow Band + Transcendence) em lanes de poke pesado onde você não chega ao nível 6 saudável.

## Matchups principais

- **Blitzcrank:** Lane difícil. O Q hook dele cai durante a sua carga de W. Fique atrás da wave de minions para ele não hookar atravessando, nunca carregue W em fog of war, e chame o seu jungler por volta do minuto 4-5 — Blitz não tem escape e o seu E knockup faz chain-lock nele.
- **Lulu:** Disengage difícil. O escudo E + W (knock-aside ou polymorph) dela apaga o seu engage. Use Q para pokear no alcance máximo pré-6 em vez de ir para o E engage, e R fora da tela para o polymorph não cair antes de você chegar.
- **Leona:** Fight equilibrado. Os dois são engagers, então o lado que acerta E primeiro ganha o trade. Bait o Q sun-strike dela com o seu passo para frente, depois E no frame de recovery.
- **Soraka:** Favorável. A cura dela só importa se ela ficar no alcance. Q dela na distância máxima para que ela tenha que escolher entre curar e desviar, depois R + E quando o seu jungler aparecer na bot para um 3v2 imbatível.
- **Pyke:** Fight equilibrado, mas o Galio perde se o Pyke conseguir uma kill. Tracke os hooks dele, nunca deixe o seu ADC com HP mínimo quando você não puder ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** na spike, e wardeie o river fundo porque o R dele é um reset.

## Power spikes e condições de vitória

- **Nível 2:** Q + E destrava a primeira ameaça de kill. Com follow-up do ADC, ande para frente, E no support e Q embaixo do ADC — o slow no knockup encadeia tempo suficiente para duas auto-attacks de dano.
- **Nível 6:** **Hero's Entrance** destrava o impacto cross-map. O primeiro fight de Drake é o seu power spike — empurre forte a wave, ande até o river do mid e R no seu jungler quando ele engagar no dragon pit.
- **Bloodsong completo (~ minuto 12-14):** Os engages agora causam dano de verdade. A passiva on-immobilize adiciona 30+ de dano mágico por hit no alvo do W ou E.
- **Locket of the Iron Solari + Knight's Vow online (~ minuto 20-25):** O seu spike de dois itens. R-into-Locket no carry cobre 600+ de HP efetivo para o time, enquanto Knight's Vow tanka o focus fire em você e o seu ADC continua dando DPS.

## Erros comuns

- **Carregar W enquanto o seu ADC não tem follow-up.** O taunt W força o inimigo a te atacar, mas se o ADC está reposicionando ou recallando, você come o dano de graça sem trade. Sincronize o release do W com a primeira janela de auto-attack do ADC.
- **Hero's Entrance no alvo errado.** Nunca dê R em um aliado com pouco HP — ele morre durante os 2 segundos de channel e você cai em cima de um cadáver. Escolha o frontline de maior HP do seu time.
- **Ignorar a wave durante roams.** Um Galio support que dá R no mid e abre mão de uma wave inteira da bot é net loss. Empurre primeiro a wave para a torre inimiga, depois roame — nunca roame de uma lane congelada.
- **Engagar sem ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket ativo.** Em objective fights, R-Locket é o seu cooldown mais valioso. Segure o ativo até o seu time commitar o fight, depois solte os dois no mesmo instante para o valor de escudo máximo em vários aliados.
- **Maxar W em segundo.** Como Galio mid, subir rank no W dá redução de cooldown marginal. Maxe E para a janela de engage de 4 segundos no nível 8.

## Dica avançada

Combo R+Flash: lance Hero's Entrance em um aliado, depois Flash durante a animação de windup para redirecionar o seu ponto de landing em 400 unidades em qualquer direção. O time inimigo vê o indicador de R no aliado e se prepara para o knockup óbvio, e aí o seu landing flashado clipa um alvo fora do raio R visível. Exige prática para timar o Flash dentro da janela do channel — mas um único R+Flash no carry inimigo, off-vision (o inimigo não te vê porque você está dentro da fog of war), encerra partidas antes delas começarem.
