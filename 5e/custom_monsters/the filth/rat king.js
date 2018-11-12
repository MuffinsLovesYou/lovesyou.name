define([],()=>{

/*
Lvl 8 Trickery Domain Cleric
 */

    return {
        Name : 'Rat King',
        Size : 'Medium',
        Type : 'humanoid',
        Alignment : 'Chaotic Evil',
        Speed : '30',
        Save : 'wis+7, con+7, dex+9',
        Senses : '',
        Languages : 'Common, ',
        Challenge : '3',
        Defenses : {
            Ac : '19 half plate + shield',
            Hp : '74 (8d10+24)',
            Resist : '',
            Immune : '',
            ConditionImmune: ''
        }
        , Stats : {
            Str : 10,
            Dex : 14,
            Con : 16, 
            Int : 11, 
            Wis : 20,
            Cha : 10
        }
        , Trait : [
            { Name : 'Invoke Duplicity 2/day', Text : `As an action, Rat creates a perfect illusory copy of himself 
            somewhere within 30 feet that can remain for 1 minute as long as it stays within 120 feet of him. He can 
            cast spells as though he is in the illusion's space, but must use his senses.` },
            { Name : 'Spellcasting', Text : `
            Rat is an 8th level spellcaster. His spellcasting ability modifier is Wisdom ()
            <br>1st level (4 slots): disguise self, healing word, sanctuary
            <br>2nd level (3 slots): mirror image, hold person, blindness/deafness, lesser restoration
            <br>3rd level (3 slots): blink, spirit guardians, revivify, mass healing word
            <br>4th level (2 slots): dimension door, death ward, guardian of faith` },
        ]
        , Action : [
            { Name : 'Shillelagh', Text : 'Melee Weapon Attack +8 to hit. Hit 13 (1d8+5 +1d8 poison)' },
        ]
        , Reaction : [
        ]
        , Legendary : []
        , Items : [
            { Name : 'Shaylaylay', Text : `Requires attunement by divine caster. This cudgel has 3 charges 
            and regains 1d3 charges at dawn. The wielder can expend a charge to cast Shillelagh on this weapon.` }
        ]
    }

});