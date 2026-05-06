---
title: "K'Sante Top Build & Guia — Patch 16.9"
slug: "k-sante-top"
language: "pt-br"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "Guia completo do K'Sante top no Patch 16.9: starter kit, build tank-skirmisher, matchups principais, power spikes, erros comuns e uma dica avançada de fechamento."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "As habilidades marcam o alvo. O próximo basic attack do K'Sante causa dano bônus. Em forma All Out, todos os ataques e habilidades causam dano extra."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "Golpe linear curto que causa dano e aplica slow. Cada hit dá um stack: com 2 stacks o próximo cast é uma shockwave que puxa e atordoa. CD baixo, ferramenta de trade spammável."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "Carrega (unstoppable + redução de dano forte) e depois dasha pra frente, com knockback e stun nos inimigos atingidos. Em All Out causa true damage bônus mas perde knockback e stun."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "Dash curto + escudo próprio. Mirado num aliado, o alcance do dash aumenta e o aliado também recebe escudo. Em All Out o CD reduz e a velocidade do dash aumenta."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "Empurra um campeão inimigo: se ele bater num muro toma dano extra. K'Sante dasha atrás dele e se transforma — ganha attack speed, armor pen e omnivamp, mas perde max HP e resistências bônus."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra AD que ataca e cura (Aatrox, Trundle, Nilah, Yi) — aplica grievous wounds (40% de cura reduzida) no atacante"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra burst AP top/jungle (Mordekaiser, Vladimir, Diana) — magic resist + 25% bônus em curas/escudos"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contra carries de attack speed alta (Vayne, Kog'Maw, Yi) — aura -20% AS destrói o DPS deles"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dos Plated Steelcaps quando o time inimigo tem 2+ ameaças de CC pesado ou um AP top — magic resist + tenacity"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "Seja a front line nos teamfights: carregue W para interromper engages, guarde R para um carry chave e slammeie ele contra um muro pra longe do time. Em All Out, feche os backline com burst de AS + armor pen."
  weakness: "Alcance curto (W tem 600, sem gap-closer real além do E). Kiters ranged pokeiam ele pra fora da lane. R All Out é um commitment longo: perder o fight transformado deixa ele sem win condition por 80-120s."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primária: Grasp of the Undying dá HP scaling de graça em cada proc, perfeito pra um tank que escala. Shield Bash transforma o escudo do E em dano bônus na próxima AA — sinergia direta com o proc da passive. Conditioning + Overgrowth travam a tankiness late."
    secondary_rationale: "Sorcery secundária: K'Sante é faminto por mana e ability haste. Manaflow Band sustenta o mana pra spammar Q na lane; Transcendence dá ability haste e devolve cooldown na takedown — fundamental pra encadear usos do R."
    secondary_alternative: "Contra matchups de poke pesado ou de scaling (Vayne, Teemo, Jayce), troque Sorcery → Inspiration com Biscuit Delivery (HP+mana biscuits de graça early) + Cosmic Insight (Flash e summoners com cooldown menor)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Bruisers melee imóveis sem dash"
      reason: "O W do K'Sante atordoa eles no meio da tentativa e o R com wall slam pune a falta de escape; o stun de 2 stacks do Q interrompe os wind-ups chave (pull do Darius, E spin do Garen) antes da spell terminar."
    - examples: ["renekton", "riven", "camille"]
      archetype: "Divers dependentes de combo com uma janela única de commit"
      reason: "O stun do Q e os 40%+ de damage reduction do W comem o all-in deles: depois de gastarem dashes e burst, K'Sante reverte com R e fecha em forma All Out."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "Top laners ranged que fazem kite"
      reason: "O W do K'Sante tem só 600 de alcance e o E só 525. Adversários ranged pokeiam ele com auto-attacks de fora do alcance do W e se afastam quando ele tenta carregar — deixando ele só com uma ulti de cooldown longo."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "Especialistas anti-tank"
      reason: "Os Vital Strikes da Fiora causam true damage que ignora escudos e resistências; o R do Olaf cleansa o stun do W e deixa ele unstoppable nos trades; o R do Trundle rouba as resistências bônus do K'Sante exatamente quando ele está mais vulnerável em forma All Out."
---

## Visão geral

O K'Sante é um híbrido tank-skirmisher: um bruiser pesado na forma base que vira um duelista skirmisher quando ativa a ulti **All Out**. Todo o kit é construído em torno de duas fases. Na forma base ele absorve dano com a redução do charge-up do **W (Path Maker)**, controla os fights com o stun do **Q (Ntofo Strikes)** e o knockback do **W**, e se escuda — ou escuda um aliado — com o **E (Footwork)**. Quando o **R** transforma ele, troca toda essa durabilidade por attack speed, armor penetration e omnivamp (lifesteal que funciona em qualquer tipo de dano) — virando um duelista damage-dealer por alguns segundos.

O plano de partida é jogar a early lane com paciência — short trades (trocas curtas de 1-2 habilidades, sem commitment de kill) com auto-attacks proccadas pelo **Q** (proc = um efeito que dispara quando uma condição é cumprida; aqui, a marca do **Q** que sua próxima AA detona) — e depois fazer snowball (acumular vantagem: kills → gold → itens → mais kills) empurrando a wave (a leva de minions) pra torre inimiga e procurando engages com o charge do **W** assim que tiver o sustain do Sundered Sky. No mid-game você vira a front line do time (o tank/bruiser que abre o fight absorvendo dano pros carries — os principais damage dealers do time — atirarem por trás). No late-game seu **R** é uma ferramenta de target removal: escolha um inimigo chave, slammeie ele contra um muro e finalize em forma All Out.

## Build recomendada

**Itens iniciais:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. O escudo dá sustain nos trades melee e uma pequena passiva de heal-on-low-HP que combina com o perfil tank do K'Sante.

**Itens core (na ordem):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — seu primeiro spike grande. A cada poucos segundos sua próxima auto-attack é um crit e te cura em ~10% dos HP perdidos. O proc casa perfeito com a marca da passive do **Q** (um debuff de dano bônus aplicado pelas habilidades e que a próxima AA detona).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + redução fixa nas auto-attacks inimigas. Botas padrão contra um top laner AD.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — adiciona uma aura que queima inimigos ao seu redor (AOE = dano em área, não em alvo único). Ajuda a clearear waves e taggear vários alvos em teamfight, fazendo o proc do **Q** acertar mais.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — seu item de scaling tank. Acumula armor e magic resist bônus ao longo do fight, mais um pequeno strike AOE de retorno. Teto de tankiness late-game.

**Itens situacionais:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra times com campeões AD auto-attack-heavy que se curam muito (Aatrox, Trundle, Nilah, Master Yi). Aplica grievous wounds (40% de cura reduzida) no inimigo quando ele te acerta.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra ameaças AP top ou jungle (Mordekaiser, Vladimir, Diana). Dá magic resist e 25% bônus em todas as curas/escudos que recebe — multiplica o heal do Sundered Sky e o omnivamp do **R**.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — contra carries de attack speed altíssima (Vayne, Kog'Maw, Master Yi). A aura corta 20% de attack speed dos inimigos próximos, anulando o DPS deles enquanto você come as AAs.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem 2+ campeões de crowd-control pesado (Leona, Lissandra, Maokai) ou um top laner AP. Dá magic resist + tenacity (recuperação mais rápida de stuns/slows).

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** padrão contra AD top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP ou CC pesado.

**Skill order:** Maximize **Q** primeiro (cooldown mais baixo, dano principal e stun de 2 stacks), **E** em segundo (mais escudo + cooldown mais rápido pra engage), **W** por último (o dano base escala menos por nível — o valor está na utility, não no dano por rank). Pontue o **R** nos níveis 6, 11, 16.

**Runas:** Árvore primária **Resolve** com **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. Secundária **Sorcery** com **Manaflow Band** + **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Matchups principais

- **Vayne / Teemo:** Pesadelos de poke ranged (poke = dano à distância pra raspar HP sem se comprometer com fight). Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, troque as runas secundárias pra Inspiration pra sustain do **Biscuit Delivery** (HP+mana biscuits de graça na lane), e não tente o W-charge — eles saem do alcance. Farme sob torre até o ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** estar online e chame um gank do jungler (gank = o jungler chega na sua lane por um caminho lateral pra surpreender o inimigo).
- **Darius:** Favorável. O stun de 2 stacks do Q (o segundo cast de Q, depois de acumular 2 stacks, puxa e atordoa) corta o pull dele, a damage reduction do W absorve o bleed (sangramento) do anel externo do Q dele (o Q do Darius bate mais forte na borda externa do círculo, e a passiva acumula sangramento a cada AA que ele acerta em você). Não lute dentro do ring externo do Q dele nos níveis 1-3; do nível 4 em diante você consegue short-tradear e sair andando.
- **Mordekaiser:** Equilibrado a levemente favorável. Seu **W** durante o charge-up te deixa unstoppable (imune a stuns, slows e outros CC), então pode usar dentro da **R** prison dele pra quebrar o efeito sobre você. Não queime **W** nele fora da prison — guarde.
- **Fiora:** Hard counter. Os Vital Strikes dela causam true damage (dano que ignora armor, magic resist e escudos). Seus escudos e resistências não fazem nada contra a fonte principal de dano dela. Jogue muito passivo, ceda CS (creep score = kills de minion) por segurança, e peça gank do jungler cedo.
- **Renekton:** Skill matchup (decidido mais por quem joga melhor do que pelo kit). O power spike dele nos níveis 2-3 é brutal (um power spike é um momento em que o campeão fica notavelmente mais forte, aqui pelo desbloqueio de habilidades chave) — não lute antes do nível 3. Quando você tem as três habilidades e ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** em construção, vira o matchup: o stun do Q interrompe a W dele (a spell de stun), e você vai all-in (um trade de full commitment até a kill, sem opção de recuar no meio do fight).

## Power spikes e condições de vitória

- **Nível 2 → Nível 3:** No nível 3 você tem Q + W + E e o stun de 2 stacks do Q online. Essa é a sua primeira janela de short-trade: abra com o charge do **W** pra assustá-los pra longe da wave, depois **Q** duas vezes pro stun → **E** pra sair.
- **Nível 6 (primeira R):** O All Out desbloqueia a kill threat. Procure um gank do jungler: **R** o inimigo contra o seu muro (o wall slam causa dano bônus e prende ele), transforme e finalize em forma All Out.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completo (~ minuto 11-13):** Seu sustain triplica. Agora você ganha extended trades e fica na lane mesmo com tentativas de gank. Push pra solo kill ou monte um tower dive (entrar sob a torre inimiga pra matar apesar dos tiros — funciona porque a damage reduction do **W** absorve os hits da torre durante o dive).
- **Teamfight de 3 itens (~ minuto 22-26):** Com ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** você vira a ferramenta de engage primária do time (o campeão que abre o fight pulando dentro e travando um alvo). Procure picks com **R** (um "pick" = eliminar um inimigo isolado fora de posição) nos carries inimigos perto de muros.

## Erros comuns

- **Apertar R quando você já está perdendo o fight.** O All Out troca durabilidade por dano. Se você já está com pouco HP e em desvantagem numérica, morre em forma transformada em segundos. **R** é uma ferramenta de "win condition", não um botão de pânico — use quando puder isolar um alvo e fechar, não quando estiver tentando fugir.
- **Carregar W na frente de um adversário ranged.** Eles veem o wind-up (a animação lenta de carga que telegrafa o dash) e saem andando. Use **W** como counter-engage (eles se comprometem primeiro, você carrega no meio da animação) ou saindo do fog of war (a área escura do mapa onde o inimigo não te vê) pra surpreender — nunca como opening poke.
- **Pular os stacks do Q.** Cada hit do **Q** dá um stack (uma carga que se acumula na habilidade): com 2 stacks o próximo cast é uma shockwave que puxa e atordoa. Jogar **Q** com 1 stack só pelo dano e deixar o stack expirar desperdiça seu CC mais forte (CC = crowd-control: stuns, slows, knockbacks). Sempre planeje o segundo cast.
- **Splitpushar sozinho como tank.** Splitpush = empurrar uma side lane sozinho pra forçar o inimigo a mandar alguém te parar. K'Sante é um campeão de teamfight sem ulti global pra virar outras lanes — o kit precisa de aliados pra dar follow-up no wall slam do **R**. Junte-se ao time pros objetivos a não ser que tenha vantagem numérica clara.
- **Esquecer que o All Out reduz o max HP.** Quando você se transforma, seu HP atual e máximo caem por uma porcentagem. Se estava em 100% HP antes do transform, fica no novo (menor) max com HP atual proporcional — mas se transforma já com pouco HP, a queda percentual pode te matar direto. Olhe a HP bar antes de apertar R.

## Dica avançada

O W-cancel: enquanto carrega o **Path Maker**, você pode soltar o cast em qualquer momento — charges curtos causam menos dano e knockback/stun mais curtos, mas você fica unstoppable durante a duração do charge. Use um **W meio carregado** pra dodgear uma habilidade chave inimiga (a **R** da Lissandra, a **R** do Malphite, a cadeia de AAs de um ADC) sem gastar o tempo total de carga, e reentre no trade nos seus termos. O cooldown é idêntico independente da duração do charge — não tem penalidade por cancelar cedo. Pros usam isso pra sobreviver aos engages iniciais; jogadores ranked quase sempre full-charge e andam direto no punish (a contra-jogada que você toma por se expor demais).
