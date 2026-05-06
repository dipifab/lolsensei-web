---
title: "Kayn Jungle Build & Guide — Patch 16.9"
slug: "kayn-jungle"
language: "ko"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Kayn 정글 공략. Rhaast와 Shadow Assassin 폼 선택 기준, 정글 클리어 동선, 갱킹 타이밍, 핵심 매치업, 파워 스파이크와 운영 팁을 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "적에게 피해를 주면 두 색의 orb가 차오른다: melee/fighter는 빨강, ranged/mage는 파랑. 한 게이지가 100%가 되면 6레벨에 Rhaast(빨강) 또는 Shadow Assassin(파랑)으로 변신한다."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "짧은 dash로 경로의 적을 베고 이어서 작은 AOE slash. 주 이동기이자 waveclear 도구. Rhaast의 slash는 최대 HP 비례 피해를 입힌다."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "긴 직선 slow. Rhaast 버전은 적을 공중에 띄운다(knock-up). Shadow Assassin 버전은 이동 중 사용 가능하고 사거리가 더 길다."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "벽을 통과하며 추가 이동속도와 진입 시 소량 heal. Shadow Assassin은 지속시간 증가, slow 면역, 쿨다운 감소 효과를 더 받는다."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "표식이 찍힌 적 챔피언(피해 후 3.15초간 유지) 안에 잠시 숨었다가 큰 burst로 튀어나온다. 그동안 untargetable이라 적 CC를 피하는 용도로도 쓴다."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "ranged carry 다수가 kite하는 조합 — 액티브 슬로우로 E + Q 후 Rhaast가 붙어있게 해준다"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "AD 더블(Yasuo + Caitlyn) 상대 — 출혈로 물리 burst를 시간에 분산시킨다"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "스킬 기반 magic burst(Syndra, Veigar, Annie) — MR과 저체력 라이프라인 실드 제공"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin이 single-target CC(Morgana Q, Ashe R) 상대 — spellshield가 engage 직전 hook을 차단"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin이 armor 누적 상대(Tabi tank, Bramble Vest) — armor pen과 피해 시 슬로우"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast가 armor 누적 상대(Sion, Malphite) — 매 타격마다 armor를 깎고 추가 HP 제공"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "변신 전까지 살아남아 6레벨에 변신: frontline 탱커는 Rhaast, 후방 squishy 캐리는 Shadow Assassin. 적 정글러 타이밍을 처벌하고 R 픽으로 snowball하라."
  weakness: "변신 전 Kayn(1-5레벨)은 정글러 중 가장 약한 축이다. 클리어가 느리고 sustain이 없으며 invade에 취약하다. 변신 전 뒤처지면 스케일링이 무너져 기여를 못 한다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "탱키한 melee bruiser와 frontline juggernaut"
      reason: "Rhaast의 max-HP 기반 Q 피해와 W의 knock-up은 다른 assassin들이 못 잡는 고체력 frontline을 찢어낸다. skirmish에서 그들과 싸우다 보면 자연스럽게 빨강 orb가 채워진다."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "이동기가 없는 ranged carry (dash 없는 ADC)"
      reason: "Shadow Assassin의 R은 적 위치 안쪽에서 등장해 frontline 너머로 burst한다. 시전 중 untargetable인 채널을 회피할 수단이 없다."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Squishy enchanter support"
      reason: "Shadow Assassin은 E로 벽을 넘어 1-2개 스킬로 즉사시켜 팀의 peel과 disengage 수단을 교전이 시작되기도 전에 제거한다."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "invade 압박이 강한 초반형 정글러"
      reason: "변신 전 Kayn의 첫 세 캠프를 위협한다. 2-3레벨 invade가 성공하면 클리어가 약해 사이드를 못 지키고, 그대로 스케일링이 봉쇄된다."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "지정형 hard CC를 가진 탱커"
      reason: "Rammus Q 도발이나 Malphite R은 E 밖 Kayn을 잡아 콤보를 무력화시킨다. Shadow Assassin R의 untargetable조차 시전 전에 stun당하면 소용없다."
    - examples: ["xin-zhao", "warwick"]
      archetype: "duel과 counter-gank가 강한 정글러"
      reason: "약한 초반의 Kayn을 1v1로 이기고 변신 전 invade가 가능하다. 정글이 캠핑당하면 6레벨 변신 전까지 답할 방법이 없다."
---

## 개요

Kayn은 독특한 변신 메커니즘을 가진 melee assassin/fighter 정글러다. 6레벨에 두 폼 중 하나로 변신한다. **Rhaast**(빨강 폼)는 hybrid bruiser로, 스킬 피해로 회복하며 melee 탱커 상대에 강하다. **Shadow Assassin**(파랑 폼)은 AD assassin으로 squishy 캐리를 지운다 — "squishy"란 ADC처럼 피해는 높고 방어는 낮은 챔피언을 뜻한다. 어느 폼이 되는지는 초반에 어떤 "orb"를 채웠느냐에 달렸다. melee/fighter와 싸우면 빨강이, ranged/mage와 싸우면 파랑이 채워지고, 100%에 먼저 도달한 게이지가 폼을 확정한다.

게임 플랜은 두 단계다. **변신 전(1-5레벨)** 에는 약하다. **Q** + **W**로 효율적으로 클리어하고, 질 만한 skirmish(2-4명이 붙는 작은 교전, full teamfight가 아님)를 피하며 6레벨까지 power-farm을 노린다. **변신 후** 에는 진짜 위협이 된다. Rhaast는 길어지는 교전을 찾아 frontliner에 다이브하고, Shadow Assassin은 적 팀이 모이기 전에 고립된 캐리에 **R** 픽(dive = 적을 타워 아래나 트인 곳에서 덮쳐 잡는 행위)을 노린다.

## 추천 빌드

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper는 오브젝트 교전에서 tenacity(crowd control 저항)를 주는데, Kayn은 양쪽 폼 모두에서 이게 중요하다. Shadow Assassin으로 갈 게 확실하고 픽용 이동속도가 더 필요하면 ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling**을 골라라.

**Core items (순서):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — Rhaast의 1코어. AD, attack speed, 액티브 슬로우. **Q** dash와 잘 맞물려 kite하는 캐리에 붙어있게 해준다(kite = 공격하면서 뒤로 빠져 melee와 거리를 유지하는 행동).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — stun이나 root가 있는 팀 상대 기본 신발. AA 데미지가 많다면(AD 캐리 둘) ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 바꿔라.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD 스케일링, 라이프라인 실드(HP-threshold passive: HP가 일정 % 이하로 떨어질 때 발동하는 실드). Rhaast가 길어지는 교전을 시작해 살아남으려면 필수다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — Rhaast의 핵심. AD, armor, ability haste, 그리고 출혈 효과(받은 피해를 한 번에 받지 않고 여러 초에 걸쳐 분산). 강한 물리 데미지 딜러가 둘 있는 팀에 가장 좋다.

**Shadow Assassin 코어 경로** (위 1, 3, 4번을 대체):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — Shadow Assassin의 lethality 1코어(flat armor pen이지만 armor 높은 적에게는 효과 감소). AD, lethality, ability haste에 광역 액티브가 있어 클리어를 돕고 **R** 후 체력 깎인 적을 마무리한다.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst와 맵 전체 픽을 위한 이동속도 액티브.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 5% 미만 HP 적을 즉사시키는 처형 패시브. **R** burst 후에 완벽하다.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 스킬 기반 magic burst(Syndra, Veigar, Annie) 상대. magic resist와 저체력 라이프라인 실드.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin이 single-target CC(Morgana Q, Ashe R) 상대. spellshield(다음 적 스킬을 막는 패시브)가 engage를 살린다.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin이 armor 누적 상대(Tabi tank, Bramble Vest). armor pen과 피해 시 슬로우.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast가 Sion, Malphite 또는 armor를 쌓는 frontline 상대. 매 타격마다 armor를 깎고 추가 HP를 준다.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — magic 백라인(Xerath, Vel'Koz)의 강한 poke 상대. 큰 HP와 전투 외에 회복되는 magic 실드.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**가 tenacity(stun과 slow의 지속시간 감소)를 위한 기본이다. AD 캐리가 둘이면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 바꿔라.

**Skill order:** **Q**를 먼저 마스터한다(정글 캠프에서 리셋, 주 데미지). 두 번째로 **E**(쿨다운 감소로 재배치와 벽 플레이). **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**Runes:** 메인은 **Precision**과 **Conqueror**(교전이 길어질수록 adaptive force 누적, Rhaast의 길어진 다이브에서 정점), **Triumph**, **Legend Alacrity**, **Coup de Grace**. 보조는 **Domination**으로 **Sudden Impact**(**E** 벽 진입이나 **Q** dash 후 추가 lethality)와 **Relentless Hunter**(전투 외 이동속도, 정글 동선용). Shadow Assassin 즉사 세팅에서는 Domination의 **Hail of Blades**가 대안이다 — **R** 직후 짧은 공격속도 burst를 준다.

## 주요 매치업

- **Lee Sin / Elise:** 초반 bully. 톱 라이너에게 도와줄 CC가 있다면(counter-gank) 톱쪽 캠프부터 시작하고, 1:30에 raptor/red 입구에 와드를 박아라. 톱이 같이 오지 않는다면 강 Scuttle Crab은 절대 다투지 마라 — 변신 전 1v1로 진다.
- **Sett / Darius (top):** 톱 갱이면 Rhaast 무료 피드 표적이다. 그들의 스킬셋은 melee 거리에 들어오게 강제하므로 빨강 orb가 빠르게 찬다. 주 스킬(Sett W, Darius pull)을 쓸 때까지 기다린 뒤 Rhaast라면 **E**로 벽 통과 + **Q** + **W** knock-up으로 engage하라.
- **Vayne / Caitlyn (bot):** Shadow Assassin 우선 표적. **R**을 회피할 dash가 없고, 거리를 두고 싸우니 파랑 orb가 채워진다. 변신 후엔 봇 라인을 쿨마다 갱하라.
- **Malphite / Rammus (top jungle counter):** 지정형 hard CC가 콤보를 닫아버린다. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**를 일찍 사고, 서포터 CC가 먼저 준비되지 않은 상태에서 절대 engage하지 마라.
- **Yuumi / Lulu (적 서포터):** late-game 한타에서 Shadow Assassin의 무료 표적. 캐리에서 떨어지는 순간 측면에서 **R**로 잡아라 — 자기 보호 수단이 없다.

## 파워 스파이크 및 승리 조건

- **6레벨 + 폼 변신:** 이게 스파이크다("스파이크"란 레벨이나 아이템으로 챔피언이 훨씬 강해지는 순간을 뜻한다). 변신 전엔 평균 이하지만, 변신 후엔 톱-3 정글러가 된다. 적 팀이 아직 약하다고 여길 때, 변신하는 그 순간에 첫 대형 플레이(갱 또는 **R** 픽)를 타이밍 맞춰라.
- **Crab 컨트롤(3:15, 6:00):** Crab은 경험치와 vision을 준다. 변신 전 Kayn은 1v1로 못 다투니, 톱이나 미드 라이너를 데려와 다투거나 깔끔히 내주고 죽지 말고 캠프를 farm하라.
- **첫 Drake 교전(6-9분):** 변신 전 Kayn은 5v5 난전에 약하다. 팀이 너 없이 Drake를 가져갈 수 있다면, 반대편에서 Voidgrubs 트레이드(톱 강에 있는 작은 벌레들로, 마지막 타격을 친 팀에 패시브를 준다)를 합의하고 정글을 farm하라.
- **첫 코어 완성(~13-15분):** Rhaast는 ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**, Shadow Assassin은 ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra**: 이때 갱 전환율이 "완벽한 셋업이 필요"에서 "라이너가 flash 한 번만 써도 킬"로 바뀐다.
- **Shadow Assassin 3코어(~22-25분):** ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector**가 나오면 **R** 콤보가 5% 미만 HP의 squishy를 즉사시킨다. 오브젝트 교전 전에 pickoff(고립된 표적 처형)를 강제하라.

## 흔한 실수

- **팀 조합에 안 맞는 폼을 확정함.** 화려해 보인다고 매판 Shadow Assassin을 자동 픽하지 마라. 적 팀을 봐라: 탱커/bruiser 3+ = Rhaast(max-HP 피해와 sustain이 중요). dash 없는 squishy 캐리 2+ = Shadow Assassin. 잘못된 orb를 채우는 건 본인 책임이다 — 옳은 게이지가 락인될 때까지 해당 적군과 싸워라.
- **6레벨 전 갱.** 변신 전 Kayn의 갱은 데미지가 거의 0이다. 적 라이너가 30% HP 미만이거나 hard-CC-lock 상태가 아니면, 갱은 farm해야 할 시간을 낭비할 뿐이다. 변신 전엔 오버킬 셋업(라이너의 명백한 Flash + 궁 셋업)에서만 갱을 가라.
- **출구 없는 R 방어 사용.** **Umbral Trespass**는 적 안에 있는 동안 untargetable이지만, 시전했던 같은 위치로 튀어나온다. 5명 한타 안에 CC를 피하려고 궁을 썼는데 팀이 이기고 있지 않다면, 피하려던 죽음 그대로 나오게 된다. 마무리 가능할 때나 아군 도착 시에 **R**을 써라 — 패닉 Flash로 쓰지 마라.
- **E로 벽을 넘어 적 팀 한가운데로 진입.** **Shadow Step**의 벽 통과는 화려하지만 쿨다운이 길다. 뒤에 도주로가 없는 상태로 벽을 넘어 engage하면 완전히 commit된다. **R**이 준비되고 명확한 표적이 있을 때가 아니면 벽을 넘어 all-in(후퇴 없이 교전에 commit)하지 마라.
- **Rhaast로서 빨강 orb 교전을 무시.** Rhaast로 결정했다면 melee 표적과의 매 교전이 게이지를 더 빨리 채운다. 톱 라이너와의 skirmish에서 도망치지 마라 — 들어가서 게이지를 채우고, 8분이 아니라 5-6분에 폼을 확정하라.

## 고급 팁

**E**를 도주가 아니라 vision 도구로 공격적으로 활용하라. 적 정글의 벽 안에 들어가 1.5초 기다리면 공격 commit 없이 적 정글러가 반대쪽에 있는지 알 수 있다 — 벽 안에 있는 동안 적은 Kayn을 보지 못한다. 캠프가 비었다면 적은 네 사이드에 있다는 뜻이고 뒤로 회전한다. 캠프가 살아있다면 벽을 넘어 예상치 못한 각도에서 **Q** + **W** 콤보로 invade할 수 있다. 이 한 가지 트릭만으로 Kayn은 mid-game에서 "스케일링 정글러"에서 "정보 정글러"로 변한다.
