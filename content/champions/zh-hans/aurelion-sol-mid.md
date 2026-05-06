---
title: "Aurelion Sol Mid Build & Guide — Patch 16.9"
slug: "aurelion-sol-mid"
language: "zh-hans"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 16.9 版本 Aurelion Sol 中单完整攻略:Stardust 累积出装路线、关键对线思路、强势期节奏、新手常见错误规避,以及 Q-W-Q 进阶连招技巧。"
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "对敌方英雄造成伤害的技能会收集 Stardust。Stardust 永久提升每个技能的范围、射程与处决阈值 — 耐心累积,后期收益越大。"
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "面前的扇形吟唱龙息。按住按钮持续输出;每对一名英雄完整作用 1 秒就额外爆发并获得 Stardust。主要 DPS 来源。"
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "穿越地形的指向性飞行,飞行期间 Q 没有冷却。3 秒内拿下 takedown 可返还部分 W 冷却。Stardust 拉长最大飞行距离。"
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "在指定区域生成黑洞,把敌人拖向中心并造成伤害。中心对低血量目标直接处决。Stardust 同时扩大区域与处决阈值。"
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "陨星砸向目标区域:眩晕加伤害。累积 100 Stardust 后,下一发 R 升级为 The Skies Descend — 更大范围、改为击飞、附带 AoE 冲击波。"
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位高机动 assassin (Zed, Fizz, Talon, Akali) — W 进入冷却时金身就是逃命按钮"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位会打断 Q 的单体 hard CC (Annie R, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "对位灵活阵容:减速能把目标钉在 Q 的扇形里"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买出第一件魔抗装就立刻替换"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka mid, Vladimir, Yuumi + 高治疗下路)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "在长团战里靠长 Q 吟唱与 W 追击不断累积 Stardust。Liandry's Torment 与 Rabadon's Deathcap 成型后,sustained burn 能直接穿透 Magic Resist 抹掉脆皮。"
  weakness: "Q 是漫长吟唱:任何打断它的 hard CC (Annie R, Lissandra R, Twisted Fate stun) 都会把伤害砍半。高机动 assassin 在 W 冷却好之前就能拉近距离。"
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
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "无位移的 immobile control 法师"
      reason: "Aurelion Sol 的 W 飞行能拉近距离,同时 Q 不停吟唱。没有位移与隐身的目标只能吃满 sustained Q 伤害,而飞行窗口让 ASol 始终在他们的施法距离之外。"
    - examples: ["galio", "sylas"]
      archetype: "近距离近战中单 skirmisher"
      reason: "他们的 all-in 必须靠近。ASol 在普攻距离之外用 W 与 Q 风筝;一旦对手 Flash 切入,E 把他们扯出位置,等 Stardust 撑大范围之后 R 接眩晕。"
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "多段位移的高机动 assassin"
      reason: "他们能在吟唱中用位移贴脸,直接打断 Q,并赶在 Stardust 撑起优势之前秒掉 ASol。W 冷却太长,无法当作可靠 escape。"
    - examples: ["yasuo", "yone"]
      archetype: "拥有 Wind Wall 的英雄"
      reason: "风墙能挡住整条 Q 的直线。ASol 的核心伤害在交锋中段直接作废,而他们用一波他无法风筝的 all-in 处罚错失的吟唱。"
---

## 概述

Aurelion Sol 是一名 sustained 伤害型法师,他的技能组围绕两个简单的思路:把 **Breath of Light (Q)** 在目标身上吟唱得越久越好(吟唱 = 你按住按钮持续施放数秒的技能,会被 hard crowd control 打断),并在敌人想跑时用 **Astral Flight (W)** 跟上去。被动 **Cosmic Creator** 在你对一名英雄持续造成足够时间的伤害时,会累积一种永久资源 — **Stardust** — Stardust 会永久增加他所有技能的范围、射程,以及处决阈值(目标血量低于此值时技能直接处决)。游戏越长,他每一次施法都越大、越可怕。他没有瞬发 burst 连招:他赢的方式是黏住敌人,直到 burn(在数秒内分次 tick 而不是一次落地的伤害)把他们烧死。

中路的运营思路是非对称的。前期等级你只在很短的窗口里 trade(线上短促的伤害交换,而不是直接打 kill)— 当对方走上前补刀时丢一发 **Q**,吃一两段伤害,转身回去。6 级以后,**W** 让你像免费 **Flash** 一样穿过地形,可以在打野安排的 gank(打野下来你这条线协助你击杀对手)中追击,或在团灭时往自己塔下飞实现 disengage。后期你转型成后排 battlemage(中距离作战、靠位置感与技能组合而不是远距离炮台型法师):站在团战边缘,frontline 之后(你的坦克和 bruiser — 替队伍承伤的硬质近战),让 Q 穿过他们的身体一直吟唱到对方核心身上,放下 **Singularity (E)** 把站在边缘的人扯进来,等 **Falling Star (R)** 眩晕到对方核心时收尾。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring**(法师常规起手戒指:少量 AP、HP 与蓝量回复)+ 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's 的蓝量回复是必需的 — 你每一波兵都会按 CD 用 Q。

**核心装备 (按购买顺序):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 在你 Q 触碰目标的每一秒内,按目标最大血量百分比烧伤 (越肉的越疼,吟唱越长 burn 越大)。单件最强核心。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 提供固定法穿的鞋子:每次施法都无视一部分敌方魔抗,加快秒杀脆皮 (squishy,即 ADC 与法师之类防御薄弱的目标)。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 把你的 **AP** (Ability Power,法术强度,放大法术伤害) 再额外乘 30%。每一发技能都更狠。如果你领先,顺位放在第三件。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 对低血量敌人额外法术伤害 (HP 阈值被动:目标低于一定血量百分比才会触发的额外伤害)。和 **R** 收尾时机完美咬合。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位高机动 assassin (Zed, Fizz, Talon)。**W** 在冷却时金身就是逃命按钮。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体 hard CC (Annie R, Lissandra R, Twisted Fate gold card)。挡住一次眩晕就能保住吟唱。
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — **Q** 命中的所有目标都会被减速,牢牢钉在扇形里。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 针对买了魔抗装的敌人的高强度法穿。任意核心目标买出第一件魔抗就立刻替换。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对你伤害到的敌人施加 Grievous Wounds (一种把所受治疗削减一半的状态)。对位高治疗阵容 (Soraka mid, Vladimir, Yuumi + 高治疗下路) 必备。

**鞋子:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 默认。如果队伍需要更频繁的 **R** 作为团战起手工具,可换成 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (降低技能冷却的鞋子)。

**加点顺序:** 主升 **Q** (主要伤害来源),副升 **E** (清线与 AoE 起手),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery** 配 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration** 配 **Biscuit Delivery** 与 **Cosmic Insight**;若线上对面是远程重 poke 阵容 (poke = 用低风险伤害慢慢消耗血量),可改 **Resolve** 配 **Second Wind** 与 **Overgrowth**。

## 关键对线

- **Yasuo / Yone:** 风墙能挡住整条 **Q** 的直线。先憋 **Q** 等他们交墙,再 re-engage。墙在冷却时才正式开始 trade。
- **Zed / Talon:** **W** 还没好你就死了。先出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**,再补 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**;绝对不要让 **Flash** 与 **W** 同时进入冷却。
- **Veigar:** 6 级前势均力敌 — 他在 W 笼子里眩晕你,你在笼子外用 **Q** 远距离消耗。6 级后,你站着不动他能 E-W-Q-R 一套秒掉,所以吟唱时要持续侧向走位。
- **Annie:** 她的眩晕藏在不太显眼的被动计数里。数她的施法次数:每 4 个技能一次 stun。如果她头像下方的 **Pyromania** 标志(橙色火焰图标)亮着,就别站进 Tibbers 的施法距离。
- **Twisted Fate:** 谁先 roam (离开自己的线去支援其他线) 谁就赢。他的 **R** 跨地图传送;你的 **W** 能飞越地形跟上去。尽量把中路兵线推向对方塔下,他下去 gank 下路时你能免费白嫖 CS,差距不会被拉开。

## 强势期与胜利条件

- **2 级:** **Q** + **W** 已足以追着对方一个失误一直打到线尾 — 任何在没视野时贴近河道的人都该被处罚。
- **6 级:** 第一发 **Falling Star** 解锁瞬发眩晕。和打野配合 gank (打野下到你这条线协助击杀对手):**E** 拖拽 → **R** 眩晕 → 击杀。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 成型 (~ 11-13 分钟):** sustained **Q** 从 chip damage (零碎缓慢的伤害) 升级为真正的威胁。Liandry's 一好就围绕 Drake (河道里的小龙资源点,会给整队 buff) 刷新强开。
- **累积 100 Stardust (~ 18-22 分钟):** 你的 **R** 进化成 **The Skies Descend** — 更大范围、击飞替代眩晕、AoE 冲击波。这是你的团战胜利条件;留给资源点开团,而不是浪费在 pickoff (单独抓掉一名脱节的敌人) 上。

## 常见错误

- **吟唱 Q 却不飞。** **Q** 吟唱中站着不动等于活靶子。沿着目标逃跑的方向接 **W**,吟唱在空中接续无需额外蓝量,你也安全。
- **没有退路就 W 强开。** **W** 是你唯一的 escape。如果在没有铺垫 (打野在身边、**R** 已好、有足够冷却缩减让 **W** 快速回转) 的情况下飞进 3 个敌人,你就会被秒杀,连伤害都没打出去。**W** 是 commitment (一波 all-in,赌身上去拼击杀,没有轻松撤退的路),不是免费位移。
- **贪 Stardust 而不要击杀。** Stardust 是长线收益,但如果对方核心 30% HP 已经一发能秒,直接收掉。一个死掉的核心远比 5 点 Stardust 值钱。
- **忘了 E 是把人吸向中心。** **E** 把敌人拉到区域中央 — 要把他们拉进你方阵型,而不是拉离。位置不对的 E 反而会把对方核心拉离你的 frontline,救他一命。
- **线上用 Q 推线。** **Q** 推线非常慢且烧蓝。用 **E** 清远程小兵,平 A 收近战兵尾刀。**Q** 留给 trade 与消耗。

## 进阶技巧

**Q-W-Q** 连接是区分 Aurelion Sol 玩家水平的核心技巧。先对一名英雄甩出 **Q**,立刻沿着他逃跑的同方向接 **W**。因为 **W** 在飞行期间解除了 Q 的最长吟唱限制,你在空中可以不间断地继续输出 — 而且原目标死亡且新目标进入射程时,**Q** 可以在飞行中重新施放打出第二段实例。实战里这意味着你能从极远的距离上 commit 击杀:**W** 飞行距离很长(大约 1.5 个屏幕宽),而在这段飞行里 **Q** 仍持续打到你正前方的目标,所以威胁范围相当于 **W** 距离加上 **Q** 距离的叠加。一旦拿下 takedown,**W** 的部分冷却会被返还,你几乎能立刻投入下一场团战。
