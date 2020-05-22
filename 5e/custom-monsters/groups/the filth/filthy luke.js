
/*
lvl 7 College of Whispers bard. 
*/

export let monster = {
    Name : 'Filthy Luke',
    Size : 'Medium',
    Type : 'humanoid',
    Alignment : 'Lawful Evil',
    Skill : 'Deception +10, Intimidation +10, Stealth +6',
    Speed : '40',
    Save : 'cha+7, dex+6',
    Senses : 'Darkvision 150ft',
    Languages : 'Common, dwarven, elven',
    Challenge : '3',
    Defenses : {
        Ac : '16 st. leather',
        Hp : '54 (7d8+14)',
        Resist : '',
        Immune : '',
        ConditionImmune: ''
    }

    , Stats : {
        Str : 8,
        Dex : 16,
        Con : 14, 
        Int : 10, 
        Wis : 12,
        Cha : 18
    }
    , Trait : [
        { Name : 'Mantle of Whispers', Text : `When a humanoid dies within 30 feet of Luke, he can 
        use his reaction to magically capture its shadow. He retains the shadow until he uses it or 
        finishes a long rest. 
        <br>He can use the shadow as an action, magically transforming into a disguise of that person 
        for one hour. While wearing the shadow, he has access to any information they would freely share, 
        but not secrets. He gains +5 to deception checks to pass himself off as that person. ` },
        { Name : 'Bardic Inspiration', Text : `4/short rest. d8. ` },
        { Name : 'Spellcasting', Text : `
        Luke is a level 7 spellcaster. His spellcasting ability is Charisma (DC 15 save +7 to hit)
        <br>1st level (4 slots): cure wounds, identify, disguise self
        <br>2nd level (3 slots): hold person, detect thoughts, heat metal
        <br>3rd level (3 slots): glyph of warding, stinking cloud
        <br>4th level (1 slots): greater invisibility, freedom of movement` },
    ]
    , Action : [
        { Name : 'Hand Crossbow', Text : `Ranged weapon attack +6 to hit, range 40/80. Hit 12 (1d4+3+3d6 psychic)` }
    ]
    , Reaction : [
    ]
    , Legendary : []
    , Items : [
        { Name : 'Philter of Love', Text : `DMG 184. After imbibe, charmed for 1 hour by first creature seen. ` }
        , { Name : 'Potion of Greater Healing', Text : `4d4+4 hp` }
        , { Name : 'Scroll of Glyph of Warding', Text : ''}
        , { Name : 'Jewelry', Text : `While few of the pieces are particularly ornate, Luke has a lot of 
        small pieces of jewelry. He has 14 gold teeth, 2 gold rings, 3 silver bracelets, 7 earrings with 
        low quality amethist, citrine, and tourmaline gems. His clothes are fine. ` }
    ]
}
