

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let TheBantam = new Character();


	TheBantam.Name = 'Diiqii (Dee) Baa Weyn';
	TheBantam.Race = 'Lightfoot Halfling';
	TheBantam.Classes.Add('Rogue', 1);
	TheBantam.Classes.Add('Paladin', 1);
	TheBantam.Classes.Add('Sorcerer', 1);

	TheBantam.Background = 'Criminal';
	TheBantam.XP = 1100;
	TheBantam.Stats.Strength = 13;
	TheBantam.Stats.Dexterity = 18;
	TheBantam.Stats.Constitution = 12;
	TheBantam.Stats.Intelligence = 8;
	TheBantam.Stats.Wisdom = 13;
	TheBantam.Stats.Charisma = 16;

	TheBantam.Saves.Wisdom.Trained = true;
	TheBantam.Stats.Charisma.Trained = true;

	TheBantam.AC = 16; // 12 st.leather, +4 dex 

	TheBantam.Personality.Trait = 'Guarded: He is slow to trust.';
	TheBantam.Personality.Ideal = 'Charity: He gives back to the people';
	TheBantam.Personality.Bond = 'Retribution: Something important was stolen from him.';
	TheBantam.Personality.Flaw = 'Planner: He makes stupid plans and follows through on them.';
	TheBantam.Personality.Background = 'Criminal. Smuggler';
	TheBantam.Personality.Quirk = 'Does not bleed';
	TheBantam.Personality.Description = 'Dee is a swarthy and handsome halfling who carries himself with a noble bearing.'

	TheBantam.Features.push('Paladin: Divine sense 4/d');
	TheBantam.Features.push('Paladin: Lay Hands 5hp');
	TheBantam.Features.push('Rogue: Sneak Attack 1d6');
	TheBantam.Features.push('Sorcerer: Special darkness 1 sp');

	// Rogue start: more Skills
	// Paladin start: more hp.
	TheBantam.Skills.Acrobatics.Trained = true;// Rogue 
	TheBantam.Skills.Stealth.Trained = true;// Criminal background 
	TheBantam.Skills.Insight.Trained = true;// Rogue
	TheBantam.Skills.Perception.Trained = true;// Rogue 
	TheBantam.Skills.Deception.Trained = true;// Criminal background
	TheBantam.Skills.Intimidation.Trained = true; // Rogue   deciding between this and persuasion.
	//TheBantam.Skills.Persuasion.Trained = true; // Rogue 

	// Skills.X.MiscBonus  need a way to addd to skill bonus.
	// Expertise in Stealth, Acrobatics. double proficiency.


	// Spells known 
	// Paladin spells start at 2 

	//Sorc spells 
	// 4 cants, 2 spells
	// darkness from archetype.  
	TheBantam.Spells.Add('Mending');
	TheBantam.Spells.Add('Minor Illusion');
	TheBantam.Spells.Add('Message');
	TheBantam.Spells.Add('Mage Hand');

	TheBantam.Spells.Add('Feather Fall');
	TheBantam.Spells.Add('Comprehend Languages');
	TheBantam.Spells.Add('Darkness');
	
	let items = TheBantam.Items;
// 300 gp and a magic item. 
	items.Add('Studded Leather Armor'); // 45gp -> 255
	items.Add('Shortsword'); // 10gp 245
	items.Add('Dagger', 5); // 10gp 235
	items.Add('Backpack'); // 2gp 233
	items.Add('Candle', 10); // negligible 
	items.Add('Chalk', 10); // negligible.
	items.Add('Common Clothes');
	items.Add('Fine Clothes');// 15gp 218
	items.Add('Crowbar');// 2gp 215 
	items.Add('Ink');
	items.Add('Ink Pen',2);
	items.Add('Map or Scroll Case');
	items.Add('Paper', 20);
	items.Add('Flask');
	items.Add("Waterskin");
	items.Add('Perfume (vial)', 3);
	items.Add('Signet Ring', 2);
	items.Add('Whetstone');
	items.Add('Steel Mirror');
	items.Add('Mess Kit');
	items.Add('Bedroll');
	items.Add('Tent');
	items.Add('Soap');
	items.Add('Sealing Wax', 2);
	items.Add('Robes');
	items.Add('Fishing Tackle');
	items.Add('Thieves\' Tools');
	items.Add('Tinderbox');

	items.Add('Gold', 90);
	
	let character = TheBantam;