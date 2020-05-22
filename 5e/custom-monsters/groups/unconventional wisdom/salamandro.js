define([],()=>{

/* Lvl 11 Lizardfolk Light Domain Cleric

General tactics: 
    Salamdandro likes heating things up with fire and radiant damage. He favors 
    buffing up with spirit guardians, then running in and using radiance of the dawn.

    Once people have taken damage, he will spam group heal spells or sanctuary.
*/

    return { 
        Name : 'Salamandro'
        , Size : 'Medium'
        , Type : 'humanoid (lizardfolk)'
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
            , { Name : 'Radiance of the Dawn 2/rest', Text : `As an action, Salamdandro presents his holy symbol and 
            banishes any magical darkness within 30 feet of him. Additionally, each hostile creature within 30 
            feet of him must make a constitution saving throw. A creature takes radiant damage equal to 2d10+10 
            (half Salamdandro' level) radiant damage on a failed save, or half on a successful save.` }
            , { Name : 'Spellcasting', Text : `Salamdandro is a 11th level spellcaster. His spellcasting ability is 
            Wisdom (spell save DC 17, +9 to hit with spell attacks) he has the following spells prepared: 
            <br> Cantrips: sacred flame
            <br> 1st level (4 slots): burning hands, sanctuary, cure wounds, shield of faith
            <br> 2nd level (3 slots): scorching ray, lesser restoration, hold person
            <br> 3rd level (3 slots): fireball, spirit guardians, mass healing word
            <br> 4th level (3 slots): wall of fire, freedom of movement, guardian of faith
            <br> 5th level (2 slots): flame strike, raise dead, mass cure wounds 
            <br> 6th Level (1 slots): heal
            ` }
        ]
        , Action : [
            { Name : 'Word of Radiance', Text : `Each adjacent creature of Salamdandro' choice must make a constitution saving 
            throw or take 11 (2d6+5) radiant damage.`}
            , { Name : 'Sacred Flame', Text : `One target within 60 feet must make a DC 17 dexterity saving throw 
            or take 13 (2d8+5) radiant damage. The target gains no benefit from cover for this saving throw.`}
        ]
        , Reaction : [
            { Name : 'Warding Flare 5/day', Text : `When attacked by a creature within 30 feet that he can see, 
            Salamdandro can use his reaction to impose disadvantage on the attack roll. This does not affect creatures 
            that are immune to the blinded condition.` }
        ]
        , Items : [
            { Name : 'Half-Plate', Text : `AC 17 + dex (maximum of 2)` }
        ]
        , Legendary : []
    }
});