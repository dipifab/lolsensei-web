---
title: "Elise Support Build & Guide — Patch 16.9"
slug: "elise-support"
language: "ko"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Elise 서포터 공략. Cocoon 이니시 각도, Bloodsong 빌드 패스, 핵심 매치업, 파워 스파이크, 마지막 고급 팁까지 한 번에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "두 형태. Human: 적중하는 ability마다 잠든 Spiderling을 저장. Spider: 평타가 추가 마법 피해를 주고 Elise를 회복시킨다."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: 현재 체력 비례 단일 poke (탱커 카운터). Spider: 잃은 체력 비례 도약 (저체력 적 처형)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: 앞으로 걸어가 적 근처에서 폭발하는 Spiderling 투척 (슬로우 + 광역 피해). Spider: Elise와 펫이 공격속도를 얻어 지속 DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: 직선 skillshot으로 첫 적을 stun. 핵심 이니시 도구. Spider: Rappel — 짧은 무적 부양 후 대상 위로 추가 피해 낙하."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Human (원거리 caster)와 Spider (이속·새끼거미 보유 근접 skirmisher)를 전환하는 토글 궁극기. 쿨다운 없이 자유 전환."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R) — spell shield로 한 번 막고 cocoon 재시도 가능"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 hard CC 상대 (스턴, 에어본) — tenacity (CC 지속시간 감소) 신발 교체"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "광역 burst 조합 상대 (Yasuo + Malphite, Orianna 대형 한타) — 액티브가 팀 전체 보호막"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "데스 0에 킬/어시 10+ 차이 앞설 때만 — 스노우볼을 순수 AP로 전환"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "fog of war에서 E cocoon으로 이니시해 ADC의 all-in을 열어준다. 후반에는 Aftershock과 Liandry's Torment burst 윈도우에 적 캐리를 stun시켜 영향력을 유지한다."
  weakness: "cocoon 명중 여부에 모든 게 달림: 빗나가면 escape 없는 melee range에 그대로 노출. cast 전에 잡아채는 hook 서포터에게 사거리에서 진다."
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Resolve: Aftershock은 cocoon stun에 발동돼 armor + MR과 광역 충격파를 준다 — 근접 이니시 이후 생존 윈도우. Font of Life는 cocoon마다 ADC 회복, Bone Plating은 초반 all-in 완충, Revitalize는 회복·보호막 증폭."
    secondary_rationale: "보조 트리 Sorcery: Manaflow Band로 라인전 마나 유지(cocoon 시전당 50-90 마나), Transcendence로 Ability Haste 40% 이상까지 끌어올려 장기전에서 cocoon 재사용을 빠르게 한다."
    secondary_alternative: "poke나 강한 all-in 라인(Lucian + Nami, Draven + Thresh) 상대로는 Sorcery 대신 Inspiration의 Magical Footwear (8304, 10분 무료 신발)와 Cosmic Insight (8347, 소환사 주문 쿨감); Flash 가동률이 늘어 빗나간 이니시를 살린다."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "tenacity 없는 squishy enchanter 서포터"
      reason: "긴 cocoon stun이 그들의 utility 키트를 무력화한다. Flash 같은 escape이 없고, Liandry's Torment 화상(수 초간 누적)이 보호막과 회복을 응징한다."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "dash 없는 부동 원거리 캐리"
      reason: "수풀에서 cocoon으로 무방비 상태로 잡아낸다. stun 이후 3레벨 W (슬로우) + Q (체력 비례) + ADC burst가 Flash가 답을 내기 전에 처치한다."
    - examples: ["draven", "samira"]
      archetype: "킬을 위해 앞으로 나서는 공격적 캐리"
      reason: "킬 압박이 그들을 wave 균형(safe lane line) 너머로 밀어낸다. cocoon은 한 발짝 들어온 순간을 응징하고, Aftershock은 그들의 all-in (전면 commit trade)을 뒤집는다."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "cocoon보다 사거리가 긴 hook 서포터"
      reason: "Blitzcrank의 hook 사거리(~1100)는 E 시전 사거리(1075)보다 길다. 그쪽이 먼저 이니시해 너의 이니시 도구를 지우고, escape 없는 Spider form 근접 상태로 만든다."
    - examples: ["sivir", "morgana"]
      archetype: "cocoon을 막는 spell shield"
      reason: "Spell Shield 한 번이 너의 stun을 통째로 먹어버린다. cocoon이 없으면 setup이 없고, 팀의 follow-up은 쿨이 돌 때까지 멈춘다."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "point-and-click CC를 가진 탱키 이니시 서포터"
      reason: "그들의 이니시는 지정형(피할 skillshot 없음). 너가 잡아둘 수 있는 시간보다 더 오래 ADC에게 붙고, 너의 마법 피해는 그들의 armor를 뚫지 못한다."
---

## 개요

> **약어 정리 (한 번만 읽기):** **ADC** = Attack Damage Carry, 물리 피해를 담당하는 봇 라이너 (Caitlyn, Jinx). **AP** = Ability Power, 마법 스킬을 강화하는 스탯. **MR** = Magic Resist, 마법 방어력. **CS** = Creep Score, 처치한 미니언 수. **CC** = Crowd Control, 챔피언을 멈추는 모든 효과 (스턴, 슬로우). **Engage** = 싸움 시작. **Disengage** = 이탈. **Trade** = 짧은 피해 교환. **All-in** = 전면 commit. **Peel** = 자기 캐리 보호. **Kite** = 공격하면서 뒤로 빠지기.

Elise 서포터는 이니시-메이지 하이브리드다: 수풀이나 fog of war (와드가 없는 맵 영역)에서 **Cocoon (E)** 로 적 캐리를 root시킨 뒤, **Spider Form (R)** 로 commit해 후속 피해와 **Rappel** 무적 disengage까지 이어간다. enchanter의 안전성을 포기하는 대신 강한 킬 압박을 가진다 — 3-6레벨 사이의 모든 cocoon 적중은 킬 또는 Flash 소진으로 이어져야 한다. 그녀의 약점은 강점의 뒷면이다: cocoon이 빗나가면 의지할 이니시도, 회복도 없다.

게임 플랜은 처음 6레벨 동안 봇 라인을 압박하고, 12-14분까지 Bloodsong과 **Sorcerer's Shoes**를 마치고, **Spider Form** 이속 부스트로 미드에 로밍하는 것이다. 후반에는 역할이 바뀐다: 측면 암살자가 되어 적 캐리의 위치 실수를 기다리고, 측면 각도에서 cocoon을 던져 팀이 마무리하게 한다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (서포터 퀘스트 아이템: 직접 last-hit하지 않는 한 시간이 지날수록 서포터 골드를 준다) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개.

**코어 아이템 (구매 순서):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 서포터 퀘스트 라인 최종 업그레이드 (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). AP 변형: 챔피언 대상 4번째 평타마다 추가 마법 피해. 다이브 중 Spider form의 빠른 평타와 자연스럽게 시너지.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. 서포터는 미드 라이너보다 골드가 적기 때문에, 초반엔 순수 AP보다 관통력이 효율적이다.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 대형 AP 아이템. HP 비례 화상 (대상 최대 체력 비례, 수 초에 걸쳐 누적되는 피해)이 cocoon stun을 흡수하려는 탱키 전열을 응징한다.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 모든 ability에 슬로우. **W**를 추격기로 바꾸고, cocoon stun과 시너지를 이뤄 후속 적중 신뢰도를 높인다.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 생존 아이템. melee range에서 이니시한 뒤, 액티브가 2.5초 stasis (이동·피격·지정 불가)를 줘 팀이 정리할 시간을 번다.

**상황별 아이템:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 강한 hard CC가 많을 때 신발 교체.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 광역 burst 조합 상대 (Yasuo + Malphite 콤보, Orianna 대형 한타).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — 데스 0에 킬/어시 10+ 차이로 앞설 때만. 스택 잃을 위험은 실재한다; 밀릴 때는 사지 마라.

**신발:** 기본은 Sorcerer's Shoes. 적 팀에 hard CC 출처가 셋 이상이면 Mercury's Treads.

**스킬 마스터 순서:** **E** 선마 (cocoon stun이 너의 일), **Q** 후마 (피해), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**에 **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**.

## 주요 매치업

- **Blitzcrank:** 최악의 라인 매치업. 그의 Q는 너의 E보다 ~25 단위 사거리가 길다. ADC 뒤에 서고, cocoon을 던지러 절대 앞으로 나서지 마라 — commit하는 순간 잡힌다.
- **Thresh:** 살아남을 수는 있지만 거의 못 이기는 hook 대결. 그의 Q가 빗나가길 기다린 뒤, 회복 윈도우에 앞으로 나가 cocoon을 박는다. 그가 ADC에 이니시할 때 lantern 호 안으로 들어가지 마라.
- **Soraka:** 공짜 라인. 그녀의 침묵은 단거리고 회복은 cocoon으로 끊을 수 있다. 마나 가득 찬 3레벨에 이니시 — trade가 그녀의 회복보다 빨리 체력을 깎는다.
- **Leona:** all-in은 그녀가 이기지만 poke 전쟁은 진다. cocoon 최대 사거리에 서서 그녀의 **W** (Eclipse) 시전 모션을 E로 끊고 후퇴. cocoon을 먼저 박지 못하면 commit하지 마라.
- **Sivir:** 그녀의 **E** (Spell Shield)는 cocoon을 완전히 막는다. **W** spiderling을 먼저 던져 shield를 빼낸다; W를 shield로 막은 직후엔 shield 쿨다운 동안 (~12초) 너의 cocoon이 깨끗이 들어간다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **E** + **Q** 만으로 all-in 셋업이 완성. 근접 서포터 상대로 2레벨을 먼저 찍고 첫 cocoon이 들어가는 순간 이니시.
- **6레벨:** 첫 **Spider Form (R)**. disengage·재이니시 잠재력이 두 배가 된다; Rappel을 재포지셔닝 도구 삼아 저체력 적을 타워 다이브할 수 있다.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 13-15분):** 로밍 윈도우. 너의 wave가 적 타워에 밀려 있다면 미드로 가서 3v2를 노린다. **Cocoon (E)** 로 미드 저격 + **Spider Q** 마무리는 squishy 미드 라이너 거의 모두를 잡아낸다.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment 완성 (~ 18-20분):** 한타 준비 완료. 이제 측면 수풀로 후열을 측면 진입한다; 적 ADC에 cocoon, **Aftershock** 발동, 팀이 정리.

## 흔한 실수

- **E cocoon을 poke로 던지기.** Elise 정글과 같은 규칙이다: cocoon은 이니시지 견제가 아니다. 캐리가 앞으로 나오기를 기다려라; 빗나간 cocoon은 12초간 무방비를 의미한다.
- **라인에서 미니언 평타치기.** 서포터 아이템은 미니언 CS를 응징한다 — last-hit은 World Atlas 골드 수입을 끊고 ADC를 굶긴다. **W**를 wave에 쓰는 건 다음 wave가 되돌아오는 순간뿐.
- **ADC의 후속 없이 이니시.** cocoon 방아쇠를 당기기 전에 ADC의 마나바와 쿨다운을 슬쩍 본다. 마나가 비었거나 **Flash**가 없다면 이니시하지 마라; 잘해야 1대1 trade다.
- **귀환할 때마다 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) 와드 사는 걸 잊기.** 서포터로서 시야 설치는 너의 일이다. 강 수풀 와드는 정글러의 이니시 각도를 통제한다. 오브젝트 전 적 와드를 청소할 땐 ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens.
- **escape 없을 때 R로 다이브.** Spider form엔 자체 escape이 없다. **Flash**와 **Rappel**이 둘 다 쿨이라면 타워 다이브 commit 금지; 적 ADC가 너를 kite (공격하며 뒤로 빠지기)하다 타워에 죽인다.

## 고급 팁

전투 시작 전 시야로 cocoon 각도를 미리 짠다. 측면 수풀에 박은 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** 한 개가 공짜 이니시 각을 만든다: fog에서 수풀로 들어가 적 ADC가 last-hit하러 한 발 나오는 사이 cocoon, 이어서 **Spider R** + Rappel drop. cocoon이 들어가는 순간까지 적 시점에선 모든 시퀀스가 보이지 않는다. Elise 서포터가 칠 수 있는 가장 큰 영향력의 플레이지만, 저티어 Elise들은 준비된 각이 아니라 그냥 라인에서 곧장 이니시하기 때문에 대부분 이걸 무시한다.
