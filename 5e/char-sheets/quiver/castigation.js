import { Character } from '../../character.js';

export let Castigation = new Character({
	Name : 'Castigation the Red',
	Race : 'Tiefling', // variant 
	Alignment : 'Lawful Good', 
	Speed : 30,
	Senses : 'Darkvision 60',
	Languages : 'common, infernal',
	Stats : {
		Strength : 10,
		Dexterity : 14, 
		Constitution : 14, 
		Intelligence : 10,
		Wisdom : 12, 
		Charisma : 16
	},
	Classes : [
		{ Name : 'Paladin', Level : 2, Archetype : 'Vengeance' },
		{ Name : 'Warlock', Level : 2, Archetype : 'Hexblade' }
	],
	Defenses : {
		// Hp 
		AC : 18,
		Resistances : 'Fire',
		Saves : {
			Wisdom : { Trained : true },
			Charisma : { Trained : true }
		}
	},
	Skills : {
		Insight : { Trained : true },
		Intimidation : { Trained : true },
		Deception : { Trained : true },
		Perception : { Trained : true },	
	},
	Features : {
		'Innate Spellcasting' : `At Will: Ray of Frost,
		<br>1/day: Armor of Agathys (2nd level)`,
		'Duelist Fighting Style' : `+2 damage on 1h weapon attacks with no other weapon equipped.`
		,'Lay on Hands' : '10 hp (5 x Paladin Level)'
		,'Divine Smite' : '1d8 + 1/spell level lightning damage'
		,"Hexblade's Curse" : `1/short rest. Bonus action to cast, 1 target. Grants bonus damage on 
		weapon attacks equal to proficiency. Weapons crit on 19-20.`
		,'Spellcasting' : `Castigation is a 4th level Spellcaster. His spellcasting ability 
		modifier is Charisma (spell save DC 13, + 5 to hit with spell attacks).
		He has the following spells prepared.
		<br>Cantrips: Ray of Frost, Prestidigitation, Mage Hand
		<br>1st(4 slots): Hellish Rebuke, Expeditious Retreat, Shield of Faith, 
		Cure Wounds, Bless, Heroism`
	},
	Spells : [
		// Cantrips:
		'Ray of Frost'
		,'Prestidigitation'
		,'Mage Hand'
		// Level 1
		, 'Hellish Rebuke'
		,'Expeditious Retreat'
		,'Shield of Faith'
		,'Cure Wounds'
		,'Bless'
		,'Heroism'
	],
	Items : {
		'Studded Leather Armor' : 1,
		'Shortsword' : 1,
		'Dagger' : 2,
		'Backpack' : 1,
		'Gold' : 10
	}
});

