/*
He has long, curled, brown hair and green eyes.
He has smooth black skin.
He stands 182cm (5'11") tall and has a muscular build.
He has an edgy, bland face.
He has slightly long nails.
He is prone to violence.
He takes everything at face-value.
He frequently thinks aloud.
*/



export let monster = {
    Name : 'Doran Clees'
    , Size : 'Medium'
    , Type : 'humanoid (human)'
    , Alignment : 'lawful neutral'
    , Speed : 30
    , Save : 'Con +5, Wis+6'
    , Skills : 'Religion +3, Heal +6, Athletics +6'
    , Senses : ''
    , Languages : 'Human, Dwarvish'
    , Challenge : '2'
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
            <br>3rd level(2 slots): beacon of hope, clairvoyance, revivify` }
    ]
    , Action : [
        { Name : 'Warhammer', Text : `Melee weapon attack: +6 to hit, reach 5ft, one target. Hit: 8 (1d8+3) bludgeoning damage.` }
    ]
    , Reaction : [ ]
    , Legendary : [
    ]
    , Items : [
        { Name : 'Chain Mail', Text : ``},
        { Name : 'Shield', Text : ``},
        { Name : 'Warhammer', Text : ``},
        
    ]
}

export let Doran = monster;


