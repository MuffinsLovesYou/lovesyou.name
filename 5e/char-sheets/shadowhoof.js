
define([
	'5e/character.js'
],(Character)=>{
	let Shadowhoof = new Character();


	Shadowhoof.Name = 'Shadowhoof Darkmane';
	Shadowhoof.Race = 'Centaur';
	Shadowhoof.Classes.Add('Monk', 6);// way of the shadow  

	Shadowhoof.Speed = 55

	Shadowhoof.Background = 'Loan Shark';
	Shadowhoof.XP = 0;
	Shadowhoof.Stats.Strength = 12;
	Shadowhoof.Stats.Dexterity = 16;
	Shadowhoof.Stats.Constitution = 16;
	Shadowhoof.Stats.Intelligence = 8;
	Shadowhoof.Stats.Wisdom = 16;
	Shadowhoof.Stats.Charisma = 8;

	Shadowhoof.Saves.Strength.Trained = true;
	Shadowhoof.Saves.Dexterity.Trained = true;
	
	Shadowhoof.AC = 16; // Shield + Half Plate

	Shadowhoof.Personality.Description = ``;
	Shadowhoof.Personality.Trait = ``;
	Shadowhoof.Personality.Ideal = `Freedom. After paying off my servitude, I want to make a new life for myself.`;
	Shadowhoof.Personality.Bond = ``;
	Shadowhoof.Personality.Flaw = ``;
	Shadowhoof.Personality.Background = ``;


	Shadowhoof.Skills.Acrobatics.Trained = true; // warlock
	Shadowhoof.Skills.Stealth.Trained = true; // warlock
    Shadowhoof.Skills.Insight.Trained = true;
	Shadowhoof.Skills.Perception.Trained = true;
	Shadowhoof.Skills.Medicine.Trained = true;
	// bg
    // bg 
    // human

    Shadowhoof.Features.push('Martial Arts : 1d6');
    Shadowhoof.Features.push('Ki Points : 6');
    Shadowhoof.Features.push('Shadow Arts : 2 Ki points to cast pass without trace');
    Shadowhoof.Features.push('60 ft darkvision')
	Shadowhoof.Features.push('Unarmored movement: 55ft')
	Shadowhoof.Features.push('1 key point for dash, dodge, disengage')


	//Shadowhoof._extra_hp = Shadowhoof.Level;

	let items = Shadowhoof.Items;
	items.Add('Gold', 66);
	items.Add('Silver', 2);
	items.Add('Copper', 8);
	items.Add('Dark Clothes');
	items.Add('Saddlebags');
	items.Add('Rations', 5);
	items.Add('Waterskin', 4)
	

	return Shadowhoof;
});
