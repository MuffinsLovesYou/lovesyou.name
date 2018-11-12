
define([
	'5e/character.js'
],(Character)=>{

 colorCookie = {"byPalette":{"pri":["#343628","#B5B9A2","#767A63","#323817","#222804"]},"byLum":{"pri":["#B5B9A2","#767A63","#343628","#323817","#222804"]}};

	let Maximillien = new Character();


	Maximillien.Name = 'Maximillien';
	Maximillien.Race = 'Human';
	Maximillien.Classes.Add('Fighter', 4);

	Maximillien.Background = '';
	Maximillien.XP = 0;
	Maximillien.Stats.Strength = 16;
	Maximillien.Stats.Dexterity = 10;
	Maximillien.Stats.Constitution = 14;
	Maximillien.Stats.Intelligence = 14;
	Maximillien.Stats.Wisdom = 12;
	Maximillien.Stats.Charisma = 8;

	Maximillien.Saves.Strength.Trained = true;
	Maximillien.Stats.Constitution.Trained = true;

	Maximillien.AC = 20; // Splint + shield 

	Maximillien.Personality.Trait = '';
	Maximillien.Personality.Ideal = '';
	Maximillien.Personality.Bond = '';
	Maximillien.Personality.Flaw = '';
	Maximillien.Personality.Background = '';
	Maximillien.Personality.Quirk = '';
	Maximillien.Personality.Description = ''

    Maximillien.Features.push('Feat: Sentinel')
	Maximillien.Features.push('Fighter: Defense Fighting Style');
    Maximillien.Features.push('Fighter: Action Surge');
    Maximillien.Features.push('Fighter: Second Wind');
    

	Maximillien.Skills.Athletics.Trained = true;// Fighter
	Maximillien.Skills.Stealth.Trained = true;// Criminal background 
	Maximillien.Skills.Perception.Trained = true;// Fighter
	Maximillien.Skills.Deception.Trained = true;// Criminal background

    // Cantrip:
    Maximillien.Spells.Add('Prestidigitation');
    Maximillien.Spells.Add('Mending');
    

    // 1:
    // Abj
	Maximillien.Spells.Add('Protection from Evil and Good');
	// Evo
    Maximillien.Spells.Add('Thunderwave');
	// Etc
    Maximillien.Spells.Add('Unseen Servant');
    

	let items = Maximillien.Items;

    // 300 gp and a magic item. 
	items.Add('Studded Leather Armor'); // 45gp -> 255
	items.Add('Shortsword'); // 10gp 245
	items.Add('Dagger', 2); // 10gp 235
	items.Add('Backpack'); // 2gp 233

	items.Add('Gold', 10);
	
	return Maximillien;
});