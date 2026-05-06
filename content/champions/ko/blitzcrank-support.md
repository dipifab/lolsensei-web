---
title: "Blitzcrank Support Build & Guide — Patch 16.9"
slug: "blitzcrank-support"
language: "ko"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Blitzcrank support 완벽 공략. 후크 타이밍, 와드 셋업, engage 템 빌드 순서, 핵심 매치업 대처, 강력한 파워 스파이크, 그리고 초보자가 흔히 저지르는 실수까지 실전 가이드 한 페이지에 정리."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "체력이 낮아지면 현재 마나에 비례한 보호막을 얻는다. 한타 직전엔 마나 바를 가득 채워두는 게 이득."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "긴 직선 skillshot: 첫 번째로 맞은 적을 자기 쪽으로 끌어당긴다 (hook — 대상을 잡아당기는 그랩). 쿨다운이 길어 빗나가면 16-20초간 engage가 사라진다."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "self-buff: 큰 폭의 이속과 공속, 끝나는 순간 슬로우. Q 전에 거리를 좁히거나 E 띄우기 후 추격할 때 사용."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "다음 평타에 잠깐의 띄우기를 부여한다. 사거리는 근접 — Blitz가 이미 대상 옆에 붙어 있어야 한다."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "액티브: 주변 적에게 데미지와 silence (스킬 캐스트 차단). 패시브: 충전된 차지가 다음 평타에 추가 번개 데미지로 발동."
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 CC 또는 AP burst 상대 (Lux, Morgana, Ahri) — magic resist + tenacity (CC 회복 가속)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "carry에게 hard CC가 박힐 때 (Morgana Q, Ashe R, Leona engage) — 액티브로 ADC의 stun을 즉시 해제"
    - dd_id: "3107"
      name: "Redemption"
      against: "poke 조합 상대 (Xerath, Caitlyn, Senna) — 한타 광역 힐로 trade에서 잃은 HP 회복"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "한타당 더 많은 hook이 필요할 때 — Ability Haste로 Q 쿨이 줄어 빗나가도 손해가 적다"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "priority 타겟 (적 ADC 또는 백라인 mage)에게 Rocket Grab을 적중시킨 뒤, 상대 팀이 peel (carry를 들어오는 데미지로부터 보호)을 하기 전에 W-AA-E-R 콤보로 마무리한다."
  weakness: "Q가 빗나가면 16-20초간 engage가 거의 없다. disengage가 있는 라인 (Janna, Lulu) 또는 hook을 막는 몸통 (미니언, 막아서는 탱커)이 있으면 챔피언 자체가 멈춘다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
      rationale: "immobilize 직후 armor와 magic resist를 burst로 받는다 — Q 풀이 들어가는 바로 그 순간 발동해, 타겟이 되는 프레임에 들어오는 데미지를 그대로 탱킹한다."
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    primary_rationale: "주문 트리 Resolve: Aftershock은 Q 풀에 정확히 맞물려 발동. Font of Life는 immobilize 후 ADC에게 힐을 깔고, Bone Plating은 라인전 짧은 trade에서 burst를 흡수, Overgrowth는 후반 추가 체력으로 탱킹력을 늘린다."
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_rationale: "보조 트리 Inspiration: Biscuit Delivery로 라인전 체력·마나 sustain을 확보 (Mana Barrier 보호막 유지에 직접 기여), Cosmic Insight로 한타 Flash 쿨을 더 자주 돌린다."
    secondary_alternative: "immobile enchanter 상대 라인이라면 Inspiration 주력에 Glacial Augment 스왑 — poke-and-slow 라인전. 덜 흔하지만 유효한 대안이다."
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "dash 없는 정적 포지션 ADC"
      reason: "평타 사거리 때문에 미니언 뒤 예측 가능한 라인 위에 멈춰 서야 한다. 캐논 미니언 호 옆 hook은 즉시 탈출기가 없어서 그대로 박힌다."
    - examples: ["soraka", "yuumi"]
      archetype: "기본 HP가 낮은 squishy enchanter"
      reason: "enchanter를 포지션 밖으로 끌면 라인이 사라진다 — carry는 peel이 없어지고, 500 HP 타겟에 Q-W-E-R 콤보면 trade가 끝난다."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "정지형 mage support"
      reason: "뒤에서 멀리 poke하려고 캐스트한다. 캐스트 프레임에 max-range hook이 박히면 flash 전에 잡혀, 그 주변이 그대로 4v5 공짜 한타가 된다."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "hook 경쟁에서 이기는 engage tank"
      reason: "그쪽이 먼저 hook이나 돌진을 들어가면 너의 Q 애니메이션이 잘리고 동료가 CC 체인을 그대로 받는다 — hook-vs-hook 라인은 cast를 먼저 보여주는 쪽이 진다."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "disengage와 CC 면역"
      reason: "Janna Q 토네이도는 너를 E 사거리 밖으로 날리고, Lulu W는 engage 도중에 슬로우/폴리모프를, Morgana Black Shield는 hook 자체를 통째로 막는다."
    - examples: ["alistar", "tahm-kench"]
      archetype: "self-peel이 되는 bruiser"
      reason: "hook이 성공해도 자기 ADC를 헤드벗으로 밀거나 삼켜버린다. 풀이 킬로 이어지지 않고, 긴 Q 쿨이 그대로 punish 윈도우가 된다."
---

## 개요

Blitzcrank은 한 가지 스킬을 적중시키는 데 게임 전체가 걸려 있는 tank-engage support다: **Rocket Grab (Q)**. 이 hook (적을 자기 쪽으로 끌어당기는 그랩)이 이 챔피언의 모든 한타를 연다. 적중하면 봇 라인이 2초간 2v1이 되고, 빗나가면 16-20초 쿨다운 동안 engage가 거의 사라진다. 쿨다운 감소 ("Ability Haste"라고 부른다)와 tank 빌드로 scaling하는 이유는, 그의 일이 앞으로 걸어가서 hook을 던지고 띄운 다음, ADC가 정리할 때까지 살아남는 것이기 때문이다.

게임 플랜을 한 문장으로: 부쉬에 와드를 박고, 적 ADC의 발 위치를 보고, 예측 가능한 경로 위에 발을 디딘 순간 **Q**를 던진 뒤, **W** (이속 self-buff) → 평타 → **E** (띄우기) → **R** (silence와 광역 데미지)로 콤보를 잇는다. 한타 밖에서는 시야가 일이다 — 강과 트라이 부쉬에 와드를 박아서 정글러와 미드 라이너가 적이 missing임을 알 수 있게 해야 한다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개 + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** trinket. 두 번째 귀환부터는 매 귀환마다 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward**를 사라.

**코어 아이템 (구매 순서):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — support starter. 패시브로 골드를 주고, 골드 임계점 (대략 12-15분 사이)에 도달하면 자동으로 ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh**로 업그레이드된다.
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — support starter의 warden 업그레이드. 체력, Ability Haste, 그리고 네가 immobilize한 적을 슬로우시키는 오라가 붙는다 — **E** 띄우기와 완벽히 맞물린다.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 평타 위주의 봇 라인 (대부분의 ADC) 상대 armor 신발. 강한 CC 상대로는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 광역 보호막 액티브. hook 후 너희 팀이 commit하면, 적 팀의 burst가 캐스트 중일 때 Locket을 켜라. 스파이크를 흡수해 50/50 한타를 깔끔한 승리로 바꾼다.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 패시브를 ADC와 연결하는 아이템. 너의 **R**이 터지면, ADC가 몇 초간 평타마다 추가 데미지 버프를 받는다.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 후반 peel 아이템 (peel = carry를 들어오는 데미지로부터 보호하는 것). ADC가 받는 데미지의 일부를 너에게로 redirect한다. 누적된 tank 스택과 어울려서, 백라인에 뛰어들어 body-block (아군에게 향하는 공격을 흡수하기 위해 길목에 서기)을 할 수 있다.

**상황별 아이템:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — carry에게 hard CC가 박힐 때 (Morgana Q, Ashe R, Leona engage). 액티브가 한타 도중 ADC의 stun을 해제한다.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — poke 조합 상대 (Xerath, Caitlyn, Senna): 한타 광역 힐이 앞으로 걸어 들어가다 흘린 HP를 회복시킨다.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 한타당 더 많은 hook이 필요할 때. Ability Haste로 **Q** 쿨다운이 줄어 빗나간 hook의 손해가 덜하다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 대부분의 봇 라인에서 기본. AP burst나 stun 상대로는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, hook을 자주 던지고 싶고 자신 있다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**.

**스킬 마스터 순서:** **Q** 선마 (hook이 이 챔피언의 핵심), **E** 후마 (띄우기는 랭크에 따라 강해진다), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**에 **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock은 immobilize 직후 armor와 magic resist를 burst로 준다 — Q 풀에 정확히 발동되므로, 표적이 되는 바로 그 순간 들어오는 데미지를 그대로 탱킹한다. 보조는 **Inspiration**에 **Biscuit Delivery**와 **Cosmic Insight**. 대안: poke-and-slow 라인 스타일을 선호한다면 **Inspiration**을 주력으로 두고 **Glacial Augment** (immobile enchanter 상대로 덜 흔하지만 유효).

## 주요 매치업

- **Caitlyn / Janna:** Caitlyn은 네가 hook을 위해 들어갈 부쉬에 덫을 깐다. 라인 부쉬용으로 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward**를 사고 발 들이기 전에 확인하라; Janna Q 토네이도가 네 **Q** 애니메이션을 끊으니, 그녀가 웨이브에 토네이도를 쓴 뒤 네 Q를 던져라.
- **Thresh / Nautilus:** hook-vs-hook 라인. 먼저 던지는 쪽이 보통 진다 — 두 번째 hook은 공짜 응답이기 때문이다. 미니언을 body-block으로 써라: 캐논 뒤에 서서 그쪽이 commit하게 만든 다음, 쿨에서 punish.
- **Lulu / Yuumi:** ADC와 함께 scaling하고 engage가 없다. 너에게 라인 prio가 있다 — 안전한 hook을 던지되, 더 중요한 건 4-6레벨 부근에 **W**를 켜고 미드로 roam가는 것이다. 너무 깊게 푸시한 미드 라이너에게 cross-map hook을 박는 게 Blitz의 가장 가치 높은 플레이다.
- **Morgana / Lux:** 둘 다 장거리 root로 너의 hook을 멈출 수 있다. Morgana E (Black Shield)는 너의 **Q**를 통째로 먹는다. 페이크 hook으로 그녀가 웨이브에 Black Shield를 먼저 쓰게 만들어라 — 사이드스텝 후, 그녀의 실드가 쿨일 때 commit.
- **Ezreal / Senna:** commit 없이 poke만 한다. 라인 플랜은 "16초마다 ADC를 hook" 이 아니라 "시야를 막아 정글이 갱크"다. 강 입구에 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**를 박고 Ezreal이 웨이브에 flash를 쓰면 갱크 핑.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + W):** 첫 번째 hook 파워 스파이크. **W**가 켜져 있으면 슬로우가 들어오기 전에 풀을 몇 발자국 더 추격할 수 있다 — 50% HP trade가 아니라 킬로 끝나는 경우가 많다.
- **6레벨 (R 해금):** 너의 all-in (전 데미지 콤보로 킬까지 가는 한 번의 commit, 뒷걸음치지 않는다)이 대부분의 ADC에게 보장된 킬이 된다. 콤보는 **Q** → **W** → 평타 → **E** 띄우기 → **R** silence와 데미지. silence가 적 support의 **Flash**-disengage를 막는다.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh 완성 (~12-15분):** support starter의 warden 업그레이드가 한타용 챔프로 풀어준다 — immobilize를 적중시킬 때마다 해당 타겟이 ADC를 위해 슬로우된다.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 완성 (~22-26분):** 이제 5명이 모인 한타에 engage해도 백라인이 burst당하지 않는다. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**를 들고 오브젝트 roam을 시작하는 스파이크다.

## 흔한 실수

- **셋업 없이 쿨마다 Q 던지기.** follow-up 없는 hook은 낭비다 — 팀이 닿지 못하는 타겟을 끌어오면 적에게 16-20초를 공짜로 주는 셈. ADC가 commit할 사거리에 있을 때만 (all-in — 뒷걸음치지 않고 킬까지 가는 풀 데미지 체인) **Q**를 던져라.
- **hook 애니메이션을 텔레그래프하기.** Blitz는 **Q** 발사 전에 명확한 캐스트 모션으로 팔을 든다. 그럭저럭 하는 적은 wind-up에서 사이드스텝한다. 부쉬 안, fog of war (적이 너를 볼 수 없는 시야 미확보 어두운 영역), 또는 적이 자기 스킬 애니메이션에 묶여 있을 때 **Q**를 던져 — 반응할 시간을 주지 마라.
- **잘못된 타겟을 hook.** 적 탱커나 bruiser를 끌어오는 건 거의 항상 잘못이다 — 적팀에게 너에게 들어올 공짜 engage를 주는 셈이다. 항상 squishy 타겟 ("squishy" — ADC나 mage처럼 데미지는 높지만 방어가 약한 챔피언)을 먼저 찾고 **Q**를 commit하라.
- **패시브 마나 비용을 잊기.** 너의 보호막 (패시브 **Mana Barrier**)은 현재 마나에 비례한다. 마나가 낮은 상태에서 귀환하면 다음 한타에서 방어력 30% 깎인 채로 시작한다. **Q**가 쿨이고 마나가 40% 미만일 때 귀환하라 — 기분 내키는 대로가 아니라.
- **R을 데미지로만 쓰기.** **Static Field**는 데미지보다 silence (적의 스펠 캐스트를 짧게 차단)로 더 가치 있다. 적 support가 핵심 스킬을 채널 중일 때를 위해 아껴라 — 그 인터럽트가 200 HP 적에게 박는 burst보다 가치가 높다.

## 고급 팁

이 챔피언이 가진 가장 강력한 hook 셋업은 **bush-fog hook**이다. 너의 웨이브 뒤 라인 부쉬로 들어가라 — 적이 너를 못 보는 곳이다. 웨이브가 푸시되어 적 ADC가 캐논 미니언을 last-hit (골드를 위해 미니언을 죽이는 것)하러 앞으로 발을 디딜 때까지 기다려라. 부쉬 벽을 뚫고 **Q**를 던져라 — 읽을 애니메이션이 없고, 사이드스텝할 시간도 없으며, 캐스트를 인지하기 전에 손이 부쉬를 가로지른다. **W**를 켜고 함께 써서 적 support의 flash가 켜지기 전에 거리를 좁혀라. 이 단일 패턴이 브론즈 위 랭크에서 Blitzcrank이 따는 라인 킬의 대부분을 책임진다.
