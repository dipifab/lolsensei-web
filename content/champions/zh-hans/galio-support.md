---
title: "Galio Support Build & Guide — Patch 16.9"
slug: "galio-support"
language: "zh-hans"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Galio 加里奥辅助完整攻略:起始装、坦克开团核心出装顺序、符文与天赋选择、关键对线、6 级全图 R 强势期把握、常见失误与 R+ 闪现进阶连招技巧。"
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "每隔几秒,Galio 的下一次普攻命中时会在小范围内造成额外法术伤害。"
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "两道风弹在指定地点汇聚成龙卷风,持续造成法术伤害。安全位置的远程消耗工具。"
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "蓄力一面吸收法术伤害的盾;释放时嘲讽并对周围敌人造成伤害。团战中段释放为 ADC 解围(把切入者从己方核心身上拉走)。"
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "短暂后撤,然后向前突进,把第一个命中的敌方英雄击飞。主要的开团手段。"
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "指定一名队友;短暂延迟后,Galio 砸落在该队友身上,为附近队友提供护盾,并击飞敌人。全图开团。"
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "对线方有强单体硬控针对己方 ADC(Morgana Q、Ashe R、Skarner R)——主动解控并治疗"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "搭配普攻型 ADC(Jinx、Caitlyn、Tristana)——W 减速直接接入对方 DPS 窗口"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "队伍法系阵容(中单 AP + 打野 AP)——光环对你嘲讽到的目标增幅法术伤害"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "敌方阵容有 3 名以上 AP 威胁(中、野、辅都打法术伤害)"
    - dd_id: "3107"
      name: "Redemption"
      against: "搭配辅助型 ADC 或治疗阵容(队伍中已有 Soraka、Sona、Yuumi)——团战中提供群体治疗"
  base_combo: ["E", "AA", "W"]
  win_condition: "用 Hero's Entrance R 在小龙和峡谷先锋刷新时进行全图开团。下路小规模交战中,先用 E 击飞,W 嘲讽为 ADC 解围,然后 Knight's Vow 把伤害从核心身上引开。"
  weakness: "W 蓄力会被钩子(Blitzcrank、Thresh)和沉默打断。脱离型辅助(Janna、Lulu)能取消 R 后续。单体伤害有限——必须靠 ADC 跟进才能把开团转化为击杀。"
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 主系:Aftershock 在 W 嘲讽或 R 击飞时触发,提供开团后存活所需的抗性。Font of Life 让 ADC 攻击被定身目标时回血,Bone Plating 吸收第一波爆发,Revitalize 增强 R 给队友的护盾值。"
    secondary_rationale: "Inspiration 副系:Biscuit Delivery 在线上提供免费血量和蓝量补给(辅助经济下 Galio 蓝量很紧),Cosmic Insight 缩短闪现冷却——R+ 闪现是你影响力最大的抓人手段,因此至关重要。"
    secondary_alternative: "面对强消耗组合(Brand、Zyra、Xerath 辅助)无法健康抵达 6 级时,把 Inspiration 换成 Sorcery,带 Manaflow Band(更多蓝量做反向 Q 消耗)和 Transcendence(更快的 E 躲避后续消耗)。"
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "无位移的 ADC"
      reason: "Hero's Entrance 落在队友头顶并附带击飞;没有位移的核心无法逃脱,只要 R 在线,任何 2v2 都会被转化为击杀。"
    - examples: ["leona", "rakan"]
      archetype: "无钩子的坦克开团辅助"
      reason: "Galio 的 E 击飞能打断他们的开团前摇(Leona Q 眩晕走位、Rakan W 蓄力);W 护盾随后吸收对方开团后续的法术伤害。"
    - examples: ["brand", "zyra"]
      archetype: "无逃生的脆皮法师辅助"
      reason: "法师辅助为命中技能必须站定;Galio 的 E 能穿过小兵打到他们,W 能扛住通常会逼退近战开团手的爆发。"
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "钩子辅助"
      reason: "W 中段被钩中会取消整个开团;Galio 是没有内置位移的大体型目标,一个钩子接连控就把 R 和 E 都从战斗中抽走。"
    - examples: ["janna", "lulu", "milio"]
      archetype: "脱离型辅助"
      reason: "他们的范围击退或护盾+解控技能能否定 R 落地窗口和 W 嘲讽——Galio 砸下来时,核心已经脱离到射程之外。"
    - examples: ["xerath", "vel-koz"]
      archetype: "远程炮台法师辅助"
      reason: "他们在 Galio 的 Q 射程和 E 突进距离之外消耗,线上无法惩罚;6 级前掉血累积会拖慢他在边路 R 的影响力。"
---

## 概述

Galio 辅助是装在坦克外壳里的全图开团(发起战斗)工具。他在三个不同的技能上都带有硬控——也就是敌人无法靠普通解控解除的控制:**W** 嘲讽(强迫目标短时间攻击你)、**E** 击飞(把目标短时抛向空中,类似短眩晕)、**R** 击飞。他有一面法术护盾来吸收远程辅助的爆发(1-2 秒内的高额伤害),还有一个全球大招,把小龙和峡谷先锋刷新转化为 5v5 的击杀机会。他打辅助是因为他的影响力随地图意识扩展,而不是随经济成长——而且 Hero's Entrance 在队友需要一个坦克空降时,比他自己当主坦更有用。

线上的运营策略是耐心:用 Q 在最大射程消耗敌人,把 E 留给 ADC(也就是远程射手,靠普攻输出的核心)发起交战的瞬间,W 只在敌人已经粘到你近身时才蓄力。大动作出现在 6 级——己方打野上路抓人(进塔下找击杀)时你 R 上去;敌方打野出现在下路时,R 回上路保护上单。技巧表现在 W 的释放时机(用来打断关键引导技——Caitlyn R、Twitch 大招喷射、Master Yi Q)和 R 目标选择(永远选最有可能撑过 2 秒引导的队友——绝对不要 R 一个已经残血的 Vayne)。

## 推荐出装

**起始装备:**![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 瓶 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。标准辅助起手装;任务升级(内置任务,通过逐步积累金币自动完成)在第 12-14 分钟解锁。

**核心装备(顺序):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** —— World Atlas 的任务升级,选它是因为 Galio 偏开团型(开战不脱战)。增加在被定身目标上的额外伤害被动,每次 W 或 E 命中都会触发(自动生效)。
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** —— 5v5 团战的范围护盾主动。和 R 配合:R 落地后立即开 Locket,全队各自吃下 700+ 的护盾承接对方的后续爆发。
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** —— 技能急速鞋。缩短每个技能的冷却,让团战间的开团工具更快回转,并且对召唤师技能的冷却缩减让闪现更快回来,方便 R+ 闪现的连招。
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** —— 绑定影响力最大的核心。把伤害从核心引到自己身上,同时因为你成了优先集火目标,Aftershock 的价值也被推高。

**情境装备:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** —— 对线方有强单体硬控针对己方 ADC(Morgana Q、Ashe R、Skarner R)。主动可解控并治疗。
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** —— 搭配普攻型 ADC(Jinx、Caitlyn、Tristana)。你的 W 减速直接接入对方 DPS 窗口。
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** —— 队伍法系阵容(中单 AP + 打野 AP)。光环对你 W 嘲讽到的目标放大全队的法术伤害。
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** —— 敌方阵容有 3 名以上 AP 威胁(中、野、辅全是法术伤害)。
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** —— 搭配辅助型 ADC 或治疗阵容(队伍中已有 Soraka、Sona、Yuumi)。

**鞋子:**默认 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** —— 技能急速 + 闪现 CD 缩减让 R+ 闪现的连招更频繁可用。对方阵容控制堆叠时(R 落地瞬间多个眩晕/魅惑/缠绕指向你),换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点:**先点满 **E**(开团冷却更短)。再点满 **Q**(清线和敌方 ADC 被推到塔下补不到刀时——压在塔下没有兵线可补——的消耗)。**W** 最后点。**R** 在 6、11、16 级各加一点。

**符文:**主系 **Resolve**,带 **Aftershock**、**Font of Life**、**Bone Plating**、**Revitalize**。副系 **Inspiration**,带 **Biscuit Delivery** 和 **Cosmic Insight**。面对无法健康抵达 6 级的强消耗组合,把副系换成 **Sorcery**(Manaflow Band + Transcendence)。

## 关键对线

- **Blitzcrank:**对线很难。他的 Q 钩在你 W 蓄力期间命中。站在小兵兵线后方让他无法穿兵钩到你,绝对不要在战争迷雾中蓄力 W,在 4-5 分钟左右召打野——Blitz 没有逃生技,你的 E 击飞能连控住他。
- **Lulu:**很难突破的脱离。她的 E 护盾 + W(击退或变形)能瓦解你的开团。6 级前用 Q 在最大射程消耗,而不是上去 E 开团,R 从屏幕外释放避免变形先到。
- **Leona:**势均力敌。两个都是开团手,所以谁先命中 E 就赢这一波交换。用上前小步骗她的 Q 太阳冲击,然后在她的恢复帧上 E。
- **Soraka:**优势。她的治疗只有在射程内才有意义。最大距离 Q 她,逼她在治疗和走位之间二选一,然后打野出现在下路时 R + E 形成 3v2 必杀局。
- **Pyke:**势均力敌,但 Pyke 拿到击杀后 Galio 就输了。盯住他的钩子,在你无法用 ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** 卡爆发节点时不要让 ADC 残血,因为他的 R 是重置技,所以河道要插得深。

## 强势期与胜利条件

- **2 级:**Q + E 解锁第一次击杀威胁。在 ADC 跟进的前提下,向前一步、E 命中辅助,Q 落在 ADC 脚下——减速接击飞的连续控制足够你打两次普攻。
- **6 级:****Hero's Entrance** 解锁全图影响力。第一波小龙团是你的强势期——把兵线推过去,走到中路河道,等己方打野在小龙坑开团时 R 跟上。
- **Bloodsong 完成(~12-14 分钟):**开团开始打出真实伤害。被定身触发增加 30+ 法术伤害,作用于你 W 或 E 命中的目标。
- **Locket of the Iron Solari + Knight's Vow 完成(~20-25 分钟):**两件套强势期。R 接 Locket 给核心覆盖 600+ 有效血量,Knight's Vow 同时承接所有集中在你身上的火力,让 ADC 持续 DPS。

## 常见错误

- **ADC 没跟进时蓄力 W。**W 嘲讽强迫敌人攻击你,但如果 ADC 在调整位置或回城,你就白白吃伤害,没有交换。把 W 释放时机和 ADC 的第一次普攻窗口对齐。
- **Hero's Entrance 选错目标。**绝对不要 R 给已经残血的队友——他在 2 秒引导时间内就会死,你最后落在尸体上。选队伍中血量最高的前排目标。
- **游走时不管兵线。**Galio 辅助 R 去中路却把整波下路兵线让出去是亏损交易。先把兵线推到敌方塔下再游走——绝对不要从冻结的兵线走开。
- **没开 ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket 就开团。**在团战和资源争夺中,R + Locket 是你最有价值的单一冷却。等到全队一起进场再同时丢出两者,才能让多名队友吃到最大护盾值。
- **W 二点。**和中单 Galio 一样,W 升级带来的冷却缩减很有限。优先点满 E,8 级时拿到 4 秒一次的开团窗口。

## 进阶技巧

R+ 闪现连招:对队友释放 Hero's Entrance,然后在前摇动画期间闪现,把落点向任意方向偏移 400 单位。敌方看到队友头顶的 R 指示就准备应对显眼的击飞,结果你闪现后的真实落点会盖到 R 视觉范围之外的目标。需要练习把闪现卡进引导窗口——但只要在战争迷雾里(对方因为你在迷雾中看不见你)对敌方核心来一次 R+ 闪现,游戏在开始之前就已经结束。
