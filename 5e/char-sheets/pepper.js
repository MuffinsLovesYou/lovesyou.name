
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


	Pepper._extra_hp = Pepper.Level;

    // 0
    Pepper.Spells.Add('Mending');
	Pepper.Spells.Add('Sacred Flame');
	Pepper.Spells.Add('Spare the Dying');
	// domain
    Pepper.Spells.Add('Bless');// domain
    Pepper.Spells.Add('Cure Wounds'); // domain
    // 1
    Pepper.Spells.Add('Shield of Faith');
    Pepper.Spells.Add('Healing Word');
    Pepper.Spells.Add('Purify Food and Drink');//rit
    Pepper.Spells.Add('Detect Magic');//rit
    Pepper.Spells.Add('Command');   
    
	let items = Pepper.Items;
	items.Add('Gold', 5);
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

    notes = {
        Party : {
            'Al Hazrad' : {
                Desc : `High elf wizard. Worshiper of Oghma, god of knowlect. Seeks dispersion and freedom 
                of knowledge`
            },
            'Bo Bodkin' : {
                Desc : `Human fighter, local folkhero for telling off a shipcaptain.. 
                a story for another time`,
            },
            'Lidda' : {
                Desc : `Halfling rogue `
            }

        }
        , Locations : {
            'Neverwinter' : {
                Desc : `Starting spot. Large city, little known. `
            }, 
            'Phandelin' : {
                'Lionshield coster' : ``,
                'Miners exchange' : 'Halya proprietor'
            }, 
            'Wave echo chave, mine of phandelver' : {
                'Entrance' : ' is lost',
                'Forge of spells' : 'Can make magic items very quickly',
            },
            'Cragmaw castle' : `Where Gundran was taken to by gobbos. Cragmaw goblins, redbrands 
            cragmaw goblins. `
        }
        , People : {
            'Eva' : 'Mother of kids (charlie and leanne), first quest', 
            'Sister Thea' : 'Acolyte of Timera, rescued from gobbos',
            'Sister Garael' : 'At the shrine of luck',
            'Gundran, Tharden, Nundro' : `Brother dwarves, cousins of Pepper, Gundran is still captured at cragmaw
            `,
            'Sildar' : 'bodyguard of Gundran, was seeking a mage who ended up being Earno GlassStaff',
            'Earno Albek' : `Wizard in Phandoin `, 
            'Linene' : 'Proprietor of lionshield costor',
            'Halya' : `Runs the miner's exchange. Might know where cragmar castle is `,
            'Darren Edermath' : `Runs an orchard`,
            'Lord Earno GlassStaff' : `Leader of the redbrands, we caught him and he gave us information. Earno, 
            `,
            'black spider' : `drow, connected to glassstaff. Searching for wave echo cave and forge of spells. 
            looking for wave echo cave, `,
            'Harbin, townmaste of phandelin ' : `Was really timid about dealing with the redbrands.`
        }
        , Quests : {
            //'Take care of GlassStaff' : `Kill the leader of the Redbrands -> at the manor most likely `,
        
        
            // done
            'Guard Gundran Rockseeker' : {
                Desc : 'gundran is missing, we ',
                Reward : '10gp upon delivery to place '
            }
            // done
            //'Deliver the Bejeweled Comb' : `Deliver to Phandelin, 10gp/ea, found gundrans cart`
            ,'Deliver comb to banshee' : `banshee is answering question for timeric clerics about 
            a day's trip away "coneyberry" banshee is agatha, 3x potions of healing reward for learning 
            where beaugentle's spellbook is `,
        }
        , Items : {
            'Personal coin' : '10gp',
            'personal treasure' : 'platinum signet 50gp'

            , 'shit' : `Ermon tome: ther was a mace named lightbringer, from the forge of spells, was lost 
            when the mine and cave were lost. 1 bottle mercury, 1 bottle dragon bile, 1 bottle powdered nightshade (25gp/ea)`
            , 'Group Coin' : '52 copper, 83 silver, 478gp'
            , 'Potions' : ``
            , 'Armor' : `Chainmail 2`
            , 'Weapons' : `Longsword 2, Longbow 2, Scimitar 5, Shortbow 6, `
            , 'Tools' : `1 Manacles, Flask Oil 2, TinderBox`
            , 'Art objects' : 'jade frog (50gp)'
            , 'Gems' : '2 garnets (2gp), 5 carnelias (10gp), 2 peridots (15gp), 1 pearl (100gp)'
        }
        , Sessions : {
            1 : `The group met. We helped out a woman, retrieving her kids from some rampant goblins.  We got 
            a quest to drive and guard a wagon of goods to the next town. On the way, we ran into more goblins 
            and found horses with arrows in them. We ended up `
        }
    }

});
