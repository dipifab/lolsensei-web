---
title: "Kog'Maw Bot Build & Guia — Patch 16.9"
slug: "kog-maw-bot"
language: "pt-br"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Guia Kog'Maw bot lane League of Legends Patch 16.9: build hyper-carry on-hit, matchups principais, power spikes, erros comuns e uma dica de posicionamento."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "Ao morrer, Kog'Maw vira uma bomba ambulante por 4 segundos e depois explode causando true damage. Ameaça de último suspiro, nunca um plano A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Projétil linear: dano mágico e shred de Armor e Magic Resist do alvo por alguns segundos. Passiva: Attack Speed bonus permanente."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Auto-buff (~6s) que estende o alcance dos autoataques e adiciona dano mágico em % de HP máximo on-hit. Coração de todo teamfight."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Skillshot linear: dano e rastro que reduz velocidade. Ferramenta de disengage e setup para autoataques durante o W."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "Artilharia AOE de longo alcance em área no chão. CD baixo, custo de mana sobe a cada cast. Poke, wave clear, executes cross-map abaixo de 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "contra bot lanes de poke pesado: estende o alcance da primeira auto e você ataca fora da janela deles"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra hard CC single-target que trava sua W (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra comps de dive pesado (Malphite + Yasuo, Hecarim): a ressu vira um erro em duas contribuições"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontline com 3000+ HP (Sion top, Cho'Gath, dois tanques): armor pen + W % HP derrete super-tanques"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps com cura pesada (Soraka, Aatrox, Dr. Mundo): Grievous Wounds corta o sustain por 5s"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Sobreviva ao mid game atrás da sua front line, alcance o power spike de 3 itens on-hit por volta do minuto 25 e derreta o time inimigo nas janelas de W em fights de objetivos."
  weakness: "Sem dash e alcance base de auto de só 500. Hookers, assassinos e divers deletam Kog'Maw antes da W voltar se o support estiver fora de posição."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision com Lethal Tempo: stacka durante W passando do cap de 2.5 attack speed; cada janela W vira um burst que rasga tanques. Triumph cura no takedown, Legend: Alacrity dá AS, Coup de Grace +8% abaixo de 40% HP — alvos que a R fecha."
    secondary_rationale: "Sorcery secundária: Transcendence sobe ability haste para ter W e R de volta mais rápido em fights longos, e Scorch adiciona poke da R nos níveis 1-5 para tornar a lane phase menos sofrida pra um campeão sem escape."
    secondary_alternative: "Contra supports de hook ou burst (Blitzcrank, Thresh, Pyke), troque Sorcery por Resolve com Bone Plating (cap de dano nos 3 primeiros hits após ser atingido) e Overgrowth (HP máximo bonus): perde scaling, mas sobrevive até o primeiro item."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "Tanques e bruisers que acumulam HP"
      reason: "Bio-Arcane Barrage causa dano mágico em % de HP máximo a cada auto: quanto mais vida acumulam, mais rápido você os deleta. Tanques sem dash não conseguem te punir durante a janela W."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Backline scalers imóveis"
      reason: "Living Artillery (R) acerta alvos no chão em alcance extremo. Backliners que precisam ficar parados para usar a spell principal recebem chip fora da tela e não têm escape para revidar."
    - examples: ["malphite", "amumu"]
      archetype: "Frontline de engage estacionário"
      reason: "Depois da R deles, seu time tem 2-3 segundos de fogo livre — exatamente o suficiente para um ciclo W completo na frontline lockdown antes que recupere."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports de hook com lockdown single-target"
      reason: "Kog'Maw não tem dash, blink, nem flash na E. Um hook na lane = uma morte: a única escape é Flash, um summoner com 5 minutos de cooldown."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Bot laners de poke a longo alcance"
      reason: "O alcance de auto deles supera os 500 base do Kog'Maw sem W: assediam de graça na lane e forçam um early game pobre de mana."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Assassinos de roam"
      reason: "Esses campeões alcançam a back line via dashes, saltos ou resets em stealth. Quando passam pela sua front line durante uma janela W, nenhum item defensivo além de Guardian Angel te salva a tempo."
---

## Visão geral

Kog'Maw é um marksman hyper-carry construído ao redor de uma única janela curta e decisiva: o buff de **Bio-Arcane Barrage (W)**. Por cerca de seis segundos você se torna o auto-attacker de maior alcance do mapa, cada hit causa dano mágico em porcentagem de HP máximo do alvo, e itens on-hit como Wit's End e Blade of The Ruined King transformam essa janela numa tempestade que apaga tanques. Fora da W você tem alcance base de auto de 500 — curto para um marksman — sem dash, sem blink. O preço de ser um monstro de late game é ser uma das vítimas favoritas dos lane bullies agressivos nos primeiros quinze minutos.

O game plan é direto: sobreviva à lane atrás de um support enchanter (Lulu, Janna, Yuumi, Soraka), farme com paciência, alcance os três itens on-hit por volta do minuto 25 e jogue todo teamfight atrás da sua front line para que sua janela W fique sem ser contestada. **Living Artillery (R)** alivia a dor do early game oferecendo poke gratuito e clear de wave de longe; o custo de mana sobe rápido se você spammar, então guarde para garantir kills ou ajustar timing de wave, não para harass.

## Build recomendada

**Starting items:** Doran's Blade + Health Potion. Doran's Shield é aceitável contra um matchup de poke pesado (Caitlyn, Varus), mas Doran's Blade é o padrão para acelerar a rampa on-hit.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primeiro item: attack speed e proc de true damage no terceiro hit; sinergia direta com a janela W on-hit.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bonus de attack speed; única bota razoável para um hyper-carry que vive no cap de attack speed.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — dano mágico on-hit mais Magic Resist; o melhor item único contra comps AP-heavy e amplifica o dano mágico da sua W.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — os bolts aplicam on-hit em dois alvos extras: transforma sua W em wave clear AOE e pressão AOE de teamfight.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — dano on-hit em % de HP atual, life steal e ativo que reduz velocidade; é o dueling tool que você troca por ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** se precisar de escudo em vez de life steal.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — contra bot lanes de poke pesado (Caitlyn, Varus). A primeira auto energized estende seu alcance W-auto efetivo: você ataca fora da janela de poke deles.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra hard CC single-target que trava sua W (flecha da Ashe R, snare da Morgana Q, suppression do Malzahar R). O ativo limpa o CC com um botão.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra comps de dive pesado (Malphite + Yasuo, Hecarim). A ressurreição transforma um erro de posicionamento em duas contribuições no fight: exatamente o que um AOE damage dealer estacionário precisa.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra frontline acumulando 3000+ HP. Armor penetration mais o shred mágico % HP máximo da sua W deleta super-tanques mais rápido que qualquer item de pura attack speed.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps de cura pesada (Soraka, Aatrox, Dr. Mundo). Grievous Wounds corta o sustain pela metade por 5 segundos; sem ele, o dano da sua W é curado mais rápido do que você aplica.

**Boots:** Berserker's Greaves é a única escolha. Mercury's Treads é incorreta no Kog'Maw — a attack speed perdida custa mais do que a tenacity entrega.

**Skill order:** Maxe **W** primeiro (identidade do kit), **Q** em segundo (shred de Armor e Magic Resist mais passive attack speed), **E** por último (só utility). Coloque um ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Precision** com **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Sorcery** com **Transcendence** e **Scorch**, ou **Resolve** com **Bone Plating** e **Overgrowth** contra supports de hook ou burst.

## Matchups principais

- **Caitlyn / Varus:** Bot laners de poke a longo alcance. Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, esconda atrás da wave e farme sob torre até o nível 6. Peça ao support wards de river e tri-bush; a pressão deles cai assim que você completa ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**.
- **Draven:** Ele te supera em qualquer all-in (troca total até a kill) pré-6. Acompanhe o nível dele na lane priority, nunca troque autos em espaço aberto e use a **E** para reduzir a velocidade dele se vier correndo. Os machados dele exigem posição avançada — puna com poke da **R** depois do 6.
- **Lucian:** Evite trades de auto-attack (a passiva double-shot dele vence trades curtos). Aproxime só para last-hit e use a janela W depois do minuto 8 para outrange-ar a **E** dash dele em 100+ unidades.
- **Jhin / Senna:** Matchups safe. Nenhum dos dois tem dash e ambos querem se posicionar a longo alcance, mas nenhum aguenta o burst em % HP máximo da sua W depois que você tem um item. Procure o all-in quando seu support tiver um CC pronto e a W estiver online.
- **Ezreal:** Skill-matchup. Ele pokea com **Q** mas cada cast trava ele no lugar. Aproxime durante a animação da **Q** dele para last-hit, guarde a **E** para quando ele usar a **E** dash e aplique o slow, e ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** é bom se o time dele tem follow-up CC depois da ulti.

## Power spikes e condições de vitória

- **Nível 3:** Com um ponto em cada habilidade você tem o kit de poke completo (slow da **E** → auto durante **W** → **Q** shred). É sua primeira janela crível de all-in se o support tiver um CC.
- **Nível 6:** A primeira **Living Artillery** desbloqueia poke pela lane inteira e last-hit secures de 1300+ unidades. Wave-clear do outro lado do river também desbloqueia quando você está pushado.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves completos (~ minuto 14-16):** primeiro power spike sério em teamfight. O proc de true damage no terceiro hit combina com o % HP máximo da W para ameaçar instantaneamente qualquer squishy que entrar em alcance.
- **3 itens on-hit online (~ minuto 25-28):** Com ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**, sua janela W deleta as barras de HP do time inimigo inteiro em seis segundos. Force Baron, Atakhan e Elder Drake aqui: é o momento ao redor do qual seu time precisa jogar.

## Erros comuns

- **Soltar W on cooldown nas trocas.** Cada W queimada na lane é uma W que falta no próximo teamfight. Guarde para all-ins comprometidos, scuttle skirmishes e fights de objetivo, não para poke; **R** é sua ferramenta de poke.
- **Spammar R até ficar sem mana.** Cada Living Artillery castada numa janela curta custa mais mana que a anterior. Após 3 casts em 6 segundos você paga 100+ mana por shot. Limite o spam a 2 seguidas, a menos que esteja fechando uma kill.
- **Ficar no alcance máximo da W durante um fight.** O alcance máximo te tira do peel do support. Fique a uma distância de um auto-attack atrás da sua front line, não na ponta dela — assassinos (qualquer campeão que derruba um alvo em 1-2 segundos) miram em você assim que veem o seu chapéu aparecer.
- **Pickar Kog'Maw sem support enchanter.** Lulu, Janna, Yuumi e Soraka não são preferências — são contrato. Com um support de hook ou engage você não tem como sobreviver à lane phase e escala para um fight que nunca alcança.
- **Esquecer do shred da Q.** Acertar **Q** antes da W num tank corta Armor e Magic Resist por vários segundos. Sempre abra o all-in com **Q** quando estiver em alcance; o dano on-hit que vem depois cai como se o alvo tivesse um item defensivo a menos.

## Dica avançada

Bufferize a ativação de **Bio-Arcane Barrage (W)** no mesmo input do auto-attack de last-hit. Apertar W um instante antes da auto cancela o wind-up lento do Kog'Maw e faz a janela W começar 0.1-0.2 segundos antes — num buff de seis segundos isso é cerca de uma auto-attack a mais. Em teamfight é a diferença entre encaixar quatro autos durante W na front line inimiga e encaixar cinco antes do primeiro dive te alcançar; é a mecânica com a melhor relação valor/esforço para treinar no practice tool contra um manequim.
