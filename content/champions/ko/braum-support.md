---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "ko"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Braum 서포터 완벽 공략. 시작 아이템, 탱커-피일 코어 빌드, Resolve 룬 선택, 주요 매치업 대처법, 파워 스파이크 활용, 라인전에서 자주 하는 실수와 해결책, 그리고 flash-R 같은 마무리용 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Braum의 평타는 Concussive Blows 스택을 쌓는다. 첫 스택이 들어간 뒤에는 아군 평타도 함께 누적된다. 4스택이 되면 대상은 기절하고 마법 피해를 입는다. Q는 원거리에서 한 스택을 적용한다."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "장거리 직선 skillshot으로 슬로우와 마법 피해. Concussive Blows 스택을 원거리에서 적용하는 setup 도구로, 평타 사거리에 들어가지 않고도 4스택 기절 콤보를 시작할 수 있다."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum이 아군 챔피언이나 미니언에게 도약. 도착 시 Braum과 아군 모두 몇 초간 armor와 magic resist를 얻는다. ADC 앞으로 점프해 들어오는 피해를 body-block하는 시그니처 peel 도구."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum이 지정 방향으로 방패를 든다. 그 방향에서 날아오는 모든 projectile을 차단하고, 첫 평타는 완전 무효화하며, 이후 같은 방향의 모든 공격 피해를 감소시킨다."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum이 땅을 내리쳐 인접한 적과 직선상의 적을 공중으로 띄운다. 직선에는 얼음 균열이 남아 가로지르는 적에게 슬로우. 쿨다운이 길며, 팀의 핵심 이니시 또는 peel 버튼."
      dd_spell_id: "BraumRWrapper"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "평타 위주 봇 라인 상대 (Caitlyn, Draven, Tristana) — 초반 견제가 후반 CC보다 더 아플 때 Mercury's에서 교체"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "ADC가 메인 캐리이고 항상 옆에 붙어 있는 조합 상대 (Aphelios, Jinx) — R 슬로우가 bonded ally 옆에서 발동"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "AP 폭딜 조합 상대 (Syndra mid + Brand support 같은 더블 메이지) — 마법 보호막 패시브가 궁 하나를 막아준다"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "우선순위 캐리에게 Q를 맞히고, walk-up해 평타로 4스택 기절을 터뜨린 뒤, 한타 내내 W 점프와 E 방패 벽으로 ADC를 peel한다. 적 팀이 모이면 R로 띄워 한타를 연다."
  weakness: "느리고 기동력이 없다 (dash, blink 모두 없음). 원거리 hard CC 한 방에 ADC와 끊긴다. Q가 skillshot이라 빗나가면 라인전 압박이 0이 되고, R을 헛쓰면 다음 한타에서 빠지게 된다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "dash 없는 immobile ADC"
      reason: "Q는 사거리 1000으로 원거리에서 Concussive Blows 스택을 적용한다. 도주기 없는 ADC는 Q + 아군 ADC 평타 + 본인 평타로 4스택 기절을 풀 수 있고, 이 체인을 끊을 방법이 없다."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "강한 CC가 없는 squishy enchanter"
      reason: "Braum의 walk-up을 막을 수단이 없다. Q가 닿는 순간 자기 ADC를 살릴 peel이 없고, 살리려고 던지는 healing-cancel skillshot은 E가 전부 막아낸다."
    - examples: ["draven", "lucian"]
      archetype: "트레이드를 위해 앞으로 나오는 공격적인 ADC"
      reason: "도끼나 dash-AA를 위해 Q 사거리 안으로 들어와야 하는 챔프들. 전진 한 걸음마다 Concussive Blows 스택을 공짜로 받게 되며, 물러서서 라인 prio를 잃거나 4스택 기절을 그대로 맞는다."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "지정형 끌기/기절을 가진 hook 서포터"
      reason: "훅이 적중하면 Braum이 ADC W 사거리 밖으로 끌려간다. 후방에서 Braum이 갈리는 동안 적 ADC가 무방비 상태의 캐리를 그대로 지운다."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Q 사거리 밖에서 견제하는 장거리 mage 서포터"
      reason: "1100+ 사거리에서 일방적으로 체력을 깎는다. Braum은 Q를 넘어선 답이 없고, E는 이미 가까이 있어야 의미가 있어 소모전으로 라인을 내준다."
    - examples: ["ashe", "varus"]
      archetype: "내장 슬로우로 self-peel이 가능한 ADC"
      reason: "평타 슬로우가 Braum을 거리 밖에 묶어둔다. body-block을 위한 W 사거리에 닿지 못해 peel 키트가 반쯤 무력화되고, 팀 frontline이 더 빨리 무너진다."
---

## 개요

Braum은 **warden support** (적팀에 먼저 들이대는 것이 아니라 자기 ADC를 보호하는 것이 일인 탱커형 서포터) — 자기 캐리에서 적을 떨어뜨리는 peel용으로 만들어진 챔프이지 적 캐리에 다이브하는 챔프가 아니다. 키트는 단 하나의 위협, **Concussive Blows**를 중심으로 돈다. 패시브는 Braum이나 아군이 평타 4번을 맞힌 대상을 기절시킨다. 핵심 트릭: **Winter's Bite (Q)**가 사거리 1000에서 한 스택을 적용하므로, Braum이 먼저 Q를 박고 walk-up한 뒤, 자기 평타 한 대 + ADC 평타 한 대로 적 ADC에게 기절을 터뜨린다. **Stand Behind Me (W)**는 어떤 아군에게든 도약해 도착 시 둘 다 armor와 magic resist를 얻는 스킬로, 그를 유일하게 만드는 **peel** (당신의 캐리를 죽이려는 적으로부터 보호하는 것) 도구다. **Unbreakable (E)**는 지정 방향에서 날아오는 모든 projectile을 **body-block**하는 방향성 방패다 (ADC 평타, Caitlyn R, Ezreal R, Ashe R). **Glacial Fissure (R)**는 광역 직선 띄우기로, 쿨이 길고, 이니시 또는 적 **diver** (적 backline에 깊이 뛰어드는 챔피언)가 캐리에 붙었을 때 panic peel용으로 쓴다.

게임 플랜: 라인전에서는 적 ADC가 last-hit하러 다가올 때마다 Q로 **poke** (원거리에서의 chip 피해)를 누르고, 이어 walk-up 평타로 기절을 터뜨린다 — 그 1초 창에서 ADC가 풀딜을 박는다. 6레벨 이후에는 R을 들고 **roam** (봇을 떠나 미드나 정글을 도와주는 행위)을 시작해 픽각을 만든다. 당신의 **lead** (초반 우위)는 솔로킬이 아니라 Q 스택 기절을 오브젝트로 환산하는 데서 온다. 후반에는 ADC보다 한 발 앞에 서 있다가, 그가 engage당하는 순간 W로 점프해 합류하고, 들어오는 모든 **skillshot** (조준이 필요한 스킬) 라인에 E를 띄운다 — Braum은 채널링 중인 Caitlyn 궁을 거부할 수 있는 유일한 서포터다.

## 추천 빌드

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (서포터 통합 시작 아이템) + 체력 포션 2개. 라인 미니언을 막타치지 마라. 골드는 ADC에게 양보하고, World Atlas는 자체 퀘스트 진행으로 따로 골드를 채워준다.

**Core items (순서대로):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 시작 아이템. 퀘스트 진행에 따라 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass**, ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**를 거쳐 자동으로 진화하며, 마지막에 선택한 후반 업그레이드로 마무리된다.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 마법 저항과 **tenacity** (당신에게 걸린 군중 제어 지속 시간을 줄여주는 스탯). peel 탱커의 기본 신발: 기절이 짧아지면 ADC가 죽기 전에 W 사거리에 도착할 수 있다.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — 서포터 아이템이 진화하는 peel 특화 후반 업그레이드. 챔피언에 CC를 걸 때마다 (Q 슬로우, 패시브 기절, R 띄우기) 주변 적에게 추가 슬로우를 걸고, 자신과 가까운 아군 한 명에게 이동 속도 버스트를 준다 — 저체력 적을 추격하거나 캐리 쪽으로 kite back할 때 정확히 필요한 효과.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — **ADC** (Attack Damage Carry — 평타로 딜을 넣는 봇 라인 동료, 팀의 후반 메인 딜러)와 본드된다. 그가 받는 피해 일부가 당신에게 전이되고, 대신 그를 회복시킨다. 항상 가장 살려야 할 캐리를 골라 묶는다.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 주변 모든 아군에게 몇 초간 보호막을 거는 액티브. 적 팀이 engage commit하는 순간 눌러서 첫 **burst** (한타 첫 1-2초에 쏟아지는 고폭딜)를 흡수시킨다.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor를 주고 평타 피해를 감소시키는 신발. 적 봇 라인이 평타 위주이고 (Caitlyn, Draven, Tristana) **harass** (체력을 갉아 먹는 견제)가 후반 CC보다 더 아플 때 Mercury's에서 갈아탄다.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — ADC와 본드한다. 적에게 CC를 걸면 (Q 슬로우, R 띄우기) bonded ally의 다음 평타가 광역 마법 추가 피해를 입힌다 — 캐리가 항상 옆에 붙는 조합 (Aphelios, Jinx)에서 프론트라인에 Q를 박아 첫 평타를 세팅하기에 완벽하다.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 전투를 벗어나면 재생되는 마법 보호막 패시브. AP 폭딜 조합 (Syndra mid + Brand support 같은 더블 메이지) 상대로 산다 — 보호막이 궁 하나를 통째로 받아내 먼저 죽지 않고 계속 peel할 수 있게 해준다.

**Boots:** 기본은 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**의 tenacity 효과 — 2초짜리 Morgana 속박이 1.2초로 줄어, ADC 쪽으로 W를 돌릴 창이 열린다. 적 봇 라인이 평타 위주이고 후반 CC보다 더 아프게 압박할 때만 완성 전 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 전환한다.

**Skill order:** **Q** (Winter's Bite)를 먼저 마스터한다 — 유일한 원거리 딜이자 스택 도구이며, 5랭크에서 쿨다운이 8초에서 6초로 줄어든다 (poke 늘고 라인 압박 증가). 다음은 **E** (Unbreakable) — 방패 지속 시간이 늘어 한타 peel이 더 깔끔해진다. **W**는 마지막에 마스터한다 (점프 쿨은 줄지만 초반 랭크의 저항 수치가 더 중요하고, W 대상이 부족할 일은 거의 없다). **R**은 6, 11, 16레벨에 찍는다.

**Runes:** 주력 **Resolve** (방어 트리 — 단단함) 구성: **Aftershock** (CC를 걸면 몇 초간 armor와 MR 무료, 패시브 기절과 R 모두에서 발동), **Font of Life** (당신의 CC가 대상에 표식을 남기고 아군이 때리면 회복), 후반 스케일링 라인 상대로는 **Conditioning**, 초반 폭딜 라인 상대로는 **Bone Plating**, 그리고 **Unflinching** (소환사 주문 사용 시 추가 **tenacity**, 즉 CC 시간을 줄여주는 스탯). 보조는 **Inspiration** (유틸리티 트리)에서 **Hextech Flashtraption** (긴 쿨에 묶이는 단거리 백업 Flash — 깜짝 R 각도용)과 **Cosmic Insight** (소환사 주문과 Locket 액티브 쿨감). **Stat shards** (룬 페이지 하단의 작은 스탯 보너스 세 칸): Health / Health / Health — Braum은 순수 HP에 비례해 강해지고, 초반 단단함이 walk-up해 Q 스택을 박을 여유를 만든다.

## 주요 매치업

- **Leona:** **Engage** (그녀는 한타를 열고 싶다) 대 당신의 **peel** (그녀의 engage를 멈추고 싶다) 매치업. 그녀의 CC 사거리가 더 길다 (Zenith Blade dash-stun, Solar Flare R). 초반에는 body-block하지 말고 ADC 한 발 뒤에 서다가 Zenith Blade가 날아오는 순간 W로 빠진다. 그녀의 E가 쿨이면 10초 동안 walk-up해 그녀 쪽 ADC를 공짜로 Q-stack할 수 있다.
- **Pyke:** Skill matchup — 종이로는 우열이 없고, 더 잘 하는 쪽이 이긴다. Q로 견제당하고 **stealth** (수풀을 통과할 때 투명) 덕에 로밍에서도 밀린다. 강 부쉬에 깊은 시야를 박고, R 리셋이 의미 없는 라인전에서 싸움을 강제하며, 그의 R 훅에 E를 펴서 ADC를 끌어가는 pull을 막는다.
- **Lulu:** 당신의 **all-in** (킬 풀 commit)을 하드 카운터한다. 그녀의 polymorph는 평타 콤보 중간을 끊어버린다 — 4스택 기절을 더 이상 터뜨리지 못한다. polymorph가 살아 있을 때는 들어가지 말고, 쿨다운(1랭크 약 13초)을 트래킹해 빠진 창에만 트레이드를 강제한다.
- **Soraka:** 자체 engage가 없는 순수 **sustain enchanter** (한타 개시가 아닌 ADC 회복으로 이기는 힐링 중심 서포터). out-trade가 가능하다: 당신의 Q + walk-up을 막을 수단이 없고, 그녀의 회복은 당신 기절 피해의 절반쯤이다. 그녀의 Q가 쿨일 때마다 짧은 트레이드를 강제한다.
- **Senna:** 장거리 **poke** 매치업 (당신을 갉아 먹는 원거리 chip 피해). 그녀는 미니언 관통 Q로 타워 밑까지 HP를 깎는다. 웨이브 뒤쪽에 서서 그녀의 Q가 미니언을 통해 회복은 되더라도 당신을 맞히지 못하게 하고, 정글러가 봇 사이드일 때만 트레이드한다 — dash가 없는 Senna는 한 번의 Q-stun 체인에 죽는다.

## 파워 스파이크 및 승리 조건

- **레벨 2 (Q + W):** 첫 스파이크. **Q + walk-up 평타 + ADC 평타** 풀체인은 W가 두 번째 스킬로 들어오는 순간 풀린다. W가 반격 피해 밖으로 재포지션을 가능하게 해주기 때문이다. over-extend한 적 ADC (첫 **wave** — 들어오는 미니언 줄을 너무 많이 밀어버린 ADC)는 한 번의 스택 체인에 HP의 30%를 잃는다.
- **레벨 6 (R 해금):** Engage와 peel이 동시에 한 단계 점프. **Glacial Fissure**는 ADC가 킬로 환산하는 긴 직선 띄우기 — 또는 적 Zed가 캐리에 붙었을 때 panic peel 버튼이다. 적 팀이 예상하지 않는 각도로 Flash-R을 깔 수 있다 — 앞으로 깜박 뒤 즉시 R을 캐스트하면 깜짝 픽각이 만들어진다.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh 완성 (~ 12-14분):** 첫 한타 아이템 가동. CC 시 이동 속도 버스트로 미니언을 넘어 저체력 적을 쫓거나 흔들리는 캐리에 kite back할 수 있다. **Drake** (봇 강의 드래곤 — 처치 시 팀에게 영구 스탯 버프) 또는 **Voidgrubs** (탑 강의 작은 몬스터 — 처치한 팀이 적 구조물에 추가 피해를 얻는다)를 위해 팀과 모인다.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 후반 (~ 22-26분):** Locket과 풀 E 가동률로 팀은 wombo combo (연쇄 한타 engage)도 살아남는다. 당신의 일은 적 캐리의 딜 콘을 E로 막아내는 것이고, 그 사이 팀은 적 캐리를 먼저 지운다.

## 흔한 실수

- **walk-up 없이 Q만 던지기.** Q-슬로우 단독으로는 킬 위협이 안 된다 — 적은 그냥 사거리 밖으로 걸어 나가고 당신은 8초 쿨다운만 날린다. Q는 **setup** (킬을 준비하는 동작이지 킬 그 자체가 아니다); 닿는 순간 walk-up해 평타를 박는다. 평타가 없으면 Concussive Blows 스택은 몇 초 뒤에 떨어지고 라인 리셋만 무의미하게 일어난다.
- **이미 죽은 ADC에 W 점프.** W는 1랭크에서 12초 쿨에 점프 사거리 650이다. 캐리가 HP 20일 때 점프하면 저항 보너스가 너무 늦게 도착한다. 규칙: 적의 commit이 보이는 **바로 그 순간** ADC에 W를 쓴다 (Leona Q 발사, Blitz 훅이 공중에 있는 순간, Zed 그림자가 들어오는 순간), 0이 된 다음이 아니다.
- **공짜로 앞에 서 있기.** Braum의 E는 당신이 바라보는 방향만 보호한다. ADC 뒤에 있으면 아무 것도 막지 못한다. 기본 위치는 ADC 한 발 앞, 그리고 적 팀이 딜할 방향으로 한 발 — Caitlyn을 보고 서지 자기 정글러를 보고 서지 마라.
- **단일 대상에 R 낭비.** **Glacial Fissure**는 100-130초 쿨다운의 광역 직선 띄우기다. 어차피 거의 죽은 사이드 라이너 한 명을 잡으려고 궁을 쓰는 것은 공짜 **throw** (우위를 그냥 넘겨주는 행위) — 다음 한타에서 빠지게 된다. R은 적 2명 이상이 라인에 들어오거나, 이 panic peel 없이는 캐리가 죽을 때만 쓴다.
- **패시브 스택 리셋을 잊기.** Concussive Blows 스택은 새 스택이 들어오지 않으면 몇 초 후에 **떨어지고**, 한 번 기절한 대상은 같은 대상에게 몇 초간 새 스택을 받지 못한다. 막 기절시킨 ADC에게 평타를 난사해도 의미가 없다 — 다음 우선순위 대상으로 옮기거나, 빠져서 W 저항 타이머를 리셋한다.

## 고급 팁

**flash-R** 각도. Braum의 R은 그의 앞쪽 1250 사거리 직선이며, 캐스트 선딜이 짧아 Flash로 앞으로 깜박 → 즉시 R을 누르면 라인이 **새로** 깜박한 위치에서 생성된다 — 1500 사거리에서 안전하다고 믿던 후방 캐리를 잡을 수 있다. Flash와 R을 한 손이 닿는 위치에 바인딩하고 두 키가 1/5초 안에 함께 나갈 때까지 **Practice Tool**에서 연습한다. 팀이 이미 모인 한타용으로 아껴라: flash-R로 적 ADC + 서포터를 함께 잡으면 깔끔한 ace로 이어지지만, 외로운 미드 한 명을 노린 같은 R은 사소한 교전에 긴 쿨다운을 버린 셈이 된다.
