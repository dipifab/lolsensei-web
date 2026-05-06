---
title: "Kassadin Mid Build & Guide — Patch 16.9"
slug: "kassadin-mid"
language: "ko"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Kassadin 미드 공략. 후반 스케일링 빌드, 핵심 매치업, 파워 스파이크 타이밍, 라인전에서 자주 하는 실수, 그리고 마법 보호막 활용 고급 팁까지 한 페이지에 깔끔하게 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "패시브: Kassadin은 받는 마법 피해가 감소하고 유닛 충돌을 무시합니다 (미니언과 챔피언을 그대로 통과)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "단일 대상 스킬샷: 마법 피해 + 채널링 차단. Kassadin에게 1.5초 magic shield 부여 — AP 메이지 견제기 차단용."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "패시브: 평타에 추가 마법 피해. 액티브: 다음 평타가 강화되어 잃은 마나를 회복 (챔피언 대상 시 더 많이)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "AOE 원뿔 둔화 + 마법 피해. 근처에서 스펠이 시전될 때마다 충전 (본인 또는 적 모두 카운트). 충전 필요: 마무리용으로 사용."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "쿨다운이 짧은 단거리 점멸. 몇 초 내 연속 시전 시 마나 비용이 두 배가 되고 추가 피해가 누적, 최대 4스택."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "11렙 이후 스케일링 우위 조합 상대: AP + ability haste + 이동속도로 Riftwalk 연계 및 squishy 백라인 추격용"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC (Ahri 매혹, Lissandra R, Twisted Fate 기절)로 Riftwalk 타이밍이 끊기는 상대"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "회복량 누적 조합 (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds 적용, 회복 절반 감소"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "방어막을 두르는 squishy 캐리 (Riven, Yasuo 패시브): R+Q+E 처형용 추가 폭딜"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "11레벨에서 1코어 완성 상태로 라인전을 살아남고, 그 후 snowball (작은 우위를 큰 우위로): squishy 캐리에게 R, Q+AA+E로 즉시 처형, 아군 피해주기 전 R out."
  weakness: "라인전이 처참함: 기본 데미지 약함, 사거리 짧음, 9레벨 전엔 웨이브클리어 없음. 폭딜 메이지와 원거리 견제기에 타워 밑으로 밀리고 스케일링 전에 체력이 깎임."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
  primary_rationale: "Inspiration 메인: First Strike는 후반 R-engage 폭딜 타이밍에 추가 골드와 데미지를 보상. Magical Footwear로 350골드 절약, Biscuit Delivery로 라인전 마나 부족 보완, Cosmic Insight로 소환사 주문 쿨다운 단축해 교전에서 Flash 활용도 증가."
  secondary_rationale: "Sorcery 보조: Manaflow Band는 필수 — 없으면 라인전 Q 스팸으로 9레벨 전 마나 고갈. Transcendence로 ability haste 40 % 이상, Riftwalk 쿨이 줄어 한타에서 R을 2번이 아닌 3-4번 연계 가능."
  secondary_alternative: "6레벨 전 파밍을 봉쇄하는 강력한 견제 메이지(Xerath, Vel'Koz) 상대 시 Sorcery 대신 Resolve 선택, Second Wind(견제 대비 패시브 체력 재생)와 Overgrowth(체력 스케일링)로 스케일링까지 생존."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "이동기 없는 비기동 메이지"
      reason: "11레벨 이후 Riftwalk 쿨 2초: 점멸로 위에 붙고, 시전에 Q, E로 둔화, 풀 폭딜 콤보 들어오기 전 AA-처형."
    - examples: ["lux", "syndra"]
      archetype: "탈출기 없는 스킬샷 셋업 메이지"
      reason: "그들은 장거리 셋업(Q 속박, 기절 누적)에 의존; Kassadin의 후반 R로 콤보 도중 스킬샷을 사이드스텝하고 응징 불가능한 점멸로 거리 좁힘."
    - examples: ["taliyah", "azir"]
      archetype: "장거리 지역 봉쇄 메이지"
      reason: "6레벨 전엔 압도당하지만 11레벨 이후 Q의 magic shield + R 기동성으로 카이팅 도구 무력화. 게임이 길어지면 고정 못 시키는 대상에 AOE 낭비."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "장거리 견제 메이지"
      reason: "당신의 Q 사거리(650) 밖에서 6레벨 전 내내 견제. Q의 magic shield는 도움되지만 체력 회복 없음 — 6레벨엔 이미 반피, 올인 불가."
    - examples: ["talon", "zed"]
      archetype: "초반 AD 암살자"
      reason: "14분쯤 2코어 파워 스파이크 도달, Kassadin은 아직 1코어. 사이드 라인 로밍이 느린 스케일링 응징 — 후반 도달 전 게임 종료."
    - examples: ["pantheon", "yasuo"]
      archetype: "올인 압박형 라인 불리"
      reason: "2-3레벨 올인(Pantheon Q+W 기절, Yasuo Q-바람장벽-띄우기)이 Q 만렙 전 Kassadin 체력을 갈아냄. Q의 magic shield는 물리 피해엔 무용지물."
---

## 개요

Kassadin은 AP 암살자(멀리서 견제하는 대신 거리를 좁혀 단일 대상을 즉시 처형하는 메이지)이며 후반에 강해지는 챔피언입니다. 그의 핵심은 **Riftwalk (R)**: 매우 짧은 쿨다운의 단거리 점멸로, 16레벨에서 3랭크에 도달하면 게임 내 최강의 위치 조정 도구가 됩니다. 대가는 가혹한 라인전입니다: 짧은 사거리(**Q** 650), 9레벨 전엔 웨이브클리어 없음, 기본 데미지가 약해서 6레벨 전 대부분의 미드 라이너 상대 올인(누군가 죽을 때까지의 전면 교전)에서 모두 패배합니다. 미드 라인이 어울리는 이유는 **R**이 활성화되면 강가가 스커틀과 사이드 라인으로 가는 가장 짧은 길이기 때문 — 하지만 먼저 11-13분을 살아남아야 합니다.

게임 플랜은 단순합니다: 6레벨 전엔 죽지 않고, 1코어 완성 상태로 11레벨 도달, 그 후 squishy 캐리를 사냥하기 시작. 스킬 표현력은 **Riftwalk** 마나 관리(7초 내 매 시전마다 비용 2배, 따라서 Tear 기반 아이템 없이 한타에서 R 4번은 불가능)와 한타 시작 전 본인의 스펠로 ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** 충전에 있습니다.

## 추천 빌드

**Starting items:** Doran's Ring + 2 Health Potions. Doran's Shield의 초반 체력보다 Doran's의 마나가 더 중요합니다: 가능할 때 **Q**로 원거리 막타를 노립니다.

**Core items (순서대로):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — Kassadin에게 게임 내 최고의 마나 + 체력 + AP 스케일러. 10분 후 Eternity 패시브가 레벨업마다 적지 않은 체력을 회복시켜 라인전을 버티게 함. 첫 완성 아이템.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 magic penetration, squishy 미드/원딜 대상에 거의 항상 정답.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — AP 35 % 증폭. Q+E+AA 콤보 데미지가 두 배가 됨.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis. 백라인으로 R 후 피해주기가 들어오면 stasis, 끝나면 R out.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — MR 누적 상대 magic penetration. 우선 대상이 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** 또는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + MR 아이템을 사면 필수.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 11레벨 이후 스케일링 우위 조합 상대. AP + ability haste + 이동속도: Riftwalk 연계가 더 빨라지고 진입 후 squishy 백라인을 추격.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — **R** 타이밍을 막는 단일 대상 마법 CC 상대 (Ahri 매혹, Lissandra R, Twisted Fate 기절).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복 누적 조합 상대. 데미지 시 Grievous Wounds(받는 회복을 절반으로 줄이는 디버프) 적용.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 방어막을 사는 squishy 캐리 상대. 체력 임계값 패시브(대상이 ~35 % 체력 미만일 때 발동되는 패시브)가 **R+Q+E** 처형과 맞물림.

**Boots:** 기본은 Sorcerer's Shoes. AP + CC 위주 조합(상대 팀에 기절/속박 2개 이상) 상대 시 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**Skill order:** **Q** 우선 마스터(최고 데미지와 mana-cheap 보호막), **E** 두 번째(E 마스터 시 9레벨에 웨이브클리어 해제), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**Runes:** 메인 **Inspiration**에 **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**. 장거리 견제 매치업에선 Sorcery 대신 **Resolve**(Second Wind + Overgrowth)로 변경.

## 주요 매치업

- **Xerath / Vel'Koz:** 그들의 Q 사거리가 당신보다 200+ 유닛 길음. 최대 사거리에서 **Q**로만 막타, 견제는 받아내고, 절대 강 너머로 푸시 금지. 그들의 스킬이 떨어지기 직전 0.5초에 ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** 보호막 시전 — magic shield가 데미지 대부분을 막음.
- **Zed:** 6레벨 전 올인 회피. **R** 활성 후엔 그의 **R** 표식을 미끼로 유도, Riftwalk로 스냅백 데미지 회피. 그가 4킬+ 먹어서 fed 상태면 2번째 아이템을 Deathcap 대신 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**로.
- **Veigar:** 6레벨 전 호각, 11레벨 후 압도. 11레벨까진 그의 **E** 우리(cage) 사거리 밖 유지; R 쿨이 2초가 되면 측면 Riftwalk로 우리를 통과해 다이브(우리는 모서리가 열려있어 완전한 벽이 아님).
- **Ahri:** 로밍 우선권 경쟁. 그녀가 마나 부족할 때 라인 푸시, 그녀의 로밍 따라가기. 그녀의 매혹은 점멸 도중의 **R**을 취소시킴 — 그녀가 캐리 위협이면 4번째 아이템으로 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**.
- **Yasuo:** 강력한 초반 라인 불리. 웨이브 안에서 평타 금지(그의 **E**가 당신 미니언으로 돌진해 무료 견제). 뒤로 빠지고, 그가 푸시하게 두고, 평타 어그로 당기기로 당신 타워 근처에서 웨이브 freeze. 6레벨까지 생존 후 R+Q 트레이드 시작.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **Riftwalk** 활성. 이제 벽 너머로 점멸 가능 — Krug 자리, Raptor 벽, 드레이크 자리 가장자리로 갱 회피. 1랭크 R 데미지는 낮음, 아직 올인 금지.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages 완성 (~ 12-14분):** 첫 의미 있는 체력/마나 쿠션. 라인전 생존 가능; 상대 미드 쿨일 때 짧은 트레이드 시도.
- **11레벨:** 두 번째 **R** 랭크가 쿨을 3.5초로 단축. 진짜 Kassadin 활성 — R 2번 연계 후 생존, 또는 R-Q-E-AA-R out으로 squishy 처형. 여기부터 한타 강제.
- **16레벨 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ 24-28분):** R 쿨 2초, AP 스케일링까지. MR 없는 squishy는 원샷, 한타 한 번에 R 3-4회 연계. 바론과 elder dragon 한타 강제 — 후반 Kassadin이 이김.

## 흔한 실수

- **라인전을 이기려고 함.** Kassadin은 설계상 미드 최약체 초반 라이너. 3레벨 올인을 노리면 죽고, 뒤처지고, 스파이크에 도달 못함. 막타, 견제 받기, 11레벨 생존 — 그게 승리 조건.
- **소규모 교전에서 Riftwalk 남발.** 7초 내 매 시전마다 마나 비용 2배. R 4연속이면 600+ 마나 소모 — Q와 E 없이 한타 종료. 3번째 R 전 마나바 확인.
- **완벽한 원뿔 위해 E 들고 있기.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse**는 근처 시전 스펠로 충전(본인 것과 적 것 모두 카운트). 한타 전 웨이브에 Q 한 번 시전해 E를 ready로 스택, 그 후 진입. E 미충전 상태로 한타 진입은 둔화 마무리기 버리는 것.
- **탈출 계획 없는 R-engage.** Riftwalk 사거리 짧음(500). 백라인 ADC에 점멸했는데 아군 follow-up이 없으면 R 쿨 돌기 전 피해주기에 잡힘. 첫 R 전에 항상 두 번째 R 방향(어디로 R out?) 확인.
- **Rod of Ages 전에 Deathcap 구매.** Deathcap은 체력/마나 없이 3600골드 — 먼저 사면 AP가 의미 있기도 전에 모든 한타에서 사망. Rod of Ages(3700g, +400 체력, +400 마나)가 Deathcap을 쓸 만하게 만드는 생존 아이템.

## 고급 팁

**Q**를 견제용뿐 아니라 적 스펠 윈드업 직전 magic shield 버퍼로 사용. Null Sphere의 1.5초 magic shield는 마법 피해 일정량을 흡수 — Veigar **W**, Lissandra **R**, Annie **R+Tibbers**가 떨어지기 직전 0.5초에 시전하면 폭딜 대부분을 무효화. Practice Tool에서 Veigar 봇 상대로 타이밍 연습: 보호막은 시전 시작 전이 아니라 **스펠이 적중하는 순간** 활성화되어야 함. 이 한 가지 트릭이 라인전 0/3으로 지는 Kassadin과 0/0으로 잃고 스케일링하는 Kassadin을 가르는 차이입니다.
