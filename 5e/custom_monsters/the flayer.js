define([],()=>{

    return {
        Name : 'Astra the Flayer',
        Size : 'Medium',
        Type : 'humanoid',
        Alignment : 'Lawful Evil',
        Speed : '40',
        Save : 'wis+5, con+5, dex+7',
        Senses : 'Darkvision 150ft',
        Languages : 'Common, Elf',
        Challenge : '10',
        Defenses : {
            Ac : '16 st. leather',
            Hp : '78 (12d8+24)',
            Resist : '',
            Immune : '',
            ConditionImmune: ''
        }
        , Stats : {
            Str : 9,
            Dex : 18,
            Con : 14, 
            Int : 10, 
            Wis : 14,
            Cha : 12
        }
        , Trait : [
            { Name : 'Umbral Sight', Text : `While in darkness, Astra is invisible to any creature that relies 
            on darkvision to see her in that darkness.` },
        ]
        , Action : [
            { Name : 'Spellcasting', Text : `
            <br>1st level (3 slots): hail of thorns, cure wounds
            <br>2nd level (3 slots): cordon of arrows, pass without trace^,
            <br>3rd level (3 slots): conjure barrage, nontedection` },
            { Name : 'Multiattack', Text : `Astra makes two short sword attacks and one sure strike` },
            { Name : 'Short Sword', Text : 'Melee Weapon Attack +7 to hit 1d6+4 damage.' },
            { Name : 'Sure Strike', Text : `Melee Weapon Attack +7 to hit 1d4+4 damage. If astra has missed with a 
            melee attack this round, she can make this attack twice.`}
        ]
        , Reaction : [
            { Name : 'Shadowy Dodge', Text : `When a creature makes an attack roll against Astra and does not have 
            advantage on the roll, she can use her reaction to impose disadvantage on it.` }
        ]
        , Legendary : []
        , Items : [
            
        ]
    }

});