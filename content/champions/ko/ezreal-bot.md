---
title: "Ezreal Bot Build & Guide — Patch 16.9"
slug: "ezreal-bot"
language: "ko"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Ezreal 봇 라인 완벽 공략. 시작 아이템부터 코어 AD 빌드, Precision 룬 선택, 핵심 매치업 대처법, 파워 스파이크 타이밍, 라인전 흔한 실수와 해결책, 그리고 W 스틱 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "스킬로 적을 맞힐 때마다 attack speed 스택이 쌓인다(최대 5스택). Ezreal의 평타 DPS 엔진."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "장거리 직선 스킬샷, 물리 피해. 적중하면 모든 쿨다운이 감소하고 on-hit 효과가 적용된다 — 메인 견제와 DPS 버튼."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "챔피언이나 오브젝트에 부착되는 마법 구체. 다음 평타나 스킬로 터뜨려 추가 피해와 마나 환급을 받는다."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "단거리 점멸 + 자동 사격. 쿨다운 길다 — 유일한 도주기, 초반에 딜용으로 낭비하지 말 것."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "글로벌 직선 광선, 첫 비-미니언 대상에게 큰 피해. 스나이프(픽오프, 한타 밖 고립된 적 처치), 막타, 비상 웨이브 클리어용."
      dd_spell_id: "EzrealTrueshotBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "해제해야 하는 단일 대상 하드 CC 상대(Malzahar R, Skarner R, Warwick R) — 액티브로 락다운을 풀고 카이팅 유지"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "예고된 투사체 CC 상대(Morgana Q, Ashe R, Blitzcrank Q) — 스펠 쉴드가 적 스킬 하나를 막아 포지셔닝을 살린다"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "포크 라인 상대(Caitlyn, Varus, Xerath 서폿)에 흡혈 지속력과 트레이드를 버틸 보호막이 필요할 때"
    - dd_id: "3091"
      name: "Wit's End"
      against: "강한 AP 폭딜 상대(LeBlanc 미드, Syndra, Brand 서폿) — 마법 저항력과 Q마다 추가 마법 on-hit 피해"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Q를 쿨마다 적중시켜 패시브 attack speed 스택을 쌓고, 평타와 Q로 최대 사거리에서 카이팅하며, 봇 라인을 굴려 25-30분 3코어 스파이크에 적 캐리를 DPS로 압도한다."
  weakness: "물몸에 E 외엔 도주기 없음(쿨 길다). 강한 이니시와 장거리 CC에 취약; 라인전에서 Q를 놓치면 6초 내 적중 없으면 스택이 사라져 뒤처진다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "단거리 초공격형 원딜"
      reason: "Ezreal의 Q가 그들의 평타 사거리를 압도한다(1150 대 ~525-550). 안전한 거리에서 견제로 웨이브에서 밀어내라; 그들은 라인을 이기려면 올인(킬까지 가는 완전한 교전)이 필요하고 너의 E는 다이브에 대한 비상 버튼이다."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "이동기 없는 비기동형 원딜"
      reason: "Ezreal은 느린 Q(Sivir Boomerang, Varus Q)를 사이드스텝으로 피하면서 자기 Q를 맞춘다. 그가 앞으로 나설 때 거리를 좁히지 못해 그의 느린 웨이브 클리어를 처벌하지 못한다."
    - examples: ["aphelios", "kai-sa"]
      archetype: "성장형이지만 라인전 약한 원딜"
      reason: "2-6레벨 구간 Ezreal의 스파이크가 그들보다 강하다. Q 견제로 웨이브에서 밀어내 코어 아이템 타이밍이 늦어지고 후반 성장 우위를 잃게 된다."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "6레벨 이전 즉발 화력형 원딜"
      reason: "1-3레벨 트레이드 패턴(Jhin 평타 리셋, MF Double Up)이 Ezreal이 패시브를 쌓기 전에 딜로 압도한다. 일찍 귀환하게 만들고 Manaflow Band 템포를 잃게 한다."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "더 긴 사거리 포격형(포크 라인)"
      reason: "그들의 Q나 함정 사거리가 Ezreal의 1150을 넘는다. 그들의 위협 범위에 들어가지 않고는 반격할 수 없어 라인이 HP를 깎이지만 올인할 방법이 없다."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "하드 이니시 탱커 서폿"
      reason: "그들의 즉시 명중 이니시(Leona E, Naut Q, Thresh Q 훅)는 Ezreal의 핵심 강점인 안전 거리 견제를 무시한다. 한 번 락되면 E로도 후속 공격을 빠져나가기 어렵다."
---

## 개요

Ezreal은 순수 평타 DPS를 안전성과 스킬샷 견제와 맞바꾼 장거리 AD 캐리다. 그의 키트는 **Mystic Shot (Q)**를 쿨마다 적중시키는 것을 중심으로 돌아간다 — 적중할 때마다 모든 쿨다운의 일부가 감소하고, 패시브 **Rising Spell Force** attack speed 스택이 쌓이며(최대 5스택, 약 +50% AS 스파이크), Kraken Slayer의 추가 피해 같은 on-hit 아이템 효과가 발동된다. **Arcane Shift (E)**는 전통적인 ADC 중 최고의 도주기지만, 그 대가로 라인 지속력이 약하고 성장 곡선이 Jinx나 Aphelios 같은 ADC보다 느리다.

게임 플랜은 인내심이다: 최대 사거리(1150 유닛, 다른 모든 ADC 평타보다 길다)에서 **Q**로 견제하고, 적이 뒤로 빠지면 **W**-**Q** 콤보로 웨이브를 밀고, **R**로 미드로 로밍해 맵 곳곳에서 픽오프(한타 밖 고립된 적을 잘라내기)를 만든다. 스킬 표현력은 **Q**의 예측(타겟의 이동 벡터를 따라 리드샷 — 막타 칠 때 스스로 느려지므로 더 맞히기 쉽다)과 **E**의 절제(딜 보러 점멸하지 말고, 결국 들어올 이니시를 피하기 위해 아껴라)에 있다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's는 HP를 잃지 않고 **Q**로 트레이드할 수 있는 AD와 흡혈을 준다.

**코어 아이템 (순서대로):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 첫 DPS 스파이크. 세 번째 평타마다 고정 피해(armor와 magic resist를 무시하는 피해)를 입히고, **Q**도 on-hit 적용으로 카운트된다. 무조건적인 첫 구매템.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 패시브 스택과 곱연산되는 attack speed 신발. Kraken 첫 부품 후 구매.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 충전 시 평타 사거리를 약 150 유닛 늘려 **Q** 사거리에 맞춘다. 앞으로 나서지 않고 최대 사거리에서 카이팅(공격하면서 뒤로 이동해 거리 유지)할 수 있게 해준다.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — 평타가 비-궁극기 쿨다운을 감소시킨다. **Q** 자체의 쿨 감소와 결합하면 약 2초마다 **Q**를 던질 수 있다.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 후반 프론트라인 탱커들이 armor를 쌓았을 때를 위한 방관.

**상황 아이템:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 해제해야 하는 단일 대상 하드 CC 상대(Malzahar R, Skarner R, Warwick R). 액티브로 락다운을 풀고 카이팅을 유지한다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 예고된 투사체 CC 상대(Morgana Q, Ashe R, Blitzcrank Q). 스펠 쉴드가 적 스킬 하나를 막아 포지셔닝을 지킨다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 포크 라인 상대(Caitlyn, Varus, Xerath 서폿). 흡혈로 견제를 견디고, 오버힐 보호막이 HP 버퍼가 되어준다.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 강한 AP 폭딜 위협(LeBlanc 미드, Syndra, Brand 서폿). 마법 저항력과 모든 평타 및 **Q**마다 추가 마법 on-hit 피해.

**신발:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**가 기본. 맵 너머 스나이프를 위한 **R** 가동시간이 더 필요하면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**도 허용된다.

**스킬 빌드:** **Q** 선마(딜과 DPS 엔진), **W** 차마(붙은 대상에게 추가 폭딜), **E** 후마(아무리 찍어도 딜이 부족 — 점멸로 남는다). 6, 11, 16레벨에 **R** 한 포인트씩.

**룬:** 메인 **Precision**에 **Lethal Tempo**(또는 더 물몸인 라인 상대로는 **Press the Attack**), **Presence of Mind**(마나 지속력), **Legend: Bloodline**(흡혈 성장), **Coup de Grace**. 보조 **Sorcery**에 **Manaflow Band**(필수 — Ezreal의 마나 비용은 이거 없으면 가혹하다)와 **Transcendence**.

## 주요 매치업

- **Caitlyn:** 평타 사거리(650 대 너의 550 근접)로 너의 **Q** 사거리를 넘는다. 게다가 함정으로 라인 밖으로 밀어낸다. 미니언 뒤에 서고, 절대 함정 위로 걷지 말고, **Q**로 파밍하라. 그녀가 **Net (E)**로 웨이브에서 빠져나갈 때 올인을 노려라 — 쿨이 비어있다.
- **Draven:** 단거리 트레이드(짧은 공격 교환)를 원한다. **Q**로 웨이브를 밀고, 뒤처진 상황이라면 프리즈(웨이브를 죽이지 않고 막타만 쳐서 너의 타워 아래에 머물게)하고, 정글 갱을 일찍 부르라. 회전 도끼를 피하라 — 도끼 2개가 돌고 있으면 평타 치지 마라.
- **Lucian:** 트레이드 템포 미러 매치. 그가 **Dash (E)**를 공격적으로 쓸 때를 위해 **E**를 아껴라 — 그때가 그가 committed(완전히 들어와 물러설 수 없는 상태) 순간이고, 너는 그를 타워 아래로 미끼하거나 너의 **Q** 폭딜로 따라갈 수 있다.
- **Jhin:** 4번째 평타가 큰 치명타 피해; 탄창을 추적하라(평타 카운트: 1, 2, 3, 그리고 4 전에 빠진다). 긴 재장전 애니메이션 동안 앞으로 나서서 **Q**를 맞춰 처벌하라.
- **Sivir:** 6레벨까지 호각. **Spell Shield (E)**가 너의 **Q**를 막는다 — **W** 구체(저렴하고 빠르다)로 먼저 미끼한 뒤 다운 윈도우 동안 **Q**를 던져라.

## 파워 스파이크 및 승리 조건

- **2레벨:** 첫 트레이드 윈도우. **Q** + **W**를 **Q**로 터뜨리면 거의 모든 짧은 트레이드를 이기는 큰 한 방.
- **6레벨:** 첫 **Trueshot Barrage**가 로밍과 처형 압박(맵 너머로 도망치는 저체력 적을 R로 마무리)을 열어준다. 적 미드 라이너가 저체력 귀환할 때 **R** — 글로벌 사거리는 포지셔닝 실수를 킬로 바꾼다.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer 완성(~12-14분):** DPS가 거의 두 배. 이 시점에 2v2 다이브를 강요하라 — 매 3번째 평타가 적 서폿이 아이템으로 막을 수 없는 고정 피해를 입힌다.
- **3코어 스파이크(~25-30분):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** 시점에 더 안전한 거리에서 대부분의 캐리를 DPS로 압도한다. 여기서 Baron과 드래곤 한타를 강요하라.

## 흔한 실수

- **완벽한 샷을 위해 Q를 아끼기.** 패시브 스택(적중 시 AS 버프)은 스킬 적중 없이 6초 후 사라진다. 미니언에 **Q**를 던져 스택을 갱신하고 쿨다운을 환급받아라 — 챔피언에게 빗나가도 미니언을 맞춘 **Q**는 마나값을 한다.
- **라인전에서 E를 공격적으로 사용.** **Arcane Shift**의 쿨다운은 14-26초; 한 번 점멸로 들어가면 서폿이 이니시할 때 남는 게 없다. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**와 킬 우위가 나올 때까지 도주용으로만 아껴라.
- **한타에서 R 최대 사거리에 서기.** **Q** 사거리는 1150; **R** 스나이프를 위해 1500+에 서면 서폿의 보호(서폿이 너에게 들어오는 다이브로부터 주는 보호) 밖이 된다. 두 번째로 멀리 떨어진 위치에 서서 측면 진입에 즉사하지 않게 하라.
- **마나 부족 상태에서 Q 견제.** 마나가 30% 이하면 웨이브를 밀고 귀환하라. 마나 없는 성장형 Ezreal은 무용지물이다. 키트의 모든 동작(도주용 E 포함)이 최소 28 마나가 들기 때문이다.
- **오브젝트에 W를 무시.** **Essence Flux**는 드래곤과 Baron에 부착된다. **W** 다음 **Q**로 터뜨려 스마이트 경합 시 ~250 추가 피해 — 스틸을 가르는 공짜 한 방이다.

## 고급 팁

챔피언 대상 **W**-스틱 콤보를 연습하라: 시야가 있다면 안개 너머로 저체력 적에게 **W**를 던지고, 즉시 **Q**로 터뜨려라. 폭발은 **W**의 마나 비용에 추가 마나까지 환급해주므로, 적중하면 콤보가 사실상 공짜다. 한타에서는 적 캐리에 **W**를 부착시키면 아군의 모든 평타가 그것을 터뜨려, 50 마나짜리 구체를 4초 동안 여러 출처에서 약 400 피해 한 방으로 바꾼다. 핵심은 이니시가 시작되기 *전에* **W**를 던지는 것이지, 이니시 도중이 아니다 — 0.25초의 이동 속도는 이미 움직이는 표적을 잡기엔 너무 느리다.
