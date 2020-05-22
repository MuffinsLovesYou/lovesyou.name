
/* Fats is a mountain dwarf female. She is on the tall side at about 4'6", but her most 
distinguishing feature is her 250lb frame of fat and muscle. She is dim, dumb, and hateful. */
/* Fats is a lvl 8 Path of the Juggernaut Barbarian. In a rage, a juggernaut grabs and flails 
at anything and is just as likely to throw a weapon as swing it properly. As such, they often 
eschew weapons in favor of grabbing anything in reach in their fervor to destroy. */

export let monster = {
    Name : 'Fats Nasty',
    Size : 'Medium',
    Type : 'humanoid',
    Alignment : 'Neutral Evil',
    Speed : '40',
    Save : 'str+7, con+7, dex+6',
    Senses : 'Darkvision 60ft',
    Languages : 'Common, Dwarvish',
    Challenge : '4',
    Defenses : {
        Ac : '20 shield + natural armor',
        Hp : '108 (8d12+32)',
        Resist : 'Bludgeoning, Piercing, Slashing',
        Immune : '',
        ConditionImmune: ''
    }
    , Stats : {
        Str : 18,
        Dex : 16,
        Con : 18, 
        Int : 8, 
        Wis : 8,
        Cha : 8
    }
    , Trait : [
        { Name : 'Rage 4/day', Text : `Barbarian Rage`},
        { Name : 'Everything is a Weapon', Text : `Fats is proficient in improvised weapons and her damage 
        with unarmed attacks is 1d4. When she hits with a melee improvised weapon or unarmed attack, she can make 
        a grapple attempt as a bonus action.` },
        { Name : 'World Breaker', Text : `Fats' damage with improvised weapons and unarmed strikes increases 
        to d6. She can grapple with huge or smaller creatures and has advantage on attacks vs a creature she 
        is grappling. She does double damage against objects and structures.`}
    ]
    , Action : [
        { Name : 'Multiattack', Text : `Fats makes two improvised weapon attacks. If attacking in melee, she 
        can use a bonus action to initiate a grapple.` },
        { Name : 'Improvised Weapon', Text : `Melee Weapon Attack +7 to hit range 5ft or Ranged weapon attack 
        +7 to hit, range 20/60. Hit: 9 (1d6+6) damage.` }
    ]
    , Reaction : [
    ]
    , Legendary : []
    , Items : [
        
    ]
}

