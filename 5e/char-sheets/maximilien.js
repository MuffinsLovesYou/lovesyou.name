
define([
	'5e/character.js'
],(Character)=>{
	let Max = new Character();


	Max.Name = 'Maximillien Robert';
	Max.Race = 'Human';
	Max.Classes.Add('Fighter', 5);

	Max.Background = 'Soldier';
	Max.XP = 6500;
	Max.Stats.Strength = 18;
	Max.Stats.Dexterity = 8;
	Max.Stats.Constitution = 14;
	Max.Stats.Intelligence = 10;
	Max.Stats.Wisdom = 14;
	Max.Stats.Charisma = 12;

	Max.Saves.Strength.Trained = true;
	Max.Stats.Constitution.Trained = true;

	Max.AC = 20; // Plate + shield 

	Max.Personality.Trait = 'I feel I\'ve seen it all and am not impressed by much';
	Max.Personality.Ideal = 'I\'m not going to die broke and broken. I\'m going to get rich or die trying.';
	Max.Personality.Bond = 'Anyone who fights courageously with me gets my admiration and acceptance.';
	Max.Personality.Flaw = 'I\'m somewhere between an adrenaline addict and having a death wish. I seek after extremes of danger and experience.';
	Max.Personality.Background = 'At 38, I\'ve spent the last 6 years a mercenary, and the 15 before that a campaigning soldier.';
	Max.Personality.Description = `I switch on and off between states such as being razor focused 
		or hardly coherent, clean cut and haggard, polite and cold.
		I resent my life as a soldier as much as I let it define me.`;

	Max.Features.push('Feat: Sentinel');
	Max.Features.push('Fighter: Duelist Fighting style');
	Max.Features.push('Fighter: Combat Maneuver - Evasive Footwork');
	Max.Features.push('Fighter: Combat Maneuver - Riposte');
	Max.Features.push('Fighter: Combat Maneuver - Maneuvering Attack')

	Max.Skills.Athletics.Trained = true;// Soldier 
	Max.Skills.Insight.Trained = true;// Fighter
	Max.Skills.Perception.Trained = true;// Fighter 
	Max.Skills.Intimidation.Trained = true; // Soldier
	Max.Skills.Survival.Trained = true; // Human

	let items = Max.Items;
	items.Add('Plate Armor');
	items.Add('Shield');
	items.Add('Long Sword');
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
	
	items.Add('Gold', 50);
	
	return Max;

});