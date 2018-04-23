
define([
	'5e/character.js'
],(Character)=>{
	let Kathuil = new Character();

	Kathuil.Name = 'Kathuil, Dwarflord';
	Kathuil.Race = 'Dwarf';
	Kathuil.Classes.Add('Fighter', 20);

	Kathuil.Background = '';
	Kathuil.XP = 0;
	Kathuil.Stats.Strength = 20;
	Kathuil.Stats.Dexterity = 24;
	Kathuil.Stats.Constitution = 26;
	Kathuil.Stats.Intelligence = 27;
	Kathuil.Stats.Wisdom = 24;
	Kathuil.Stats.Charisma = 28;

	Kathuil.Saves.Strength.Trained = true;
    Kathuil.Saves.Intelligence.Trained = true;
    Kathuil.Saves.Wisdom.Trained = true;
	Kathuil.Saves.Charisma.Trained = true;

	Kathuil.AC = 20; // 

	//Kathuil.Personality.Trait = '';
	//Kathuil.Personality.Ideal = '';
	//Kathuil.Personality.Bond = '';
	//Kathuil.Personality.Flaw = '';
	//Kathuil.Personality.Background = '';
	//Kathuil.Personality.Description = ``;

    
    Kathuil.Features.push('Legendary Action: 5 times per day Kathuil can cast a spell as a bonus action')
	Kathuil.Features.push('Legendary Action: 5 times per day Kathuil can let 10 creatures be immune to one of his spells.')
	Kathuil.Features.push('Aura: Dread Presence. DC 23 wisdom save against either charm or fear')
	


	Kathuil.Skills.Athletics.Trained = true; // fighter 
	Kathuil.Skills.Insight.Trained = true; // bard *
	Kathuil.Skills.Intimidation.Trained = true; // bard *
	Kathuil.Skills.Performance.Trained = true; // bard
	Kathuil.Skills.Perception.Trained = true; // fighter 
	Kathuil.Skills.Persuasion.Trained = true; // bard *
	
	let items = Kathuil.Items;
	items.Add(`Heward's Handy Haversack`);
	items.Add('Potion of Invulnerability');
    items.Add('Potion of Supreme Healing');
    items.Add('Potion of Supreme Healing');
    items.Add('Ring of Mind Shielding');
	items.Add('Ring of Evasion');
    items.Add('Staff of Striking');
	items.Add('Glamoured Studded Leather');
	
	// 7
    Kathuil.Spells.Add('Shield');//1
	Kathuil.Spells.Add('Longstrier'); // 1
    Kathuil.Spells.Add('Misty Step');// 2

    Kathuil.Spells.Add('Lightning Bolt');// 3
    Kathuil.Spells.Add('Haste'); //3
    Kathuil.Spells.Add('Dispel Magic'); //3
    
    
    Kathuil.Spells.Add('Greater Invisibility'); //4
    Kathuil.Spells.Add('Seeming');//5

    Kathuil.Spells.Add('Chain Lightning'); //6
    Kathuil.Spells.Add('Plane Shift'); //7

    Kathuil.Spells.Add('Teleport');//7
    Kathuil.Spells.Add('Power Word Stun');//8
    Kathuil.Spells.Add('Time Stop');//9



	return Kathuil;

});