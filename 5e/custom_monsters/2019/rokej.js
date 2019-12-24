define([],()=>{

/*
    Rokej is a nilbog, a goblin possessed by a prankster god. He improbably claims 
    to have accidentally flown several thousand miles on the winds of the sweep and 
    is looking to get back north to the goblin hordes where he can fulfill his raison 
    detre of shaving bugbears. 
*/

return {
    Name : 'Rokej'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : ''
    , Speed : 25
    , Save : ''
    , Skill : ''
    , Senses : 'Darkvision (60)'
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '15 (leather armor)',
        Hp : 32,
        Resist : '',
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 8,
        Dex : 16, 
        Con : 12,
        Int : 10,
        Wis : 8, 
        Cha : 16
    }
    , Trait : [
        { Name : 'Innate Spellcasting', Text : `The nilbog's innate spellcasting ability is
            Charisma (spell save DC 12). It can innately cast the following
            spells, requiring no material components :
            At will: mage hand, Tasha's hideous laughter, vicious mockery, mislead
            1/day: confusion, Otto's Irresistable Dance`},
        { Name : 'Nilbogism', Text : `Any creature that attempts to damage the nilbog
            must first succeed on a DC 14 Charisma saving throw or be
            charmed until the end of the creature's next turn. A creature
            charmed in this way must use its action praising the nilbog.
            The nilbog can't regain hit points, including through magical
            healing, except through its Reversal of Fortune reaction.`},
        { Name : 'Nimble Escape', Text : `The nilbog can take the Disengage or Hide ac-
            tion as a bonus action on each of its turns`}
    ]
    , Action : [
        { Name : '', Text : ``}
    ]
    , Reaction : [
        { Name : 'Reversal of Fortune', Text : `In response to another creature dealing
            damage to the nilbog, the nilbog reduces the damage to O and
            regains 2d6 hit points` }
    ]
    , Legendary : [
        { Name : '', Text : ``}
    ]
    , Items : [
        { Name : 'Para Cloak', Text : `Rokej has a patchwork cloak he ties around himself as a 
            robe. If unfurled, it gives him a fly (glide) speed of 20. `}
    ]
}
});


