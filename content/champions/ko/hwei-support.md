---
title: "Hwei Support Build & Guide — Patch 16.9"
slug: "hwei-support"
language: "ko"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "League of Legends Patch 16.9 흐웨이 서폿 가이드: 픽 메이지 스타터 키트, 핵심 빌드 경로, 봇 라인 주요 매치업, 파워 스파이크와 흔한 실수까지 정리한다."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "피해 스킬이 적 챔피언에 표식을 남긴다. 두 번째 피해 스킬이 서명을 완성하면 짧은 지연 후 마법 광역 피해로 폭발하는 표식이 남는다."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "세 가지 피해 서브스킬. QQ는 빠른 화염구, QW는 초장거리 지연 번개(고립/CC 대상에 추가 피해), QE는 둔화 지대를 남기는 용암 길."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "세 가지 유틸리티 서브스킬. WQ는 아군 Move Speed 라인, WW는 시간 동안 보호막을 주는 풀, WE는 다음 3 스킬/평타에 추가 피해와 마나를 주는 세 개의 구체."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "세 가지 CC 서브스킬. EQ는 도주 스킬샷, EW는 적이 진입하면 추적 속박을 발사하는 지면 눈, EE는 적을 중앙으로 끌어당기는 입 지대."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "초장거리 스킬샷. 첫 피격 적 챔피언에 들러붙어 확장하며 주변 적을 누적 둔화시키고, 몇 초 후 마법 광역 피해로 폭발한다."
      dd_spell_id: "HweiR"
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
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "내 ADC를 노리는 하드 CC(Leona 스턴, Morgana 속박, Nautilus 후크) 상대: 락다운 해제"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "강력한 광역 이니시(Kennen, Wukong, Malphite, Yasuo) 상대: 팀 전체 보호막"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "긴 교전에서 팀을 회복시키는 포크-디스인게이지 조합 상대"
    - dd_id: "3107"
      name: "Redemption"
      against: "공성과 5v5 오브젝트 한타(드레이크 핏, 바론 핏)에서 힐 프리캐스트"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "백라인을 다이브하는 암살자(Zed, Akali, Talon) 상대: 정지로 시간 벌기"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "EW 속박이나 EE 끌어오기를 적중시키고 QW나 QQ로 패시브 서명을 폭발시킨 뒤, 묶인 대상에게 Spiraling Despair를 사용한다. 라인전 종료 전 반복 픽으로 봇 라인을 스노우볼링한다."
  weakness: "모든 스킬이 스킬샷이라 E를 빗나가면 후속도 도주도 없다. 흐웨이는 대시가 없고 기동력이 매우 낮아, 적 서폿의 단 한 번 이니시에도 자리를 잃는다."
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
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Aery는 Q에 포크, WW에 보호막 보너스로 두 역할을 한다. Manaflow Band는 3연 스킬 콤보의 마나 비용을 받쳐주고, Transcendence는 EW가 매 웨이브 돌아오게 ability haste를 쌓고, Scorch는 저체력 마무리를 책임진다."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery는 약한 라인 지속력을 보완하고, Cosmic Insight는 Flash와 액티브 아이템(Mikael, Locket) 쿨다운을 줄여 한타에서 피킬 윈도우를 늘린다."
    secondary_alternative: "백라인을 다이브하는 풀 이니시 조합(Leona, Rakan, Nautilus) 상대로는 Inspiration 대신 Resolve로 Bone Plating(초기 버스트 -30~-60 피해)와 Revitalize(보호막·힐 +10%)를 채택해 쿨다운보다 생존력을 우선한다."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "하드 CC 없는 인챈터 서폿"
      reason: "긴 EW 시야+속박 셋업을 처벌할 수단이 없다. 포크 사거리를 압도하며, ADC를 보호막 씌우려 다가올 때 QW 지연 번개가 적중한다."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "대시 없는 부동 ADC"
      reason: "채널을 끊을 갭클로저가 없어 EW 속박과 EE 끌기가 깔끔히 들어간다. 표식이 깔린 뒤엔 패시브 서명과 R로 처치를 마무리한다."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "도주기 없는 스킬샷 메이지 서폿"
      reason: "QQ와 QW로 포크 사거리를 맞추면서도 그들에게 없는 하드 CC를 가진다. E 한 번을 처치로 전환할 수 있으니 긴 라인전이 길어질수록 유리하다."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "후크와 락다운형 이니시 서폿"
      reason: "포인트앤클릭이나 후크 이니시가 EW 채널을 끝내기 전에 들어온다. 한 번 묶이면 흐웨이는 대시가 없어 도망갈 수 없고, E 미스는 곧 무력함이다."
    - examples: ["pyke", "rell"]
      archetype: "로밍·갭클로즈 이니시"
      reason: "흐웨이가 스킬샷을 박을 거리를 좁힌다. Pyke의 은신은 EW 시야를 무효화하고(눈을 둘 위치를 못 본다), Rell의 W 도약은 QE 둔화 지대를 그냥 뛰어넘는다."
    - examples: ["alistar", "rakan"]
      archetype: "대시·에어본 탱커"
      reason: "대시와 광역 띄우기가 시전 중 스킬 시퀀스를 끊는다. 흐웨이는 대상을 묶으려면 세 번의 키 입력이 필요한데, Alistar W-Q 한 번이 그 윈도우를 지운다."
---

## 개요

흐웨이 서폿은 부동의 봇 라인을 손쉬운 처치로 바꾸는 초장거리 픽 메이지다. 키트는 세 갈래의 서브스킬 트리로 짜여 있다. 피해는 **Q (Subject: Disaster)**, 유틸리티는 **W (Subject: Serenity)**, 군중 제어는 **E (Subject: Torment)**다. 서폿으로서 두드러지는 도구는 **EW (Gaze of the Abyss)** — 시야 눈에 들어선 첫 적을 묶는 지연 추적 속박 — 와 **EE (Crushing Maw)** — 적을 중앙으로 끌고 빠져나갈 때 둔화시키는 입 지대다. 둘 중 어느 쪽이라도 **패시브 (Signature of the Visionary)**의 시동이 되며, 두 번째 스킬 적중에 마법 광역 피해로 터진다. 흐웨이 사거리는 메이지급(대부분 캐스트에서 약 900–1100 유닛)이라 봇 라인은 근접 거리가 아닌 포크 거리에서 전개된다.

게임 플랜은 "E 한 번 적중, 트레이드 승리"다. 웨이브 충돌 직전 적 ADC 동선 앞에 **EW**를 깔고, **QQ** 또는 **QW**로 패시브를 시동한 뒤, 묶인 대상에 **R (Spiraling Despair)**을 이어 붙여 둔화가 누적되는 사이 내 ADC가 들어와 처치를 마무리한다. 핵심 전제는 포지셔닝이다. 모든 스킬이 거리 기반 스킬샷이고 대시도 없으니, 사거리 밖에서 잡히는 단 한 번의 적 이니시가 사망 선고다. 옆이 아니라 ADC 뒤에 선다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (중반에 Bloodsong / Solstice Sleigh / Dream-Maker로 성장하는 새 서폿 퀘스트 아이템)와 Health Potions 2개. 장신구 슬롯엔 Stealth Ward.

**핵심 아이템 (순서):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 퀘스트 서폿 아이템. ADC 옆에 머무는 동안 골드 수급. 약 12–14분에 완성 서폿 아이템으로 자동 업그레이드.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — 픽 플레이의 엔진. 키트의 모든 둔화·속박이 Mandate 표식을 시동시키고, 내 ADC가 추가 마법 피해로 터트린다. 흐웨이는 QE, EE, R에 둔화를 가져 매 교전 발동이 사실상 보장된다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. QQ와 패시브 서명이 적 백라인의 물몸을 뚫는다.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — 시동 후 폭발한 패시브가 매번 Helia 스택을 발동, ADC를 회복시키고 대상을 태운다. Mandate와 짝지으면 묶인 적마다 이중 효과를 본다.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 버스트와 35% 체력 미만 구간의 마법 관통 스파이크(저체력 적을 마무리하는 그 순간). 깎인 대상에 R 폭발이 겹친다.

**상황별 아이템:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ADC를 노리는 하드 CC(Leona, Morgana, Nautilus) 상대. 적이 캐리를 한 방에 잡으려 쓰는 락다운을 해제한다.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 강력한 광역 이니시(Kennen, Wukong, Malphite, Yasuo) 상대. 백라인 사거리로 피할 수 없는 강제 한타에서 팀 전체 보호막을 깐다.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 적이 포크-디스인게이지 조합이고 E를 적중시키기보다 긴 교전에서 팀 체력 유지를 더 자주 해야 한다면 완성 서폿 아이템 자리에서 Imperial Mandate를 대체.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 백라인을 다이브하는 암살자(Zed, Akali, Talon) 상대. 정지로 시간을 벌어 ADC가 자리를 옮기는 동안 이니시를 견딘다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 팀이 긴 교전에서 CC 연계를 의지한다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste로 매 교전 EW가 돌아온다.

**스킬 마스터 순서:** **E** 우선(주 락다운원: EW 속박, EE 끌기, EQ 도주), **W** 두 번째(보호막, MS, 세 구체 강화), **Q** 마지막(AP 계수가 있지만 빌드 슬롯이 서폿 아이템이고 순수 AP가 아니라 쿨다운 감소 가치가 덜 중요). **R**는 6, 11, 16레벨에 찍는다.

**룬:** 주 **Sorcery**에 **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 **Inspiration**에 **Biscuit Delivery**와 **Cosmic Insight**. 적 봇이 하드 이니시(Leona, Rakan, Nautilus)일 땐 Inspiration을 **Resolve**의 **Bone Plating** + **Revitalize**로 교체 — 첫 스킬이 트레이드를 결정짓는 상황에선 액티브 쿨다운보다 생존력이 중요하다.

## 주요 매치업

- **Leona / Nautilus:** 이니시 위협. 후크/Q 사거리 밖에 서고 라인전에서 **Flash**를 절대 공격적으로 쓰지 않는다. **EW**는 포크 셋업이 아니라 ADC를 노리고 다가올 때 쓰는 피킬용 속박으로 아껴둔다. 적이 점멸로 들어오면 **EE** 끌기로 캐리에게서 떼어낼 수 있다.
- **Lulu:** 호각. 그녀는 보호막과 디스인게이지로 **EW**를 받아내지만 포크 사거리는 네가 앞선다. 그녀가 ADC에게 **W**를 걸려 사거리 안으로 들어올 때를 기다려, ADC가 아닌 그녀를 속박하라 — 보호막 씌워진 Lulu가 속박당하면 내 ADC의 처치 확정 셋업이다.
- **Soraka:** 흐웨이 우세. 낮은 기본 이동 속도와 기동력 부재 때문에 **EW**가 거의 매 캐스트 적중한다. 웨이브를 먼저 밀고, 매 쿨마다 **EW + R** 콤보를 그녀에게 — 답이 없다.
- **Pyke:** 어려운 매치. 은신이 **EW** 눈을 묶기 위한 시야를 지운다. 화면에 안 보이면 눈은 아무 일도 안 한다. 핑크 와드(Stealth Ward 후 Oracle Lens)를 사고 부쉬를 비춰둔다. **EE**는 포크가 아닌, 그의 후크가 들어왔을 때의 피킬용 끌기로 아껴둔다.
- **Xerath / Vel'Koz:** 장거리 메이지 서폿 거울. 그들의 포크가 사거리에서 맞먹지만 너에겐 그들에게 없는 하드 CC가 있다. **EW**가 한 번 들어가면 속박 상태에선 **QW** 지연 번개를 피할 수 없어 라인전이 끝난다. 6레벨 이전, 그들의 **R**가 스케일하기 전에 공격적으로 트레이드한다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **E** 한 포인트와 **W** 한 포인트로 락다운과 보호막 풀을 함께 갖춘다. **EW** 한 번 적중과 ADC의 스파이크면 적 서폿이 라인을 길게 늘어뜨릴 때 처치하기 충분하다.
- **6레벨:** 첫 **Spiraling Despair**가 모든 처치 셋업을 연다. R는 첫 피격 챔피언에 들러붙어 주변을 둔화시키고, **EE** 끌기와 결합하면 3–4초간 "걸어다닐 수 없는" 구역을 만든다.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate 완성 (~ 12–14분):** 봇 라인 스노우볼 시점. 시동된 패시브와 Mandate 폭발의 한 사이클이 적 ADC 체력 막대를 지운다. 이때 미드와 합류해 드레이크 한타.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia 가동 (~ 18–22분):** 소규모 교전에서 2-대-0 트레이드가 시작된다. ADC에게 들어가는 Helia 회복이 적 피해를 능가하고 화상이 사거리를 늘리기 때문이다. 적이 바론을 위해 모이기 전 강 주변에서 픽을 강요할 윈도우.

## 흔한 실수

- **셋업 없이 Q 던지기.** 장거리에서 맨 **QW** 포크는 매력적으로 보이지만, 번개는 이동 중인 대상에게 감소된 피해만 들어간다. **EW** 속박부터 적중시키고 **QW**를 이어붙여 고립/속박 대상에 보너스 피해를 — 수치가 세 배가 된다.
- **EW를 포크 스킬로 쓰기.** EW는 처치 셋업이다. 칩 피해로 난사하기보다 한 교전당 정해진 한 순간에 아껴 쓰는 편이 더 많은 게임을 이긴다. 쿨다운이 길어 미스 한 번이 치명적이다.
- **ADC 옆에 서기.** 흐웨이는 대시가 없다. 적 서폿이 ADC에게 들어오는데 너도 근접 거리라면 둘 다 죽는다. 200–300 유닛 뒤에 자리잡아 — 한 명을 묶는 이니시가 들어와도 다른 한 명에겐 피해주거나 빠질 공간이 남는다.
- **W 트리 잊기.** 많은 흐웨이 유저가 순수 픽 메이지로만 굴리며 **WW** 보호막과 **WE** 구체를 무시한다. 한타 중반엔 ADC 평타에 **WE**로 강화를 거는 편이 자기 키트의 세 번째 피해 스킬보다 더 가치 있다. 키트의 양쪽을 다 쓴다.
- **시야 없는 사이드 라인 진입.** 키트는 EW 적중과 맵을 가로지르는 R 사용을 위해 시야가 필요하다. 모든 로밍 전에 삼거리 부쉬와 강에 와드를 박아라 — 라인을 벗어나는 순간 사거리 우위는 시야 없이는 사라진다.

## 고급 팁

**EW + EE 의사 콤보**는 흐웨이 키트에서 가장 가치 높은 셋업이지만 기초 가이드엔 거의 등장하지 않는다. 적이 라스트 힛을 위해 걸어야 하는 길에 **EW**(눈)를 깐다. 잠금이 걸리기 전 몇 초간 지면에 머문다. 이어 **EE**(끌어당기는 입)를 시전해 적을 눈의 잠금 반경을 통과해 끌어당긴다 — **EE** 자체를 피하려 했더라도 적이 들어선 순간 눈이 자동으로 추적 속박을 발사한다. 끌기는 회피 불가가 되고, 속박은 보장되며, **R**과 패시브가 풀체력 물몸 처치를 마무리한다. 윈도우는 좁다(캐스트 사이 약 1초)지만, 한 교전에서 두 번 성공하면 게임을 끝낸다.
