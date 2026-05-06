---
title: "Leona Support Build & Guide — Patch 16.9"
slug: "leona-support"
language: "ko"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Leona 서포터 공략. 시작 아이템과 탱커-engage 코어 빌드, 주요 매치업 대응법, 파워 스파이크 활용, 자주 하는 실수 정리, 그리고 마지막에 R-Flash-E 고급 콤보 팁까지 한 페이지에 깔끔하게 담은 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Leona의 스킬은 적중한 적에게 1.5초 동안 Sunlight 디버프를 남긴다. 그 표적에 다음으로 피해를 입히는 아군이 표식을 소모해 추가 마법 피해를 준다. 모든 engage에 공짜 추가 데미지."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "Leona의 다음 평타가 짧은 기절과 추가 마법 피해를 가한다. Auto-targeted (조준 불필요)이지만 melee range — 적에게 붙어 있어야 한다. E나 R 다음 두 번째 확정 crowd control."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "몇 초 동안 Damage reduction과 추가 방어력·마법저항. 종료 시 AOE (광역, 주변 모든 적 타격) 피해; 적중하면 저항이 더 오래 유지. engage 들어가기 전에 켠다."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona가 직선으로 검을 투사한다. 마지막에 맞은 챔피언이 잠깐 root (속박)되고 Leona가 그 위로 dash. Skillshot (조준해서 직선으로 날리는 스킬, 회피 가능). 메인 engage이자 E-Q 콤보의 시작."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "긴 사거리의 지연 AOE. 중심부의 적은 기절, 외곽은 둔화. 시전 딜레이가 길다. 거리에서 fight를 열거나, 도망가는 표적을 잡거나, E 사거리 밖에서 한타를 셋업할 때 사용."
      dd_spell_id: "LeonaSolarFlare"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "auto-attack 비중 높은 봇 라인 상대 (Caitlyn, Draven, Tristana)에 Mercury's 대신 — harass가 CC보다 아플 때"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "확실하게 ult를 얹을 수 있는 melee carry (Yasuo, Yone, Master Yi)와 함께 — R이 그의 평타에 추가 마법 피해를 부여"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "AP 폭딜 조합 상대 (Syndra mid + Brand support 같은 더블 메이지) — 전투 밖에서 재생되는 패시브 마법 보호막"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "fog (와드 없는 부쉬) 각도에서 E 적중, 적 ADC 위로 dash, Q 기절 연계, Sunlight 표식 묻은 채 AA. 아군 ADC가 proc에서 두 배 데미지를 박고 적 서폿이 반응하기 전에 캐리가 죽는다."
  weakness: "E는 평지에서 sidestep으로 쉽게 피하는 느린 skillshot. 원거리 poke는 0 — 적 봇이 E 사거리 밖에 머무르면 라인을 포기하고 로밍해야 한다. 초반 마나가 부족하다."
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
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "자체 hard CC가 없는 squishy enchanter"
      reason: "E dash를 끊을 도구가 없다. E가 ADC에게 적중하는 순간, 서폿이 보호막을 걸거나 peel하기도 전에 Q 기절에서 죽는다. Yuumi는 떨어져서 도망치는 시간조차 못 만든다."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "dash 없는 immobile ADC"
      reason: "E는 875 사거리에 마지막에 맞은 챔피언으로 dash한다. 점멸 없는 ADC는 last-hit하러 한 발 나오는 순간마다 풀 E-Q 콤보를 그대로 받는다. commit하는 순간부터 못 도망간다."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "탈출기 없는 정적인 mage support"
      reason: "포킹 자세가 곧 자세 약점이다. Flash + E로 끌어 붙이고, W의 저항이 그쪽 카운터 폭딜을 흡수한다. 긴 skillshot을 쏘려면 가만히 있어야 하는데, 그게 바로 E가 깨끗하게 박히는 타이밍이다."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "hard CC 차단기와 disengage enchanter"
      reason: "Morgana의 Black Shield는 E의 root를 통째로 막는다 — 헛 점멸이 된다. Milio R은 먼 거리에서 기절 연계를 풀어버리고, Lulu의 변이는 dash 시전 중간을 끊는다. 단 한 번의 commit이 무료로 카운터된다."
    - examples: ["nami", "lux", "zyra"]
      archetype: "지속력이나 root를 가진 장거리 포커"
      reason: "800 이상 사거리에서 체력만 깎아낸다. 이쪽은 답이 없다. Lux Q가 engage 도중 묶고, Nami 거품이 dash를 끊는다. 사거리에 들어가지도 못한 채 poke만 맞는다."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "포지션을 망가뜨리는 hook 서포터"
      reason: "그쪽 hook이 이쪽 E보다 먼저 닿는다 (Thresh Q 약 1100 vs E 875). 끌려가서 적진에서 혼자 집중 포화당하고, 따라올 engage 도구가 없는 ADC가 노출된다."
---

## 개요

Leona는 **vanguard support** (아군을 치료하는 게 아니라 fight를 여는 게 일인 탱커형 서포터)다. 적 캐리에게 달려가 crowd control 사슬에 묶고, 팀이 마무리하게 한다. 한 표적에 두 단계의 crowd control이 쌓인다. **Zenith Blade (E)** 는 마지막에 맞은 적을 root하는 장거리 skillshot dash, **Shield of Daybreak (Q)** 는 다음 평타 기절, 패시브 **Sunlight** 는 피해를 입힌 모든 적에게 표식을 남겨 다음에 때린 아군이 추가 마법 피해를 준다. **Eclipse (W)** 는 *engage 들어가기 전에* 켜는 방어층이다. damage reduction과 함께 방어력·마법저항이 붙고, 종료 시 적중하면 더 오래 유지된다. **Solar Flare (R)** 는 E보다 먼 사거리에서 쓰는 지연 AOE 기절 — fog of war 안에서 fight를 열거나 도망가는 적을 잡을 때 쓴다.

게임 플랜: 라인전에서는 적 ADC가 last-hit하러 다가올 때까지 부쉬 가장자리에 머무른다. 그 순간 fog (와드 없는 부쉬)에서 E를 쏘면 sidestep이 안 되고, Q를 잇고, ADC가 마무리한다. 미드 게임에는 R로 라인을 가로질러 픽을 만들기 위해 **로밍** (봇 라인을 떠나 미드나 정글을 돕는 것)을 다닌다. 후반에는 적 ADC나 미드 메이지 같은 우선 표적 위에서 fight를 열고, **peel** (자기 캐리 보호)을 할 만큼 오래 살아남는다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (서포터 통합 시작템)와 Health Potion 2개. 미니언 last-hit 금지. 골드는 ADC에게 양보한다. World Atlas는 quest progression으로 따로 골드를 벌어준다.

**코어 아이템 (순서대로):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 시작템. quest progress가 쌓이면 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass**, ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** 를 거쳐 선택한 endgame 업그레이드까지 자동으로 진화한다.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 마법저항과 **tenacity** (받은 crowd control 지속시간을 줄여주는 능력치). 짧아진 기절 덕분에 적 서포터가 끊으려 해도 Q를 살릴 수 있다.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 방어력, 마법저항, 그리고 주변 모든 아군에게 보호막을 거는 액티브. E를 박는 순간 발동해 첫 **burst** (처음 1-2초의 폭딜)를 팀이 흡수하게 한다.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — **ADC** (Attack Damage Carry — 평타로 딜하는 봇 라이너)와 연결. ADC가 받는 피해의 일부를 대신 받고, 그를 다시 회복시킨다.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — engage 특화 endgame 업그레이드. **Spellblade** 패시브: 스킬 시전 후 다음 평타가 추가 피해를 주고 표적이 4초간 받는 피해가 증폭된다. 패턴은 "스킬 → AA → 스킬 → AA".

**상황 아이템:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 평타 피해를 줄이는 방어력 신발. 적 봇 라인이 평타 비중이 클 때 (Caitlyn, Draven, Tristana) Mercury's 대신 간다. **harass** (체력 깎기 견제 피해)가 후반 CC보다 더 아플 때.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 아군 한 명과 연결. ult 시 그 아군의 평타에 추가 마법 피해 부여. 확실하게 ult를 얹을 수 있는 melee carry (Yasuo, Yone, Master Yi) 조합에 픽한다.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — 전투 밖에서 재생되는 패시브 마법 보호막. AP 폭딜 조합 (Syndra + Brand 같은 더블 메이지) 상대로 픽 — 보호막이 ult 한 방을 통째로 흡수한다.

**신발:** 기본은 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 의 tenacity — Thresh의 1.25초 hook이 0.85초로 줄어 Q를 살릴 수 있다. AA 비중 봇 라인 상대일 때만 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 로 바꾼다.

**스킬 순서:** **E** (Zenith Blade) 선마 — 쿨다운이 짧아질수록 engage 기회가 늘고, E는 유일한 원거리 도구다. **W** 두 번째 — damage reduction 시간이 길어진다. **Q** 마지막 (rank-up 해도 기절 시간은 거의 변하지 않고 데미지만 오른다). **R** 은 6, 11, 16레벨에 배운다.

**룬:** 주력 **Resolve** (방어 룬 트리 — 생존력)에 **Aftershock** (crowd control 적용 시 무료 방어력·마법저항. 매 Q 기절과 E root에 발동), **Font of Life** (CC 표식이 박힌 대상을 아군이 때리면 회복), 후반 스케일링 라인에는 **Conditioning**, 초반 폭딜에는 **Bone Plating**, **Unflinching** (소환사 주문 사용 시 추가 **tenacity**). 보조 **Inspiration** 에 **Hextech Flashtraption** (긴 쿨에 백업 Flash)과 **Cosmic Insight** (소환사·아이템 액티브 쿨감). **Stat shards**: Adaptive Force / Adaptive Force / Health.

## 주요 매치업

- **Nautilus:** 미러 **engage** 매치업. 그쪽 Q hook이 사거리에서 우위 (~1100 vs 875). 그의 hook이 살아있을 때는 앞으로 안 간다. 피하고 follow-up이 빠진 순간 그의 ADC에게 flash-E.
- **Pyke:** 실력 매치업. Q poke가 더 강하고, **stealth** (부쉬 통과 시 은신)로 로밍 우위까지 가져간다. 강 안쪽에 시야를 깊게 박고, kill에 R이 리셋되지 않는 라인 안에서 fight를 강제한다.
- **Morgana:** 너의 **all-in** (풀 commit 킬)에 대한 하드 카운터. Black Shield가 E root를 통째로 막아 헛 점멸이 된다. 18초 쿨을 추적해서 down된 윈도우에만 fight를 강요한다.
- **Soraka:** 순수 **sustain enchanter** (서포터 본인이 fight를 여는 게 아니라 ADC를 살리며 이기는 힐링형). 그의 Flash가 down일 때마다 위로 flash-E — ADC가 반응하기 전에 콤보 한 번에 죽는다.
- **Caitlyn:** 장거리 **poke** 매치업 (원거리 체력 깎기). 그가 타워 아래에서 너의 HP를 뜯는다. 맞불 놓지 말고 라인을 포기, mid 로밍이나 Mobility Boots로 침범 — Leona는 라인전은 져도 운영으로 이긴다.

## 파워 스파이크 및 승리 조건

- **레벨 2 (E + W):** 첫 스파이크. 풀 E-Q 체인은 3레벨에 풀리지만, E + W 만으로도 강하게 **trade** (풀 commit이 아닌 짧은 데미지 교환)가 된다. 첫 **wave** (밀려오는 미니언 행렬) 너머로 over-extend한 적 ADC는 **Flash** 가 살아있는 E면 공짜 킬이다.
- **레벨 6 (R 해금):** engage 위력이 폭발한다. **Solar Flare** 로 fog of war에서 fight를 연다. 모습 노출 없이 강 부쉬 안에서 시전한다. R은 **peel** (캐리 보호)로도 쓴다 — ADC를 dive하는 적 위에 떨어뜨린다.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 완성 (~14-16분):** 첫 한타 아이템. engage가 무료 팀 보호막을 떨군다. **Drake** (하단 강의 용 오브젝트 — 처치 시 영구 능력치 버프)나 **Voidgrubs** (상단 강의 작은 몬스터 — 잡은 팀이 구조물에 추가 피해)에 모인다.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~24-30분):** Spellblade proc과 챔피언 대상 4초 데미지 증폭이 너의 회전기를 진짜 데미지로 바꾼다. E → AA → Q → AA가 **squishy** (방어가 약한 ADC나 메이지 같은 챔피언) HP의 20-25%를 본인 혼자 깎는다.

## 흔한 실수

- **트인 지형에서 E 시전.** Zenith Blade는 평지에서 sidestep으로 쉽게 피하는 느린 투사체다. 부쉬 안이나 와드 없는 각도에서 쏴라 — 적이 반응할 0.5초의 시야를 투사체가 가로질러 들어간다. 트인 지형에서는 표적이 다른 CC에 묶여 있을 때만 E를 쓴다.
- **follow-up 없이 engage.** Leona의 E는 앞으로 commit을 강제하고 후퇴가 안 된다. ADC가 귀환 중이거나 정글이 맵 반대편에 있으면 E를 아낀다. 4 대 5 단독 engage는 헌납하고 R 쿨다운만 헛되이 버린다.
- **engage 후에 W를 켠다.** Eclipse는 *시전 그 순간* 부터 damage reduction이 들어가지, 폭발 시점이 아니다. W를 먼저, *그 다음* E. E를 먼저 쓰고 뒤늦게 저항이 필요하다고 느끼면, W 보너스가 표적에 닿기 전에 끝나는 경우가 많다.
- **근거리에서 R을 반응적으로.** Solar Flare는 시전 딜레이도 길고 투사도 느리다 — melee range에서는 가만히 선 표적조차 중심 기절 영역에서 미끄러져 나간다. R은 fog of war에서 fight를 열거나 저체력 도주자를 잡을 때만 아낀다.
- **Sunlight 패시브 망각.** 적중한 모든 스킬이 표적에 1.5초 표식을 남기고, 첫 타격 아군이 추가 데미지로 소모한다. ADC가 이미 평타 사거리 안에 있도록 Q 타이밍을 맞춰라 — 체인은 "Q 기절, ADC AA, Sunlight 발동, 표적 사망"처럼 들려야 한다.

## 고급 팁

**fog-of-war R-Flash-E 콤보**. 6레벨에 적진 쪽 강 부쉬에 시야 없이 앉는다. 적 ADC가 farming 중인 자리에 **R** 시전 — 바닥의 표시는 보지만 출처는 못 본다. 그가 회피하려 움직이는 그 순간 **Flash** 앞으로, 점멸 도중에 **E** (점멸한 위치에서 dash가 연장된다), 도착하면서 **Q**. 제대로 하면 표적은 R 기절, E root, Q 기절을 연달아 받는다 — 카운터 플레이 없이 2초 안에 세 단계의 crowd control. **Practice Tool** 에서 R-Flash-E-Q가 0.5초 안에 한 호흡으로 흐를 때까지 타이밍을 연습한다.
