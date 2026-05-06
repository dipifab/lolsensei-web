---
title: "Elise Jungle Build & Guia — Patch 16.9"
slug: "elise-jungle"
language: "pt-br"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia Elise jungle para League of Legends Patch 16.9: rota de gank em Spider Form, setups de Cocoon, prioridade de itens, matchups-chave, power spikes e uma dica final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Duas formas. Human: cada ability que acerta gera um Spiderling adormecido. Spider: AAs causam bonus magic damage e curam Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke direcionado que escala no HP atual do inimigo (anti-tank). Spider: avanço que escala no HP perdido (executa alvos de low HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lança um Spiderling que anda e explode perto do inimigo (slow + dano AOE). Spider: Elise e seus pets ganham attack speed para DPS sustentado."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot linear que stuna o primeiro inimigo atingido. Spider: Rappel — Elise sobe intargetável e cai num alvo com bonus damage e heal."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate que alterna Human (caster à distância, alcance maior) e Spider (skirmisher melee, mais move speed e enxame de Spiderlings). Free swap no cooldown."
      dd_spell_id: "EliseR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (Ahri charm, Lissandra R, Twisted Fate stun) — o spell shield come uma ulti e salva sua Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ inimigos comprarem item de Magic Resist; substitui Rylai's ou Banshee's no late"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra hard CC pesado (stuns, knock-ups) — boots swap que adiciona tenacity (redução de duração de CC)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra comps com heal stack (Soraka, Vladimir, Dr. Mundo); também serve de Magic Penetration"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Snowballe com ganks early via E cocoon stun nos níveis 3-6, depois pivote para dives de objetivo via Rappel quando Liandry's e Rylai's estiverem online. Picke backliners squishy no mid game."
  weakness: "Cai no late game quando frontlines acumulam Magic Resist e HP. Sem disengage confiável em Spider form: um cocoon errado durante um dive geralmente termina com Elise morta."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute proca em todo gank porque W slow + E stun + Q burst são três ability hits distintos (trigger do keystone). Sudden Impact premia o dash de Rappel, Treasure Hunter dá gold em takedowns, Ultimate Hunter corta cooldown da R."
    secondary_rationale: "Sorcery secondary: Manaflow Band cobre os problemas de mana early (cocoon custa caro), Transcendence empurra Ability Haste além do soft cap de 40% e devolve cooldown em takedowns."
    secondary_alternative: "Contra poke pesado ou counter-jungle (Lee Sin, Graves, Nidalee), troque Sorcery por Resolve com Bone Plating (8473, redução de dano após 3 hits recebidos) e Revitalize (8453, amplificador de heal e shield) para mais sustain early."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Laners squishy sem dash ou stealth"
      reason: "O E cocoon nos níveis 3-4 acerta alvos planos sem escape. Rappel (Spider E) confirma o dive mesmo com Flash, porque você fica intargetável mid-cast."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Junglers com pre-level 6 form fraca"
      reason: "Master Yi não duela antes do 6, Kayn fica form-locked até terminar a quest, Shyvana não tem CC confiável. Elise pega Scuttle Crab grátis e os counter-jungla colocando déficit de gold."
    - examples: ["draven", "kalista", "samira"]
      archetype: "ADCs agressivos que se overextendem por kills"
      reason: "O posicionamento forward deles te dá ângulos de cocoon. Um gank no nível 3 numa lane empurrada (wave shovada além do river) costuma fechar a kill quando W slow + E stun encadeiam com o CC do support."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Engagers tankys com counter-engage de hard CC"
      reason: "O CC AOE deles pega Elise descendo de Rappel ou após o commit do dive. Com 2 itens, seu magic burst para de derretê-los e você não tem disengage em Spider form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Duelistas early-game fortes com gap-closer"
      reason: "Eles vencem Elise no 1v1 nível 3 se ela ficar sem mana de cocoon ou errar o timing de Rappel. Não invada o river deles: os dashes deles comem sua única escape."
    - examples: ["olaf", "garen"]
      archetype: "Divers imunes a CC (cleanse passivo ou ult immunity)"
      reason: "O R do Olaf e o Q do Garen quebram cadeias de stun e ignoram seu único setup. Quando o cocoon para de acertar, o all-in da Elise (commit total no trade) desaba e ela é duelada até a morte sem escape."
---

## Visão geral

> **Mini-glossário (leia uma vez):** **ADC** = Attack Damage Carry, o bot-laner que dá dano físico (Caitlyn, Jinx). **AP** = Ability Power, o stat que potencia abilities mágicas. **MR** = Magic Resist, defesa contra magia. **CS** = Creep Score, número de minions abatidos. **CC** = Crowd Control, qualquer efeito que paralisa um campeão (stun, slow, knock-up). **Gank** = jungler emboscando uma lane. **Dive** = entrar embaixo da torre para matar. **Trade** = troca breve de dano em lane. **All-in** = commit total à luta. **Snowball** = vantagem que cresce sozinha (kills → gold → itens → mais kills).

Elise é uma burst-mage diver — uma campeã que poke à distância e depois faz commit total na backline inimiga para fechar uma kill. O kit dela gira em torno de acertar **Cocoon (E)** em Human form para stunar um alvo, depois swap para **Spider Form (R)** para o dive com **Rappel (E)** e dano de execute. Tem a jungle pre-level-6 mais forte do jogo: no nível 3 já tem as quatro abilities de dano e vence quase qualquer outro jungler em 1v1. O preço é alta complexidade mecânica (timing de form-swap, precisão de skillshot) e late game pobre quando os tanks acumulam Magic Resist.

Game plan: invada os camps do jungle inimigo no nível 3 se o matchup permitir, depois construa snowball (vantagem que cresce) gankando as lanes com mais kill pressure (ADC squishy, mid laner com low HP). Quando **Liandry's Torment** estiver online por volta do minuto 11-13, pivote do pathing focado em gank para o controle de objetivos — dive de torre usando Rappel como "blink" (teleporte curto e instantâneo), picke alvos prioritários e force Drake ou Rift Herald.

## Build recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (jungle starter ranged) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (em ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Hailblade (auto-evolui por volta do minuto 3-4 quando come XP suficiente). O companion para campeões de AP burst: adiciona um proc de magic damage (efeito disparado) ao próximo AA depois de uma ability, perfeito para encadear com **Spider Q** em skirmishes.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. Adiciona um burn de HP (dano espalhado em poucos segundos) em cada spell, stacka com **Rylai's** depois para um single-target sustained damage imbatível.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana para que sua Q e E batam mais forte em alvos squishy (campeões com pouca defesa, ADCs e mages).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — toda ability slowa o alvo. Sinergia massiva com **W** (já um slow) e os avanços de **Spider Q**.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. A active te deixa intargetável por 2,5 segundos depois de um dive de Rappel, dando ao time tempo de seguir antes de você morrer.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling no late game. Compre por último para passar de 1000 AP.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic crowd control single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando dois ou mais inimigos comprarem item de Magic Resist.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quando o time inimigo tem hard CC pesado (stuns, knock-ups).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps com heal stack (Soraka, Vladimir, Dr. Mundo); também atua como Magic Penetration.

**Boots:** Sorcerer's Shoes por padrão. Troque por Mercury's Treads se o time inimigo tiver três ou mais fontes de hard CC.

**Skill order:** Maxe **Q** primeiro (dano e execute), **E** segundo (cooldown do cocoon — menos cooldown = mais stuns), **W** por último. Coloque um ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primary **Domination** com **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** com **Manaflow Band** e **Transcendence**.

## Matchups principais

- **Lee Sin:** Te duela melhor depois do nível 3 se você ficar greedy nos camps. Trackeie o pathing dele — se estiver bot side, invada o red ou blue camp dele top side. Nunca face-checke fog (river bushes sem ward) quando ele estiver missing.
- **Graves:** Perde para Elise pre-6 porque o E curto dele (Quickdraw) não escapa do cocoon, mas escala mais forte. Dive a lane dele em gank duas vezes antes do minuto 10 ou ele chega a dois itens e te outscala.
- **Master Yi:** Matchup grátis early. Invada o segundo camp dele (o que ele limpa em terceiro), kill, repete. Quando ele tiver Wit's End e Botrk vence os 1v1, então a win condition é fechar a partida antes do minuto 25.
- **Sejuani / Maokai:** Hard counter-engage. Guarde Rappel para depois deles usarem o CC AOE, nunca engage primeiro. Em teamfight, flanqueie a backline em vez de engagear pelo muro de tanks.
- **Olaf:** O R dele (Ragnarok) cleansa o cocoon stun mid-flight. Espere ele usar num dive, depois re-engage nos próximos 6 segundos enquanto está em cooldown.

## Power spikes e condições de vitória

- **Nível 3:** Primeiro unlock de Spider form e kit completo. Você tem o dano 1v1 mais forte de qualquer jungler do jogo nessa janela — invada ou ganke uma lane overextendida na hora.
- **Nível 6:** Free **R** swap a comando. A pressão de gank dobra porque você consegue disengage por paredes em Spider form (ela dá um pequeno boost de movement speed).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment finalizado (~ minuto 11-13):** Primeiro grande spike de scaling. Dives single-target agora matam ADCs e mages em duas rotações de spell. Force Drake ou Rift Herald assim que finalizar.
- **Dois itens completos + Boots (~ minuto 16-18):** Janela de pico. Depois disso você começa a perder força relativa enquanto os inimigos sobem Magic Resist; seu trabalho é converter esse lead em calls de Baron ou Elder Drake.

## Erros comuns

- **Jogar E cocoon como ferramenta de poke.** Cocoon é seu único setup — se errar, não tem follow-up. Espere o alvo estar committed (low HP, Flash usado, slowed pelo seu **W**) antes de castar.
- **Diver em Spider form sem Flash ou R disponíveis.** Spider form não tem escape (sem dash, sem shield, sem intargetável). Se sua **R** estiver em cooldown, não commite; recue e espere os 3 segundos para voltar.
- **Maxar W em segundo em vez de E.** W te dá um pouco mais de clear speed mas não adiciona nada à confiabilidade do gank. Os rank-ups de E baixam diretamente o cooldown do cocoon e aumentam o dano de Rappel — esse é seu damage e seu CC.
- **Smitar Scuttle Crab cedo em vez de guardar Smite para objetivos.** Guarde Smite para contests de Drake e Rift Herald. Os 70 de gold e o buff de movement speed do Scuttle não valem perder um Drake para um inimigo que tenha Smite up.
- **Ficar em melee range em teamfights em Spider form quando estiver à frente.** Depois de matar a backline, swap de volta para Human form para jogar cocoon e cleanar. Spider form tem auto-attack range melee — ficar lá como Elise fed (snowballada de kills) só devolve as kills.

## Dica avançada

Use **Rappel (Spider E)** como blink *defensivo* além de ofensivo. Quando um duelista commitar em você, caste Rappel num minion de low HP ou num minion distante na sua jungle: Elise fica intargetável durante o lift (~2 segundos), o suficiente para esquivar uma ulti como Lee Sin R ou Vi Q. O cooldown é curto (10 segundos no rank 5) — perdê-lo para sobreviver costuma salvar mais kills do que se fosse usado ofensivamente.
