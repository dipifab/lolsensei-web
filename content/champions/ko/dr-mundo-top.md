---
title: "Dr. Mundo Top Build & Guide — Patch 16.9"
slug: "dr-mundo-top"
language: "ko"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Dr. Mundo 탑 가이드: Heartsteel HP 스택 저거너트 빌드, 라인전 생존, 핵심 매치업, 파워 스파이크, 흔한 실수와 고급 팁까지 정리한 실전 공략입니다."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "첫 hard CC(스턴, 속박, 에어본 등 행동 불능 효과)는 Mundo에게 효과 대신 HP만 소모시키고 약병을 떨어뜨립니다. 약병을 주우면 회복하고 패시브가 리셋됩니다. 추가로 막대한 HP 재생도 제공합니다."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "장거리 직선 스킬샷: 대상의 현재 HP 비례 마법 피해와 둔화를 적용. 마나가 아닌 HP를 소모합니다 — 자원 바가 곧 체력 바입니다. 주력 견제와 웨이브클리어 도구."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "자기 시전 채널링: 주변 적에게 마법 피해를 틱으로 입히고 받은 피해 일부를 저장. 재시전(또는 채널 종료)으로 폭발 피해를 주며, 챔피언에 적중 시 저장 피해의 일정 비율을 회복합니다."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "패시브: 최대 HP에 비례하는 추가 AD. 액티브: 잃은 HP 기반 추가 피해를 주는 근접 강타. 처치 시 시신을 던져 경로상 적에게도 피해를 입힙니다."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "자기 시전: 잃은 HP의 일정 비율을 즉시 회복한 뒤 지속 시간 동안 추가 이동 속도와 막대한 HP 재생 부여. 한타 시작 직전과 죽기 전에 누르는 스킬, 죽고 나서가 아닙니다."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "CC 3개 이상 또는 AP 위협 2명 이상 시 Plated Steelcaps에서 스왑; 강인함이 스턴 지속을 단축"
    - dd_id: "3075"
      name: "Thornmail"
      against: "오토어택 캐리(Vayne, Tryndamere, Master Yi) 상대; 피해 반사 + Grievous Wounds(회복 50% 감소) 적용"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "AP 견제 2명 이상 조합(Brand + Karthus, Ziggs + Xerath) 상대; 마법 피해 대응 MR + 이속"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "뭉친 AP 웨이브클리어(Karthus, Brand, Anivia) 상대; 마법 화상 오라가 근접 전투를 응징"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "단일 대상 AP 폭딜(Syndra, Veigar, LeBlanc) 상대; 스펠실드가 콤보 시작기를 차단"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Q 견제와 W 지속 회복으로 라인을 버티고 Heartsteel과 Warmog's까지 도달한 뒤, 풀 HP 재생 상태로 적 백라인에 들어가 팀이 정리할 시간 동안 죽지 않으면 됩니다."
  weakness: "하드 CC도 돌진기도 없습니다. 원거리 탑은 975 사거리 밖에서 Q를 카이팅하고, 회복 차단 아이템이 W 회복과 R 재생을 잘라내 탱커를 느린 미니언으로 만듭니다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
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
    primary_rationale: "Resolve: Grasp는 라인전에서 4초마다 무료 HP를 주고 Mundo의 HP 스택과 시너지가 좋습니다. Bone Plating은 브루저 폭딜을 흡수, Conditioning은 12분 이후 Armor·MR 추가, Overgrowth는 미니언을 영구 HP로 환산."
    secondary_rationale: "Sorcery 보조: Nimbus Cloak은 Flash나 Ghost(주력 인게이지 소환사 주문) 사용 후 이속 폭발을, Gathering Storm은 10분마다 적응형을 부여 — Mundo의 후반 스케일링 승리 조건과 정확히 맞습니다."
    secondary_alternative: "초반 라인 폭군(Darius, Riven) 상대로는 Sorcery를 Inspiration으로 변경: Biscuit Delivery(12분 이전 2분마다 무료 물약), Cosmic Insight(소환사 주문 쿨감). 스케일링 대신 라인 생존을 챙깁니다."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "원거리 견제가 없는 근접 브루저"
      reason: "Mundo의 Q는 마나가 아닌 HP를 소모하는 975 사거리 둔화기라 매 웨이브마다 적의 평타 사거리 밖에서 깎아낼 수 있습니다. 그들은 피해를 주려면 Mundo에게 걸어와야 하고, W 오라와 Spirit Visage 회복이 모든 장기 트레이드에서 우위를 점합니다."
    - examples: ["zed", "talon", "katarina"]
      archetype: "단일 폭딜 윈도우에 의존하는 암살자"
      reason: "그들의 모든 피해는 한 콤보에 몰려 있습니다. Mundo의 패시브가 첫 hard CC를 흡수하고, R이 잃은 HP의 일정 비율을 즉시 회복하며, W가 폭딜 중 받은 피해 일부를 환급합니다 — 그들이 쿨다운을 다 쓰고도 Mundo는 거의 풀로 살아 나갑니다."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "달라붙어야 하는 평타 근접 챔피언"
      reason: "Q 둔화 + Plated Steelcaps가 그들의 평타 가동률을 잘라냅니다. Tryndamere R이 한 로테이션은 회복을 보장하지만, R + Thornmail을 갖춘 Mundo는 무적 시간을 버티고 반사 피해로 그를 깎아냅니다."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "%HP 또는 실명을 가진 원거리 탑"
      reason: "Vayne의 W(세 번째 평타마다 고정 피해, 모든 방어력 무시)와 Teemo의 Q(평타를 무효화하는 실명)는 HP 스택을 통째로 우회합니다. Quinn의 사거리와 패시브 실명은 Mundo를 영구히 Q 사거리 밖에 묶어둡니다."
    - examples: ["fiora"]
      archetype: "고정 피해 듀얼리스트"
      reason: "Fiora의 급소는 고정 피해(armor·magic resist를 모두 무시 — 줄여줄 방어 스탯이 없음)를 입힙니다. HP 스택은 고정 피해 앞에서 무의미하며, 풀템 상태라도 단일 듀얼에서 갈립니다."
    - examples: ["trundle"]
      archetype: "스탯을 훔치는 안티 탱커"
      reason: "Trundle의 R은 8초 동안 Mundo의 Armor, MR, 이속을 훔칩니다. E 패시브의 고정 피해(HP 비례 추가 AD 기반)가 사라지고 유일한 도주기(R 이속)도 함께 빼앗기며 탱커 정체성 자체가 무력화됩니다."
---

## 개요

Dr. Mundo는 **저거너트 탱커**(아이템 몇 개를 갖추면 강하게 때리는 느리고 이동기 없는 근접 챔피언, HP와 HP 재생량이 매우 높음)입니다. 정체성은 세 가지에 달려 있습니다: **Heartsteel**을 통한 HP 스택(평타로 챔피언을 칠 때마다 영구 HP가 아이템에 누적), **R**의 HP 재생 + Spirit Visage 회복 증폭, 그리고 매 쿨마다 **Q**를 눌러 975 사거리에서 적을 깎는 것입니다. 가장 중요한 메커니즘은 **패시브**: 적이 처음 거는 hard CC(스턴, 속박, 에어본 같은 행동 불능 효과)는 효과가 적용되지 않고 HP만 소모하며, 회복용 약병을 떨어뜨려 주울 수 있게 합니다. 즉 Sett나 Malphite는 Mundo를 묶을 단 한 번의 기회를 얻을 뿐이고, 그 후 8-10초 동안 Mundo는 적 팀을 가로질러 걸어갑니다.

게임 플랜은 "절대 죽지 않기"입니다. 라인전에서는 **웨이브 프리즈**(자기 타워 바로 앞에 두어 적 라이너가 자기 타워에서 멀리 떨어져 막타를 잡게 만드는 운영)를 걸고 Q를 최대 사거리에서 던져 농사를 짓습니다. 14분부터는 **Heartsteel** + **Warmog's Armor**가 임계치를 넘어 적 팀이 회복 차단 아이템 없이는 Mundo를 깎기조차 어려워집니다. 이후 모든 한타는 Mundo가 천천히 들어가 첫 스턴을 받아내고 R을 누른 뒤, 캐리가 죽을 때까지 백라인(자기 팀 탱커 뒤에서 피해를 주는 무른 캐리들)에 서 있는 식으로 시작합니다. 이것이 "인게이지 흡수"의 의미입니다: 적이 스턴이나 돌진기로 한타를 시작할 때, 그 스턴을 맞아주는 사람이 바로 당신입니다.

## 추천 빌드

**스타팅 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Shield의 HP 재생 패시브가 적 견제(한타에 들어가지 않고 저비용 원거리 피해로 HP를 깎는 행위)를 완충해 주며, 근접 매치업을 포함해 거의 모든 Mundo 매치업에서 정답입니다 — 게임 플랜은 "1레벨에 이긴다"가 아니라 "살아남고, 농사 짓고, 스케일링한다"입니다.

**코어 아이템(순서대로):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — 정체성 아이템. 챔피언 평타마다 Heartsteel이 충전되며 발동 시 막대한 추가 피해와 영구 누적 HP를 얻습니다. HP 스택에 상한이 없어서 35분쯤 되면 탑 Mundo가 무른 챔피언을 E 한 방으로 잡아냅니다. 매 게임 1코어로 구입하세요.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 적 팀 주력 피해원이 평타일 때 기본 신발. 장기전에서 들어오는 피해를 줄여 줍니다.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — HP 임계치(추가 HP 약 3000, Heartsteel + Warmog's 부품 합산으로 도달)를 넘는 순간 "비전투 시 4초 만에 풀피"패시브가 활성화됩니다. 사이드 라인 소규모 교전(1-3명 사이의 작은 한타)이 한 웨이브 사이에 완전히 회복되는 분기점입니다.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 마법 저항력과 회복 증폭 패시브로 **W** 폭발 회복, **R** 재생, Soraka·Yuumi 등 아군 회복, Doran's Shield 틱까지 모두 강화합니다. AP 위협이 한 명이라도 있는 팀에는 4코어로 구입하세요.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 한타 시 챔피언 첫 평타가 치명타로 적중하며 큰 HP를 회복시켜 줍니다. 패시브가 만드는 라이프라인 윈도우와 완벽히 맞물리고, 단순 생존이 아니라 킬을 위협하는 작은 폭딜 스파이크를 제공합니다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 CC가 3개 이상이거나 AP 챔피언이 2명 이상이면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 교체. 강인함(스턴과 둔화 지속을 줄이는 스탯)은 패시브의 첫 CC 면역이 소진된 뒤 유일하게 의미 있는 방어 수단입니다.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 평타 캐리(Vayne, Tryndamere, Master Yi) 상대. 피해를 반사하고 적중 시 **Grievous Wounds**(대상의 회복을 절반으로 줄이는 디버프)를 적용 — Tryndamere나 성장한 Vayne가 W 오라로 받은 피해를 회복하지 못하게 막는 유일한 길입니다.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 무거운 AP 견제 조합(Brand + Karthus, Ziggs + Xerath, 미드 Vel'Koz) 상대. 마법 피해를 받을수록 마법 저항력이 쌓이고 이동 속도도 부여 — Mundo가 원하는 두 스탯을 모두 갖췄습니다.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 뭉친 AP 웨이브클리어(Karthus, Brand, Anivia) 상대. 마법 화상 오라가 근처에서 싸우는 적에게 피해를 틱으로 입히고 MR을 보충합니다.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 단일 대상 AP 폭딜(Syndra, Veigar, LeBlanc) 상대. 스펠실드(다음에 자신을 향해 날아오는 스킬 하나를 막는 일회용 보호막)가 콤보 시작기를 무효화하고, 비전투 몇 초 후 재생됩니다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 무거운 CC 사슬 또는 AP 위주 조합 상대로는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**스킬 마스터 순서:** **Q** 1선마(사거리, 둔화, 현재 HP 비례 피해 모두 랭크당 강화 — 유일한 원거리 도구). **E** 2선마(잃은 HP 액티브가 추가 AD에 강하게 비례하고, Heartsteel 스택이 그 추가 AD를 부풀림). **W** 3선마; 재시전 회복과 오라 피해를 위해 초반 1포인트면 충분. **R**은 6, 11, 16레벨에서 찍습니다.

**룬:** 주룬은 **Resolve** + **Grasp of the Undying** — 라인전에서 4초마다 다음 챔피언 평타가 추가 마법 피해를 입히고, 자신을 회복시키며, 영구 HP를 부여합니다. **Bone Plating**(피해를 받은 후 다음 3타 피해 감소), **Conditioning**(12분 이후 추가 Armor·MR), **Overgrowth**(주변 미니언 처치 시 HP 스케일링 — 라인 농사꾼에 최적)와 조합. 보조룬 **Sorcery**: **Nimbus Cloak**(Flash나 Ghost 사용 후 이속 폭발, 둘 다 Mundo의 흔한 소환사 주문)과 **Gathering Storm**(10분마다 적응형 스케일링). 스탯 파편: **Adaptive Force** + **Health Scaling** + **Health Scaling** — 어디서든 추가 HP, Mundo의 모든 방어 스탯이 같은 Heartsteel 스택 위에서 더 많은 유효 HP로 환산됩니다.

## 주요 매치업

- **Darius:** 초반이 어려운 매치업. 출혈 패시브(맞을수록 누적되는 지속 피해 스택)가 HP 재생을 뚫고 들어오고, 끌어당기기가 Q 발동 모션을 끊습니다. 자기 타워 근처에서 **웨이브 프리즈**, ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 채용, CS 손실을 감수하세요 — ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** + Warmog's 부품을 갖추면 14분 이후 매분 격차가 벌어집니다.
- **Sett:** 유리한 매치업. **패시브**는 Sett의 W(세 번째 평타가 스턴)를 위해 아껴두세요 — HP만 내고 흘려 보내면 됩니다. 975 사거리 Q로 트레이드; 장거리 견제에 답이 없고 자체 회복도 Q 깎임을 따라가지 못합니다.
- **Vayne / Teemo:** 가장 어려운 라인. Q 사거리 밖에 머물며 **고정 피해**(armor와 magic resist를 모두 무시 — 줄여줄 방어 스탯이 없음) 또는 평타를 무효화하는 실명을 사용합니다. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 채용, 타워 아래 프리즈, 그들이 오버익스텐드(시야 없이 강을 넘어 푸시)하는 즉시 정글러 호출. Vayne가 스노우볼 굴리면 Spirit Visage 대신 ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** 러시.
- **Fiora:** 가장 어려운 근접 매치업. **W**는 패리(다음 스킬을 막고 반격하는 짧은 보호막 — Q나 E 시전 전 평타로 베이트). 급소는 고정 피해라 HP 스택이 무의미합니다. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** + ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** 부품 러시 후 정글 갱크에 의존하세요.
- **Mordekaiser:** 실력 매치업. R이 7초 동안 도주기 없는 1대1 차원에 가둡니다. 패시브가 트리거되기 전에 R을 맞으면 갇혀서 죽습니다. **R**과 패시브가 모두 켜져 있으면 생존 — 7초 차원 윈도우는 R 한 번 시전 시간과 거의 같습니다. 차원 안에서 Q 잡기를 피해 위치를 옮기기 위해 **Flash**를 아껴 두세요.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **Maximum Dosage**. 6레벨에 아이템이 없어도 R의 즉시 회복 + 이속이 지는 트레이드를 생존이나 킬로 바꿉니다. 정글러가 탑 사이드에 모습을 드러내고 적 라이너가 60% HP 미만일 때 **올인**(킬에 풀 커밋, 후퇴 옵션 없음)을 노리세요.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel 완성(~ 13-15분):** 첫 진짜 스파이크. 챔피언에게 발동시킬 때마다 죽어도 사라지지 않는 영구 HP가 누적됩니다. Heartsteel이 나오면 웨이브를 밀고 적 미니언 너머로 평타를 넣어 스택을 적립하세요.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + Heartsteel 스택(~ 18-22분):** 사이드 라인에서 Mundo가 죽지 않는 분기점. 새 HP 임계치에서 비전투 재생이 발동 — 50% HP로 한타를 한 뒤 다음 웨이브까지 걸어가는 동안 풀피로 회복됩니다.
- **3코어 ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage(~ 24-28분):** 한타 절정. 회복 증폭이 모든 재생 틱을 강화 — R이 "괜찮은" 수준에서 "이 녀석을 절반 HP 아래로 못 내린다"로 바뀝니다. 모든 Drake와 Baron 한타를 여기서 강제하세요; 팀은 당신이 먼저 들어가 인게이지를 흡수해 주기를 필요로 합니다.

## 흔한 실수

- **피해를 받은 뒤 R 누르기.** R의 즉시 회복은 *잃은* HP의 일정 비율이지만, 90% HP에서 발동하면 시간 회복 부분은 낭비됩니다. 한타에 들어가기 **전에** R을 사용하세요 — 회복이 이미 틱을 도는 상태로 진입해 폭딜 윈도우를 미리 완충하는 것이지, 사후에 붕대를 감는 것이 아닙니다.
- **풀피인 적에게 풀피 상태로 Q 던지기.** Q는 HP를 소모하고 현재 HP 비례 피해를 줍니다. 100% HP인 적에게 100% HP인 상태로 던지면 HP를 작은 깎임과 맞바꾸는 셈 — 트레이드를 집니다. 근접 적이 미니언 어그로로 HP를 잃었거나 아군 CC가 올인을 열어준 뒤 Q를 사용하세요.
- **패시브 약병을 너무 늦게 줍기.** 화학 약병(패시브 발동 시 떨어지는 초록 병)은 사라지기까지 몇 초간 바닥에 머무릅니다. 만료시키면 패시브 전체를 낭비하는 셈 — 회복도, 쿨다운 환급도 없습니다. 한타 중이라도 떨어진 즉시 그 위로 걸어가세요.
- **Spirit Visage 없이 풀 탱커 빌드.** Mundo의 모든 방어 스탯은 회복 증폭과 곱연산됩니다. Spirit Visage가 없으면 R도, W도, 아군 Soraka 회복도 모두 적게 들어옵니다. 회복 증폭 없는 풀 탱커 Mundo는 그저 느린 미니언; Spirit Visage가 있으면 같은 아이템들이 유효 HP를 훨씬 더 길게 늘려 줍니다.
- **비전투 시 W 토글을 켜둔 채 서 있기.** **Heart Zapper**는 채널 동안 매초 HP를 소모합니다. 정글링용으로 켜두고 잊으면 한타 도착 시 이미 70% HP. 매번 채널 종료 전에 재시전하세요.

## 고급 팁

사이드 라인 소규모 교전(나머지 맵이 다른 곳에서 싸우는 동안 탑이나 봇에서 벌어지는 1대1)에서 **패시브 베이트**를 연습하세요. 적 다이버가 hard CC 스킬을 하나만 가지고 있을 때 — 예: Sett의 W 스턴이나 Renekton의 스턴 — 그의 라인에 눈에 띄게 낮은 HP로 걸어 들어갑니다. 그가 CC를 커밋용으로 태우면 패시브가 무료로 흡수하고, 당신은 자기 미니언 아래에서 R-Q-E-AA로 그를 정리합니다. 핵심은 *눈에 띄게* 낮은 HP: 35-40%로 노출되어 평타 몇 대를 받아 적이 정말로 커밋하는지 확인한 뒤 트레이드에 들어가는 것. 패시브와 R을 모두 갖추고 50% 이상 HP로 적 진영 뒤에 있는 Mundo는 게임 내 최강의 1대1 위협 중 하나이며, 베이트가 그 시나리오를 만들어 줍니다.
