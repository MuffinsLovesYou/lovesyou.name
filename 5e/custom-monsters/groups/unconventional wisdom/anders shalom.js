
/* Lvl 10 Lizardfolk Light Domain Cleric

General tactics: 
If he has the luxury, Anders likes to 'buff up' with spiritual weapon, which 
takes the form of a spectral lizardfolk skull. 

Anders prefers to fight up-close where he can make best use of his AOE. 
He will lob a fireball at clustered enemies at range, otherwise he will 
bring up spirit guardians while approaching. 
He tries to position himself for maximum effect of Radiance of the Dawn. If he 
has gotten good hits off and either attracted attention and/or taken damage, he 
will 'tank' with sanctuary. 
*/
export let monster = { 
    Name : 'Anders Shalom'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'true neutral'
    , Speed : 30
    , Save : 'wis +9, cha +4'
    , Skill : ''
    , Senses : ''
    , Languages : 'Common, Draconic'
    , Challenge : 0
    , Defenses : {
        Ac : '19 (half plate + shield)',
        Hp : 83,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : { 
        Str : 8,
        Dex : 14,
        Con : 16, 
        Int : 10,
        Wis : 20,
        Cha : 10
    }
    , Trait : [
        , { Name : 'Radiance of the Dwan 2/rest', Text : `As an action, Anders presents his holy symbol and 
        banishes any magical darkness within 30 feet of him. Additionally, each hostile creature within 30 
        feet of him must make a constitution saving throw. A creature takes radiant damage equal to 2d10+10 
        (half Anders' level) radiant damage on a failed save, or half on a successful save.` }
        , { Name : 'Spellcasting', Text : `Anders is a 10th level spellcaster. His spellcasting ability is 
        Wisdom (spell save DC 17, +9 to hit with spell attacks) he has the following spells prepared: 
        <br> Cantrips: sacred flame
        <br> 1st level (4 slots): burning hands, sanctuary, cure wounds, shield of faith
        <br> 2nd level (3 slots): scorching ray, spiritual weapon, hold person
        <br> 3rd level (3 slots): fireball, spirit guardians, mass healing word
        <br> 4th level (3 slots): wall of fire, freedom of movement, guardian of faith
        <br> 5th level (2 slots): flame strike, raise dead, 
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
