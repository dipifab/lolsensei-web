---
title: "Garen Top Build & Guide — Patch 16.9"
slug: "garen-top"
language: "ko"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Garen 탑 라인 완벽 공략. 시작 아이템, 저거넛 브루저 코어 빌드, 주요 매치업 대처법, 파워 스파이크 활용 타이밍, 라인전에서 자주 나오는 실수, 그리고 R 처형 우선순위를 활용한 고급 팀파이트 플레이 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "전투 이탈 후 몇 초간 피해나 스킬을 받지 않으면 HP가 회복됨. 치고 빠지는 hit-and-retreat 패턴의 핵심."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "이동 속도 증가와 슬로우 클렌즈. 다음 평타가 1.5초간 침묵 + 추가 피해를 입힘."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "패시브: 적 처치 시 방어력/마저 스택. 액티브: 실드 + 강인함, 이후 잔여 피해 감소 구간."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "주변 적에게 3초간 물리 피해를 주는 광역 회전. 핵심 웨이브클리어 및 지속 DPS 도구."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "잃은 체력에 비례해 적 챔피언을 처형. 가장 킬을 많이 먹은 적에게 추가 고정 피해."
      dd_spell_id: "GarenR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP 탑 상대 (Mordekaiser, Rumble, Vladimir) — 마법 실드 패시브가 장기 교전을 살림"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "더블 AD 조합 상대; 한타에서 글래스 캐논을 처벌하는 출혈 메커니즘 회피"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "AP 위협 3개 이상; 이동 속도 패시브로 한타 합류가 쉬워짐"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "크게 앞서고 Q 스킬가속 사이클을 원할 때 최상위 공격형 3코어"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Doran's Shield와 패시브 자생력으로 라인전을 버티고 Stridebreaker까지 스케일한 뒤, 사이드 라인에서 측면 진입해 R로 한타에서 킬 먹은 적 캐리를 처형."
  weakness: "돌진/점멸기 없음, 원거리 하드 CC 없음. 카이팅 (Quinn, Vayne)과 장거리 속박 (Lissandra, Mordekaiser 끌기)에 취약. W 스택 없이 오버익스텐드하면 라인이 무너짐."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 개요

Garen은 지속적인 존재감으로 가치를 만들어내는 근접 저거넛입니다. 패시브 **Perseverance**는 전투 이탈 후 체력을 회복시키고, **Decisive Strike (Q)**는 슬로우를 풀고 거리를 좁히게 해주며, **Courage (W)**는 평탄한 탱키함 구간과 패시브 저항력 스택을 제공하고, **Judgment (E)**는 광역 피해와 웨이브클리어 도구이며, **Demacian Justice (R)**는 잃은 체력에 비례해 무른 챔피언을 처형하면서 가장 킬 먹은 적에게는 고정 피해 스케일링까지 받습니다. 그는 메커니컬하게 가장 단순한 챔피언 중 하나입니다. 즉 모든 스킬 천장은 콤보 실행이 아니라 **map awareness** (맵 리딩)와 **wave management** (라인 운영)에 있다는 뜻입니다.

탑 라인에서는 **W** 액티브 동안의 짧은 교전과 자기 쪽 라인의 풀 웨이브를 원합니다. 1레벨부터 강하지만 무적은 아닙니다. 돌진기와 하드 CC가 없으므로 마음대로 이탈할 수 있는 매치업 (Quinn, Vayne)이나 원거리 속박이 가능한 매치업 (Lissandra, Mordekaiser 끌기)이 오버익스텐드하면 라인전을 압도합니다.

## 추천 빌드

**시작 아이템:** Doran's Shield + 체력 물약 1개. Doran's Blade는 CS를 차단하기 위해 일찍 올인해야 하는 원거리 탑 상대일 때만.

**코어 아이템 (순서대로):**

1. **Stridebreaker** — **Q**에 슬로우, 카이팅 대상에게 붙기 위한 광역 액티브, AD + HP 모두 유용.
2. **Plated Steelcaps** — 대부분의 탑 라인이 평타 위주. 적 팀에 CC 챔피언이 3명 이상일 때만 Mercury's Treads.
3. **Dead Man's Plate** — **Q**의 이동 속도 보너스와 시너지, 충격 패시브가 평소 올인 패턴에서 자연스럽게 발동.
4. **Sterak's Gage** — 폭딜 구간 생존기, AD 스케일링 덕에 **R** 처형 임계가 기본 수치보다 더 늦게 적용됨.

**상황 아이템:**

- **Maw of Malmortius** — AP 탑 상대 (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — 더블 AD 조합 상대 (글래스 캐논을 처벌하는 출혈 메커니즘 완화).
- **Force of Nature** — AP 위협 3개 이상; 이동 속도 패시브로 한타 합류가 수월해짐.
- **Spear of Shojin** — 크게 앞서고 스킬가속 사이클을 원할 때 최상급 공격형 3번째 아이템.

**신발:** 기본은 Plated Steelcaps. Renekton+Lissandra+무거운 CC 조합엔 Mercury's Treads.

**스킬 순서:** **E** 우선 마스터 (DPS와 웨이브클리어), **Q** 두 번째 (슬로우 + 유틸), **W**는 마지막 (패시브가 포인트 없이도 잘 큼). **R**은 6, 11, 16에 찍기.

**룬:** 주룬 **Precision**에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. 보조룬 **Resolve**에 **Second Wind** + **Unflinching**, 또는 로테이션 맵에서 신발 타이밍을 위해 **Inspiration**에 **Magical Footwear** + **Cosmic Insight**.

## 주요 매치업

- **Darius:** 1레벨에서 지고 Stridebreaker 이후엔 **E** 끌기를 피하면 이김. Doran's Shield 구매, 클렌즈를 위해 **Q** 레벨에 의존.
- **Fiora:** 6레벨까지는 그녀에게 하드 카운터, 단 vital을 맞지 않을 때 한정. **W** 액티브로 교전해 패리 가치를 부정한 뒤 이탈.
- **Quinn:** 실력 매치업; 그녀는 **Q** 실명 + **E** 도약으로 카이팅. Teleport 들고 첫 웨이브 CS는 포기, 4웨이브부터 미드 로밍.
- **Vayne 탑:** 체감상 가장 힘든 매치업. 1레벨 Plated Steelcaps, Doran's Shield + Second Wind, 정글러를 위한 플레이 — 6 이후 1대1 교전은 못 이김.
- **Mordekaiser:** 죽음의 영역 스파이크까지 가는 느린 라인전. 짧은 교전, 그의 **W** 쿨다운 동안 **Q** + **E** 적중, 그의 2번째 아이템 전에 Maw of Malmortius 완성.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **E**로 진짜 올인 가능. 적이 웨이브를 너에게 밀고 정글러가 탑 사이드에 있으면 그게 킬 윈도우.
- **6레벨:** **Demacian Justice**로 예전엔 도망가던 저체력 대상을 마무리 가능. 적 소환사 주문 추적; Flash 없으면 모든 근접 탑이 처형 사거리 안.
- **Stridebreaker 타이밍 (~ 11분):** 웨이브 통제권이 너에게 넘어옴. 맵 상태에 따라 슬로우 푸시, 프리즈, 또는 스플릿 푸시. **Q** + 액티브는 갱크에 대한 거리 좁히기 보험.
- **후반 에이스 조건:** 가장 킬 먹은 적에 대한 **R** 스케일링과 Sterak's Gage 덕에 캐리 솔로킬이 가능한 측면 위협이 됨. 일은 안개에서 **E**를 미리 켜두고 피일 들어오기 전에 **R** 적중시키는 것.

## 흔한 실수

- **W 스택 적을 때 앞으로 걸어 나오기.** **Courage** 패시브가 스택당 저항을 줌; 0스택일 때 (예: 부활 직후) 미니언으로 다시 채울 때까지 장기 교전은 피하기.
- **R로 시작하기.** **R**은 처형용이지 시작용이 아님. 시작으로 쓰면 시전 시간이 적에게 이탈 신호를 주고 킬 타이머를 잃음.
- **정지된 웨이브에 E 사용.** 평타 2번에 떨어지는 미니언 3개 위에서 회전하면 마나만 태우고 라인에 쿨다운 회전을 들킴. **E**는 교전용으로 아껴.
- **Q의 침묵 잊기.** **Q**는 1.5초간 침묵. 시전 중인 챔피언에게 항상 Q-인게이지 (Lulu의 변이, Karma의 실드, Lissandra의 R) — 침묵이 시전을 끊음.

## 고급 팁

킬을 많이 먹은 적 캐리가 너의 **R** 우선 대상으로 떠오르면, 그들의 서포터가 실드를 쓴다 해도 한타 한가운데서 flash-**R**로 잡을 수 있습니다. **R**의 처형 피해는 우선 대상에게 고정 피해이며, 대부분의 실드 예산은 너의 시전이 마무리되기 전에 팀의 폭딜에 이미 소진됩니다. 이 플레이를 위해 Flash를 아껴두세요. 만들어내는 에이스는 드래곤 한타 2번의 가치가 있습니다.
