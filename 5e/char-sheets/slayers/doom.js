
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Doom = new Character({
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
		Classes : {
			Name : 'Cleric', Level : 4, Archetype : 'Death Domain'
		},
		Defenses : {
			AC : 18,
			Saves : {
				Wisdom : { Trained : true },
				Charisma : { Trained : true }
			}
		},
		Features : {
			'Reaper' : 'Necromancy cantrips that target on enemy can target an additional one within 5 feet of the target.'
			,'Channel Divinit, Touch of Death' : "When hitting with a melee attack, you can deal 13 bonus (5 + 2*cleric level) necrotic damage."
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
			'Healing Ward',
			'Detect Magic',
			// Level 2 
			// Domain
			'Blindness/Deafness',
			'Ray of Enfeeblement',

			'Spiritual Weapon',
			'Continual Flame',
			'Hold Person',
			'Lesser Restoration'
		],
		Items : {
			'Studded Leather Armor' : 1,
			'Shortsword' : 1,
			'Dagger' : 2,
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

	return Doom;
});