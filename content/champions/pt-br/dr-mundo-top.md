---
title: "Dr. Mundo Top Build & Guia — Patch 16.9"
slug: "dr-mundo-top"
language: "pt-br"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Guia Dr. Mundo top para League of Legends Patch 16.9: build juggernaut HP-stacking com Heartsteel, sobrevivência na lane, matchups-chave, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "O primeiro hard CC (um stun, root ou knockup que te imobiliza) custa só HP a Mundo e dropa um frasco; pegue para curar e resetar a passiva. Também concede regen de HP altíssima."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot linear de longo alcance: dano mágico em porcentagem dos HP atuais do alvo mais slow. Custa HP, não mana — sua barra de recurso é a barra de vida. Ferramenta principal de poke e waveclear."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel próprio que tica dano mágico em inimigos próximos e armazena parte do dano que você sofre. Recast (ou fim do channel) solta um burst: se atinge um campeão, você cura uma porcentagem do dano armazenado."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passiva: AD bônus que escala com HP máximos. Ativa: golpe melee que causa dano extra baseado nos seus HP faltando. Se mata, arremessa o corpo e atinge inimigos no caminho."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: cura instantânea de uma porcentagem do HP faltando, depois Move Speed bônus e regen de HP enorme pela duração. Aperte antes de fights e antes de morrer, não depois."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dos Plated Steelcaps contra 3+ fontes de CC ou 2+ ameaças AP; tenacity reduz duração de stuns"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries auto-attack (Vayne, Tryndamere, Master Yi); reflete dano e aplica Grievous Wounds (-50% cura)"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra comps com poke AP pesado e 2+ mages ranged (Brand + Karthus, Ziggs + Xerath); MR + Move Speed contra magic damage"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra AP wave-clearers agrupados (Karthus, Brand, Anivia); a aura de magic burn pune quem luta perto de você"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contra burst AP single-target (Syndra, Veigar, LeBlanc); o spellshield bloqueia o opener da combo"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Sobreviva à lane com poke de Q e sustain de W, alcance Heartsteel e Warmog's, depois caminhe na back line inimiga com regen máxima e se recuse a morrer tempo suficiente para o time fazer clean up."
  weakness: "Sem hard CC e sem dash. Tops ranged kitam a Q de fora dos 975 de alcance; itens de healing-cut cortam o heal da W e a regen do R, transformando o tank em um minion lento."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve: Grasp dá HP grátis a cada 4s em lane combat e escala com a pilha de HP de Mundo. Bone Plating absorve burst de bruisers, Conditioning soma Armor e MR após o minuto 12, Overgrowth converte minions farmados em HP permanente."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak dá um burst de Move Speed após Flash ou Ghost (seus Summoners de engage), e Gathering Storm soma Adaptive a cada 10 minutos — exatamente o scaling tardio que a win condition de Mundo precisa."
    secondary_alternative: "Contra lane bullies early (Darius, Riven), troque Sorcery por Inspiration com Biscuit Delivery (Health Potions grátis a cada 2 min pré-12) e Cosmic Insight (cooldowns de Summoners reduzidos), trocando scaling por sobrevivência pura."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Bruisers melee sem poke ranged"
      reason: "A Q de Mundo é um slow de 975 de alcance que custa HP, não mana, então ele consegue chipar cada wave de fora do alcance de auto-attack deles. Eles precisam andar até ele para causar dano, e a aura W mais o healing de Spirit Visage vencem qualquer trade estendido."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Assassinos com uma única burst window"
      reason: "Todo o perfil de dano deles é uma combo. A passiva de Mundo come o primeiro hard CC, a R cura uma porcentagem do HP faltando instantaneamente, e a W reembolsa parte do dano sofrido durante o burst — eles queimam cooldowns e Mundo sai quase full HP."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-attackers melee que precisam grudar"
      reason: "O slow da Q mais Plated Steelcaps mutila o attack uptime deles. A R de Tryndamere o cura por uma rotation, mas um Mundo com R e Thornmail aguenta a janela de imortalidade e o chunka com o dano refletido."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Tops ranged com percent-HP ou blind"
      reason: "A W de Vayne (true damage a cada terceiro auto, ignora todas as defensivas) e a Q de Teemo (um blind que cancela seus auto-attacks) ignoram a pilha de HP inteira. Quinn com o alcance dela mais o blind passivo mantém Mundo permanentemente fora do alcance da Q."
    - examples: ["fiora"]
      archetype: "Duelistas de true damage"
      reason: "Os Vitals de Fiora causam true damage (dano que ignora armor e magic resist — não há defensiva que reduza). Stackar HP não serve de nada contra true damage; ela o destroça num único duelo mesmo full build."
    - examples: ["trundle"]
      archetype: "Anti-tanks que roubam stats"
      reason: "A R de Trundle rouba Armor, MR e Move Speed de Mundo por 8 segundos. O true damage da passiva de E (baseado no bonus AD por HP) some e a única escape (o speed boost da R) também é roubada. Todo o perfil tank é neutralizado."
---

## Visão geral

Dr. Mundo é um **juggernaut tank** (um campeão melee lento, imóvel, que bate forte assim que pega alguns itens, com HP e regen de HP gigantescos). A identidade dele se apoia em três pontos: stackar HP via **Heartsteel** (cada campeão atingido em auto-attack acumula HP permanente no item), regen de HP da **R** mais o healing-amp de Spirit Visage, e apertar **Q** a cada cooldown para chipar o inimigo de 975 de alcance. A **passiva** é a mecânica mais importante de entender: o primeiro hard CC (um stun, root ou knockup que te imobiliza, te impedindo de mover ou agir) que o inimigo aplica é reduzido — custa HP em vez de te lockar, e você dropa um frasco que dá para pegar e curar. Ou seja: um Sett ou um Malphite têm exatamente uma chance de te lockar, e depois disso você caminha pelo time deles pelos próximos 8-10 segundos.

O game plan é "não morra, nunca". Na lane, **freezeie a wave** (deixe parada logo fora da sua torre para o laner inimigo ter que andar longe da dele para last-hittar) e farme com Q em alcance máximo. A partir do minuto 14, **Heartsteel** mais **Warmog's Armor** ultrapassam o limiar onde você tem tanto HP e regen que o time inimigo precisa de itens de healing-cut só para te machucar. Daí em diante, todo fight começa com você caminhando devagar, comendo o primeiro stun, apertando R e plantando-se na back line (os carries squishy que causam dano de trás dos tanks do próprio time) até o carry morrer. Isso é "absorver engage": quando o inimigo committa pulando com um stun ou um dash, seu trabalho é ser quem leva o stun.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A passiva de regen de HP do Doran's Shield amortece o poke inimigo (dano ranged barato que chipa HP sem committar a um fight) e é a escolha certa em quase todo matchup de Mundo, melees inclusos — o game plan é "fique vivo, farme, escale", não "vença o nível 1".

**Core items (em ordem):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — seu item identidade. Cada auto-attack em um campeão carrega Heartsteel; no proc você causa dano bônus enorme e o item ganha HP permanente acumulável. Não há teto na pilha de HP, motivo pelo qual o Mundo top one-shota squishies no minuto 35 com uma única E. Compre toda partida, primeiro item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots padrão quando a fonte principal de dano inimiga é auto-attack. Reduz esse dano durante fights estendidos.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — desbloqueia a passiva "out-of-combat heal a full em 4 segundos" assim que você cruza o limiar de HP (em torno de 3000 HP bônus, alcançado por Heartsteel + componentes de Warmog's). É o breakpoint onde skirmishes em side lane (pequenos fights de 1-3 jogadores) se curam completamente entre uma wave e outra.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist mais uma passiva de healing-amp que potencia o burst-heal da **W**, a regen da **R**, heals de aliados como Soraka ou Yuumi e os ticks do Doran's Shield. Compre como quarto item contra qualquer time com pelo menos uma ameaça AP.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — seu primeiro auto-attack em qualquer campeão num fight crita e te cura um pedaço de HP. Combina perfeitamente com a janela lifeline criada pela passiva e te dá um pequeno spike de burst para ameaçar kills, não só sobrevivência.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troque dos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem 3+ fontes de CC ou 2+ campeões AP. Tenacity (estatística que reduz a duração de stuns e slows em você) é a única defensiva que importa depois que a imunidade-ao-primeiro-CC da passiva for consumida.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries auto-attack (Vayne, Tryndamere, Master Yi). Reflete dano e aplica **Grievous Wounds** (debuff que corta o healing do alvo pela metade) on hit, a única forma de impedir um Tryndamere ou uma Vayne fed de curarem o que tomam da sua aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra comps de poke AP pesado (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Stacka magic resist conforme você toma magic damage e dá Move Speed, ambos coisas que Mundo quer.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra AP wave-clearers agrupados (Karthus, Brand, Anivia). A aura de magic burn tica dano em quem luta perto e dá MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contra burst AP single-target (Syndra, Veigar, LeBlanc). O spellshield (barreira de uso único que bloqueia a próxima ability dirigida a você) anula o opener da combo deles e reseta após alguns segundos out of combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra cadeias de CC pesadas ou composições AP-heavy.

**Skill order:** Maxe **Q** primeiro (alcance, slow e dano percent-current-HP escalam por rank — é sua única ferramenta ranged). Maxe **E** segundo (o ativo missing-HP escala forte com bonus AD, e os stacks do Heartsteel o alimentam). Maxe **W** por último; um ponto cedo basta para o heal-on-recast e o dano em aura. Suba **R** nos níveis 6, 11 e 16.

**Runes:** Primary **Resolve** com **Grasp of the Undying** — a cada 4 segundos em lane combat, seu próximo auto-attack em um campeão causa dano mágico bônus, te cura e te dá HP permanente. Combine com **Bone Plating** (redução de dano nos próximos 3 hits depois de tomar dano), **Conditioning** (Armor e MR extra após o minuto 12) e **Overgrowth** (HP escalando com a morte de minions próximos — perfeito para um farmer de lane). Secondary **Sorcery** com **Nimbus Cloak** (burst de Move Speed após Flash ou Ghost, ambos Summoners comuns em Mundo) e **Gathering Storm** (Adaptive escalando a cada 10 minutos). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling** — HP extra em todo lugar, porque toda defensiva em Mundo se traduz em mais HP efetivo no mesmo stack de Heartsteel.

## Matchups principais

- **Darius:** Matchup early difícil. O sangramento Hemorrhage (stack damage-over-time que cresce quanto mais ele te acerta) tica através da sua regen de HP e o pull dele cancela o wind-up da sua Q. **Freezeie a wave** perto da sua torre, pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** e aceite perder CS — assim que tiver ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** mais componentes de Warmog's, você o out-scala a cada minuto após o 14.
- **Sett:** Matchup favorável. Guarde a **passiva** para a W dele (o terceiro auto-attack stuna) — você come por HP e se afasta. Trade com Q de 975 de alcance; ele não tem resposta a poke de longa distância e o self-heal não acompanha o chip da sua Q.
- **Vayne / Teemo:** A lane mais difícil possível. Eles ficam fora do alcance da Q e usam **true damage** (dano que ignora tanto armor quanto magic resist — não há defensiva que reduza) ou um blind que cancela seus auto-attacks. Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freezeie sob torre, e chame seu jungler no segundo em que eles overextenderem (pushar passando o river sem vision). Compre ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush em vez de Spirit Visage se Vayne snowballar.
- **Fiora:** O matchup melee mais difícil. A **W** dela é um parry (escudo breve que bloqueia e revida a próxima ability — baite com um auto-attack antes de committar Q ou E). Os Vitals dela causam true damage, então stackar HP não serve de nada aqui. Rushe ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** mais componentes de ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** e jogue para gank do jungler.
- **Mordekaiser:** Skill matchup. A R dele te isola num realm 1v1 por 7 segundos sem escape. Se ele te ulta antes da passiva ter ativado, você fica stuck e morre. Se você tem **R** up e passiva up, sobrevive — a janela de 7s do realm corresponde grosso modo à duração de uma R. Guarde **Flash** para se reposicionar fora da Q grab dele durante o realm.

## Power spikes e condições de vitória

- **Nível 6:** Primeira **Maximum Dosage**. Mesmo no nível 6 sem itens, o heal instantâneo da R mais o Move Speed transformam um trade perdedor em uma sobrevivência ou kill. Procure um **all-in** (commit total à kill, sem fallback) no momento em que seu jungler aparecer top side e o laner inimigo estiver abaixo de 60% HP.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel completo (~ minuto 13-15):** O primeiro spike real. Cada proc bem-sucedido em um campeão na lane te dá HP permanente que nunca some, mesmo se você morrer. Pushe a wave assim que Heartsteel estiver online e trade autos através dos minions inimigos para bankar stacks.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + stacks de Heartsteel (~ minuto 18-22):** O breakpoint onde Mundo se torna unkillable em side lane. A regen out-of-combat ativa no novo limiar de HP; você pode pegar um fight a 50% HP, andar até a próxima wave e chegar full HP.
- **3-item spike com ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ minuto 24-28):** Pico de teamfight. O healing-amp potencia cada tick de regen — a R passa de "decente" para "não consigo trazer esse cara para abaixo da metade do HP". Force todo Drake e Baron aqui; o time precisa de você caminhando primeiro para absorver o engage.

## Erros comuns

- **Apertar R depois de tomar dano.** O heal instantâneo da R é uma porcentagem dos HP *faltando*, mas a regen-over-time é desperdiçada se você triggar a 90% HP. Use R **antes** de committar a um fight, não depois — você quer entrar no fight com a regen já tickando, para que a janela de burst esteja bufferada, não remendada depois.
- **Q-ear full HP num inimigo saudável.** A Q custa HP e causa dano percent-current-HP. Jogar nela num inimigo a 100% HP enquanto você está a 100% HP só troca seu HP por um chip pequeno — você perde o trade. Use Q depois que um melee inimigo perdeu HP por aggro de minions ou após um CC aliado abrir um all-in.
- **Pegar o frasco da passiva tarde demais.** O frasco químico (a ampola verde que dropa quando a passiva proca) fica no chão alguns segundos antes de sumir. Se você deixar expirar, desperdiçou a passiva inteira — sem heal, sem refund de cooldown. Ande por cima no segundo em que dropa, mesmo no meio do fight.
- **Buildar full tank sem Spirit Visage.** Cada defensiva em Mundo se compõe com healing-amp. Sem Spirit Visage, R cura menos, W cura menos, Soraka aliada cura menos. Um Mundo full-tank sem healing-amp é um minion lento; com Spirit Visage, os mesmos itens estendem seu HP efetivo muito mais longe.
- **Ficar com W toggleada out of combat.** **Heart Zapper** drena HP a cada segundo durante o channel. Se você ativa para o clear e esquece, chega no fight já a 70% HP. Recaste antes do channel acabar, toda vez.

## Dica avançada

Pratique o **passive bait** em skirmishes de side lane (fights 1v1 acontecendo na top ou bot enquanto o resto do mapa luta em outro lugar). Quando o diver inimigo só tem uma habilidade de hard CC up — digamos a W stun de Sett ou o stun de Renekton — caminhe na lane dele visivelmente low HP. Ele queima o CC para committar, sua passiva come de graça, e você manda R-Q-E-AA nele sob seus próprios minions enquanto ele não tem mais nada. O truque é *visivelmente* low HP: fique a descoberto a 35-40%, leve alguns autos para confirmar que o inimigo está committando, e então parta para o trade. Um Mundo com passiva e R off cooldown e 50%+ HP atrás das linhas inimigas é uma das ameaças 1v1 mais fortes do jogo; o bait é o que cria o cenário.
