define([],()=>{

let paladin = {
    Name : 'Paladin'
    , Size : 'Medium'
    , Type : 'humanoid'
    , Alignment : 'chaotic neutral'
    , Speed : 30 
    , Skill : ''
    , Senses : ''
    , Languages : 'common'
    , Challenge : ''
    , Defenses : { 
        Ac : '18', // Plate Default
        Hp : 1,
        Resist : '',
        Save : 'Wis +5, Cha +11',
        Immune : '',
        ConditionImmune : 'Diseased, Afraid'
    }
    , Stats : {
        Str : 15,// 15 
        Dex : 8, // 15
        Con : 15,// 15 
        Int : 8, // 
        Wis : 8, // 
        Cha : 15 // 
    }  
    , Trait : [
        { Name : 'Lay on Hands', Text : `The paladin has a pool of 100 (5*Class Level) hit points of healing power. 
        As an action they can touch a creature and expend up to the number of remaining number of hit points to 
        heal that creature. Alternatively they can spend 5 to end one poison or disease effect on the creature.`}
        // Fighting style
        // Spells not including xanathar's spells, some of which are worth having 
        , { Name : 'Spellcasting', Text : `The paladin is a 20th-level spellcaster. Its spellcasting ability is 
        Charisma (spell save DC 19, +11 to hit with spell attacks). The paladin has the following spells prepared:
        <br>1st level (4 slots): Shield of Faith, Cure Wounds, Command, Compelled Duel 
        <br>2nd level (3 slots): Lesser Restoration, Branding Smite, Protection from Poison*
        <br>3rd level (3 slots): Dispel Magic, Aura of Vitality, Blinding Smite
        <br>4th level (3 slots): Aura of Purity, Death Ward*, Find greater steed
        <br>5th level (2 slots): Circle of Power, Holy Weapon (xanathar )` }
        , { Name : 'Improved Divine Smite', Text: `When the paladin hits a creature with a melee weapon attack, they can 
        expend one spell slot to deal radiant damage to the target in addition to the weapon's damage. The extra 
        damage is 3d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 
        6d8. The damage increases by ld8 if the target is an undead or a fiend.`}
        , { Name : 'Aura of Protection', Text : `Whenever the paladin or a friendly creature within 30 feet of 
        the paladin is forced to make a saving throw, that creature can add +5 to the roll.`}
        , { Name : 'Aura of Courage', Text : `The paladin and friendly creatures within 30 feet are immune to fear.` }
        , { Name : 'Cleansing Touch 5/day', Text : `The paladin can use their action to end one spell effect on themselves 
        or one willing creature that they touch.` }
        
    ]
    , Action : [
        { Name : 'Multiattack', Text : 'The paladin makes two weapon attacks' }
        // Add 1d8 radiant to weapon damage.
    ]
    , Legendary : []
    , Reaction : [
    ]
    , Items : [
    ]
}

// Option 1: sword n board to defend. 
// Option 2: capitalize on sacred weapon to spam Great Weapon Mastery
// paladins are sorely missing good uses for bonus actions and reactions. 
    // lots of spells are bonus actions, but have concentration so are very limited. 
    // barring special items or situations, reactions can be sorely lacking too,
        // picking up hellish rebuke as oathbreaker could make much better use of 
        // otherwise untouched 1st level slots. 
let half_elf_devotion = ()=>{
    paladin.Stats = {
        Str : 20,
        Dex : 8,
        Con : 16,
        Int : 8, 
        Wis : 10,
        Cha : 20
    } // 4, 8, 12, 16, --20 
    paladin.Defenses.Ac = '18 (plate)';
    paladin.Defenses.Hp = 163; // 16 con
    paladin.Trait.push({
        Name : 'Channel Divinity: Sacred Weapon', Text : `As an action, the paladin imbues one weapon with holy 
        energy. For one minute the paladin adds their Charisma modifier to attacks made with that weapon.`
    });
    paladin.Trait.push({
        Name : 'Oath Spells', Text : `The devotion paladin always has the following spells prepared. 
        <br>1st level : protection from evil and good, sanctuary
        <br>2nd level : lesser restoration, zone of truth
        <br>3rd level : beacon of hope, dispel magic
        <br>4th level : freedom of movement, guardian of faith
        <br>5th level : commune, flame strike`
    });
    paladin.Trait.push({
        Name : 'Aura of Devotion', Text : `The paladin and friendly creatures within 30 feet are immune to charm effects.`        
    });
    paladin.Defenses.ConditionImmune += ', Charmed';
    paladin.Trait.push({
        Name : 'Purity of Spirit', Text : `The paladin is always under the effects of a protection from evil and good spell`
    });
    paladin.Trait.push({
        Name : 'Holy Nimbus', Text : `As an action the paladin can emanate an aura of sunlight. For one minute bright 
        light shines in a 30 ft radius. When an enemy creature starts its turn in the bright light, it takes 10 radiant damage.`
    });
    paladin.Trait.push({
        Name : 'Great Weapon Master (feat)', Text : `The paladin can sacrifice 5 on its attack roll to gain 10 damage 
        on a hit`
    })
    paladin.Action.push({
        Name : 'Maul', Text : `Melee weapon attack, +11 to hit, 5ft reach, one target. Hit 15 (2d6+5+1d8). 
        If either 2d6 is a 1 or 2, the paladin can re roll it and must take the new value. `
    });
}

let hill_dwarf_redemption = () => {
    paladin.Stats = {
        Str : 10,
        Dex : 10,
        Con : 18,
        Int : 12, 
        Wis : 14,
        Cha : 20 //
    } // 4, 8, 12, 16, --20 tough feat
    paladin.Defenses.Ac = '21 (plate + shield + defense style)';
    paladin.Defenses.Hp = '264';
    paladin.Trait.push({
        Name : 'Channel Divinity: Emissary of Peace', Text: `As a bonus action, the paladin grants themselves +5 
        bonus to Charisma (persuasion) checks for the next 10 minutes.`
    });
    paladin.Trait.push({
        Name : 'Oath Spells', Text : `The devotion paladin always has the following spells prepared. 
        <br>1st level : sanctuary, sleep
        <br>2nd level : calm emotions, hold person
        <br>3rd level : counterspell, hypnotic pattern
        <br>4th level : Otiluke's resilient sphere, stoneskin
        <br>5th level : hold monster, wall of force`
    });
    paladin.Trait.push({
        Name : 'Aura of the Guardian', Text : `When a creature within 30 feet takes damage, the paladin can use their 
        reaction to take the damage instead.`
    });
    paladin.Trait.push({
        Name : 'Protective Spririt', Text : `The paladin regains hit points equal to 1d6+10 (half class level) 
        if they end their turn with less than half their hit points left and are not incapacitated.`
    });
    paladin.Trait.push({
        Name : 'Emissary of Redemption', Text : `The paladin has resistance against all damage dealt by other 
        creatures. Whenever another creature hits the paladin with an attack, it takes radiant damage equal to half 
        the damage taken by the paladin. If the paladin attacks a creature, casts a spell on it, or deals damage to 
        it by means other than this feature, the creature cannot be affected by it until the paladin finishes a 
        long rest. `
    });
}

let triton_ancients = () =>{
    paladin.Stats = {
        Str : 20,
        Dex : 8,
        Con : 18, 
        int : 8,
        Wis : 8,
        Cha : 20,
    }
} 
paladin.Defenses.Ac = '20 (plate + shield)';
paladin.Defenses.Hp = 185;
paladin.Trait.push({
    Name: "Channel Divinity: Nature's Grasp", Text : `As an action, the paladin causes spectral vines to grasp at 
    a creature within 10 feet that they can see. The creature must succeed on a Strength or Dexterity saving throw 
    or be restrained. While restrained, the creature repeats the saving throw at the end of each of its turns. On 
    a success, the vines vanish.`
});
paladin.Trait.push({
    Name : 'Oath Spells', Text : `The devotion paladin always has the following spells prepared. 
    <br>1st level : ensnaring strike, speak with animals
    <br>2nd level : moonbeam, misty step
    <br>3rd level : plant growth, protection from energy
    <br>4th level : ice storm, stoneskin
    <br>5th level : commune with nature, tree stride`
});
paladin.Trait.push({
    Name : 'Aura of Warding', Text : `The paladin and friendly creatures within 30 feet have resistance against 
    damage from spells.`
});
paladin.Trait.push({
    Name : 'Undying Sentinel 1/long rest', Text : `When the paladin is reduced to 0 hit points and not killed outright, 
    they can choose to drop to 1 hit point instead. Additionally the paladin does not suffer any drawbacks of old 
    age and cannot be aged magically.`
});
paladin.Trait.push({
    Name : 'Elder Champion', Text : `Using an action, for one minute the paladin gains the following benefits:
    <br>At the start of the paladin's turn it gains 10 hit points.
    <br>Whenever the paladin casts a spell that has a casting time of 1 action, the paladin can cast it as a bonus 
    action instead
    <br>Enemy creatures within 10 feet of the paladin have disadvantage against the paladin's spells and channel 
    divinity options.`
});
paladin.Action.push({
    Name : 'Longsword', Text : `Melee weapon attack, +11 to hit, 5ft range, one target. Hit 16(1d8+7 slashing 
    +1d8 radiant)`
})

//half_elf_devotion();
//hill_dwarf_redemption();
triton_ancients();

return paladin;

});