---
title: "Ezreal Bot Build & Guia — Patch 16.9"
slug: "ezreal-bot"
language: "pt-br"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Guia do Ezreal bot lane no Patch 16.9: starter kit, build AD core, matchups principais, power spikes, erros comuns e uma dica avançada para fechar com chave de ouro."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Cada habilidade que acerta um inimigo acumula uma stack de attack speed (até 5). É o motor do DPS de auto-attack do Ezreal."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Skillshot linear de longo alcance, dano físico. Reduz cooldowns ao acertar e aplica efeitos on-hit — seu botão principal de poke e DPS."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Orbe mágico que gruda em um campeão ou objetivo. Detona no próximo ataque ou habilidade dando dano bônus e devolução de mana."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Blink curto + bolt automático. Cooldown longo — é sua única rota de fuga, não desperdice para dar dano cedo."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Raio global linear que dá dano pesado no primeiro alvo não-minion. Para pickoffs (eliminar um inimigo isolado fora do teamfight), execute ou waveclear de emergência."
      dd_spell_id: "EzrealTrueshotBarrage"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra hard CC single-target pra remover (Malzahar R, Skarner R, Warwick R) — o ativo tira o lock-down e você continua kitando"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC de projétil telegrafado (Morgana Q, Ashe R, Blitzcrank Q) — o spell shield bloqueia uma habilidade e salva o posicionamento"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra lanes de poke (Caitlyn, Varus, Xerath support) onde precisa de sustain de lifesteal e escudo pra aguentar trades"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra burst AP pesado (LeBlanc mid, Syndra, Brand support) — magic resist e dano on-hit mágico bônus em cada Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Acumule stacks da passiva lançando Q a cada cooldown, kite no max range com auto-attacks mais Q, e snowball a bot lane até o spike de 3 itens no minuto 25-30 onde você supera o carry inimigo em DPS."
  weakness: "Frágil e sem escape além de E (cooldown longo). Vulnerável a engages fortes e CC de longo alcance; se errar Q na lane fica pra trás porque as stacks somem após 6 segundos sem acerto."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Marksmen hiper-agressivos de curto alcance"
      reason: "O Q do Ezreal supera o range de auto-attack deles (1150 contra ~525-550). Poke fora da wave de uma distância segura; eles precisam de all-in (troca total até a kill) pra vencer e seu E é um botão de pânico contra o dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Marksmen imóveis sem dash"
      reason: "Ezreal consegue sidesteppar um Q lento (Sivir Boomerang, Varus Q) enquanto encaixa o seu. Eles não conseguem punir o waveclear lento dele porque não fecham a distância quando ele dá step up."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Marksmen de scaling com laning fraco"
      reason: "O spike do Ezreal entre nível 2 e 6 é mais forte que o deles. O poke de Q empurra eles fora da wave, chegam aos itens core atrasados e perdem a vantagem de scaling."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Marksmen com burst pre-6 frontloaded"
      reason: "O padrão de trade deles no nível 1-3 (auto reset do Jhin, Double Up da MF) supera o Ezreal em dano antes de ele carregar a passiva. Forçam você a recall cedo e perder tempo na Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Artilharia de alcance maior (poke lane)"
      reason: "O range de Q ou de armadilha deles supera os 1150 do Ezreal. Ele não consegue revidar sem entrar na zona de ameaça, então a lane sangra HP dele sem deixar fazer all-in de volta."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Tank supports de hard engage"
      reason: "O engage point-and-click (Leona E, Naut Q, Thresh Q hook) ignora o ponto forte do Ezreal, o poke a distância segura. Uma vez locked, o E muitas vezes não é suficiente pra escapar do follow-up."
---

## Visão geral

Ezreal é um AD carry de longo alcance que troca DPS pura de auto-attack por segurança e poke de skillshot. O kit dele gira em torno de encaixar **Mystic Shot (Q)** a cada cooldown — cada acerto reduz parte dos cooldowns, acumula a passiva **Rising Spell Force** dando attack speed (até 5 stacks, um spike de aproximadamente +50% AS) e aplica efeitos on-hit como o dano bônus do Kraken Slayer. Tem a melhor ferramenta de fuga entre os ADCs tradicionais com **Arcane Shift (E)**, mas o preço é um sustain de lane frágil e uma curva de scaling mais lenta que ADCs como Jinx ou Aphelios.

O game plan é paciente: poke com **Q** no max range (1150 unidades, mais longe que qualquer auto-attack de ADC), empurre waves com combos **W**-**Q** quando o inimigo dá step back, e roma pra mid com **R** pra fazer pickoffs pelo mapa. A skill expression vive na prediction de **Q** (antecipe o vetor de movimento do alvo — eles ficam mais fáceis de acertar enquanto last-hittam porque se desaceleram pra atacar um minion) e na disciplina de **E** (não blink pra dar dano; guarde pra escapar do engage que vai vir de qualquer jeito).

## Build recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's dá o AD e o lifesteal que você precisa pra tradar com **Q** sem ficar pra trás de HP.

**Core items (em ordem):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primeiro spike de DPS. Cada terceira auto causa dano true (dano que ignora armor e magic resist), e o **Q** conta como aplicação on-hit. É a sua compra incondicional.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed que se multiplicam com as stacks da passiva. Compre depois do primeiro componente do Kraken.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — estende seu range de auto-attack em ~150 unidades quando energizado, alinhando com o range do **Q**. Permite kitar (andar pra trás enquanto ataca, mantendo distância) no max range sem dar step forward.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — basic attacks reduzem cooldowns não-ulti. Combinado com a redução do próprio **Q**, você joga uma **Q** a cada ~2 segundos.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration pro late game quando os tanks da frontline tiverem stackado armor.

**Situational items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra hard CC single-target pra remover (Malzahar R, Skarner R, Warwick R). O ativo tira o lock-down e você continua kitando.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC de projétil telegrafado (Morgana Q, Ashe R, Blitzcrank Q). O spell shield bloqueia uma habilidade hostil e salva seu posicionamento.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra lanes de poke (Caitlyn, Varus, Xerath support). O lifesteal te faz sobreviver ao harass e o overheal shield dá um buffer de HP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra burst AP pesado (LeBlanc mid, Syndra, Brand support). Magic resist e dano on-hit mágico bônus em cada auto e em cada **Q**.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é a default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** é aceitável se você precisa de mais uptime de **R** pra snipes cross-map.

**Skill order:** Maxe **Q** primeiro (seu motor de dano e DPS), **W** em segundo (burst extra em alvos grudados), **E** por último (nunca dá dano suficiente pra valer o max — fica como blink). Coloque um ponto em **R** nos níveis 6, 11 e 16.

**Runes:** Primária **Precision** com **Lethal Tempo** (ou **Press the Attack** em lanes mais squishy), **Presence of Mind** (sustain de mana), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace**. Secundária **Sorcery** com **Manaflow Band** (essencial — os custos de mana do Ezreal são punitivos sem ela) e **Transcendence**.

## Matchups principais

- **Caitlyn:** Ela supera seu range de **Q** com a auto-attack (650 vs seus 550 melee, mas as armadilhas dela te zoneam fora). Fique atrás dos minions, nunca pise numa armadilha, e farme com **Q**. Procure all-in quando ela usar **Net (E)** pra fugir de uma wave — o cooldown está up.
- **Draven:** Ele quer trades (trocas curtas de golpes) a curto alcance. Use **Q** pra empurrar a wave, congele (last-hit minions sem matar a wave pra ela ficar embaixo da sua torre) se estiver atrás, e chame ganks da jungle cedo. Evite os Spinning Axes — se ele tiver 2 machados girando, não auto-attack.
- **Lucian:** Mirror match no tempo de trade. Guarde o **E** pra quando ele usar **Dash (E)** ofensivamente — é quando ele está committed (totalmente comprometido, sem chance de voltar atrás), e você pode fazer bait pra ele embaixo da torre ou seguir com seu burst de **Q**.
- **Jhin:** O 4º auto dele dá um crit enorme; conte os tiros (1, 2, 3, e recue antes do 4). Pune ele durante a animação longa de reload dando step up e encaixando **Q**.
- **Sivir:** Matchup neutro até o nível 6. O **Spell Shield (E)** dela bloqueia seu **Q** — bait com um orbe de **W** primeiro (barato e rápido), e depois jogue **Q** durante a janela de down.

## Power spikes e condições de vitória

- **Nível 2:** Primeira janela de trade. Com **Q** + **W** detonada por **Q**, você dá um chunk de dano que ganha quase qualquer trade curto.
- **Nível 6:** O primeiro **Trueshot Barrage** desbloqueia roams e execute pressure (uso da R pra finalizar inimigos low-HP fugindo pelo mapa). **R** no mid laner inimigo se ele recallar low; o range global transforma erros de posicionamento em kills.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer completo (~ minuto 12-14):** Seu DPS praticamente dobra. Force um dive 2v2 nesse ponto — cada 3ª auto dá dano true que o support inimigo não consegue itemizar contra.
- **Spike de 3 itens (~ minuto 25-30):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** é quando você supera em DPS a maioria dos carries de uma distância mais segura. Empurre pra Baron e fights de drake aqui.

## Erros comuns

- **Segurar o Q pelo tiro perfeito.** As stacks da passiva (o buff de AS no acerto) somem após 6 segundos sem hit. Jogue **Q** nos minions pra refrescar stacks e ganhar refund de cooldown — até uma **Q** errada no campeão que acerta um minion vale o mana.
- **Usar E ofensivamente na lane.** **Arcane Shift** tem cooldown de 14-26 segundos; uma vez que blinkou pra dentro, não tem mais nada se o support engagar. Guarde só pra escapar até ter ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** e um lead de kills.
- **Ficar no max range de R em teamfights.** Seu range de **Q** é 1150; ficar a 1500+ pra encaixar snipes de **R** te coloca fora do peel do support (a proteção que o support dá contra dives chegando). Fique na segunda posição mais distante, assim um flank não te delete.
- **Pokar com Q sem mana.** Se estiver com menos de 30% de mana, empurre a wave e recall. Um Ezreal de scaling sem mana é inútil porque cada ação do kit (incluindo E pra fugir) custa pelo menos 28 de mana.
- **Ignorar W em objetivos.** **Essence Flux** gruda em drakes e Baron. Coloque **W** depois **Q** pra detonar e dê ~250 de dano bônus no contest do smite — um chunk de dano grátis que ganha o steal.

## Dica avançada

Pratique o combo **W**-stick em campeões: jogue **W** num inimigo low-HP através da fog of war (se tiver vision), e imediatamente **Q** pra detonar. A detonação devolve o custo de mana de **W** mais mana extra, então o combo é essencialmente grátis se acertar. Em teamfights, grudar **W** no carry inimigo faz com que cada basic attack do seu time detone, transformando um orbe de 50 de mana num chunk de aproximadamente 400 de dano em 4 segundos distribuído entre várias fontes. A chave é jogar **W** *antes* do engage começar, não durante — a velocidade de viagem de 0,25s é lenta demais pra pegar um alvo já em movimento.
