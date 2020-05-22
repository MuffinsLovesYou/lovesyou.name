import { Character } from '../../character.js';

export let Law = new Character({
    Name : 'Law',
    Race : 'White Dragonborn',
    Alignment : 'Chaotic Neutral',
    Speed : 30,
    Senses : '',
    Languages : 'common, draconic',
    Stats : {
        Strength : 20 , // 4, 8
        Dexterity : 9,
        Constitution : 12, // 19
        Intelligence : 8,
        Wisdom : 14, 
        Charisma : 20 // 12, 16
    },
    Classes : [
        { Name : 'Paladin', Level : 12, Archetype : 'Vengeance' },
        { Name : 'Cleric', Level : 8, Archetype : 'War' }
    ],
    Defenses : {
        //HP :
        AC : 18,
        Immunities : '',
        Resistances : '',
        ConditionImmunities : '',
        Saves : {
            Strength : { Bonus : 5 },
            Dexterity : { Bonus : 5 },
            Constitution : { Trained : true, Bonus : 5 },
            Intelligence : { Bonus : 5 },
            Wisdom : { Trained : true, Bonus : 5 },
            Charisma : { Trained : true, Bonus : 5 }
        }
    },
    Skills : {
        Athletics : { Trained : true }, // Showman
        Insight : { Trained : true }, // Paladin
        Performance : { Trained : true }, // Showman
        Persuasion : { Trained : true }, // Paladin
    },
    Features : {
        'Breath Weapon' : '1 action, 15ft cone. 5d6 cold damage. dc 15 con save for half.',
        'Feat: Great Weapon Master': 'On your turn, when you crit with a melee weapon attack or reduce an enemy '
            + 'to 0 hit points with one, you can make an additional melee weapon attack as a bonus action.'
            + '<br>Before you make a melee attack roll with a weapon you are proficient with, you can take a '
            + '-5 penalty to the attack roll. If the attack hits, you add +10 to the attack damage.',
        'Feat: Resilient (Constitution)': 'You gain +1 con and proficiency in constitution saving throws.',
        'Great Weapon Fighting Style' : `Reroll a 1 or 2 for weapon damage rolls for attacks made with a weapon you are holding in two hands.`,
        'Lay on Hands' : '60 hp pool of hit points. 1 action to heal using the pool or spend 5 from it to end 1 disease or poison effect.',
        'Improved Divine Smite' : 'On weapon hit: deal an additional 1d8 radiant damage.' 
            + 'Additionally, you can expend a spell slot to deal an additional 1d8 + 1d8/slot level radiant damage '
            + 'up to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or fiend.',
        'Aura of Protection' : 'You and any friendly creature within 10 feet gain a bonus of +5 to any saving throw.',
        'Channel Divinity 2/rest': 
            '<br>Vow of Enmity : Bonus action, 1 target within 10 feet. For the next minute you have advantage '
            + 'on attacks rolls made against that target.' +
            + '<br>Guided Strike : You can use your channel divinity to add +10 to one attack roll, or your reaction '
            + 'to add +10 to one attack roll by an ally within 30 feet.',
        'Relentless Avenger' : 'When you hit a creature with an opportunity attack, you can move up to half your '
            + 'speed immediately after the attack and as part of the same reaction. This movement doesn\'t provoke '
            + 'opportunity attacks.',
        'War Priest 3/day' : 'When you use the attack action, you can make one weapon attack as a bonus aciton.',
        'Divine Strike' : 'Once per each of your turns, when you hit with a weapon attack, you can deal an additional '
            + '1d8 damage of the same type as the weapon.',
        'Spellcasting (Paladin)' : `Law is a 20th level spellcaster. His spellcasting ability 
        modifier is Charisma (spell save DC 19, +11 to hit with spell attacks) for paladin spells and 
        Wisdom (spell save DC 16, +8 to hit with spell attacks) for cleric spells. 
        He has the following spells prepared:  11 cleric
        <br>Cantrips: Guidance, Light, Mending, Spare the Dying
        <br>1st Level (4 slots): 
        <br>    Paladin: Bane, Hunter's Mark, Compelled Duel, Command, Searing Smite, Thunderous Smite
        <br>    Cleric : Divine Favor, Shield of Faith, Cure Wounds, Healing Word
        <br>2nd Level (3 slots):
        <br>    Paladin: Hold Person, Misty Step, Branding Smite, Find Steed, Protection from Poison, Lesser Restoration
        <br>    Cleric : Magic Weapon, Spiritual Weapon, Blindness/Deafness, Silence, Augury
        <br>3rd Level (3 slots):
        <br>    Paladin: Haste, Protection from Energy, Daylight, Aura of Vitality, Blinding Smite
        <br>    Cleric: Crusader's Mantle, Spirit Guardians, Dispel Magic, Revivify, Clairvoyance
        <br>4th Level (3 slots):
        <br>    Cleric: Freedom of Movement, Stoneskin, Banishment, Death Ward, Divination
        <br>5th Level (2 slots):
        <br>6th Level (1 slot):
        <br>7th Level (1 slot)` 
    },
    Spells : [
        // Cantrips
        'Guidance', 'Light', 'Mending', 'Spare the Dying',
        // Level 1
        // Paladin
        'Bane', "Hunter's Mark", 'Compelled Duel', 'Command', 'Searing Smite', 'Thunderous Smite',
        // Cleric
        'Divine Favor', 'Shield of Faith', 'Cure Wounds', 'Healing Word',
        // Level 2
        // Paladin
        'Hold Person', 'Misty Step', 'Branding Smite', 'Find Steed', 'Protection from Poison', 'Lesser Restoration',
        // Cleric
        'Magic Weapon', 'Spiritual Weapon', 'Blindness/Deafness', 'Silence', 'Augury',
        // Level 3
        // Paladin
        'Haste', 'Protection from Energy', 'Daylight', 'Aura of Vitality', 'Blinding Smite',
        // Cleric 
        "Crusader's Mantle", 'Spirit Guardians', 'Dispel Magic', 'Revivify', 'Clairvoyance',
        // Level 4
        'Freedom of Movement', 'Stoneskin', 'Banishment', 'Death Ward', 'Divination'

    ],
    Actions : {
        'Notes' : '* = Great weapon fighting. Re-roll 1 or 2 on weapon die. Functional + 2 damage.'
            + '<br>Divine Strike: +1d8 bludgeoning on the first hit of a round.'
            + '<br>Great Weapon Master: Take -5 penalty to attack roll for +10 damage on hit.',
        'Maul' : `Melee weapon attack: +11 to hit, reach 5ft, one target. Hit: 13(2d6*) bludgeoning damage '
            + 'plus 4 (1d8) radiant damage.`,
        'Attack' : 'Law makes two Maul attacks. The first to hit deals an additional 1d8 bludgeoning damage.',
        'Must Die' : 'When law is hasted, hasn\'t expended all uses of War Priest, has marked his target with '
            + 'Vow of Enmity, and is prepared to burn 4 4th-7th level spell slots. '
            + '<br>Maul attack. Hit 27(2d6*+1d8+15) bludgeoning damage plus 20 (5d8) radiant damage.'
            + '<br>Maul attack. Hit 23(2d6*+15) bludgeoning damage plus 20 (5d8) radiant damage.'
            + '<br>Maul attack (haste). Hit 23(2d6*+15) bludgeoning damage plus 20 (5d8) radiant damage.'
            + '<br>Maul attack (bonus). Hit 23(2d6*+15) bludgeoning damage plus 20 (5d8) radiant damage.'
            + '<br>Total: 96 (8d6*+1d8+60) bludgeoning damage plus 80 (20d8) radiant damage'
            
    },
    Items : {
        'Maul' : 1 
        ,'Plate Armor' : 1
    },
    Background : {
        Background : "Entertainer: Strongman"
        ,Trait : "Nobody can stay angry at or around me for very long as I can diffuse any amount of tension."
        ,Ideal : "I like seeing the smiles on people's faces when I perform."
        ,Bond : "I would die to protect the people of the villages I used to perform at."
        ,Flaw : "I trust my ability to charm or muscle my way through every situation."
        ,Feature : "By Popular Demand: Law can always find a place to perform and earn a comfortable standard "
            + "of living while doing so. When people recognize him from a performance, they tend to like him."
        ,Description : "Law is a white dragonborn. He is physically imposing, standing 7'2\" and weighing around "
            + "280lbs. He is constantly grinning, which takes a bit of selling to people who are unfamiliar with "
            + "dragonborn faces. He worships Kord and loves competition and pushing his limits. His greatest joy "
            + "is trying to deal unfathomable damage to an enemy."
    
    }

});


