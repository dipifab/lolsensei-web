---
title: "Elise Support Build & Guide — Patch 16.9"
slug: "elise-support"
language: "zh-hans"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Elise 蜘蛛女皇辅助实战攻略:Cocoon 起手切入角度、Bloodsong 完整出装路径、关键对线分析、强势期节奏把握以及一条进阶视野与起手联动技巧。"
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "两个形态。Human:命中 ability 储存沉睡的 Spiderling。Spider:普攻造成额外法术伤害并为 Elise 回血。"
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human:基于敌人当前血量的指向性 poke (反坦克)。Spider:基于丢失血量的扑击 (处决残血目标)。"
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human:扔出 Spiderling,在敌人附近爆炸 (减速 + AOE 伤害)。Spider:Elise 与宠物获得攻速,持续 DPS。"
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human:直线非指向技能,束缚命中的第一个敌人。你的核心起手式。Spider:Rappel — 短暂无敌升空,然后落到目标头上造成额外伤害。"
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "切换型大招,在 Human (远程法师) 与 Spider (带移速与小蜘蛛群的近战 skirmisher) 间切换。无冷却自由切换。"
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑、Lissandra R) — spell shield 挡一次起手并允许重新 cocoon"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位高强度硬控 (眩晕、击飞) — 提供 tenacity (缩短 CC 时长) 的鞋"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位 AOE 爆发阵容 (Yasuo + Malphite、Orianna 大型团) — 主动给整队护盾"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "领先 10+ 击杀/助攻且零阵亡时再买 — 把雪球转成纯 AP scaling"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "用 fog of war 里的 E cocoon 起手,为 ADC 拉开 all-in。后期靠在 Aftershock 与 Liandry's Torment 爆发窗口里束缚敌方核心来保持影响力。"
  weakness: "完全依赖 cocoon 命中:一发空了就被卡在 melee range 没有 escape。被先手抓人 (hook) 类辅助射程压制,在你 cast 之前就把你抓走。"
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Resolve:Aftershock 在 cocoon 眩晕触发,提供护甲 + 魔抗及一次延迟 AOE 冲击波 — 你近战起手后的生存窗口。Font of Life 每次 cocoon 都治疗 ADC,Bone Plating 缓冲前期 all-in,Revitalize 放大治疗与护盾。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 维持线上蓝量 (cocoon 单次消耗 50-90 蓝),Transcendence 把 Ability Haste 推过 40%,持久战中 cocoon 转得更快。"
    secondary_alternative: "对位强 poke 或强 all-in 组合 (Lucian + Nami、Draven + Thresh) 时,把副系换为 Inspiration,带 Magical Footwear (8304,10 分钟免费鞋) 与 Cosmic Insight (8347,召唤师技能冷却缩减);多出来的 Flash 频率能救掉空了的起手。"
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "无 tenacity 的脆皮 enchanter 辅助"
      reason: "长时间 cocoon 眩晕直接绕过她们的功能性技能。她们没有 Flash 之外的位移,Liandry's Torment 的灼烧 (持续数秒的伤害) 还会持续惩罚她们的护盾与治疗。"
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "无位移的远程发育型 ADC"
      reason: "草丛里抛 cocoon 直接钉住她们。被眩晕后,3 级 W (减速) + Q (反血量) + ADC 爆发,Flash 都来不及交。"
    - examples: ["draven", "samira"]
      archetype: "为人头主动前压的攻击型 ADC"
      reason: "她们的击杀压力迫使其越过兵线均衡点 (safe lane line)。cocoon 惩罚这一步,Aftershock 把她们的 all-in (全押 trade) 反过来打到自己身上。"
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "射程超过 cocoon 的 hook 辅助"
      reason: "Blitzcrank 的钩子距离 (~1100) 比 E 的施法距离 (1075) 远。她们先一步钩到你,直接抹掉你的起手手段,让你被困在没有 escape 的 Spider 近战形态。"
    - examples: ["sivir", "morgana"]
      archetype: "能挡掉 cocoon 的 spell shield"
      reason: "一次 Spell Shield 充能就吃掉你完整的眩晕。没有 cocoon 就没有起手,队友的后续打不出来,只能等冷却。"
    - examples: ["leona", "nautilus", "rell"]
      archetype: "携带指向性 CC 的肉装起手辅助"
      reason: "她们的起手是指向性的 (没有 skillshot 给你躲)。她们粘在你 ADC 身上的时间比你能控住她们的时间更长,你的法术伤害也打不穿她们的护甲。"
---

## 概述

> **缩写小词典 (读一次即可):** **ADC** = Attack Damage Carry,负责物理输出的下路核心 (Caitlyn、Jinx)。**AP** = Ability Power,影响法术伤害的属性。**MR** = Magic Resist,法术防御。**CS** = Creep Score,补刀数。**CC** = Crowd Control,任何能制住敌方英雄的效果 (眩晕、减速)。**Engage** = 开团。**Disengage** = 脱战。**Trade** = 一次短暂的伤害互换。**All-in** = 全押开打。**Peel** = 保护己方核心。**Kite** = 边后退边攻击。

Elise 辅助是开团法师混合体:从草丛或 fog of war (没插眼的地图区域) 抛出 **Cocoon (E)** 束缚敌方核心,然后用 **Spider Form (R)** 跟进伤害,并通过 **Rappel** 完成无敌脱战。她舍弃 enchanter 的安全性换来强力的击杀压力 — 3-6 级期间每一次命中的 cocoon 都应该转化为人头或交出 Flash。她的弱点正是优势的反面:cocoon 没命中,既没有起手也没有治疗可以兜底。

游戏思路是前 6 级压制下路,在 12-14 分钟前完成 Bloodsong 与 **Sorcerer's Shoes**,然后利用 **Spider Form** 的移速加成支援中路。后期角色转变:她变成侧翼刺客,等敌方核心走出位置后从侧面抛出 cocoon,让队友收尾。

## 推荐出装

**起始装备:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (辅助任务装:只要你不亲自补刀小兵就持续给你辅助金币) + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。

**核心装备 (按购买顺序):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 辅助任务线最终升级 (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong)。AP 形态:对英雄每第 4 次普攻造成额外法术伤害,与 Spider 形态 dive 时的快速平 A 自然契合。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。辅助经济少于中单,所以前期穿透比纯 AP 更高效。
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件大件 AP。基于血量的灼烧 (按目标最大血量计算,持续数秒) 惩罚那些试图扛你 cocoon 眩晕的肉前排。
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 每个技能附带减速。把 **W** 变成追击工具,与 cocoon 眩晕叠加提升后续命中率。
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 生存装。melee range 起手后,主动技能给你 2.5 秒金身 (无法移动、受伤、被指向),让队友收尾。

**情境装:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Ahri 魅惑、Lissandra R)。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 敌方有大量硬控时换鞋。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 对位 AOE 爆发阵容 (Yasuo + Malphite 组合、Orianna 大型团)。
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — 仅当领先 10+ 击杀/助攻且零阵亡时购买。掉层风险真实存在;落后局别买。

**鞋子:** 默认 Sorcerer's Shoes。敌方有三个或以上硬控来源 (眩晕、击飞) 时换 Mercury's Treads。

**加点顺序:** 主升 **E** (cocoon 眩晕是你的主要工作),副升 **Q** (伤害),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve**,带 **Aftershock**、**Font of Life**、**Bone Plating**、**Revitalize**。副系 **Sorcery**,带 **Manaflow Band** 与 **Transcendence**。

## 关键对线

- **Blitzcrank:** 最差的对线。他的 Q 比你的 E 多约 25 单位射程。站在 ADC 身后,绝不上前抛 cocoon — 一旦 commit 就会被钩。
- **Thresh:** 钩子互拼,可以活下来但很难赢。等他 Q 空,再上前在他后摇窗口命中 cocoon。当他对你 ADC 起手时不要踩进灯笼范围。
- **Soraka:** 免费线。她的沉默距离短,治疗会被 cocoon 打断。3 级满蓝起手 — trade 烧她血条比她奶得快。
- **Leona:** all-in 她赢,但 poke 战她输。站在 cocoon 极限距离,用 E 打断她 **W** (Eclipse) 的施法动作然后撤。没先命中 cocoon 就别 commit。
- **Sivir:** 她的 **E** (Spell Shield) 完全挡掉 cocoon。先抛 **W** spiderling 骗护盾;她挡住 W 后,你的 cocoon 在护盾冷却期间 (~12 秒) 干净命中。

## 强势期与胜利条件

- **2 级:** **E** + **Q** 已经构成 all-in 起手。对位近战辅助时争 2 级,首发 cocoon 命中即开。
- **6 级:** 第一次 **Spider Form (R)**。脱战与再次开战的潜力翻倍;可以用 Rappel 当作再定位工具,在塔下 dive 残血敌人。
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 13-15 分钟):** 支援窗口期。如果你的兵线推到敌方塔下,去中路打 3v2。**Cocoon (E)** 配 **Spider Q** 收尾,几乎能秒掉所有脆皮中单。
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment 成型 (~ 18-20 分钟):** 团战准备。你的工作变成从侧边草丛绕后切后排;cocoon 命中敌方 ADC,**Aftershock** 触发眩晕,队友收掉。

## 常见错误

- **把 E cocoon 当 poke 用。** 与 Elise 打野规则一致:cocoon 是开团,不是骚扰。等核心走前;空了的 cocoon 让你 12 秒毫无防御。
- **在线上平 A 小兵。** 辅助装会惩罚补刀小兵 — last-hit 会取消 World Atlas 的金币收益,饿死你的 ADC。**W** 只在下一波兵将要回弹时打线上。
- **没有 ADC 跟进就开。** 扣 cocoon 扳机前先扫一眼 ADC 的蓝条与冷却。如果他没蓝或没 **Flash**,别开;最好结果也只是 1 换 1。
- **每次回家忘记买 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) 眼。** 作为辅助,布置视野是你的活。河道草丛眼控制你打野的开团角度。打资源前用 ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens 扫敌方隐藏眼。
- **没 escape 还交 R 强 dive。** Spider 形态没有自带 escape。如果 **Flash** 与 **Rappel** 都在冷却,别去塔下 dive;敌方 ADC 会 kite (边攻击边后退) 你直到塔把你打死。

## 进阶技巧

开团前先用视野铺好 cocoon 角度。在侧边草丛插一颗 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** 就能拿到一个免费起手位:从战争迷雾走入草丛,趁敌方 ADC 上前补刀的瞬间抛 cocoon,接 **Spider R** + Rappel 砸下。整套动作直到 cocoon 命中之前在敌方视角都是隐形的。这是 Elise 辅助能打出的影响力最高的一手,但低分段的 Elise 大多忽略,因为她们是直接从线上起手而不是从准备好的角度切入。
