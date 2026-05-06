---
title: "Katarina Mid Build & Guide — Patch 16.9"
slug: "katarina-mid"
language: "ko"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Katarina 미드 공략. 시작 아이템, AP 어쌔신 코어 빌드, 주요 매치업, 파워 스파이크, 흔한 실수, 그리고 와드 위 점멸 같은 고급 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Katarina가 피해를 입힌 적 챔피언이 죽으면(킬 또는 어시스트) 남은 쿨다운이 크게 줄어든다. Dagger를 줍는 순간 광역 슬래시가 발동된다."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "지정 대상에게 Dagger를 던져 인근 적에게 튕긴 뒤 첫 대상 뒤에 떨어진다. 바닥에 놓인 Dagger가 모든 콤보의 축이다."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Dagger를 머리 위로 던져 잠시 후 떨어뜨리고 짧은 Move Speed 버프를 얻는다. 점멸할 Dagger 그 자체."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "챔피언, 미니언, 와드, Dagger로 점멸. Dagger를 주우면 Shunpo 쿨이 줄어든다. 가시 와드(보이는 적 와드)에도 사용 가능."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "가장 가까운 적 챔피언 3명에게 칼을 난사하는 채널링. Grievous Wounds 부여. 모든 hard CC로 끊긴다. 선제용이 아닌 후속 정리용."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "hard-engage 상대 (Malphite R, Zac, Amumu) — stasis로 R 채널링을 끊을 진입을 무력화"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "R을 끊는 단일 대상 마법 CC 상대 (Annie 스턴, Lissandra R, Twisted Fate 황금 카드)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "CC 폭탄 조합 상대 (스턴/속박 2개 이상) — R 채널링이 자주 끊길 때 Sorcerer's Shoes 대신 채택"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds로 회복량 캡"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "라인전에서 킬이나 어시스트를 따낸 뒤 snowball한다: takedown마다 Voracity로 풀 쿨이 돌아오므로, 라인전의 한 킬이 다음 웨이브의 더블 킬로 자주 이어진다."
  weakness: "hard CC가 R을 끊으면 채널링이 통째로 버려진다. 쿨을 리셋해 줄 takedown이 없으면 점멸 한 번뿐인 짧은 사거리 근접 챔프가 되어, 장거리 마법사들이 공짜로 두들겨 팬다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Domination: Electrocute는 W-E-Q 콤보 한 사이클당(3초 안에 별개 피해 3타) 안정적으로 발동되어 공짜 burst. Sudden Impact는 매 Shunpo(점멸) 직후 발동. Ultimate Hunter는 takedown마다 Death Lotus 쿨을 깎아주고, 나머지는 Voracity가 마무리한다."
    secondary_rationale: "보조 트리 Precision: Triumph로 takedown 시 잃은 체력의 12% 회복, 리셋된 콤보로 두 번째 킬을 이어가기 쉽다. Coup de Grace는 40% 이하 적에게 +8% 피해 — R로 한타를 마무리하는 정확한 구간."
    secondary_alternative: "상대 팀의 마법 poke가 강하면(Xerath, Vel'Koz, Ziggs), Precision 대신 Resolve로 바꿔 Second Wind(poke 견제용 회복)와 Overgrowth(체력 추가 scaling)를 들고 첫 takedown까지 살아남는다."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "위치 이동기 없는 immobile mage"
      reason: "Katarina의 W-E-Q burst window에서 빠져나갈 수단이 없다. setup 스킬(Veigar 케이지, TF 황금 카드, Anivia E)을 쓴 직후엔 Shunpo all-in에 답이 없다."
    - examples: ["lux", "orianna"]
      archetype: "탈출기 없는 중거리 mage"
      reason: "둘 다 미니언 뒤 포지셔닝에 의존한다. Katarina가 웨이브 너머 Dagger로 점멸해 W-E-Q-AA로 지우고, 킬 리셋으로 다음 타겟까지 이어간다."
    - examples: ["karthus"]
      archetype: "지속 회복도 hard CC도 없는 farm-heavy 스케일러"
      reason: "Karthus는 방해 없는 farm 시간이 필요하다. Katarina의 reset 압박은 그를 점멸까지 쓰게 만들고, 그의 유일한 win condition인 후반 scaling을 뺏는다."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "point-and-click hard CC mage"
      reason: "스턴이 즉발이고 회피 불가: 채널링 중 Death Lotus를 끊고, Katarina를 박힌 채로 만들어 적 팀이 그대로 덮친다."
    - examples: ["xerath", "vel-koz"]
      archetype: "장거리 artillery mage"
      reason: "처음 5레벨 동안 Q 사거리(625) 밖에서 일방적으로 poke한다. 6레벨에 이미 40% 체력에, Voracity 리셋도 없는 상태로 도착하고, skillshot 1세트에 사망."
    - examples: ["diana", "pantheon"]
      archetype: "point-and-click 진입을 가진 burst all-in midlaner"
      reason: "Diana의 Q-R 콤보와 Pantheon의 W 스턴은 Katarina의 W Dagger가 떨어지기도 전에 들어온다. trade race에서 지고 아이템 스파이크에서도 밀린다."
---

## 개요

Katarina는 패시브 **Voracity**를 중심으로 설계된 근접 AP 어쌔신이다. 모든 takedown(킬/어시)은 그녀의 남은 모든 스킬 쿨다운을 극적으로 깎아준다. 이 단 하나의 메커니즘이 챔피언의 정체성 전체다 — 라인에서 한 번 킬이 나면 풀 콤보가 다시 도니, 한 번의 takedown이 다음 웨이브의 더블 킬로 이어지는 일이 흔하다. 미드가 잘 어울리는 이유는, 맵 전반으로 reset을 이어가려면 회전 동선이 짧아야 하기 때문이다.

게임 플랜은 말로 하면 단순하지만 실행은 어렵다. **W**로 Dagger를 떨어뜨리거나 **Q**가 남기는 후행 Dagger를 활용하고, **E**로 그 위로 점멸해 광역 피해를 박은 뒤, 평타를 섞으며 적이 저체력일 때 **R**을 채널한다. 실력이 갈리는 지점은 두 군데다 — 시전 순서 **W-E-Q**(점멸 전에 Dagger가 먼저 떨어져 있어야지, 점멸 후가 아니다)와 **R**을 언제 누르는가다. 선제로 누르면 어떤 스턴에도 끊기고, 한타가 시작된 뒤에 누르면 reset 사슬로 한타를 정리한다.

## 추천 빌드

**시작 아이템:** Doran's Ring + Health Potion 2개. 원거리 매치업이라도 Doran's Shield는 거른다 — AP와 마나 회복으로 얻는 trade 우위가 체력으로 버티는 양보다 크다.

**코어 아이템 (구매 순서):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — 첫 번째 아이템 스파이크. Shunpo 위에 두 번째 짧은 dash(액티브)를 더해, 이미 탈출기를 쓴 적에게 바로 진입할 수 있다. counter-engage를 견디기 위한 AP와 체력도 함께 제공.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. 기본 신발; CC가 많으면 Mercury's Treads로 교체.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — W-E-Q 콤보와 정확히 맞물리는 burst 스파이크. 적을 일정 체력 이하로 떨어뜨릴 때 발동하는 패시브 덕에, R 없이도 타겟을 끊어낼 추가 burst가 생긴다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 scaling 배수기. 가장 강력한 AP 슬롯; +30% AP가 Katarina를 "snowball assassin"에서 "squishy 원샷"으로 끌어올린다.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 적의 잃은 체력에 비례하는 추가 마법 관통. Stormsurge, R과 함께 한타 중 저체력 타겟을 마무리하는 데 환상적으로 맞물린다.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 적이 마법 저항 아이템 한 칸을 완성하는 즉시 구매.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — hard-engage 상대 (Malphite R, Zac, Amumu). stasis로 R 채널링을 끊을 진입을 차단한다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — R을 끊는 단일 대상 마법 CC 상대 (Annie 스턴, Lissandra R, Twisted Fate 황금 카드). 보호막이 한 스킬을 막아 채널링이 살아남는다.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀이 Death Lotus를 끊는 스턴/속박을 2개 이상 들면 Sorcerer's Shoes 대신.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka mid, Vladimir, Dr. Mundo top). 적의 회복량을 캡해 킬이 킬로 남도록.

**신발:** Sorcerer's Shoes가 기본. 적 팀이 hard CC를 들면 Mercury's Treads로 교체; Ionian Boots of Lucidity는 Voracity가 이미 쿨을 깎아주므로 거의 정답이 아니다.

**스킬 마스터 순서:** **Q** 선마(웨이브 클리어와 주력 피해), **W** 후마(모든 콤보의 축이 되는 dagger), **E**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Domination**에 **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. 보조 **Precision**에 **Triumph**와 **Coup de Grace**. 키스톤(페이지 상단의 메인 룬)은 W-E-Q 콤보에서 별개 피해 3타가 들어가므로 자연스럽게 발동된다.

## 주요 매치업

- **Annie:** 가장 어려운 매치업. 스턴이 point-and-click이고 Death Lotus를 즉시 끊는다. 라인이 풀리지 않으면 두 번째 아이템으로 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**. 6레벨 전엔 웨이브 뒤에서 **Q**로만 farm하고, 스턴이 쿨에 들어가기 전엔 절대 점멸하지 마라.
- **Lux:** 6레벨 도달 후엔 유리한 매치업. 6 전엔 그녀의 **Q** 사거리가 더 길어 미니언 뒤에서 회피 위주로. 6 후엔 사이드 웨이브의 dagger로 점멸해 처치 — 그녀에겐 도주용 dash가 없다.
- **Zed:** skill 매치업. 같은 all-in 패턴에 disengage가 더 많다(그의 **R**은 0.5초 동안 비대상화되어 채널링을 끊는다). 그가 **R**을 먼저 쓸 때까지 **R**을 아껴라; 콤보를 견디면 킬 리셋으로 이어간다.
- **Twisted Fate:** 명백한 카운터픽. 6 전엔 라인 푸시로 앞서고, 6 후 그가 roam을 시도할 때 웨이브의 dagger로 점멸해 처치한다(그에겐 방어 아이템이 없다). 미드 와드로 **R** 동선을 추적하라.
- **Diana:** 강한 카운터. **Q-R** 콤보가 너의 **W** dagger가 떨어지기도 전에 발동한다. 세 번째 아이템으로 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**; 그것 없이는 타워 아래에서 그녀에게 점멸하지 마라.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q**와 **E**만으로도 trade가 가능하다. **Q**를 던지고, 튕김 사거리까지 걸어가, 떨어지는 dagger 위로 **E** 점멸로 광역 피해, 그리고 빠진다. 쿨마다 반복하면 공짜 poke다.
- **6레벨:** 첫 **Death Lotus**. Voracity 덕에 킬/어시 한 번이 채널링을 새로 돌리고, 소규모 교전 피해량을 두 배로 만든다 — 6 전 한타가 4초였다면, 6 후엔 takedown 한 번으로 reset이 도는 10초짜리 한타가 가능해진다.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt 완성 (~ 11-13분):** 첫 큰 스파이크. 액티브 dash로 두 번째 기동 수단이 생겨, 이미 탈출기(Flash, Lux **E**, Yasuo **E**)를 쓴 적에게 진입한다. roam 압박이 여기서 뒤집힌다.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 완성 (~ 18-22분):** W-E-Q-AA 콤보가 70% 체력 이하의 squishy를 R 없이도 원샷한다. 이 타이밍에 오브젝트 한타를 강제하고 사이드에서 픽을 노려라.

## 흔한 실수

- **선제로 R을 채널링.** hard CC가 Death Lotus를 끊고 쿨이 그대로 날아간다. **R**은 한타 시작 후 — 우리 탱커가 진입한 뒤, 적 프론트라인이 CC를 다 쓴 뒤 — 안전한 자리에서 정리용으로 쓴다. 선제 **R**은 너를 끊을 수단이 없는 저체력 타겟을 마무리할 때만.
- **W를 떨어뜨리지 않고 E부터 점멸.** 시전 순서는 **W → E → Q**. 점멸할 때 dagger가 바닥에 있거나 막 떨어지는 중이어야 한다. 아니면 dagger를 줍지 못해 패시브 광역 피해도, Shunpo 쿨감도 둘 다 잃는다.
- **마무리할 수 없는 타겟에서 reset에 욕심.** 적이 35% 체력이라도 동료가 바로 옆이면, 킬 처리 시점에 Voracity가 제때 발동하지 않아 follow-up에 죽는다. **W** Move Speed로 빠져나오고, 쿨은 정직하게 기다려라.
- **웨이브 클리어용으로 Shunpo를 미니언에 낭비.** **E**는 방어용 탈출기다. 웨이브는 **Q**+평타로 밀고, 미니언 점멸은 한타 commit이나 도주 시에만.
- **이중 point-and-click CC 상대로 Katarina 픽.** 적 팀이 Annie + Leona면 너의 **R**은 절대 끝나지 않는다. 챔프 셀렉트에서 dodge하거나, 그들의 쿨을 보고 플레이하는 걸 받아들여라 — 스턴이 다른 사람에게 빠진 뒤에만 점멸 진입.

## 고급 팁

**E**를 적 와드에 사용해 gank를 빠져나가라. 점멸은 보이는 와드 어디에도 작동한다 — 적의 trinket과 우리 강가 측에 박힌 핑크 와드도 포함이다. gank가 도착하기 전에 삼거리 수풀의 Stealth Ward를 발견하면, 적의 미니맵엔 보이지 않는 공짜 탈출 수단이 생긴다. 대부분 상대는 자기가 출구를 만들어줬다는 걸 모른 채 와드를 앞쪽으로 박는다. 거꾸로도 통한다 — 백 도중 우리 타워 근처에 박힌 적 와드를 보면, 다음 gank의 시작 지점을 그것을 피해 잡아라.
