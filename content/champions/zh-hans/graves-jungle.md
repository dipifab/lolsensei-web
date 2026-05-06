---
title: "Graves Jungle Build & Guide — Patch 16.9"
slug: "graves-jungle"
language: "zh-hans"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Graves 男枪打野完整攻略:起手装、lethality 核心出装顺序、Domination 符文与天赋加点、关键对线思路、强势期节奏与团战切入时机、新手常见错误规避,以及 E-buffer-roll 等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "霰弹枪装填机制。每次开火发射 4 颗扇形弹丸,不会穿透小兵;多颗弹丸命中非英雄目标会将其击退。"
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "直线弹丸 2 秒后爆炸,撞墙立即引爆,可墙体反弹。打野清线和 angle-shot 的核心工具。"
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "投掷烟雾弹,阻挡视野并对初始命中目标造成减速。用于 disengage、拒绝插眼或遮蔽 gank 路线。"
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "短距离前冲并获得护甲加成,朝英雄方向位移可叠层。普攻降低冷却并刷新加成。储存 2 层。"
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "远程爆炸射击:命中第一个英雄后在其身后扇形爆裂。在 6/11/16 级是 burst spike。"
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对单体强 hard CC (Malzahar R、Skarner R、Warwick R) — 法术护盾屏蔽 lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "领先且敌方前期不堆护甲时 — 5% HP 以下处决终结优势"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对强力 AP 爆发 (Diana、Syndra、Lux mid) — 生命线护盾把秒杀变成可生还的换血"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对方有两个强物理输出 (如 Yasuo + Caitlyn) — 流血分摊伤害,避免被秒"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对方 3 个以上 hard CC 英雄 (如 Leona + Lissandra + Sejuani) — 韧性缩短晕眩与定身时长"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "14 分钟前用 invade 和 gank 滚雪球 lethality。Eclipse 出装后争夺每一个资源点 — 霰弹枪两轮融化 squishy,E 重置换血窗口。"
  weakness: "前期蓝量吃紧。霰弹枪装填窗口惩罚贪婪走位,除 E 的护甲加成外没有任何安全机制,被 hard CC 连锁就秒。"
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
---

## 概述

Graves 是一个住在野区而不是下路的 marksman。霰弹枪式普攻加上 **Quickdraw (E)** 内置的护甲加成,让他能与 tank 和 brawler 正面 trade,同时凭借 lethality 仍能秒掉 squishy。整套技能围绕**节奏**展开 — 快速清野,冷却好就 invade,把野区 priority 换成击杀,在敌方 carry 成型之前结束游戏。

打法很简单:开局 8 分钟内你是地图上最强的单挑选手,要好好利用。power-farm 干净清完野区,看小地图,走进 **Flash** 没有或残血的那条线。Eclipse 出来后争资源点,三件装后变成 teamfight skirmisher,从 flank 抹掉敌方后排 — 但后期**不要** splitpush,30 分钟落单的 Graves 一套 CC 链就能死。

## 推荐出装

**起手装备:** Smite + **Hailblade** 加快清野并强化 **R** 的 AOE 伤害,搭配 **Refillable Potion**。Emberknife 仅在队伍需要从敌方红区方向施加反野压力时选(清野更慢,sustain 更高)。

**核心装备(按出装顺序):**

1. **Eclipse** — burst+护盾+omnivamp,skirmish 打野最干净的第一件大件。两次命中触发护盾,刚好契合霰弹枪节奏。
2. **Plated Steelcaps** 对 AD 重的阵容 / **Mercury's Treads** 对 3+ hard CC。默认是 Plated。
3. **Youmuu's Ghostblade** — 移速主动加 lethality,你的 gap-close 与 gank 收尾工具。
4. **Serylda's Grudge** — 后期敌方开始堆护甲时的 armor pen 成长;对受伤目标减速让你保持射程。

**情境装备:**

- **Edge of Night** — 对单体 lock-on 大招(Malzahar、Skarner、Warwick)。
- **The Collector** — 领先且想要 squishy 处决压力时。
- **Maw of Malmortius** — 对强力 AP 爆发(Diana、Syndra、Lux mid)。
- **Death's Dance** — 对方有两个强物理输出的阵容(如 Yasuo + Caitlyn)。承受的伤害会以缓慢流血形式分摊,而不是瞬间到位。
- **Bloodthirster** — 后期需要第五件输出装,自带护盾与 lifesteal。

**鞋子:** 默认 Plated Steelcaps。Berserker's Greaves 仅在敌方完全没有 CC 威胁、并且你特别需要 attack speed 成长时选 — Graves 的小众选择。

**技能加点:** **Q** 优先满(清野和伤害),**E** 第二(每级 CD 减少带来更多 dash),**W** 最后满(减速在 1 级就够用)。**R** 在 6、11、16 级。

**符文:** 主系 **Domination** 配 **Hail of Blades**、**Sudden Impact**、**Sixth Sense**、**Treasure Hunter**。副系 **Precision** 配 **Triumph** + **Coup de Grace** 强化滚雪球压力,或者 **Resolve** 配 **Second Wind** + **Revitalize** 应对野区被 poke。

## 关键对线

- **Hecarim:** 三件装后压你一头,但 6 级前若你 E-roll 控制普攻间距就会输 skirmish。9 分钟前打压他,然后退一步 — 他出第一件大件后不要单挑。
- **Lee Sin:** 对称的节奏对位。前 6 级双方都强,谁 gank 成功更多谁赢。盯着他 **Q** 的冷却和 W-jump 时机;他 Q 没了,你的霰弹枪稳赢 trade。
- **Master Yi:** 必须在他 6 级 + 第一件大件之前击杀。在他 **Q** 激活时把 **W** 罩在他身上,他视野被挡就会丢失锁定 — 在训练模式里练成肌肉记忆。
- **Vi:** 肉且 gank 强。如果你有 E 储存,长 skirmish 她会输;不要被她的 **Q** 抓在空中 — 那对她的队伍就是必中 all-in。
- **Diana:** 6 级后滚雪球极猛。把 **W** 留给她 **R** 的前摇(打不断 engage,但命中减速会拉长她的 commit,给队伍 peel 时间)。第二件输出装出 **Maw of Malmortius**。

## 强势期与胜利条件

- **3 级:** 整套技能就位。gank 套路是 **E 进入射程 -> Q 打他们身后的墙 -> 普攻重置 -> W 减速覆盖撤退路径**。配合 Hail of Blades 符文,任何 60% HP、没 Flash 的 squishy 必死。
- **6 级:** **Collateral Damage** 解锁远程处决。弹丸命中第一个英雄后在身后扇形爆裂 — flash 把目标顶到墙上,直击和扇形伤害都吃满。
- **Eclipse 时机(约 9 分钟):** 资源点抢点战必赢。在这个窗口内强行打 Scuttle、Drake 或 Voidgrubs — 12 分钟之后,成长型打野(Hecarim、Master Yi)开始追上你的节奏。
- **三件装(约 22 分钟):** 变成 teamfight flanker。你的工作是从侧翼切入敌方后排(离他们 tank 最远的 squishy carry),在对方反应过来之前秒掉。绝不从正面 engage。

## 常见错误

- **清野中为了逃命浪费 E 储存。** **E** 有 2 层,普攻每次都会缩短冷却。把两层都用来躲一个技能,接下来 12 秒就完全没有 gap-close。至少留一层。
- **Q 不小心打到身后的墙上。** **End of the Line** 撞地形会立即引爆。背靠墙壁开 Q,弹丸在你身后炸开,零伤害。施法前永远先确认朝向。
- **把 Smoke Screen 砸在自己身上当 sustain。** **W** 不回血。价值在初始命中的减速 — 砸在敌方 carry 的撤退路径上,不是砸自己头上。
- **没铺垫直接最大射程开 R。** 远距离弹丸是可以躲开的。**R** 应该在 Flash 后近距离打,或者在敌人已经交了 Flash 时作为预判收割。除非他们正在雾区里直线行走,否则别用 R 开团。
- **30 分钟 splitpush。** 后期 Graves 一旦被 Skarner/Warwick/Malzahar 的 R 命中就没逃命手段。25 分钟后跟队伍集合,在 teamfight 距离上找侧翼,而不是在边路 1v1。

## 进阶技巧

**E-buffer-roll** 技巧:在 Q 前摇或普攻前摇中途,提前队列输入 **Quickdraw**。前摇结束的瞬间 dash 触发,所以你既打出普攻/Q 的伤害,**又**在同一段动画周期里完成走位 — 边躲边追时仍保持 DPS uptime。没有这个技巧时,你不能动的 recovery 窗口大约 0.4 秒;用 buffer roll 几乎为零。在训练模式假人上反复练习,直到 stutter-step 节奏变成普攻 → E → 普攻无停顿。
