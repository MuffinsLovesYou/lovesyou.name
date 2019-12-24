define([], ()=>{


    return {
        "Name": "Death Priest",
        "Alignment": "any alignment",
        "Challenge": "9",
        "Languages": "any two languages",
        "Size": "Medium",
        "Speed": "30 ft.",
        "Type": "humanoid (any race), Volo's Guide",
        "Stats": {
            "Str": "16(+3)",
            "Dex": "10(+0)",
            "Con": "14(+2)",
            "Int": "11(+0)",
            "Wis": "17(+3)",
            "Cha": "13(+1)"
        },
        "Defenses": {
            "Ac": "16 (breastplate)",
            "Hp": "117 (18d8+36)",
            "Immune": "",
            "Saves": "Con +6, Wis +7"
        },
        "Action": [
            {
            "Name": "Multiattack",
            "Text": "The priest makes two melee attacks."
            },
            {
            "Name": "Reaper (War Scythe)",
            "Text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10 +3) bludgeoning damage plus 4 (1d8) necrotic damage."
            }
        ],
        "Legendary": [],
        "Reaction": [],
        "Trait": [
            {
            "Name": "Guided Strike (Recharges after a Short or Long Rest)",
            "Text": "When the priest hits with a melee attack, they can add 23 necrotic damage to the damage roll."
            },
            {
            "Name": "Spellcasting",
            "Text": `The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). It has the following cleric spells prepared:<br>
            <br>Cantrips (at will): light, mending, chill touch, spare the dying 
            <br>1st level (4 slots): false life, ray of sickness, healing word, sanctuary
            <br>2nd level (3 slots): blindness/deafness, ray of enfeeblement, prayer of healing, silence, spiritual weapon
            <br>3rd level (3 slots): animate dead, vampiric touch, dispel magic, revivify, spirit guardians, bestow curse
            <br>4th level (3 slots): blight, death ward, guardian of faith, locate creature
            <br>5th level (1 slot): antilife shell, cloudkill, contagion`
            }
        ]
    };


});