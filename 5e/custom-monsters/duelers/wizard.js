
// spells that can end it all:
// Str
// dex 
// con 
// flesh to stone
// int 
// feeblemind
// maze
// wis 
// command - hurts next round
// compelled duel - cannot flee -- see 
// dominate person -- see, charm
// eyebite -- see
// hold person -- see, paralyze
// hypnotic pattern -- charm
// imprisonment  --- cast time too long
// modify memory -- see charm
// polymorph -- see
// true poly -- see
// cha 
// banishment - out of fight x rounds
// power word stun/kill - hp based



// defenses:
// clone
// contingency
// counterspell






// foresight, 
// 8 hour, no concentration, advantage/disadvantage status
// meteor swarm... 40d6

// prismatic wall abj
//shapechange trans
// timestop trans, 
// true poly, trans instant win if no will save
// weird
// wish

export let monster = { 
    Name : 'Duel Mage'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'true neutral'
    , Speed : 25
    , Save : 'int +11, wis +7, con +11'
    , Skill : ''
    , Senses : 'darkvision 60ft'
    , Languages : 'Gnomish, Dwarven, Common, Elven'
    , Challenge : 10
    , Defenses : {
        Ac : 12,
        Hp : 182,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : { 
        Str : 9,
        Dex : 14,
        Con : 20, 
        Int : 20, 
        Wis : 12,
        Cha : 10
    } 
    , Trait : [
        { Name : 'War Caster', Text : `The wizard has advantage on constitution saving throws to maintain concentration.`},

    ]
    // prepare 25 spells
    , Action : [
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
    ]
    , Items : [
    
    ]
    , Legendary : []
}
