define([], ()=>{

    return {
        Name : 'Sorcerer'
        , Size : 'Small'
        , Type : 'humanoid (kobold)'
        , Alignment : 'lawful evil'
        , Speed : 20
        , Save : ''
        , Skill : ''
        , Senses : ''
        , Languages : 'Draconic, Common'
        , Challenge : '2' //ish
        , Defenses : { 
            Ac : '16 (natural)',
            Hp : '44 (8d6+16)',
            Resist : `Acid.`,
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 7,
            Dex : 16, 
            Con : 14,
            Int : 10,
            Wis : 9, 
            Cha : 16
        }
        , Trait : [
            { Name : 'Pack Tactics', Text : `The kobold has advantage on an attack roll
against a creature if at least one of the kobold's allies is within
5 feet of the creature and the ally isn't incapacitated`},
            { Name : 'Spellcasting', Text : `The kobold is a 4th level spellcaster. It's spellcasting 
            ability modifier is Charisma (spell save DC 13 +5 to hit for spell attacks). It has the following 
            spells prepared. 
            Cantrips: Acid Splash, 
            <br>1st Level: Magic Missile, Shield, Feather Fall, Witch Bolt
            <br>2nd Level: Phantasmal Force, Mirror Image` }
        ]
        , Action : [
            { Name : 'Staff', Text : `Melee Weapon Attack: +0 to hit, 5ft reach, one target. 
            Hit: 1 (d6-2) bludgeoning damage`},
        ]
        , Reaction : [
            { Name : 'Shield', Text : `1st Level spell, cast on hit before knowing if it is a success. +5 Ac 
            until the end of their next turn. ` }
        ]
        , Legendary : []
        , Items : [
            { Name : 'Staff', Text : '' }
        ]
    }
});