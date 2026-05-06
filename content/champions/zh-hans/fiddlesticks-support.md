---
title: "Fiddlesticks Support Build & Guide — Patch 16.9"
slug: "fiddlesticks-support"
language: "zh-hans"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Fiddlesticks 稻草人辅助完整攻略:法师开团核心出装顺序、Resolve 主系符文与天赋加点、对线消耗与压制思路、6 级 Crowstorm 强势期开团节奏、关键对线对策、新手常见错误规避,以及草丛中隐身吟唱 R 的高阶技巧。"
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "饰品槽变成假人充能槽。在地图上放置假稻草人提供视野;敌人看到时会短暂恐惧,假人随即爆炸。"
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "指向单个敌人。在 unseen 状态下用技能命中敌人也会自动施加 Terrify。让目标朝远离 Fiddle 的方向逃跑 1-2.5 秒。"
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "吟唱期间持续吸取附近敌人 HP (回复自身)。吟唱结束时造成额外处决伤害。回家后线上的核心续航。"
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "回旋镖型大锥形长镰:减速所有命中敌人,中央直线还会施加沉默。线上主消耗手段 — 命中两次。"
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5 秒吟唱,然后闪现到目标点,5 秒内在 Fiddle 周围每秒造成 AOE 伤害。最佳是从线上草丛冲向敌方 ADC。"
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位高 AOE 爆发阵容、队伍需要主动护盾时 (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位会打断 R 吟唱的单体法术 CC (Lissandra R, Veigar E, Twisted Fate 黄牌)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox) — 附加 Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌方 2 人以上出魔抗装时立刻替换"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "在下路布置深视野,6 级时藏进三角草丛,对敌方 ADC 释放 Crowstorm 拿下确定击杀,让己方 carry 顺势 snowball 起飞。"
  weakness: "6 级前在所有开团辅助里对线最弱:无护盾、无指向 CC。被入侵或被消耗到血线低,在大招上线前没有翻盘工具。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock 由 Q Terrify (定身 CC) 触发,提供 2.5 秒护甲与 MR 爆涨,让 Fiddle 在 Crowstorm 落地后扛过集火。Font of Life 让每次 fear 都治疗 carry,Bone Plating 吃掉前期 all-in 爆发,Revitalize 强化 Bountiful Harvest 续航。"
    secondary_rationale: "副系 Sorcery: Manaflow Band 解决线上频繁 E 的蓝量问题;完成 Sorcerer's Shoes 后,Transcendence 把技能急速顶到 30 以上,缩短 Crowstorm 循环。"
    secondary_alternative: "对位高消耗组合 (Lux, Karma, Xerath support) 把副系换成 Inspiration,带 Biscuit Delivery (前期 5 块免费饼干维持血蓝) 与 Cosmic Insight (Flash 与 Crowstorm 冷却缩短)。"
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "无硬控的脆皮 enchanter"
      reason: "他们的核心机制是治疗与护盾 — 从三角草丛起手的 Crowstorm 跑赢他们的冷却,在 heal 或 shield 还没用上两次前就把他们和 ADC 一起秒杀。"
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "无位移的 immobile ADC"
      reason: "这些 ADC 躲不掉草丛侧翼;一旦 R + E 命中,他们没有任何位移工具拉开距离,你的下路直接把人头转成防御塔。"
    - examples: ["sona", "seraphine"]
      archetype: "无逃生的后排 mage 辅助"
      reason: "他们站很后给队友加 buff — 但你的假人提供深视野能锁定他们的位置,在他们格子里吟唱的 R 在他们移动前就把人秒掉。"
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Black Shield / 法术护盾系 enchanter"
      reason: "Black Shield 吸收 Terrify (Q 的 fear) 与 Crowstorm 落在 carry 身上的第一段 AOE 伤害,作废你的开团施法,给对面 5 秒脱离窗口。"
    - examples: ["janna", "lulu"]
      archetype: "脱战 / peel 型 enchanter"
      reason: "你刚一落地 Janna R 或 Lulu W 就把你从 carry 身上吹走。Crowstorm 的 AOE 还在跳,但没了后续 CC,团战重置,你白白吃集火。"
    - examples: ["lux", "karma", "xerath"]
      archetype: "远距离炮台型辅助"
      reason: "他们在你 E 射程之外、6 级前就把你消耗出线。Fiddle 没护盾、没拉近手段,所以你的第一发 R 还没上线,血量就被磨到一半。"
---

## 概述

Fiddlesticks 辅助是一个 hide-and-engage (藏起来开团) 型选择:一名 AP (Ability Power, 法术伤害成长) 辅助,整段对线期都是为了一个瞬间做铺垫 — 在 6 级时从线上草丛内部按下 **Crowstorm (R)**,扑向敌方 ADC (远程平 A 输出核心,下路的 marksman),由你的下路接住闪现的后续。Fiddle 没有护盾、没有指向 CC、没有逃生,所以这个 6 级强势期的代价是 1 到 5 级期间所有开团辅助里最差的对线表现。

游戏思路:在下路三角草丛和河道布置假人,威胁潜伏抓人;敌人靠近补刀时用 **Reap (E)** 的减速 + 沉默消耗;在远程对位前避免被消耗出线。**R** 一旦冷却好,就盯紧任何敌方 ADC 推过塔或他们辅助开始游走的瞬间,然后闪现进去。中期你的任务是从河道战争迷雾或没插眼的野区入口找侧翼切入打小龙团。本质上你就是一个把对线期花在 ADC 旁边的打野 Fiddle。

## 推荐出装

**起始装备:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (升级成 Bloodsong 的 AP 辅助起始装) + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。

**核心装备 (按购买顺序):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Spellthief's Edge 的任务奖励。必出:它给你买真正装备的金币收入,加上击杀参与累积的 AP 层数让伤害 snowball 起来。在 12-14 分钟前完成任务。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿 (穿透敌人魔抗)。便宜,而且 R 上线之后是优于 ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** 的选择。
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — 你的核心装。**E** 与 **R** 的减速会给目标打上标记;盟友打中标记目标时,标记爆炸造成额外伤害 (并和 ADC 共享金币)。和 Fiddle 多减速的技能组完美契合。
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Crowstorm 跳完最后一段伤害的瞬间立刻金身。如果对面有 diver 或刺客就是必出;不出的话每次开团后立刻被秒。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 仅当游戏拖长、辅助装做完后还有金币剩余时再出。+35% AP 加成让 Crowstorm 直接秒杀脆皮。

**情境装:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 对位重 AOE 爆发 (Yasuo + Malphite, Wukong, Diana)。主动护盾在他们 wombo 期间救队伍。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会打断 R 的单体法术 CC (Lissandra R, Veigar E, Twisted Fate 黄牌)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Soraka, Vladimir, Aatrox)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 当 2 名以上敌人出魔抗装时。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果对面 2 人以上有硬控,改 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **E** (减速 + 沉默是你唯一的线上消耗手段),副升 **W** (回家后续航),最后升 **Q**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve**,带 **Aftershock**、**Font of Life**、**Bone Plating**、**Revitalize**。副系 **Sorcery** 带 **Manaflow Band** 与 **Transcendence**。对位高消耗组合 (Lux, Karma, Xerath support) 时把副系换成 **Inspiration**,带 **Biscuit Delivery** 与 **Cosmic Insight**。

## 关键对线

- **Lux 辅助:** 长距离 Q 束缚加 E 消耗。藏在兵线后面让她的 **Q** 找不到干净弹道,且永远不要在没有用假人确认的情况下盲走三角草丛。撑到 6 级,如果她推过头就 Crowstorm。
- **Morgana:** Black Shield 抵消你 **Q** 的 fear 与 R 落在 ADC 身上的第一段 AOE。永远开 ADC 而不是 Morgana,在确定起手前先假动作走进草丛逼她提前交护盾。
- **Leona:** 镜像开团对位,但 Leona 的指向 CC 与 Aftershock 在 6 级前压过你。等她交完 **E** 再 trade,绝不要主动先开 Leona — 她会直接打断你的 R 吟唱。
- **Janna:** 你开团的硬克星。Janna 的 **R** 在你刚落地时就把你从 carry 身上吹走,整发大招白交。把 Crowstorm 留到她在别处把 R 用掉、或者她在游走时再开。
- **Caitlyn / Senna 下路组合:** 你梦想的对线。他们缺乏机动 — 一到 6 级,从三角草丛冲出的 Crowstorm 每次都能终结。让你的 ADC 把兵线安排到 5 分钟时炸进塔,这样两人同时升 6。

## 强势期与胜利条件

- **2 级 (有 E + W):** 第一个 trade 窗口。透过兵线扔 **E** 削敌方 ADC 血量;如果他们朝你推过来,在塔下用 **W** 续航。
- **6 级 (第一发 Crowstorm):** 你唯一真正的对线强势期。在三角草丛 (河道与下路兵线之间的三角形草丛) 提前 30 秒插一个 Stealth Ward (每个英雄起始的免费白色饰品眼),站进去,然后闪现到敌方 ADC 头上。一套干净的 R + E + ADC 后续就是确定击杀。
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate 成型 (~ 14-16 分钟):** 你的减速触发伤害爆涨。寻找跨地图侧翼切入打小龙团 — 你和 ADC 因 Mandate 触发共享的金币让整个下路全速发育。
- **11 级 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ 22 分钟):** R 的第二点降低冷却,金身在你开团后保命。在小龙或大龙位置利用迷雾起手强行开团。

## 常见错误

- **没有 ADC 后续就开。** 单人的 Crowstorm 给敌人挂上标记但杀不死人,如果你的 ADC 在回程里。按 R 之前先看小地图与 ADC 的蓝;他没大没蓝,把开团留给更好的窗口。
- **1-3 级站到兵线前面。** 6 级前你没护盾、没逃生。站在 ADC 与兵线后面;让他补刀,你藏在草丛里等三角草丛假人触发的 fear 来铺 trade。
- **把假人浪费在线上草丛。** 假人的最大价值是提供敌人 *没花钱* 去清的视野。把它们放在三角草丛或像素草丛做开团铺垫,而不是放在敌方辅助第一波扫描就能清掉的下路明显草丛里。
- **对着没消耗的 Black Shield (Morgana) 开。** Morgana 带着 Black Shield 时,你的 6 级强势期会变成空交大招。永远开 ADC 而不是 Morgana,在起手前 2 秒先假动作往草丛走逼她提前交护盾。

## 进阶技巧

**Crowstorm** 的 1.5 秒吟唱会被任何位移你或晕你的技能打断,但吟唱本身不会破坏草丛隐身 — 也就是说你可以在三角草丛里直接按 **R**,敌人只能在闪现落地前的一瞬间看到吟唱条。在匹配里练习:等敌方 ADC 为补刀推过头,在三角草丛里按 R,直接闪现到他脸上。他们能得到的唯一警告就是音效线索 (Fiddle 标志性的笑声),等他们反应过来时 AOE 已经在跳了。
