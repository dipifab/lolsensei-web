---
title: "Jax Top Build & Guide — Patch 16.9"
slug: "jax-top"
language: "zh-hans"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本武器大师 Jax 上单完整攻略:后期 scaling bruiser 出装顺序、Counter Strike 时机、核心对线处理、强势期节奏、新手常见错误规避,以及最后的进阶技巧。"
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "连续普攻持续叠加 Jax 的 Attack Speed。停止攻击则 stack 重置。一旦 commit,就要保持持续打击。"
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "指向单位或守卫的位移。若目标是敌人则造成物理伤害。利用守卫获得额外 mobility — 这是你唯一的逃生与切入手段。"
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "为下一次普攻或 Leap Strike 附加额外法术伤害与短暂减速。蓝耗低、冷却短,每次短 trade 都用。"
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "防御姿态:最多 2 秒内闪避所有进入的普攻并降低 AOE 伤害。再次施放或自然结束都会眩晕周围敌人。核心技能。"
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "被动:每第三次普攻造成额外法术伤害。主动:AOE 爆发外加数秒 Armor 与 Magic Resist。开打前必开。"
      dd_spell_id: "JaxR"
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对位重普攻输出 (Tryndamere, Yasuo, Kayle) — 固定平 A 伤害减免"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位强 CC 或 AP 伤害 (Malphite R, Renekton 眩晕, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "对位高消耗对线的替代核心 — 对英雄首次普攻必爆击并附带回血"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对位两名强 AD 输出 (Yasuo + Caitlyn):把 burst 转成持续的慢出血(伤害延后)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "凑齐两件成型装,然后在边线单杀任何人。开战时 Counter Strike 眩晕,首次平 A Empower,让 Relentless Assault 叠满 — splitpush 逼对方回应。"
  weakness: "6 级前没有真正的 all-in 窗口;远程上单可在兵线外消耗你。Counter Strike 在冷却或落空时,你既无防御层也无击杀威胁。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "缓慢、无位移的 melee tank"
      reason: "Counter Strike 直接眩晕在他们脸上,而他们没有 disengage 手段。Jax 一边稳定叠 Relentless Assault 一边他们硬吃,六级后所有持久 trade 都赢。"
    - examples: ["nasus", "garen", "darius"]
      archetype: "无 AA cancel 的近距离 melee scaler"
      reason: "他们的伤害绑死在普攻或近距离技能上 — Counter Strike 闪掉普攻,结束时的 AOE 眩晕直接打断他们的前摇。"
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "依赖普攻的决斗者"
      reason: "Counter Strike 把他们的主输出来源吃掉 2 秒。配合 Plated Steelcaps,对线进一步倾斜 — 他们在你的姿态下根本打不平 trade。"
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "带风筝工具的远程上单"
      reason: "他们在 Leap Strike 700 距离外消耗,Counter Strike 一上线就退开。Jax 6 级前没有 sustain,在还没靠近 all-in 距离前对线就一直掉血。"
    - examples: ["fiora", "camille"]
      archetype: "带 true damage 与 cleanse / 多段位移的决斗者"
      reason: "Fiora 的 Riposte 直接弹掉 Counter Strike 的眩晕;Camille 的 E hookshot 让她按自己节奏 commit 与 disengage。两人在装备等价时都赢 6 级后 1v1。"
    - examples: ["malphite", "rumble"]
      archetype: "对 melee bruiser 硬克的法师 (在领先时)"
      reason: "Malphite 对 Jax 取决于他出什么装:Frostfire Gauntlet 之前他输,二件套之后他的护甲叠加加上 R 锁定关上 Jax 的 all-in 窗口。"
---

## 概述

Jax 是 melee fighter 兼决斗者,整个英雄定位就是 "scale 到 1v1 之神"。6 级前他没有击杀压力:trade 全靠用 **Counter Strike (E)** 闪掉敌人的普攻,然后用 **Empower (W)** 反打,同时叠 **Relentless Assault (Passive)** 的普攻 stack。从 6 级起,**Grandmaster's Might (R)** 把他变成有爆发的 bruiser,几乎能在边线单杀任何 melee 上单 — 但前提是他能完整地凑到两件成型装。

打法节奏要耐心、要懂线。6 级前安全补刀,等 **Q-E-W-R** 都齐时寻找一次 all-in 窗口(直到一方倒下都不脱战的全压交战),然后在 **Blade of The Ruined King** 成型后切到 splitpush(独自推一路边线,逼对方派人回应)。团战中你是 flanker (侧翼切入),通过几秒前插下的守卫 **Leap Strike** 切进战场 — 而不是从正面顶上去的前排。

## 推荐出装

**初始装:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。受伤回血是面对早期消耗最便宜的解。除非对位是melee且你想主动在 2 级 all-in,否则跳过 Doran's Blade。

**核心装(按顺序):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — 你的第一个强势期。on-hit 伤害随敌方血量缩放,对线 bruiser/tank 上单极佳;主动减速让你贴住试图风筝你的对手(对手边攻击边后撤来保持距离)。
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 让 Jax 真正成为决斗者的第二件。Sheen proc(技能后下一次普攻附加额外伤害)接续 **Q** 与 **W**,移速 on-hit 让你能穿墙追击。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 生存层。当血量跌破 ~40% 时护盾触发(HP-threshold passive — 血量跨过低阈值时触发的被动),给你叠 **Relentless Assault** 反打的几秒钟。
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 对位 AP 伤害的第四件;魔抗加上 on-hit 法术伤害,会随你已经很高的攻速叠加。

**情境装:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 重消耗对线的替代核心;对英雄首次普攻必爆击且附带回血,弥补 Jax 缺乏的 sustain (战中持续回复)。
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 对位两名强物理输出 (例如 Yasuo + Caitlyn)。把物理 burst 转成慢速出血(伤害分摊到接下来几秒,而不是一瞬间)让你在死前还能继续叠 Relentless Assault。
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 重普攻对线的鞋子 (Tryndamere, Kayle, Vayne)。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 重 CC 或 AP 爆发的鞋子 (Malphite R, Rumble, Renekton 眩晕)。

**鞋子:** 默认对位普攻型上单出 **Plated Steelcaps**;如果敌方有 2 个以上硬控源或强 AP 伤害,改 **Mercury's Treads**。

**加点:** 先点满 **E** (Counter Strike) — 闪避窗口随等级提升,冷却从 17 降到 9 秒。**Q** (Leap Strike) 第二点用于清线和切入,**W** 最后。**R** 在 6、11、16 级各点一次。

**符文:** 主系 **Precision** 带 **Conqueror**、**Triumph**、**Legend: Alacrity**、**Last Stand**。Jax 上 Conqueror 叠得快是因为 Relentless Assault 的连击普攻每段都单独计数。副系 **Resolve** 带 **Bone Plating** 和 **Revitalize** 提升早期 trade 的生存力。

## 关键对线

- **Darius:** 6 级前持平,后期偏优。**Counter Strike** 留给他 **Q** 的外圈(给他回血的斧光圈)。如果他打中回血带,你输 trade;如果他空手,你眩晕反打,加上一记 **W** 强化平 A 走开。
- **Camille:** 不利对线。她的 **E** hookshot 绕过你的眩晕节奏,**W** 吸血又能抗住 Relentless Assault。在自家塔下冻线(把兵线压在自己一边,让她吃不到尾刀),等打野来支援。
- **Malphite:** 早期持平,如果他做出 Frostfire / Sunfire,6 级后偏不利。趁他没出二件套时,3 级试一次 all-in;一旦他叠 Armor,**W** 与 **R** 的法术伤害比物理普攻更重要。
- **Teemo:** 不利,经典远程上单 counter。第一件 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**,起手 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,在 ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** 出来前在塔下补兵。只在敌方打野走下半区时找击杀。
- **Renekton:** 1-5 级不利,6 级起持平。在你 **R** 强势期到来之前,他靠 **Q** 的回血和 **W** 的眩晕在 trade 中压你。打被动,等他用 **W** commit 时丢 **E**,把兵线冻在自家塔附近(把兵线压在自己一边以阻止对方吃尾刀)。

## 强势期与胜利条件

- **3 级:** 第一个短 trade 窗口。**E + W + Q** 都解锁后,可以用 **E** 闪掉敌方两次平 A,用 **Empower + Q** 反打,然后正分撤离。不要打超过 3 次平 A — 你的眩晕进入冷却。
- **6 级:** **Grandmaster's Might** 解锁。Armor + MR 主动让贴脸 all-in 转为有利。**R** 永远在 commit 之前开,不要当收尾。
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King 成型(~ 11-13 分钟):** 第一个决斗强势期。可以 splitpush (独自推一路边线逼对方回应),无需打野帮助,任何 1v1 挑你的 melee 上单都能击杀。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 成型(~ 19-22 分钟):** 二件套强势期。Sheen proc 触发于每个技能,你终于具备从侧翼一击秒掉脆皮的爆发。

## 常见错误

- **冷却一好就拿 Counter Strike 清线。** **E** 是你唯一的防御层 — 用在小兵上意味着被 gank 时既没逃生也没眩晕。只在你想 trade 或 gank 即将来时使用。
- **忘了再次施放 E 触发眩晕。** **Counter Strike** 有两段施放:第一段进入闪避姿态,第二段释放 AOE 眩晕。Jax 新手会等它自动结束;手动再施放能让你把眩晕卡在敌人 commit 的精确帧上。
- **6 级前对 bruiser all-in。** **R** 之前 Jax 没有击杀压力。4 级硬打 Darius 或 Renekton 等于送 first blood。被动叠经验,劣势就冻线,等 **R**。
- **没 TP 没视野的 splitpush。** **Blade of The Ruined King** 出来你想 splitpush,但如果敌方四人一起转线而你的 Teleport(把你传送回基地或队友身边的召唤师技能)没好,你的队伍 4v4 会输。决定走边线前一定先看队友的回城 timer。
- **逃跑时用 Leap Strike 砸敌人。** **Q** 也能选守卫和小兵。如果你在跑,Q 后排小兵或自己的 trinket 守卫,千万别 Q 追你的敌人 — 那等于把自己再传回他面前。

## 进阶技巧

在位移途中再次施放 **Counter Strike**,把眩晕卡在敌人 commit 帧上,而不是让它自动结束。诀窍:先开 **E**,走向敌人,等他扔出关键 skillshot 或位移(Renekton **W**、Darius **W**、Camille **E**),然后在他被锁在动作里的瞬间再次施放 **E**。眩晕会在他施法中段抓住他,送你一个保证 2 秒、无法被打断的 Relentless Assault 叠层窗口。在 Practice Tool 里对开了平 A 的木桩练习 — 十次以内你就能找到节奏。
