define([],()=>{

    return {
        Name : 'Guard Drake'
        , Size : 'Medium'
        , Type : 'dragon'
        , Alignment : 'unaligned'
        , Speed : 30
        , Save : ''
        , Skill : 'Perception +2'
        , Senses : 'Darkvision 60ft'
        , Languages : 'can understand Draconic, but cannot speak'
        , Challenge : '2'
        , Defenses : { 
            Ac : '15 (natural armor)',
            Hp : '52 (7d8+21)',
            Resist : `Acid.`,
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 16,
            Dex : 11, 
            Con : 16,
            Int : 4,
            Wis : 10, 
            Cha : 7
        }
        , Trait : []
        , Action : [
            { Name : 'Multiattack', Text : `The guard drake makes two attacks: one with its
            bite and one with its tail.`},
            { Name : 'Bite', Text : `Melee Weapon Attack: +5 to hit, reach 5 ft, one target.
            Hit : 7 (ld8 + 3) piercing damage.`},
            { Name : 'Tail', Text : `Melee Weapon Attack: +5 to hit, reach 5 ft, one target. 
            Hit : 6 (ld6 + 3) bludgeoning damage.`},
        ]
        , Reaction : []
        , Legendary : []
        , Items : []
    }


});
