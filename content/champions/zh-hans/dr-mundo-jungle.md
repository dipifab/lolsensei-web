---
title: "Dr. Mundo Jungle Build & Guide — Patch 16.9"
slug: "dr-mundo-jungle"
language: "zh-hans"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Dr. Mundo 打野完整攻略:Mosstomper 打野路线、堆血肉盾出装顺序、Sorcery 与 Resolve 双系符文搭配、6 级强势期 gank 时机、对线核心 matchup 解析、Drake 团战节奏、新手常见错误规避,以及通过敌方野区侧翼绕后的高阶 gank 技巧。"
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "第一段 hard CC(眩晕、定身、击飞等使你失去行动能力的控制)对 Mundo 只造成 HP 消耗,并掉落一个药瓶;捡起药瓶可回血并刷新被动。同时还提供大量血量回复。"
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "远程直线 skillshot,造成基于目标当前 HP 百分比的法术伤害并减速。消耗 HP 而不是蓝量 — 资源条就是血条。6 级前主要 gank 手段,射程 975。"
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "对自身进行的引导,持续对周围敌人造成法术伤害,并将自己受到的部分伤害存储起来。再次施放打出爆发伤害 — 命中英雄则按存储伤害的一定百分比回血。清野时常驻提供 sustain。"
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "被动:与最大 HP 挂钩的额外 AD。主动:近战重击,基于已损失 HP 造成额外伤害。如果击杀,会把尸体砸向路径上的敌人。gank 时单体爆发节点。"
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "自我增益:立即回复一定百分比的已损失 HP,然后在持续时间内获得移动速度和巨量 HP 回复。开 gank 前、开团前、临死前按 — 绝不要死后按。"
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对面 3+ 控制源或 2+ AP 威胁时由 Plated Steelcaps 替换;被动首段 CC 免疫消耗后,tenacity 是救命稻草"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "30 分钟以后的第 5 或第 6 件;HP 回复被动让你在野区轮换之间不回家就能恢复满血"
    - dd_id: "3075"
      name: "Thornmail"
      against: "对位平 A 型 carry (Vayne 下路, Tryndamere 上路, Master Yi 打野);反伤并触发 Grievous Wounds"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "对位 2+ 远程法师的强 AP 阵容 (Karthus + Brand, Lillia + Lux);MR + 移速对抗法伤"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "对位单体 AP 爆发 (Syndra 中路, Veigar, LeBlanc);spellshield (一次性护盾) 抹掉 combo 起手"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "刷到 4 级 full clear,6 级 R 解锁立刻 gank,14 分钟起把每场 Drake 团转换成 HP 回复优势。25 分钟 Heartsteel + Warmog's 成型后,直接走进对手后排拒绝倒下。"
  weakness: "3 级前清野慢、入侵孱弱,被远程阵容风筝且没有强行贴身手段。降低治疗的 healing-cut (砍敌方治疗一半) 装直接掐死整个套路;true damage (Fiora、起飞的 Vayne) 会把血墙融掉。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "主系 Resolve:Grasp 在英雄战斗中每 4 秒提供免费血量 — 一次 5 秒 gank 能叠 2-3 次。Font of Life 标记被 Q 减速的目标供线上回血,Conditioning 12 分钟后给护甲与魔抗,Overgrowth 把刷过的兵营转成永久 HP。"
    secondary_rationale: "副系 Sorcery:Nimbus Cloak 在使用 Flash 或 Ghost (你拉近距离的召唤师技能) 后给一段移速,Gathering Storm 每 10 分钟提供 Adaptive — Mundo 的胜利条件就是后期,这套符文正好契合。"
    secondary_alternative: "对位前期对刚型打野 (Lee Sin、Elise、Xin Zhao) 时把 Sorcery 换成 Inspiration,带 Magical Footwear (10-12 分钟免费升级鞋) 和 Cosmic Insight (召唤师技能冷却减少),用 scaling 换反入侵节奏。"
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "爆发型刺客打野"
      reason: "他们整套伤害就是对脆皮一个 combo。Mundo 的被动吃下起手 CC,R 按已损失 HP 回血,W 还会把吸到的部分爆发返还成治疗。他们交完技能,Mundo 几乎满血脱身,还在他们的 carry 头上留下追击标记。"
    - examples: ["karthus", "lillia"]
      archetype: "无强开场的 AP 消耗与风筝型打野"
      reason: "Force of Nature 加 Spirit Visage 让你在挨消耗的过程中不断累计 Magic Resist。R 的移速加上 Q 的当前 HP 比例减速最终会贴上去,他们没出防御装,一个 E 就能把血量打崩。"
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "对方阵容依赖的近战平 A carry"
      reason: "Q 减速加 Plated Steelcaps 直接把他们的 attack uptime 锁死。Tryndamere 的 R 能买一波,但出了 Thornmail + R 的 Mundo 能熬过他的无敌窗口,反伤把他磨残。"
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "true damage 输出型"
      reason: "Fiora 的命点、Vayne 的 W、后期 Kayle 的 R 都打 true damage (无视护甲与魔抗的伤害 — 没有任何防御属性能减少它)。堆 HP 对 true damage 完全无效,整套出装直接崩盘。"
    - examples: ["trundle", "olaf"]
      archetype: "反坦克型打野"
      reason: "Trundle 的 R 在 8 秒内偷走护甲、魔抗和移速;Olaf 的 E 触发 Grievous Wounds,大招期间他对 CC 免疫,所以被动根本不会触发。两人都是为了瓦解坦克属性而设计的。"
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "远程持续消耗型阵容"
      reason: "他们站在 Q 的 975 射程之外,每波兵线都在磨 Mundo 的血。Mundo 没有位移,只有 R 的一段移速 — 他要威胁开团只能直接走进对方伤害区,每一轮掉 30% 血量,却始终贴不上去。"
---

## 概述

Dr. Mundo 打野是游戏里最简单的坦克打野:刷野、6 级、走进一条线、对手丢什么过来都拒绝倒下。他的技能组只有一个任务 — 吃下 engage (对手决定开团的那一瞬间,通常配合 hard CC 或位移),并且通过三个机制来完成。**Goes Where He Pleases (被动)** 用 HP 代价吸收第一段 hard CC (眩晕、定身、击飞等使你失去行动能力的控制),并掉落一瓶可以捡起来回血的药剂。**Heart Zapper (W)** 在交战中存储受到的伤害,再次施放时把其中一部分以治疗形式归还。**Maximum Dosage (R)** 立刻回复一定百分比的已损失 HP,并在持续时间内提供巨大回复。三者结合让 Mundo 成为任何团战中实际血量最高的英雄,代价是他自己没有 hard CC,必须靠 Q 的减速加上队友的 follow-up。

游戏思路是节奏意识下的发育。3 级前 Mundo 清野慢、刷野掉血是真实开销 — 别去入侵,也别让人入侵。刷到 4 级 full clear,争 Scuttle (击杀后提供视野的河道蟹),并在 4-5 分钟左右去带 priority 的线 (priority = 兵线推向敌方那条线,laner 可以离开几秒钟而不掉兵) 完成第一波 gank。6 级以后,每按一次 R 都应该转化成人头、资源点或被救下的队友。从 14 分钟开始,**Heartsteel** 加 **Sundered Sky** 成型后,Mundo 仅靠面板就能赢下每一场 Drake 团。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。Hailblade 是近战打野专属起始装:能加快对中立怪物 (在野区里刷的营地) 的伤害,并在普攻命中敌方英雄时附带短暂减速。Refillable Potion 是回家可免费续杯的回血道具,这样你刷野挨打掉的零碎血量不需要花金币去买药。

**核心装备 (按购买顺序):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — Hailblade 的任务升级品 (大约 3-4 分钟,刷野积累足够经验后自动进化)。坦克型小宠物伴侣在脱离与英雄的战斗时提供额外护甲与魔抗,在战斗中提供 tenacity (让加在你身上的眩晕时间变短)。任何坦克打野的必选 — 快速学习栏位最先看到的图标会告诉读者你拿了哪种起始装。
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 第一件大件。任何团战的第一次普攻必爆击且自带回血。爆击回血与你的 gank 流程严丝合缝:走进去 → Q 减速 → 普攻爆击回血 → E 的失血强击。再加上 R 的回复,可以撑住更长的对拼。
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 当对面主要伤害来自普攻时的默认鞋子。在长时间交战里能切实降低承受的普攻伤害。
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — 后期 scaling 节点。每次成功在英雄身上触发都会给 Mundo 永久 HP,即使你死了也不会消失。30 分钟前能囤 8-12 层,实际血量比纯堆血装方案翻倍。
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 魔抗加上 healing-amp (治疗增幅) 被动,会强化 **W** 的回血爆发、**R** 的回复,以及 Soraka、Yuumi 这类辅助提供的所有友军治疗。根据敌方阵容偏 AP 还是 AD,放在第 4 或第 5 件。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对面有 3+ 控制源或 2+ AP 英雄时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 替换。tenacity (减少加在你身上眩晕与减速持续时间的属性) 是被动的首段 CC 免疫消耗完之后唯一还有用的防御。
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — 30 分钟以后的第 5 或第 6 件。一旦越过 HP 阈值 (大约 3000 额外 HP),被动会在 4 秒脱战内把你拉满血,意味着你能在野区轮换之间不回家也满血。
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 对位平 A 型 carry (Vayne 下路、Tryndamere 上路、Master Yi 打野)。反伤并普攻命中时附加 **Grievous Wounds** (让目标的所有治疗减半的减益效果),是制衡起飞的 Tryndamere 或 Vayne 通过 W 光环吸血回血的唯一手段。
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 对位强 AP 阵容 (Karthus + Brand、Lillia + Lux)。受到法术伤害会叠加魔抗,同时提供移速,这两件 Mundo 都想要。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 对位单体 AP 爆发 (Syndra、Veigar、LeBlanc)。spellshield (一次性护盾,挡住下一个针对你的指向技能) 直接抹掉 combo 的起手技,脱战几秒后会重置。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 是默认。如果对面是连环 CC 或法系阵容堆得很重,换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (射程、减速、当前 HP 百分比伤害都按等级缩放 — 你唯一的远程工具,也是 gank 的核心起手)。副升 **E** (失血主动伤害与额外 AD 强相关,而额外 AD 又跟最大 HP 强相关)。最后才升 **W**;前期一点足以撑清野的 sustain。**R** 6/11/16 各点一级。

**符文:** 主系 **Resolve** 配 **Grasp of the Undying** — 在与英雄战斗时每 4 秒,你的下一次普攻造成额外法术伤害、回血并获得永久 HP。搭配 **Font of Life** (你的 Q 减速会给目标挂上标记,队友打他时会回血 — 完美贴合 gank)、**Conditioning** (12 分钟后额外护甲与魔抗) 和 **Overgrowth** (附近兵线死亡换永久 HP)。副系 **Sorcery** 带 **Nimbus Cloak** (Flash 或 Ghost 后一段移速) 与 **Gathering Storm** (每 10 分钟一次的 Adaptive 缩放)。属性碎片:**Adaptive Force** + **Health Scaling** + **Health Scaling**。

## 关键对线

- **Lee Sin / Elise / Xin Zhao:** 入侵你弱侧的前期型打野。在自家石甲虫与红 buff (你自己野区的营地) 上插 vision ward (会揭露一小片地图、持续约 90 秒的部署道具) 跟踪。3 级前别去 1v1 入侵 — 你的清野慢、Smite 伤害不足以瞬间清掉一次单挑尝试。先 full clear,争 Scuttle,然后再开始 gank。
- **Master Yi / Karthus:** 后期型打野。装备到装备的 scaling 你能跟得上,但他们的 power spike 来得更早 (Yi 出 Blade of the Ruined King — 攻速吸血装;Karthus 出 Liandry's Torment — 持续灼烧的 AP 装)。在 18 分钟前强制开团与争资源点 (下半区 Drake、上半区 Rift Herald — 击杀后提供全队 buff 与金币的中立怪物),并不停地 gank 边路 ("gank" = 打野出其不意地访问一条线收掉人头) 来扼杀他们的发育窗口。
- **Trundle:** 直接克制位。R (Subjugate) 在 8 秒内偷走你的护甲、魔抗与移速 — 正好是你三项最强属性。避免单兵交锋;只有在队友能在 2 秒内 follow-up 时才打。出 ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** 在他 Q 吸血时上 Grievous Wounds。
- **Hecarim / Volibear:** 镜像式开团坦克。先打中 CC 的一方赢这次交换。把 **被动** 留到他们 commit 之后 (Hecarim E 击退、Volibear Q 击退)。一旦白嫖了他们的第一段 CC,后续对拼里你 sustain 更强。
- **Kha'Zix / Rengar:** 主打爆发的刺客打野。会去野区落单的目标。第一波爆发用被动 + R 顶住,等他们血量交完再上 E — 你 E 的失血缩放足以把 30% 血量的 Rengar 在 70% 血量时一刀秒掉。

## 强势期与胜利条件

- **4 级:** Full clear 完成,三个技能全部上线。在最容易卡 push 的敌人附近开第一波 gank (敌方血量最低、敌方半区兵线最多的那条线)。975 射程的 Q 减速加上 W 的滴答伤害,即便 6 级前也是可信的人头威胁。
- **6 级:** 第一段 **Maximum Dosage**。Mundo 整局最大的 power swing。6 级后 30 秒内必须开打 — gank 一条线、争第二只 Scuttle 或铺第一条 Drake。R 的瞬间回血会把"失败的 gank"变成"稳定的交换"。
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 完成 (~ 12-14 分钟):** 第一段真正的伤害与 sustain 节点。带着 W 的 tick 伤害再加上 Sundered Sky 的爆击回血在 Drake 或 Rift Herald 团里开起来,不交 R 也能拿下资源。
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage 成型 (~ 22-26 分钟):** 团战峰值窗口。R 冷却短到一个 Baron timer 内能开两次。强行开每一处资源;这是你的巅峰。

## 常见错误

- **3 级前去入侵。** Mundo 的 3 级前清野是最慢的之一,Hailblade 的 Smite 伤害也很低。1 分 30 秒遇到一个手里还有技能的 Lee Sin 或 Elise,他会赢这波交换并把你拉开 2 个营地的差距。4 级前老老实实留在自家野区。
- **挨完伤害再按 R。** R 的瞬时回血是已损失 HP 的百分比,但持续回复部分如果你 90% 血量去按就基本浪费了。开 gank 或团战之前 **先** 用 R,不要打完才用 — 你要的是爆发到来时回复正在 tick,而不是事后才包扎。
- **gank 没 priority 的线。** 去 gank 一条 freeze 住的兵线 (停在敌方 laner 塔下的兵线) 等于送对面 laner 一颗人头:对方塔会对你产生 zone 压力,你的 laner 还得离开自己塔很远来 follow-up。只 gank 推向你方半区或停在中间的线。
- **太晚捡被动药瓶。** 化学药瓶 (被动触发时掉落的绿色小瓶) 在地上只有几秒就会消失。如果你让它在 gank 中过期,等于把整段被动浪费掉 — 没回血、没冷却返还。一掉立刻走过去捡。
- **不出 Spirit Visage 的纯肉装。** Mundo 每一项防御属性都和治疗增幅相乘。没 Spirit Visage,R 回得少、W 回得少、队友 Soraka 的治疗也回得少。Spirit Visage 是乘数装;为了纯 HP 跳掉它,等同金币条件下出更糟的装。

## 进阶技巧

练习从敌方野区穿插的 **侧翼 gank** (从侧面或背后进入线路,而不是从河道 — 走敌方 laner 视野盲区的草丛绕到他身后)。Mundo 这一招因为被动而独一档地强:你从敌方 laner 背后冒头的那一瞬间,他的第一段 CC 技能直接被免费吃下,这意味着即便 100% HP 的目标 Flash 回塔也会一头撞进 975 射程的 Q 减速,然后被 E 接死。关键在于精准把握进场时机:在敌方 laner 把兵线推向你这一侧、远离自家塔的瞬间,从河道一侧或后方草丛走进去;你出现之前 gank 路径完全不可见,而被白嫖的那段 CC 会在他来得及恢复之前直接终结这场战斗。
