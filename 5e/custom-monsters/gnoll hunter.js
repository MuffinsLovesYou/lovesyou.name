
export let monster = {
    Name : 'Gnoll Hunter'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic evil'
    , Speed : 3
    , Save : 'Str +6, Con +6'
    , Skill : 'Stealth +4, Perception +4'
    , Senses : 'Darkvision 60ft'
    , Languages : 'Gnoll'
    , Challenge : '1/2'
    , Defenses : { 
        Ac : '13 (leather armor)',
        Hp : '22 (4d8+4)',
        Resist : `bludgeoning, piercing, and slashing damage from nonmagical weapons. Resistant to poison 
        damage and has advantage on saving throws against poison.`,
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 14,
        Dex : 14, 
        Con : 12,
        Int : 8,
        Wis : 12, 
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
        { Name : 'Spear', Text : ` Melee or Ranged Weapon Attack: +4 to hi t, reach 5 ft. or
range 20/60 ft ., one target. Hit: 5 (ld6 + 2) piercing damage,
or 6 (ld8 + 2) piercing damage when used wi th two hands to
make a melee attack.`},
        { Name : 'Longbow', Text : `Ranged Weapon Aitaclc: +4 to hit, range 150/600 ft.,
one target. Hit: 6 (ld8 + 2) piercing damage, and the target's
speed is reduced by 10 feet until the end of its next turn.`},
        { Name : 'Multiattack', Text : `The gnoll makes two melee attacks with its spear
or two ranged attacks with its longbow.`}
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

