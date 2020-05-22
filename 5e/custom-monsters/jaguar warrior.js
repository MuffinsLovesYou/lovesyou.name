define([], ()=>{

    return {
        Name : 'Jaguar Warrior'
        , Size : 'Medium'
        , Type : 'humanoid'
        , Alignment : 'chaotic neutral'
        , Speed : 35
        , Save : 'Str +6, Con +6'
        , Skill : 'Athletics +6, Survival +4, Stealth +8, Perception +7'
        , Senses : ''
        , Languages : 'Dwarven, Common'
        , Challenge : '4'
        , Defenses : { 
            Ac : '18 (breastplate + shield)',
            Hp : '115 (10d12+40)',
            Resist : `bludgeoning, piercing, and slashing damage from nonmagical weapons. Resistant to poison 
            damage and has advantage on saving throws against poison.`,
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 16,
            Dex : 14, 
            Con : 16,
            Int : 8,
            Wis : 12, 
            Cha : 9
        }
        , Trait : [
            { Name : 'Pounce', Text : `If the Jaguar Warrior moves at least 20 feet in a straight line 
            and then hits with a melee attack, the target must succeed on a DC 14 strength saving throw 
            or be knocked prone. If the target is prone, the Jaguar Warrior can make an additional melee 
            attack against that target as a bonus action.`},
            { name : 'Prowler', Text : `The Jaguar gains expertise in Stealth and Perception checks 
            and has advantage on perception checks that rely on smell.`}
        ]
        , Action : [
            { Name : 'Macuahuitl', Text : `Melee Weapon Attack: +6 to hit, 5ft reach, one target. 
            Hit: 12 (d8+6) slashing damage`},
            { Name : 'Javelin (x4)', Text : `Ranged Weapon Attack: +6 to hit, 30/120 ft reach, one target. 
            Hit: 9 (d6+6) piercing damage`},
            { Name : 'Multiattack', Text : `The Jaguar Warrior makes two Macuahuitl attacks.`}
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
});