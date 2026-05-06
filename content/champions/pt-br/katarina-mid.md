---
title: "Katarina Mid Build & Guia — Patch 16.9"
slug: "katarina-mid"
language: "pt-br"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Guia completo da Katarina mid no Patch 16.9: itens iniciais, build core de assassina AP, matchups principais, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Quando um campeão inimigo recém-danificado morre (kill ou assist), os cooldowns restantes da Katarina caem drasticamente. Pegar um Dagger dispara um corte AOE."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Dagger direcionado que ricocheteia em inimigos próximos e cai atrás do alvo principal. O Dagger no chão é o pivô de todo o combo."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Joga um Dagger acima da Katarina que pousa um instante depois, mais um surto curto de Move Speed. É o Dagger no qual você dá blink."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink em campeão, minion, ward ou Dagger. Pegar um Dagger reduz o cooldown do Shunpo. Funciona também em wards inimigos visíveis."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel que arremessa facas nos 3 campeões inimigos mais próximos, aplicando Grievous Wounds. É cancelada por qualquer hard CC. Use pós-engage, nunca pré-engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra hard-engage (Malphite R, Zac, Amumu) — a stasis cancela o engage que cortaria o R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que cancela R (stun da Annie, R da Lissandra, gold card do Twisted Fate)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra comps com muito CC (2+ stuns/roots) — substitui Sorcerer's Shoes quando você come muito CC para channelar R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds capa o sustain"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Pegue uma kill ou assist na laning phase e faça snowball: cada takedown reseta o kit completo via Voracity, então uma kill na lane vira uma double na próxima wave."
  weakness: "Hard CC interrompe o R e transforma o channel em tempo desperdiçado. Sem takedown para resetar cooldowns, ela vira um melee de alcance curto com um único blink — mages de longo alcance punem ela de graça."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primária: Electrocute proca em cada cadeia W-E-Q (3 hits distintos em 3 segundos) para burst grátis. Sudden Impact dispara logo após cada Shunpo (o blink). Ultimate Hunter corta segundos do Death Lotus em cada takedown — Voracity faz o resto."
    secondary_rationale: "Precision secundária: Triumph cura 12% do HP faltante em takedown, então você encadeia uma segunda kill no kit resetado. Coup de Grace dá +8% de dano em alvos abaixo de 40% HP — exatamente a janela em que o R fecha o fight."
    secondary_alternative: "Se o time inimigo tem muito poke mágico (Xerath, Vel'Koz, Ziggs), troque Precision por Resolve com Second Wind (regen vs poke) e Overgrowth (HP scaling extra) para sobreviver à laning phase até o primeiro takedown."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Mages imóveis sem dash"
      reason: "Não conseguem sair da janela de burst W-E-Q da Katarina. Quando o setup deles (jaula do Veigar, gold card do TF, E da Anivia) está em cooldown, não há resposta para um Shunpo all-in."
    - examples: ["lux", "orianna"]
      archetype: "Mages de alcance médio sem escape"
      reason: "Os dois vivem do posicionamento atrás dos minions. Katarina dá blink num Dagger além da wave, deleta com W-E-Q-AA e reseta na kill para o próximo alvo."
    - examples: ["karthus"]
      archetype: "Scalers de farm-heavy sem sustain ou hard CC"
      reason: "Karthus precisa de janelas tranquilas de farm. A pressão de reset da Katarina força ele a queimar Flash e a abrir mão do scaling tardio que é a única win condition dele."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Mages com hard CC point-and-click"
      reason: "O stun é instantâneo e impossível de desviar: cancela Death Lotus no meio do channel e transforma a Katarina em saco de pancada parado enquanto o time inimigo cai em cima dela."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages de artillery de longo alcance"
      reason: "Pokeam a Katarina fora do alcance do Q dela (625) nos primeiros 5 níveis. Ela chega no level 6 já com 40% HP, sem reset de Voracity disponível, e morre numa única rotação de skillshots."
    - examples: ["diana", "pantheon"]
      archetype: "Burst all-in midlaners com engage point-and-click"
      reason: "O combo Q-R da Diana e o stun W do Pantheon acertam antes da Katarina conseguir colocar o Dagger do W. Ela perde a trade race e os power spikes de itens."
---

## Visão geral

Katarina é uma assassina AP melee construída em torno da passiva **Voracity**: cada takedown (kill ou assist) reduz drasticamente todos os cooldowns restantes das habilidades dela. Essa única mecânica é a identidade inteira da campeã — uma kill na lane refresca o kit completo, então um takedown costuma virar double na wave seguinte. A mid lane combina porque ela precisa de rotações curtas para encadear resets pelo mapa.

O game plan é simples de descrever e exigente de executar. Solte um Dagger com **W** ou use o que cai depois do **Q**, dê blink em cima dele com **E** para o dano AOE, depois comece os auto-attacks e solte o **R** quando o adversário estiver com pouco HP. A skill expression aparece em dois pontos: na ordem de cast **W-E-Q** (o Dagger tem que cair antes do blink, não depois) e em **quando** channelar o **R** — pré-engage qualquer stun cancela, pós-engage você limpa o teamfight com cadeias de reset.

## Build recomendada

**Itens iniciais:** Doran's Ring + 2 Health Potions. Pule Doran's Shield mesmo em matchups ranged — o AP e o mana regen ganham mais trades do que o HP poupa.

**Itens core (na ordem):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primeiro item spike. Dá um segundo dash curto (active) em cima do Shunpo, então você engaja num alvo que já queimou o escape. AP e HP para sobreviver ao counter-engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Botas padrão; troque por Mercury's Treads contra muito CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike que se alinha perfeitamente com a cadeia W-E-Q. O passivo de threshold de HP (dispara quando você baixa o inimigo de um certo HP) dá o burst extra para fechar alvos sem precisar do R.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling no late game. O slot mais alto de AP; o +30% AP transforma a Katarina de "snowball assassin" em "one-shot em qualquer squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration extra que escala com o HP faltante do alvo. Combina lindamente com Stormsurge e R para fechar alvos de pouco HP durante um fight.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — compre no momento exato em que qualquer alvo prioritário fechar um item de Magic Resist.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra hard-engage (Malphite R, Zac, Amumu). A stasis cancela o engage que cortaria o channel do R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que cancela R (stun da Annie, R da Lissandra, gold card do Twisted Fate). O escudo come uma habilidade e o channel sobrevive.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — substitui Sorcerer's Shoes quando o time inimigo tem 2+ stuns ou roots que cancelam Death Lotus.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka mid, Vladimir, Dr. Mundo top). Capa o sustain inimigo para que uma kill continue uma kill.

**Botas:** Sorcerer's Shoes é padrão. Mercury's Treads é o swap quando o time inimigo tem hard CC; Ionian Boots of Lucidity raramente é correta porque Voracity já te dá os cooldowns de graça.

**Skill order:** Maxe **Q** primeiro (waveclear e dano principal), **W** em segundo (o dagger que ancora todo combo), **E** por último. Ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Domination** com **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Secundária **Precision** com **Triumph** e **Coup de Grace**. A keystone (a runa principal no topo da página) proca naturalmente na cadeia W-E-Q porque você acerta o alvo com 3 instâncias separadas de dano.

## Matchups principais

- **Annie:** matchup mais difícil. O stun é point-and-click e cancela Death Lotus na hora. Compre ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como segundo item se a lane estiver indo mal. Pré-6, fique atrás da wave farmando com **Q**; nunca dê blink antes do stun dela entrar em cooldown.
- **Lux:** matchup favorável a partir do level 6. Pré-6 a **Q** dela tem mais alcance que o seu kit, então jogue atrás dos minions e desvie. Depois do 6, dê blink num dagger de sidewave e funda ela — não tem dash para fugir.
- **Zed:** skill matchup. Tem o mesmo padrão de all-in com mais disengage (a **R** dele deixa untargetable por 0.5s, quebrando seu channel). Segure o **R** até ele usar o dele; se sobreviver ao combo, você reseta na kill.
- **Twisted Fate:** counter-pick claro. Pré-6 você empurra mais; depois do 6, quando ele tenta roamar, dê blink num dagger sobre a wave e delete porque ele não tem item defensivo. Acompanhe o **R** dele com wards no mid.
- **Diana:** hard counter contra você. O combo **Q-R** dela proca antes mesmo do seu **W** dropar o dagger. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como terceiro item; nunca dê blink nela debaixo de torre sem.

## Power spikes e condições de vitória

- **Nível 2:** com **Q** e **E** já dá para tradar. Solte **Q**, ande até o alcance do ricochete, dê blink **E** no dagger que cai para o dano AOE, depois saia. Poke grátis se fizer no cooldown.
- **Nível 6:** primeiro **Death Lotus**. Com Voracity, uma kill ou assist refresca o channel e dobra seu dano em escaramuças — fights pré-6 duravam 4 segundos; pós-6, um takedown estende o fight a 10s de resets cíclicos.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completo (~minuto 11-13):** primeiro item spike importante. O dash ativo te dá uma segunda ferramenta de mobilidade, então você engaja num alvo que já queimou o escape (Flash, **E** da Lux, **E** do Yasuo). A pressão de roam vira aqui.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~minuto 18-22):** seu combo W-E-Q-AA agora one-shota qualquer squishy abaixo de 70% HP sem R. Esse é o timing em que você força fights de objetivo e busca picks nas side lanes.

## Erros comuns

- **Channelar R pré-engage.** Hard CC interrompe Death Lotus e desperdiça o cooldown. Use **R** pós-engage: depois do engage do tank do seu time, depois do frontline inimigo queimar o CC, channele de uma posição segura para limpar. Pré-engage com **R** fica reservado para fechar alvo de pouco HP que não tem como te interromper.
- **Dar blink E primeiro e dropar W depois.** A ordem de cast é **W → E → Q**. O dagger tem que estar no chão (ou prestes a pousar) quando você dá blink, senão você não pega ele e perde tanto o dano AOE do passivo quanto a redução de cooldown do Shunpo.
- **Ser ganancioso no reset num alvo que você não consegue fechar.** Se o inimigo está com 35% HP mas o aliado dele está colado, a kill não triggera Voracity a tempo e você morre no follow-up. Disengage com o Move Speed do **W**, espere os cooldowns na velha forma.
- **Gastar Shunpo em minions para fazer waveclear.** Você precisa do **E** como ferramenta defensiva de escape. Empurre as waves com **Q** e auto-attacks; só dê blink num minion se estiver commitando num fight ou fugindo.
- **Pickar Katarina contra duplo CC point-and-click.** Se o time inimigo tem Annie + Leona, seu **R** nunca completa. Ou dodga em champ-select ou aceita jogar em volta dos cooldowns deles: dê blink só depois que queimarem os stuns em outra pessoa.

## Dica avançada

Use o **E** em wards inimigos para escapar de ganks. O blink funciona em qualquer ward visível — incluindo trinkets inimigos e pinks colocados no seu lado do rio. Se você bater o olho num Stealth Ward no tri-bush antes do gank chegar, ganha uma ferramenta de escape gratuita que não aparece no mapa do inimigo: a maioria dos adversários planta wards para frente sem perceber que está te dando uma saída. O espelho também vale: se ver um ward inimigo perto da sua torre quando voltar pra base, reposicione o início do próximo gank para evitar.
