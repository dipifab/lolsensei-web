---
title: "Kindred Jungle Build & Guide — Patch 16.9"
slug: "kindred-jungle"
language: "zh-hans"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Kindred 千珏打野完整攻略:Mark 猎杀节奏、on-hit 出装顺序、关键对位、强势期把握、新手常见错误,以及最后的高阶技巧总结。"
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "每 4 分钟在随机敌人(champion 或 jungle camp)身上生成 Mark。击杀获得永久层数:AS、AD、平A 射程加成。这是核心运营。"
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "短距离 dash + 对最近目标 3 次快速平A,重置平A 计时。用于清野、走位调整、团战中衔接平A 链。"
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf 在区域内攻击约 8 秒,提供 AS 并显示 camp。Lamb 在移动和攻击中累积层数,满层平A 自我治疗。开关型,兼顾清野速度和续航。"
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "skillshot,命中后减速。对目标 4 次平A 后,下一次攻击造成基于已损生命值的额外伤害。残血 50% 以下英雄的爆发工具。"
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "在地面创造神圣区域:期间所有单位(队友与敌人都包括)无法降至 1 HP 以下,结束时治疗。反应式 save 工具,绝对不要预先布置。"
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对单体锁定大招(Malzahar R、Skarner R、Warwick R) — spell shield 抵消施放"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "对 hard CC 连环(Leona + Lissandra、Sett R + Ashe R) — 主动效果净化并重新走位"
    - dd_id: "6676"
      name: "The Collector"
      against: "领先且对面无 armor 堆叠时 — 5% HP 以下处决扩大优势"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对治疗强阵容(Aatrox、Soraka、Dr. Mundo) — grievous wounds 把续航砍掉一半"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对 3 名以上 hard CC 英雄(Leona + Lissandra + Sejuani) — tenacity 缩短眩晕和定身"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "尽早叠 Mark。每个完成的 Mark 给永久 AS + AD + 射程 — 优势滚雪球(击杀 → 属性 → 更多击杀),最终成为 3 件套侧翼,把所有 brawler 风筝至死。"
  weakness: "脆皮、无 hard CC、R 长冷却且需反应。2-3 级开战的 hard CC 打野(Lee Sin、Xin Zhao、Elise)能在你叠到第一个 Mark 前击杀;带 on-hit 减伤的坦克对你的 DPS 免疫。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades 让前 3 次平A 满速触发 — 正好是完成 Mounting Dread 4 平A 链所需的攻击。Sudden Impact 用 lethality 奖励 Q dash,Sixth Sense 揭示敌方 ward,Treasure Hunter 把 mark 击杀转为额外金币。"
    secondary_rationale: "Precision 副系:Triumph 在击杀参与时回血(打完 4 平A 后血量低),Coup de Grace 在 40% HP 以下增加 8% 伤害 — 与 E 第 4 平A 的已损生命值打击协同。"
    secondary_alternative: "面对 AP 爆发阵容(Diana 打野 + Syndra 中单 + Brand 辅助),把 Precision 换成 Resolve,搭配 Second Wind + Revitalize:野区续航与 R 治疗量都增强。"
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "前期偏弱、后期成长型的打野与 carry"
      reason: "他们想发育到 3 件套再行动;你可以去他们野区猎 mark、压制他们的早期 camp。每完成一个 Mark 就在他们 spike 前进一步拉开差距。"
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "无内置位移的脆皮后排 marksman"
      reason: "跨地图 gank:E 的减速时间足以衔接 4 平A 链并触发 Mounting Dread 的已损生命值打击,而他们没有 dash 能打断这条链。"
    - examples: ["maokai", "nasus"]
      archetype: "无 dash 的迟缓坦克"
      reason: "他们追不上风筝中的 Kindred。你在他们 CC 距离之外平A,Wolf's Frenzy 同时被动消耗他们。"
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "带 hard CC 与控制的早期开战打野"
      reason: "他们 2 级带踢、击飞或眩晕进你的 camp,在你叠到一个 Mark 之前击杀。你没有打断锁定的 dash,R 也未上线。"
    - examples: ["sion", "dr-mundo"]
      archetype: "带 on-hit 减伤或免疫的巨像坦克"
      reason: "Sion 的 W 护盾和 Mundo 的被动治疗抵消你的平A DPS — 你唯一的伤害来源是 on-hit,任何打断这个循环的机制都让你失效。"
    - examples: ["zed", "talon"]
      archetype: "在 R 生效前秒杀你的爆发刺客"
      reason: "你脆皮且无 hard CC;他们在 Lamb's Respite 施法前的 0.5 秒窗口杀你。R 不挡伤害只挡死亡 — 他们等结束后再 engage。"
---

## 概述

Kindred 是一个在野区猎杀的 marksman。Lamb 远程射击,Wolf 近身撕咬,整个技能组围绕一项其他 champion 都没有的机制运转:**Mark of the Kindred**。每 4 分钟,一个 Mark 出现在随机敌人 — champion 或 jungle camp — 身上,击杀后获得永久层数的攻击速度、攻击力和平A 射程加成。叠到 4 层射程跃升,叠到 8 层你已经能在敌方 marksman 的平A 距离之外反向消耗他们。

运营分两段。前期你是 **mark hunter**:看小地图上的 Mark 图标,判断是否值得争夺(自己的 = 永远去拿,对面的 = 用压力换抢走),并围绕它调整路径。中期你成为侧翼切入者 — Q-dash 切到敌方后排(站在他们坦克身后的 carry),E 套住 carry,4 次平A 衔接,Mounting Dread 用已损生命值打击完成处决。后期你是一个超后期成长的 skirmisher,把游戏里所有 brawler 风筝至死(风筝 = 一边后退一边攻击,让敌人始终追不上)。

## 推荐出装

**起始:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** 加快清野(你是远程,必须拿 Hailblade — Emberknife 仅限近战)+ ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。

**核心装备(顺序):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — 由 Hailblade 的任务升级而来(累计经验后约 3-4 分钟自动进化)。AD skirmisher 的 companion:走出草丛时短时移动速度爆发,适合追 Mark 或从战争迷雾里收尾 gank。
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 每第三次平A 造成额外真实伤害。真实伤害无视 armor,因此能穿透你本来无法削减的坦克出装。
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速鞋。默认选择;只有当对面有 3 名以上 hard CC 时才换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 每次平A 额外发射两支箭。野区清野速度翻三倍,团战中把 Wolf-and-Lamb 的 DPS 分摊到 3 个目标上。
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit(每次平A 附加魔法伤害) + magic resist。双重收益:对 AP 爆发(Diana、Syndra、Brand)的生存线,以及对 magic resist 较低后排的撕碎。
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 蓄能射击的额外射程,叠加在你 Mark 已经累积的射程之上。后期你能从屏幕边缘平A 敌方 carry,而他们的队伍只能在空地上追跑。

**情景装备:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对单体锁定大招(Malzahar、Skarner、Warwick)。Spell shield 吃掉施放,连锁就不会启动。
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 对 hard CC 连锁。主动净化所有 CC 包括压制 — Skarner 拉过来或 Sett 大招落下的瞬间按下。
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 领先时,对 5% HP 以下目标处决。和 E 的已损生命值打击衔接干净,尸体还提供额外金币。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对治疗强阵容(Aatrox、Soraka、Dr. Mundo)。施加 grievous wounds,把他们在长战斗中的续航砍掉大约一半。

**鞋子:** Berserker's Greaves 默认。Mercury's Treads 仅在 hard CC 沉重时选用。

**技能加点:** **Q** 优先满级(清野速度与每次 dash 伤害),**E** 第二(每级提升已损生命值打击的爆发),**W** 最后(攻速和治疗在 1 级就够用)。**R** 在 6、11、16 级。

**符文:** 主系 **Domination** + **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**。副系 **Precision** + **Triumph** + **Coup de Grace**。Hail of Blades 在 Kindred 上是经典选择,因为它把前 3 次平A 推到最大攻速 — 正好是开启 Mounting Dread 链所需的攻击。

## 关键对线

- **Lee Sin:** 1 级输你,但 2-3 级他的 Q-W-Q-踢组合能在你 R 上线前秒杀你。4 级前避开他这一侧,然后在他没 W 就 commit Q 时找反 gank。盯他的 W 冷却 — 没 W 他没法从战斗里脱身。
- **Karthus:** 纯后期。3 分钟入侵他的红 buff 区抢一个;他拦不住你,而失去节奏会拖延他的 6 级 spike。3 件套之后他赢,所以要在 18 分钟前结束。
- **Master Yi:** 必须在 ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 之前击杀。E 留给他 Q dash 结束的窗口 — 他重新出现时吃到减速,你的队伍接 CC。他有第一件装备后,绝不 1v1。
- **Diana:** 她想切你的后排,你想切她的后排。**R** 留到她把 R 命中你的 carry 时再用 — 神圣区域让 carry 在爆发中保持 1 HP 之上,然后你的队伍在恢复窗口击杀她。
- **Xin Zhao:** 击飞 + 锁定 1.5 秒就能杀你。2 级时绝不要走在他 camp 旁;在你叠到 2 个 Mark 的射程加成之前,跟一个线上英雄一起拿 buff。3 件套之后用 Q 重置风筝他。

## 强势期与胜利条件

- **3 级:** 技能组完整。gank 套路是 **E 命中目标 -> 中段衔接 Q-dash 的 3 次平A -> 第 4 次平A 触发已损生命值爆发**。R 还没有,3 级 gank 不要深 commit — 仅 Flash 距离。
- **第一个 Mark 层(约 5 分钟):** 永久 +AS、+AD、+射程。此后每完成一个 Mark 都进一步拉大差距。即使是中立 Mark 也要打 — 属性优势比一次单独的 trade(小规模交锋中的伤害交换)更重要。
- **6 级:** **Lamb's Respite** 解锁。从这里开始,你能把队友从必死状态救回来。诀窍是 **绝不预先布置** — 在看到敌人 commit 处决技能的瞬间放下,否则区域会在威胁解决前结束。
- **3 件套 + 4 Mark 射程加成(约 22 分钟):** 你的射程超过游戏里所有 marksman。团战中站在你方前排身后,不动手脚,持续平A 直到一切死亡。这是你的 scaling 悬崖 — 跟队伍抱团,不要 splitpush(不要独自带边线兵)。

## 常见错误

- **预先布置 Lamb's Respite。** **R** 是反应式而非主动式(你在读到威胁之后再放,而不是之前)。在敌方大招命中的那一秒放下,而不是他们刚靠近就放。预放的 R 救不了任何人,还把唯一的 save 工具锁住 110 秒。
- **忽略 Mark 图标。** 小地图上 Mark 显示为一个小骷髅。不去追踪它的玩家失去了这个 champion 的全部身份。每 30 秒打开地图问自己:"这个 Mark 是我去拿,还是他们的我要去抢?"
- **没有退路就 Q-dash 进对方队伍。** **Dance of Arrows** 1 级冷却 12 秒。如果你 Q 进去追击杀,被 CC 住,就没有 escape。永远在 dash 轨迹后方留一面墙,这样 CDR 后下一次 Q 能把你弹回来。
- **忘记 Mounting Dread 的 4 平A 要求。** **E** 施法本身伤害很小,真正的回报是对减速目标的第 4 次平A。如果 E 之后只接 2 次平A,已损生命值爆发就不会触发。要么完成整条链,要么干脆别施放 E。
- **把 R 留给永远不会到来的完美时机。** 一个把队友救回 3 秒的"浪费"R,胜过一个因为留得太久而从未按下的完美 R。犹豫时就放下。

## 进阶技巧

把 **R 用作目标诱饵**。在小龙或大龙处队友血量低时,把 **Lamb's Respite** 放在目标身上而不是队友身上。区域内所有单位无法低于 1 HP — 包括目标本身。你的队伍在区域内 smite 或终结目标,任何踏入区域的敌人也无法击杀你,所以他们要么放弃争夺,要么在区域结束、你方因 R 结束治疗而满血时被抓。当对面读不出这个套路时,这把 50/50 的小龙团变成确定的目标 + 双杀。
