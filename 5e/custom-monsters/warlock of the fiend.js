define([],()=>{

return {
    Name : 'Warlock of the Fiend',
    Size : 'Medium',
    Type : 'humanoid',
    Alignment : 'lawful evil',
    Speed : 30,
    Save : 'Wis+4, Cha+7',
    Skill : 'Arcana+4, Deception +7, Persuasion +7, Religion +4',
    Senses : 'Darkvision 60ft',
    Languages : 'Dwarven, Common, Infernal',
    Challenge : 7,
    Defenses : {
        Ac : '12 (15 with mage armor)',
        Hp : '78 (12d8+24)',
        Resist : 'slashing dmage from nonmagical attacks not made with silvered weapons',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 10, Dex : 14, Con : 15, Int : 12, Wis : 12, Cha : 18
    }
    ,Trait : [
        { Name : 'Innate Spellcasting', Text : `The warlock's innate spellcasting ability is 
        Charisma. It can innately cast the following spells (spell save DC 15), requiring no material 
        components:
        <br> At will : alter self, false life, levitate (self only), mage armor (self only), silent image
        <br> 1/day each : feeblemind, finger of death, plane shift` }
        , { Name : 'Spellcasting', Text : `The warlock is a 17th-level spellcaster. Its spell-casting ability is 
        Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it 
        finishes a short or long rest. It knows the following warlock spells:
        <br>Cantrips (at will) : eldritch blast, fire bolt, friends, mage hand, minor illusion, prestidigitation, 
        shocking grasp
        <br>1st-5th level (4 5th-level slots): banishment, burning hands, flame strike, hellish rebuke, magic circle, 
        scorching ray, scrying, stinking cloud, suggestion, wall of fire. ` }
        , { Name : `Dark One's Own Luck (Recharges after a Short of Long Rest)`, Text : `When the warlock makes an ability 
        check or saving throw, it can add a d10 to the roll. It can do this after the roll is made but before any of the 
        roll's effects occur.` }
    ]
    , Action : [
        { Name : 'Mace', Text : `Melee Weapon Attack: +3 to hit, reach 5ft., one target. Hit: 3 (1d6) bludgeoning damage plus 
        10 (3d6) fire damage.`}
    ]
    , Reaction : []
    , Legendary : []
    , Items : []

}


});