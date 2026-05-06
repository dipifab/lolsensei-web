---
title: "Fiddlesticks Jungle 빌드 & 가이드 — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "ko"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends Patch 16.9 Fiddlesticks 정글 가이드: AP 빌드, Crowstorm 이니시, 핵심 매치업, 파워 스파이크, 흔한 실수, 그리고 마무리 팁까지."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "트링켓 슬롯이 효이지 충전으로 바뀐다. 가짜 허수아비를 깔아 시야를 만들고, 본 적은 짧게 fear에 걸리며 효이지가 폭발한다."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "단일 적을 지정한다. unseen 상태에서 스펠로 피해를 줘도 자동 Terrify가 발동된다. 1-2.5초 동안 너에게서 도망간다."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "근처 적의 HP를 흡수하는 채널링(자가 회복). 끝날 때 추가 처형 피해. 정글 클리어와 sustain의 주력 스킬이다."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "넓은 부메랑 낫: 맞은 적 전원에게 슬로우, 중앙 라인에 있는 적은 침묵. 갔다 오며 두 번 타격."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5초 채널링 후 지정 위치로 점멸, Fiddle 주변에 5초 동안 초당 광역 피해. 안개나 벽 뒤에서 시전하는 게 정석."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "R 채널링을 끊는 단일 대상 마법 CC 상대 (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "적 2명 이상이 마법 저항 아이템을 갈 때 교체 (대략 200+ MR 기준)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Aatrox, Soraka, Vladimir, Dr. Mundo) — Grievous Wounds 적용"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "추격이나 안개에서 Crowstorm 사거리 진입에 추가 이동속도가 필요할 때"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "안개 너머에서 오브젝트에 모인 2명 이상의 적에게 Crowstorm을 꽂는다. Bountiful Harvest로 잔여 적을 정리하고 Reap의 침묵이 역이니시를 차단한다."
  weakness: "1.5초 R 채널링은 단일 대상 하드 CC, 대시, Cleanse/QSS로 끊린다. 안개 기습이 없으면 이니시가 예고되어 상대 팀이 카이팅으로 빼낸다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest는 Crowstorm 광역 한타에서 빠르게 스택이 쌓인다. Sudden Impact는 R 점멸에 발동되어 추가 마법 관통을 준다. Treasure Hunter는 Liandry's를 가속한다. Ultimate Hunter는 Crowstorm 쿨다운을 줄여 오브젝트 사이에서 궁을 연달아 사용 가능하게 만든다."
    secondary_rationale: "보조 Sorcery: Manaflow Band가 W 난사로 인한 초반 정글 마나 부족을 해결하고, Gathering Storm은 후반 파워 스파이크와 Rabadon's Deathcap 시너지를 가져간다."
    secondary_alternative: "단일 대상 하드 CC 이니시 상대 (Lissandra, Malzahar, Veigar)에는 Sorcery를 Resolve로 바꿔 Bone Plating(첫 피격 후 5초 피해 감소)과 Revitalize(Bountiful Harvest 회복량 +5%)를 든다."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "측면 진입 도구가 없는 파밍형 정글러"
      reason: "파밍에 따라 선형으로 성장하지만 1-3레벨 인베이드를 응징할 수 없다. 6레벨이 되면 안개에서 나오는 Crowstorm이 그들의 정면 이니시를 이긴다 — 시전 전 도주 수단이 없기 때문이다."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "뭉쳐 다니는 부동 포격형 팀"
      reason: "도주기 없는 후방 메이지는 측면 Crowstorm 한 방에 증발한다. 채널링이 틱으로 들어가기 전에 광역에서 빠져나갈 대시가 없기 때문이다."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "대시가 없는 컨트롤 메이지"
      reason: "R 점멸이 그들의 zone control을 넘어서 들어간다 — setup CC를 깔기 전에. 안개에서 등장하면 빠져나갈 도구가 없다."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "추적 압박형 초반 인베이드 정글러"
      reason: "2-3레벨 정글을 위협해서 너를 수동적으로 만든다. Fiddle은 6레벨 전 도주기가 없다 — 인베이드 당하면 못 도망치고, 효이지 시야 세팅 없이는 클리어가 느리다."
    - examples: ["yasuo", "samira"]
      archetype: "Wind Wall / 투사체 차단형 캐리"
      reason: "Wind Wall이 단일 투사체 Q와 Reap의 대부분을 막는다. 최악의 순간에 이니시 시전을 무효화시켜, 후속타 없이 Crowstorm만 채널링하게 만든다."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "지정형 하드 CC 메이지"
      reason: "Crowstorm 1.5초 채널링을 스킬 없이 끊는다 — Lissandra R, Malzahar R, Veigar E 모두 너의 이니시를 궁 낭비와 즉사로 바꿔버린다."
---

## 개요

Fiddlesticks는 매복 정글러로, 키트 전체가 단 하나의 동작을 중심으로 짜여 있다 — 안개 너머에서 **Crowstorm (R)** 으로 한타에 점멸해 들어가, 상대팀이 아직 모여 있을 때 광역 burst를 박는 것이다. 이 창 밖에서는 느리고 기동력 없는 메이지이고, 듀얼이 약하며 채널링이 긴 궁을 가지고 있어 — 이기는 게임과 지는 게임의 차이는 거의 전부 *시야 세팅* 과 *이니시 타이밍* (언제 어디서 R을 누르는가)에 달려 있다.

게임 플랜은 이렇다. **Bountiful Harvest (W)** 로 정글을 빠르게 돌고, 강과 적 정글 주변에 효이지를 깔아 시야(와 그것을 본 적에게 짧은 fear)를 확보한 뒤, 다음 오브젝트(Drake 또는 Baron) 근처의 숨은 측면 진입 자리를 노린다. 적 2명 이상이 오브젝트 위에 모이면 **R**로 점멸 진입, **E**로 슬로우 + 침묵을 걸고, 도망가는 적을 **W**와 **Q**로 마무리한다. 기습이 없으면 키트 전체가 미달이다 — Fiddle은 이분법적이다. 세팅 ace 아니면 궁 낭비.

## 추천 빌드

**시작 아이템:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (몬스터 대상 Smite에 피해 보너스를 주고 펫 퀘스트를 시작하는 근거리 정글 시작템) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**코어 아이템 (구매 순서):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Emberknife 퀘스트 업그레이드 (정글 캠프에서 경험치를 충분히 쌓으면 3-4분쯤 자동 진화). AP(Ability Power, 마법 피해를 키우는 스탯) 폭딜용 컴패니언이며, 스펠 직후 평타에 발동하는("proc") 마법 피해 효과가 Liandry's burn과 맞물린다.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 완성 아이템. 적의 최대 체력 비례 피해(타겟의 최대 HP에 비례한 추가 피해)인 burn이 Crowstorm 광역 틱마다 탱커 위에 누적되어, 궁을 팀 와이프 도구로 만든다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. 저렴하고 즉시 효과가 있으며, 중반 전 모든 AP 챔프의 기본값.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Crowstorm 광역 틱이 끝나는 순간 정지장에 들어가 이니시 직후 들어오는 집중 견제에서 살아남는다. 상대 팀에 다이버나 암살자가 있다면 필수.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 배수기 (+35% 보너스 AP). AP 슬롯 중 가장 높으며, Crowstorm으로 squishy를 한 방에 보낸다.

**상황별 아이템:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — R 채널링을 끊는 단일 대상 마법 CC 상대 (Lissandra R, Veigar E, Twisted Fate stun). 방패가 궁을 끊는 스킬 하나를 차단한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적 2명 이상이 마법 저항 아이템을 갈 때.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Aatrox, Soraka, Vladimir, Dr. Mundo). Grievous Wounds 적용 (적 회복량 40% 감소).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 추격이나 안개에서 R 사거리 진입에 추가 이동속도가 필요할 때.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 적 2명 이상이 하드 CC를 가졌고 Banshee's만으로 부족하다면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 마스터 순서:** **W** 선마(정글 클리어와 sustain), **E** 후마(한타 슬로우 + 침묵), **Q**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Domination**에 **Dark Harvest**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. 보조는 **Sorcery**의 **Manaflow Band**와 **Gathering Storm**. 단일 대상 하드 CC 이니시 상대 (Lissandra, Malzahar, Veigar)에는 Sorcery를 **Resolve**로 바꿔 **Bone Plating**과 **Revitalize**를 든다.

## 주요 매치업

- **Lee Sin / Elise:** 초반 인베이드 정글러. 1레벨에 자기 버프 사이드를 다투지 마라; 맵 반대편으로 가서 leash(라이너가 몇 초 동안 캠프를 같이 때려주어 너의 피해 부담을 줄여주는 것)와 함께 반대 버프부터 시작한 뒤, 강의 Scuttle Crab으로 동선을 잡는다. 강에 효이지를 깔아 갱을 spotting하고, 3분 안에 자기 정글 입구를 와드한다.
- **Karthus:** 스케일 vs 스케일 레이스. 클리어와 후반 모두 너를 앞선다. 6레벨 갱을 강제하거나 시야로 적 정글에 인베이드해야 하며, 11레벨까지 그를 놔두면 글로벌 궁이 너의 단일 오브젝트 승리를 압도한다.
- **Yasuo bot 또는 mid:** Wind Wall이 **Q** 투사체와 **E**의 중앙 침묵 라인을 막는다. 측면 각도에서 Crowstorm으로 이니시해 그가 팀을 벽으로 가리지 못하게 하라; 뻔하지 않은 라인 수풀에서 측면 진입한다.
- **Zac:** 거울 이니시 탱커, E 갭 클로저 보유. 그의 W 폭발 타이밍에 너의 **E** 침묵을 채널링 도중 박으면 무력화된다; 동률 한타에서는 **R** + 침묵을 먼저 박는 팀이 이긴다.
- **Master Yi:** **Q** 대시와 궁 Highlander로 너의 **E** 침묵을 CC-immune으로 무시한다. **Q**를 아껴 Highlander 창 밖에서 그를 fear로 빼라; fear가 없으면 후반 정리력에 너의 이니시가 1대3으로 망한다.

## 파워 스파이크 및 승리 조건

- **6레벨 (첫 Crowstorm):** 첫 갱 창. 30초 전에 강 안개에 시야를 깔고 들어간다. 타워 아래 적 2명에게 깔끔한 R + E면 더블킬 확정.
- **9레벨 (W 마스터):** 정글 클리어가 정점에 이르고 한타 sustain이 폭증한다. 여기서 Drake 한타를 강제하라.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~16-18분):** 이제 Crowstorm 광역이 탱커를 뚫는다. Baron/Drake 한타를 강제하고 맵 반대편에서의 측면 진입을 노린다.
- **16레벨 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~28분):** Crowstorm이 마법 저항 아이템을 한 칸도 안 산 squishy를 한 방에 보낸다. 팀과 모여 다음 메이저 오브젝트를 강제하라.

## 흔한 실수

- **시야 세팅 없이 R 사용.** 채널링 바가 보이는 가시화된 Fiddle은 적 팀 입장에서 공짜 회피다. 항상 수풀, 벽 뒤, 또는 시야가 없는 정글 캠프 안에서 시전하라. 채널링 바가 보이면 1.5초 동안 빠지면 그만이고, 너는 마나 80과 유일한 이니시 도구를 잃는다.
- **팀이 멀리 있을 때 단독 이니시.** Crowstorm은 팀 이니시 도구지 암살자 픽이 아니다. 팀이 화면 두 개 이상 떨어져 있다면 궁이 적 1명을 맞히고 너는 후속타에 죽는다. R을 누르기 전 팀의 위치를 확인하라.
- **효이지 배치 무시.** 효이지는 시야와 짧은 fear를 준다. 사용하지 않은 트링켓 충전은 적이 *지우는 비용을 내지 않는* 공짜 시야다. 모든 오브젝트 전에 강에 하나씩 깔아라.
- **정글 캠프 라스트힛에 Q 사용.** Q는 한타 fear를 위한 유일한 단일 대상 setup이다. 한타용으로 아껴라 — W와 E만으로 캠프 클리어는 충분하다.

## 고급 팁

**Crowstorm**의 1.5초 채널링은 너를 밀어내거나 기절시키는 모든 것에 끊긴다. 하지만 적이 너가 숨어 있는 수풀로 발을 디디는 그 순간 **R**을 누르면, 짧은 시야 단절 때문에 점멸이 도착하기 전 적이 반응할 시간이 없다. 커스텀에서 타이밍을 연습하라 — 수풀에 숨어, 적이 옆으로 걸어오기를 기다렸다가, 그의 personal space 안에서 R을 누른다. 점멸이 광역 전체 시간 동안 적에게 붙어 있게 만들고, 안개에서 얼굴이 마주치는 Fiddle이 주는 패닉은 게임 내 어떤 이니시보다 더 많은 Flash를 적에게 강요한다.
