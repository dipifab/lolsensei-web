---
title: "Aatrox Top: Build e Guida — Patch 16.9"
slug: "aatrox-top"
language: "it"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Guida ad Aatrox top per League of Legends Patch 16.9: build da bruiser, meccanica del Q sul bordo, matchup chiave, power spikes, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodicamente la prossima auto-attack infligge danno magico bonus basato sui max HP del bersaglio e cura Aatrox. Tieni d'occhio l'indicatore sul portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Slash con uno spadone a tre cast in sequenza, ognuno di forma diversa. Colpire il bordo esterno fa knock-up e infligge il 25% di danno in più. È la principale fonte di danno di Aatrox."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Catena che rallenta il primo bersaglio. Se un campione o un monster grande non esce dalla zona di impatto in tempo, viene tirato indietro al centro e subisce di nuovo lo stesso danno."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: cura una porzione del danno inflitto ai campioni (lifesteal). Active: dash breve, usabile durante il windup di Q per allineare il colpo sul bordo o per kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Forma demoniaca: AD bonus, Move Speed che decade nel tempo, e self-healing aumentato. Fa fear ai minion vicini. Ogni takedown estende la durata."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha tanto danno magico o catene di CC (es. Lissandra, Sett, ulti di Malphite)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Vex, Fizz mid che passa top): lo spell shield blocca un grosso colpo magico e salva l'engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti AD dealer (Yasuo + Caitlyn): trasforma il burst AD in un sanguinamento lento, E lifesteal lo cura indietro"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro lockdown single-target che ti spegne sull'engage (Q di Morgana, hook di Blitzcrank, R di Lissandra)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "comprala come componente prima di finire Eclipse se stai perdendo HP contro un top AP (Vladimir, Rumble) e ti serve MR prima del back"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Colpisci il bordo della Q per knock-up, blocca con W, e usa E per riallineare. Trasforma il vantaggio Eclipse + Black Cleaver in vittorie 1v1 in side lane."
  weakness: "Tutto il danno è sul timing della Q. Sbagli il bordo, perdi il trade. Hard CC, kiter a lungo raggio e duellanti a true damage (Fiora, Camille) sgretolano la sua sustain."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Fighter melee immobili senza tool di engage"
      reason: "Aatrox vince i trade prima del livello 6 con i Q sul bordo; la W li tiene fermi abbastanza a lungo che non possono accumulare cariche delle loro passive in sicurezza né scappare al suo all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Mage a corto raggio che devono entrare per fare danno"
      reason: "Devono mettersi a distanza melee per il danno pieno; Aatrox punisce il gap con lo slow della W + Q sul bordo per knock-up prima che possano disimpegnarsi."
    - examples: ["kayle", "k-sante"]
      archetype: "Lane early debole che esplodono late"
      reason: "Aatrox ha una delle migliori curve di laning early; può ucciderli o negar loro l'XP prima che arrivino agli item late-game che li rendono pericolosi."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "Duellanti a true damage con parry o scudo"
      reason: "La W di Fiora fa parry sul knock-up della Q e i Vitals (marker che lei mette su Aatrox e colpisce con auto a true damage — danno che ignora armor e MR) ignorano la build drain tank; la E di Camille aggiunge altro true damage sopra."
    - examples: ["quinn", "teemo"]
      archetype: "Kiter a lungo raggio o con invisibilità"
      reason: "Restano fuori dal range della Q e rompono i wind-up di Aatrox con blind o vault (il dash di Quinn che lo respinge); lui non ha modo di chiudere il gap senza bruciare E e Flash a vuoto."
    - examples: ["malphite", "maokai"]
      archetype: "Tank con CC istantaneo (senza mira)"
      reason: "Le loro stun e root sono point-and-click — niente proiettile da schivare. Interrompono i recast della Q a metà animazione, e una volta che Aatrox è bloccato dal CC non può curare di nuovo via E lifesteal."
---

## Overview

Reduced body for fixture (WPCP-004). Real frontmatter retained for builder tests.
