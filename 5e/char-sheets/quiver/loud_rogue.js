
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Loud = new Character({
		Name : 'Loud',
		Race : 'Forest Gnome',
		Alignment : 'chaotic good',
		Speed: 25,
		Senses : '',
		Languages : 'Common, Gnomish',
		Stats : {
			Strength : 10,
			Dexterity : 18,
			Constitution : 10,
			Intelligence : 16,
			Wisdom : 14,
			Charisma : 8
		},
		Classes : [
			{ Name : 'Rogue', Level : 5, Archetype : 'Arcane Trickster' }
		],
		Defenses : {
			AC : '16 St. Leather',
			Saves : {
				Dexterity : { Trained : true },
				Intelligence : { Trained : true }
			}
		},
		Features : {
            'Sneak Attack' : `+3d6 damage when attacking with advantage or vs an opponent adjacent to an ally.`,
            'Cunning Action' : `You can take a bonus action on each of your turns in combat. This action can be 
                used only to take the Dash, Disengage, or Hide action.`,
            'Spellcasting' : `Loud is a 5th level spellcaster, his spellcasting ability modifier is Intelligence 
                (spell save DC 14, +6 to hit with spell attacks). He has the following spells prepared.
                <br>Cantrips: Booming Blade, Prestidigitation, Mage Hand
                <br>1st: Disguise Self, Silent Image, Feather Fall`,
            'Mage Hand Legerdemain' : `When you cast mage hand, you can make the spectral hand invisible. And 
                you can perform the following additional tasks with it: 
                    <br>* You can stow one object the hand is holding in a container worn ar carried by 
                    another creature. 
                    <br>* You can retrieve an object in a container worn or carried by another creature.
                    <br>* You can use thieves' tools to pick locks and disarm traps at range.
                    <br>You can perform one of these tasks without being noticed by a creature if you succeed 
                    on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.
                    <br>In addition, you can use the bonus action granted by your Cunning Action to control the hand.`,
            'Uncanny Dodge' : `When an attacker that you can see hits you with an attack, you can use your 
                reaction to halve the attack's damage against you`
        },
		Skills : {
			Acrobatics : { Trained : true },
			Arcana : { Trained : true },
            Investigation : { Trained : true },
            'Sleight of Hand' : { Trained : true, Expertise : true },
            Stealth : { Trained : true, Expertise : true },
			Perception : { Trained : true },// criminal background
		
        },
		Spells : [
			// Cantrips
			'Mage Hand',
			'Prestidigitation',
			'Minor Illusion',
			'Booming Blade',
			// Level 1
			'Silent Image',
			'Disguise Self',
            'Feather Fall'
		],
        Actions : {
            'Booming Blade' : `Melee weapon attack. +7 to hit. Reach 5ft, one target. Hit: 17 (1d8+4+3d6) piercing damage. 
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

	return Loud;
});