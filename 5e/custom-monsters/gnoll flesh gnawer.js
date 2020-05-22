export let monster = {
    Name : 'Gnoll Flesh Gnawer'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic evil'
    , Speed : 3
    , Save : 'Str +6, Con +6'
    , Skill : 'Stealth +4, Perception +4'
    , Senses : 'Darkvision 60ft'
    , Languages : 'Gnoll'
    , Challenge : '1'
    , Defenses : { 
        Ac : '14 (studded leather armor)',
        Hp : '22 (4d8+4)',
        Resist : `bludgeoning, piercing, and slashing damage from nonmagical weapons. Resistant to poison 
        damage and has advantage on saving throws against poison.`,
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 12,
        Dex : 14, 
        Con : 12,
        Int : 8,
        Wis : 10, 
        Cha : 8
    }
    , Trait : [
        { Name : 'Rampage', Text : `When the gnoll reduces a creature to O hit points
with a melee attack on its turn, the gnoll can take a bonus ac-
tion to move up to half its speed and make a bite attack.`},
    ]
    , Action : [
        { Name : 'Bite', Text : `Melee Weapon Attack: +4 to hit, reach 5 ft., one target.
Hit: 4 (ld4 + 2) piercing damage.`},
        { Name : 'Shortsword', Text : `Melee Weapon Attack: +4 to hit, reach 5 ft., one
target. Hit: 5 (ld6 + 2) piercing damage.`},
        { Name : 'Sudden Rush', Text :  `Until the end of the turn, the gnoll's speed in-
creases by 60 feet and it doesn't provoke opportunity attacks.`},
        { Name : 'Multiattack', Text : `The gnoll makes three attacks: one with its bite
and two with its shortsword.`}
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : 'Feral Jewelry', Text : `Crude jewelry consisting of unpolished gemstones, teeth, 
        claws, and bones. Value: 12gp (4d6*10 silver)`}
    ]
}

