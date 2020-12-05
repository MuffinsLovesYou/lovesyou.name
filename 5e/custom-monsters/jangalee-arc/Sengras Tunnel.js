/* Master bard in service of Jangalee Pashu
*/

export let monster = {
    Name : 'Sengras Tunnel'
    , Size : 'Medium'
    , Type : 'humanoid (halfling)'
    , Alignment : ''
    , Speed : 25
    , Save : ''
    , Skill : ''
    , Senses : ''
    , Languages : ''
    , Challenge : '9'
    , Defenses : { 
        Ac : '16 (+1 st.leather)',
        Hp : 94 ,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 8,
        Dex : 16, 
        Con : 12,
        Int : 12,
        Wis : 12, 
        Cha : 20
    }
    , Trait : [
        { Name : 'Spellcasting', Text : `Sengras is a 17th level spellcaster. His spellcasting ability modifier is charisma (DC 18 save, +10 to hit with spell attacks). 
            He has the following spells prepared.
            <br>At Will: Prestidigitation, Mage Hand, Light
            <br>1st(4 slots): Cure Wounds, Thunderwave
            <br>2nd(3 slots): Animal Messenger, Enhance Ability,
            <br>3rd(3 slots): Hypnotic Pattern, Dispel Magic, Counterspell, Sending
            <br>4th(3 slots): Greater Invisibility, Dimension Door, Locater Creature
            <br>5th(2 slots): Raise Dead, Planar Binding, Teleportaion Circle, Scrying
            <br>6th(1 slot): Programmed Illusion, Contingency, Word of Recall
            <br>7th(1 slot): Mordenkainen's Magnificent Mansion` }
    ]
    , Action : [
        { Name : '', Text : ``}
    ]
    , Reaction : []
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : '', Text : ``}
    ]
}
export let Sengras = monster;


