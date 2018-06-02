define([],()=>{

    return {
        Name : 'Rinarv Bittershaper',
        Size : 'Medium',
        Type : 'humanoid',
        Alignment : 'Lawful Evil',
        Speed : '25',
        Save : 'will, con',
        Senses : 'Darkvision 60ft',
        Languages : 'Dwarven, Common, Orc',
        Challenge : '10',
        Defenses : {
            Ac : '14 (breastplate)',
            Hp : 98,
            Resist : '',
            Immune : '',
            ConditionImmune: ''
        }
        , Stats : {
            Str : 8,
            Dex : 11,
            Con : 14, 
            Int : 12, 
            Wis : 18,
            Cha : 12
        }
        , Trait : [
            { Name : 'Reaper 2/day', Text : `When Rinarv casts a spell level 0-5 that targets only 
            one creature, she can instead target two creatures within range and within 5 feet of one another.`}
        ]
        , Action : [
            { Name : 'Spellcasting', Text : `Rinarv is a 12th level spellcaster. Her spellcasting modifier is wisdom 
            (spell save DC 16 +8 to hit with spell attacks).
            <br>Cantrips (at will): chill touch, thaumaturgy, mending
            <br>1st level (4 slots): ray of sickness, command, cure wounds
            <br>2nd level (3 slots): ray of enfeeblement, blindness/deafness, augury
            <br>3rd level (3 slots): dispel magic, spirit guardians, meld to stone
            <br>4th level (3 slots): death ward, guardian of faith, divination
            <br>5th level (2 slots): antilife shell, scrying
            <br>6th level (1 slot): planar ally, heal` }
        ]
        , Reaction : []
        , Legendary : []
        , Items : [
            { Name : 'Augury Tokens', Text : `25gp art object. This is a set of 28 humanoid finger bones with 
            dwarven runes inked in to them.`},
            { Name : 'Divination Tokens x4', Text : `25gp art objects. Each token is a dried out eye doused in myrrh.`},
            { Name : 'Shield Guardian Talisman', Text : `1000gp Topaz pendant that controls her shield guardian. The guardian 
            has the spell 'Spirit Guardians' stored.`}
        ]
    }

});