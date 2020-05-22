
/*
    Elarahal is a reserved scourge Aasimar in her early forties. She 
    is a nomadic cleric of Auril who travels throughout the cold and 
    rough areas of the north to visit any settlements she knows about.  

    She is knowledgable and adapt at dealing with the cold environment, 
    and is particularly useful in an arctic biome. 
*/

export let monster = {
    Name : 'Elarahal'
    , Size : 'Medium'
    , Type : 'humanoid (Aasimar)'
    , Alignment : 'CN'
    , Speed : 30
    , Save : ''
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '16 (Chain Shirt),',
        Hp : 60,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 14,
        Dex : 14, 
        Con : 14,
        Int : 10,
        Wis : 18, 
        Cha : 10
    }
    , Trait : [
        { Name : 'Channel Divinity, Ice Shield', Text : `As an action, Elarahal can 
            create a shield of ice for 10 minutes. It provides an armor bonus equal to 
            her proficiency (+4) and grants her resistance to cold for the duration. `}
        , { Name : 'Spellcasting', Text : `Elarahal 9th-level spellcaster. Her 
            spellcasting ability is Wisdom (spell save DC 16, +8 to hit
            with spell attacks). She has the following ranger spells prepared:
            <br>Cantrips: Ray of Frost, Light, Mending, Thaumaturgy
            <br>1st level (4 slots): Environmental Resistance, Ice Knife, Cure Wounds, Shield of Faith
            <br>2nd level (3 slots): Shatter, Ice Axe, Warding Bond, Lesser Restoration
            <br>3rd Level (3 slots): Sleet Storm, Slow, Dispel Magic, Protection from Energy, Snow shoes. 
            <br>4th Level (3 slots): Ice Storm, Conjure minor elementals, Control Water, Death Ward
            <br>5th Level (1 slot): Cone of Cold, Conjure Elemental, Mass Cure Wounds`
        }
    
    ]
    , Action : [
        { Name : 'Ray of Frost', Text : `Ranged spell attack. One target, range 60, +8 to hit. 
            Hit: 12 (2d8+4) frost damage and the target's movement is reduced by 10 until the start 
            of Elarahal's next turn.`},
        { Name: 'Ice Axe', Text : `As a bonus action, Elarahal summons an axe of ice to her hand that 
            lasts for one minute. It has stats like a battleaxe with a modifier of half her proficiency. 
            Hit: 10 (1d8+6) slashing damage.` }
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}


/*

Cleric Level : Domain Spells
1st : Armor of Agathys, Ice Knife (Xan)
3rd : Snilloc's Snowball Storm (Xan), Snowshoes (Custom)
5th : Sleet Storm, Slow
7th : Ice Storm, Freedom of Movement
9th : Cone of Cold, Conjure Elemental

Frost domain: 
Bonus Proficiencies: 
At level one, you gain proficiency with martial weapons and heavy armor. 

Ice Weapon: 
Starting at level 1 you can conjure a weapon of ice. As an action, a one handed melee 
weapon forms in one of your free hands. The weapon has the same stats as a mundane weapon 
of its type and lasts for one minute before dissolving. While you are holding the weapon, 
you can use it as a holy symbol and the hand holding it counts as free for the purpose 
of executing somatic spell components.  
You can use this ability a number of times equal to your wisdom modifier (minimum of once). 
You regain all expended uses at the end of a long rest.  

Channel Divinity: Ice Shield 
Starting at 2nd level, you can use your Channel Divinity to form a shield of ice. 
As a bonus action, ice quickly envelops your arm below the elbow, expanding to form  
a shield. It has the same stats as a mundane shield, except that the armor bonus 
it provides is equal to your proficiency modifier. T
The shield lasts for one minute and can be dismissed as a free action.

Biting Cold: 
Starting at 6th level, when you deal cold damage to a creature, you reduce its movement by 
5ft. If the cold damage comes from a spell or ability that already reduces movement, the 
amount reduced is increased by 5ft. 

Divine Strike: 
At 8th level, you gain the ability to infuse your weapon strikes with divine energy. 
Once on each of your turns when you hit a creature with a weapon attack, you
can cause the attack to deal an extra 1d8 cold damage to the target. When you
reach 14th level, the extra damage increases to 2d8.

Glacial Embodyment: 
Starting at 17th level, you can use your action to produce a protective coating of ice 
that lasts for one minute or until you dismiss it using another action. For the duration, 
you have resistance to cold damage and regain 10 temporary hit points per round. Any 
creature within 10 feet of you has disadvantage on saves against your spells and effects 
that deal cold damage.

Custom Spells: 
Snowshoes (2nd level transmutation)
Casting Time: 1 action 
Range: Touch 
Components: V, S, M (a small leather string)
Duration: 6 hours 
You touch a creature. Moving through non magical difficult terrain costs the creature no 
extra movement until the spell ends. 
At higher levels. When you cast this spell using a spell slot of 3 or higher, you can target 
two additional creatures for each slot level above 2nd. 

*/

