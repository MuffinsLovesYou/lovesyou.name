
/* Kenku Arcane Trickster rogue
    Boom's strategy is simple. She buffs with blur to protect herself. She 
    then glides around to inflict damage with her booming blade attack. She 
    favors using her bonus action to disengage so that she can be mobile 
    and quickly hit different opponents.

*/

export let monster = {
    Name : 'Boom'
    , Size : 'Medium'
    , Type : 'humanoid (kenku)'
    , Alignment : ''
    , Speed : 30
    , Save : ''
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '18 (Mage armor)',
        Hp : 71,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 8,
        Dex : 20, 
        Con : 14,
        Int : 16,
        Wis : 8, 
        Cha : 10
    }
    , Trait : [
        { Name : 'Sneak Attack', 
            Text : `Once per turn, if Boom has advantage against an opponent, or if an ally 
                is within 5 feet of the opponent, she can deal an extra 6d6 damage when 
                hitting with a weapon attack.` },
        { Name : 'Cunning Action', 
            Text : `Doom can Dash, Disengage, or Hide as a bonus action on her turn.` },
        { Name : 'Spellcasting', 
            Text : `Doom is an 11th level spellcaster. Her spellcasting ability is 
                Intelligence (DC 15 save DC +7 to hit with spell attacks). She has the following 
                spells prepared. 
                <br>Cantrips: Booming Blade, 
                <br>1st (4 slots): Mage Armor, Magic Missile
                <br>2nd (3 slots): Blur, Spider Climb` }     
            
    ]
    , Action : [
        { Name : 'Booming Blade', Text : `Melee weapon attack. +9 to hit, 5ft range, single target.
            Hit: 9 (1d8+5 piercing) + 9 (3d8 sonic) + 18 (6d6 piercing).` }
    ]
    , Reaction : [
        { Name : 'Uncanny Dodge',
            Text : `Doom can use her reaction to halve the damage from an attack she can see.` }
    ]
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}


