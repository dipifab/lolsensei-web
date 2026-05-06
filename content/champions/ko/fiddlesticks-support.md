---
title: "Fiddlesticks Support Build & Guide — Patch 16.9"
slug: "fiddlesticks-support"
language: "ko"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Fiddlesticks 서포터 공략. AP 이니시에이션 빌드, Resolve 룬, 라인전 운영, 주요 매치업, 6레벨 Crowstorm 파워 스파이크, 흔한 실수와 풀숲 R 시전 고급 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "트링켓 슬롯이 허수아비 충전형으로 바뀐다. 가짜 Fiddle 허수아비를 배치해 시야 확보; 적이 보면 잠깐 fear가 걸리고 허수아비는 폭발한다."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "단일 대상 지정. unseen 상태에서 스킬로 피해를 주면 자동으로 Terrify가 걸린다. 1-2.5s 동안 Fiddle 반대 방향으로 도망치게 한다."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "주변 적의 HP를 빨아들이는 채널 (자기 체력 회복). 채널 끝에 처형형 추가 피해. 첫 귀환 후 라인 sustain의 핵심."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "넓은 부메랑 낫: 맞은 모든 적에게 슬로우, 중앙 라인의 적에겐 침묵까지. 주력 라인 견제기 — 두 번 명중한다."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5초 채널 후 지정 위치로 점멸, 5초간 Fiddle 주변에 초당 광역 피해. 라인 풀숲에서 적 ADC 위로 시전하는 게 정석."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "팀이 능동 보호막을 필요로 하는 광역 burst 조합 상대 (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "R 채널을 끊는 단일 대상 마법 CC 상대 (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적이 강한 조합 상대 (Soraka, Vladimir, Aatrox) — Grievous Wounds 적용"
    - dd_id: "3135"
      name: "Void Staff"
      against: "적 2명 이상이 마법 저항 아이템을 사면 즉시 교체"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "봇에 깊은 시야 세팅, 6레벨에 삼거리 풀숲에 숨었다가 적 ADC 위로 Crowstorm. 확정 킬을 만들어 캐리를 snowball 시킨다."
  weakness: "6레벨 전 이니시에이트 서포터 중 라인전이 가장 약함: 보호막 없음, 즉시 시전 CC 없음. 인베이드나 견제로 밀리면 궁이 켜질 때까지 반격 수단이 없다."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock은 Q Terrify(이동 불가 CC)에 발동되어 2.5초간 방어력·MR 폭증, Crowstorm 직후 집중 공격에서 Fiddle을 살린다. Font of Life는 fear 후 캐리 회복, Bone Plating은 초반 all-in 폭딜 흡수, Revitalize는 Bountiful Harvest의 sustain 강화."
    secondary_rationale: "Sorcery 보조: Manaflow Band로 라인전 E 난사용 마나 문제 해결, Transcendence로 Sorcerer's Shoes 완성 후 ability haste를 30 이상으로 올려 Crowstorm 사이클 단축."
    secondary_alternative: "강한 견제 라인 상대 (Lux, Karma, Xerath support)에는 Sorcery 대신 Inspiration의 Biscuit Delivery (초반 무료 비스킷 5개로 풀 체력·마나 유지)와 Cosmic Insight (Flash·Crowstorm 쿨 단축)을 든다."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "하드 CC 없는 스쿼시 enchanter"
      reason: "이쪽 키트는 힐과 보호막 중심. 삼거리 풀숲에서 시전한 Crowstorm은 그들의 쿨다운을 압도하며 힐이나 보호막을 두 번 쓰기도 전에 본인과 ADC를 한 방에 처리한다."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "이동기 없는 immobile ADC"
      reason: "이런 ADC들은 풀숲에서 측면 진입을 피할 수 없다. R + E가 들어가면 거리 재설정 도구가 없어 봇 라인이 그대로 킬을 타워로 전환한다."
    - examples: ["sona", "seraphine"]
      archetype: "탈출기 없는 후방 마법 서포터"
      reason: "버프를 위해 멀찍이 자리 잡지만, 허수아비가 깊은 시야를 줘서 위치를 잡아낸다. 그들의 헥스 안에서 시전한 R 채널이 움직이기 전에 한 방에 끝낸다."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Black Shield / 스펠 실드 enchanter"
      reason: "Black Shield는 Terrify (Q fear)와 캐리에게 들어가는 Crowstorm 첫 광역 틱을 흡수해 이니시 캐스트를 무효화하고 5초 디스인게이지 창을 만들어 준다."
    - examples: ["janna", "lulu"]
      archetype: "디스인게이지 / peel enchanter"
      reason: "Janna R이나 Lulu W가 착지 순간 캐리에서 떼어낸다. Crowstorm 광역은 계속 틱하지만 후속 CC 없이 교전이 리셋되고, 본인은 헛된 집중 공격만 받는다."
    - examples: ["lux", "karma", "xerath"]
      archetype: "장거리 포격형 서포터"
      reason: "E 사거리 밖에서 6레벨 전부터 라인전을 견제로 무너뜨린다. Fiddle은 보호막도, 거리 좁힐 수단도 없어 첫 R이 켜지기 전에 체력이 절반으로 떨어진다."
---

## 개요

Fiddlesticks 서포터는 hide-and-engage(숨었다가 이니시에이트) 픽이다. AP (Ability Power, 마법 피해 스케일링) 서포터로, 라인전 전체가 단 한 순간 — 6레벨에 라인 풀숲 안에서 적 ADC (마크스맨, 봇 라인의 원거리 평타 캐리) 위로 **Crowstorm (R)** 을 누르고, 봇 라인이 점멸 후속을 받쳐주는 그 한 방 — 을 위한 셋업이다. Fiddle은 보호막도, 즉시 시전 CC도, 탈출기도 없다. 그래서 6레벨 파워 스파이크의 대가로, 1~5레벨 사이는 이니시에이트 서포터 중 가장 약한 라인전을 견뎌야 한다.

게임 플랜은 단순하다. 봇 삼거리 풀숲과 강에 허수아비를 깔아 잠복 플레이를 위협하고, 적이 막타를 치러 다가오면 **Reap (E)** 의 슬로우 + 침묵으로 견제하며, 장거리 매치업에는 견제로 밀려나지 않게 거리를 둔다. **R** 이 켜진 뒤로는 적 ADC가 자기 타워 너머로 푸시되거나 서포터가 로밍 나간 순간을 노려 점멸한다. 미드 게임의 임무는 강의 전쟁 안개나 와드 없는 정글 입구를 통한 측면 진입으로 Drake 한타를 여는 것이다. 사실상 라인전을 ADC 옆에서 보내는 정글 Fiddle이라고 보면 된다.

## 추천 빌드

**시작 아이템:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (Bloodsong으로 퀘스트 진화하는 AP 서포터 시작템) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개.

**코어 아이템 (구매 순서):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Spellthief's Edge의 퀘스트 보상. 필수: 진짜 아이템을 살 수 있게 해주는 골드 수입과, 처치 관여 시 누적되는 AP 스택으로 피해를 snowball 시킨다. 12-14분 사이에 퀘스트를 마치자.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통 (적의 마법 저항을 뚫는다). 저렴하고, R이 켜진 뒤로는 ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** 보다 우선 선택지.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — 메인 아이템. **E**, **R** 의 슬로우가 표식을 남기고, 아군이 표식이 남은 적을 때리면 추가 피해로 폭발 (게다가 ADC와 골드 공유). Fiddle의 슬로우 풍부한 키트와 완전한 시너지.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Crowstorm 틱이 끝나는 즉시 stasis로 들어간다. 적에 다이버나 암살자가 있다면 필수; 없으면 매 이니시에이트 후 즉사한다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 게임이 길어지고 서포터 아이템 후 골드가 남았을 때만. +35% AP 보너스로 Crowstorm이 스쿼시 한방.

**상황별 아이템:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 광역 burst 조합 상대 (Yasuo + Malphite, Wukong, Diana). 능동 보호막이 상대의 wombo 동안 팀을 살린다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — R을 끊는 단일 대상 마법 CC 상대 (Lissandra R, Veigar E, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적 2명 이상이 마법 저항 아이템을 살 때.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 가 기본. 적 2명 이상이 하드 CC를 들면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 마스터 순서:** **E** 선마 (슬로우 + 침묵이 라인 견제의 전부), **W** 후마 (첫 귀환 후 sustain), **Q** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**에 **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. 보조 **Sorcery**의 **Manaflow Band**, **Transcendence**. 강한 견제 라인 상대 (Lux, Karma, Xerath support)에는 Sorcery 대신 **Inspiration**의 **Biscuit Delivery**, **Cosmic Insight**.

## 주요 매치업

- **Lux 서포터:** 장거리 Q 속박과 E 견제. 그녀의 **Q**가 깨끗한 사선을 못 잡도록 미니언 뒤에 숨고, 허수아비로 먼저 확인하지 않은 채 삼거리 풀숲에 face-check 들어가지 마라. 6까지 살아남고, 그녀가 over-extend 하면 Crowstorm.
- **Morgana:** Black Shield가 **Q** fear와 ADC에 들어가는 R의 첫 광역 틱을 무효화한다. 항상 Morgana 대신 ADC를 노려 이니시; commit 전에 풀숲 안으로 페이크 한 발을 내디뎌 Morgana가 미리 실드를 쓰게 강제하라.
- **Leona:** 거울 이니시에이트 매치업. 단, Leona는 즉시 시전 CC와 Aftershock으로 6레벨 전 우위를 쥔다. 그녀가 **E**를 쓴 뒤에만 trade하고, Leona 상대로 먼저 들어가지 마라 — 그녀가 너의 R 채널을 끊는다.
- **Janna:** 너의 이니시를 강하게 카운터한다. 착지 순간 Janna **R** 이 너를 캐리에서 떼어내 궁 전체가 무용지물이 된다. 그녀가 다른 한타에 R을 썼거나 로밍 중일 때까지 Crowstorm을 아껴라.
- **Caitlyn / Senna ADC 짝:** 꿈의 라인. 기동력 부족 — 6에 도달하면 삼거리 풀숲에서 시전한 Crowstorm이 매번 끝낸다. ADC에게 5분에 웨이브를 크래시시켜 둘이 동시에 6에 도달하도록 부탁하라.

## 파워 스파이크 및 승리 조건

- **2레벨 (E + W 보유):** 첫 trade 창. 웨이브를 통과하는 **E**로 적 ADC의 체력을 깎고, 상대가 너 쪽으로 푸시하면 타워 아래에서 **W**로 sustain.
- **6레벨 (첫 Crowstorm):** 너의 유일한 진짜 라인전 스파이크. Stealth Ward (모든 챔피언이 시작 시 받는 흰색 무료 트링켓 와드)를 30초 전 미리 삼거리 풀숲 (봇 강과 봇 라인 사이의 삼각형 풀숲) 안에 박고, 안에 자리 잡은 뒤 적 ADC 위로 점멸. 깔끔한 R + E + ADC 후속이면 확정 킬.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate 완성 (~ 14-16분):** 슬로우 발동 피해가 폭발한다. Drake 한타를 위해 맵을 가로지르는 측면 진입을 노려라 — Mandate 발동에서 ADC와 공유하는 골드가 봇 사이드 전체를 가속한다.
- **11레벨 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ 22분):** R 두 번째 포인트로 쿨이 줄고 stasis로 이니시에이트 후 살아남는다. 안개 속 셋업으로 Drake나 Baron에서 한타를 강제로 열어라.

## 흔한 실수

- **ADC 후속 없이 이니시에이트.** 솔로 Crowstorm은 적에게 표식만 묻히고, ADC가 귀환 중이면 아무도 죽지 않는다. R을 누르기 전에 미니맵과 ADC 마나를 확인하라; 궁도 마나도 없다면 더 좋은 창을 위해 이니시를 보류.
- **1~3레벨에 웨이브 앞에 서기.** 6레벨 전엔 보호막도 탈출기도 없다. ADC와 미니언 라인 뒤에 서서 ADC가 막타를 치게 두고, 너는 풀숲에 숨어 삼거리 풀숲의 허수아비 fear로 trade 셋업을 기다려라.
- **라인 풀숲에 허수아비 낭비.** 허수아비는 적이 *치우는 데 비용을 들이지 않는* 시야를 줄 때 가장 가치 있다. 이니시 셋업용으로 삼거리 풀숲이나 픽셀 풀숲에 두고, 봇 라인의 뻔한 풀숲 — 적 서포터의 첫 sweep에 지워지는 곳 — 엔 두지 마라.
- **소비되지 않은 Black Shield 상대로 이니시 (Morgana).** Black Shield가 켜진 Morgana 상대로는 6레벨 파워 스파이크가 그대로 낭비된 궁이 된다. 항상 Morgana 대신 ADC를 노리고, commit 2초 전에 풀숲 walk-in을 페이크해 그녀가 미리 실드를 쓰게 강제하라.

## 고급 팁

**Crowstorm**의 1.5초 채널은 너를 이동시키거나 기절시키는 것이라면 무엇이든 끊을 수 있다. 그러나 채널 자체는 풀숲의 stealth를 깨지 않는다 — 즉, 삼거리 풀숲 안에 있는 채로 **R**을 누를 수 있고, 적은 점멸이 착지하기 직전 한순간만 채널 바를 본다. 일반에서 연습하라: 적 ADC가 CS를 위해 over-extend 하길 기다렸다가 삼거리 풀숲 안에서 R을 누르고 그의 얼굴 위로 점멸. 그들이 받는 유일한 경고는 오디오 신호 (Fiddle의 상징적인 웃음소리)이고, 반응할 때쯤이면 광역 피해가 이미 틱하고 있다.
