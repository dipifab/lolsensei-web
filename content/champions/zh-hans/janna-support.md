---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "zh-hans"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Janna 风女辅助完整攻略:enchanter 出装路径、以 peel 为核心的对线匹配、强势期节点、新手常见错误,以及一招进阶 disengage 技巧总结。"
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "向 Janna 移动的队友获得额外 Move Speed。Janna 自身也会把一部分额外 Move Speed 转化为普攻命中时的额外法术伤害。"
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "蓄力一道龙卷风,然后释放使其向前飞行,将敌人击飞。蓄力越久,射程、伤害和击飞时间越长。"
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "被动:额外 Move Speed,可穿过单位。主动:对一名敌人造成法术伤害与减速(消耗被动加成)。"
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "为友方英雄或防御塔施加目标性护盾,持续期间还提供额外 Attack Damage 加成。"
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "持续引导,先把附近所有敌人推开,然后在剩余时间内治疗周围队友。一个键同时完成 disengage 与回复。"
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对抗强力 AOE 爆发(Yone R、Kennen R、Orianna R)— 全队即时护盾,保住后排"
    - dd_id: "3107"
      name: "Redemption"
      against: "团队需要团体治疗的长团或争夺 Drake、Baron 等大型目标时"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "对抗依赖 Ability Haste 的 AP carry(Hwei、AP Ezreal)— 给护盾对象额外 AP"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "对抗有明确 AD carry 的开团阵容(Aphelios、Kai'Sa)— 链接配合你的 R 提供必中减速"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "在前期遭遇战阶段保住 AD carry,叠加 Move Speed peel,用 R 打断敌方开团,让队伍围绕大型目标完整轮转。"
  weakness: "单人输出薄弱,E 施法距离短。R 出手前若被硬 CC 命中,你无法 peel 任何人,包括自己。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage 类辅助"
      reason: "Janna 的 R 能在半空中取消 dive:他们扑向你的 AD carry 的瞬间,引导把他们推开,直接抹掉这次开团尝试。"
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "缺位移、平 A 强力的 AD carry"
      reason: "Tailwind 加 E 护盾加 Ardent Censer 能把站桩 marksman 变成 peel 堡垒:不需要重新走位也能拉满伤害与 Move Speed。"
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "起手浮夸的 diver 打野"
      reason: "他们 gank 的起手就是一次性投入的跳跃或冲锋 — Janna 的 Q 在他们冲到一半时把他们击飞,R 再把他们送回原地。"
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "长距离 hook 类辅助"
      reason: "Janna 在 1 级时既无位移又无硬 CC:6 级前一次成功的 hook 就能在 R 还没解锁前抹杀 AD carry。"
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "长距离法师辅助"
      reason: "他们站在 Janna E 护盾 800 距离之外消耗:她能挡住一发,但无法回敬 — HP 慢慢被耗光,对线就输了。"
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "靠 sustain 抵消 poke 的 enchanter"
      reason: "Janna 在线上唯一的伤害手段就是 Q,而 Q 由长蓄力暴露 — 这些 enchanter 用治疗扛掉 trade,并在团战价值上压她一头。"
---

## 概述

Janna 是一个 enchanter 辅助,整套技能都围绕一个动词:**peel**(保护队友,通常是 AD carry — 那个靠装备成长的下路 marksman — 不被进攻者干掉)。被动 **Tailwind** 给走向她的所有队友叠加额外 Move Speed,**Howling Gale (Q)** 击飞任何想 dive 后排的敌人(后排指团战中站在最后的脆皮远程 carry),**Zephyr (W)** 削血并减速最近的威胁,**Eye of the Storm (E)** 是一个内置 Attack Damage 加成的护盾,**Monsoon (R)** 是游戏里最干净的 disengage 技能之一(打断敌方开团意图的技能 — 他们扑进来,你把他们推出去)。

她的运营节奏冷静而机械化:绝不让 AD carry 死。站在威胁与 carry 之间,护盾一冷却就丢出去,**Q** 必须躲在墙后蓄满,让龙卷风以最大形态飞出,**R** 当作"应急按钮"留给敌方全员压向后排的瞬间。Janna 几乎不主动开团 — 你的工作是靠不输来赢下团战。

## 推荐出装

**初始装:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**(任务推进、提升金币收入的辅助初始装)加 2 瓶 Health Potion。跳过伤害向初始装:Janna 不靠对线击杀滚雪球,而是靠团战 utility 成长。

**核心装(出装顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 进化为 Bounty of Worlds,后期再合成辅助 legendary。自动累积金币与守卫充能。
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste 让你能用更短的冷却反复 spam **E** 护盾和 **W** 减速;enchanter 的标准鞋。
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 护盾时回复的被动会在长时间团战中越来越强。配合你 spam **E**,AD carry 几乎不会受到净伤害。
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — 给被你护盾的队友额外 on-hit 伤害与 Attack Speed。在依赖普攻的 AD carry 旁边,这是游戏最强装备。
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 净化队友身上的硬 CC。如果敌方有针对你 carry 的单体眩晕或 hook,这件必出。

**情境装:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 对抗强力 AOE 爆发(范围伤害,如 Yone R 或 Kennen R)。主动给全队即时护盾。
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 团战拖久时(Drake、Baron、长团)。延迟 AOE 治疗,可以从地图另一端释放。
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — 对抗依赖 Ability Haste 的 AP carry(Hwei、AP Ezreal)。给被护盾的队友额外 Ability Power。
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 对抗开团阵容,你的 AD carry 在 **R** 期间需要对目标的必中减速时。

**鞋子:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 是默认。对面减速极多、需要逃命时可换 Boots of Swiftness。

**技能加点:** 主升 **E**(护盾值与 Attack Damage 加成随等级提升),副升 **Q**(更长击飞时间与伤害),最后升 **W**。**R** 在 6、11、16 级点。1 级先点 **W** 拿前往线上的 Move Speed 加成,2 级再点 **E** 抗住第一波 all-in。

**符文:** 主系 **Sorcery**,带 **Summon Aery**(给你的技能附加少量伤害与护盾值)、**Manaflow Band**(蓝量恢复,让你每波兵都能护盾和 **W**)、**Absolute Focus**(HP 70% 以上获得额外 AP,Janna 站位安全很容易触发)、**Scorch**(强化 **Q** 消耗)。副系 **Resolve**,带 **Font of Life**(用 **W** 减速目标 → 所有攻击该目标的队友都会回复)与 **Overgrowth**(永久 HP 成长)。属性碎片:Ability Haste、Adaptive Force、Health Scaling。

## 关键对线

- **Leona / Rakan:** Hard engage 辅助。把 **R** 留到他们扑你 AD carry 的瞬间;绝不为了找龙卷风浪费它。**Q** 在墙后蓄力,让他们看不到起手动作。
- **Blitzcrank / Thresh:** Hook 辅助。每次过河都站在小兵后面。一次 hook 命中,AD carry 就死了 — 1.75 秒的眩晕中你也无法 **R** 出去。
- **Xerath / Brand:** 站在 **E** 护盾射程之外的法师辅助。贴着兵线,不要换平 A,让打野来 hard-side 这条线。比平时更早出 ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari**。
- **Soraka:** Sustain 镜像对决。你的护盾压她,但纯治疗量更少。强行打 2 级 all-in:**W** 怼脸,**E** 给 AD carry,在她 **R** 强势期前把她从兵线上挤掉。
- **Pyke:** 游走威胁。在三角草和河道入口插眼跟踪;一旦他离开下路,立刻 ping 中路。Janna 的 **R** 只能在他近身投入时打断处决大招 — 远距离 hook 时根本抓不到他。

## 强势期与胜利条件

- **2 级:** **W** 1 级、**E** 2 级时,你可以护盾压上,打一次短 trade(线上短促的伤害交换,而非全面 all-in)。多数对线组合在这一波都会输,因为他们的 2 级强势期(英雄突然增强的瞬间)弱于你。
- **6 级:** 解锁 **Monsoon**。从此任何敌方 2v2 尝试都可能赢下来 — 他们开团,你引导,他们被推回你的塔下。
- **Moonstone Renewer + Ardent Censer(约 16-20 分钟):** 这是你从对线辅助变成团队倍增器的团战节点。整团 spam 护盾,AD carry 的有效 HP 几乎翻倍。
- **三件 legendary 成型(约 25 分钟):** 加上 Mikael's,你能净化掉那个本来要抹杀 carry 的关键 CC。从此每场目标团战只要敌方投入硬 CC 就是 5v4。

## 常见错误

- **线上不蓄力就丢 Q。** 0.5 秒的龙卷风几乎没用。在墙后或战争迷雾(下河附近未插眼的草丛)中把 **Q** 蓄满 3 秒,等敌人走进兵线时再释放。
- **为了击杀消耗 R。** Janna 的 **R** 是全队最强 disengage。每次拿它去补一个 AD carry 本来就能收掉的人头,接下来 100 多秒队伍就没了应急按钮。
- **给自己上护盾。** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** 也能选自己,但 Attack Damage 加成在 Janna 身上是浪费。默认护盾 AD carry;只有在 skillshot(可以走位躲掉的指向投射物)锁定你且 carry 已安全时才自我护盾。
- **团战站太靠后。** **E** 射程只有 800,很短。如果你只在队伍后方探头,谁都护盾不到。要站在 AD carry 护盾射程内,二线位置 — 比直觉告诉你的更靠前一点。
- **靠平 A 小兵找伤害。** Tailwind 只在命中英雄时触发。用平 A 推线只会给敌方一次免费的 trade 窗口,而你拿不到任何伤害收益。

## 进阶技巧

练 **Q-Flash**。先在墙后开始蓄 **Howling Gale**,接着 Flash 向前并在同一个动作中放出龙卷风:击飞会落在一个完全没看到起手动作的目标身上。这一手把 Janna 从被动 enchanter 转变成针对一个 push 太深的 fed 敌人(在击杀和金币上领先的英雄)的一击 disengage。代价是接下来 5 分钟没有 **Flash** — 只有当击杀或 AD carry 的存活已经锁死时才动用。
