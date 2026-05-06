---
title: "Galio Mid Build & Guia — Patch 16.9"
slug: "galio-mid"
language: "pt-br"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "Guia do Galio mid no Patch 16.9: starter kit, build AP-tank, principais matchups, power spikes, erros comuns e uma dica avançada final para fechar o pacote."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "A cada poucos segundos, o próximo ataque básico do Galio causa dano mágico bônus em uma pequena área no impacto."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Duas rajadas de vento convergem em um tornado no ponto alvo, causando dano mágico ao longo do tempo. Ferramenta principal de waveclear e poke."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carrega um escudo que absorve dano mágico; ao soltar provoca e dá dano em inimigos próximos. Carga longa — nunca solte vazio."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Pequeno passo atrás, depois dash para frente que joga para o ar o primeiro campeão inimigo atingido. Engage e gap-close primário."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa um aliado; após um delay, Galio cai sobre a posição dele, escudando aliados na área e jogando inimigos para o ar."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra front lines com muito HP (dois ou mais tanks tipo Cho'Gath, Sion, Dr. Mundo) — burn % escala em fights longos"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "quando você snowballa cedo (3+ kills antes do minuto 12) — AP barata por stack que premia engages agressivos"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "swap quando um alvo prioritário comprar item de MR; combina com Sorcerer's Shoes para pen mista"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos com follow-up após seu engage (Zed, Talon) — stasis cobre a janela de cooldown pós-R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que te trava na carga do W (Malzahar suppress, Lissandra R, Twisted Fate stun)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Use Hero's Entrance R do mid para virar fights de side lane e skirmishes do Drake assim que Riftmaker estiver pronto. Em teamfight, E na back line, solte o taunt W e deixe sua front line colapsar nos alvos lockados."
  weakness: "W tem carga longa (1.5s) e E tem animação curta de passo atrás — ambas interrompíveis. Assassinos móveis e poke mágico DOT bypassam o escudo W, que absorve burst, não dano constante por tick."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve: Aftershock proca com taunt W ou knockup R, pico de resistências quando te focam. Shield Bash converte W em dano bônus on-attack, Bone Plating absorve o primeiro burst, Unflinching dá tenacity para CC não te travar no engage."
    secondary_rationale: "Sorcery secundária: Manaflow Band mantém mana para spammar Q na lane (Galio é mana-hungry pré-Riftmaker), e Transcendence empurra Ability Haste para que Q e E voltem mais rápido entre fights."
    secondary_alternative: "Em matchups de mana-war (Cassiopeia, Cho'Gath) onde a lane é guerra de stat de HP, troque Sorcery por Inspiration com Biscuit Delivery (HP e mana grátis no nível 6) mais Cosmic Insight (redução de CD de Flash — melhor catch potential com combo R+Flash)."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "Mages de artilharia imóveis"
      reason: "O knockup E do Galio fecha a distância em que o range deles depende, e W absorve o burst de spells de cooldown longo como Lux R ou Veigar R."
    - examples: ["ahri", "syndra"]
      archetype: "Burst mages de mid-range sem sustain"
      reason: "Seu escudo mágico W corta o grosso do combo deles; quando o burst está em cooldown, eles não conseguem duelar um frame AP-tank."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "Carries de bot imóveis alcançáveis pelo R"
      reason: "Hero's Entrance cai em cima de um aliado; ADCs sem dash não escapam do knockup e seu bot colapsa para a kill."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "Assassinos de curto alcance com múltiplos dashes"
      reason: "O shroud da Akali quebra o target lock do W, e as cadeias de dash de Zed/Fizz fecham o trade antes do W sair da carga — o melhor CC do Galio tem um tell lento que eles ultrapassam."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "Dano mágico DOT e lockdown point-and-click"
      reason: "Escudo W absorve burst, não dano constante por tick; o R do Malzahar suprime Galio na carga do W, cancelando toda a ferramenta de engage."
    - examples: ["yasuo", "yone"]
      archetype: "Usuários de Wind Wall"
      reason: "O Wind Wall do Yasuo bloqueia totalmente as rajadas Q do Galio, removendo a única ferramenta de pressão à distância dele na lane."
---

## Visão geral

Galio é um battlemage AP (ability power, dano mágico) com escalonamento tank — fica mais forte tanto com AP quanto com HP. Ele foi feito para interromper o time inimigo e absorver o dano mágico que jogam na sua front line (os tanks/bruisers da frente). O kit dele é curto mas barulhento: **Winds of War (Q)** para waveclear e poke (chip damage à distância), **Shield of Durand (W)** para um taunt carregado (força o inimigo a te atacar por um momento) que também é escudo mágico, **Justice Punch (E)** para knockup (jogar para o ar brevemente, como um stun curto) o primeiro inimigo no dash, e **Hero's Entrance (R)** para teleportar em cima de um aliado com combo de knockup-e-escudo. Ele joga mid porque precisa da posição central para ameaçar rotações de R em qualquer lane.

O game plan é paciente até o nível 6, depois explosivo. Empurre a wave com Q, segure E para counter-engage ou para o gap-close no seu próprio gank, e quando R estiver disponível, fique de olho nas side lanes — todo fight bot ou top está no seu range. A skill expression mora no timing da carga do W (solte para interromper um channel chave — Katarina R, Karthus R, Master Yi Q) e na mira do E (o dash atinge só o **primeiro** campeão no caminho, então você pode pickar um alvo de back line andando por uma side lane).

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Pegue ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** apenas se enfrentar um Q-spammer melee que te força a recall cedo por mana.

**Itens core (em ordem):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primeiro slot. Dá AP, HP, ability haste (redução de cooldown em todo spell) e uma rampa de omnivamp (te cura uma porcentagem do dano que você causa, escalando quanto mais o fight dura) que transforma fights longos em self-sustain. O taunt W do Galio força vários alvos a atacá-lo, alimentando a omnivamp.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (valor fixo cortado da resistência mágica do inimigo, fazendo seus spells baterem mais forte). Compre essas a menos que o time inimigo tenha 3+ ameaças AD (campeões que dão dano físico); nesse caso, troque por ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slow em todo tick de Q. Combina com Riftmaker para que o time inimigo não consiga disengage do range do taunt, e o HP que ele dá te mantém tank-shaped.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — movement speed e ability haste. Fecha a distância para alvos de back line que o R não alcança direto, e abaixa o cooldown de Q/E para re-engage entre teamfights.

**Itens situacionais:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contra front lines com HP empilhado (dois ou mais tanks tipo Cho'Gath, Sion, Dr. Mundo). Queima uma porcentagem do HP deles por tick de Q.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — só com vantagem de kills cedo (você está snowballando — cada kill te deixa mais forte e mais provável de pegar a próxima). Três ou mais kills antes do minuto 12 fazem a matemática fechar; se morrer uma vez e perder stacks, o item está perdido.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — entra assim que algum alvo prioritário comprar um item de Magic Resist como ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** ou ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** num fighter.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos com follow-up de kill-pressure após seu engage (Zed, Talon). A stasis cobre a janela de cooldown quando W e E estão em baixo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrompe seu W mid-charge (Malzahar suppression, Lissandra R, Twisted Fate stun).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** padrão. Pegue ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps com muito CC (vários stuns, roots, charms), ou ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra composições pesadas de auto-attack (dois AD carries, Master Yi).

**Ordem de skill:** Maximize **Q** primeiro (dano principal e waveclear). **E** em segundo (cooldown menor no engage). **W** por último — o tick damage e o valor do escudo escalam pouco comparado ao rank-up de Q. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Resolve** com **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Troque a secundária por **Inspiration** (Biscuit Delivery + Cosmic Insight) em lanes de mana-war.

## Matchups principais

- **Akali:** Lane difícil. O shroud (W) faz Galio perder o target lock do W e do E. Fique no max range da Q, deixe ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** na lista de compras, e use R para roamar — ela não consegue igualar seu impacto em side lanes.
- **Yasuo / Yone:** Wind Wall bloqueia totalmente suas rajadas Q. Segure Q até eles empurrarem a parede, hold E para counter-engage no all-in deles. Compre ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cedo para sobreviver à janela de auto-attack.
- **Lux:** Favorável. Você anda pelo binding Q dela e dá dash com E — os cooldowns dela são longos demais para trades sustentados, e seu W escuda o poke da R dela.
- **Cassiopeia:** Difícil. O dano DOT dela bypassa a absorção de burst do W. Não tente all-in pré-6; farme sob a torre com Q e busque roamar no nível 6.
- **Twisted Fate:** Corrida de roams. Ele iguala o range do seu R com o teleport dele. Empurre a wave, ping bot/top quando a ult dele sair de cooldown, e esteja pronto para counter-R a rotação dele em vez de iniciar a sua.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + W você tem o primeiro trade all-in. Carregue W enquanto o inimigo pisa no tornado Q e ande em cima dele — o taunt força o auto-attack em você enquanto os ticks da Q terminam.
- **Nível 6:** **Hero's Entrance** desbloqueia impacto em side lane. Empurre a wave forte, ping no bot lane, e procure o primeiro fight de Drake.
- **Riftmaker completo (~ minuto 12-14):** Galio vira peça real de teamfight. Force fights de objetivo aqui — sua omnivamp de R-em-W-em-E te deixa absorver a primeira onda de cooldowns inimigos e sobreviver.
- **Spike de três itens (~ minuto 22-26):** Com ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter**, o slow do tornado mais o knockup do E encadeiam 1.5+ segundos de CC numa back line que não consegue te kitar.

## Erros comuns

- **Soltar W sem alvo.** O taunt só ativa se um campeão estiver em melee range no release. Carregue W andando *em direção* a um alvo, não em cima de uma ward vazia.
- **Usar R como first engage quando o time não tem follow-up.** Hero's Entrance dá um knockup, mas se seu time estiver reposicionando quando você cair, o inimigo sai andando. Espere um CC aliado (Ashe R, Lulu Q, Pantheon Q) acertar primeiro, depois R em cima dele.
- **Ignorar waveclear pré-6.** A Q do Galio é uma das ferramentas de waveclear AOE de maior alcance no mid; não empurrar significa ceder a prio que você precisa para usar R em roams.
- **Maximizar W em segundo.** O valor do escudo escala com o rank, mas o cooldown cai pouco. Max E te dá um E com 4 segundos de cooldown no nível 13, o que se traduz direto em mais janelas de engage.
- **Riftmaker primeiro contra comp sem tank.** Se o inimigo é 4-AD (Yasuo + 2 ADC + Talon), as stats de tank são desperdiçadas. Compre ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** primeiro — o burn pressiona a back line squishy deles.

## Dica avançada

O knockup do E atinge só o **primeiro** campeão inimigo no caminho do dash — use isso para pickar um alvo. Se a front line inimiga está entre você e o carry deles, contorne pelos arbustos laterais (ou flank pela fog) para que a linha do E pegue o carry primeiro enquanto a front line está do lado errado de você. O mesmo truque funciona depois do R: se o knockup termina e você imediatamente E pelas costas da formação inimiga, você re-knocka o alvo de back line enquanto o tank deles ainda está se recuperando.
