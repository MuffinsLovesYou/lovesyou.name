
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
			Dexterity : 14,
			Constitution : 14,
			Intelligence : 12,
			Wisdom : 14,
			Charisma : 9
		},
		Classes : [
			{ Name : 'Fighter', Level : 5, Archetype : 'Cavalier' }
		],
		Defenses : {
			AC : '17 (Chain Shirt and Shield)', // Chain shirt, shield
			Saves : {
				Strength : { Trained : true },
				Constitution : { Trained : true }
			}
		},
		Skills : {
			Insight : { Trained : true },
			Athletics : { Trained : true },
			// Fighter
			Perception : { Trained : true },
			Stealth : { Trained : true }
		},
		Features : {
			'Fighter: Duelist Style' : `+2 damage for melee attacks 
				while wieling a melee weapon in one hand and no other weapons.`
			,'Fighter: Action Surge 1/short rest' : ` On your turn, you can take
				one additional action on top of your regular action and a
				possible bonus action.`
			,'Fighter : Second Wind 1/short rest' : `On your turn, you can use
				a bonus action to regain hit points equal to 1d10 + your fighter level.`
			,'Born to the Saddle' :
				`Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving
				throws made to avoid falling off your mount. If you fall off your mount and descend no more
				than 10 feet, you can land on your feet if you’re not incapacitated.
				<br>Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half
				your speed.`
			,'Unwavering Mark 4/long rest' : 
				`When you hit a creature with a melee weapon attack, you can mark the creature
				until the end of your next turn. This effect ends early if you are incapacitated or you die, or if
				someone else marks the creature.
				<br>While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that
				doesn’t target you. In addition, if a creature marked by you deals damage to anyone other than you, you can make a
				special melee weapon attack against the marked creature as a bonus action on your next turn.
				You have advantage on the attack roll, and if it hits, the attack’s weapon deals extra damage to
				the target equal to half your fighter level.`
		},
		Spells : [],
		Items : {

		},
		Actions : {
			'Multiattack' : `Maximillien makes two attacks`,
			'Longsword' : `Melee weapon attack, 5ft range, one target. Hit: 10 (1d8+6) slashing damage.` 
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