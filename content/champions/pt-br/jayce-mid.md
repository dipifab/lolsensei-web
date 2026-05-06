---
title: "Jayce Mid Build & Guia — Patch 16.9"
slug: "jayce-mid"
language: "pt-br"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Guia do Jayce mid no League of Legends Patch 16.9: rush de Manamune, combos de weapon-swap, matchups principais, power spikes, erros comuns e dica avançada."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Cada weapon swap (R) dá ao Jayce um burst curto de Movement Speed e o deixa ignorar a colisão de unidades por um instante."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: pula no alvo, causa dano físico e aplica slow nos inimigos próximos. Cannon: skillshot AOE de longo alcance — principal ferramenta de poke no mid."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passiva de mana no auto, ativa uma aura de dano em volta do Jayce. Cannon: Attack Speed máximo nos próximos 3 ataques — janela de burst com auto nos all-ins."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback curto que causa dano mágico em % de HP máximo. Cannon: posiciona um gate que acelera aliados e amplifica um Q (Shock Blast) que passa por ele — o setup padrão no mid."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (cooldown 6s). Alterna entre Hammer melee (engage, sustain, knockback) e Cannon à distância (poke, AOE waveclear). O primeiro ataque ao virar Cannon reduz Armor e Magic Resist do alvo."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra mid-laners AP (Annie, Veigar, Syndra): o escudo mágico bloqueia o burst e adiciona AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target (Ahri charm, Lissandra R, Sylas E): o spellshield bloqueia o lockdown"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contra comps 5v5 agrupadas com frontline empilhada: a AOE atinge a backline através da frente"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "troque por Plated Steelcaps quando o time inimigo tem 3+ ameaças AP/CC; a tenacity reduz stun e slow"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Empilhe a Tear (Manamune) com o poke Cannon Q, alcance o spike de Muramana no minuto 14, depois snipe alvos de baixa defesa com E-gate Q. Roteie pras side lanes assim que o R virar rank 2 pra converter a vantagem."
  weakness: "Mana hungry pré-Manamune: um Q errado joga fora quase toda a troca. Assassins móveis fecham o alcance da Cannon Q dentro da cast window. Cai no late vs Magic Resist empilhada em times AP-heavy."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "A troca 3 hits (Cannon Q + AA + Hammer Q-AA-E) ativa Press the Attack pra +8% de dano e transforma o poke Cannon em kill threat lá pelo minuto 6. Triumph devolve HP em takedowns; Legend: Alacrity bate o cap de AS no W (Hyper Charge); Coup de Grace +8% abaixo de 40% HP."
    secondary_rationale: "Manaflow Band acumula stacks rápido com o poke Cannon Q pra +50 mana permanentes por stack. Transcendence no nível 5 adiciona Ability Haste, que combina com Manamune e encurta a janela de weapon-swap do R."
    secondary_alternative: "Contra comps de assassins (Zed mid + Kha'Zix jungle), troque Sorcery por Resolve com Bone Plating (redução de dano nos 3 primeiros hits) e Second Wind (regen passivo de HP abaixo de 50%). Sacrifica scaling early pra sobreviver ao burst antes da Edge of Night."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Mages mid-lane imóveis sem dash"
      reason: "Não conseguem interagir com o alcance da Cannon Q pré-6. Veigar precisa do E (Event Horizon) pra setupar o Q de poke, mas o gate do Jayce amplifica seu Q antes dele completar a combo. Quando chegam a 50% HP, troque pra Hammer e mate em um tiro através do cast time das skills deles."
    - examples: ["akali", "yone"]
      archetype: "Skirmishers melee sem ferramentas de poke à distância"
      reason: "Cannon Q ultrapassa o alcance do E da Akali (Shuriken Flip) e do Q do Yone; ambos precisam committar numa janela melee pra causar dano. Hammer E knockback nega as chains de dash, e o shred do Cannon-stance abre armor pra follow-up de gank."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Zed W (Living Shadow) e Fizz E (Playful/Trickster) fecham o alcance da Cannon Q dentro da cast window. Em alcance Hammer com R disponível, eles bursteiam o Jayce antes dele terminar a combo Hammer Q-W-E. Edge of Night ajuda mas não salva se o gap-close acerta antes."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages de artilharia de longo alcance"
      reason: "Têm mais alcance que Cannon Q. Q do Xerath (Arcanopulse) e Q do Vel'Koz (Plasma Fission) acertam em distâncias que Jayce não consegue igualar sem caminhar pra dentro da combo completa. Cada wave-fight drena HP do Jayce sem janela pra all-in de volta."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globais / cross-map"
      reason: "Jayce roteia devagar sem sinergia de stance. R do Twisted Fate (Destiny) vira uma side lane em 8 segundos; R do Galio (Hero's Entrance) chega onde Jayce não consegue seguir. O 1v1 mid pode ser parelho, mas o macro perde objetivos em outros lugares."
---

## Visão geral

Jayce mid é o **lane bully** canônico — um campeão que pressiona o mid-laner adversário com poke constante antes que ele consiga escalar. É um híbrido ranged-melee que vence o early com uma skillshot AOE (area-of-effect, dano em área) de longo alcance Q em **Cannon stance** e finaliza alvos com a combo leap-Q + knockback-E em **Hammer stance**. O toggle do R tem cooldown de 6 segundos, e o primeiro ataque depois de virar Cannon reduz Armor e Magic Resist do alvo — o gatilho de entrada de todo all-in (commit total numa troca até a morte de um campeão).

O game plan no mid se divide em três fases. Pré-6 você acumula poke Cannon Q sobre a wave (o projétil atravessa minions); o objetivo é tirar o inimigo de 100% pra 50% HP sem gastar mana à toa. No 6, o all-in Cannon-to-Hammer vira kill threat: solte **E** (Acceleration Gate) na direção dele, atire **Q** (Shock Blast) através pro dano amplificado, troque pra Hammer com **R**, pule com **Q**, solte **W** pra aura, e empurre com **E** na direção da sua torre. Pós-Manamune (~minuto 14) seu Cannon Q apaga waves de squishies e você começa a rotear pelas side lanes pra converter a vantagem em tempo global.

## Build recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Pule starts greedy como ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (precursor da Manamune): você precisa do AD e lifesteal da Doran's Blade pra sobreviver aos primeiros três minutos contra um mid-laner que iguala seu alcance.

**Core items (em ordem):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — primeiro item pra rushar. Acumula stacks no poke Cannon Q da wave. O Awakening pra ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** com stacks máximos adiciona dano bônus em todo Q, AA e tick da aura W — o maior spike de AD do build do Jayce.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas contra uma lane AD (Yasuo, Zed, Akshan). Troque pra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP/CC empilhado.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (estatística que ignora uma parte fixa da armor inimiga) mais uma passiva (Eminence) que acumula stacks por takedown. Combinada com Muramana, seu scaling de AD vira brutal em cada roam.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality e slow on damage. O slow no impacto da Cannon Q transforma inimigos com Flash em alvos de catch pra Hammer-Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra mid-laners AP (Annie, Veigar, Syndra). O escudo mágico bloqueia o burst e adiciona AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC duro single-target (Ahri charm, Lissandra R, Sylas E). O spellshield carrega fora de combate e bloqueia a próxima ability que te imobiliza.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — contra composições 5v5 agrupadas com **frontline** (tanks/bruisers que abrem a luta) empilhada. A AOE da ativa atinge a **back line** (carries que dão dano de trás) através da frente e devolve cooldown em takedowns.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troque das Plated Steelcaps quando o time inimigo tem 3+ ameaças AP ou CC.

**Boots:** Plated Steelcaps por padrão. Mercury's Treads contra magic damage pesado ou chain CC.

**Skill order:** Maxe **Q** primeiro (dano principal nas duas stances), **E** depois (knockback pra execute, gate pra amplificar poke), **W** por último. Coloque ponto em **R** nos níveis 6, 11, 16. Nota: pegue **E** no nível 2 (não W) pra kill pressure com a combo Acceleration Gate + Cannon Q.

**Runes:** Primário **Precision** com **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundário **Sorcery** com **Manaflow Band** e **Transcendence**. Contra comps de assassins, troque o secundário pra **Resolve** com **Bone Plating** + **Second Wind**.

## Matchups principais

- **Yasuo / Yone:** Eles bloqueiam sua Cannon Q com Wind Wall. Posicione-se pro seu Q vir de um ângulo de flank que os obrigue a olhar pro lado oposto da wave; eles não conseguem walar o que não veem a tempo. Guarde Q pra quando o muro estiver em cooldown e encadeie E-gate-Q.
- **Zed:** Mantenha ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** carregada o tempo todo depois do minuto 12; bloqueia o R (Death Mark) finisher dele. Pré-6 você o pokeia. Pós-6 a lane vira: não passe da wave quando o R dele está disponível.
- **Ahri:** Matchup parelho, decidido pelo timing do Q. O E (Charm) telegrafa de longe — desvie atrás de um minion antes de soltar a Cannon Q. Quando ela erra o charm, a lane é sua por 9 segundos.
- **Annie / Veigar:** Matchup de poke gratuito pré-6. Sem mobilidade; sua combo Cannon Q + E os drena off-creep. Olhe o cooldown de stun (passiva da Annie, E do Veigar) antes do all-in: o stun deles cancela a animação de knockback do Hammer Q.
- **Twisted Fate:** Você o pokeia pré-6 mas perde no macro game (jogo estratégico de mapa além da sua lane). Quando o R dele subir, sinalize mid mia (missing in action — o inimigo saiu da lane) e back cedo; a lane priority que você tem vale menos que a gold card cross-map dele.

## Power spikes e condições de vitória

- **Nível 2 (Q + E):** Cannon Q + Acceleration Gate + AA é uma troca de 30% HP na maioria dos squishies. O posicionamento do gate também serve de rota de fuga — solte atrás de você na direção da torre se o inimigo committar.
- **Nível 6 (primeiro R):** As duas stances desbloqueiam no auge. O all-in Cannon-to-Hammer vira kill threat a 45% HP em vez de chunk trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune completa + stacking (~ minuto 12-14):** Quando vira Muramana, todo Q acerta ~15% mais forte e o dano de AA também spika. É aqui que Jayce mid spika mais forte e deve buscar roam nas side lanes.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + stacks de takedown (~ minuto 19-22):** Stacks de Eminence somam com Muramana pra números de AD absurdos. Force uma luta agora ou pressione por um inhibitor.

## Erros comuns

- **Jogar Cannon Q sem Acceleration Gate.** Q pelado custa caro em mana e é fácil de desviar. Solte **E** (Acceleration Gate) na direção do inimigo primeiro; o gate amplifica o Q que passa por ele (mais alcance, mais dano, AOE maior) e o pequeno delay força o inimigo a committar uma direção de movimento antes de você atirar.
- **Stackar Manamune devagar demais.** Cannon Q precisa acertar um campeão ou matar uma wave pra contar como stack; Qs errados não acumulam. Planeje o poke da wave pra que cada Q acerte pelo menos três minions e acelere a Tear.
- **Queimar o shred do R-Cannon em minions.** Quando vira de Hammer pra Cannon (R), a primeira AA reduz Armor e Magic Resist. Acertar isso num minion melee desperdiça o trigger; guarde sempre pra um campeão inimigo.
- **Roteiar sem awareness do cooldown do R.** R tem swap cooldown de 6 segundos que também é sua única ferramenta de mobility (burst passivo de Move Speed no swap). Roteie com R fora de cooldown pra poder disengage de um counter-roam; chegar numa luta sem R é committar sem saída.
- **Esquecer o sustain de mana do Hammer W.** Em sieges longos de Cannon poke, troque pra Hammer por 2-3 autos pra recuperar mana via passiva W (Mana on hit). Pular isso esvazia a pool e força um back precoce.

## Dica avançada

Treine o **timing-flip do gate-Q** contra alvos em movimento. A maioria dos Jayces solta o Acceleration Gate onde o inimigo está agora, depois atira Q através. Os pros soltam o gate onde o inimigo *vai estar* em 0,5 segundos (cast time do gate mais animação do Q) — geralmente em direção à wave, já que o inimigo precisa caminhar pra last-hit. O Q amplificado cai na posição prevista, não na passada. Treine no Practice Tool colocando um target dummy em modo Move e aprenda a lead distance até virar muscle memory.
