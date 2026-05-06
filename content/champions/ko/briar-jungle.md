---
title: "Briar Jungle Build & Guide — Patch 16.9"
slug: "briar-jungle"
language: "ko"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Briar 정글 공략. 시작 빌드, 코어 lifesteal 아이템, 핵심 매치업, 파워 스파이크, 흔한 실수와 마무리 고급 팁까지 한 번에 정리."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "평타와 스킬이 누적 출혈을 적용하고, 그 피해의 일부로 Briar를 회복시킨다. 잃은 체력에 비례해 회복량이 증가하며, 자체 HP regen은 없다."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "짧은 도약으로 대상을 기절시키고 Armor와 Magic Resist를 % 감소. 주력 gap closer (거리 좁히기)이자 trade (짧은 교환) 시작 도구."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "앞으로 도약해 가장 가까운 적(챔피언 우선)에게 자가 도발, Attack Speed·Move Speed·AOE 평타 획득. 재시전하면 잃은 체력 비례 강화 물기로 회복."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Blood Frenzy를 취소하고 채널링: 차징 중 피해 감소 + HP 회복. 발사 시 슬로우, 풀 차지면 벽에 충돌해 기절. W 자기 캔슬이 핵심 메커닉."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "글로벌 보석을 차서 처음 맞은 챔피언을 prey로 표시. Briar가 날아가 착지 시 주변에 fear, prey가 죽을 때까지 저항·lifesteal·Move Speed 강화 Frenzy 유지."
      dd_spell_id: "BriarR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "double-AD 조합 상대 (예: Yasuo + Caitlyn): burst를 느린 출혈로 분산시켜 W 회복으로 리셋할 시간 확보"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP burst 위협 상대 (Syndra, Veigar, Lissandra) — AP poke가 강할 때 마법 보호막이 발동, R 진입 중 즉사 방지"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대가 하드 CC 3개 이상(stun, root) 보유 시 Steelcaps에서 교체: tenacity로 R 진입이 도중에 끊기지 않게 한다"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "지속 마법 피해 위주의 AP-heavy 조합 상대: Crimson Curse 자가 회복과 W 물기 회복을 25% 증폭"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "백라인 carry에게 R 적중 후 prey가 쓰러질 때까지 강화 Frenzy를 유지. Sundered Sky와 Bloodthirster가 추격 중 체력을 채워주고, fear는 peel 담당을 흩어 놓는다."
  weakness: "사거리가 없고 W 자가 도발이 가장 가까운 적에게 고정 — 능숙한 상대는 Frenzy를 탱커에게 미끼로 던지고, CC 사슬로 묶어둔 채 사거리 밖에서 peel한다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 트리 (장기 fight 룬): W Frenzy는 5초 이상 평타 추격이라 burst 키스톤은 초반에 피해를 낭비한다. Conqueror는 매 타격마다 누적되어 R이 닿을 때 폭발하고, Triumph는 처치 시 회복, Alacrity는 Attack Speed, Last Stand는 저체력에서 보상을 준다."
    secondary_rationale: "Domination 보조: Treasure Hunter는 첫 gank (정글에서의 기습)에서 골드를 앞당겨 주고, Relentless Hunter는 비전투 Move Speed로 R 크로스맵 후속을 가능하게 한다 (사이드 라인 교전에 한 웨이브 일찍 도착)."
    secondary_alternative: "상대가 스킬 기반 CC 3개 이상(Lissandra R, Maokai E, Sejuani Q)을 보유하면 Domination 대신 Resolve로 가서 Second Wind (HP 50% 미만 자동 회복)와 Revitalize (W·R 자가 회복 +10%)를 든다. snowball 대신 CC 사슬 생존력을 챙기는 트레이드."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "이동기 없는 미드 mage"
      reason: "R는 처음 맞은 챔피언을 표시하는 글로벌 skillshot. dash가 없는 후방 mage는 fear + Frenzy 사슬에 끌려와 chunk 피해가 들어오기 전엔 빠져나갈 수 없다."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "느린 탱커 정글러"
      reason: "Q의 % Armor 감소가 그들의 저항을 깎고, W의 Attack Speed + 지속력이 장기전을 이긴다. 카이팅도 안 되고 CC도 일회성: 쿨다운에 들어가면 나머진 다 회복으로 받아낸다."
    - examples: ["warwick", "shyvana"]
      archetype: "탈출기 없는 sustain skirmisher"
      reason: "정글 안 mirror 1v1. Briar의 W 물기는 잃은 체력에 비례하므로, 싸움이 길어질수록 수치가 그녀에게 기운다. Q의 stun이 채널링 ulti를 끊는다."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "다중 root을 가진 AOE CC"
      reason: "Frenzy 도중에 CC를 사슬처럼 걸고, 유일한 탈출 수단인 E (W 자기 캔슬)는 채널이 길어 회복이 끝나기 전에 다시 CC가 들어온다. R는 그녀를 최악의 위치로 던져 넣는다."
    - examples: ["olaf", "morgana"]
      archetype: "CC 면역 또는 anti-heal 픽"
      reason: "Olaf의 R은 Briar의 E 넉백·기절을 cleanse하고, Morgana의 E spell shield는 Q의 stun과 R의 fear를 막아 Frenzy가 누적되기 전에 engage 창을 닫는다."
    - examples: ["nidalee", "gragas"]
      archetype: "변위기 보유 장거리 poker"
      reason: "Nidalee는 W 사거리 밖에서 javelin으로 Briar의 clear를 깎고, Gragas의 R 또는 E는 추격 중 Frenzy 밖으로 그녀를 밀어내 누적을 리셋하고 sustain 없이 고립시킨다."
---

## 개요

Briar는 근접 **diver / skirmisher** (적의 carry에게 뛰어들어 장기 1v1을 이기는 챔피언)다. 자기 통제권 상실 자체를 무기로 바꾼다 — **Blood Frenzy (W)** 가 가장 가까운 적에게 자동조종으로 그녀를 던지면서 Attack Speed와 Move Speed 보너스를 주고, 패시브 **Crimson Curse** 는 자기 평타가 적용한 출혈로부터 그녀를 회복시킨다. 자체 체력 재생이 0이라 살아남는 유일한 방법은 계속 때리는 것 — 공격을 멈추는 순간 회복도 멈춘다. 궁극기 **Certain Death (R)** 는 글로벌 skillshot (맵 전체를 가로지르는 스킬)으로, 대상을 prey로 표시하고 그 prey가 죽을 때까지 강화된 추격 상태로 그녀를 묶어두며, 착지 시 주변의 모든 적을 fear (적이 잠시 통제 불능 상태로 도망가게 하는 효과)에 빠뜨린다.

게임 플랜은 W Frenzy의 광역 피해로 정글 캠프를 빠르게 clear하고, 6레벨부터 gank (정글에서 라인으로의 기습)를 노리는 것 — R로 백라인 타겟 (팀 뒤에 자리한 약체 carry)을 peel 담당 (carry를 보호하는 아군)에게서 떼어 낸다. 거기서부터 snowball (초반 킬을 더 많은 킬로 굴리기)로 추격 머신이 되어, 아이템 lifesteal과 자가 회복을 누적해 1v1을 끊임없이 회복으로 이긴다. 하이 스킬 동작은 W-인-E 자기 캔슬 — 자신의 Frenzy를 **Chilling Scream (E)** 으로 끊어 회복하고 재배치한 뒤 Q로 다시 진입하는 정확한 타이밍을 아는 것.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. 펫 퀘스트는 3-4분쯤 자동 완료된다.

**코어 아이템 (구매 순서):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Hailblade에서 펫이 진화한 것 (XP가 충분히 쌓이면 3-4분쯤 자동 진화). Gustwalker companion은 챔피언 피해 시 Move Speed를 주고, W 보너스에 누적되어 clear에서 gank로의 전환을 깜짝 dive로 바꾼다.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 첫 legendary 아이템, 첫 큰 power spike (챔피언이 훨씬 강해지는 순간). 패시브로 다음 평타가 확정 치명타 (crit = 두 배 피해 공격)로 변하고 회복까지 준다. 그 회복이 강화 W 물기와 맞물려, Crimson Curse가 누적될 잃은-HP 연료를 공급한다.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 대부분의 적 조합에 기본. 평타 (AA = auto-attack) 피해를 줄여 주고, 이는 marksman (Caitlyn, Jinx 같은 장거리 물리 carry)을 상대로 하는 장기 Frenzy fight에서 매우 중요하다.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 기본 AD 기반 추가 Attack Damage와 Lifeline 보호막 (HP 임계값 패시브: HP 30% 미만으로 떨어지면 자동 발동하는 보호막). 그 보호막이 잘못된 R 진입(R 풀-engage 추격)에 대한 안전망이다.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal 상한 (lifesteal = 평타 피해의 % 만큼 회복으로 환원)을 올리고, 초과 회복을 보호막으로 변환. Crimson Curse + Sundered Sky와 결합하면 anti-heal 아이템 (받는 회복을 줄이는 아이템)을 안 산 상대 팀을 회복으로 압도한다.

**상황별 아이템:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 강한 물리 딜러 둘이 있는 팀 상대 (예: Yasuo + Caitlyn): 받은 burst를 몇 초에 걸친 느린 출혈로 변환해 W 물기 회복으로 리셋할 시간을 준다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — AP burst 상대 (Syndra, Veigar, Lissandra). AP 위협이 한창 콤보를 박을 때 마법 보호막이 정확히 발동.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적이 하드 CC (CC = 캐릭터를 묶는 stun, root, fear) 3개 이상이면 Steelcaps에서 교체. 이 부츠의 Tenacity 스탯이 그 CC 효과의 지속시간을 줄여, R 진입이 비행 도중 chain-stun되지 않는다.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 지속 마법 피해 위주의 AP-heavy 조합 상대: Crimson Curse 자가 회복과 W 물기 회복을 25% 증폭, Briar의 정체성을 패치하지 않고 두 배로 살려준다.

**부츠:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. CC 수가 AA 위협 수를 넘어서면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**스킬 마스터 순서:** **W** 선마 (DPS, 지속력, Move Speed), **Q** 후마 (gap close + % Armor/MR 감소), **E**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. 보조는 **Domination**의 **Treasure Hunter** + **Relentless Hunter**, 또는 적 팀이 스킬 기반 CC 3개 이상을 사슬처럼 거는 경우 **Resolve**의 **Second Wind** + **Revitalize**.

## 주요 매치업

- **Warwick:** 정글 안 sustain mirror (양쪽 다 fight에서 회복을 많이 한다). 그는 Attack Speed로 scaling, 너는 W 광역 피해 + 잃은 HP 비례 물기 피해로 scaling. 양쪽 다 풀 HP에서 시작하지 마라: 그의 Q (네게 fear를 거는)부터 빼게 만들어 E로 자기 Frenzy를 캔슬해 회피하고, 그의 ulti가 쿨다운에 들어가면 다시 진입.
- **Lillia:** Q 패시브 피해와 W 슬로우로 너를 kite한다 (멀어지면서 때리기). 그녀가 Q를 난사하며 네게 걸어올 때를 위해 E를 아껴라 — 넉백이 그녀를 벽에 박아 stun한다. E가 없으면 영원히 너 주위를 돈다.
- **Lee Sin:** 초반 fighter, 3레벨에 Q + Smite (정글러 summoner spell)로 시작하면 너를 이긴다. 4레벨까지 그의 red-side 정글을 피해라; Sundered Sky가 완성된 후엔 수치가 너에게 기울고 그의 W 보호막은 네 W 물기만큼 회복을 못 준다.
- **Sejuani:** 하드 CC를 가진 탱커 정글러. Q의 Armor 감소 (그녀의 Armor 스탯을 % 만큼 깎음)가 그녀를 열어 주지만, 그녀의 R이 비행 중 네 R 진입을 끊는다. 그녀의 ulti 쿨다운을 추적해라 — 살아있으면 그녀 근처 타겟에 R을 시작하지 마라.
- **Kha'Zix:** skirmisher의 전형적인 카운터픽 (드래프트에서 너를 무력화하려고 일부러 뽑는 챔피언). 너를 고립시키고 2초 안에 burst한다 (burst = 1-2초 안에 들어가는 고피해). 6레벨 후엔 팀과 함께 다니고 시야를 두고 플레이해라 (와드를 써서 기습당하지 않게); 그의 정글 쪽으로 단독 invade하지 마.

## 파워 스파이크 및 승리 조건

- **3레벨:** 기본기 셋이 모두 활성화. 첫 합리적 gank 창 — 벽 너머로 Q로 타겟에 점프, W로 Frenzy, Q로 벽치기 stun.
- **6레벨:** 첫 **Certain Death**. 장거리 크로스맵 gank (R로 맵을 가로질러 사이드 라인을 친다)가 실제 위협이 된다: 이미 Flash를 쓰고 dash가 없는 적도 R가 락온되면 trade를 잃는다.
- **Sundered Sky 완성 (~10-12분):** 첫 듀얼 spike (1v1을 안정적으로 이길 수 있는 시점). 시야 밖에서 R로 진입하는 대부분의 정글러와 라이너를 1v1로 이긴다.
- **Sterak's Gage 완성 (~22-26분):** Lifeline 보호막이 실패한 R 진입을 킬로 바꾼다. Bloodthirster의 overheal과 결합해 너는 팀의 frontline (fight를 여는 탱키 몸체)이자 finisher가 된다.

## 흔한 실수

- **carry 대신 탱커에게 W-Frenzy.** W의 자가 도발이 가장 가까운 적(챔피언 우선)에게 고정되지만, Maokai (탱커)가 Caitlyn (carry)보다 가까우면 Maokai를 먹는다. 먼저 Q로 frontline (팀 앞에 선 탱키 챔피언) 을 뛰어 넘어라; W의 자동조종이 발동하기 전에 Q가 너를 우선 타겟에 위치시킨다.
- **벽 stun 노리고 E를 너무 오래 들고 있기.** 풀 차지 E는 적을 넉백하지만 채널 (가만히 서서 시전하는 시간)이 길고 그동안 피해를 받는다 (감소될 뿐 차단되지는 않음). 정렬된 벽이 없으면 50-70% 차지에서 발사해 슬로우만 챙겨라 — 부분 E는 너를 살리지만, 풀 E는 너를 죽인다.
- **4명짜리 적 그룹에 R 사용.** R가 prey 주변 적을 fear에 빠뜨리지만 1.5초 후 회복한다. 그들이 회복하면, 너는 강화 Frenzy 상태로 그들 한가운데에 혼자 있고, 너를 peel해줄 (peel = 너에게 붙은 공격자를 떼어내는 보호) 아군이 없다. prey가 떨어져 있을 때 R를 써라 — flank (옆에서 혼자 접근하는 적), 로테이션, 후방이 고립된 순간 — 깔끔히 뭉친 engage (적이 모두 모여 있는 fight)에는 쓰지 마.
- **Crimson Curse가 누적되려면 잃은 HP가 필요하다는 걸 잊기.** 보너스 회복은 HP가 낮아질수록 커진다. gank 성공 후 두 번째 fight가 다가오면 풀 HP에서 베이스로 recall하지 마; 40% HP를 유지하면 다음 물기 회복이 거의 두 배로 강해진다.

## 고급 팁

**E를 통한 W 자기 캔슬**을 연습하라: Frenzy가 잘못된 적을 겨냥하면 (carry 대신 탱커, 또는 너를 CC 쪽으로 끌고 갈 때), Frenzy 도중에 E를 눌러 리셋. E 채널 중의 피해 감소 + % 최대 HP 회복이 망친 engage를 무료 재배치로 바꾼다. 우선 타겟이 Q 사거리에 들어오는 순간 E를 미차지로 (또는 30% 차지로) 발사하고, Q로 그에게 점프해 다시 W로 올바른 사람에게 깨끗한 Frenzy를 시작. 총 애니메이션 비용은 약 1초; 킬 전환의 차이는 HP 바 하나 분량이다.
