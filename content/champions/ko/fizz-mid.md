---
title: "Fizz Mid Build & Guide — Patch 16.9"
slug: "fizz-mid"
language: "ko"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Fizz 미드 완전 가이드: AP 어쌔신 빌드, 시작 아이템부터 코어 순서, Domination 룬 구성, 주요 매치업 대처법, 파워 스파이크 타이밍, 흔한 실수 정리와 R-Flash 콤보까지 한 페이지에 담은 실전 입문서."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "유닛을 그대로 통과하며 (미니언이 막지 않음) 모든 공격에서 고정 피해 감소를 받는다. 자기 미니언 사이로 빠져나가며 disengage하기 좋다."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "550 사거리 지정형 dash. 마법 피해를 입히고 평타마다 발동되는 on-hit 효과(Lich Bane spellblade 같은 아이템 패시브)를 적용한다. 주력 gap-close, 쿨다운이 짧다."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "패시브: 평타가 적에게 3초간 마법 피해 도트를 입힌다. 액티브: 다음 평타에 마법 피해를 추가한다. W 활성화 상태로 적을 처치하면 쿨다운이 1초로 초기화된다."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "삼지창 위로 도약: 0.75초 untargettable 후 착지하며 AOE 마법 피해 + 슬로우. 재시전하면 슬로우 없이 두 번째 dash로 이어진다(범위 축소). 유일한 escape이자 콤보의 핵심."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "장거리 직선 skillshot (1300). 처음 맞춘 챔피언에게 달라붙어 슬로우 후 상어가 솟아오르며 띄운다. 피해와 슬로우는 물고기가 날아간 거리에 비례해 강해진다."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "원거리 poke 조합 상대로 백라인까지 닿을 dash가 더 필요할 때 첫 코어 대체용"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "강력한 CC 락다운 상대 (Lissandra R, Rell ult): 스테이시스로 R fish가 터질 때까지 생존"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Annie 스턴, Twisted Fate 골드 카드, Malzahar 압박)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사는 순간 즉시 교체"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Lich Bane 완성 후 사이드 라인에서 고립된 squishy를 노린다. 최대 사거리 R fish → Q + W + AA spellblade로 즉시 삭제. 상대 진영 쪽 웨이브에서 roam."
  weakness: "engage 사이클이 단 한 번뿐인 squishy melee. E나 R 쿨이면 escape도 없고 두 번째 commit도 없다. 집중 CC가 R fish 도달 전에 콤보를 끝낸다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "dash 없는 immobile mage"
      reason: "Fizz의 Q가 본능적으로 이들을 통과해 dash하고, E는 0.75초 untargettability로 핵심 스킬을 회피한다. dash형 escape가 없어서 R fish가 붙은 뒤의 all-in을 막을 수단이 없다."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "기동성 없는 장거리 artillery"
      reason: "R fish의 사거리는 1300 — 최대 거리 포지셔닝을 그대로 응징한다. Fizz가 Q + E로 commit하면 거리를 다시 벌릴 dash가 없어 burst 윈도우 전체를 그대로 받아낸다."
    - examples: ["annie", "syndra"]
      archetype: "선딜이 큰 근거리 mage"
      reason: "이쪽 burst는 가까이 붙어야 하고 텔이 명확하다(Annie 스턴 버퍼, Syndra E 셋업). 캐스팅 윈도우에 Fizz가 E를 쓰면 untargettable이 되며 콤보가 빈탕난다."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "하드 engage형 탱키 미드"
      reason: "이들의 저항이 Fizz의 burst를 절반으로 깎는다(Galio W는 마법 피해 ~50% 감소, Malphite 패시브 실드는 W 발동을 막음). 둘 다 6레벨 하드 engage가 있어 먼저 commit한 Fizz를 응징한다."
    - examples: ["lissandra", "malzahar"]
      archetype: "point-and-click CC mage"
      reason: "Lissandra R은 point-and-click 스테이시스로 E로 회피할 skillshot이 아니다. Malzahar R은 E 재시전을 뚫고 들어오는 압박. 둘 다 웨이브 정리도 강해 Fizz가 라인에서 zoning할 수 없다."
    - examples: ["pantheon", "talon"]
      archetype: "초반 라인전 강자"
      reason: "6레벨 스파이크 전인 1-3레벨 단계에서 Fizz를 out-trade한다. Pantheon W 스턴과 실드 Q poke는 한 발짝 전진할 때마다 응징하고, Talon Q는 같은 사거리에 마나 소모는 더 적다."
---

## 개요

Fizz는 **Playful / Trickster (E)**의 타이밍 하나로 살고 죽는 AP 어쌔신 melee다. 단거리·고폭발(시간에 분산되는 게 아니라 1-2초 안에 피해가 몰린다는 뜻) 콘셉트에 슬리퍼리한 챔피언 — 0.75초 동안 타게팅 자체가 불가능한 윈도우, 짧은 쿨의 dash, 그리고 우선순위 타겟을 묶어버리는 장거리 물고기 ult. 강이 짧은 미드 라인이 어울린다 — 6레벨부터 **Q-E**에 이은 **R**로 engage하고, 콤보 도중 카운터 CC를 dodge하다가 **E** 재시전으로 탈출할 수 있기 때문이다.

게임 플랜은 라인전을 두 번째 코어 스파이크(Lich Bane + Sorcerer's Shoes)까지 버텨낸 뒤, 사이드 라인의 squishy 타겟(체력이 낮고 방어 스탯이 없는 챔피언 — burst에 빠르게 녹는다)에게 pick(한타 밖에서 고립된 적을 잘라내는 플레이)을 만드는 것이다. 본인 또한 squishy하고 웨이브 클리어가 약하며, 유일한 escape인 **E**는 1랭크 기준 16초 쿨이다 — 이걸 의미 없이 비우면 큰 대가를 치른다. 그래서 Fizz는 5v5 한타보단 단일 타겟 삭제를 선호한다 — 한타에선 집중 CC가 R fish 도달 전에 콤보를 끊어버리기 때문이다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** 2개. Xerath, Vel'Koz 같은 강한 원거리 poke(거리에서 체력을 깎는 견제) 매치업이라면 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**로 대체.

**코어 아이템 (구매 순서):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — 주력 파워 스파이크(피해량이 한 단계 점프해서 정면 싸움이 가능해지는 시점). Q-AA 패턴과 시너지 — 매 **Q**마다 다음 평타에 spellblade 효과가 발동되어 burst가 거의 두 배가 된다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 가장 지우고 싶은 squishy 타겟에 박히는 고정 마법 관통.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst와 HP 임계 패시브(타겟이 ~35% HP 미만일 때만 발동되는 아이템 효과)가 R fish 마무리 타이밍과 정확히 맞물린다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 scaling 배수기. 가장 강한 AP 슬롯이자 squishy를 한 방 타겟으로 만드는 아이템.

**상황별 아이템:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — **Q** 하나로 닿지 않는 원거리 poke 백라인에 닿기 위해 추가 gap-close(적까지의 거리를 좁히는 수단)가 필요할 때 첫 코어 대체.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 강력한 CC 락다운 상대 (Lissandra R, Rell ult): 스테이시스로 R fish가 터질 때까지 생존.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Annie 스턴, Twisted Fate 골드 카드, Malzahar 압박).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 마법 저항 아이템을 사는 순간 즉시 교체.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. **E**가 가장 중요한 쿨다운이 되는 콤보 의존 매치업에서는 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**도 가능하다.

**스킬 마스터 순서:** **E** 선마(untargettability + AOE 피해 스케일링 — AOE는 *area of effect*, 한 영역 안의 모든 대상을 맞히는 스킬 유형), **Q** 후마(쿨다운 감소 = 한 교전당 더 많은 dash), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주 트리 **Domination**에 **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. 보조는 **Sorcery**의 **Manaflow Band** + **Scorch**. Electrocute는 Q-AA-W 3타 윈도우와 완벽하게 맞아떨어진다 — 모든 all-in(킬 또는 escape까지 콤보를 끝까지 밀어붙이는 풀 commit)이 그대로 발동시킨다.

## 주요 매치업

- **Annie:** 텔이 명확한 engage. Annie 패시브는 4번 스킬을 쓸 때마다 다음 스킬에 스턴이 붙는다 — 그녀 주변에 작은 파란 마크 4개가 쌓이는 게 보인다. 4개 마크가 차는 순간이 all-in 준비 시점이다. 스턴이 나가는 타이밍에 **E**로 도약 — 착지하면 Annie의 핵심 콤보가 허공에 사라지고 trade는 너의 것이 된다.
- **Yasuo / Yone:** Yasuo의 바람 장벽(원거리 스킬을 가로막는 벽)은 투사체를 막지만, Fizz의 **Q**, **E**, **R**은 차단 가능한 투사체가 아니다. **W** 활성화 평타로 out-trade(교환에서 이득을 보고 빠지기)하라 — 이쪽 상대로는 그들의 벽이 무용지물이다.
- **Lissandra:** 하드 카운터. 그녀의 **W**는 점블랭크 AOE(area of effect — 한 영역 안 전부 적중) 속박이고, **R**은 point-and-click 스테이시스(피하는 skillshot이 없는 스킬: 그냥 너를 클릭하면 박힌다). 둘 다 **E**로 dodge할 skillshot(직선이나 영역으로 날아가서 피할 수 있는 비유도형 스킬)이 아니다. **E**는 그녀의 **W** 캐스팅용으로 아껴두고, **R** 없이 절대 all-in 금지, 대신 사이드 라인에서 pick을 노려라.
- **Galio:** 탱커 스탯에 **W**의 마법 피해 감소 패시브로 풀 burst를 절반으로 자른다. 솔로 킬 시도는 그만두고 — 마나를 웨이브 push(아군 미니언을 적 타워까지 밀어 그들이 자유롭게 너에게 못 오게 하기)에 쓰고 **R**이 켜지는 순간 봇이나 탑으로 roam(라인을 떠나 맵 다른 곳의 아군을 돕기)한다.
- **Pantheon:** 6레벨 전엔 너를 응징한다. **W** 스턴과 실드 **Q** poke가 1-3레벨 trade에서 우위. 웨이브 뒤에 머물고 그의 **W**가 쿨일 때만 trade를 들어가라. 매치업은 **R**이 있는 6레벨에서 뒤집힌다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **E** + **Q**로 dash + 슬로우 + AOE 피해 사이클이 확정된다. 상대가 melee 미니언 라스트힛(처치 골드를 위한 마지막 타격)을 위해 발을 디디는 순간 **E**로 위에 떨어져 **Q-AA**로 winning trade(짧은 교환에서 이쪽이 이득을 보는 결과)를 만든다.
- **6레벨:** 첫 **Chum the Waters**가 모든 all-in을 연다. **R-Q-W-AA-E** 콤보는 Lich Bane 부품만 산 상태에서도 squishy 미드 라이너를 그대로 삭제한다. 웨이브를 push한 뒤 봇 라인 roam — 미니언이 적 진영 쪽으로 밀려있으면 그들이 라인 방어에 쓰는 시간이 네가 라인을 비운 시간보다 더 크다.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 완성 (~11-13분):** burst 스파이크(피해량이 갑자기 점프하는 시점). Q-AA spellblade 한 번에 squishy의 ~40% HP가 날아간다. 라인에서 1v1 하기보다 공격적으로 roam하며 pick을 만들어야 하는 시간대다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** 마법 저항 아이템을 한 칸도 안 산 squishy는 풀 콤보에 그대로 한 방. 이 타이밍에 오브젝트 한타를 강제로 열어라 — 아군 진영 쪽 vision deny(상대 와드를 부숴 맵에 눈이 없게 만들기)로 적이 너의 flank(상대가 커버하지 못한 측면에서 한타에 진입)를 못 보게 한다.

## 흔한 실수

- **그들이 commit하기 전에 E 쓰기.** **E**는 유일한 escape다. 상대 CC를 먼저 빼낸 뒤가 아니면 착지하자마자 스킬을 그대로 받는다. 핵심 스킬이 나갈 때까지 기다리고 — *그 다음에* 도약.
- **너무 가까이서 R fish.** 물고기의 피해와 슬로우 강도는 달라붙기 전 비행 거리에 비례한다. 최대 사거리 1300에서 캐스팅해야 풀 피해와 폭발 윈도우 전체에 걸친 슬로우가 보장된다.
- **2명+ 적 가운데로 all-in.** Fizz의 engage 사이클은 단 한 번(단일 콤보에 풀 commit)뿐이다. 콤보 중간에 두 번째 타겟이 합류하면, 두 번째 R fish도 두 번째 escape도 없고 집중 CC에 그대로 무너진다. 5v5 미드가 아니라 사이드 라인의 고립된 타겟을 노려라.
- **추격 중 W 까먹기.** **W** 활성 상태로 처치하면 마나가 환급되고 쿨다운이 1초로 떨어진다 — 두 번째 타겟에게 즉시 강화 평타를 이어붙일 수 있다. 후속 타겟이 근처에 있다면 처치 일격 전에 **W**를 켜라.
- **일반 라인에서 W 선마.** **Q**와 **E**가 피해와 콤보 타이밍을 책임지고, **W** 도트는 짧은 burst가 아니라 긴 trade에서 의미가 있는 지속 DPS다. 기본은 **E** 선마.

## 고급 팁

**R-Flash 콤보** (R + Flash)를 연습하라. 물고기를 앞으로 던진 뒤 즉시 같은 방향으로 **Flash** — 물고기는 자연 1300 사거리보다 훨씬 멀리 박히고, 사거리 밖이라 안심하던 타겟을 확정으로 잡아챈다. 벽 너머의 pick이나 예상 못 한 각도에서 오브젝트 한타를 여는 데 활용. 캐스팅에서 Flash로 이어지는 윈도우는 짧으니 — 근육 기억을 위해 **Flash**를 두 번째 키(D)에 바인딩하고, 타이밍이 자동으로 나올 때까지 연습 모드에서 반복 연습하라.
