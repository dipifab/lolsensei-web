---
title: "Jayce Top Build & Guide — Patch 16.9"
slug: "jayce-top"
language: "ko"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 패치 16.9 Jayce 탑 완벽 공략. weapon-swap 메커니즘과 lethality 빌드 순서, Press the Attack 룬 활용, 핵심 매치업 대처, 파워 스파이크 타이밍, 흔한 실수 회피, R-cancel 같은 고급 팁까지 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "weapon swap (R) 시 Jayce는 짧은 Movement Speed 버스트를 얻고 잠시 유닛 충돌을 무시합니다."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: 대상에게 도약, 물리 피해와 주변 적 둔화. Cannon: 장거리 AOE 스킬샷 — 주력 견제기."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: 평타 시 마나 회복 패시브, 발동 시 주변 오라 피해. Cannon: 다음 3회 평타 공격속도 최대 — 폭딜 윈도우."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: 짧은 거리 넉백, 최대 체력 % 마법 피해 — 처형 및 이탈기. Cannon: 게이트 설치, 아군 가속 + 통과한 Q (Shock Blast) 증폭."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "스탠스 변경 (쿨다운 6초). Hammer (이니시, 지속력, 넉백)와 Cannon (견제, AOE 라인 정리) 사이를 전환. Cannon 전환 후 첫 평타가 대상의 Armor와 Magic Resist를 감소."
      dd_spell_id: "JayceStanceHtG"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 위협 상대 (Vladimir, Rumble, Kennen): 마법 보호막이 폭딜을 막아주고 AD도 추가"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 하드 CC 이니시 상대 (Camille E, Sett W, Malphite R): spellshield가 락다운을 차단"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "유리하고 집중 공격 받을 때: 부활 패시브로 교전에서 더 과감히 들어갈 수 있음"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "적팀에 AP/CC 위협 3개 이상이면 Plated Steelcaps에서 교체; 강인함이 스턴/둔화 시간 감소"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "6레벨 전까지 Cannon Q로 체력을 깎고, 50% 이하면 Hammer Q 도약, W 오라, E 넉백으로 올인. 라인 우위를 사이드 라인 스플릿 압박으로 전환."
  weakness: "마나 소모 큼: 견제 Q를 빗맞히면 트레이드 손해. 강한 갭 클로저 (Camille E, Malphite R)는 swap 전에 거리를 좁힘. 후반 MR 도배 빌드에 약함."
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
    primary_rationale: "Cannon Q + AA + Hammer Q-AA-E의 3타 트레이드 패턴이 Press the Attack을 발동시켜 교전마다 +8% 피해. Triumph는 멀티 처치 시 체력 회복, Legend: Alacrity는 W (Hyper Charge) 안에서 공속 캡 도달, Coup de Grace는 40% 이하 처형."
    secondary_rationale: "보조 Sorcery: Manaflow Band로 긴 라인전에서 Cannon Q 견제 스팸의 마나 고갈 방지. Transcendence는 Ability Haste로 weapon swap 윈도우를 빨리 돌려줌 — 라인전에서 Q 한 번 더는 적 체력 손실."
    secondary_alternative: "강한 견제 원거리 탑 상대 (Vladimir, Kennen, Quinn) 시 Sorcery를 Resolve로 교체, Bone Plating (첫 3타 피해 감소)와 Second Wind (50% 이하 패시브 체력 재생)로 라인 지속력 확보."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "원거리 대응 수단이 없는 비기동성 근접 브루저"
      reason: "Cannon Q 사거리에 대응할 방법이 없음. 첫 6레벨간 웨이브에서 떼어놓고 견제하면 스케일링 차단 — Nasus는 Q 스택 손실, Garen은 Q에 도달 못함, Sett은 W (Haymaker) 게이지를 못 채움."
    - examples: ["yorick", "tryndamere"]
      archetype: "라인 견제 도구 없는 느린 스케일러"
      reason: "킬 위협이 아이템 의존. Cannon Q가 파워 스파이크 전에 분 단위 파밍을 빼앗고, 마침내 올인 시도하면 Hammer E 넉백이 그 윈도우를 차단."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "아이템 MR과 이니시 궁을 가진 탱커"
      reason: "Cannon 견제에 아이템 (Bramble Vest, Negatron Cloak)으로 대응하고, 그들의 궁 (Malphite R, Maokai R)이 Hammer E 넉백 위로 플래시-이니시. 라인이 길어지고 킬 못 따면 Jayce가 약해짐."
    - examples: ["vladimir", "kennen"]
      archetype: "지속력 또는 동급 사거리의 원거리 탑 스케일러"
      reason: "Vladimir의 Q (Transfusion)가 견제를 회복; Kennen의 W (Electrical Surge)가 Cannon Q 사거리를 능가. 둘 다 견제 트레이드 라인을 강제하고, Jayce는 근접 브루저 상대로 가능한 올인 옵션이 없어 패배."
    - examples: ["camille", "renekton"]
      archetype: "빠른 갭 클로즈와 하드 CC 브루저"
      reason: "Camille E (Hookshot)와 Renekton W (Ruthless Predator)가 Cannon Q 시전 윈도우 안에서 거리를 좁히고 Hammer E 넉백 swap 전에 락다운. 떼어낼 대시 없음."
---

## 개요

Jayce는 weapon swap (R)에 모든 것이 달린 원거리-근접 하이브리드 스커미셔입니다. **Cannon stance**에서는 AOE 스킬샷 Q와 통과 Q를 증폭시키는 Movement Speed 게이트 (E)를 가진 장거리 견제 전문가. **Hammer stance**에서는 도약 Q, 오라 W, 최대 체력 % 마법 피해 넉백 (E)을 가진 근접 브루저로 변신. R 쿨다운은 6초이고, Cannon 전환 후 첫 평타가 대상의 Armor와 Magic Resist를 감소시키는 것이 모든 올인의 진입 트리거입니다.

탑 라인 Jayce는 라인이 길게 가길 원합니다. **Cannon Q + E 게이트**로 거리에서 체력을 깎고, 안전 거리로 후퇴, 반복. 적이 절반 체력 이하가 되면 Hammer로 swap, **Q**로 도약, **W**로 오라 피해와 마나-온-히트 패시브 발동, 살아남으면 **E** 넉백으로 마무리. 라인 우위를 모두 스플릿 푸시 압박으로 전환 — 사이드 라인을 혼자 밀어 적이 대응하도록 강제. 사이드 라인의 Cannon Q 사거리는 게임에서 가장 안전한 스플릿 중 하나이고, Eclipse + Hubris의 폭딜 (1-2초 내 고피해)이 대부분의 탑 라이너 상대 1대1 교전에서 승리하게 해줍니다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**을 견제 친화 매치업에 사용. 원거리 탑 (Vladimir, Quinn, Kennen) 상대로는 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**로 교체해 초반 Cannon Q 교환을 버팁니다.

**핵심 아이템 (순서대로):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 첫 스파이크. 1.5초 내 두 스킬로 보호막 발동, Jayce는 swap 후 Cannon Q + Hammer Q로 자연스럽게 충족. AD, 옴니뱀프 (모든 피해 라이프 흡수), Ability Haste 추가.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 탑 라이너 상대 기본 신발 (메타 대부분).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — 치명타 (적의 고정 방어력을 무시하는 스탯)와 처치 (킬 또는 어시스트) 시 스택 쌓이는 패시브 (Eminence)로 한 번의 킬 피해를 다음 킬로 눈덩이처럼 키움. 유리할 때 두 번째 아이템으로 이상적.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 치명타와 피해 시 둔화. Cannon Q 적중의 둔화가 도주 적을 Hammer Q 캐치 대상으로 바꿈.

**상황별 아이템:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — AP 위협 (Vladimir, Rumble, Kennen) 상대. 마법 보호막이 폭딜을 막고 AD를 더함.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 대상 하드 CC 이니시 (Camille E, Sett W, Malphite R) 상대. Spellshield가 비전투 시 충전되어 다음 락다운 스킬 (당신을 묶는 하드 CC)을 차단.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 유리하고 집중 공격 받을 때. 부활 패시브로 교전에 더 과감히 들어갈 수 있음 — 한 명 죽고 둘 잡으면 부활해서 셋째까지 가능.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적팀에 AP 또는 CC 위협 3개 이상이면 Plated Steelcaps에서 교체; 강인함 패시브가 스턴/둔화 지속시간 감소.

**신발:** Plated Steelcaps 기본. 마법 피해나 연쇄 CC가 많으면 Mercury's Treads.

**스킬 순서:** **Q** 먼저 마스터 (양 스탠스 주력 피해원), **E** 두 번째 (처형용 넉백, 견제 증폭 게이트), **W** 마지막. **R**은 6, 11, 16레벨에 찍기.

**룬:** 주룬 **Precision**에 **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**. 견제 원거리 탑 상대로는 **Resolve**로 교체해 **Bone Plating** + **Second Wind**.

## 주요 매치업

- **Darius:** 6레벨 전엔 Cannon Q로 카이팅 (계속 평타 치며 후방으로 이동, 그의 사거리 밖 유지)하고 그의 Q (Decimate) 외곽 링에 절대 들어가지 마세요. Hammer E 넉백이 타이밍만 맞으면 그의 W (Crippling Strike) 리셋을 취소; 타워 밑으로 밀어내면 모든 킬 위협 상실.
- **Camille:** 6레벨 후 그녀의 E (Hookshot)가 있을 때 이김. 그녀의 E 쿨다운 추적: 다운이면 웨이브 프리즈 (당신 타워 앞에서 미니언 라인을 밀지 않고 정지)하고 Cannon Q로 체력 깎기. 업이면 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** spellshield 충전 유지.
- **Malphite:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에 단일 방어구 아이템까지 완성하기 전엔 라인 승리 가능, 그 후엔 Cannon Q가 간지러울 뿐. 첫 12분 내 라인 승리 또는 스케일링 패배 수용; 사이드 교전 위해 한타 아이템 러시 고려.
- **Fiora:** 그녀의 W (Riposte)를 Hammer Q 페인트로 베이트 — 도약 애니메이션 시작했다가 멈춤. W가 쿨다운에 들어가면 풀 Hammer 콤보로 올인. Q를 W에 맞히면 16초 쿨다운 스킬을 공짜로 잃음.
- **Vladimir:** 표준 풀에서 가장 어려운 매치업. 그의 Q가 Cannon 견제를 회복하고 W (Sanguine Pool)가 Hammer E 넉백을 회피. 정글러에게 그가 2아이템 되기 전 일찍 갱 요청, 그 후엔 한타 피하고 사이드 스플릿 푸시 (사이드 라인을 혼자 밀어 적이 대응하게 강제).

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + W 또는 Q + E):** Cannon Q + AA + Hammer Q swap이 대부분 물몸에게 35-40% 체력 트레이드. 적이 근접 미니언 막타 치러 올라오면 콤보 던지고 후퇴; swap 패시브 Move Speed로 응답 전 빠져나옴.
- **6레벨 (첫 R 랭크):** 양 스탠스 풀 파워 잠금 해제. Cannon-to-Hammer 올인이 이제 단순 트레이드가 아닌 40% 체력 킬 위협.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 완성 (~ 11-13분):** 첫 주요 스파이크. 보호막 + 옴니뱀프로 더 긴 트레이드 가능; 한 사이클 Cannon-Hammer 후 후퇴할 필요 없음.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris 온라인 (~ 19-22분):** Eminence 스택 (처치 보너스 AD 패시브)이 눈덩이처럼 굴러가기 시작 (커지는 우위: 킬 → AD 보너스 → 더 많은 킬). 사이드 교전 강제로 Eminence 쌓고, 풀 피해로 오브젝트 회전.

## 흔한 실수

- **셋업 없이 Cannon Q 던지기.** 맨 Q 견제는 마나 비싸고 회피 쉬움. 먼저 적 방향으로 **E** (Acceleration Gate) 깔기; 게이트가 통과 Q를 증폭 (긴 사거리, 고피해)하고, 약간의 딜레이가 적이 발사 전 이동 방향 결정 강제.
- **너무 일찍 Hammer로 swap.** 적 체력 ~50% 이하 전에 swap하면 마무리 폭딜 없이 근접전 진입. 깎기 피해 임계치 도달까지 Cannon 유지, 그 후 swap + 올인.
- **R-Cannon 첫 평타 감소 효과 잊기.** Cannon (R)으로 swap 시 첫 AA가 Armor와 Magic Resist 감소. 미니언에 그 발동 태우면 공짜 피해 버림; 항상 적 챔피언에 사용.
- **R 없이 스플릿 푸시.** R은 6초 쿨다운이지만 유일한 이탈 도구 — swap의 속도 부스트. R 쿨다운에 4대1 갱 스플릿 푸시는 죽음. 위험 평가 시 R을 긴 쿨다운 대시로 취급.
- **긴 트레이드에서 마나 비용 무시.** Hammer W는 평타 시 마나 회복 패시브; 긴 트레이드 중 Cannon 유지하면 마나 풀 비움. 트레이드 중간 Hammer로 swap해 평타 2-3회로 보충, 다시 swap해 Cannon으로 마무리.

## 고급 팁

Hyper Charge (Cannon W) 끝의 **R-cancel**을 마스터하세요. Cannon W를 누르면 3회 평타 동안 공속 최대 — 하지만 셋째 평타 적중 직후 즉시 Hammer (R)로 swap하면 평타 회복 애니메이션을 건너뛰고 Hammer Q 도약을 0.25초 빨리 시작. 이는 플래시 도주 대상 캐치와 5HP로 도주 사이의 차이입니다. 랭크 가져가기 전 연습 도구에서 타겟 더미 상대로 타이밍이 근육 기억이 될 때까지 연습하세요.
