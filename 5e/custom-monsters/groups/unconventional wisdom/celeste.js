
/* Celeste
    lvl 11 celestial warlock. 

    Celeste pseudo-tanks by opening the fight in a forward position. She can cast 
    Circle of Death to draw aggro and deal early damage. Her temp hp, tomb of levistus, 
    and boosted self-healing can help her survive a round or two, after which she will 
    want to back up and get a flaming sphere up. 

*/

export let monster = {
    Name : 'Celeste'
    , Size : 'Medium'
    , Type : 'humanoid '
    , Alignment : ''
    , Speed : 30
    , Save : ''
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '12 (15 with mage armor)',
        Hp : 60,
        Resist : 'Radiant',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 10,
        Dex : 14, 
        Con : 12,
        Int : 10,
        Wis : 10, 
        Cha : 20
    }
    , Trait : [
        { 
            Name : 'Spellcasting', 
            Text : `Celeste is a 11th-level spellcaster. her 
                spell-casting ability is Charisma (spell save DC 17, +9 to hit with
                spell attacks). She regains her expended spell slots when she fin-
                ishes a short or long rest. She knows the following warlock spells:
                <br>Cantrips (at will): dancing lights, eldritch blast, mage
                hand, sacred flame, prestidigitation, vicious mockery
                <br>1st-5th level (3 5th-level slots): 
                cure wounds, lesser restoration, flaming sphere, daylight, revivify, 
                guardian of faith, wall of fire, greater restoration,
                <br>At will: Mage armor
                <br>1/day: Freedom of Movement, Circle of Death`                
        },
        {
            Name : 'Invocations',
            Text : `Gift of the Ever-Living Ones: Whenever Celeste regains hit points with her familiar near,
                she treats any dice rolled as having rolled their maximum value.
                <br>Tomb of Levistus: As a reaction when she takes damage, Celeste entombs herself in ice, 
                which melts away at the end of her next turn. She gains 110 temporary hiit points, which take as 
                much of the triggering damage as possible. The temporary hit points end when the ice melts.`
        },
        { 
            Name : 'Healing Light', 
            Text : `Celeste has a pool of 12d6s. As a bonus 
                action, she can expend between 1 and 5 of these to heal a creature within 
                60 feet of her for the amount rolled.` 
        },
        {
            Name : 'Radiant Soul', 
            Text : `Whenever Celeste deals fire or radiant damage, 
                she deals additional damage equal to her charisma modifier.`
        },
        {
            Name : 'Celestial Resilience',
            Text : `Celeste gains 16 temporary hit points whenever she finishes a long or short rest. 
                Additionally, up to 5 creatures gain 10 temporary hit points.` 
        }
    ]
    , Action : [
        { Name : '', Text : ``}
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}


