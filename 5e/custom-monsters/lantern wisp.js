export let monster = { 
    Name : 'Lantern Wisp'
    , Size : 'Tiny'
    , Type : 'celestial'
    , Alignment : 'lawful good'
    , Speed : 'fly 50 ft. (hover)'
    , Save : 'int +11, wis +8'
    , Skill : ''
    , Senses : 'darkvision 120ft'
    , Languages : 'Common, Celestial'
    , Challenge : 1
    , Defenses : {
        Ac : 18,
        Hp : 22,
        Resist : 'fire, lightning, thunder, bludgeoning, piercing, and slashing from nonmagical weapons',
        Immune : 'radiant, poison',
        ConditionImmune : 'exhaustion, paralyzed, poisoned, prone, restrained, unconscious'
    }
    , Stats : { 
        Str : 1,
        Dex : 26,
        Con : 10, 
        Int : 13,
        Wis : 14,
        Cha : 11
    }
    , Trait : [
        { Name : 'Illuminate', Text : 'The Lantern Wisp can emanate bright light like the light spell. '}
        , { Name : 'Daylight 1/day', Text : `The Lantern Wisp can emanate the daylight spell.` }    
    ]
    , Action : [
        { Name : 'Flare', Text : `Melee Spell Attack: +4 to hit, reach 5 ft., one creature. 
        Hit:9 (2d8) radiant damage.`},
        { Name : 'Invisibility', Text : `The Lantern Wisp and its light magically become invisible until it 
        attacks or uses a light producing action.`},
        { Name : 'Spare the Dying', Text : 'The lantern Wisp can cast the Spare the Dying cantrip at will. '}
    ]
    , Reaction : []
    , Items : [
        { Name : 'Driftglobe', Text : `Uncommon magical item.`}
    ]
    , Legendary : []
}
export let LanternWisp = monster;
