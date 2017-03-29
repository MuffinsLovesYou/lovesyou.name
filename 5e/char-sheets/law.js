
define([
	'5e/character.js'
],(Character)=>{
	let Law = new Character();

	Law.Name = 'Law';
	Law.Race = 'Half elf';
	Law.Classes.Add('Paladin', 5);
    

	Law.Background = 'Merc';
	Law.XP = 6500;
	Law.Stats.Strength = 16;
	Law.Stats.Dexterity = 8;
	Law.Stats.Constitution = 16;
	Law.Stats.Intelligence = 8;
	Law.Stats.Wisdom = 10;
	Law.Stats.Charisma = 16;

	Law.Saves.Strength.Trained = true;
	Law.Stats.Constitution.Trained = true;

	Law.AC = 18; // Plate 

	Law.Personality.Trait = '';
	Law.Personality.Ideal = '';
	Law.Personality.Bond = '';
	Law.Personality.Flaw = '';
	Law.Personality.Background = '';
	Law.Personality.Description = ``;

	Law.Features.push('Feat: Shield Master');
	Law.Features.push('Fighter: Action Surge');
	Law.Features.push('Fighter: Second Wind');
	Law.Features.push('Bard: Inspiration(d6)');
	Law.Features.push('Bard: Song of Rest(d6)');
	Law.Features.push('Bard: Expertise (athletics, performance)')
	Law.Features.push('Bard: College of lore');

	Law.Skills.Athletics.Trained = true; // mercenary
	Law.Skills.Insight.Trained = true; // paladin
	Law.Skills.Intimidation.Trained = true; // mercenary
	//Law.Skills.Performance.Trained = true; // bard
	//Law.Skills.Perception.Trained = true; // fighter 
	Law.Skills.Persuasion.Trained = true; // paladin
	
	
	let items = Law.Items;
	// 300 gp and a magic item. 

	Law.Spells.Add('Healing Word');
	Law.Spells.Add('Thunderwave');
	Law.Spells.Add('Longstrider');
	Law.Spells.Add('Feather Fall');
	//Law.Spells.Add('Enhance Ability');

	items.Add('Gold', 880);
	
	return Law;

});