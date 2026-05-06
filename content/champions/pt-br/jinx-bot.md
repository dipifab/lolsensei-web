---
title: "Jinx Bot Build & Guia — Patch 16.9"
slug: "jinx-bot"
language: "pt-br"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Guia da Jinx bot lane para League of Legends Patch 16.9: starter kit, build hypercarry de crit, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Sempre que a Jinx ajuda a matar um campeão, monstro épico ou destrói uma estrutura, ela ganha um grande boost de move speed e attack speed por alguns segundos."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Alterna entre Pow-Pow (minigun, acumula attack speed) e Fishbones (lança-foguetes, dano AOE com mais alcance, custa mana). Principal alavanca de DPS."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Skillshot linear de longo alcance que dá dano, slow e revela o primeiro inimigo atingido. Use como poke e como slow de self-peel contra divers."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Lança três granadas-armadilha que prendem campeões inimigos no contato por 1.5s. Self-peel e setup de lockdown, não poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Foguete global que dá mais dano quanto mais voa e explode em dano baseado em HP faltando. Snipe runners de baixo HP ou finalize do outro lado do mapa."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra front lines tanky ou comps que empilham HP (Sion, Cho'Gath, Dr. Mundo) — armor pen extra escala com HP máximo do inimigo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de muita cura (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds assim que os foguetes encostam"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra pressão de assassins ou divers (Zed, Samira, Yasuo flank) — move speed e escudo de baixa HP dão o segundo para o E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra comps de muito poke ou lanes em stalemate — lifesteal e overheal shield mantêm sua HP cheia entre fights"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Chegue viva em Statikk Shiv e Infinity Edge, depois jogue os teamfights da backline com a Q foguete. Encadeie resets de Get Excited! em pickoffs para snowballar Baron e Drake."
  weakness: "Move speed base lento e zero dash ou blink. Hard counter de divers e assassins que alcançam a backline; sofre em lanes de pressão early (Draven, Lucian, Caitlyn) até os dois primeiros itens."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Marksmen imóveis de late-scaling"
      reason: "Jinx escala e teamfighta melhor que marksmen estáticos: a Q foguete mais Runaan's Hurricane despedaça uma backline aglomerada que não tem dash para reposicionar quando o fight começa."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "Tanks que empilham HP e comps de front line"
      reason: "A Q foguete dá dano físico AOE que escala com attack speed, e a armor pen do Lord Dominik's contra alvos de muita HP transforma front lines grossas no alvo ideal em vez de uma parede."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports de engage com lockdown"
      reason: "Quando o support pega um alvo, a Jinx tem janela de auto-attack longa o bastante para encaixar 3-4 foguetes na cadeia de CC e finalizar com a R, já que o alvo não consegue dashear pra fora do AOE."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Marksmen de pressão early"
      reason: "Eles out-tradam a Jinx nos níveis 1-6 porque o dano em auto-attack supera os stacks de minigun e a Jinx não tem dash para desengajar; snowballam gold de lane antes do primeiro item spike."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Assassins móveis e divers"
      reason: "Jinx não tem dash, blink nem CC instantâneo: um único gap-close passando do Flame Chompers geralmente apaga ela antes do E pousar ou o root expirar."
    - examples: ["xerath", "ziggs"]
      archetype: "Mages de artillery de longo alcance"
      reason: "Pokeam a Jinx além do alcance da Q foguete e drenam HP a cada wave. Sem escape e sem sustain, ela não consegue ficar na lane tempo suficiente para alcançar os spikes."
---

## Visão geral

Jinx é a marksman hypercarry de manual: fraca nos primeiros dez minutos, aterrorizante com dois itens completos e capaz de fechar a partida com um único reset de uma kill em teamfight. A **Switcheroo! (Q)** dela permite alternar entre uma minigun single-target (que acumula attack speed) e um lança-foguetes AOE (mais alcance, dano físico em área, custa mana), então ela cobre tanto DPS limpo na backline inimiga quanto waveclear e pressão na front line com a mesma habilidade. A passiva **Get Excited! (P)** transforma cada kill, assist ou estrutura destruída em uma janela enorme de move speed e attack speed: é o motor que permite a uma Jinx adiantada andar pra dentro de um teamfight e encadear três kills antes do buff cair.

O plano de jogo é simples de descrever e duro de executar: sobreviva a lane contra a agressão early, alcance o primeiro item de crit (Statikk Shiv) e depois jogue como backline carry — fique na segunda posição mais atrás, kite (ande pra trás enquanto ataca para manter distância) com a Q foguete, jogue **Flame Chompers (E)** debaixo dos próprios pés quando um diver pousa em você, e snipe runners de baixo HP com a **R** atravessando o mapa. O nível técnico aparece nos swaps de forma da **Q** em mid-fight (minigun no tank do engage, foguetes na backline agrupada) e nos snipes de **R** que transformam erros de posicionamento do inimigo em kills antes deles chegarem na própria backline.

## Build recomendada

**Itens iniciais:** Doran's Blade + 2 Health Potions. Pule o segundo Doran's mesmo que você esteja ganhando lane — o gold rende muito mais numa componente Sheen para Statikk Shiv.

**Itens core (na ordem):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — primeiro item de rush. O passivo Energized proca na Q foguete para waveclear instantâneo, e a combinação de attack speed e crit chance leva a forma foguete a virar uma ferramenta real de teamfight por volta do minuto 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed. Mercury's Treads só se o time inimigo tiver 3+ ameaças de hard CC.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — seu maior spike de dano. O dano de crit dobra puro cada hit AOE da Q foguete na backline; é o item que vira a Jinx de "incômoda" para "deleta o ADC inimigo".
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — item de hypercarry para teamfight. Os bolts do Runaan's também disparam foguetes quando a Jinx está em forma Fishbones, então você acerta três alvos de uma vez com scaling completo de crit + attack speed.

**Itens situacionais:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra front lines tanky ou comps que empilham HP (Sion, Cho'Gath, Dr. Mundo). Substitui Runaan's se o time inimigo tem 3+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps de muita cura (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (debuff que corta a cura) no momento que um foguete encosta.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra pressão de assassins ou divers (Zed, Samira, Yasuo flank). O passivo de baixa HP (um escudo que ativa quando você cai pra pouca vida) mais o move speed dão o meio segundo que você precisa para jogar a **E** debaixo dos pés.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra comps de muito poke ou lanes em stalemate. Lifesteal mais overheal shield te dão o sustain para ficar na lane tempo suficiente para alcançar os spikes.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é o padrão. Mercury's Treads só contra CC AP pesado tipo Brand ou Zyra support.

**Skill order:** Maxe **Q** primeiro (DPS e scaling do foguete), **W** segundo (cooldown do Zap! para poke e self-peel slow), **E** por último (a duração do root é fixa; só o dano escala). Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Precision** com **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Sorcery** com **Manaflow Band** (sustenta o custo de mana da Q foguete) e **Gathering Storm** para scaling de late-game. Stat shards: Attack Speed / Adaptive Force / Health.

## Matchups principais

- **Draven:** Pesadamente desfavorável para Jinx nos níveis 1-6. A Spinning Axe dele out-trada em todos os passos. Não brigue pre-3; freeze a wave perto da torre, alcance o nível 6 com Zap! up, e procure dives do jungler só quando ele se sobrestender. Quando você tem Statikk Shiv, o matchup vira: evite a janela de all-in dele e farme seguro até lá.
- **Caitlyn:** Desfavorável. Ela out-ranges a sua minigun e bulia a lane com Q + setups de armadilha. Fique atrás dos minions, dodge de lado da linha do Q dela, e nunca pise nos arbustos onde ela ficou parada (provavelmente armadilhas). Sobreviva até dois itens — o scaling de teamfight dela cai forte contra a sua Q foguete AOE.
- **Lucian:** Desfavorável, especialmente com um Nami support. Respeite o all-in dele no nível 3 (passivo double-shot + dash de Q + speed-up de W). Segure o **E** como self-peel contra o dash dele; nunca jogue como poke. Chegue em ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** sem morrer, depois a lane estabiliza.
- **Aphelios:** Empatado, leve favorável para Jinx depois de dois itens. Rastreie a rotação de armas dele; quando ele está em Severum (vermelha, lifesteal) ou Calibrum (verde, marker de alcance) você pode pokear com a Q foguete da segurança da minigun. Evite trade quando Infernum (laranja, AOE) está carregada — é a janela foguete-vs-foguete dele e ele ganha.
- **Samira:** Ela quer um all-in melee assim que tiver W. Segure ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** como terceiro item planejado se ela está snowballando, jogue o **E** no momento que ela dasha (não queime no poke), e nunca brigue com **Flash** em cooldown.

## Power spikes e condições de vitória

- **Nível 6:** O primeiro **Super Mega Death Rocket!** desbloqueia pressão de pickoff. Um inimigo de baixo HP voltando bot-pra-base é R execute grátis quando você respeita o scaling de HP faltando. Não desperdice como poke — espere runners abaixo de 30% HP.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completo (~ minuto 10-12):** Primeiro spike real. A Q foguete agora limpa a wave em um cast e o Energized proca em cada stack de minigun, abrindo participação em skirmishes em torno do Drake.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 20-24):** O breakpoint de hypercarry. Os crits da Q foguete começam a one-shotar alvos de backline, e qualquer pickoff ou kill triggera **Get Excited!** para uma rotação grátis para o próximo fight.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane online (~ minuto 28-32):** Q foguete em três alvos com crit. Essa é a fantasia de late-game: fique atrás da front line, atire no aglomerado inimigo, e veja o fight se cancelar em 4 segundos.

## Erros comuns

- **Spammar Q foguete na lane.** A forma foguete drena mana rápido e a forma minigun mantém seus stacks de attack speed altos. Use foguetes só pra last-hit cleanup em grupos de três minions ou pra pokear (vantagem de alcance); volte pra minigun no momento que a janela de trade fecha.
- **Segurar R pra "o snipe perfeito".** **Super Mega Death Rocket!** escala com HP faltando, não com HP máximo. Uma R segura a 60% num inimigo a 25% HP é kill garantida; esperar o tiro perfeito atravessando o mapa muitas vezes significa que o alvo recupera HP na base antes de você atirar.
- **Ficar em alcance máximo de AA em teamfights.** Jinx não tem dash. Alcance máximo de AA te coloca fora do peel do time (proteção: CC e shields do support). Fique na segunda posição mais atrás para que um assassino em flank não te delete antes do time reagir.
- **Queimar E para engage.** **Flame Chompers!** é seu único self-peel. Em cooldown você é uma glass cannon (campeão de muito dano e poucas defesas, como a maioria dos ADCs) sem resposta a um diver. Jogue debaixo dos pés quando um Zed ou uma Samira pousa em você, nunca como setup de poke.
- **Caçar kills fora da janela de Get Excited!** A passiva dura só alguns segundos. Se o buff cair enquanto você está fundo em território inimigo, você tem move speed base e zero escape. Quando o boost acaba, recue — o próximo fight volta pra você mais rápido do que você pensa.

## Dica avançada

Treine o **swap de forma da Q em mid-AA** para manter os dois mundos ativos. O truque: acumule 3 stacks de attack speed em minigun numa wave, troque para foguetes pouco antes de uma Q foguete dar last-hit em dois minions, atire um foguete, e troque de volta pra minigun no mesmo frame para manter o buff de attack speed ativo. Em teamfight isso vira: stackar attack speed com a minigun no tank de front line, trocar pra foguetes no momento que o time committa o engage, e despejar 3-4 foguetes na backline inimiga com crit + Runaan's e attack speed já carregada. Bem feito, isso adiciona uns 40% de DPS extra nos primeiros três segundos do fight, que é exatamente a janela onde os carries vivem ou morrem.
