
// Frenzy Barbarian
// Level 20 half orc frenzy barbarian for high level playtesting
export let monster = {
    Name : 'Barbarian'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic neutral'
    , Speed : 40 // +10 from class
    , Skill : 'Athletics +13'
    , Senses : 'darkvision 60'
    , Languages : 'common, orc'
    , Challenge : ''
    , Defenses : { 
        Ac : '21', // dex + con, no shield
        Hp : 285,
        Resist : 'bludgeoning, piercing, and slashing from non-magical weapons',
        Save : 'str +13, con +13',
        Immune : '',
        ConditionImmune : 'charm (Berserker), fear (Berserker)'
    }
    // 4, 8, 12, 16, 19
    , Stats : {
        Str : 24,// 15 
        Dex : 18,// 15
        Con : 24,// 15 
        Int : 8, // 
        Wis : 8, // 
        Cha : 8  // 
    }  
    , Trait : [
        { Name : 'Rage', Text : `Barbarian can rage at any time. While raging, they get the following benefits.<br>
        Advantage on strength checks and saving throws<br>
        * +4 damage on melee attack damage<br>
        * resistance to bludgeoning, piercing, and slashing damage<br>
        * if barbarian drops to 0 hit points, they can make a DC 10 constitution saving throw to drop to 1 hit point. Each 
        time this feature is used, the DC increases by 5.<br>
        * immunity to fear and charm effects (berserker path)` },
        { Name : 'Reckless Attack', Text : `On any round, Barbarian can attack with advantage. If Barbarian does this, attack 
        rolls against Barbarian have advantage until the next turn.`},
        { Name : 'Danger Sense', Text : `Barbarian has advantage on dexterity saving throws against effects they can see.`}
        ,{ Name : 'Brutal Critical', Text : `Barbarian can roll 4 additional damage dice (one from race) on a critical hit.`}
        , { Name : 'Frenzy (Berserker)', Text : `For the duration of a rage, Barbarian can make an extra attack as a bonus action on 
        each of their turns. They gain 1 level of exhaustion each time they use this. `}
    ]
    , Action : [
        { Name : 'Multiattack', Text : `Barbarian makes two (three if Frenzied) Great Axe attacks. ` },
        { Name : 'Great Axe', Text : `Melee Weapon Attack: +13 to hit, 5ft reach, 1 target. Hit 18 (d12+11)` }
    ]
    , Legendary : []
    , Reaction : [
        { Name : 'Retaliation (Berserker)', Text : `When Barbarian takes damage from a creature within 5 feet, Barbarian 
        can use their reaction to make a melee weapon attack against that creature.`}
    ]
    , Items : [
    ]
}

