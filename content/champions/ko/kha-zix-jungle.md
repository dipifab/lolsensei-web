---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "ko"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Kha'Zix 정글 가이드. 클리어 동선, 고립 타겟 점프, evolution 선택(Q/E/R), 리쎌리티 빌드, 핵심 매치업, 파워 스파이크와 흔한 실수까지 한 페이지 정리."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "시야 밖에서 챔피언에게 가하는 다음 평타가 추가 magic damage와 슬로우를 줍니다. 425 거리 안에 아군이 없는 고립 타겟을 표시해 Q 데미지를 증폭합니다."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "타겟에게 physical damage를 가하며, 고립된 타겟(근처 아군 없음)에게는 데미지가 폭발적으로 증가. 주력 1대1 도구이며 evolution으로 사거리가 늘어납니다."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "직선 가시로 적중 시 데미지를 주고 폭발 범위에서 본인을 회복. 정글 내 유일한 sustain 수단. Evolution은 슬로우, 시야, 삼중 콘을 추가합니다."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "지정 도약기로 착지 시 데미지. Evolution은 사거리 200을 더하고 takedown 시 쿨다운을 리셋해, 어쌔신 리셋 패턴이 여기서 만들어집니다."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "잠시 투명해지고 추가 이동속도를 얻으며, 한 번 재시전해 다시 투명화 가능. 각 랭크마다 한 스킬(Q/W/E/R)을 영구 evolve합니다."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "웨이브클리어와 사이드 라인 압박이 필요한 조합 상대"
    - dd_id: "6692"
      name: "Eclipse"
      against: "브루저가 많은 조합(Sett, Aatrox, Mordekaiser): 쉴드와 회복으로 in-out 트레이드 생존"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "와드 세팅이 강한 조합(인챈터 서폿, 시야 정글) 상대"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Lucidity에서 교체. 마법 CC가 강한 조합(Ahri, Lissandra, Twisted Fate) 상대"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "더블 AD 조합(Yasuo + Caitlyn 같은 물리 위협 둘) 상대 교체"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "고립 타겟(425 거리 안 적 챔피언 없음)을 찾아 E + Q + AA로 폭딜. Evolved E는 takedown마다 리셋되어 난전과 한타에서 재점프 가능."
  weakness: "적이 뭉쳐 있으면 Q 데미지가 급락 — 고립 증폭은 위치에 의존. Hard CC(Malzahar R, Skarner R)는 점프를 끊고 Kha'Zix는 탈출 수단이 없습니다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Hard CC가 없는 캐리형 정글러"
      reason: "혼자 정글을 돌며 파밍하는 챔피언들로, Kha'Zix의 E + 고립 Q에 대응 전에 즉사. CC가 없어 dash-in을 막을 방법이 없습니다."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "클리어가 느리고 기동성이 낮은 정글러"
      reason: "Kha'Zix가 E로 더 빨리 인베이드해 Scuttle Crab을 선점. Drake 후 뒷캠프를 카운터정글링해도 그들은 회전 속도가 느려 응징 불가."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "기동성이 낮은 후방 ADC"
      reason: "후반에는 evolved E로 벽을 넘어 후열에 안착. 대시가 없으면 R 투명화 윈도우 동안 위치를 못 바꿉니다."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "지정형 CC를 가진 프론트로드 브루저 정글러"
      reason: "그들의 CC는 점프 모션을 끊고 묶어 둠. 6레벨 전 정글에서 듀얼 패배: 3레벨 인베이드는 그들에게 공짜 킬."
    - examples: ["malzahar", "skarner"]
      archetype: "제압이나 unstoppable 락다운을 가진 챔피언"
      reason: "제압은 Mercury's Treads로 해제 불가; 잡히는 순간 R로 못 빠지고 투명화 윈도우는 낭비됩니다."
    - examples: ["sett", "tahm-kench"]
      archetype: "캐리 보호 기술을 내장한 탱키 브루저"
      reason: "그들의 W나 잡기로 Q가 닿기 전에 캐리를 고립 윈도우 밖으로 빼냄. 깨끗한 1대1 점프가 필요한데 그 옵션을 제거합니다."
---

## 개요

Kha'Zix는 근접 AD 어쌔신(어쌔신은 단일 squishy 타겟을 지우도록 설계된 초고폭딜 챔피언이며, squishy는 ADC와 대부분 메이지처럼 방어력이 낮은 챔피언을 말합니다)으로, 키트 전체가 **고립** 타겟을 찾는 데 맞춰져 있습니다. 그의 경우 고립이란, 타겟으로부터 425 거리 안에 아군 챔피언이 없는 상태 — Mercury's Treads 사거리보다 약간 짧은 거리입니다. 패시브 **Unseen Threat**는 고립된 적을 표시하고, Q **Taste Their Fear**는 그들에게 막대한 추가 데미지를 가하며, 궁 **Void Assault**는 시야 안팎을 드나들며 그 고립 폭딜을 세팅하게 해줍니다. 혼자 돌아다니는 팀 — 스플릿푸셔, 캐리 정글러, 기동성 낮은 후방 마크스맨 — 을 상대로 픽하세요.

정글 게임플랜: **W**로 sustain(sustain = 클리어 도중 회복 능력)을 받으며 봇에서 탑으로 클리어, 3레벨에 E를 열고 어쌔신 패턴으로 6레벨 전 갱크를 시작합니다 — **E**로 라인에 진입 → 갱크 타겟이 서포터로부터 떨어지길 기다림 → **Q**로 증폭 데미지 → 평타로 마무리. 6레벨 이후 모든 교전은 사냥입니다: **Evolved E**(사거리 확장 + takedown 리셋)를 골라 킬에 성공하면 대시를 환불받고 적 팀이 몰리기 전에 빠져나오세요. Drake와 Rift Herald 교전은 **R**로 스텔스에 진입해 후열을 지우고 다시 스텔스해서 빠지는 식으로 이깁니다.

## 추천 빌드

**시작 아이템:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Gustwalker 펫은 비전투 이동 속도를 줘 갱크에 빨리 도착하기 좋습니다. Mosstomper(sustain 펫)는 패스 — **W**만으로도 한 클리어 사이클 동안 충분히 회복됩니다.

**코어 아이템(순서):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 1코어 러시. 리쎌리티(방어력이 낮은 적에게 적용되는 고정 방어구 관통, 사실상 squishy에게 공짜 데미지) + 액티브 이동 속도가 갱크와 난전을 매우 쉽게 만듭니다.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 능력 가속 신발로 **R**이 더 빨리 돌아옵니다. R 가용 시간이 길수록 한 교전당 투명화 윈도우가 늘어납니다.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 처형 패시브: 5% 이하의 적은 즉사. 폭딜이 50 HP 남기고 끝나는 킬을 마무리해 줍니다.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 짧은 시전 후 적 첫 스킬을 막는 spell shield. Malzahar R, Lissandra R 등 R로 빠지기 전에 묶어 둘 수 있는 지정형 CC로부터 보호합니다.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 후반 방관, 적 방어력에 비례해 스케일링되며, 데미지 스킬에 슬로우 부여 — Q로 추격 가능.

**상황 아이템:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — 팀이 사이드 라인 압박이 필요할 때: 광역 패시브 + 액티브 처형으로 split-push(혼자 사이드 라인을 밀어 적의 대응을 강제)하면서도 교전 데미지 손실 없음.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 브루저가 많은 조합(브루저 = Sett, Aatrox, Mordekaiser 같은 탱키 근접 파이터): 쉴드 + 옴니뱀(omnivamp = 모든 데미지 종류에 적용되는 흡혈)으로 in-out 트레이드에서 생존.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — 와드 세팅이 강한 조합(Janna, Lulu 같은 인챈터 서폿) 상대: 시전 시 와드 제거 + 와드 추가 데미지로 시야망을 투명하게 통과.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 마법 CC가 강할 때 Lucidity에서 교체. tenacity(stun과 슬로우 지속을 줄이는 스탯)로 그들의 재진입 전에 R로 빠질 시간 확보.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 더블 AD 조합(Yasuo + Caitlyn 같은 물리 위협 둘) 상대: 고정 방어력과 평타 데미지 감소.

**신발:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**가 기본. Mercury's Treads 또는 Plated Steelcaps는 매치업이 요구할 때만.

**스킬 마스터 순서:** **Q** 우선 마스터(고립 데미지 스케일링이 주 DPS), **W** 두 번째(정글 sustain과 evolution 슬로우), **E** 마지막(추가 랭크는 데미지 자체보다 거리·쿨다운이 중요). **R**은 6, 11, 16레벨에 찍습니다.

**Evolution 선택(R 랭크업마다 고르는 Q/W/E/R 업그레이드):** 표준 순서는 **6레벨 Q**(사거리 확장 + 고립 takedown 환불 — 가장 깔끔한 1대1 스파이크), **11레벨 E**(난전용 사거리 확장 + takedown 리셋), **16레벨 R**(투명화 시간 연장, 두 번째 재시전). **6레벨에 Q 대신 W**는 적 팀에 모여 다니는 기동성 낮은 위협이 여럿일 때만(삼중 콘 슬로우로 한타 전체 존을 만듦). **Q 대신 E 우선**은 CC 강한 정글러(Lee Sin, Vi)로부터 도망쳐야 할 때만 — 초반 리셋이 실패한 갱크에서 빼주지만 킬 압박을 크게 잃습니다.

**룬:** 주룬 **Domination** + **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. 보조 **Precision** + **Triumph**, **Coup de Grace** (또는 sustain이 필요하면 **Sorcery** + **Sudden Impact** — sustain = 교전 중 회복). 스탯 파편: Adaptive Force / Adaptive Force / Health.

## 주요 매치업

- **Lee Sin:** 2~3레벨 인베이드 회피. 그의 Q-Q 후속 + W 쉴드는 E가 켜지기 전 Kha'Zix 키트를 이깁니다. 봇에서 탑으로 클리어, 시야와 함께 Scuttle 호버, 라이너가 잡게 두세요.
- **Graves:** 초반 호각, 6레벨 후 우세. 6레벨 전 오픈 정글 듀얼 금지: W 실명이 평타 윈도우를 끊습니다. 고립 기회를 기다려 — **E + Q**로 라인 갱크, 라이너가 ADC에서 떼어내게 하세요.
- **Elise:** 파워 스파이크 경쟁. 그녀는 3레벨 갱크에서 우세, 당신은 6레벨 고립 점프에서 우세. 그녀의 첫 클리어 템포에 맞춰 오브젝트 트레이드 — 시야와 함께 Drake 호버해서 솔로 못 하게.
- **Jarvan IV:** 카운터 인게이지 위협. 그의 E-Q 띄우기는 점프 애니메이션을 끊습니다. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**를 평소보다 일찍 구매; spell shield가 깃발 콤보를 흡수.
- **Karthus:** 무료 매치업. 탈출기 없고 혼자 라인 미는 챔피언. 시야로 6레벨 전 위치 추적; 6레벨에 **R + E + Q**로 정글 건너편에서 Requiem 채널링 중인 그를 지웁니다.

## 파워 스파이크 및 승리 조건

- **3레벨(Q + W + E):** 풀 키트 해금. 고립 갱크 노리기 — 강 부쉬로 사이드 라인 측면 진입, **E** 진입, 고립된 라이너에게 **Q**(서포터가 빠져 있어야 함), 평타 리셋, 귀환 시 슬로우용 **W**. 타겟이 혼자라면 6레벨 전 Kha'Zix 갱크는 게임에서 가장 강력한 갱크 중 하나.
- **6레벨(첫 Void Assault + 첫 evolution):** 표준 폭딜 루트는 **Evolved Q**. 강 중간 난전에서 강력한 스파이크 — R로 투명 진입, 마킹된 타겟에 E, 증폭 Q, AA 리셋, R 재시전으로 이탈. 풀 콤보로 1800 HP squishy를 2초 안에 지웁니다.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade 완성(~9~11분):** 폭딜 스파이크. 액티브 속도로 맵 절반을 가로질러 flank(적이 보지 못하는 측면, 보통 후열 뒤에서 진입). 두 번째 Drake 주변 교전 강제.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E(~16~19분):** 리셋 윈도우. E가 takedown마다 리셋 — 깔끔한 한타는 캐리에 E, Q로 킬, 다음 타겟에 두 번째 E. 이 시점부터 Kha'Zix는 pick(pick = 한타 밖에서 고립된 적 제거) 결정짓는 머신.

## 흔한 실수

- **고립되지 않은 타겟에 점프.** 고립 증폭(425 거리 안 아군 없음)이 없으면 Q 데미지가 약 60% 감소. 서포터가 빠지거나 라이너가 떼어낼 때까지 기다리고 — 적 팀 한가운데서 트레이드 금지.
- **첫 evolution을 기본값으로 Evolved W 선택.** Evolved W는 한타 존 컨트롤 도구이지 듀얼 도구가 아닙니다. 팀이 pick(한타 밖에서 고립된 적 제거)과 난전 위주라면 Evolved Q가 90% 정답.
- **R을 데미지로 쓰고 위치 조정에 안 씀.** R은 교전 진입·이탈용 투명화 윈도우이지 데미지 버튼이 아닙니다. 두 번째 재시전은 타겟 처치 후 이탈에 — 귀환 중 재은신은 도구의 핵심 가치를 낭비.
- **갱크 실패 후 캠프에 욕심.** Evolved E 이전엔 E 리셋이 없어 갱크 실패 시 빠질 수단 없음. 자동조종으로 다음 캠프 가지 말고 자기 정글로 복귀 — 적 정글러는 동선을 추적해 다음 라인을 카운터 갱크.
- **Eclipse를 기본값으로 1코어.** Eclipse는 Kha'Zix를 브루저로 만들고 어쌔신성을 만드는 리쎌리티 폭딜을 포기하게 합니다. 매치업이 브루저 헤비이고 순수 리쎌리티로 in-out 트레이드 생존이 불가능할 때만 Eclipse.

## 고급 팁

**R-E-Q-AA-recast-R** 콤보를 연습 모드에서 입력이 자동화될 때까지 훈련. 핵심은 Q와 재시전 사이의 평타 리셋: Q는 평타 타이머를 리셋하므로 Q가 적중하는 순간 평타를 끼우고 즉시 R 재시전으로 이탈. 깔끔히 실행하면 1900 HP 타겟을 약 1.8초 안에 지우고 투명한 채로 빠집니다 — Baron 세팅 중 적 ADC에 단독 pick(pick = 한타 밖에서 고립된 적 제거) 한 번이면 공짜 오브젝트. 스킬 한계는 Q와 R 재시전 사이 평타 타이밍: 너무 이르면 Q가 안 닿았고, 너무 늦으면 R 윈도우가 닫혀 있습니다.
