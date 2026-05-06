---
title: "Heimerdinger Top Build & Guide — Patch 16.9"
slug: "heimerdinger-top"
language: "ko"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Heimerdinger 탑 공략. 시작 아이템부터 코어 빌드, Sorcery 룬 선택, 멜리 저거넛 매치업 대처법, UPGRADE 콤보, 파워 스파이크 타이밍, 흔한 실수, 그리고 메가 터렛 배치 같은 고급 팁까지 한 페이지에 정리한 라인 불리·스플릿푸시 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "아군 포탑이나 자신의 turret 근처에서 추가 이동 속도. turret nest 안에서 싸우는 것을 보상하는 패시브."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "turret 설치 (최대 3개). turret은 충전을 쌓고 만충전에서 강한 광선을 발사. Q를 시전할 때마다 충전 초기화. 사거리 350, 쿨다운 1초, 마나 20."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "장거리(1325) 로켓 일제 발사가 커서로 수렴. 추가 적중은 감소된 피해. 챔피언에 적중한 로켓마다 인근 turret에 충전 20% 부여."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "수류탄 투척(사거리 970). 폭발 범위에서 슬로우, 중심에서 스턴. turret을 맞히면 만충전. 쿨다운 11초 고정, 마나 85."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "다음 비-궁극기 강화. R+Q: 메가 터렛(8초, CC 면역, AOE 스플래시 + 슬로우). R+W: 로켓 4파동. R+E: 더 큰 스턴 영역 + 중심 띄우기. 쿨다운 100-70초."
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
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "turret nest를 돌파하는 diver와 bruiser 상대 (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "sustain이 강한 탑 상대 (Darius 패시브, Nasus, Dr. Mundo) — HP 재생을 차단"
    - dd_id: "3118"
      name: "Malignance"
      against: "R+Q 메가 터렛 가동 시간이 중요한 탱키 조합 — 궁극기 쿨다운 감소"
    - dd_id: "3135"
      name: "Void Staff"
      against: "적이 마법 저항을 올릴 때 (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "라인에서 세 개의 turret 벽으로 멜리 탑을 굶기고, UPGRADE+Q 메가 터렛으로 baron·dragon 교전을 고정한다. 1v1은 nest 안에서만 받는다."
  weakness: "다중 dash를 가진 기동성 bruiser와 diver는 turret nest가 피해를 주기 전에 무너뜨린다. Flash와 패시브 이속 외에는 탈출기 0."
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
    primary_rationale: "Arcane Comet은 E(슬로우로 대상 고정)와 W 멀티히트로 안정적으로 발동된다. Gathering Storm 대신 Scorch: Heimer 탑은 라인전에서 결판이 나고, Scorch는 1-6 레벨 vs 저거넛 구간에서 실질 피해를 더한다. Transcendence가 E·W 쿨을 줄여 turret 가동률을 유지."
    secondary_rationale: "Biscuit Delivery는 초반 Q 반복 배치의 마나 비용을 메우고 평타 견제 상황에서 HP sustain을 준다. Cosmic Insight는 Flash와 UPGRADE 쿨을 단축시켜 메가 터렛 윈도우를 더 자주 만들어준다."
    secondary_alternative: "AD가 강한 탑(Darius, Renekton, Garen)을 만나면 Inspiration 대신 Resolve를 부 트리로. Conditioning(12분 후 armor·MR)과 Overgrowth(HP scaling). 트레이드오프: 초반 sustain은 줄지만 all-in에서의 생존력이 늘어난다."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "turret 사거리를 걸어서 통과해야 하는 비기동 또는 저속 저거넛"
      reason: "turret nest 셋업을 우회할 dash나 blink가 없다. 사거리 안으로 한 발만 들여도 turret 광선과 W 로켓이 함께 들어가, 의미 있는 trade를 시작하기 전에 HP가 깎인다."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "근거리 engage밖에 없어 거리를 안전하게 좁히지 못하는 멜리 저거넛"
      reason: "이들의 engage는 세 개의 turret이 동시에 사격하는 사거리 안으로 들어가야 한다. 진입 구간의 E 스턴과 W 일제 사격이 commit를 Heimerdinger에 닿기 전에 끊는다."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "다중 dash로 turret nest를 무너뜨리는 기동성 diver"
      reason: "turret 영역을 dash로 가로지르고 미니언으로 리셋해 Heimerdinger가 자리를 옮기기 전에 도달한다. Zhonya's Hourglass는 필수 — stasis로 dash 윈도우를 소모시키고 disengage를 강요한다."
    - examples: ["jayce", "quinn"]
      archetype: "970 사거리 밖에서 poke하는 장거리 탑 라이너"
      reason: "E와 W가 안정적으로 닿지 않는 거리에서 Heimerdinger를 웨이브로부터 zoning한다. turret을 놓거나 last-hit하려 할 때마다 공짜 poke를 그대로 맞아야 한다."
---

## 개요

Heimerdinger 탑은 멜리 위주 매치업을 장기 소모전으로 바꾸는 라인 불리다. 탑 라인에서의 정체성은 미드와 다르다. 여기서 목표는 로밍이 아니라 뚫리지 않는 **turret nest**를 만드는 것이다. 세 기의 H-28 G Evolution Turret이 모두 커버하는 구역을 형성해서, 어떤 멜리 챔피언이든 지속 마법 피해를 감수하든지 wave control(웨이브 컨트롤: 미니언 라인이 내 쪽으로 밀리느냐 적 쪽으로 밀리느냐를 결정하는 것)을 포기하든지 둘 중 하나를 선택하게 만든다. 패시브 **Hextech Affinity**(아군 구조물과 자신의 turret 근처에서 이동 속도 보너스)는 nest를 떠나 kite하는 것이 아니라 그 안에서 싸우는 플레이를 보상한다. kite는 추격자와의 거리를 유지하면서 뒤로 빠지며 피해를 주는 움직임을 뜻한다.

게임 플랜은 적 포탑 앞에 turret을 깔고, **W**(Hextech Micro-Rockets)와 **E**(CH-2 Electron Storm Grenade)로 poke해서 상대를 all-in 임계치(all-in 임계치: 풀 commit 싸움에서 너에게 이길 만큼의 HP가 더 이상 남아 있지 않은 체력선) 아래로 내리고, 6레벨에서 UPGRADE+Q 메가 터렛을 깔아 라인을 완전히 잠그는 것이다. 거시적 win condition은 splitpush(splitpush: 팀이 다른 곳에서 오브젝트를 가져가는 동안 사이드 라인을 혼자 미는 것)다. 사이드 라인의 Heimerdinger turret nest는 적이 둘을 보내야 정리할 만큼 위협적이라서, 그 시간 동안 나머지 팀은 오브젝트를 챙긴다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + Health Potion 2개. 마나가 초반 Q 반복 배치를 받쳐준다 — turret 하나당 20 마나가 들고, 부서지면 즉시 다시 깔아야 하기 때문이다.

**코어 아이템(순서):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 폭발력 스파이크와 마나 sustain. 패시브가 turret이 챔피언을 공격할 때도 발동되어 W poke trade(poke trade: 풀 fight를 열지 않고 장거리에서 짧게 주고받으며 HP를 깎는 교환)를 강화한다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통으로 초반 armor rune(armor rune: 일부 플레이어가 세 번째 shard 슬롯에 채택해 초반 물리 피해를 줄이는 방어 룬)을 뚫는다.
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP에 더해 스킬로 피해를 줄 때 발동하는 이속 보너스. W 사거리를 잃지 않으면서 라인 위에서 kite하며 turret 위치를 옮길 수 있다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 폭발력. 만충전 turret 광선이나 W 일제 사격으로 40% HP 이하를 마무리할 때 특히 강하다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 배율 증폭. 4코어가 갖춰지면 turret 광선과 W 로켓이 두 명의 수비수를 상대로도 사이드를 미는 것을 정당화할 만큼 피해가 올라온다.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 기동성 diver(diver: turret 영역을 dash로 가로질러 근거리에서 죽이는 챔피언 — Irelia, Camille, Fiora) 상대 필수. stasis로 그들의 dash 윈도우를 낭비시키고, 무적 동안에도 메가 터렛은 계속 피해를 준다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복이 강한 탑 상대(Darius 패시브, Nasus, Dr. Mundo). turret과 W 적중에 묻어 들어가는 Grievous Wounds(받는 회복량을 절반으로 줄이는 디버프)가 HP 재생 루프를 끊는다.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — 탱키한 조합에서 UPGRADE+Q 메가 터렛이 한타 핵심 도구일 때. R 쿨다운을 줄여 오브젝트 사이마다 메가 터렛을 다시 갖출 수 있게 해준다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — priority target(가장 빨리 잡아야 하는 적, 보통 적 캐리)이 마법 저항 아이템(Mercury's Treads, Force of Nature, Spirit Visage)을 사면 교체.

**신발:** Sorcerer's Shoes가 기본. 앞서가는 상황에서 UPGRADE를 더 자주 쓰고 싶다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity로 교체.

**스킬 빌드:** Q를 가장 먼저 마스터해서 turret 피해와 충전 속도를 키운다. W를 두 번째로 마스터해 로켓 일제 사격을 스케일링한다. E는 가장 마지막 — 주력 피해원이 아니라 유틸리티(스턴 + 충전)다. R은 6, 11, 16레벨에 찍는다.

**룬:** 주문 트리 **Sorcery**: **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 트리 **Inspiration**: **Biscuit Delivery**, **Cosmic Insight**. AD가 강한 탑을 만나면 Inspiration 대신 **Resolve**: **Conditioning**, **Overgrowth**.

## 주요 매치업

- **Nasus:** 파밍형 저거넛, dash 없음. 1레벨에 세 turret을 그와 wave 사이에 대각선으로 깔아라. 광선을 통과하지 않고는 trade를 돌려줄 수 없다. 압박 속에서 last-hit를 시도할 때마다 E로 스턴을 걸고 W로 굳혀라. 6레벨 강화 W를 조심해야 하지만(공격 속도가 줄지만, 배치된 turret은 영향을 받지 않음 — 슬로우 디버프는 구조물에 적용되지 않는다) 본인은 그렇다.
- **Darius:** Apprehend(E, 잡아당기기)가 들어오는 3레벨이 위험하다. 미니언이 그의 pull 각을 막아주지 않는 상태로 turret 옆에 서지 마라. 그가 다가오는 동안 뒤로 kite하다가 E의 중심 스턴으로 pull을 끊고 즉시 W. 그의 패시브 Hemorrhage(출혈)는 움직여서 접촉이 끊기면 풀린다 — 멈춰서 trade하는 것보다 kite가 효과적이다.
- **Irelia:** 어려운 매치업. 미니언으로 dash(Ionian Fervor E)를 리셋하고, 동선을 잘 잡으면 turret 셋을 뚫고도 도달한다. Zhonya's Hourglass를 세 번째 아이템으로 유지하라. 6레벨에 진입 구간에서 E로 스턴 후 즉시 UPGRADE+Q로 메가 터렛을 깔자. 메가 터렛의 AOE(area of effect — 단일 대상이 아니라 영역에 들어가는 피해) 슬로우가 그녀를 광선 사거리에 묶어둔다.
- **Garen:** 직관적인 매치업. 원거리 poke도 dash도 없다. 유일한 탈출은 Perseverance(패시브 HP 재생). turret 광선과 W 로켓 사이로 poke 타이밍을 계속 엇갈려 그의 재생 윈도우를 막아라. 그가 last-hit하러 올 때 E로 중심 스턴, W로 풀 폭발 사이클. Judgment(E 회전)는 원형으로 피해를 주니 발동 시 가까이 붙지 말고 W 사거리를 유지하라.
- **Jayce:** 원거리 폼(Shock Blast)은 1050으로 너의 W 1325보다 짧지만 실제로는 강화 평타를 위해 근거리 폼으로 전환한다. 그가 근거리 폼으로 commit하는 순간이 너의 윈도우다 — 세 turret 영역에서 E 스턴 후 W. 라인 내내 원거리 폼을 유지하면 turret을 자기 포탑 쪽으로 더 가까이 두고 그의 push를 받아내는 데 집중하라. 열린 라인에서 쫓지 마라.

## 파워 스파이크 및 승리 조건

- **1레벨:** 세 turret이 다 깔리는 건 3레벨이지만, 1레벨의 한 기 turret만으로도 wave 첫 접근에서 상대 HP를 깎는다. 적이 last-hit하러 turret 사거리에 들어와야 하도록, 경험치 사거리 경계 근처에 Q를 놓아라.
- **6레벨 (UPGRADE+Q):** 메가 터렛은 어떤 멜리도 무시할 수 없는 8초간의 CC 면역 AOE 피해다. 라인 한복판에 깔아 적이 광선 + 슬로우 풀 사이클을 맞지 않고는 가로지를 수 없는 영역을 만들어라. 너의 가장 강한 splitpush 도구다.
- **Cosmic Drive 완성(약 14-16분):** 3코어(Luden's + 신발 + Cosmic Drive)에서 turret 피해가 탱커한테도 의미 있게 들어가기 시작한다. Cosmic Drive의 이속 덕에 fight 포지션을 잃지 않고 kite하며 부서진 turret을 다시 깔 수 있다.
- **Rabadon's Deathcap 완성(약 24-28분):** 후반 Heimerdinger의 turret은 집중된 캐리 공격에 견줄 만한 피해를 낸다. baron이나 dragon 진입로에 메가 터렛을 미리 깔아 fight를 강요하면 가치가 극대화된다.

## 흔한 실수

- **항상 turret 세 기를 유지하지 않는다.** turret이 부서지거나 만료되면 즉시 다시 깔아라. 두 기 셋업은 광역 피해가 33% 줄고 빈틈을 허용한다. Q를 빠른 키에 바인드하고, 빈 슬롯에서 350 사거리 안에 들면 자동으로 갱신해라.
- **멜리 저거넛에게 UPGRADE+Q(R+Q) 대신 UPGRADE+E(R+E)를 쓴다.** R+E의 띄우기는 화려하지만, R+Q 메가 터렛이 8초 동안 반경에서 빠져나갈 수 없는 저속 대상에게 훨씬 더 큰 누적 피해를 준다. R+E는 정글 웨이브를 정리하거나 사거리를 너무 빼고 들어온 mage를 응징하는 용으로 아껴두자 — 멜리 탑 상대 주력이 아니다.
- **상대 all-in 동안 turret 사거리 안에 가만히 서 있는다.** turret은 엄폐를 주지 풀 무적을 주지는 않는다. 적이 풀 HP에 활성화된 gap-close로 commit(탈출 계획 없는 all-in)하면, turret이 피해를 누적시키는 동안 뒤로 빼는 것이 정답이다. 멈춰서 스턴 proc(turret의 스턴이 적중과 함께 발동되는 순간)을 기다리지 마라.
- **dash가 많은 매치업에서 Zhonya's Hourglass를 거른다.** Irelia, Camille, Fiora 상대로 Zhonya's는 상황 아이템이 아니라 코어다. 매치업이 요구하면 Shadowflame보다 먼저, 세 번째 아이템으로 올려라.
- **적 정글에 turret을 깔려고 너무 멀리 나간다.** 적 강이나 tribrush(tribrush: 강에서 Dragon·Baron 둥지 인근의 부쉬 셋이 모인 곳 — 흔한 갱킹 길목)에 깔린 turret은 강력한 시야를 주지만, 위급 상황(in a pinch: 즉각적 위험에 처해 즉시 해법이 필요한 상황)에서 빠져나갈 이속 우위가 있을 때만이다. 우선 nest를 안전하게 세운 뒤, Cosmic Drive가 나오면 그때 오브젝트 방향으로 커버리지를 확장해라.

## 고급 팁

UPGRADE+Q(메가 터렛)에서 배치 각도가 AOE 커버리지를 결정한다. 메가 터렛을 적의 현재 위치 위가 아니라 그의 후퇴 경로상으로 한 발 뒤에 깔자. 적이 초기 낙하 지점에서 물러나면서 광선 사거리에서 빠져나가는 게 아니라 안으로 걸어 들어가게 된다. 진입 구간의 E 스턴과 결합하면, 적은 그 영역을 벗어나기 전에 두세 사이클(각 약 1.5초) 분량의 광선을 그대로 흡수해야 한다 — 슬로우에 걸린 표적의 이동 속도로는 메가 터렛 8초 지속 시간의 거의 전부다.
