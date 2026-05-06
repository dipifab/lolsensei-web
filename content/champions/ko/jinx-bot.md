---
title: "Jinx Bot Build & Guide — Patch 16.9"
slug: "jinx-bot"
language: "ko"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Jinx 봇 라인 가이드. 시작 아이템, 하이퍼캐리 치명타 빌드, 핵심 매치업, 파워 스파이크, 흔한 실수와 마무리 팁까지 한눈에 정리한 실전 공략."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Jinx가 챔피언이나 에픽 몬스터 처치에 관여하거나 구조물을 파괴하면, 몇 초 동안 이동속도와 공격속도가 크게 증가한다."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Pow-Pow(미니건, 공격속도 누적)와 Fishbones(로켓런처, 더 긴 사거리의 AOE 대미지, 마나 소모)를 전환. 핵심 DPS 레버."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "장거리 직선 skillshot. 첫 적에게 피해와 둔화, 시야 부여. poke 용도와 diver 상대 self-peel 슬로우로 사용한다."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "수류탄 세 개를 던져 접촉한 적 챔피언을 1.5초 속박. self-peel과 lockdown setup 용도이며 poke가 아니다."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "글로벌 로켓. 멀리 날수록 피해가 커지고, 잃은 체력 비례 피해로 폭발한다. 저체력 도주자를 저격하거나 맵 반대편에서 마무리."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "탱키한 frontline이나 HP 누적 조합 상대 (Sion, Cho'Gath, Dr. Mundo) — 추가 방관이 적 최대 체력에 비례 스케일"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐량이 강한 조합 상대 (Soraka, Vladimir, Aatrox) — 로켓이 닿는 즉시 Grievous Wounds 적용"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "assassin·diver 압박 상대 (Zed, Samira, Yasuo flank) — 이속과 저체력 보호막이 E 깔 시간을 만든다"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "강한 poke 조합이나 교착 라인 상대 — lifesteal과 overheal shield로 fight 사이 체력을 유지"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Statikk Shiv와 Infinity Edge까지 살아서 도달한 뒤, 한타에서 backline에 서서 Q 로켓으로 딜링한다. pickoff에서 Get Excited! 리셋을 연쇄해 Baron과 Drake 교전을 snowball한다."
  weakness: "기본 이동속도가 느리고 dash·blink가 전혀 없다. backline까지 들어오는 diver와 assassin에게 하드 카운터, 첫 두 아이템 전까지 강한 라인 압박(Draven, Lucian, Caitlyn)에 밀린다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "기동성 없는 후반 스케일러 marksman"
      reason: "Jinx는 정적인 marksman을 스케일·한타에서 모두 압도한다. Q 로켓 + Runaan's Hurricane은 교전 시작 후 재배치할 dash가 없는 모인 backline을 갈아버린다."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "HP 누적 탱커와 frontline 조합"
      reason: "Q 로켓은 공격속도에 따라 스케일하는 AOE 물리 대미지를 주고, Lord Dominik's의 추가 방관은 고HP 타겟을 상대로 큰 frontline을 벽이 아닌 이상적인 타겟으로 바꾼다."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "lockdown 형 engage 서포터"
      reason: "서포터가 타겟을 잡으면 Jinx는 CC 사슬 동안 충분히 긴 평타 윈도우 안에 로켓 3-4발을 박고 R로 마무리할 수 있다. 타겟이 AOE 밖으로 dash를 못 빼기 때문이다."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "초반 라인 압박형 marksman"
      reason: "이들은 1-6레벨에서 Jinx를 out-trade 한다. 평타 대미지가 미니건 스택을 앞서고, Jinx에게는 빠질 dash가 없어 첫 아이템 스파이크 전까지 라인 골드를 snowball 당한다."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "기동성 좋은 assassin과 diver"
      reason: "Jinx는 dash·blink·즉발 CC가 없다. Flame Chompers를 넘어선 단 한 번의 gap-close에 E 적중 전 또는 속박 만료 전 삭제되는 일이 흔하다."
    - examples: ["xerath", "ziggs"]
      archetype: "장거리 포대형 mage"
      reason: "Q 로켓 사거리 밖에서 Jinx를 일방적으로 poke 하며 매 웨이브 체력을 깎는다. 탈출기와 sustain이 없어 아이템 스파이크 타이밍까지 라인을 버틸 수 없다."
---

## 개요

Jinx는 교과서적인 hypercarry marksman이다. 첫 10분은 약하고, 두 아이템이 모이면 무서워지며, 한타 킬에서 reset을 한 번만 받으면 게임을 끝낼 수 있다. **Switcheroo! (Q)** 로 단일 타겟 미니건(공격속도 누적)과 AOE 로켓런처(긴 사거리, AOE 물리 대미지, 마나 소모)를 전환할 수 있어, 같은 키로 적 backline에 깔끔한 DPS와 frontline에 대한 웨이브 정리·압박을 동시에 커버한다. 패시브 **Get Excited! (P)** 는 모든 킬·어시스트·구조물 파괴를 거대한 이동속도·공격속도 윈도우로 바꿔준다 — 이게 바로 앞서 있는 Jinx가 한타에 그냥 걸어 들어가서 버프가 끝나기 전에 추가 킬 세 개를 연쇄하게 만드는 엔진이다.

게임 플랜은 말로는 단순하지만 실행이 까다롭다. 초반 공격성에 살아남고, 첫 치명타 아이템(Statikk Shiv)을 띄운 뒤, backline carry로 플레이한다 — 뒤에서 두 번째 위치에 서서 Q 로켓으로 카이팅(거리를 유지하며 뒷걸음으로 평타)하고, diver가 머리 위에 떨어지면 발 밑에 **Flame Chompers (E)** 를 깔고, 저체력 도주자는 **R** 로 맵 반대편에서 저격한다. 실력은 두 가지에서 갈린다 — 한타 중간에 **Q** 폼을 바꾸는 것(engage 들어오는 탱커에는 미니건, 모인 backline에는 로켓)과 적 포지셔닝 실수를 그쪽 backline 도착 전에 킬로 바꾸는 **R** 저격이다.

## 추천 빌드

**시작 아이템:** Doran's Blade + Health Potion 2개. 라인을 이기고 있어도 두 번째 Doran's는 건너뛴다 — 그 골드는 Statikk Shiv를 위한 Sheen 컴포넌트에 투자하는 게 훨씬 가성비가 좋다.

**코어 아이템 (구매 순서):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — 1번 러시 아이템. Energized 패시브가 Q 로켓에 발동되어 즉시 웨이브 클리어가 되고, 공격속도와 치명타 확률 조합이 10-12분쯤 로켓 폼을 진짜 한타 도구로 끌어올린다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 공격속도 신발. 적 팀에 강력한 CC 위협이 3개 이상 있을 때만 Mercury's Treads.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 가장 큰 대미지 스파이크. 치명타 대미지가 backline에 들어가는 모든 Q 로켓 AOE 적중을 그냥 두 배로 만든다. Jinx를 "성가신" 챔프에서 "적 ADC를 지우는" 챔프로 바꾸는 아이템이다.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — hypercarry 한타 아이템. Jinx가 Fishbones 폼일 때 Runaan's의 추가 볼트도 로켓을 발사하므로, 완전한 치명타 + 공격속도 스케일링으로 동시에 세 명을 때린다.

**상황별 아이템:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 탱키한 frontline이나 HP 누적 조합 상대 (Sion, Cho'Gath, Dr. Mundo). 적 팀에 탱커가 3명 이상이면 Runaan's를 대체.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐량이 강한 조합 상대 (Soraka, Vladimir, Aatrox). 로켓이 적중하는 순간 Grievous Wounds(치유량을 깎는 디버프)를 적용.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — assassin이나 diver 압박 상대 (Zed, Samira, Yasuo flank). 저체력 임계 패시브(체력이 떨어졌을 때 발동하는 보호막)와 이동속도가 발 밑에 **E** 를 까는 데 필요한 0.5초를 만들어준다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 강한 poke 조합이나 교착 라인 상대. lifesteal과 overheal shield가 라인을 오래 버티게 해 스파이크 타이밍까지 데려간다.

**신발:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 가 기본. Brand나 Zyra 서포터처럼 강한 AP CC가 있을 때만 Mercury's Treads.

**스킬 마스터 순서:** **Q** 선마(DPS와 로켓 스케일링), **W** 후마(poke와 self-peel 슬로우용 Zap! 쿨다운), **E** 막마(속박 시간은 고정이고 대미지만 스케일). **R** 은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**의 **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. 보조 트리 **Sorcery**의 **Manaflow Band** (Q 로켓 마나 비용을 받쳐줌)와 **Gathering Storm** (후반 스케일링). 스탯 룬: 공격속도 / 적응형 능력치 / 체력.

## 주요 매치업

- **Draven:** 1-6레벨 구간 매우 불리. 그의 Spinning Axe가 모든 교환에서 Jinx를 out-trade. 3레벨 전에는 싸우지 말고, 본인 포탑 근처에서 라인을 freeze하고, Zap! 쿨이 돌 때 6레벨에 도달하라. 적이 과도하게 밀고 들어올 때만 정글러 dive를 부른다. Statikk Shiv가 나오면 매치업이 뒤집힌다 — 그 전까진 그의 all-in 윈도우를 피하고 안전하게 farm.
- **Caitlyn:** 불리. 그녀는 미니건 사거리 밖에서 Q와 트랩 setup으로 라인을 괴롭힌다. 미니언 뒤에 서고, Q 라인에서 옆으로 dodge, 그녀가 앉아 있던 수풀(트랩 가능성)에는 절대 들어가지 마라. 두 아이템까지 살아남으면 — 그녀의 한타 스케일링은 Jinx의 Q 로켓 AOE 앞에서 크게 떨어진다.
- **Lucian:** 불리, 특히 Nami 서포터가 붙으면 더 심하다. 3레벨 all-in(패시브 더블샷 + Q 대시 + W 이속)을 존중하라. **E** 는 그의 dash 막는 self-peel로 아껴라. 절대 poke로 던지지 마라. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** 까지 죽지 않고 도달하면 라인이 안정된다.
- **Aphelios:** 호각, 두 아이템 후엔 Jinx가 약간 우세. 그의 무기 로테이션을 추적하라 — Severum(빨강, lifesteal)이나 Calibrum(초록, 사거리 표식)일 때 미니건의 안전 거리에서 Q 로켓으로 poke 가능. Infernum(주황, AOE)이 장전됐을 때 trade 금물 — 로켓 vs 로켓 윈도우는 그가 이긴다.
- **Samira:** W가 켜지는 순간 근접 all-in을 노린다. 그녀가 snowball 중이면 ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** 를 3번 아이템으로 계획해 두고, 그녀가 dash로 들어오는 순간 **E** 를 깐다(poke로 낭비 금지). **Flash** 가 쿨일 때는 절대 싸우지 마라.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **Super Mega Death Rocket!** 으로 pickoff 압박이 열린다. 봇에서 본진으로 빠지는 저체력 적은 잃은 체력 비례 스케일링을 존중하면 R 처형 무료다. poke로 낭비하지 말고 30% HP 이하 도주자를 기다려라.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv 완성 (~ 10-12분):** 첫 진짜 스파이크. Q 로켓이 한 캐스트로 웨이브를 정리하고 모든 미니건 스택에 Energized가 발동되며, Drake 주변 소규모 교전 참여가 열린다.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 도달 (~ 20-24분):** hypercarry 분기점. Q 로켓 치명타가 backline 타겟을 한 방에 보내기 시작하고, 모든 pickoff·킬이 **Get Excited!** 를 발동시켜 다음 교전으로 무료 로테이션을 만든다.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane 도달 (~ 28-32분):** 치명타 적용된 3-타겟 Q 로켓. 후반 판타지 그 자체 — frontline 뒤에 서서 적 무리에 발사하면 4초 안에 한타가 자체적으로 삭제된다.

## 흔한 실수

- **라인에서 Q 로켓 남발.** 로켓 폼은 마나를 빨리 비우고, 미니건 폼은 공격속도 스택을 높게 유지한다. 미니언 세 마리 묶인 last-hit 정리나 사거리 우위 poke 에만 로켓을 쓰고, trade 윈도우가 닫히는 즉시 미니건으로 돌아와라.
- **"완벽한 저격"을 위해 R을 아끼기.** **Super Mega Death Rocket!** 은 잃은 체력 비례, 최대 체력 비례가 아니다. 25% HP 적에게 60% 사거리에서 안전하게 쏘는 R은 확정 킬이다. 맵을 가로지르는 완벽한 한 발을 기다리다 보면 적이 본진에서 풀피로 회복하는 일이 잦다.
- **한타에서 평타 최대 사거리에 자동으로 서기.** Jinx에게는 dash가 없다. 평타 최대 사거리는 팀의 peel(보호 — 서포터의 CC와 보호막) 밖이다. 측면에서 들어오는 assassin이 팀이 반응하기 전에 너를 지우지 못하도록 뒤에서 두 번째 위치에 서라.
- **engage용으로 E 낭비.** **Flame Chompers!** 는 너의 유일한 self-peel이다. 쿨다운에 들어가면 너는 diver에게 답이 없는 glass cannon(높은 대미지에 낮은 방어력을 가진 챔피언, 대부분의 ADC가 그렇다)이 된다. Zed나 Samira가 머리 위에 떨어지는 순간 발 밑에 깔아라. 절대 poke setup으로 쓰지 마라.
- **Get Excited! 윈도우 밖에서 킬 추격.** 패시브는 단 몇 초만 지속된다. 적 진영 깊숙이 있을 때 버프가 떨어지면 너에겐 기본 이동속도와 0의 탈출기만 남는다. 가속이 끝나면 후퇴하라 — 다음 교전은 네가 생각하는 것보다 더 빨리 너에게 돌아온다.

## 고급 팁

**평타 사이 Q 폼 스왑** 을 연습해 두 세계를 동시에 활성화하라. 핵심 — 한 웨이브에서 미니건 공격속도 스택을 3개 쌓고, Q 로켓 한 발이 미니언 두 마리를 last-hit 하기 직전에 로켓으로 스왑, 로켓 한 발 발사, 같은 프레임에서 미니건으로 다시 스왑해 공격속도 버프를 유지한다. 한타에서는 — frontline 탱커에게 미니건을 박아 공격속도를 쌓고, 팀이 engage를 commit 하는 순간 로켓으로 스왑, 이미 충전된 공격속도와 치명타 + Runaan's가 적용된 상태에서 적 backline에 로켓 3-4발을 쏟아붓는다. 잘 실행하면 한타 첫 3초 동안 약 40% 추가 DPS가 붙는다 — carry가 살거나 죽는 바로 그 윈도우다.
