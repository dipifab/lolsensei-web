---
title: "Alistar Support Build & Guide — Patch 16.9"
slug: "alistar-support"
language: "ko"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Alistar 서포터 완벽 공략. 시작 아이템, 탱크 engage 코어 빌드, 주요 매치업 대처법, 파워 스파이크 타이밍, 라인전에서 자주 하는 실수, 그리고 flash-W-Q 원샷 콤보까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar가 적 챔피언을 stun하거나 밀쳐내면, 또는 주변 적(미니언, 정글 몬스터, 적 챔피언)이 죽으면 포효를 충전한다. 풀 충전 상태에서 다음 포효는 자신과 주변 아군을 회복시킨다."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "주변 지면을 내리쳐 근처의 모든 적을 1초간 knock-up. 사거리가 짧아 이미 타겟에 붙어 있어야 한다."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar가 적에게 dash해 피해를 주고 직선으로 밀어낸다. 핵심 engage 도구다. 바로 Q를 이어 W-Q 콤보(아군 쪽으로 밀친 뒤 띄우기)를 완성한다."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "5초간 주변 지면을 짓밟으며 미니언 충돌을 무시하고 피해를 준다. 챔피언에게 닿는 모든 펄스마다 스택이 쌓이고, 5스택에서 다음 평타가 챔피언을 stun시키며 추가 피해를 입힌다."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Alistar에게 걸린 모든 crowd control을 즉시 정화하고 지속시간 동안 강력한 피해 감소(물리 + 마법)를 제공한다. CC가 많은 팀을 향한 engage 직전에 켜는 용도이며, 한타가 끝난 뒤가 아니다."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
      against: "평타 의존 봇 라인전(Caitlyn, Draven, Tristana) — 초반 harass가 후반 CC보다 더 아플 때 Mercury's에서 교체"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "공속을 쌓는 carry 상대(Tristana, Kog'Maw, Master Yi) — 넓은 오라로 공속을 둔화"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "AP 폭발 조합 상대(Syndra mid + Brand support 같은 더블 메이지) — 비전투 시 재생되는 마법 보호막 패시브"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "팀이 받아먹을 한타에서 squishy 핵심 carry에게 W-Q 콤보(Headbutt로 밀고 즉시 Pulverize 띄우기)를 적중시켜라. 상대 팀 hard CC가 강하면 engage 직전 R을 켜서 CC 사슬을 흘려보낸다."
  weakness: "engage 사거리가 짧아 Q를 맞히려면 타겟에 붙어야 한다. 초반 마나가 빠듯하고 원거리 poke가 0이라, 적 봇 라인이 안전하게 빠지면 라인전을 포기하고 roam으로 영향력을 살려야 한다."
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
      reason: "flash + W-Q 콤보를 막을 수단이 없다. knock-up이 깔리면 ADC가 peel하기 전에 즉사 — Sona와 Yuumi는 특히 escape 자체가 없다."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "dash가 없는 immobile ADC"
      reason: "W는 사거리 650의 point-and-click이다. dash나 blink가 없는 ADC는 last-hit 잡으러 나올 때마다 풀 콤보를 그대로 받고, engage가 시작되면 도망갈 방법이 없다."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "skillshot poke를 던지지만 escape가 없는 mage support"
      reason: "그쪽 poke는 쿨을 빼는 용도지만, Q stack이 쌓인 Trample에 flash-Q를 머리 위에 박으면 즉사한다. 거리만 좁히면 사거리 우위가 의미 없다."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "active peel을 가진 disengage enchanter"
      reason: "Lulu의 폴리모프는 W dash 중간에 끊고, Milio R은 원거리에서 knock-up을 정화하고, Renata E는 콤보에서 carry를 빼낸다. 한 번 짜낸 engage가 공짜로 막힌다."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "shield나 binding을 가진 장거리 poker"
      reason: "사거리 900+에서 일방적으로 체력을 깎는다. 받아칠 수단이 없다. Morgana 흑막은 Q knock-up을 통째로 막아 — flash 들어가도 헛수고다."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "더 긴 hard CC를 가진 다른 tank engage 서포터"
      reason: "Nautilus Q 후크, Leona E dash-stun, Rell W 차지 — 모두 사거리가 W보다 길어서 네가 Q 거리에 닿기 전에 먼저 적중한다. 너는 그쪽 engage를 받지만, 그쪽은 네 engage를 받지 않는다."
---

## 개요

Alistar는 **vanguard support**(아군을 치료하는 게 아니라 한타를 여는 게 일인 tank 클래스 서포터) — 적 carry에게 직접 뛰어들어 crowd control로 묶어두는 방식으로 engage한다. 그의 콤보는 단 하나로 정의된다. **Headbutt (W)**가 타겟에게 dash하며 직선으로 밀쳐내고, 곧바로 자기 발 밑에 **Pulverize (Q)**를 깔면 그 적이 공중으로 떠오른다. 풀 콤보(W → Q)는 적을 **아군 쪽으로** 밀어 넣은 뒤 1초 동안 공중에 띄워둔다 — ADC가 다가와 공짜 피해를 다 박을 시간이다. **Trample (E)**은 짧은 **ghosted** 이동(미니언과 다른 유닛을 충돌 없이 통과)을 주고, 5스택에서 다음 평타에 stun **proc**(조건이 차면 발동되는 누적 효과)을 발동시킨다. **Unbreakable Will (R)**은 자신에게 걸린 모든 crowd control을 정화하고 강력한 피해 감소를 준다. 1 HP 짜리 Alistar가 Morgana 속박을 뚫고 그래도 킬을 마무리할 수 있는 이유다.

게임 플랜: 라인에서는 약간 앞으로 나서서 **bait**(상대를 들어오게 유인). 적 ADC가 last-hit 잡으러 나오는 순간 W로 밀고, Q로 띄우고, Trample을 쌓으며 위로 걸어가면 ADC가 마무리한다. 미드 게임에는 Trample의 ghosted 이동과 summoner spell 유연성을 살려 **roam**(봇 라인을 떠나 미드나 정글을 돕기)한다. 다른 서포터가 미니언 벽에 끼는 곳도 Alistar는 그냥 통과한다. 후반에는 frontline에 서서 **R**로 적 CC를 받아내고, 죽으면 한타가 끝나는 carry에게 engage한다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**(통합 서포터 시작템) + Health Potion 2개. 라인에서 미니언을 last-hit 하지 마라. 골드는 ADC에게 양보하고, World Atlas는 자체 quest로 따로 골드를 준다.

**코어 아이템 (구매 순서):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 시작템. quest 진행도가 쌓이면 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** → ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**를 거쳐, 네가 선택한 후반 업그레이드까지 자동으로 진화한다.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 마법 저항 + **tenacity**(crowd control 지속 시간을 줄여주는 스탯). engage tank의 기본 신발이다. stun과 slow가 짧아져, 콤보를 넣은 직후 **W-Q** 다음 행동에서 잠기지 않는다.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 주변 모든 아군에게 몇 초간 보호막을 주는 active. engage하는 순간 바로 켜서 적의 첫 **burst**(한타 1-2초 안에 쏟아지는 폭발 피해)를 팀이 흡수하게 한다.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 너를 **ADC**(Attack Damage Carry — 평타로 딜하는 봇 라인 동료, 후반 주력 딜러)와 묶는다. ADC가 받는 피해의 일부가 너에게 전이되고, 그 대가로 너는 ADC를 회복시킨다. 살려둘 가치가 가장 큰 carry를 항상 묶어라.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 서포터 아이템의 engage 지향 후반 업그레이드(World Atlas의 quest를 끝내면 자동으로 이쪽 계열로 변환). **Spellblade** 패시브를 가진다. 어떤 스킬이든(W Headbutt, Q knock-up, R cleanse, 심지어 E Trample 틱) 시전한 직후의 다음 평타가 추가 물리 피해 on-hit를 주고, 적 챔피언에게 적중하면 그 챔피언은 4초간 모든 출처의 피해를 증폭해서 받는다. 운영 패턴은 "스킬 → AA → 스킬 → AA"를 한타 내내 쌓는 것이지, "AA를 CC 후로 미루는" 것이 아니다.

**상황별 아이템:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor와 평타 피해 감소를 주는 신발. 적 봇 라인이 평타 의존(Caitlyn, Draven, Tristana)이고 라인 **harass**(견제와 슬쩍 깎는 피해)가 적 팀의 후반 CC 사슬보다 더 아플 때 Mercury's에서 교체.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 주변 적의 평타 속도를 넓은 오라로 둔화시킨다. 공속을 쌓는 carry(Tristana, Kog'Maw, Master Yi) 상대로, 네 일이 engage가 아닌 **peel**(자기 carry를 죽이러 오는 적으로부터 보호)로 바뀔 때 픽.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — 비전투 중 재생되는 패시브 마법 보호막. AP 폭발 조합(Syndra mid + Brand support 같은 더블 메이지 세팅) 상대로 픽한다. 보호막이 궁극기 한 발을 통째로 먹어, 네가 시작한 engage에서 살아남게 해준다.

**신발:** 기본은 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — tenacity 덕분에 Thresh의 1초 stun이 0.5초로 줄어 **R**을 engage에 이어 붙일 시간을 벌어준다. 적 봇 라인이 적 팀의 후반 CC보다 더 아프게 들어올 때만 완성 전에 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 교체.

**스킬 마스터 순서:** **E**(Trample) 선마 — 라인전 딜과, Q 다음에 두 번째 crowd control을 만들어주는 stun proc의 핵심이다. **W** 후마 — 쿨다운이 짧아지면 engage 기회가 더 자주 온다. **Q**는 마지막(주로 마무리용. rank-up은 knock-up은 거의 그대로고 피해만 늘어난다). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**(방어 트리 — 내구도)에 **Aftershock**(crowd control을 걸면 몇 초간 armor와 마법 저항을 무료로 — Q knock-up마다 발동), **Font of Life**(네가 건 CC가 표식을 남기고, 그 적을 공격하는 아군이 약간 회복), 후반 스케일 라인전엔 **Conditioning**, 초반 burst 라인전엔 **Bone Plating**, 그리고 **Unflinching**(소환사 주문을 쓸 때 추가 **tenacity** — crowd control 지속 시간을 줄여주는 스탯). 보조 트리 **Inspiration**(유틸 트리)에 **Hextech Flashtraption**(긴 쿨에 단거리 Flash 백업 — 깜짝 W-Q 콤보의 핵심)와 **Cosmic Insight**(소환사 주문과 아이템 active 쿨다운 감소). **Stat shards**(룬 페이지 하단의 작은 스탯 3개): Adaptive Force / Adaptive Force / Health (Adaptive Force = 키트가 무엇을 사용하는지에 따라 AD 또는 AP 보너스).

## 주요 매치업

- **Leona:** **engage** 거울전(둘 다 한타를 열고 싶다). 그쪽 CC가 사거리가 더 길어(Zenith Blade dash-stun, R Solar Flare), 상대 쿨이 살아 있을 때 먼저 들어가지 마라. E를 빼면 10초 창이 열린다 — 후속기가 빠진 동안 ADC에게 flash-Q.
- **Pyke:** Skill matchup — 종이상 우열은 없고 누가 더 잘하느냐로 갈린다. Q로 너를 outpoke하고 **stealth**(수풀을 통과하는 동안 투명) 상태로 너보다 더 효과적으로 roam한다. 강에 깊은 와드를 깔고, R이 킬을 리셋하지 못하는 라인 안에서 싸우게 강제하라.
- **Lulu:** 네 **all-in**(킬을 위한 풀 commit) 하드 카운터. 폴리모프가 W의 dash 도중에 끊는다. 폴리모프가 살아 있을 땐 engage하지 마라. 쿨다운을 추적하고, 폴리모프가 죽은 13초 창에서만 한타를 강제한다.
- **Soraka:** 자체 engage 도구가 없는 순수 **sustain enchanter**(한타를 여는 게 아니라 ADC를 살려둠으로써 이기는 힐 중심 서포터). Soraka의 Flash가 빠진 순간이면 언제든 flash-Q를 박을 수 있다. ADC가 반응하기도 전에 콤보 안에서 죽는다.
- **Senna:** 장거리 **poke** 매치업(거리에서 야금야금 깎는 chip damage). 타워 밑으로 체력을 깎아내며 위협한다. 맞받지 말고 라인 손해를 받아들이고 Mobility Boots로 미드 roam이나 invade — Alistar의 라인은 지지만 macro 게임은 이긴다.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + W):** 첫 스파이크. 두 스킬이 모두 켜진 순간 풀 W-Q 콤보가 가능해진다. 첫 **wave**(들어오는 미니언 줄) 너머로 over-extend한 적 ADC는 **Flash**가 살아있다면 공짜 킬이다.
- **6레벨 (R 해금):** engage 잠재력이 폭발한다. **Unbreakable Will**이 한 방에 죽는 **diver**(적 후방으로 뛰어들어 바로 죽는 챔피언)에서, hard CC를 뚫고 다시 engage하는 tank로 바꾼다. Morgana에게 flash-Q를 박고, 속박을 받아내고, R로 빼낸 뒤, 그쪽 ADC에게 다시 Q를 박을 수 있다.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 완성 (~ 14-16분):** 첫 한타 아이템 가동. engage가 이제 팀에 공짜 보호막을 깔아준다. 팀과 모여서 **Drake**(봇 강의 드래곤 오브젝트 — 처치 시 팀에 영구 스탯 버프)나 **Voidgrubs**(탑 강의 작은 몹들 — 처치한 팀이 적 구조물에 추가 피해를 얻는다)를 노려라.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong 후반 (~ 24-30분):** Spellblade proc과 챔피언 대상 4초 피해 증폭이 풀 로테이션을 DPS 시퀀스로 바꾼다. 이제 W → AA → Q → AA는 ADC를 위한 셋업만이 아니다 — 단독으로 **squishy**(ADC나 메이지처럼 방어가 약한 챔피언)의 HP 25-30%를 깎을 수 있다.

## 흔한 실수

- **W-Q를 잘못된 방향으로.** Headbutt는 타겟을 네가 서 있는 방향에서 직선으로 밀어낸다. 아래에서 W하면 위쪽 라인으로 (네 팀 반대로) 던져버린다. 항상 **flank**(측면 각도)에서 W해야 knockback이 carry를 적 팀이 아닌 네 팀의 딜 안으로 밀어 넣는다.
- **후속기 없이 engage.** ADC와 팀이 뒤에 없는 Alistar는 딜 없는 탱커다. ADC가 베이스에 있거나 정글러가 맵 반대편에 있다면 W를 아껴라. 4v5 솔로 engage는 R 쿨다운을 적 팀에 그냥 갖다 바치는 짓이다.
- **R을 도주용으로 미리 태우기.** **Unbreakable Will**은 공격 도구지 escape 버튼이 아니다. 피해 감소와 CC cleanse는 주지만 이동 속도는 안 준다. 팀이 없는 상황에서 도망용으로 쓰면 죽는 시점만 5초 늦출 뿐이다. R은 곧 commit할 engage를 위해 남겨라. 애초에 필요하지 않았어야 할 disengage용이 아니다.
- **미니언에 Trample 스택 쌓기.** E는 적 챔피언 적중에서**만** 스택이 쌓인다. 미니언으로는 안 된다. 빈 웨이브 위에 서서 stun proc이 차길 기다리는 건 의미가 없다. proc은 팀의 딜로 이어 붙일 수 있을 때만 의미가 있다.
- **한타 도중 패시브 사용 안 함.** **Triumphant Roar**는 네가 건 CC(Q, R, E proc)와 **주변 적 사망**(미니언, 정글 몬스터, 적 챔피언)으로 충전된다. 미니언과 정글 몹이 주위에서 죽어나가는 한타라면 회복을 여러 번 쌓아 쓸 수 있다. 행동 사이사이 패시브 버튼을 톡톡 — 너와 옆 ADC에게 50-100 HP 공짜 회복이 한타를 뒤집는다.

## 고급 팁

**flash-W-Q 원샷**. 앞으로 Flash하고 같은 프레임에 핵심 타겟에게 **W**를 시전한다. dash가 적이 예상한 hitbox 위치가 아니라 새로 flash한 위치에서 출발한다. 그리고 W의 dash 애니메이션 도중에 **Q**를 큐에 걸어둔다. W의 knockback이 끝나는 순간 Pulverize가 발동되어 두 crowd control 사이에 빈틈이 0이 된다. 제대로 하면 타겟의 화면에는 1초짜리 knock-up만 보이고, 반응하기 전에 죽는다. 드릴은 muscle memory(손가락의 자동 반사)다. Flash + W + Q를 같은 손이 닿는 위치에 바인딩하고, **Practice Tool**에서 0.5초 안에 세 개를 다 발동시킬 수 있을 때까지 리듬을 익혀라. Alistar를 "도와주는 탱커"에서 "한타를 끝내는 탱커"로 바꿔주는 메커닉이다.
