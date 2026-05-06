---
title: "Blitzcrank Support Build & Guide — Patch 16.9"
slug: "blitzcrank-support"
language: "zh-hans"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Blitzcrank 机器人辅助完整攻略:勾子起手时机判断、视野与眼位布置思路、坦克 engage 出装顺序、关键对线应对方式、强势期节奏与团战切入时机、新手常见错误规避,以及草丛雾区高级勾人技巧一页讲透。"
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "残血时获得一层基于当前蓝量的护盾。所以进团前最好让蓝条保持满状态。"
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "长距离直线 skillshot:把第一个命中的敌人拉向自己 (hook — 把目标拽过来的勾子)。冷却很长,勾空 = 16-20 秒没有 engage 手段。"
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "self-buff:大量移动速度与攻击速度,结束时一段减速。用于 Q 之前贴近距离,或 E 顶起后追击。"
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "蓄能下一次普攻,把目标短暂顶起。射程为近战 — Blitz 必须已经站在目标身边。"
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "主动:对周围敌人造成伤害与 silence (短暂禁止施法)。被动:每隔一段时间充能,下次普攻附带额外闪电伤害。"
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位强 CC 或 AP 爆发 (Lux, Morgana, Ahri) — magic resist 加 tenacity (CC 恢复更快)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "carry 容易吃硬控时 (Morgana Q, Ashe R, Leona engage) — 主动可解 ADC 身上的 stun"
    - dd_id: "3107"
      name: "Redemption"
      against: "对位 poke 阵容 (Xerath, Caitlyn, Senna) — 团战范围治疗补回前期掉的 HP"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "想团战中多丢几次勾时 — Ability Haste 缩短 Q 的冷却,勾空也不亏"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "对 priority target (敌方 ADC 或后排 mage) 命中一发 Rocket Grab,在对面 peel (保护 carry 免受伤害) 起效之前用 W-AA-E-R 连招收掉。"
  weakness: "Q 一旦勾空就有 16-20 秒几乎没有 engage 的窗口。带 disengage 的辅助 (Janna, Lulu) 或挡勾的肉盾 (小兵、上来挡线的坦克) 直接让整套技能失效。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
      rationale: "immobilize 后立即获得一段 armor 与 magic resist 爆发 — 在 Q 拉过来那一帧触发,正好让你在变成集火目标的瞬间扛下回敬伤害。"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    primary_rationale: "主系 Resolve:Aftershock 与 Q 拉人精准联动。Font of Life 在 immobilize 后给 ADC 持续回血,Bone Plating 吸收线上短 trade 的爆发,Overgrowth 提供后期额外生命值堆叠坦度。"
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_rationale: "副系 Inspiration:Biscuit Delivery 提供线上血量与蓝量续航 (直接喂养 Mana Barrier 护盾),Cosmic Insight 让团战中的 Flash 更频繁可用。"
    secondary_alternative: "若对线是不动的 enchanter,可改主系 Inspiration 带 Glacial Augment,走 poke-and-slow 思路。少见但有效的替代方案。"
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "无位移的静态站位 ADC"
      reason: "他们的普攻射程逼着他们停在小兵后一条可预测的线上;沿炮车小兵弧线丢出的 hook 干净命中,因为他们没有瞬时逃生手段。"
    - examples: ["soraka", "yuumi"]
      archetype: "基础 HP 偏低的脆皮 enchanter"
      reason: "把 enchanter 拉出位置就等于抹掉这条线:他们的 carry 没有 peel,Q-W-E-R 连招打 500 HP 目标足够终结 trade。"
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "站桩型 mage support"
      reason: "他们站在后方远距离 poke;在他们读条施法那帧丢一个极限距离的 hook 把人拉过来,他们 flash 都来不及,你的队伍立刻得到一个免费 4v5。"
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "比拼 hook 速度的 engage 坦克"
      reason: "他们先 hook 或冲脸,你的 Q 起手动作就被打断,队友直接吃下连招 CC — hook-vs-hook 的对线惩罚先暴露施法的那个人。"
    - examples: ["janna", "lulu", "morgana"]
      archetype: "disengage 与 CC 免疫"
      reason: "Janna Q 龙卷风把你吹出 E 范围;Lulu W 在 engage 中给你减速或变形;Morgana 的 Black Shield 直接挡掉整条 hook。"
    - examples: ["alistar", "tahm-kench"]
      archetype: "能自我 peel 的 bruiser"
      reason: "勾中之后他们能用顶或吞把自家 ADC 救开;拉过来不等于击杀,Q 的长冷却就变成被惩罚的窗口。"
---

## 概述

Blitzcrank 是一个 tank-engage 辅助,整局游戏都围绕命中一个技能展开:**Rocket Grab (Q)**。这一记 hook (把敌人拽到你身边的勾子)是这套技能的开战手段。命中,bot lane 在两秒内变成 2v1;勾空,你就有 16-20 秒冷却几乎没有 engage 手段。他依赖冷却缩减 (称为 "Ability Haste") 与坦克装备成长,因为他的工作就是走在最前面、勾人、顶起、然后撑到 ADC 收掉对方为止。

一句话游戏思路:在草丛布眼,盯住敌方 ADC 的脚步,他踩上可预测路径的瞬间丢 **Q**,然后用 **W** (移速 self-buff) → 平 A → **E** (顶起) → **R** (silence + 范围伤害) 连招接收。不打架时你的工作是视野:在河道与三角草丛布眼,让你的打野和中单知道敌人 missing 时机。

## 推荐出装

**起始装备:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** trinket。从第二次回城开始,每次回城都买一个 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward**。

**核心装备 (按购买顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 辅助起始装,被动给金币,达到金币阈值 (大约 12-15 分钟) 后自动升级成 ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh**。
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — 起始装的 warden 升级。生命值、Ability Haste,加上对你 immobilize 的目标减速的光环:与 **E** 的顶起完美衔接。
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位以普攻为主的下路 (大多数 ADC) 的护甲鞋;面对强 CC 时换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 范围护盾主动。你勾中、队友跟进后,在敌方爆发处于读条中段时按下 Locket;它能吸掉这次爆发节点,把 50/50 的混战变成干净取胜。
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 把被动绑定到你的 ADC。**R** 引爆后,ADC 数秒内每次平 A 都获得伤害加成。
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 后期 peel 装 (peel = 保护 carry 免受伤害):把 ADC 受到的部分伤害转移到你身上。与你叠的坦度联动,允许你冲进对面后排做 body-block (把身体挡在攻击路径上替队友吃伤害)。

**情境装备:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — carry 容易吃硬控时 (Morgana Q, Ashe R, Leona engage)。主动在团战中解掉 ADC 身上的 stun。
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 对位 poke 阵容 (Xerath, Caitlyn, Senna):团战范围治疗补回你为压前所流的血量。
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 想多丢几次勾时;Ability Haste 缩短 **Q** 冷却,勾空也少亏。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。AP 爆发或多 stun 阵容换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**;若你信赖自己的勾子精度,想让 Q 冷却更快,选 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**。

**加点顺序:** 主升 **Q** (勾子是这套的核心),副升 **E** (顶起随等级变强),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve**,带 **Aftershock**、**Font of Life**、**Bone Plating**、**Overgrowth**。Aftershock 在你 immobilize 一名敌人后立即给你一段 armor 与 magic resist 爆发 — 与你的 **Q** 拉人精准联动,让你成为集火目标的瞬间能扛下回敬伤害。副系 **Inspiration** 带 **Biscuit Delivery** 与 **Cosmic Insight**。备选:若你更想走 poke-and-slow 路线,可改主系 **Inspiration** 带 **Glacial Augment** (针对不动的 enchanter,较少见但可行)。

## 关键对线

- **Caitlyn / Janna:** Caitlyn 会在你勾人必经的草丛里布陷阱。买一个 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** 放在线上草丛,踩进之前先扫;Janna 的 Q 龙卷风会打断你的 **Q** 施法动作,等她对兵线交完龙卷再丢自己的 Q。
- **Thresh / Nautilus:** hook-vs-hook 的对线。先丢的人通常输,因为第二个 hook 是免费回敬。利用小兵 body-block:站在炮车后,逼对面先交,在他们冷却中惩罚。
- **Lulu / Yuumi:** 她们靠 ADC scaling,自己没有 engage 手段。你拥有线权 — 安全勾偶尔丢,更重要的是 4-6 级带 **W** 漫游中路。对推线过深的中单丢一发跨地图 hook,是 Blitz 在整局游戏中价值最高的操作。
- **Morgana / Lux:** 两者都能用长距离定身阻止你的 hook。Morgana 的 E (Black Shield) 直接吃掉你的 **Q**。先用假动作逼她对兵线交盾 — 假勾、走位、然后在她盾冷却时再 commit。
- **Ezreal / Senna:** 他们 poke 不上前。这条线的计划不是"每 16 秒勾一次 ADC",而是"封视野让打野来抓"。在河道入口布 ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**,Ezreal 闪现去清线时打小地图请打野。

## 强势期与胜利条件

- **2 级 (Q + W):** 第一次 hook 强势期。**W** 开启后,你能在减速生效前多追几步 — 把一发 hook 从 50% HP 的 trade 直接拉成击杀。
- **6 级 (R 解锁):** 你的 all-in 对大多数 ADC 几乎是一发必杀。连招是 **Q** → **W** → 平 A → **E** 顶起 → **R** silence + 伤害。silence 让对方辅助来不及交 **Flash** 把 carry 拉走。
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh 成型 (约 12-15 分钟):** 起始装的 warden 升级解锁了团战版本的技能组:每一次 immobilize 命中都会为你的 ADC 减速目标。
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 成型 (约 22-26 分钟):** 你可以对五人聚集的中期阵型 engage 而不让自家后排被秒。这是开始带 ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** 漫游争资源点的节点。

## 常见错误

- **Q 一好就丢、没有任何 setup。** 没有跟进的 hook 等于浪费:把队友够不到的目标拉过来,等于直接送给敌方 16-20 秒。**Q** 只在 ADC 在跟进距离能 commit 时丢 (all-in — 完整伤害链直到击杀,不撤退)。
- **暴露 hook 起手动作。** Blitz 在 **Q** 发射前会抬手做明显的施法动作。中等水平的对手会在前摇阶段走位避开。从草丛里、从 fog of war (战争迷雾,地图上敌人看不到你的暗区) 中、或趁对面被自己技能动作锁住时再丢 **Q**,让他们没机会反应。
- **勾错目标。** 把敌方坦克或战士拉过来基本一定亏:等于把 engage 机会免费送给对面。永远先找 squishy 目标 ("squishy" — 高伤害低防御的英雄,例如 ADC 或 mage) 再 commit **Q**。
- **忘记被动的蓝量代价。** 你的护盾 (被动 **Mana Barrier**) 与当前蓝量挂钩,空蓝回城等于下次开团少 30% 的防御。在 **Q** 冷却中且蓝量低于 40% 时回城,不要凭感觉回。
- **R 只用来打伤害。** **Static Field** 作为 silence (短暂封锁敌方施法) 的价值高于伤害。留给对面辅助读条关键技能的中段 — 那一下打断比对 200 HP 残血敌人的爆发更值。

## 进阶技巧

整个游戏最强的 hook 起手是 **bush-fog hook**。走进自己兵线后方的线上草丛,敌人看不到你的位置。等兵线推过去,敌方 ADC 上前补刀 (last-hit — 击杀小兵拿金币) 炮车小兵。隔着草丛墙丢出 **Q**:他们没有动作可读、没有时间走位、勾子的手已经穿过草丛他们才意识到你在施法。配合开启 **W** 缩短距离,让你赶在敌方辅助闪现冷却好之前贴上去。这一个套路就贡献了青铜段位以上 Blitzcrank 大部分的对线击杀。
