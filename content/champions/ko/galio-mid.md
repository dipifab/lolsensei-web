---
title: "Galio Mid Build & Guide — Patch 16.9"
slug: "galio-mid"
language: "ko"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Galio 미드 가이드. 시작 아이템, AP-탱커 빌드, 핵심 매치업, 파워 스파이크, 라인전과 한타에서 자주 하는 실수, W 차징 타이밍과 E 백라인 픽 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "수 초마다 Galio의 다음 평타가 적중 시 작은 범위에 추가 마법 피해를 입힌다."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "두 개의 바람이 지정 지점에서 토네이도로 모여 시간당 마법 피해를 입힌다. 핵심 라인 정리 및 poke 도구."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "마법 피해를 흡수하는 보호막을 충전. 해제 시 주변 적을 도발하고 피해를 입힌다. 차징이 길어 빈 발사는 금물."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "잠시 뒤로 물러난 뒤 앞으로 돌진. 처음 적중한 적 챔피언을 공중에 띄운다. 주력 engage 및 거리 좁히기."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "아군을 지정. 짧은 지연 후 그 위치로 내려찍어 범위 내 아군에게 보호막, 적은 공중에 띄운다."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "체력 누적형 frontline 상대 (Cho'Gath, Sion, Dr. Mundo 등 탱커 둘 이상) — % 화상 피해가 장기전에서 불어남"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "초반 스노우볼 시 (12분 전 3킬 이상) — 스택당 저렴한 AP로 공격적 engage 보상"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "우선순위 타겟이 마저 아이템 구입 시 즉시 교체; Sorcerer's Shoes와 함께 혼합 관통"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "engage 후 후속타로 킬 압박하는 암살자 상대 (Zed, Talon) — stasis로 R 후 쿨타임 커버"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "W 차징 중 끊는 단일 마법 CC 상대 (Malzahar 속박, Lissandra R, Twisted Fate 황카)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Riftmaker 완성 이후 미드에서 Hero's Entrance R로 사이드 라인 교전과 Drake skirmish를 뒤집는다. 한타에서는 E로 백라인에 진입하고, W 도발을 풀어 frontline이 lockdown된 타겟을 무너뜨리게 한다."
  weakness: "W는 차징이 길고(1.5초) E는 짧은 후퇴 모션이 있어 둘 다 끊을 수 있다. 기동성 좋은 암살자와 DOT 마법 poke는 W 보호막을 우회하는데, W는 burst만 흡수하지 지속 틱 피해는 막지 못한다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Resolve: Aftershock은 W 도발이나 R 띄우기에 발동하여, 상대 팀이 너를 집중 공격할 때 방어력 폭발을 준다. Shield Bash는 W 보호막을 추가 평타 피해로 변환하고, Bone Plating은 첫 burst를 흡수하며, Unflinching은 인내력으로 engage 중 CC에 묶이지 않게 한다."
    secondary_rationale: "보조 트리 Sorcery: Manaflow Band로 라인전 Q 토네이도 난사용 마나를 유지(Galio는 Riftmaker 전 마나 부담이 크다), Transcendence로 Ability Haste를 끌어올려 교전 사이 Q와 E 쿨이 빨리 돌아온다."
    secondary_alternative: "마나 지속전 매치업(Cassiopeia, Cho'Gath)에서 라인이 체력 stat-war일 때, Sorcery 대신 Inspiration의 Biscuit Delivery(6레벨 무료 체력·마나 보충)와 Cosmic Insight(점멸 쿨감, R+점멸 콤보로 catch potential 강화)로 교체."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "이동기 없는 포격형 mage"
      reason: "Galio E 띄우기로 그들이 의존하는 사거리 우위를 무너뜨리고, W는 Lux R이나 Veigar R 같은 긴 쿨다운 스킬의 burst를 흡수한다."
    - examples: ["ahri", "syndra"]
      archetype: "지속력 없는 중거리 burst mage"
      reason: "W 마법 보호막이 그들 콤보 피해의 대부분을 잘라내고, burst가 쿨에 들어가면 AP-탱커 프레임을 상대로 듀얼이 안 된다."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "R로 닿을 수 있는 이동기 없는 봇 캐리"
      reason: "Hero's Entrance는 아군 위에 떨어진다; 이동기 없는 ADC는 띄우기를 피할 수 없고 봇이 합류하면 킬이 난다."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "다중 이동기를 가진 단거리 암살자"
      reason: "Akali 연막은 W 타겟팅을 깨고, Zed/Fizz의 dash 연계는 W가 차징을 끝내기 전에 trade를 끝낸다 — Galio의 최고 CC는 그들이 앞서가는 느린 tell 위에 있다."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "DOT 마법 피해와 지정형 lockdown"
      reason: "W 보호막은 burst를 흡수할 뿐 지속 틱 피해는 막지 못한다; Malzahar R 속박이 W 차징 중인 Galio를 묶어 engage 도구 전체를 무력화시킨다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 사용자"
      reason: "Yasuo의 Wind Wall이 Galio Q 바람을 완전히 차단하여, 라인전 유일한 원거리 압박 도구를 제거한다."
---

## 개요

Galio는 탱커 stat 스케일링을 가진 AP(ability power, 마법 피해) battlemage다 — AP와 체력 모두로 강해진다. 적 팀을 끊고, 그들이 너의 frontline(앞에 서는 탱커/브루저)에 던지는 마법 피해를 흡수하도록 설계됐다. 그의 스킬셋은 짧지만 강력하다: **Winds of War (Q)**는 라인 정리와 poke(원거리 깎기) 용, **Shield of Durand (W)**는 차징형 도발(잠시 적이 너를 공격하게 강제)이자 마법 보호막, **Justice Punch (E)**는 dash 경로의 첫 적 챔피언을 띄우는(짧은 스턴처럼 공중에 잠깐 던짐) 핵심 engage, **Hero's Entrance (R)**는 아군 위로 점프하여 띄우기와 보호막을 동시에 거는 궁극기다. 미드를 가는 이유는 R 로테이션으로 모든 라인을 위협할 중앙 포지션이 필요하기 때문이다.

게임 플랜은 6레벨까지 인내, 이후 폭발이다. Q로 라인을 밀고, E는 카운터 engage용이나 자기 갱크의 거리 좁히기용으로 아낀다. R이 켜지면 사이드 라인을 주시하라 — 봇이든 탑이든 모든 교전이 너의 사거리 안이다. 스킬 표현력은 W 차징 타이밍(주요 채널링 차단용으로 해제 — Katarina R, Karthus R, Master Yi Q)과 E 조준(dash는 경로의 **첫 번째** 챔피언만 맞히므로, 사이드 부쉬를 통해 백라인 타겟을 픽할 수 있음)에 있다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**은 마나 부족으로 일찍 귀환을 강요하는 근접 Q-스패머 상대일 때만 픽.

**핵심 아이템 (순서):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 첫 슬롯. AP, 체력, ability haste(모든 스킬 쿨감), 그리고 omnivamp 램프(가하는 피해의 일부를 회복, 전투가 길어질수록 증가)를 제공하여 장기전을 self-sustain으로 바꾼다. Galio의 W 도발이 여러 타겟을 자기에게 강제 공격시켜 omnivamp를 채운다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(적의 마법 저항에서 일정 수치를 깎아 스킬이 더 세게 들어감). 적 팀이 3+ AD 위협(물리 피해 챔피언)이 아니면 기본; 그 경우 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 교체.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — Q 매 틱마다 둔화. Riftmaker와 결합하여 적 팀이 도발 사거리에서 disengage 못 하게 막고, 체력으로 탱커 형태 유지.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 이동 속도와 ability haste. R로 직접 닿지 않는 백라인 타겟까지 거리를 좁히고, 한타 사이 Q/E 쿨을 낮춰 재engage 가능.

**상황 아이템:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 체력 누적 frontline 상대(Cho'Gath, Sion, Dr. Mundo 같은 탱커 둘 이상). Q 매 틱당 체력의 일정 % 화상.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — 초반 킬 우위가 있을 때만(스노우볼링 — 매 킬이 너를 더 강하게 만들어 다음 킬 가능성도 올림). 12분 전 3킬 이상이면 수학이 맞는다; 한 번 죽고 스택 잃으면 아이템이 낭비됨.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 우선 타겟이 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature**, 또는 fighter가 ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** 같은 마법 저항 아이템을 사는 순간 교체.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — engage 후 킬 압박 후속타가 있는 암살자 상대(Zed, Talon). Stasis로 W와 E가 빠진 쿨다운 창을 커버.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — W 차징 중 끊는 단일 마법 CC 상대(Malzahar 속박, Lissandra R, Twisted Fate 황카).

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. CC가 많은 조합(다수 스턴/속박/매혹)에는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, 평타 위주 조합(ADC 둘, Master Yi)에는 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.

**스킬 순서:** **Q** 마스터 우선(주력 피해와 라인 정리). **E** 두 번째(engage 쿨감). **W** 마지막 — 틱 피해와 보호막 양은 Q 랭크업에 비해 스케일이 약하다. **R**은 6, 11, 16레벨에 찍는다.

**룬:** 주문 **Resolve**에 **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**. 마나 지속전 라인에서는 보조를 **Inspiration**(Biscuit Delivery + Cosmic Insight)으로 교체.

## 주요 매치업

- **Akali:** 어려운 라인. 그녀의 연막(W)이 Galio W와 E의 타겟 락온을 풀어버린다. Q 최대 사거리에 머물고, ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**을 쇼핑 리스트에 두고, R로 로밍 — 사이드 라인 영향력에서는 그녀가 너를 따라올 수 없다.
- **Yasuo / Yone:** Wind Wall이 너의 Q 바람을 완전 차단. 그들이 벽을 미는 시점까지 Q를 아끼고, 올인 시 카운터 engage용으로 E 보유. 평타 창을 버티려고 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**를 일찍 간다.
- **Lux:** 유리. 그녀의 Q 속박을 통과해 E로 dash — 그녀의 쿨다운은 지속 trade에 너무 길고, W가 R poke 피해를 막아준다.
- **Cassiopeia:** 어려움. 그녀의 DOT 피해가 W의 burst 흡수를 우회한다. 6레벨 전 올인 시도 금물; Q로 타워 밑 farm하고 6레벨에 로밍 노린다.
- **Twisted Fate:** 로밍 우선권 경쟁. 그가 자신의 텔레포트로 너의 R 사거리에 맞먹는다. 라인 밀고, 그의 궁이 쿨에서 풀릴 때 봇/탑 핑, 자신의 로테이션을 먼저 시작하기보다 그의 로테이션을 카운터-R할 준비.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + W로 첫 올인 trade가 가능하다. 적이 Q 토네이도 위에 발을 딛는 순간 W를 차징하며 그 안으로 걸어 들어간다 — 도발이 평타를 너에게 강제하고 Q 틱이 마무리.
- **6레벨:** **Hero's Entrance**가 사이드 라인 영향력을 잠금 해제. 라인을 강하게 밀고, 봇 라인에 핑, 첫 Drake fight를 노린다.
- **Riftmaker 완성 (~12-14분):** Galio가 진짜 한타 조각이 된다. 여기서 오브젝트 fight를 강제 — R-W-E omnivamp가 적 팀의 첫 쿨다운 파도를 흡수하고 살아남게 해준다.
- **3아이템 스파이크 (~22-26분):** ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**, ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter**가 갖춰지면 토네이도 둔화와 E 띄우기가 너를 카이팅 못 하는 백라인에 1.5초 이상 CC를 사슬로 건다.

## 흔한 실수

- **타겟 없이 W 발사.** 도발은 해제 시점에 챔피언이 근접 사거리 안에 있어야만 발동한다. 빈 와드 위가 아니라 타겟을 *향해* 걸으면서 W를 차징하라.
- **팀이 후속타가 없는데 첫 engage로 R 사용.** Hero's Entrance는 띄우기를 주지만, 네가 착지할 때 팀이 포지셔닝 중이면 적은 그냥 걸어나간다. 아군 CC(Ashe R, Lulu Q, Pantheon Q)가 먼저 적중하기를 기다리고 그 위에 R.
- **6레벨 전 라인 정리 무시.** Galio Q는 미드에서 가장 긴 사거리의 AOE 라인 정리 도구 중 하나; 밀지 않는다는 건 R 로밍에 필요한 prio(라인 우위)를 양보하는 것이다.
- **W 두 번째 마스터.** 보호막 양은 랭크에 따라 늘지만 쿨다운은 거의 안 줄어든다. E 마스터로 13레벨에 4초 쿨 E를 얻어 engage 창이 직접 늘어난다.
- **탱커 없는 적 조합에 Riftmaker 첫 빌드.** 적이 4-AD(Yasuo + ADC 둘 + Talon)면 탱커 stat이 낭비된다. 대신 ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment**를 먼저 산다 — 화상이 그들 squishy 백라인을 압박한다.

## 고급 팁

E 띄우기는 dash 경로의 **첫 번째** 적 챔피언만 맞힌다 — 이걸 이용해 타겟을 픽한다. 적 frontline이 너와 그들 캐리 사이에 서 있으면, 사이드 부쉬를 돌거나 시야 밖에서 측면을 쳐서 E 라인이 캐리를 먼저 클립하게 만들고 frontline이 너의 반대편에 있게 한다. 같은 트릭이 R 착지 후에도 통한다: 띄우기가 끝나는 즉시 적 진형 뒤에서 E를 쏘면 그들 탱커가 회복 중일 때 백라인 타겟을 다시 띄울 수 있다.
