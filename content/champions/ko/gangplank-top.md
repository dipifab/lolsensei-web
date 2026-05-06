---
title: "Gangplank Top Build & Guide — Patch 16.9"
slug: "gangplank-top"
language: "ko"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "League of Legends 패치 16.9 Gangplank 탑 라인 가이드. 스타터 키트, Trinity Force 크리 빌드, 핵심 매치업, 파워 스파이크 타이밍, 자주 하는 실수, 그리고 화약통 체인을 활용한 고급 팁까지 한 번에 정리합니다."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "주기적으로 강화된 평타가 대상에게 수 초간 true damage 화상을 입힌다. 근접 윈도우를 강제하므로 — 타이머를 추적해 GP의 all-in을 예측해야 한다."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "사거리 625의 원거리 사격으로 물리 피해를 입히고 on-hit(크리, Trinity Force의 Sheen)를 적용하며 처치 시 골드를 얻는다. 주요 견제이자 화약통 기폭제."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "모든 CC를 정화하고 잃은 체력 비례로 회복한다. 쿨다운이 길고 마나 소모가 크니 — 결정적인 CC에 아껴 두고 가벼운 슬로우에는 쓰지 말 것."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "화약통을 설치하고 공격해 폭발시키면 광역 물리 피해와 슬로우를 입힌다. 인접한 두 통이 연쇄 — 3통 체인 콤보가 win-condition 스파이크다."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "글로벌 궁: 맵 어느 지점이든 지정해 슬로우와 마법 피해를 주는 포탄을 떨어뜨린다. 상점에서 plunder(Q로 유닛 처치 시 얻는 보너스 골드)로 강화 가능."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "회복 누적 조합(Aatrox, Soraka, Vladimir, Dr. Mundo) 상대 — grievous wounds로 적 회복을 차단"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "체력 누적 탱커(Cho'Gath, Sion, Ornn) 상대 — armor pen이 대상의 체력 격차에 따라 증가"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 버스트(Kennen R, Vladimir, Rumble) 상대 — 저체력 마법 보호막이 마지막 타격을 막아줌"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "올인 버스트(Camille, Wukong R, Malphite engage) 상대 — 원샷 타격 시 체력 보호막 발동"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Trinity Force까지 라인을 버틴 뒤 한타에서 통 3개를 연쇄. 적 백라인에 체인 통 Q 크리가 들어가면 한타가 시작 전에 끝난다."
  weakness: "대시도 없고 자체 기동성이 0. 평타 차단 도구를 가진 챔프(Fiora 패리, Jax E)와 W로 제때 정화 못하는 hard-CC point-and-click 이니시에 하드 카운터된다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 주룬: Grasp는 Trial by Fire 근접 트레이드에 지속력을 주고 영구 체력을 누적해 — Gangplank가 스케일링하면서 원하는 패턴이다. Demolish는 적 로밍 시 타워를 압박, Conditioning은 후반 프레임을 받쳐주고, Overgrowth는 Trinity Force가 활용할 체력 풀을 늘린다."
    secondary_rationale: "Precision 보조: Triumph는 R로 한타를 측면 진입할 때 처치 시 체력과 골드를 환급해준다 — Gangplank는 백라인을 다이브하므로 회복이 follow-up을 살린다. Legend: Alacrity는 공속을 올려 화약통 기폭과 Q on-hit 템포를 빠르게 한다."
    secondary_alternative: "원거리 견제 매치업(Teemo, Quinn, Vayne top) 상대로는 Precision 대신 Inspiration의 Biscuit Delivery(다른 보충 수단이 없는 체력·마나 회복)와 Cosmic Insight(Flash·Teleport 더 자주)를 채택."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "기동성 없는 후반 스케일러"
      reason: "Gangplank의 Q는 625 사거리로 그들의 평타 파밍 범위 바깥이다. 거리를 좁힐 대시가 없어 체인 통을 처벌할 수 없고, Trinity Force가 나오는 순간부터 네가 더 빠르게 스케일링한다."
    - examples: ["darius", "garen", "sett"]
      archetype: "이탈 수단 없는 근접 브루저"
      reason: "Q 사거리로 그들의 위협 반경 밖에 머물고 Powder Keg 존으로 둔화시킨다. 결국 거리를 좁혀도 너를 근접에 묶을 follow-up이 없으니 — 트레이드를 리셋하고 빠진다."
    - examples: ["urgot", "kled"]
      archetype: "초반 강하지만 후반 약한 파이터"
      reason: "1-3레벨에 Q 사거리로 파밍하고 6레벨 궁에 W를 아껴두면 Trinity Force 이후 아웃스케일한다. 체인 통 한타 콤보에 후반 답이 없다."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "평타 차단 기동 파이터"
      reason: "Fiora의 W 패리는 Gangplank를 기절시키고 CC를 반사한다. Jax의 E는 2초간 모든 평타와 Q를 회피한다. 둘 다 Gangplank가 후반 스케일링에 필요한 트레이드 패턴을 깨뜨린다."
    - examples: ["renekton", "olaf"]
      archetype: "초반 윈도우 올인 불리"
      reason: "Renekton의 2레벨 스턴과 6레벨 궁이 Trinity Force 전에 Gangplank의 스케일링 계획을 무너뜨린다. Olaf의 R은 CC immunity를 주므로 W 정화로도 true damage 도끼 추격을 막을 수 없다."
    - examples: ["malphite", "kennen"]
      archetype: "Hard-CC point-and-click 이니시"
      reason: "Malphite의 R은 회피할 스킬샷이 없는 point-and-click이다. Kennen의 W 스턴과 R 광역이 Gangplank의 W 정화 윈도우를 넘는 CC 체인을 만든다 — 체인이 시작되면 W가 늦는다."
---

## 개요

Gangplank는 후반에 스케일링하는 탑 라이너로, 초반에 무거운 세금을 내는 대신 역할군에서 가장 높은 크리 데미지 한계 중 하나를 얻는다. 그의 키트는 복잡해 보이지만 두 가지 아이디어로 압축된다. **Parrrley (Q)** 는 사거리 625의 원거리 평타로 on-hit 효과(크리 확률, Trinity Force의 Sheen 발동, true damage 화상)를 적용해 멀리 있는 대상에게 전달한다. **Powder Keg (E)** 는 설치한 화약통을 평타로 폭발시키는 기술이며, 인접한 두 통이 연쇄되고, 세 통이 다시 연쇄된다. 시그니처 패턴은 체인된 화약통 3개를 쌓아 뭉친 적 팀에 Q로 터뜨려 즉발 버스트를 내는 것 — 1초 안에 높은 피해를 꽂는 플레이다.

게임 플랜은 인내심을 요구한다. 1-6레벨의 불리 윈도우 동안 Q 사거리에서 안전하게 파밍하고, 14-16분쯤 Trinity Force를 완성한 뒤, **Cannon Barrage (R)** 로 사이드 라인을 압박해 드래곤을 뒤집거나 맵 반대편에서 타워를 훔치기 시작한다. 한타에서는 화약통을 너의 프론트라인(팀 앞에 서는 탱커와 브루저) 뒤에 깔고, 적 백라인(뒤에서 원거리 피해를 주는 캐리)에 체인을 터뜨릴 수 있을 때만 앞으로 걸어 들어간다. 라인을 살아남아 3코어에 도달하면 체인 Q 크리를 꽂는 모든 한타는 일방적이다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** — 근접 브루저 상대로는 트레이드(스킬 몇 개 주고받고 빠지는 짧은 교전)를 위해 라이프스틸(평타 피해의 일부를 회복하는 효과)이 필요하다. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion — 원거리 매치업(Teemo, Quinn, Gnar) 상대로는 재생력으로 포크(교전 없이 거리에서 체력만 깎아내리는 견제) 압박 속에서 파밍이 가능하다.

**코어 아이템 (순서):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen(스킬 사용 후 다음 평타에 추가 피해를 더해주는 패시브)이 매 Q마다 발동해 폭발적인 데미지 부스트를 준다. 공속, 능력 가속(스킬 쿨다운을 줄이는 능력치), 체력 — 모든 능력치가 Gangplank의 win-condition 스파이크.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 공속으로 화약통 기폭과 Q on-hit 템포를 빠르게.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — 첫 크리 아이템; Q마다 마나를 환급한다. 마나 문제를 해결하고 크리 스케일링을 시작한다.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 크리 데미지 스파이크. Q 크리와 통 폭발이 이제 squishy 대상(방어력이 낮은 챔피언, 예: ADC와 버스트 메이지)을 원샷한다.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 장기 한타용 라이프스틸과 풀체력 유지 시 추가 보호막.

**상황 아이템:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 회복 누적 조합(Aatrox, Soraka, Vladimir, Dr. Mundo) 상대; grievous wounds 패시브가 적 회복을 차단해 너의 데미지가 회복되지 않고 박힌다.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 체력 누적 탱커(Cho'Gath, Sion, Ornn) 상대. armor pen이 대상의 체력 격차에 비례해 증가한다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP 버스트(Kennen R, Vladimir, Rumble) 상대; 저체력에서 마법 보호막이 발동해 마지막 타격을 막아준다.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 올인 버스트(Camille E + R, Wukong R, Malphite R 이니시) 상대; 원샷 타격 순간 체력 보호막이 발동해 W로 정화하고 리셋할 1초를 벌어준다.

**신발:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 가 기본. AD 위주 팀(물리 위협 3+) 상대로는 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, W가 자주 쿨다운인 hard-CC AP 조합 상대로는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 로 스왑.

**스킬 빌드:** **Q** 선마(Parrrley의 랭크별 스케일링이 주 데미지 소스), **E** 차마(통 쿨다운 감소 = 더 많은 체인 폭발), **W** 후마. **R** 은 6, 11, 16레벨에 찍는다.

**룬:** 주 트리 **Resolve** 의 **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. 보조 **Precision** 의 **Triumph** + **Legend: Alacrity**, 또는 원거리 견제 매치업 상대로 **Inspiration** 의 **Biscuit Delivery** + **Cosmic Insight**.

## 주요 매치업

- **Darius:** 초반 하드 불리 — Q는 회복, W는 슬로우, R은 처형이라 1-6레벨에 너를 끌 수 있다. Q 사거리에서 파밍하고 미니언을 근접으로 따지지 말 것. **W** 는 그의 E 끌어당김에 아껴 두라. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** 가 나오면 1v1로 그를 아웃스케일한다; 그 전까지 라인은 생존 훈련.
- **Sion:** 공짜 파밍 매치업. 그는 시체와 체력을 쌓고 너는 화약통과 크리를 쌓는다. E 통으로 타워에 밀어붙이고 패시브에 필요한 캐논 미니언을 차단하라. point-and-click 차징 Q를 피하면 매판 그를 아웃스케일한다.
- **Fiora:** 최악의 라인 매치업. 그녀의 **W** 는 패리 — 다음 평타나 스킬을 흡수하고 너를 기절시키며 모든 CC를 반사하는 짧은 윈도우다. 통 슬로우조차 역공당할 수 있다. 그녀의 vital point(패시브 발동을 위해 그녀가 맞혀야 하는 몸의 색깔 표시 지점)에 **Q** 를 절대 던지지 말 것 — 투사체가 닿는 순간 리포스트(반격)한다. 타워 아래 파밍, 정글러 호출, CS 격차 감수; 3코어에 그녀가 뒤처지기 전까지는 1v1 불가.
- **Camille:** 6레벨 다이브 매치업(다이브는 적이 너의 타워 안에 들어와 포탑 몇 대 맞으면서도 너를 죽이려는 플레이). 그녀의 궁 케이지 안에 너를 가둔다. **E** 스턴이 통 슬로우를 무시하고 **R** 이 너를 격리한다. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** 를 평소보다 빨리(4번째 아이템) 사고 Flash는 견제 트레이드가 아니라 그녀의 R 케이지에 아껴 두라.
- **Malphite:** 하드 카운터픽 — 그의 R은 회피할 스킬샷 없는 point-and-click이며 다른 시전 중에 들어오면 **W** 로 정화할 수 없다. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** 를 비상 빌드 패스로 두고 그의 이니시 각 시야 없이는 절대 한타에 응하지 말 것.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **Cannon Barrage** 가 글로벌 압박을 연다. 본진에서 R로 드래곤 한타를 뒤집거나, 미드에서 도망가는 적을 슬로우 존으로 마무리하거나, 봇 라인을 오브젝트에서 떼어낸다 — 너의 웨이브를 떠나지 않고 모두 가능.
- **9레벨 (Q 선마):** Parrrley가 랭크별 스케일링 최대치에 도달한다. 마나 비용이 30으로 떨어지고 데미지가 점프 — 패리나 회피 도구가 없는 모든 매치업을 견제하고 Q 트레이드를 우위로 가져갈 수 있다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~14-16분):** 가장 큰 스파이크. Sheen이 Q마다 1.5초 단위로 발동, 공속이 통 폭발 시간을 절반으로 줄이고, 체력 풀이 마침내 원샷 시도를 견뎌낸다. 라인이 수비에서 공격으로 뒤집히는 시점 — 이전에 피해야 했던 트레이드를 강제할 수 있다.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 완성 (~26-30분):** 체인된 3통 클러스터에 Q 크리가 들어가면 어떤 squishy든 1초 만에 삭제. 이 시점에 오브젝트 한타를 강제하고 너의 팀 프론트라인 가장자리에 서서 통 체인이 적 캐리에 떨어지게 하라.

## 흔한 실수

- **첫 CC에 W를 패닉 정화로 낭비.** **Remove Scurvy** 는 트레이드를 결정하는 스킬용으로 — Camille E, Renekton W 스턴, Sett W 스턴. Lulu 폴리모프나 사소한 슬로우에 태우면 진짜 위협 앞에서 무방비가 된다.
- **Q 3랭크 전에 통 쌓기.** 3랭크 미만에서는 통 쿨다운이 체인 타이밍에 비해 너무 길어 두 번째 통이 세 번째 통 전에 만료된다. 5레벨까지 단일 통으로 파밍하고, 그 후에 체인 연습.
- **팀과 조율 없이 R 이기적 사용.** Cannon Barrage는 글로벌 이니시 도구 — 맵 반대편에서 한타를 시작하는 스킬이다. 1v1 견제 추격에 떨어뜨리면 본진의 4v5 한타가 진다. 항상 의도를 핑하고 정글러의 스마이트와 타이밍을 맞추고, 시전 전에 미니맵을 확인하라.
- **크리 스케일링 전에 방어 아이템 구매.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** 는 안전해 보이지만 ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** 와 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** 전에 가면 Gangplank를 픽할 이유인 데미지 스파이크를 포기하게 된다. 미드 게임은 W 정화와 Trinity Force 체력 풀로 버틴다.
- **plunder로 R 강화 잊기.** 유닛을 처치한 Q마다 골드를 얻고, 상점에서 Cannon Barrage 강화(데미지 증가, 지속시간 증가, 회복 존)에 쓴다. 30분에 강화되지 않은 R은 같은 궁 대비 약 30% 데미지 손실이다.

## 고급 팁

**barrel-jump 콤보** 를 연습하라: 통 A를 놓고, 즉시 통 B를 체인 최대 거리(연결 반경 안쪽 한계)에 놓고, 통 A를 평타한다. 체인 폭발이 통 B를 점화하며, B가 체인 중일 때 통 C를 B 옆에 놓는다. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** 의 공속과 Q 5랭크면 3-4초마다 연속 체인 폭발 패턴을 유지해 적 팀이 우회해야만 하는 굴러가는 광역 존을 만든다. 백라인을 삭제하는 Gangplank와 사이드에서 무력하게 견제만 하는 Gangplank의 차이다.
