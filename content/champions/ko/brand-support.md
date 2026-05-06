---
title: "Brand Support Build & Guide — Patch 16.9"
slug: "brand-support"
language: "ko"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Brand 서포터 공략. 공격적 라인 압박, poke 빌드 순서, Sorcery 룬, 핵심 매치업 대처, 파워 스파이크 타이밍, 흔한 실수, 그리고 double-spread 마무리 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand의 스킬은 적에게 화염을 묻힌다 (4초 지속 피해, 최대 3중첩). 3중첩에서 폭발하며 작은 AOE로 스킬 효과를 다시 적용한다."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "직선 skillshot 마법 피해. 대상이 이미 ablaze 상태면 기절시킨다 — AD 캐리와의 킬 setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "짧은 예비 동작 후 떨어지는 지연 AOE. ablaze 적에게 +25% 피해. 키트 내 최고 poke 데미지."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "지정 대상에게 폭발, 주변 적에게 튕긴다. 주 대상이 ablaze면 전파 범위가 두 배 — 한 번에 두 명에게 blaze를 묻힌다."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "장거리 화염구가 적 사이를 최대 5번 튕기며, ablaze 대상을 우선한다. 적 ADC와 서포터가 붙어 있으면 한타를 이긴다."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "ADC에게 hard CC가 박히는 상대 (Leona 스턴 연계, Morgana Q, Pyke 갈고리)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "강력한 AOE 이니시 조합 상대 (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Yuumi peel, Aatrox나 Vladimir 보유 팀)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 첫 마법 저항 아이템을 사면 즉시 교체"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "3레벨 전부터 W poke로 2v2를 압박하고, 이후 ADC를 위해 E + Q 스턴 setup을 노린다. 6 이후 적 ADC와 서포터가 붙으면 R 튕김으로 라인이 snowball된다."
  weakness: "쉴드도, 힐도, ADC 보호도 없다. 적 서포터가 먼저 이니시하면 Brand는 캐리를 못 지킨다 — 이니시한 쪽을 먼저 죽이는 길밖에 없다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Sorcery: Arcane Comet은 W나 E가 맞을 때마다 자동 발동돼 매 쿨마다 공짜 poke가 추가된다. Manaflow Band로 2v2 W 난사용 마나 유지, Transcendence로 CDR을 40% 이상 끌어올리고, Scorch로 타워 밑 저체력 적을 마무리."
    secondary_rationale: "보조 트리 Inspiration: Biscuit Delivery로 초반 6레벨 동안의 마나 갈증을 해결하고, Cosmic Insight는 Flash 쿨을 더 자주 돌린다 — Flash는 이니시를 피할 유일한 수단이며, 키트에는 자체 escape가 없다."
    secondary_alternative: "갈고리 서포터(Blitzcrank, Thresh, Pyke) 상대로 첫 hook을 살아남아야 라인을 이긴다면, Inspiration 대신 Resolve를 들어 Bone Plating(연속 hook 콤보 피해 감소)과 Revitalize(Mikael's 쉴드 강화)를 챙긴다."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "체력 낮은 squishy enchanter"
      reason: "Brand의 W poke 사거리가 그들의 힐 사거리를 능가하고, E + Q 로테이션이 캐리가 peel하기 전에 그들을 죽인다. Yuumi는 풀 로테이션 한 번에 본체가 사라지고, Soraka는 blaze 틱을 힐로 따라잡지 못한다."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "이니시 없는 utility 서포터"
      reason: "Brand는 라인전을 힘으로 이긴다 — 그들의 키트는 트레이드가 아닌 캐리 보호용이라 W 난사를 응징할 수 없다. 6레벨 이후 그들의 CC는 단일 대상이지만, R은 둘을 한꺼번에 맞춘다."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "탈출기 없는 장거리 ADC"
      reason: "이런 ADC는 라스트힛을 위해 max range에 자리잡는다. 서포터에게 E를 쏘면 blaze가 그들에게 전파되고, Q로 스턴을 박은 뒤 뒤의 AD 캐리가 Flash 전에 킬을 가져간다."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "하드 이니시 탱커 서포터"
      reason: "Brand의 W 사거리 밖에서 flash-스턴 연계로 들어온다. 자기 자신도 캐리도 peel할 수 없고 — Leona가 스턴을 박는 순간 키트에는 죽거나 Flash + Zhonya's를 동시에 태우는 답밖에 없다."
    - examples: ["rakan", "alistar"]
      archetype: "기동성 이니시 서포터"
      reason: "Rakan은 skillshot을 dash로 뚫고 ADC를 끌어내고, Alistar의 박치기-짓밟기 콤보는 Q 스턴보다 빠르다. Brand는 둘 다 반응할 만큼 빠르지 않다."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "Brand의 burst를 받아치는 all-in 서포터"
      reason: "Pantheon Q와 Blitzcrank 갈고리는 Brand의 Q와 유효 사거리가 비슷하다. setup을 먼저 박는 쪽이 trade를 이기고, 둘 다 자체 생존기(Aegis 차단, hook-and-leave)가 있는데 Brand는 없다."
---

## 개요

Brand 서포터는 게임 내 가장 공격적인 caster 서포터다. 전통적인 서포터가 가져오는 모든 것 — 쉴드도, 힐도, 캐리를 위한 peel(아군을 보호하기 위해 공격자를 밀어내거나 기절시키는 스킬)도, 탱커 생존 쿨다운으로 끝나는 이니시 도구도 — 가지고 있지 않다. 대신 가져오는 것은 **1분부터의 평탄한 킬 위협**이다. 모든 스킬이 적에게 불을 붙이고 (패시브 **Blaze**), 적이 일단 불에 타면 **Q (Sear)** 는 데미지 스킬이 아니라 스턴이 된다. 라인 플랜은 단순하다: **W (Pillar of Flame)** 로 두 개의 blaze 스택이 박힐 때까지 poke하고, **E** 로 두 대상에게 blaze를 전파한 뒤, **Q** 로 스턴을 박아 ADC가 걸어 들어가 킬을 마무리하게 한다.

대가는 취약함이다. Brand는 escape도, 자체 sustain도, AD 캐리를 보호할 도구도 없다. 적 서포터가 먼저 이니시하면 — Leona 스턴, Nautilus 갈고리, Rakan dash — 유일한 답은 *상대가 캐리를 죽이는 속도보다 더 빨리 이니시한 쪽을 죽이는 것*이고, 이는 앞서 있을 때만 통한다. 이 픽은 이분법적이다: 라인을 짓밟고 snowball(초반 우위가 커지는 흐름: 킬 → 골드 → 아이템 → 추가 킬)하거나, 일찍 죽어 두 명을 먹여준다. 중간 지대는 거의 없으며, 그래서 이 가이드는 정확히 실행해야 할 두 순간 — 2레벨 스파이크와 한타에서의 **R** 튕김 — 에 집중한다.

## 추천 빌드

**시작 아이템:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (Bloodsong으로 quest되는 AP 서포터 시작템) + Health Potion 2개 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png).

**코어 아이템 (구매 순서):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Spellthief's Edge로부터 받는 서포터 quest 보상. 필수: 진짜 아이템을 살 골드 수입을 주고, takedown마다 AP가 쌓이는 패시브로 데미지가 snowball된다.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand의 정체성 피해 아이템. 최대 체력 비례 화상 피해가 blaze 틱 위에 쌓여 탱커와 체력 누적 팀을 응징한다.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste 신발. 서포터로서 미니언을 적게 farm하고 스킬을 더 자주 쓰기 때문에 Sorcerer's Shoes보다 우선한다. 한타당 R uptime이 늘어난다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst와, 체력 임계치 이하 적에게 추가 마법 관통이 발동되는 패시브. 저체력 적을 노리는 R 튕김과 깔끔히 맞물린다.

**상황별 아이템:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ADC에게 hard CC가 박히는 상대 (Leona 스턴 연계, Morgana Q, Pyke 갈고리). 캐리의 CC를 cleansing해주는 것이 Brand가 할 수 있는 peel에 가장 가까운 행동이다.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 강력한 AOE 이니시 조합 상대 (Malphite R, Yasuo wombo — "wombo"는 여러 궁극기가 연쇄되어 우리 팀 전원을 한번에 잡는 콤보, Kennen R). 액티브 쉴드는 한타 구원 버튼이다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka, Yuumi peel, Aatrox나 Vladimir 보유 팀). Grievous Wounds 패시브가 힐을 절반으로 깎는다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 첫 마법 저항 아이템을 사는 순간. 800골드짜리 컴포넌트 하나가 빌드를 soft-counter하지 못하게 막는다.

**신발:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**가 기본. 적 팀에 마법 피해를 가진 hard CC 위협이 3개 이상이면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체한다.

**스킬 마스터 순서:** **W** 선마(가장 높은 기본 데미지와 주력 2v2 poke), **Q** 후마(스턴 데미지 증가), **E**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 **Inspiration**에 **Biscuit Delivery**와 **Cosmic Insight**.

## 주요 매치업

- **Leona / Nautilus / Rell:** 하드 이니시 탱커 서포터. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**이 나올 때까지 그들의 flash-이니시 사거리 밖에 선다. 그들이 다가오면 미리 자기 발 밑에 **W**를 깔고, 이니시하는 순간 **Q**로 스턴을 박을 준비를 한다.
- **Blitzcrank / Thresh / Pyke:** Hooker(갈고리 챔피언)들. 항상 미니언 뒤에 선다 — 그들의 갈고리는 단일 대상 skillshot이라 웨이브가 막아준다. 빗나간 갈고리는 **W → Q**로 공짜 poke를 박아 응징한다. hook이 켜져 있을 땐 절대 엄폐 밖에서 평타치지 않는다.
- **Yuumi:** 공짜 라인. Yuumi는 붙어있지 않을 때 본체가 없다. 그녀가 라스트힛을 치거나 강화 평타를 발동하려고 떨어지는 순간에 **W**가 떨어지도록 타이밍을 잡는다. 떨어진 Yuumi가 **W → Q**에 잡히면 캐리가 쉴드를 걸기 전에 킬이다.
- **Soraka:** 마나가 마를 때까지 poke를 누적해 압박을 능가한다. Soraka는 자기 체력의 5%를 소모해 ADC를 힐한다 — ADC에 박히는 blaze 틱 하나가 그녀의 30초 분 힐을 무효화한다.
- **Lulu:** Polymorph와 쉴드 때문에 1v1 burst가 불안정하다. **W** 최대 사거리에서 poke하고, 우리 정글이 오는 게 아니라면 절대 스턴-into-all-in("all-in"은 킬을 향한 완전한 commit — 출구 없이 누군가 죽을 때까지 간다)에 commit하지 않는다. trade 중 Lulu가 우리 ADC를 polymorph하면 그 trade는 진다.

## 파워 스파이크 및 승리 조건

- **2레벨 (W + Q):** 첫 스파이크. **W** 한 포인트와 시작 **Q**만으로 **W → Q** 스턴 콤보가 켜진다. 이 구간에서 Brand 서포터 킬의 90%가 발생한다 — 웨이브를 밀어 먼저 2레벨을 찍고, 적 서포터에게 콤보를 박는다.
- **6레벨 (R 해금):** 첫 **Pyroclasm**이 켜진다. 적 봇 라인이 붙어 있으면 (거의 항상 — 서포터는 ADC 뒤에 쌓인다) 한 발의 **R**이 squishy의 체력 약 50%를 튕김 한 번당 깎는다.
- **Bloodsong + Liandry's Torment 완성 (~14-16분):** 데미지가 역전된다. 여기서부터 enchanter 서포터를 데미지로 능가하고, 잘 큰 ADC도 위협한다. 드래곤에서 grouped fight를 강제한다.
- **R + Shadowflame 완성 (~22-26분):** 모인 두 명의 적이 풀 튕김 시퀀스를 맞고 죽는다. 이 순간이 Brand가 후방에서 한타를 이기는 시점이다 — 적 캐리와 서포터가 서로 튕김 사거리 안에 있는 각도를 노린다.

## 흔한 실수

- **라스트힛하려고 웨이브에 평타치기.** 서포터로서 라스트힛은 가져가지 않는다 — AD 캐리의 farm 골드가 라인을 finance한다. 뒤에 서서 **W**로 적을 poke하고, 캐리가 죽었거나 recall 중일 때만 미니언을 평타친다.
- **맨몸 poke로 Q 던지기.** ablaze 없는 **Q**는 옆걸음치는 적에게 빗나가는 느린 투사체다. 먼저 바닥에 **W**를 깔거나, blaze를 전파시킬 미니언에 **E**를 박아 — 그 다음에 Q로 스턴.
- **ADC 앞에 서기.** Brand는 자기 자신도 다른 누구도 peel할 수 없다. 앞에 서면 이니시가 너에게 들어오고, 너는 죽고, ADC는 서포터를 잃는다. 같은 깊이 또는 한 발짝 뒤, 너와 갈고리 사이에 미니언을 둔다.
- **한 명에게 궁 쓰기.** **R**은 ablaze 대상을 우선해 적 사이를 튕기지만, 단일 대상에는 hop마다 데미지 falloff가 매우 크다. 두세 명의 적이 튕김 사거리 안에 있는 한타용으로 **R**을 아낀다 — 도망치는 단일 대상에 finisher로 절대 쓰지 않는다.
- **현재 위치에 W 미리 깔기.** Pillar of Flame은 떨어지기 전 지연이 있다. 0.6초 후 적이 *있을* 자리에 캐스팅한다 — 보통 다음 미니언에 가거나 스턴을 피하려고 반드시 지나야 하는 지점이다. 현재 위치에 캐스팅하면 어지간히 주의 깊은 상대에겐 무조건 빗나간다.

## 고급 팁

**Double-spread setup**을 연습하라. 적 서포터와 ADC가 붙어 있을 때 (웨이브를 밀거나 서포터가 ADC를 가릴 때 자주 발생) 순서대로 한다: **W**를 둘 사이에 → 둘 다 blaze 스택 1. **E**를 적 서포터에게 → 서포터에 blaze 스택 2, ADC로 전파되어 ADC도 스택 2. 이제 두 대상 모두 2스택이다 — **Q**는 스턴을 *셋업*하기 위해 박는 게 아니라 *finisher*로 박는다. 서포터에 Q: 스택 3 도달, 서포터 스턴, 불안정 폭발이 ADC도 맞아 ADC도 스택 3에 도달. **R**이 이제 스턴된 두 대상 사이를 최대 blaze 상태로 튕기며, 둘 다 죽고, 너는 아무것도 trade하지 않는다. 이것이 "괜찮은 Brand 서포터"를 매 게임 라인을 이기는 Brand로 바꾸는 로테이션이다.
