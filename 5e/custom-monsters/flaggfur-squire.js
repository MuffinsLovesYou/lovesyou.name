export let monster = {
    Name : 'Did we pick a name for this person?'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'lawful neutral'
    , Speed : 30
    , Save : 'Con +5, Wis+6'
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '18 (Chainmail + Shield)',
        Hp : 38,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 16,
        Dex : 8, 
        Con : 14,
        Int : 10,
        Wis : 16, 
        Cha : 11
    }
    , Trait : [
        { Name : 'Spellcasting', Text : `The squire is a 5th level spellcaster. Their spellcasting ability modifier is Wisdom 
            (spell save DC 14, +6 to hit with spell attacks). They have the following cleric spells prepared:
            <br>Cantrips (at will): light, mending, sacred flame, spare the dying,
            <br>1st level(4 slots): divine favor, guiding bolt, healing word, shield of faith
            <br>2nd level(3 slots): lesser restoration, magic weapon, prayer of healing, silence
            <br>3rd level(2 slots): beacon of hope, crusader's mantle, revivify` }
    ]
    , Action : [
        { Name : 'Warhammer', Text : `Melee weapon attack: +6 to hit, reach 5ft, one target. Hit: 8 (1d8+3) bludgeoning damage.` }
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}

export let FlaggfurSquire = monster;


