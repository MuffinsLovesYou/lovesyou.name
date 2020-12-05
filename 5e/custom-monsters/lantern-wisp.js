export let monster = { 
    Name : 'Lantern Wisp'
    , Size : 'Tiny'
    , Type : 'celestial'
    , Alignment : 'lawful good'
    , Speed : 'fly 50 ft. (hover)'
    , Save : 'dex +10, cha +2'
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
        { Name : 'Innate Spellcasting', Text : `The wisp's spellcasting ability is wisdom (spell save DC 12) 
            It can innately cast the following spells: 
            <br>At Will: Light, Invisibility (self only)
            <br>1/Day: Daylight` },
    ]
    , Action : [
        { Name : 'Flare', Text : `Melee Spell Attack: +4 to hit, reach 5 ft., one creature. 
        Hit:9 (2d8) radiant damage.`},
    ]
    , Reaction : []
    , Items : [
        { Name : 'Driftglobe', Text : `Uncommon magical item.`}
    ]
    , Legendary : []
}
export let LanternWisp = monster;
