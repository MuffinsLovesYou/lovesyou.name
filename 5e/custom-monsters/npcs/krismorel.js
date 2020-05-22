

/* Legendary High elf Oath of the Ancients Paladin. */
export let monster = {
    Name : 'Krismorel Bearcharger', 
    Size : 'Medium', 
    Type : 'Humanoid', 
    Alignment : 'chaotic good',
    Speed : '30 ft.', 
    Senses : 'Darkvision 60ft',
    Save : "Str +11, Cha +11",
    Languages : 'Elven, Common, Dwarven',
    Defenses : {
        Ac : '20 (dwarven plate +2)',
        Hp : '204 (20d10+80)',
        Immune : 'Disease',
        ConditionImmune : '',
    }, 
    Stats : {
        Str : 20,
        Dex : 12,
        Con : 18,
        Int : 12,
        Wis : 16,
        Cha : 20
    },
    Challenge : '20', 
    Trait : [ 
        { Name : 'Regeneration', Text : 'Krismorel regains 10 hit points at the start of her turn if she has at least 1 hp.' }, 
        { Name : 'Lay on hands', Text : `Krismorel has a pool of healing power up to 100hp. As an action she can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in her pool.` },
        { Name : 'Aura of Protection', Text : `Krismorel and allies within 10 feet have +5 to saving throws` },
        { Name : 'Aura of Warding', Text : 'Krismorel and allies within 10 feet have resistance to damage from spells.' }, 
        { Name : 'Spellcasting', Text : `Krismorel is a level 20 spellcaster. Her spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). She has 
        the following spells prepared: 
        <br>1st level (4 slots): compelled duel, cure wounds, protection from evil and good   
        <br>2nd level (3 slots): lesser restoration, protection from poison, 
        <br>3rd level (3 slots): dispel magic, remove curse,
        <br>4th level (3 slots): banishment, ice storm  
        <br>5th level (2 slots): destructive wave, tree stride`}
    ], 
    Action : [
        { Name : 'Multiattack', Text : `Krismorel makes two attacks with her Answerer.`},
        { Name : 'Answerer', Text : `Melee weapon attack +14 to hit, reach 5 ft., one target.
        Hit: 12 (1d8 + 8) slashing damage + 8 (2d8) radiant damage. `}
    ], 
    Reaction : [
        { Name : 'Answerer', Text : `When attacked by an enemy in reach, Krismorel can make one 
        melee attack as a reaction against that enemy. `}
    ], 
    //spells : `comeplled duel, cure wounds, lesser restoration, protection from poison, 
    //dispel magic, remove curse, banishment, ice storm, circle of power, tree stride`, Slots : '4,3,3,3,2,0,0,0,0',
    Legendary : [
        { Name : `Elder Champion(Costs 2 actions)`, Text : `Krismorel can cast a spell. Enemies within 10 feet of her have disadvantage  against the spell.`},
        { Name : 'Misty Step', Text : `Krismorel can teleport 30 feet instantly.`},
        { Name : `Nature's Wrath`, Text : `Krismorel can cause vines to ensnare a creature. It must succeed on a strength or dexterity saving throw which it can make at the start of each of its turns. Enemies within 10 feet of her have disadvantage on the saving throw. ` }
    ], 
    items : [
        { Name : 'Dwarven Plate', Text : `Plate armor +2. Reduce forced movement by 10` },
        { Name : 'Answerer', Text : `+3 longsword. Allows a weapon attack with advantage as a reaction.`},
        { Name : 'Haversack', Text : `Handy Haversack.`},
        { Name : `Oil of Slipperiness`, Text : `10 minutes to apply. Freedom of movement 8 hours.`},
        { Name : 'Potion of superior healing', Text : '8d4+8'},
        { Name : 'Potion of invulnerability', Text : `Restistance all 1 hour`},
        { Name : `Potion of speed`, Text : `Haste for 1 minute.`}
    ]
}
