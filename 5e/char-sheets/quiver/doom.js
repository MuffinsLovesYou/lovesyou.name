
import { Character } from '../../character.js';

export let Doom = new Character({
	Name : 'Doom',
	Race : 'Kenku',
	Alignment : 'undecided',
	Speed: 30,
	Senses : '',
	Languages : 'Common, Auran',
	Stats : {
		Strength : 9,
		Dexterity : 14,
		Constitution : 14,
		Intelligence : 12,
		Wisdom : 18,
		Charisma : 10
	},
	Classes : [
		{ Name : 'Cleric', Level : 5, Archetype : 'Death Domain' }
	],
	Defenses : {
		AC : '18 Breastplate + Shield',
		Saves : {
			Wisdom : { Trained : true },
			Charisma : { Trained : true }
		}
	},
	Features : {
		'Reaper' : 'Necromancy cantrips that target on enemy can target an additional one within 5 feet of the target.'
		,'Channel Divinity, Touch of Death' : "When hitting with a melee attack, you can deal 15 bonus (5 + 2*cleric level) necrotic damage."
		,'Spellcasting' : `DOOM is a 5th level spellcaster. Their spellcasting ability modifier is wisdom (DC 15 spell save, +7 to hit with spell attacks). 
			They have the following spells prepared: 
			<br>Cantrips: Toll the Dead, Guidance, Light, Mending
			<br>1st (4 slots): False Life, Ray of Sickness, Sanctuary, Protection from Evil and Good, Healing Word, Detect Magic
			<br>2nd (3 slots): Blindness/Deafness, Ray of Enfeeblement, Spiritual Weapon Continual Flame, Hold Person, Lesser Restoration
			<br>3rd (2 slots): Animate Dead, Vampiric Touch, Spirit Guardians`
	},
	Skills : {
		Athletics : { Trained : true },
		Stealth : { Trained : true },
		Perception : { Trained : true },// criminal background
		// this may be a dumb one
		Deception : { Trained : true } // criminal background
	},
	Spells : [
		// Cantrips
		'Toll the Dead',
		'Guidance',
		'Light',
		'Mending',
		// Level 1
		// Domain
		'False Life',
		'Ray of Sickness',

		'Sanctuary',
		'Protection from Evil and Good',
		'Healing Word',
		'Detect Magic',
		// Level 2 
		// Domain
		'Blindness/Deafness',
		'Ray of Enfeeblement',

		'Spiritual Weapon',
		'Continual Flame',
		'Hold Person',
		'Lesser Restoration',

		// Level 3
		// Domain 
		'Animate Dead', 
		'Vampiric Touch',

		'Spirit Guardians',
	],
	Items : {
		'Breastplate' : 1,
		'Shield' : 1,
		'Dagger' : 2,
		'Holy Symbol' : 1,
		'Backpack' : 1,
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
