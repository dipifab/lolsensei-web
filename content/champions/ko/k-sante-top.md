---
title: "K'Sante Top Build & Guide — Patch 16.9"
slug: "k-sante-top"
language: "ko"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 패치 16.9 K'Sante 탑 완벽 공략. 시작 아이템부터 탱크-스커미셔 코어 빌드, 핵심 매치업 대처법, 파워 스파이크 활용법, 자주 하는 실수와 해결책, 그리고 W 캔슬 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "스킬이 적에게 표식을 남기고, K'Sante의 다음 평타가 추가 피해를 입힌다. All Out 형태에서는 모든 공격과 스킬에 추가 피해가 더해진다."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "짧은 직선 타격으로 피해와 둔화. 명중 시마다 stack: 2 stack에서 다음 시전은 끌어당기고 기절시키는 shockwave. 쿨이 짧아 spam 가능한 trade 도구."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "차징(unstoppable + 강한 피해 감소) 후 전방 dash, 적중한 적을 띄우고 기절. All Out에서는 추가 true damage를 주지만 띄움과 기절은 사라진다."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "짧은 dash + 자기 보호막. 아군에게 시전하면 dash 거리가 늘고 아군에게도 보호막. All Out에서는 쿨이 줄고 dash 속도가 빨라진다."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "적 챔피언을 밀쳐내고 벽에 부딪히면 추가 피해. K'Sante는 적 뒤로 dash 후 변신 — attack speed, armor pen, omnivamp를 얻지만 max HP와 보너스 저항이 줄어든다."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "평타 + 자체 회복 AD 상대 (Aatrox, Trundle, Nilah, Yi) — 공격자에게 grievous wounds (회복 40% 감소) 부여"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "AP 버스트 탑/정글 상대 (Mordekaiser, Vladimir, Diana) — 마법 저항 + 모든 회복/보호막 25% 증가"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "초고 공속 캐리 상대 (Vayne, Kog'Maw, Yi) — 주변 적 공속 -20% 오라가 DPS를 망가뜨림"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 강한 CC 2명 이상 또는 AP 탑이 있을 때 Plated Steelcaps에서 교체 — 마법 저항 + 강인함"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "한타에서 front line 역할: W로 적의 engage를 끊고, R은 핵심 carry를 벽에 박아 팀에서 떼어낼 때 사용. All Out에서 attack speed와 armor pen 버스트로 저체력 backline을 정리."
  weakness: "사거리가 짧음 (W가 600, E 외엔 진짜 gap-closer 없음). 원거리 kiter에게 lane에서 poke 당하면 답이 없다. R All Out은 긴 commitment: 변신 한타에서 지면 80-120초 동안 win condition이 사라진다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Resolve: Grasp of the Undying은 발동마다 무료 HP 스케일링을 주어 성장형 탱커에 최적. Shield Bash는 E 보호막을 다음 평타의 추가 피해로 변환 — 패시브 발동과 직접 시너지. Conditioning + Overgrowth로 후반 탱키함을 잠금."
    secondary_rationale: "보조 트리 Sorcery: K'Sante는 마나와 쿨감이 항상 부족. Manaflow Band로 lane에서 Q 난사용 마나 유지, Transcendence는 쿨감과 takedown 시 쿨다운 환급 — R 연계에 필수."
    secondary_alternative: "강한 poke나 후반 스케일링 매치업 (Vayne, Teemo, Jayce) 상대로는 Sorcery → Inspiration으로 교체, Biscuit Delivery (초반 무료 HP+마나 비스킷) + Cosmic Insight (Flash와 소환사 주문 쿨다운 감소) 채용."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Dash 없는 비기동 melee 브루저"
      reason: "K'Sante의 W가 시도 중간에 기절시키고 R 벽 박치기는 도주기 부재를 응징; Q 2-stack 기절은 Darius 끌기, Garen E 회전 같은 핵심 wind-up을 발동 전에 끊는다."
    - examples: ["renekton", "riven", "camille"]
      archetype: "콤보 의존형, 단일 commit window를 가진 다이버"
      reason: "Q 기절과 W의 40%+ 피해 감소가 그들의 all-in을 흡수: dash와 버스트를 다 쓴 뒤 K'Sante는 R로 뒤집고 All Out 형태로 마무리한다."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "그를 kite하는 원거리 탑 라이너"
      reason: "K'Sante의 W는 사거리가 600, E는 525. 원거리 적은 W 사거리 밖에서 평타 poke로 lane 밖으로 밀어내고, 차징을 시도하면 빠진다 — 결국 긴 쿨의 ulti만 남는다."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "탱커 학살 전문가"
      reason: "Fiora의 Vital Strikes는 보호막과 저항을 무시하는 true damage; Olaf의 R은 W 기절을 cleanse하고 trade에서 unstoppable로 만든다; Trundle의 R은 K'Sante가 All Out 형태에서 가장 취약할 때 보너스 저항을 훔친다."
---

## 개요

K'Sante는 탱크-스커미셔 하이브리드: 기본 형태에서는 묵직한 브루저, 궁극기 **All Out**을 켜면 듀얼링하는 스커미셔로 변신한다. 모든 키트가 두 단계로 설계되어 있다. 기본 형태에서는 **W (Path Maker)**의 차징 피해 감소로 데미지를 흡수하고, **Q (Ntofo Strikes)** 기절과 **W** 띄움으로 전투를 통제하며, **E (Footwork)**으로 자신이나 아군에게 보호막을 건다. **R**이 변신을 시키면 그 모든 견고함을 attack speed, armor penetration, omnivamp(모든 종류의 데미지에 작동하는 lifesteal)와 맞바꾸어 — 몇 초 동안 데미지를 뽑는 듀얼리스트가 된다.

게임 플랜은 라인전 초반을 인내심 있게 가져가는 것이다. **Q**로 발동되는 평타로 short trade(킬 commitment 없이 1-2 스킬만 짧게 교환; proc = 조건이 충족될 때 발동되는 효과로, 여기서는 다음 평타가 **Q** 표식을 터뜨린다)를 한 뒤, Sundered Sky 지속력이 갖춰지면 wave(미니언 라인)를 적 타워 쪽으로 push하면서 **W** 차징 engage를 노리며 snowball(킬 → 골드 → 아이템 → 더 많은 킬로 격차를 키운다)한다. 미드 게임에는 팀의 front line(데미지를 흡수해서 carry — 팀의 주 데미지 딜러 — 가 뒤에서 안전하게 딜할 수 있게 전투를 여는 탱커/브루저)이 된다. 후반에는 **R**이 target removal 도구다: 핵심 적을 골라 벽에 박은 뒤 변신해 All Out 형태로 마무리한다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. 방패가 melee 교전에서 지속력을 주고 저체력 회복 패시브가 K'Sante의 탱커 성향에 맞는다.

**코어 아이템 (순서):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 첫 번째 큰 스파이크. 몇 초마다 다음 평타가 치명타로 발동되며 잃은 체력의 ~10%를 회복한다. 이 발동이 **Q** 패시브 표식(스킬이 부여하는 추가 피해 디버프, 다음 평타가 터뜨림)과 완벽히 겹친다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + 적 평타에 고정 피해 감소. AD 탑 라이너 상대의 기본 신발.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 주변 적을 태우는 오라 추가 (AOE = 단일 대상이 아닌 광역 피해). 라인 정리에 도움이 되며 한타에서 다수에게 표식을 묻혀 **Q** 발동이 더 자주 터지게 한다.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — 성장형 탱커 아이템. 전투 중 시간이 흐르며 보너스 armor와 magic resist가 누적되고, 작은 광역 반격 타격까지. 후반 탱커 천장.

**상황 아이템:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 평타 위주에 자체 회복이 강한 AD 챔피언이 많은 조합 상대 (Aatrox, Trundle, Nilah, Master Yi). 적이 때릴 때 grievous wounds (회복 40% 감소)를 부여한다.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 탑이나 정글의 AP 위협 상대 (Mordekaiser, Vladimir, Diana). 마법 저항과 받는 모든 회복/보호막에 25% 보너스 — Sundered Sky 회복과 **R** omnivamp를 곱하기로 늘린다.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 초고 공속 캐리 상대 (Vayne, Kog'Maw, Master Yi). 주변 적 공속을 20% 깎는 오라로 그들의 DPS를 망가뜨리며, 그 사이에 평타를 받아낸다.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 강한 CC 챔피언이 2명 이상이거나 (Leona, Lissandra, Maokai) AP 탑 라이너가 있을 때 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 교체. 마법 저항 + 강인함 (기절/둔화에서 빠르게 회복).

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 AD 탑 상대 기본, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 AP나 강한 CC 상대.

**스킬 순서:** **Q** 우선 마스터 (가장 짧은 쿨, 주된 데미지와 2-stack 기절), **E** 두 번째 (보호막 증가 + 더 빠른 쿨로 engage용), **W** 마지막 (기본 데미지가 레벨당 가장 적게 오른다 — 가치는 유틸리티에 있고 랭크당 데미지에 있는 게 아니다). **R**은 6, 11, 16레벨에서 찍는다.

**룬:** 주문 트리 **Resolve**에 **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. 보조는 **Sorcery**에 **Manaflow Band** + **Transcendence**. 스탯 파편: Adaptive Force / Adaptive Force / Health Scaling.

## 주요 매치업

- **Vayne / Teemo:** 원거리 poke 악몽 (poke = fight commit 없이 거리에서 체력 깎는 데미지). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**를 들고 보조 룬을 Inspiration으로 바꿔 **Biscuit Delivery** (라인전 무료 HP+마나 비스킷) 지속력을 챙긴다. W 차징은 시도하지 말 것 — 빠진다. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** 완성까지 타워 밑에서 farm하고 정글러 gank를 부른다 (gank = 정글러가 측면 경로로 라인에 와서 적을 기습).
- **Darius:** 유리. Q 2-stack 기절 (2 stack 쌓은 뒤 두 번째 Q는 끌어당기고 기절시킨다)이 그의 끌기를 끊고, W의 피해 감소가 Darius Q 외곽 출혈(Darius의 Q는 원의 바깥 가장자리에서 가장 강하게 들어가고, 패시브는 평타가 명중할 때마다 출혈을 누적한다)을 흡수한다. 1-3레벨에는 그의 Q 외곽링 안에서 싸우지 말 것; 4레벨부터는 short trade 후 빠질 수 있다.
- **Mordekaiser:** 호각 또는 약간 유리. 차징 중인 **W**가 unstoppable(기절·둔화 등 CC 면역)이라 그의 **R** 감옥 안에서 사용해 효과를 풀 수 있다. 감옥 밖에서는 **W**를 함부로 쓰지 말고 아껴둘 것.
- **Fiora:** 하드 카운터. Vital Strikes는 true damage(armor, magic resist, 보호막을 모두 무시)를 입힌다. 보호막과 저항이 그녀의 주 피해원에 대해 무용지물. 매우 수동적으로 플레이하고 안전을 위해 CS(creep score = 미니언 처치)를 양보하며, 정글러 gank를 일찍 부른다.
- **Renekton:** 실력 매치업 (키트보다 누가 더 잘 하느냐로 결정). 그의 2-3레벨 power spike가 잔혹하다 (power spike = 챔피언이 눈에 띄게 강해지는 시점, 여기서는 핵심 스킬 해금 덕분) — 3레벨 전엔 싸우지 말 것. 세 스킬과 ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky**를 가는 중이면 매치업이 뒤집힌다: Q 기절이 그의 W(기절기)를 끊고, 그 뒤 all-in으로 마무리한다 (all-in = 한타 도중 후퇴 옵션 없이 킬까지 commit하는 풀 교전).

## 파워 스파이크 및 승리 조건

- **레벨 2 → 레벨 3:** 3레벨에 Q + W + E와 Q 2-stack 기절이 모두 작동한다. 첫 번째 short-trade 창: **W** 차징으로 wave에서 떼어낸 뒤 **Q** 두 번으로 기절 → **E**로 빠진다.
- **레벨 6 (첫 R):** All Out으로 킬 위협이 열린다. 정글러 gank를 노린다: **R**로 적을 자기 진영 벽 쪽에 박고 (벽 박치기는 추가 피해 + 적을 가둔다), 변신해 All Out 형태로 마무리한다.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 완성 (~ 11-13분):** 지속력이 3배가 된다. 이제 extended trade에서 이기고 gank 시도에도 라인을 유지한다. 솔로 킬을 노리거나 tower dive를 셋업한다 (적 타워 아래로 들어가 타워 공격을 감수하며 적을 잡는 것 — **W**의 피해 감소가 dive 동안 타워 hit를 흡수해서 가능하다).
- **3아이템 한타 (~ 22-26분):** ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean**이 갖춰지면 팀의 주 engage 도구(전투를 여는 사람: 뛰어들어 한 타겟을 잠근다)가 된다. 벽 근처 위치가 어긋난 적 carry에게 **R** pick(고립된 적을 정리)을 노린다.

## 흔한 실수

- **이미 한타에서 지고 있는데 R을 누른다.** All Out은 견고함과 데미지를 맞바꾼다. 이미 저체력에 수적 열세면 변신 형태로 몇 초 만에 죽는다. **R**은 "win condition" 도구이지 패닉 버튼이 아니다 — 타겟을 고립시켜 마무리할 수 있을 때 쓰는 거지 도주용이 아니다.
- **원거리 적 앞에서 W를 차징한다.** 그들은 wind-up(dash를 예고하는 느린 차징 애니메이션)을 보고 빠져버린다. **W**는 counter-engage(상대가 먼저 commit한 뒤 애니메이션 도중에 차징해 들어감)나 fog of war(적이 시야 없는 어두운 영역)에서의 기습용으로 쓰지, opening poke로는 절대 쓰지 말 것.
- **Q 스택을 그냥 흘려버린다.** **Q** 명중마다 stack(스킬에 누적되는 카운트)이 쌓인다: 2 stack이 되면 다음 시전이 끌고 기절시키는 shockwave. 1 stack 상태에서 데미지만 보고 **Q**를 쏘아 stack을 만료시키는 건 가장 강력한 CC(crowd-control: 기절, 둔화, 띄움)를 낭비하는 것. 항상 두 번째 시전을 계획하라.
- **탱커가 솔로 splitpush를 한다.** Splitpush = 사이드 라인을 혼자 밀어 적이 누군가를 보내 막게 만드는 것. K'Sante는 다른 라인에 영향을 줄 글로벌 궁극기가 없는 한타 챔피언 — **R** 벽 박치기 후 follow-up할 아군이 필요하다. 명확한 수적 우위가 없는 한 오브젝트에는 팀과 함께 모인다.
- **All Out이 max HP를 깎는다는 걸 잊는다.** 변신하면 현재 체력과 최대 체력이 일정 비율로 깎인다. 변신 전 체력이 100%였다면 새 (낮은) max에 비례한 현재 체력으로 시작하지만, 이미 저체력에서 변신하면 비율 감소만으로도 즉사할 수 있다. R 누르기 전에 체력바를 확인하라.

## 고급 팁

W-cancel 트릭: **Path Maker**를 차징하는 동안 언제든 시전을 풀 수 있다 — 짧은 차징은 데미지와 띄움/기절이 줄지만 차징 시간 동안은 unstoppable이 유지된다. **반쯤 차징한 W**로 적의 핵심 스킬(Lissandra **R**, Malphite **R**, ADC의 평타 연계)을 풀 차징 시간 없이 회피한 뒤, 본인 페이스로 다시 engage한다. 차징 길이와 무관하게 쿨다운은 동일 — 일찍 취소해도 페널티가 없다. 프로는 이 기술로 오프닝 engage를 살아남는다; 랭크 게이머는 거의 항상 풀 차징하고 punish(과도한 노출에 대한 적의 응징)에 걸어 들어간다.
