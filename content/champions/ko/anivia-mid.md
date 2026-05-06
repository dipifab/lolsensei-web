---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "ko"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Anivia 미드 공략. 시작 아이템부터 control mage 코어 빌드, 핵심 매치업, 파워 스파이크, 자주 하는 실수, 그리고 마지막 고급 팁까지 한 페이지로 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "치명적인 피해를 받으면 Anivia는 몇 초간 움직일 수 없는 알이 된다. 알이 살아남으면 풀피로 부활. 쿨다운이 길어 한 교전에서 두 번 베팅하면 안 된다."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "장거리 직선 skillshot. 얼음 구체가 이동 경로의 적을 슬로우하고, 끝에서 폭발하며 stun. 재시전으로 미리 폭발시킬 수 있다."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "넓고 통과 불가능한 얼음 벽을 몇 초간 소환. 모든 이동(아군 포함)과 벽을 통과하는 dash를 차단한다."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "근거리 지정 폭발. 대상이 Q나 fully formed R로 Chilled 상태면 두 배의 피해."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "지면 토글: 슬로우와 마법 피해를 입히는 얼음 폭풍. 완전히 형성되면 Chill을 적용해 E가 영역 내 두 배 피해."
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Akali, Diana) — stasis로 R 재사용까지 버틴다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "R 토글을 끊는 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Vladimir, Aatrox) — R이 광역으로 grievous wounds를 적용"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선 타겟이 첫 마법 저항 아이템을 완성하는 즉시 교체"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "최대 사거리에서 Q를 맞춰 Chill을 적용하고 E로 두 배 피해, 그 뒤 그들의 발 밑에 R을 깔아 슬로우 걸린 적이 또 한 번의 강화된 E를 맞도록 한다. 나머지는 W로 차단해 킬이 끊기지 않게 한다."
  weakness: "느리고 dash 없음, 기본 방어력 낮고 초반 mana hungry. Q 빗나가면 trade 자체가 죽고, R이 fully formed 되기 전 diver가 도달한다. Wind Wall과 침묵에 kit 전체가 무너진다."
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
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Anivia의 Q + W는 immobile mage를 가둔다: chill을 피할 수 없어 두 배 E를 그대로 맞고, 웨이브가 끊겼을 때 벽을 우회할 방법도 없다."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize가 melee engage 경로를 전부 막는다. E로 push하고 R로 wave 정리하면 Anivia는 안전하게 farm하고, 상대는 Flash 없이는 닿지 못한다."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize가 engage 순간 적팀을 둘로 가른다. 벽이 이니시에이터와 follow-up 사이에 들어가면 wombo는 다섯이 아니라 한둘에게만 떨어진다."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "그들은 Anivia가 시전하는 사이 E 사거리 안으로 들어온다. dash 없고 알도 한 개라, 연속 dash 콤보가 R이 완성되기 전에 그녀를 끊는다."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall이 Q를 통째로 막아(chill이 안 들어가고) 주력 데미지가 무너진다. chill이 없으면 E 데미지는 반토막, 라인은 그녀가 이길 수 없는 melee fight가 된다."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "라인 모든 단계에서 Anivia의 Q 사거리 밖에서 poke한다. 거리를 좁힐 기동력이 없어 그들의 cooldown을 응징할 수단도 없다."
---

## 개요

Anivia는 두 개의 체력 게이지, 느리지만 거대한 광역 궁극기, 그리고 게임 내 유일한 통과 불가 벽을 가진 장거리 control mage다. 이 kit은 포지셔닝 실수를 가차없이 응징한다 — **Flash Frost (Q)** 는 **Chill** (kit의 나머지 전체가 의존하는 슬로우 상태)을 적용하고, **Frostbite (E)** 는 Chilled 대상에게 두 배 피해, **Glacial Storm (R)** 은 영역 내 모두를 슬로우 상태로 묶어둔다. 기동력은 utility와 맞바꿨다 — dash가 없는 대신 **Rebirth (P)** 가 알이 살아남을 때마다 두 번째 생명을 준다.

미드에서의 게임 플랜은 말로 하면 단순하지만 실행은 잔혹하다: **R** + **E**로 wave를 shove (미니언 줄을 적 타워 쪽으로 밀어넣다)하고, 적이 들어오는 강·정글에 안개 너머로 **Q-E** 콤보를 박고, **Crystallize (W)** 로 engage (engage = 한타가 시작되는 순간)를 갈라놓거나 dive (적이 너에게 뛰어들어 burst를 노리는 플레이 — burst = 1-2초 안에 집중되는 강한 피해)에서 아군을 구한다. 어느 랭크에서든 그녀는 다른 누구도 못 버티는 라인을 버텨서 게임을 이긴다 — fully formed (완전히 형성된) **R** 은 끊임없는 마법 피해의 벽이다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Anivia는 초반 mana hungry라 한 wave에 **Q** 두 번을 마나 걱정 없이 던지려면 AP와 마나 회복이 필수다.

**코어 아이템 (구매 순서):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (집중 데미지 강화)와 마나 sustain. **Q-E**를 마나 걱정 없이 날릴 수 있게 해준다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통 (적의 마법 저항 일정량을 깎음)으로 squishy (방어력 낮은 챔피언, 보통 ADC와 mage)에 대한 **E** 두 배 피해를 키운다.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — AP 배수기. 이미 강한 burst의 scaling (아이템과 레벨이 오를수록 챔피언이 얼마나 강해지는지)을 one-shot 영역까지 끌어올린다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst와 HP-threshold passive (대상이 ~35% HP 이하로 떨어지면 발동되는 패시브)가 **E** 마무리 타이밍과 정확히 맞물린다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver와 assassin 상대 (Zed, Akali, Diana). stasis (잠깐의 무적 정지)가 **Glacial Storm** 쿨이 돌아올 때까지 시간을 벌어준다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — **R** 토글을 끊을 강력한 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대 (Soraka, Vladimir, Aatrox). **R** 의 지속 tick이 grievous wounds (받는 회복량을 깎는 디버프)를 광역으로 적용한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 어떤 priority target (가장 죽이고 싶은 상대 — 보통 carry)이라도 첫 Magic Resist (MR — 받는 마법 피해를 줄이는 방어 스탯) 아이템을 완성하는 순간 즉시. 늦어지면 MR에 Anivia 데미지가 절벽처럼 떨어진다.

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. 팀이 skirmishes (메인 한타 외의 작은 2v2/3v3 교전)에서 **R** uptime (R이 다시 사용 가능한 빈도)에 굶주려 있다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 도 가능.

**스킬 마스터 순서:** **E** 선마 — Chilled 상대에게 두 배 데미지가 들어오는 진짜 데미지 버튼이다. **Q** 후마 (슬로우 + stun 시간 증가), **W** 마지막. **R** 은 6, 11, 16레벨에 한 포인트씩. **W** 는 마지막에 마스터하지만 3레벨에 한 포인트는 찍자: 한 단계만 있어도 목숨을 살리거나 engage를 끊을 수 있다.

**룬:** 주문 트리 **Sorcery** + **Arcane Comet** (스킬로 적을 맞히면 떨어지는 무료 데미지 투사체), **Manaflow Band** (skillshot으로 적을 맞힐 때마다 마나 획득), **Transcendence** (쿨다운 감소), **Scorch** (첫 스킬 적중 시 추가 화상). 보조 트리 **Inspiration** + **Biscuit Delivery** (라인전 무료 포션) + **Cosmic Insight** ( **Flash** 같은 소환사 주문 추가 쿨감). Comet은 Anivia에게 가장 많은 데미지를 주는 단일 룬이다 — Chilled 상태의 **E** 한 발마다 적중과 함께 발동된다.

## 주요 매치업

- **Yasuo:** 그는 Wind Wall (몇 초간 투사체를 막는 스킬)로 **Q** 와 **E** 투사체까지 막는다. 그가 Wind Wall을 미니언에 낭비할 때까지 두 스킬을 모두 아껴라. 그가 all-in (kill까지 가는 완전 교전)을 시도할 때 **W** 를 그와 미니언 사이에 세로로 깔자 — 벽과 chill 둘 다에 Wind Wall 타이밍을 빼앗긴다.
- **Zed / Akali:** dive (적이 너에게 뛰어드는 플레이) 위협. 그들이 앞서고 있다면 ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** 다음 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**. 그들이 들어오면 **R** 을 네 발 밑에 깔아 — kill을 원하면 네 폭풍 안에서 싸워야 한다.
- **Veigar:** 호각의 매치업. 누가 먼저 roam (자기 라인을 떠나 다른 라인을 도움)하느냐로 갈린다. 6레벨 전에는 **R** 덕에 wave 정리가 더 빠르다 — 그가 타워에서 farm하는 사이 push하고 bot 라인을 도와 응징해라.
- **Xerath / Vel'Koz:** 사거리 싸움에서 너를 out-poke한다. 미니언 뒤에 서서 **E** 로 last-hit (마지막 일격으로 미니언을 잡아 골드 획득)만 챙기고, 정글러가 mid-side (미드 라인 근처 정글에 위치)에 있지 않은 한 절대 wave 절반 너머까지 밀지 마라.
- **Annie:** 예고 동작이 큰 all-in mage — 그녀의 stun에는 느리고 명확한 tell (시전 직전의 가시적 애니메이션, 회피하라는 신호)이 있다. 6레벨 이전에는 Tibbers 착지 경로에 **W** 를 깔아 stun-그리고-소환 콤보를 갈라놓자. 알 패시브가 한 번의 full burst를 막아주고, 그녀는 어차피 궁을 써서 너에게 무료 counter-engage를 던져준다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **E** 만으로 미니언 잡으러 너무 가까이 온 라인 상대를 chill-and-double-tap할 수 있다. 매 wave마다 위협하라 — 이게 Anivia가 설계된 trade (kill까지 가지 않는 짧은 공격과 스킬의 교환)다.
- **6레벨:** 첫 **Glacial Storm**. 5레벨에서 가장 약한 mage 중 하나에서, 6레벨에서 가장 강력한 waveclear (미니언 wave를 빠르게 정리하는 능력)와 zoning (데미지 위협으로 적이 특정 영역에서 못 머물게 하는 것) kit 중 하나로 변신한다. 즉시 wave를 shove하고 roam을 노려라.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 완성 (~ 12-14분):** 풀 **Q-E** 콤보 + Luden's proc (스킬을 시전할 때 자동으로 발동하는 아이템 패시브)이 MR 아이템 없는 ADC와 다른 mage 대부분을 one-shot한다. 이 구간에서 오브젝트 한타를 강제하라.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~ 26-30분):** Anivia의 후반이 폭발한다. **R** 의 tick (1초의 일부분마다 들어가는 작은 데미지)과 Chilled **E** 가 합쳐지면 탱커조차 초당 큰 HP를 잃는다. 팀과 모이고 frontline (앞에 서서 데미지를 흡수하는 탱커/브루저의 역할)이 일을 대신하게 두자.

## 흔한 실수

- **E 후속타 없이 Q를 던지기.** **Q** 단독은 괜찮은 poke (교전에 들어가지 않고 원거리에서 적의 HP를 깎아내는 데미지)지만, **Q** → **E** 의 chill 두 배 보너스는 진짜 kill 위협이다. **E** 가 쿨이 돌아왔을 때 **Q** 를 단순한 harass (그냥 짜증나게 하고 HP 깎는 poke)로만 쓰지 마라.
- **자기 라인에서 자기를 가두기.** **W** 는 *양쪽* 모두 통과 불가다. 자기 탈출로를 가로지르는 수직이 아니라, gank (안개에서 등장하는 정글러의 기습)에서 peel (peel = 아군에게 뛰어드는 적으로부터 아군을 보호하는 것) 하기 위해 wave에 평행하게 깔자.
- **R을 너무 일찍 끄기.** **R** 은 일단 켜지면 마나를 더 먹지 않는다 — 교전 동안 켜두고, 마나 게이지가 떨어졌다고 패닉으로 끄지 마라. 슬로우 하나만으로도 그 마나 값어치는 한다.
- **알 룰렛.** Rebirth 패시브의 쿨다운은 길다. 낮은 HP에서 tower-dive (그들의 타워 안으로 들어가 죽이러 가는 것)하면서 "알을 믿는" 짓은 계산해보지 않은 한 하지 마라. 알을 죽이는 데 몇 대면 충분하고, 그중 한 대는 타워 자체일 수 있다.
- **W를 peel 도구로 무시하기.** 대부분의 Anivia 유저는 **W** 를 chase 도구로만 생각한다. 하지만 pick comp (포지션이 어긋난 한 명을 잡아내며 이기는 조합) 상대로 너의 back line (뒤에서 데미지를 넣는 carry들)과 Malphite 궁 사이에 깔리는 **W** 는 미드에서 가장 강한 수비 플레이 중 하나다.

## 고급 팁

**Q** 의 폭발 재시전을 *시야 도구*로 써라. 얼음 구체는 비행 중과 폭발 시 모두 넓은 시야 반경을 가진다 — fog of war (자기 팀 시야 밖의 어두운 맵 영역)를 가로질러 적이 지나갈 만한 경로로 던지자. 예를 들어 drake fight (드래곤을 노리는 팀 전투, 드래곤은 bot 쪽 강에 있는 오브젝트 몬스터로 잡는 팀에 버프를 준다) 직전 미드 강 한복판으로 — 접촉 즉시 재시전. 한 번의 버튼으로 팀에게 0.5초의 시야와 stun을 동시에 준다. 최상위 Anivia 유저들은 한 한타당 ward (배치된 정찰 도구로 잠시 동안 맵의 작은 영역을 밝힘) 한 개 분량을 안개를 꿰뚫는 **Q** 폭발로 대체한다 — 더 싸고, 더 빠르고, engage를 stun으로 끊는다.
