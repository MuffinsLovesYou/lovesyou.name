define([],()=>{

    return { 
        Name : 'Bockle of the Ivory Tower'
        , Size : 'Medium'
        , Type : 'humanoid'
        , Alignment : 'true neutral'
        , Speed : 25
        , Save : 'int +11, wis +8'
        , Skill : ''
        , Senses : 'darkvision 60ft'
        , Languages : 'Gnomish, Dwarven, Common, Elven'
        , Challenge : 10
        , Defenses : {
            Ac : 12,
            Hp : 80,
            Resist : '',
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : { 
            Str : 9,
            Dex : 14,
            Con : 13, 
            Int : 20,
            Wis : 15,
            Cha : 11
        }
        , Trait : [
            { Name : 'contingency', Text : `if attacked, Bockle has greater invisibility cast on himself automatically.`}
            , { Name : 'clone', Text : `Bockle has a clone of himself at his atelier at the university.`}
        ]
        , Action : [
            { Name : 'Symbol : stun', Text : `Bockle opens his spellbook and speaks a password. The password 
            activates a symbol of stunning that targets every creature in 60 feet that isn't him. Affected creatures must 
            succeed on a dc19 will save or be stunned for 1 minute.`},
            { Name : 'Spellcasting', Text : `Bockle is a 17th level spellcaster. His spellcasting aability is 
            Intelligence (spell save DC 19, +11 to hit with spell attacks) he has the following spells prepared: 
            <br> 1st level (4 slots): sleep*, shield, expeditious retreat 
            <br> 2nd level (3 slots): hold person*, suggestion*, misty step,  
            <br> 3rd level (3 slots): counterspell, dispel magic, fly
            <br> 4th level (3 slots): greater invisibility, mordenkainen's hound, mordenkainen's private sanctum
            <br> 5th level (2 slots): hold monster*, modify memory*
            <br> 6th level (1 slots): disintegrate
            <br> 7th level (1 slots): forcecage
            <br> 8th level (1 slots): mind blank (already cast)
            <br> 9th level (1 slots): time stop
            ` }
            
        ]
        , Reaction : [
            { Name : 'Instinctive Charm', Text : `(Recharges after the Enchanter Casts an Enchantment Spell of 1st Level or Higher).
            The enchanter tries to magically divert an attack made against it, provided that the
            attacker is with in 30 feet of it and visible to it. The enchanter
            must decide to do so before the attack hits or misses.
            The attacker must make a DC 14 Wisdom saving throw. On a
            failed save, the attacker targets the creature closest to it, other
            than the enchanter or itself. If multiple creatures are closest,
            the attacker chooses which one to target.` }
        ]
        , Items : [
            { Name : 'gem encrusted Bockle figurine', Text : `1500gp art object, focus for contingency spell.`}
        ]
        , Legendary : []
    }
});