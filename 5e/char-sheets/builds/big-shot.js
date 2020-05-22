import { Character } from '../../character.js';

export let BigShot = new Character({
    Name : 'Big Shot',
    Race : 'Half Elf',
    Alignment : 'True Neutral',
    Speed : 30,
    Senses : 'Darkvision 60',
    Languages : 'common, elven',
    Stats : {
        Strength : 8, // 4 8
        Dexterity : 20,
        Constitution : 16, // 
        Intelligence : 8,
        Wisdom : 10, 
        Charisma : 20 // 12 16
    },
    Classes : [
        { Name : 'Paladin', Level : 8, Archetype : 'Oathbreaker' } 
        , { Name : 'Bard', Level : 12, Archetype : 'College of Whispers' }
    ],
    Defenses : {
        //HP :
        AC : 17, // st leather
        Immunities : '',
        Resistances : '',
        ConditionImmunities : '',
        Saves : {
            Strength : { Bonus : 5 },
            Dexterity : { Bonus : 5 },
            Constitution : { Bonus : 5 },
            Intelligence : { Bonus : 5 },
            Wisdom : { Trained : true, Bonus : 5 },
            Charisma : { Trained : true, Bonus : 5 }
        }
    },
    Skills : {
        // half elf
        // background
        // paladin 
        // bard 
        Perception : { Trained : true },
        Athletics : { Trained : true }
    },
    Features : {
        'Lay on Hands' : `Pool of 40 hp. Action to heal a creature from that pool or expend 5 points to cure a disease or poison effect.`,
        'Fighting Style' : 'Duelist, +2 bonus to damage rolls when wielding a weapon in one hand and no other weapon.',
        'Divine Smite' : 'On hit with a weapon attack, can expend a spell slot to deal an additional 1d8 + 1/spell slot level radiant damage. '
            + 'Deals an additional 1d8 vs undead or fiends.',
        'Channel Divinity' : 'Dreadful Aspect: As an action , the paladin channels the darkest emotions and focuses them into a burst of '
            + 'magical menace. Each creature of the paladin\'s choice within 30 feet of the paladin must make a Wisdom saving throw if it ' 
            + 'can see the paladin. On a failed save, the target is frightened of the paladin for 1 minute. If a creature frightened by this '
            + 'effect ends its turn more than 30 feet away from the paladin, it can attempt another Wisdom saving throw to end the effect on it',
        'Aura of Protection' : 'Big Shot and any ally within 10 feet gains a +5 (charisma) bonus to saving throws.',
        'Aura of Hate' : 'The paladin, and any fiends or undead within 10 feet of the paladin gain a +5 (charisma) bonus to mellee '
            + 'weapon damage rolls.',
        'Bardic Inspiration (d10) 5/short rest' : 'Bonus action, 1 creature within 60 that can hear you. Any time in the next 10 minutes, '
            + 'that creature can add 1d10 to one attack roll, ability check, or saving throw.',
        'Jack of All Trades' : 'Add half proficiency to any ability check that does not already have your proficiency.',
        'Psychic Blades' : 'When you hit a creature with a weapon attack, you can expend one use of bardic inspiration to '
            + 'deal an additional 5d6 necrotic damage to that target. You can do this once per round on your turn.',
        'Spellcasting' : `Big Shot is a 20th level spellcaster. Her spellcasting ability 
        modifier is Charisma (spell save DC 19, +11 to hit with spell attacks). 
        She has the following spells prepared: 
        <br>Cantrip: Prestidigitation, Mage Hand, Mending, Light
        <br>1st Level (4 slots): 
            <br> Paladin: Hellish Rebuke, Inflict Wounds, Detect Magic, Detect Evil and Good, Cure Wounds, Shield of Faith, Command
            <br> Bard : Identify, Feather Fall, Unseen Servant, Faerie Fire
        <br>2nd Level (3 slots): 
            <br> Paladin: Crown of Madness, Darkness, Find Steed, Lesser Restoration, Protection from Poison, Locate Object, 
            <br> Bard : Hold Person, Invisibility, See Invisibility
        <br>3rd Level (3 slots): Dispel Magic, Tongues, Speak with Dead
        <br>4th Level (3 slots): Greater Invisibility, Freedom of Movement, Dimension Door
        <br>5th Level (2 slots): Modify Memory, Raise Dead, Banishing Smite*
        <br>6th Level (1 slot): Mass Suggestion, Heal*
        <br>7th Level (1 slot):
        <br>8th Level (1 slot):
        <br>*=Obtained through Magical Secrets` 
    },
    Spells : [
        // Cantrips
        'Prestidigitation', 'Mage Hand', 'Mending', 'Light',
        // Level 1
        // Paladin
        'Hellish Rebuke', 'Inflict Wounds', 'Detect Magic', 'Detect Evil and Good', 'Cure Wounds', 'Shielf of Faith', 'Command',
        // Bard
        'Identify', 'Feather Fall', 'Unseen Servant', 'Faerie Fire',
        // Level 2', 
        // Paladin
        'Crown of Madness', 'Darkness', 'Find Steed', 'Lesser Restoration', 'Protection from Poison', 'Locate Object',
        // Bard
        'Hold Person', 'Invisibility', 'See Invisibility',
        // Level 3
        'Dispel Magic', 'Tongues', 'Speak with Dead', 
        // 4
        'Greater Invisibility', 'Freedom of Movement', 'Dimension Door',
        // 5 
        'Modify Memory', 'Raise Dead', 
        // 6 
        'Mass Suggestion'
    ],
    Actions : {
        'Notes' : `+12 damage on hit (dex + duelist + aura of hate)
        <br>Psychic Blades: 5d6 additional necrotic
        <br>Divine Smite: 1d8+1d8/spell slot level radiant damage (max 5d8)`,
        'Rapier' : `Melee weapon attack: +5 to hit, reach 5ft, one target. Hit: 16 (1d8+12) piercing damage.`,
        'Multiattack' : `Make two Rapier attacks`,
        'Big Hit' : `Before attacking, cast Banishing Smite. On hit expend 1x Psychic Blades use and use Divine Smite with a 
        spell slot of 4 or higher.  
        <br>Hit: 76 = 16 (1d8+12) piercing damage + 25 (5d10) force damage + 20 (5d8) radiant damage + 15 (5d6) necrotic damage `
    },
    Items : {
        'Gold' : 20 
        ,'Chain Mail' : 1
        ,'Shield' : 1
    },
    Background : {
        Trait : ""
        ,Ideal : ""
        ,Bond : ""
        ,Flaw : ""
        ,Background : ""
        ,Description : ""
        ,Feature : ""
    }

});


