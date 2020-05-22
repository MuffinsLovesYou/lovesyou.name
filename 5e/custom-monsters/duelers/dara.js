define([],()=>{

// Playtest vs: 
   // Barbarian 
   // Fighter
   // Paladin 
   // Mage 

// Tiefling, Mordenkainen's variant with str + cha 
// Paladin/Barbarian/Fighter
return {
    Name : 'Dara'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic neutral'
    , Speed : 40
    , Save : 'wis +11, cha + 16'
    , Skill : ''
    , Senses : 'Darkvision 60'
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '18 ',
        Hp : 1,
        Resist : 'bludgeoning, piercing, and slashing from non-magical weapons',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 20, // 4 8
        Dex : 14, // 
        Con : 12, // possibly trade 1 tick of cha for this. 
        Int : 10, // 
        Wis : 10,  // 
        Cha : 20  // 12 16 20 
    }  // feat
    , Trait : [
        { Name : 'Lay on hands', Text : `Dara has a pool of 30 hit points. She can use an action to tap into 
        that pool to heal a creature she touches. Alternatively, she can expend 5 points to cure a poison or 
        disease effect.` } 
    ]
    , Action : [
        { Name : '', Text : `` },
    ]
    , Legendary : []
    , Reaction : [
    ]
    , Items : [
    ]
}


});