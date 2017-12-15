
define([
	'5e/character.js'
],(Character)=>{
	let Darkness = new Character();

	Darkness.Name = 'Darkness';
	Darkness.Race = '';
	Darkness.Classes.Add('Paladin', 5);
    
    // Can cast two 16d6 fireballs a day. 

	Darkness.Background = 'Crusader';
	Darkness.XP = 6500;
	Darkness.Stats.Strength = 15;
	Darkness.Stats.Dexterity = 8;
	Darkness.Stats.Constitution = 16;
	Darkness.Stats.Intelligence = 10;
	Darkness.Stats.Wisdom = 10;
	Darkness.Stats.Charisma = 14;

	Darkness.Saves.Charisma.Trained = true;
	Darkness.Saves.Constitution.Trained = true;

	Darkness.AC = 17; // Splint

	Darkness.Personality.Description = ``;
	Darkness.Personality.Trait = '';
	Darkness.Personality.Ideal = '';
	Darkness.Personality.Bond = '';
	Darkness.Personality.Flaw = '';
	Darkness.Personality.Background = ``;

	Darkness.Skills.History.Trained = true; // noble
	Darkness.Skills.Persuasion.Trained = true; // noble
	Darkness.Skills.Religion.Trained = true; // paladin
	Darkness.Skills.Athletics.Trained = true; // paladin
	Darkness.Skills.Perception.Trained = true; // human

	Darkness.Features.push('Feat: Great Weapon Master');
	Darkness.Features.push('Feat: Tough');
	Darkness._extra_hp = Darkness.Level * 2;

    Darkness.Spells.Add('');
	
	let items = Darkness.Items;
	// 300 gp and a magic item. 

	//	Darkness.Spells.Add('Healing Word');
	//	Darkness.Spells.Add('Thunderwave');
	//	Darkness.Spells.Add('Longstrider');
	//	Darkness.Spells.Add('Feather Fall');
	//Darkness.Spells.Add('Enhance Ability');

	items.Add('Gold', 880);
	
	return Darkness;

});
