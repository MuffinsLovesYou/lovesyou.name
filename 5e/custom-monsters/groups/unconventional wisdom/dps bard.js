define([],()=>{

/* Lvl 10 

General tactics: 
*/

    return { 
        Name : ''
        , Size : 'Medium'
        , Type : 'humanoid'
        , Alignment : 'true neutral'
        , Speed : 35
        , Save : 'wis +9, cha +4'
        , Skill : ''
        , Senses : ''
        , Languages : 'Common, Elven'
        , Challenge : 0
        , Defenses : {
            Ac : '17 (st.leather)',
            Hp : 83,
            Resist : '',
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : { 
            Str : 10,
            Dex : 20,
            Con : 14, 
            Int : 10,
            Wis : 11,
            Cha : 14
        }
        , Trait : [
            { Name : 'Spellcasting', Text : `The bard is a 10th level spellcaster. His spellcasting ability is 
            Charisma (spell save DC xx, +x to hit with spell attacks) he has the following spells prepared: 
            <br> Cantrips: light, mage hand, message, mending
            <br> 1st level (4 slots): healing word, identify, longstrider
            <br> 2nd level (3 slots): invisibility, silence, lesser restoration
            <br> 3rd level (3 slots): sending, tongues
            <br> 4th level (3 slots): greater invisibility, dimension door
            <br> 5th level (2 slots): animate objects, mass cure wounds
            ` }
        ]
        , Action : [
            { Name : 'Word of Radiance', Text : `Each creature of Anders' choice must make a constitution saving 
            throw or take 11 (2d6+5) radiant damage.`}
            , { Name : 'Sacred Flame', Text : `One target within 60 feet must make a DC 17 dexterity saving throw 
            or take 13 (2d8+5) radiant damage. The target gains no benefit from cover for this saving throw.`}
        ]
        , Reaction : [
            { Name : 'Warding Flare 5/day', Text : `When attacked by a creature within 30 feet that he can see, 
            Anders can use his reaction to impose disadvantage on the attack roll. This does not affect creatures 
            that are immune to the blinded condition.` }
        ]
        , Items : [
            { Name : 'Half-Plate', Text : `AC 15 + dex (maximum of 2)` }
        ]
        , Legendary : []
    }
});