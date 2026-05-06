---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "ko"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Gnar 탑 공략. 미니/메가 분노 관리, 핵심 브루저 빌드 순서, 주요 매치업 대처, 파워 스파이크 타이밍, 자주 하는 실수와 해결책, 그리고 워드 활용 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "전투 중 분노가 쌓이고, 최대치에서 다음 스킬을 쓰면 메가 Gnar로 변신한다. HP 증가, 근거리 전환, 새 스킬, 미니로 돌아갈 때까지 R 사용 불가."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "미니: 장거리 부메랑이 둔화시키며 돌아온다. 잡으면 쿨다운 감소. 메가: 짧은 사거리의 바위가 첫 대상에서 멈추고 그 지역을 둔화시킨다."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "미니: 3번째 평타/스킬마다 추가 피해와 이속 부여. 메가: 일어서서 앞 영역을 내려쳐 맞은 적을 기절시킨다."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "미니: 점프해 유닛(미니언, 와드, 몬스터, 챔피언) 위에 착지하면 더 멀리 튄다. 메가: 무거운 착지로 광역 피해, 추가 도약 없음."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "메가 전용. 주변의 모든 적을 지정 방향으로 날린다. 벽에 부딪힌 대상은 기절하고 추가 피해를 입는다. 게임 플랜 전체가 이 한 버튼에 있다."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 하드 CC가 2개 이상이거나 강한 마법 피해(Malphite R, Lissandra, Kennen)일 때 Plated Steelcaps 대신 선택"
    - dd_id: "3091"
      name: "Wit's End"
      against: "AP 탑(Kennen, Vladimir, Rumble) 상대: 마법 저항 + 온힛 마법 피해로 미니 Gnar Q+AA가 계속 아프게 한다"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 마법 폭딜(Syndra 로밍, Vex, AP 더블 조합) 상대: 라이프라인 보호막이 원샷 윈도우를 막는다"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "치명타 딜러(Yasuo, Tryndamere, 큰 Caitlyn) 상대: 받는 치명타 피해 감소"
    - dd_id: "3075"
      name: "Thornmail"
      against: "두 명이 힐링하는 조합(Soraka + Aatrox, Yuumi + Mundo) 상대: 치명상이 회복을 절반으로 자른다"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "Trinity 이후 사이드 라인을 혼자 스플릿 푸시할 때: 타워/미니언 추가 피해와 솔로 스탯 버프"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "라인에서 미니 Q 견제로 분노를 쌓고, 한타에 들어가기 전에 메가로 변신한다. R을 벽 스턴 인게이지로 사용해 한타와 오브젝트 싸움에서 상대 팀을 절반으로 자른다."
  weakness: "도약기가 없고 변신이 강제된다. 팀과 멀리서 메가가 되면 Hop으로 돌아갈 수 없고, 한타에서 미니로 남으면 R이 없다. 원거리 탑은 미니 Gnar를 답 없이 견제한다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 메인: Grasp가 근접 전투에서 4초마다 발동 — 적 프론트라인으로 들어가는 메가 Gnar에 완벽. Demolish는 푸시된 웨이브를 무료 플레이트로, Second Wind는 미니 Gnar의 원거리 견제 회복, Overgrowth는 후반까지 HP를 키운다."
    secondary_rationale: "Precision 보조: Triumph는 처치 시 HP 회복(메가 R 벽 스턴 후 킬에서 매우 큼), Legend: Alacrity는 공속 추가로 미니 Gnar의 3번째 Hyper 발동이 매 트레이드에서 더 빨리 들어온다."
    secondary_alternative: "원거리 견제 매치업(Vayne, Quinn, Kennen, Teemo) 상대로는 Precision 대신 Sorcery에 Nimbus Cloak(소환사 주문 후 이속)과 Gathering Storm(후반 AD 스케일링)을 채택해 메가 사거리에 도달하고 후반에 버텨 이긴다."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "원거리 견제가 없는 근거리 저거넛"
      reason: "미니 Gnar Q는 사거리 1100에 둔화까지 있다. 네가 다가가지 않으면 그들은 닿지 못하므로, 안전하게 분노를 쌓고 메가가 준비됐을 때만 R 벽 스턴으로 디스인게이지하며 커밋한다."
    - examples: ["aatrox", "renekton"]
      archetype: "올인 윈도우가 한정된 단거리 브루저"
      reason: "그들의 파워 예산은 초반 트레이드 윈도우에 있다. 미니 Gnar는 미니언으로 E 도약해 올인을 피하고, 메가가 온라인되면 R 스턴 + Wallop 연계로 판세를 뒤집는다."
    - examples: ["nasus", "yorick"]
      archetype: "초반 킬 위협이 없는 스케일링 저거넛"
      reason: "미니 Q+W로 웨이브를 밀어 타워 아래에서 농사를 막는다. 그들은 부메랑 사거리를 이기는 거리 좁힘기가 없어 응징하지 못한다."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "미니 Gnar를 견제로 압박하는 원거리 탑"
      reason: "미니 Gnar는 원거리 지속력이 없고 안전한 트레이드는 최대 사거리 Q뿐이다. 그들은 그 사거리 안에서 평타를 넣고 그를 타워 아래로 응답 윈도우 없이 민다."
    - examples: ["fiora", "camille"]
      archetype: "%HP 고정 피해나 하드 CC 다이브를 쓰는 안티 탱크"
      reason: "Fiora의 급소는 메가 Gnar의 HP 풀을 그가 반격하기보다 더 빨리 깎는다. Camille의 E 갈고리는 미니 Gnar를 벽에 박아 도약기 없이 도망 못 가는 올인을 만든다."
    - examples: ["malphite", "ornn"]
      archetype: "R 각도를 무력화하는 탱크 인게이저"
      reason: "네가 변신하고 벽을 고르기 전에 그들이 백라인으로 플래시 인게이지를 건다. 이니시가 들어가면 네 R은 게임 결정 픽오프(고립된 한 명 처치)가 아니라 필링(아군 캐리에서 적을 밀어내는 것)이 된다."
---

## 개요

Gnar는 분노 게이지에 따라 두 형태를 오가는 탑 라인 파이터다. 분노는 스킬을 쓰거나 피해를 받을 때 쌓인다. **미니 Gnar**는 원거리 견제 챔피언(견제 = 거리에서 조금씩 깎아 적의 HP를 줄이고 정면 충돌은 피하는 플레이)이며, 긴 부메랑과 유닛 위에 착지하면 한 번 더 튀는 도약을 가진다. **메가 Gnar**는 스턴, 광역 피해(area of effect: 한 명이 아니라 영역 전체에 들어가는 피해), 그리고 벽 근처에서 게임 최고의 저쿨 궁극기를 가진 근거리 브루저다. 챔피언 전체가 변신 타이밍을 중심으로 돈다. 라인에서는 미니로 안전하게 견제하고 농사하며, 한타에 커밋(commit = 끝까지 들어가고 물러나지 않음)할 때는 메가로 들어가 R로 적을 지형에 박아넣는다.

한 문장 요약: 미니로 분노를 쌓고, 적 팀 가까이에서 변신해 R을 벽으로 던져 여러 대상을 스턴(약 1.5초간 어떤 행동도 하지 못한 채 정지)시키고, 팀이 따라오는 동안 정리한다. 열린 지형에서 궁을 쓰면 하나뿐인 승리 조건(이 챔피언이 게임을 이기기 위해 잘 해내야 하는 한 가지)을 낭비한다. 라인에서 혼자 메가가 되면 죽을 위험이 크다. 미니의 도주 수단(미니언 위에 착지하면 더 멀리 튀는 Hop)이 사라지기 때문이다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Shield의 HP 재생은 미니 Gnar 매치업이 끊임없이 던지는 원거리 견제를 견디기 위해 만들어진 효과다.

**핵심 아이템 (순서대로):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 매 게임 첫 아이템. Sheen(스킬 사용 후 다음 평타에 추가 피해를 더해주는 부품)에서 만들어지며, Trinity는 그 발동(보너스 피해 트리거)을 미니든 메가든 모든 Q에서 일으킨다. 이속은 미니 Gnar의 카이팅(평타를 넣으면서 뒤로 빠져 거리를 유지하는 움직임)을 가능케 하고, 공속은 Hyper(미니의 3번째 평타 패시브)가 더 빨리 돌아오게 한다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 물리 딜러 상대 기본 신발(대다수의 탑 매치업). 받는 평타 피해 감소.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 다른 아이템의 추가 AD에 비례해 커지는 추가 HP, 그리고 30% HP 부근에서 한 번 발동하는 보호막. 메가 Gnar가 R을 꽂을 때까지 살려준다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — 받은 물리 폭딜을 느린 출혈(이후 몇 초간 분산되는 피해, 즉발이 아님)로 변환한다. 메가로 커밋한 한타에서 반응할 시간을 준다.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 방어력 + 광역 공속 둔화(주변의 모든 적에게 들어가는 둔화, 한 명이 아님). 메가 R로 벽에 박힌 후의 평타 캐리(Vayne, Tristana, Kog'Maw)를 박살낸다.

**상황 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 강한 CC(군중 제어: 행동을 막는 기절, 속박, 침묵)나 AP 조합 상대로 Plated Steelcaps 대신.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — AP 탑(Kennen, Vladimir, Rumble) 상대. 마법 저항과 온힛 마법 피해(평타마다 추가되는 마법 피해 한 조각)를 더한다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 마법 폭딜(Syndra 로밍, Vex, AP 더블 조합) 상대. 라이프라인 보호막이 HP가 낮아지면 발동해 마법 피해를 흡수, 원샷 윈도우를 막는다.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — 치명타 딜러(Yasuo, Tryndamere, 큰 Caitlyn) 상대.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 두 가지 회복원을 쌓는 조합 상대. 치명상(적의 회복을 몇 초간 절반으로 자르는 디버프)을 적용한다.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — Trinity Force 이후 사이드 라인을 혼자 스플릿 푸시할 때. 스플릿 푸시 = 팀이 다른 곳에서 게임할 때 사이드 라인을 혼자 밀어 적이 너를 막으러 누군가를 보내게 만드는 전술.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 기본. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 상대 팀에 하드 CC가 2개 이상이거나 AP 피해가 강할 때.

**스킬 순서:** **W**를 먼저 마스터(3번째 평타 Hyper 피해가 레벨당 가장 크게 오른다), 그다음 **Q**(견제용으로 더 긴 둔화 + 더 짧은 쿨다운), 마지막으로 **E**. **R**은 6, 11, 16레벨에 찍는다.

**룬:** 메인 **Resolve** + **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. 보조 **Precision** + **Triumph**, **Legend: Alacrity**.

## 주요 매치업

- **Sett:** 공짜 라인. 미니 Q는 그가 가진 모든 것보다 사거리가 길다. 절대 그의 W(Haymaker) 안으로 걸어 들어가지 마라. 다가오면 웨이브의 미니언으로 Hop해 안전 지대로 튕겨 돌아온다.
- **Aatrox:** 6레벨 전엔 호각, 너는 그를 아웃스케일(시간이 갈수록 그보다 강해진다)한다. Q의 스윗 스팟(휘두름의 중심에서 추가 피해가 들어가는 밝은 부분)을 피하라. 메가 R + 그 뒤의 벽이 갖춰지면 그가 거는 모든 올인(목숨을 거는 끝장 싸움)이 패배한다.
- **Vayne:** 하드 카운터. 뒤에 머물고 최대 사거리 Q로 미니언 막타, 라인이 너를 짓밟는다는 사실(반격하면 죽는다)을 받아들여라. 메가가 되면 미드로 로밍(라인을 떠나 다른 라인을 도와주는 행동)하거나 적 정글을 침투한다.
- **Camille:** 라인은 진다, 후반은 이긴다. 미니일 때 그녀의 E 갈고리 사거리를 피하라(벽에 박고 너의 Flash — 짧은 거리를 5분 쿨다운에 한 번 순간이동시키는 소환사 주문, 너의 비상 버튼 — 를 쓰게 만든 뒤 다시 인게이지). 그녀가 돌진해 들어온 후에 E를 쓰고, 그 전에는 절대 쓰지 마라.
- **Malphite:** 라인은 괜찮다 — 미니 Q로 영원히 카이팅된다 — 하지만 6레벨을 조심하라. 한타에서 그는 너의 백라인(팀 뒤에 있는 캐리)에 플래시 궁을 걸어 너의 R 각도를 죽인다. 팀에게 흩어지라고 알려서 그의 궁이 두 명을 동시에 맞추지 못하게 하라.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + W로 근거리 브루저 상대 대부분의 짧은 트레이드(라인에서 짧게 주고받는 교환, 본격 한타가 아님)에서 이긴다. 웨이브로 걸어 들어가 미니언 사이로 적에게 Q를 맞히고, 3번째 평타가 Hyper 추가 피해를 발동한다.
- **6레벨:** 첫 메가 R은 저체력 적에 대한 타워 다이브(타워 사격을 감수하고 적의 타워 아래로 들어가 처치)를 연다. 진입 전에 메가로 분노를 쌓아두면 된다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~ 12-14분):** 가장 큰 단일 파워 스파이크(눈에 띄게 강해져 한타를 찾아야 하는 순간). 미니 Q + 평타가 트럭처럼 박히고, 메가 Q + W 콤보가 스턴 후 스큐시(고데미지 저방어 챔피언, 즉 ADC와 메이지)를 원샷 처치한다.
- **3코어 메가 R 한타 (~ 22-26분):** Sterak's + Trinity + 신발이 갖춰지면 메가 Gnar가 프론트라인(앞에서 한타를 여는 탱커와 브루저)을 가로지르며 R로 백라인(뒤에서 딜을 넣는 캐리)을 따라가 2-3명 스턴을 만든다. 여기서 모인 오브젝트 한타(양쪽 팀이 뭉치는 드래곤/바론 분쟁)를 강제하라.

## 흔한 실수

- **싸움이 준비되지 않았는데 라인에서 메가로 변신.** 메가는 도주(E 도약)가 없고 미니로 돌아오기 전 약 15초간 메가로 머문다. 정글러가 오지 않고 한타에 커밋하지도 않는다면 분노를 80-90%에 유지하고 팀에 핑을 찍어 후퇴, 게이지가 자연 감소하게 둔다.
- **열린 지형에서 R을 던지기.** 대상 뒤에 벽이 없으면 GNAR!는 적의 도약을 끊는 단순한 넉백(짧은 거리만큼 강제로 밀어내는 효과)에 불과하다. 항상 먼저 자세를 잡아라. 벽을 정렬하는 0.5초가 다중 대상 스턴의 가치다.
- **빠져나가는 대신 들어가는 Hop.** 미니 E는 대부분의 매치업에서 도주기이지 인게이지 도구가 아니다. 들어가는 E가 옳은 유일한 순간은 분노가 차고 있고 돌아올 미니언이 명확히 보일 때뿐이다.
- **Hyper 추가 피해를 "강제"하려고 라인에서 W 난사.** 3번째 평타 보너스는 모든 평타와 모든 스킬에서 발동한다. 두 스킬 + 한 평타 패턴으로 트레이드하라. 평타 세 번 연속은 자세를 무너뜨린다.
- **통제 못하는 한타 중 변신.** 받은 피해도 분노를 채운다. 분노 95%에서 후퇴하면 미니언에 친 다음 평타가 R 쓸 적이 없는 자기 정글에서 너를 메가로 만든다. 그 전에 한타에 커밋하거나 베이스로 귀환하라.

## 고급 팁

웨이브가 사라졌을 때 **와드와 트링킷** 위로 Hop을 튕겨라. 와드는 시야를 위해 맵에 설치하는 작은 마법 눈이다. 기본 노란색은 서폿이 트링킷으로 가지는 **Stealth Ward**, 핑크 와드는 적이 시야를 차단하기 위해 설치하는 **Control Ward**다. 모두 미니 Gnar가 두 번째 도약을 늘리기 위해 착지할 수 있는 유닛으로 친다. 적 정글 입구 쪽에 미리 Stealth Ward를 박은 뒤 그 위로 E를 써서 사거리를 약 400 늘려 카운터 정글링하는 적에게 Q를 기습하라. 같은 트릭이 갱킹에서도 너를 살린다. 자기 와드를 트라이부쉬(라인 근처의 세 수풀 묶음)에 박고 그 위로 Hop하면 갱커는 후속 수단이 없다.
