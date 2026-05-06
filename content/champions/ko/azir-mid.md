---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "ko"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Azir 미드 공략. 시작 아이템부터 battle mage 코어 빌드, 주요 매치업 대처, 파워 스파이크, 라인전에서 자주 하는 실수, 그리고 E + Flash + R Shuffle 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "쓰러진 아군 타워 자리마다 한 번씩, Azir는 임시 Disc of the Sun을 부활시킬 수 있다. 강력한 타워가 잔해 주변 공간을 통제한다."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "활성화된 모든 Sand Soldier를 지정 지점으로 보내 직선상 마법 피해와 슬로우를 입힌다. 핵심 poke이자 군인 재배치 도구."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Sand Soldier 소환 (charge 기반). 군인은 Azir의 평타를 연장한다. 군인 옆에서 평타하면 군인이 직선으로 찔러 마법 피해."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "보호막 + 기존 군인 방향 dash. 챔피언에 닿으면 멈추고 군인 charge 1회 환급. 유일한 escape이자 유일한 gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "군인의 벽이 전진하며 적을 knockback하고 몇 초간 차단선을 남긴다. 상징적인 'Shuffle' 도구."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Diana, Talon, Akali) — 잡혔을 때 stasis가 E 쿨을 메워준다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC가 강한 상대 (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사면 즉시 교체 — 군인 평타가 MR을 다시 뚫는다"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo) — anti-heal이 군인 타격마다 적용"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Nashor's Tooth + Sorcerer's Shoes 완성 (~ 18-20분) 후, 군인 연장 평타로 오브젝트 교전을 통제하고 R + Flash Shuffle로 적 carry를 아군 쪽으로 밀어 넣는다."
  weakness: "메카닉 요구가 높고 6레벨 전엔 약하다. E가 없으면 escape이 없다. 장거리 chip damage와 Wind Wall (Yasuo, Yone)이 Q 군인과 R 모두를 차단한다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "dash 없는 immobile mage"
      reason: "Azir 군인의 사거리가 이들의 시전 사거리를 압도한다. dash가 없어 군인-Q poke를 피할 수도 없고, W로 강화된 평타 시퀀스를 끊을 수단도 없다."
    - examples: ["annie", "syndra"]
      archetype: "단거리에서 예고 동작 큰 all-in mage"
      reason: "Azir는 이들의 commit 윈도우(공격하려고 발을 내딛는 그 순간)에 거리를 유지한다. 다가올 때마다 군인 평타가 깎고, Flash로 들어와도 R Shuffle로 all-in을 뒤집는다."
    - examples: ["malzahar", "kassadin"]
      archetype: "초반 소규모 교전이 약한 후반형 mage"
      reason: "Azir는 1레벨부터 W로 안전하게 farming하면서 경험치도 안 주고 후반 체급을 따라간다. 14분이면 그가 먼저 spike에 도달한다."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 보유 챔피언"
      reason: "Wind Wall이 모든 Q 군인 라인과 R 벽 후속을 먹는다. 핵심 poke가 봉쇄되면 Azir는 melee 도구가 없는 근거리 mage가 된다."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "다중 dash를 가진 초반 burst assassin"
      reason: "E가 없는 6레벨 이전에 all-in한다. Zhonya's가 있어도 multi-dash 콤보가 R 발동 전에 박힌다."
    - examples: ["xerath", "vel-koz"]
      archetype: "장거리 artillery mage"
      reason: "Azir 군인 사거리(740) 바깥에서 일방적으로 체력을 깎는다. 6레벨 전 sustain이 없어 첫 아이템이 나올 때 이미 저체력이다."
---

## 개요

Azir는 **Sand Soldier** — **W (Arise!)** 로 소환하는 작은 유령 같은 유닛 — 를 통해 장거리에서 싸우는 battle mage다. 이 군인은 원격 평타 거점 역할을 한다. Azir가 군인 옆에 있는 적을 평타하면, 군인이 직선으로 찔러 마법 피해를 입힌다. 이 가이드 안에서 가장 높은 skill ceiling을 가졌고 (Riot 난이도 9/10), 솔직히 초반 레벨은 약하다. 첫 군인을 깔고 **W → Q** 머슬 메모리가 잡히기 전까지는 대부분의 라이너 상대로 trade(라인전에서의 짧은 피해 교환, 본격적인 fight가 아님)에서 그대로 깨진다.

한 줄 게임 플랜: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** 가 18분쯤 완성될 때까지 **W**로 안전하게 farming, 그 뒤로는 **R (Emperor's Divide)** — 그 유명한 "Shuffle" — 으로 적 carry(상대 팀의 고데미지 챔피언)를 오브젝트 교전(맵의 큰 오브젝트 주변에서 일어나는 한타 — Drake, 봇 강에 있는 용; Atakhan, 새로운 미드게임 보스; 후반의 Baron Nashor) 중에 아군 쪽으로 밀어 넣는다. 실력 차이는 세 곳에서 갈린다 — 군인 배치 (네 위치 vs 군인이 만들어주는 평타 사거리), **E + Flash + R** "Shuffle" 콤보, 그리고 유일한 escape인 **E**를 언제 써야 하는지 vs 언제 counter-engage(상대 공격을 그대로 되돌려치는 순간)를 위해 아껴야 하는지 판단하는 능력이다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** 은 건너뛴다. **W**(적은 마나)와 **Q**(중간 마나)에만 마나를 쓰면 Doran's 마나 회복으로 충분하다.

**코어 아이템 (순서대로):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 매판 첫 아이템. 공격 속도 덕에 군인 연장 평타(basic attack, AA — Azir 본인 평타 사거리는 군인이 옆에 있을 때만 의미가 있다)가 더 빨리 나가고, on-hit 마법 피해(평타에 맞을 때마다 추가로 들어가는 피해)는 군인의 모든 타격마다 누적된다. 이게 spike(챔피언이 의미 있게 강해지는 순간)다 — 수동에서 위협적인 존재로 전환되는 시점.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration(퍼센트가 아닌 고정값으로 적의 마법 저항을 무시). squishy(방어력이 낮은 챔피언, ADC나 다른 mage)를 지우려는 미드 mage의 기본 신발.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 모든 AP(Ability Power, 마법 피해를 올려주는 스탯) 계수를 증폭시킨다. 이 아이템 후엔 군인 평타와 **Q** 한 번 한 번이 훨씬 세진다. 후반 한타에서의 진짜 damage spike다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst(1-2초에 집중되는 고데미지)와, HP 임계값 패시브(적 HP가 약 35% 이하일 때 발동되는 패시브)가 Shuffle 후 처치 후속과 자연스럽게 맞물린다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver와 assassin 상대 (Zed, Diana, Talon, Akali). "diver"는 위험을 감수하고 후방 carry에게 뛰어드는 챔피언을 말한다. stasis(몇 초간 피해를 받지 않고 움직이지도 않는 상태)가 잡혔을 때 **E** 쿨이 돌아올 시간을 벌어준다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC가 강한 상대 (CC = crowd control: 기절, 매혹, 속박 — 캐릭터의 컨트롤을 빼앗는 모든 효과). 예: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 MR(Magic Resist, 받는 마법 피해를 줄이는 스탯) 아이템을 사는 즉시 교체. 군인 평타와 **Q**가 MR을 다시 뚫는다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo). anti-heal(몇 초간 적의 회복량을 절반으로 깎는 패시브)이 군인 한 방마다 발린다.

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. 팀이 오브젝트 교전에서 **R**을 더 자주 써야 할 때(시전 사이 대기 시간이 더 짧다)는 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 도 가능하다.

**스킬 순서:** **Q** 먼저 마스터(군인 피해와 슬로우가 랭크당 강해지고, 쿨다운이 1랭크 14초에서 5랭크 6초까지 줄어든다), **W** 두 번째(군인 charge 수와 군인 지속시간 증가), **E** 마지막. **R**은 6, 11, 16레벨에 찍는다. 1레벨엔 **W**로 시작 — 군인 없이는 원거리에서 라인을 정리할 수 없다.

**룬:** 주문 트리 **Sorcery**(마법 피해 룬 트리)에 **Arcane Comet**(슬로우나 속박을 적중하면 추가 피해를 입히는 작은 투사체), **Manaflow Band**(스킬로 챔피언을 적중할 때마다 마나 회복), **Transcendence**(5레벨에 쿨다운 감소), **Scorch**(몇 초마다 첫 스킬 적중에 약간의 화상 피해). 보조 트리 **Inspiration**에 **Biscuit Delivery**(라인전 무료 포션)와 **Cosmic Insight**(소환사 주문 가동률 증가). 상대 팀에 저저항 squishy가 둘 이상이면 보조를 **Precision**으로 바꿔 **Presence of Mind**(처치 관여 시 마나 환급)와 **Coup de Grace**(저체력 적 추가 피해)를 든다.

## 주요 매치업

- **Yasuo / Yone:** 그들의 **Wind Wall**이 네 모든 투사체를 막는다 — **Q**의 군인 타격과 **R**의 파동 전부. Wind Wall을 다른 데 쓰기 전엔 **Q**를 아낀다. 군인 한 방으로 벽을 baiting(가치 없는 공격에 벽을 쓰게 강제) 할 수 있으면, 이후 24초 trade는 공짜다.
- **Zed:** 6레벨부터 dive 위협(타워 피해를 감수하고도 너를 죽이려고 들어옴). 두 번째 아이템으로 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**. **E**는 절대 공격용으로 쓰지 마라. 그가 ult를 쓰기 전엔 절대 안 된다. 그가 ult를 쓰고 너에게 **E** + Zhonya's가 있으면 burst를 살아남는다.
- **Veigar:** 평등에서 유리 사이. dash가 없다. 군인-Q poke(안전한 거리에서의 chip damage)가 그가 라스트힛을 치러 다가올 때마다 경험치 사거리 밖으로 밀어낸다. 그의 **E (Event Horizon)** 우리는 자신의 **E** dash를 아껴두고 빠져나오는 식으로 존중한다.
- **Twisted Fate:** roam priority 경쟁. "roam"은 라인을 떠나 다른 라인을 도우러 가는 것, "priority"는 라인을 떠나도 미니언을 잃지 않을 만한 wave-control 우위를 가진 상태다. **W** + **Q**로 쿨마다 라인을 민다. 그가 6레벨에 ult로 돌기 시작하면 팀에 핑을 찍고 그를 쫓아가는 대신 그쪽 사이드에서 tower trade(그가 네 봇을 잡는 동안 너는 그의 타워를 부숨)를 강제한다. Azir는 사이드 라인 웨이브를 **R** Shuffle로 타워에 처박는 데 미드 챔피언 중 최상급이다.
- **Akali:** gap-close가 있는 diver. 그녀가 flank(엄폐되지 않은 측면에서 한타에 진입)을 좋아하는 부쉬에 군인을 미리 깔아둔다. 그녀의 **W (Twilight Shroud)** 은신 지역 안에선 그녀를 타게팅할 수 없다 — **W**를 미리 깔아 그녀가 나오는 순간 군인이 자동으로 공격하게 한다.

## 파워 스파이크 및 승리 조건

- **4레벨:** **Q**에 3포인트가 들어가면 진짜 damage spike가 열린다. 군인-Q poke가 적이 사거리 안에 두 번 연속 들어오면 진짜로 처치를 위협한다.
- **6레벨:** 첫 **R**이 "Shuffle" 콤보를 연다. **Flash + R**이 적 frontline(한타 앞줄의 탱커들)을 너희 팀 안쪽으로 뒤집는다. 첫 시도는 강에서 열리는 2v2 skirmish(소규모 교전, 5v5 한타보다 작은 단위)에서 — 빗나가도 라인을 통째로 날리지는 않는다.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 18-20분):** 팀이 기다려온 미드게임 DPS(damage per second, 초당 피해) 위협이 된다. Atakhan이나 Drake (Atakhan은 미드맵 보스, Drake는 봇 강의 용) 한타를 강제한다 — 이 시점 군인 평타는 대부분의 mage보다 더 강하게 나온다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~ 28-32분):** 군인 평타 한 번 한 번이 squishy를 짓이긴다. 이 순간부터 Azir는 게임에서 손꼽히는 hard carry지만, 최대 군인 사거리 유지와 frontline(앞에 있는 탱커/bruiser)이 버틴다는 전제 하에서다.

## 흔한 실수

- **W가 없는 채로 라스트힛 평타 사거리에 들어간다.** 군인 없이 Azir의 평타는 짧고 약하다. 잡으려는 미니언 밑에 항상 먼저 군인을 소환하고 발을 내딛는다. farming은 군인이 하는 거지, 네 평타가 하는 게 아니다.
- **오지 않는 완벽한 Shuffle을 기다리며 R을 쥐고 있다.** 적 한 명을 밀어내고 벽을 만드는 평범한 **R**도 안 쓰는 것보단 낫다. engage(뛰어들어 한타를 시작하는 행위) 기회가 없을 땐 peel(carry를 diver에게서 보호)용으로 쓴다.
- **탈출 계획 없이 E를 공격적으로 쓴다.** **E**는 유일한 escape다. 안으로 dash하면 군인은 사라지고 dash는 쿨로 들어가고 너는 melee 거리에서 glass cannon(고데미지 무방어 챔피언)으로 멈춰 있게 된다. 처치를 보장하거나 **R**로 즉시 후속할 수 있을 때만 **E** 공격용 사용.
- **Shurima's Legacy 타워가 있다는 걸 잊는다.** 아군 외곽 타워가 부서지면 잔해 위에 강력한 Disc-of-the-Sun 타워를 부활시킬 수 있다. Atakhan 주변 오브젝트 통제, 또는 inhibitor(2차 타워와 Nexus 사이의 구조물) 아래 수비에 활용한다. 대부분의 Azir 유저는 그냥 패시브를 누르지 않는다.
- **W setup 없이 Q를 poke로 난사한다.** **Q**는 *활성화된 모든 군인의 라인*을 따라 피해를 투사한다. 군인이 0이면 **Q**는 아무것도 안 한다. **W** 먼저, *그다음* **Q**로 군인을 원하는 곳으로 보낸다.

## 고급 팁

**E + Flash + R** Shuffle을 Practice Tool(클라이언트 오프라인 훈련 모드)에서 0.4초 안에 나오도록 연습한다. 순서가 중요하다 — **E**는 군인 경로에 너를 묶고, **Flash**는 dash 도중에 너를 재배치해 **R** 벽이 새 위치에서 발사되게 만들고, **R**은 *시전 순간* 캐릭터가 보고 있는 방향으로 차징된다. 제대로 들어가면, fog of war(워드 — 시야를 주는 보초 — 가 없는 보이지 않는 영역) 안으로 들어온 고립된 assassin이나 carry 한 명을 시작 위치와 무관하게 보장된 처치로 바꿔준다.
