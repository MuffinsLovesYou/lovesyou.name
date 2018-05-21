
define([
	'5e/character.js'
],(Character)=>{
	let OneTrick = new Character();

	OneTrick.Name = 'OneTrick';
	OneTrick.Race = 'Human';
	OneTrick.Classes.Add('Warlock', 2);// hexblade, pact of chain to 5th level  
    OneTrick.Classes.Add('Sorcerer', 3); // shadow to 15th or 14th

	OneTrick.Background = 'Soldier';
	OneTrick.XP = 0;
	OneTrick.Stats.Strength = 10;
	OneTrick.Stats.Dexterity = 14;
	OneTrick.Stats.Constitution = 14;
	OneTrick.Stats.Intelligence = 10;
	OneTrick.Stats.Wisdom = 12;
	OneTrick.Stats.Charisma = 18;

	OneTrick.Saves.Charisma.Trained = true;
	OneTrick.Saves.Wisdom.Trained = true;

	OneTrick.AC = 19; // Shield + Half Plate

	OneTrick.Personality.Description = ``;
	OneTrick.Personality.Trait = ``;
	OneTrick.Personality.Ideal = ``;
	OneTrick.Personality.Bond = ``;
	OneTrick.Personality.Flaw = ``;
	OneTrick.Personality.Background = ``;


	OneTrick.Skills.Deception.Trained = true; // warlock
	OneTrick.Skills.History.Trained = true; // warlock
    // bg
    // bg 
    // human

    OneTrick.Features.push('Feat: Warcaster');
    OneTrick.Features.push('Hexblade Curse');
    OneTrick.Features.push('Eyes of the dark: 120ft darkvision');
    OneTrick.Features.push('3 Sorcery Points')
    OneTrick.Features.push('Metamagic: Quickened Spell, Twinned Spell')


	OneTrick._extra_hp = OneTrick.Level;
    // prep 6 lvl+wis
    // 0
    OneTrick.Spells.Add('Mending');
    OneTrick.Spells.Add('Prestidigitation');
    OneTrick.Spells.Add('Eldritch Blast');
    OneTrick.Spells.Add('Mage Hand');
    OneTrick.Spells.Add('Minor Illusion');
    OneTrick.Spells.Add('Chill Touch');

    //1
    OneTrick.Spells.Add('Hex'); // warlock
    OneTrick.Spells.Add('Comprehend Languages'); // warlock
    OneTrick.Spells.Add('Illusory Script'); // warlock
    OneTrick.Spells.Add('Detect Magic');
    OneTrick.Spells.Add('Disguise Self');

    // 2
    OneTrick.Spells.Add('Darkness'); // eyes of the dark
    OneTrick.Spells.Add('Misty Step');
    OneTrick.Spells.Add('Spider Climb');
    
    // 3
    


	let items = OneTrick.Items;
	items.Add('Gold', 20);
    items.Add('Chain Mail');
    items.Add('Shield');
    items.Add('Holy Symbol (Amulet)');
    items.Add('Pouch');
    items.Add('Dagger');
    // explorer's pack
    items.Add('Backpack');
    items.Add('Bedroll');
    items.Add('Mess Kit');
    items.Add('Rations', 10);
    items.Add('Waterskin');
    items.Add('Hempen Rope (50 feet)');
    items.Add('Candle', 10);
    items.Add('Playing Card Set');
    items.Add('Sealing Wax');
    items.Add('Chalk', 5);
    items.Add('Steel Mirror');
    items.Add('Fishing Tackle');
    items.Add('Iron Pot');
    items.Add('Common Clothes');
    items.Add('Soap');
    items.Add('Whetstone');
    items.Add("Cook's Utensils");
    items.Add("Map or Scroll Case"); // spices 
	

	return OneTrick;
    // cragmaw


});
