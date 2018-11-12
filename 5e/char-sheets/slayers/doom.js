
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Doom = new Character();


	Doom.Name = 'Doom';
	Doom.Race = 'Kenku';
	Doom.Classes.Add('Cleric', 4);// Death Domain

	Doom.Background = '';
	Doom.XP = 0;
	Doom.Stats.Strength = 9;
	Doom.Stats.Dexterity = 14;
	Doom.Stats.Constitution = 14;
	Doom.Stats.Intelligence = 12;
	Doom.Stats.Wisdom = 18;
	Doom.Stats.Charisma = 10;

	Doom.Saves.Wisdom.Trained = true;
	Doom.Stats.Charisma.Trained = true;

	Doom.AC = 18; // Scale mail + shield

	Doom.Personality.Trait = '';
	Doom.Personality.Ideal = '';
	Doom.Personality.Bond = '';
	Doom.Personality.Flaw = '';
	Doom.Personality.Background = '';
	Doom.Personality.Quirk = '';
	Doom.Personality.Description = ''

    Doom.Features.push('Reaper: Necromancy cantrips can target extra enemy adjacent to first. ');
	Doom.Features.push(`Channel Divinity, Touch of Death: On hit with melee attack, deal bonus 11 (5 + 2*cleric level) necrotic damage.`);


	Doom.Skills.Athletics.Trained = true;// 
	Doom.Skills.Stealth.Trained = true;// Criminal background 
	Doom.Skills.Perception.Trained = true;// Fighter
	Doom.Skills.Deception.Trained = true;// Criminal background

    // Cantrips
    Doom.Spells.Add('Toll the Dead');
    Doom.Spells.Add('Guidance');
    Doom.Spells.Add('Light');
    Doom.Spells.Add('Mending');
    // 1st
    // Domain
	Doom.Spells.Add('False Life');
	Doom.Spells.Add('Ray of Sickness');
	
    Doom.Spells.Add('Sanctuary');
    Doom.Spells.Add('Protection from Evil and Good');
    Doom.Spells.Add('Healing Word');
    Doom.Spells.Add('Detect Magic');


    // 2nd
    // Domain
    Doom.Spells.Add('Blindness/Deafness');
    Doom.Spells.Add('Ray of Enfeeblement');

    Doom.Spells.Add('Spiritual Weapon');
    Doom.Spells.Add('Continual Flame');
    Doom.Spells.Add('Hold Person');
    Doom.Spells.Add('Lesser Restoration');
    



	let items = Doom.Items;

    // 300 gp and a magic item. 
	items.Add('Studded Leather Armor'); // 45gp -> 255
	items.Add('Shortsword'); // 10gp 245
	items.Add('Dagger', 2); // 10gp 235
	items.Add('Backpack'); // 2gp 233

	items.Add('Gold', 10);
	
	return Doom;
});