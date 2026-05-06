---
title: "Galio Support Build & Guide — Patch 16.9"
slug: "galio-support"
language: "ko"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Galio 서포터 완벽 공략. 시작 아이템부터 인게이지 탱커 코어 빌드, 룬 선택과 스킬 마스터 순서, 핵심 매치업 대처, 6레벨 맵 전역 R 파워 스파이크, 라인전 흔한 실수, R+점멸 같은 고급 콤보까지 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "몇 초마다 Galio의 다음 평타가 적중 시 작은 범위에 추가 마법 피해를 입힙니다."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "두 개의 돌풍이 지정 위치에서 토네이도로 합쳐져 지속 마법 피해를 줍니다. 안전한 위치에서 장거리 견제용."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "마법 피해를 흡수하는 방패를 차징; 해제 시 도발과 광역 피해. 한타 중반에 풀어서 ADC를 피하게 합니다(다이버로부터 캐리 보호)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "잠시 뒤로 물러난 뒤 앞으로 돌진해 처음 맞는 적 챔피언을 띄웁니다. 주력 인게이지 도구."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "아군 한 명을 지정; 짧은 딜레이 후 그 위치에 내려찍어 아군에게 보호막, 적은 띄웁니다. 맵 전역 인게이지."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "ADC에 단일 대상 강한 CC가 박힐 때(Morgana Q, Ashe R, Skarner R) — 액티브가 CC 해제와 회복을 동시에"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "평타 의존 ADC와 함께(Jinx, Caitlyn, Tristana) — W 둔화가 그들의 DPS 구간에 그대로 연결"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "AP 위주 아군 조합(미드 AP + 정글 AP) — 디버프 오라가 도발한 대상의 마법 피해를 증폭"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "상대 팀에 AP 위협 3명 이상(미드 + 정글 + 서포터 모두 마법 피해)"
    - dd_id: "3107"
      name: "Redemption"
      against: "엔챈터 ADC 또는 힐 위주 조합(Soraka, Sona, Yuumi 이미 팀에) — 오브젝트 전투에서 광역 회복"
  base_combo: ["E", "AA", "W"]
  win_condition: "Hero's Entrance R로 드래곤과 협곡의 전령 스폰 타이밍에 맵 전역 인게이지. 봇 소규모 교전에서는 E 띄우기, W 도발로 ADC 피하기, 그리고 Knight's Vow로 캐리 피해를 분담."
  weakness: "W 차징은 후크(Blitzcrank, Thresh)와 침묵에 끊깁니다. 디스인게이지 엔챈터(Janna, Lulu)가 R 후속을 무력화합니다. 단독 피해 한정 — ADC 후속 없이는 인게이지를 킬로 못 바꿉니다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 주룬: Aftershock이 W 도발이나 R 띄우기에 발동, 인게이지 후 생존을 위한 방어력을 제공. Font of Life는 ADC가 묶인 대상을 칠 때 회복, Bone Plating은 첫 폭딜 흡수, Revitalize는 R 보호막 값 증가."
    secondary_rationale: "Inspiration 보조: Biscuit Delivery가 라인전에서 무료 체력과 마나 회복을 제공하고(Galio는 서포터 골드로는 마나가 부족), Cosmic Insight가 점멸 쿨다운을 줄임 — R+점멸이 최고 임팩트 캐치 도구이므로 필수."
    secondary_alternative: "강한 견제 라인(Brand, Zyra, Xerath 서포터)에서 6레벨까지 멀쩡히 도달이 어려울 때, Inspiration을 Sorcery로 교체 — Manaflow Band(반격 Q 마나)와 Transcendence(빠른 E로 견제 회피)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "이동기 없는 비기동 ADC"
      reason: "Hero's Entrance가 아군 머리 위에 띄우기로 떨어지면, 이동기 없는 캐리는 빠져나갈 수 없어 R만 켜지면 모든 2v2가 킬로 직결됩니다."
    - examples: ["leona", "rakan"]
      archetype: "후크 없는 탱커 인게이지 서포터"
      reason: "Galio E 띄우기가 그들의 인게이지 윈드업(Leona Q 기절 워킹, Rakan W 차징)을 끊고, W 보호막이 인게이지 후속의 마법 피해를 흡수합니다."
    - examples: ["brand", "zyra"]
      archetype: "이동기 없는 물몸 마법사 서포터"
      reason: "마법사 서포터는 스킬샷을 맞히려고 멈춰 서기 때문에, Galio E가 미니언 너머로 닿고, W가 보통 근접 인게이저를 쫓아낼 폭딜을 탱킹합니다."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "후크 서포터"
      reason: "W 도중 후크가 박히면 인게이지 전체가 취소; 회피 도구가 없는 큰 표적이라 후크와 연계 CC면 R과 E 둘 다 전투에서 빠집니다."
    - examples: ["janna", "lulu", "milio"]
      archetype: "디스인게이지 엔챈터"
      reason: "광역 밀치기나 보호막+해제 스펠이 R 착지 타이밍과 W 도발을 무효화 — Galio가 떨어질 즈음엔 캐리는 이미 사거리 밖."
    - examples: ["xerath", "vel-koz"]
      archetype: "장거리 포격형 마법사 서포터"
      reason: "Galio Q 사거리와 E 돌진 거리 밖에서 견제, 라인전 응징 불가; 6레벨 이전에 체력 손실이 누적되면 사이드 R 영향력이 떨어집니다."
---

## 개요

Galio 서포터는 탱커 외피 안에 든 맵 전역 인게이지(전투 시작) 도구입니다. 일반 정화로 풀 수 없는 강력한 CC를 세 가지 스킬에 걸쳐 가지고 있습니다: **W** 도발(대상이 잠시 자신을 공격하게 강제), **E** 띄우기(짧은 공중 띄움, 짧은 기절과 비슷), **R** 띄우기. 마법 피해를 흡수해 원거리 서포터의 폭딜(1-2초 내 큰 피해)을 막는 마법 보호막이 있고, 드래곤과 협곡의 전령 스폰을 5v5 킬 기회로 바꿔주는 글로벌 궁극기가 있습니다. 골드가 아니라 맵 인지로 영향력이 커지기 때문에 서포터로 가는 것이고, Hero's Entrance는 본인이 탱커일 때보다 아군이 위에 떨어질 탱커가 필요할 때 가장 빛나기 때문입니다.

라인전 운영은 인내심 게임입니다. Q를 최대 사거리에서 적을 깎는 데 쓰고, E는 ADC(원딜, 평타로 피해를 내는 캐리)가 교전을 거는 순간을 위해 아껴두며, W는 적이 이미 근접에 붙어 있을 때만 차징합니다. 큰 그림은 6레벨에서 시작 — 아군 정글이 탑을 다이브(킬을 위해 포탑 안으로 진입)할 때 R로 합류, 적 정글이 봇에 보이면 R로 톱 라이너 방어. 스킬 표현력은 W 타이밍(핵심 채널을 끊기 위해 해제 — Caitlyn R, Twitch 궁 분사, Master Yi Q)과 R 대상 선택(채널 2초를 버틸 가능성이 가장 높은 아군을 항상 선택 — 체력이 이미 낮은 Vayne에게는 절대 R 금지)에서 나옵니다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** 2개. 표준 서포터 시작 아이템; 퀘스트 업그레이드(시간이 지나며 골드를 모아 자동 완료되는 내장 임무)는 12-14분에 해금됩니다.

**코어 아이템(순서대로):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — World Atlas 퀘스트 업그레이드. Galio가 인게이지 지향형(전투를 시작하지, 빠지지 않음)이기에 선택. W나 E가 적중할 때마다 발동되는(자동 트리거) on-immobilized 추가 피해 패시브가 붙습니다.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 5v5 소규모 교전용 광역 보호막 액티브. R과 결합: R로 착지하자마자 Locket을 떨어뜨리면 팀 전원이 700+의 보호막으로 적의 후속 폭딜을 받아냅니다.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 스킬 가속 신발. 모든 스킬 쿨을 줄여 한타 사이 인게이지 도구가 빨리 돌아오고, 소환사 주문 쿨감이 점멸을 줄여 R+점멸 콤보를 자주 쓸 수 있게 합니다.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 가장 영향력 큰 캐리에게 바인딩. 그쪽 피해를 본인에게 돌려 받고, 본인이 우선 표적이 되므로 Aftershock 가치도 함께 상승.

**상황별 아이템:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ADC에 단일 대상 강한 CC가 박힐 때(Morgana Q, Ashe R, Skarner R). 액티브로 CC 해제 + 회복.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 평타 의존 ADC와 함께(Jinx, Caitlyn, Tristana). W 둔화가 그쪽 DPS 구간에 그대로 연결.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — AP 위주 아군 조합(미드 AP + 정글 AP). 디버프 오라가 W로 도발한 대상에게 팀의 마법 피해를 증폭.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 상대 팀에 AP 위협 3명 이상(미드 + 정글 + 서포터 모두 마법 피해).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 엔챈터 ADC나 힐 위주 조합(Soraka, Sona, Yuumi 이미 팀에).

**신발:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 기본 — 스킬 가속과 점멸 쿨감이 R+점멸 콤보를 더 자주 가능하게. CC가 강한 조합(R 착지 타이밍에 노린 다수의 기절/매혹/속박)에는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**스킬 빌드:** **E** 우선 마스터(인게이지 쿨 단축). **Q** 두 번째 마스터(웨이브 정리와 ADC가 푸시당해 — 미니언 없이 포탑 아래 갇힘 — 도 깎는 용도). **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트.

**룬:** 주룬 **Resolve**에 **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. 보조 **Inspiration**에 **Biscuit Delivery**와 **Cosmic Insight**. 6레벨까지 멀쩡히 도달이 어려운 강한 견제 라인에서는 보조를 **Sorcery**(Manaflow Band + Transcendence)로 교체.

## 주요 매치업

- **Blitzcrank:** 어려운 라인. Q 후크가 W 차징 중에 들어옵니다. 미니언 웨이브 뒤에 서서 관통 후크를 막고, 시야 밖에서 W를 차징하지 말며, 4-5분쯤 정글을 콜하세요 — Blitz는 도주기가 없고 E 띄우기로 연계 CC가 가능합니다.
- **Lulu:** 까다로운 디스인게이지. E 보호막 + W(밀치기 또는 변이)로 인게이지가 지워집니다. 6레벨 전에는 E 인게이지 대신 Q를 최대 사거리에서 견제, R은 화면 밖에서 시전해 변이가 도착 전에 박히지 않게.
- **Leona:** 호각 교전. 둘 다 인게이저라 E를 먼저 맞히는 쪽이 트레이드를 가져갑니다. 앞스텝으로 그녀의 Q 태양 일격을 베이트한 뒤, 회복 프레임에 E.
- **Soraka:** 유리. 그녀의 회복은 사거리 안에 있을 때만 의미가 있습니다. 최대 거리에서 Q로 회복과 회피 중 하나를 선택하게 만들고, 정글이 봇에 보이면 R + E로 답이 없는 3v2.
- **Pyke:** 호각 교전이지만 Pyke가 킬을 먹으면 Galio가 집니다. 후크를 추적하고, 스파이크에 ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari**를 못 쓸 때 ADC가 최저 체력에 있게 두지 말고, R이 리셋이므로 강가를 깊게 와딩.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + E로 첫 킬 위협이 풀립니다. ADC 후속과 함께 전진 — E로 서포터, ADC 발 밑에 Q — 둔화에서 띄우기 연계가 평타 두 대 분의 피해를 보장.
- **6레벨:** **Hero's Entrance**가 맵 전역 영향력을 풉니다. 첫 드래곤 교전이 파워 스파이크 — 웨이브를 강하게 밀고 미드 강가까지 걸어가, 아군 정글이 드래곤 둥지에서 인게이지하면 R.
- **Bloodsong 완성(~12-14분):** 인게이지가 진짜 피해를 내기 시작. on-immobilize 발동이 W나 E 대상에게 타격당 30+ 마법 피해를 추가.
- **Locket of the Iron Solari + Knight's Vow 완성(~20-25분):** 두 아이템 스파이크. 캐리에게 R-Locket이 팀 합산 600+ 유효 체력을 보장하고, Knight's Vow가 본인에게 모이는 포커스 화력을 탱킹하는 동안 ADC는 계속 DPS.

## 흔한 실수

- **ADC 후속 없을 때 W 차징.** W 도발은 적이 자신을 공격하게 하지만, ADC가 자리 잡거나 귀환 중이면 트레이드 없이 피해만 받습니다. ADC의 첫 평타 타이밍에 W 해제를 맞추세요.
- **Hero's Entrance 표적 실수.** 체력이 이미 낮은 아군에게 절대 R 금지 — 2초 채널 동안 죽어 시체 위에 떨어집니다. 팀에서 체력이 가장 높은 전열 표적을 선택하세요.
- **로밍 중 라인 방치.** Galio 서포터가 미드로 R 가서 봇 웨이브를 통째로 내주는 건 순손해. 적 포탑까지 라인을 먼저 밀고 로밍 — 얼어붙은 라인에서는 절대 로밍 금지.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket 액티브 없이 인게이지.** 오브젝트 교전에서 R-Locket은 가장 가치 있는 단일 쿨다운. 팀이 교전을 커밋할 때까지 액티브를 아꼈다가 같은 순간 둘을 떨어뜨리면 다수 아군에 최대 보호막.
- **W를 두 번째로 마스터.** Galio 미드와 마찬가지로 W 랭크업은 쿨감 효과가 미미. 8레벨에 4초 인게이지 윈도우를 위해 E를 마스터.

## 고급 팁

R+점멸 콤보: 아군에게 Hero's Entrance를 시전한 뒤 윈드업 애니메이션 중에 점멸하면 착지 지점을 임의 방향으로 400 단위 옮길 수 있습니다. 적팀은 아군 위의 R 표시를 보고 뻔한 띄우기를 대비하지만, 점멸한 착지점은 보이는 R 반경 밖에 있는 표적을 잡습니다. 채널 윈도우 안에 점멸을 맞추려면 연습이 필요하지만, 시야 밖(적이 안개 안에 있는 본인을 못 봄)에서 적 캐리에게 한 번의 R+점멸이면 시작 전에 게임이 끝납니다.
