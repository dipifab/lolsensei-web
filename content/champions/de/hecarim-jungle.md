---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "de"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Hecarim Jungle Guide für League of Legends Patch 16.9: Clear-Path, Gank-Muster, Bruiser-Build, wichtige Matchups, Power Spikes, Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim wandelt einen Prozentsatz seiner Bonus Move Speed in Attack Damage. Jedes Speed-Item ist auch ein Damage-Item."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "AoE-Schlag auf umliegende Gegner mit physischem Schaden. Treffer stacken einen Buff, der Cooldown senkt und Schaden erhöht. Haupt-Clear- und DPS-Knopf."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "AoE-Magieschadenszone, die Hecarim basierend auf dem Schaden heilt, den Gegner darin nehmen. Sustain im Clear und beim Turm-Dive."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Steigende Move Speed plus Ghost (durch Einheiten laufen). Nächste Auto-Attack knockt zurück mit Schaden je nach gelaufener Distanz. Core-Gank-Tool."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Lineare Charge mit Magieschaden und Fear auf am Ende getroffene Gegner. Long-Range-Engage und -Disengage für Teamfights."
      dd_spell_id: "HecarimUlt"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs viel CC oder Magieschaden (Lissandra, Syndra, Brand): swap statt Plated Steelcaps, wenn CC mehr wiegt als Armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs Frontline-Tanks (Ornn, Sion): Armor-Shred aus Autos und Q-Stacks hilft auch dem Team"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs Teams ohne Tanks, wenn Wave Clear und Splitpush gefragt sind (Side-Lane allein pushen, um Reaktion zu erzwingen)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs Comps ohne echten Burst (4-5 Fighter/Tanks): mehr Ability Haste und R-Uptime in langen Fights"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs schwere AP-Teams (Brand + Karthus + Vladimir): Magic Resist plus passive Move Speed füttert Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "wenn du als Engage-Tool zuerst gefocust wirst: ein zweites Leben gratis lässt dich tiefer committen"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Nutze die steigende Move Speed von E und Phase Rush, um squishy Targets (fragile Damage Carries wie ADCs) zu flanken, follow-up mit dem R-Fear, dann Q-Cycle während W dich durch ihren Burst heilt."
  weakness: "Schwach vor Level 3 und fragil, wenn E im Cooldown ist. Hard CC wie Roots (Morgana Q, Lillia R) oder Grounds (Cassiopeia W) töten den Engage und lassen dich ohne Escape stehen."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Langsame Tank-Jungler ohne starken Early-Gank"
      reason: "Hecarim out-cleart sie und erreicht Level 3 zuerst; er kann ihren zweiten Buff invaden oder eine Lane counter-ganken, bevor sie auftauchen. Sein Speed-Scaling schlägt ihr Stat-Scaling."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Squishy Enchanters ohne Self-Peel"
      reason: "E + R lässt Hecarim den Carry aus dem Off-Screen einholen und fearen; sobald der Support fällt, hat der gegnerische ADC keine Shields mehr und bricht in Sekunden zusammen."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "Immobile ADCs oder mit kurzem Dash"
      reason: "Phase Rush plus E-Charge schließen die Lücke, bevor sie kiten können; ihre einzige Flucht (Flash) hat einen viel längeren Cooldown als dein Engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champions mit Roots, Slows oder Grounds, die Bewegung blockieren"
      reason: "Hecarims gesamtes Kit skaliert mit Move Speed (Warpath wandelt Bonus-Speed in Attack Damage). Einmal gerooted oder grounded, verliert er sowohl Schaden als auch die Disengage-Option."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Starke Early-Game-Ganker und Invader"
      reason: "Hecarim ist vor Level 3 schwach. Diese Jungler können seinen zweiten Buff invaden, ihn töten oder seinen Flash brennen und snowballen, bevor er online geht."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Duell-Bruiser, die Single-Target-Dives bestrafen"
      reason: "Wenn Hecarim alleine engaget (kein Team für Follow-up), out-traden sie ihn 1v1 mit Anti-AD-Passives oder True Damage und machen aus seinem Commit einen Free Kill."
---

## Überblick

Hecarim ist ein schneller Diver-Jungler — ein Fighter, der riesige Distanzen schließt, den Gegner in sein eigenes Team zurück-knockt und dann dank **Devastating Charge (E)** und **Onslaught of Shadows (R)** wie eine Klette dranbleibt. Seine Passive **Warpath** verwandelt jeden Punkt Bonus Move Speed in Attack Damage — Speed-Items sind also auch Damage-Items. Das Kit ist einfach zu lesen, aber anspruchsvoll im Timing: du verbringst den Großteil der Game als mobile Bedrohung, die exposierte Carries (Damage Dealer mit niedrigen Defenses wie ADCs und Mages) bestraft.

Der Game Plan ist wiederholbar. Schnell clearen mit **Rampage (Q)** und **Spirit of Dread (W)**, um Level 3 zu erreichen, dann nach Early Ganks auf der Lane suchen, die den besten E-Charge-Winkel bietet (lange, gerade Lanes sind am besten). Ab Mid Game ist dein Job, mit **R** zu flanken (von einer Seite ins Fight kommen, die niemand beobachtet), die gegnerische Backline zu fearen und **E**-Knockbacks zu ketten, bis alles fällt.

## Empfohlener Build

**Starter-Items:** Mosstomper Seedling (oder Gustwalker Hatchling, wenn du extra Out-of-Combat-Speed willst) + Refillable Potion. Mosstomper gibt einen Shield bei vollen HP — perfekt, um den ersten Clear zu überleben.

**Core-Items (in Reihenfolge):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — dein AD-Spike plus eine aktive Slow (Halting Slash). Slow on Demand ist der Unterschied zwischen einem Gank, der die Kill schließt, und einem, in dem der Gegner mit Flash entkommt.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Armor gegen Auto-Attack-Schaden. Default-Boots, wenn das Gegnerteam 2+ AD-Bedrohungen hat.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity und ein großer Shield bei schwerem Schaden. Das ist das Item, mit dem du wirklich in Fights committen kannst (voll engagen ohne Rückzug) und lange genug überlebst, um Abilities zu cyclen.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — wandelt erhaltenen physischen Schaden in eine langsame Blutung (Schaden über die nächsten Sekunden verteilt statt sofort). Refilled außerdem HP auf Takedowns, also kannst du All-in gehen (voll committen bis zur Kill) und gesund rausspazieren.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantiert einen kritischen Treffer auf deine erste Auto im Fight (perfekt mit dem **E**-Knockback) und heilt dich für ein ordentliches Stück HP. Spielt mit Stridebreaker, weil beide Items wollen, dass du Autos zwischen Abilities einbaust.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — statt Plated Steelcaps, wenn das Gegnerteam viel Crowd Control oder Magieschaden hat (Lissandra, Syndra, Brand). Tenacity reduziert die Stun-Dauer, sodass du **R** trotzdem casten kannst.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs Frontline-Tanks (Ornn, Sion). Auto-Attacks und **Q**-Stacks shredden Armor für das ganze Team.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — wenn du eine Side-Lane splitpushen willst (allein pushen, um eine Antwort zu erzwingen) und mehr Wave Clear plus Omnivamp brauchst.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs langsame Comps ohne Burst. Mehr Ability Haste = mehr **R**-Fears und mehr **Q**-Spam in langgezogenen Fights.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs schwere AP-Teams (Brand + Karthus + Vladimir). Stack-Magic-Resist und passive Move Speed sind Doppelnutzen mit Warpath: mehr Speed = mehr AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — wenn das Gegnerteam dich beim Engage focust. Revived dich, um den Fight aufzuräumen, nachdem dein Team seine Abilities schon ausgegeben hat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** als Default; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn CC mehr wiegt als Auto-Attack-Schaden.

**Skill-Order:** Maxe **Q** zuerst (Waveclear, Jungle Clear, Haupt-DPS), **E** als zweites (längere Ghost-Dauer und niedrigerer Cooldown für Ganks), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Sorcery** mit **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush triggert nach 3 separaten Ability-Treffern in 4 Sekunden — easy auf Hecarim mit **E**-auto-**Q** im Gank, und der Move-Speed-Burst wird via Warpath zu AD. Sekundär **Resolve** mit **Bone Plating** und **Overgrowth**. Nimm Conqueror in Precision, wenn das Gegnerteam viele Frontline-Tanks hat (du willst stackenden Schaden in langen Fights).

## Wichtige Matchups

- **Lillia:** Ihr **R** rooted dich quer über die Map. Bait es raus, indem du mit niedrigen HP vorlaufst, und commit erst, nachdem sie es benutzt hat. Trifft sie, ist dein Engage-Window für 14+ Sekunden zu.
- **Kha'Zix:** Starker Invader und Assassine. Track ihn — wenn sein Blue Buff um 2:30 fehlt, ist er in deiner Jungle. Pathing weg von seiner erwarteten Route bis Level 4, dann group dich mit deinen Lanern für den Rest des Early Game.
- **Jarvan IV:** Spiegel-Engage-Matchup. Wer zuerst ulted, gewinnt meist den Trade. Halt Wards in seiner Jungle, um Jarvan zu spotten und deine Laner zurückzurufen; group dich nie mit Allies in engen Spots, wenn sein **R** up ist.
- **Sejuani:** Tank-Jungler, der scaled. Du out-cleart sie und out-pressurest sie früh. Erzwing Fights vor Minute 20; im Late Game schlagen ihre Stuns und ihr Team-Peel deinen Single-Dive.
- **Master Yi:** Pass auf dein **R** auf. Yi kann den Fear mit der **Q**-**Alpha-Strike**-Invuln-Kette cleansen. Heb **R** auf, wenn sein **Q** im Cooldown ist — warte, bis du ihn auf einer Wave oder einem Camp casten siehst, dann engage in den nächsten 12 Sekunden.

## Power Spikes & Siegbedingungen

- **Level 3 (nach dem ersten vollen Clear):** erstes Gank-Window. Mit Punkten in **Q**-**E**-**W** kannst du ein Target full-comboen, das übersteppt. Crab-Fights werden real — du kommst schneller als die meisten Jungler.
- **Level 6:** Onslaught of Shadows online. Cross-Map-Flanks und Turm-Dives werden möglich. Hat eine Side-Lane Prio, **R** aus dem Fog rein und force den Fight.
- **Stridebreaker fertig (~ Minute 10-12):** großer Tempo-Flip. Die aktive Halting Slash lässt dich an fliehenden Targets kleben, ohne **E** zu brennen. Direkt danach Drake oder Herald pushen.
- **Sterak's Gage online (~ Minute 22-25):** du wirst zum Engage-Tool, das die ersten 2 Sekunden des Fights überlebt. Such Picks (isolierten Gegner außerhalb des Teamfights eliminieren) auf den gegnerischen ADC oder Mid-Laner um Objectives.

## Häufige Fehler

- **Q-Spammen ohne Auto-Attacks zwischen den Casts.** Warpath gibt dir AD aus Speed — lass die Autos in den Lücken landen. Animation Cancel: cast **Q**, hard-click eine Auto, cast **Q** wieder.
- **R in die Frontline.** **R** ist ein Flank-Tool, kein Frontal-Engage. Den Tank zu fearen schickt ihn zurück zum ADC für Peel. Lauf ums Fight herum (nutz Vision oder Fog), dann **R** durch die Carries.
- **Engagen ohne Team in Sichtweite.** Hecarims gesamter Schaden ist "knock sie zurück ins Team, das nachzieht". Wenn deine Laner nicht in 2 Sekunden Catch-up-Distanz sind, geht die Kill an niemanden und du stirbst in ihrer Jungle.
- **Full Damage bauen bei 1/3-Score.** Wenn du hinten liegst und nicht snowballst (Snowball = wachsender Vorteil, der sich selbst füttert), halten Sterak's plus Sundered Sky dich als Engage nützlich. Ravenous Hydra second auf einem verlorenen Game macht dich zum 2-Shot-Dive-Bot.
- **E-Ghost auf Minions verschwenden.** **E** lässt dich nur in seinem kurzen Window durch Einheiten laufen. Heb es auf für den Moment, in dem du durch eine Wave oder einen Ward musst — verbrenn es nicht on-Cooldown in der Jungle.

## Fortgeschrittener Tipp

Nutze eine "Fake-Flank"-Rotation um Mid-Game-Objectives. Lauf in deine eigene Jungle in Vision, damit der Gegner dich auf seiner Minimap trackt, dann sofort zurück in den Fog of War (die dunklen Bereiche, die du nicht siehst) und dreh den langen Bogen. Wenn der Gegner sich gedreht hat in der Annahme, du seist noch dort, wo er dich zuletzt gesehen hat, **R** von der Seite, die er nicht erwartet. Der Trick hängt an Hecarims roher Move Speed: die meisten Jungler kriegen das nicht hin, weil sie die Distanz nicht in der Zeit schaffen. Mit Phase Rush plus Stridebreaker active schaffst du es.
