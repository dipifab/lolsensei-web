---
title: "Elise Jungle Build & Guide — Patch 16.9"
slug: "elise-jungle"
language: "zh-hans"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Elise 打野完整攻略:Spider Form gank 路径、Cocoon 起手、出装优先级、关键对位、强势期节点和一条收尾进阶技巧。"
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "双形态。Human:每个 ability 命中存储一个休眠 Spiderling。Spider:平 A 造成 bonus magic damage 并为 Elise 回血。"
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human:按敌人当前 HP 比例造成伤害的指向 poke(反 tank)。Spider:按已损失 HP 比例伤害的扑跃(处决低血量目标)。"
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human:抛出向前走并接近敌人时爆炸的 Spiderling(减速 + AOE 伤害)。Spider:Elise 与宠物获得 attack speed,持续 DPS。"
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human:直线 skillshot 眩晕第一个命中的敌人。Spider:Rappel — Elise 升空进入无敌再落到目标身上,带额外伤害与回血。"
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "切换大招,在 Human(远程 caster,射程更长)和 Spider(近战 skirmisher,move speed 更高 + Spiderling 群)之间切换。冷却好就免费切换。"
      dd_spell_id: "EliseR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对单体 magic CC (Ahri charm、Lissandra R、Twisted Fate stun) — spell shield 吃掉一个大招,救回 Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌方 2+ 人出 Magic Resist 装时换;后期替换 Rylai's 或 Banshee's"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对强硬 hard CC(stuns、knock-ups)— 提供 tenacity(CC 时长减免)的鞋子替换"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "对叠加治疗的阵容 (Soraka、Vladimir、Dr. Mundo);兼任 Magic Penetration"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "前期靠 3-6 级 E cocoon 眩晕的 gank 滚雪球,Liandry's 与 Rylai's 上线后转向用 Rappel 进塔强打目标。中期 pick 后排脆皮。"
  weakness: "前排堆 Magic Resist 与 HP 后,后期掉档。Spider form 没有可靠 disengage:进塔时 cocoon 失手通常意味着 Elise 阵亡。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Domination:W slow + E stun + Q burst 三段独立 ability 命中,每次 gank 都触发 Electrocute。Sudden Impact 奖励 Rappel 突进,Treasure Hunter 击杀加金,Ultimate Hunter 缩短 R 冷却。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 解决前期 cocoon 高蓝耗,Transcendence 把 Ability Haste 推过 40% 软上限并在击杀时返还冷却。"
    secondary_alternative: "对强 poke 或反野压力 (Lee Sin、Graves、Nidalee),把 Sorcery 换成 Resolve 带 Bone Plating(8473,受到 3 次伤害后减伤)和 Revitalize(8453,治疗与护盾增幅)以前期续航。"
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "无位移无隐身的脆皮线霸"
      reason: "3-4 级 E cocoon 直接命中没有逃生手段的平面目标。Rappel(Spider E)施法中无敌,即使他 Flash 也能确认进塔。"
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "6 级前形态较弱的打野"
      reason: "Master Yi 6 级前不能单挑,Kayn 任务完成前形态锁定,Shyvana 缺乏稳定 CC。Elise 白嫖 Scuttle Crab 并反野把对面打到经济落后。"
    - examples: ["draven", "kalista", "samira"]
      archetype: "为人头过度压线的激进 ADC"
      reason: "他们的前置站位送上 cocoon 角度。在被推过河道的兵线上 3 级 gank,W slow + E stun 配合辅助 CC 通常直接拿人头。"
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "带硬 CC 反开的 tank 开团者"
      reason: "AOE CC 在 Rappel 落地或进塔 commit 之后抓住 Elise。两件套之后法术 burst 烫不动他们,Spider form 也没 disengage。"
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "带突进的强力前期 1v1 选手"
      reason: "若 cocoon 蓝量耗尽或 Rappel 时机失误,3 级 1v1 输给他们。不要侵入他们的河道:他们的位移会吃掉你唯一的逃生。"
    - examples: ["olaf", "garen"]
      archetype: "免疫 CC 的 diver(被动净化或大招免疫)"
      reason: "Olaf R 与 Garen Q 打断眩晕链并无视你唯一的起手。cocoon 不再命中后,Elise 的 all-in(完整 trade commit)崩塌,无逃生地被单挑致死。"
---

## 概述

> **缩写速记(读一次):** **ADC** = Attack Damage Carry,造成物理伤害的下路 (Caitlyn、Jinx)。**AP** = Ability Power,提升法术伤害的属性。**MR** = Magic Resist,法术防御。**CS** = Creep Score,补刀数。**CC** = Crowd Control,任何让英雄停下的效果(stun、slow、knock-up)。**Gank** = 打野到线上抓人。**Dive** = 进塔强杀。**Trade** = 线上短暂换血。**All-in** = 完全开打。**Snowball** = 越滚越大的优势(人头 → 金币 → 装备 → 更多人头)。

Elise 是 burst-mage diver — 一个先远程 poke 再彻底 commit 杀掉敌方后排的英雄。她的核心循环是用 Human form 的 **Cocoon (E)** 控住目标,再切到 **Spider Form (R)** 用 **Rappel (E)** 进塔与处决伤害收尾。她拥有游戏中最强的 6 级前打野:3 级就拥有全部四个伤害技能,几乎可以 1v1 击败任何其他打野。代价是高机械操作复杂度(form-swap 时机、skillshot 精度)与坦克堆 Magic Resist 后疲软的后期。

游戏计划:对位允许就 3 级入侵敌方野区,然后在击杀压力最大的线(脆皮 ADC、低血量中单)上 gank 来滚雪球(滚动放大的优势)。**Liandry's Torment** 在 11-13 分钟左右完成后,从 gank 重心切到资源控制 — 用 Rappel 当作 "blink"(短距即时位移)进塔、点掉优先目标,并强开 Drake 或 Rift Herald。

## 推荐出装

**起始装:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade**(远程打野起手)+ ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。

**核心装(顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade 的任务升级(吃够经验后 3-4 分钟自动进化)。AP burst 英雄的同伴:技能后下一次平 A 触发额外 magic damage proc(触发效果),与小规模团战中的 **Spider Q** 完美衔接。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件成装。每个法术附带 HP burn(几秒内分摊伤害),后续叠 **Rylai's** 提供无敌的单体持续伤害。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定 magic penetration,让 Q 和 E 对脆皮(防御低的英雄,如 ADC 与法师)更痛。
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 每个技能减速目标。与 **W**(本身减速)和 **Spider Q** 扑跃巨大协同。
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 生存装。主动让你在 Rappel 进塔后无敌 2.5 秒,给队友跟上的时间避免你被点死。
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 scaling 倍率器。最后买,冲到 1000+ AP。

**情境装:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对单体 magic crowd control (Ahri charm、Lissandra R、Twisted Fate stun)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 敌方两人或更多出 Magic Resist 装时。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 敌方有大量硬 CC(stuns、knock-ups)时换鞋。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 对治疗叠加阵容 (Soraka、Vladimir、Dr. Mundo);兼具 Magic Penetration。

**鞋子:** 默认 Sorcerer's Shoes。敌方有三个或更多硬 CC 来源时换 Mercury's Treads。

**技能加点:** 主升 **Q**(伤害与处决),副升 **E**(cocoon 冷却 — 冷却越短,眩晕越多),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Domination** 带 **Electrocute**、**Sudden Impact**、**Treasure Hunter**、**Ultimate Hunter**。副系 **Sorcery** 带 **Manaflow Band** 与 **Transcendence**。

## 关键对线

- **Lee Sin:** 你贪野怪到 3 级后他单挑赢你。追踪他的路径 — 他在下半区,就反他上半区的红 buff 或蓝 buff 营地。他消失时绝不去 face-check fog(没插眼的河道草丛)。
- **Graves:** 短 E (Quickdraw) 跑不掉 cocoon,所以 6 级前输给 Elise,但后期更强。10 分钟前进塔 gank 他两次,否则他到两件套就反超你。
- **Master Yi:** 前期免费对位。反他的第二个营地(他第三个清的那个),击杀,重复。Wit's End 加 Botrk 后他赢 1v1,所以胜利条件是 25 分钟前结束游戏。
- **Sejuani / Maokai:** 强力反开。等他们用完 AOE CC 再用 Rappel,绝不要先开。团战时绕到后排,不要从坦克墙正面切入。
- **Olaf:** 他的 R (Ragnarok) 在 cocoon 飞行途中净化眩晕。等他在某次进塔用掉,然后在他冷却的 6 秒内重开。

## 强势期与胜利条件

- **3 级:** 首次解锁 Spider form 与完整技能。这个窗口你拥有游戏内任何打野最强的 1v1 伤害 — 立刻入侵或 gank 一条过推的线。
- **6 级:** **R** 自由切换。Spider form 可以穿墙 disengage(给一点 move speed buff),gank 压力翻倍。
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment 完成(~ 11-13 分钟):** 第一波大 scaling。单体进塔现在两轮技能就秒掉 ADC 与法师。完成后立即强开 Drake 或 Rift Herald。
- **两件成装 + 鞋子(~ 16-18 分钟):** 巅峰窗口。之后随着敌方堆 Magic Resist,相对强度开始下滑;你的任务是把这个 lead 转化成 Baron 或 Elder Drake 的决策。

## 常见错误

- **把 E cocoon 当 poke 工具丢。** Cocoon 是你唯一的起手 — 失手就没有后续。等到目标 commit(low HP、Flash 用掉、被你的 **W** 减速)再施放。
- **没有 Flash 或 R 就用 Spider form 进塔。** Spider form 没有逃生手段(没位移、没护盾、不无敌)。如果 **R** 还在冷却,不要 commit;往后撤等 3 秒回来。
- **副升 W 而不是 E。** W 略微提升清野速度但对 gank 稳定性毫无加成。E 升级直接降低 cocoon 冷却并提升 Rappel 伤害 — 那才是你的伤害与 CC。
- **不留 Smite 给资源点,反而早点 Smite 河蟹。** 留着 Smite 抢 Drake 与 Rift Herald。河蟹的 70 金与 move speed buff 抵不上对面有 Smite 时输掉一条龙。
- **领先时团战在 Spider form 近身停留。** 杀完后排后切回 Human form 抛 cocoon 收尾。Spider form 是近战平 A 距离 — 作为 fed(雪球滚起来)Elise 还停在那只是把人头还回去。

## 进阶技巧

把 **Rappel (Spider E)** 当作 *防御性* blink 用,不只是进攻。当一个单挑英雄 commit 上你时,对一个 low HP 兵线小兵或自家野区里远处的小兵施放 Rappel:Elise 在抬升期间(~2 秒)无敌,足以躲掉 Lee Sin R 或 Vi Q 这种大招。冷却很短(5 级 10 秒)— 用它来保命通常比用来进攻能保住更多人头。
