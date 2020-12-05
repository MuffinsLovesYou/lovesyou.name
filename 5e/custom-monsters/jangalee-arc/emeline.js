export let monster = {
    Name : 'Emeline'
    , Size : 'Medium'
    , Type : 'humanoid (human)'
    , Alignment : 'Lawful Evil'
    , Speed : 30
    , Save : 'Cha +, Con +'
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : '6'
    , Defenses : { 
        Ac : '15 (natural armor)',
        Hp : 75, // 10d6 + 40
        Resist : 'Cold',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 9,
        Dex : 14, 
        Con : 16,
        Int : 12,
        Wis : 12, 
        Cha : 18
    }
    , Trait : [
        { Name : 'Elemental Affinity (cold)', Text : `When Emeline does cold damage with a spell, she adds her Charisma modifier to that damage.` }, 
        { Name : 'Careful Spell 4/day', Text : `When Emeline casts a spell taht forces other creatures to make a saving throw, she can choose 4 creatures to automatically 
            suceed on their saving throws against that spell.` },
        { Name : 'Heightened Spell 2/day', Text : `When Emeline casts a spell that forces a creature to make a saving throw, she can give one target of the spell disadvantage on 
            its first saving throw made against the spell.` },
        { Name : 'Spellcasting', Text : `Emeline is a 10th level spellcaster. her spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). She has 
            the following spells prepared: 
            <br>At will: Ray of Frost, Prestidigitation, Mage Hand
            <br>1st(4 slots): Thunderwave, Feather Fall
            <br>2nd(3 slots): Mirror Image, Enlarge/Reduce
            <br>3rd(3 slots): Counterspell, Fly
            <br>4th(3 slots): Ice Storm, Greater Invisibility
            <br>5th(2 slot): Teleportation Circle, Hold Monster` }
    ]
    , Action : [
        { Name : '', Text : ``}
    ]
    , Reaction : [
        { Name : 'Counterspell', Text : `You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, 
            its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's 
            level. On a success, the creature's spell fails and has no effect.` }
    ]
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}


export let Emeline = monster;

