import { Character } from '../../character.js';

export let TheBantam = new Character({
	Name : 'Diiqii',
	Race : 'Lightfoot Halfling',
	Alignment : 'chaotic good',
	Speed: 25,
	Senses : 'Darkvision 120',
	Languages : 'Common, Halfling',
	Stats : {
		Strength : 10,
		Dexterity : 16,
		Constitution : 12,
		Intelligence : 8,
		Wisdom : 12,
		Charisma : 16
	},
	Classes : [
		{ Name : 'Rogue', Level : 2, Archetype : 'Mastermind' }, 
		{ Name : 'Sorcerer', Level : 3, Archetype : 'Shadow' }      
	],
	Defenses : {
		AC : '15 St. Leather',
		Saves : {
			Dexterity : { Trained : true },
			Intelligence : { Trained : true }
		}
	},
	Features : {
		'Sneak Attack' : `+1d6 damage when attacking with advantage or vs an opponent adjacent to an ally.`,
		'Cunning Action' : `You can take a bonus action on each of your turns in combat. This action can be 
			used only to take the Dash, Disengage, or Hide action.`,
		'Spellcasting' : `Diiqii is a 3rd level spellcaster, his spellcasting ability modifier is Charisma 
			(spell save DC 14, +6 to hit with spell attacks). He has the following spells prepared.
			<br>Cantrips: Minor Illusion, Prestidigitation, Mage Hand, Green-Flame Blade
			<br>1st (4 slots): Disguise Self, Silent Image, Feather Fall
			<br>2nd (2 slots): Darkness, Enhance Ability`,
		},
	Skills : {
		Acrobatics : { Trained : true },
		Insight : { Trained : true },
		Investigation : { Trained : true },
		'Sleight of Hand' : { Trained : true },
		Stealth : { Trained : true, Expertise : true },
		Perception : { Trained : true, Expertise : true },// criminal background
	
	},
	Spells : [
		// Cantrips
		'Mage Hand',
		'Prestidigitation',
		'Minor Illusion',
		'Green-Flame Blade',
		// Level 1
		'Silent Image',
		'Disguise Self',
		'Feather Fall', 
		// Level 2
		'Darkness',
		'Enhance Ability'
	],
	Actions : {
		'Green Flame Blade' : `Melee weapon attack. +7 to hit. Reach 5ft, one target. Hit: 17 (1d8+4+3d6) piercing damage. 
			If the target willingly moves before the end of your next turn, it takes 8 (2d8) thunder damage.`
	},
	Items : {
		'Studded Leather' : 1,
		'Rapier' : 1,
		'Short Sword' : 1,
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
