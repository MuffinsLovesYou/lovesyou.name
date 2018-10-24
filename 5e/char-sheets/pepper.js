
define([
	'5e/character.js'
],(Character)=>{
	let Pepper = new Character();

	Pepper.Name = 'Pepper';
	Pepper.Race = 'Hill Dwarf';
	Pepper.Classes.Add('Cleric', 3);
    
	Pepper.Background = 'Soldier';
	Pepper.XP = 0;
	Pepper.Stats.Strength = 12;
	Pepper.Stats.Dexterity = 9;
	Pepper.Stats.Constitution = 16;
	Pepper.Stats.Intelligence = 10;
	Pepper.Stats.Wisdom = 16;
	Pepper.Stats.Charisma = 12;

	Pepper.Saves.Charisma.Trained = true;
	Pepper.Saves.Wisdom.Trained = true;

	Pepper.AC = 18; // Shield + Chain

	Pepper.Personality.Description = `Trained as a soldier on the island of Mintarn, Pepper traveled 
    to Neverwinter as part of a mercenary company that serves as both army and city watch. She grew 
    disillusioned with her fellow soldiers, who seem to enjoy their authority at the expense of the 
    people they're supposed to protect. Recently she disobeyed an order and was suspended from active 
    duty. Personal goal: Teach the Redbrands a Lesson. `;
	Pepper.Personality.Trait = `I'm always polite and respectful. Also, I don't trust my gut feelings, 
    so I tend to wait for others to act.`;
	Pepper.Personality.Ideal = `Respect. People deserve to be treated with dignity and courtesy.`;
	Pepper.Personality.Bond = `I have three cousins--Gundren, Tharden, and Nundro Rockseeker-- who 
    are my friends and cherished clan members.`;
	Pepper.Personality.Flaw = `I secretly wonder whether the gods care about mortal affairs at all.`;
	Pepper.Personality.Background = ``;

	Pepper.Skills.Perception.Trained = true; // soldier
	Pepper.Skills.Persuasion.Trained = true; // cleric
	Pepper.Skills.Religion.Trained = true; // cleric
	Pepper.Skills.Athletics.Trained = true; // soldier

    Pepper.Features.push('Darkvision, 60ft');
    Pepper.Features.push('Spell Save: 13');
    Pepper.Features.push('Proficiency: Playing Cards and Cooks tools.');
    Pepper.Features.push('Disciple of Life. +2+Spell Level on any healing effects.');

// 4 is out 

// 6 saved

	Pepper._extra_hp = Pepper.Level;
    // prep 6 lvl+wis
    // 0
    Pepper.Spells.Add('Guidance');
	Pepper.Spells.Add('Sacred Flame');
	Pepper.Spells.Add('Mending');
	// domain 1
    Pepper.Spells.Add('Bless');// domain
    Pepper.Spells.Add('Cure Wounds'); // domain
    // 1
    Pepper.Spells.Add('Shield of Faith');
    Pepper.Spells.Add('Healing Word');
    Pepper.Spells.Add('Sanctuary');//rit
    Pepper.Spells.Add('Detect Magic');//rit
    Pepper.Spells.Add('Command');   
    // domain 2
    Pepper.Spells.Add('Spiritual Weapon') // domain
    Pepper.Spells.Add('Lesser Restoration') // domain 
    // 2
    Pepper.Spells.Add('Prayer of Healing')
    
	let items = Pepper.Items;
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
	

	return Pepper;
    // cragmaw


});


// large most loyal 
// large indoor kid 