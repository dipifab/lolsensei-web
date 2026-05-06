---
title: "Elise Jungle Build & Guide — Patch 16.9"
slug: "elise-jungle"
language: "ko"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Elise jungle 공략. Spider Form 갱킹 동선, Cocoon 셋업, 아이템 우선순위, 핵심 매치업, 파워 스파이크와 마지막 고급 팁까지 한 페이지에 정리."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "두 가지 폼. Human: ability 적중 시마다 휴면 Spiderling 저장. Spider: 평타가 bonus magic damage를 입히고 Elise를 회복시킨다."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: 현재 체력 비례 피해 단일 대상 poke (anti-tank). Spider: 잃은 체력 비례 도약(저체력 처형)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: 앞으로 걸어가다 적 근처에서 폭발하는 Spiderling 투척(슬로우 + AOE 피해). Spider: Elise와 펫이 attack speed 획득, 지속 DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: 첫 번째 적을 기절시키는 직선 skillshot. Spider: Rappel — Elise가 무적 상태로 떠올랐다가 대상 위로 떨어지며 추가 피해와 회복."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Human(원거리 caster, 사거리 길다)과 Spider(근접 skirmisher, move speed 추가 + Spiderling 무리)를 토글하는 ultimate. 쿨다운에 free swap."
      dd_spell_id: "EliseR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 magic CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun) — 스펠 실드가 ulti 하나를 막아 Rappel을 살린다"
    - dd_id: "3135"
      name: "Void Staff"
      against: "적 2명 이상이 Magic Resist 아이템을 사면 교체; 후반에 Rylai's나 Banshee's 대체"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 hard CC(스턴, 에어본) 상대 — tenacity(CC 지속시간 감소)를 주는 boots swap"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo); Magic Penetration 역할 겸비"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "3-6레벨 E cocoon 스턴으로 초반 갱킹 스노우볼링, 이후 Liandry's와 Rylai's 완성 시 Rappel 활용 오브젝트 다이브로 전환. 미드 게임에 squishy 백라이너를 픽."
  weakness: "프론트라인이 Magic Resist와 HP를 쌓는 후반에 약해진다. Spider form엔 안정적 disengage 없음: 다이브 중 cocoon 빗나가면 보통 Elise 사망."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주력 트리 Domination: W slow + E stun + Q burst가 세 번의 ability 적중을 만들어 Electrocute가 매 갱킹마다 발동된다. Sudden Impact는 Rappel 대시를 보상하고, Treasure Hunter는 takedown 골드를 추가, Ultimate Hunter는 R 쿨다운 단축."
    secondary_rationale: "보조 트리 Sorcery: Manaflow Band가 cocoon 비용이 큰 초반 마나 문제를 해결, Transcendence가 Ability Haste를 40% 소프트 캡 위로 끌어올리고 takedown마다 쿨다운을 환급한다."
    secondary_alternative: "강한 poke나 카운터 정글 상대 (Lee Sin, Graves, Nidalee)에선 Sorcery 대신 Resolve로 바꿔 Bone Plating(8473, 3타 피격 후 피해 감소)과 Revitalize(8453, 힐과 실드 증폭)로 초반 sustain을 보강한다."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "dash나 은신이 없는 squishy 라이너"
      reason: "3-4레벨 E cocoon이 탈출기 없는 평면 타겟에게 그대로 적중. Rappel(Spider E) 캐스팅 중 무적이라 Flash를 써도 다이브가 확정된다."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "6레벨 이전 폼이 약한 정글러"
      reason: "Master Yi는 6 전에 듀얼 불가, Kayn은 퀘스트 끝나기 전 form-locked, Shyvana는 안정적 CC 부재. Elise는 Scuttle Crab을 무료로 챙기고 카운터 정글로 골드 격차를 만든다."
    - examples: ["draven", "kalista", "samira"]
      archetype: "킬을 위해 오버익스텐드하는 공격적 ADC"
      reason: "전진 포지셔닝이 cocoon 각을 헌납. 강 너머로 밀린 라인에서 3레벨 갱킹은 W slow + E stun이 서폿 CC와 연계되며 보통 킬로 직결된다."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "hard CC 카운터 인게이지를 가진 탱키 인게이저"
      reason: "AOE CC가 Rappel 하강 중이거나 다이브 commit 직후의 Elise를 잡는다. 두 아이템이 쌓이면 magic burst로 녹지 않고, Spider form엔 disengage 수단도 없다."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "갭클로저를 보유한 강한 초반 듀얼리스트"
      reason: "cocoon 마나가 떨어지거나 Rappel 타이밍을 놓치면 3레벨 1대1에서 Elise를 이긴다. 그들의 강을 침범하지 말 것: 대시가 너의 유일한 탈출구를 잡아먹는다."
    - examples: ["olaf", "garen"]
      archetype: "CC 면역 다이버 (패시브 정화 또는 ult immunity)"
      reason: "Olaf R과 Garen Q가 스턴 체인을 끊고 너의 유일한 셋업을 무시한다. cocoon이 적중을 멈추면 Elise의 all-in(트레이드 풀 commit)이 무너지고 탈출구 없이 듀얼당해 죽는다."
---

## 개요

> **약어 정리(한 번만 읽기):** **ADC** = Attack Damage Carry, 물리 딜러 봇 라이너 (Caitlyn, Jinx). **AP** = Ability Power, 마법 ability를 강화하는 스탯. **MR** = Magic Resist, 마법 방어. **CS** = Creep Score, 처치한 미니언 수. **CC** = Crowd Control, 챔피언을 멈추는 모든 효과 (스턴, 슬로우, 에어본). **Gank** = 정글러의 라인 매복. **Dive** = 타워 아래로 들어가 처치. **Trade** = 라인에서의 짧은 피해 교환. **All-in** = 풀 commit 교전. **Snowball** = 계속 커지는 우위 (킬 → 골드 → 아이템 → 더 많은 킬).

Elise는 burst-mage diver다 — 원거리에서 poke한 뒤 적 백라인에 풀 commit으로 들어가 킬을 따내는 챔피언. 그녀의 키트는 Human form에서 **Cocoon (E)** 으로 타겟을 스턴시키고, **Spider Form (R)** 으로 전환해 **Rappel (E)** 다이브와 처형 피해를 넣는 흐름을 중심으로 돈다. 게임 내에서 6레벨 이전 정글이 가장 강하다: 3레벨이면 이미 4개의 피해 ability를 모두 갖추고 거의 모든 정글러를 1대1로 이긴다. 대가는 높은 메카닉 복잡도(form-swap 타이밍, skillshot 정확도)와 탱커들이 Magic Resist를 쌓는 후반의 약한 모습이다.

게임 플랜: 매치업이 허용한다면 3레벨에 적 정글 캠프를 침범하고, 그 뒤 킬 압박이 가장 큰 라인(squishy ADC, 저체력 미드)을 갱킹하며 스노우볼링(시간이 갈수록 커지는 우위)한다. 11-13분쯤 **Liandry's Torment**가 완성되면 갱킹 위주 동선에서 오브젝트 컨트롤로 전환 — Rappel을 "blink"(짧고 즉각적인 텔레포트)로 활용해 타워 다이브, 우선순위 타겟 픽오프, Drake나 Rift Herald 강제.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (원거리용 정글 스타터) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**코어 아이템 (구매 순서):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade의 퀘스트 업그레이드 (3-4분쯤 충분한 XP를 먹으면 자동 진화). AP burst 챔피언용 동반자: ability 시전 후 다음 평타에 magic damage proc(발동 효과)을 추가, **Spider Q**와의 소규모 교전에서 완벽히 맞물린다.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 번째 완성 아이템. 모든 ability에 HP burn(몇 초간 분산되는 피해)을 추가, 후에 **Rylai's**와 누적되어 단일 대상 지속 피해가 무적급이다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 magic penetration으로 Q와 E가 squishy 타겟(방어력 낮은 챔피언, ADC와 mage)에게 더 강하게 들어간다.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 모든 ability가 타겟을 슬로우. **W**(이미 슬로우)와 **Spider Q** 도약과 압도적인 시너지.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 생존 아이템. 액티브가 Rappel 다이브 후 2.5초간 무적 상태로 만들어 팀이 후속을 잇기 전에 죽지 않게 해준다.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 scaling 배수기. 마지막에 사서 1000+ AP를 찍는다.

**상황별 아이템:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 magic crowd control 상대 (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적 둘 이상이 Magic Resist 아이템을 살 때.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 강한 hard CC(스턴, 에어본)이 많을 때 boots swap.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo); Magic Penetration 역할도 한다.

**신발:** Sorcerer's Shoes가 기본. 적 팀에 강한 hard CC 출처가 셋 이상이면 Mercury's Treads로 교체.

**스킬 순서:** **Q** 선마(피해와 처형), **E** 차마(cocoon 쿨다운 — 쿨이 짧을수록 더 많은 스턴), **W** 마지막. **R**은 6, 11, 16레벨에 1포인트씩.

**룬:** 주력 **Domination**에 **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**.

## 주요 매치업

- **Lee Sin:** 캠프 욕심내면 3레벨 이후 듀얼에서 너를 이긴다. 그의 동선을 추적 — 봇 사이드에 있으면 톱 사이드의 그의 red나 blue 캠프를 침범. 그가 missing일 때 fog(와드 없는 강 부쉬)를 face-check하지 마라.
- **Graves:** 짧은 E (Quickdraw)가 cocoon에서 도망 못 쳐 6 이전엔 Elise에게 패배, 하지만 후반 scaling이 더 좋다. 10분 전에 그의 라인을 두 번 갱킹 다이브하지 않으면 두 아이템에 도달해 너를 outscale한다.
- **Master Yi:** 초반 무료 매치업. 그의 두 번째 캠프(세 번째로 클리어하는)를 침범, 킬, 반복. Wit's End와 Botrk 이후엔 1대1을 이기므로 win condition은 25분 전 게임 종료.
- **Sejuani / Maokai:** Hard 카운터 인게이지. 그들이 AOE CC를 쓴 후로 Rappel을 아끼고, 절대 먼저 인게이지하지 마라. 한타에선 탱커 벽을 뚫는 대신 백라인 측면을 노려라.
- **Olaf:** 그의 R (Ragnarok)이 cocoon 스턴을 비행 중에 정화한다. 다이브에 쓰길 기다린 뒤, 쿨다운인 6초 안에 재인게이지.

## 파워 스파이크 및 승리 조건

- **3레벨:** 첫 Spider form 해금과 풀 ability 키트. 이 구간에 게임 내 어떤 정글러보다 강한 1대1 피해를 가진다 — 즉시 침범하거나 오버익스텐드된 라인을 갱킹.
- **6레벨:** **R** 자유 swap. Spider form에서 벽을 통과하는 disengage가 가능해(작은 move speed 부스트) 갱킹 압박이 두 배.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment 완성 (~ 11-13분):** 첫 번째 큰 scaling 스파이크. 단일 대상 다이브가 ADC와 mage를 두 번의 ability 로테이션에 처치. 완성 즉시 Drake나 Rift Herald 강제.
- **두 아이템 + 신발 (~ 16-18분):** 정점 구간. 이후로는 적이 Magic Resist를 쌓으면서 상대적 강함이 떨어지기 시작 — 이 lead를 Baron이나 Elder Drake 콜로 전환하는 것이 일이다.

## 흔한 실수

- **E cocoon을 poke 도구로 던지기.** Cocoon은 너의 유일한 셋업 — 빗나가면 후속이 없다. 타겟이 commit 상태(low HP, Flash 사용, **W**로 슬로우)일 때 시전.
- **Flash나 R 없이 Spider form에서 다이브하기.** Spider form엔 탈출 수단이 없다(no dash, no shield, no 무적). **R**이 쿨다운이면 commit 금지; 빠지고 3초 기다려라.
- **E 대신 W 차선마.** W는 클리어 속도를 약간 늘리지만 갱킹 신뢰도엔 아무것도 추가하지 않는다. E 랭크업이 직접 cocoon 쿨다운을 낮추고 Rappel 피해를 올린다 — 그게 너의 피해이자 CC다.
- **Smite를 오브젝트용으로 안 아끼고 Scuttle Crab에 쓰기.** Drake와 Rift Herald 경합용으로 Smite를 아껴라. Scuttle의 70 골드와 move speed 버프가 Smite up 적에게 Drake를 잃을 가치가 없다.
- **앞서고 있을 때 한타에서 Spider form 근접 사거리에 머무르기.** 백라인을 처치한 뒤엔 Human form으로 swap해 cocoon으로 정리. Spider form은 평타 사거리가 근접 — fed(킬 스노우볼) Elise가 거기 머물면 킬을 그대로 헌납한다.

## 고급 팁

**Rappel (Spider E)** 을 공격용뿐 아니라 *방어용* blink로 사용. 듀얼리스트가 너에게 commit하면 low HP 미니언이나 정글 안쪽 멀리 있는 미니언에 Rappel을 시전하라: Elise는 lift 동안(~2초) 무적이 되어 Lee Sin R이나 Vi Q 같은 ulti를 회피하기 충분하다. 쿨다운은 짧다(랭크 5 기준 10초) — 생존을 위해 쓰는 편이 공격용으로 쓰는 것보다 더 많은 킬을 살린다.
