
define([
	'5e/character.js'
],(Character)=>{

	let Kene = new Character({
		Name : 'Kene',
		Race : 'Wood Elf',
		Alignment : 'True Neutral',
		Speed : 35,
		Senses : 'Darkvision 60',
		Languages : 'common, elven',
		Stats : {
			Strength : 10,
			Dexterity : 18,
			Constitution : 14,
			Intelligence : 10,
			Wisdom : 16,
			Charisma : 8
		},
		Classes : [
			{ Name : 'Ranger', Level : 4, Archetype : 'Monster Slayer' }
		],
		Defenses : {
			// HP 
			AC : 16,
			Saves : {
				Strength : { Trained : true },
				Dexterity : { Trained : true }
			}
		},
		Skills : {
			Perception : { Trained : true }, // Elf
			Athletics : { Trained : true }, // Ranger
			Stealth : { Trained : true }, // Ranger 
			Survival : { Trained : true }, // Ranger
			Investigation : { Trained : true },  //Monster Hunter
			Insight : { Trained : true }  // Monster Hunter
		},
		Features : {
			'Mask ofthe Wild' : `You can attempt to hide even when you are only lightly obscured by foliage, 
			heavy rain, falling snow, mist, and other natural phenomena.`
			,'Favored Enemy: Monstrosities' : `Advantage on survival checks to track, or intelligence checks to recall 
			knowledge about monstrosities.`
			,'Natural Explorer: Forest' : `Can't get lost. Faster travel. Better tracking. Better foraging.`
			,'Fighting Style: Archery' : `+2 to hit with ranged weapon attacks.`
			,"Hunter's Sense 3/long rest" : `Action, 1 target you can see within 60 feet. Immediately know any 
			damage resistances, immunities, or vulnerabilities it has.`
			,"Slayer's Prey" : `Bonus action, 1 target you can see within 60 feet. The first time 
			each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon.`
			,'Spellcasting' : `Kene is a 4th level spellcaster. His spellcasting ability score is Wisdom (spell save dc 13, +5 
			to hit with spell attacks). He has the following spells prepared: 
			<br>1st Level (3 slots): Cure Wounds, Hail of Thorns, Protection from Evil and Good`
		},
		Spells : [
			// 1st
			// Monser Hunter 3
			'Protection from Evil and Good'
			,'Hail of Thorns'
			,'Cure Wounds'
		],
		Items : {
			// 400. 
			'Studded Leather Armor': 1 
			,'Longbow': 1 
			,'Dagger' : 1 
			,'Backpack': 1 
			,"Alchemist's Supplies": 1 
			,'Herbalism Kit': 1 
			,'Quiver': 3 
			,'Caltrops': 40 
			,'Mess Kit': 1
			,'Component Pouch': 1
			,'Tinderbox': 1
			,'Waterskin': 1
			,"Traveler's Clothes": 1
			,'Chalk' : 5
			,'Steel Mirror': 1
			,'Candle': 5
			,'Bedroll': 1
			,'Oil (flask)' : 6
			,'Arrows' : 60 
			,'Bullets' : 40
			,'Map or Scroll Case': 1
		},
		Actions : {
			'Longbow' : `Ranged weapon attack. +8 to hit, range 300/600, one target. Hit: 8 (1d8+4) piercing damage.`
			,'Sling' : 'Ranged weapon attack. +8 to hit, range 30/120, one target. Hit 6 (1d4+4) bludgeoning damage.'
			,'Scimitar' : `Melee weapon attack. +6 to hit, reach 5ft, one target. Hit 7 (1d6+4) slashing damage.`
		},
		Background : {
			Trait : `Kene works on contract, avoiding personal involvement or charity.`
			,Ideal : `Kene favors intelligence gathering and preparation. He strives to be relentlessly practical in the execution of his work.`
			,Bond : 'As soon as a contract is agreed upon, Kene devotes himself to its completion.'
			,Flaw : `Kene can be very single-minded to the extent of it being off-putting. He has little in common with ordinary folk.`
			,Background : `Kene has trained as a journeyman monster hunter, learning how to carefully and efficiently limit monster populations and the damage they can cause.`
			,Description : `Kene is terse in his dealings with others. He will talk about practical things, in order to convey information, but has little patience for argumentation. He prefers well-defined interactions and relationships.`
			,Feature : 'Monster hunters have a reputation for professionalism that grants them some amount of respect. ' +
				'While people can be wary of them since they lead dangerous lives and are often eccentric, most people will ' + 
				'assume the hunter is doing work that will benefit the community, elevating their attitude toward the hunter.'
		}

	});




    
	
	return Kene;
});