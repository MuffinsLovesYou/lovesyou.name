import { Character } from '../character.js';

export let Rez = new Character({
	Name : 'Rezena Sumnarghthrysh',
	Race : 'Black Dragonborn',
	Alignment : 'True Neutral',
	Speed : 30,
	Senses : '',
	Languages : 'common, draconic, gnomish',
	Stats : {
		Strength : 20,
		Dexterity : 8,
		Constitution : 14,
		Intelligence : 10,
		Wisdom : 10, 
		Charisma : 18
	},
	Classes : [
		{ Name : 'Paladin', Level : 12, Archetype : 'Conquest' }
	],
	Defenses : {
		AC : 20,// plate, shield
		Resistances : 'Acid',
		Saves : {
			Wisdom : { Trained : true },
			Charisma : { Trained : true }
		}
	},
	Skills : {
		Athletics : { Trained : true }// Paladin
		, Religion : { Trained : true }// Paladin 
		, Insight : { Trained : true }// Guild artisan, brewer
		, Persuasion : { Trained : true }// Guild artisan, brewer		
	}, 
	Features : {
		'Dragon Breath' : 'Bonus action. 5ft wide, 30ft long line of acid. 4d6 acid damage, DC 14 dexterity save for half.'
		, 'Divine Smite' : `Upon hitting with a melee weapon attack. You can expend a spell slot to deal an extra 
			1d8 + 1d8/slot level radiant damage to a maximum 5d8 (4th level). `
		, 'Improved Divine Smite' : `When you hit with a melee attack. Deal an extra 1d8 radiant damage.`
			,'Divine Sense 4/day' : 'Action. Know location of any undead, fiend, celestial within 60 feet.'
		,'Lay on Hands 60hp' : `Action, touch. Draw from pool of hit points to heal or cure one disease or poison 
			effect (5 points).`
		,'Duelist Fighting Style' : `Gain +2 damage when wielding a weapon in one hand with no other weapons.`
		,'Channel Divinity: Conquering Presence' : `Action. Targets creatures of your choice within 30 feet. Each 
			creature makes a DC 16 wisdom saving throw. On a fail, the creature is frightened of you for 1 minute. A 
			frightened creature can repeat the saving throw on the end of each of its turns.`
		,'Channel Divinity: Guided Strike' : `When Rezena makes an attack, she can add +10 to the roll. She can 
			use this after the roll is made but before she knows if it is a hit or not. `
		, 'Aura of Conquest' : `If a creature within 10 feet of you is frightened of you, its speed is reduced to 0 
			while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.`
		, 'Aura of Protection' : `You and friendly creatures within 10 feet gain +4 bonus on saving throws.`
		, 'Aura of Courage' : `You and friendly creatures within 10 feet are immune to fear.`
		, 'Spellcasting' : `Rezena is a 4th level spellcaster. Her spellcasting ability modifier is charisma 
			(spell save dc 16, +5 to hit with spell attacks). She has the following spells prepared.
			<br>1st level (4 slots): Armor of Agathys, Command, Cure Wounds, Wrathful Smite, Detect Magic
			<br>2nd level (3 slots): Hold Person, Spiritual Weapon, Find Steed, Lesser Restoration, Branding Smite
			<br>3rd level (3 slots): Bestow Curse, Fear, Revivify, Blinding Smite, Create Food and Water`
	},
	Actions : {
		'Multiattack' : `Rez makes two flail attacks`,
		'Flail' : `Melee weapon attack, +9 to hit, range 5ft. Hit: 12 (1d8+7) + 5 (1d8) radiant damage`
	},
	Spells : [
		// Conquest
		'Armor of Agathys',
		'Command',
		// Level 1
		'Cure Wounds',
		'Wrathful Smite', 
		'Detect Magic',
		// Conquest
		'Hold Person',
		'Spiritual Weapon',
		// Level 2
		'Find Steed',
		'Lesser Restoration',
		'Branding Smite',
		// Conquest
		'Bestow Curse',
		'Fear',
		// Level 3
		'Revivify',
		'Blinding Smite',
		'Create Food and Water'
	],
	Items : {
		'Plate' : 1 // 45gp -> 255
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


