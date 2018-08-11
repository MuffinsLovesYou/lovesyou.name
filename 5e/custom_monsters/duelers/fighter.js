define([],()=>{


// Level 20 mountain dwarf battlemaster fighter for high level playtesting
// Level 20 half orc champion 
let fighter = {
    Name : 'Fighter'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic neutral'
    , Speed : 30 
    , Skill : 'Athletics +11'
    , Senses : 'darkvision 60'
    , Languages : 'common'
    , Challenge : ''
    , Defenses : { 
        Ac : '18 (plate)', 
        Hp : 264, //+ tough feat
        Resist : '',
        Immune : '',
        Save : 'str +11, con +11, wis +8 (feat)',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 15,// 15 
        Dex : 8,// 
        Con : 15,// 15 
        Int : 8, // 
        Wis : 14, // 
        Cha : 10  // 
    }  
    , Trait : [
        { Name : 'Second Wind 1/short rest', Text : `Fighter can use a bonus action to regain 1d10+20 hit points.`}
        , { Name : 'Action Surge 2/short rest', Text : `Fighter can take an additional action on top of regular action and possible bonus.`}
        , { Name : 'Indomitable 3/long rest', Text : `Fighter can re-roll a failed save and must use the new roll. `}
    
        // resilient (prof wis saves) as lvl 16
        // tough (+40 hp) as lvl 19
    ]
    , Action : [
        { Name : 'Multiattack', Text : `The fighter makes four main weapon attacks.`}
    ]
    , Legendary : []
    , Reaction : []
    , Items : []
}

let dwarf_battlemaster = ()=>{
    fighter.Senses = 'darkvision 60';
    fighter.Defenses.Hp = 265; // Toughness feat
    fighter.Defenses.Ac = '18 (plate)';
    fighter.Defenses.Save = 'str +11, con + 11, wis +8 (feat)';
    fighter.Stats = {
        Str : 20,
        Dex : 8,
        Con : 20,
        Int : 10,
        Wis : 14,
        Cha : 8
    }
    fighter.Trait.push({ Name : 'Combat Superiority (Battlemaster)', Text : `The fighter has 6 1d12 superiority die that can be 
        expended to use a combat maneuver. The fighter knows 9 combat maneuvers that can enhance an attack. Only one 
        maneuver can be used per attack. Maneuvers are on PH74<br>
        * Disarming Attack <br>
        * Feinting Attack <br>
        * Lunging Attack <br>
        * Menacing Attack <br>
        * Parry <br>
        * Precision Attack <br>
        * Pushing Attack <br>
        * Riposte <br>
        * Trip Attack <br>
        `});
    fighter.Trait.push({ Name : 'Great Weapon Master (Feat)', Text : `Before making a melee weapon attack with a heavy weapon, the 
        fighter can choose to add -5 to the attack roll. If they hit, they gain +10 to the damage roll. ` });
    fighter.Trait.push({ Name : 'Mage Slayer', Text : `If a creature within 5 feet casts a spell, the fighter can use a reaction to make 
        a melee weapon attack against that creature. When the fighter damages a creature that is concentrating on a spell, 
        it has disadvantage on the saving throw to maintain concentration. The fighter has advantage on saving throws against 
        spells cast by creatures within 5 feet.`});
    fighter.Action.push({ Name : 'Greatsword', Text : `Melee Weapon Attack: +11 to hit, reach 5ft, one target. Hit 12 (2d6+5) slashing damage. 
        If either d6 rolls as a 1 or 2, the fighter can re-roll and take the new value.`});
    fighter.Reaction.push({ Name : 'Parry', Text : 'See Parry battle maneuver.' });
    fighter.Reaction.push({ Name : 'Riposte', Text : 'See Riposte battle maneuver.' });
}

let half_orc_champion = ()=>{
    fighter.Senses = 'darkvision 60ft';
    fighter.Defenses.Hp = 265;//toughness feat 
    fighter.Defenses.Ac = '21 (plate, shield, style)';
    fighter.Defenses.Save = 'str +11, con +11, wis +8(feat)'
    fighter.Stats = {
        Str : 20,// 15 
        Dex : 10,// 
        Con : 20,// 15 
        Int : 10, // 
        Wis : 14, // 
        Cha : 10  // 
    }  
    
    fighter.Trait.push({ Name : 'Champion', Text : `The fighter crits on a 18-20. If the fighter has no more than half their hit points 
        they can gain 10 (5+con) at the start of their turn. `});
    fighter.Trait.push({ Name : 'Shield Master', Text : `The fighter can use a bonus action to shove a creature within 5 feet. The fighter 
        can add their shield AC bonus to their dexterity saving throw. The fighter can take no damage if they succeed on a throw 
        that allows them to take half. `});
    fighter.Action.push({ Name : 'Longsword', Text : `Melee Weapon Attack: +11 to hit, reach 5ft, one target. Hit 11 (d8+7) slashing damage. `});
}

// Mountain dwarf eldritch knight with polearm/sentinel cheese
let dwarf_eldritch_knight = ()=>{
    fighter.Senses = 'darkvision 60ft';
    fighter.Defenses.Hp = 265; // if toughness feat
    fighter.Defenses.Ac = '18 (plate)';
    fighter.Defenses.Save = 'str+11, con+11'  
    fighter.Stats = {
        Str : 20, // 4 6 
        Dex : 8,
        Con : 20, // 8 
        Int : 14, // 12 
        Wis : 10, 
        Cha : 8
    }
    // Polearm Mastery, Sentinel, Tough, War Caster
    fighter.Trait.push({ Name : 'Polearm Mastery (feat)', Text : `` });
    fighter.Trait.push({ Name : 'Sentinel (feat)', Text : `` });
    fighter.Trait.push({ Name : 'Eldritch Knight', Text : `The fighter is a 20th level spellcaster. Their spellcasting 
    ability modifier is intelligence (DC 17, +9 to hit with spell attacks). They have the following spells prepared:
    <br>cantrip: 3 cantrips from wizard list 
    <br>1st (4 slots): Shield, Witch Bolt, Feather Fall, Alarm
    <br>2nd (3 slots): Lesser Restoration, Misty Step, Protection from Poison
    <br>3rd (3 slots): Glyph of Warding, Lightning Bolt, Fly/Haste, Dispel Magic
    <br>4th (1 slot): Fire Shield, Fabricate
    `});
    fighter.Trait.push({ Name : 'Eldritch Strike', Text : `When the fighter hits a creature with a weapon attack, 
    that creature has disadvantage against the next saving throw it makes against a spell the fighter casts before the 
    end of the fighter's next turn` });
    fighter.Trait.push({ Name : 'Improved War Magic', Text : `When the fighter uses an action to cast a spell, they can make 
    one weapon attack as a bonus action.`})
}

//dwarf_battlemaster();
//half_orc_champion();
dwarf_eldritch_knight();

return fighter;


});