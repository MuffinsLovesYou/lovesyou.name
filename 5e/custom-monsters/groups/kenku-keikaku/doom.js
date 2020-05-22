define([],()=>{

    /* Doom: level 11 death cleric
    
    */

    return {
        Name : 'Doom'
        , Size : 'Medium'
        , Type : 'humanoid (kenku)'
        , Alignment : ''
        , Speed : 30
        , Save : ''
        , Skill : ''
        , Senses : ''
        , Languages : ''
        , Challenge : ''
        , Defenses : { 
            Ac : '17 (Half Plate)',
            Hp : 20,
            Resist : '',
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 10,
            Dex : 14, 
            Con : 14,
            Int : 10,
            Wis : 20, 
            Cha : 8
        }
        , Trait : [
            { Name : 'Spellcasting', Text : `Doom is an 11th level spellcaster. Her spellcasting 
                ability is Wisdom (DC 17 spell save +9 to hit with spell attacks). She has the 
                following spells prepared: 
                <br>Cantrips: 
                <br>1st (4 slots): false life, healing word, inflict wounds
                <br>2nd (3 slots): ray of enfeeblement, hold person, spiritual weapon
                <br>3rd (3 slots): vampiric touch, mass healing word, spirit guardians
                <br>4th (3 slots): blight, banishment, 
                <br>5th (2 slots): mass cure wounds, greater restoration
                <br>6th (1 slots): heal` },
            { Name : 'Touch of Death 2/long rest', 
                Text : `Doom can destroy another creature's life force by touch.
                when Doom hits a creature with a melee attack, Doom can deal 27 extra
                necrotic damage to the target. ` }
        ]
        , Action : [
            { Name : '', Text : ``}
        ]
        , Reaction : []
        , Legendary : [
            { Name : '', Text : ``}
        ]
        , Items : [
            { Name : 'Dagger of Venom', 
                Text : `+1 dagger. 1/day it can be coated in poison for one minute. 
                On hit, a creature must succeed on a DC 15 constitution saving throw 
                or suffer 2d10 poison damage and be poisoned for 1 minute.`}
        ]
    }
    });
    
    
    