---
title: "Akali Mid Build & Guide — Patch 16.9"
slug: "akali-mid"
language: "zh-hans"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Akali 中单完整攻略:AP 刺客核心出装顺序、Domination 主系符文搭配、关键对位拆解、6 级 R 大招强势期节奏、E 苦无标记常见失误规避,以及一条 R + W 衔接的高阶收尾技巧。"
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "用技能伤害敌方英雄会留下标记。走出标记环外可强化下一次普攻,获得额外射程与额外伤害。"
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "扇形苦无,造成伤害并减速。主要的 poke 与 trade 工具。消耗能量,冷却很短 — 在 trade 中按 CD 持续放出。"
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "烟雾区域,使 Akali 无法被指向选中,并在持续期间提供最多 +80 的能量上限。在内部行动会短暂暴露。不要只把 W 当脱离技,要在连招中段甩出来 — 能量加成能让 rotation 多一次 Q。"
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "向后翻跃,飞出苦无标记第一个命中的敌人。再次施放可冲向被标记目标。只标记英雄,绝不要标记小兵。"
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "两段终极技。R1 跃起造成伤害;R2 穿越冲刺,处决低血量敌人。处决伤害随目标缺失生命值放大。"
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位高单体爆发 (Zed R, Veigar 连招, LeBlanc):金身吃下伤害窗口,再用 R2 收尾"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了一件魔抗装就接出 — 维持对更肉敌人的技能伤害 scaling"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位会切断你 engage 的单体法术 CC (Ahri 魅惑、Lissandra R、Twisted Fate 黄牌) — spell shield 挡掉首段控制"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "面对长时间团战和大量 bruiser 的阵容,需要回血与坦度而不是纯爆发时"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "用 E1+E2 抓单落单的 squishy,接 Q + 强化普攻 + R 连招完成处决。R 一好就去边路 roam。"
  weakness: "6 级前清线慢、攻击距离短:容易被远程 poke 与 jungle gank。没有硬控,W 在 CD 时也没有逃生手段 — 在连招打到之前就可能被锁住秒掉。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## 概述

Akali 是一名 AP burst 刺客:为了在 1-2 秒内对单一目标砸出极高伤害(burst — 极短时间内集中爆发)而设计的英雄。她的技能组是一连串的 dash — **Shuriken Flip (E)**、**Perfect Execution (R)** — 围绕 **Twilight Shroud (W)** 的隐身窗口构建。她没有蓝条,使用能量,所以短冷却比资源池更重要。中路适合她,因为河道两侧有最短的 roam(离开自己的线去别条线打配合)路径,而 6 级的 **R** 能把任何对面没有 vision ward(可放置、揭示一片区域的眼)的遭遇战变成 pickoff(单独切掉一个被孤立于队伍之外的敌人)。

游戏思路:撑过较弱的对线期(清线差 — 技能清小兵慢,而且早期没有击杀威胁),熬到 6 级,再把任何小幅领先转化为 roam 与塔下抓人。这位英雄真正的关键在 **E** 的落点 — Akali 的 E 先打出一发苦无,只有第一个被命中的敌方英雄才会成为 dash 的目标。如果误标小兵,你会失去整个技能 rotation(Q + W + E + R 各释放一次的循环)中的 dash。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 Health Potion。Doran's Ring 给的 AP 与法力恢复 Akali 用不上,但小兵附加伤害正好弥补她前期清线孱弱。除非对位是高强度普攻消耗,否则不要选 ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**。

**核心装备 (按顺序):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (能让你向敌人 dash 拉近距离的主动) + 爆发伤害;与 **E**、**R** 衔接,可以从射程外 engage (开团)。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透 (技能伤害无视对方一部分魔抗)。直接提升击杀脆皮的效率。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,敌人血量低于 ~40% 时触发的额外伤害,正好和 **R2** 处决衔接。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期对全部 AP 的乘数装。整套装备里 AP 最高的格子。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 Zed、Veigar、LeBlanc 等爆发与你落点重合的对手。金身主动让你 ~2.5 秒无敌且无法行动,撑过对方的伤害窗口,再用 **R2** 完成击杀。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 一旦任何核心目标买了魔抗装就立刻接出;维持伤害 scaling。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Ahri 魅惑、Lissandra R、Twisted Fate 黄牌);spell shield 吃掉他们的起手。
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 面对 bruiser 较多、团战时间偏长的阵容时的 1 号备选;牺牲爆发换取持续伤害与回血。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。控制多 (Lissandra、Ahri、Galio) 时 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 也可以接受。

**加点顺序:** 主升 **Q** (主要伤害与能量返还,即技能释放后回收的能量),副升 **E** (降低 dash 冷却),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 符文是开局前选择的被动加成,主系 (5 个) + 副系 (2 个)。主系 **Domination** 带 **Electrocute** (连续命中三次技能触发的额外爆发)、**Sudden Impact** (dash 后获得额外法穿)、**Sixth Sense** (视野压制)、**Ultimate Hunter** (减少 **R** 的冷却)。副系 **Sorcery** 带 **Transcendence** (技能急速 — 技能更快冷却好) 与 **Gathering Storm** (后期 AP scaling)。Akali 用能量而非蓝量,所以绝对不要带 **Manaflow Band**。

## 关键对线

- **Galio:** 6 级前的硬克制。被动强化普攻,**W** 嘲讽会直接锁死你的 **R** dive。安全发育到 6 级,叫打野,只在他 **W** 进 CD 时才 commit。
- **Yasuo:** **Wind Wall** 能挡你的 **Q** 与 **E** 苦无。先用 ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** 的 dash 或 **E** dash 切入,**Q** 留到风墙下去后再用。
- **Lux:** 1v1 你压她。用 **E** 躲她的 **Q** (一条又长又慢的直线技能 — 非自动锁定,看到她抬手时往两侧走就能躲),6 级直接扑上去。如果她比你早做出 ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo**,买 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。
- **Twisted Fate:** 拼支援速度。他的 roam 工具更强 (**R** 能瞬移整张地图),所以你必须比他离线更快地把 wave 推过去 (把小兵线推向对面塔下)。在河道与三角草丛 (中路旁边三个相邻草丛的位置) 用 vision ward (放置后给一片区域视野的眼) 监控他的 **R**。
- **Zed:** 五五开。6 级前他赢短 trade;6 级后你的 **R** 可以收掉低血的他。除非他先交了 **W** 的影子,否则不要 all-in (孤注一掷的全力击杀,不留退路);否则他会从你的 **R2** 中跑掉。

## 强势期与胜利条件

- **3 级:** 基础技能完整 (Q + W + E)。终于有 dash + 隐身的组合用来 trade (线上短暂的技能交换,不是真正的击杀尝试) 或 disengage (从打不过的局面中脱离)。在第一波 jungle gank (对方打野进线偷袭) 之前找机会做一次短 trade,拿下 prio (优先权 — 兵线靠近敌方塔时,你可以离线去打资源而不掉东西)。
- **6 级:** 第一次 **R** 是整局最大的单次 spike。对任何 squishy (高输出低防御的英雄,比如 ADC) 都获得了击杀阈值。如果河道没有眼 (没有被对面 vision ward 覆盖),河道遭遇战就是免费人头。
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt 成型 (~12-14 分钟):** 满 all-in 伤害已经能配合 R2 处决 (生命值落到阈值以下时由 R2 收掉) 秒掉脆皮。一旦你的兵线被推到敌方塔下,立刻去 roam 边路。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~24-28 分钟):** 爆发倍率猛增。围绕资源点 (Drake、Baron、塔) 强开团,用 **W** 绕侧寻找后排 pick (单独切掉脱离队伍的敌人) — 从对面没盯防的方向切入,通常是没插眼的 fog of war (没有视野的迷雾区域)。

## 常见错误

- **6 级前没有打野配合就 all-in。** Akali 6 级前的 trade 伤害很普通 — 单靠 Q + 普攻杀不掉警觉的对手。安全发育、叫打野、6 级再 commit。
- **把 E1 浪费在小兵上。** Shuriken Flip 的第一段命中谁就标记谁,小兵也算。如果苦无落到了小兵身上,你就丢掉了对身后英雄的 dash。永远调整 **E** 的角度,让英雄成为苦无最先碰到的目标。
- **在 W 里平 A。** 任何行动 (技能或普攻) 都会暴露你 ~0.5 秒。站在 **Twilight Shroud** 里向外 poke 不能保持隐身 — **W** 应该用来躲一段 skillshot (有指向的技能,可以靠走位躲掉),或者在重新走位前切断对方视野。
- **没规划 R2 就先甩 R1。** 单独的 R1 只会把你扔进敌方阵中。永远要预先选好 R2 的目标 — 要么用作收尾,要么用作逃生 dash。
- **对面是脆皮阵容却出 bruiser 装。** ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** 这种装备用爆发换 sustain。面对一队脆 carry,你要的是纯爆发 (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**),不是坦度。

## 进阶技巧

在 **R1** 落地的瞬间立刻甩 **Twilight Shroud (W)**。烟雾刚好在你扎进敌方阵中的那一刻铺在你脚下,在他们重新点你之前的半秒窗口里打断他们的目标锁定 (target lock — 你瞬间不可被指向,他们必须重新选中你)。运用得好,这个半秒既能让你重新走位接 **R2** 处决,也能在 trade 看起来要输时及时取消 all-in — 而对方辅助的 peel 技能 (用来保护自家 carry 的技能) 也常常落空,因为你在 engage 中段就变成了不可指向状态。
