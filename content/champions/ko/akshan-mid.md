---
title: "Akshan Mid Build & Guide — Patch 16.9"
slug: "akshan-mid"
language: "ko"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Akshan 미드 라인 공략. lethality 코어 빌드, Press the Attack 룬 세팅, 핵심 매치업 대응, 파워 스파이크 활용, 자주 하는 실수 정리, 그리고 Q 튕겨 맞히기 고급 팁까지 한 페이지에 담은 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lethality 어쌔신"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "3타째에 추가 피해, 챔피언에게 적중 시 보호막. 평타가 감소된 피해의 두 번째 탄을 더 쏘며 — 이를 캔슬하면 Move Speed 획득."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "직선 부메랑 skillshot으로 갈 때와 돌아올 때 모두 물리 피해. 적을 맞힐 때마다 사거리가 늘어나, 미니언을 관통하는 깔끔한 라인은 생각보다 멀리 날아간다."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "패시브: 아군을 죽인 적을 Scoundrel로 표시. 처치 시 죽은 아군 부활 + 보너스 골드. 액티브: Scoundrel 방향으로 위장 + Move Speed (수풀/지형 밖에서는 풀림)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "지형에 갈고리를 걸어 Akshan이 그 주위를 돌며 가장 가까운 적을 쏜다. 원할 때 또는 충돌 시 내림. 챔피언 처치 관여 시 쿨이 초기화 — 두 번째 swing으로 연결."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "한 챔피언을 락온해 약 5초간 탄을 모은다. 재시전 시 모은 탄을 첫 번째 적중 대상에 한꺼번에 발사. 잃은 체력 비례 피해 — 처형용 도구."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 point-and-click CC 상대 (Lissandra R, Malzahar R, TF 황카) — spellshield가 30초마다 1번 차단"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 폭딜 상대 (Annie, Veigar, Syndra) — 마법 보호막 + lifeline으로 1콤보 삭제 방지"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐량 누적 조합 상대 (Soraka mid, Vladimir, Aatrox top) — 평타와 R 탄에 Grievous Wounds 부여"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "어쌔신 다수 조합 상대 (Talon + Zed double AD) — 노출된 R 채널링 캐리에게 두 번째 생명"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "단독 픽오프로 스노우볼하는 squishy 조합 상대 1코어 대안: 강력한 슬로우로 R이 놓쳤을 도주 캐리를 묶음"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Press the Attack 3타 trade와 Q 최대 사거리 poke로 라인전을 스노우볼하고, 6분부터 E 로밍으로 리드를 굴린 뒤 오브젝트 교전에서 R로 squishy를 처형한다."
  weakness: "E는 지형에만 걸리기 때문에 미드 한복판처럼 트인 자리에선 swing 리셋이 없다. 단일 대상 point-and-click CC와 Wind Wall이 R 채널링과 Q poke를 모두 끊는다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "dash 없는 immobile artillery mage"
      reason: "스케일링이나 poke를 위해 가만히 서 있는 챔피언들. Akshan이 미드 벽을 끼고 E로 거리를 좁힌 뒤 Q + 3타 패시브 + R 처형으로 캐스팅을 끝내기 전에 처치한다."
    - examples: ["annie", "lux", "ahri"]
      archetype: "예고 동작 단일 escape를 가진 mage"
      reason: "Annie의 스턴, Lux의 Q, Ahri의 R을 베이트한 뒤 후딜 프레임에 E swing을 박아 공짜로 3타 trade와 패시브 보호막을 챙긴다."
    - examples: ["senna", "ziggs"]
      archetype: "자기 보호 약한 후방 backline 캐리"
      reason: "Akshan의 R은 2500 사거리에서 락온되며 대부분의 peel을 무시한다. 50% HP 아래로 떨어지면 강 너머에서도 탄이 그대로 처형까지 이어진다."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "point-and-click CC 보유 mage"
      reason: "락온 스턴/속박이 Akshan의 R 채널링을 끊고, E swing을 중간에 부수며, W 위장을 풀어버린다 — Edge of Night는 30초마다 1번만 막아주지 두 번 살리지 못한다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 보유 챔피언"
      reason: "Wind Wall이 Q 부메랑, E swing 도중의 모든 평타, R의 모든 탄을 막는다. 잘 깐 풍벽 한 번이 trade 전체를 뒤집고 Akshan을 무피해로 잡아버린다."
    - examples: ["akali", "fizz", "diana"]
      archetype: "다중 진입기 근접 어쌔신"
      reason: "Akshan의 E는 지형에만 걸려서 트인 곳에서는 fed 어쌔신을 swing으로 못 뚫는다. Akali의 연막은 타깃팅을 끊고, Fizz의 E는 평타를 뛰어넘으며, Diana의 R은 채널링 도중을 묶는다."
---

## 개요

Akshan은 갈고리 재배치 도구, 복수 표식과 연동된 은신, 그리고 잃은 체력 비례 처형 ult(특정 HP 임계점 아래 적을 자동 처치하는 공격)를 가진 marksman/어쌔신 하이브리드다. 미드 라인에서 그의 키트가 빛나는 이유는, 강과 삼거리 수풀 주변 벽 구조가 ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing**이 걸 수 있는 지형을 꾸준히 제공하고, ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang**이 레벨이 오르면 대부분의 mage보다 푸시가 강하기 때문이다. 트인 곳에서는 기동력이 낮지만 벽 근처에서는 기동력이 매우 높은 챔피언이라 — 결국 한 판 전체가 맵이 내 편이 되는 fight를 고르는 게임이 된다.

그는 **lethality** 아이템과 함께 스케일링한다 — 물리 피해를 추가 방어구 관통으로 바꾸는 장비로, mage나 ranged carry 같은 squishy 타깃을 지우는 데는 최적이지만 풀탱에는 거의 의미가 없다. 그의 피해는 거의 물리(AD)이며, 마법 피해가 아니다.

게임 플랜은 형태는 단순하지만 타이밍이 까다롭다: **Q**로 웨이브를 밀고(아군 미니언을 적 타워 쪽으로 보내고), 패시브 ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**의 보호막을 발동시키는 3타 trade(킬을 노리는 풀콤보가 아니라 몇 대만 치고 빠지는 짧은 교환)를 노리고, 6~12분 사이에 로밍(라인을 떠나 봇이나 탑을 도와주러 가기)하여 라인 prio(미니언과 타워 손해 없이 라인을 비울 수 있는 권한)를 **E** 쿨을 초기화하는 킬로 환산한다. 실력 차이가 갈리는 지점은 두 군데다 — (1) frontline 탱(교전을 여는 bruiser/탱)에 **Q**를 튕겨 부메랑 사거리를 늘려 backline 캐리(뒤에서 딜 넣는 squishy)까지 닿게 하는 각도, 그리고 (2) **R** 채널링 타이밍 — 너무 일찍 누르면 채널링 도중 스턴을 맞고, 너무 늦게 누르면 대상이 처형 임계점 위로 회복해 있다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 1개. 기본 스타트 — AD와 lifesteal이 3타 trade에서 패시브 보호막을 키운다.

**코어 아이템 (구매 순서):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 1코어 lethality에 더해 액티브 Move Speed가 사이드 라인 로밍을 킬로 바꾼다. 빌드에서 가장 큰 power spike(힘이 한 단계 도약하는 순간).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 신발: 패시브(매 3타)가 더 빨리 발동되고 **R** 탄 간격이 촘촘해진다.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — 광역 웨이브 클리어(한 방으로 미니언 한 줄을 동시에 친다)와 **E** 다음에 이어 쓰는 액티브 dash, 추가 lethality. 현재 패치에서 lethality 빌드 최고의 2코어.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 패시브가 5% HP 이하 챔피언을 자동 처치, 잃은 체력 비례 **R** 스케일링과 완벽히 맞물려 R이 1 HP만 남길 대상을 그대로 끝낸다.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 후반 적 frontline 탱을 뚫는 armor pen 마무리. 35분 넘어가는 게임이면 방어템 대신 이걸 산다.

**상황별 아이템:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 대상 point-and-click CC 상대 (회피 불가능한 락온 CC: Lissandra R, Malzahar R, Twisted Fate 황카). spellshield(다음에 들어오는 스킬 한 발을 흡수하는 1회용 보호막)가 30초에 1번 막아준다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP 폭딜 상대 (1콤보로 1초 만에 지울 수 있는 마법 피해: Annie, Veigar, Syndra). 마법 보호막 + lifeline(~30% HP 이하로 떨어질 때 발동되는 회복+공격 강화 버프)으로 R로 되받아칠 시간을 번다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐량 누적 조합 상대 (Soraka mid, Vladimir top, Aatrox top). 평타와 모든 **R** 탄에 Grievous Wounds(받는 회복량을 약 50% 깎는 디버프)를 부여한다.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 어쌔신 다수 조합 상대 (Talon + Zed double AD = 강력한 물리 폭딜 위협 둘). 노출된 곳에서 **R** 채널링하는 메인 캐리에게 두 번째 생명은 어떤 DPS 슬롯보다 가치가 크다.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — squishy 더블 mage 조합 상대 단독 pickoff(한타 밖에서 고립된 적 한 명씩 잡기)로 스노우볼(킬 리드를 더 큰 리드로 굴리기)을 굴리려는 1코어 대안. energized 평타가 강력한 슬로우를 걸어 **R**이 놓칠 도주 캐리를 묶는다.

**신발:** 기본은 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** (attack speed 때문). ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 hard CC(스턴, 속박, 에어본처럼 입력 자체를 막는 군중 제어) 3개 이상 있는 팀 상대로만.

**스킬 마스터 순서:** **Q** 선마(웨이브 클리어와 주력 DPS), **E** 후마(올인 시 swing 1발 피해 때문), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**에 **Press the Attack**(챔피언에 3타째 적중 후 다음 피해 증폭 — 패시브 발동과 완벽 매치), **Presence of Mind**(처치 관여 시 마나 환급), **Legend: Alacrity**(추가 attack speed), **Coup de Grace**(40% HP 이하 적에게 추가 피해). 보조는 **Sorcery**의 **Absolute Focus** + **Gathering Storm**, 또는 1코어 spike를 더 빨리 가져가고 싶다면 **Inspiration**의 **Magical Footwear**(12분 무료 신발) + **Cosmic Insight**.

## 주요 매치업

- **Yasuo / Yone:** 어려운 매치업. 그들의 **W** Wind Wall(원거리 비-근접 투사체를 약 4초간 모두 막는 수직 풍벽)이 **Q**, **E** swing 도중의 평타, **R**의 모든 탄을 막는다. 그들이 Wind Wall을 미니언이나 정글러에게 쓸 때까지 **Q**를 아끼고, 그 뒤에 commit. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**는 Yasuo 상대 3코어 swap으로 아껴라 (그의 **Q** knock-up — 상대를 잠시 공중에 띄워 입력을 막는 스킬 — 대비).
- **Zed:** 라인전 호각~약유리. 6레벨 전 3타 trade는 Zed의 Q-W poke를 이긴다. 단, 그의 **R**은 그를 잠시 untargetable(스킬과 평타로 선택 불가) 상태로 만들어 R 락온을 피한다. **E**는 그의 그림자 swap에 맞춰 카운터 점프용으로 남겨라.
- **Lissandra:** 하드 카운터. 그녀의 **R**은 point-and-click이고 채널링 도중의 **R**을 끊는다. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**를 2코어 전에 사고, spellshield 없이는 절대 그녀 면전에서 **R**을 누르지 마라.
- **Annie:** 6레벨 주의. 라인에서 잡히면 그녀의 스턴 올인이 **R** 시전 모션을 이긴다. 3코어 ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius**는 1콤보 처형을 살아남을 수 있는 trade로 바꾼다.
- **Veigar:** 유리. 그의 cage는 충분히 느려서 **E** swing으로 깔끔하게 빠져나오고, 6레벨 이후 올인하면 그는 도주기가 없다. 그가 웨이브에 **E** cage를 쓴 직후를 노려 **R**을 아껴둬라.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **E**로 첫 올인 패가 모인다 — **Q**를 웨이브에 박아 부메랑 사거리를 늘리고, 측면 벽에 **E**, swing으로 평타, 빠지면서 **Q** 귀환. 이번 패치 미드에서 가장 큰 2레벨 spike.
- **6레벨:** 첫 **Comeuppance**가 사이드 라인 처형 압박을 연다. ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** 하나만으로도, 와드 없는 강 교전에서 50% HP 아래 적은 그대로 처치다.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade 완성 (~9-11분):** 웨이브 통제권이 뒤집힌다. 모든 로밍에서 Ghostblade를 쿨마다 눌러라 — **E** + **Q** + 보호막 3타 trade의 사이드 갱은 마법 저항을 안 산 챔피언에겐 거의 확정 처치다.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector 완성 (~22-26분):** 6% HP 적은 **R**이 1 HP만 남기더라도 아이템 패시브에 그대로 죽는다. 이 타이밍에 오브젝트 한타를 강제로 열고, backline이 시야에 잡히는 즉시 **R**을 채널링해라.

## 흔한 실수

- **트인 미드에서 E 쓰기.** **E**는 지형에만 걸린다 — 챔피언 쪽으로 Heroic Swing을 썼는데 일직선상에 벽이 없다면 시전이 실패하거나 엉뚱한 벽에 걸려 적 진영에 떨어진다. 버튼을 누르기 전에 항상 어느 벽에 걸지 미리 정해라.
- **적 진영 앞에서 R 채널링.** 시야 안에서의 5초 windup(릴리즈 전 채널링하는 시간)은 모든 point-and-click CC에게 5초짜리 사격 연습장이다. fog of war(와드가 없어 적이 보지 못하는 어두운 지역)나 벽 뒤에서 **R**을 채널링하다가 마지막 프레임에 나와 탄을 흘려라.
- **놓아둬야 할 타이밍에 보너스 샷을 캔슬.** 패시브의 두 번째 평타는 ~50% 감소 피해지만 3타 카운터에는 그대로 들어간다. 처치 trade에선 캔슬하지 마라 — Move Speed보다 패시브 보호막을 마무리하는 가치가 더 크다.
- **미니언 튕김 없는 맨 Q poke.** 사이에 아무것도 없는 최대 사거리 **Q**는 가장 약한 형태의 스킬이다. 항상 웨이브나 체력 적은 미니언을 통과시켜 사거리를 늘리고, 귀환 경로가 다음 챔피언과 맞물리도록 노려라.
- **트인 곳에서 Going Rogue 위장.** 액티브는 수풀에 들어가거나 벽에 붙지 않으면 ~1초 안에 풀린다. 트인 라인에서 쓰면 거의 의미가 없다 — 삼거리 수풀이나 강 수풀을 끼고 flank(적이 안 보고 있는 옆구리에서 한타 진입)할 때만 써라.

## 고급 팁

![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q**를 frontline 탱에 튕겨 뒤쪽 캐리까지 닿게 해라. 부메랑이 챔피언을 맞힐 때마다 남은 사거리가 늘어나기 때문에, 시야 끝의 frontline bruiser에서 출발한 **Q**가 캐리를 관통한 뒤 그대로 너에게 돌아오며, 같은 대상을 귀환 경로에서 한 번 더 친다. 사용자 정의 게임에서 봇 상대로 각도를 연습해라 — 첫 챔피언에서 부메랑이 두 번째 타깃 쪽 각도로 빠져나오도록 자리를 잡으면, 이어진 사거리가 팀 뒤에서 안전하다고 믿던 backline까지 닿는다.
