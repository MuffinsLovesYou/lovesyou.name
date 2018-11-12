
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Rezena = new Character({
		Name : 'Rezena Sumnarghthrysh',
		Race : 'Black Dragonborn',
		Alignment : 'True Neutral',
		Speed : 30,
		Senses : '',
		Languages : 'common, draconic, gnomish',
		Stats : {
			Strength : 18,
			Dexterity : 8,
			Constitution : 14,
			Intelligence : 10,
			Wisdom : 10, 
			Charisma : 16
		},
		Classes : [
			{ Name : 'Paladin', Level : 4, Archetype : 'Conquest' }
		],
		Defenses : {
			AC : 19,// splint, shield
			Resistances : 'Acid',
			Saves : {
				Wisdom : { Trained : true },
				Charisma : { Trained : true }
			}
		},
		Skills : {
			Athletics : { Trained : true }// Paladin
			,Religion : { Trained : true }// Paladin 
			,Insight : { Trained : true }// Guild artisan, brewer
			,Persuasion : { Trained : true }// Guild artisan, brewer		
		}, 
		Features : {
			'Dragon Breath' : 'Bonus action. 5ft wide, 30ft long line of acid. 2d6 acid damage, DC 12 dexterity save for half.'
			,'Divine Sense 4/day' : 'Action. Know location of any undead, fiend, celestial within 60 feet.'
			,'Lay on Hands 20hp' : `Action, touch. Draw from pool of hit points to heal or cure one disease or poison 
			effect (5 points).`
			,'Duelist Fighting Style' : `Gain +2 damage when wielding a weapon in one hand with no other weapons.`
			,'Channel Divinity: Conquering Presence' : `Action. Targets creatures of your choice within 30 feet. Each 
			creature makes a DC 13 wisdom saving throw. On a fail, the creature is frightened of you for 1 minute. A 
			frightened creature can repeat the saving throw on the end of each of its turns.`
			,'Channel Divinity: Guided Strike' : `When Rezena makes an attack, she can add +10 to the roll. She can 
			use this after the roll is made but before she knows if it is a hit or not. `
			, 'Spellcasting' : `Rezena is a 4th level spellcaster. Her spellcasting ability modifier is charisma 
			(spell save dc 13, +5 to hit with spell attacks). She has the following spells prepared.
			<br>1st level (3 slots): Armor of Agathys, Command, Protection from Evil and Good, Cure Wounds,
			Bless, Detect Magic`
		},
		Spells : [
			// Conquest
			'Armor of Agathys',
			'Command',
			// Level 1
			'Protection from Evil and Good',
			'Cure Wounds',
			'Bless', 
			'Detect Magic'
		],
		Items : {
			'Splint Armor' : 1 // 45gp -> 255
			,'Javelin' : 5 // 10gp 245
			,'Shield' : 1
			,'Flail' : 1
			,'Dagger' : 2 // 10gp 235
			,"Traveler's Clothes":1
			,'Backpack' :1 // 2gp 233
			,'Component Pouch' : 1
			,'Waterskin' : 1
			,'Flask' : 3
			,'Tent' : 1
			,'Bedroll' : 1
			,'Crowbar' : 1
			,'Tinderbox' : 1
			,'Silk Rope (50 feet)' : 1
			,"Brewer's Supplies" : 1
			,'Everburning Torch' : 2
			,'Mess Kit' : 1
			,'Steel Mirror' : 1
		
	},
		Background : {
			Background : 'Guild Artisan (Brewers)'
            ,Feature : "Rez maintains membership with the Brewer's Guild by paying 5gp/month from a trust she "
				+ "set up in Neverwinter. The guild can act as a support network for her."
            ,Trait : "I believe anything worth doing is worth doing right."
            ,Ideal : "I believe in fostering the strength of communities so that they can support and empower "
				+ "each other."
			,Bond : "Some beloved communities I used to travel to have been destroyed or evacuated. "
            ,Flaw : "I have a competitive nature and sometimes lose sight of perspective in order to win."
            ,Description : "Rez is 24 year old black dragonborn female. She has an imposing figure, standing "
				+ "tall at 6'6\" and weighing around 240lbs. She is friendly, accustomed to being the stranger "
				+ "but being able to put people at ease wherever she moves about. She received her paladin calling "
				+ "while working and seeing some of her favorite stops overrun or abandoned and felt she had the " 
				+ "power to protect such places."
            
	}

	});



	return Rezena;
});