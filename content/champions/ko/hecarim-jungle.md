---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "ko"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Hecarim 정글 공략. 첫 클리어 동선, 갱 패턴, 핵심 bruiser 빌드, Sorcery·Phase Rush 룬, 주요 매치업, 파워 스파이크, 흔한 실수, fake-flank 고급 팁을 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim은 추가 Move Speed의 일정 비율을 Attack Damage로 변환한다. 모든 이동 속도 아이템이 곧 공격력 아이템이다."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "주변 적에게 물리 피해를 주는 광역기. 명중 시 스택을 쌓아 쿨다운을 줄이고 피해를 늘린다. 정글 클리어와 주력 DPS 버튼."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "광역 마법 피해 지역. 안에 있는 적이 받는 피해를 기반으로 Hecarim을 회복시킨다. 클리어와 다이브 시 sustain 핵심."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "이동 속도가 점점 빨라지며 ghost(유닛 통과). 다음 평타가 knockback을 일으키고, 달린 거리에 비례해 피해 증가. 갱킹 핵심 도구."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "직선 돌진으로 마법 피해를 주고 끝점에서 적중한 적을 공포에 빠뜨린다. 한타용 장거리 engage / disengage."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 CC나 마법 피해 상대 (Lissandra, Syndra, Brand): armor보다 CC 감소가 중요할 때 Plated Steelcaps 대신"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "frontline 탱커 상대 (Ornn, Sion): 평타와 Q 스택의 armor shred가 팀 전체에 도움"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "탱커 없는 팀 상대로 wave clear와 splitpush(혼자 사이드 라인을 밀어 응대를 강요)가 필요할 때"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "버스트 없는 조합 상대 (4-5 fighter/탱크): 긴 한타에서 ability haste와 R 가동률"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "AP 비중 높은 팀 상대 (Brand + Karthus + Vladimir): 마법 저항과 패시브 이동 속도가 Warpath 강화"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "engage용으로 우선 집중당할 때: 두 번째 생명으로 더 깊이 commit 가능"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "E와 Phase Rush의 가속을 활용해 squishy(방어력 낮은 ADC 같은 캐리)를 측면에서 잡아내고, R fear로 후속타, W로 버스트를 받아내며 Q를 cycle한다."
  weakness: "3레벨 이전엔 약하고 E가 쿨일 때 매우 무르다. root(Morgana Q, Lillia R)나 ground(Cassiopeia W) 같은 hard CC가 들어가면 engage가 끊기고 도망갈 수단이 사라진다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "초반 갱킹이 약한 느린 탱커 정글러"
      reason: "Hecarim이 클리어가 더 빨라 3레벨에 먼저 도달한다. 상대 두 번째 버프를 invade하거나, 상대보다 먼저 라인 카운터-갱이 가능. 속도 기반 스케일링이 스탯형 스케일링을 이긴다."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "자기 peel이 없는 squishy 보조형"
      reason: "E + R로 화면 밖에서 캐리까지 따라붙어 fear를 건다. 서폿이 죽는 순간 ADC는 보호막이 사라져 몇 초 만에 터진다."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "이동기가 없거나 짧은 ADC"
      reason: "Phase Rush와 E 가속으로 카이팅 전에 거리를 좁힌다. 그들의 유일한 탈출기(Flash)는 너의 engage보다 쿨이 훨씬 길다."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "이동을 잠그는 root, slow, ground 보유 챔피언"
      reason: "Hecarim의 키트 전체가 Move Speed에 의존한다(Warpath가 추가 속도를 AD로 변환). 한 번 root나 ground에 걸리면 피해와 disengage 옵션이 동시에 사라진다."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "초반과 invade가 강한 정글러"
      reason: "Hecarim은 3레벨 이전 약하다. 이런 정글러는 두 번째 버프를 invade해 죽이거나 Flash를 빼고 snowball을 굴려 그가 켜지기 전에 게임을 망친다."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "솔로 다이브를 응징하는 듀얼 bruiser"
      reason: "팀 후속타 없이 혼자 engage하면 anti-AD 패시브나 true damage로 1대1을 지고, commit이 무료 킬로 변한다."
---

## 개요

Hecarim은 빠른 diver 정글러다 — 거대한 거리를 단숨에 좁히고, 적을 자기 팀 안쪽으로 knockback한 뒤 **Devastating Charge (E)** 와 **Onslaught of Shadows (R)** 로 거머리처럼 달라붙는 fighter다. 패시브 **Warpath** 가 모든 추가 Move Speed를 Attack Damage로 환산하기 때문에, 속도 아이템이 곧 피해 아이템이다. 키트는 이해하기 쉽지만 타이밍이 까다롭다 — 게임 대부분을 노출된 캐리(ADC와 mage 같은 방어력 낮은 damage dealer)를 응징하는 기동력 위협으로 보내게 된다.

게임 플랜은 반복 가능하다. **Rampage (Q)** 와 **Spirit of Dread (W)** 로 빠르게 클리어해 3레벨에 도달한 뒤, E의 차징 각이 가장 좋은 라인(길고 직선적인 라인이 최적)에서 초반 갱을 노린다. 미드 게임부터는 너의 일이 **R** 로 flank(아무도 보지 않는 측면에서 한타에 진입)하고, 적 backline에 fear를 걸고, **E** knockback을 연쇄해 모든 게 쓰러질 때까지 압박하는 것이다.

## 추천 빌드

**시작 아이템:** Mosstomper Seedling (전투 외 이동 속도가 더 필요하면 Gustwalker Hatchling) + Refillable Potion. Mosstomper는 만피일 때 보호막을 줘서 첫 클리어 생존에 최적이다.

**코어 아이템 (구매 순서):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — AD 스파이크 + slow 액티브(Halting Slash). on-demand 슬로우는 Flash로 도망치는 갱과 킬을 따내는 갱의 차이를 만든다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 평타 피해에 대한 armor. 적 팀에 AD 위협이 둘 이상이면 기본 신발.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity, 큰 피해 시 발동하는 큰 보호막. 한타에 commit(빠지지 않고 끝까지 들어가는 것)하고도 스킬 cycle을 돌릴 시간을 벌어주는 핵심 아이템.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 받은 물리 피해를 분산 출혈(즉시가 아니라 몇 초간 나눠 들어옴)로 바꾼다. takedown 시 HP도 회복돼 all-in(킬까지 풀 commit) 후 멀쩡하게 빠져나올 수 있다.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 한타마다 첫 평타 치명타 보장(**E** knockback과 궁합 최고)에 큰 HP 회복까지. Stridebreaker와 잘 맞는 이유는 둘 다 스킬 사이에 평타를 끼워 넣게 만들기 때문.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 강한 crowd control이나 마법 피해가 많을 때 Plated Steelcaps 대신 (Lissandra, Syndra, Brand). Tenacity로 스턴 시간을 줄여 **R**을 무사히 캐스팅할 수 있다.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — frontline 탱커 상대 (Ornn, Sion). 평타와 **Q** 스택이 팀 전체에게 armor를 깎아준다.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — 사이드 라인을 splitpush(혼자 밀어 응대 강요)할 때, wave clear와 omnivamp가 더 필요할 때.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — 버스트 없는 느린 조합 상대. 추가 ability haste = 긴 한타에서 **R** fear와 **Q** 난사를 더 자주.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 강한 AP 팀 상대 (Brand + Karthus + Vladimir). 누적 마법 저항과 패시브 이동 속도가 Warpath와 이중 시너지: 속도 = AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 적 팀이 engage 때마다 너를 집중할 때. 팀이 스킬을 다 쏟은 뒤 부활해 한타를 정리한다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 가 기본; CC가 평타 피해보다 무거우면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 마스터 순서:** **Q** 선마(웨이브 클리어, 정글 클리어, 주력 DPS), **E** 후마(ghost 시간 증가와 갱용 쿨다운 감소), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush는 4초 안에 별개 스킬로 3타를 맞추면 발동한다 — 갱에서 **E**-평타-**Q** 콤보로 쉽게 충족되며, 발동 시 이동 속도 burst가 Warpath를 통해 AD가 된다. 보조 트리 **Resolve**에 **Bone Plating**, **Overgrowth**. 적 팀이 frontline 탱커 위주라면 Precision의 Conqueror로 바꿔 긴 한타에서 누적 피해를 노린다.

## 주요 매치업

- **Lillia:** **R**이 맵 반대편에서도 너를 root한다. 낮은 HP로 다가가 사용을 유도한 뒤, 그녀가 쓴 다음에만 commit하라. 적중당하면 너의 engage 창은 14초 이상 닫힌다.
- **Kha'Zix:** 강력한 invader이자 assassin. 동선을 추적하라 — 2:30에 푸른 정수가 비어 있으면 너의 정글에 있는 거다. 4레벨까지는 그의 예상 동선과 멀리 가다가, 이후 라이너들과 그룹지어 초반을 흘려보낸다.
- **Jarvan IV:** 거울 매치업. 먼저 궁을 쓰는 쪽이 보통 trade를 가져간다. 그의 정글에 와드를 박아 동선을 잡고 라이너들에게 빠지라고 콜한다. 그의 **R**이 살아 있으면 좁은 곳에서 절대 그룹짓지 마라.
- **Sejuani:** 스케일링형 탱커 정글러. 초반 클리어와 압박은 네가 우세. 20분 전에 한타를 강제하라. 후반엔 그녀의 스턴과 팀 peel이 너의 단독 다이브를 이긴다.
- **Master Yi:** 너의 **R**을 조심하라. Yi는 **Q**-**Alpha Strike** 무적 체인으로 fear를 cleanse한다. 그의 **Q**가 쿨일 때 **R**을 아껴라 — 웨이브나 정글에서 쓰는 걸 본 다음 12초 안에 engage하면 된다.

## 파워 스파이크 및 승리 조건

- **3레벨 (첫 풀 클리어 후):** 첫 갱 윈도우. **Q**-**E**-**W**에 포인트가 들어가면 노출된 타겟에 풀콤보가 들어간다. 이제 게의 싸움이 진짜다 — 대부분의 정글러보다 네가 먼저 도착한다.
- **6레벨:** Onslaught of Shadows 활성. 맵 반대편 flank와 다이브가 가능. 사이드 라인이 prio를 잡고 있으면 안개에서 **R**을 박고 한타를 강제하라.
- **Stridebreaker 완성 (~ 10-12분):** 큰 템포 전환. Halting Slash 액티브로 **E**를 쓰지 않고도 도망치는 적에게 붙는다. 직후 Drake 또는 Herald를 압박하라.
- **Sterak's Gage 완성 (~ 22-25분):** 한타 첫 2초를 살아남는 engage 도구가 된다. 오브젝트 주위에서 적 ADC나 미드 라이너를 picks(한타 밖에서 고립된 적을 끊어내기)로 잡아내라.

## 흔한 실수

- **캐스팅 사이에 평타 없이 Q만 난사하기.** Warpath는 속도에서 AD를 뽑는다 — 빈틈에 평타가 들어가게 하라. 애니메이션 캔슬: **Q** 시전 → 평타 강제 클릭 → 다시 **Q**.
- **frontline에 R 박기.** **R**은 측면 진입 도구지 정면 engage가 아니다. 적 탱커에게 fear를 걸면 자기 ADC 곁으로 돌려보내는 꼴이다. 시야나 안개를 활용해 한타를 우회한 뒤 **R**로 캐리들을 관통하라.
- **팀이 시야 안에 없을 때 engage하기.** Hecarim의 모든 피해는 "knockback해서 따라오는 팀에 넘기는 것"이다. 라이너들이 2초 안에 합류 못 하는 거리면 킬은 누구에게도 안 가고 너만 적 정글에서 죽는다.
- **1/3 점수에서 풀 데미지 빌드.** 뒤지고 있고 snowball(킬이 킬을 부르는 누적 우세)이 안 굴러갈 때, Sterak's와 Sundered Sky가 너를 engage 도구로 살려둔다. 망한 게임에 두 번째 코어로 Ravenous Hydra를 가면 두 대 맞고 죽는 dive bot이 된다.
- **E의 ghost를 미니언에 낭비.** **E**는 짧은 발동 시간 동안만 유닛을 통과시킨다. 웨이브나 와드를 뚫어야 할 때 아껴두라 — 정글에서 쿨마다 빼지 마라.

## 고급 팁

미드 게임 오브젝트 주변에서 "fake-flank" 동선을 써라. 일부러 너의 정글에서 시야가 잡히는 곳을 걸어 적이 미니맵에서 너를 추적하게 한 다음, 즉시 fog of war(시야가 없는 어두운 영역)로 빠져 먼 길로 우회하라. 적이 너를 마지막으로 본 위치에 여전히 있다고 가정하고 로테이션할 때, 그들이 예상하지 않은 방향에서 **R**로 들어간다. 이 트릭은 Hecarim의 순수한 Move Speed에 의존한다 — 대부분의 정글러는 시간 안에 거리를 못 메워서 못 한다. Phase Rush와 Stridebreaker 액티브가 있으면 너는 가능하다.
