define([],()=>{

/*
    At around 370 years of age, Eberk is ancient for a dwarf. She is barely older than 
    Kathuil himself, but has served as something of a sister/foster mother for him.

    When Kathuil was cast to the material plane, Eberk was in her twenties and was 
    apprenticed to the wandering cleric Fonn Searbh. Their god, Muamman Duathal 
    handed Kathuil into Searbh's care to be brought up knowledgeable about, but 
    isolated from the wider world. 

    She is serving as a village elder at Egath Meden, a group of tribal dwarves 
    living in the jungles about 150 miles east-northeast of Gingonol. 
    
    Age is about as old as dwarves get and age has slowed her down, but she still 
    posesses a willowy toughness earned from years of travel. When travelling
    She keeps her hair cut short and often has a masculine presentation. She 
    favors a grey and purple brocaded silk tunic with dark wool trousers. She has a 
    smooth staff capped with a holy symbol.
    

*/


return {
    Name : 'Eberk'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic good'
    , Speed : 20
    , Save : 'Wis +8, Con +6'
    , Skill : ''
    , Senses : ''
    , Languages : 'Dwarven, Common, Elven, Gnomish, Celestial'
    , Challenge : ''
    , Defenses : { 
        Ac : '12 (hide)',
        Hp : 101,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 8,
        Dex : 8, 
        Con : 15,
        Int : 15,
        Wis : 18, 
        Cha : 11
    }
    , Trait : [
        { Name : 'Spellcasting', Text : `Eberk is a 9th-level spellcaster. Her spellcast-
            ing ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). She has 
            the following cleric spells prepared:
            <br>Cantrips (at will):guidance, mending, light, shocking grasp 
            <br>1st level (4 slots): sanctuary, purify food and drink, thunderwave, healing word
            <br>2nd level (3 slots): lesser restoration, calm emotions, enhance ability, shatter
            <br>3rd level (3 slots): dispel magic, call lightning, feign death
            <br>4th level (3 slots): freedom of movement, control water, death ward
            <br>5th level (1 slot): raise dead, commune`}
    ]
    , Action : [
        { Name : 'Channel Divinity: Lightning Spray (recharge 5-6)', Text : `Eberk sprays wild lightning 
        from her fingertips. Each creature in a 20 ft cone must make a DC 16 dexterity saving throw, 
        taking 18 damage on a failed saving throw or 9 on a successful one.`}
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}
});


