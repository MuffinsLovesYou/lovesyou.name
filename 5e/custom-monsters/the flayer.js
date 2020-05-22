define([],()=>{


    return {
        Name : 'Astra the Flayer',
        Size : 'Medium',
        Type : 'humanoid',
        Alignment : 'Lawful Evil',
        Speed : '40',
        Save : 'wis+7, con+7, dex+9',
        Senses : 'Darkvision 150ft',
        Languages : 'Common, Elf',
        Challenge : '8',
        Defenses : {
            Ac : '18 st. leather',
            Hp : '128 (16d8+48)',
            Resist : '',
            Immune : '',
            ConditionImmune: ''
        }
        , Stats : {
            Str : 9,
            Dex : 20,
            Con : 16, 
            Int : 10, 
            Wis : 14,
            Cha : 12
        }
        , Trait : [
            { Name : 'Umbral Sight', Text : `While in darkness, Astra is invisible to any creature that relies 
            on darkvision to see her in that darkness.` },
            { Name : 'Sure Strike', Text : `If astra has missed with an attack this round, she can make another 
            weapon attack as a part of the same action.`},
            { Name : 'Drow Magic', Text : `Astra can cast some spells innately. Charisma is her ability score for these 
            spells (DC 14, +6 to hit)
            <br>At Will: dancing lights
            <br>1/day: faerie fire, darkness`},
            { Name : 'Spellcasting', Text : `
            Astra is a 16th level spellcaster. Her spellcasting ability modifier is wisdom (DC 15, +7 to hit)
            <br>1st level (4 slots): hail of thorns, cure wounds, disguise self, longstrider
            <br>2nd level (3 slots): cordon of arrows, pass without trace, rope trick,
            <br>3rd level (3 slots): conjure barrage, nontedection, fear
            <br>4th level (2 slots): greater invisibility, freedom of movement` },
            ]
        , Action : [
            { Name : 'Multiattack', Text : `Astra makes two weapon attacks. If either misses, she can make a third.` },
            { Name : 'Weapon attack', Text : `Attacks with Longbow, Javelin, Dart, Knife or Short Sword
            <br>Ranged : +12 to hit. +5 damage. Longbow: d8 150/600. Javelin: d6 30/120, Dart: d4 20/60, Knife: d4 20/60.
            <br>Melee : +10 to hit. +5 damage. Shortsword: d6 ` }
        ]
        , Reaction : [
            { Name : 'Shadowy Dodge', Text : `When a creature makes an attack roll against Astra and does not have 
            advantage on the roll, she can use her reaction to impose disadvantage on it.` }
        ]
        , Legendary : []
        , Items : [
            { Name : 'Quiver of Ehlonna', Text : `60 arrows, 18 javelins, 2 longbow, ` },
            { Name : 'Shortsword x2', Text : 'Two functional short swords'},
            { Name : 'Knife x3', Text : 'A hunting knife, a dagger, a stilletto blade.'},
            { Name : 'Dart x4', Text : '4 plain darts strapped to her thighs.' },
            { Name : 'St. Leather +1', Text : `Oil blackened +1 studded leather.` },
            { Name : 'Day Lenses', Text: `Removes imposed disadvantage for attack rolls when made against 
            a target in bright light. ` }
        ]
    }

});