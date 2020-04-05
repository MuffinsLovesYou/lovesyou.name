define([],()=>{

/*
    Moradin: Chief god of the dwarven pantheon. Protection, law, good, creation are his domains. He represents 
    traditional dwarvendom. 
    Deep Duerra: Duergar godess of psionics, conquest, and expansion. 
    Muamman Duathal: Neutral good Dwarven god of wanderers, expatriates, and lightning. 
    Thard Harr : Chaotic good dwarven god of the Jungle, Survival, and Hunting
    Vergadain : True neutral dwarven god of Luck, Trickery, and Trade 

    Who is Kathuil:
    Kathuil is the bastard son of Moradin and Deep Duerra. When Kathuil was born, Moradin refused to acknowledge 
    him or reveal who the mother was and instead cast him out to die. Kathuil was saved by Muamman Duathal, 
    drawing the ire of Moradin and causing a minor rift in the pantheon. Thard Harr and Vergadain aligned 
    themselves with Muamman's decision, deepening the rift even though they are relatively minor gods in 
    the pantheon. 

    Kathuil was handed to the wandering Muammian cleric Fonn Searbh and her aprentice Eberk. As foster mothers 
    they raised him and kept him safe until he was old enough to choose a path for himself. When they heard of 
    the great invasion that collapsed dwarven society, Kathuil was barely in his thirties. At that point he 
    decided immediatley to make himself known to dwarves and to try to reunify them.

*/


    return {
    Name : 'Kathuil, Dwarflord'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'lawful neutral'
    , Speed : 40
    , Save : 'Will +12, Cha +16'
    , Skill : 'athletics +14, acrobatics +13, perception +12, persuasion +16, performance +16'
    , Senses : 'Darkvision 120'
    , Languages : 'all'
    , Challenge : '20'
    , Defenses : { 
        Ac : '24 (+1 st leather)',
        Hp : 400,
        Resist : 'bludgeoning, piercing, and slashing from non-magical weapons',
        Immune : '',
        ConditionImmune : 'exhausted, poisoned'
    }
    , Stats : {
        Str : 26,
        Dex : 24, 
        Con : 24,
        Int : 28,
        Wis : 22, 
        Cha : 30
    }
    , Trait : [
        { Name : 'Two Hearted', Text : `Kathuil is immune to exhaustion and poison and has advantage on saving throws against being 
        paralyzed or put to sleep.`}
        , { Name : 'Aura of Awe', Text : `Being near Kathuil fills people with awe and terror. All creatures within 60 feet of him must 
        succeed a DC 24 Charisma saving throw or be charmed (if friendly) or frightened (if hostile). A creature that succeeds in its throw 
        is immune to the effect for the next 24 hours. ` }
        , { Name : 'Siege Monster', Text : `Kathuil does double damage against objects and structures` }
        , { Name : 'Innate Spellcasting', Text : `Kathuil's spellcasting ability is charisma (spell save DC 24), he can 
        innately cast the following spells with no material components needed.
        <br>At will: Feather Fall, Jump, Crown of Madness
        <br>3/day each: Blur, Counterspell, Lightning Bolt 
        <br>2/day each: Freedom of Movement, Passwall, Dimension Door
        <br>1/day each: Divine Word, Regenerate` }
    ]
    , Action : [
        { Name : 'Multiattack', Text : `Kathuil attacks once with Sky Skewer and twice with unarmed strikes.` },
        { Name : 'Sky Skewer', Text : `Melee (reach 10 ft) or Ranged weapon attack (30/90 ft) +16 to hit, one target. Hit: 
        15 (1d10+10) piercing damage. If made as a ranged attack, on a hit or a miss Kathuil can teleport to the spear.` },
        { Name : 'Unarmed strike', Text : `Melee Weapon Attack, +14 to hit, one target. Hit : 12 (1d8+8) bludgeoning 
        damage plus 7 (2d6) lightning damage and 6 (2d6) psychic damage.` },
        { Name : 'Full Sprint (recharge 5-6)', Text : `Kathuil doubles his base movement speed for a round and doubles his jump distance.
        While this is active, he ignores difficult terrain and can run along walls or over liquids. While sprinting, Kathuil can 
        make one attack with advantage.`}
    ]
    , Reaction : []
    , Legendary : [
        { Name : 'Throw', Text : `Kathuil can initiate a grapple with one adjacent enemy. His size category for this attempt is treated as 
        large. If he succeeds the roll, rather than initiate a grapple, the opponent is moved up to 10 feet and knocked prone.` } 
        ,{ Name : 'Obeisence (2 actions)', Text : `Kathuil focuses his gaze on one enemy within 60 feet. That opponent must succeed on a DC 20 wisdom saving 
        throw or immediately be forced to kneel and have its movement set to 0 until the end of its next turn.` }
        ,{ Name : 'Gaze', Text : `Kathuil can make a perception check for which he has True Sight (120 ft).` }
    ]
    , Items : [
        { Name : 'Sky Skewer', Text : `Legendary Pike. You gain +2 to attack and damage rolls when using this weapon. 
        It has the thrown property with a normal range of 30 feet and a long range of 90. Upon 
        hitting or missing a target, you can teleport to the location of the spear with it in your hands.` }  
        , { Name : 'Glamored Studded Leather', Text : `+1 studded leather that can change its appearance.` }
    ]
}
})