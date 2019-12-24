define([],()=>{

/*
    Iojad is a ruddy and hearty Goliath tracker. He frequents the Frostwalk camp where he 
    sells his services as a guide or assisting with monster hunting groups. 
    He is capable and friendly and useful to have in these climes. 
*/

return {
    Name : 'Iojad'
    , Size : 'Medium'
    , Type : 'humanoid (Goliath)'
    , Alignment : ''
    , Speed : 30
    , Save : 'Dexterity +6, Strength +4'
    , Skill : 'Athletics +4, Stealth +6, Perception +5, Survival +5'
    , Senses : ''
    , Languages : 'Common, Goliath'
    , Challenge : '6'
    , Defenses : { 
        Ac : '10',
        Hp : 45,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 12,
        Dex : 16, 
        Con : 16,
        Int : 8,
        Wis : 14, 
        Cha : 10
    }
    , Trait : [
        { Name : 'Natural Explorer (Forest, Arctic)', Text : `While travelling in one of his 
            favored environments, Iojad has the following benefits: 
            <br>Difficult terrain does not slow his group's speed.
            <br>He cannot become lost except by magical means
            <br>Even if doing other activities (foraging) he remains alert to danger
            <br>He forages twice as much food as normal 
            <br>If alone, he can move stealthily at a normal pace
            <br>When tracking, he knows how many creatures, their sizes, and how long ago they passed through.`
        }
        , { Name : 'Spellcasting', Text : `Iojad 6th-level spellcaster. His 
            spellcasting ability is Wisdom (spell save DC 13, +5 to hit
            with spell attacks). He has the following ranger spells prepared:
            1st level (4 slots): Longstrider, Goodberry, Hunter's Mark
            2nd level (2 slots): Pass without trace`
        }
    ]
    , Action : [
        { Name : 'Multiattack', Text : `Iojad makes two attacks with his longbow or hand axe`},
        { Name : 'Longbow', Text : `Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. 
            Hit: 11 (2d8 + 3) piercing damage.` },
        { Name : 'Handaxe', Text : `Melee Weapon Attack: +4 to hit, reach 5 ft., one
            target. Hit : 8 (1d6 + 1d8 + 1) slashing damage.`}    
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}
});


