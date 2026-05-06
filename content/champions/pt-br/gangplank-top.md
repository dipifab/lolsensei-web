---
title: "Gangplank Top Build & Guia — Patch 16.9"
slug: "gangplank-top"
language: "pt-br"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Guia de Gangplank top lane para League of Legends Patch 16.9: starter kit, build crit com Trinity Force, matchups principais, power spikes, erros e uma dica avançada de barris encadeados."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Auto-attack potencializada periódica que queima o alvo em true damage por alguns segundos. Força uma janela em melee — controle o timer dela para antecipar o all-in do GP."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Tiro a 625 de alcance que causa dano físico, aplica on-hit (crit, Sheen da Trinity Force) e dá ouro no kill. Principal poke e detonador de barril."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Cleansa todo CC e cura com base nos HP faltantes. Cooldown longo e custo de mana alto — guarde para o CC decisivo, não para um slow menor."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Coloca um barril; ataque para detonar, causando dano físico AOE e slow. Dois barris adjacentes se encadeiam — um combo com 3 barris encadeados é o pico de win-condition."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Ulti global: mire em qualquer ponto do mapa para balas de canhão que aplicam slow e dano mágico. Melhorável na loja com plunder (ouro bônus que a Q dá ao matar unidades)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que empilham cura (Aatrox, Soraka, Vladimir, Dr. Mundo) — grievous wounds corta a cura inimiga"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra tanques que empilham HP (Cho'Gath, Sion, Ornn) — armor pen escala com a vantagem de HP do alvo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Kennen R, Vladimir, Rumble) — escudo mágico em HP baixo te salva do golpe final"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contra all-in burst (Camille, Wukong R, engage do Malphite) — escudo HP dispara no golpe one-shot"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Sobreviva à lane até a Trinity Force, depois encadeie 3 barris em teamfights. Uma Q crit numa rede de 3 barris no carry inimigo fecha o fight antes de começar."
  weakness: "Sem dash e sem mobilidade nativa. Counterado por champions com ferramentas anti-auto-attack (parry da Fiora, E do Jax) e engage hard-CC point-and-click que você não consegue cleansar a tempo."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primária: Grasp dá sustain nos trades melee de Trial by Fire e empilha HP permanente — o pattern que Gangplank quer enquanto escala. Demolish pune torres em roams inimigos, Conditioning carrega o late-game, Overgrowth engorda o pool de HP que a Trinity Force aproveita."
    secondary_rationale: "Precision secundária: Triumph devolve HP e ouro em takedowns quando você flanca teamfights com R — Gangplank costuma divear a backline, e o heal salva o follow-up. Legend: Alacrity sobe attack speed para detonar barris mais rápido e melhorar a cadência on-hit da Q."
    secondary_alternative: "Contra matchups ranged poke (Teemo, Quinn, Vayne top) troque Precision por Inspiration com Biscuit Delivery (HP e mana sustain que você não tem) e Cosmic Insight (Flash e Teleport mais frequentes)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Scalers late-game imóveis"
      reason: "A Q do Gangplank chega a 625 unidades, muito além do alcance de farm em auto-attack deles. Sem dash para fechar a distância e punir um barril encadeado; você escala mais rápido assim que a Trinity Force fica online."
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers melee sem disengage"
      reason: "Fique fora do threat radius deles usando o alcance da Q e os deixe lentos com as zonas de Powder Keg. Quando finalmente fecham, não têm follow-up para te manter em melee — você reseta o trade e sai andando."
    - examples: ["urgot", "kled"]
      archetype: "Fighters de janela early forte que caem depois"
      reason: "Farme no alcance da Q nos níveis 1-3, guarde W para o ulti deles no nível 6 e outscale após Trinity Force. Eles não têm resposta late-game para um combo de barris encadeados em teamfight."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Fighters móveis que bloqueiam auto-attacks"
      reason: "O W parry da Fiora atordoa o Gangplank e reflete o CC; o E do Jax esquiva todo auto e Q por dois segundos. Ambos quebram o pattern de trade que Gangplank precisa para escalar para o late game."
    - examples: ["renekton", "olaf"]
      archetype: "Bullies early-window de all-in"
      reason: "Stun do Renekton no nível 2 e ulti no nível 6 cancelam o plano de scaling do Gangplank antes da Trinity Force. A R do Olaf dá CC immunity, então o W cleanse não impede ele de te perseguir com machados em true damage."
    - examples: ["malphite", "kennen"]
      archetype: "Engage hard-CC point-and-click"
      reason: "A R do Malphite é point-and-click sem skillshot para esquivar. O stun do W do Kennen e a R AOE encadeiam CC além da janela de cleanse do W do Gangplank — uma vez iniciada a corrente, o W não chega a tempo."
---

## Visão geral

Gangplank é um top laner que escala para o late game pagando um pedágio pesado no early em troca de um dos maiores tetos de dano crit da rota. O kit dele parece carregado mas se reduz a duas ideias. **Parrrley (Q)** é uma auto-attack a distância com 625 de alcance que aplica os efeitos on-hit (chance de crit, proc de Sheen da Trinity Force, burn em true damage) e os entrega à distância. **Powder Keg (E)** é um barril que ele coloca e ataca para detonar; dois barris adjacentes se encadeiam, e três barris encadeiam outra vez. O pattern signature é empilhar 3 barris encadeados e estourá-los com a Q num time inimigo agrupado para um burst instantâneo — dano alto entregue em um segundo.

O plano de jogo exige paciência. Farme com segurança no alcance da Q durante a janela de bully dos níveis 1-6, finalize a Trinity Force por volta do minuto 14-16 e comece a pressionar as side lanes com **Cannon Barrage (R)** para virar dragões ou roubar torres do outro lado do mapa. Em teamfights, posicione os barris atrás da sua front line (os tanques e bruisers à frente do seu time) e só ande para dentro da corrente quando puder detoná-la sobre a backline inimiga (o carry que fica atrás do time deles e dá dano à distância). Se você sobreviver à lane e chegar a 3 itens, todo fight em que conectar uma Q crit em barril encadeado é unilateral.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** contra bruisers melee — você quer o lifesteal (dano de auto-attack que te cura) para os trades (escaramuças curtas em que você troca algumas habilidades e sai). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion contra matchups ranged (Teemo, Quinn, Gnar) — a regeneração permite farmar sob poke (dano de longo alcance que vai descontando HP sem se comprometer com um fight).

**Itens core (em ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (um bônus passivo que potencializa a próxima auto-attack após uma habilidade) procca em toda Q para um boost massivo de dano. Attack speed, ability haste (a stat que reduz o cooldown de habilidades), HP — toda a stat-line é o pico de win-condition do Gangplank.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed para detonar barris mais rápido e melhorar a cadência on-hit da Q.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — primeiro item crit; devolve mana por Q. Resolve o problema de mana do Gangplank e inicia o scaling de crit.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — o pico de dano crit. Q crit e detonações de barril agora one-shotam alvos squishy (champions com pouca defesa, como ADCs e mages burst).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal para sustain em teamfights longos, mais um escudo HP de overflow quando você fica com a vida cheia.

**Itens situacionais:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra composições que empilham cura (Aatrox, Soraka, Vladimir, Dr. Mundo); a passiva grievous wounds corta a cura inimiga, então seu dano permanece em vez de ser regenerado.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra tanques que empilham HP (Cho'Gath, Sion, Ornn). A armor pen escala com a vantagem de HP do alvo sobre você.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (Kennen R, Vladimir, Rumble); o escudo mágico dispara quando você cai de HP e te salva do golpe que fecha o kill.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — contra comps de all-in burst (Camille E + R, Wukong R, engage de R do Malphite); o escudo HP procca no instante do golpe one-shot, comprando o segundo que você precisa para cleansar com W e resetar.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** padrão. Troque para ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra times AD-heavy (3+ ameaças físicas) ou ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps AP com CC pesado, em que o W vai estar muitas vezes em cooldown.

**Skill order:** Maximize **Q** primeiro (o scaling por rank de Parrrley é sua principal fonte de dano), **E** em segundo (cooldown menor de barril = mais detonações encadeadas), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Árvore primária **Resolve** com **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Secundária **Precision** com **Triumph** e **Legend: Alacrity**, ou **Inspiration** com **Biscuit Delivery** e **Cosmic Insight** contra matchups ranged poke.

## Matchups principais

- **Darius:** Bully forte no early — Q cura, W aplica slow, R executa; ele pode te desligar dos níveis 1-6. Farme no alcance da Q, não conteste minions em melee e guarde **W** para o pull do E dele. Quando ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** ficar online você o outscala em 1v1; até lá, a lane é um exercício de sobrevivência.
- **Sion:** Lane de farm grátis. Ele empilha cadáveres e HP, você empilha barris e crit. Empurre ele pra torre com barris E e negue minions canhão para a passiva dele. Evite a Q point-and-click carregada e você o outscala todo jogo.
- **Fiora:** Pior matchup de lane. O **W** dela é um parry — uma janela curta em que ela absorve sua próxima auto-attack ou habilidade, te atordoa e reflete todo CC. Até um slow de barril pode voltar contra você. Nunca jogue **Q** no vital point dela (o ponto colorido no corpo que ela precisa atingir para a passiva) — ela ripostes (contra-ataque) no instante em que seu projétil chega. Farme sob torre, peça ajuda do jungler e aceite o déficit de CS; você não consegue 1v1 contra ela até ter 3 itens e ela estar atrás.
- **Camille:** Matchup de dive no nível 6 (dive é quando um inimigo entra sob a sua torre, leva alguns tiros e tenta te matar mesmo assim). Ela te prende dentro da gaiola da ulti dela. O **E** stun ignora o slow do barril e o **R** te isola. Compre ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** mais cedo que o normal (4° item) e guarde Flash para a gaiola do R, não para os trades de poke.
- **Malphite:** Hard counterpick — o R point-and-click dele não tem tell de skillshot e seu **W** não consegue cleansar se ele cair enquanto você está em mid-cast. Mantenha ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** como build-path de emergência e nunca aceite teamfights sem visão sobre o ângulo de engage dele.

## Power spikes e condições de vitória

- **Nível 6:** O primeiro **Cannon Barrage** desbloqueia pressão global. Você pode virar um fight de dragão com R desde a base, finalizar um inimigo fugindo na mid lane com a zona de slow ou zonear a bot lane fora de um objetivo — tudo sem largar sua wave.
- **Nível 9 (Q maxada):** Parrrley alcança o scaling completo por rank. O custo de mana cai para 30 e o dano salta; você consegue pokar qualquer matchup que não tenha parry ou dodge e trocar Q por Q ao seu favor.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 14-16):** O maior pico. Sheen procca a cada 1.5 segundos na Q, attack speed corta o tempo de detonação do barril pela metade e seu pool de HP finalmente te deixa sobreviver a uma tentativa de one-shot. É quando a lane vira de defensiva para agressiva — você consegue forçar trades que antes precisava evitar.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** Q crit num cluster de 3 barris encadeados apaga qualquer squishy em um segundo. Force fights de objetivo aqui e fique na borda da frontline do seu time para a corrente de barris cair nos carries inimigos.

## Erros comuns

- **Gastar W como cleanse de pânico no primeiro CC.** Guarde **Remove Scurvy** para a habilidade que decide o trade — E da Camille, stun W do Renekton, stun W do Sett. Queimá-la num polymorph da Lulu ou num slow menor te deixa indefeso contra a ameaça real.
- **Empilhar barris antes da Q rank 3.** Abaixo do rank 3 o cooldown do barril é longo demais para o timing de corrente, então o segundo barril costuma expirar antes do terceiro estar pronto. Farme com barris isolados até o nível 5, depois comece a treinar correntes.
- **Usar R de forma egoísta sem coordenar com o time.** Cannon Barrage é uma ferramenta global de engage — uma habilidade que inicia um teamfight do outro lado do mapa; se você dropa numa caça 1v1 de poke, seu time perde o fight 4v5 em casa. Sempre pingue a intenção, sincronize com a smite do jungler e cheque o minimapa antes de lançar.
- **Comprar itens defensivos antes do scaling crit.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** parece seguro, mas se você construir antes de ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** e ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** abre mão do pico de dano que justifica pickar Gangplank. Confie no W cleanse e no pool de HP da Trinity Force para atravessar o mid-game.
- **Esquecer de upgradar R com plunder.** Cada Q que mata uma unidade dá ouro; gaste na loja para melhorar Cannon Barrage (mais dano, duração maior, zona de cura). Uma R sem upgrade no minuto 30 é uma perda de dano de cerca de 30% sobre a mesma ulti.

## Dica avançada

Treine o **barrel-jump combo**: coloque o barril A, imediatamente coloque o barril B na distância máxima de corrente (logo dentro do raio de link) e dê auto-attack no barril A. A detonação encadeada inicia o barril B; enquanto B está no meio da corrente, coloque o barril C ao lado de B. Com a attack speed da ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** e a Q no rank 5, você consegue manter um pattern de detonação contínua a cada 3-4 segundos, criando uma zona AOE rolante em torno da qual o time inimigo é obrigado a desviar. É a diferença entre um Gangplank que apaga a backline e um Gangplank que poka sem efeito do canto do fight.
