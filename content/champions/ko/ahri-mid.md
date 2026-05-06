---
title: "Ahri Mid Build & Guide — Patch 16.9"
slug: "ahri-mid"
language: "ko"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Ahri 미드 공략. 시작 아이템, 메이지·암살자 코어 빌드, 핵심 매치업, 파워 스파이크, 자주 하는 실수, 그리고 마무리 고급 팁까지 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "미니언이나 정글 몬스터를 9마리 처치하면 체력을 회복하고, 챔피언 takedown 시 더 큰 회복. 라인 sustain이 farm에 비례해 늘어난다."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "직선 skillshot으로 오브를 던졌다가 회수한다. 나갈 땐 마법 피해, 돌아올 땐 고정 피해(true damage). 주력 waveclear와 poke 도구."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "여우불 3개를 방출, 근처 적을 자동으로 추적한다. 첫 적중은 풀 데미지, 이후엔 감소. 짧은 이동 속도 증가도 함께 부여한다."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "skillshot 키스. 처음 맞은 적을 매혹시켜 Ahri 쪽으로 무방비하게 걸어오면서 피해를 입게 한다. setup 도구지, 단독 poke로 쓰지 않는다."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "짧은 시간 안에 최대 세 번 dash. 매번 자동 추적 탄환을 함께 발사. 챔피언 takedown 시 재시전 창이 연장된다. 기동기 + execute."
      dd_spell_id: "AhriR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Diana, Talon, Fizz) — stasis로 R을 commit한 뒤에도 한타에서 살아남는다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항을 사는 순간 바로 교체 (Mercury's Treads + MR 아이템)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "상대 팀에 squishy 타겟이 4명 이상일 때 첫 아이템 대안 — 단일 pick 천장은 더 높지만 지속 피해는 떨어진다"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "squishy 타겟에 charm을 맞히고 R로 진입, W와 돌아오는 Q의 고정 피해를 꽂은 뒤 남은 R dash로 빠진다. 매 pickoff를 다음 드래곤이나 roam으로 snowball한다."
  weakness: "Charm 없이는 burst가 없다. E가 빗나가면 풀콤보를 헛쓰고, R이 쿨이면 escape도 없어 hard CC 한 방에 증발한다."
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "dash가 없는 immobile mage"
      reason: "Ahri의 E (Charm)는 장거리 skillshot 속박이다. dash나 은신이 없는 챔피언은 깨끗한 직선 위에서 charm에 걸려, 사거리를 벗어나기 전에 R + Q + W 풀콤보를 그대로 받는다."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "탈출기 없는 backline 스케일러"
      reason: "Spirit Rush는 takedown으로 리셋되는 dash 세 번을 준다 — front line을 가로질러 immobile carry를 지우고, peel이 도착하기 전에 빠져나올 수 있다."
    - examples: ["malzahar", "vladimir"]
      archetype: "burst 없는 지속 피해형 mage"
      reason: "Ahri의 R 풀콤보 burst는 1초 안에 이들을 지운다. 지속 피해와 회복이 의미 있는 trade로 누적되기도 전에 끝난다."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 사용자"
      reason: "그들의 Wind Wall이 Charm과 Q 오브를 막는다. Ahri는 setup 도구와 주력 poke를 동시에 잃고, 무언가 맞히려면 벽 안쪽까지 들어가야 한다 — 정확히 그들이 원하는 자리다."
    - examples: ["fizz", "kassadin"]
      archetype: "마법 피해 경감을 가진 기동성 assassin"
      reason: "Fizz는 E로 Ahri의 R 탄환을 회피하고 패시브로 마법 burst를 줄인다. Kassadin은 마법 피해 보호막에 더해 blink가 있다. Ahri가 풀콤보를 commit해도 둘은 한 줄 체력으로 살아남고, 회복 프레임에 역으로 Ahri를 잡는다."
    - examples: ["lissandra", "galio"]
      archetype: "hard CC를 가진 대(對) 암살자 mage"
      reason: "그들의 hard CC가 Ahri를 R 도중에 잡는다. dash 창에서 root나 도발 한 방이면 피해도 escape도 동시에 끊겨, pickoff 시도가 그대로 그들의 공짜 킬로 바뀐다."
---

## 개요

Ahri는 미드 라인의 mage-assassin이다. mage처럼 원거리에서 poke(원거리 견제로 적의 체력을 깎는 행위)를 넣다가, **Spirit Rush (R)** 로 단숨에 진입해 squishy 타겟(체력·방어력이 낮은 챔피언, 보통 ADC나 mage) 한 명을 잡고 다시 빠져나온다 — 이 패턴을 **pickoff**(고립된 한 명만 끊어 죽이는 플레이, 5대5 한타와는 다른 개념)라고 부른다. kit(챔피언이 가진 모든 스킬 묶음)의 핵심은 **Charm (E)**, 적을 그 자리에 묶어 두는 skillshot 키스다. 다른 모든 스킬이 이 한 방에 이어지도록 설계돼 있다. **R**에는 한 가지 특별한 점이 있다 — 챔피언 takedown마다 dash 카운터가 갱신돼, pick에 성공하면 같은 교전 안에서 두 번째 pick까지 이어 갈 수 있다.

게임 플랜은 인내, 그리고 commit(되돌릴 옵션 없이 콤보를 풀어 넣는 전면 투입)이다. **Q**로 farm(미니언을 처치해 골드와 경험치를 얻는 행위)을 챙기고, 강(river)에 시야 와드를 박고, 적이 예측 가능한 자리로 발을 디딜 때까지 기다렸다가 **E**를 던진다. **Charm**이 맞으면 그다음은 기계적이다 — 돌아오는 **Q** 오브로 끌어당기고, 자동 추적되는 **W**의 피해를 쏟아붓고, **R**로 거리를 좁히거나 빠져나온다. 6레벨 이후 Ahri는 게임에서 가장 강한 **roaming**(자기 라인을 떠나 탑이나 봇을 도우러 가는 행위) 챔피언 중 하나가 된다 — 드래곤 리젠 한 번 한 번이 맵을 뒤집을 기회다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Doran's Ring은 mage 표준 시작템 — 약간의 AP(Ability Power, 마법 피해를 키우는 스탯)와 추가 체력, 그리고 **Q**를 난사하기 위한 마나 회복.

**코어 아이템 (구매 순서):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — 첫 스킬 적중 시 burst 스파이크와 **Q**를 쿨마다 쓰기 위한 마나 sustain(마나가 마르지 않도록 유지하는 회복). 12분 전까지의 골드 목표.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(상대의 마법 저항 중 정해진 수치를 무시).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst. 대상이 약 35% 체력 이하일 때 발동되는 패시브가 **R** execute(체력 낮은 적을 마무리하는 동작) 타이밍과 정확히 맞물린다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 배수기. 총 AP를 35% 늘려, 이전 아이템들이 콤보에 더해 주던 피해를 사실상 두 배로 만든다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver(한 명을 잡으러 파고들었다가 빠져나오는 챔피언)와 assassin 상대 (Zed, Diana, Talon, Fizz). 액티브가 2.5초 동안 무적의 황금 동상(stasis) 상태로 만들어, 한타에서 **R**을 깊게 commit한 뒤에도 살아남게 해 준다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (CC = crowd control: stun, root, 그 외 행동을 묶는 모든 효과). 보호막이 너를 묶을 첫 스킬을 막아 준다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 마법 저항을 사는 순간 바로 (보통 Mercury's Treads + MR 아이템).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — 상대 팀에 one-shot 노릴 squishy 타겟이 4명 이상일 때의 첫 아이템 대안. 지속 피해를 양보하는 대신 단일 pick 천장이 더 높다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 상대 조합이 너에게 hard CC 연계를 여러 개 꽂을 때만 (hard CC = stun, root, 띄우기, 도발 — 챔피언 조작권을 완전히 빼앗는 종류).

**스킬 마스터 순서:** **Q** 선마(waveclear — 미니언 웨이브를 빠르게 정리, 그리고 주력 DPS인 damage per second), **W** 후마(한타 피해), **E**는 마지막 — 기본 피해 증가는 의미가 없고 charm 지속 시간만 의미 있게 늘어난다. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 **Arcane Comet**(스킬 적중마다 발동되는 지연 마법 탄환), **Manaflow Band**(스킬 적중에 비례해 최대 마나가 늘어남), **Transcendence**(ability haste — 모든 스킬의 쿨다운 감소), **Scorch**(10초마다 첫 스킬 적중에 추가 화상 피해 — 초반 라인 harass에 강력하다. harass란 평타나 스킬로 적의 체력을 조금씩 깎아 라인 압박을 주는 플레이). 보조는 **Inspiration**의 **Magical Footwear**(12분 즈음 무료 신발 지급)와 **Cosmic Insight**(추가 ability haste, **Flash**까지 포함 — Flash는 F나 D에 묶어 두는 단거리 순간이동 summoner spell이다).

## 주요 매치업

- **Yasuo / Yone:** 둘 다 너의 **Q**와 **E**를 비행 중에 Wind Wall로 막을 수 있다 (Wind Wall은 그들이 깔아 두는 벽 모양 장벽으로, 가로지르는 모든 투사체를 차단한다). 상대가 스킬을 먼저 commit하기 전엔 **E**를 아끼고, 최대 사거리에서 **W**로만 farm해라 — 자동 추적되는 여우불 셋은 Wind Wall을 우회하므로, 벽이 깔린 상황에서 유일하게 안전한 피해 수단이다.
- **Zed:** 동전 던지기에 가까운 라인이고 아이템 차이로 갈린다. 6레벨 전엔 그의 **Q**가 분명히 쿨일 때만 거리를 좁혀라. 6레벨 이후엔 그의 ulti에서 빠져나오기 위해 **R**을 아껴 둬라 — **R**을 공격적으로 commit해 놓고 그의 ulti가 들어왔을 때 escape가 없는 게 라인을 가장 빠르게 던지는 방법이다.
- **Galio:** 모이면 처벌받는다 — 그의 **W**가 아군 근처 타겟들을 도발한다. **Q**로 웨이브를 push한 뒤 사이드 라인으로 roam해라. 그의 ulti는 너의 dash 세 번만큼 빠르게 따라오지 못한다.
- **Twisted Fate:** roam 우선순위 경쟁이다. 그는 **R**로 글로벌 회전 압박을, 너는 dash 세 번의 기동력을 가진다 — 위협의 무게는 같다. 그의 ulti가 켜지자마자 매 웨이브를 **Q**로 밀고, 강 입구 양쪽에 와드를 박아 그가 너를 gank(상대 정글러가 라인에 합류해 너를 잡으러 오는 것)하러 올 때 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**로 응수할 수 있게 해라.
- **Cassiopeia:** 지속 trade에서 너를 outscale(시간이 지날수록 더 강해진다)한다. 그녀의 **W**가 너의 **R** dash를 무효화하기 때문이다 (그녀의 grounding 영역을 dash로 통과할 수 없다). trade는 짧게만 하고 (trade란 짧은 스킬·평타 교환이지 죽기 살기 한판 싸움이 아니다), 그녀의 **W**가 켜진 동안엔 절대 **R**을 공격적으로 commit하지 마라.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q + E**가 모두 잠금 해제돼, 적이 너무 앞으로 나오면 라인 킬을 만들 도구가 갖춰진다. **E**를 들고, last-hit(미니언 사망 직전 마지막 공격으로 골드를 챙기는 행위)을 치는 척 거리를 좁히다가, 적이 평타 사거리에 들어오는 순간 charm을 꺾어 박는다.
- **6레벨:** 첫 **Spirit Rush**가 켜지면서 pickoff 잠재력이 열린다. **E → R → W → Q** 콤보는 방어 아이템을 한 칸도 사지 않은 squishy를 그대로 지운다.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 완성 (~12-14분):** 웨이브 통제권이 뒤집힌다 — 쿨이 돌 때마다 shove(웨이브를 상대 포탑까지 밀어 넣는 것)와 roam이 가능해진다. 이때부터 너의 win condition이 켜진다 — roam, charm, kill, dash out. 매 pickoff가 다음 pickoff로 snowball한다 — 한 번의 킬 골드가 다음 pick을 더 쉽게 만들 아이템 자금이 된다.
- **3코어 스파이크 (~24분):** 코어 아이템 셋이 완성되면, 풀 **R** 콤보가 70% 이하 체력의 backline 챔피언(탱커 뒤에 서는 ADC, mage 같은 캐리들)을 그대로 지운다. 이 타이밍에 오브젝트 한타를 강제로 열어라 (드래곤, Baron, 포탑을 두고 벌어지는 5대5 교전).

## 흔한 실수

- **setup 없이 E를 poke로 던지기.** 맨 **Charm**은 투사체가 느리고 쿨다운도 길다 — 대부분의 미드 라이너는 반응만으로 옆으로 비킨다. 웨이브나 미니언을 엄폐물로 쓰고, 상대가 last-hit을 치러 어쩔 수 없이 지나야 하는 경로를 노려라.
- **R을 마무리가 아니라 engage(전투를 먼저 거는 행위)에 쓰기.** **Spirit Rush**는 너의 유일한 escape다. 확실히 죽일 수 있는 타겟 없이 dash로 들어가면 dash 창을 그냥 넘겨주고, 상대 팀이 너에게 모이면서 (포지션이 무너진 너를 정리하러 그들의 동료들이 회전한다) 네가 죽는다.
- **Q를 poke 용도로 난사하다 OOM 가기.** OOM은 out of mana — 마나가 없으면 스킬을 못 써서 30초간 평타만 치는 무용지물이 된다. **Orb of Deception**은 한 번 쓸 때마다 마나가 꽤 든다 — waveclear와 확정된 trade에만 써라.
- **R이 takedown으로 리셋된다는 사실을 잊기.** **Spirit Rush** 도중에 킬을 따면 재시전 창이 연장된다. 이 점을 체화한 플레이어는 첫 킬 직후 곧장 dash해서 빠지지 않고, 같은 한타에서 첫 pick을 두 번째 pick으로 이어 간다.

## 고급 팁

**Q-back 콤보**를 연습해라 — 타겟 앞에 **Q**를 던지고, 곧바로 **R**로 그 적을 통과해 dash한다. 돌아오는 경로의 오브가 이제 코앞에서 적을 통과하며 고정 피해 부분(true damage는 모든 저항을 무시한다 — 탱커도 풀로 받는다)을 꽂고, 그 사이 너는 이미 근접에서 **W**가 자동으로 발사되는 상태다. 이렇게 풀어 넣은 한 번의 **Q + R + W** 시퀀스는 1초 안에 세 차례의 피해 인스턴스를 꽂는다 — 교과서 콤보 **E → R → W → Q**가 약속하는 것보다 훨씬 큰 burst이고, **Charm**이 쿨일 때도 그대로 작동한다.
