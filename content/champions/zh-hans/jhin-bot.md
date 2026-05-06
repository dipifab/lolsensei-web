---
title: "Jhin Bot Build & Guide — Patch 16.9"
slug: "jhin-bot"
language: "zh-hans"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Jhin 戏命师下路完整攻略:起始装备、lethality-crit 出装顺序、Precision 符文细节、关键对线、强势期、新手常见错误以及一条进阶 W 命中技巧。"
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Jhin 的左轮一弹仓只装 4 发,打完必须装填。第 4 发必定暴击,并对低血量目标造成额外处决伤害。暴击会带来短暂的 Move Speed 加速。"
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "指向性弹射,最多反弹 4 次。每次击杀都会让下一次反弹伤害更高。稳定的 poke 与清线工具。"
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "超远距离直线 skillshot。若目标近期被你或队友打过,则被定身。配合平 A 或辅助先手开团使用。"
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "短暂延迟后激活的隐形莲花陷阱。踩中即减速,随后爆炸造成伤害。用于划线、保护侧翼、确保 W 命中。"
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "吟唱大招:发射 4 发超远距离子弹,命中英雄即停下,造成减速,且目标血量越低伤害越高。第 4 发暴击。"
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "对面后排全是脆皮 (没有坦克) 时:lethality 放大 W-root 爆发,主动 Move Speed 帮助游走"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对面是回血叠加阵容 (Soraka, Aatrox, Vladimir, Dr. Mundo) 时:Grievous Wounds 在 R 处决窗口期把治疗减半"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对面有打断 R 的单体硬控 (Blitzcrank 钩子, Morgana Q, Ashe R) 时:法术护盾换一次完整施法"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "你领先且需要吸血+护盾撑过没有 peeler (保护 carry 的队友) 的长团时"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "对面是全压切入的 diver (Diana, Kha'Zix, Master Yi) 时:战斗中的 Move Speed 与穿越小兵帮你风筝"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "每次 trade 都要打出第 4 发暴击,并和辅助连出 W-root 链,在远距离锁住目标。占好位让团战中的 R 弹道始终干净。"
  weakness: "攻速被锁死且没有位移。被高机动 diver 与开团坦克硬克;辅助一旦被拉开,你除了 Flash 没有任何逃生手段。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "无位移的远距离 marksman"
      reason: "他们和 Jhin 一样没有位移,但有效爆发窗口更短。一旦 Jhin 进入第 4 发节奏并有辅助衔接,从 6 级起就能直接赢下面对面的 trade。"
    - examples: ["sivir", "kalista"]
      archetype: "依赖近距离的重置/机动型 marksman"
      reason: "他们的技能组想贴脸打;Jhin 可以从他们普攻距离之外 W-root,并接 E (莲花陷阱) 在他们重置之前关闭击杀窗口。"
    - examples: ["soraka", "yuumi"]
      archetype: "下路纯回血 enchanter"
      reason: "Jhin 的 W-root + R 处决能快速惩罚血量低的奶妈。Mortal Reminder 成型 (Grievous Wounds 把治疗减半) 后,纯奶流计划直接崩盘。"
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "1-3 级凶猛的 lane bully"
      reason: "他们在 Jhin 装填窗口 (每打完 4 发左轮都得装填) 内打出爆发。Jhin 没有位移可以脱离,而 W root 需要的前置在 1 级一个人也凑不出。"
    - examples: ["kai-sa", "tristana"]
      archetype: "自带逃生位移的高机动 hypercarry"
      reason: "内置位移 (Kai'Sa 的 E 重定位、Tristana 的 W 跳跃) 能闪过 W-root 并打断 R 的吟唱窗口。后期 1v1 中 Jhin 风筝不掉他们。"
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "硬开团的坦克辅助"
      reason: "他们能在 Jhin 装填帧打出指向性硬控;他没有位移自我保护,而 W 想 root 又必须先有人对目标造成过伤害。"
---

## 概述

Jhin 是一名玩法像狙击手而非持续 DPS (damage-per-second,每秒持续伤害) 的远距离 marksman。他的左轮 **Whisper (被动)** 在两次装填之间只能开 4 枪,但第 4 枪必定暴击并处决低血量目标 — 所以每一次 trade (线上短暂的攻防交换,而不是一次完整的击杀尝试) 都围绕着把这第 4 发瞄准受伤敌人来构建。他没有位移,攻速也被锁死,所以位置和先手 setup 比手速更重要。

游戏思路:用 **Q** 和平 A 进行 poke,等辅助先手开团,然后将 **W**-root 接到第 4 发暴击中。6 级之后,**R** 把抓单 (在团战之外猎杀落单的敌人) 与资源点围攻变成从对方阵容射程外发起的击杀。如果你的前排能 peel (帮你挡住切入者),到 25 分钟左右你能 outscale 几乎所有下路双人组。

## 推荐出装

**起始装备:** Doran's Blade + 1 Health Potion。除非对线是 Draven 或 Lucian 这种重平 A 消耗的搭配,否则不要选 Doran's Shield — 在那些线里,额外血量比额外伤害更值。

**核心装备 (按顺序):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 第一件爆发节点。5% 血量以下处决与 Jhin 的第 4 发处决和 R 形成联动,你可以收掉队友本来收不下的人头。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — marksman 的标准攻速鞋;Jhin 攻速被锁但会转化为每发更高的伤害,所以 AS 会变成纯伤害。
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — energized 弹丸提供远距离 poke (契合 Jhin 的定位),额外射程让你在敌人进入他们自己的攻击范围之前先手命中。
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Jhin 的第 4 发是必暴,所以 IE 的暴击伤害倍率把这一发变成秒掉脆皮的按钮。
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 后期当对面前排开始堆防御装时的护甲穿透。

**情境装:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 对面没有坦克时把第一件换成它。Lethality (固定护甲穿透) 让 W-root 爆发在前期 skirmish 中 1-2 发蒸发脆皮,主动 Move Speed 帮你卡好 R 施放窗口的位置。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对面是回血叠加阵容 (Soraka, Aatrox, Vladimir) 时替代 Lord Dominik's。Grievous Wounds 在 R 处决期间把治疗砍半。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对面有打断 R 吟唱的单体硬控 (Blitzcrank 钩子, Morgana Q, Ashe R) 时,作为第 3-4 件。法术护盾挡掉一个技能,让你完成施法。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 当你领先且没有专门 peeler 时,需要吸血加护盾来撑过长团。
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 对面是全压切入 diver (Diana, Kha'Zix, Master Yi) 时。战斗中的 Move Speed 与穿越小兵帮你风筝 (一边后撤一边输出),撑到队友过来 peel。

**鞋子:** 默认 Berserker's Greaves。只有当对面阵容堆叠到你躲不掉的减速 (类似 Ashe + Nautilus + Anivia 的组合) 时,Boots of Swiftness 才是正解。

**加点顺序:** 先满 **Q** (主输出与清线),再满 **W** (root 稳定性与基础伤害),最后 **E** (功能性,1 点足够减速)。**R** 在 6、11、16 级各加 1 点。

**符文:** 主系 **Precision** — **Fleet Footwork** (线上机动 + 续航)、**Presence of Mind** (大招使用时返还法力)、**Legend: Bloodline** (吸血成长)、**Coup de Grace** (对低血量目标额外伤害 — 与 Jhin 的第 4 发处决配合)。副系 **Sorcery** — **Absolute Focus** 与 **Gathering Storm**,负责后期成长。

## 关键对线

- **Caitlyn:** 平 A 射程比你长,但只要你被动叠满 4 层,任何 all-in (全力以求击杀的承诺战,而不是简单的 trade) 她都会输。站小兵后,在她踩空陷阱时 Q-poke,辅助先碰到她就上 W-root。
- **Draven:** lane bully。1-3 级避免平 A trade;直接 DPS 对换他赢。等他被 axes stack 缠住时再用 Q 消耗;一旦他过度突进,你的第 4 发暴击会狠狠惩罚他。
- **Lucian:** 在你的装填窗口内爆发。盯紧 4 发计数 (左轮图标显示剩余子弹),绝对不要在第 3 发或第 4 发状态发起 trade — 先装填完,再开打。
- **Sivir:** 她的法术护盾会挡掉你的 W-root。先用 Q 骗掉护盾,等冷却后再丢 W。6 级后她的 R 能追你,所以只在辅助有控制衔接时开战。
- **Soraka / Yuumi:** 纯奶辅助。第 3-4 件出 Mortal Reminder;没有 Grievous Wounds (把治疗减半的 debuff),你打多少枪都打不死她们。

## 强势期与胜利条件

- **2-3 级:** 有了 **Q** 和 **W**,你拥有线上最强的 2 级 all-in 套路:辅助开团 → 平 A → Q → W root → 第 4 发暴击。比对方先到 2 级的瞬间立刻开打。
- **6 级:** **Curtain Call** 解锁。你可以收掉打野在河道发起的人头,或者在敌人回城路上一屏外把他点死。资源点开战前永远把 R 准备好。
- **The Collector 成型 (~ 11-13 分钟):** 第一件装备节点。5% 处决让你能收掉辅助开打的人头。这是 lane snowball (把前期优势变成装备优势,装备优势再变成人头优势) 最容易做出来的窗口。
- **Infinity Edge 成型 (~ 28-32 分钟):** 三件装节点。第 4 发能秒掉大多数非坦克英雄。现在就要在资源点强行开团 — 后期 Jhin 加 IE + Rapid Firecannon,可以在敌方 R 射程之外打到他们的后排 (站在坦克身后的 carry)。

## 常见错误

- **第 4 发对着坦克打。**满血前排根本不值得用第 4 发处决。把第 4 发留给上前的脆皮目标,或者先补一个小兵把弹仓循环刷新,再重新 engage。
- **装填时往前走。**第 4 发之后必须装填才能继续平 A。装填窗口里要往后退一步 — Jhin 的很多死,都死在敌人意识到"他现在不能开枪"那半秒里。
- **盲丢 W 当 poke。**W 只在目标最近 (~4 秒内) 被你或队友打过的情况下才能 root。先平 A 一下,或者等辅助开团后再丢;否则 W 就只是一条横向能轻松躲掉的慢速直线。
- **没视野就开 R。**Curtain Call 期间 Jhin 被钉在原地。侧翼没插眼,刺客就直接绕到背后在吟唱中击杀你。按 R 之前先把 E (莲花陷阱) 放到侧翼。
- **资源点不放 E。**莲花陷阱以零成本覆盖 Drake 与 Baron 坑入口。每次冷却好就铺 — 它们能暴露侧翼、减速开团、并确保 W root 命中。

## 进阶技巧

把 **E** (Captive Audience) 当成 **W** root 的命中保险。莲花陷阱无声激活,踩中即减速;如果你预判到对面辅助会去哪个位置插眼,提前 2 秒在那里丢一个 **E**,然后在陷阱触发减速的瞬间发射 **W** — 减速会让 3000 射程的 W-skillshot 在地图任何位置都不可能闪掉。熟练的 Jhin 玩家用这一招每场团战至少能拿到一次 3000 射程的 W-root。
