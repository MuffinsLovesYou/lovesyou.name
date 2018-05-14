define([],()=>{

let monsters = {

}


/* NPCed up lvl 11 Vengeance Paladin / lvl 9 War Priest 
    Focuses on extreme nova damage. Gets 4 attacks when hasted + using 'Big Swing' ability,
    which is based on War Priest class feature. 
    Can expend a lvl 4+ spell slot to smite on each hit for massive damage.
*/
monsters.Law = {
    name : 'Law', size : 'Medium', type : 'Humanoid', alignment : 'chaotic neutral', 
    ac : '18', hp : '115 20d10+20', speed : '30 ft,', str : 20, dex : 8, 
    con : 12, int : 8, wis : 14, cha : 20, save : 'Wis +5, Cha +11, Con +8', immune : 'Disease',
    conditionImmune : 'frightened', resist : 'cold', senses : '', passive : '5', languages : 'common',
    cr : '16', trait : [
        { name : 'lay on hands', text : [`Law has a pool of healing power up to 100hp. As an action he can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in her pool.`]},
        { name : 'Divine Smite', text : [`When Law hits a creature he can expend a spell slot to deal an additional 2d8 plus an additional 1d8 per spell slot level.`] },
        { name : 'Protection', text : [`Law has +5 to saves.`]},
        { name : 'Vow of Enmity', text : [`2/day, Law has advantage on attacks against 1 creature for 1 minute. `]},
        { name : 'Big swing', text : [`2/day, Law can make an attack as a bonus action.`]},
        { name : 'Great Weapon', text : [`Law takes -5 to his attack and gains +10 damage on a hit.`]},
        { name : 'Spellcasting', text : [`Law is a level 20 spellcaster. Her spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). She has 
        the following spells prepared: 
        <br>1st level (4 slots): Thunderous Smite, Searing Smite, Healing Word 
        <br>2nd level (3 slots): Silence, Protection from Poison, Misty Step, 
        <br>3rd level (3 slots): Blinding Smite, Haste, Dispel Magic
        <br>4th level (3 slots): Freedom of Movement   
        <br>5th level (2 slots): Greater Restoration
        <br>6th level (1 slot):*`]},
        { name : 'Smite', text : [`Law can expend a spell slot to gain 2d8 + 1d8 per spell level of the expended spell slot.`]}
    ],
    action : [
        { name : 'Multiattack', text : `Law makes two attacks with his hammer.` }
        ,{ name : 'Hammer', text : `Melee weapon attack + 14 to hit, reach 5 ft., one target.
            Hit : 15 (2d6+8) + 9 (2d8) radiant damage.`}
    ], 
    spells : `Thunderous Smite, Searing Smite, Healing Word, Silence, Protection from Poison, Misty Step, 
    Blinding Smite, Haste, Dispel Magic, Freedom of Movement, Greater Restoration`
    , items : [
        { name : 'Big Stick', text : '+3 Maul' },
        { name : 'Ring of Spell Storing', text : 'Stores 3 casts of Thunderous Smite and 2 of Searing Smite'},
        { name : 'Pearl of Power', text : 'Stores one cast of Haste' }
    ]
}

/* Legendary High elf Oath of the Ancients Paladin. */
monsters.Krismorel = {
    name : 'Krismorel Bearcharger', size : 'Medium', type : 'Humanoid', alignment : 'chaotic good',
    ac : '20 (dwarven plate +2)', hp : '204 (20d10+80)', speed : '30 ft.', str : 20, dex : 12,
    con : 18, int : 12, wis : 16, cha : 20, save:"Str +11, Cha +11", immune : 'Disease',
    conditionImmune : '', senses : 'Darkvision 60ft', passive : '9', languages : 'Elven, Common, Dwarven',
    cr : '20', trait : [ 
        { name : 'Regeneration', text : ['Krismorel regains 10 hit points at the start of her turn if she has at least 1 hp.'] }, 
        { name : 'Lay on hands', text : [`Krismorel has a pool of healing power up to 100hp. As an action she can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in her pool.`]},
        { name : 'Aura of Protection', text : [`Krismorel and allies within 10 feet have +5 to saving throws`] },
        { name : 'Aura of Warding', text : ['Krismorel and allies within 10 feet have resistance to damage from spells.'] }, 
        { name : 'Spellcasting', text : [`Krismorel is a level 20 spellcaster. Her spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). She has 
        the following spells prepared: 
        <br>1st level (4 slots): compelled duel, cure wounds, protection from evil and good   
        <br>2nd level (3 slots): lesser restoration, protection from poison, 
        <br>3rd level (3 slots): dispel magic, remove curse,
        <br>4th level (3 slots): banishment, ice storm  
        <br>5th level (2 slots): destructive wave, tree stride`]}
    ], action : [
        { name : 'Multiattack', text : `Krismorel makes two attacks with her Answerer.`},
        { name : 'Answerer', text : `Melee weapon attack +14 to hit, reach 5 ft., one target.
        Hit: 12 (1d8 + 8) slashing damage + 8 (2d8) radiant damage. `}
    ], reaction : [
        { name : 'Answerer', text : `When attacked by an enemy in reach, Krismorel can make one 
        melee attack as a reaction against that enemy. `}
    ], spells : `comeplled duel, cure wounds, lesser restoration, protection from poison, 
    dispel magic, remove curse, banishment, ice storm, circle of power, tree stride`, Slots : '4,3,3,3,2,0,0,0,0',
    legendary : [
        { name : `Elder Champion(Costs 2 actions)`, text : `Krismorel can cast a spell. Enemies within 10 feet of her have disadvantage  against the spell.`},
        { name : 'Misty Step', text : `Krismorel can teleport 30 feet instantly.`},
        { name : `Nature's Wrath`, text : `Krismorel can cause vines to ensnare a creature. It must succeed on a strength or dexterity saving throw which it can make at the start of each of its turns. Enemies within 10 feet of her have disadvantage on the saving throw. ` }
    ], 
    items : [
        { name : 'Dwarven Plate', text : `Plate armor +2. Reduce forced movement by 10` },
        { name : 'Answerer', text : `+3 longsword. Allows a weapon attack with advantage as a reaction.`},
        { name : 'Haversack', text : `Handy Haversack.`},
        { name : `Oil of Slipperiness`, text : `10 minutes to apply. Freedom of movement 8 hours.`},
        { name : 'Potion of superior healing', text : '8d4+8'},
        { name : 'Potion of invulnerability', text : `Restistance all 1 hour`},
        { name : `Potion of speed`, text : `Haste for 1 minute.`}
    ]
}

/* Dwarven Demi-god. 
Bastard son of an illicit affair between
    Moradin : Law, Good, Protection, Tradition
    and Deep Duerra : Conquest, Expansion, Psionics, Evil
    Raised by Muamman Duathal : Good, Protection, Travel, Expatriates, Lightning
Themes/concepts: 
    Unbeknownst to him, the influence/corruption of his mother
        Conquering 
        Control - psychic control especially 
    Known to him: Rejection of tradition and subversion of traditional iconography.
        Dislikes static defenses and rigid formations. 
    Known to him: Mobility and shock tactics.

He should be fast and hard to pin down. As disruptive as he is hard hitting. 
He should affect the minds and emotions of those around him. 
We will aim for a overall CR of 26.  Functional 600hp, functional 200 damage per round
So rather than just stacks of hit points. He will get lots of bonuses for mobility and resistances. 


    Defensive rating: 
        Hit points 
             1.25x for immunities and resistances
        AC 

    Offensive Rating: 
        Damage Per Round 
        Attack Modifier

// why not exhausted, why not paralyzed, why not poisoned. 



damage types
  */
monsters.Kathuil = {
    name : 'Kathuil, Lord of Dwarves', size : 'M', type : 'humanoid', alignment : 'lawful neutral', ac : '24 (+1 st leather)',
    hp : '400', speed : '40', str : 26, dex : 24, con : 24, int : 28, wis : 22, cha : 30, 
    save : "Will +12, Cha +16", skill : 'athletics +14, acrobatics +13, perception +12, persuasion +16', 
    resist:"bludgeoning, piercing, and slashing from non-magical weapons",
    immune:"",conditionImmune:"exhausted, poisoned",
    senses:"Darkvision 120",passive:"",languages:"all",cr:"20",
    trait : [
        { name : 'Two Hearted', text : `Kathuil is immune to exhaustion and poison and has advantage on saving throws against being 
        paralyzed or put to sleep.`}
        , { name : 'Aura of Awe', text : `Being near Kathuil fills people with awe and terror. All creatures within 60 feet of him must 
        succeed a DC 24 Charisma saving throw or be charmed (if friendly) or frightened (if hostile). A creature that succeeds in its throw 
        is immune to the effect for the next 24 hours. ` }
        , { name : 'Siege Monster', text : `Kathuil does double damage against objects and structures` }
        , { name : 'Innate Spellcasting', text : `Kathuil's spellcasting ability is charisma (spell save DC 24), he can 
        innately cast the following spells with no material components needed.
        <br>At will: Feather Fall, Jump, Crown of Madness
        <br>3/day each: Blur, Counterspell, Lightning Bolt 
        <br>2/day each: Freedom of Movement, Passwall, Dimension Door
        <br>1/day each: Divine Word, Regenerate` }
    ]
    , action : [
        { name : 'Multiattack', text : `Kathuil attacks once with Sky Skewer and twice with unarmed strikes.` },
        { name : 'Sky Skewer', text : `Melee (reach 10 ft) or Ranged weapon attack (30/90 ft) +16 to hit, one target. Hit: 
        15 (1d10+10) piercing damage. If made as a ranged attack, on a hit or a miss Kathuil can teleport to the spear.` },
        { name : 'Unarmed strike', text : `Melee Weapon Attack, +14 to hit, one target. Hit : 12 (1d8+8) bludgeoning 
        damage plus 7 (2d6) lightning damage and 6 (2d6) psychic damage.` },
        { name : 'Full Sprint (recharge 5-6)', text : `Kathuil doubles his base movement speed for a round and doubles his jump distance.
        While this is active, he ignores difficult terrain and can run along walls or over liquids. While sprinting, Kathuil can 
        make one attack with advantage.`}
    ]
    , legendary : [
        { name : 'Throw', text : `Kathuil can initiate a grapple with one adjacent enemy. His size category for this attempt is treated as 
        large. If he succeeds the roll, rather than initiate a grapple, the opponent is moved up to 10 feet and knocked prone.` } 
        ,{ name : 'Obeisence (2 actions)', text : `Kathuil focuses his gaze on one enemy within 60 feet. That opponent must succeed on a DC 20 wisdom saving 
        throw or immediately be forced to kneel and have its movement set to 0 until the end of its next turn.` }
        ,{ name : 'Gaze', text : `Kathuil can make a perception check for which he has True Sight (120 ft).` }
    ]
    , items : [
        { name : 'Sky Skewer', text : `Legendary Pike. You gain +2 to attack and damage rolls when using this weapon. 
        It has the thrown property with a normal range of 30 feet and a long range of 90. Upon 
        hitting or missing a target, you can teleport to the location of the spear with it in your hands.` }  
        , { name : 'Glamored Studded Leather', text : `+1 studded leather that can change its appearance.` }
    ]
}
/*
,"trait":[{"name":"Angelic Weapons","text":"The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."},{"name":"Divine Awareness","text":"The solar knows if it hears a lie."},{"name":"Innate Spellcasting","text":["The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: ","At will: detect evil and good, invisibility (self only)","3/day each: blade barrier, dispel evil and good, resurrection","1/day each: commune, control weather"]},{"name":"Magic Resistance","text":"The solar has advantage on saving throws against spells and other magical effects."}],"action":[{"name":"Multiattack","text":"The solar makes two greatsword attacks."},{"name":"Greatsword","text":"Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.","attack":"Greatsword|15|4d6+8+6d8"},{"name":"Slaying Longbow","text":"Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.","attack":"Slaying Longbow|13|2d8+6+6d8"},{"name":"Flying Sword","text":"The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."},{"name":"Healing Touch (4/Day)","text":"The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."}],"legendary":[{"name":"Teleport","text":"The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see."},{"name":"Searing Burst (Costs 2 Actions)","text":"The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."},{"name":"Blinding Gaze (Costs 3 Actions)","text":"The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."}],"spells":"detect evil and good, invisibility, blade barrier, dispel evil and good, resurrection, commune, control weather"}
*/
return monsters;

});