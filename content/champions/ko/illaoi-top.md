---
title: "Illaoi Top Build & Guide — Patch 16.9"
slug: "illaoi-top"
language: "ko"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 패치 16.9 Illaoi 탑 완벽 공략. 시작 아이템부터 Tentacle 코어 빌드, Precision Conqueror 룬 선택, 주요 매치업 대처, 파워 스파이크 활용, Test of Spirit 운영, 자주 하는 실수와 해결책, 그리고 E 캔슬 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "주변 벽과 통과 불가 지형에 Tentacle이 생성된다. W에 맞은 적, E로 만든 Vessel, 끌어낸 영혼을 후려친다. 챔피언과 Vessel 타격 시 Illaoi를 회복시킨다."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Tentacle을 직선으로 휘둘러 물리 피해. 패시브: 모든 Tentacle slam 피해를 증폭 — Q는 웨이브클리어이자 Tentacle 발동 키이기도 하다."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "강화 평타: 대상에게 도약해 최대 체력 비례 물리 피해를 주고 주변 모든 Tentacle에게 slam 명령. 이 도약이 그녀의 유일한 mobility다."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "긴 사거리 직선 skillshot으로 적의 영혼을 뽑아낸다. 영혼에 가한 피해는 본체에 반영된다. 영혼이 죽거나 대상이 사거리를 벗어나면 Vessel이 되어 Tentacle에게 쫓긴다."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Illaoi 주변 광역 slam: 피해 + 적중한 챔피언 수만큼 Tentacle 추가 생성. 8초간 Tentacle은 untargetable에 50% 더 빠르게 slam하고, W 쿨이 ~1.5초로 떨어진다."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "AP 위협 2명 이상이거나 연계 CC(Lissandra, Malphite ult, Sett 풀)일 때 Plated Steelcaps에서 교체"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "W 사거리 밖으로 빠지는 카이터(Quinn, Vayne, Gnar) 상대 — 액티브 대시+슬로우로 Tentacle 범위 안에 가둔다"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "방어력 높은 프론트라인(Malphite, Rammus, Shen) 상대 — Q와 W proc마다 팀 전체에 방깎"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP 버스트 조합(Vladimir, LeBlanc) 상대 — 저체력에서 마법 보호막 발동, Tentacle이 한 번 더 후려칠 시간을 번다"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "팀이 4v5 밀리고 splitpush 필요할 때 — 미니언/타워 추가 저항으로 사이드 단독 공성"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "E로 영혼을 뽑은 뒤 가능한 한 많은 Tentacle 범위 안에 대상을 가둬라. 모든 Q와 W가 영혼과 본체 양쪽에 틱 — 장기전이 그녀의 승리 구간이다."
  weakness: "대시 없음, 점멸 외 도주 수단 없음. 원거리 탑은 W 사거리 밖에서 포킹하고, 다중 대시 스커미셔는 Tentacle을 베이트로 끌어내 빠진 뒤 Conqueror가 떨어진 후 다시 들어온다."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision + Conqueror: Q, W, Tentacle slam이 모두 키스톤을 쌓고, Illaoi의 승리 구간은 5초 이상 지속되는 교전이다. Triumph는 처치 시 회복, Legend: Alacrity는 W 리셋용 공속, Last Stand는 R이 떨어지는 저체력 구간을 보상한다."
    secondary_rationale: "Resolve 보조: Bone Plating은 올인 첫 3타를 깎아 2-3렙 교환에서 일방적으로 체력이 빠지는 구간을 보호하고, Overgrowth는 미니언 사망으로 25분에 ~3.5%까지 체력 스케일링 — 한타 생존력을 더한다."
    secondary_alternative: "탑이 강한 원거리 포커(Teemo, Quinn, Jayce, Kennen)면 Conqueror는 유지하되 Resolve 대신 Inspiration의 Triple Tonic(추가 포션)+Magical Footwear(12분 무료 신발) — 라인 우위를 어차피 잃으니 골드와 체력을 회수한다."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "대시 없는 단거리 근접 저거넛"
      reason: "이들의 모든 피해 프로파일이 W 사거리 안에 있다. W로 붙으면 주변 Tentacle이 모두 slam하고 — 대시가 없어 Conqueror가 풀 스택에 도달하기 전에 빠질 수 없다."
    - examples: ["nasus", "sion"]
      archetype: "라인전 약한 탱커 스케일러"
      reason: "처음 6레벨은 수동적 파밍이다. E로 웨이브에서 떼어내 무료 chip하고 Vessel을 쌓아라: Tentacle이 웨이브까지 추적하고 영혼 echo가 모든 Q smash를 두 배로 만든다."
    - examples: ["yorick", "volibear"]
      archetype: "펫이나 버프를 소환해 싸우는 근접 브루저"
      reason: "스킬을 쓰려고 앞으로 commit한다(Yorick의 ghoul, Volibear의 강화 평타): 일단 commit하면 W 사거리 안이고 Tentacle 군집이 머문 대가를 치르게 한다."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "포킹/카이팅 원거리 탑"
      reason: "W의 400 사거리 밖에 머물며 평타로 체력을 갉는다. 거리 좁히려는 한 걸음마다 무료 평타를 더 맞고 — 갭클로저 대시조차 없다."
    - examples: ["riven", "irelia", "camille"]
      archetype: "다중 대시 스커미셔"
      reason: "Tentacle 범위에 들어와 버스트하고 Conqueror가 풀 스택에 닿기 전에 대시로 빠진다. 그들 대시가 돌아올 때 네 Tentacle은 쿨다운 — 트레이드 템포는 그들이 잡는다."
    - examples: ["jayce", "gnar"]
      archetype: "원거리-근접 폼 시프터"
      reason: "원거리 폼으로 포킹하고 Tentacle이 비활성화될 때만 근접으로 전환. 너는 W를 태우며 들어가려 하고 그들은 다시 원거리로 돌아가 트레이드를 취소한다."
---

## 개요

Illaoi는 **저거넛**(느리고 이동기 없는 근접 챔피언으로 정면 교전에서 강타하고 피해를 탱킹한다)으로, 패시브 **Prophet of an Elder God**을 중심으로 설계됐다. 주변의 모든 벽과 통과 불가 지형에 **Tentacle**을 생성한다 — 거대하고 untargetable한 팔이 맵 가장자리에 매달려 명령에 따라 후려친다. Tentacle이 그녀의 피해 대부분을 담당하며, 네 일은 적이 그 휘두름 범위 안에 충분히 오래 머물도록 강제하는 것이다. 키트는 Tentacle에게 칠 대상을 만들어주는 두 도구를 중심으로 돈다: **W (Harsh Lesson)**은 짧은 도약으로 주변 모든 Tentacle에게 대상을 후리라 명령하고, **E (Test of Spirit)**는 적의 영혼을 몸에서 뽑아내 Tentacle이 두들기게 한다(피해는 본체에 echo).

게임 플랜은 잔혹하리만치 단순하다. **E로 대상을 표시하고, 앞으로 걸어가 자기 진영 쪽 가장 밀집된 Tentacle 필드로 W를 박아라.** 적이 범위 밖으로 나가면 영혼이 죽고 그는 **Vessel** — Tentacle이 라인 전체에서 추적하는 디버프 상태가 된다. 6레벨부터 **R (Leap of Faith)**은 적 챔피언 적중 1명당 Tentacle 1개를 추가 생성하고 기존 Tentacle을 8초간 untargetable로 만든다 — 그녀가 실제로 대상을 삭제할 burst를 가지는 유일한 창이므로, R은 올인이나 한타용으로 아껴라, 절대 웨이브클리어에 쓰지 마라.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. HP 재생 패시브가 적의 포킹(전투에 commit하지 않고 체력만 깎는 저비용 원거리 피해)을 완화한다 — 3레벨 Tentacle 압박이 가동되기 전까지.

**코어 아이템 (순서대로):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 첫 아이템 스파이크(힘이 가장 크게 도약하는 순간). Spellblade 패시브(스킬 시전 후 몇 초 간격으로 강화 평타가 한 번 무료로 발동)는 W와 완벽하게 맞물린다: 도약 평타마다 Spellblade가 발동(proc)된다. AD(Attack Damage, 물리 피해 뒤의 능력치), 체력, 스킬 가속(쿨다운을 줄이는 능력치), 공속을 더한다 — 키트가 필요로 하는 모든 스탯.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 적 팀이 주로 평타로 피해를 줄 때의 기본 신발. 장기 트레이드(라인에서 주거니 받거니 하는 피해 교환)에서 평타 피해를 깎는다.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 체력에 더해 **생명선 보호막**: HP가 ~30% 아래로 떨어지면 자동 보호막이 발동한다. 그 창은 정확히 Tentacle이 아직 휘두르고 있는 순간이라, 추가 생존 시간이 그대로 처치로 변한다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 받은 **버스트** AD 피해(1-2초 내에 들어오는 고피해, 어쌔신 콤보 같은 것)를 느린 **블리드**(즉시가 아니라 다음 몇 초간 분산되는 피해)로 변환. 처치 시 남은 블리드는 깨끗이 제거 — R이 처치를 연쇄할 때마다 무료 리셋이다.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR(Magic Resistance)에 더해 받는 회복을 증폭하는 패시브: 패시브 Tentacle 회복, Death's Dance 블리드 정리, W 최대 체력 트레이드를 모두 강화한다. 빌드에서 단일 최대의 생존력 배수기.

**상황 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 AP(Ability Power, 마법 피해 뒤의 능력치) 위협이 2명 이상이거나 연계 **CC**(군중 제어: 스턴, 속박, 넉백 — 행동을 막는 모든 것)가 있을 때 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 교체. 강인함(자신에게 걸린 CC 지속시간을 줄이는 능력치)은 도주 대시가 없는 그녀에게 핵심이다.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 400 단위 W에서 계속 빠지는 카이터(Quinn, Vayne 탑, Gnar) 상대. 액티브는 짧은 대시 + 광역 슬로우 — 키트에 없는 두 번째 갭클로저 그 자체. 첫 아이템으로 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**를 대체한다, 둘을 같이 쌓지 마라.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 방어력이 두꺼운 프론트라인(Malphite, Rammus, Shen) 상대. Q smash와 W proc마다 팀 전체를 위해 대상의 방어력 스택을 깎는다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — AP 버스트(Vladimir, LeBlanc, Veigar) 조합 상대. 마법 보호막이 저체력에서 자동 발동 — Tentacle이 계속 휘두를 시간을 정확히 벌어준다.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 팀이 4v5로 밀리고 네 일이 **splitpush**(목표물에서 적을 끌어내려 사이드 라인을 혼자 미는 것)일 때. 미니언/타워 추가 저항으로 Illaoi가 사이드 라인을 단독 공성할 수 있다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 적 팀에 CC 출처가 셋 이상이거나 마법 피해가 강할 때 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**스킬 순서:** **Q**를 먼저 마스터(웨이브클리어, Tentacle 피해 증폭, 가장 낮은 쿨다운). **E**를 두 번째 마스터(최대 랭크에서 쿨다운이 4초 줄어 분당 Vessel 압박이 늘어난다). **W**는 마지막에 마스터 — 최대 체력 비례 피해라 이미 강하므로 추가 랭크의 효과가 Q/E보다 적다. **R**은 6, 11, 16레벨에 찍는다.

**룬:** 주력 **Precision**과 키스톤(나무의 핵심 룬) **Conqueror** — 챔피언과 계속 싸우는 동안 보너스 AD가 누적되며 5초 지속 전투 후 캡되는 패시브. **Triumph**(처치 시 소량 회복+골드 burst), **Legend: Alacrity**(처치마다 공속 누적), **Last Stand**(체력 60% 미만 추가 피해)와 조합. 보조 **Resolve**의 **Bone Plating**(피해를 받은 뒤 다음 3타 피해 감소) + **Overgrowth**(주변 미니언 사망으로 체력 스케일링, 웨이브당 8+ 미니언을 먹는 탑에 안성맞춤). 능력치 파편: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## 주요 매치업

- **Sett:** 유리한 라인. Q-W-E 콤보가 telegraphed(시전 전 윈드업 — 보이는 시전 모션 — 이 반응 가능할 만큼 길다). Sett가 W를 시전하는 순간을 노려 E로 영혼을 뽑아라 — 보호막 게이지가 비면 그는 disengage 수단이 없고, R이 돌아오기 전에 Tentacle 군집이 큰 체력을 뜯는다.
- **Darius:** 실력 매치업(픽 무관, 더 잘하는 쪽이 이긴다). Tentacle이 없을 때 5스택 장기 트레이드는 너가 진다 — 그의 E 풀을 베이트하고, W로 다시 Tentacle 필드로 돌아가라. 라인 한복판에서는 절대 트레이드하지 마라, Tentacle이 벽을 덮는 자기 진영 쪽에서만.
- **Fiora:** 어려운 근접 매치업. **W**는 패리(다음 스킬을 막고 반격하는 짧은 보호막) — E를 패리하면 영혼이 안 나오고 14초 쿨이 날아간다. 진짜 시전 전에 애니메이션 캔슬(E 시전을 시작하고 옆으로 strafe)로 패리를 **베이트**하라.
- **Teemo / Quinn:** 매우 힘든 원거리 매치업. W 사거리 밖에 머물며 평타를 실명시키고(잠깐 취소시킴) 무료로 체력을 깎는다. 파밍(미니언에서 얻는 골드와 경험치)을 거부하기 위해 자기 타워 근처에 웨이브를 **freeze**(푸시를 멈추고 웨이브를 자기 진영 쪽에 고정)시키고, 정글러를 호출하라 — Illaoi는 도움 없이 이 1v1을 이길 수 없다.
- **Camille:** 가장 어려운 근접 매치업. E 후크샷이 W 사거리 안팎을 자유롭게 드나들고, R은 너를 Tentacle에서 떨어진 1v1 영역에 가둔다. 그녀가 dash in한 직후 순간을 위해 E를 아껴라: commit한 동안 영혼을 뽑으면 R도 그녀를 못 살린다. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**를 일찍 사라 — 피해 대부분이 true on-hit(평타마다 적용되는 진짜 피해: 방어력과 마저 모두 무시)지만 그래도 방어력 한 점이 키트 나머지에 도움이 된다.

## 파워 스파이크 및 승리 조건

- **3레벨:** Q + E + W가 잠금 해제되며 Illaoi는 처음으로 라인 풀 콤보를 갖춘다. E로 표시, 자기 Tentacle 필드로 걸어가, W로 도약해 slam 명령. 여기부터 라인은 네 것이다, 적이 원거리만 아니라면.
- **6레벨:** 첫 **R** 잠금 해제. 벽에 Tentacle이 하나만 있어도 R이 두 번째를 만들고 8초간 모두 **untargetable**(적이 공격 불가)로 만든다. R이 있는 1v1은 비기동 브루저에게 처치다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~13-15분):** 피해와 **stickiness**(도망치는 대상에 달라붙는 능력)가 가장 크게 도약. 사이드 1v1을 강제하고 픽(위치를 잘못 잡은 적의 단독 처치)을 위해 **roam**(라인을 떠나 미드/봇 지원)을 노려라.
- **2아이템 + R 가용 (~18-22분):** 한타 정점. 자기 팀 프론트라인(앞줄 탱커/브루저)을 뚫고 들어가 3+ 적에게 R로 즉석에서 3+ Tentacle을 만들고, Conqueror가 첫 5초 안에 캡에 도달하는 동안 군집이 백라인(스쿼시 캐리 — 한타에서 탱커 뒤에 서는 저방어 고피해 챔피언)을 갈가리 찢게 하라.

## 흔한 실수

- **트인 라인 한복판에서 싸우기.** Tentacle은 벽과 통과 불가 지형에만 생성된다. 강 한복판이나 트인 라인의 대상에 W하면 Tentacle이 한 개도 slam 안 하고 W는 그저 추가 효과 없는 400 단위 도약이다. 항상 벽 근처에서 싸워라 — 자기 진영 라인 부쉬, 트라이 부쉬, 자기 정글 입구.
- **저체력 미니언 라인에 E 던지기.** E는 가장 중요한 스킬이고 쿨이 12-16초다. 시전했는데 미니언에 맞거나 챔피언을 빗나가면 14초간 셋업이 없고 — 적도 안다. E를 누르기 전에 챔피언에 깨끗한 시야 라인을 기다려라.
- **웨이브클리어용 R 누르기.** R이 광역 피해를 주지만 진짜 가치는 8초 untargetable Tentacle과 챔피언당 보너스 Tentacle이다. 웨이브에 쓰면 70-120초 쿨을 낭비하고 적 정글러가 나타날 때 한타 도구가 0이 된다.
- **Tentacle 위치 확인 없이 싸움에 걸어들어가기.** 가장 가까운 Tentacle이 만료 직전(despawn 직전 주황색 빛이 사그라드는 게 보인다)이면 W를 commit하기 전 4초 기다려 새 spawn을 받아라. 후릴 Tentacle 없는 Harsh Lesson은 낭비된 도약이다.
- **순수 탱커 아이템 쌓기.** Illaoi는 **AD**(Attack Damage, 물리 피해 뒤의 능력치)로 스케일링한다 — Tentacle slam 하나하나가 그녀 AD의 백분율이다. Sunfire + Warmog's로 가면 피해가 죽고 스쿼시를 못 죽이는 느린 워킹 미니언이 된다. AD 브루저 코어를 유지하라.

## 고급 팁

**E 애니메이션 캔슬**을 연습하라. Test of Spirit는 시전 모션이 길어(~0.5초) 그동안 Illaoi가 제자리에 묶인다 — 주의 깊은 적이 직선 skillshot을 옆으로 피하기에 충분한 시간이다. 해법은 시전을 시작하고 1-2 걸음 앞으로 걸어 한쪽 방향 회피를 베이트한 뒤, 마지막 프레임에 *반대* 방향으로 시전하는 것. 같은 트릭이 반대로도 통한다: 적에 커서를 올려 시전 페이크를 한 뒤, 영혼이 회피할 예측 경로에 재시전하라. 실전에서 가장 임팩트 큰 사용은 3레벨 올인이다: E-페이크, 영혼이 회피하기 시작할 때 W로 영혼에 도약, 이후 그의 반응 대시에 진짜 E. 리듬이 자동이 될 때까지 연습 도구의 타깃 더미로 훈련하라.
