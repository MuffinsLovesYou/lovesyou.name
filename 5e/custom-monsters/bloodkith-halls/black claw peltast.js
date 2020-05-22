// a cluster of lesser kobolds,

export let monster = {
    Name : 'Peltast'
    , Size : 'Large'
    , Type : 'humanoid (kobold)'
    , Alignment : 'lawful evil'
    , Speed : 20
    , Save : 'Dex +4'
    , Skill : ''
    , Senses : ''
    , Languages : 'Draconic, Common'
    , Challenge : '3' //ish,  maybe 3
    , Defenses : { 
        Ac : '13 (leather)',
        Hp : '67 (16d6+16)',
        Resist : ``,
        Immune : '',
        Vulnerable : 'Area of effect attacks',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 8,
        Dex : 14, 
        Con : 12,
        Int : 8,
        Wis : 9, 
        Cha : 9
    }
    , Trait : [
        { Name : 'Pack Tactics', Text : `The kobold has advantage on an attack roll
against a creature if at least one of the kobold's allies is within
5 feet of the creature and the ally isn't incapacitated`}
    ]
    , Action : [
        { Name : 'Multiattack', Text : `2 Sling attacks.`},
        { Name : 'Sling', Text : `Ranged weapon attack, +8 to hit, 30/120 reach, one target. 
        Hit: 16 (4d4+8) bludgeoning damage`}
    ]
    , Reaction : [
        { Name : 'Shift', Text : `When an opponent ends their turn within 5 feet of the peltasts, 
        they can use their reaction to move up to 10 feet away. This movement does not provoke 
        attacks of opportunity.` }
    ]
    , Legendary : []
    , Items : [
    ]
}
