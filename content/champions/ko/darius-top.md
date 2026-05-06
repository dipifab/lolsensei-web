---
title: "Darius Top Build & Guide — Patch 16.9"
slug: "darius-top"
language: "ko"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Darius 탑 완벽 공략. 시작 아이템부터 저거넛 코어 빌드, Conqueror 룬 선택, Hemorrhage 스택 압박, 주요 매치업 대처법, 파워 스파이크 타이밍, 라인전에서 자주 하는 실수, 그리고 W 캔슬 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "평타와 피해 스킬은 대상에게 출혈 스택을 부여합니다. 5스택이 되면 Darius는 격노 상태에 진입해 짧은 시간 동안 큰 추가 AD를 얻고, 출혈이 매우 강한 피해로 틱 합니다."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "넓은 원형 도끼 휘두르기. 바깥 칼날로 적중하면 풀 데미지가 들어가고 출혈 스택이 적용되며 Darius가 회복합니다. 안쪽 손잡이는 절반 데미지에 스택이 없습니다."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "다음 평타 강화: 추가 데미지와 강력한 둔화. 평타 타이머를 리셋하므로 일반 평타 두 번 사이에 끼워 넣어 초당 데미지를 극대화합니다."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "패시브: 고정 방어구 관통. 액티브: 짧은 사거리의 도끼 훅으로 원뿔 범위 내 적을 끌어당기며 둔화. 키트의 유일한 갭 클로저."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "챔피언에게 도약하며 대상에 쌓인 출혈 스택만큼 스케일링되는 고정 피해를 입힙니다. 처치 시 쿨다운이 초기화되어 다른 대상에게 다시 사용 가능."
      dd_spell_id: "DariusExecute"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 마법 데미지나 연계 CC가 많을 때 Plated Steelcaps에서 스왑 (Lissandra, Malphite 궁, Sett 풀)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "방어구를 쌓는 프론트라인(Malphite, Rammus, Shen) 상대 — 매 Q마다 팀 전체를 위해 방어구를 깎음"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "AP 위주 팀 상대로 Death's Dance와 R 흡혈에 더해 MR과 회복량 증폭이 필요할 때"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "방어구와 강인함을 쌓는 조합(Rammus, Tahm Kench, Malphite) 상대 — 방관과 피해 시 둔화"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "카이팅 챔(Quinn, Vayne 탑, Gnar)을 잡고 R 사거리에 진입하기 위한 추가 이동속도가 필요할 때"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Hemorrhage를 5스택까지 쌓고, 격노 창에서 보너스 AD를 활용해 R의 고정 피해로 마무리. 라인전 킬을 Stridebreaker 타이밍으로 굴려 사이드 1v1 스노우볼과 봇 다이브로 연결."
  weakness: "E의 짧은 풀과 R의 원샷 도약 외에는 기동성이 거의 없음. 장거리 카이터, 원거리 탑, 거리를 유지하는 챔(Quinn, Vayne, Teemo, Gnar)에게는 스택과 트레이드를 만들지 못함."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "강한 이탈기가 없는 단거리 근거리 브루저"
      reason: "Darius는 길어지는 트레이드에서 승리합니다. 평타와 Q마다 출혈 스택이 쌓이기 때문에 상대가 빠지려 할 때쯤이면 5스택 격노 창이 이미 교환을 그의 쪽으로 기울인 상태입니다."
    - examples: ["nasus", "kayle"]
      archetype: "초반이 약한 후반 스케일링 근거리"
      reason: "처음 6레벨 동안 수동적이라 Darius가 E + W로 반복적으로 웨이브에서 밀어낼 수 있고, 위협적이 되는 아이템에 도달하기 전에 처치할 수 있습니다."
    - examples: ["yasuo", "yone"]
      archetype: "Q 사거리 안에서 싸우는 근거리 캐리"
      reason: "딜을 하려면 Q 가장자리 사거리 안으로 들어와야 합니다. Wind Wall은 투사체를 막지만 근접 휘두르기는 막지 못해, 깔끔한 Q 바깥 칼날이 출혈 스택을 적용해 스노우볼을 시작합니다."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "원거리 또는 카이팅 탑"
      reason: "E 사거리 밖에서 Darius의 체력을 공짜로 깎아냅니다. E(짧은 훅)나 R(원샷 도약) 외에 갭 클로저가 없어 스택을 못 쌓고 라인 우선권을 잃습니다."
    - examples: ["fiora", "camille"]
      archetype: "고정 피해와 패리·실드를 가진 듀얼리스트"
      reason: "Fiora의 W는 Q 띄우기를 패리하고, 그녀의 급소(평타로 고정 피해를 주는 작은 표식 — 방어구와 마저를 무시하는 데미지)는 HP 빌드를 우회합니다. Camille의 R은 Darius를 팀에서 격리해 장기전에서 앞섭니다."
    - examples: ["gnar", "kennen"]
      archetype: "내장 CC를 가진 원거리 탑"
      reason: "둘 다 Q 사거리 밖에서 견제하며 원거리 스턴을 보유: Gnar의 메가 폼 던지기, Kennen의 W 스턴. Darius가 트레이드 창에 들어가지 못하게 하면서 체력을 계속 깎습니다."
---

## 개요

Darius는 **저거넛**(매우 강하게 때리고 정면 교전에서 데미지를 받아내는 느리고 기동성 없는 근거리 챔피언)으로, 대상에게 패시브 **Hemorrhage**를 누적시키는 것을 중심으로 설계되었습니다. 모든 평타와 Q의 **바깥 칼날**이 적중할 때마다 출혈 스택이 한 개씩 쌓입니다. **5스택**에서 그는 몇 초간 격노 상태가 되며 막대한 추가 AD를 얻습니다 — 이것이 상대를 처치하거나 폭발시키는 창입니다. 그의 키트에는 짧은 갭 클로저(**E**, 535유닛 훅) 하나와 긴 쿨다운의 도약기(**R**, 처치 시 초기화되는 고정 피해 처형기) 하나만 있습니다. 이 두 가지 도구를 빼면 그는 기본 이동속도로 걸어다니며 거리를 유지하는 적에게는 모두 죽습니다.

게임 플랜은 단순합니다: **상대가 죽을 때까지 붙어 있기**. 라인전에서는 Q를 **바깥 칼날**로 맞춰서(안쪽 손잡이는 안 됨 — 손잡이는 절반 데미지에 출혈 스택이 없습니다) 체력을 깎고 회복하며, 적이 이미 2-3 스택이 쌓였을 때 **E**(풀, 띄우기, 둔화)로 올인을 세팅하고 **W** + 평타 연계로 폭발시킵니다. 미드게임부터는 **R**이 처치 버튼입니다: 0스택에서도 강한 **고정 피해**(방어구와 마저를 모두 무시하는 데미지 — 줄여주는 방어 스탯이 없습니다)를 입히며, 처치할 때마다 쿨다운이 초기화되어 깔끔한 한타 진입은 R 2-3회 연속 사용으로 이어집니다. Stridebreaker가 나오는 순간, 그는 가장 강한 **브루저**(데미지와 생존력을 함께 갖춘 근거리 파이터) 중 하나입니다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. HP 회복 패시브가 상대의 포크(교전을 시도하지 않고 체력을 깎는 저비용 원거리 데미지)를 레벨 2 파워 스파이크까지 완화해 줍니다. ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**는 1-2레벨에 올인이 확실한 근거리 라인(예: 미러 Darius)에서만 선택하세요.

**코어 아이템 (순서):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 첫 아이템 스파이크(데미지와 **달라붙기**(도망치는 대상에게 계속 붙어 있는 능력)가 가장 크게 뛰는 순간). 액티브는 원뿔 범위 내 모든 대상을 둔화시키는 짧은 대시 — Darius에게 부족한 두 번째 갭 클로저(거리를 빠르게 좁히는 도구)와 정확히 일치합니다. AD, HP, 스킬 가속(스킬 쿨다운을 줄이는 스탯) 모두 키트가 원하는 것과 맞습니다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 적이 주로 평타로 데미지를 줄 때의 기본 신발. 길어지는 트레이드(라인에서 주고받는 데미지 교환)에서 그 데미지를 줄여줍니다.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP에 더해 **생명선 실드**: HP가 ~30% 아래로 떨어지면 자동 실드가 발동합니다. R 처치 초기화를 노리기 위한 추가 시간이 필요한 바로 그 창입니다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — **버스트** AD(어쌔신 콤보처럼 1-2초에 집중되는 높은 데미지)를 느린 **출혈**(한 번에 들어오는 대신 다음 몇 초간 분산되는 데미지)로 바꿔줍니다. 처치 시 남은 출혈이 정화되어 R 처치 연계와 완벽한 시너지.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 시작에 따라 첫 또는 네 번째 아이템 대안: 교전 중 챔피언에게 가하는 첫 평타가 치명타가 되며 회복합니다. W의 평타 리셋과 결합해 그 치명타가 거의 원하는 대로 들어갑니다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 상대 팀에 마법 데미지가 많거나 연계 **CC**(군중 제어: 스턴, 속박, 넉백 — 행동을 못 하게 하는 모든 효과)가 있을 때 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 스왑. 강인함(자신에게 걸린 CC 지속시간을 줄이는 스탯)은 캐리를 못 잡게 막는 팀에 결정적입니다.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 방어구를 쌓는 프론트라인(Malphite, Rammus, Shen) 상대. 매 Q 적중마다 팀 전체를 위해 대상의 방어구 스택을 깎습니다.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 강력한 **AP**(주문력, 마법 데미지의 기반 스탯) 상대. MR(마법 저항력)에 더해 회복량 증폭 패시브를 주어 Q 회복, Death's Dance 출혈 정화, R 흡혈 효과를 강화합니다.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 방어구와 강인함을 쌓는 탱커 조합 상대. 방어구 관통과 함께 모든 피해 스킬에 둔화 발동(매 적중마다 자동으로 발동하는 패시브) — Q, W, R 포함.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — 카이팅하는 적(Quinn, Vayne 탑, Gnar)을 잡아 그들이 재배치하기 전에 R 사거리에 들어가기 위해 누적 이동속도 패시브가 필요할 때.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 상대 팀에 CC 출처가 셋 이상 있거나 마법 데미지가 강할 때 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 전환.

**스킬 순서:** **Q**를 먼저 마스터(웨이브 클리어, 회복, 주된 데미지 원천). **W**를 두 번째로 마스터(둔화 지속시간이 랭크당 스케일하고 평타 리셋이 달라붙기 도구). 1, 2레벨에 **E**에 포인트를 찍어 방관 패시브를 챙기되 W 마스터를 계속 진행. **E**는 액티브 스케일링이 작아 마지막에 마스터. **R**은 6, 11, 16레벨에.

**룬:** 주 정밀 트리에 핵심 룬(트리의 메인 룬) **Conqueror** — 챔피언과 계속 싸우는 동안 보너스 AD가 누적되며 5초간 지속되는 전투 후 캡됩니다. **Triumph**(처치 관여 시 작은 회복과 골드 폭발), **Legend: Bloodline**(처치 관여 시 누적되는 흡혈), **Last Stand**(60% HP 미만에서 추가 데미지)와 조합. 보조 결의 트리에 **Bone Plating**(피해를 받은 후 다음 3회 적중에 데미지 감소)과 **Overgrowth**(근처 미니언 사망 시 HP 스케일링, 웨이브당 8개 이상 미니언을 막는 탑 라이너에게 완벽). 능력치 파편: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## 주요 매치업

- **Garen:** 실력 매치업(픽과 무관하게 더 잘하는 쪽이 승리). 그의 **W**(4초 데미지 감소 실드)는 출혈 스택 하나를 무효화하지만 Q의 침묵은 옆으로 걸으면 회피 가능. 그의 W가 쿨다운일 때 Q를 가장자리에 맞히고, R 아래에서 적어도 한 아이템 우위라면 트레이드에서 이깁니다.
- **Sett:** 유리한 라인. 그의 Q-W 콤보는 텔레그래핑(반응할 만큼 모션이 보이는 것)됩니다. 그가 W를 사용한 뒤 E로 풀하고, 재시전으로 빠지기 전에 출혈 스택을 쌓으세요. 그의 Grit(실드 게이지)이 가득 찼을 때는 트레이드 금지.
- **Fiora:** 가장 어려운 근거리 매치업. 그녀의 **W**는 패리(다음 스킬을 막고 반격하는 짧은 실드)입니다 — E를 쓰기 전에 Q로 미끼를 던지세요. 그녀의 급소는 고정 피해라 Death's Dance가 필수이며, 그녀가 초반 처치를 가져갈 때만 ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage**를 러시.
- **Quinn / Teemo:** 매우 힘든 원거리 매치업. 시야를 가리거나(짧은 시간 동안 평타를 무효화) 사거리 밖으로 카이팅합니다. 자기 타워 근처에서 웨이브를 **프리징**(푸시를 멈추고 라인의 자기 쪽에 웨이브를 유지)해 그들의 파밍(미니언에서 얻는 골드와 경험치)을 차단하고 정글러를 부르세요 — Darius는 도움 없이 이 1v1을 이기지 못합니다.
- **Mordekaiser:** R 타이밍이 결정짓는 동등한 매치업. 그의 R은 1v1 차원으로 격리합니다. 그가 자신의 E로 속박한 뒤 E를 아껴 가까이 풀하면 5스택에서 듀얼에 이깁니다. 그의 R이 죽일 정도라면 ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage**를 일찍 구매.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + E가 풀려 Darius에게는 진짜 올인 창(킬에 완전히 헌신할 수 있고 후퇴 옵션 없는 창)이 생깁니다. E로 풀, 데미지와 회복을 위해 Q를 가장자리에, 평타 두 번을 치면 적이 반응하기 전에 이미 출혈 3스택입니다.
- **6레벨:** 첫 **R** 잠금 해제. 적에게 이미 3스택만 있어도 R은 ~40% HP에서 처치할 만큼의 고정 피해. 정글러가 탑사이드에 모습을 보이는 순간 6레벨 올인을 노리세요.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker 완성 (~ 11-13분):** 액티브 대시 + 둔화가 키트에 부족했던 두 번째 갭 클로저를 제공합니다. 사이드 라인 1v1을 강요하고 픽(자리에서 벗어난 적을 단독 처치)을 위해 로밍(자기 라인을 떠나 미드나 봇을 도움).
- **두 아이템 + R 가용 (~ 18-22분):** 한타 정점 창. 백라인(전투 중 자신의 탱커 뒤에 서는 물몸 캐리들)으로 걸어 들어가 가장 HP가 낮은 대상에게 R, 다음 물몸에게 재시전. R 두 번 초기화만으로 한타를 끝낼 수 있습니다.

## 흔한 실수

- **Q를 안쪽 손잡이로 맞추기.** 손잡이는 절반 데미지에 **출혈 스택이 0**입니다. 휘두르기 애니메이션이 끝나기 직전에 한 발 뒤로 물러나 **바깥 칼날**이 대상에 닿게 하세요 — 의미 있는 유일한 Q 적중입니다.
- **E를 이동 도구로 사용.** E는 유일하게 신뢰할 수 있는 갭 클로저입니다. 웨이브를 가로지르려고 태우면 다음 16-26초 동안 진입 수단이 없습니다. 올인을 시작할 때 아껴두세요.
- **R을 너무 일찍 누르기.** R은 출혈 스택당 스케일링되는 고정 피해를 입힙니다. 0스택에서는 평범하고 5스택에서는 원샷 영역입니다. 죽어가는 적을 마무리할 때가 아니면 평타와 Q로 최소 3스택을 쌓은 뒤 R을 누르세요.
- **2차 타워 너머로 카이터 추격.** Darius는 탈출기가 없습니다. R이나 E가 없는 상태에서 타워를 넘어가는 모든 발걸음은 적 정글러에게 공짜 갱크이며, 낮은 기본 이동속도 때문에 깔끔한 이탈도 불가능합니다.
- **순수 탱커 아이템만 쌓기.** Darius는 HP만이 아닌 **AD**로 스케일합니다. Sunfire + Warmog's 빌드는 데미지를 죽여 물몸 원샷이 사라지고 느린 미니언이 됩니다. AD-브루저 코어를 유지하세요.

## 고급 팁

**W 애니메이션 캔슬**을 연습하세요: Crippling Strike가 평타 타이머를 리셋하므로 평타 한 번 → 즉시 W → 강화된 W-평타를 바로 발사 — 한 번의 시간에 풀 데미지 두 방. 같은 트릭이 반대로도 작동합니다: Q 휘두르기가 진행되는 *중에* W를 시전하면 강화 평타가 Q가 해소되는 순간에 들어갑니다. 실전에서 가장 임팩트가 큰 사용은 5스택 격노 창입니다: AA → W → AA → Q-가장자리는 2초 미만에 출혈을 적용하는 네 번의 적중을 연결하며, 이는 거의 모든 물몸을 70% HP에서 처치하기에 충분합니다. 리듬이 자동이 될 때까지 사용자 지정 게임의 표적 더미에서 테스트하세요.
