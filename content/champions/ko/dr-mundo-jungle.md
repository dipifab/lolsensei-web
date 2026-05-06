---
title: "Dr. Mundo Jungle Build & Guide — Patch 16.9"
slug: "dr-mundo-jungle"
language: "ko"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Dr. Mundo 정글 공략. Mosstomper 펫 정글 동선, 체력 누적형 탱커 빌드, 갱킹 타이밍, 주요 매치업, 파워 스파이크와 자주 하는 실수, 그리고 적 정글 측면 갱킹 같은 고급 운영 팁까지 한 장에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "첫 hard CC(스턴, 속박, 띄우기 등 행동을 잠그는 군중 제어)를 Mundo가 체력 비용만 내고 흡수하고 약병을 떨어뜨린다. 약병을 주우면 회복하고 패시브가 리셋된다. 또 거대한 체력 재생 보유."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "장거리 직선 skillshot으로 대상의 현재 체력 비율 마법 피해를 주고 슬로우. 마나가 아니라 체력을 소모 — 자원 바가 곧 체력 바. 6레벨 이전 갱킹 핵심 도구, 사거리 975."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "자기 자신에게 거는 채널링으로 주변 적에게 마법 피해를 틱으로 입히고 받은 피해 일부를 저장한다. 재시전 시 폭발 피해 — 챔피언에게 적중하면 저장 피해의 일정 % 회복. 정글 클리어 중에는 켜둬서 sustain 확보."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "패시브: 최대 체력에 비례하는 추가 AD. 액티브: 잃은 체력을 기준으로 추가 피해를 주는 근접 강타. 처치 시 시체를 경로상의 적에게 던진다. 갱킹용 단일 대상 피해 스파이크."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "자기 강화: 잃은 체력의 일정 %를 즉시 회복하고, 지속 시간 동안 이동 속도와 거대한 체력 재생을 얻는다. 갱킹 전, 교전 전, 죽기 전에 눌러야지 — 절대 죽은 다음에 누르지 마라."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "CC 3개 이상 또는 AP 위협 2명 이상 상대 시 Plated Steelcaps에서 교체. 패시브 첫 CC 면역을 다 쓴 뒤엔 tenacity가 살린다"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "30분 넘어가는 후반전 5번째·6번째 아이템. 패시브 체력 재생으로 캠프·로테이션 사이에 귀환 없이 풀피"
    - dd_id: "3075"
      name: "Thornmail"
      against: "평타 캐리 상대 (Vayne 봇, Tryndamere 탑, Master Yi 정글). 피해 반사와 평타 적중 시 Grievous Wounds 적용"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "원거리 마법사 2명 이상의 강한 AP 조합 상대 (Karthus + Brand, Lillia + Lux). 마법 피해에 MR과 이동 속도"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "단일 대상 AP 폭딜 상대 (Syndra 미드, Veigar, LeBlanc). spellshield(1회용 보호막)가 콤보 시작기를 무효화"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "4레벨까지 풀 클리어, 6레벨 R 해금 즉시 갱킹, 14분 이후 모든 Drake 교전을 체력 재생 우위로 전환. 25분쯤 Heartsteel + Warmog's가 갖춰지면 후방을 걸어 다니며 죽지 않는다."
  weakness: "3레벨 이전 클리어 느림, 인베이드 약함, 붙을 수단이 없는 원거리 조합에 카이팅당한다. 회복 절반 차감 아이템이 키트 전체를 무력화하고, 고정 피해(Fiora, 큰 Vayne) 앞에선 체력 벽이 녹는다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "주문 트리 Resolve: Grasp는 챔피언 전투 중 4초마다 공짜 체력을 적립 — 5초짜리 갱킹이면 2-3 스택. Font of Life는 Q 슬로우 대상을 표식해 라이너 회복 유도, Conditioning은 12분 이후 Armor/MR 스케일링, Overgrowth는 캠프를 영구 체력으로 전환."
    secondary_rationale: "보조 트리 Sorcery: Nimbus Cloak이 Flash 또는 Ghost(거리 좁히는 소환사 주문) 사용 후 이동 속도 burst를 주고, Gathering Storm은 10분마다 Adaptive Force 추가 — Mundo의 승리 조건은 후반이라 이 룬이 정확히 맞는다."
    secondary_alternative: "초반 견제형 정글러(Lee Sin, Elise, Xin Zhao) 상대에는 보조를 Inspiration으로 바꿔 Magical Footwear(10-12분 무료 강화 신발)와 Cosmic Insight(소환사 주문 쿨감)로 스케일링을 인베이드 생존 템포와 맞바꾼다."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "폭딜 암살자 정글러"
      reason: "이쪽의 피해 구조는 squishy 한 명에게 콤보 한 번 박는 것이 전부다. Mundo의 패시브가 첫 CC를 먹고, R이 잃은 체력의 일정 %를 회복하며, W가 폭딜 일부를 환급한다. 상대가 쿨다운을 다 쓰는 동안 Mundo는 거의 풀 체력으로 빠져나와 그쪽 캐리에 표식을 남긴다."
    - examples: ["karthus", "lillia"]
      archetype: "강력 진입기 없는 AP 견제·카이팅 정글러"
      reason: "Force of Nature와 Spirit Visage가 견제를 받을수록 Magic Resist를 누적시킨다. R 이동 속도와 Q의 현재 체력 비율 슬로우가 결국 거리를 좁히고, 방어템이 없는 그쪽은 E 한 방에 체력이 무너진다."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "상대 팀이 의존하는 평타 근접 캐리"
      reason: "Q 슬로우 + Plated Steelcaps가 평타 가동률을 봉쇄한다. Tryndamere R은 한 사이클을 사주지만, Thornmail + R을 갖춘 Mundo는 무적 시간을 버텨내고 반사 피해로 갉아낸다."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "고정 피해 견제형 챔피언"
      reason: "Fiora 급소, Vayne W, 후반 Kayle R이 모두 고정 피해(Armor와 Magic Resist를 무시 — 줄여줄 방어 스탯이 존재하지 않는 피해)다. 체력 누적은 고정 피해 앞에선 쓸모가 없고 빌드 전체가 붕괴한다."
    - examples: ["trundle", "olaf"]
      archetype: "탱커 카운터형 정글러"
      reason: "Trundle R이 8초 동안 Armor, MR, 이동 속도를 강탈한다. Olaf E는 Grievous Wounds를 적용하고 궁극기는 CC 면역이라 패시브가 발동조차 못 한다. 둘 다 탱커 스탯을 무력화하기 위해 설계된 챔피언이다."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "장거리 지속 견제 조합"
      reason: "Q 사거리 975 밖에 자리 잡고 모든 웨이브마다 Mundo의 체력을 갉아낸다. Mundo는 dash가 없고 R의 이동 속도 burst 한 번뿐이라 — 진입을 위협하려고 그들의 피해 안으로 걸어 들어가다 매 사이클 30% 체력만 흘리고 결국 거리도 못 좁힌다."
---

## 개요

Dr. Mundo 정글은 게임에서 가장 단순한 탱커 정글러다. 캠프를 정리하고, 6레벨을 찍고, 라인으로 걸어가서, 적이 무엇을 던지든 죽기를 거부하면 된다. 키트는 한 가지 일에 집중한다 — engage(적이 한타를 시작하기로 결정하는 순간, 보통 hard CC나 dash로 들어온다)를 흡수하기 — 그리고 세 가지 메커니즘으로 그 일을 해낸다. **Goes Where He Pleases (패시브)** 는 첫 hard CC(스턴, 속박, 띄우기 등 행동을 잠그는 효과)를 체력 비용으로 흡수하고 회복용 약병을 떨어뜨린다. **Heart Zapper (W)** 는 교전 중 받은 피해를 저장했다가 재시전 시 일부를 회복으로 환급한다. **Maximum Dosage (R)** 는 잃은 체력의 일정 %를 즉시 회복하고 지속 시간 동안 거대한 재생을 준다. 셋이 합쳐지면 Mundo는 어떤 한타에서도 가장 높은 실효 체력을 가진 챔피언이 된다 — 다만 자기 자신의 hard CC가 0이라 Q 슬로우와 팀 follow-up에 의존해야 한다는 trade-off가 있다.

게임 플랜은 템포를 의식한 farming이다. 3레벨 이전엔 Mundo의 클리어가 느리고 캠프에서 잃는 체력이 진짜로 아프다 — 인베이드도 가지 말고, 인베이드도 받지 마라. 4레벨까지 풀 클리어하고, Scuttle(처치 시 시야를 주는 강가의 게)을 다투고, 4-5분쯤 prio가 있는(prio = 적 쪽으로 라인을 밀어붙여서 라이너가 몇 초 자리를 비워도 미니언 손해가 없는 라인) 라인에서 첫 갱킹을 노린다. 6레벨부턴 R을 누를 때마다 킬, 오브젝트, 또는 살린 아군 중 하나로 환산되어야 한다. 14분부터 **Heartsteel** 과 **Sundered Sky** 가 갖춰지면 Mundo는 스탯만으로 모든 Drake 교전을 이긴다.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade는 근접 정글러용 스타터다 — 정글의 중립 몬스터(정글에서 farming하는 캠프)에 더 빠르게 피해를 주고, 적 챔피언을 평타로 때리면 짧은 슬로우를 입힌다. Refillable Potion은 본진에서 무료로 충전되는 회복 아이템이라 캠프 클리어의 깎이는 체력에 골드를 낭비하지 않는다.

**코어 아이템 (구매 순서):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — Hailblade의 퀘스트 업그레이드(캠프 처치로 충분한 XP를 얻으면 3-4분쯤 자동 진화). 탱커 펫 동반자가 챔피언과 비전투 상태에서는 추가 Armor와 MR을, 전투 중에는 tenacity(가해지는 스턴 지속 시간 감소)를 준다. 모든 탱커 정글러에게 필수 — 퀵 런 바에서 가장 먼저 보이는 아이콘이 어떤 스타터를 골랐는지 독자에게 말해준다.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 첫 큰 아이템. 어떤 교전에서든 챔피언에게 첫 평타가 무조건 치명타로 들어가며 회복도 같이 발동한다. 치명타 회복이 갱킹 패턴과 정확히 맞는다 — 진입, Q 슬로우, 평타 치명타 회복, E로 잃은 체력 강타. R의 재생과 합쳐지면 장기 견제전에 강하다.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 적 팀의 주된 피해가 평타일 때의 기본 신발. 장기전에서 들어오는 평타 피해를 줄여준다.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — 후반 스케일링 아이템. 챔피언에게 발동에 성공할 때마다 죽어도 사라지지 않는 영구 체력이 쌓인다. 30분쯤이면 8-12 스택을 쌓아 평탱 빌드 대비 실효 체력이 두 배가 된다.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — Magic Resist에 회복 증폭 패시브가 붙어 있어 **W** 폭발 회복, **R** 재생, Soraka나 Yuumi 같은 서포터의 아군 회복까지 같이 끌어올린다. 적 팀에 AP가 더 많은지 AD가 더 많은지에 따라 4번째나 5번째에 산다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 CC 출처가 3개 이상이거나 AP 챔피언이 2명 이상이면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 교체. tenacity(가해지는 스턴과 슬로우 지속 시간 감소 스탯)가 패시브의 첫 CC 면역을 다 쓴 다음에 유일하게 쓸모 있는 방어 수단이다.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — 30분을 넘긴 게임의 5번째나 6번째 아이템. 체력 임계값(보너스 체력 약 3000)을 넘기면 패시브가 비전투 4초 만에 풀피로 회복시켜줘서 귀환 없이 캠프 사이에 풀피를 채우게 된다.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 평타 캐리 상대(Vayne 봇, Tryndamere 탑, Master Yi 정글). 피해를 반사하고 평타 적중 시 **Grievous Wounds**(대상의 회복량을 절반으로 깎는 디버프)를 적용한다 — 큰 Tryndamere나 Vayne가 W 오라에서 받는 피해를 다시 회복하는 걸 막을 유일한 카운터다.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — AP 비중이 높은 조합 상대(Karthus + Brand, Lillia + Lux). 마법 피해를 받을수록 Magic Resist가 누적되고 이동 속도까지 추가로 주는데, Mundo가 둘 다 원하는 스탯이다.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 단일 대상 AP 폭딜(Syndra, Veigar, LeBlanc) 상대. spellshield(자신을 향한 다음 한 번의 스킬을 막는 1회용 보호막)가 콤보 시작기를 그대로 무효화하고 비전투 몇 초가 지나면 다시 충전된다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 연쇄 CC가 강하거나 AP 위주의 조성이면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 바꾼다.

**스킬 마스터 순서:** **Q** 선마(사거리, 슬로우, 현재 체력 비율 피해가 모두 레벨 당 스케일링 — 유일한 원거리 도구이자 갱킹 셋업의 중심). **E** 후마(잃은 체력 액티브가 보너스 AD에, 보너스 AD가 다시 최대 체력에 강하게 스케일링). **W**는 마지막 — 클리어 sustain용으론 1포인트면 충분. **R**은 6, 11, 16에 한 포인트씩.

**룬:** 주문 트리 **Resolve**의 **Grasp of the Undying** — 챔피언 전투 중 4초마다 다음 평타가 추가 마법 피해를 주고, 회복하고, 영구 체력을 적립한다. **Font of Life**(Q 슬로우 대상에 표식 — 라이너가 그 대상을 때리면 회복, 갱킹과 완벽 호환), **Conditioning**(12분 이후 Armor와 MR 추가), **Overgrowth**(주변 미니언이 죽을 때마다 체력 스케일링)와 함께 든다. 보조 **Sorcery**의 **Nimbus Cloak**(Flash나 Ghost 사용 후 이동 속도 burst)와 **Gathering Storm**(10분마다 Adaptive 스케일링). 능력치 파편: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## 주요 매치업

- **Lee Sin / Elise / Xin Zhao:** 약한 사이드를 인베이드하는 초반형 정글러. 자기 raptors와 red buff(자기 정글의 캠프) 위에 vision ward(약 90초 동안 작은 맵 영역을 드러내는 설치형 아이템)를 박아 추적한다. 3레벨 이전 1대1 인베이드는 피하라 — 이쪽 클리어는 느리고, Smite 데미지로 1대1 시도를 즉시 정리할 수단도 없다. 풀 클리어, Scuttle 다툼, 그 다음에 갱킹을 시작한다.
- **Master Yi / Karthus:** 스케일링 정글러. 아이템당 스케일링은 거의 같지만 그쪽이 파워 스파이크를 먼저 친다(Yi는 공격 속도와 흡혈 아이템 Blade of the Ruined King에서, Karthus는 화상 피해 AP 아이템 Liandry's Torment에서). 18분 이전에 한타와 오브젝트(봇 사이드의 Drake, 탑 사이드의 Rift Herald — 처치 시 팀 전체에 버프와 골드를 주는 중립 몬스터)를 강제하고 라인 갱킹을 끊임없이(갱킹 = 정글러가 라인에 깜짝 방문해 킬을 만드는 행위) 보내 그쪽의 farming 창을 막아라.
- **Trundle:** 직접적인 hard counter. R(Subjugate)이 8초 동안 Armor, MR, 이동 속도를 훔쳐가는데 — 정확히 Mundo의 최고 스탯 세 개다. 솔로 견제전은 피하고, 2초 안에 follow-up이 되는 아군이 있을 때만 싸운다. ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail**을 가서 그쪽 Q의 흡혈에 Grievous Wounds를 박는다.
- **Hecarim / Volibear:** 진입형 탱커 거울 매치. 먼저 CC를 박는 쪽이 trade를 이긴다. 그쪽이 commit한 다음에 쓰려고 **패시브**를 아껴라(Hecarim E 넉백, Volibear Q 넉백). 첫 CC를 공짜로 먹고 나면 follow-up 단계에서 sustain 차이로 이긴다.
- **Kha'Zix / Rengar:** 폭딜 중심 암살자 정글러. 사이드 정글에서 단일 대상 인베이드를 노린다. 첫 burst를 패시브 + R로 받아내고, 체력이 줄어든 그쪽에 E를 박아라 — E의 잃은 체력 스케일링이면 30%로 떨어진 Rengar는 70% Rengar 한 방에 죽는다.

## 파워 스파이크 및 승리 조건

- **4레벨:** 풀 클리어 완료, 세 스킬 모두 활성화. push에 끼어 있는 적과 가장 가까운 라인(적 측 미드에 미니언이 가장 많고 적 체력이 가장 낮은 라인)에서 첫 갱킹을 찾는다. 사거리 975에서 Q 슬로우, 그 위에 W 틱이면 6레벨 이전이라도 충분히 위협적인 킬 셋업이다.
- **6레벨:** 첫 **Maximum Dosage**. Mundo 게임의 가장 큰 power swing. 6 찍고 30초 안에 교전을 찾는다 — 라인 갱킹, 두 번째 Scuttle 다툼, 또는 첫 Drake 셋업. R의 즉시 회복이 "실패한 갱킹"을 보장된 교환으로 바꾼다.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 완성 (~ 12-14분):** 첫 진짜 피해와 sustain 스파이크. W를 틱시키고 진입하면서 Sundered Sky 치명타 회복을 발동시키면 R을 태우지 않고도 Drake와 Rift Herald 교전에서 오브젝트를 챙길 수 있다.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage 완성 (~ 22-26분):** 한타 정점 구간. R 쿨다운이 짧아져 Baron 타이머 한 번에 두 번 진입할 수 있다. 모든 오브젝트를 강제하라 — 여기가 절정이다.

## 흔한 실수

- **3레벨 이전에 인베이드.** Mundo의 3레벨 이전 클리어는 가장 느린 축에 들고, Hailblade의 Smite 피해는 매우 낮다. 1분 30초쯤 스킬 한 개라도 켜진 Lee Sin이나 Elise를 만나면 그쪽이 trade를 이기고 캠프 두 개 차이로 뒤처지게 된다. 4레벨까지는 자기 정글에 머문다.
- **피를 다 깎인 다음에 R을 누른다.** R의 즉시 회복은 *잃은* 체력의 %인데, 시간 회복 부분은 90% 체력에서 누르면 거의 낭비된다. R은 갱킹이나 교전을 commit하기 **전**에 — 폭딜이 들어올 때 재생이 틱하고 있어야지 끝나고 나서 붕대 감으면 늦다.
- **prio가 없는 라인 갱킹.** 얼린 웨이브(적 라이너의 타워 근처에 멈춰 있는 웨이브)를 갱킹하면 적 라이너에게 공짜 킬이다 — 그쪽 타워가 너를 zone하고, 자기 라이너는 자기 타워에서 멀리 걸어와 follow-up해야 한다. 이쪽 사이드로 push되는 라인이나 가운데에 있는 라인만 갱킹하라.
- **패시브 약병을 너무 늦게 줍는다.** 화학 약병(패시브 발동 시 떨어지는 녹색 병)은 사라지기 전 몇 초 동안만 땅에 남는다. 갱킹 도중 만료시키면 패시브 전체를 낭비한 셈이다 — 회복도 없고 쿨다운 환급도 없다. 떨어진 즉시 위로 걸어 줍는다.
- **Spirit Visage 없이 풀 탱커 빌드.** Mundo의 모든 방어 스탯이 회복 증폭과 곱해진다. Spirit Visage가 없으면 R 회복도 W 회복도 아군 Soraka 회복도 다 약해진다. Spirit Visage는 곱셈 아이템이다 — 같은 골드로 단순 체력만 가는 건 더 나쁜 빌드다.

## 고급 팁

적 정글을 통과하는 **측면 갱킹**을 연습하라(라인에 강이 아니라 옆이나 뒤에서 진입하는 것 — 적 라이너가 ward 없이는 못 보는, 적 라이너 뒤쪽 수풀 경로). Mundo에게 이 진입은 패시브 때문에 독보적으로 강력하다 — 네가 등 뒤에서 등장하는 그 순간 적 라이너의 첫 CC 스킬은 공짜로 흡수된다. 그 말은 100% 체력의 적이 자기 타워 쪽으로 Flash를 써도 사거리 975짜리 Q 슬로우 투사체로 직진해 들어갔다가 E에 죽는다는 뜻이다. 핵심은 적 라이너가 웨이브를 이쪽 사이드로 밀고 자기 타워에서 멀리 떨어진 그 순간에 강가 또는 뒤쪽 수풀을 통한 진입 타이밍을 정확히 맞추는 것이다 — 갱킹 패턴이 네가 등장하기 전까지는 보이지 않고, 빗나간 CC가 회복할 시간 없이 킬을 마무리한다.
