---
title: "Annie Mid Build & Guide — Patch 16.9"
slug: "annie-mid"
language: "ko"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Annie 미드 라인 완벽 공략. Pyromania 스턴 셋업, 버스트 빌드 경로, 핵심 매치업 대처법, 파워 스파이크 활용, 자주 하는 실수 교정, 그리고 한 가지 고급 팁까지 모은 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "스킬을 4번 시전할 때마다 Pyromania가 충전된다. 다음 피해 스킬이 적을 스턴시킨다. Annie는 시작과 부활 시점에 스턴이 준비된 상태이므로, all-in 전 미니언으로 카운터를 미리 채워둔다."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "사거리 625의 point-and-click 화염구. 적을 처치하면 마나를 환급하고 쿨다운의 50%를 리셋한다 — 이 챔피언의 가장 저렴한 poke·라스트힛 도구."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "사거리 600 부채꼴 화염. 주력 라인 정리기(원거리 미니언 라인을 한 방에 정리)이자 5레벨 기준 기본 피해가 가장 높은 스킬."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Annie 본인 또는 아군에게 보호막 + 점차 감소하는 이속. 다음 공격자에게 마법 피해 반사. 스킬 시전으로 카운트되므로 — engage 직전 Pyromania 충전용으로 쓴다."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "사거리 600의 자기 중심 AOE 피해와 함께 Tibbers를 소환한다. 곰이 주변 적을 평타로 때리며 화염 피해를 가한다. 시전 자체가 스킬이므로 4스택 Pyromania R은 적중한 모두를 스턴시킨다."
      dd_spell_id: "AnnieR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "기동성 assassin과 diver 상대 (Zed, Diana, Talon, Akali) — R + Flash 후 stasis로 살아남는다"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "하드 CC 없는 kite 조합 상대 — R + W의 슬로우가 적을 Tibbers의 화염 오라 안에 묶어둔다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사는 순간 바로 교체"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "미니언으로 Pyromania를 4스택 채우고, Flash + R로 모인 적에게 자기 중심 AOE 스턴을 박은 뒤 Luden's Companion + Shadowflame로 후방 squishy를 폭발시킨다."
  weakness: "기본 기동성 0, 스킬 사거리 600-625. artillery mage에게 일방적으로 poke 당하고, 스턴이 박히기 전에 R 사거리 안팎으로 dash해 들어오는 assassin에게 우회당한다."
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
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "dash 없는 immobile mage"
      reason: "Annie의 R은 사거리 600의 자기 중심 AOE 스턴 + Tibbers DPS다. dash나 은신이 없는 mage는 6레벨 all-in에서 풀콤보를 그대로 받고 반응할 시간이 없다."
    - examples: ["diana", "katarina"]
      archetype: "선딜이 보이는 melee burst"
      reason: "Annie는 라인 정리 중에 Pyromania를 미리 충전한다. 상대가 gap-close에 commit하는 순간 Flash + R 스턴이 콤보를 끊어 피해가 들어가기 전에 막는다."
    - examples: ["fizz", "kassadin"]
      archetype: "6레벨 이전이 약한 melee mage"
      reason: "둘 다 6레벨 전엔 farm 위해 Q 사거리 안으로 들어와야 한다. Annie는 자유롭게 poke하고, Pyromania를 채운 채 2레벨 타이밍을 잡으며, counter-engage 없이 본진을 강제할 수 있다."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "장거리 artillery mage"
      reason: "Annie가 625에 머무는 동안 850-1400 사거리에서 일방 poke한다. 원거리 poke를 막을 dash나 shield가 없어 매 웨이브 체력만 줄고 all-in으로 받아칠 옵션도 없다."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "6 이후 고기동 assassin"
      reason: "스턴이 박히기 전에 dash나 stealth로 R의 600 반경을 벗어난다. Akali의 연막과 Yasuo의 Wind Wall은 주력 스킬 자체를 그대로 막아버린다."
    - examples: ["twisted-fate", "galio"]
      archetype: "글로벌 / 맵 전체 roamer"
      reason: "Annie는 roam 사거리가 없다 — 웨이브를 정리하고 미드에 남는다. 상대 궁이 사이드와 드래곤을 뒤집기 때문에 1대1 매치업을 이겨도 macro에서는 진다."
---

## 개요

Annie는 게임에서 가장 단순한 burst mage이며(1-2초에 마법 피해를 몰아 넣고 쿨을 기다리는 챔피언), 6레벨 부근의 실수를 가장 가혹하게 응징하는 챔피언 중 하나다. 종이 위 스킬셋은 작아 보인다 — point-and-click Q, 부채꼴 W, 자신 또는 아군용 보호막, 그리고 곰을 소환하는 궁 — 하지만 패시브 **Pyromania**가 모든 것을 묶어준다. 4번째 스킬마다 다음 적중 대상에 확정 스턴이 충전된다. 이 한 가지 메커닉 덕분에 입문자에게 친숙한 챔피언이 확정 스턴 위협체로 변하고, Tibbers가 한 번 소환되면 squishy backline(한타에서 팀 후방에 자리잡는 carry들)을 단 한 버튼에 지울 수 있다.

라인전이든 한타든 게임 플랜은 똑같다. 미니언으로 **Pyromania**를 4스택까지 채우고, 600 사거리까지 다가가 **R**(Tibbers)로 가장 가치 높은 적에게 카운터를 터뜨린 뒤 **W**, **Q**를 잇는다. 좋은 Annie와 훌륭한 Annie를 가르는 두 가지 판단이 있다. **언제 카운터를 아껴둘 것인가**(commit — 한타에 완전히 들어가는 — 직전에 미니언에 낭비하지 말 것)와 **R을 어떻게 박을 것인가**(Flash + R은 모인 팀에 대해 게임에서 가장 안정적인 engage — 한타를 시작하는 스킬 — 도구 중 하나다).

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (Annie가 초반부터 Q와 W를 계속 던질 수 있도록 추가 마나 제공) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개 (라인전 동안 시간에 걸쳐 체력 회복). 반지는 초반 trade를, 물약은 poke(상대 mage의 원거리 chip damage)를 버티게 해준다.

**코어 아이템 (구매 순서):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — 첫 아이템 burst 스파이크("power spike"는 레벨업이나 아이템 완성으로 챔피언이 눈에 띄게 강해지는 순간). Annie의 콤보가 짧기 때문에 첫 스킬 적중 보너스 피해가 스턴된 적에게 들어가는 **R + W**와 정확히 맞물린다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통 신발. 킬은 마법 저항이 낮은 squishy에게서 나오고, 이 단계에선 고정 관통이 퍼센트보다 효율이 높다.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — HP 임계값 패시브가 있는 추가 burst 아이템(적이 ~35% HP 미만일 때 추가 마법 피해). Annie의 R + W를 "거의 죽일 정도"에서 "한 방"으로 바꿔주는 저렴한 마무리 카드.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 배수기(+30% 총 AP. AP / Ability Power는 Annie의 모든 스킬을 scaling하는 능력치). 이게 켜지면 R 콤보가 단일 squishy가 아니라 모인 적 무리 전체를 지운다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 기동성 assassin과 diver 상대 (Zed, Diana, Talon, Akali). R + Flash로 engage한 직후 stasis(2.5초 무적 액티브)를 발동: 아군이 따라붙는 동안 살아남는다.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 하드 CC 없이 kite하는 조합 상대(공격하면서 거리를 유지하는 후퇴형 팀). R + W의 슬로우가 적을 Tibbers의 화염 오라 안에 잡아둔다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Lissandra R, Twisted Fate stun, Ahri charm). 보호막이 engage 스킬을 한 번 막아주므로 **Flash**를 공격용으로 아낄 수 있다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 마법 저항 아이템을 완성하는 순간 바로 끼워 넣는다.

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. 팀이 한타 시작용으로 **R** uptime을 더 자주 원한다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**도 선택지다.

**스킬 마스터 순서:** **Q** 선마(쿨다운 최저, 처치 시 마나 환급, 주력 trade 도구 — 라인에서 짧게 주고받는 데미지 교환). **W** 후마(라인 정리 — 적 미니언 웨이브를 처리하는 행위; 5레벨 기준 기본 피해 최고). **E** 마지막(유틸성, 레벨업으로 크게 강해지지 않음). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**(마법 피해 트리)에 **Arcane Comet**(챔피언 적중 시 추가 마법 피해 투사체), **Manaflow Band**(스킬 적중마다 최대 마나 증가), **Transcendence**(5, 8, 11레벨에 쿨다운 감소), **Scorch**(약 10초마다 다음 스킬에 화염 추가 피해). 보조 트리 **Inspiration**의 **Biscuit Delivery**(라인전 마나·체력 비스킷 무료) + **Cosmic Insight**(중반 **Flash**·**R** 쿨 더 자주 회전).

## 주요 매치업

- **Yasuo / Yone:** 바람 장벽이 **Q**와 **W**를 막는다(투사체를 차단하는 벽). 스택이 적은 **Q**로 바람 장벽을 빼낸 뒤(1-2 Pyromania 스택, 스턴 미준비), 바람 장벽이 쿨에 들어가면 풀스택으로 들어간다 — 다운타임이 길어 **Q**와 engage 둘 다 막을 수 없다.
- **Lux:** **Q** 사거리 1100으로 너를 outrange한다. 따라가지 마라; **W**로 안전 거리에서 라인을 정리하고, ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**이 완성되는 순간 roam(라인을 떠나 다른 곳에서 아군을 돕는 행위)을 노리며, 정글러가 counter-gank로 그녀의 탈출기 부재를 응징하게 한다.
- **Veigar:** 유리한 매치업. AP를 위해 **Q**를 미니언에 쌓아야 하고 dash가 없다; Pyromania를 미리 채우고 6레벨에 **Flash + R**로 들어가면, **E** 우리에 갇히기 전에 그를 스턴시킨다.
- **Twisted Fate:** 누가 먼저 roam하는지(라인을 떠나 다른 라인을 돕는 행위)의 경쟁이다. **W** 쿨마다 라인을 민다. 그의 **R**이 켜지면 미드 mia(missing in action: 시야에서 사라졌음을 팀에 알림) 핑을 찍고 자신의 궁을 준비한 채 그가 노리는 사이드로 회전한다(웨이브와 함께 이동) — Pyromania 풀충전 2v2 교전은 확정 킬이다.
- **Diana:** 6레벨 이전엔 유리(방어력 낮고 빨리 죽음); last-hit하러 가까이 올 때마다 point-and-click **Q**로 견제한다. 6레벨엔 Pyromania 풀스택을 유지: **R**로 너에게 끌려와도 **R + W**가 두 번째 점프를 재시전하기 전에 그녀를 스턴시킨다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **W**가 바에 있고 Pyromania가 준비된 상태에서, 2레벨 스턴을 예상치 못한 ranged mage 대부분을 이기는 짧은 all-in(완전 commit, 양쪽 모두 disengage 불가)이 가능하다. 둘 다 2레벨에 도달한 직후 적이 cs(creep score: 미니언을 마무리해 골드를 얻는 행위)를 위해 다가오면 들어가서 trade하라.
- **6레벨 + Flash:** **Flash**와 함께 쓰는 첫 **R**은 게임에서 가장 큰 단일 교전 파워 스파이크다. 적 정글러가 맵 반대편에 있다면 모인 웨이브 교전은 공짜 더블킬이다.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 완성 (~11-13분):** burst 임계값이 뒤집힌다. 스턴된 squishy에 박히는 **R + W + Q** 콤보가 팀의 follow-up 없이도 치명적이다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** Tibbers의 오라 피해 + 시전 자체의 AOE가 한타 nuke(여러 타겟을 한 번에 지우는 시전)가 된다; 이 타이밍에 오브젝트 한타를 강제하고 모인 3+ 적에게 **Flash + R**을 노린다.

## 흔한 실수

- **all-in 직전에 Pyromania 4번째 스택을 미니언에 태우기.** trade 거리에 들어가기 전에 항상 초상화 아래의 스택 카운터를 확인하라. 3에서 라인 정리용 **W**를 쓰면, 확정 스턴을 caster minion에게 그대로 줘버린 셈이다.
- **Pyromania 미준비 상태로 R 시전.** 스턴 없는 **R**은 피해는 들어가지만 적이 Tibbers의 오라 밖으로 걸어 나간다. Pyromania가 충전되지 않았다면 commit 전에 자신에게 **E**를 시전해서 채워라.
- **R 시전 시 최대 사거리에 서 있기.** **R**은 사거리 600으로 Annie 평타와 동일하다. 가장자리에서 시전하지 말고 **Flash**로 마지막 200-400 거리를 좁혀 모인 팀 안으로 들어가라 — 가장자리에서 시전하면 가장 가까운 적 한 명만 스턴되고 나머지는 빠져나간다.
- **고정 AP 아이템을 위해 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes 건너뛰기.** Annie의 burst는 마법 저항이 낮을 때만 죽인다; 고정 마법 관통 없이 AP만 더 쌓으면 squishy가 0이 아니라 50 HP에 남고 확정 킬이 추격전이 된다.
- **마나 안 보고 Q 난사.** **Q**는 **처치 시에만** 마나를 환급한다. 200 HP 미니언에 Q를 박았는데 죽지 않으면 60-80 마나를 그냥 버린 셈이다. 미니언은 처치 직전이거나 또는 챔피언에게만 **Q**를 쓰고, 풀체력 적 너머에 미니언이 한 마리 끼인 상황에서는 poke로 쓰지 마라.

## 고급 팁

**Flash + R 애니메이션 캔슬**(시전 종료를 기다리지 않고 cast 프레임 도중에 **Flash**를 쓰는 트릭)을 연습하라. **R**을 누른 순간, 같은 방향으로 **Flash**를 누른다(시전 도중 입력이 buffer된다). **R**의 cast point가 충분히 짧아 AOE가 발동하기 전에 **Flash**가 너를 타겟 위로 옮긴다 — 600에서 시작해 800 사거리에 있는 backline까지 스턴시킬 수 있다. 대부분의 입문자는 이 콤보를 "**R**을 누르고 어디 떨어졌는지 보고 반응하기"로 배우지만, 애니메이션 캔슬은 이를 회피가 거의 불가능한 700 단위의 gap-close(짧은 거리를 순식간에 좁히는 단거리 텔레포트)로 바꿔준다.
