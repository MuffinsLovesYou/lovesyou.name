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

	Lance.Background = 'Crusader';
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

	Lance.Personality.Trait = `I struggle against my nature and background. I am far from having rejected my 
	path, but want to shed ties and engage with it on my own terms.`;
	Lance.Personality.Ideal = 'I\'ll burn out darkness and protect the weak..';
	Lance.Personality.Bond = 'I want to make up for my past by putting my skills to good use.';
	Lance.Personality.Flaw = 'I\'m distrustful of the goals and ambitions of armies and nobility.';
	Lance.Personality.Background = `For decades, all that Lance cared about was the light. He trained in the 
	ways of war and devotion to be a leader and holy warrior. He prosecuted campaigns to bring light to 
	the world leaving swaths of ash behind him. Eventually his faith was no longer enough to blind him to the 
	magnitude of the devastation he had wrought and the growing realization that the wars he fought were rightous 
	in name only. 
	He has since set out to fight as an adventurer so that he can bring light to the darkness on a smaller 
	scale and on his own terms.`;
	Lance.Personality.Description = `Lance is about 5'10", 160lbs. His travelling clothes include a large dark 
	overcoat and large hat for holding off rain and blending in. Under that is a well maintained brigandine 
	of soft leather in a jacket cut with sewn in metal and hard-leather squares embossed with religious designs 
	and phrases. `;

    //Lance.Features.push('Feat: Sharpshooter'); // not worth till build is much more mature
    Lance.Features.push('Aasimar: 1/day 30ft fly and +lvl damage/rd');
	Lance.Features.push('Aasimar: 5 hp LoH effect');
	Lance.Features.push('Paladin: Dueling Fighting Style');
	Lance.Features.push('Paladin: Lay Hands (25)');
	Lance.Features.push('Paladin: Divine Sense');
	Lance.Features.push('Paladin: Divine Health');
	
	Lance.Skills.Intimidation.Trained = true;// Paladin 
	Lance.Skills.Insight.Trained = true;// Paladin
	Lance.Skills.Perception.Trained = true;//  Elf
	Lance.Skills.Religion.Trained = true; // Crusader
	Lance.Skills.Persuasion.Trained = true; // Crusader

	Lance.Spells.Add('Shield of Faith'); // concentration
    Lance.Spells.Add('Detect Magic'); 
    Lance.Spells.Add('Cure Wounds');
    Lance.Spells.Add('Searing Smite');// sword 
	Lance.Spells.Add('Branding Smite'); // bow 

	Lance.Spells.Add('Protection from Evil and Good');
	Lance.Spells.Add('Sanctuary');
	Lance.Spells.Add('Lesser Restoration');
	Lance.Spells.Add('Zone of Truth');

	let items = Lance.Items;
	items.Add('Studded Leather Armor');
	items.Add('Long Bow'); 
	items.Add('Hat of Disguise');
	items.Add('Short Sword');
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
	items.Add('Holy Water');// flask
	
	items.Add('Gold', 50);
	
	return Lance;
	let notes = {
		team : 
			{
				NoNo : `Gnome crossdressing wizard
					knows and has a history with Zotesh`,
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
			randall : `Boy we saved. Randal Myth`
		},
		locations : {
			'Big Muddy' : `Giant river and swamp, 300 miles diameter or so.`,
			Greensport : `
				Mid-sized town in the middle of a giant swamp. 
				We are on a eastward road nexgt to the Big Muddy. It is currently the dry season, 
				so it is navigable. It has pallisades and is resting on a solid plateau that rises 
				some 10-15 feet and has about a 10 mile diameter.
				It currently has a travelling carnival and soldiers with imperial insignia.  

			`,
			Desert : `To the northeast after the mountains. There is word of large storms, active volcanoes, 
			and more lizards.`,
			'Hemlock Forest' : `About 40 miles north of Greensport.`,
			'Dragonfel Jungle' : `Hundred miles south of Greensport`,
			Ocean : 'To the west of the swamp.',
			Mountains : 'Mountains north 40 miles of swamp , mountains '
		},
		sessions : {
			One : `We entered Greensport. Visited the carnival. And took up the quest to rescue Randal.`,
			Two : `Rested and was joined by Zotesh. Barbican got death rayed. Rested and was joined by Lance. 
			Rescued village kid from bullywugs.
			`
		},
		treasure : {
			session1: 'nada',
			session2: '6 pearls 100gp. 350gp  500gp -100gp',
			group: {
				pearls : '6x 100gp',
				gold : '750gp'
			}
		},
		quests : {
			rescue_randal : `Rescue Randal: We rescued him from some bullywugs. `
		},
	}

	// 6 pearls 100gp 


});