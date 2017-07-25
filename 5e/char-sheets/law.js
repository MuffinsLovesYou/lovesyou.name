
define([
	'5e/character.js'
],(Character)=>{
	let Law = new Character();

	Law.Name = 'Law';
	Law.Race = 'Half-elf';
	Law.Classes.Add('Paladin', 5);
    

	Law.Background = 'Merc';
	Law.XP = 6500;
	Law.Stats.Strength = 18;
	Law.Stats.Dexterity = 8;
	Law.Stats.Constitution = 16;
	Law.Stats.Intelligence = 8;
	Law.Stats.Wisdom = 10;
	Law.Stats.Charisma = 16;

	Law.Saves.Strength.Trained = true;
	Law.Stats.Constitution.Trained = true;

	Law.AC = 17; // Scale

	Law.Personality.Description = `Boasting to be the largest half-elf alive, Law stands about 6'4" tall and 
	weighs about 260lbs. His shining armor, fanciful hats, and big grin are all part of his uniform working as the 
	'face' of whatever mercenary, or now adventuring group he's with. `;
	Law.Personality.Trait = 'I work hard, so I can play hard when I\'m done.';
	Law.Personality.Ideal = 'This life is about freedom. Hard work for easy pay, often comfortably outside the law.';
	Law.Personality.Bond = 'The individual is strong, but the group is stronger.';
	Law.Personality.Flaw = 'Though my order is warlike, I struggle with my oath. ';
	Law.Personality.Background = `Living a largely vagrant childhood, Law's first profession was working as a page 
	for members of the Tiny Legion band of mercenaries. They had close ties with a monastery to Tempus, that was 
	renowned for producing well-trained and honorable fighters. Off and on he would train there and then take his 
	lessons with him on the road as a soldier of fortune, trying to find balance between a self-serving lifestyle 
	and vows to serve others.`;

	
	Law.Skills.Athletics.Trained = true; // merc
	Law.Skills.Insight.Trained = true; // paladin
	Law.Skills.Religion.Trained = true; // paladin
	Law.Skills.Performance.Trained = true; // helf
	Law.Skills.Perception.Trained = true; // merc
	Law.Skills.Persuasion.Trained = true; // helf
	
	
	let items = Law.Items;
	// 300 gp and a magic item. 

//	Law.Spells.Add('Healing Word');
//	Law.Spells.Add('Thunderwave');
//	Law.Spells.Add('Longstrider');
//	Law.Spells.Add('Feather Fall');
	//Law.Spells.Add('Enhance Ability');

	items.Add('Gold', 880);
	
	return Law;

});
