---
title: "Heimerdinger Mid Build & Guide — Patch 16.9"
slug: "heimerdinger-mid"
language: "ko"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends Patch 16.9 Heimerdinger 미드 완전 가이드: 최적 빌드 경로, 룬 페이지, 포탑 배치 전략, 주요 매치업 대응, 파워 스파이크 타이밍, 신참자 흔한 실수, 그리고 라인전 지배를 위한 고급 팁까지 정리."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "암살자·다이버 상대 (Zed, Akali, Diana) — 스테이시스로 포탑이 반응할 시간 확보"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량 높은 조합 상대 (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "주요 타겟이 마법 저항 아이템을 구매했을 때"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "포탑 둥지를 세우고 E로 스턴, W로 깎아낸다. 6레벨에 R+Q 메가 포탑으로 적을 밀어내면 움직일 수 없는 죽음의 구역이 된다."
  weakness: "기동성 전무, 포탑 설치 사거리 매우 짧음(350). 모빌 암살자는 포탑이 쏘기 전에 붙고, 포탑은 광역 웨이브 클리어에 즉사한다."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet은 E(슬로우로 대상 고정)와 W에서 발동해 포탑 DPS에 버스트를 더한다. Manaflow Band는 포탑 재배치 중 마나 고갈을 막고, Transcendence는 E·W 쿨다운을 줄이며, Gathering Storm은 후반 AP를 스케일링한다."
    secondary_rationale: "Biscuit Delivery는 마나 소모가 큰 초반을 버티게 하고, Cosmic Insight는 UPGRADE!!! 포함 모든 쿨다운을 낮춰 R+Q 메가 포탑 회전이 잦아져 미드 게임을 정의한다."
    secondary_alternative: "포크가 강한 라인(Xerath, Vel'Koz) 상대는 Inspiration 대신 Resolve의 Second Wind(피격 후 체력 회복)와 Bone Plating(연속 콤보 버스트 감소)으로 라인 생존력 확보를 고려한다."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "대시 없는 비기동 버스트 메이지"
      reason: "포탑 셋이 깔린 둥지에 들어오면 지속 DPS를 피할 수 없다. 그들의 버스트는 거리를 좁혀야 하지만, E의 스턴과 포탑 빔이 접근 자체를 응징한다."
    - examples: ["annie", "malphite", "galio"]
      archetype: "포탑 사거리 안으로 걸어 들어와야 하는 근접 메이지·탱커"
      reason: "이들의 이니시는 근거리 또는 단거리다. 포탑 셋이 깔린 상태에서 진입은 치명적이다 — 풀 충전 빔이 이니시 애니메이션이 끝나기 전에 박힌다."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "포탑 사거리 밖에서 포크하는 장거리 아틸러리 메이지"
      reason: "포탑은 Heimerdinger 주변 일정 반경만 커버한다. 아틸러리 메이지는 1000+ 사거리에서 둥지 밖에 안전하게 자리잡고, 그의 영역에 들어오지 않은 채 체력을 깎아낸다."
    - examples: ["zed", "akali", "katarina"]
      archetype: "포탑 반응 전에 거리를 좁히는 모빌 암살자"
      reason: "포탑은 공격 사이클이 느리다. 트리플 대시 암살자는 둥지에 들어와 첫 빔이 나가기 전에 Heimerdinger를 잡아낸다 — 쿨다운이 그를 살릴 만큼 짧지 않다."
    - examples: ["twisted-fate", "ryze"]
      archetype: "포탑 둥지를 통째로 무시하는 글로벌 로머"
      reason: "Heimerdinger는 로밍이 불가능하다 — 포탑 이동에 Q 셋을 다시 써야 한다. 상대는 사이드 라인에서 공짜 킬을 챙기는 동안 Heimerdinger는 한 번도 싸우지 않는 둥지를 다듬고 있다."
---

## 개요

Heimerdinger는 라인을 적이 머물 수 없는 공간으로 만들어 승리하는 존 컨트롤 메이지다. 그의 **H-28 G Evolution Turret (Q)** — 동시에 최대 셋 — 은 적이 근접 또는 캐스트 사거리에 발을 들이면 즉시 응징하는 지속 데미지 필드를 형성한다. 풀 충전 시 각 포탑은 강력한 빔을 발사하고, **CH-2 Electron Storm Grenade (E)** 는 그 구역의 적을 스턴 또는 슬로우 시키며, **Hextech Micro-Rockets (W)** 는 1325 사거리에서 대상을 깎아낸다. 결과적으로 그의 강함은 전적으로 포지셔닝에 달린 챔피언이다 — 둥지가 살아 있을 때는 정면 교환에서 거의 죽지 않지만, 둥지가 없을 때는 게임에서 가장 취약한 챔피언 중 하나다.

**UPGRADE!!! (R)** 은 이 계산을 완전히 바꿔놓는다. **R+Q** 를 누르면 강화된 메가 포탑이 설치된다 — 광역 스플래시 데미지를 입히고, 슬로우를 적용하며, 추가 **Q** 캐스트와 무관하게 8초간 지속된다. 자율 존 디나이얼 머신이라고 생각하면 된다. 미드 게임 플랜은 6레벨까지 둥지를 세우고 유지하다가, **R+Q** 로 적을 1차 타워에서 떼어놓고 스노볼링(snowball: 초반 우위가 점점 커져 더 큰 격차로 이어지는 것) 으로 미드 게임에 진입하는 것이다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + Health Potion 2개. 마나가 핵심이다 — 포탑 하나당 20 마나, 계속 다시 깔아야 한다.

**핵심 아이템(구매 순):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 첫 아이템 버스트 스파이크, 포탑 재설치용 마나 회복, 그리고 W 포크를 의미 있게 만드는 magic penetration(마법 관통: 적의 마법 저항 일부를 무시하는 능력).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 포탑 사거리에 들어오는 유약한 적을 응징하는 고정 마법 관통.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 적 체력이 일정 이하일 때 버스트를 증폭시켜, R+E 후 W 후속 콤보와 잘 맞물린다.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — **UPGRADE!!!** 쿨다운을 줄이고 궁 사용 중 AP를 올린다. 메가 포탑 회전 빈도가 미드 게임을 정의한다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 배율 — 포탑 빔 하나, 로켓 하나가 그 자체로 위협이 된다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 암살자와 다이버 상대 (Zed, Akali, Diana). 스테이시스(짧게 무적 상태로 얼어붙는 효과) 동안 포탑이 그들의 버스트를 흡수하고, 너는 그들의 쿨다운이 끝나기를 기다리면 된다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐량 높은 조합 상대 (Vladimir, Sylas). 포탑 적중을 통해 Grievous Wounds(치유량을 40% 감소시키는 디버프)를 적용한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 주요 타겟(주요 타겟 = 죽으면 우리 팀에 가장 큰 위협이 되는 적 챔피언, 보통 잘 큰 캐리)이 마법 저항 아이템을 구매하는 순간; 적 팀이 MR을 무겁게 쌓으면 Rabadon's를 대체한다.

**부츠:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes가 기본. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity는 **UPGRADE!!!** 회전 속도를 위해 추가 쿨다운 감소가 필요할 때 허용된다.

**스킬 순서:** **Q** 부터 마스터(주요 데미지원이자 포탑 위력), 그 다음 **W** (포크와 포탑 충전), 마지막에 **E**. **R** 은 6, 11, 16레벨에 찍는다.

**룬:** 주특기 **Sorcery** — **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. 보조 **Inspiration** — **Biscuit Delivery**, **Cosmic Insight**.

## 주요 매치업

- **Syndra:** 원거리에서 구를 던지지만 캐스팅하려면 고정 위치가 필요하다. 1차 타워 아래에 포탑 셋을 깔고, 웨이브를 슬로우 푸시(slow-pushed: 라인 중앙에 미니언이 누적되어 다음 웨이브가 더 크게 도착하도록 유도)한 뒤 **E** 로 구 픽업을 끊어낸다. 6레벨에 분쟁 지점에서 **R+Q** 로 올인(all-in: 적을 처치할 작정으로 풀 커밋한 교전)을 이긴다.
- **Zed:** 풀 중 가장 까다로운 매치업. 포탑이 쏘기 전에 대시로 통과한다. 3레벨과 6레벨 파워를 존중하고, ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass를 두 번째 아이템으로 올린다. 그가 **Death Mark (R)** 를 쓰는 즉시 스테이시스를 발동하면 — 포탑이 3초간 쏠 시간을 번다.
- **Orianna:** 포크 균형 매치업. 한타에서 **Command: Shockwave (R)** 로 네 포탑들을 밀어낼 수 있다. 라인에선 그녀가 접근해야 하는 웨이브 쪽에 포탑을 배치하고, 그녀의 공이 근처에 있을 때 둥지 옆에 뭉치지 마라.
- **Twisted Fate:** 둥지를 무시하고 로밍을 갈 것이다. 그가 떠나기 전에 웨이브를 그의 타워 아래로 밀고, 강가에 와드를 박고, 텔레포트로 돌아오면 **R+E** (knockup) 를 **W** 로 이어붙인다. 그의 매크로 게임(macro game: 맵 전반의 큰 그림 전략) 은 막을 수 없지만, 본진 타워는 처벌할 수 있다.
- **Viktor:** 데미지를 넣으려면 가만히 서 있어야 하는 비기동 메이지. 포탑 셋의 둥지가 그의 **Death Ray (E)** 를 빼게 만들고, 너는 클러스터 뒤에서 **W** 로 포크한다. 6 이후 **R+Q** 메가 포탑이 그를 웨이브에서 완전히 떼어내거나 Flash를 태운다.

## 파워 스파이크 및 승리 조건

- **1레벨:** 첫 캐논 미니언이 등장하기 전에 미니언 웨이브 안에 포탑 둘을 깔아둔다. 평타 사거리에 들어온 적은 놀라울 정도의 DPS(Damage Per Second: 포탑이 매초 가하는 지속 데미지)를 받고 물러서고 — 포크에 마나를 쓰지도 않은 채 first push(라인 우위: 네 미니언이 적 타워로 밀려가서, 라인을 비우고 드래곤이나 미드 합류를 가능케 하는 상태) 를 잡는다.
- **6레벨:** **UPGRADE!!!** 해금. **R+Q** 메가 포탑은 8초 지속되며 CC(스턴, 슬로우 등 모든 군중 제어)를 받지 않는다. Heimerdinger의 구역 전체를 죽음의 함정으로 바꾼다. 즉시 한타나 타워 트레이드를 강요하라.
- **Luden's Echo 완성 (대략 11-13분):** W 포크가 이제 유약한 대상에게 의미 있는 데미지로 크리티컬(crit: 175% 데미지를 가하는 무작위 강화 타격)이 터진다. E + W 와 함께 둥지를 통한 킬을 확정한다.
- **Malignance 가동 (대략 18-20분):** 높은 CDR(cooldown reduction: 스킬 사용 사이의 대기 시간을 줄이는 스탯)에서 **UPGRADE!!!** 쿨다운이 60초 근처로 떨어진다. 회전 한타마다 메가 포탑을 깔 수 있고, 거의 모든 오브젝트 스폰(objective spawns: Baron Nashor 또는 Drake가 맵에 등장하는 시점, 보통 5-6분 간격)에 사용 가능하다.

## 흔한 실수

- **포탑을 일직선으로 배치하기.** 삼각형으로 깔거나 적이 접근하기 위해 반드시 지나야 하는 경로 위에 깔아라. 일직선 셋은 적이 직선으로 전진할 때만 발사되지만, 삼각형은 여러 각도에서 쏘기 때문에 회피가 훨씬 어렵다.
- **R+Q를 개활지에서 쓰기.** 메가 포탑은 존 컨트롤 도구이지 솔로 킬 도구가 아니다. 초크포인트(chokepoint: baron pit, dragon pit, 2차 타워 옆 부쉬처럼 좁은 통로)에 떨어뜨려 적이 데미지 반경을 강제로 통과하도록 한다.
- **포탑이 충전 중인데 Q를 다시 쓰기.** 새 Q는 충전 0짜리 포탑을 깔고 모든 포탑의 충전을 리셋한다. 가장 오래된 포탑이 빔을 쏠 때까지 기다렸다가 교체하라 — 안 그러면 풀 충전 샷을 버리는 셈이다.
- **패시브 이동 속도를 잊기.** **Hextech Affinity** 는 자기 포탑 근처에서 추가 이동 속도를 준다. 둥지를 카이팅(kite: 데미지를 넣으면서 뒤로 빠지는 행위) 패드로 활용하라 — 갱을 피하려면 포탑 클러스터 쪽으로 들어가라, 거기서 멀어지지 마라.

## 고급 팁

**R+E** 의 knockup 후 **W** 후속을 마스터하라. UPGRADE!!! 가 가능할 때 **R** 을 쓰고 곧바로 **E** 를 던지면, 더 넓은 구역으로 떨어지면서 중앙에 있는 적은 단순 스턴 대신 knockup(공중에 띄워져 잠시 행동 불가) 을 받는다. 공중 시간은 스턴과 비슷하지만, knockup은 채널링(Katarina의 궁이나 Zed의 귀환 같은 것)을 끊고, 넓어진 구역은 일반 E 스턴을 회피했을 도주 대상까지 잡아낸다. 적이 공중에 있는 동안 풀 **W** 로켓 바라지를 발사한다 — 다섯 발 모두가 CC 대상에 수렴해 착지 전에 적중하며, 어떤 방어 행동도 불가능한 상태에서 거의 최대 데미지를 박는다.
