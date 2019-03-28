
define([
	'5e/character.js'
],(Character)=>{
	colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

    /* 'One Trick Pony' Lvl 20 build
        Blends sorcerer + Warlock. Uses sorcerer meta magic to double-cast eldritch blast and 
        to consume warlock spellslots for renewable sorcery points. 
    */
	let OneTrick = new Character({
        Name : 'One Trick Pony',
        Race : 'Tiefling',
        Alignment : 'True Neutral',
        Speed : 30,
        Senses : '',
        Languages : 'common, infernal, fey',
        Stats : { //
            Strength : 8, // 
            Dexterity : 16, // 4
            Constitution : 20, // 12 16  20
            Intelligence : 10,
            Wisdom : 10, // 
            Charisma : 20 // 4, 8
        },
        Classes : [
           { Name : 'Warlock', Level : 8, Archetype : 'Archfey, Pact of the Chain' } 
           ,{ Name : 'Sorcerer', Level : 12, Archetype : 'Wild Magic' }
        ],
        Defenses : {
            //HP :
            AC : 15, // mage armor
            Immunities : '',
			Resistances : '',
            ConditionImmunities : '',
            Saves : {
                Wisdom : { Trained : true },// 12th level
                Charisma : { Trained : true }
            }
        },
        Skills : {
            // Tabaxi
            Perception : { Trained : true },
            Stealth : { Trained : true },
            // Adventurer Background 
            Athletics : { Trained : true }, 
            Investigation : { Trained : true }, 
            // Class
            Religion : { Trained : true }, 
            Nature : { Trained : true }
        },
        Features : {
            'Feline Agility' : `One Trick can double his move speed on a turn. Once used, 
                this trait cannot be used again until he has moved 0 feet on one of his turns.`,
            'Fey Presence 1/short rest' : `As an action, you can cause each creature in
                a 10-foot cube originating from you to make a Wisdom
                saving throw against your warlock spell save DC. The
                creatures that fail their saving throws are all charmed
                or frightened by you (your choice) until the end of
                your next turn.`,
            'Invocation: Agonizing Blast' : `When you cast eldritch blast, add your Charisma
                modifier to the damage it deals on a hit.`,
            "Invocation: Devil's Sight" : `You can see normally in darkness, both magical and nonmagical, 
                to a distance of 120 feet.`,
            
            'Wild Magic Surge' : `[Needs trigger] chance to roll from the wild magic table.`,
            'Tides of Chaos 1/day' : `Gain advantage on one attack roll, ability check, or saving throw.`,
            'Sorcery Points 3/long rest' : `Used for flexible casting and meta magic.`,
            'Flexible Casting' : `As a bonus action. A spell can be converted to its level of sorcery points, 
                or sorcery points can be spent to regain a spell slot based on these costs: 
                    <br>Spell Slot Level: 1, Sorcery Points: 2
                    <br>Spell Slot Level: 2, Sorcery Points: 3
                    <br>Spell Slot Level: 3, Sorcery Points: 5
                    <br>Spell Slot Level: 4, Sorcery Points: 6
                    <br>Spell Slot Level: 5, Sorcery Points: 7
                    `,
            'Meta Magic: Quickened Spell' : `When you cast a spell that has a casting time of 1 action,
                you can spend 2 sorcery points to change the casting
                time to 1 bonus action for this casting.`,
            'Meta Magic: Extended Spell' : `When you cast a spell lhat has a duration of 1 minute
                or longer. you can spend 1 sorcery point to double its
                duration, to a maximum duration of 24 hours.`,
            'Spellcasting (sorcerer)' : ``,
            'Spellcasting (warlock)' : `When you cast a spell that requires you to make an
                attack roll, the spell's range is doubled.
                Your ranged spell attacks ignore half cover and
                three-quarters cover.`,
         },
        Spells : [
            // Cantrips
            'Prestidigitation', 'Mending', 'Ray of Frost', 'Message', 'Mage Hand',
            'Eldritch Blast', 'Minor Illusion',
            // Level 1
			// Sorcerer
            'Feather Fall', 'Mage Armor',
            // Warlock
            'Hex', 'Protection from Evil and Good', 'Comprehend Languages',
            // Level 2', 
            // Sorcerer
            'Misty Step', 'Spider Climb'
        ],
        Actions : {
            'Eldritch Blast' : `Ranged spell attack +7 to hit, range 240 feet, 
                one target. Hit 9 (1d10+4) force damage. Two attacks. ` 
            ,"Cat's Claws" : `Melee unarmed attack +3 to hit, one target. Hit 2(1d4) slashing damage.`       
        },
        Items : {
            'Gold' : 20 
            , 'Pearl of Power' : 1
            , 'Studded Leather' : 1

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

	
	return OneTrick;
});


