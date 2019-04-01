
define([
	'5e/character.js'
],(Character)=>{
	colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

// Height : 6'
// Weight: 165



	let OneTrick = new Character({
        Name : 'One Trick Pony',
        Race : 'Tabaxi',
        Alignment : 'True Neutral',
        Speed : 30,
        Senses : 'Darkvision 60',
        Languages : 'common',
        Stats : {
            Strength : 10, // 4 8
            Dexterity : 16,
            Constitution : 14, // 
            Intelligence : 9,
            Wisdom : 10, 
            Charisma : 16 // 12 16
        },
        Classes : [
           { Name : 'Warlock', Level : 2, Archetype : 'Archfey: Pact of the Chain' } 
           , { Name : 'Sorcerer', Level : 3, Archetype : 'Wild Magic' }
        ],
        Defenses : {
            //HP :
            AC : '15 (studded leather)', // mage armor
            Immunities : '',
			Resistances : '',
            ConditionImmunities : '',
            Saves : {
                Wisdom : { Trained : true  },
                Charisma : { Trained : true }
            }
        },
        Skills : {
            Perception : { Trained : true },// Tabaxi
            Stealth : { Trained : true }, // Tabaxi
            Investigation : { Trained : true }, // Warlock
            Nature : { Trained : true }, // Warlock
            Survival : { Trained : true }, // Outlander
            Athletics : { Trained : true } // Outlander   
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
            "Invocation: Eldritch Sight" : `You can cast Detect Magic at will, without expending 
                a spell slot.`,
            
            'Wild Magic Surge' : `When expending a spell slot, roll a d20. If the result is less than or equal to 
                the spell slot level, roll once on the wild magic table.`,
            'Tides of Chaos 1/recharge' : `Gain advantage on one attack roll, ability check, or saving throw. 
                Recharges on a long rest, or on wild magic surge activation.`,
            'Sorcery Points 3/long rest' : `Used for flexible casting and meta magic.`,
            'Flexible Casting' : `As a bonus action. A spell can be converted to its level of sorcery points, 
                or sorcery points can be spent to regain a spell slot (see notes).`,
            'Meta Magic: Quickened Spell' : `When you cast a spell that has a casting time of 1 action,
                you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.`,
            'Meta Magic: Extended Spell' : `When you cast a spell lhat has a duration of 1 minute
                or longer. you can spend 1 sorcery point to double its
                duration, to a maximum duration of 24 hours.`,
            'Spellcasting (sorcerer)' : `One Trick is a 5th level spellcaster. His spellcasting ability modifier 
                is Charisma (spell save DC 14, +6 to hit with spell attacks). He has the following spells prepared: 
                Cantrips: Eldritch Blast, Mage Hand, Mending, Message, Minor Illusion, Prestidigitation, Ray of Frost
                <br>1st Level (4 sorcerer slots, 2 warlock slots): Feather Fall, Thunderwave, Hex, 
                    Protection from Evil and Good, Comprehend Languages
                <br>2nd Level (2 slots): Misty Step, Levitate`,
        },
        Spells : [
            // Cantrips
            'Prestidigitation', 'Mending', 'Ray of Frost', 'Message', 'Mage Hand',
            'Eldritch Blast', 'Minor Illusion',
            // Level 1
			// Sorcerer
            'Feather Fall', 'Thunderwave',
            // Warlock
            'Hex', 'Protection from Evil and Good', 'Comprehend Languages',
            'Detect Magic', // Invocation
            // Level 2', 
            // Sorcerer
            'Misty Step', 'Levitate'
        ],
        Actions : {
            'Eldritch Blast' : `Ranged spell attack +8 to hit, range 240 feet, 
                one target. Hit 9 (1d10+4) force damage. Two attacks. `   
            ,"Cat's Claws" : `Melee unarmed attack +3 to hit, one target. Hit 2(1d4) slashing damage.`       
            ,'Detect Magic' : `One Trick can cast Detect Magic at will without expending a spell slot 
                or components.`  
            
        },
        Items : {
            'Gold' : 20 
            , 'Studded Leather' : 1
            , 'Rod of the Pact Keeper +1' : 1
            , 'Traveler\'s clothes' : 1

        },
        Background : {
			Trait : `I'm always picking things up, absently fiddling with
                    them, and sometimes accidentally breaking them.`
            ,Ideal : `Staying fascinated and pursuing the esoteric is wealth in itself.`
            ,Bond : ""
            ,Flaw : ""
            ,Background : ""
            ,Description : ""
            ,Feature : ""
    	}

    });

	
	return OneTrick;
});

