---
title: "Karma Support Build & Guide — Patch 16.9"
slug: "karma-support"
language: "ko"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Karma 서포터 공략. enchanter 빌드, 룬, 핵심 매치업, 파워 스파이크, 흔한 실수, 그리고 초보자를 위한 마무리 팁까지 한 번에 정리합니다."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "스킬이나 평타로 적 챔피언을 맞히면 Mantra 쿨다운이 줄어든다. trade에서 적극적으로 움직여 R을 항상 준비 상태로 유지한다."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "직선 skillshot. 첫 적중 지점에서 폭발해 작은 범위에 피해와 둔화를 입힌다. 라인전의 핵심 poke 도구."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "지정 적에게 tether(연결). 지속 시간 동안 끊기지 않으면 두 번 피해를 주고 속박. 끊기는 거리가 중요하다."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "아군에게 보호막 + 짧은 Move Speed 버프. ADC에게 걸어 disengage 또는 킬 마무리에 사용한다."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "다음 Q, W, E를 강화. RQ는 지연 AOE 폭발 추가, RW는 Karma를 회복시키고 속박을 길게, RE는 주변 아군을 보호하고 더 큰 Move Speed."
      dd_spell_id: "KarmaMantra"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량 누적이 강한 조합 상대 (Soraka, Yuumi, Vladimir, Dr. Mundo): Q로 피해를 줄 때 적 회복을 차단."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "AOE 버스트 상대 (Yasuo + Malphite, Orianna 궁): 팀 전체 보호막으로 wombo combo 차단."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 시전자 상대 (Blitzcrank 갈고리, Morgana Q, Twisted Fate 스턴)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "너를 노리는 assassin 상대 (Zed, Talon, Akali): 2.5초 stasis로 팀이 peel할 시간을 벌어준다."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "팀이 더 많은 poke 피해를 원하고 ADC와 정글러가 슬로우 후속타를 안정적으로 따라줄 때."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "1레벨부터 Q poke로 봇 라인을 압박하고, W 속박과 Mantra 강화 Q(RQ) 존으로 킬을 셋업한 뒤, 한타에서 E와 RE로 ADC를 peel한다."
  weakness: "dash가 없는 squishy enchanter. 하드 인게이지 서포터(Leona, Nautilus, Rell)는 W tether 전에 잠그며, Q를 빗나가면 체력만 잃고 끝난다."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "기동성 없는 mage 서포터"
      reason: "Karma의 Q 사거리가 그들과 비슷하고 E 보호막이 poke를 무효화하므로, 그들이 메울 수 없는 차이를 회복으로 메우며 장기 trade에서 승리한다."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "하드 CC 없는 패시브 enchanter"
      reason: "Q를 빗나가도 처벌하지 못하므로 Karma는 위험 없이 ADC에 poke를 넣고 그들이 아이템 스파이크를 찍기 전에 라인을 굴린다."
    - examples: ["draven", "kalista"]
      archetype: "poke 가능한 서포터를 원하는 공격적 lane-bully ADC"
      reason: "아군 ADC에게 Karma E를 걸면 그들의 all-in 버스트를 흡수하고, Aery가 모든 스킬에 발동되므로 Q-RQ로 더 강하게 되받아친다."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "지정형 CC를 가진 하드 인게이지 탱커"
      reason: "그들의 스턴이 Karma의 W tether보다 먼저 들어오므로, root를 걸지 못한 채 인게이지를 받아내고 E가 ADC를 살리기 전에 죽는다."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "장거리 hook 서포터"
      reason: "Karma는 깔끔한 직선 skillshot을 피할 dash가 없다. 2-3레벨에 한 번 갈고리에 걸리면 도망 수단이 없어 라인이 끝난다."
    - examples: ["alistar", "rakan"]
      archetype: "기동성 있는 peel-engager"
      reason: "Karma가 Q나 E를 시전하기 전에 그들이 더 빠르게 점프해 들어오고, W가 틱하기 전에 자체 knock-up으로 root를 끊어버린다."
---

## 개요

Karma는 enchanter와 poke 하이브리드 서포터다. enchanter는 아군 회복과 보호막을 중심으로 만들어진 챔피언이고, "poke"는 풀 교전에 들어가지 않고 멀리서 적의 체력을 깎는 플레이를 뜻한다. **Inner Flame (Q)** 로 poke하고, **Focused Resolve (W)** 로 대상을 묶고, **Inspire (E)** 로 ADC(봇 라인의 원거리 캐리)를 보호한다. 궁극기 **Mantra (R)** 는 별도의 스킬이 아니라 다음 Q, W, E에 추가 효과를 부여하는 강화다. Mantra가 1레벨부터 사용 가능하기 때문에, Karma는 라인 첫 캐스트부터 "궁이 있는" 몇 안 되는 챔피언이며, 패시브 **Gathering Fire** 덕분에 적 챔피언에게 평타를 한 번 칠 때마다 쿨다운이 줄어든다.

게임 플랜은 단순하다. 봇 라인에서 Q poke를 쿨마다 넣고, 적이 미니언을 막타치러 앞으로 나오면 W로 root(짧은 시간 동안 적의 이동을 막는 효과)를 노리며, all-in(끝장을 보는 풀 교전)을 흡수하기 위해 ADC에게 E를 건다. 약 12분, ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**와 ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**이 완성될 무렵 Karma는 한타용 enchanter로 전환되어 frontline(교전을 여는 탱커나 파이터)의 아군 캐리를 보호하고, RQ로 back line(뒤에서 피해를 넣는 캐리들)을 견제한다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**(서포터 퀘스트 아이템)와 Health Potion 2개 + Stealth Ward. 마나 포션은 생략한다. Manaflow Band와 Biscuit Delivery로 초반 마나 문제는 해결된다.

**핵심 아이템(순서대로):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 약 10-12분에 ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**으로 완성되며, 서포터 퀘스트 보상이다. 골드 수급과 ward 충전을 제공한다.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste(스킬 쿨다운을 줄이는 스탯)를 주는 신발. Mantra와 Q를 더 자주 쓸 수 있다.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — E로 아군에게 보호막을 걸면 attack speed(공격이 더 빨라짐)와 평타에 마법 피해 추가(매 평타마다 추가 피해)가 붙는다. 평타 위주 ADC(Kai'Sa, Jinx, Twitch)와 궁합이 좋다.
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 회복과 보호막을 반복하면 저체력 아군에게 누적 회복이 발동한다. E 연사와 한타의 RE와 시너지가 있다.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 5초 지연 후 광역 회복. 오브젝트 교전(Drake, Baron)에서 팀 전체를 회복시키는 데 사용한다.

**상황 아이템:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복량이 많은 조합 상대 (Soraka mid, Yuumi, Vladimir top). Q로 피해를 입히는 순간마다 적의 회복을 깎는다.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — AOE 버스트 상대 (Yasuo + Malphite, Orianna R). 액티브로 팀 전체에 넓은 보호막을 주어 wombo combo를 차단한다(wombo combo는 1-2초 안에 팀을 쓸어버리는 연쇄 CC 인게이지를 뜻한다).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 너를 즉사시키는 단일 대상 마법 CC (Blitzcrank 갈고리, Morgana 결박, Twisted Fate 황색 카드).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 너를 노리는 assassin (Zed, Talon, Akali). 2.5초 stasis("선택할 수 없게 되지만 이동이나 시전도 불가") 동안 팀이 peel해줄 시간을 번다.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — 팀이 더 많은 피해를 원하고 정글러/ADC가 Q 둔화에 안정적으로 후속을 넣을 때.

**신발:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**가 기본값이다 (Ability Haste 확보, Mantra를 최대한 자주 사용). Mobility Boots는 미드로 자주 로밍할 때 허용된다.

**스킬 순서:** **Q**부터 마스터(주된 poke와 AOE 피해), **E** 두 번째(보호막 증가 + Move Speed), **W** 마지막. **R**은 6, 11, 16레벨에 한 번씩 찍는다 — 다만 Mantra는 1레벨부터 이미 사용 가능하다는 점을 기억하자.

**룬:** 주 트리 **Sorcery**의 **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery는 모든 Q에 발동해 추가 poke 피해를, 모든 E에 발동해 작은 보호막 보너스를 준다. 보조 트리 **Inspiration**의 **Biscuit Delivery**(라인전 무료 마나 sustain)와 **Cosmic Insight**(소환사 주문과 아이템에 더 많은 Ability Haste).

## 주요 매치업

- **Lulu / Janna:** 호각의 매치업. 둘 다 하드 인게이지가 없는 enchanter이며, ADC 매치업으로 라인이 갈린다. ward를 박으러 나올 때 Q로 견제하되, 라인에서는 Mantra를 쓰지 않는다 — 오브젝트 로테이션을 위해 아껴둔다.
- **Soraka:** 유리한 poke 싸움. Q 슬로우와 Aery 누적이 그녀의 W 체력 비용을 이긴다. 3-5레벨 사이에 Q를 쿨마다 던져 웨이브에서 밀어낸다.
- **Leona / Nautilus:** 어려운 라인. **W**로 tether를 걸기 전에 그들이 지정형 CC(우클릭 스턴처럼 조준 없이 즉시 잠그는 군중 제어)로 인게이지(교전 시작)를 시작한다. 인게이지 순간 E를 준비해둔다(보호막이 1-2초 폭딜을 흡수하고 Move Speed로 ADC와 함께 peel out, 즉 빠져나갈 수 있다). 시야 없이는 절대 강을 넘어 웨이브를 밀지 않는다.
- **Pyke / Thresh:** 갈고리 사거리가 Q 사거리와 비슷하다. ADC 뒤에 서고, 미니언 뒤에 숨어 갈고리 시야를 끊은 뒤, 갈고리가 쿨다운일 때 ADC가 아닌 서포터에게 Q를 던진다.
- **Blitzcrank:** pull이 매치업의 전부다. 그의 Q가 쿨다운인 것을 본 뒤에만 전진한다. 갈고리에 걸리면 즉시 자신에게 E를 건다(보호막 + 이속으로 타워까지 갈 기회가 생긴다).

## 파워 스파이크 및 승리 조건

- **1레벨:** Mantra가 이미 준비되어 있다. 1레벨 RQ는 강력한 invade 도구다(이른 킬을 만들기 위해 적 정글에 잠입). AOE 폭발(원형 영역 안의 모든 것에 적용되는 광역 피해)이 모인 적(여러 명이 가까이 붙어 있는 상태)에게 실질적 피해를 준다.
- **6레벨:** 두 번째 R 포인트로 Mantra 쿨다운이 더 빨라진다. Manaflow Band가 누적된 상태에서 봇 all-in에 Q-RQ-W 콤보를 연사할 수 있다.
- **Bloodsong + Ionian Boots of Lucidity (~ 10-12분):** 로밍 창이 열린다(roaming = 다른 라인을 돕기 위해 자기 라인을 떠나는 것). Q 한 번으로 웨이브를 강하게 밀고 미드 강가로 걸어가 정글러와 미드 라이너와 3v2를 만든다.
- **Ardent Censer + Moonstone Renewer (~ 24-28분):** 한타 정점. 모든 E 보호막이 Ardent의 attack speed와 Moonstone의 누적 회복을 발동시킨다. 이 두 아이템이 뒤에 있으면 ADC가 어떤 매치업이든 outscale한다.

## 흔한 실수

- **라인에서 poke로 Mantra를 낭비하기.** RQ가 강해 보여도, 4분에 Mantra를 쓰면 6분에 적 정글러가 강에서 봇으로 갱(자기 라인을 기습 공격)할 때 AOE 폭발이 없다. RQ는 W root 이후의 셋업이나 드래곤 근처에 모인 적을 위해 아껴둔다.
- **자신에게 E를 거는 것.** 자신에게 E는 panic button(곧 죽을 것 같을 때 쓰는 비상 시전)으로는 괜찮지만, 뒤에서 ADC가 죽으면 보호막 값과 Move Speed가 낭비된다. 기본은 ADC에게 E. ADC가 이미 안전할 때만 자신에게 사용한다.
- **적 assassin이 미니맵에서 missing일 때 Q poke.** Karma는 dash가 없다. 적 정글러가 추적되지 않은 상태에서 Q 사거리까지 전진하면 도망 수단 없이 잡혀 목숨만 내준다.
- **W tether 끊기 거리를 잊기.** **W**는 tether가 지속 시간 내내 끊어지지 않아야 root가 발동한다. 최대 사거리에서 던졌는데 적이 한 걸음 물러나면 tether가 끊어져 보상이 없다. 적이 committed인 순간(dash나 escape를 이미 써버린 후) W를 사용한다.
- **utility 대신 damage 빌드 가기.** Karma는 AP 피해로도 스케일링이 가능하지만 enchanter 빌드(Ardent Censer, Moonstone Renewer, Redemption)가 Rabadon's보다 팀에 훨씬 큰 가치를 준다. 압도적으로 앞선 게 아니라면 utility가 기본값이다.

## 고급 팁

자신이 아니라 앞으로 돌진하는 아군에게 **RE**(Mantra가 강화한 Inspire)를 건다. 강화된 E는 대상과 주변 모든 아군에게 보호막을 주고 더 넓은 Move Speed 부스트를 부여한다. 팀이 인게이지를 commit하는 정확한 순간에 ADC에게 던진다. AOE Move Speed로 팀 전체가 동시에 적 back line과의 거리를 좁혀, 평범한 한타를 강제 붕괴로 바꿔놓는다. 핵심은 인게이지 후가 아니라 인게이지 전에 RE를 타이밍에 맞추는 것이다. Move Speed 버프는 들어가는 길에서 가장 유용하기 때문이다.
