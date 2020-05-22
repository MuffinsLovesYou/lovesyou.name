
// Captain Kheinan is a retired privateer
export let monster = {
    Name : 'Captain Kheinan',
    Size : 'Medium',
    Type : 'humanoid',
    Alignment : 'Neutral Evil',
    Speed : '25',
    Save : 'dex+7',
    Senses : 'Darkvision 60ft',
    Languages : 'Dwarven, Common, Orc',
    Challenge : '6',
    Defenses : {
        Ac : '19 (st. leather)',
        Hp : 86,
        Resist : '',
        Immune : '',
        ConditionImmune: ''
    }
    , Stats : {
        Str : 10,
        Dex : 18,
        Con : 12, 
        Int : 14, 
        Wis : 11,
        Cha : 16
    }
    , Trait : [
        { Name : 'Lightfooted', Text : `The captain can take the Dash or Disengage action as a bonus action on 
        each of his turns.`},
        { Name : 'Suave Defense', Text : `While Kheinan is wearing light or no armor and wielding no shield, his AC 
        includes his Charisma modifier` }
    ]
    , Action : [
        { Name : 'Multiattack', Text : `Kheinan makes three attacks: one with his dagger, and two with his rapier.` },
        { Name : 'Dagger', Text : `Melee or Ranged Weapon Attack : +7 to hit, reach 5ft. or range 20/60ft, one target. 
        Hit 6(1d4+4) piercing damage.`},
        { Name : 'Rapier', Text : 'Meleee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit 8 (1d8+4) piercing damage.'}
    ]
    , Reaction : []
    , Legendary : []
    , Items : [
        { Name : 'Jewelry', Text : `Kheinan has gold teeth worth 3gp. He has an electrum ring with a well cut Jet gem 
        set in it worth about 150gp. `},
        { Name : 'Studded Doublet', Text : `Kheinan has an armored formal doublet. It leaves his arms bare to show off his 
        tattoos, but covers the chest in brocaded dark leather with long thin discs of what might be sterling silver woven 
        in. In good condition it is worth about 30gp.`},
        { Name : 'Dust of Sneezing and Choking', Text : `DMG 166`}
    ]
    
}
