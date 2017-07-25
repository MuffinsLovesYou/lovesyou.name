
define([
	'5e/character.js'
],(Character)=>{
	let Megumin = new Character();

	Megumin.Name = 'Megumin';
	Megumin.Race = '';
	Megumin.Classes.Add('Warlock', 5);
    
    // Can cast two 16d6 fireballs a day. 

	Megumin.Background = 'Archu Wizard';
	Megumin.XP = 6500;
	Megumin.Stats.Strength = 9;
	Megumin.Stats.Dexterity = 16;
	Megumin.Stats.Constitution = 14;
	Megumin.Stats.Intelligence = 2;
	Megumin.Stats.Wisdom = 10;
	Megumin.Stats.Charisma = 18;

	Megumin.Saves.Charisma.Trained = true;
	Megumin.Saves.Constitution.Trained = true;

	Megumin.AC = 16; // Scale

	Megumin.Personality.Description = ``;
	Megumin.Personality.Trait = '';
	Megumin.Personality.Ideal = '';
	Megumin.Personality.Bond = '';
	Megumin.Personality.Flaw = '';
	Megumin.Personality.Background = ``;

	
	Megumin.Skills.Athletics.Trained = true; // merc
	Megumin.Skills.Insight.Trained = true; // paladin
	Megumin.Skills.Religion.Trained = true; // paladin
	Megumin.Skills.Performance.Trained = true; // helf
	Megumin.Skills.Perception.Trained = true; // merc
	Megumin.Skills.Persuasion.Trained = true; // helf
	
    Megumin.Spells.Add('Fireball');
	
	let items = Megumin.Items;
	// 300 gp and a magic item. 

//	Megumin.Spells.Add('Healing Word');
//	Megumin.Spells.Add('Thunderwave');
//	Megumin.Spells.Add('Longstrider');
//	Megumin.Spells.Add('Feather Fall');
	//Megumin.Spells.Add('Enhance Ability');

	items.Add('Gold', 880);
	
	return Megumin;

});
