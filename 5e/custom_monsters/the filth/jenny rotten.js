define([],()=>{

/* Lvl 6 Pact of the Tome, Warlock of the Great Old One.  */
/* A skinny, dour halfling.  */
    return {
        Name : 'Jenny Rotten',
        Size : 'Medium',
        Type : 'humanoid',
        Alignment : 'Neutral Evil',
        Speed : '30',
        Save : 'wis +3, cha +8',
        Senses : '',
        Languages : 'Common',
        Challenge : '3',
        Defenses : {
            Ac : '16 st. leather',
            
            Hp : '44 (6d8+12)',
            Resist : '',
            Immune : '',
            ConditionImmune: ''
        }
        , Stats : {
            Str : 8,
            Dex : 16,
            Con : 14, 
            Int : 10, 
            Wis : 10,
            Cha : 20
        }
        , Trait : [
            { Name : 'Entropic Ward', Text : `When a creature makes an attack roll against Jenny, she can impose 
            disadvantage against the roll. If the attack misses, she gains advantage on her next attack against 
            that creature before the end of her next turn.` },
            { Name : 'Innate Spellcasting', Text : `Jenny's innate spellcasting ability is Charisma. She can 
            innately cast the following spells (spell save DC 16) without the need of material components.
            <br>1/day: Slow `},
            // spells known: 7ish 
            // agathys: 1 hour, no concentration 
            { Name : 'Spellcasting', Text : `Jenny is an 8th level spellcaster. Her spellcasting ability modifier 
            is Charisma (spell save DC 16 +8 to hit with spell attacks).
            <br>Cantrips (at will): eldritch blast
            <br>1st-3rd (2 3rd level spell slots): armor of agathys, fly, misty step, spider climb, dispel magic
            , banishment, hex, hunger of hadar,  
            `},
        ]
        , Action : [
            { Name : 'Eldritch Blast', Text : `Two Ranged spell attacks +8 to hit 150ft. Hit: 10(1d10+5) damage 
            and the enemy's movement is reduced by 10 (once per turn).` },
        ]
        , Reaction : [
            { Name : 'Tomb of Levistus', Text : `As a reaction when she takes damage, Jenny can entomb herself in 
            ice which melts away at the end of her next turn. She gains 80 temporary hit points which take as much 
            of the triggering damage as possible. Immediately after taking the damage, she gains vulnerability to 
            fire damage, a movement speed of 0 and is incapacitated until the end of her next turn when the ice melts. `}
        ]
        , Legendary : []
        , Items : [
            { Name : 'Spell Scroll', Text : `Dispel Magic`},
            { name : 'Potion', Text : `Superior Healing 4d4+4`}
        ]
    }

});