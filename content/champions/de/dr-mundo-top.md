---
title: "Dr. Mundo Top Build & Guide — Patch 16.9"
slug: "dr-mundo-top"
language: "de"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Dr. Mundo Top Guide für League of Legends Patch 16.9: Heartsteel HP-Stacking Juggernaut-Build, Lane-Survival, wichtige Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Der erste hard CC (ein Stun, Root oder Knockup, der dich festsetzt) kostet Mundo nur HP und lässt eine Phiole fallen; aufheben heilt und resettet das Passiv. Gibt zusätzlich enorme HP-Regeneration."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Linearer Skillshot mit hoher Reichweite: magischer Schaden in Prozent der aktuellen HP des Ziels plus Slow. Kostet HP, kein Mana — deine Ressourcenleiste ist deine Lebensleiste. Hauptwerkzeug für Poke und Waveclear."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Selbst-Channel, der magischen Schaden auf nahe Gegner tickt und einen Teil des erlittenen Schadens speichert. Recast (oder Channel-Ende) entlädt einen Burst: trifft ein Champion, heilst du dich anteilig vom gespeicherten Schaden."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passiv: Bonus-AD, das mit den max. HP skaliert. Aktiv: Nahkampfschlag mit Extra-Schaden basierend auf deinen fehlenden HP. Ein Kill schleudert die Leiche und trifft Gegner auf der Flugbahn."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: sofortige Heilung eines Prozentsatzes der fehlenden HP, danach Bonus Move Speed und massive HP-Regen für die Dauer. Drück sie vor Fights und vor dem Tod, nicht danach."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap von Plated Steelcaps gegen 3+ CC-Quellen oder 2+ AP-Bedrohungen; Tenacity verkürzt Stun-Dauer"
    - dd_id: "3075"
      name: "Thornmail"
      against: "gegen Auto-Attack-Carries (Vayne, Tryndamere, Master Yi); reflektiert Schaden und appliziert Grievous Wounds (-50% Heilung)"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "gegen schwere AP-Poke-Comps mit 2+ ranged Magiern (Brand + Karthus, Ziggs + Xerath); MR + Move Speed gegen Magieschaden"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "gegen gruppierte AP-Wave-Clearer (Karthus, Brand, Anivia); Magic-Burn-Aura bestraft Kämpfe in deiner Nähe"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "gegen Single-Target AP-Burst (Syndra, Veigar, LeBlanc); Spellshield blockt den Combo-Opener"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Überlebe die Lane mit Q-Poke und W-Sustain, erreiche Heartsteel und Warmog's, dann lauf in die gegnerische Back Line bei voller HP-Regen und weigere dich lange genug zu sterben, damit dein Team aufräumt."
  weakness: "Kein hard CC und kein Dash. Ranged Tops kiten die Q außerhalb von 975 Reichweite; Healing-Cut-Items kappen W-Heal und R-Regen und verwandeln den Tank in einen langsam laufenden Minion."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
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
    primary_rationale: "Resolve: Grasp gibt alle 4s in Lane-Combat gratis HP und skaliert mit Mundos HP-Stack. Bone Plating frisst Bruiser-Burst, Conditioning gibt Armor und MR ab Minute 12, Overgrowth wandelt gefarmte Minions in permanente HP."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak gibt einen Move-Speed-Burst nach Flash oder Ghost (deine Engage-Summoner), und Gathering Storm liefert alle 10 Min Adaptive — genau das Late-Game-Scaling, das Mundos Win Condition will."
    secondary_alternative: "Gegen Early-Game-Lane-Bullies (Darius, Riven) Sorcery durch Inspiration ersetzen mit Biscuit Delivery (gratis Health Potions alle 2 Min vor Min 12) und Cosmic Insight (kürzere Summoner-Cooldowns); Scaling gegen pure Lane-Survival."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Kurzdistanz-Bruiser ohne Ranged-Poke"
      reason: "Mundos Q ist ein 975-Reichweiten-Slow, der HP statt Mana kostet, also chippt er sie jede Wave aus ihrer Auto-Attack-Reichweite heraus. Sie müssen zu ihm laufen, um Schaden zu machen, und seine W-Aura plus Spirit-Visage-Healing gewinnt jeden ausgedehnten Trade."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Assassinen mit einem einzigen Burst-Fenster"
      reason: "Ihr ganzes Schadensprofil ist eine Combo. Mundos Passiv frisst ihren ersten hard CC, R heilt sofort einen Prozentsatz der fehlenden HP, und W erstattet einen Teil des während des Bursts erlittenen Schadens — sie brennen ihre Cooldowns und Mundo geht fast voll heraus."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-Attack-Melees, die kleben müssen"
      reason: "Q-Slow plus Plated Steelcaps lähmt ihre Attack Uptime. Tryndameres R heilt ihn durch eine Rotation, aber ein Mundo mit R und Thornmail überlebt das Immunitätsfenster und chunkt ihn mit dem reflektierten Schaden."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Ranged Tops mit Percent-HP oder Blind"
      reason: "Vaynes W (true damage auf jeden dritten Auto, ignoriert alle Defensivwerte) und Teemos Q (ein Blind, der seine Auto-Attacks unterbindet) bypassen den ganzen HP-Stack. Quinns Reichweite plus passiver Blind hält Mundo dauerhaft außerhalb der Q-Reichweite."
    - examples: ["fiora"]
      archetype: "True-Damage-Duellanten"
      reason: "Fioras Vitals machen true damage (Schaden, der Armor und Magic Resist ignoriert — keine Defensivstat reduziert ihn). HP-Stacking nützt nichts gegen true damage; sie zerlegt ihn in einem einzigen Duell selbst Full Build."
    - examples: ["trundle"]
      archetype: "Anti-Tank-Champions, die Stats stehlen"
      reason: "Trundles R stiehlt Mundos Armor, MR und Move Speed für 8 Sekunden. Der true damage seines E-Passivs (basierend auf Bonus-AD aus HP) verstummt und seine einzige Escape (R-Speed-Boost) wird ebenfalls gestohlen. Das ganze Tank-Profil wird neutralisiert."
---

## Überblick

Dr. Mundo ist ein **Juggernaut Tank** (ein langsamer, immobiler Melee-Champion, der mit ein paar Items hart zuschlägt und gigantische HP plus HP-Regen mitbringt). Seine Identität steht auf drei Säulen: HP-Stacking via **Heartsteel** (jeder Champion, den du mit Auto-Attack triffst, stackt permanente HP auf das Item), HP-Regen aus **R** plus Spirit-Visage-Healing-Amp und das Drücken von **Q** in jedem Cooldown, um den Gegner aus 975 Reichweite zu chippen. Das **Passiv** ist die wichtigste Mechanik: der erste hard CC (ein Stun, Root oder Knockup, der dich festsetzt, sodass du dich nicht bewegen oder agieren kannst) wird reduziert — er kostet HP statt dich zu locken, und du lässt eine Phiole fallen, die du zum Heilen aufheben kannst. Das heißt: Sett oder Malphite haben genau eine Chance, dich zu locken, und danach läufst du in den nächsten 8-10 Sekunden durch ihr Team.

Der Game Plan ist „nicht sterben, niemals". In der Lane: **Wave freezen** (sie knapp außerhalb deines Towers stehen lassen, sodass der Gegner-Laner weit von seinem Tower weg muss, um Last-Hits zu nehmen) und mit Q aus maximaler Reichweite farmen. Ab Minute 14 überschreiten **Heartsteel** plus **Warmog's Armor** die Schwelle, ab der du so viel HP und Regen hast, dass das Gegnerteam Healing-Cut-Items braucht, um dir überhaupt wehzutun. Ab da beginnt jeder Fight damit, dass du langsam reinläufst, den ersten Stun frisst, R drückst und in der Back Line stehst (die squishy Carries, die hinter den Tanks ihres Teams Schaden machen), bis der Carry stirbt. Genau das bedeutet „Engage absorbieren": wenn der Gegner committet und mit einem Stun oder Dash reinspringt, ist es dein Job, der zu sein, der den Stun frisst.

## Empfohlener Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Das HP-Regen-Passiv von Doran's Shield mildert gegnerischen Poke ab (günstiger Ranged-Schaden, der HP wegchippt, ohne in einen Fight zu committen) und ist die richtige Wahl in fast jedem Mundo-Matchup, auch gegen Melee — der Game Plan lautet „bleib am Leben, farme, scale", nicht „gewinne Level 1".

**Core items (in der Reihenfolge):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — dein Identitäts-Item. Jeder Auto-Attack auf einen Champion lädt Heartsteel; beim Proc machst du massiven Bonus-Schaden und das Item gewinnt permanent stackende HP. Es gibt keine Obergrenze für die HP-Stacks, weshalb Mundo Top in Minute 35 Squishies mit einer einzigen E one-shottet. Kauf ihn in jeder Game als ersten Item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots, wenn die Hauptschadensquelle des Gegnerteams Auto-Attacks sind. Sie senken den eingehenden Schaden in ausgedehnten Fights.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — schaltet Mundos „out-of-combat heal to full in 4 Sekunden"-Passiv frei, sobald du die HP-Schwelle überschreitest (rund 3000 Bonus-HP, die Heartsteel + Warmog's-Komponenten zusammen erreichen). Das ist der Breakpoint, an dem kurze Side-Lane-Skirmishes (kleine Fights zwischen 1-3 Spielern) zwischen den Waves komplett geheilt werden.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — Magic Resist plus Healing-Amp-Passiv, das deinen **W**-Burst-Heal, deine **R**-Regen, Heals von Allies wie Soraka oder Yuumi und die Doran's-Shield-Ticks boostet. Kauf ihn als vierten gegen jedes Team mit mindestens einer AP-Bedrohung.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — dein erster Auto-Attack auf einen beliebigen Champion in einem Fight crittet und heilt dich um einen HP-Brocken. Passt perfekt zu dem Lifeline-Fenster, das dein Passiv erzeugt, und gibt dir einen kleinen Burst-Schaden-Spike, um Kills zu drohen, nicht nur zu überleben.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — wechsle von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Gegnerteam 3+ CC-Quellen oder 2+ AP-Champions hat. Tenacity (eine Stat, die die Dauer von Stuns und Slows auf dir verkürzt) ist die einzige Defense, die zählt, sobald die First-CC-Immunität deines Passivs verbraucht ist.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — gegen Auto-Attack-Carries (Vayne, Tryndamere, Master Yi). Reflektiert Schaden und appliziert **Grievous Wounds** (ein Debuff, der die Heilung des Ziels halbiert) on hit, der einzige Weg, einen Tryndamere oder eine fed Vayne davon abzuhalten, sich aus deiner W-Aura wieder zurückzuheilen.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — gegen schwere AP-Poke-Comps (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Stackt Magic Resist, während du Magieschaden bekommst, und gibt Move Speed — beides will Mundo.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — gegen gruppierte AP-Wave-Clearer (Karthus, Brand, Anivia). Die Magic-Burn-Aura tickt Schaden auf alle, die in deiner Nähe kämpfen, und gibt MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — gegen Single-Target-AP-Burst (Syndra, Veigar, LeBlanc). Der Spellshield (eine einmalige Barriere, die die nächste auf dich gerichtete Ability blockt) annulliert ihren Combo-Opener und resettet sich nach ein paar Sekunden out of combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist die Default-Wahl. Wechsle zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen schwere CC-Ketten oder AP-lastige Compositions.

**Skill order:** Maxe **Q** zuerst (Reichweite, Slow, Percent-Current-HP-Schaden skalieren alle pro Rang — das ist dein einziges Ranged-Tool). Maxe **E** als zweites (das Missing-HP-Aktiv skaliert hart mit Bonus-AD, und Heartsteel-Stacks befeuern es). Maxe **W** zuletzt; ein früher Punkt reicht für den Heal-on-Recast und den Aura-Schaden. Nimm **R** auf den Leveln 6, 11, 16.

**Runes:** Primary **Resolve** mit **Grasp of the Undying** — alle 4 Sekunden in Lane-Combat fügt dein nächster Auto-Attack auf einen Champion magischen Bonus-Schaden zu, heilt dich und gibt dir permanente HP. Kombiniere mit **Bone Plating** (Schadensreduktion auf die nächsten 3 Treffer, nachdem du Schaden bekommst), **Conditioning** (extra Armor und MR ab Minute 12) und **Overgrowth** (HP-Scaling mit dem Tod naher Minions — perfekt für einen Lane-Farmer). Secondary **Sorcery** mit **Nimbus Cloak** (Move-Speed-Burst nach Flash oder Ghost, beides häufige Mundo-Summoner) und **Gathering Storm** (Adaptive-Scaling alle 10 Minuten). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling** — extra HP überall, denn jede Defensivstat auf Mundo übersetzt sich in mehr effektive HP auf demselben Heartsteel-Stack.

## Wichtige Matchups

- **Darius:** Hartes Early Matchup. Sein Hemorrhage-Bleed (ein Damage-over-Time-Stack, der ramp-up je öfter er trifft) tickt durch deine HP-Regen und sein Pull cancelt die Wind-up deiner Q. **Freeze die Wave** nahe deinem Tower, nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** und akzeptiere CS-Verlust — sobald du ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** plus Warmog's-Komponenten hast, scalst du ihn ab Minute 14 jede Minute weiter aus.
- **Sett:** Günstiges Matchup. Spar dein **Passiv** für seine W (der dritte Auto-Attack stunt) — du frisst ihn für HP und gehst raus. Trade mit Q aus 975 Reichweite; er hat keine Antwort auf Long-Range-Poke und sein Self-Heal hält mit deinem Q-Chip nicht mit.
- **Vayne / Teemo:** Härteste mögliche Lane. Sie bleiben außerhalb der Q-Reichweite und nutzen **true damage** (Schaden, der sowohl Armor als auch Magic Resist ignoriert — keine Defensivstat reduziert ihn) oder einen Blind, der deine Auto-Attacks unterbindet. Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeze unter Tower und ruf deinen Jungler in dem Moment, in dem sie overextenden (ohne Vision über die River pushen). Kauf ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** Rush statt Spirit Visage, wenn Vayne snowballt.
- **Fiora:** Härtestes Melee-Matchup. Ihre **W** ist ein Parry (ein kurzer Schild, der die nächste Ability blockt und kontert — bait ihn mit einem Auto-Attack, bevor du Q oder E committest). Ihre Vitals machen true damage, also bringt HP-Stacking hier nichts. Rush ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel**-Komponenten und spiel auf Jungle-Ganks.
- **Mordekaiser:** Skill-Matchup. Seine R isoliert dich für 7 Sekunden in einem 1v1-Realm ohne Escape. Wenn er dich ulttet, bevor dein Passiv getriggert ist, sitzt du fest und stirbst. Wenn du **R** und Passiv up hast, überlebst du — die 7s-Realm-Window entspricht ungefähr der Dauer eines R-Casts. Spar **Flash**, um dich während des Realms aus seinem Q-Grab zu repositionieren.

## Power Spikes & Siegbedingungen

- **Level 6:** Erste **Maximum Dosage**. Schon auf Level 6 ohne Items verwandelt der Sofort-Heal von R plus Move Speed einen verlorenen Trade in eine Survival oder einen Kill. Such einen **All-In** (volles Commit zum Kill, kein Fallback), sobald dein Jungler top side zeigt und der Gegner-Laner unter 60% HP ist.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel-Completion (~ Minute 13-15):** Der erste echte Spike. Jeder erfolgreiche Proc auf einen Champion in der Lane gibt dir permanente HP, die nie verloren gehen, auch nicht beim Tod. Push die Wave, sobald Heartsteel online ist, und trade Autos durch Gegner-Minions, um Stacks zu banken.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + Heartsteel-Stacks (~ Minute 18-22):** Der Breakpoint, an dem Mundo in Side Lanes unkillable wird. Out-of-Combat-Regen springt an der neuen HP-Schwelle an; du kannst einen Fight bei 50% HP nehmen, zur nächsten Wave laufen und voll heilen, bis du dort ankommst.
- **3-Item-Spike mit ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ Minute 24-28):** Peak Teamfight Window. Healing-Amp boostet jeden Regen-Tick — R geht von „solide" zu „ich kriege diesen Typen nicht unter halbe HP". Erzwinge hier jeden Drake- und Baron-Fight; das Team braucht dich, um zuerst reinzulaufen und Engage zu absorbieren.

## Häufige Fehler

- **R drücken, nachdem du Schaden bekommen hast.** Der Sofort-Heal von R ist ein Prozentsatz der *fehlenden* HP, aber der Regen-over-Time-Anteil wird verschwendet, wenn du ihn bei 90% HP triggerst. Nutze R **bevor** du in einen Fight committest, nicht danach — du willst den Fight mit bereits laufender Regen betreten, sodass das Burst-Window gebuffert wird, nicht im Nachhinein verbunden.
- **Q-en bei vollen HP gegen einen gesunden Gegner.** Q kostet HP und macht Percent-Current-HP-Schaden. Sie auf einen 100%-HP-Gegner zu werfen, während du selbst bei 100% bist, tauscht nur deine HP gegen einen kleinen Chip — du verlierst den Trade. Nutze Q, nachdem ein Melee-Gegner durch Minion-Aggro HP verloren hat oder nachdem ein Allies-CC einen All-In öffnet.
- **Die Passiv-Phiole zu spät aufheben.** Die chemische Phiole (das grüne Fläschchen, das beim Passiv-Proc fällt) liegt ein paar Sekunden auf dem Boden, bevor sie verschwindet. Lässt du sie ablaufen, hast du das ganze Passiv verschwendet — kein Heal, keine Cooldown-Erstattung. Lauf in der Sekunde drüber, in der sie fällt, auch mitten im Fight.
- **Full Tank ohne Spirit Visage builden.** Jede Defensivstat von Mundo skaliert mit Healing-Amp. Ohne Spirit Visage heilt R weniger, W heilt weniger, Allies-Soraka heilt weniger. Ein Full-Tank-Mundo ohne Healing-Amp ist ein langsam laufender Minion; mit Spirit Visage strecken dieselben Items seine effektiven HP weit weiter.
- **Mit W-Toggle out of combat stehen.** **Heart Zapper** drainst HP pro Sekunde während des Channels. Wenn du sie für den Clear einschaltest und vergisst, kommst du schon mit 70% HP am Fight an. Recast vor dem Channel-Ende, jedes Mal.

## Fortgeschrittener Tipp

Übe den **Passive Bait** in Side-Lane-Skirmishes (1v1-Fights in der Top oder Bot Lane, während der Rest der Map woanders kämpft). Wenn der Gegner-Diver nur eine hard-CC-Ability up hat — sagen wir Setts W-Stun oder Renektons Stun — lauf sichtbar low HP in seine Lane. Er brennt das CC für den Commit, dein Passiv frisst es gratis, und du R-Q-E-AAst ihn unter deinen eigenen Minions, während er nichts mehr hat. Der Trick ist *sichtbar* low HP: steh offen bei 35-40%, kassier ein paar Autos, um zu bestätigen, dass der Gegner committet, und geh dann in den Trade. Ein Mundo mit Passiv und R off Cooldown und 50%+ HP hinter den feindlichen Linien ist eine der stärksten 1v1-Bedrohungen im Spiel; der Bait erschafft das Szenario.
