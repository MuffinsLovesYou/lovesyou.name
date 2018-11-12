
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Maximillien = new Character({
		Name : 'Maximillien',
		Race : 'Human',
		Alignment : 'neutral good',
		Speed : 30,
		Senses : '',
		Languages : 'common x',
		Stats : {
			Strength : 18,
			Dexterity : 10,
			Constitution : 14,
			Intelligence : 14,
			Wisdom : 12,
			Charisma : 8
		},
		Classes : [
			{ Name : 'Fighter', Level : 4, Archetype : 'Eldritch Knight' }
		],
		Defenses : {
			AC : 20, // Splint, shield, defense style
			Saves : {
				Strength : { Trained : true },
				Constitution : { Trained : true }
			}
		},
		Skills : {
			
		},
		Features : {
			'Feat, Sentinel' : ''
			,'Fighter: Defense Style' : "+1 AC when wearing armor"
			,'Fighter: Action Surge' : ""
			,'Fighter : Second Wind' : ""
			// weapon bond
			// spellcasting
		},
		Spells : [
			// Cantrips
			'Prestidigitation',
			'Mending',
			// Level 1
			// Abj
			'Protection from Evil and Good',
			// Evo'
			'Thunderwave',
			//Other 
			'Unseen Servant' // ritual caster?
		],
		Items : {

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


    

	
	return Maximillien;
});