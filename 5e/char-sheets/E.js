
define([
	'5e/character.js'
],(Character)=>{
	let E = new Character();

	E.Name = 'E';
	E.Race = 'Changeling';
	E.Classes.Add('Rogue', 2);
    E.Classes.Add('Bard', 3);
    
	E.Background = 'Spy';
	E.XP = 6500;
	E.Stats.Strength = 10;
	E.Stats.Dexterity = 16;
	E.Stats.Constitution = 10;
	E.Stats.Intelligence = 10;
	E.Stats.Wisdom = 13;
	E.Stats.Charisma = 16;

	E.Saves.Dexterity.Trained = true;
	E.Stats.Intelligence.Trained = true;

	E.AC = 16; // Plate + shield 

	E.Personality.Trait = '';
	E.Personality.Ideal = '';
	E.Personality.Bond = '';
	E.Personality.Flaw = '';
	E.Personality.Background = '';
	E.Personality.Description = ``;

	E.Features.push('Feat: Actor');
	E.Features.push('Rogue: Expertise (stealth, sleight of hand)');
	E.Features.push('Rogue: Cunning Action');
	E.Features.push('Bard: Inspiration(d6)');
	E.Features.push('Bard: Song of Rest(d6)');
	E.Features.push('Bard: Expertise (persuasion, deception)')
	E.Features.push('Bard: College of lore');

	E.Skills.Acrobatics.Trained = true; // rogue 
	E.Skills.Deception.Trained = true; // Spy;
	E.Skills['Sleight of Hand'].Trained = true; // rogue 
	e.Skills.Insight.Trained = true; // rogue
	E.Skills.Stealth.Trained = true; // Spy;
	E.Skills.Performance.Trained = true; // bard
	E.Skills.Persuasion.Trained = true; // rogue 

	
	let items = E.Items;
	// 300 gp and a magic item. 

	items.Add('Gold', 880);
	
	return E;

});