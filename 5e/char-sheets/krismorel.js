
define([
	'5e/character.js'
],(Character)=>{
	let Krismorel = new Character();

	Krismorel.Name = 'Krismorel the Bearcharger';
	Krismorel.Race = 'Elf';
	Krismorel.Classes.Add('Paladin', 20);
    
	Krismorel.Background = '';
	Krismorel.XP = 0;
	Krismorel.Stats.Strength = 20;
	Krismorel.Stats.Dexterity = 10;
	Krismorel.Stats.Constitution = 10;
	Krismorel.Stats.Intelligence = 12;
	Krismorel.Stats.Wisdom = 16;
	Krismorel.Stats.Charisma = 19;

	Krismorel.Saves.Strength.Trained = true;
	Krismorel.Saves.Charisma.Trained = true;

	Krismorel.AC = 23; // Plate+2+defense

	//Krismorel.Personality.Trait = '';
	//Krismorel.Personality.Ideal = '';
	//Krismorel.Personality.Bond = '';
	//Krismorel.Personality.Flaw = '';
	//Krismorel.Personality.Background = '';
	//Krismorel.Personality.Description = ``;

	Krismorel.Features.push('Paladin: Lay hands (100)');
	Krismorel.Features.push('Paladin: Improved divine smite (+1d8)')
	Krismorel.Features.push('Paladin: Elder champion')

	Krismorel.Skills.Athletics.Trained = true; // fighter 
	Krismorel.Skills.Insight.Trained = true; // bard *
	Krismorel.Skills.Intimidation.Trained = true; // bard *
	Krismorel.Skills.Performance.Trained = true; // bard
	Krismorel.Skills.Perception.Trained = true; // fighter 
	Krismorel.Skills.Persuasion.Trained = true; // bard *
	
	let items = Krismorel.Items;
	items.Add('Plate Armor');
	items.Add('Longsword');
	
	//Krismorel.Spells.Add('Any Paladin spell.');

	console.log(Krismorel)
	return Krismorel;

});