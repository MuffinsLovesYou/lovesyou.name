define([], ()=>{

    return {
        Name : 'Phalanx'
        , Size : 'Small'
        , Type : 'humanoid (kobold)'
        , Alignment : 'lawful evil'
        , Speed : 20
        , Save : 'Dex +4'
        , Skill : ''
        , Senses : ''
        , Languages : 'Draconic, Common'
        , Challenge : '2' //ish
        , Defenses : { 
            Ac : '18 (scale + shield)',
            Hp : '54 (10d6+20)',
            Resist : `Acid.`,
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 12,
            Dex : 14, 
            Con : 14,
            Int : 8,
            Wis : 9, 
            Cha : 10
        }
        , Trait : [
            { Name : 'Pack Tactics', Text : `The kobold has advantage on an attack roll
against a creature if at least one of the kobold's allies is within
5 feet of the creature and the ally isn't incapacitated`}
        ]
        , Action : [
            { Name : 'Dagger', Text : `Melee Weapon Attack: +4 to hit, 5ft reach, one target. 
            Hit: 4 (d4+2) piercing damage`},
            { Name : 'Dagger (thrown)', Text : `Ranged weapon attack, +4 to hit, 20/60 reach, one target. 
            Hit: 4(d4+2) piercing damage`}
        ]
        , Reaction : [
            { Name : 'Formation Fighter', Text : `When a creature the kobold can see attacks a creature 
            other than the kobold that is within 5 feet of the kobold, the kobold can use its reaction to 
            impose disadvantage on the attack.` }
        ]
        , Legendary : []
        , Items : [
            { Name : 'Scale Mail', Text : `x1`}
            , { Name : 'Dagger', Text : 'x3' }
        ]
    }
});