---
title: "Ivern Support Build & Guide — Patch 16.9"
slug: "ivern-support"
language: "ko"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Ivern 서포터 완벽 공략. 시작 아이템부터 코어 빌드, Sorcery 룬 선택, 부쉬 활용 시야 트릭, Q 속박 셋업, Daisy로 ADC 보호하는 법, 봇 라인 주요 매치업 대처, 흔한 실수와 W 부쉬 캐스트 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / 셋업형 서포터"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "정글 몬스터를 공격할 수 없고 몬스터도 그를 공격하지 않는다. 캠프에 묘목을 심으면 자동으로 몬스터가 풀려나 — 봇에서도 무료 골드를 챙긴다."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "긴 직선 skillshot. 첫 적에게 적중하면 속박된다. 아군이 속박된 대상을 공격하면 자동으로 그쪽으로 dash. 재사용하면 본인이 dash."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "패시브: 부쉬 안에서 Ivern과 주변 아군의 평타가 추가 마법 피해를 입힌다. 액티브: 원하는 위치에 부쉬 생성 — 시야와 피해 존."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "아군에게 보호막. 1.5초 후 보호막이 폭발해 주변 적에게 마법 피해와 슬로우. 적을 맞히지 못하면 같은 시간 동안 보호막이 다시 충전."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "튼튼한 골렘 아군 Daisy 소환. 같은 대상에게 평타 3연타 시 충격파 띄우기. 재사용으로 위치 지정."
      dd_spell_id: "IvernR"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "후반 모인 한타에서 단일 대상 peel보다 광역 효과가 더 큰 경우"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "광역 engage 조합 상대 (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "본인에게 강한 단일 대상 마법 CC가 박힐 때 (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Yuumi, Aatrox, Vladimir 봇)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "사이드 부쉬로 매복: W를 미리 깔아 시야 확보, 안개에서 Q를 쏘면 ADC가 속박된 대상으로 dash. 6레벨 이후 Daisy와 함께 미드로 로밍해 픽 반복하고 맵 전체를 굴린다."
  weakness: "체력 약함, 다중 대상 hard engage에 peel 불가. 라인에서 Q가 빗나가면 쿨까지 물러서야 함 — 1랭크 14초 Q는 모든 로밍 서폿 중 가장 긴 무방비 시간."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 메인: Summon Aery는 모든 E 보호막에 실려 ADC에게 가고 Q 속박에도 발동된다. Manaflow Band가 E 남발의 마나를 충당, Transcendence로 haste 40 돌파해 Q 쿨 단축, Scorch는 라인이 굳을 때 poke 마무리."
    secondary_rationale: "Resolve 보조: Font of Life는 Q 속박마다 발동 — ADC가 속박된 대상을 공격할 때 회복받아 단일 셋업이 피해와 지속력 둘 다로 변환된다. Revitalize는 Aery와 E 무피격 환불을 증폭한다."
    secondary_alternative: "팀이 미드로의 로밍이 더 필요하고 Flash 가동률이 중요하면 Resolve 대신 Inspiration: Magical Footwear (12분 무료 강화 신발)와 Cosmic Insight (소환사 주문 haste — Flash와 Ignite 더 자주)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "skillshot 던지러 앞으로 나오는 hook 서포터"
      reason: "hook을 맞히려면 Q 사거리 안으로 들어와야 함 — Ivern Q + ADC dash가 hook 캐스팅 모션이 끝나기도 전에 보장된 속박으로 빈틈을 응징."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "이동기 없는 poke 마법사 서포터"
      reason: "dash가 없다. 부쉬에서 Q + ADC 추격으로 지워버린다; 액티브 W는 무료 시야+피해 존을 만들어 그들이 소환사 주문을 태우지 않으면 맞상대 불가."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "고정기 없는 순수 enchanter"
      reason: "회복과 보호막으로 ADC를 따라다니지만 셋업형 속박 앞에서는 peel이 없다; Q가 캐리를 잡고 Daisy 슬램이 따라오면 1.75초 속박을 풀 답이 없다."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "올인 탱커 engager"
      reason: "Flash로 들어와 ADC에 CC를 연쇄 — Ivern이 Q를 쏘기 전에 끝낸다. 다중 CC engage에 peel이 없어 2명 stun 체인이면 E 보호막 한 장은 즉시 깨진다."
    - examples: ["lux", "zyra"]
      archetype: "지역 통제 / 장거리 마법사 서포터"
      reason: "Lux의 E 존이 Ivern의 부쉬 각을 끊고 Q 사거리 밖에서 poke; Zyra의 씨앗-식물 zoning이 앞으로 한 발도 안 나오고 Ivern W 패시브를 압도."
    - examples: ["morgana", "tahm-kench"]
      archetype: "cleanse 또는 삼킴으로 CC를 푸는 anti-CC peel 서포터"
      reason: "Morgana E의 spell-shield가 Q 속박을 통째로 막아 셋업 전체가 무산; Tahm Kench W가 Daisy 슬램 반경 밖으로 ADC를 삼켜 3타가 들어가기 전에 빼낸다."
---

## 개요

Ivern은 봇 라인에서 가장 독특한 픽 중 하나다. 원하는 곳에 부쉬를 만들어내고, 맵을 가로질러 챔피언을 속박하며, 6레벨에 튼튼한 골렘을 소환할 수 있는 enchanter다. 패시브 때문에 정글 몬스터를 평타로 칠 수 없지만, 봇 사이드 정글을 지나가며 Krug나 Wolf 캠프에 **Brushmaker (W)** 묘목을 심는 건 막지 않는다 — ADC가 라인을 미는 동안 무료 골드다. 체력은 약하고 도주기는 없으며 1대1 trade에서는 죽지만, 한타 한가운데에 부쉬 벽을 세우고 시야를 차단하며 단 한 번의 Q를 보장된 킬로 변환할 수 있는 서포터는 Ivern뿐이다.

게임 플랜: 웨이브가 도달하기 전에 봇 강가나 트라이부쉬에 W를 미리 깔고, 그 부쉬 안에서 Q를 쏴 적이 캐스팅을 절대 보지 못하게 한다. ADC가 속박된 대상으로 dash하는 순간 E를 얹고, 6레벨 이후엔 Daisy를 데리고 미드로 회전해 맵 전체에서 픽을 만든다. 한타는 Ivern의 피해로 이기는 게 아니다 — Ivern의 셋업으로 이기고, 실제 킬은 캐리가 낸다.

## 추천 빌드

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. 서포터 시작 아이템은 World Atlas 외엔 답이 없다 — 퀘스트를 따라 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass**, 마지막엔 ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**로 자동 진화한다.

**Core items (순서):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 서포터 퀘스트 아이템. 어시스트와 미니언 처형 골드 생성. 미니언 막타 치지 말고 ADC가 farming하게 둔다.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste로 Q와 E를 거의 상시 사용 가능하게 만든다.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 신화. 보호막과 회복이 연쇄 효과를 쌓아 발동마다 회복량이 증가한다 — 7-11초마다 보호막-슬로우-재보호막을 반복하는 enchanter에게 이상적.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — E로 ADC를 보호막 두르면 Censer 패시브가 그에게 attack speed와 on-hit 마법 피해를 부여. ADC가 부쉬 안이나 근처에서 싸울 때 W 부쉬 보너스와 함께 누적된다.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — 두 번째 보호막 트리거 아이템. 보호막 받은 아군에게 추가 ability power와 ability haste를 잠시 제공.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ADC 대상 cleanse 액티브. 보호막으로는 못 막는 단일 대상 강 CC 체인을 해결한다.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 후반 뭉친 한타에서 팀 광역 회복/피해가 Mikael's cleanse보다 판세를 더 흔들 때.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 광역 engage 조합 상대 (Amumu R, Wukong R, Yasuo + Malphite wombo). E 한 방으로 4명을 막을 수 없으니 Locket의 액티브로 막는다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 본인을 콕 집어 hard-CC하려는 상대 (Lux Q, Morgana Q, Zoe E sleep). 첫 발사체를 먹어내고 Daisy 캐스팅까지 살아남는다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka 미드, Yuumi 서폿, Aatrox 탑). 마법 피해가 모든 스킬에 회복 감소를 적용한다.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**가 기본. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots**는 한타 쿨다운보다 회전 속도가 더 중요한 헤비 로밍 조합에서 허용 가능.

**Skill order:** 1레벨 부쉬 cheese-invade 속박을 위해 1레벨에 **Q**, 그 다음 **E**부터 마스터 (보호막 수치 상승, 슬로우로 dive 차단), **Q** 두 번째 (쿨 단축 = 속박 더 자주), **W** 마지막. **R**은 6, 11, 16레벨에 찍는다.

**Runes:** 메인 **Sorcery** + **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 **Resolve** + **Font of Life**와 **Revitalize**.

## 주요 매치업

- **Leona / Alistar:** 하드 카운터. flash-engage가 ADC에 CC를 연쇄해 Q가 나가기 전에 끝낸다. W 부쉬 최대 사거리에 머무르고, flash가 닿는 웨이브 사이로는 절대 다니지 말고, 상대 소환사 주문이 켜져 있을 땐 ADC에게 미리 보호막을 둘러둔다.
- **Thresh:** 실력 매치업. 두 서포터 모두 단일 hook/속박 셋업으로 킬을 노리지만 Ivern이 사거리 싸움을 이긴다 (Q 1125, Thresh hook 1100). hook 사거리 밖에 서서 부쉬에서 Q를 쏜다; 그가 먼저 hook을 박으면 ADC에 E를 얹고 빠진다.
- **Lux:** 라인 bully. 그녀가 E-Q로 poke하는 동안 너는 돌려줄 게 없다 — 네 Q는 킬 셋업이지 poke 도구가 아니다. 그녀의 Q가 쿨일 때만 trade하고, 속박을 계속 맞으면 Banshee's Veil를 챙긴다.
- **Yuumi:** 공짜 픽. skillshot을 던지려면 떨어져야 하고 그 순간엔 도주기 없는 600 HP 표적이다. 떨어질 때 Q, ADC dash, 공짜 킬 — 14초마다 반복.
- **Pyke:** 부쉬에서 싸운다. 너의 W 패시브가 너와 ADC의 평타를 부쉬에서 강화한다; Pyke의 Q 캐스팅 모션은 보이지만 W로 깐 부쉬 안에서 쏘는 너의 Q는 완전히 가려져 그가 모든 부쉬 trade에서 진다.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + E):** 첫 올인 창. Q 1포인트로 셋업, E로 dash 보호막이 있으면 너와 ADC가 보장된 Flash 하나 vs 상대 ADC HP 바를 교환한다. 두 번째 웨이브의 캐스터 미니언을 같이 쳐서 2레벨을 먼저 찍어라.
- **6레벨 (Daisy! 활성):** 맵 가로지르는 로밍 창. Daisy는 타워 어그로를 4-5초 받을 만큼 튼튼하고, 3타 띄우기는 ADC가 Flash를 들고 있으면 곧 engage다. Daisy가 있고 웨이브가 밀려 있는 순간 미드로 로밍.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer 완성 (~13-15분):** 보호막/회복 연쇄가 누적된다. 4초 이상 가는 모든 한타에서 너의 회복량이 상대 서포터를 추월한다 — 상대가 Soraka든 Sona든.
- **3코어 파워스파이크 (Moonstone + Boots + Ardent 또는 Staff, ~22-24분):** 오브젝트 한타를 강제하라. 너의 보호막 트리거 덕에 너의 ADC가 상대보다 더 세고 더 빠르게 때리고, Daisy R 쿨도 아이템 완성과 함께 줄어든다.

## 흔한 실수

- **미니언 막타 치기.** World Atlas의 처형 발동은 ADC가 킬을 가져가도 너에게 골드를 준다 — CS 훔치지 마라. freeze 셋업이 아니라면 ADC 뒤로 미니언 한 줄 거리를 둔다.
- **장거리에서 Q 빗맞히고 follow-up 없기.** Q는 1랭크 14초 — 빗나간 캐스팅은 14초 동안 킬 버튼이 없다는 뜻이다. 상대가 회피하고 있다면 먼저 부쉬 안으로 걸어가, 상대가 예상 못한 더 가까운 각도에서 쏴라.
- **W 부쉬를 미리 안 깔고 한타 중에 깔기.** 한타 중 만든 부쉬는 사실상 시야 도구일 뿐 — 가치는 미리 깔아두는 데 있다: 로밍 5초 전 트라이부쉬에 하나, 또는 Drake 콜 전 미드 강가에 하나. 한타 중 부쉬는 키트가 선제적이길 원하는데 반응적인 행동이다.
- **한타에서 Daisy를 최대 사거리에 떨어뜨리기.** Daisy가 띄우려면 대상에 도달해 평타 3연타를 해야 한다. 1500 거리에서 R = 첫 평타까지 4초 걸어감 — 그땐 한타가 끝났다. R은 적 라인 뒤로, "피해용"이 아니다.
- **E 보호막 하나로 1대다 peel 시도.** E는 한 명에게만 보호막. ADC + 미드 + 너까지 동시에 맞는 광역 engage에는 보호막 하나로 부족하다. wombo 조합을 보면 draft에서부터 Locket of the Iron Solari를 계획하라.

## 고급 팁

**W 액티브 부쉬**로 적이 회피할 수 없는 Q 각도를 만들어라. 표준 패턴: 너 앞 600 거리에 W 부쉬를 깔고, 부쉬 안으로 걸어 들어간다 (그 패치에 시야가 없으면 적에게 너는 보이지 않는다). 그 안에서 Q를 쏘면 — 적은 캐스팅을 못 봤기 때문에 발사체가 어디서 출발하는지 예측할 수 없다. 사실상 안개 없이도 1125 사거리의 무료 속박이며, 그래서 Ivern은 Caitlyn, Senna, Jhin 같은 ADC와의 듀오 라인에서 빛난다: 멀리서 공격하고 싶은 ADC가 적이 대비할 수 없는 보장된 킬 셋업으로 공짜 dash를 얻는다.
