define([
	'5e/character.js'
],(Character)=>{
	let Lance = new Character();

	Lance.Name = 'Lance of the heavens';
	Lance.Race = 'Protector Aasimar';
	Lance.Classes.Add('Paladin', 5);
 	// Warlock 1: undying light - radiant soul + cha on radiant/fire smites
	// Warlock 2: Invocations, 
	// Warlock 3: pact weapon, 2nd level spell slot 
	// Fighter 1: Archery style, second wind 
	// Fighter 2: Action surge, 
	// finish off with deep dive into sorcerer for meta magic, spells, sorcery points 	

	// consider pal 6 for aura 

	Lance.Background = 'Heartwarder of Sune';
	Lance.XP = 6500;
	Lance.Stats.Strength = 10;
	Lance.Stats.Dexterity = 16; 
	Lance.Stats.Constitution = 12;
	Lance.Stats.Intelligence = 10;
	Lance.Stats.Wisdom = 12;
	Lance.Stats.Charisma = 18;

	Lance.Saves.Wisdom.Trained = true;
	Lance.Saves.Charisma.Trained = true;

	Lance.AC = 16; // st.leather + dex 

	Lance.Personality.Trait = `In all things be beautiful.`;
	Lance.Personality.Ideal = `I want my outer beauty to match my inner beauty.`;
	Lance.Personality.Bond = `I want to find a group of people who are satisfied with their homeliness so that 
	I can be myself around them.`;
	Lance.Personality.Flaw = `I'm a sucker for a pretty face.`;
	Lance.Personality.Background = `A beautiful baby, born to a Sune priestess. A handsome boy, the pride of 
	the town. A stunning lad, a born heartbreaker. A statuesque young man, inspiring jealousy and despair. Lance 
	was just too damn good looking. He knew beauty was a virtue, and in all things he sought it, but he knew he 
	had to set out, to learn how to be beautiful in a safe and responsible manner. He purchased a hat of disguise 
	to conceal himself while he set out into the world.`;
	Lance.Personality.Description = `Disguising himself as a gruff wood elf in a long surcoat, Lance has been 
	heading outward toward the rougher and muddier parts of the world. He wants to undergo trials while studying 
	his inner and outer self. He has been looking for an adventuring group, full of rough, so very rough diamonds, 
	where he can maybe learn to be himself.`;

    //Lance.Features.push('Feat: Sharpshooter'); // not worth till build is much more mature
    Lance.Features.push('Aasimar: 1/day 30ft fly and +lvl damage/rd');
	Lance.Features.push('Aasimar: 5 hp LoH effect');
	Lance.Features.push('Paladin: Dueling Fighting Style');
	Lance.Features.push('Paladin: Lay Hands (25)');
	Lance.Features.push('Paladin: Divine Sense');
	Lance.Features.push('Paladin: Divine Health');
	
	Lance.Skills.Deception.Trained = true;// Heartwarder 
	Lance.Skills.Persuasion.Trained = true;// Heartwarder
	Lance.Skills.Religion.Trained = true; // Paladin
	Lance.Skills.Insight.Trained = true; // Paladin

	Lance.Spells.Add('Shield of Faith'); // concentration
    Lance.Spells.Add('Cure Wounds');
    Lance.Spells.Add('Searing Smite');// sword 
	Lance.Spells.Add('Branding Smite'); // bow 
    Lance.Spells.Add('Find Steed'); 
	// Oath spells 
	Lance.Spells.Add('Protection from Evil and Good');
	Lance.Spells.Add('Sanctuary');
	Lance.Spells.Add('Lesser Restoration');
	Lance.Spells.Add('Zone of Truth');

	let items = Lance.Items;
	items.Add('Studded Leather Armor');
	items.Add('+1 Longbow');
	items.Add('Bracers of Archery'); 
	items.Add('Hat of Disguise');
	items.Add('Shortsword');
	items.Add('Arrows', 80);
	items.Add('Quiver', 4);
	items.Add('Backpack');
	items.Add('Rations (1 day)', 10);
	items.Add('Waterskin');
	items.Add('Hammock');
	items.Add('Mess Kit');
	items.Add('Tinderbox');
	items.Add('Pouch', 2);
	items.Add('Tent');
	items.Add('Block and Tackle');
	items.Add('Steel Mirror');
	items.Add('Holy Water (flask)');// flask
	
	items.Add('Gold', 50);
	
	return Lance;
	let notes = {
		team : 
			{
				NoNo : `Gnome crossdressing wizard
					knows and has a history with Zotesh`,
				Wimbly_The_Weasel : 'NoNos familiar',
				Flameo : `Half-elf sorcerer, spaz`,
				Kevdak : `Elf rogue (scout, UE)`,
				Zotesh : `Minotaur cleric likes a fight. 
					Follows war and brings war. 
				`,
				Lance : `Aasimar paladin`,
				Graveyard : 'Barbican Brady'
			},
		people : {
			majormajor : `some obnoxious guard guy, best to avoid`,
			randall : `Boy we saved. Randal Myth`,
			captain : 'conscripted us',
			horse_ass_and_ralph : 'custodians while we shop'
		},
		geography : {
			'Big Muddy' : `Giant river and swamp, 300 miles diameter or so.`,
			Greens_Crossing : `
				Mid-sized town in the middle of a giant swamp. 
				We are on a eastward road nexgt to the Big Muddy. It is currently the dry season, 
				so it is navigable. It has pallisades and is resting on a solid plateau that rises 
				some 10-15 feet and has about a 10 mile diameter.
				It currently has a travelling carnival and soldiers with imperial insignia.  
			`,
			Desert : `To the northeast after the mountains. There is word of large storms, active volcanoes, 
			and more lizards.`,
			'Hemlock Forest' : `About 40 miles north of Greens_Crossing`,
			'Dragonfel Jungle' : `Hundred miles south of Greens_Crossing`,
			Ocean : 'To the west of the swamp.',
			Mountains : 'Mountains north 40 miles of swamp,'
		},
		sessions : {
			One : `We entered Greens_Crossing. Visited the carnival. And took up the quest to rescue Randal.`,
			Two : `Rested and was joined by Zotesh. Barbican got death rayed. Rested and was joined by Lance. 
			Rescued village kid from bullywugs. Ended with a fight in the mill and being conscripted into doing 
			some work for the army. 
			`,
			Three : `Recovering in town, we decided on accepting a quest for the army rather than  march with them.
			Quest is to the north. We shopped in Westport and bought lots of good stuff with our wealth and then 
			headed back to resume the quest to the north.`
		},
		treasure : {
			session1: 'nada',
			session2: `11x 100gp pearls. 5x 5gp pearls, 350gp  500gp -100gp, 3000gp
			10x 100gp diamonds 5 identical unidentified potions,
			5x rubies 5gp 5x rubies 50gp 10x 75gp emeralds 
			deck of cards with a variety of creature images 
			fine lightweight leather boots with runes stitched into the leather
			goggles finely crafted shortsword `,
			group: {
				bag_of_holding : '1x',
				boots_of_winterlands : '5x',
				diamonds : '7x 100gp',
				emeralds : '10x 75gp',
				deck_of_illusions : `24x cards`,
				gold : '495gp',
				misc : ``,
				pearls : '5x 100gp',
				potion_of_healing : 'x2 ',
				potions : {
					unidentified : '5x identical'
				},
			
			}
		},
		quests : {
			rescue_randal : `Rescue Randal: We rescued him from some bullywugs. `,
			retrieve_artifact : `An artifact is in the hoard of a white dragon. This quest is to serve the military. 
			They do not know the age of the white dragon. The artifact is a five part ring. Each of the parts controls 
			a color of dragon (acts like Control Monster). If they are all together, you have immunity from damage from 
			acid, cold, fire, electricity. Otherwise individual rings grant resistance.`
		},
	}



});