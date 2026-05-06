---
title: "Aphelios Bot Build & Guide — Patch 16.9"
slug: "aphelios-bot"
language: "ko"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Aphelios 바텀 공략. 무기 로테이션 기본기, 코어 마크스맨 빌드, 주요 매치업 대처법, 파워 스파이크 활용, 라인전에서 자주 하는 실수와 해결책, 그리고 W 캔슬 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios는 5개의 Lunari 무기를 고정된 뒤 변하는 순서로 돌린다. 한 번에 두 자루(main-hand + off-hand)만 들고, 각 무기에는 한정된 탄약이 있어 비면 강제로 swap된다."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "활성 스킬은 main-hand에 따라 바뀐다: 장거리 표식 사격(Calibrum), AoE 흡혈 돌진(Severum), 슬로우 대상 전체 root(Gravitum), 원뿔 폭발(Infernum), 센트리 포탑(Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "main-hand와 off-hand를 즉시 교체. 짧은 쿨다운 — 시전할 때마다 dps 프로필이 뒤집힌다(사거리, lifesteal, AoE, slow, attack speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios는 진짜 세 번째 ability가 없다 — 이 슬롯은 Alune이 다음에 건넬 무기만 표시한다. 몇 자루 앞을 내다보고 콤보를 짜는 데 쓴다."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "장거리 달빛 폭발로 챔피언에게 적중 시 폭발. 현재 main-hand 고유 효과(Calibrum 추가 mark shot, AoE auto, AoE lifesteal 등)를 적용한다."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "탱키 frontline(Sion, Ornn, Malphite) 상대: 적 보너스 HP에 비례하는 armor pen"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "강한 힐 조합(Soraka 서포터, Yuumi, Vladimir, Aatrox) 상대: Grievous Wounds로 회복 절반 차단"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "lifesteal과 실드가 필요할 때: 암살자 2명 이상이 노릴 때 The Collector 대체"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP burst(Syndra, Veigar, 더블 메이지) 상대: 저체력 실드 + Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "확정 CC(Malzahar suppression, Skarner R, Mordekaiser R) 상대: 액티브로 CC 해제"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "two-item spike에 도달한 뒤, 한타에서 Calibrum + Gravitum을 번갈아 돌려 W swap, R, Q-root 콤보로 핵심 타깃을 묶고 팀의 engage를 받쳐라."
  weakness: "dash도 escape도 없고, 잘못된 타이밍에 잘못된 무기면 한타가 터진다. 1-3레벨에 punish 당하면 ammo와 아이템을 쌓기 전에 무너진다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "commit이 강제되는 단거리 마크스맨"
      reason: "Calibrum(소총)이 상대의 auto-attack 사거리를 넘는다: trade하려면 들어와야 하고, Q mark shot으로 punish한다. 이후 Severum으로 W swap해서 받은 chip damage를 회복한다."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "기동력 없는 바텀 라인 스케일러"
      reason: "Gravitum(대포)으로 매 auto마다 슬로우, 그다음 Q로 슬로우 대상 전체에 root. 6레벨 R 후속까지 더하면, 멈춘 타깃은 channel을 끝내기 전에 burst를 다 맞는다."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "초반 약한 하이퍼 스케일링 마크스맨"
      reason: "Aphelios의 1-2레벨 + Calibrum은 lane phase에서 farm만 하는 상대를 trade에서 이긴다. 3아이템 전에 압박을 넣어 후반 spike에 도달하지 못하게 한다."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "초반 공격적 마크스맨"
      reason: "1-3레벨 윈도우가 잔혹하다: 짧은 쿨다운과 높은 base damage가 Aphelios를 처벌한다. 그동안 Q는 9초 쿨다운에 ammo도 유한하다. wave를 push할 ammo를 안 쓰고는 trade back을 못 한다."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "강력한 hard-engage 서포터"
      reason: "Aphelios는 기동력이 0이다(dash, blink 모두 없음). 서포터의 CC 체인 한 번이면 Severum으로 W-swap해 회복하거나 Flash를 쓸 시간도 없이 죽는다. engage 상대로 픽 = 죽으려고 픽."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "장거리 poke 마크스맨"
      reason: "Calibrum도 닿지 않는 거리에서 poke한다(Caitlyn 트랩+헤드샷, Senna 안개 속 Q, Jhin W root). Aphelios는 거리를 좁힐 수 없어 반격 없이 HP만 빠진다."
---

## 개요

Aphelios는 League에서 이론상 가장 길고 복잡한 kit를 가진 마크스맨이다: 5개의 다른 무기가 손을 거치며 돌고, 각자 고유한 basic attack과 고유한 **Q**를 가진다. 한 번에 들고 있는 건 두 자루뿐 — main-hand(auto-attack과 **Q**를 결정)와 off-hand(main-hand 공격에 맞춰 주기적으로 같이 발사). 무기마다 ammo가 한정되어 있고(고정된 발사 횟수), 다 쓰면 그 무기는 버려지고 Alune이 큐의 다음 무기를 건넨다. 숙련도의 핵심은 다음에 무슨 무기가 오는지, 그리고 결정적인 순간에 어느 두 자루를 들고 있고 싶은지 아는 것이다.

게임 플랜은 약한 early game(dash 없음, escape 없음, 까다로운 ammo 관리)을 버텨 두 아이템에 도달한 뒤, skirmish(전체 한타보다 작은 2-4명 규모의 소규모 교전)에서 snowball(작은 초반 우위를 더 큰 우위로 굴리는 것)하는 것이다. **Phase (W)**로 상황을 가장 잘 처벌하는 무기로 swap한다: **Calibrum**(소총)은 poke(원거리 데미지로 적의 HP를 깎는 행위)와 execute(이미 저체력인 타깃을 마무리), **Severum**(낫 권총)은 sustain(긴 교전에서의 회복과 생존), **Gravitum**(대포)은 lockdown(킬을 낼 만큼 충분한 시간 적을 CC로 묶음), **Infernum**(화염방사기)은 waveclear와 한타 AOE(area of effect: 단일 타깃이 아니라 지역 단위 데미지), **Crescendum**(차크람)은 근거리 DPS spike(damage per second의 갑작스러운 폭발).

## 추천 빌드

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade는 마크스맨의 표준 스타팅 아이템이다: 약간의 Attack Damage(AD), 약간의 HP, 그리고 lifesteal(auto-attack으로 입힌 데미지의 일정 비율을 회복). Aphelios는 무기마다 ammo를 소모하기 때문에 AD 한 점 한 점이 절실하다.

**Core items (순서대로):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — 첫 아이템으로 메타 DPS 픽. 초반에 crit(auto-attack이 추가 데미지를 줄 확률)를 주고, 공격에 패시브 출혈(즉발이 아니라 다음 몇 초에 걸쳐 들어가는 데미지)을 더해 속사 무기(Crescendum, Infernum)에 완벽하게 맞는다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 신발(초당 auto 횟수 증가). Aphelios의 모든 무기가 추가 attack speed의 이점을 보기 때문에 거의 모든 게임의 기본 선택.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — HP 5% 미만 처형 + Lethality(타깃의 방어구 일부를 무시하는 armor penetration의 한 종류, 특히 squishy 타깃 — ADC와 메이지처럼 방어가 약한 챔피언 — 에게 효과적)를 제공. Calibrum의 mark shot(Calibrum의 auto-attack은 적에게 "mark"를 부여한다: 마킹된 타깃을 다시 공격하면 맵 어디서든 보너스 데미지가 들어간다, **R**도 포함)이 이미 저체력 타깃을 chunk(큰 폭의 데미지를 한번에 입힘)하는 것과 잘 맞는다.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit damage 배수 증가; crit 아이템을 두 개 이미 갖췄다면(Yun Tal + Collector 또는 Yun Tal + RFC) Infinity Edge가 175% crit damage를 열어주고, auto-attack의 burst(1-2초 윈도우 안에 쏟아내는 데미지)가 거의 두 배가 된다.
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — Calibrum auto-attack과 첫 에너자이즈 사격에 추가 사거리(RFC는 이동 중 몇 초마다 "energized" auto를 충전한다 — 그 auto는 늘어난 사거리에서 발사되어 타깃을 zap한다). kiting(공격하면서 뒤로 빠져 위협과 거리를 유지하는 것)과 시너지가 좋다.

**상황별 swap:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 적이 방어구를 쌓을 때(Sion, Ornn, Malphite frontline — frontline = 캐리들이 뒤에서 쏘는 동안 앞에서 데미지를 흡수하는 탱커/브루저들) Rapid Firecannon 자리에 대체.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — Lord Dominik's와 같은 슬롯, 적 팀에 강한 힐 조합(Soraka, Yuumi, Aatrox, Vladimir)이 있을 때 이 버전을 골라라: Grievous Wounds를 적용해 적의 회복량을 절반으로 줄인다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 긴 게임에서 sustain이 필요하거나 적팀에 백라인을 노리는 암살자 2명이 있을 때 The Collector를 대체한다(풀 HP일 때 7초 실드는 한타당 한 번 살려준다).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP burst 조합(Syndra + Veigar + Annie) 상대 후반 슬롯. 실드는 HP 임계치 — 즉 35% 미만으로 떨어졌을 때 — 발동하며 마법 데미지를 흡수한다.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 단 한 번의 CC 체인(Malzahar suppression, Skarner R, Mordekaiser R)이 매 한타를 결정짓는다면 마지막 슬롯 swap.

**스킬 순서:** **Q** 선마(각 무기 활성 스킬의 데미지 증가), **W** 후마(빠른 swap = 초당 더 많은 유연성), **E** 마지막. **R**은 평소처럼 6, 11, 16레벨에 찍는다.

**Runes:** 주특성 트리 **Precision**(auto-attack 중심): 핵심 룬 **Lethal Tempo**(챔피언과 싸울 때 추가 attack speed), 그다음 **Presence of Mind**(takedown 시 마나 환급 — Q가 ammo를 쓰기 때문에 유효), **Legend: Bloodline**(킬에 따라 누적되는 lifesteal), **Coup de Grace**(저체력 타깃에게 추가 데미지). 부특성 트리 **Resolve** + **Second Wind** + **Overgrowth**는 강한 poke 라인전(Caitlyn, Senna)에, **Inspiration** + **Magical Footwear** + **Cosmic Insight**는 패시브한 라인전이 예상될 때 사용.

## 주요 매치업

- **Draven:** 맵에서 가장 빡센 라인전. 1-3레벨 trade(짧은 auto-attack과 ability 교환)에서 매번 진다. 서포터 뒤에 서고, last-hit는 auto-attack으로만(미니언에 Calibrum Q ammo를 쓰지 마라), **R**로 trade를 맞출 수 있는 6레벨까지 기다려라.
- **Caitlyn:** 사거리 전쟁. 트랩 + 헤드샷이 Calibrum 사거리 밖에서도 poke(자기 사거리 밖에서 HP를 깎는 것)한다. 그녀가 트랩에 가까이 가는 즉시 **Gravitum**으로 swap; slow(이동속도 감소)와 Q root(적을 그 자리에 묶어 이동도 dash도 못 하게 하는 효과)가 그녀의 escape 윈도우를 무력화한다.
- **Samira:** 너를 dive(타워 사격을 무릅쓰고 타워 밑까지 들어와 죽이는 것)하고 싶어 한다. 그녀가 melee(근접 auto-attack 사거리)에 들어오는 순간을 위해 **Severum**을 들고 있어라 — AoE Q가 그녀의 chip damage(작지만 꾸준히 HP를 깎는 데미지)를 회복해 주고, 너무 깊이 over-commit(너무 들어가서 후퇴 못 하는 상황)하면 서포터 CC가 그녀를 죽인다.
- **Jhin:** 6레벨 전엔 그가 poke로 우위, 6레벨 이후엔 네가 DPS로 우위(원거리 poke는 초반 강세, 지속 데미지는 6레벨 이후 강세). 라인전에서 auto 대 auto로 trade하지 마라(그의 W root와 4번째 샷 크리티컬이 라인전을 결정짓는다); 2레벨에서 wave를 강하게 push해 그의 타워 밑으로 밀고, 첫 Yun Tal 완성 시점에 recall(베이스 복귀)해 우위를 확보해라.
- **Kalista:** 약하고 사거리도 짧다. **Calibrum** main + Severum off-hand로 auto trade해라; 그녀의 dash 체인이 너의 사거리 안으로 들어오게 강제하고, 점프할 때마다 Q mark shot이 punish한다.

## 파워 스파이크 및 승리 조건

- **2레벨:** 무기 활성 스킬 하나가 추가되면 대부분의 ADC와 trade를 맞춘다. Aphelios 게임 대다수는 누가 2레벨 all-in(돌아갈 옵션 없이 킬을 노리고 풀로 commit하는 한타)을 깔끔하게 잡느냐로 결정난다.
- **6레벨 + Calibrum:** 첫 **Moonlight Vigil**을 소총 main-hand로 쓰면 추가 장거리 mark shot이 발사된다. 적 바텀 라인이 너의 타워 쪽으로 shove(상대 wave가 너의 타워 가까이 밀려와 취약한 위치에 놓임)되어 있다면, 화면 끝에서의 **R** + Q execute 윈도우는 정신만 차린 서포터에게 공짜 킬이다.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows 완성 (~ 12-14분):** 라인 우선권이 뒤집힌다(CS나 HP를 잃지 않고 다른 곳의 한타를 도우러 갈 수 있는 라인이 된다). shove(자기 wave를 적 타워로 밀어붙임)하고 드래곤을 contest할 수 있고, 소규모 교전 DPS가 강하게 spike(이 아이템에서 damage per second가 한 단계 뚜렷하게 점프)한다.
- **3아이템 spike (Yun Tal + Berserker's + The Collector, 22-25분 부근):** "spike"는 레벨이나 아이템 마일스톤에 묶인 명확한 파워 점프다. 이제 Aphelios는 게임 내 지속 DPS 최강 마크스맨이다. 여기서 오브젝트 한타(오브젝트 = Dragon, Baron, Rift Herald, 타워 — 팀 버프나 맵 압박을 주는 중립 타깃)를 강제하고, frontline이 라인을 지키는 동안 Calibrum 최대 사거리에 위치해라.

## 흔한 실수

- **Calibrum Q ammo로 미니언을 auto하기.** Q ammo는 챔피언용으로 아껴라. Calibrum의 Q는 너의 몇 안 되는 장거리 위협 중 하나이고, fast-push(wave를 가능한 한 빠르게 적 타워에 부딪히게 만드는 것)를 위해 wave에 써버리는 건 같은 백 사이클에 recall할 때만 의미가 있다. 그렇지 않으면 포기하는 trade가 어마어마하다.
- **큐의 다음 무기를 트래킹하지 않기.** **E** 슬롯이 다음 무기를 보여준다. commit 전에 항상 확인해라: **Crescendum**이 뒤 큐에 있을 때 **Severum**으로 swap하며 전진하는 건 괜찮다; 같은 행동을 **Gravitum**이 다음 차례일 때 하면 all-in 윈도우(킬을 마무리할 수 있는 몇 초)를 날린다.
- **한타에서 가만히 서 있기.** Aphelios는 dash가 없다. 같은 자리에 두 초만 서 있어도 기동력 있는 챔(Zed, Diana, Camille)이 즉시 지운다. auto-attack 사이마다 strafe(공격하면서 옆으로 이동)해라 — 짧은 걸음이지만 끊임없는 움직임으로.
- **R이 쿨다운 돌자마자 쓰기.** Moonlight Vigil의 가치는 시전 순간 main-hand에 어떤 무기가 있느냐에 전적으로 달렸다. 단일 타깃에 Crescendum 차크람으로 **R** 쓰는 건 낭비; 모인 4명에 Infernum **R**은 쿼드라 킬이다.
- **Hard engage 상대로 Aphelios를 픽하기.** 이건 게임 플레이 실수가 아니라 드래프트 실수 — "engage"는 챔피언이 한타를 강제하는 도구다(예: Leona Q stun, Malzahar R suppression). 적이 Leona + Malzahar mid + Hecarim jungle이면 너는 무기를 단 하나도 못 써본다. Severum-friendly 셋업(peeler — 너를 다이버에게서 보호하는 게 일인 서포터, 예: Lulu, Janna)으로 보완해라.

## 고급 팁

**Phase**의 W-cancel 타이밍을 익혀라: Calibrum mark shot 도중 swap을 큐잉하면, 새 무기의 효과로 장거리 후속 auto를 발사할 수 있다(예: Infernum으로 swap하면 후속이 AoE 원뿔이 된다). 이 한 가지가 Calibrum mark shot을 다른 어떤 마크스맨도 흉내 못 내는 멀티 타깃 burst로 바꿔주고, 캐주얼 Aphelios 유저보다 네가 가질 수 있는 가장 큰 단일 메카닉 우위다.
