
define([
	'5e/character.js'
],(Character)=>{
	let Brady = new Character();

	Brady.Name = 'Barbican Brady';
	Brady.Race = 'Goliath';
	Brady.Classes.Add('Fighter', 2);
	Brady.Classes.Add('Bard', 3);
	Brady.Background = 'Entertainer, wrestler, strongman';
	Brady.XP = 6500;
	Brady.Stats.Strength = 18;
	Brady.Stats.Dexterity = 14;
	Brady.Stats.Constitution = 12;
	Brady.Stats.Intelligence = 8;
	Brady.Stats.Wisdom = 8;
	Brady.Stats.Charisma = 14;

	Brady.Saves.Strength.Trained = true;
	Brady.Stats.Constitution.Trained = true;

	Brady.AC = 17; // breastplate + dex + fighting style 

	Brady.Personality.Trait = `I'll settle for nothing less than perfection.`;
	Brady.Personality.Ideal = `I live for making the crowd hyped.`;
	Brady.Personality.Bond = `I will do anything to prove myself better than my rivals.`;
	Brady.Personality.Flaw = `I am out to beat gods and all their priests.`;
	Brady.Personality.Background = `Part warrior, part showman, Barbican Brady represents the goliath race fully. 
	Standing 7'4" tall and weighing in at 300lbs of lean muscle, he is a granite-like slab of perfection. A prodigy 
	of combat and also theater, he made a name for himself as a travelling carnie. That life changed when he started 
	to really learn about the gods. He's developed a love of some and a distaste for others and has set out on a 
	quest of muscle and charisma to spread inspiration and seek greater challenges. 
	He was orphaned at age 10, then known as Dim-mak. Finding his way to a band of travelling entertainers, he eventually 
	was apprenticed to a master wrestler and honed his skills besting farmers, soldiers, blacksmiths, and countless others 
	who would try their hand to beat the young athlete. As he reached his full adult size, he had to throw himself into 
	studying the art of the entertainer to offset what would otherwise be a too intimidating nature. He has learned a 
	lot about playing to a crowd with song, story, and physicality and he loves nothing more than working an audience 
	up to a roar as he effortlessly bests challengers, unleashing outrageous boasts.
	Less than a year ago, in a conversation with a cleric, he was for the first time truly inspired by tales of the gods. 
	He mostly favors Kord, god of athletics and sport, and Milil, goddess of poetry and song. `;
	Brady.Personality.Description = `Brady is respectful of the traditions and laws of the places he visits. He 
	values virtues such as self-reliance, honor, and leadership. He is boisterous and braggadocious to a deliberately 
	comical level to lampshade his physique and offset what could otherwise be an intimidating presence.`;

	Brady.Features.push('Bard: Inspiration(d6)');
	Brady.Features.push('Bard: Song of Rest(d6)');
	Brady.Features.push('Bard: Expertise (athletics, performance)')
	Brady.Features.push('Bard: College of lore');
	Brady.Features.push('Fighter: Action Surge');
	Brady.Features.push('Feat: Tavern Brawler');
	Brady.Features.push('Fighter: Second Wind');
	
	Brady.Skills.Athletics.Trained = true; // goliath  
	Brady.Skills.Acrobatics.Trained = true; // entertainer
	Brady.Skills.Insight.Trained = true; // fighter *
	Brady.Skills.Performance.Trained = true; // entertainer 
	Brady.Skills.Persuasion.Trained = true; // bard *
	Brady.Skills.Perception.Trained = true; // fighter 

	Brady.Skills.Athletics.Expertise = true;
	Brady.Skills.Performance.Expertise = true;

	let items = Brady.Items;
	// 300 gp and a magic item. 

	Brady.Spells.Add('Healing Word');
	Brady.Spells.Add('Comprehend Languages');
	Brady.Spells.Add('Longstrider');
	Brady.Spells.Add('Feather Fall');
	Brady.Spells.Add('Enhance Ability');
	Brady.Spells.Add('Identify');

	items.Add('Gold', 41);
	items.Add('Breastplate');
	items.Add('Immovable Rod');
	items.Add('Handaxe', 2);
	items.Add('Everburning Torch');
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
	items.Add('Pole (10-foot)')
	return Brady;

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
				Froggo : `Bullywug squire. `
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
			Desert : `To the northeast. There is word of large storms, active volcanoes, and more lizards.`,
			'Hemlock Forest' : `About 40 miles north of Greensport `,
			'Dragonfel Jungle' : ``
		},
		sessions : {
			One : ``,
			Two : `
			We rest and meet Zotesh. I build rapport with Froggo. 
			`
		}
	}


	let x = `Notes two:
		we start camp: Zotesh shows up 
	`

});