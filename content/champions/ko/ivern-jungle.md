---
title: "Ivern Jungle Build & Guide — Patch 16.9"
slug: "ivern-jungle"
language: "ko"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Ivern 정글 공략. 평화주의 그루브 클리어, enchanter 빌드 순서, Sorcery 룬, Q 루트 셋업, Daisy 한타 운영, 핵심 매치업, 자주 하는 실수, 그리고 W 부쉬를 활용한 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / 유틸리티 정글러"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "정글 몬스터를 공격할 수도, 공격받을 수도 없음 (Drake/Baron 같은 에픽만 예외). 캠프에 그루브를 심으면 다 자라서 몬스터가 자동으로 풀려남."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "긴 직선 스킬샷, 첫 적중 적을 속박. 속박된 대상을 공격하는 아군은 자동으로 그쪽으로 대시. 재시전 시 본인이 대시."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "패시브: 수풀 안에서 평타에 추가 마법 피해 (본인과 근처 아군). 액티브: 어디든 수풀 생성, 시야와 데미지 존 제공."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "아군(또는 Daisy)에게 보호막. 1.5초 후 보호막이 폭발, 마법 피해와 근처 적 슬로우. 아무도 맞지 않으면 보호막이 재생성됨."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "탱키한 골렘 아군 Daisy 소환. 같은 대상에 평타 3연타 시 넉업 충격파 발사. 재시전으로 위치 명령."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "ADC에 단일 대상 강력 CC가 연속될 때 (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "AOE 이니시 조합 상대 (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "상대 핵심 위협이 본인을 향한 장거리 마법 CC일 때"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "백라인을 다이브하는 기동성 암살자 상대 (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "회복 누적 조합 상대 (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "안갯속에서 Q로 픽을 만들고, 한타 중심에서 가장 강한 캐리에 E로 보호막을 두르고, Daisy를 적 프론트라인 뒤에 던져 3평타 넉업으로 속박된 대상을 정리. 6레벨에서 강력한 스파이크."
  weakness: "챔피언 1대1 불가 — 평타 약하고 도주기 없음. 두 그루브 심기 전에 정글이 침범당하면 회복이 매우 느림. 갱킹에서 Q를 빗맞히면 셋업 전체가 날아감."
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
    primary_rationale: "Sorcery 메인: Summon Aery는 모든 E 보호막에 동승하고 Q 루트에도 발동되어 추가 마법 피해. Manaflow Band는 E 연사 마나를 유지, Transcendence는 ability haste를 40 이상으로 끌어올려 Q 쿨 단축, Scorch는 라인전 견제 창을 마무리."
    secondary_rationale: "Resolve 보조: Font of Life는 Q 루트마다 발동 — ADC가 속박된 대상을 공격하면 회복이 들어와 단일 셋업이 폭딜과 지속력으로 변환. Revitalize는 Aery 보호막과 적이 맞지 않을 때의 E 환급을 모두 강화."
    secondary_alternative: "장기 한타에서 Flash 가동률이 더 필요하고 ADC가 이미 지속력을 챙겼다면, Resolve 대신 Inspiration의 Biscuit Delivery (초반 마나/체력)와 Cosmic Insight (소환사 주문 가속, Flash와 Smite 회전 단축) 채택."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "이동기 없는 고정형 캐리"
      reason: "안갯속 Q 한 방으로 묶이고, ADC의 자동 평타-대시 연계가 Flash 전에 거리를 좁힘. Daisy 넉업 후속까지 들어가면 거의 확정 픽."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "평타 스케일링 정글러"
      reason: "Ivern의 그루브 메커니즘은 캠프 싸움 자체를 건너뜀. 상대가 몬스터에게 평타를 갈 동안 Ivern은 이미 라인 보호막과 ADC와의 루트 셋업을 5레벨에 완료."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "초반 인베이드형 정글러"
      reason: "Ivern은 1대1 불가 — W는 수풀 필요, Q는 도주기 없음. 3레벨 이전 인베이드는 그루브를 지우고 방어적 클리어를 강요해 상대 경험치/골드 격차가 게임 내내 누적됨."
    - examples: ["kha-zix", "rengar"]
      archetype: "캐리를 노리는 기동성 암살자"
      reason: "Ivern의 피일을 뛰어넘어 캐리에 직접 도달. E 보호막은 폭딜에 빠르게 녹고, 유일한 강력 CC인 Q는 시전 시간이 길어 대시로 회피 가능."
    - examples: ["amumu", "zac"]
      archetype: "AOE 강제 이니시 탱커"
      reason: "R-Flash 연계가 밀집한 팀을 한 콘에 잡아냄. E 보호막 하나로는 다중 대상을 못 막고, Daisy의 3평타 넉업은 백라인을 살리기엔 너무 늦게 도착."
---

## 개요

Ivern은 평화주의 정글러다 — 그리고 이 한 단어가 플레이 방식의 모든 것을 바꾼다. 패시브가 정글 몬스터 공격 자체를 금지하기 때문에, 캠프에서 평타를 주고받는 일이 절대 없다. 대신 각 캠프에 **Brushmaker (W)** 씨앗을 심고 자리를 떠난 뒤, 시간이 지나 돌아오면 몬스터가 풀려 골드와 경험치를 그대로 챙길 수 있다. 트레이드오프는 명확하다 — 일반 정글러가 풀클리어 중일 때 Ivern은 아군에게 보호막을 두르고, 액티브 수풀로 강 시야를 통제하며, 어떤 다른 정글러보다도 먼저 맵을 가로질러 3레벨 갱킹을 들어간다.

게임 플랜은 enchanter지 암살자가 아니다. 안갯속(fog of war)에서 **Rootcaller (Q)**를 적중시키면 ADC가 평타 자동 대시 효과로 속박된 대상에게 달려들고, 그가 진입하는 순간 **Triggerseed (E)**를 씌운다. 6레벨에는 적 라인 뒤에 **Daisy! (R)**를 박아 3평타 확정 넉업을 만든다. 키트에는 도주기가 없고 평타도 약하다 — 챔피언과 1대1을 시도하면 무조건 진다. 안갯속에 머물고, 동료 가까이에 머물고, 데미지는 팀에게 맡기고 셋업만 책임지자.

## 추천 빌드

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern은 원거리(attack range 475)이므로 Emberknife 대신 Hailblade가 정답이다. 일반 캠프에 Smite를 절대 쓰지 못해도 Drake, Baron, Voidgrubs용으로 Smite는 필수다.

**Core items (순서대로):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade 퀘스트 업그레이드 (XP가 충분히 쌓이는 3-4분경 자동 진화). AP 폭딜용 컴패니언으로, 스킬 시전 후 평타에 마법 피해 프록을 추가해 W 수풀 보너스 위에 누적된다.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. 보호막과 회복이 연쇄 효과를 쌓아 프록마다 회복량이 늘어남 — 7-11초마다 보호막-슬로우-재보호막을 반복하는 enchanter에게 이상적.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste로 Q와 E를 거의 상시 가동.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — E로 아군에게 보호막을 두르면 Censer 패시브가 그 아군에게 공격속도와 마법 데미지 온히트를 부여. ADC가 수풀 안이나 근처에서 싸울 때 W 보너스와 누적된다.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — 두 번째 보호막 트리거. 보호막 받은 아군에게 잠시 추가 ability power와 ability haste를 제공.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 5초 시전의 글로벌 회복/피해 액티브. 뭉친 한타 위에 떨어뜨리면 체력 바를 한 번에 뒤집을 수 있다.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 상대가 ADC에게 긴 단일 대상 CC를 연계할 때 (Morgana Q, Ashe R, Lissandra R). 액티브 cleanse가 어떤 보호막보다 캐리를 오래 살린다.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — AOE 강제 이니시 조합 상대 (Amumu R + Yasuo R 윤보, Wukong R). 액티브가 다수 아군을 동시에 보호해 E 한 발로는 못 막을 상황을 커버.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 기동성 암살자 (Kha'Zix, Zed, Akali, Talon)가 본인을 노릴 때. 스테이시스로 다이브를 버티는 동안 Daisy가 피일.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복 누적 조합 상대 (Soraka, Yuumi, Aatrox, Vladimir). 마법 피해로 회복 감소를 적용하고, 시전 빈도가 충분해 항상 유지된다.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 기본. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness**는 슬로우(Twitch, Ashe, Ahri W)가 사방에서 누적되는 경우 허용 — 단, ability haste 손실은 실재하므로 기동성이 진짜 문제일 때만.

**Skill order:** **E** 선마 (보호막 수치 스케일링이 가장 강하고 슬로우가 다이브를 차단), **Q** 차마 (쿨 감소 = 루트 횟수), **W** 후마 (패시브가 랭크로 스케일링하지만 다른 점이 남지 않을 때만 찍음). **R**은 6, 11, 16레벨.

**Runes:** Primary **Sorcery** + **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** + **Font of Life**, **Revitalize**.

## 주요 매치업

- **Lee Sin / Graves:** 하드 카운터. 둘 다 3레벨 전 정글을 침범하고 1대1은 무조건 패배. 가장 강한 라인(2대2 합류 가능한 위치) 근처에서 시작하고 본인 raptor와 레드 사이드에 와드. 침범 들어오면 후퇴해 라이너가 안갯속에서 처벌하게 두자 — 절대 듀얼하지 말 것.
- **Master Yi / Warwick:** Easy. 초반에 캠프에 평타를 갈 동안 Ivern은 그루브로 캠프 싸움을 건너뛰어, 갱킹 라인에 한 레벨 앞서 도착. Daisy가 가동되면 넉업이 Warwick R을 끊고 Yi의 Alpha-Strike 중간을 차단한다.
- **Karthus:** 6레벨 스파이크 경쟁. 그가 6분부터 글로벌, 너도 6분부터 루트와 Daisy. 첫 킬이 스케일링을 가른다 — Scuttle에서 그에게 초반 Q를 명중시키면 다음 10분을 팀이 굴린다.
- **Kha'Zix:** 안갯속에서 그를 피한다. 고립된 squishy 대상에게 추가 데미지 — 그 대상이 너다. 정글 안전한 쪽에 와드, 오브젝트는 팀과 함께, 8분 이후 와드 없는 안갯속에 단독 패스 금지.
- **Vi:** 미드 라인 우선권으로 갈리는 호각 매치업. Q-Flash-R 연계가 너의 Q를 무시하지만, 미드 라이너에 우선권이 있으면 자유롭게 다이브 못 함. 그녀의 측면 경로를 와드하고, 시야에서 Q 충전 모션이 보이는 즉시 ADC에 미리 보호막을 둘러라.

## 파워 스파이크 및 승리 조건

- **3-4레벨 (그루브 사이클 완성):** 캠프 두 곳이 자라 풀려나면 일반 정글러 클리어를 약 60% 시간에 따라잡는다. 남은 시간으로 상대 정글러가 4레벨이 되기 전에 Q를 든 채 라인에 합류하자.
- **6레벨 (Daisy! 가동):** 첫 **R**이 키트를 해방. Daisy는 한타에서 탱키한 몸이고, 3평타 넉업은 확정 이니시 도구다. 6 찍자마자 사이드 라이너 프리킬을 노려라.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer 완성 (~ 11-13분):** 보호막/회복 체인이 누적되기 시작. 4초 이상 지속되는 모든 한타에서 너의 회복량은 맵 내 Soraka 외 모든 enchanter를 추월한다.
- **3아이템 파워 스파이크 (Moonstone + Boots + Ardent 또는 Staff, ~ 19-21분):** 오브젝트 한타를 강제. 보호막 받은 ADC는 상대보다 더 세고 빠르게 때리며, Daisy R은 1분 풀쿨이라 켤 때마다 싸워야 한다.

## 흔한 실수

- **일반 캠프에 Smite.** 불가능 — 패시브가 막는다. Smite는 Drake, Baron, Voidgrubs, 그리고 상대가 막 처치하려는 적 레드/블루 크로스 정글 스틸에만 보관. 그루브 애니메이션에 Smite를 낭비하면 throw다.
- **본인이 속박된 대상에 평타.** Q를 맞춰도 대시하는 건 너가 아니라 ADC다 — 자동으로, 그가 공격할 때. 진짜 다이브를 의도할 때만 Q 재시전(드물게); 그렇지 않으면 한 발 물러서 진입하는 아군에게 보호막을 두르자.
- **한타에서 W 수풀, 라인에서 안 씀.** 수풀은 라인에서 영구 시야와 웨이브 위 데미지 존으로 가치가 가장 크고, 한타 중에는 시야 도구 정도. 갱킹 후가 아니라 갱킹 전에 트리부쉬에 W를 미리 깔자.
- **Daisy를 최대 사거리에 떨어뜨리기.** Daisy의 가치는 3평타 넉업이고, 이건 그녀가 실제로 대상에 도달해야 발동. 한타 안, 적 라인 뒤에 R — 1500 유닛 떨어진 곳에 "데미지 좀 보태려고" 던지지 마라.
- **AOE 이니시를 E 한 발로 피일하려는 시도.** E는 한 번에 한 명만 보호. Amumu R + Yasuo R로 4명을 잡는 상황에선 Locket of the Iron Solari가 필요. 드래프트를 본 순간 그 아이템을 계획하자.

## 고급 팁

**W 수풀 액티브 배치**로 ADC의 포지셔닝 관점에서 안갯속을 가짜로 만들 수 있다. 적 와드 사거리 가장자리에 수풀을 떨어뜨리면 — 그들은 네가 설치하는 건 보지만 누가 들어가는지는 못 본다. 캐리를 그 수풀 안으로 회전시킨 뒤 라인을 가로질러 Q 발사: 적은 자기 시야로 못 뚫는 brush wall 뒤에서 날아온 스킬샷을 회피할 수 없다. 초반 Ivern/Caitlyn 듀오가 게임에서 가장 스노우볼이 강한 라인전 조합 중 하나가 되는 것도 정확히 같은 트릭이며, 보호막 받은 캐리의 평타가 수풀 안에서 Ardent-empowered 망치로 변하면서 아이템 완성과 함께 더 강해진다.
