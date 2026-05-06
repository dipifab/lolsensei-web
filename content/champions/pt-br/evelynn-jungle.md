---
title: "Evelynn Jungle Build & Guia — Patch 16.9"
slug: "evelynn-jungle"
language: "pt-br"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia da Evelynn jungle para League of Legends Patch 16.9: rota de gank com Demon Shade Camouflage, build core de Lich Bane, matchups principais, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Fora de combate Evelynn entra em Demon Shade. Cura com pouca HP e ganha Camouflage a partir do nível 6 — invisível a wards e a inimigos fora de um raio curto."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "O Lasher da Evelynn acerta o inimigo mais próximo, depois dispara até três rajadas de spikes nos alvos em volta. Clear principal de jungle e DPS em combo."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Amaldiçoa um inimigo. Após um delay curto, o próximo ataque ou habilidade da Evelynn aplica charm e reduz resistência mágica. Lance de Demon Shade para o setup mais limpo."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dash no alvo causando dano mágico e dando um breve move speed. De Demon Shade vira um pulo longo com dano bônus e reset de autoataque."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Janela curta untargetable, depois um cone de dano mágico massivo na frente dela antes de um blink para trás. Dano bônus abaixo de 30% HP — seu execute."
      dd_spell_id: "EvelynnR"
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
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "quando 2+ inimigos compram qualquer item de Magic Resist — penetração mágica percentual que escala com a MR deles"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra lockdown single-target que pune a animação da R (Veigar cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo, Aatrox) — Grievous Wounds, cura pela metade"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pickoff em inimigos isolados pós-6 com W charm em R execute. Camouflage de Demon Shade para invadir e gankar sem aviso de visão. Snowball do gold lead da jungle e foque os squishies."
  weakness: "Pré-6 zero pressão de gank — sem Camouflage, sem alcance de charm. Counter forte de Control Wards e prio de lane. Se os inimigos agruparem com peel, você não chega na carry."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primária: Dark Harvest faz snowball em pickoffs isolados — o game plan da Evelynn. Sudden Impact procca depois do warp da R e do W charm para mais burst. Sixth Sense revela wards e mantém a Camouflage útil. Ultimate Hunter corta o CD da R."
    secondary_rationale: "Sorcery secundária em vez de Inspiration ou Resolve: Evelynn precisa de scaling AP puro para one-shottar a carry, não utility. Manaflow Band sustenta mana para spam de Q no clear, Gathering Storm dá AP grátis a cada 10 minutos para o W+R one-shot do late."
    secondary_alternative: "Se o enemy team tem 4+ squishies e peel fraco, troque Sorcery por Precision com Presence of Mind (refund de mana em takedown) e Coup de Grace (+8% dano abaixo de 40% HP) para encadear executes mais rápido."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hyper-carries imóveis"
      reason: "Carries sem dash ou blink morrem instantaneamente a um W charm em R: não têm ferramenta para sair do cone do seu warp untargetable antes que ele caia."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Healers de backline sem escape"
      reason: "Quando você chega na backline deles via Camouflage de Demon Shade, essas enchanters morrem em um W+R antes de conseguir castar o kit defensivo."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Junglers de farm lento"
      reason: "Junglers que querem farmar e escalar: Evelynn invade, rouba camp e ganka com Camouflage pós-6, forçando-os a defender em vez de escalar."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Duelistas early-game com lethality"
      reason: "O Q do Lee Sin e o pulo do Rengar fecham distância antes do nível 6 — sem Camouflage e sem R, Evelynn perde invades pré-6 e 1v1 sem chance."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanters que peelam a carry"
      reason: "A R da Lulu deixa a carry invulnerável, Tahm Kench come ela, o E da Morgana dá Spell Shield: cada uma cancela a combo W+R no momento exato em que deveria matar."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Supports com visão pesada e CC de engage"
      reason: "Compram Control Ward no primeiro back, te veem em Demon Shade na lane, e a chain de CC (Naut Q, Leona E+R) cai antes do seu W charm sair."
---

## Visão geral

Evelynn é a única campeã em League com um stealth embutido que escala por nível: a partir do nível 6 a passiva **Demon Shade (P)** dá Camouflage fora de combate, ou seja, os inimigos não a veem a menos que estejam dentro de um raio pequeno em volta dela — nem mesmo Control Wards (os trinkets rosa especiais que os inimigos colocam para revelar stealth) detectam ela em distância completa. Toda a identidade dela está nisso. É uma assassina de dano mágico sem waveclear de verdade nem poder de duelo antes do 6, mas no momento em que **Last Caress (R)** é desbloqueada ela vira a jungler de pickoff (campeã construída para eliminar um inimigo isolado de cada vez, fora de teamfights cheios) mais confiável do jogo: você anda invisível até a backline inimiga (a parte de trás da formação onde geralmente ficam as carries squishies — campeões de muito dano e pouca defesa), aplica charm na carry com **Allure (W)** e a deleta em uma combo antes que qualquer peel (habilidades de aliados que protegem a carry, como o escudo da Janna ou a ult da Lulu) consiga reagir.

O game plan é brutal na simplicidade: farme até o 6 sem morrer, procure um gank em uma lane com pouca HP que não tenha wards de visão por perto (olhinhos invisíveis que os aliados colocam para enxergar a fog of war), e a partir daí cace um alvo isolado toda vez que a **R** estiver pronta. A skill expression mora em ler o pathing (por onde você consegue andar Camouflaged sem trigger um ward?) e no timing do commit (não comprometa a **R** se a carry tiver um summoner de peel como Cleanse ou um peeler como Lulu por perto). Se você snowball os dois primeiros picks (transformar uma vantagem early em mais kills, mais ouro, mais itens), o time inimigo agrupa, você escala (ganha poder conforme acumula itens e níveis) até o range de one-shot com ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** e fecha a partida da invisibilidade.

## Build recomendada

**Itens iniciais:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter padrão de jungler corpo-a-corpo — sem exceção para Evelynn.

**Itens core (em ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Emberknife (auto-evolui por volta do minuto 3-4 quando o pet de jungle comeu monstros suficientes). O companheiro para burst de AP (Ability Power, o stat que escala dano mágico): adiciona um efeito de dano mágico que dispara (um "proc") no autoataque logo depois de uma habilidade, alinhando perfeitamente com **Lich Bane** mais tarde.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — o spike assinatura da Evelynn. Toda vez que você lança uma habilidade, seu próximo basic attack adiciona um bônus enorme de dano mágico, e o charm do **W** + o reset de autoataque do **E** (efeito que te deixa disparar um basic attack novo na hora, ignorando o delay normal de attack speed) significa que você consegue encadear dois procs de **Lich Bane** em menos de um segundo.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetração mágica fixa (subtrai uma quantidade fixa da magic resist do alvo, fazendo suas habilidades baterem mais forte). Padrão para qualquer AP burster que mira squishies.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — AP e magic penetration extras; a passiva com limiar de HP (passiva que ativa quando o alvo está abaixo de uma faixa baixa de HP, em torno de 35%) alinha exatamente com o cone de execute da sua **R**.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador late-game em todo o seu AP. O quarto ou quinto slot é onde Evelynn entra no range "one-shot na carry de HP cheia".

**Itens situacionais:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que 2 ou mais inimigos compram qualquer item de magic resist.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra lockdown single-target (Veigar cage, Lissandra R, Malzahar R). A stasis cobre os recovery frames depois da **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo, Aatrox). Aplica Grievous Wounds, dividindo a cura recebida pela metade.

**Botas:** Sorcerer's Shoes por padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são aceitáveis só quando o enemy team tem pouquíssima magic resist e seu time precisa de mais uptime de **R** (casts mais frequentes) como finisher de fight.

**Skill order:** Maximize **Q** primeiro (clear de jungle e DPS principal), **E** em segundo (mobilidade e scaling de dano no reset), **W** por último (o cooldown importa mais que o rank). Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Domination** com **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundária **Sorcery** com **Manaflow Band** e **Gathering Storm**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling. Troque a secundária por **Precision** (Presence of Mind + Coup de Grace) quando o enemy team é quase todo squishy e você quer consistência no execute.

## Matchups principais

- **Lee Sin / Rengar (jungle inimigo):** Ameaças de invade pré-6. Não conteste o scuttle no nível 3 — tracke com visão e faça full clear seguro. Quando você bate o 6, o matchup vira: você anda na jungle deles em Camouflage e ganka as lanes que não wardaram.
- **Lulu (support inimigo):** O peel mais duro do jogo para uma assassina. Queime a **R** dela com um fake commit (comece o **W** charm mas recue se ela ultar), depois re-engaje no alvo quando a ult da Lulu estiver em cooldown.
- **Tahm Kench (support inimigo):** Ele come a carry com **W** no instante em que sua **R** cai. Espere ele usar **W** em outra coisa (uma wave de minions, um tank em engage), depois comprometa. Se ele está cheio de mana olhando para o ADC dele, procure outro alvo.
- **Karthus (jungle inimigo):** Corrida de scaling. Ele ganha de você no farm, você ganha dele em pickoff. Se Karthus chegar no nível 16 com itens completos você perde: force ganks toda vez que a **R** dele estiver no chão para negar scaling e feche o jogo até o minuto 30.
- **Pyke (support inimigo):** Hard counter ao seu padrão típico de "execute em pouca HP". A **R** dele também executa em HP baixo, e os roams dele colocam suas rotas de jungle sob pressão de visão. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** mais cedo que o usual para esquivar a janela de execute dele depois de você comprometer.

## Power spikes e condições de vitória

- **Nível 6 (primeiro R desbloqueado):** Sua partida de verdade começa aqui. Demon Shade ganha Camouflage, **R** desbloqueia, e qualquer lane sem wards de visão (os olhinhos invisíveis que aliados colocam para enxergar a fog of war) é kill grátis. Pathe para a lane com os inimigos de HP mais baixa.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completo (~ minuto 12-14):** O salto de "precisa de 2 habilidades para matar" para "mata com uma combo W+AA+E+Q+R em um squishy" acontece exatamente nesse item. Cace pickoffs no momento em que ele finaliza.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ minuto 18-20):** A passiva com limiar de HP alinha com o cone de execute da sua **R**. Depois desse item, qualquer squishy abaixo de 60% HP morre em uma combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** Range completo de one-shot em carries de backline a partir de 100% HP. Force um 5v5 em volta de Baron assim que Deathcap finalizar — seu time começa o fight 5v4 no momento em que sua combo cai.

## Erros comuns

- **Gankar pré-6 porque seu time está pingando.** Você não tem alcance de charm, não tem Camouflage e nada para surpreender o inimigo. Pré-6 você farma e procura counter-jungle em inimigos cujo nível você supera. Diga aos seus laners: "ganko no 6".
- **Lançar W fora de Demon Shade.** Quando você está visível (em combate ou com pouca HP), o inimigo vê a animação do **W** e pode pre-flashar o charm. Sempre prepare o gank entrando da Camouflage, depois **W** a 1100+ de range.
- **Usar R por dano em vez de execute.** A **R** causa dano bônus abaixo de 30% HP. Queimar em um alvo de HP cheia desperdiça o spike — abra com a combo **W+E+Q**, depois **R** no instante em que cruzarem o limiar de execute.
- **Tunnel vision na kill.** A **R** te warpa uma distância longa para trás depois do cast. Se você está no meio do enemy team quando aperta, warpa para nada útil. Posicione-se de modo que o warp te puxe na direção do seu time ou da fog of war (a área de jungle sem wards), não mais fundo nos inimigos.
- **Recusar voltar pra base com HP cheia.** Demon Shade fora de combate te cura devagar mesmo de mana cheia. Se você tem 1300+ de ouro para um componente de dano como ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** ou de mana como ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, volte. Rotacionar com HP cheia e 0 ouro é tempo desperdiçado.

## Dica avançada

A combo de duplo proc do ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane**: depois que o **W** charm cai, animation-cancel um autoataque para **E** (Whiplash de Demon Shade tem reset de autoataque embutido). A ordem é **W → AA → E → AA → Q → R**. Cada um dos dois autoataques consome um proc fresco de **Lich Bane** porque **E** conta como cast de habilidade e reseta seu timer de autoataque. Em um squishy sem magic resist essa combo causa cerca de 1.5x o dano da abertura preguiçosa **W → R** que a maioria das Evelynns de rank baixo usa, e te deixa deletar uma carry de 1800 HP a partir de HP cheia com 3 itens em vez de precisar de 4.
