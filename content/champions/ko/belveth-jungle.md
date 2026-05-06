---
title: "Bel'Veth Jungle Build & Guide — Patch 16.9"
slug: "belveth-jungle"
language: "ko"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Bel'Veth 정글 공략. 시작 아이템, on-hit 코어 빌드, 주요 매치업 대처, 파워 스파이크, 자주 하는 실수와 마무리 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "large minion, 정글 몬스터, 챔피언 takedown으로 영구 attack speed 스택을 쌓는다. 스킬을 시전하면 짧은 공속 버프도 함께 부여된다."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "지나치는 적에게 피해를 주는 짧은 dash. 네 방향 각각 별도의 쿨다운이 있고, 공속이 오를수록 짧아진다."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "꼬리치기 — knock-up과 슬로우. 챔피언을 맞히면 해당 방향의 Void Surge 쿨다운이 즉시 초기화된다."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "체력이 가장 낮은 적을 노리는 다단히트 채널. 채널 동안 damage reduction과 lifesteal 부여; 재시전으로 조기 종료 가능."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "패시브: 같은 대상에 평타가 한 번씩 들어갈 때마다 추가 true damage가 무한 스택. 액티브: Void Coral(챔피언/epic monster takedown)을 먹어 true form 진입 — HP, 사거리, 공속 증가."
      dd_spell_id: "BelvethR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "강한 AP 조합 상대 (Karthus, Ahri, Lissandra) — magic resist와 on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "뒤처졌거나 poke 조합 상대 — 첫 평타 크리·자힐로 템포 회복"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐량 누적 조합 상대 (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "disengage 조합 상대 사이드 단독 splitpush 시 — 포탑·미니언에 추가 피해"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "단일 대상 AP burst 상대 (Veigar, LeBlanc, 미드 Syndra) — 30% HP 이하에서 magic shield 발동"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Q dash와 R 스택 true damage로 한 타깃에 끝까지 붙어 잡는다. 6레벨 R이 켜진 뒤 한타를 강제하라 — Rift Herald나 Baron 직후가 true form 시간이 가장 길어서 최적이다."
  weakness: "Hard CC(stun, knock-up, suppress)는 Q dash를 끊고 그 자리에 묶는다. R이 꺼져 있거나 붙을 타깃이 없으면 원거리 위협이 약하고 peel이 두꺼우면 무너진다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "dash 없는 탱커 정글러"
      reason: "Bel'Veth의 on-hit 패턴은 Terminus와 함께 그들의 armor와 magic resist를 갈아낸다. 히트박스 주위로 Q dash를 두르며 붙어 있고, 상대는 disengage할 수단이 없다."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "원거리 squishy 정글러"
      reason: "네 방향 Q dash가 모든 kite(kite = 거리를 벌리며 계속 공격) 시도를 봉쇄한다. 상대가 원거리 콤보를 한 사이클 마치기 전에 이미 melee 거리에 들어가 있다."
    - examples: ["master-yi", "shyvana"]
      archetype: "초반 CC 없는 스케일링 skirmisher"
      reason: "초반 정글 skirmish(skirmish = 한타가 아닌 1v1·2v2 소교전)에서 상대 power spike 전에 이긴다. 그 이득을 그대로 오브젝트로 환산한다."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "point-and-click hard CC 정글러"
      reason: "Bel'Veth의 Q dash는 targeted 스킬을 회피하지 못한다. Sejuani R이나 Vi R을 한 번 맞으면 그대로 묶이고, on-hit 패턴이 즉시 멈춘다."
    - examples: ["rammus"]
      archetype: "공속 카운터형 탱커"
      reason: "Rammus의 가시 패시브와 W steroid는 지속 평타를 응징한다. 그가 오브젝트를 잡고 있는 사이 Bel'Veth는 그를 DPS하다 자기 체력만 깎인다."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "초반 invade가 강한 정글러"
      reason: "Bel'Veth의 첫 클리어는 무난하지만 누구도 짓밟지 못한다. 3레벨에 invade 당해 Q 마무리 전에 한 번 죽으면 거기서 snowball(snowball = 작은 초반 우위가 시간이 갈수록 커짐)이 시작된다."
---

## 개요

Bel'Veth는 평타와 함께 발동되는 아이템 효과로 메인 데미지를 만드는 on-hit fighter다(= 데미지의 큰 부분이 스킬이 아니라 평타 + 한 대마다 발동되는 on-hit 효과에서 나옴). 그녀는 평타를 끊임없는 dash 흐름으로 바꾼다. **Void Surge (Q)** 는 네 방향에 각각 따로 쿨다운이 걸려 있고, 모두 attack speed에 따라 줄어든다 — 공속을 쌓을수록(stack = 누적) 더 자주 dash한다는 뜻이다. **Endless Banquet (R)** 은 두 얼굴이다. 패시브는 같은 대상에 평타가 두 번 들어갈 때마다 true damage(= armor와 magic resist를 무시하는 데미지)를 더한다. 액티브는 Void Coral — 챔피언이나 Rift Herald, Baron 같은 epic monster에 takedown(킬 또는 어시스트)을 냈을 때 바닥에 남는 조각 — 을 소비해 true form에 진입, HP와 attack range, attack speed를 한동안 추가로 받는다.

게임 플랜은 정글을 통한 snowball이다(snowball = 작은 초반 우위를 훨씬 큰 우위로 키우는 것). 캠프를 정리하고, 라인을 gank(gank = 정글러가 같이 라이너를 덮치는 매복)하며, 6레벨에 한타를 강제로 열고, Void Coral을 먹은 뒤 true form 상태 그대로 다음 한타를 이어 붙인다. Bel'Veth는 scaling(scaling = 시간이 지날수록 강해지는 성질) 챔피언이 아니다. 초반이 정체되면 그녀는 그저 더 약한 Master Yi에 가까워진다.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade는 정글 스타터 — 정글 몬스터를 잡으면서 업그레이드되어 **Smite**(모든 정글러가 드는 summoner spell — 한 대상에게 강한 즉시타로, 캠프를 빠르게 정리하거나 상대 팀의 오브젝트를 스틸할 때 쓰는 스킬)를 강화한다.

**코어 아이템 (구매 순서):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 평타 3대마다 추가 물리 on-hit 피해. 게임 내에서 누구보다 빠르게 때리는 챔피언에게 완벽하다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 고정 공속이 Q 쿨감과 곱해져 시너지를 만든다.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — armor pen(상대 armor 일부 무시)과 magic pen(상대 magic resist 일부 무시)을 번갈아 적용하는 on-hit 추가 피해. 게다가 melee range(= 칼이 닿는 가까운 거리)에 있는 동안 누적 방어 스택을 쌓는데, Bel'Veth 입장에서는 항상 그 거리다.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal(= 피해의 일부를 자가 회복) + overheal shield(= 풀피 위로 넘치는 회복이 임시 보호막으로 전환). **Royal Maelstrom (E)** 채널 도중에 살아남기 위한 생존력이다.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — 평타 두 번 중 한 번을 한 swing 안에 두 번의 on-hit으로 변환해, Kraken Slayer와 Terminus 가치를 두 배로 만든다.

**상황별 아이템:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 강한 AP 조합 상대(Karthus, Ahri, Lissandra; AP = 데미지 대부분이 평타가 아닌 스킬에서 나오는 챔피언). magic resist와 on-hit magic damage를 함께 주며, Bloodthirster를 대체한다.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 뒤처졌거나 poke 조합 상대(poke = 한타가 시작되기도 전에 거리에서 체력을 깎아두는 견제). 각 대상에게 첫 평타가 크리(crit = 평타 대비 약 두 배 피해)를 띄우며 자힐을 동반해, skirmish(skirmish = 한타가 아닌 1v1·2v2 소교전)에서 템포를 되찾는다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐량 누적 조합 상대(Soraka, Aatrox, Dr. Mundo, Vladimir). 평타마다 Grievous Wounds 적용(Grievous Wounds = 대상의 회복량을 절반으로 깎는 디버프).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 우위에 있고 상대 팀의 waveclear가 약할 때(= 미니언 웨이브를 빠르게 정리할 수단이 부실). 사이드 라인(중앙에서 떨어진 top·bot 라인)을 무엇보다 빠르게 밀고 포탑에 추가 피해를 주어 splitpush(splitpush = 팀이 다른 쪽에서 운영하는 동안 사이드를 단독으로 압박)에 최적이다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 단일 대상 AP burst 상대(burst = 1-2초 안에 폭발적으로 들어오는 피해; 예: Veigar, LeBlanc, Syndra). 30% HP 이하에서 자동으로 보호막이 발동해 다음 magic damage의 큰 몫을 흡수한다.

**신발:** 기본은 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 는 double-AD 조합(= 상대 팀에 강한 물리 캐리가 둘, 예: Caitlyn + Master Yi) 상대로만 고려한다.

**스킬 마스터 순서:** **Q** 선마, 다음 **E**, 마지막 **W**. **Q**는 랭크가 오를수록 기본 쿨다운이 줄어 — 한 슬롯에 데미지와 기동성이 동시에 들어 있다. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 룬은 게임 시작 전 미리 고르는 패시브 보너스로, 초반 스탯과 데미지 스타일을 결정한다. 주문 트리 **Precision**(평타 중심 트리)에 **Press the Attack**(같은 대상에 평타 3대를 적중시키면 다음 평타나 스킬에 추가 피해 + 잠시 동안 그 대상이 모두에게 받는 피해 증가), **Triumph**(takedown 시 약간 회복), **Legend: Alacrity**(takedown마다 추가 공속), **Coup de Grace**(저체력 적에게 추가 피해). 보조는 **Resolve**의 **Second Wind**(피해를 받은 뒤 HP 재생) + **Revitalize**(받는 회복량 증가)로 정글 skirmish 지속력을 챙기거나, 게임이 잔잔해서 골드와 타이머 최적화를 노릴 때는 **Inspiration**의 **Magical Footwear**(12분에 무료 신발) + **Cosmic Insight**(summoner spell 쿨감)로 간다.

## 주요 매치업

- **Lee Sin:** 초반 invade가 강한 정글러(= 아이템도 없는 초반에 너의 정글로 들어와 죽이러 오는 정글러). 자기 버프 시야 와드로 그를 추적하고, 4레벨 전에는 절대 싸우지 마라 — 그 듀얼은 매번 그가 이긴다.
- **Master Yi:** 스케일링 라이벌. 20분 전에 그를 죽이거나, 후반 한타에서 데미지로 밀린다는 사실을 받아들이고 일찍 objective trade(= 그가 맵 반대편에 묶여 있을 때 Drake나 Herald를 푸시)를 강제해 그가 4코어에 도달하지 못하도록 묶어 둬라.
- **Karthus:** 무료 매치업. 그의 ult(R 또는 ultimate — 마지막이자 가장 강한 스킬)는 맵 전역에서 우리 팀에 피해를 주지만, 본인 기동력은 0이다 — Q로 들이박으면 한 rotation(= 자신의 스킬 한 사이클) 안에 죽는다. 그가 gank를 마칠 때마다 정글 캠프를 counter-jungle(= 그의 캠프를 빼앗기) 한다.
- **Sejuani:** 험한 매치업. 그녀의 R은 point-and-click(= 조준 없이 대상에게 곧바로 적용)이며 그 자리에 묶어버린다. **Flash**가 없으면 절대 engage(engage = 한타 시작)하지 말고, 너에게 peel(peel = 위협이 너에게 닿기 전에 막아주는 아군) 가능한 팀 위치 없이도 들어가지 마라.
- **Rammus:** 하드 카운터(= 너의 매치업을 망치도록 설계된 픽). 가시 패시브가 평타 피해 일부를 반사하고, 그의 W는 방어형 steroid(steroid = 스탯을 일시적으로 증폭하는 스킬 — 여기서는 armor와 반사량)로 반사를 두 배로 만든다. 단독 skirmish는 피하고, 팀에 핑을 찍은 뒤 Terminus를 완성할 때까지 반대편 정글을 파머라.

## 파워 스파이크 및 승리 조건

파워 스파이크는 챔피언이 1분 전과 비교해 갑자기 훨씬 강해지는 순간이다 — 보통 새 스킬이나 새 아이템이 들어오는 시점이다.

- **3레벨:** 첫 풀 클리어 완료, **Q-W-E** 모두 해금. 대부분의 gank는 W의 knock-up(= 적을 짧게 공중에 띄우며 잠깐 stun)과 도주용 Q로 받아낼 수 있지만, 아직 한타를 강제할 수는 없다. 깔끔한 클리어와 빠른 Scuttle(river의 중립 게 — 잡으면 시야와 강 위 이동 속도 버프)에 집중한다.
- **6레벨:** **Endless Banquet (R)** 가 켜진다. 다음에 챔피언이나 epic monster(Rift Herald, Drake) takedown을 내면 Void Coral을 먹고 긴 true form(= 일시적으로 미니 보스가 되는 강화 변신)에 진입한다. 즉시 한타나 드래곤을 강제하라.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~10-12분):** 첫 진짜 데미지 스파이크. 이제 대부분의 정글러를 그들의 정글 안에서 듀얼할 수 있고, 저체력 라이너에게 dive(dive = 적 포탑 아래로 들어가 포탑샷을 맞아가며 처치)도 가능하다.
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus 완성 (~16-18분):** 3코어가 갖춰지면 squishy 대상의 armor나 magic resist는 사실상 신경 쓰지 않아도 된다(squishy = ADC와 대부분의 mage처럼 방어가 약한 챔피언). 두 번째 드래곤과 Baron 타이머에 맞춰 팀과 합류하라.
- **Void epic monster (Rift Herald 또는 Baron):** R의 액티브 폼은 epic monster(epic monster = 일반 정글 캠프보다 훨씬 강한 거대 중립 오브젝트)에서 나온 Void Coral을 먹었을 때 훨씬 길게 유지된다. 10-14분쯤 팀과 함께 Herald를 잡아 true form이 켜진 채로 두 웨이브를 미는 그림을 노려라.

## 흔한 실수

- **Q를 같은 방향만 스팸하기.** 네 방향 각각에 별도의 쿨다운이 있다. 가만히 서서 앞으로만 네 번 눌러대면 세 방향을 그대로 버리는 셈이다. 앞 → 옆 → 뒤로 굴려라 — 데미지도 더 들어가고 공속 스택도 동시에 쌓인다.
- **E를 매번 끝까지 끌고 가기.** **Royal Maelstrom (E)** 는 채널 스킬이다(= Bel'Veth는 한자리에 멈춰 계속 시전, 끊김에 취약). 다시 누르면 즉시 종료된다. 한 번의 데미지 rotation(예: Veigar의 W 케이지)을 흡수하는 데만 쓰고, 곧장 끊어 평타로 돌아와라. 끝까지 채널하면 2초 동안 평타가 0이라는 뜻이다.
- **근처에 Void Coral 없이 R 누르기.** 액티브 폼은 source에 따라 대략 30-60초간 유지된다. coral 없는 R은 낭비다 — 일반 한타에서는 평타 두 대마다 들어가는 패시브 true damage 쪽이 핵심이다.
- **2레벨에 상대 정글러랑 1v1 시도.** Bel'Veth의 클리어는 괜찮지만 초반 듀얼은 평범하다. 2-3레벨에 Lee Sin이나 Xin Zhao가 invade해오면 캠프를 버리고 팀에 핑을 찍어라 — 듀얼을 이긴다는 가정 자체가 비현실적이고, 죽으면 그대로 그들에게 snowball을 헌납하게 된다.
- **Void Coral 타이밍 흘리기.** coral은 떨어진 뒤 소비할 수 있는 짧은 창이 있다. 6분에 적을 잡아놓고 coral을 무시하면, 그를 잡은 유일한 이유를 그대로 버린 셈이다. recall(recall = 베이스로 귀환하는 채널 스킬) 누르기 전에 항상 coral 위를 밟아라.

## 고급 팁

**Above and Below (W)** 를 Q 리셋 도구로 써라. 툴팁에 따르면 **W**가 챔피언을 명중하면 그 방향의 **Void Surge (Q)** 쿨다운이 새로 고쳐진다 — 따라서 1v1의 최적 패턴은 **앞 Q → AA → 타깃에 W → 안전 방향으로 뒤 Q**, 그리고 몸을 돌리는 그 순간 다시 앞 Q가 준비된 상태다. 프로들은 이 루프로 두 번 안에 세 번의 dash를 이어 붙이는데, 이는 게임 내 어떤 정글러도 가지고 있지 않은 빈도다.
