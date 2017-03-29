
define([
	'5e/character.js'
],(Character)=>{
	let Brady = new Character();

	Brady.Name = 'Barbican Brady';
	Brady.Race = 'Human';
	Brady.Classes.Add('Fighter', 2);
    Brady.Classes.Add('Bard', 3);
    
	Brady.Background = 'Entertainer';
	Brady.XP = 6500;
	Brady.Stats.Strength = 18;
	Brady.Stats.Dexterity = 8;
	Brady.Stats.Constitution = 14;
	Brady.Stats.Intelligence = 8;
	Brady.Stats.Wisdom = 8;
	Brady.Stats.Charisma = 16;

	Brady.Saves.Strength.Trained = true;
	Brady.Stats.Constitution.Trained = true;

	Brady.AC = 21; // Plate + shield 

	Brady.Personality.Trait = '';
	Brady.Personality.Ideal = '';
	Brady.Personality.Bond = '';
	Brady.Personality.Flaw = '';
	Brady.Personality.Background = '';
	Brady.Personality.Description = ``;

	Brady.Features.push('Feat: Shield Master');
	Brady.Features.push('Fighter: Action Surge');
	Brady.Features.push('Fighter: Second Wind');
	Brady.Features.push('Bard: Inspiration(d6)');
	Brady.Features.push('Bard: Song of Rest(d6)');
	Brady.Features.push('Bard: Expertise (athletics, performance)')
	Brady.Features.push('Bard: College of lore');

	Brady.Skills.Athletics.Trained = true; // fighter 
	Brady.Skills.Insight.Trained = true; // bard *
	Brady.Skills.Intimidation.Trained = true; // bard *
	Brady.Skills.Performance.Trained = true; // bard
	Brady.Skills.Perception.Trained = true; // fighter 
	Brady.Skills.Persuasion.Trained = true; // bard *
	
	Brady.Skills.Athletics.Expertise = true;
	Brady.Skills.Performance.Expertise = true;

	let items = Brady.Items;
	// 300 gp and a magic item. 

	Brady.Spells.Add('Healing Word');
	Brady.Spells.Add('Thunderwave');
	Brady.Spells.Add('Longstrider');
	Brady.Spells.Add('Feather Fall');
	//Brady.Spells.Add('Enhance Ability');

	items.Add('Gold', 880);
	
	return Brady;

});