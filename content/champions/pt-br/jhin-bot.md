---
title: "Jhin Bot Build & Guia — Patch 16.9"
slug: "jhin-bot"
language: "pt-br"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Guia completo do Jhin bot lane no Patch 16.9: starter kit, build lethality-crit, matchups principais, power spikes, erros comuns e uma técnica avançada."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "O revólver do Jhin dispara só 4 tiros e depois precisa recarregar. O 4º sempre crita e executa alvos com pouco HP. Os crits também dão um burst curto de Move Speed."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Tiro alvo que ricocheteia até 4 vezes. Cada kill aumenta o dano do próximo ricochete. Poke confiável e waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Skillshot linear de longuíssimo alcance. Dá root se o alvo foi atingido recentemente por você ou um aliado. Use depois de auto-attack ou engage do support."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Armadilha lotus invisível que arma após um delay curto. Aplica slow ao pisarem nela e depois explode. Serve para zonar, cobrir flancos e confirmar roots de W."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Ulti channellada: 4 tiros de longuíssimo alcance que param em champions, aplicam slow e dão mais dano conforme o HP do alvo cai. O 4º crita."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "contra backline inimiga squishy (sem tanks): a lethality amplifica o burst do W-root e o Move Speed ativo ajuda em roams"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que empilham cura (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds corta a cura pela metade durante sua R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target que cancela sua R (Blitzcrank hook, Morgana Q, Ashe R): o spell shield garante o cast"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quando você está à frente e precisa de lifesteal + escudo para sobreviver a fights longos sem um peeler (aliado que protege o carry)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra divers de all-in (Diana, Kha'Zix, Master Yi): o Move Speed em combate e o ghosting nos minions ajudam a kitar"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Acerte o crit do 4º tiro em todo trade e encadeie W-roots com seu support para prender alvos de longe. Posicione-se para manter as linhas de R limpas nas brigas de objetivo."
  weakness: "Attack speed travada e nenhum dash. É hard counter de divers móveis e tanks de engage; se seu support for puxado para longe, você não tem escape além do Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Marksmen imóveis de longo alcance"
      reason: "Eles compartilham com Jhin a falta de dash, mas têm janelas de burst mais curtas. Quando Jhin entra no ritmo do 4º tiro com follow-up do support, ganha trades diretos a partir do level 6."
    - examples: ["sivir", "kalista"]
      archetype: "Marksmen de reset/mobilidade que vivem perto"
      reason: "O kit deles quer estar em curta distância; Jhin pode dar W-root de fora do alcance de auto-attack e seguir com E (a armadilha lotus) para fechar a kill antes do reset."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters pure-heal na bot lane"
      reason: "O W-root + R execute do Jhin pune rápido heal-bots com pouco HP. Com Mortal Reminder online (Grievous Wounds corta a cura pela metade) o plano deles desmorona."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Lane bullies agressivos no level 1-3"
      reason: "Eles bursta Jhin durante as janelas de reload (depois de cada ciclo de 4 tiros o revólver precisa recarregar). Jhin não tem mobilidade para disengage e o W root precisa de um setup que sozinho no level 1 ele não consegue criar."
    - examples: ["kai-sa", "tristana"]
      archetype: "Hypercarries móveis com escape integrada"
      reason: "Os dashes integrados (Kai'Sa E reposition, Tristana W jump) desviam dos W-roots e interrompem as cast windows da R. Eles escalam num 1v1 do qual Jhin não consegue kitar."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Tank supports de hard-engage"
      reason: "Eles aplicam CC point-and-click no Jhin durante os frames de reload; ele não tem dash para se peelar e o W precisa que o alvo já tenha sido danificado para dar root."
---

## Visão geral

Jhin é um marksman de longo alcance que joga como sniper, não como carry de DPS sustentado (damage-per-second, dano contínuo no tempo). O revólver dele, **Whisper (Passiva)**, dispara só 4 tiros entre recargas, mas o 4º sempre crita e executa alvos com pouco HP — então cada trade (uma troca curta de golpes na lane, não uma tentativa completa de kill) é construído em torno do timing daquela 4ª bala num campeão ferido. Ele não tem dash e a attack speed é travada, então posicionamento e setup importam mais que APM mecânico.

O plano de jogo: poke com **Q** e auto-attacks até o support engajar, depois encadeie **W**-roots num crit do 4º tiro. Depois do level 6, **R** transforma picks (eliminar um inimigo isolado fora da teamfight) e cercos de objetivo em kills de fora do alcance do time inimigo. Se sua front line te peelar (te proteger dos divers), você outscala quase todos os duos da bot lane até o minuto 25.

## Build recomendada

**Itens iniciais:** Doran's Blade + 1 Health Potion. Pule Doran's Shield a menos que a lane seja um matchup pesado de auto-attack como Draven ou Lucian, onde o HP extra vale mais que o dano bônus.

**Core items (em ordem):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primeiro spike de burst. O execute abaixo de 5% HP combina com o 4º tiro execute do Jhin e com a R; você fecha kills que seu time perderia.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas com attack speed são padrão para marksmen; a attack speed travada do Jhin escala em dano por tiro, então AS vira dano puro.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — o tiro energized adiciona poke de longo alcance (combina com a identidade do Jhin) e o range bônus deixa você acertar champions antes deles entrarem no próprio alcance de ataque.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — o 4º tiro do Jhin é um crit garantido, então o multiplicador de dano crit do IE transforma ele num botão de one-shot em squishies.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration para o late game, quando a front line inimiga compra itens defensivos.

**Itens situacionais:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primeiro item alternativo quando o time inimigo não tem tanks. A lethality (armor pen flat) faz o burst do W-root deletar squishies em 1-2 tiros nas skirmishes do início, e o Move Speed ativo ajuda a se reposicionar para as cast windows da R.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — substitui Lord Dominik's contra comps que empilham cura (Soraka, Aatrox, Vladimir). Grievous Wounds corta a cura pela metade durante a janela de execute da R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — compre como 3º ou 4º item contra CC duro single-target que cancela o channel da sua R (Blitzcrank hook, Morgana Q, Ashe R). O spell shield bloqueia uma habilidade e deixa você terminar o cast.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quando você está à frente e precisa de lifesteal mais um escudo para sobreviver a fights longos sem um peeler dedicado.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra divers de all-in (Diana, Kha'Zix, Master Yi). O Move Speed em combate e o ghosting nos minions ajudam você a kitar (recuar enquanto ataca) até seu time peelar.

**Botas:** Berserker's Greaves de padrão. Boots of Swiftness só ficam corretas quando o time inimigo empilha slows que você não consegue evitar (composição tipo Ashe + Nautilus + Anivia).

**Skill order:** Maximize **Q** primeiro (DPS principal e waveclear), **W** depois (confiabilidade do root e dano base), **E** por último (utility, basta um ponto para o slow). Coloque ponto na **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Precision** com **Fleet Footwork** (movimento + sustain na lane), **Presence of Mind** (refund de mana na ulti), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace** (dano extra em alvos de pouco HP — combina com o 4º tiro execute do Jhin). Secundária **Sorcery** com **Absolute Focus** e **Gathering Storm** para scaling de late game.

## Matchups principais

- **Caitlyn:** Ela te out-rangeia nas auto-attacks mas perde todo all-in (compromisso total mirando uma kill, não só um trade rápido) assim que você tem 4 stacks da passiva. Fique atrás dos minions, faça Q-poke quando ela errar traps e dê W-root nela se seu support tocar primeiro.
- **Draven:** Lane bully. Evite trades de auto-attack no level 1-3; ele ganha as trocas diretas de DPS. Espere o poke de Q quando ele estiver ocupado stackando os machados; se ele sobrextender, seu crit do 4º tiro pune forte.
- **Lucian:** Ele bursta nas suas janelas de reload. Fique de olho no contador de 4 tiros (o ícone do revólver mostra os tiros restantes) e nunca inicie um trade com o tiro 3 ou 4 — recarregue primeiro, depois engaje.
- **Sivir:** O spell shield dela bloqueia seu W-root. Force o shield com Q primeiro, depois jogue W quando estiver em cooldown. Depois do 6, a R dela permite chase, então só fight com CC do support para follow-up.
- **Soraka / Yuumi:** Supports pure-heal. Compre Mortal Reminder como 3º ou 4º item; sem Grievous Wounds (o debuff que corta a cura pela metade) você não mata elas por mais tiros que acertar.

## Power spikes e condições de vitória

- **Level 2-3:** Com **Q** e **W** você tem o pattern de all-in level 2 mais forte da lane: engage do support → AA → Q → W root para o crit do 4º tiro. Force um fight na primeira vez que chegar ao level 2 antes do inimigo.
- **Level 6:** **Curtain Call** desbloqueia. Você consegue fechar kills iniciadas pelo seu jungler no rio ou pegar um inimigo de pouco HP a uma tela de distância durante um recall. Tenha sempre R pronta antes dos fights de objetivo começarem.
- **The Collector pronto (~ minuto 11-13):** Spike do primeiro item. O 5% de execute deixa você fechar kills iniciadas pelo support. É a janela em que snowballar a lane (transformar uma vantagem inicial em vantagem de itens, que vira vantagem de kills) é mais fácil.
- **Infinity Edge online (~ minuto 28-32):** Spike de três itens. Seu 4º tiro one-shota a maioria dos champions não-tank. Force teamfights nos objetivos agora — Jhin late com IE + Rapid Firecannon acerta backlines (os carries atrás dos tanks) de fora do alcance da R deles.

## Erros comuns

- **Auto-attackar quando o tiro 4 está carregado num tank.** O 4º tiro execute é desperdiçado em frontliners full HP. Guarde o 4º tiro para um alvo squishy que avança, ou last-hite um minion para resetar o ciclo antes de re-engajar.
- **Andar para frente durante o reload.** Depois do 4º tiro você precisa recarregar antes da próxima auto-attack. Recue nessa janela — muitas mortes do Jhin acontecem no meio segundo em que o inimigo percebe que você não consegue atirar.
- **Jogar W às cegas para poke.** W só dá root se o alvo foi danificado recentemente por você ou um aliado (em ~4 segundos). Acerte uma auto-attack ou espere o engage do support primeiro; senão W é só uma linha lenta de dano fácil de desviar.
- **Channelar R sem vision.** Jhin fica preso no lugar durante Curtain Call. Sem wards cobrindo flancos, um assassino contorna e te mata no meio do channel. Coloque E (a armadilha lotus) no flanco antes de apertar R.
- **Pular o placement de E nos objetivos.** Armadilhas lotus cobrem as entradas das pits do Drake e Baron com custo zero. Coloque a cada cooldown — revelam flancos, atrasam engages e confirmam W-roots.

## Dica avançada

Use **E** (Captive Audience) como confirm para os roots de **W**. A armadilha lotus arma de forma invisível e aplica slow em quem pisar nela; se você prevê por onde o support inimigo vai andar para wardar, solte **E** lá 2 segundos antes e dispare **W** no momento em que o slow da armadilha ativa — o slow torna o W-skillshot de 3000 de alcance impossível de desviar de qualquer ponto do mapa. Jhins experientes conseguem pelo menos um W-root de 3000 de alcance por fight com essa técnica.
