---
title: "Fiora Top Build & Guide — Patch 16.9"
slug: "fiora-top"
language: "ko"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Fiora 탑 완벽 공략. 듀얼리스트 빌드 경로, Vital 관리법, parry 타이밍, 핵심 매치업 대처, 파워 스파이크 활용, 자주 하는 실수까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "근처 적 챔피언마다 빛나는 약점(Vital)이 나타난다. 맞추면 true damage가 들어가고 Fiora를 회복시키며 짧은 시간 Move Speed를 부여한다."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "가장 가까운 적을 찌르는 짧은 방향성 대시. 기본 공격 타이머를 리셋한다. 적중 시 쿨다운 대부분이 환급되어 Q 연계가 핵심 기동력이 된다."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry. 짧은 순간 들어오는 모든 데미지와 disable을 막은 뒤 지정 방향으로 찌른다. 첫 적은 슬로우, CC를 막았다면 스턴이 들어간다."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "다음 두 번의 기본 공격을 강화한다. 첫 타는 대상을 슬로우, 둘째 타는 무조건 크리티컬. 둘 다 윈도우 동안 attack speed 보너스를 준다."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "대상 챔피언 주변의 네 Vital을 모두 드러낸다. 모두 맞히거나(또는 Vital 한 개 이상 맞힌 뒤 처치하면) Fiora와 주변 아군을 큰 AOE로 회복시킨다."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 마법 데미지나 CC 연계가 많을 때 Plated Steelcaps에서 스왑 (Lissandra, Ryze, Sett 풀)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "탱키한 브루저 상대 (Mundo, Sion, Ornn) — 첫 타 크리 + 회복으로 HP-스태커를 압도"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "기동성 좋은 탑 상대 (Camille, Irelia, Renekton) — Q만으로 부족할 때 dash + 슬로우로 스틱"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 버스트 상대 (Mordekaiser, Vladimir, Rumble) — 마법 실드 + MR로 1v1 splitpush 윈도우 확보"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "방어력 스택 프론트라인 상대 (Malphite, Rammus, Shen) — armor pen + 슬로우로 Vital 사정거리 유지"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "초반 Vital 관리로 회복하고 스노우볼, Trinity Force 완성 후 사이드 라인 splitpush로 두 명을 강제하라. 한타에서는 R로 가장 물렁한 타겟을 잡고 AOE 회복으로 장기전을 승리한다."
  weakness: "초반 6레벨까지 물몰이고 아이템 의존도가 매우 높다. 하드 CC 연계와 원거리 견제(Teemo, Quinn, Gnar)는 Vital 접근을 막는다. Q 리셋이 안 되면 기동력이 전무하다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "큰 단일 스킬에 의존하는 느린 저거넛"
      reason: "Fiora의 W는 이들의 정체성인 텔레그래프된 wind-up 한 방을 정확히 막는다 (Darius E 풀, Sett W 슬램, Garen Q 침묵). wind-up이 낭비되면 그녀는 둘레를 돌며 Vital을 마음껏 친다."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "Vital을 막지 못하는 HP-스태커 탱커"
      reason: "Vital은 대상 최대 HP의 일정 비율을 true damage(armor와 MR을 무시하는 데미지)로 입힌다. HP를 쌓을수록 장기전에서 R로 더 크게 깎인다."
    - examples: ["nasus", "kayle"]
      archetype: "라인전이 약한 후반 스케일링 근접 챔피언"
      reason: "Q 리셋으로 2레벨부터 미니언에서 떼어내 처치하거나 타워 아래로 반복해서 밀어붙여 위협적인 아이템에 도달하기 전에 무력화한다."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Q 사거리 밖에서 카이팅하는 원거리 탑"
      reason: "Fiora는 6레벨 전 원거리 견제에 답이 없다. 기본 공격 사거리에서 시야를 흐리거나 dash로 빠지고, 그녀는 Vital에 닿아 회복할 수 없다."
    - examples: ["jax", "irelia", "camille"]
      archetype: "주문형 기동력을 가진 스커미셔"
      reason: "그들의 dash는 그녀의 포지셔닝 게임을 무시한다. Jax E는 parry 윈도우를 뚫고 스턴, Irelia Q 리셋은 매초 재배치, Camille R은 Fiora를 1v1로 가둔다."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "포인트 앤 클릭 락다운형 하드 CC 탱커"
      reason: "그들의 CC는 이미 걸렸을 때 막을 수 없는 안정적인 형태다. Malphite R이나 Poppy 스톱-차지는 Fiora의 R 윈도우를 끊고 그동안 팀은 4v5를 강요받는다."
---

## 개요

Fiora는 **skirmisher**, 어쌔신처럼 1-2초 안에 버스트하는 대신 1v1 장기전을 이기는 근접 듀얼리스트다. 그녀의 키트는 패시브 **Duelist's Dance**를 중심으로 돈다. 근처 적 챔피언마다 **Vital**이라 불리는 빛나는 약점이 나타나고, 몇 초마다 새로운 방향으로 회전한다. Vital을 맞추면 **true damage**(armor와 MR을 무시하는 데미지)를 입히고, 그녀를 회복시키며 Move Speed를 준다. Q **Lunge**는 짧은 쿨다운의 짧은 dash로, 적중 시 쿨다운이 거의 다 환급되므로 적 주위로 Q를 연계해 다음 Vital에 도달하는 것이 핵심 메커니즘 루프다. W **Riposte**는 **parry**, 즉 다음 데미지나 CC 한 인스턴스를 막고 반격으로 찌르는 짧은 실드이며, CC 효과를 막았다면 대상을 스턴시킨다.

게임 플랜은 설명은 간단하지만 메커니컬하다. 라인에서는 Vital을 관리해 자가 회복하고 적을 깎으며, 2레벨이나 6레벨 올인(킬에 완전히 commit하는 fight) 타이밍을 노리고, **Trinity Force**가 나오면 **splitpush**(혼자 사이드 라인을 밀어 적이 누군가를 보내 막게 강제하는 것)에 들어간다. R **Grand Challenge**가 켜지면 Fiora는 게임에서 가장 강력한 1v1 챔피언 중 하나가 된다. 고립된 타겟에 R을 걸고 네 Vital을 모두 맞히면, 마지막 AOE 회복이 한타를 혼자 뒤집을 수 있다. 초반 6레벨까지는 물몰이고 아이템 의존적이므로, 초반 라인은 킬이 아닌 Vital 관리에 관한 것이다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. HP 재생 패시브가 적의 견제(fight에 commit하지 않고 HP를 깎는 원거리 데미지)를 흡수해 2레벨 Q-E 스파이크까지 버티게 해준다. ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**는 초반 올인이 예상되는 근접 라인(예: 미러 Fiora, Garen)에서만 사용한다.

**코어 아이템 (순서):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 첫 아이템 스파이크 (데미지와 **stickiness**, 즉 도망치는 타겟에 달라붙는 능력의 가장 큰 도약). on-hit Spellblade 프록은 매 Q마다 큰 보너스 데미지를 터뜨리고, 스킬 사용 후 Move Speed 패시브가 Vital 추격을 강화한다. AD, attack speed, ability haste(스킬 쿨다운을 줄이는 스탯), HP 모두 키트가 원하는 것과 맞아떨어진다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 적이 주로 기본 공격으로 데미지를 줄 때의 기본 신발.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP에 더해 **lifeline 실드**: HP가 ~30% 아래로 떨어지면 자동으로 실드가 발동된다. R 타겟의 마지막 두 Vital을 마무리하기 위한 추가 시간이 필요한 바로 그 윈도우다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — **버스트** AD(1-2초 안에 들어오는 큰 데미지)를 느린 출혈(다음 몇 초에 걸쳐 분산되는 데미지)로 변환한다. 처치 시 남은 출혈은 정화되어 splitpush 다이브를 위한 깨끗한 리셋이 된다.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — 기본 공격에 AOE 클리브와 omnivamp(기본 공격이 아닌 어떤 데미지에도 적용되는 lifesteal)를 추가한다. 웨이브클리어를 두 배로 만들어 시간을 너무 쓰지 않고 사이드 라인을 splitpush할 수 있다.

**상황 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 상대 팀에 강한 마법 데미지나 **CC**(crowd control: 스턴, 속박, 넉백 등 너를 묶어두는 모든 것) 연계가 많을 때 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 스왑한다. tenacity(자신에게 걸리는 CC 지속 시간을 줄이는 스탯)가 한타에서 W parry 윈도우를 살아있게 유지한다.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 탱키한 브루저 라인(Mundo, Sion, Ornn) 상대 첫 아이템 대안. fight 중 챔피언에 가하는 첫 기본 공격이 크리하고 회복시켜 — HP-스태커 상대 추가 sustain.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 기동성 좋은 탑(Camille, Irelia, Renekton) 상대. dash + 슬로우 액티브가 Q 리셋만으로 Vital 사정거리에 못 잡을 때 두 번째 gap-closer(적과의 거리를 좁히는 도구)를 제공한다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 **AP**(Ability Power, 마법 데미지의 기반 스탯) 버스트(Mordekaiser, Vladimir, Rumble) 상대. lifeline 마법 실드 + MR이 1v1 splitpush를 이길 수 있게 만든다.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 방어력을 쌓는 프론트라인(Malphite, Rammus, Shen) 상대. armor pen에 더해 슬로우 프록(데미지 히트마다 자동 발동되는 패시브)이 탱커를 충분히 묶어 네 Vital을 모두 클리어할 수 있게 한다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본이다. 상대 팀이 CC 소스 3개 이상이거나 강한 마법 데미지가 있을 때 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 스왑한다.

**스킬 순서:** **Q**를 먼저 마스터한다 (랭크마다 쿨다운이 떨어져 리셋이 거의 즉시화된다). **E**를 두 번째로 마스터한다 (강화 크리 데미지 증가, Vital을 셋업하기 위한 더 긴 슬로우). **W**는 마지막에 마스터. **R**은 6, 11, 16레벨에 찍는다.

**룬:** 주 트리 **Precision**에 키스톤(트리의 핵심 룬) **Conqueror** — fight를 지속하면 보너스 AD가 쌓이고 ~5초 후 캡된다. **Triumph**(처치 관여 시 회복과 골드), **Legend: Bloodline**(처치 관여마다 lifesteal 스택), **Coup de Grace**(40% HP 이하 추가 데미지 — Vital 마무리에 완벽)와 함께 사용한다. 보조 트리 **Resolve**에 **Bone Plating**(데미지를 받은 후 다음 3타 데미지 감소)와 **Revitalize**(R 팀 회복 강화). 스탯 파편: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## 주요 매치업

- **Darius:** 스킬 매치업. 그의 Q 외곽날은 출혈 스택을 누적시켜 raw 트레이드에서 이기지만, 키트 전체가 텔레그래프돼 있다. 그의 풀 E에 **W**(parry)를 쓰면 트레이드가 뒤집힌다. 풀을 막으면 그가 거의 1초간 스턴되니 — Q in, Vital 두 개, 빠진다. 패시브가 4-5스택일 때는 절대 트레이드하지 마라.
- **Camille:** 어려운 매치업. 그녀의 E 후크샷은 두 번째 캐스트에 적중하면 W를 뚫고 스턴시키고, R은 1v1로 고립시킨다. **W**는 그녀의 Q가 아닌 R을 위해 아껴라. 초반에 스노우볼한다면 Trinity 대신 ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**를 산다.
- **Teemo:** 잔혹한 라인. 쿨다운마다 너를 시야 차단(짧은 시간 기본 공격을 무효화)하고 Q 사거리 밖에서 견제한다. 자기 타워 근처에서 웨이브를 **freeze**(밀지 않고 웨이브를 자기 쪽에 유지)해 그의 farm(미니언에서 얻는 골드와 경험치)을 차단하고 정글러를 부른다.
- **Garen:** 유리. Q-W로 그의 **W**(데미지 감소 실드)를 베이트한 뒤 옆으로 걸어 측면 Vital을 친다. 그의 Q 침묵은 직선 wind-up이니 — 반응으로 막아라. 1-2 아이템 앞서지 않는 한 R 아래에서 올인은 피한다.
- **Jax:** 첫 아이템 후 Fiora가 이기는 동등한 매치업. 그의 **E**(2초 스턴 wind-up)를 막으면 라인은 너의 것이다. 그 parry 없이는 채널 중 너의 어떤 히트도 스턴으로 뚫어버려 E + 카운터-스트라이크가 너를 out-trade한다.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + E가 열리면 진짜 올인 윈도우가 생긴다. Vital을 위해 Q in, 슬로우 + 크리 기본 공격을 위해 E, 다음 Vital을 위해 옆으로 걸어간다. 대부분의 라인은 단 한 번의 2레벨 트레이드로 HP의 1/3을 잃는다.
- **6레벨:** 첫 **R** 해금. 제로 아이템에서도 R은 타겟을 고립시키고 AOE 회복이 처치 후에도 너를 살린다. 정글러가 탑 사이드에 보이는 순간 1v1을 강제한다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~ 11-13분):** 데미지와 stickiness가 여기서 가장 크게 도약한다. 사이드 라인 splitpush가 가능해지고 적이 보내는 누구든 안정적으로 1v1로 이길 수 있다. 이게 켜지면 사이드 라인 압박을 강제하고 미드 한타는 무시한다.
- **세 아이템 + R 켜진 상태 (~ 22-26분):** 한타 절정. 가장 물렁한 타겟에 R, 네 Vital을 돌며 춤추고, AOE 회복이 두 번째 engage까지 팀 전체를 살린다. 백라인까지 못 가면 HP가 가장 높은 프론트라이너에 R — true damage가 그들의 빌드를 똑같이 잘라낸다.

## 흔한 실수

- **데미지 때문에 Q를 쿨마다 스팸.** Q는 포지셔닝 도구가 먼저, 데미지가 다음이다. 적 쪽으로 Q를 써서 풀 콤보를 그대로 맞으면 dash와 환급 둘 다 낭비한 것. **Vital 쪽으로** Q를 써라, 챔피언 쪽이 아니라.
- **W를 기본 공격에 낭비.** W는 어떤 데미지든 막지만, 미니언 기본 공격을 막은 건 잠재력 낭비다. 적의 가장 큰 단일 스킬을 위해 W를 아껴라. CC를 깨끗하게 막으면 무료 처치 윈도우다.
- **벽을 보고 R 사용.** R은 타겟의 동서남북 측면에 네 Vital을 배치한다. 적이 이미 벽에 붙어 있으면 두 Vital이 벽 쪽에 박혀 닿을 수 없다. 먼저 타겟을 트인 곳으로 끌어낸 뒤 R을 쓴다.
- **시야 없이 splitpush.** Fiora는 1v1은 누구든 이기지만 1v2는 매번 진다. 푸시 전에 적 사이드 라인 부쉬에 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward**를 박아라 — 없으면 매 푸시가 도망칠 수 없는 무료 갱크를 부른다.
- **풀 스택 패시브에 트레이드.** Darius, Sett, Renekton 같은 저거넛은 패시브가 가득 찼을 때 raw 트레이드에서 이긴다. 그들의 게이지가 가득 차면 빠지고, 웨이브를 푸시하고, 비워졌을 때만 트레이드한다.

## 고급 팁

스킬샷(직접 조준해야 하는 스킬) 대신 포인트 앤 클릭 궁극기(Mordekaiser R처럼 적을 자동 타겟팅하는 스킬)에 **W parry 타이밍**을 연습하라. 대부분 Malphite R이나 Sion R 윈드업에 W를 시도하는데, 괜찮지만 예측 가능하다. 큰 플레이는 **Mordekaiser R**(parry로 거의 1초 스턴되어 자유롭게 빠짐), **Skarner R**(suppression이 캔슬되고 그가 스턴됨), **Warwick R**(프레임 단위지만 깨끗한 한 번이 fight를 끝냄)을 막는 것이다. 커스텀 게임을 열어 친구에게 이 챔피언 중 하나를 잡게 하고, 미리 캐스팅을 멈추고 반응으로 바뀔 때까지 parry를 훈련하라. 반사가 되면 아이템 열세에서도 하드 CC 궁이 있는 모든 1v1이 너에게 유리하게 뒤집힌다.
