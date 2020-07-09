export let monster = {
    Name: "Jangalee Pashu",
    Alignment: "lawful evil",
    Challenge: "13",
    Languages: "Common, Infernal",
    Size: "Medium",
    Speed: "40 ft.",
    Type: "fiend (Rakshasa), monster manual",
    Senses: "darkvision 60 ft.",
    Stats: {
        "Str":"14(+2)",
        "Dex":"18(+4)",
        "Con":"18(+4)",
        "Int":"13(+1)",
        "Wis":"16(+3)",
        "Cha":"20(+5)"
    },
    Defenses: {
        "Ac":"17 (natural armor)",
        "Hp":"139 (16d8+68)",
        "Immune":"bludgeoning, piercing, and slashing from nonmagical weapons",
        "Vulnerable":"piercing from magic weapons wielded by good creatures"
    },
    Action: [
        {
            Name: "Multiattack",
            Text: "Jangalee makes two claw attacks"
        },
        {
            Name: "Claw",
            Text: `Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) 
                slashing damage, and the target is cursed if it is a creature. The magical 
                curse takes effect whenever the target takes a short or long rest, filling the 
                target's thoughts with horrible images and dreams. The cursed target gains no 
                benefit from finishing a short or long rest. The curse lasts until it is lifted 
                by a remove curse spell or similar magic.`
        }
    ],
    Legendary: [
        { Name: 'Claw attack', Text: 'Jangalee makes one claw attack.' },
        { Name: 'Misty Step (Costs 2 actions)', Text: 'Jangalee casts Misty Step as an innate spell.' },
        { Name: 'Mislead (Costs 3 actions)', Text: 'Jangelee casts the Mislead as an innate spell.' },
    ],
    Reaction: [],
    Trait: [
        {
            Name: "Limited Magic Immunity",
            Text: `Jangalee can't be affected or detected by spells of 6th level or 
                lower unless it wishes to be. It has advantage on saving throws against all 
                other spells and magical effects.`
        },
        {
            Name: "Innate Spellcasting",
            Text: `Jangalee innate spellcasting ability is Charisma 
                (spell save DC 18, +10 to hit with spell attacks). Jangalee can innately cast 
                the following spells, requiring no material components: 
                <br>At will: detect thoughts, disguise self, mage hand, minor illusion
                <br>3/day each: charm person, detect magic, invisibility, major image, suggestion
                <br>1/day each: dominate person, fly, plane shift, true seeing`
        }
    ], 
    Items: [
        { Name : 'Robe of Nondetection (Very rare, requires attunement)', Text : `While worn, the wearer 
            of these robes is under the effect of a Nondetection spell.` }
    ]
}